-- Avara Pro, PostgreSQL / Supabase. Apply once to a fresh project.
-- Stable text destination IDs preserve browser passport migrations.
begin;

create table public.avara_destinations (
 id text primary key,
 name text not null check (length(name) between 1 and 250),
 country text not null default 'India', region text not null,
 district text, category text not null, description text not null default '',
 latitude double precision check (latitude between -90 and 90),
 longitude double precision check (longitude between -180 and 180),
 coordinate_status text not null default 'needs_review'
   check (coordinate_status in ('needs_review','official-map-approximate','reviewed')),
 season_note text, suggested_days numeric(4,1) check (suggested_days > 0),
 tags text[] not null default '{}', published boolean not null default false,
 review_status text not null default 'needs_review'
   check (review_status in ('needs_review','source_linked','reviewed')),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 search_document tsvector generated always as
   (to_tsvector('simple', name || ' ' || coalesce(district,'') || ' ' || category)) stored,
 check ((latitude is null) = (longitude is null))
);
create index avara_destination_search on public.avara_destinations using gin(search_document);
create index avara_destination_region_category on public.avara_destinations(region,category) where published;
create index avara_destination_coordinates on public.avara_destinations(latitude,longitude) where published;
create table public.avara_destination_aliases (
 alias_id text primary key,
 destination_id text not null references public.avara_destinations on delete cascade,
 check(alias_id <> destination_id)
);

create table public.avara_sources (
 id text primary key, url text not null unique check (url ~ '^https://'),
 publisher text not null, retrieved_at timestamptz not null,
 source_kind text not null check (source_kind in ('official','reference')),
 created_at timestamptz not null default now()
);
create table public.avara_destination_sources (
 destination_id text not null references public.avara_destinations on delete cascade,
 source_id text not null references public.avara_sources on delete cascade,
 claim_scope text not null default 'overview', note text,
 primary key(destination_id,source_id,claim_scope)
);
create table public.avara_photos (
 id text primary key, destination_id text not null references public.avara_destinations on delete cascade,
 source_id text references public.avara_sources,
 image_url text not null check(image_url ~ '^https://'),
 subject text not null, alt_text text not null, attribution text not null,
 creator text, license_name text, license_url text,
 rights_status text not null default 'unknown'
   check (rights_status in ('unknown','licensed','permission_granted')),
 is_cover boolean not null default false, sort_order integer not null default 0,
 created_at timestamptz not null default now()
);
create unique index avara_one_cover on public.avara_photos(destination_id) where is_cover;
create index avara_photo_destination on public.avara_photos(destination_id);
create table public.avara_visitor_facts (
 id uuid primary key default gen_random_uuid(),
 destination_id text not null references public.avara_destinations on delete cascade,
 source_id text not null references public.avara_sources,
 fact_kind text not null check(fact_kind in ('hours','entry_fee','permit','closure','access','facilities')),
 note text not null, amount_inr numeric(12,2) check(amount_inr >= 0),
 valid_from date, valid_until date, checked_at timestamptz not null,
 check(valid_until is null or valid_from is null or valid_until >= valid_from)
);
create index avara_fact_destination on public.avara_visitor_facts(destination_id,fact_kind);

