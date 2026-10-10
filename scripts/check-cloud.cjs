const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
(async()=>{
 const handlers={},dialog={open:false,innerHTML:'',setAttribute(){},addEventListener(k,f){handlers[k]=f},showModal(){this.open=true},close(){this.open=false}},button={},calls=[];
 let authChange,result={data:[],error:null},restored=null;
 const query={select(){return this},eq(k,v){calls.push(['eq',k,v]);return this},order(){return this},limit(){return Promise.resolve(result)},update(v){calls.push(['update',v]);return this},insert(v){calls.push(['insert',v]);return this},then(resolve){return Promise.resolve(result).then(resolve)}};
 const client={auth:{onAuthStateChange(f){authChange=f},getSession:async()=>({data:{session:null}}),signOut:async()=>({error:null})},from(t){calls.push(['table',t]);return query}};
 const state={saved:['od_konark'],visited:{},notes:{},settings:{fuel:110}};
 const context={window:{supabase:{createClient:()=>client},Avara:{state,restorePassport:d=>{restored=d}}},document:{createElement:t=>t==='dialog'?dialog:button,body:{append(){}},querySelector:()=>({append(){}})},console,Date,JSON};vm.createContext(context);vm.runInContext(fs.readFileSync('js/cloud.js','utf8'),context);await Promise.resolve();
 assert.equal(calls.length,0,'Loading never uploads or reads personal records');authChange('SIGNED_IN',{user:{id:'owner-1',email:'test@example.invalid'}});
 const click=action=>handlers.click({target:{closest:s=>s==='[data-cloud]'?{dataset:{cloud:action}}:null}});
 // Existing row: look-up then atomically update, explicitly scoped to owner.
 result={data:[{id:'backup-1'}],error:null};await click('upload');const payload=calls.find(c=>c[0]==='update')[1];assert.equal(payload.user_id,'owner-1');assert.equal(payload.assumptions.format,'avara-cloud-v1');assert.equal(payload.assumptions.passport.settings.fuel,110);assert.ok(calls.some(c=>c[0]==='eq'&&c[1]==='user_id'&&c[2]==='owner-1'));assert.match(dialog.innerHTML,/Passport saved online/);
 result={data:[{assumptions:payload.assumptions}],error:null};await click('restore');assert.equal(restored.settings.fuel,110);
 result={data:[],error:{message:'Offline'}};await click('upload');assert.match(dialog.innerHTML,/Offline/);assert.equal(state.settings.fuel,110);
 result={data:[],error:null};await click('restore');assert.match(dialog.innerHTML,/No online passport yet/);
 console.log('Passed: explicit-only upload, owner-scoped atomic save, restore, offline errors and empty cloud state.');
})().catch(e=>{console.error(e);process.exitCode=1});
