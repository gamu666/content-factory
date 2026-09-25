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


## V26
- Login now accepts either email or an 8-digit Mongolian phone number.
- 8-digit phone login is normalized internally to +976XXXXXXXX for Supabase Auth.
- +97680114941 is reserved by the database trigger to receive admin role when that Auth user is created.


## V27
- Agent order form has no content photo/video/material upload.
- Added cache-busting query strings to styles.css, config.js and app.js for GitHub Pages/browser cache.


## V28
- Public login UI now shows email only; phone/admin number is no longer shown in label or placeholder.
- Existing hidden 8-digit phone login support remains for the private admin account.
- Login error copy now says email/password.
- Cache-busting updated to v28.

## V29
- Removed Supabase phone-password login dependency.
- Agents sign in with email.
- Private admin username 80114941 is translated internally to a hidden Supabase email account.
- Public login UI still does not reveal the admin username.
- Cache-busting updated to v29.

## V30
- Private admin username no longer uses Supabase phone auth.
- Username 80114941 maps internally to owner@contentfactory.mn.
- This avoids the Phone provider dependency entirely.
- Public login UI still does not show the private admin username.
- Cache-busting updated to v30.
