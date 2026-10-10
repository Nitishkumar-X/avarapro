# Avara Pro catalogue — 11 October 2026

702 catalogue entries: 459 Odisha and 243 elsewhere in India. The catalogue includes some compound destination ideas inherited from the original project. It is not an exhaustive list of places on the internet.

The official Odisha Tourism attraction directory supplied 111 records. 58 matched existing entries and 53 added new attraction entries. Three repeated inherited cards were consolidated using canonical IDs. Passport data and old backup IDs migrate through `js/data/catalogueConfig.js`.

Directory: https://odishatourism.gov.in/en/tourist-places?delta=200&start=1

`scripts/import-official.cjs` parses the directory into `js/data/officialData.js`. `--locations` discovers mapped coordinates from official destination pages and caches them in `data/official-locations.json`. Those coordinates are explicitly approximate: map viewport centres are not independently surveyed entrance pins. Re-running without `--locations` uses the cache. Place districts are normalised; unresolved districts stay “Location to review”. Overview copy is rewritten as brief editorial guidance. Visitor fees, permits, facilities and opening times are not inferred from these coordinates.

`scripts/import-india-photos.cjs` retrieved 16 real, article-associated Wikimedia image links for inherited India destinations. Each photo identifies its exact subject; a photo of one attraction within a compound destination is not claimed to depict all its stops. Missing images stay explicit placeholders. External assets may become unavailable, and the UI provides fallback artwork for failed location images.

Photo metadata links to the original publisher. This dataset does not claim cleared reuse rights for all photographs. Wikimedia creators and licences should be reviewed at the linked file page before copying images into a commercial asset library. Official tourism images are currently remote editorial references.

All trip distances are geographic planning estimates from Cuttack unless the user supplies a road distance. The initial petrol price is ₹110/litre, mileage 35 km/l, cruising speed 70 km/h, and time buffer 30%. These are editable inputs, not live rates or measured vehicle performance. No live routing, weather or entry-price API is connected.

Supabase migration and seed are under `supabase/`. Browser-local saved places and notes are never included in the published source or seed. My account connects Supabase Auth with explicit manual cloud backup and restore; the catalogue uses a bundled static snapshot.

## Expansion on 11 October 2026

Official directory: https://dot.odisha.gov.in/sites/default/files/2025-08/Identified%20Tourist%20Centre%20in%20Odisha%20%28378%29_0.pdf (378 centres, dated February 2025). The directory establishes named places, classifications and districts. 373 rows were extracted from the PDF table; five wrapped rows were transcribed into data/official-centre-wrapped-rows.json. 74 directory names matched existing entries; 304 additional entries were added. Some source-listed centres contain multiple shrines or attractions; entries are not a count of unique physical entrance points.

204 new India entries use exact Wikipedia article subjects. Each retains its article source; coordinates are reference coordinates needing review, not surveyed entrances or road routing. Six unresolved article subjects were skipped. The catalogue spans all 28 states and eight union territories when Odisha is included.

406 entries have sourced photographs. The expansion added article thumbnails and 41 additional Odisha subject photos. These are real article-associated images, with subject and source links; they are not generated destination pictures. Places with no suitable image retain placeholders. Images remain remote and may fail to load. SVG passport motifs are decorative illustrations, not photographs or official immigration stamps.

To reproduce the expansion, extract the government PDF as layout text to .qa/odisha-centres.txt (Python pypdf), run node scripts/expand-catalogue.cjs, then node scripts/enrich-centres.cjs and node scripts/build-seed.cjs. These importers need network access; review source matches before publishing. No automatic source refresh is claimed.
