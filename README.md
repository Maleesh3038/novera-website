# Novera International — Website, Client Portal & Admin Dashboard

A Next.js 14 (App Router, TypeScript, Tailwind CSS) marketing site, mock-authenticated
client portal, and admin dashboard for Novera International, a Sri Lanka-based study
abroad and visa consultancy.

## ⚠️ Build status — read this first

This project was authored file-by-file in a sandboxed environment whose outbound network
access is restricted to a small allowlist that does **not** include the npm registry
(`registry.npmjs.org`), any CDN mirror (`unpkg`, `jsdelivr`, `esm.sh`), or Google Fonts.
Every attempt to run `npm install` in that environment returned `403 Forbidden` at the
network layer, so **`npm install` and `npm run build` could not actually be executed or
verified here.**

All application code, configuration, and data files are complete and were written to
compile against Next.js 14 / React 18 / TypeScript 5 / Tailwind 3 conventions. The very
next step — in an environment with normal internet access — is:

```bash
npm install
npm run build
```

Please run this and fix anything that surfaces (it is realistic to expect a handful of
minor TypeScript/ESLint nits on a build of this size that a normal dev loop would catch
in seconds but that could not be caught here without a working `tsc`/`next build`).
Likely candidates if something does fail: an unused import, a Tailwind arbitrary class
typo, or a strict-mode type narrowing issue — all straightforward one-line fixes.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # run the production build
```

## What's real vs mocked

### Real (fully functional UI + logic, no backend needed)
- All marketing pages (home, about, Discover/Learn/Belong Eras, all 12 destination
  pages via one data-driven `[country]` route, success stories, resources, contact,
  privacy, terms).
- **Nova AI Eligibility Navigator** (`/nova/navigator`) — real multi-step quiz with
  React state and local scoring logic (no external AI call).
- **Document Checklist Generator** (`/nova/checklist`) — real rule-based
  country/visa-type → checklist mapping, with client-side checkbox state.
- **SOP/Cover Letter Assistant** (`/nova/sop-assistant`) — real client-side template
  assembly into an editable textarea.
- **Visa Outcome Estimator** (`/nova/outcome-estimator`) — real rule-based scoring
  into a probability band, always shown with a human-review disclaimer.
- Client Portal UI: dashboard, live `setInterval`-based countdown widgets, stage
  tracker, document vault (file picker that lists selected filenames client-side),
  destination compare table, community reactions/comments, profile toggles — all
  real interactive UI backed by component/page-local React state.
- Admin dashboard UI: caseload table, lead scoring list, and an approve/edit/reject
  workflow for "auto-drafted updates" — all real UI with client state.

### Mocked / stubbed — needs real backend work before launch
- **Authentication** (`/portal/login`, `/portal/signup`, `src/lib/auth.ts`): a
  `mockLogin`/`mockLogout` helper writes a flag to `localStorage` + a cookie and the
  `(app)` portal layout guards on that flag client-side. **Any email/password
  combination succeeds.** Replace with real auth (NextAuth, a backend session, etc.)
  and move the guard into real middleware/server checks.
- **Nova AI chat** (`/portal/nova`): a scripted keyword-matching responder (see the
  comment in `src/app/portal/(app)/nova/page.tsx`), not a real LLM. Wire it to an
  actual AI backend.
- **Admin data**: all caseload, lead-scoring and draft-update data in
  `src/app/admin/page.tsx` is hardcoded mock data with no backend and no auth gate on
  the `/admin` route itself.
- **Contact form, portal messages, KYC/document uploads**: client-side only — nothing
  is persisted or sent anywhere. File "uploads" just list the selected filename.
- **Payments / real document storage**: not implemented anywhere; would need a real
  storage backend (S3-compatible bucket, etc.) and payment provider if required.
- **next/font/google**: as specified, fonts (Space Grotesk, Inter, IBM Plex Mono) are
  loaded via `next/font/google`, which fetches font files from Google Fonts at build
  time — this requires normal outbound internet access during `npm run build` (this is
  standard Next.js behavior, unrelated to the sandbox restriction above).

## Project structure

- `src/app/` — all routes (App Router). Route groups: `src/app/portal/(app)/` holds
  the auth-gated portal pages sharing one sidebar layout; `/portal/login` and
  `/portal/signup` sit outside that group so they're reachable while logged out.
- `src/components/` — shared UI: `Header`, `Footer`, `Button`/`LinkButton`, `Card`
  styling (via the `.card` utility class), `StatTile`, `SectionHeading`,
  `CountdownCard`, `StageTracker`, `TestimonialCard`, `DestinationCard`, `EraCard`,
  `FlightPath` (SVG flight-path motif), `Logo`.
- `src/data/` — typed, centralized content: `destinations.ts` (all 12 country pages),
  `eras.ts`, `testimonials.ts`, `team.ts`, `site.ts` (contact info, stats, services,
  process steps, journey stages), `checklist.ts` (rule-based checklist data).
- `src/lib/auth.ts` — the mock auth helper described above.

## Design tokens

Brand colors, fonts and component styles (pill buttons, glass header, rounded-2xl
cards, the flight-path SVG motif) are set up in `tailwind.config.ts` and
`src/app/globals.css` per the brand brief — navy/ink/teal/cyan/mist/amber palette,
Space Grotesk for display type, Inter for body copy, IBM Plex Mono for countdown and
stat numerals.

## Routes

Public: `/`, `/about`, `/eras/discover`, `/eras/learn`, `/eras/belong`,
`/destinations`, `/destinations/[country]` (12 countries), `/nova`,
`/nova/navigator`, `/nova/checklist`, `/nova/sop-assistant`,
`/nova/outcome-estimator`, `/success-stories`, `/resources`, `/contact`,
`/privacy`, `/terms`, `/portal/login`, `/portal/signup`.

Client Portal (mock-auth gated): `/portal/dashboard`, `/portal/journey`,
`/portal/nova`, `/portal/destinations`, `/portal/messages`, `/portal/community`,
`/portal/profile`.

Admin (UI only, no auth gate): `/admin`.
