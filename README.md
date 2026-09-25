# Content Factory V25 — Supabase connected

This build is configured to use the live Supabase project `egadvdhadhalpunxfern`.

## Live backend
- Supabase Auth: email/password registration and login
- PostgreSQL: profiles, orders, creative briefs, activity, notifications
- RLS: agents see only their own private data; admins see operational data
- Realtime: order/status/notification/profile updates
- Storage:
  - avatars (public, max 10MB)
  - org-logos (public, max 10MB)
  - final-videos (private)
- Agent order form: text/details only; no content photo/video/file upload
- Profile photo + organization logo upload remain enabled
- Production queue: only PAID + shoot_started_at + not COMPLETED content
- Queue estimate: 1 content = 8 hours

## GitHub Pages upload
Upload at minimum:
- index.html
- app.js
- styles.css
- config.js

The Content Factory brand logo is embedded in app.js, so no assets folder is required for the header/sidebar logo.

## Admin bootstrap
Public signups become `agent` by default. Create the two real admin accounts through the website first, then promote their profile rows to `admin` from a trusted database action.

Never put a Supabase service-role/secret key in config.js. The publishable key is intentionally used in the browser and is protected by RLS.
