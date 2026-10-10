# Avara Pro

A cream-and-olive, Odisha-first travel companion built around exploring from Cuttack on a Royal Enfield Classic 350.

## Use locally

```powershell
node scripts/preview.cjs
```

Open http://127.0.0.1:5173. No package installation or build is required. External fonts, Leaflet, OpenStreetMap tiles, and officially sourced remote photographs require internet access; text fallbacks handle failed location photographs.

## What works

- Destination discovery, search, district/category/distance/budget filters, India scope, and a map.
- Destination details with official overview links and explicit information status.
- A saved bucket list, ordered journey stops, driving-route links, and a downloadable itinerary.
- Editable fuel, mileage, speed, road-distance assumptions, food, stay, activity, and contingency budgets.
- A personal passport with dated stamps, field notes, district counts, a yearly goal, and milestones.
- Browser-local persistence with passport backup export/import.
- Desktop and mobile layouts, visible keyboard focus, native dialogs, and reduced-motion support.

## Planning defaults

Cuttack city centre; ₹110/litre petrol; 70 km/h cruising assumption. Mileage starts at **35 km/l as an editable assumption**, not a measured or manufacturer claim. Time includes a 30% buffer. Distances default to geographic calculations, not live road routing. Enter a one-way road distance in destination details or a complete round-trip distance in the journey planner for better estimates.

## Information status

The inherited catalogue contains 105 Odisha and 39 India records. Source discovery and selected official overview summaries were added during the rebuild. The entire catalogue, current tariffs, permits, openings, facilities, and travel conditions have **not** been independently verified. The website does not claim otherwise. There is no live price, traffic, weather, or automatic data-refresh service.

The generated hero artwork is labeled as an illustration. Named place photographs are remote Odisha Tourism references with attribution; reuse rights are not established. Places without sourced photos use explicit placeholders. Personal records stay in the current browser and do not sync between devices or between local and hosted origins. Existing legacy storage is preserved.

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
