# Avara Pro database

Apply `migrations/202610110001_avara.sql` once through the Supabase SQL Editor or Supabase CLI, then `seed.sql`. Tables are prefixed `avara_` to avoid collisions with unrelated application tables. The migration is transactional and does not replace existing tables.

The catalog models destinations, source provenance, attributed photographs, and dated visitor facts. Unknown fees, coordinates, and image licences remain null or unknown. Sources distinguish official tourism pages from reference articles. The seed publishes the editorial catalogue; publication does not mean verified tariffs or access.

Personal tables model profiles, bike/budget preferences, bucket lists with target years, repeat visits, independent field notes, yearly goals, road distance overrides, multiple trips, ordered stops, and checklists. Milestones and passport statistics should be computed from visits, rather than storing duplicated totals. Trip assumptions can be snapshotted in `avara_trips.assumptions`. Fuel price and mileage are personal inputs, not live telemetry.

Catalog writes are limited to the server-side service role. Anonymous and signed-in clients can read published destinations. Every personal table uses Supabase Auth user IDs, explicit grants, and operation-specific ownership policies. Composite foreign keys prevent one user attaching a stop or checklist item to another user's trip. Keep service-role keys out of browser code.

Suggested connection sequence: add Supabase Auth, upsert a profile and preferences using the authenticated user's ID, offer an explicit browser-passport import, and then read/write the owner tables. The current website continues to use local storage; this migration does not automatically enable cloud sync. Do not silently upload browser notes or replace local backups. Stable destination IDs in the seed match the frontend.

Rebuild seed after catalog edits: `node scripts/build-seed.cjs`.

Official security guidance: https://supabase.com/docs/guides/database/postgres/row-level-security

Validation: install the temporary test runtime with `npm install --prefix .qa @electric-sql/pglite@0.5.8 --no-save --package-lock=false`, then run `node scripts/check-database.mjs`. It runs the migration and seed in a temporary embedded PostgreSQL database, with an Auth stub and two test users. It tests grants, RLS isolation, ownership changes, trip foreign keys, and constraints. This does not substitute for testing the deployment's Auth configuration in a real Supabase project.

Old browser destination IDs resolve through `avara_destination_aliases`. Resolve these before importing old saves or notes. Passport totals should use `count(distinct destination_id)` so repeat visits do not inflate the number of places explored.
