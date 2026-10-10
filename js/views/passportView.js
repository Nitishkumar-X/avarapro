/* ==========================================================================
   ANTARA — Passport & Spatial Explorer View (v2.0)
   Apple Vision OS Spatial 3D Glass Carousel & Grand State Passport
   ========================================================================== */

window.WFPassportView = {
  activeTab: 'vision_os', // 'vision_os' | 'passport_book' | 'credentials'
  currentSlide: 0,
  activeCollection: 'athens', // 'athens' | 'odisha' | 'india'

  collections: {
    athens: {
      name: 'Athens Explorer',
      subtitle: 'Where History Meets Timeless Beauty',
      items: [
        {
          id: 'ath_acropolis',
          title: 'Acropolis',
          sub: 'Ancient Citadel of Athens',
          desc: 'The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city. It is home to the Parthenon and other magnificent classical structures.',
          address: 'Acropolis of Athens, 105 58 Athens, Greece',
          coords: '37.9715° N, 23.7267° E',
          photo: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=85',
          district: 'Attica Region',
          likes: '14.2K',
          saved: '2.8K'
        },
        {
          id: 'ath_plaka',
          title: 'Plaka District',
          sub: 'Historic Old Town',
          desc: 'Nestled in the shadow of the Acropolis, Plaka boasts neoclassical mansions, winding cobblestone lanes, vibrant tavernas, and ancient Athenian ruins.',
          address: 'Plaka, Athens 105 56, Greece',
          coords: '37.9730° N, 23.7310° E',
          photo: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=85',
          district: 'Attica Region',
          likes: '9.4K',
          saved: '1.9K'
        },
        {
          id: 'ath_zeus',
          title: 'Temple of Zeus',
          sub: 'Olympieion Sanctuary',
          desc: 'A colossal ruined temple in central Athens dedicated to Olympian Zeus, whose construction spanned over six centuries under Roman Emperor Hadrian.',
          address: 'Athens 105 57, Greece',
          coords: '37.9693° N, 23.7331° E',
          photo: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&q=85',
          district: 'Attica Region',
          likes: '7.8K',
          saved: '1.2K'
        },
        {
          id: 'ath_parthenon',
          title: 'Parthenon',
          sub: 'Acropolis Classical Summit',
          desc: 'Dedicated to goddess Athena, the Parthenon stands as the pinnacle of Doric architecture with optical refinements and historic marble friezes.',
          address: 'Athens 105 58, Greece',
          coords: '37.9715° N, 23.7266° E',
          photo: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85',
          district: 'Attica Region',
          likes: '18.6K',
          saved: '4.5K'
        },
        {
          id: 'ath_astir',
          title: 'Astir Beach',
          sub: 'Vouliagmeni Riviera',
          desc: 'The golden jewel of the Athens Riviera with crystal turquoise waters, pine-fringed coastal promenades, and ancient Temple of Apollo Zoster.',
          address: 'Apollonos 40, Vouliagmeni 166 71, Greece',
          coords: '37.8142° N, 23.7744° E',
          photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85',
          district: 'Athens Riviera',
          likes: '6.5K',
          saved: '980'
        },
        {
          id: 'ath_stadium',
          title: 'Panathenaic Stadium',
          sub: 'Kallimarmaro White Marble',
          desc: 'The only stadium in the world built entirely of white Pentelic marble, venue of the first modern Olympic Games in 1896.',
          address: 'Vassileos Konstantinou Ave, Athens, Greece',
          coords: '37.9686° N, 23.7411° E',
          photo: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=85',
          district: 'Attica Region',
          likes: '8.1K',
          saved: '1.4K'
        },
        {
          id: 'ath_sounion',
          title: 'Cape Sounion',
          sub: 'Temple of Poseidon',
          desc: 'Perched on the headland high above the Aegean Sea, commanding dramatic sunset panoramas where Lord Byron once carved his inscription.',
          address: 'Lavreotiki 195 00, Greece',
          coords: '37.6502° N, 24.0245° E',
          photo: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85',
          district: 'Attica Region',
          likes: '11.3K',
          saved: '2.3K'
        }
      ]
    },
    odisha: {
      name: 'Odisha Heritage Explorer',
      subtitle: 'Land of Temples, Waterfalls & Pristine Lagoons',
      items: [
        {
          id: 'od_konark',
          title: 'Konark Sun Temple',
          sub: '13th Century UNESCO Sun Chariot',
          desc: 'A colossal 13th-century architectural marvel shaped as Surya\'s chariot with 24 intricately carved stone wheels and 7 galloping horses.',
          address: 'Konark, Puri District, Odisha 752111, India',
          coords: '19.8876° N, 86.0945° E',
          photo: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=85',
          district: 'Puri District',
          likes: '16.5K',
          saved: '3.9K'
        },
        {
          id: 'od_chilika_satapada',
          title: 'Chilika Lake & Lagoon',
          sub: 'Asia\'s Largest Brackish Water Lagoon',
          desc: 'A UNESCO wetland sanctuary hosting 1.2M migratory birds, rare Irrawaddy dolphins, Rajhans island, and traditional fishing culture.',
          address: 'Satapada, Puri District, Odisha, India',
          coords: '19.7431° N, 85.3421° E',
          photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85',
          district: 'Puri District',
          likes: '13.8K',
          saved: '3.1K'
        },
        {
          id: 'od_simlipal',
          title: 'Simlipal Tiger Reserve',
          sub: 'Biosphere of Melanistic Black Tigers',
          desc: 'Dense sal canopy, 1076 plant species, and roaring waterfalls in Mayurbhanj. Home of the world\'s only melanistic black tigers.',
          address: 'Baripada, Mayurbhanj, Odisha 757001, India',
          coords: '21.8465° N, 86.3888° E',
          photo: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=85',
          district: 'Mayurbhanj District',
          likes: '11.9K',
          saved: '2.7K'
        },
        {
          id: 'od_deomali',
          title: 'Deomali Peak',
          sub: 'Odisha\'s Highest Cloud Summit · 1,672m',
          desc: 'The highest summit in Odisha amidst the Eastern Ghats. Rolling green valleys, misty clouds, cool mountain breeze, and paragliding terrains.',
          address: 'Doodhari, Koraput District, Odisha 764036, India',
          coords: '18.6754° N, 82.9772° E',
          photo: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
          district: 'Koraput District',
          likes: '15.4K',
          saved: '3.5K'
        },
        {
          id: 'od_barehipani',
          title: 'Barehipani Waterfalls',
          sub: 'Second Highest Waterfall in India · 399m',
          desc: 'A magnificent two-tiered cascade originating from the Budhabalanga river plunging down the deep gorges of Simlipal forest.',
          address: 'Simlipal Reserve, Mayurbhanj, Odisha, India',
          coords: '21.9324° N, 86.3884° E',
          photo: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=85',
          district: 'Mayurbhanj District',
          likes: '9.7K',
          saved: '2.1K'
        },
        {
          id: 'od_dhauli',
          title: 'Dhauli Shanti Stupa',
          sub: 'Peace Pagoda & Ashokan Rock Edicts',
          desc: 'Standing above the Daya river where Emperor Ashoka renounced violence and embraced Buddhism following the historic Kalinga War in 261 BCE.',
          address: 'Dhauli Hills, Bhubaneswar, Odisha 752104, India',
          coords: '20.1923° N, 85.8394° E',
          photo: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=85',
          district: 'Khordha District',
          likes: '10.2K',
          saved: '1.8K'
        }
      ]
    }
  },

  render(container) {
    const store = window.wayfarerStore;
    const profile = store?.getProfile?.() || {};
    const stats = store?.getStats?.() || {};
    const trips = store?.getTrips?.() || [];
    const dests = store?.getDestinations?.() || [];
    const odishaDests = window.ODISHA_DATA?.destinations || [];
    const allDistricts = window.ODISHA_DATA?.districts || [];
    const unescoSites = window.ACTIVITIES_DATA?.unescoIndiaSites || [];

    const name = profile.name || 'Explorer';
    const firstName = name.split(' ')[0];

    // Passport hash ID
    const hashStr = (str) => {
      let h = 0;
      for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; }
      return Math.abs(h).toString(16).toUpperCase().padStart(8, '0');
    };
    const passportNum = `AN-${hashStr(name)}`;
    const issueYear = new Date().getFullYear();

    // Visited destinations & districts
    const visited = dests.filter(d => d.status === 'Visited');
    const visitedOdisha = visited.filter(d => odishaDests.find(o => o.id === d.id));

    const visitedDistrictsSet = new Set();
    visitedOdisha.forEach(v => {
      const od = odishaDests.find(o => o.id === v.id);
      if (od?.district) visitedDistrictsSet.add(od.district);
    });

    const completedTrips = trips.filter(t => t.status === 'Completed');
    const achievements = this._computeAchievements(visited, completedTrips, visitedOdisha, visitedDistrictsSet, trips);

    const activeCol = this.collections[this.activeCollection] || this.collections.athens;
    const currentItem = activeCol.items[this.currentSlide] || activeCol.items[0];

    container.innerHTML = `
      <div class="wf-passport animate-fade-in">

        <!-- ═══ TOP VISION OS MODE SWITCHER ═══ -->
        <div class="max-w-6xl mx-auto pt-20 px-4 flex items-center justify-between flex-wrap gap-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-xs font-mono uppercase tracking-widest wf-text-muted">Personal Travel OS · Vision OS Mode</span>
          </div>

          <div class="flex items-center bg-black/10 dark:bg-white/10 p-1 rounded-2xl border wf-border backdrop-blur-md text-xs font-medium">
            <button
              onclick="WFPassportView.switchTab('vision_os')"
              class="px-4 py-2 rounded-xl transition-all ${this.activeTab === 'vision_os' ? 'bg-white dark:bg-stone-900 shadow-md text-stone-950 dark:text-white font-bold' : 'wf-text-muted hover:wf-text-primary'}"
            >
              🥽 Spatial 3D Glass Explorer
            </button>
            <button
              onclick="WFPassportView.switchTab('passport_book')"
              class="px-4 py-2 rounded-xl transition-all ${this.activeTab === 'passport_book' ? 'bg-white dark:bg-stone-900 shadow-md text-stone-950 dark:text-white font-bold' : 'wf-text-muted hover:wf-text-primary'}"
            >
              🛂 30-District State Passport
            </button>
            <button
              onclick="WFPassportView.switchTab('credentials')"
              class="px-4 py-2 rounded-xl transition-all ${this.activeTab === 'credentials' ? 'bg-white dark:bg-stone-900 shadow-md text-stone-950 dark:text-white font-bold' : 'wf-text-muted hover:wf-text-primary'}"
            >
              📜 Credentials &amp; DNA
            </button>
          </div>
        </div>

        <!-- ═══════════════════════════════════════════════════
             IMAGE 2 — APPLE VISION OS SPATIAL 3D GLASS CAROUSEL
        ═══════════════════════════════════════════════════ -->
        <div class="${this.activeTab === 'vision_os' ? 'block' : 'hidden'} mt-4">
          <div class="wf-vision-container rounded-3xl mx-2 md:mx-6 shadow-2xl border border-white/20 relative">

            <!-- 1. Top Safari / Vision OS Chrome Bar -->
            <div class="wf-vision-chrome flex items-center justify-between gap-2 text-sm z-30">
              <!-- Left controls -->
              <div class="flex items-center gap-2">
                <button onclick="AntaraAudio?.playTap?.(); WFPassportView.switchTab('passport_book');" class="p-1.5 rounded-full hover:bg-white/15 transition-colors" title="All Districts Grid">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                </button>
                <button onclick="WFPassportView.prevSlide()" class="p-1.5 rounded-full hover:bg-white/15 transition-colors" title="Previous destination">
                  ‹
                </button>
                <button onclick="WFPassportView.nextSlide()" class="p-1.5 rounded-full hover:bg-white/15 transition-colors" title="Next destination">
                  ›
                </button>
                <button onclick="WFNotify?.show('Appearance: Spatial Vision Glass v2', 'info')" class="text-xs px-2 py-1 rounded-full hover:bg-white/15 font-serif font-bold" title="Text Appearance">
                  aA
                </button>
              </div>

              <!-- Center address / search pill -->
              <div class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 border border-white/15 text-xs">
                <span class="text-white/60">🔒</span>
                <select onchange="WFPassportView.changeCollection(this.value)" class="bg-transparent text-white font-medium outline-none cursor-pointer">
                  <option value="athens" ${this.activeCollection === 'athens' ? 'selected' : ''} class="bg-stone-900 text-white">Athens Explorer</option>
                  <option value="odisha" ${this.activeCollection === 'odisha' ? 'selected' : ''} class="bg-stone-900 text-white">Odisha Heritage Explorer</option>
                </select>
                <button onclick="WFPassportView.simulateMic()" class="hover:text-amber-400 transition-colors ml-1" title="Voice Search">
                  🎙
                </button>
              </div>

              <!-- Right controls -->
              <div class="flex items-center gap-2">
                <button onclick="WFPassportView.addToTrip(WFPassportView.getCurrentItem())" class="p-1.5 rounded-full hover:bg-white/15 transition-colors" title="Add to Itinerary">
                  +
                </button>
                <button onclick="WFPassportView.shareVisionCard()" class="p-1.5 rounded-full hover:bg-white/15 transition-colors" title="Share Sheet">
                  ↗
                </button>
                <button onclick="WFPassportView.switchTab('credentials')" class="p-1.5 rounded-full hover:bg-white/15 transition-colors" title="Passport Tabs">
                  ❐
                </button>
              </div>
            </div>

            <!-- 2. Left Floating Vertical Tool Dock -->
            <div class="wf-vision-dock">
              <button onclick="WFPassportView.stampCurrentDestination()" class="wf-vision-dock-btn" title="Stamp in Passport">
                📎
              </button>
              <button onclick="WFPassportView.toggleFavorite(this)" class="wf-vision-dock-btn" title="Save to Favorites">
                ♡
              </button>
              <button onclick="WFPassportView.switchTab('credentials')" class="wf-vision-dock-btn" title="Passport Credentials">
                👤
              </button>
            </div>

            <!-- 3. Spatial 3D Perspective Carousel Stage -->
            <div class="wf-vision-stage my-auto" id="vision-stage">
              <div class="wf-vision-carousel-track">
                ${activeCol.items.map((item, idx) => {
                  const posClass = this._getCardClass(idx, this.currentSlide, activeCol.items.length);
                  return `
                    <div
                      class="wf-vision-card ${posClass}"
                      id="v-card-${idx}"
                      onclick="WFPassportView.onCardClick(${idx})"
                    >
                      <!-- Top Card Bar -->
                      <div class="p-4 pb-2 flex items-center justify-between z-20">
                        <button
                          onclick="event.stopPropagation(); WFPassportView.expandCard(${idx});"
                          class="px-3.5 py-1 rounded-full bg-white/20 hover:bg-white/35 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 transition-all active:scale-95 border border-white/30"
                        >
                          <span>⤢</span>
                          <span>Expand</span>
                        </button>
                        <button
                          onclick="event.stopPropagation(); WFPassportView.showCardMenu(${idx});"
                          class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center text-xs backdrop-blur-md transition-all border border-white/30"
                        >
                          •••
                        </button>
                      </div>

                      <!-- Hero Image Vista -->
                      <div class="relative h-56 mx-3 rounded-2xl overflow-hidden shadow-inner group">
                        <img
                          src="${item.photo}"
                          alt="${item.title}"
                          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onerror="this.src='https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80';"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                        <div class="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/50 text-[10px] font-mono text-white/90 backdrop-blur-md border border-white/20">
                          ${idx + 1} / ${activeCol.items.length}
                        </div>
                      </div>

                      <!-- Narrative & Location Content -->
                      <div class="p-5 pt-3 flex-1 flex flex-col justify-between">
                        <div>
                          <div class="text-[11px] text-amber-300 font-mono uppercase tracking-wider mb-0.5">${item.sub}</div>
                          <h3 class="font-serif text-2xl font-medium text-white leading-tight">${item.title}</h3>
                          <p class="text-xs text-white/80 leading-relaxed mt-2 line-clamp-3 font-light">
                            ${item.desc}
                          </p>
                        </div>

                        <!-- Address & Coordinates + Stamp Button -->
                        <div class="pt-3 border-t border-white/15 mt-3">
                          <div class="flex items-start gap-1.5 text-[10px] text-white/70 font-mono leading-tight mb-2.5">
                            <span>📍</span>
                            <div>
                              <div>${item.address}</div>
                              <div class="text-amber-400/90 mt-0.5">${item.coords}</div>
                            </div>
                          </div>

                          <div class="flex items-center gap-2">
                            <button
                              onclick="event.stopPropagation(); WFPassportView.stampPlace('${item.id}', '${item.title}', '${item.district}');"
                              class="flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-1.5"
                            >
                              <span>🛂</span>
                              <span>Stamp in Passport</span>
                            </button>
                            <button
                              onclick="event.stopPropagation(); ANTARA.planTripWith('${item.id}');"
                              class="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/25 transition-colors"
                              title="Plan expedition here"
                            >
                              🗓️
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>`;
                }).join('')}
              </div>
            </div>

            <!-- 4. Bottom Vision OS Floating Media Controller (Hovering above coffee table) -->
            <div class="flex flex-col items-center justify-center z-30">
              <div class="wf-vision-controller">
                <button onclick="WFPassportView.prevSlide()" class="hover:text-amber-300 transition-transform active:scale-90 text-sm">
                  ‹
                </button>
                <div class="w-8 h-8 rounded-full overflow-hidden border border-white/40 shadow-sm flex-shrink-0">
                  <img src="${currentItem.photo}" alt="${currentItem.title}" class="w-full h-full object-cover" />
                </div>
                <div class="text-left pr-2">
                  <div class="font-serif text-sm font-semibold text-white leading-tight">${currentItem.title}</div>
                  <div class="text-[10px] text-white/70 truncate max-w-[200px]">${activeCol.subtitle}</div>
                </div>
                <button onclick="WFPassportView.toggleFavorite(this)" class="hover:text-red-400 transition-colors ml-1" title="Like">
                  ♡
                </button>
                <button onclick="WFPassportView.nextSlide()" class="hover:text-amber-300 transition-transform active:scale-90 text-sm">
                  ›
                </button>
              </div>

              <!-- Vision OS Pagination Dots -->
              <div class="flex items-center gap-1.5 mt-1">
                ${activeCol.items.map((_, i) => `
                  <button
                    onclick="WFPassportView.goToSlide(${i})"
                    class="wf-vision-dot ${i === this.currentSlide ? 'active' : ''}"
                    title="Slide ${i + 1}"
                  ></button>
                `).join('')}
              </div>
            </div>

          </div>
        </div>

        <!-- ═══ 30-DISTRICT PASSPORT BOOK & SEALS TAB ═══ -->
        <div class="${this.activeTab === 'passport_book' ? 'block' : 'hidden'}">

          <!-- ═══ PASSPORT COVER & HOLDER ═══ -->
          <div class="wf-passport-cover relative overflow-hidden mt-4" style="min-height:440px">
            <div class="absolute w-96 h-96 rounded-full border border-amber-800/20 -top-24 -right-24 z-0"></div>
            <div class="absolute w-64 h-64 rounded-full border border-amber-800/15 top-12 -right-12 z-0"></div>

            <div class="relative z-10 wf-page-content py-12 md:py-16">
              <div class="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                <div class="flex-1">
                  <div class="mb-6">
                    <div class="w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-3 shadow-lg" style="border-color:rgba(196,148,30,0.5);background:rgba(196,148,30,0.12)">
                      <span class="font-serif text-2xl font-bold text-amber-400">A</span>
                    </div>
                    <div class="text-amber-400/80 text-[10px] tracking-[0.25em] uppercase mb-1 font-mono">REPUBLIC OF EXPLORATION · INDIA</div>
                    <div class="font-serif text-3xl md:text-5xl font-light tracking-widest uppercase text-white">ANTARA PASSPORT</div>
                  </div>

                  <!-- Holder info grid -->
                  <div class="border-t border-white/10 pt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                    <div>
                      <div class="text-white/30 text-[9px] tracking-[0.2em] uppercase mb-1">Holder Name</div>
                      <div class="font-serif text-white text-lg font-light">${name}</div>
                    </div>
                    <div>
                      <div class="text-white/30 text-[9px] tracking-[0.2em] uppercase mb-1">Passport No.</div>
                      <div class="font-mono text-amber-400 text-sm tracking-widest">${passportNum}</div>
                    </div>
                    <div>
                      <div class="text-white/30 text-[9px] tracking-[0.2em] uppercase mb-1">Home Base</div>
                      <div class="text-white/80 text-sm">${profile.homecity || 'Bhubaneswar'}</div>
                    </div>
                    <div>
                      <div class="text-white/30 text-[9px] tracking-[0.2em] uppercase mb-1">Districts Unlocked</div>
                      <div class="font-serif text-amber-400 text-lg font-light">${visitedDistrictsSet.size} / 30</div>
                    </div>
                    <div>
                      <div class="text-white/30 text-[9px] tracking-[0.2em] uppercase mb-1">Badges Earned</div>
                      <div class="font-serif text-white text-lg font-light">${achievements.filter(a => a.earned).length} / ${achievements.length}</div>
                    </div>
                    <div>
                      <div class="text-white/30 text-[9px] tracking-[0.2em] uppercase mb-1">Status</div>
                      <div class="font-mono text-emerald-400 text-xs uppercase font-bold">VALID · 2026 VISA</div>
                    </div>
                  </div>
                </div>

                <div class="flex-shrink-0">
                  <button onclick="ANTARA.switchView('settings')" class="wf-btn wf-btn-outline-white wf-btn-sm">
                    Edit Profile &amp; Home Base
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══ 30-DISTRICT GRAND STATE SEAL COLLECTION ═══ -->
          <div class="wf-page-content py-10 border-t wf-border">
            <div class="wf-section-header mb-6">
              <div>
                <div class="wf-section-eyebrow">The Complete State Collection</div>
                <h2 class="wf-headline wf-text-primary">30-District Grand Passport Seals</h2>
                <p class="text-xs wf-text-muted mt-1">${visitedDistrictsSet.size} of 30 district seals stamped · Click any district to explore its destinations</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="wf-progress w-36 h-2">
                  <div class="wf-progress-fill" style="width:${Math.round((visitedDistrictsSet.size / 30) * 100)}%"></div>
                </div>
                <span class="text-xs font-mono font-semibold wf-text-gold">${Math.round((visitedDistrictsSet.size / 30) * 100)}%</span>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
              ${allDistricts.map(dist => {
                const isUnlocked = visitedDistrictsSet.has(dist.name);
                return `
                  <div
                    onclick="ANTARA.switchView('explore'); setTimeout(() => { const s = document.getElementById('filter-district'); if(s){ s.value='${dist.name}'; s.dispatchEvent(new Event('change')); } }, 150);"
                    class="wf-card p-3.5 rounded-2xl border transition-all cursor-pointer group hover:scale-[1.03] text-center flex flex-col justify-between ${isUnlocked ? 'border-amber-500/50 bg-amber-500/5 shadow-md' : 'wf-border opacity-70 hover:opacity-100'}"
                    title="Explore ${dist.name} District"
                  >
                    <div class="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 border ${isUnlocked ? 'border-amber-500 bg-amber-500/20 text-amber-500' : 'border-stone-400/30 text-stone-400'}">
                      <span class="text-xl">${isUnlocked ? '👑' : '🏛️'}</span>
                    </div>
                    <div>
                      <div class="font-serif text-xs font-semibold wf-text-primary group-hover:text-amber-500 truncate">${dist.name}</div>
                      <div class="text-[9px] font-mono wf-text-muted truncate">${dist.zone || 'Odisha'}</div>
                    </div>
                    <div class="mt-2 pt-2 border-t wf-border text-[9px] font-mono ${isUnlocked ? 'text-amber-500 font-bold' : 'wf-text-muted'}">
                      ${isUnlocked ? 'SEAL VERIFIED ✓' : 'LOCKED · EXPLORE →'}
                    </div>
                  </div>`;
              }).join('')}
            </div>
          </div>

          <!-- ═══ VISITED PASSPORT STAMPS ═══ -->
          <div class="wf-page-content py-10 border-t wf-border">
            <div class="wf-section-header mb-6">
              <div>
                <div class="wf-section-eyebrow">Entry Stamps · Odisha</div>
                <h2 class="wf-headline wf-text-primary">Collected District Stamps</h2>
              </div>
              <button onclick="ANTARA.switchView('explore')" class="wf-btn wf-btn-ghost wf-btn-sm hidden md:inline-flex">Discover More Places →</button>
            </div>

            ${visitedOdisha.length === 0 ? `
              <div class="wf-empty rounded-2xl p-8 text-center" style="background:var(--bg-secondary);min-height:200px">
                <div class="wf-empty-icon">🛂</div>
                <div class="wf-empty-title">No passport stamps yet</div>
                <div class="wf-empty-desc">Explore Odisha, visit destinations, and mark them as visited to collect official stamps!</div>
                <button onclick="ANTARA.switchView('explore')" class="wf-btn wf-btn-primary wf-btn-sm mt-4">Explore Destinations</button>
              </div>` : `
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                ${visitedOdisha.map(dest => {
                  const odDest = odishaDests.find(o => o.id === dest.id) || dest;
                  return `
                  <div class="wf-card rounded-2xl overflow-hidden group animate-scale-in border wf-border p-3">
                    <div class="relative h-28 rounded-xl overflow-hidden mb-3">
                      <img src="${odDest.image || dest.image}" alt="${dest.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="transform -rotate-12 border-2 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-sm" style="border-color:var(--accent-gold);background:rgba(0,0,0,0.45)">
                          <div class="font-serif text-[11px] font-bold uppercase tracking-widest text-amber-300 text-center">${odDest.district || 'ODISHA'}</div>
                          <div class="text-[9px] font-mono text-white/80 text-center uppercase">VISITED · 2026</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="font-serif wf-text-primary text-sm font-semibold truncate">${dest.name}</div>
                      <div class="wf-text-muted text-xs mt-0.5">${odDest.district} District</div>
                    </div>
                  </div>`;}).join('')}
              </div>`}
          </div>

        </div>

        <!-- ═══ CREDENTIALS & ACHIEVEMENTS TAB ═══ -->
        <div class="${this.activeTab === 'credentials' ? 'block' : 'hidden'}">
          <!-- ═══ EXPANDED ACHIEVEMENTS ═══ -->
          <div class="wf-bg-secondary py-12 mt-4">
            <div class="wf-page-content">
              <div class="wf-section-header mb-6">
                <div>
                  <div class="wf-section-eyebrow">Milestones &amp; Badges</div>
                  <h2 class="wf-headline wf-text-primary">Exploration Achievements</h2>
                </div>
                <div class="text-sm font-mono wf-text-muted">${achievements.filter(a => a.earned).length} / ${achievements.length} Unlocked</div>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 wf-stagger">
                ${achievements.map(ach => `
                  <div class="wf-card rounded-2xl p-4 text-center border wf-border ${ach.earned ? 'shadow-md' : 'opacity-40'} animate-scale-in">
                    <div class="text-3xl mb-2">${ach.icon}</div>
                    <div class="font-serif wf-text-primary text-base font-semibold leading-tight mb-1">${ach.name}</div>
                    <div class="wf-text-muted text-xs leading-relaxed">${ach.description}</div>
                    ${ach.earned ? `<div class="mt-3 inline-block wf-badge wf-badge-gold text-[9px]">Unlocked ✓</div>` : `<div class="mt-3 text-[10px] wf-text-faint font-mono">${ach.hint || 'Locked'}</div>`}
                  </div>`).join('')}
              </div>
            </div>
          </div>

          <!-- ═══ UNESCO HERITAGE CHECKLIST ═══ -->
          <div class="wf-page-content py-12">
            <div class="wf-section-header mb-6">
              <div>
                <div class="wf-section-eyebrow">UNESCO World Heritage · India</div>
                <h2 class="wf-headline wf-text-primary">Heritage Master Checklist</h2>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              ${unescoSites.slice(0, 16).map(site => `
                <div class="flex items-center gap-3 p-3 rounded-xl border wf-border hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors">
                  <div class="w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center ${site.state==='Odisha' ? 'bg-amber-500 text-black border-amber-500 font-bold text-xs' : 'border-stone-400'}">
                    ${site.state==='Odisha' ? '✓' : ''}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-sm wf-text-primary font-medium truncate">${site.name}</div>
                    <div class="text-xs wf-text-muted">${site.state} · ${site.year}</div>
                  </div>
                  ${site.state === 'Odisha' ? `<span class="wf-badge wf-badge-gold text-[9px] flex-shrink-0">Odisha Site</span>` : ''}
                </div>`).join('')}
            </div>
          </div>
        </div>

        <!-- ═══ SPATIAL FULLSCREEN EXPAND MODAL ═══ -->
        <div id="vision-expand-modal" class="fixed inset-0 z-[85] bg-black/80 backdrop-blur-xl hidden items-center justify-center p-4" onclick="WFPassportView.closeExpandModal()">
          <div class="relative w-full max-w-2xl bg-stone-900/90 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6 text-white animate-scale-in" onclick="event.stopPropagation()">
            <button onclick="WFPassportView.closeExpandModal()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm">✕</button>
            <div id="vision-expand-content"></div>
          </div>
        </div>

      </div>`;

    // Bind keyboard navigation for carousel
    this._bindCarouselKeyboard();
  },

  _getCardClass(idx, current, total) {
    if (idx === current) return 'center';
    const prev1 = (current - 1 + total) % total;
    const prev2 = (current - 2 + total) % total;
    const next1 = (current + 1) % total;
    const next2 = (current + 2) % total;

    if (idx === prev1) return 'left-1';
    if (idx === prev2) return 'left-2';
    if (idx === next1) return 'right-1';
    if (idx === next2) return 'right-2';
    return 'hidden-card';
  },

  getCurrentItem() {
    const col = this.collections[this.activeCollection] || this.collections.athens;
    return col.items[this.currentSlide] || col.items[0];
  },

  prevSlide() {
    AntaraAudio?.playTap?.();
    const col = this.collections[this.activeCollection] || this.collections.athens;
    this.currentSlide = (this.currentSlide - 1 + col.items.length) % col.items.length;
    this._updateCards();
  },

  nextSlide() {
    AntaraAudio?.playTap?.();
    const col = this.collections[this.activeCollection] || this.collections.athens;
    this.currentSlide = (this.currentSlide + 1) % col.items.length;
    this._updateCards();
  },

  goToSlide(idx) {
    AntaraAudio?.playTap?.();
    this.currentSlide = idx;
    this._updateCards();
  },

  onCardClick(idx) {
    if (idx !== this.currentSlide) {
      this.goToSlide(idx);
    }
  },

  _updateCards() {
    const col = this.collections[this.activeCollection] || this.collections.athens;
    col.items.forEach((_, idx) => {
      const el = document.getElementById(`v-card-${idx}`);
      if (el) {
        el.className = `wf-vision-card ${this._getCardClass(idx, this.currentSlide, col.items.length)}`;
      }
    });

    // Update bottom controller text & thumbnail
    const cur = col.items[this.currentSlide];
    const controller = document.querySelector('.wf-vision-controller');
    if (controller && cur) {
      const img = controller.querySelector('img');
      const title = controller.querySelector('.font-serif');
      if (img) img.src = cur.photo;
      if (title) title.textContent = cur.title;
    }

    // Update dots
    document.querySelectorAll('.wf-vision-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentSlide);
    });
  },

  switchTab(tab) {
    AntaraAudio?.playTap?.();
    this.activeTab = tab;
    const container = document.getElementById('view-passport');
    if (container) this.render(container);
  },

  changeCollection(colKey) {
    AntaraAudio?.playTap?.();
    this.activeCollection = colKey;
    this.currentSlide = 0;
    const container = document.getElementById('view-passport');
    if (container) this.render(container);
    WFNotify?.show(`🗂 Switched to ${this.collections[colKey]?.name || colKey}`, 'info');
  },

  /* ---- KEYBOARD NAVIGATION (Arrow keys for carousel) ---- */
  _bindCarouselKeyboard() {
    if (this._carouselKeyHandler) return; // Only bind once
    this._carouselKeyHandler = (e) => {
      if (document.getElementById('view-passport')?.classList.contains('hidden')) return;
      if (this.activeTab !== 'vision_os') return;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); this.prevSlide(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); this.nextSlide(); }
    };
    document.addEventListener('keydown', this._carouselKeyHandler);
  },

  stampPlace(id, title, district) {
    AntaraAudio?.playStamp?.();
    if (window.wayfarerStore) {
      wayfarerStore.saveDestination({
        id: id,
        name: title,
        district: district || 'Odisha',
        region: district || 'Heritage',
        category: 'Heritage Sanctuary',
        image: this.getCurrentItem()?.photo || '',
        status: 'Visited'
      });
    }
    // Instantly update the stamp button on the active card (no full re-render needed)
    const activeCard = document.querySelector('.wf-vision-card.center');
    if (activeCard) {
      const stampBtn = activeCard.querySelector('[onclick*="stampPlace"]');
      if (stampBtn) {
        stampBtn.innerHTML = '<span>✓</span><span>Stamped in Passport</span>';
        stampBtn.classList.remove('from-amber-500', 'to-amber-600', 'hover:from-amber-400', 'hover:to-amber-500');
        stampBtn.classList.add('from-emerald-500', 'to-emerald-600', 'opacity-80');
        stampBtn.disabled = true;
        stampBtn.classList.add('stamp-earned');
      }
    }
    // Update ANTARA travel bag badge
    if (window.ANTARA) ANTARA._updateTravelBagBadge();
    WFNotify?.show(`🍀 Passport Stamped: ${title} verified as Visited!`, 'success');
  },

  stampCurrentDestination() {
    const cur = this.getCurrentItem();
    if (cur) this.stampPlace(cur.id, cur.title, cur.district);
  },

  expandCard(idx) {
    AntaraAudio?.playChime?.();
    const col = this.collections[this.activeCollection] || this.collections.athens;
    const item = col.items[idx];
    if (!item) return;

    const modal = document.getElementById('vision-expand-modal');
    const content = document.getElementById('vision-expand-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="relative h-64 rounded-2xl overflow-hidden mb-4">
        <img src="${item.photo}" alt="${item.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30"></div>
        <div class="absolute bottom-4 left-4 right-4">
          <span class="px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider">${item.sub}</span>
          <h2 class="font-serif text-3xl font-light text-white mt-1">${item.title}</h2>
          <p class="text-xs text-amber-200/90 font-mono mt-0.5">📍 ${item.address} · ${item.coords}</p>
        </div>
      </div>

      <p class="text-sm text-white/90 leading-relaxed font-light mb-4">
        ${item.desc}
      </p>

      <div class="grid grid-cols-3 gap-3 mb-5 text-center text-xs">
        <div class="p-3 rounded-xl bg-white/10 border border-white/15">
          <div class="text-[10px] text-white/60 uppercase">Traveler Likes</div>
          <div class="font-serif text-base font-bold text-amber-300 mt-0.5">${item.likes}</div>
        </div>
        <div class="p-3 rounded-xl bg-white/10 border border-white/15">
          <div class="text-[10px] text-white/60 uppercase">Saved in Bag</div>
          <div class="font-serif text-base font-bold text-emerald-300 mt-0.5">${item.saved}</div>
        </div>
        <div class="p-3 rounded-xl bg-white/10 border border-white/15">
          <div class="text-[10px] text-white/60 uppercase">Atmosphere</div>
          <div class="font-serif text-base font-bold text-white mt-0.5">Golden Hour</div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          onclick="WFPassportView.stampPlace('${item.id}', '${item.title}', '${item.district}'); WFPassportView.closeExpandModal();"
          class="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-xs shadow-lg flex items-center justify-center gap-2"
        >
          <span>🛂</span>
          <span>Collect Official Stamp</span>
        </button>
        <button
          onclick="AntaraAudio?.toggleAmbiance(this);"
          class="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5"
        >
          <span>🎧</span>
          <span>Ambient Audio</span>
        </button>
        <button
          onclick="ANTARA.planTripWith('${item.id}'); WFPassportView.closeExpandModal();"
          class="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/20"
        >
          Plan Expedition
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  },

  closeExpandModal() {
    const modal = document.getElementById('vision-expand-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  showCardMenu(idx) {
    AntaraAudio?.playTap?.();
    const cur = this.getCurrentItem();
    WFNotify?.show(`Options: ${cur.title} · Stamped & Saved`, 'info');
  },

  simulateMic() {
    AntaraAudio?.playChime?.();
    WFNotify?.show('🎙️ Vision OS Dictation: Listening for destination or landmark...', 'info');
  },

  shareVisionCard() {
    AntaraAudio?.playTap?.();
    const cur = this.getCurrentItem();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin} - ${cur.title}: ${cur.address}`);
      WFNotify?.show(`Link to ${cur.title} copied! 📋`, 'success');
    }
  },

  toggleFavorite(btn) {
    AntaraAudio?.playLike?.();
    const isLiked = btn.classList.toggle('text-red-400');
    WFNotify?.show(isLiked ? 'Saved to Favorites ❤️' : 'Removed from Favorites', 'info');
  },

  addToTrip(item) {
    AntaraAudio?.playTap?.();
    if (item && window.ANTARA) {
      ANTARA.planTripWith(item.id);
    }
  },

  _computeAchievements(visited, completedTrips, visitedOdisha, visitedDistrictsSet, allTrips) {
    return [
      { id: 'first_dest', icon: '🗺', name: 'First Step', description: 'Save your first destination', earned: (window.wayfarerStore?.getDestinations?.()||[]).length > 0, hint: 'Save 1 destination' },
      { id: 'first_trip', icon: '✈️', name: 'Journey Begins', description: 'Complete your first trip', earned: completedTrips.length > 0, hint: 'Complete 1 trip' },
      { id: 'odisha_first', icon: '🏛', name: 'Temple Trail', description: 'Visit your first Odisha destination', earned: visitedOdisha.length > 0, hint: 'Visit 1 Odisha place' },
      { id: 'konark_visitor', icon: '☀️', name: 'Sun Chariot', description: 'Visit Konark Sun Temple (UNESCO)', earned: visited.some(d => d.id === 'od_konark'), hint: 'Visit Konark Sun Temple' },
      { id: 'chilika_explorer', icon: '🦩', name: 'Lagoon Wanderer', description: 'Visit Chilika Lake Satapada', earned: visited.some(d => d.id === 'od_chilika_satapada'), hint: 'Visit Chilika' },
      { id: 'simlipal_ranger', icon: '🐯', name: 'Black Tiger Country', description: 'Enter Simlipal Tiger Reserve', earned: visited.some(d => d.id === 'od_simlipal'), hint: 'Visit Simlipal' },
      { id: 'waterfall_hunter', icon: '💧', name: 'Waterfall Hunter', description: 'Visit Barehipani or Sanaghagara Falls', earned: visited.some(d => d.id === 'od_barehipani' || d.id === 'od_sanaghagara'), hint: 'Visit a waterfall' },
      { id: 'deomali_climber', icon: '⛰', name: 'Peak Climber', description: 'Scale Deomali Peak (1672m)', earned: visited.some(d => d.id === 'od_deomali'), hint: 'Visit Deomali' },
      { id: '5_districts', icon: '🗺', name: 'District Master (5)', description: 'Explore 5 different Odisha districts', earned: visitedDistrictsSet.size >= 5, hint: `${visitedDistrictsSet.size}/5 districts` },
      { id: '10_districts', icon: '🧭', name: 'District Master (10)', description: 'Explore 10 different Odisha districts', earned: visitedDistrictsSet.size >= 10, hint: `${visitedDistrictsSet.size}/10 districts` },
      { id: 'low_cost_pioneer', icon: '🏍', name: 'Fuel Escape Pioneer', description: 'Save a Low Cost Day Trip', earned: (window.wayfarerStore?.getDestinations?.()||[]).some(d => d.cost_category === 'LOW COST ESCAPE'), hint: 'Save 1 Low Cost escape' },
      { id: 'bag_5', icon: '📌', name: 'Travel Bag Explorer', description: 'Save 5 destinations in your Travel Bag', earned: (window.wayfarerStore?.getDestinations?.()||[]).length >= 5, hint: 'Save 5 in Bag' }
    ];
  }
};
