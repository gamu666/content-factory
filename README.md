
## V5 шинэчлэлт
- Admin талд тусдаа **Профайл** цэс нэмэгдсэн.
- Admin өөрийн профайл зураг, овог нэр, утасны дугаараа засаж хадгална.
- Desktop болон mobile admin navigation-д Профайл харагдана.
- Header дээрх admin avatar дээр дарж профайл руу шууд орно.

# Reel Flow v4

Responsive browser-based website for real-estate agents to submit Reel production orders and track production progress.

## Demo login

Agent
- Email: `agent@demo.mn`
- Password: `demo123`

Admin 1
- Email: `admin@demo.mn`
- Password: `admin123`

Admin 2
- Email: `admin2@demo.mn`
- Password: `admin123`

## Run locally on Windows

1. Extract the ZIP.
2. Double-click `serve.bat`.
3. Open `http://localhost:8080` in Chrome/Edge.

If Python is not installed, `index.html` can be opened directly for a basic preview, but using `serve.bat` is recommended.

## v4 design update

- Added a new premium modular visual system inspired by the supplied industrial / futuristic UI references without turning the site into a sci-fi interface.
- Desktop navigation is now a floating dark rounded rail with capsule-like navigation controls.
- Agent dashboard now uses an asymmetric modular layout:
  - large current-production hero module
  - compact production summary module
  - next-shoot module
  - secondary order cards below
- Admin dashboard now has a dark production-control module with stage counters plus separate new-order and next-shoot modules.
- Updated card geometry with large soft corners, varied panel proportions, capsule controls, cleaner spacing and stronger hierarchy.
- Refined forms, profile page, agent identity cards, notifications, tables, shooting rows and detail panels to use the same design language.
- Mobile browser layout remains responsive and uses the same design system in a simplified single-column layout.

## Existing v3 functionality retained

- No Reel package system.
- Separate personal profile photo and organization / branch logo uploads.
- Admin can view and download the organization logo from an agent profile.
- Agent order -> notification to both admins.
- Admin production-status change -> notification to the relevant agent.
- Password confirmation required during registration.
- Agent names in admin order/shoot lists open the agent profile.

## Demo data storage

This local demo uses browser `localStorage`, so no server/database setup is required to test the UI and workflow. It intentionally keeps the existing v3 demo storage key, so when you run v4 on the same `localhost:8080` origin your existing demo changes can remain available.

## Production backend

`supabase-schema.sql` contains the production schema for Supabase Auth, orders, creative briefs, uploads, activity/history, notifications and RLS security.

Before production deployment, connect the front-end to Supabase instead of localStorage and store profile photos/logos in Supabase Storage rather than base64 data URLs.

## V16 production queue
- Agent-ийн захиалгын жагсаалт дээр хэдэн content-ийн дараа боловсруулалт эхлэхийг харуулна.
- Тооцоонд зөвхөн `payment_status = PAID`, `shoot_started_at`-тай, дуусаагүй Reel орно.
- Нэг content-ийн дундаж production хугацааг demo дээр 16 цагаар тооцсон (3 content = ~48 цаг).
- Admin захиалгын detail дээр `Зураг авалт эхэлсэн` checkbox-оор queue-д оруулах боломжтой.


V19: Brand logo is embedded directly in app.js as a data URI, so GitHub Pages does not require the assets folder for the main Content Factory logo.
