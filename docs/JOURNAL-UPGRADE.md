# Calendar and memory studio

Calendar planning and downloadable passport artwork for Avara Pro.

## Calendar

- Monthly calendar, saved dated trips, attached journey stops, edit dates, remove plans and open a saved journey.
- Download all plans as a standards-based `.ics` file. Dates are all-day entries with an exclusive next-day end date, so the return day is included. Unicode lines are folded by UTF-8 byte length.
- Holiday schedule choices: Odisha government offices; central-government offices in Uttarakhand (labelled reference, not a universal national schedule); the three national holidays.
- Editable weekends: Saturday/Sunday, second/fourth Saturday plus Sunday, or Sunday. Preferences persist in the passport state.
- Suggestions show upcoming breaks of at least three days without assuming additional leave.
- The verified dataset is 2026 only. Other years still support trips and weekends, with an explicit notice that no verified holiday schedule is loaded.

Sources checked 11 October 2026:
- Odisha government notification 42428: https://revenue.odisha.gov.in/sites/default/files/2025-11/42428.pdf (29 Annexure-I entries).
- Amendment: https://revenue.odisha.gov.in/en/news/notification-observe-eid-ul-zuha-holiday-28052026-instead-27052026 — Odisha Eid-ul-Zuha moved to 28 May.
- Central Uttarakhand reference: https://surveyofindia.gov.in/UserFiles/files/List%20of%20Holidays-2026%20%282%29.pdf (17 gazetted holidays). Ram Navami differs between these schedules; dates are kept separate.

## Passport

- Separate progress for 28 states and 8 union territories, clickable region collection, and existing 30-district Odisha collection.
- Leaflet map of visited and saved places. Missing coordinates are explicitly omitted and counted; no imaginary pins.
- Studio templates: explorer's cover, vintage stamp sheet and postcard collage.
- Olive, terracotta or ocean ink; personal title and caption; year and visit selection; square, portrait or story proportions.
- Up to 12 selected stamps, or 6 shown in a collage. Downloads contain selected visits, not every lifetime visit. Empty previews are marked as samples and personal download requires a visit.
- PNG export at 2× resolution: 2160×2160, 2160×2700 or 2160×3840. SVG export is self-contained and editable.
- Personal JPEG, PNG or WebP photos up to 8 MB are resized to a maximum 1200 px edge and stored in IndexedDB on this device. No upload. Missing personal photos use decorative SVG stamp art rather than made-up location photographs.
- Private field notes are excluded from image downloads. Names, visit dates, captions and selected places are visible.
- Calendar plans merge through the existing JSON and manual cloud backup. Personal photos are not included in either backup; keep originals. No additional Supabase migration is needed.

## Validation

Run `node scripts/check.cjs`, `node scripts/check-journal.cjs` and `node scripts/check-cloud.cjs`.

Browser QA covered saved holiday trips, `.ics` download, an actual 2160×2700 PNG download, SVG download, local photo storage and collage exports, plus mobile viewport checks. All nine artwork layout combinations were rendered. Temporary synthetic photos and QA visit/plan records are removed after checks.

Preview: `node scripts/preview.cjs`, then http://127.0.0.1:5173/#calendar or #passport. The Sites source preparer includes the new assets for the later authorized publication.
