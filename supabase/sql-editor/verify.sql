-- Run after every numbered seed file has succeeded.
select count(*) as published_destinations,
       count(*) filter (where region = 'Odisha') as odisha_destinations
from public.avara_destinations where published;

select count(*) as cover_photos from public.avara_photos where is_cover;
-- Expected catalogue: 702 destinations, 459 Odisha entries, 406 cover photos.
