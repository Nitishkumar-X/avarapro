# Avara Pro catalogue — 11 October 2026

194 destination entries: 155 Odisha entries and 39 India entries. The catalogue includes some compound destination ideas inherited from the original project. It is not an exhaustive list of places on the internet.

The official Odisha Tourism attraction directory supplied 111 records. 58 matched existing entries and 53 added new attraction entries. Three repeated inherited cards were consolidated using canonical IDs. Passport data and old backup IDs migrate through `js/data/catalogueConfig.js`.

Directory: https://odishatourism.gov.in/en/tourist-places?delta=200&start=1

`scripts/import-official.cjs` parses the directory into `js/data/officialData.js`. `--locations` discovers mapped coordinates from official destination pages and caches them in `data/official-locations.json`. Those coordinates are explicitly approximate: map viewport centres are not independently surveyed entrance pins. Re-running without `--locations` uses the cache. Place districts are normalised; unresolved districts stay “Location to review”. Overview copy is rewritten as brief editorial guidance. Visitor fees, permits, facilities and opening times are not inferred from these coordinates.

`scripts/import-india-photos.cjs` retrieved 16 real, article-associated Wikimedia image links for inherited India destinations. Each photo identifies its exact subject; a photo of one attraction within a compound destination is not claimed to depict all its stops. Missing images stay explicit placeholders. External assets may become unavailable, and the UI provides fallback artwork for failed location images.

Photo metadata links to the original publisher. This dataset does not claim cleared reuse rights for all photographs. Wikimedia creators and licences should be reviewed at the linked file page before copying images into a commercial asset library. Official tourism images are currently remote editorial references.

All trip distances are geographic planning estimates from Cuttack unless the user supplies a road distance. The initial petrol price is ₹110/litre, mileage 35 km/l, cruising speed 70 km/h, and time buffer 30%. These are editable inputs, not live rates or measured vehicle performance. No live routing, weather or entry-price API is connected.

Supabase migration and seed are under `supabase/`. Browser-local saved places and notes are never included in the published source or seed. Cloud accounts and sync are a separate integration step.
