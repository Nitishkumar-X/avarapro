# Avara Pro: design and product decisions

## Reference interpretation

The property landing-page reference supplies warm cream, deep olive, generous space, fine editorial headings, and a quiet premium tone. Exploration Hub supplies rounded panoramic imagery, soft pill controls, compact functional overlays, and a feeling of discovery. The travel agency reference supplies a clear sequence from inspiration into destinations and practical exploration. These are visual references, not copied layouts or instructions.

The resulting identity is Avara Pro: cream `#f5f3e9`, olive `#596541`, dark ink `#292f23`, Italiana display type, and DM Sans interface type. There is one visual system, four main navigation items, visible keyboard focus, native destination dialogs, and reduced-motion support. No custom cursor or forced audio is used.

## Personal planning defaults

- Base: Cuttack city centre, 20.4625 N / 85.8828 E.
- Motorcycle: Royal Enfield Classic 350.
- Petrol: ₹110/litre, supplied by the user as a planning assumption.
- Cruising speed: 70 km/h, supplied by the user.
- Mileage: 35 km/l, an editable initial assumption rather than a manufacturer or measured claim.
- Time allowance: 30% added to calculated riding time. Sightseeing is separate.
- Geographic distance factor: 1.35. This is a rough straight-line conversion, not navigation.
- All estimates are editable; an individual destination accepts a one-way road-distance override. Multi-stop plans accept a total round-trip override and explicitly state that per-place overrides are not used for multiple stops.
- Food ₹450/person/day, stay ₹1,200/person/night, activities ₹300/stop, contingency 15% are user-editable planning allowances.

## Data and photography

The inherited datasets contain 105 Odisha and 39 India records. IDs and coordinate presence were checked, but the catalogue is not certified as factually complete. No inherited VERIFIED badges or load-time verification dates are exposed. Current fees are not shown as confirmed tariffs. Official overview links distinguish source discovery from tariff/access checks.

The home illustration was generated specifically for this project and is labeled as AI artwork, not a real destination photograph. It is stored at `assets/avara-journey.png`.

Remote location photo references were discovered from these official pages on 10 October 2026:

- Konark, Puri beach, Chandrabhaga, Ramachandi, and Astaranga: https://odishatourism.gov.in/w/konark-sun-temple
- Deomali: https://odishatourism.gov.in/en/places/deomali-hills
- Chilika and Bhitarkanika: https://odishatourism.gov.in/en/east-odisha
- Similipal overview and camp links: https://www.ecotourodisha.com/destination/similipal-nature-camps

The images remain remote editorial references with provider attribution in destination details. Image reuse rights are not established. A named destination never silently receives a different place's stock photo: records without sourced images show an explicit placeholder. Broken remote images receive a text fallback.

## Personal data

Saved places, itinerary order, visit dates, notes, checklist, goals, and ride settings use the new `avara-pro-v1` localStorage key. Existing legacy storage remains intact. There is no account, cloud synchronization, guide booking service, or background refresh. Passport export/import lets users carry their memories to a new browser; imported unknown IDs and invalid dates are skipped. Import merges memories and preserves current ride settings.

## Validation

`node scripts/check.cjs` verifies catalogue counts and unique IDs, coordinates, haversine calculations (including zero coordinates), fuel/time formulas, an empty journey, manual road distance, and multiple-stop cost totals. `node --check js/avara.js` validates syntax.

Browser QA covered desktop and 390px phone layouts, destination search, actual map tile rendering, trip creation, a 120 km one-way override (₹754 return fuel at the default assumptions), field-note saving, stamping, and persistence after reload. Temporary QA memories were removed through the interface. No runtime warnings/errors were reported during the exercised journey.

## Deployment layout

The local root remains the editable implementation. `legacy-index.html` preserves the previous entry point and old implementation files remain available. `scripts/prepare-site.cjs` copies only the current application files into `avara-site/` and its deployable `dist/`, preserving the registered Site ID. Personal browser data and old photography collections are not copied into the hosting source.
