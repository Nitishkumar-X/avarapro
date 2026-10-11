# Avara Pro

A cream-and-olive, Odisha-first travel companion built around exploring from Cuttack on a Royal Enfield Classic 350.

## Use locally

```powershell
node scripts/preview.cjs
```

Open http://127.0.0.1:5173. No package installation or build is required. External fonts, Leaflet, OpenStreetMap tiles, and officially sourced remote photographs require internet access; text fallbacks handle failed location photographs.

## What works

- 702 destination entries (459 Odisha, 243 elsewhere in India), paginated search, district/category/distance/budget filters, photo-only, visited and unvisited filters, an Odisha / All India segmented switch, unvisited surprise picks, and a map.
- Destination details with official overview links and explicit information status.
- Three-place comparison, quick journey additions, nearby-stop ordering, individual travel legs, driving-route links, and a downloadable itinerary.
- Editable fuel, mileage, speed, road-distance assumptions, food, stay, activity, and contingency budgets.
- A graphical passport with colourful illustrated stamps, stamp search/year/district filters, a district collection quilt, yearly progress ring, visit timeline, yearly bucket lists and milestones.
- Quick dated visit marking on cards; visited entries disappear from Discover but remain in Explore.
- Browser-local persistence with passport backup export/import and optional private Supabase account backups.
- Desktop and mobile layouts, visible keyboard focus, native dialogs, and reduced-motion support.

## Planning defaults

Cuttack city centre; ₹110/litre petrol; 70 km/h cruising assumption. Mileage starts at **35 km/l as an editable assumption**, not a measured or manufacturer claim. Time includes a 30% buffer. Distances default to geographic calculations, not live road routing. Enter a one-way road distance in destination details or a complete round-trip distance in the journey planner for better estimates.

## Information status

The current catalogue contains 459 Odisha and 243 other India entries. The official government list of 378 centres added 304 entries after matching 74 to the existing catalogue; 204 new India reference entries come from exact Wikipedia articles. The official Odisha Tourism directory contributed 111 source-linked records, including 53 additional attractions. Three repeated inherited entries are consolidated without losing passport data. See `CATALOGUE-SOURCES.md` for coverage and import instructions. Current tariffs, permits, openings, facilities, and travel conditions have **not** been independently verified. There is no live price, traffic, weather, or automatic data-refresh service.

Discover only recommends unvisited entries; its real place hero and editorial photographs also move on when their destination is visited. Destination photos come from Odisha Tourism and Wikipedia/Wikimedia, with exact subjects and attribution links. Reuse rights are not assumed. Places without sourced photos use explicit placeholders. Personal records stay in the current browser until explicitly saved online through My account. Account backup/restore is manual; local and hosted origins keep separate local data. Existing legacy storage is preserved.

Supabase SQL migration, catalogue seed, and setup notes are in `supabase/`. The schema is already applied in the connected project. After this catalogue expansion, run the numbered files in `supabase/sql-editor/` in SQL Editor (see its README); do not rerun the initial migration. My account provides email/password Auth and explicit owner-protected cloud backups.

## Validation

```powershell
node --check js/avara.js
node scripts/check.cjs
```

Browser QA covered search, map tiles, budget overrides, itinerary creation, notes, passport stamps, reload persistence, and a 390px phone layout. Temporary QA records were cleared through the interface.

## Files

- `index.html`, `css/avara.css`, `js/avara.js`: current experience.
- `assets/avara-journey.png`: original generated travel artwork.
- `DESIGN-NOTES.md`: reference interpretation, formulas, provenance, and verification.
- `WEBSITE-AUDIT.md`: initial audit.
- `legacy-index.html`: previous entry point. The older JavaScript and styling are retained for reference.
- `avara-site/.openai/hosting.json`: registered private Site identity; preserve its project ID.
- `scripts/prepare-site.cjs`: prepares the static hosted source and deployment directory from the current root implementation.

Source synchronization and deployment use the Sites plugin workflow; credentials are not stored in this project.

Supabase is connected for optional manual passport backup through **My account**. See `supabase/README.md` for project setup, email confirmation and storage behavior. The app does not upload personal data automatically.

Calendar and downloadable passport artwork: see [docs/JOURNAL-UPGRADE.md](docs/JOURNAL-UPGRADE.md).
