# 🌿 NATUREX · ANTARA — Spatial Nature & Expedition Intelligence Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![Status: Production Ready](https://img.shields.io/badge/Status-Next--Gen%20Redesign-02C39A.svg)](#)
[![Theme: Vision OS + Cinematic + Eco-Luxury](https://img.shields.io/badge/Themes-Spatial%20%7C%20Cinematic%20%7C%20Eco--Luxury-F59E0B.svg)](#)

> **A luxury, next-generation spatial travel intelligence operating system.**  
> Blending Apple Vision Pro 3D spatial horizons, dark cinematic expedition immersion, organic eco-luxury editorial aesthetics, and deep localized data across all 30 districts of Odisha, pan-India, and global wonders.

---

## ✨ Features & Architecture

### 1. 🔮 Apple Vision Pro Spatial 3D Horizon Carousel
- **True 3D Perspective Stage** (`perspective: 1400px`, `transform-style: preserve-3d`): Smooth curved horizon carousel featuring 7 curated flagship destinations.
- **Micro-Interactions**: Direct click-to-center focus, keyboard arrow navigation (`←` / `→`), touch swipe support, and idle rotation.
- **Specular Frosted Glass & Atmospheric Lighting**: Ambient blurred background crossfade dynamically synchronized with the active destination.
- **Floating Media Pill Controller**: Live coordinates, elevation, district tags, heart reaction with haptic sounds, and fraction indicators (`01 / 07`).

### 2. 🎨 3 Signature Design Themes (Instant Switcher)
- **🔮 Spatial 3D**: Apple Vision Pro floating curved glass horizon with ambient luxury glow.
- **🌲 Wild Adventure**: Dark cinematic atmosphere with bold high-contrast typography, panoramic cards, and golden amber accents.
- **🌿 Eco-Luxury**: Organic fluid masks, Cormorant Garamond luxury serif headlines, olive forest palette, and sustainability impact tiles.

### 3. ⚡ Interactive "Expedition Vibe Matcher" Quiz
- **30-Second Sensory Matcher**: Pair your traveler soul (Landscape, Expedition Pace, Season) with verified wilderness destinations.
- **Real-Time Algorithmic Pairing**: Sound chimes, confetti particle bursts, and match percentage calculations (e.g., *98% Match: Simlipal Tiger Realm*).
- **Instant Plan**: Generates road travel distances, best seasons, estimated budgets, and 1-click expedition itinerary creation.

### 4. 🏔️ Multi-Day Trails & Topographical Elevation Atlas
- **Curated Multi-Day Routes**:
  - *The Eastern Ghats Cloud Trail* (5 Days · 620 km · Deomali 1,672m summit)
  - *The Black Tiger Biosphere Traverse* (4 Days · 460 km · Barehipani 399m waterfall)
  - *The High Pine & Coffee Valley Circuit* (3 Days · 340 km · Daringbadi 915m valley)
  - *The Mangrove & Dolphin Sea Safari* (4 Days · 390 km · Chilika & Bhitarkanika)
- **Interactive SVG Elevation Profile Chart**: Altitude curve mapping from sea level to 1,672m with waypoints, distances, and day-by-day itineraries.

### 5. 🧭 Verified Local Expedition Guides Roster
- Profiles of accredited local experts (Wildlife Naturalist, Mountaineer, Kalinga Epigraphist, Marine Biologist).
- Verified credentials (WII Certified, HMI Darjeeling, ASI Scholar), client ratings (4.9+ ★), languages spoken, and direct consultation briefings.

### 6. 🌱 Eco-Luxury Sustainability & Conservation
- **100% Community-Operated**: Village forest councils (VSS) directly supported by eco-tourism.
- **+310% Artisan Uplift**: Direct household revenue growth for Dhokra and Pattachitra folk masters.
- **0 kg Single-Use Plastics**: Strict environmental protection policy.
- **Digital Leave-No-Trace Guardian Pledge**: Unlockable digital certification.

### 7. 📸 Polaroid Field Scrapbook & Live Traveler Notes
- Tilted polaroid photo memories with taped corners, authentic traveler captions, date stamps, and interactive like counters.
- Seamlessly linked to the personal Journal & Field Notes engine.

### 8. 🍃 Web Audio API Synthesizer (Zero External Audio Files)
- Atmospheric nature soundscapes synthesized on the fly:
  - Rainforest mist & birds
  - Coastal sunrise waves
  - Alpine mountain breeze
  - Singing bowl temple chimes

---

## 🗂️ Data Coverage

- **Odisha Deep Intelligence**: All 30 districts, 105+ verified destinations with coordinates, altitudes, ticket rates, best seasons, and fuel-only road trip calculations.
- **Pan-India Intelligence**: 28 States, 8 Union Territories, 40+ premier destinations, and all 43 authenticated UNESCO World Heritage sites.
- **Global Intelligence**: 32 countries, visa requirements, entry guidelines, and daily budget calculations.

---

## 🚀 Running Locally

No heavyweight build tools or dependencies required. Run using any static web server:

### Option 1: Node.js (Built-in)
```bash
# Start local development server
node -e "const http=require('http'), fs=require('fs'), path=require('path'); const mime={'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'}; http.createServer((req,res)=>{ let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/') p='/index.html'; let f=path.join(process.cwd(), p); fs.readFile(f, (err,data)=>{ if(err){ res.writeHead(404); res.end('Not found'); } else { res.writeHead(200, {'Content-Type': mime[path.extname(f)] || 'text/plain'}); res.end(data); } }); }).listen(5173, ()=>console.log('Server running on http://localhost:5173'));"
```
Then visit: `http://localhost:5173`

### Option 2: VS Code Live Server / Python
```bash
# Or using Python (if installed)
python -m http.server 8000
```

---

## 🐙 Pushing to GitHub

To push this project to your GitHub account:

1. Create a new repository on [GitHub](https://github.com/new) (e.g., `NatureX` or `naturex-expedition-os`).
2. Run the following terminal commands:
```bash
# Add your GitHub repository remote
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# Push to main
git branch -M main
git push -u origin main
```

---

## 📜 License
MIT License · Built with passion for nature, exploration, and spatial design.
