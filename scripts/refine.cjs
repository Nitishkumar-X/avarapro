const fs=require('node:fs');const file='js/avara.js';let s=fs.readFileSync(file,'utf8');
s=s.replaceAll("'2026-10-10'",'TODAY').replaceAll('max="2026-10-10"','max="${TODAY}"');
s=s.replace("state.tripConfig={days:Number(f.get('days')),nights:Number(f.get('nights')),km:Number(f.get('km'))};if(state.tripConfig.nights>=state.tripConfig.days){toast('Use fewer nights than days.');return}save();render();", "const nextConfig={days:Number(f.get('days')),nights:Number(f.get('nights')),km:Number(f.get('km'))};if(nextConfig.nights>=nextConfig.days){toast('Use fewer nights than days.');return}state.tripConfig=nextConfig;save();render();");
s=s.replace("Catalogue fee note: ${esc(d.entry_fee||'Not confirmed.')}","Current entry fee: not independently confirmed.");
s=s.replace("${state.tripConfig.km?'Your entered road distance.':'Geographic route estimate, not road routing.'}","${state.tripConfig.km||(state.trip.length===1&&state.routeOverrides[state.trip[0]])?'Your entered road distance.':'Geographic route estimate, not road routing.'}");
fs.writeFileSync(file,s);
