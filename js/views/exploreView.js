/* ==========================================================================
   ANTARA — Explore View v2.0
   Unified Multiverse Explorer: Odisha (105) · Pan-India (39) · Global (41)
   Total: 185+ Verified Travel Destinations
   ========================================================================== */

window.WFExploreView = {
  activeScope: 'odisha', // 'odisha' | 'india' | 'global'
  activeCategory: 'All',
  activeDistrict: 'All',
  activeCostTier: 'All',
  searchQuery: '',
  viewMode: 'grid',

  CATEGORIES: ['All', 'Beach', 'Heritage', 'Wildlife', 'Waterfall', 'Mountain', 'Spiritual', 'Culture', 'Lake', 'Nature', 'Archaeology'],

  render(container) {
    const odishaDests = window.ODISHA_DATA?.destinations || [];
    const indiaDests = window.INDIA_TRAVEL_DATA?.destinations || [];
    const globalDests = window.GLOBAL_TRAVEL_DATA?.destinations || [];

    let currentList = odishaDests;
    let heroTitle = `30 Districts · ${odishaDests.length} Destinations`;
    let heroSubtitle = "From Chilika's flamingo lagoon to Simlipal's tiger forests and Deomali peaks—explore every corner of Odisha.";
    let heroTag = "Explore · Odisha First";
    let subfilterLabel = "All 30 Districts";
    let subfilterOptions = (window.ODISHA_DATA?.districts || []).map(d => ({
      value: d.name,
      label: `${d.name} (${odishaDests.filter(o => o.district === d.name).length})`
    }));

    if (this.activeScope === 'india') {
      currentList = indiaDests;
      heroTitle = `28 States & 8 UTs · ${indiaDests.length} Premier Destinations`;
      heroSubtitle = "From Ladakh & Spiti high mountain passes to Thar desert sands, Western Ghats waterfalls, and Kerala backwaters.";
      heroTag = "Explore · Incredible India";
      subfilterLabel = "All States & UTs";
      const states = window.INDIA_TRAVEL_DATA?.statesAndUTs || [];
      subfilterOptions = states
        .filter(s => indiaDests.some(d => d.state === s.name))
        .map(s => ({
          value: s.name,
          label: `${s.name} (${indiaDests.filter(d => d.state === s.name).length})`
        }));
    } else if (this.activeScope === 'global') {
      currentList = globalDests;
      heroTitle = `32 Countries · ${globalDests.length} Global Wonders`;
      heroSubtitle = "World-class destinations with visa intelligence, entry requirements, flight hubs, and daily budgets for Indian passport holders.";
      heroTag = "Explore · Global Horizons";
      subfilterLabel = "All 32 Countries";
      const countries = window.GLOBAL_TRAVEL_DATA?.countries || [];
      subfilterOptions = countries.map(c => ({
        value: c.name,
        label: `${c.name} (${(c.flagshipDestinations || []).length})`
      }));
    }

    const filtered = this._filter(currentList);
    const totalCount = currentList.length;

    container.innerHTML = `
      <div class="wf-explore animate-fade-in">

        <!-- ═══ HERO STRIP ═══ -->
        <div class="relative overflow-hidden rounded-b-[2.5rem] md:rounded-b-[3.5rem] shadow-xl border-b border-amber-400/20" style="height:340px;background:var(--accent-forest)">
          <img
            src="${this.activeScope === 'global' ? 'NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg' : (this.activeScope === 'india' ? 'NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg' : 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=80')}"
            alt="Explore ANTARA"
            class="absolute inset-0 w-full h-full object-cover opacity-40"
            loading="eager"
            onerror="this.src='NATURE/119632.jpg';"
          />
          <div class="absolute inset-0" style="background:linear-gradient(135deg,rgba(11,26,18,0.95) 0%,rgba(11,26,18,0.65) 60%,rgba(11,26,18,0.2) 100%)"></div>

          <div class="absolute inset-0 flex flex-col justify-end wf-page-content pb-8 pt-28">
            <div class="wf-label text-amber-400 mb-2">${heroTag}</div>
            <h1 class="font-serif text-white font-light leading-tight mb-2" style="font-size:clamp(1.8rem,4vw,3.2rem)">
              ${heroTitle}
            </h1>
            <p class="text-white/70 text-sm max-w-xl leading-relaxed">
              ${heroSubtitle}
            </p>
          </div>
        </div>

        <!-- ═══ STICKY FILTER BAR ═══ -->
        <div class="sticky top-0 z-30 wf-glass border-b wf-border shadow-md" style="top:72px">
          <div class="wf-page-content py-3 space-y-3">

            <!-- Scope Switcher Tabs -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scroll">
              <button
                onclick="WFExploreView._setScope('odisha')"
                class="px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${this.activeScope==='odisha' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-[1.02]' : 'wf-bg-secondary wf-text-muted hover:wf-text-primary border wf-border'}"
              >
                <span>🏛️</span>
                <span>Odisha</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full ${this.activeScope==='odisha' ? 'bg-black/20 text-black' : 'bg-stone-200 dark:bg-stone-800 wf-text-muted'}">${odishaDests.length}</span>
              </button>

              <button
                onclick="WFExploreView._setScope('india')"
                class="px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${this.activeScope==='india' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-[1.02]' : 'wf-bg-secondary wf-text-muted hover:wf-text-primary border wf-border'}"
              >
                <span>🇮🇳</span>
                <span>Pan-India</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full ${this.activeScope==='india' ? 'bg-black/20 text-black' : 'bg-stone-200 dark:bg-stone-800 wf-text-muted'}">${indiaDests.length}</span>
              </button>

              <button
                onclick="WFExploreView._setScope('global')"
                class="px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${this.activeScope==='global' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-[1.02]' : 'wf-bg-secondary wf-text-muted hover:wf-text-primary border wf-border'}"
              >
                <span>🌐</span>
                <span>International</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full ${this.activeScope==='global' ? 'bg-black/20 text-black' : 'bg-stone-200 dark:bg-stone-800 wf-text-muted'}">${globalDests.length}</span>
              </button>

              <button
                onclick="AntaraAudio?.playTap?.(); ANTARA.switchView('passport'); setTimeout(() => { if (window.WFPassportView) WFPassportView.switchTab('vision_os'); }, 100);"
                class="px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all bg-stone-900 text-white dark:bg-white dark:text-stone-950 border border-white/20 shadow-md hover:scale-[1.03] active:scale-95 ml-auto"
                title="Launch Vision OS Spatial 3D Glass Carousel"
              >
                <span>🥽</span>
                <span>Vision OS 3D Mode</span>
              </button>
            </div>

            <!-- Search + Subfilter Select + View Toggle -->
            <div class="flex items-center gap-3 flex-wrap">
              <!-- Search -->
              <div class="flex-1 relative min-w-[220px]">
                <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 wf-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input
                  type="search"
                  id="explore-search"
                  placeholder="Search ${totalCount} destinations across ${this.activeScope==='global' ? '32 countries' : (this.activeScope==='india' ? 'India' : '30 districts')}..."
                  value="${this.searchQuery}"
                  class="wf-input pl-10 text-sm"
                  autocomplete="off"
                />
              </div>

              <!-- Region / District / Country Select -->
              <select
                id="explore-district-select"
                onchange="WFExploreView._setDistrict(this.value)"
                class="wf-select text-xs py-2.5 px-3 min-w-[150px] font-medium"
              >
                <option value="All">${subfilterLabel} (${totalCount})</option>
                ${subfilterOptions.map(opt => `
                  <option value="${opt.value}" ${this.activeDistrict === opt.value ? 'selected' : ''}>${opt.label}</option>
                `).join('')}
              </select>

              <!-- Cost Tier Filter (only when not global) -->
              ${this.activeScope !== 'global' ? `
                <select
                  id="explore-cost-select"
                  onchange="WFExploreView._setCostTier(this.value)"
                  class="wf-select text-xs py-2.5 px-3 min-w-[140px] font-medium hidden sm:block"
                >
                  <option value="All" ${this.activeCostTier === 'All' ? 'selected' : ''}>All Costs</option>
                  <option value="FREE" ${this.activeCostTier === 'FREE' ? 'selected' : ''}>Free / Entry Free</option>
                  <option value="LOW COST ESCAPE" ${this.activeCostTier === 'LOW COST ESCAPE' ? 'selected' : ''}>Low Cost Escapes</option>
                  <option value="DAY TRIP" ${this.activeCostTier === 'DAY TRIP' ? 'selected' : ''}>Day Trips</option>
                  <option value="BUDGET" ${this.activeCostTier === 'BUDGET' ? 'selected' : ''}>Budget Stays</option>
                  <option value="PREMIUM" ${this.activeCostTier === 'PREMIUM' ? 'selected' : ''}>Resort / Premium</option>
                </select>` : ''}

              <!-- View toggle -->
              <div class="flex rounded-lg overflow-hidden border wf-border flex-shrink-0">
                <button onclick="WFExploreView._setView('grid')" class="px-3 py-2 text-xs transition-colors ${this.viewMode==='grid' ? 'wf-bg-primary wf-text-primary font-semibold' : 'wf-text-muted'}" title="Grid view">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/></svg>
                </button>
                <button onclick="WFExploreView._setView('list')" class="px-3 py-2 text-xs transition-colors ${this.viewMode==='list' ? 'wf-bg-primary wf-text-primary font-semibold' : 'wf-text-muted'}" title="List view">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
                </button>
              </div>
            </div>

            <!-- Category chips scroll -->
            <div class="wf-h-scroll gap-2 hide-scroll">
              ${this.CATEGORIES.map(cat => `
                <button
                  onclick="WFExploreView._setCategory('${cat}')"
                  class="wf-chip ${this.activeCategory === cat ? 'active' : ''}"
                >
                  ${cat === 'All' ? '🌏 ' : ''}${cat}
                </button>`).join('')}
            </div>

            <!-- Active filter indicator badge -->
            ${(this.activeCategory !== 'All' || this.activeDistrict !== 'All' || this.activeCostTier !== 'All' || this.searchQuery) ? `
              <div class="flex items-center gap-2 text-xs wf-text-muted pt-1">
                <span>Showing <strong>${filtered.length}</strong> of ${totalCount} destinations</span>
                ${this.activeCategory !== 'All' ? `<span class="wf-badge wf-badge-forest">${this.activeCategory} <button onclick="WFExploreView._setCategory('All')" class="ml-1 opacity-70">×</button></span>` : ''}
                ${this.activeDistrict !== 'All' ? `<span class="wf-badge wf-badge-gold">${this.activeDistrict} <button onclick="WFExploreView._setDistrict('All')" class="ml-1 opacity-70">×</button></span>` : ''}
                ${this.activeCostTier !== 'All' ? `<span class="wf-badge wf-badge-sage">${this.activeCostTier} <button onclick="WFExploreView._setCostTier('All')" class="ml-1 opacity-70">×</button></span>` : ''}
                ${this.searchQuery ? `<span class="wf-badge wf-badge-muted">"${this.searchQuery}" <button onclick="WFExploreView._clearSearch()" class="ml-1 opacity-70">×</button></span>` : ''}
                <button onclick="WFExploreView._resetFilters()" class="text-xs text-amber-600 dark:text-amber-400 hover:underline ml-auto">Reset all</button>
              </div>` : ''}

          </div>
        </div>

        <!-- ═══ CURATED CIRCUITS STRIP (when All active on Odisha) ═══ -->
        ${(this.activeScope === 'odisha' && !this.searchQuery && this.activeCategory === 'All' && this.activeDistrict === 'All') ? this._renderRoutesStrip() : ''}

        <!-- ═══ MAIN DESTINATIONS GRID ═══ -->
        <div class="wf-page-content py-8">
          ${filtered.length === 0 ? `
            <div class="wf-empty">
              <div class="wf-empty-icon">🔍</div>
              <div class="wf-empty-title">No matching destinations</div>
              <div class="wf-empty-desc">Try resetting your category or ${this.activeScope==='global' ? 'country' : (this.activeScope==='india' ? 'state' : 'district')} filter</div>
              <button onclick="WFExploreView._resetFilters()" class="wf-btn wf-btn-secondary wf-btn-sm mt-4">Reset Filters</button>
            </div>` :
          this.viewMode === 'grid' ? this._renderGrid(filtered) : this._renderList(filtered)}
        </div>

      </div>`;

    // Bind live search
    const searchInput = container.querySelector('#explore-search');
    if (searchInput) {
      let debounce;
      searchInput.addEventListener('input', e => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          this.searchQuery = e.target.value.trim();
          this.render(container);
        }, 250);
      });
    }
  },

  _renderRoutesStrip() {
    const routes = window.ODISHA_DATA?.routes || [];
    if (!routes.length) return '';
    return `
      <div class="wf-page-content pt-6">
        <div class="wf-section-eyebrow mb-3">Curated Travel Circuits</div>
        <div class="wf-h-scroll gap-4 hide-scroll pb-4">
          ${routes.map(route => `
            <div class="wf-card rounded-2xl p-5 flex-shrink-0 border wf-border" style="width:280px">
              <div class="flex items-start justify-between mb-2">
                <h4 class="font-serif wf-text-primary text-base font-semibold leading-tight">${route.name}</h4>
                <span class="wf-badge wf-badge-sage text-[10px]">${route.duration} Days</span>
              </div>
              <p class="wf-text-muted text-xs leading-relaxed mb-3">${route.description}</p>
              <div class="flex items-center justify-between text-xs pt-2 border-t wf-border">
                <span class="wf-text-muted">From</span>
                <span class="font-serif text-amber-600 dark:text-amber-400 font-semibold">₹${(route.estimatedCost?.budget||0).toLocaleString('en-IN')}</span>
              </div>
            </div>`).join('')}
        </div>
        <div class="wf-divider my-4"></div>
      </div>`;
  },

  _renderGrid(dests) {
    return `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 wf-stagger">
        ${dests.map(dest => this._renderDestCard(dest)).join('')}
      </div>`;
  },

  _renderList(dests) {
    return `
      <div class="space-y-3">
        ${dests.map(dest => this._renderDestListItem(dest)).join('')}
      </div>`;
  },

  _renderDestCard(dest) {
    const store = window.wayfarerStore;
    const saved = store?.getDestinations?.()?.find(d => d.id === dest.id);
    const isSaved = !!saved;
    const isInternational = dest.country && dest.country !== 'India';

    return `
      <div
        class="wf-dest-card rounded-2xl overflow-hidden animate-scale-in group wf-card-lift"
        style="height:330px"
        onclick="ANTARA.openDestPanel('${dest.id}','${isInternational ? 'global' : (dest.state ? 'india' : 'odisha')}')"
        tabindex="0"
        role="button"
        aria-label="View ${dest.name}"
      >
        <div class="relative w-full h-full">
          <img
            src="${dest.image}"
            alt="${dest.name}"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onerror="window.handleImageError ? handleImageError(this, '${dest.category || 'Nature'}', '${dest.id}') : (this.src='NATURE/119632.jpg');"
          />
          <div class="absolute inset-0" style="background:linear-gradient(to bottom, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.85) 100%)"></div>

          <!-- Top category badge -->
          <div class="absolute top-3 left-3 flex gap-1 flex-wrap">
            <span class="wf-badge text-[10px]" style="background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);color:white;border:1px solid rgba(255,255,255,0.2)">${dest.category || 'Travel'}</span>
            ${dest.visaType ? `<span class="wf-badge text-[9px]" style="background:rgba(217,119,6,0.9);color:white;font-weight:700">🛂 ${dest.visaType}</span>` : ''}
            ${dest.cost_category ? `<span class="wf-badge text-[9px]" style="background:rgba(196,148,30,0.8);color:black;font-weight:700">${dest.cost_category}</span>` : ''}
          </div>

          <!-- Save to Bag button -->
          <button
            id="save-btn-${dest.id}"
            onclick="WFExploreView.quickToggleSave('${dest.id}','${dest.name}','${dest.category || ''}', this)"
            class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10
              ${isSaved ? 'bg-amber-500 text-black' : 'bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-black'}"
            title="${isSaved ? 'Saved in Bag' : 'Save to Bag'}"
            aria-label="${isSaved ? 'Remove from Travel Bag' : 'Save to Travel Bag'}"
          >
            ${isSaved ? '✓' : '📌'}
          </button>

          <!-- Bottom info -->
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <div class="text-white/60 text-[10px] tracking-widest uppercase mb-1">
              ${isInternational ? `${dest.country} · ${dest.city || dest.region || 'World'}` : (dest.district ? dest.district + ' District' : (dest.state || 'India') + ' · ' + (dest.region || ''))}
            </div>
            <h3 class="font-serif text-white text-xl leading-tight group-hover:text-amber-300 transition-colors duration-300">${dest.name}</h3>
            <div class="flex items-center gap-3 mt-2 text-xs text-white/60">
              ${dest.best_season || dest.bestSeason ? `<span>🌤 ${dest.best_season || dest.bestSeason}</span>` : ''}
              ${dest.recommendedDuration ? `<span>· ${dest.recommendedDuration}d</span>` : ''}
            </div>
          </div>
        </div>
      </div>`;
  },

  _renderDestListItem(dest) {
    const store = window.wayfarerStore;
    const saved = store?.getDestinations?.()?.find(d => d.id === dest.id);
    const isInternational = dest.country && dest.country !== 'India';

    return `
      <div
        class="wf-card wf-card-lift rounded-2xl overflow-hidden flex cursor-pointer group p-3 border wf-border"
        onclick="ANTARA.openDestPanel('${dest.id}','${isInternational ? 'global' : (dest.state ? 'india' : 'odisha')}')"
      >
        <div class="relative w-32 h-28 flex-shrink-0 rounded-xl overflow-hidden">
          <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="window.handleImageError ? handleImageError(this, '${dest.category || 'Nature'}', '${dest.id}') : (this.src='NATURE/119632.jpg');" />
        </div>
        <div class="flex-1 ml-4 flex items-start justify-between min-w-0">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="wf-badge wf-badge-sage text-[9px]">${dest.category || 'Travel'}</span>
              ${dest.visaType ? `<span class="wf-badge text-[9px] bg-amber-600 text-white font-bold">🛂 ${dest.visaType}</span>` : ''}
              ${dest.cost_category ? `<span class="wf-badge wf-badge-gold text-[9px]">${dest.cost_category}</span>` : ''}
            </div>
            <h3 class="font-serif wf-text-primary text-lg font-semibold leading-tight truncate">${dest.name}</h3>
            <p class="wf-text-muted text-xs mt-0.5">
              ${isInternational ? `${dest.country} · ${dest.city || dest.region || 'World'}` : (dest.district ? dest.district + ' District' : (dest.state || 'India') + ' · ' + (dest.region || ''))}
            </p>
            <p class="wf-text-secondary text-xs line-clamp-1 mt-1">${dest.short_description || dest.description || ''}</p>
          </div>
          <button
            onclick="event.stopPropagation(); ANTARA.toggleBucketList('${dest.id}','${dest.name}','${dest.category || ''}')"
            class="wf-btn wf-btn-ghost wf-btn-sm text-xs ml-3 flex-shrink-0"
          >${saved ? '✓ Saved' : '+ Save'}</button>
        </div>
      </div>`;
  },

  /* ---- FILTER HANDLERS ---- */
  _filter(dests) {
    let res = [...dests];

    if (this.activeCategory !== 'All') {
      const cat = this.activeCategory.toLowerCase();
      res = res.filter(d => (d.category || '').toLowerCase() === cat || (d.tags||[]).some(t => t.toLowerCase().includes(cat)));
    }
    if (this.activeDistrict !== 'All') {
      res = res.filter(d => d.district === this.activeDistrict || d.districtId === this.activeDistrict || d.state === this.activeDistrict || d.country === this.activeDistrict);
    }
    if (this.activeCostTier !== 'All') {
      res = res.filter(d => d.cost_category === this.activeCostTier);
    }
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      res = res.filter(d =>
        (d.name || '').toLowerCase().includes(q) ||
        (d.district || '').toLowerCase().includes(q) ||
        (d.state || '').toLowerCase().includes(q) ||
        (d.country || '').toLowerCase().includes(q) ||
        (d.city || '').toLowerCase().includes(q) ||
        (d.description || '').toLowerCase().includes(q) ||
        (d.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }
    return res;
  },

  _setScope(scope) {
    this.activeScope = scope;
    this.activeDistrict = 'All';
    this.activeCategory = 'All';
    this.activeCostTier = 'All';
    this.searchQuery = '';
    this._refresh();
  },
  _setCategory(cat) { AntaraAudio?.playTap?.(); this.activeCategory = cat; this._refresh(); },
  _setDistrict(dist) { this.activeDistrict = dist; this._refresh(); },
  _setCostTier(tier) { this.activeCostTier = tier; this._refresh(); },
  _setView(mode) { this.viewMode = mode; this._refresh(); },
  _clearSearch() { this.searchQuery = ''; this._refresh(); },
  _resetFilters() {
    this.activeCategory = 'All';
    this.activeDistrict = 'All';
    this.activeCostTier = 'All';
    this.searchQuery = '';
    this._refresh();
  },
  _onFilterChange() { this._refresh(); },

  /* ---- PROGRAMMATIC FILTER (called from discoverView hero) ---- */
  applyFilters({ scope, district, category, costTier, query } = {}) {
    AntaraAudio?.playTap?.();
    if (scope)     this.activeScope    = scope;
    if (district)  this.activeDistrict = district;
    if (category)  this.activeCategory = category;
    if (costTier)  this.activeCostTier = costTier;
    if (query !== undefined) this.searchQuery = query;
    // Reset unspecified district/category to All when scope changes
    if (scope && !district)  this.activeDistrict = 'All';
    if (scope && !category)  this.activeCategory  = 'All';
    this._refresh();
    // Scroll to filter bar smoothly
    setTimeout(() => {
      const bar = document.querySelector('.wf-explore .sticky');
      if (bar) bar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    WFNotify?.show(`Showing: ${district || category || scope || 'All'} destinations`, 'info');
  },

  /* ---- INSTANT SAVE TOGGLE (no full re-render needed) ---- */
  quickToggleSave(destId, destName, category, btn) {
    event.stopPropagation();
    ANTARA.toggleBucketList(destId, destName, category);
    const isSaved = !!window.wayfarerStore?.getDestinations?.()?.find(d => d.id === destId);
    if (btn) {
      btn.textContent = isSaved ? '✓' : '📌';
      btn.title = isSaved ? 'Saved in Bag' : 'Save to Bag';
      btn.className = btn.className
        .replace(/bg-amber-500 text-black/g, '')
        .replace(/bg-black\/40 backdrop-blur-md text-white hover:bg-white hover:text-black/g, '');
      if (isSaved) {
        btn.classList.add('bg-amber-500', 'text-black');
      } else {
        btn.classList.add('bg-black/40', 'backdrop-blur-md', 'text-white', 'hover:bg-white', 'hover:text-black');
      }
    }
  },

  _refresh() {
    const container = document.getElementById('view-explore');
    if (container) {
      const scrollY = container.scrollTop || window.scrollY;
      this.render(container);
      // Restore approximate scroll position
      setTimeout(() => { window.scrollTo({ top: scrollY }); }, 30);
    }
  }
};
