// Reproducible import from Odisha Tourism's public attraction directory.
// Run with network access: node scripts/import-official.cjs
const fs=require('node:fs'),vm=require('node:vm');
const base='https://odishatourism.gov.in';
const key=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
const cityDistricts={Bhubaneswar:'Khordha',Raurkela:'Sundargarh',Sundaragada:'Sundargarh',Nayagada:'Nayagarh',Anugola:'Angul',Paralakhemundi:'Gajapati'};
const districtCorrections={'Dhenkanal Palace':'Dhenkanal','Killa Aali Palace':'Kendrapara','Khandadhar Waterfall':'Sundargarh','Joranda Waterfall':'Mayurbhanj','Daringbadi – Coffee Garden':'Kandhamal','Sitakund Waterfall':'Mayurbhanj','Pentha Beach':'Kendrapara','Kalabhoomi, Odisha Craft Museum':'Khordha','Ananta Basudeva Temple':'Khordha','Regional Museum of Natural History':'Khordha','Odisha State Musuem':'Khordha','Museum of Tribal Arts & Artifacts':'Khordha','Chausathi Yogini Temple, Hirapur':'Khordha','Hanuman Vatika':'Sundargarh','Birsa Munda International Hockey Stadium':'Sundargarh'};
districtCorrections['Killa Dalijoda']='Cuttack';
const overviews={
 'Joranda Waterfall':'A waterfall within the Similipal forest landscape. Plan around the reserve’s access arrangements and confirm the permitted route before travelling.',
 'Kalabhoomi, Odisha Craft Museum':'Explore Odisha’s craft traditions in Bhubaneswar. This is a cultural stop for anyone interested in textiles, handmade objects and local artistic heritage.',
 'Kanhakund: The Grand Canyon Of Odisha':'A river gorge and rocky landscape highlighted by Odisha Tourism. Use designated viewpoints and confirm local approach roads rather than assuming water access.',
 'Gandahati Waterfall':'A waterfall near Paralakhemundi in southern Odisha. Allow time for the local approach and check conditions before leaving for the falls.',
 'Gundicha Ghagi Waterfall':'A waterfall destination in Keonjhar’s landscape. Pair the visit with nearby stops only after checking road distances and current access.',
 'Kataka – Silver Filigree Hub':'Discover Cuttack’s silver filigree craft. Make this a slow local outing focused on artisan work and the city’s living traditions.',
 'Killa Dalijoda':'A heritage property in the Cuttack countryside. Contact the property about visits or overnight stays; do not assume unrestricted public entry.',
 'Bhimkand (Sleeping Vishnu)':'A rock formation associated with a reclining Vishnu figure near Kaniha in Angul. A stop for travellers interested in sacred landscapes and local heritage.',
 'Bhimkund Waterfall':'A rocky waterfall and river landscape on the Keonjhar–Mayurbhanj border. Enjoy the viewpoint and seek local guidance about river conditions.',
 'Bada Ghagara Waterfall':'A waterfall in the Keonjhar region. Build in time for the approach and check which paths and viewpoints are open.',
 'Barehipani Waterfall':'A major waterfall within Similipal. Entry arrangements and the forest journey matter as much as the viewpoint; confirm them through the reserve provider.',
 'Ananta Basudeva Temple':'A historic Vishnu shrine near Bindusagar in Bhubaneswar. Plan a respectful temple visit and check local entry and photography rules.',
 'Biraja Temple':'A major pilgrimage destination in Jajpur. Check current visiting arrangements and respect worshippers during your visit.',
 'Birsa Munda International Hockey Stadium':'Rourkela’s international hockey venue. Access depends on events and management arrangements, so check before planning a stadium visit.',
 'Daringbadi – Coffee Garden':'A plantation-themed stop in Daringbadi’s hills. Ask locally about visitor access, walking areas and seasonal conditions.',
 'Mangalajodi':'A community-led birding destination on Chilika’s wetlands. Arrange a local guide or boat through a responsible operator and minimise disturbance to birds.',
 'Regional Museum of Natural History':'A Bhubaneswar museum focused on natural history and biodiversity. Confirm opening days before fitting it into a city itinerary.',
 'Rambha Palace':'A restored heritage property overlooking Chilika. Visits and accommodation require property confirmation; listed here as a heritage stay idea.',
 'Maniabandha Handloom Village':'A Cuttack district weaving destination known for traditional textiles. Ask permission before photographing artisans or entering workshops.',
 'Sahasra Shivalinga Temple':'A pilgrimage site on Koti Shivalinga Parvat. Confirm the final approach and walking requirements with the official source or a local contact.',
 'Sadeibarani - Dhokra Handicraft Village':'A craft village associated with Dhokra metalwork in Dhenkanal. Visit with an interest in the process and respect working artisans.',
 'Sanaghagara Waterfall':'A waterfall stop in Keonjhar. Check current access and facilities, and keep swimming separate from sightseeing unless locally permitted.',
 'Sitakund Waterfall':'A forest waterfall near Lulung and the Similipal landscape. Confirm the permitted approach and conditions before setting off.',
 'Pentha Beach':'A coastal destination near Bhitarkanika’s mangrove region. Check the approach road and local beach guidance before planning a sunrise or sunset visit.',
 'Puri Blue Flag Beach':'A designated beach experience in Puri. Confirm entry arrangements and use the supervised beach areas available during your visit.',
 'Raghunath Jew Temple':'A Rama shrine at Odagaon in Nayagarh. Check temple access and plan around the worship schedule.',
 'Maa Tarini Temple':'A pilgrimage stop in the Keonjhar region. Confirm visiting arrangements and allow for crowds on important festival days.',
 'Kuldiha Wildlife Sanctuary':'A woodland destination in Odisha’s northern wildlife landscape. Arrange entry and any guided activities through an authorised provider.',
 'Maa Balakumari Temple':'A hilltop pilgrimage destination in Ganjam. Confirm the climb and access arrangements before planning the ride.',
 'Parasurameswar Temple':'A historic temple stop in Bhubaneswar. Use the linked official page for visitor information and confirm local photography rules.',
 'Maa Kalijai Temple':'An island shrine in Chilika reached by boat. Confirm safe boat operations, the departure point and the full return price.',
 'Ram Mandir, Fatehgarh':'A hilltop temple destination at Fatehgarh. Check the final access road and visitor arrangements before departure.',
 'Midhubandha Waterfall':'A waterfall near Daringbadi in the Kandhamal forest landscape. Ask about seasonal conditions and the final walking approach.',
 'Minajhola':'A riverside pilgrimage and nature destination in Rayagada. Check current local access and treat the river as a viewing stop unless advised otherwise.',
 'Museum Of Justice':'A museum stop in Cuttack for travellers interested in legal and civic history. Confirm opening days and entry requirements.',
 'Sonapur Blue Flag Beach':'A coastal beach highlighted by Odisha Tourism. Check the current facilities, beach access and local sea conditions.',
 'Kardola Weavers Village':'A village destination focused on Sambalpuri weaving traditions. Arrange a respectful craft visit rather than expecting every workshop to be open.',
 'Odi-Art Museum':'A folk and tribal art destination at Barkul beside Chilika. Confirm museum access before combining it with lake activities.',
 'Odisha State Musuem':'A Bhubaneswar museum covering Odisha’s history and cultural heritage. A useful city stop with opening hours to confirm.',
 'Odisha State Maritime Museum':'A Cuttack museum exploring maritime heritage. Confirm the opening schedule and allow time for the exhibits.',
 'Niladri Beach':'A beach stop in Puri’s coastal landscape. Check current access and local lifeguard guidance during your visit.',
 'Bhetnoi Blackbuck Habitat':'A Ganjam destination associated with blackbuck conservation. Observe wildlife from a respectful distance and follow local guidance.',
 'Bara Bakhra Caves':'A cave and heritage landscape near Debrigarh. Confirm access and use a local guide where the approach is unfamiliar.',
 'Museum of Tribal Arts & Artifacts':'A Bhubaneswar museum presenting Odisha’s indigenous cultural heritage. Confirm visiting hours and photography permissions.',
 'Chausathi Yogini Temple, Hirapur':'A circular Yogini temple near Bhubaneswar. Plan a respectful heritage visit and check photography and entry guidance.',
 'Killa Aali Palace':'A historic living palace beside the Kharasrota River. Contact the property about visits or stays before adding it to an itinerary.',
 'Hanuman Vatika':'A landscaped religious complex in Rourkela. Check the visiting schedule and allow time to explore respectfully.',
 'Sabara Srikshetra (Jagannath Temple, Koraput)':'A hilltop Jagannath shrine overlooking Koraput. Combine it with the town only after confirming the visiting arrangements.',
 'Maa Samaleswari Temple':'A major shrine beside the Mahanadi in Sambalpur. Confirm access and expect festival days to change the visiting experience.',
 'The Belgadia Palace':'A heritage palace and stay destination in Mayurbhanj. Contact the property for current booking or visit arrangements.',
 'Gajlaxmi Palace':'A heritage property in Dhenkanal’s wooded countryside. Access and overnight stays should be confirmed directly.',
 'Dhenkanal Palace':'A royal heritage stay destination in Dhenkanal. Contact the property about visits, accommodation and current prices.'
};
const aliases={
 'Gopalpur Sea Beach':'Gopalpur-on-Sea Beach',
 'Harisankar Temple':'Harishankar Waterfall & Temple',
 'Dhabaleswar Temple':'Dhabaleswar Island',
 'Devkund Waterfall':'Devkund Sacred Waterfalls',
 'Dhauli Shanti Stupa (Dhauli Hills)':'Dhauli Shanti Stupa',
 'Khiching Temple (Kichakeswari Temple)':'Kichakeswari Black Chlorite Temple',
 'Kolab Dam':'Upper Kolab Dam',
 'Barabati Fort':'Barabati Fort & Stadium Cuttack',
 'Chandaka Wildlife Sanctuary':'Chandaka-Dampara Elephant Sanctuary',
 'Chandipur Beach':'Chandipur Receding Beach',
 'Daringbadi Hill Station':'Daringbadi',
 'Ramachandi Beach':'Ramachandi Temple & Beach',
 'Ratnagiri Monastery':'Ratnagiri Buddhist University',
 'Satkosia Gorge & Tiger Reserve':'Satkosia Tiger Reserve',
 'Similipal National Park':'Simlipal National Park',
 'Lalitagiri Buddhist Complex':'Lalitgiri Relic Casket',
 'Paradip Port & Beach':'Paradip Sea Beach',
 'Ladu Baba Temple':'Sarankul Ladubaba Temple',
 'Leaning Temple of Huma':'Huma Leaning Temple',
 'Puri Beach & Golden Beach':'Puri Beach & Swargadwar',
 'Mahendragiri Hills':'Mahendragiri Peak',
 'Tara Tarini Temple':'Tara Tarini Hilltop Temple',
 'Mukteswara Temple':'Mukteswar Temple & Kedar Gouri',
 'Udayagiri Monastery':'Udayagiri Buddhist Monastery',
 'Tikarpada Wildlife Sanctuary':'Tikarpada Gharial Sanctuary',
 'Neelamadhaba Temple, Kantilo':'Kantilo Nilamadhaba Temple',
 'Raghurajpur Craft Village':'Raghurajpur Heritage Craft Village',
 'Satapada (Chilika)':'Chilika Lake',
 'Khandadhar (Kendujhar)':'Khandadhar Waterfall (Keonjhar)',
 'Netaji Birth Place Museum (Oriya Bazaar Kataka)':'Netaji Birthplace Museum',
 'Mandasaru Valley':'Mandasaru Eco-Valley',
 'Mahimagadi, Joranda':'Joranda Gadi',
 'Puri Sea Beach':'Puri Beach (Golden Beach)', 'Chilika Lake':'Chilika Lake (Satapada)',
 'Deomali Hills':'Deomali Peak', 'Dhauli Peace Pagoda':'Dhauli Shanti Stupa',
 'Padma Sambhava Maha Vihara Monastery, Jirango':'Jirang Monastery',
 'Chausathi Yogini, Ranipur Jharial':'Ranipur Jharial',
 'Ansupa Nature Camp':'Ansupa Freshwater Lake',
 'Netaji Birth Place Museum, Oriya Bazaar, Kataka':'Netaji Birthplace Museum',
 'Nandankanan Zoological Park':'Nandankanan',
 'Bhitarkanika National Park':'Bhitarkanika National Park',
 'Padma Sambhava Maha Vihara Monastery, Jirango':'Jiranga Tibetan Monastery',
 'Chausathi Yogini, Ranipur Jharial':'Ranipur-Jharial 64 Yogini Complex'
};
async function main(){
 const url=base+'/en/tourist-places?delta=200&start=1';
 const html=fs.existsSync('official-directory.html')?fs.readFileSync('official-directory.html','utf8'):await(await fetch(url)).text();
 const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync('js/data/odishaData.js','utf8'),c);
 const old=c.window.ODISHA_DATA.destinations;
 const cards=[...html.matchAll(/PAGE_CARDS\.push\(\{([\s\S]*?)\}\);/g)].map(m=>{
  const read=k=>{const v=m[1].match(new RegExp(k+': "((?:\\\\.|[^"\\\\])*)"'));return v?JSON.parse('"'+v[1].replace(/\\'/g,"'")+'"'):''};
  return {name:read('title'),summary:read('summary').replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').trim(),image:read('thumbnailURL'),url:read('viewURL').split('?')[0]};
 }).filter(d=>d.name);
 const locations=fs.existsSync('data/official-locations.json')?JSON.parse(fs.readFileSync('data/official-locations.json','utf8')):{};
 if(process.argv.includes('--locations')){
  let cursor=0;
  await Promise.all(Array.from({length:3},async()=>{while(cursor<cards.length){const d=cards[cursor++];if(locations[d.url])continue;try{const r=await fetch(d.url,{signal:AbortSignal.timeout(20000)});const t=await r.text();const m=t.match(/!2d(-?\d+\.\d+)!3d(-?\d+\.\d+)/);locations[d.url]=m?{latitude:Number(m[2]),longitude:Number(m[1]),coordinateSource:d.url,coordinateStatus:'official-map-approximate'}:{};}catch(e){console.log('Location unavailable: '+d.name);}}}));
  fs.mkdirSync('data',{recursive:true});fs.writeFileSync('data/official-locations.json',JSON.stringify(locations,null,2));
 }
 const out=[]; const photos={};let matched=0;
 for(const d of cards){
  const target=key(aliases[d.name]||d.name);
  const candidates=old.filter(x=>key(x.name)===target||key(x.name)===key(d.name));
  // Prefix matching only when a unique full place name differs by a suffix.
  if(!candidates.length){const prefix=old.filter(x=>key(x.name).startsWith(target)||target.startsWith(key(x.name)));if(prefix.length===1)candidates.push(prefix[0]);}
  const source={url:d.url,summary:'Listed in the official Odisha Tourism attraction directory. Open the source for its destination overview and current visitor information.',checkedAt:'2026-10-11'};
  const photo={src:new URL(d.image,base).href,source:d.url,label:d.name+' · Odisha Tourism',rights:'Permission not established; remote editorial reference'};
  if(candidates.length){for(const x of candidates)photos[x.id]={photo,source};matched++;continue;}
  const district=districtCorrections[d.name]||c.window.ODISHA_DATA.districts.find(x=>new RegExp('\\b'+x.name+'\\b','i').test(d.summary))?.name||Object.entries(cityDistricts).find(([city])=>new RegExp('\\b'+city+'\\b','i').test(d.summary))?.[1]||(/Kataka/i.test(d.summary)?'Cuttack':/Kendujhar/i.test(d.summary)?'Keonjhar':/Baleshwar/i.test(d.summary)?'Balasore':'Location to review');
  const category=/beach/i.test(d.name)?'Beach':/waterfall|ghagi/i.test(d.name)?'Waterfall':/sanctuary|national park|zoo/i.test(d.name)?'Wildlife':/temple|monastery|yogini|pagoda|mahimagadi/i.test(d.name)?'Temple':/lake|dam|reservoir/i.test(d.name)?'Lake':/hill|peak|valley/i.test(d.name)?'Mountain':/museum|palace|fort|craft|village|cave/i.test(d.name)?'Heritage':'Nature';
  source.summary=overviews[d.name]||source.summary;
  out.push({id:'official-'+new URL(d.url).pathname.split('/').pop(),name:d.name==='Odisha State Musuem'?'Odisha State Museum':d.name,district,category: /filigree|killa/i.test(d.name)||d.name==='Odisha State Musuem'?'Heritage':category,latitude:null,longitude:null,...locations[d.url],description:source.summary,best_season:'Check the official source',recommendedDuration:1,tags:[category,'Official directory'],photo,source});
 }
 fs.writeFileSync('js/data/officialData.js','// Odisha Tourism directory snapshot. Coordinates are intentionally absent until sourced.\nwindow.OFFICIAL_DATA = '+JSON.stringify({retrievedAt:'2026-10-11',directory:url,records:cards.length,photos,destinations:out},null,2)+';\n');
 console.log(JSON.stringify({directoryRecords:cards.length,matched,newPlaces:out.length,photoMappings:Object.keys(photos).length}));
}
main().catch(e=>{console.error(e);process.exitCode=1});
