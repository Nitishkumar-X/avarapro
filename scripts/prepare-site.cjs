const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),target=path.join(root,'avara-site');
const source=['index.html','css/avara.css','js/avara.js','js/cloud.js','js/vendor/supabase.js','js/data/officialData.js','js/data/catalogueConfig.js','js/data/indiaPhotos.js','js/data/odishaData.js','js/data/indiaData.js'];
for(const relative of source){for(const prefix of ['', 'dist']){const out=path.join(target,prefix,relative);fs.mkdirSync(path.dirname(out),{recursive:true});fs.copyFileSync(path.join(root,relative),out)}}
const manifestPath=path.join(target,'.openai','hosting.json');const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));manifest.static={directory:'dist'};const tmp=manifestPath+'.tmp';fs.writeFileSync(tmp,JSON.stringify(manifest,null,2)+'\n');fs.renameSync(tmp,manifestPath);
fs.writeFileSync(path.join(target,'.gitignore'),'dist/\n.sites-runtime/\nnode_modules/\n*.tar.gz\n');
fs.writeFileSync(path.join(target,'README.md'),'# Avara Pro\n\nBuildless static travel explorer. Source files are at the root; `dist/` contains the matching deployable files. Personal data is browser-local with optional explicit Supabase account backup and is never included in source or deployment archives.\n');
console.log('Prepared Avara Pro source and static deployment directory.');
