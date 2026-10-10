import {PGlite} from '../.qa/node_modules/@electric-sql/pglite/dist/index.js';
import fs from 'node:fs';import assert from 'node:assert/strict';
const db=new PGlite(),A='11111111-1111-4111-8111-111111111111',B='22222222-2222-4222-8222-222222222222';
await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;create schema auth;create table auth.users(id uuid primary key);create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;grant usage on schema auth,public to anon,authenticated,service_role;grant execute on function auth.uid() to anon,authenticated;insert into auth.users values('${A}'),('${B}');`);
await db.exec(fs.readFileSync('supabase/migrations/202610110001_avara.sql','utf8'));
const chunked=process.argv.includes('--sql-editor');
let seedFiles=['supabase/seed.sql'];
if(chunked){
 const manifest=JSON.parse(fs.readFileSync('supabase/sql-editor/manifest.json','utf8'));
 seedFiles=manifest.files.map(file=>{
  const path='supabase/sql-editor/'+file.name,content=fs.readFileSync(path,'utf8');
  assert.equal(Buffer.byteLength(content),file.bytes);assert.ok(file.bytes<=manifest.maxBytes);
  assert.match(content,/\nbegin;\n/);assert.match(content,/\ncommit;\n$/);
  return path;
 });
 const statements=seedFiles.map(path=>fs.readFileSync(path,'utf8').split('\nbegin;\n')[1].replace(/\ncommit;\n$/,'')).join('\n');
 const full=fs.readFileSync('supabase/seed.sql','utf8').split('\nbegin;\n')[1].replace(/\ncommit;\n$/,'');
 assert.equal(statements,full,'Chunked seed must preserve every statement in order');
}
for(let pass=0;pass<2;pass++)for(const path of seedFiles)await db.exec(fs.readFileSync(path,'utf8'));
assert.equal(Number((await db.query('select count(*) as n from avara_photos where is_cover')).rows[0].n),367);
console.log('Validated '+(chunked?seedFiles.length+' SQL Editor batches':'full seed')+' twice');
const dest=(await db.query('select id from avara_destinations limit 1')).rows[0].id;
const dest2=(await db.query('select id from avara_destinations offset 1 limit 1')).rows[0].id;
const role=async(r,u='')=>{await db.exec('reset role');await db.query("select set_config('request.jwt.claim.sub',$1,false)",[u]);await db.exec('set role '+r)};
const denied=async sql=>{await assert.rejects(db.exec(sql),/permission denied|row-level security|foreign key|check constraint/i)};
const tripA='33333333-3333-4333-8333-333333333333',tripB='44444444-4444-4444-8444-444444444444';
await db.exec(`insert into avara_trips(id,user_id) values('${tripA}','${A}'),('${tripB}','${B}');insert into avara_destinations(id,name,region,category) values('private-draft','Hidden','Odisha','Nature');`);
const fixtures={
 avara_profiles:u=>`(user_id,display_name) values('${u}','test')`,
 avara_preferences:u=>`(user_id) values('${u}')`,
 avara_saved_places:u=>`(user_id,destination_id) values('${u}','${dest}')`,
 avara_visits:u=>`(user_id,destination_id,visited_on) values('${u}','${dest}','2026-10-01')`,
 avara_field_notes:u=>`(user_id,destination_id,note) values('${u}','${dest}','private')`,
 avara_yearly_goals:u=>`(user_id,year,place_goal) values('${u}',2026,12)`,
 avara_route_overrides:u=>`(user_id,destination_id,one_way_km) values('${u}','${dest}',100)`,
 avara_trip_stops:u=>`(trip_id,user_id,destination_id,position) values('${u===A?tripA:tripB}','${u}','${dest}',0)`,
 avara_trip_checklist:u=>`(trip_id,user_id,item_key,label) values('${u===A?tripA:tripB}','${u}','helmet','Helmet')`
};
let checks=0;
for(const [table,row]of Object.entries(fixtures)){
 await role('postgres');await db.exec(`insert into ${table} ${row(B)}`);
 await role('anon');for(const sql of [`select * from ${table}`,`insert into ${table} ${row(A)}`,`update ${table} set user_id='${A}'`,`delete from ${table}`]){await denied(sql);checks++}
 await role('authenticated',A);await db.exec(`insert into ${table} ${row(A)}`);assert.equal((await db.query(`select * from ${table}`)).rows.length,1);
 await denied(`update ${table} set user_id='${B}' where user_id='${A}'`);
 assert.equal((await db.query(`update ${table} set user_id=user_id where user_id='${B}' returning user_id`)).rows.length,0);
 assert.equal((await db.query(`delete from ${table} where user_id='${B}' returning user_id`)).rows.length,0);
 await db.exec(`update ${table} set user_id=user_id where user_id='${A}'`);
 assert.equal((await db.query(`delete from ${table} where user_id='${A}' returning user_id`)).rows.length,1);checks+=6;
}
await role('authenticated',A);
assert.equal((await db.query('select * from avara_trips')).rows.length,1);
await denied(`insert into avara_trip_stops(trip_id,user_id,destination_id,position) values('${tripB}','${A}','${dest2}',1)`);
await denied(`insert into avara_trips(user_id,days,nights) values('${A}',1,1)`);
await denied(`insert into avara_preferences(user_id,mileage) values('${A}',0)`);
await denied(`update avara_trips set user_id='${B}' where id='${tripA}'`);
assert.equal((await db.query(`delete from avara_trips where user_id='${B}' returning id`)).rows.length,0);
await db.exec(`update avara_trips set name='My test trip' where id='${tripA}'`);
await db.exec(`insert into avara_trips(user_id,name) values('${A}','Second trip')`);
assert.equal((await db.query(`delete from avara_trips where user_id='${A}' returning id`)).rows.length,2);
await role('anon');assert.equal((await db.query("select * from avara_destinations where id='private-draft'")).rows.length,0);
await denied("insert into avara_destinations(id,name,region,category) values('bad','Bad','Odisha','Nature')");
await role('postgres');assert.equal((await db.query('select count(*)::int as n from avara_destinations where published')).rows[0].n,702);
assert.equal((await db.query("select count(*)::int as n from pg_class where relname like 'avara_%' and relkind='r' and relrowsecurity")).rows[0].n,16);
await db.close();console.log(`Passed migration, seed, ${checks}+ CRUD/RLS checks, cross-owner trip links, hidden drafts, and budget constraints in embedded PostgreSQL.`);
