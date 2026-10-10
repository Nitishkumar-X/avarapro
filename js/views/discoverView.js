/* ==========================================================================
   NATUREX · ANTARA — Discover View (v4.0 Redesign)
   Spatial 3D Horizon Carousel (Vision Pro UI) · 3 Signature Themes ·
   Interactive Expedition Vibe Quiz · Trail Elevation Graph ·
   Verified Guides Roster · Eco-Luxury Sustainability · Polaroid Scrapbook
   ========================================================================== */

window.WFDiscoverView = {
  currentDeckIndex: 0,
  currentThemeMode: 'spatial', // 'spatial' | 'cinematic' | 'organic'
  autoplayTimer: null,
  isAmbiancePlaying: false,
  selectedTrailId: 'trail_eastern_ghats',
  quizAnswers: { terrain: 'mountain', pace: 'adrenaline', season: 'winter' },
  isQuizCompleted: false,

  /* Curated 7 Signature Spatial Deck Destinations */
  deckSpots: [
    {
      id: 'od_konark',
      name: 'Konark Sun Temple',
      subtitle: 'UNESCO 13th C. Stone Chariot of Surya',
      district: 'Puri District',
      region: 'Coastal Odisha',
      coords: '19.8876° N, 86.0945° E',
      elevation: '12m Altitude',
      tag: 'UNESCO Heritage',
      desc: 'A celestial universe carved in stone — 24 astronomical wheels and roaring stallions narrating the cosmos of ancient Kalinga.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=85',
      fallback: 'NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg',
      season: 'Year-Round · Sunrise Peak',
      stats: { duration: '1 Day', score: 'UNESCO #1' }
    },
    {
      id: 'od_deomali',
      name: 'Deomali Cloud Peak',
      subtitle: "Odisha's Highest Summit at 1,672m",
      district: 'Koraput Highlands',
      region: 'Southern Eastern Ghats',
      coords: '18.6750° N, 82.9811° E',
      elevation: '1,672m Peak',
      tag: 'High Alpine',
      desc: 'Stand above the cloud sea overlooking virgin rolling green ridges, ancient tribal valleys, and infinite horizon sunsets.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85',
      fallback: 'NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg',
      season: 'Oct – Feb · Cloud Inversions',
      stats: { duration: '2 Days', score: '1,672m Alt' }
    },
    {
      id: 'od_simlipal',
      name: 'Simlipal Tiger Realm',
      subtitle: 'The Kingdom of Melanistic Black Tigers',
      district: 'Mayurbhanj District',
      region: 'Northern Biosphere',
      coords: '21.8491° N, 86.4172° E',
      elevation: '980m Canopy',
      tag: 'UNESCO Biosphere',
      desc: 'Dense ancient sal forests, the roaring 399m Barehipani falls, and the only wild sanctuary for rare melanistic black tigers.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600&q=85',
      fallback: 'NATURE/christoph-von-gellhorn-kjA82leKmJc-unsplash.jpg',
      season: 'Nov – Apr · Open Season',
      stats: { duration: '3 Days', score: '2,750 km²' }
    },
    {
      id: 'od_chilika_satapada',
      name: 'Chilika Irrawaddy Lagoon',
      subtitle: "Asia's Largest Brackish Water Haven",
      district: 'Puri & Khordha',
      region: 'Coastal Wetland',
      coords: '19.6700° N, 85.4500° E',
      elevation: '2m Sea Level',
      tag: 'Ramsar Wetland',
      desc: 'Catamaran boat sails alongside leaping Irrawaddy dolphins and 1.2 million migratory Siberian birds feeding in sea channels.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=85',
      fallback: 'NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg',
      season: 'Nov – Jan · Bird Migration',
      stats: { duration: '2 Days', score: '1.2M Birds' }
    },
    {
      id: 'od_daringbadi',
      name: 'Daringbadi Pine Valley',
      subtitle: 'The Kashmir of Odisha & Coffee Highlands',
      district: 'Kandhamal Highlands',
      region: 'Central South',
      coords: '20.1200° N, 84.1300° E',
      elevation: '915m Highlands',
      tag: 'Pine Meadow',
      desc: 'Where morning winter frost sparkles on needles, organic coffee aromas drift through fog, and cascading waterfalls hide in valleys.',
      image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?w=1600&q=85',
      fallback: 'NATURE/b-k-HAl6CKxM3xU-unsplash.jpg',
      season: 'Nov – Feb · 4°C Dew',
      stats: { duration: '2 Days', score: '915m Alt' }
    },
    {
      id: 'od_bhitarkanika',
      name: 'Bhitarkanika Mangrove Maze',
      subtitle: 'Saltwater Croc Delta & Sea Turtle Rookery',
      district: 'Kendrapara Coast',
      region: 'Coastal North',
      coords: '20.7200° N, 86.8700° E',
      elevation: '4m Estuary',
      tag: 'Tidal Wilderness',
      desc: 'Primeval mangrove creeks hosting world-record 23-foot saltwater crocodiles and neighboring Gahirmatha turtle nesting shores.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85',
      fallback: 'NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg',
      season: 'Oct – Mar · Breeding Season',
      stats: { duration: '2 Days', score: '1,600+ Crocs' }
    },
    {
      id: 'dest_spiti',
      name: 'Spiti Valley Cold Desert',
      subtitle: 'Himalayan Ridge & Ancient Gompas',
      district: 'Lahaul & Spiti',
      region: 'High Himalayas',
      coords: '32.2461° N, 78.0349° E',
      elevation: '3,800m Passes',
      tag: 'Pan-India Epic',
      desc: 'Barren moonscapes, thousand-year-old cliff monasteries, crystal star-drenched night skies, and high-altitude solitude.',
      image: 'NATURE/119632.jpg',
      fallback: 'NATURE/119632.jpg',
      season: 'Jun – Sep · High Passes',
      stats: { duration: '7 Days', score: '3,800m' }
    }
  ],

  /* Main render */
  render(container) {
    const store = window.wayfarerStore;
    const profile = store?.getProfile?.() || {};
    const odishaDests = window.ODISHA_DATA?.destinations || [];
    const holidays = window.HOLIDAYS_DATA;
    const expedition = window.EXPEDITION_DATA || {};
    const nextHoliday = holidays?.getNextLongWeekend?.();
    const lowCostEscapes = window.AntaraCostEngine?.getLowCostEscapes?.({ maxDistanceKm: 120, maxCostINR: 1500 }) || odishaDests.slice(0, 4);
    const origin = window.AntaraCostEngine?.getOriginCoords?.() || { name: 'Bhubaneswar' };

    container.innerHTML = this._buildHTML({
      profile,
      odishaDests,
      nextHoliday,
      expedition,
      lowCostEscapes,
      origin
    });

    this._bindEvents(container);
    this._updateDeckCards();
    this._initCustomCursor();
    this._startDeckAutoplay();
  },

  _buildHTML({ profile, odishaDests, nextHoliday, expedition, lowCostEscapes, origin }) {
    const activeSpot = this.deckSpots[this.currentDeckIndex] || this.deckSpots[0];
    const trails = expedition.trails || [];
    const guides = expedition.guides || [];
    const sustainability = expedition.sustainability || { stats: [] };
    const scrapbook = expedition.scrapbook || [];
    const quiz = expedition.quiz || { questions: [] };
    const activeTrail = trails.find(t => t.id === this.selectedTrailId) || trails[0];

    return `
      <div class="wf-discover theme-mode-${this.currentThemeMode}" id="nx-discover-root">

        <!-- =====================================================================
             1. SPATIAL VISION HORIZON HERO SECTION (Apple Vision Pro & Dark wild)
        ====================================================================== -->
        <section class="spatial-hero-wrapper" id="spatial-hero">
          
          <!-- Ambient blurred backdrop corresponding to active destination -->
          <img
            id="spatial-ambient-img"
            src="${activeSpot.image}"
            alt="${activeSpot.name}"
            class="spatial-ambient-bg"
            onerror="this.src='${activeSpot.fallback}'"
          />
          <div class="spatial-ambient-glow"></div>
          <div class="spatial-vignette"></div>

          <!-- Top bar with Signature Theme Switcher & Quick Search -->
          <div class="spatial-top-bar">
            
            <!-- 3 Signature Design Themes -->
            <div class="nx-theme-pills" role="tablist" aria-label="Visual Theme Modes">
              <button
                class="nx-theme-pill-btn ${this.currentThemeMode === 'spatial' ? 'active' : ''}"
                onclick="WFDiscoverView.setThemeMode('spatial')"
                title="Apple Vision Pro 3D Horizon"
              >
                <span>🔮</span> <span>Spatial 3D</span>
              </button>
              <button
                class="nx-theme-pill-btn mode-cinematic ${this.currentThemeMode === 'cinematic' ? 'active' : ''}"
                onclick="WFDiscoverView.setThemeMode('cinematic')"
                title="Cinematic Wild Adventure"
              >
                <span>🌲</span> <span>Wild Adventure</span>
              </button>
              <button
                class="nx-theme-pill-btn mode-organic ${this.currentThemeMode === 'organic' ? 'active' : ''}"
                onclick="WFDiscoverView.setThemeMode('organic')"
                title="Editorial Organic Eco-Luxury"
              >
                <span>🌿</span> <span>Eco-Luxury</span>
              </button>
            </div>

            <!-- Vision Top Capsule Search -->
            <div
              class="spatial-search-capsule"
              onclick="window.WayfarerCommandPalette && WayfarerCommandPalette.toggle()"
            >
              <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Explore 120+ Wilderness Spots...</span>
              <kbd class="text-[9px] bg-white/10 px-1.5 py-0.5 rounded font-mono text-white/70">⌘K</kbd>
            </div>

            <!-- Quiz Shortcut CTA -->
            <button
              onclick="WFDiscoverView.scrollToQuiz()"
              class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-xs font-semibold transition-all cursor-pointer"
            >
              <span>✨</span> <span>Find My Soul Vibe</span>
            </button>
          </div>

          <!-- 3D CAROUSEL PERSPECTIVE STAGE -->
          <div class="spatial-stage" id="spatial-stage" role="region" aria-label="3D Destination Carousel">
            <div class="spatial-deck" id="spatial-deck">
              ${this.deckSpots.map((spot, idx) => `
                <article
                  class="spatial-card pos-hidden"
                  id="spatial-card-${idx}"
                  data-index="${idx}"
                  onclick="WFDiscoverView.onCardClick(${idx})"
                  tabindex="0"
                  aria-label="${spot.name}"
                >
                  <div class="spatial-card-inner">
                    <img
                      src="${spot.image}"
                      alt="${spot.name}"
                      class="spatial-card-img"
                      loading="lazy"
                      onerror="this.src='${spot.fallback}'"
                    />
                    <div class="spatial-card-scrim"></div>

                    <!-- Top Floating Action Pill & Icons -->
                    <div class="spatial-card-top">
                      <span class="spatial-pill-tag">${spot.tag}</span>
                      <div class="spatial-actions-group">
                        <button
                          class="spatial-glass-icon-btn"
                          onclick="event.stopPropagation(); WFDiscoverView.toggleLike(this, '${spot.id}')"
                          title="Favorite place"
                          aria-label="Like"
                        >
                          ♥
                        </button>
                        <button
                          class="spatial-glass-icon-btn"
                          onclick="event.stopPropagation(); WFDiscoverView.quickSave(this, '${spot.id}', '${spot.name}')"
                          title="Save to Travel Bag"
                          aria-label="Save"
                        >
                          📌
                        </button>
                      </div>
                    </div>

                    <!-- Bottom Glass Overlay Content -->
                    <div class="spatial-card-body">
                      <div class="spatial-coords-label">
                        <span>📍 ${spot.district}</span>
                        <span class="opacity-40">·</span>
                        <span>${spot.coords}</span>
                      </div>
                      <h3 class="spatial-card-title">${spot.name}</h3>
                      <p class="spatial-card-desc">${spot.desc}</p>
                      
                      <div class="spatial-card-footer">
                        <div class="spatial-meta-pills">
                          <span>${spot.elevation}</span>
                          <span class="opacity-30">|</span>
                          <span>${spot.season}</span>
                        </div>
                        <button
                          class="spatial-expand-btn"
                          onclick="event.stopPropagation(); WFDiscoverView.expandSpot('${spot.id}')"
                        >
                          <span>Expand</span>
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>

          <!-- FLOATING VISION MEDIA PILL CONTROLLER (Bottom Dock) -->
          <div class="spatial-bottom-dock" id="spatial-dock">
            <div class="spatial-dock-avatar">
              <img id="dock-avatar-img" src="${activeSpot.image}" alt="${activeSpot.name}" onerror="this.src='${activeSpot.fallback}'" />
            </div>
            
            <div class="spatial-dock-info">
              <span class="spatial-dock-title" id="dock-title">${activeSpot.name}</span>
              <span class="spatial-dock-sub" id="dock-sub">${activeSpot.subtitle}</span>
            </div>

            <div class="spatial-dock-controls">
              <!-- Soundscape Ambiance Toggle -->
              <button
                class="spatial-dock-btn"
                onclick="WFDiscoverView.toggleAmbiance(this)"
                title="Toggle Nature Soundscape"
                aria-label="Nature Soundscape"
                id="btn-ambiance-toggle"
              >
                <span>🍃</span>
              </button>

              <!-- Prev / Next 3D Arrows -->
              <button
                class="spatial-dock-btn"
                onclick="WFDiscoverView.rotateDeck(-1)"
                title="Previous Destination (←)"
                aria-label="Previous"
              >
                ‹
              </button>
              <span class="spatial-dock-counter" id="dock-counter">01 / 07</span>
              <button
                class="spatial-dock-btn"
                onclick="WFDiscoverView.rotateDeck(1)"
                title="Next Destination (→)"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>

        </section>

        <!-- =====================================================================
             2. INTERACTIVE EXPEDITION VIBE MATCHER QUIZ (Template 1 & 5)
        ====================================================================== -->
        <section class="nx-quiz-section" id="vibe-quiz-section">
          <div class="nx-quiz-banner">
            <div class="nx-quiz-glow"></div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">
                <span>✨</span>
                <span>Personalized Intelligence Engine</span>
              </div>
              <h2 class="text-white font-serif text-3xl md:text-4xl font-light mt-1">Find Your Soul Expedition in 30 Seconds</h2>
              <p class="text-white/70 text-sm max-w-xl mt-2 leading-relaxed">
                Answer 3 quick sensory questions and our spatial itinerary engine will instantly pair your vibe with the ideal hidden wilderness sanctuaries across Odisha.
              </p>

              <!-- Step 1: Terrain -->
              <div class="mt-8">
                <div class="text-xs uppercase tracking-wider text-emerald-300 font-mono font-medium">Step 1 · Landscape Calling</div>
                <div class="nx-quiz-options-grid">
                  ${(quiz.questions[0]?.options || []).map(opt => `
                    <div
                      class="nx-quiz-option-card ${this.quizAnswers.terrain === opt.id ? 'selected' : ''}"
                      onclick="WFDiscoverView.selectQuizOption('terrain', '${opt.id}', this)"
                    >
                      <div class="text-2xl mb-1">${opt.icon}</div>
                      <div class="text-white font-semibold text-sm">${opt.label}</div>
                      <div class="text-white/60 text-xs mt-1 leading-normal">${opt.desc}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Step 2: Pace -->
              <div class="mt-6">
                <div class="text-xs uppercase tracking-wider text-emerald-300 font-mono font-medium">Step 2 · Expedition Pace</div>
                <div class="nx-quiz-options-grid">
                  ${(quiz.questions[1]?.options || []).map(opt => `
                    <div
                      class="nx-quiz-option-card ${this.quizAnswers.pace === opt.id ? 'selected' : ''}"
                      onclick="WFDiscoverView.selectQuizOption('pace', '${opt.id}', this)"
                    >
                      <div class="text-2xl mb-1">${opt.icon}</div>
                      <div class="text-white font-semibold text-sm">${opt.label}</div>
                      <div class="text-white/60 text-xs mt-1 leading-normal">${opt.desc}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Match Result Box -->
              <div id="quiz-result-area">
                ${this._renderQuizResultBox()}
              </div>

            </div>
          </div>
        </section>

        <!-- =====================================================================
             3. MULTI-DAY EXPEDITION TRAILS & ELEVATION PROFILE (Template 5)
        ====================================================================== -->
        <section class="nx-trail-section">
          <div class="nx-trail-card">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span class="wf-label text-emerald-600 dark:text-emerald-400">Epic Wilderness Expeditions</span>
                <h2 class="wf-headline wf-text-primary mt-1">Multi-Day Trails &amp; Elevation Atlas</h2>
                <p class="wf-text-muted text-sm mt-1 max-w-xl">
                  Detailed topographical elevation graphs, wilderness waypoints, and day-by-day expedition routing.
                </p>
              </div>

              <!-- Trail selector tabs -->
              <div class="nx-trail-tabs">
                ${trails.map(t => `
                  <button
                    class="nx-trail-tab-btn ${t.id === this.selectedTrailId ? 'active' : ''}"
                    onclick="WFDiscoverView.selectTrail('${t.id}')"
                  >
                    ${t.title}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Active Trail Detail Box -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              
              <!-- Left: Image & Badge -->
              <div class="relative rounded-2xl overflow-hidden h-64 lg:h-80">
                <img
                  src="${activeTrail.heroImg}"
                  alt="${activeTrail.title}"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <span class="px-2.5 py-1 rounded-full bg-emerald-500/80 text-[10px] uppercase font-bold tracking-wider">${activeTrail.difficulty}</span>
                  <h4 class="font-serif text-xl font-medium mt-2">${activeTrail.title}</h4>
                  <p class="text-xs text-white/80 mt-1">${activeTrail.subtitle} · ${activeTrail.season}</p>
                </div>
              </div>

              <!-- Right: Elevation Profile & Waypoints -->
              <div class="lg:col-span-2 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs wf-text-muted mb-2 font-mono">
                    <span>ELEVATION PROFILE (${activeTrail.maxElevation})</span>
                    <span>DISTANCE: ${activeTrail.totalDistanceKm} KM</span>
                  </div>

                  <!-- Dynamic SVG Elevation Graph -->
                  <div class="nx-elevation-wrap">
                    <svg viewBox="0 0 600 120" class="w-full h-full preserve-3d" style="overflow:visible">
                      <defs>
                        <linearGradient id="elevationGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#02C39A" stop-opacity="0.55" />
                          <stop offset="100%" stop-color="#02C39A" stop-opacity="0.0" />
                        </linearGradient>
                      </defs>
                      <!-- Path based on trail profile -->
                      <path
                        d="${this._generateElevationSvgPath(activeTrail.elevationProfile)}"
                        fill="url(#elevationGrad)"
                        stroke="#02C39A"
                        stroke-width="2.5"
                      />
                      <!-- Key summit waypoint dots -->
                      ${activeTrail.waypoints.map((w, idx) => {
                        const total = activeTrail.waypoints.length;
                        const cx = (idx / (total - 1)) * 560 + 20;
                        const cy = Math.max(15, 110 - (w.elevation / 18));
                        return `
                          <circle cx="${cx}" cy="${cy}" r="4.5" fill="#FFFFFF" stroke="#02C39A" stroke-width="2">
                            <title>${w.name} (${w.elevation}m)</title>
                          </circle>
                          <text x="${cx}" y="${cy - 8}" text-anchor="middle" font-size="9" fill="#02C39A" font-family="monospace">${w.elevation}m</text>
                        `;
                      }).join('')}
                    </svg>
                  </div>
                </div>

                <!-- Waypoint Steps Grid -->
                <div class="nx-waypoints-grid">
                  ${activeTrail.waypoints.map(w => `
                    <div class="nx-waypoint-item">
                      <div class="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">DAY ${w.day} · ${w.elevation}M</div>
                      <div class="font-medium text-xs wf-text-primary mt-0.5">${w.name}</div>
                      <div class="text-[10px] wf-text-muted mt-1 leading-snug">${w.desc}</div>
                    </div>
                  `).join('')}
                </div>

                <!-- CTA -->
                <div class="flex items-center justify-between mt-5 pt-4 border-t wf-border">
                  <div class="text-xs wf-text-muted">
                    <span>${activeTrail.highlights.join(' · ')}</span>
                  </div>
                  <button
                    onclick="ANTARA.switchView('trips')"
                    class="wf-btn wf-btn-primary wf-btn-sm"
                  >
                    Launch Trail Expedition →
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        <!-- =====================================================================
             4. VERIFIED WILDERNESS GUIDES DIRECTORY (Template 5)
        ====================================================================== -->
        <section class="nx-guides-section">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
            <div>
              <span class="wf-label text-emerald-600 dark:text-emerald-400">Certified Local Expertise</span>
              <h2 class="wf-headline wf-text-primary mt-1">Our Verified Expedition Guides</h2>
              <p class="wf-text-muted text-sm mt-1 max-w-lg">
                Certified wildlife naturalists, Himalayan-trained mountaineers, and epigraphists guiding your journey safely.
              </p>
            </div>
            <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">100% Accredited &amp; Local</span>
          </div>

          <div class="nx-guides-grid">
            ${guides.map(g => `
              <div class="nx-guide-card group">
                <img
                  src="${g.avatar}"
                  alt="${g.name}"
                  class="nx-guide-avatar group-hover:scale-105 transition-transform"
                />
                <span class="nx-guide-badge">${g.badge}</span>
                <h4 class="font-serif text-lg font-bold wf-text-primary mt-1">${g.name}</h4>
                <div class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">${g.role}</div>
                <div class="text-xs wf-text-muted mt-1 font-mono">${g.region}</div>
                
                <div class="flex items-center gap-1 my-3 text-amber-400 text-xs font-bold">
                  <span>★ ${g.rating}</span>
                  <span class="text-neutral-400 font-normal">(${g.expeditionsCount} expeditions)</span>
                </div>

                <p class="text-xs wf-text-muted leading-relaxed line-clamp-2">${g.bio}</p>

                <div class="mt-4 pt-3 border-t wf-border w-full flex items-center justify-between">
                  <div class="text-[10px] wf-text-muted font-mono">${g.languages.join(', ')}</div>
                  <button
                    onclick="WFDiscoverView.consultGuide('${g.name}')"
                    class="px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Consult Guide →
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- =====================================================================
             5. ECO-LUXURY SUSTAINABILITY & CONSERVATION (Template 3)
        ====================================================================== -->
        <section class="nx-sustainability-section">
          <div class="nx-sustainability-box">
            
            <div class="max-w-xl">
              <span class="text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">Sustainable Nature Stewardship</span>
              <h2 class="font-serif text-3xl md:text-4xl font-light text-white mt-1">Responsible Luxury in Harmony with Nature</h2>
              <p class="text-white/70 text-sm mt-2 leading-relaxed">
                We believe true luxury is pristine wild silence. 100% of our recommended wilderness campsites are run directly by indigenous forest protection committees.
              </p>
            </div>

            <div class="nx-stats-grid">
              ${(sustainability.stats || []).map(st => `
                <div class="nx-stat-tile">
                  <div class="nx-stat-number">${st.value}</div>
                  <div class="text-white font-medium text-sm mt-1">${st.label}</div>
                  <div class="text-white/60 text-xs mt-1 leading-snug">${st.sub}</div>
                </div>
              `).join('')}
            </div>

            <!-- Eco-pledge button -->
            <div class="mt-8 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/10">
              <div class="text-xs text-white/70">
                🌿 Join 1,420+ adventurers committed to the Leave-No-Trace wilderness pledge.
              </div>
              <button
                onclick="WFDiscoverView.takeEcoPledge(this)"
                class="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                Sign Eco-Traveler Pledge ✨
              </button>
            </div>

          </div>
        </section>

        <!-- =====================================================================
             6. POLAROID FIELD SCRAPBOOK & LIVE MEMORIES (Template 1)
        ====================================================================== -->
        <section class="nx-scrapbook-section">
          <div class="flex items-end justify-between gap-4 mb-2">
            <div>
              <span class="wf-label text-emerald-600 dark:text-emerald-400">Traveler Field Notes</span>
              <h2 class="wf-headline wf-text-primary mt-1">Live Explorer Scrapbook</h2>
              <p class="wf-text-muted text-sm mt-1">Raw, unedited moments from travelers wandering through Odisha's wild peaks and lagoons.</p>
            </div>
            <button
              onclick="ANTARA.switchView('journal')"
              class="wf-btn wf-btn-ghost wf-btn-sm"
            >
              Add Your Story →
            </button>
          </div>

          <div class="nx-polaroid-gallery">
            ${scrapbook.map((mem, i) => `
              <div
                class="nx-polaroid-card"
                style="transform: rotate(${mem.rot}deg);"
                onclick="WFDiscoverView.openPhotoModal('${mem.img}', '${mem.title}')"
              >
                <div class="nx-polaroid-tape"></div>
                <img src="${mem.img}" alt="${mem.title}" class="nx-polaroid-img" />
                <div class="nx-polaroid-caption">${mem.title}</div>
                <div class="nx-polaroid-note">"${mem.note}"</div>
                
                <div class="flex items-center justify-between mt-3 pt-2 border-t border-black/10 text-[10px] text-neutral-500 font-mono">
                  <span>${mem.author}</span>
                  <button
                    onclick="event.stopPropagation(); WFDiscoverView.likeMemory(this)"
                    class="text-red-500 font-bold hover:scale-110 transition-transform"
                  >
                    ♥ ${mem.likes}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- =====================================================================
             7. UPCOMING LONG WEEKEND & FUEL-ONLY DAY ESCAPES
        ====================================================================== -->
        ${nextHoliday ? `
        <section class="wf-page-content py-6">
          <div class="antara-weekend-banner">
            <div class="antara-weekend-glow"></div>
            <div class="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="antara-weekend-icon">📅</div>
                <div>
                  <div class="text-amber-300 text-[10px] tracking-widest uppercase font-mono mb-0.5">Upcoming Long Weekend · Plan Ahead</div>
                  <div class="text-white text-lg md:text-xl font-serif font-light">${nextHoliday.label}</div>
                  <div class="text-white/70 text-xs mt-0.5">${nextHoliday.description} · <span class="font-bold text-white">${nextHoliday.days} Days</span></div>
                </div>
              </div>
              <div class="flex gap-2 flex-wrap">
                <button onclick="ANTARA.switchView('trips')" class="antara-weekend-pill-primary">Create Trip Itinerary →</button>
              </div>
            </div>
          </div>
        </section>` : ''}

        <!-- Low Cost Fuel Day Escapes -->
        <section class="wf-page-content py-10">
          <div class="wf-section-header">
            <div>
              <div class="wf-section-eyebrow">From ${origin.name} · Under ₹1,500</div>
              <h2 class="wf-headline wf-text-primary mt-1">Fuel-Only Weekend Escapes</h2>
              <p class="wf-text-muted text-sm mt-1 max-w-md">Getaways within 120 km requiring just bike fuel — no overnight stay needed.</p>
            </div>
            <button onclick="ANTARA.switchView('explore');" class="wf-btn wf-btn-ghost wf-btn-sm hidden md:flex">Browse All Escapes →</button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 wf-stagger">
            ${lowCostEscapes.slice(0, 4).map(dest => `
              <div class="wf-card wf-card-lift rounded-2xl overflow-hidden cursor-pointer group" onclick="AntaraAudio?.playTap?.(); ANTARA.openDestPanel('${dest.id}','odisha')">
                <div class="relative h-36 overflow-hidden">
                  <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.src='NATURE/119632.jpg';" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span class="absolute top-2 left-2 wf-badge wf-badge-gold text-[9px]">${dest.distanceFromOriginKm || 0} km</span>
                </div>
                <div class="p-4">
                  <h4 class="font-serif wf-text-primary text-base font-semibold leading-tight group-hover:text-emerald-600 transition-colors">${dest.name}</h4>
                  <p class="wf-text-muted text-xs mt-0.5">${dest.district || ''} · ${dest.category || 'Nature'}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

      </div>
    `;
  },

  /* ------------------------------------------------------------------ */
  /* 3D CAROUSEL DECK LOGIC & ANIMATIONS                                */
  /* ------------------------------------------------------------------ */
  _updateDeckCards() {
    const total = this.deckSpots.length;
    const current = this.currentDeckIndex;

    this.deckSpots.forEach((_, idx) => {
      const cardEl = document.getElementById(`spatial-card-${idx}`);
      if (!cardEl) return;

      // Calculate relative position offset (-2, -1, 0, 1, 2)
      let diff = (idx - current) % total;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      cardEl.className = 'spatial-card';

      if (diff === 0) {
        cardEl.classList.add('pos-0');
      } else if (diff === 1) {
        cardEl.classList.add('pos-1');
      } else if (diff === -1) {
        cardEl.classList.add('pos--1');
      } else if (diff === 2) {
        cardEl.classList.add('pos-2');
      } else if (diff === -2) {
        cardEl.classList.add('pos--2');
      } else {
        cardEl.classList.add('pos-hidden');
      }
    });

    // Update bottom dock
    const active = this.deckSpots[current];
    if (active) {
      const titleEl = document.getElementById('dock-title');
      const subEl = document.getElementById('dock-sub');
      const counterEl = document.getElementById('dock-counter');
      const avatarEl = document.getElementById('dock-avatar-img');
      const ambientEl = document.getElementById('spatial-ambient-img');

      if (titleEl) titleEl.textContent = active.name;
      if (subEl) subEl.textContent = active.subtitle;
      if (counterEl) counterEl.textContent = `0${current + 1} / 0${total}`;
      if (avatarEl) avatarEl.src = active.image;
      if (ambientEl) ambientEl.src = active.image;
    }
  },

  rotateDeck(direction) {
    window.AntaraAudio?.playTap?.();
    const total = this.deckSpots.length;
    this.currentDeckIndex = (this.currentDeckIndex + direction + total) % total;
    this._updateDeckCards();
  },

  onCardClick(index) {
    if (this.currentDeckIndex === index) {
      // Already active -> expand
      this.expandSpot(this.deckSpots[index].id);
    } else {
      window.AntaraAudio?.playTap?.();
      this.currentDeckIndex = index;
      this._updateDeckCards();
    }
  },

  expandSpot(destId) {
    window.AntaraAudio?.playTap?.();
    if (window.ANTARA?.openDestPanel) {
      window.ANTARA.openDestPanel(destId, 'odisha');
    }
  },

  toggleLike(btn, id) {
    window.AntaraAudio?.playLike?.();
    btn.classList.toggle('liked');
    window.WFNotify?.show('Saved to your Favorites ♥', 'success');
  },

  quickSave(btn, id, name) {
    window.AntaraAudio?.playTap?.();
    btn.classList.toggle('saved');
    if (window.wayfarerStore?.toggleSaved) {
      window.wayfarerStore.toggleSaved(id);
    }
    window.WFNotify?.show(`Added ${name} to Travel Bag 📌`, 'success');
  },

  /* ------------------------------------------------------------------ */
  /* THEME MODE SWITCHER (Spatial / Wild Adventure / Eco-Luxury)        */
  /* ------------------------------------------------------------------ */
  setThemeMode(mode) {
    window.AntaraAudio?.playTap?.();
    this.currentThemeMode = mode;
    const root = document.getElementById('nx-discover-root');
    if (root) {
      root.className = `wf-discover theme-mode-${mode}`;
    }
    // Update active pill button
    const btns = document.querySelectorAll('.nx-theme-pill-btn');
    btns.forEach(b => b.classList.remove('active'));
    event?.currentTarget?.classList?.add('active');

    const labels = {
      spatial: '🔮 Spatial 3D Horizon Mode active',
      cinematic: '🌲 Wild Cinematic Adventure Mode active',
      organic: '🌿 Sustainable Eco-Luxury Mode active'
    };
    window.WFNotify?.show(labels[mode] || 'Theme updated', 'info');
  },

  /* ------------------------------------------------------------------ */
  /* AMBIENCE NATURE AUDIO                                              */
  /* ------------------------------------------------------------------ */
  toggleAmbiance(btn) {
    if (window.AntaraAudio?.toggleAmbiance) {
      window.AntaraAudio.toggleAmbiance(btn);
      this.isAmbiancePlaying = !this.isAmbiancePlaying;
      if (btn) {
        btn.classList.toggle('bg-emerald-500/40', this.isAmbiancePlaying);
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* QUIZ LOGIC & RESULTS                                               */
  /* ------------------------------------------------------------------ */
  selectQuizOption(category, value, el) {
    window.AntaraAudio?.playTap?.();
    this.quizAnswers[category] = value;

    // Highlight selected card in group
    const parent = el.parentElement;
    parent.querySelectorAll('.nx-quiz-option-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');

    // Re-render result box with sound
    const resultArea = document.getElementById('quiz-result-area');
    if (resultArea) {
      resultArea.innerHTML = this._renderQuizResultBox();
      window.AntaraAudio?.playChime?.();
    }
  },

  _renderQuizResultBox() {
    const expedition = window.EXPEDITION_DATA || {};
    const key = `${this.quizAnswers.terrain}_${this.quizAnswers.pace}`;
    const match = expedition.quiz?.matches?.[key] || expedition.quiz?.matches?.['default'];

    return `
      <div class="nx-quiz-result-box">
        <div class="relative w-full md:w-56 h-36 rounded-2xl overflow-hidden flex-shrink-0">
          <img src="${match.image}" alt="${match.name}" class="w-full h-full object-cover" />
          <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-500 text-black text-[10px] font-bold uppercase font-mono">${match.matchScore} Match</span>
        </div>
        <div class="flex-1">
          <div class="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">${match.badge}</div>
          <h4 class="font-serif text-white text-2xl font-medium mt-0.5">${match.name}</h4>
          <p class="text-white/70 text-xs mt-1 leading-relaxed">${match.why}</p>
          <div class="flex items-center gap-4 mt-3 text-xs font-mono text-white/60">
            <span>📅 Best: ${match.bestMonth}</span>
            <span>💰 Est: ${match.estBudget}</span>
          </div>
        </div>
        <div class="flex-shrink-0 flex flex-col gap-2">
          <button
            onclick="WFDiscoverView.expandSpot('${match.destId}')"
            class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-md cursor-pointer"
          >
            Explore Sanctuary →
          </button>
          <button
            onclick="ANTARA.switchView('trips')"
            class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all cursor-pointer"
          >
            Plan Itinerary 🗺️
          </button>
        </div>
      </div>
    `;
  },

  scrollToQuiz() {
    document.getElementById('vibe-quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  },

  /* ------------------------------------------------------------------ */
  /* TRAIL SWITCHER & SVG PATH                                          */
  /* ------------------------------------------------------------------ */
  selectTrail(trailId) {
    window.AntaraAudio?.playTap?.();
    this.selectedTrailId = trailId;
    const container = document.getElementById('view-discover');
    if (container) this.render(container);
  },

  _generateElevationSvgPath(points) {
    if (!points || points.length === 0) return 'M 0 100 L 600 100';
    const maxVal = Math.max(...points, 1800);
    const step = 560 / (points.length - 1);

    const coords = points.map((val, i) => {
      const x = 20 + i * step;
      const y = Math.max(15, 110 - (val / maxVal) * 95);
      return `${x},${y}`;
    });

    let d = `M 20,${coords[0].split(',')[1]} `;
    for (let i = 1; i < coords.length; i++) {
      const [prevX, prevY] = coords[i - 1].split(',').map(Number);
      const [curX, curY] = coords[i].split(',').map(Number);
      const cpX = (prevX + curX) / 2;
      d += `C ${cpX},${prevY} ${cpX},${curY} ${curX},${curY} `;
    }
    // Close to bottom for gradient fill
    d += `L 580,115 L 20,115 Z`;
    return d;
  },

  /* ------------------------------------------------------------------ */
  /* GUIDE CONSULTATION & ECO PLEDGE                                    */
  /* ------------------------------------------------------------------ */
  consultGuide(guideName) {
    window.AntaraAudio?.playTap?.();
    window.WFNotify?.show(`Connected with ${guideName}! A field briefing has been opened.`, 'success');
  },

  takeEcoPledge(btn) {
    window.AntaraAudio?.playChime?.();
    btn.textContent = 'Pledge Signed! 🏅 (Eco Guardian)';
    btn.classList.add('bg-emerald-400');
    window.WFNotify?.show('Thank you! Digital Leave-No-Trace Guardian stamp unlocked.', 'success');
  },

  openPhotoModal(src, title) {
    window.AntaraAudio?.playTap?.();
    if (window.ANTARA?.openLightbox) {
      window.ANTARA.openLightbox(src, title);
    }
  },

  likeMemory(btn) {
    window.AntaraAudio?.playLike?.();
    btn.innerHTML = '♥ 125';
  },

  /* ------------------------------------------------------------------ */
  /* EVENTS & KEYBOARD NAVIGATION                                       */
  /* ------------------------------------------------------------------ */
  _bindEvents(container) {
    // Arrow key navigation for 3D carousel
    document.addEventListener('keydown', (e) => {
      if (window.ANTARA?.currentView !== 'discover') return;
      if (e.key === 'ArrowLeft') {
        this.rotateDeck(-1);
      } else if (e.key === 'ArrowRight') {
        this.rotateDeck(1);
      }
    });

    // Touch swipe handling on stage
    const stage = document.getElementById('spatial-stage');
    if (stage) {
      let touchStartX = 0;
      stage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
      stage.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          this.rotateDeck(diff > 0 ? 1 : -1);
        }
      }, { passive: true });
    }
  },

  _startDeckAutoplay() {
    clearInterval(this.autoplayTimer);
    this.autoplayTimer = setInterval(() => {
      // Gentle rotation every 9s if tab is active
      if (document.visibilityState === 'visible' && window.ANTARA?.currentView === 'discover') {
        this.rotateDeck(1);
      }
    }, 9000);
  },

  /* ------------------------------------------------------------------ */
  /* CUSTOM MAGNETIC CURSOR                                             */
  /* ------------------------------------------------------------------ */
  _initCustomCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const dot = document.getElementById('nx-cursor-dot');
    const ring = document.getElementById('nx-cursor-ring');
    if (!dot || !ring) return;

    window.addEventListener('mousemove', (e) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Expand on buttons and cards
    document.querySelectorAll('button, a, .spatial-card, .nx-quiz-option-card').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });
  }
};