create table public.avara_profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 display_name text check(length(display_name) <= 100),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.avara_preferences (
 user_id uuid primary key references auth.users(id) on delete cascade,
 origin_name text not null default 'Cuttack, Odisha',
 origin_latitude double precision not null default 20.4625 check(origin_latitude between -90 and 90),
 origin_longitude double precision not null default 85.8828 check(origin_longitude between -180 and 180),
 bike text not null default 'Royal Enfield Classic 350',
 fuel_price numeric(8,2) not null default 110 check(fuel_price between 1 and 500),
 mileage numeric(6,2) not null default 35 check(mileage between 5 and 100),
 cruising_speed numeric(6,2) not null default 70 check(cruising_speed between 10 and 120),
 road_factor numeric(4,2) not null default 1.35 check(road_factor between 1 and 3),
 time_buffer_percent numeric(6,2) not null default 30 check(time_buffer_percent between 0 and 200),
 food_per_day numeric(12,2) not null default 450 check(food_per_day >= 0),
 stay_per_night numeric(12,2) not null default 1200 check(stay_per_night >= 0),
 activities_per_stop numeric(12,2) not null default 300 check(activities_per_stop >= 0),
 contingency_percent numeric(6,2) not null default 15 check(contingency_percent between 0 and 100),
 updated_at timestamptz not null default now()
);
create table public.avara_saved_places (
 user_id uuid not null references auth.users(id) on delete cascade,
 destination_id text not null references public.avara_destinations,
 target_year integer check(target_year between 2000 and 2100),
 created_at timestamptz not null default now(),
 primary key(user_id,destination_id)
);
create table public.avara_visits (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 destination_id text not null references public.avara_destinations,
 visited_on date not null check(visited_on >= date '1900-01-01'),
 note text not null default '' check(length(note) <= 5000),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 unique(user_id,destination_id,visited_on)
);
create index avara_visits_user_date on public.avara_visits(user_id,visited_on desc);
create table public.avara_field_notes (
 user_id uuid not null references auth.users(id) on delete cascade,
 destination_id text not null references public.avara_destinations,
 note text not null default '' check(length(note) <= 5000),
 updated_at timestamptz not null default now(), primary key(user_id,destination_id)
);
create table public.avara_yearly_goals (
 user_id uuid not null references auth.users(id) on delete cascade,
 year integer not null check(year between 2000 and 2100),
 place_goal integer not null check(place_goal between 1 and 500),
 updated_at timestamptz not null default now(), primary key(user_id,year)
);
create table public.avara_route_overrides (
 user_id uuid not null references auth.users(id) on delete cascade,
 destination_id text not null references public.avara_destinations,
 one_way_km numeric(10,2) not null check(one_way_km between 1 and 10000),
 provider_note text, updated_at timestamptz not null default now(), primary key(user_id,destination_id)
);
create table public.avara_trips (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 name text not null default 'My next journey' check(length(name) between 1 and 200),
 status text not null default 'draft' check(status in ('draft','planned','completed')),
 departure_date date, days integer not null default 1 check(days between 1 and 60),
 nights integer not null default 0 check(nights between 0 and 59),
 total_road_km numeric(10,2) check(total_road_km between 0 and 30000),
 assumptions jsonb not null default '{}' check(jsonb_typeof(assumptions) = 'object'),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 unique(id,user_id), check(nights < days)
);
create index avara_trips_user on public.avara_trips(user_id,updated_at desc);
create table public.avara_trip_stops (
 id uuid primary key default gen_random_uuid(),
 trip_id uuid not null, user_id uuid not null,
 destination_id text not null references public.avara_destinations,
 position integer not null check(position >= 0), note text not null default '',
 foreign key(trip_id,user_id) references public.avara_trips(id,user_id) on delete cascade,
 unique(trip_id,position) deferrable initially deferred,
 unique(trip_id,destination_id)
);
create index avara_trip_stops_user on public.avara_trip_stops(user_id);
create table public.avara_trip_checklist (
 trip_id uuid not null, user_id uuid not null, item_key text not null,
 label text not null, completed boolean not null default false,
 foreign key(trip_id,user_id) references public.avara_trips(id,user_id) on delete cascade,
 primary key(trip_id,item_key)
);
create index avara_trip_checklist_user on public.avara_trip_checklist(user_id);

-- Server-managed catalog. Explicitly revoke Supabase default write grants.
do $$ declare t text; begin
 foreach t in array array['avara_destinations','avara_destination_aliases','avara_sources','avara_destination_sources','avara_photos','avara_visitor_facts'] loop
  execute format('alter table public.%I enable row level security',t);
  execute format('revoke all on public.%I from anon, authenticated',t);
  execute format('grant select on public.%I to anon, authenticated',t);
  execute format('grant all on public.%I to service_role',t);
 end loop;
end $$;
create policy avara_catalog_read on public.avara_destinations for select to anon,authenticated using(published);
create policy avara_alias_read on public.avara_destination_aliases for select to anon,authenticated
 using(exists(select 1 from public.avara_destinations d where d.id=destination_id and d.published));
-- Source URLs contain no secrets; all imported sources are public records.
create policy avara_source_read on public.avara_sources for select to anon,authenticated using(true);
create policy avara_link_read on public.avara_destination_sources for select to anon,authenticated
 using(exists(select 1 from public.avara_destinations d where d.id=destination_id and d.published));
create policy avara_photo_read on public.avara_photos for select to anon,authenticated
 using(exists(select 1 from public.avara_destinations d where d.id=destination_id and d.published));
create policy avara_fact_read on public.avara_visitor_facts for select to anon,authenticated
 using(exists(select 1 from public.avara_destinations d where d.id=destination_id and d.published));

-- Each owner table gets separate SELECT / INSERT / UPDATE / DELETE policies.
do $$ declare t text; begin
 foreach t in array array['avara_profiles','avara_preferences','avara_saved_places','avara_visits','avara_field_notes','avara_yearly_goals','avara_route_overrides','avara_trips','avara_trip_stops','avara_trip_checklist'] loop
  execute format('alter table public.%I enable row level security',t);
  execute format('revoke all on public.%I from anon, authenticated',t);
  execute format('grant select,insert,update,delete on public.%I to authenticated',t);
  execute format('grant all on public.%I to service_role',t);
  execute format('create policy owner_read on public.%I for select to authenticated using ((select auth.uid()) = user_id)',t);
  execute format('create policy owner_insert on public.%I for insert to authenticated with check ((select auth.uid()) = user_id)',t);
  execute format('create policy owner_update on public.%I for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)',t);
  execute format('create policy owner_delete on public.%I for delete to authenticated using ((select auth.uid()) = user_id)',t);
 end loop;
end $$;

create function public.avara_touch_updated_at() returns trigger language plpgsql
 set search_path = '' as $$ begin new.updated_at=now();return new;end $$;
revoke all on function public.avara_touch_updated_at() from public,anon,authenticated;
do $$ declare t text; begin
 foreach t in array array['avara_destinations','avara_profiles','avara_preferences','avara_visits','avara_field_notes','avara_yearly_goals','avara_route_overrides','avara_trips'] loop
  execute format('create trigger avara_updated_at before update on public.%I for each row execute function public.avara_touch_updated_at()',t);
 end loop;
end $$;
commit;
