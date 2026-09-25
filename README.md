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
- Public login UI still does not reveal the admin username.
- Cache-busting updated to v29.

## V30
- Private admin username no longer uses Supabase phone auth.
- This avoids the Phone provider dependency entirely.
- Public login UI still does not show the private admin username.
- Cache-busting updated to v30.


## V31
- Unified agent/admin profile media layout.
- Profile image preview box and upload button now use exactly the same width.
- Organization logo preview and upload button also use exactly the same width.
- Admin profile now uses the same visual system and spacing as the agent profile.
- Mobile proportions remain matched.
## V32
- Removed personal names, phone numbers, email addresses, and real-business names from example placeholders.
- Added Forgot password flow using Supabase recovery email.
- Added Reset password page for recovery links.
- Added Change password section to both agent and admin profiles.
- GitHub Pages recovery redirect uses the current deployed path with `?reset=1`.
- Cache-busting updated to v32.

## V33
- Admin dashboard workflow KPI cards are clickable.
- Each stage opens the admin order list filtered to that exact production status.
- Added filter chips with live counts on the admin orders page.
- Agents can request a revision from a completed video.
- Revision request moves the order to REVISION, appears in activity, and notifies admins.
- Admin order detail highlights the latest agent revision request.
- Cache-busting updated to v33.

## V34
- Completed agent orders no longer hide the delivery area when the final video link is missing.
- Agent sees a clear “Бичлэгийн линк хараахан оруулаагүй байна” state.
- Completed cards show whether the video link is ready or still waiting.
- Admin “Final delivery / Final video URL” is now Mongolian: “Бэлэн болсон бичлэг / Бичлэгийн линк”.
- Admin cannot mark an order Completed without entering a final video link.
- Database also rejects future Completed orders without a final video link.
- Cache-busting updated to v34.

## V35
- Profile-ийн зүүн талын “Профайл зураг” болон “Байгууллагын лого” card-уудыг desktop дээр 224px өргөнтэй compact болгосон.
- Баруун талын “Хувийн мэдээлэл” болон “Байгууллагын мэдээлэл” card-уудын хэмжээг хэвээр үлдээсэн.
- Preview болон upload button нь хоорондоо яг ижил өргөнтэй хэвээр.
- Avatar preview, logo preview, padding, button height-уудыг proportional багасгасан.
- Cache-busting updated to v35.

## V36
- “Нууц үгээ мартсан уу?” link-ийг login button-ийн доороос авч, нууц үгийн input-ийн яг доор баруун талд байрлуулсан.
- Бүртгүүлэх / Нэвтрэх footer-тай давхцахаа больсон.
- Mobile/desktop дээр ижил байрлалтай.
- Cache-busting updated to v36.
