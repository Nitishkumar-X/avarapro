# Travel explorer rebuild: initial source audit

Reviewed 10 October 2026. This is a source-code audit, not a browser or factual certification of the existing catalogue. Visual implementation is pending the user's reference templates.

## Product direction

Build an Odisha-first travel discovery and planning product that helps a person answer: Where can I go, how do I get there, what will it cost, when should I visit, and what do I need to know before leaving?

Working name: **Roam Pro**. Final name and visual direction can follow the references. India should remain a secondary scope; Odisha deserves the deepest content.

## Existing implementation

- Root `index.html` is the active entry point, with global JavaScript view objects, a localStorage store, Leaflet, runtime Tailwind, and two overlapping CSS files.
- `V2/` is a separate older implementation. `scratch/` contains dataset construction fragments; neither is loaded by the root page.
- The root page loads Odisha, India, global, activities, holiday, itinerary, cost, and expedition datasets.
- Existing reusable concepts include destination filters, maps, saved places, trip planning, checklists, and journals. These need behavioral validation before reuse.
- Branding varies between NATUREX, ANTARA, and Wayfarer. The navigation exposes eleven views and competes with the core discovery task.

## Issues to resolve

1. **Trust and provenance:** dataset comments list official organizations, but that does not establish verification of individual fees, rules, or travel advice. The store creates some verification timestamps with `new Date()` at initialization. Loading the app must never imply a new research check.
2. **Budget accuracy:** the road calculation multiplies straight-line distance by 1.25. Fuel uses a fixed petrol price. These are assumptions, not route distances or current quotes. Show the methodology, origin, round-trip basis, travelers, transport, accommodation, food, tickets, and contingency separately.
3. **Unsupported service claims:** expedition data includes named guides, credentials, ratings, and impact statistics without evidence. The consultation handler displays a successful connection notification without a real service integration. Remove unsupported claims and replace with sourced official contacts where available.
4. **Place photography:** assets are assigned by category and reused as destination imagery. A beautiful forest photo does not establish that it depicts Similipal. Use identifiable location photographs with source, author, license, and attribution records; label illustrative imagery.
5. **Visual coherence:** multiple theme systems, large navigation, cinematic effects, cursor effects, and decorative modules need to give way to a consistent hierarchy built around discovery and planning. Evaluate contrast, motion, keyboard operation, and mobile layouts during the rebuild.
6. **Persistence and maintenance:** the current app is a static catalogue with browser-local personal state. There is no established live research or scheduled data refresh pipeline. A first release can use an explicitly dated editorial dataset; automatic updates require a separate working ingestion and review process.

## Proposed product structure

- Discover: destination photography, clear search, and useful starting points such as day trips, coast, heritage, wildlife, and highlands.
- Explore: filter by district, interest, duration, budget, and distance from a chosen origin; synchronized list/map view.
- Destination detail: real photos, highlights, location, route link, recommended season, fees, opening information, access restrictions, facilities, and sources with actual checked dates.
- Plan: saved destinations, editable itinerary, and a transparent cost breakdown.
- My places: browser-local wishlist and visited places, with clear persistence behavior.

## Data contract for the rebuild

Each destination should carry a stable ID, location, district, categories, coordinates, descriptive content, travel options, seasonal notes, duration, and photography attribution. Variable information should carry a supporting URL, checked date, confidence/status, and relevant applicability. Unknown values stay unknown. Estimates are labeled and include their inputs. Official booking links lead to the actual provider.

Prioritize a smaller, reliable Odisha collection over unsupported claims of comprehensive coverage. Separate durable facts from prices, opening hours, access rules, closures, and event dates that require rechecking.

## Initial source discovery

These sources were located on 10 October 2026. This discovery does not certify existing destination records or grant image reuse rights.

- Odisha Tourism: https://odishatourism.gov.in/en/Home/
- Konark destination page: https://odishatourism.gov.in/w/konark-sun-temple
- East Odisha overview: https://odishatourism.gov.in/en/east-odisha
- Government wildlife ecotourism destination directory: https://www.ecotourodisha.com/destination/
- Similipal nature camps: https://www.ecotourodisha.com/destination/similipal-nature-camps

## Next step

Analyze the supplied templates for typography, colors, spacing, navigation, photography treatment, and interactions. Use that analysis to establish one design system, then rebuild the root experience and validate the core discovery-to-plan journey on desktop and mobile. No website redesign or deployment was performed during this initial audit.
