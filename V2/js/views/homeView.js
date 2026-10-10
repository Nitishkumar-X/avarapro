/* ==========================================================================
   WAYFARER V2 — Spatial Editorial Home View & Recommendation Engine
   ========================================================================== */

window.WayfarerHomeView = {
  activeRegionTab: "Himalayas",
  activeSpatialIndex: 1,

  render() {
    const container = document.getElementById("view-home");
    if (!container) return;

    const stats = window.wayfarerStore.getStats();
    const upcoming = stats.upcomingTrip;
    const destinations = window.wayfarerStore.getDestinations();
    const memories = window.wayfarerStore.getMemories();
    const featuredMemory = memories[0];
    const profile = window.wayfarerStore.getProfile();

    const recs = window.WayfarerItineraryEngine ? window.WayfarerItineraryEngine.getRecommendationsForUser(profile, destinations) : [];

    const circleItems = [
      { name: "Pangong Tso", sub: "Ladakh · Azure Tarn", img: "../NATURE/amy-w-IPFrMULxHjE-unsplash.jpg", destId: "dest_ladakh" },
      { name: "Gulmarg Pass", sub: "Kashmir · Alpine Valley", img: "../NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg", destId: "dest_kashmir" },
      { name: "Spiti Overland", sub: "Himachal · High Desert", img: "../NATURE/119632.jpg", destId: "dest_spiti" },
      { name: "Dawki Crystal River", sub: "Meghalaya · Glass Waters", img: "../NATURE/june-o-Tq61bW38kmM-unsplash.jpg", destId: "dest_meghalaya" },
      { name: "Palolem Palms", sub: "South Goa · Sunset Cove", img: "../NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg", destId: "dest_goa" }
    ];

    const regionTabs = ["Overview", "Himalayas", "Western Ghats", "Northeast", "Coastal"];

    container.innerHTML = `
      <!-- 1. EDITORIAL HERO SECTION -->
      <section class="relative w-full h-[620px] md:h-[720px] rounded-[36px] overflow-hidden shadow-2xl mb-14 group border border-black/10 dark:border-white/10">
        <img id="hero-bg-img" src="${upcoming ? upcoming.coverImage : '../NATURE/119632.jpg'}" class="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/30"></div>

        <div class="relative h-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-10 pb-8 text-white">
          <div class="flex items-center gap-3">
            <span class="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold tracking-wider text-white">
              Expedition Focus
            </span>
            <span class="text-xs font-medium tracking-widest text-white/90 uppercase">
              Nature & High Altitude Sanctuary
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7">
              <span class="font-script text-3xl md:text-4xl text-[#E5C158] block mb-2">Slow travel, infinite silence</span>
              <h1 class="font-serif italic text-5xl md:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.05] drop-shadow-md">
                Travel Beyond the Ordinary
              </h1>
              <p class="text-sm md:text-base text-white/90 font-light leading-relaxed max-w-xl mb-8">
                Immerse in untouched mountain passes, mirror tarns, and pristine pine ridges. Re-imagine travel as quiet exploration.
              </p>

              <div class="flex flex-wrap items-center gap-4">
                <button onclick="window.wayfarerApp.switchTab('explore')" class="btn-editorial-pill flex items-center gap-2 text-sm font-semibold">
                  <span>Explore 42 Landscapes</span>
                  <span class="text-base">↗</span>
                </button>
                <button onclick="window.wayfarerApp.switchTab('trips')" class="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium text-sm transition-all backdrop-blur-md border border-white/25">
                  Active Expedition →
                </button>
              </div>
            </div>

            <div class="hidden lg:flex lg:col-span-5 flex-col items-end space-y-4">
              ${circleItems.map((item, idx) => `
                <div onclick="window.wayfarerBucketList.openDestinationDetail('${item.destId}')" class="circle-preview-item text-right">
                  <div>
                    <h4 class="font-serif font-bold text-base text-white hover:text-[#E5C158] transition-colors leading-tight">${item.name}</h4>
                    <span class="text-[10px] text-white/75 font-light block">${item.sub}</span>
                  </div>
                  <img src="${item.img}" class="circle-preview-img ${idx === 0 ? 'active' : ''}" />
                </div>
              `).join("")}
            </div>
          </div>

          <div class="flex items-center gap-8 border-t border-white/20 pt-4 text-sm font-serif font-semibold text-white/80 overflow-x-auto no-scrollbar">
            ${regionTabs.map(tab => `
              <span
                onclick="window.WayfarerHomeView.setRegionTab('${tab}')"
                class="region-tab-item ${this.activeRegionTab === tab ? 'active text-white font-bold' : 'hover:text-white'}"
              >
                ${tab}
              </span>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- 2. TRANSPARENT RECOMMENDATION ENGINE -->
      ${recs.length > 0 ? `
        <section class="mb-16">
          <div class="editorial-card p-8 md:p-10 border border-[#1B3B2B]/20">
            <div class="flex items-center justify-between mb-6">
              <div>
                <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold block mb-1">DATA-DRIVEN MATCH</span>
                <h2 class="font-serif font-bold text-3xl md:text-4xl text-[#1C1917] dark:text-white">Recommended For Your Travel Style</h2>
              </div>
              <span class="text-xs text-stone-400">Transparent Rule Match</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${recs.slice(0, 2).map(r => `
                <div onclick="window.wayfarerBucketList.openDestinationDetail('${r.destination.id}')" class="editorial-card-interactive p-6 flex flex-col justify-between group">
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-bold text-[#1B3B2B] dark:text-[#02C39A] bg-[#1B3B2B]/10 dark:bg-[#02C39A]/20 px-2.5 py-1 rounded-md">
                        ${r.score}% Style Match
                      </span>
                      <span class="text-xs text-amber-500 font-bold">★ ${r.destination.rating || 4.9}</span>
                    </div>
                    <h3 class="font-serif font-bold text-2xl text-[#1C1917] dark:text-white group-hover:text-[#1B3B2B] dark:group-hover:text-[#02C39A] transition-colors">${r.destination.name}</h3>
                    <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-1">${r.destination.description}</p>
                  </div>

                  <div class="mt-6 pt-4 border-t border-black/5 dark:border-white/10 space-y-1.5 text-xs text-[#57534E] dark:text-[#A3C9AB]">
                    <span class="text-[10px] uppercase font-bold text-stone-400 block mb-1">Why this destination?</span>
                    ${r.reasons.map(reason => `<div class="flex items-center gap-1.5"><span>✓</span> <span>${reason}</span></div>`).join("")}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      ` : ''}

      <!-- 3. VISIONOS SPATIAL 3D CAROUSEL -->
      <section class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-1 block">SPATIAL DESTINATION CAROUSEL</span>
            <h2 class="font-serif font-bold text-3xl md:text-5xl text-[#1C1917] dark:text-white">Interactive Horizon Stack</h2>
          </div>
          <button onclick="window.wayfarerApp.switchTab('bucketlist')" class="text-xs font-semibold text-[#1B3B2B] dark:text-[#02C39A] hover:underline">View All Bucket List →</button>
        </div>

        <div class="spatial-3d-container relative w-full h-[480px] flex items-center justify-center overflow-hidden py-6">
          <div class="flex items-center justify-center gap-6 w-full max-w-5xl">
            <div class="spatial-3d-card left hidden md:block w-72 h-[390px] editorial-card overflow-hidden cursor-pointer" onclick="window.WayfarerHomeView.shiftSpatial(-1)">
              <img src="../NATURE/florian-k-r1RjYmC6frI-unsplash.jpg" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-5 left-5 right-5 text-white">
                <h4 class="font-serif font-bold text-xl">Kashmir Great Lakes</h4>
                <p class="text-[10px] text-white/70 font-mono">34.0837° N, 74.7973° E</p>
              </div>
            </div>

            <div class="spatial-3d-card center w-80 md:w-96 h-[440px] editorial-card overflow-hidden relative shadow-2xl border border-[#1B3B2B]/40 dark:border-[#02C39A]/40">
              <img src="${destinations[0] ? destinations[0].image : '../NATURE/119632.jpg'}" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div class="absolute top-4 right-4 flex items-center gap-2">
                <span class="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white border border-white/20">
                  Featured Horizon
                </span>
              </div>

              <div class="absolute bottom-6 left-6 right-6 text-white">
                <span class="text-xs text-[#E5C158] font-semibold uppercase tracking-wider block mb-1">Featured Horizon</span>
                <h3 class="font-serif font-bold text-3xl text-white">${destinations[0] ? destinations[0].name : 'Spiti Valley'}</h3>
                <p class="text-xs text-white/80 mt-2 line-clamp-2">${destinations[0] ? destinations[0].description : 'Cold desert mountain valley high in the Himalayas.'}</p>
                <button onclick="window.wayfarerBucketList.openDestinationDetail('${destinations[0] ? destinations[0].id : 'dest_spiti'}')" class="mt-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-semibold text-white transition-all">
                  Open Destination Details →
                </button>
              </div>
            </div>

            <div class="spatial-3d-card right hidden md:block w-72 h-[390px] editorial-card overflow-hidden cursor-pointer" onclick="window.WayfarerHomeView.shiftSpatial(1)">
              <img src="../NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-5 left-5 right-5 text-white">
                <h4 class="font-serif font-bold text-xl">South Goa Palms</h4>
                <p class="text-[10px] text-white/70 font-mono">15.0100° N, 74.0231° E</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. SNAPSHOT METRICS -->
      <section class="mb-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="editorial-card p-6 text-center">
            <div class="text-4xl md:text-5xl font-serif font-bold text-[#1B3B2B] dark:text-[#02C39A] mb-1">${stats.placesVisited}</div>
            <div class="text-xs text-[#57534E] dark:text-[#A3C9AB] uppercase tracking-wider font-semibold">Places Explored</div>
          </div>
          <div class="editorial-card p-6 text-center">
            <div class="text-4xl md:text-5xl font-serif font-bold text-[#C5A059] mb-1">${stats.countriesVisited}</div>
            <div class="text-xs text-[#57534E] dark:text-[#A3C9AB] uppercase tracking-wider font-semibold">Countries</div>
          </div>
          <div class="editorial-card p-6 text-center">
            <div class="text-4xl md:text-5xl font-serif font-bold text-[#2563EB] dark:text-[#38BDF8] mb-1">${stats.totalTravelDays}</div>
            <div class="text-xs text-[#57534E] dark:text-[#A3C9AB] uppercase tracking-wider font-semibold">Travel Days</div>
          </div>
          <div class="editorial-card p-6 text-center">
            <div class="text-4xl md:text-5xl font-serif font-bold text-[#D97706] mb-1">${stats.bucketCount}</div>
            <div class="text-xs text-[#57534E] dark:text-[#A3C9AB] uppercase tracking-wider font-semibold">Bucket List</div>
          </div>
        </div>
      </section>

      <!-- 5. FEATURED MEMORY -->
      ${featuredMemory ? `
        <section class="mb-12">
          <div class="flex items-center justify-between mb-6">
            <h2 class="font-serif text-3xl font-bold text-[#1C1917] dark:text-white">Featured Field Note Spotlight</h2>
            <button onclick="window.wayfarerApp.switchTab('journal')" class="text-xs font-semibold text-[#1B3B2B] dark:text-[#02C39A] hover:underline">Journal Vault →</button>
          </div>

          <div class="editorial-card p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-black/5 dark:border-white/10">
            <div class="md:col-span-7 h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl relative group">
              <img src="${featuredMemory.coverImage}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-xs text-white">
                📍 ${featuredMemory.location}
              </div>
            </div>

            <div class="md:col-span-5 flex flex-col justify-center">
              <span class="text-xs font-semibold uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] mb-2">Field Reflection</span>
              <h3 class="font-serif text-3xl md:text-4xl font-bold text-[#1C1917] dark:text-white mb-4 leading-tight">“${featuredMemory.title}”</h3>
              <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] font-light leading-relaxed mb-6 italic">
                “${featuredMemory.story}”
              </p>

              <div class="flex items-center justify-between pt-4 border-t border-black/10 dark:border-white/10 text-xs text-[#57534E] dark:text-[#A3C9AB]">
                <span>Date: <strong class="text-[#1C1917] dark:text-white">${featuredMemory.date}</strong></span>
                <span>Mood: <strong class="text-[#1B3B2B] dark:text-[#02C39A]">${featuredMemory.mood}</strong></span>
              </div>
            </div>
          </div>
        </section>
      ` : ''}
    `;
  },

  setRegionTab(tabName) {
    this.activeRegionTab = tabName;
    if (window.WayfarerNotify) window.WayfarerNotify.show(`Filter region: ${tabName}`, "info");
    this.render();
  },

  shiftSpatial(dir) {
    this.activeSpatialIndex = (this.activeSpatialIndex + dir + 3) % 3;
    this.render();
  }
};
