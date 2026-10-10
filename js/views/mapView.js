/* ==========================================================================
   ANTARA — Multiverse Cartography & Global Exploration Map (v3.0)
   185 Geocoded Destinations across Odisha, Pan-India, and Global Wonders
   Leaflet.js integration, Scope Switcher, Sub-region Filtering & Fast Navigation
   ========================================================================== */

window.WFMapView = {
  mapInstance: null,
  currentScope: 'odisha', // 'odisha' | 'india' | 'global' | 'all'
  activeCategoryFilter: 'All',
  activeRegionFilter: 'All',
  activeStatusFilter: 'All',

  render(container) {
    const root = typeof container === 'string' ? document.getElementById(container) : container;
    if (!root) return;

    const odishaDests = window.ODISHA_DATA?.destinations || [];
    const indiaDests = window.INDIA_TRAVEL_DATA?.destinations || [];
    const globalDests = window.GLOBAL_TRAVEL_DATA?.destinations || [];

    const currentScopeDests = this._getScopeDestinations();
    const filteredDests = this._filterMarkers(currentScopeDests);

    const subRegions = this._getSubRegions();

    root.innerHTML = `
      <div class="wf-map-view animate-fade-in pb-16" style="min-height:100svh">

        <!-- ═══ HEADER ═══ -->
        <div class="wf-page-content pt-24 pb-4">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div class="wf-section-eyebrow">Interactive Cartography</div>
              <h1 class="wf-headline wf-text-primary">Exploration Map &amp; Atlas</h1>
              <p class="text-xs wf-text-muted mt-1">
                ${filteredDests.length} of ${currentScopeDests.length} destinations mapped in 
                ${this.currentScope === 'odisha' ? 'Odisha (30 Districts)' : this.currentScope === 'india' ? 'Pan-India (28 States & 8 UTs)' : this.currentScope === 'global' ? 'International (32 Countries)' : 'Global Atlas (185 Total Places)'}
              </p>
            </div>

            <!-- Scope Switcher -->
            <div class="flex items-center gap-1.5 p-1 rounded-2xl wf-glass border wf-border overflow-x-auto hide-scrollbar">
              <button
                onclick="WFMapView._setScope('odisha')"
                class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${this.currentScope === 'odisha' ? 'bg-forest-700 text-white shadow-sm' : 'wf-text-muted hover:wf-text-secondary'}"
              >
                🏛️ Odisha (${odishaDests.length})
              </button>
              <button
                onclick="WFMapView._setScope('india')"
                class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${this.currentScope === 'india' ? 'bg-forest-700 text-white shadow-sm' : 'wf-text-muted hover:wf-text-secondary'}"
              >
                🇮🇳 Pan-India (${indiaDests.length})
              </button>
              <button
                onclick="WFMapView._setScope('global')"
                class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${this.currentScope === 'global' ? 'bg-forest-700 text-white shadow-sm' : 'wf-text-muted hover:wf-text-secondary'}"
              >
                🌐 International (${globalDests.length})
              </button>
              <button
                onclick="WFMapView._setScope('all')"
                class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${this.currentScope === 'all' ? 'bg-forest-700 text-white shadow-sm' : 'wf-text-muted hover:wf-text-secondary'}"
              >
                🗺️ All (185)
              </button>
            </div>
          </div>
        </div>

        <!-- ═══ MAP FILTERS BAR ═══ -->
        <div class="wf-page-content pb-4">
          <div class="wf-glass rounded-2xl p-3 border wf-border flex items-center gap-3 flex-wrap text-xs">
            <!-- Sub-Region / District / State Filter -->
            <div class="flex items-center gap-1.5">
              <span class="wf-text-muted font-medium">${this.currentScope === 'odisha' ? 'District:' : this.currentScope === 'india' ? 'State:' : this.currentScope === 'global' ? 'Country:' : 'Region:'}</span>
              <select onchange="WFMapView._setRegion(this.value)" class="wf-select text-xs py-1.5 px-2">
                <option value="All">All Locations (${subRegions.length})</option>
                ${subRegions.map(r => `<option value="${r}" ${this.activeRegionFilter === r ? 'selected' : ''}>${r}</option>`).join('')}
              </select>
            </div>

            <!-- Category Filter -->
            <div class="flex items-center gap-1.5">
              <span class="wf-text-muted font-medium">Category:</span>
              <select onchange="WFMapView._setCategory(this.value)" class="wf-select text-xs py-1.5 px-2">
                <option value="All">All Categories</option>
                ${['Beach', 'Heritage', 'Wildlife', 'Waterfall', 'Mountains', 'Spiritual', 'Culture', 'Lake', 'Road Trips', 'Architecture'].map(c => `<option value="${c}" ${this.activeCategoryFilter === c ? 'selected' : ''}>${c}</option>`).join('')}
              </select>
            </div>

            <!-- Status Filter -->
            <div class="flex items-center gap-1.5">
              <span class="wf-text-muted font-medium">Status:</span>
              <select onchange="WFMapView._setStatus(this.value)" class="wf-select text-xs py-1.5 px-2">
                <option value="All" ${this.activeStatusFilter === 'All' ? 'selected' : ''}>All Places</option>
                <option value="Saved" ${this.activeStatusFilter === 'Saved' ? 'selected' : ''}>Saved in Travel Bag</option>
                <option value="Visited" ${this.activeStatusFilter === 'Visited' ? 'selected' : ''}>Visited Only</option>
              </select>
            </div>

            <div class="ml-auto flex items-center gap-2">
              <button onclick="WFMapView._resetMapView()" class="wf-btn wf-btn-secondary wf-btn-sm text-xs">
                🎯 Recenter Map
              </button>
            </div>
          </div>
        </div>

        <!-- ═══ MAP CANVAS ═══ -->
        <div class="wf-page-content pb-6">
          <div class="relative rounded-3xl overflow-hidden border wf-border shadow-2xl" style="height:580px">
            <div id="wf-map" style="width:100%;height:100%"></div>

            <!-- Custom Controls Overlay -->
            <div class="absolute top-4 left-4 z-[1000] flex flex-col gap-2 pointer-events-none">
              <div class="wf-glass rounded-xl border border-white/20 p-2.5 text-xs wf-text-secondary shadow-md pointer-events-auto">
                <div class="wf-label mb-1.5">Legend</div>
                <div class="space-y-1">
                  <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full" style="background:#1B3B2B;border:1px solid #4A7C6F"></div>Destination Pin</div>
                  <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full" style="background:#C4941E;border:1px solid #D4AF37"></div>Visited Stamp ✓</div>
                  <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full" style="background:#4A7C6F;border:1px solid #6B9E8F"></div>Saved in Bag 📌</div>
                </div>
              </div>
            </div>

            <!-- Destination count indicator -->
            <div class="absolute bottom-4 right-4 z-[1000]">
              <div class="wf-glass rounded-xl border border-white/20 px-3 py-1.5 text-xs wf-text-secondary shadow-md font-mono">
                ${filteredDests.length} Markers Displayed
              </div>
            </div>
          </div>
        </div>

        <!-- ═══ SUB-REGION QUICK CENTERING INDEX ═══ -->
        <div class="wf-page-content pb-12">
          <div class="wf-card rounded-2xl p-6 border wf-border">
            <div class="wf-section-eyebrow mb-2">Location Index</div>
            <h2 class="font-serif wf-text-primary text-xl mb-4">Click to Center Location on Map</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-h-56 overflow-y-auto pr-1">
              ${subRegions.slice(0, 30).map(reg => {
                const count = currentScopeDests.filter(d => (d.district === reg || d.state === reg || d.country === reg)).length;
                return `
                  <button
                    onclick="WFMapView._focusRegion('${reg.replace(/'/g, "\\'")}')"
                    class="p-2.5 rounded-xl wf-bg-secondary hover:bg-amber-500/10 text-left transition-colors border wf-border"
                  >
                    <div class="text-xs font-semibold wf-text-primary truncate">${reg}</div>
                    <div class="text-[10px] wf-text-muted mt-0.5">${count} place${count !== 1 ? 's' : ''}</div>
                  </button>`;
              }).join('')}
            </div>
          </div>
        </div>

      </div>`;

    requestAnimationFrame(() => this._initMap(filteredDests));
  },

  _getScopeDestinations() {
    const odisha = window.ODISHA_DATA?.destinations || [];
    const india = window.INDIA_TRAVEL_DATA?.destinations || [];
    const global = window.GLOBAL_TRAVEL_DATA?.destinations || [];

    if (this.currentScope === 'odisha') return odisha;
    if (this.currentScope === 'india') return india;
    if (this.currentScope === 'global') return global;
    return [...odisha, ...india, ...global];
  },

  _getSubRegions() {
    const dests = this._getScopeDestinations();
    const set = new Set();
    dests.forEach(d => {
      if (this.currentScope === 'odisha' && d.district) set.add(d.district);
      else if (this.currentScope === 'india' && d.state) set.add(d.state);
      else if (this.currentScope === 'global' && d.country) set.add(d.country);
      else if (d.region || d.state || d.country) set.add(d.region || d.state || d.country);
    });
    return Array.from(set).sort();
  },

  _initMap(destinations) {
    if (!window.L) {
      document.getElementById('wf-map').innerHTML = `<div class="wf-empty" style="min-height:560px"><div class="wf-empty-title">Map Library Unavailable</div></div>`;
      return;
    }

    if (this.mapInstance) {
      this.mapInstance.remove();
      this.mapInstance = null;
    }

    const { center, zoom } = this._getScopeCenterAndZoom();

    this.mapInstance = L.map('wf-map', {
      center,
      zoom,
      zoomControl: true,
      scrollWheelZoom: true,
      touchZoom: true,
      doubleClickZoom: true,
      attributionControl: true
    });

    const isDark = document.documentElement.classList.contains('dark');
    const tileUrl = isDark
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    L.tileLayer(tileUrl, {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.mapInstance);

    const savedIds = new Set((window.wayfarerStore?.getDestinations?.() || []).map(d => d.id));
    const visitedIds = new Set((window.wayfarerStore?.getDestinations?.() || []).filter(d => d.status === 'Visited').map(d => d.id));

    destinations.forEach(dest => {
      if (!dest.latitude || !dest.longitude) return;

      const isVisited = visitedIds.has(dest.id);
      const isSaved = savedIds.has(dest.id);

      const color = isVisited ? '#C4941E' : isSaved ? '#4A7C6F' : '#1B3B2B';
      const borderColor = isVisited ? '#D4AF37' : isSaved ? '#6B9E8F' : '#2A5A40';

      const icon = L.divIcon({
        html: `<div style="width:26px;height:26px;border-radius:50%;background:${color};border:2.5px solid ${borderColor};box-shadow:0 3px 10px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;color:white;font-size:10px;font-weight:bold;cursor:pointer;transition:transform 0.2s ease;">${isVisited ? '✓' : isSaved ? '📌' : '•'}</div>`,
        className: '',
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      const locationLabel = dest.district ? `${dest.district} District` : (dest.state ? `${dest.state}, India` : (dest.country || ''));

      const popupContent = `
        <div style="padding:4px;min-width:210px">
          <div style="font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:2px">${locationLabel}</div>
          <div style="font-family:var(--font-serif);font-size:16px;font-weight:600;color:var(--text-primary);margin-bottom:4px;line-height:1.2">${dest.name}</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px">
            <span style="font-size:9px;background:var(--bg-secondary);padding:2px 6px;border-radius:99px;color:var(--text-muted)">${dest.category || 'Nature'}</span>
            ${dest.cost_category ? `<span style="font-size:9px;background:rgba(196,148,30,0.2);padding:2px 6px;border-radius:99px;color:var(--accent-gold);font-weight:600">${dest.cost_category}</span>` : ''}
          </div>
          <div style="display:flex;gap:4px">
            <button
              onclick="ANTARA.openDestPanel('${dest.id}')"
              style="flex:1;padding:6px 8px;background:var(--accent-forest);color:white;border:none;border-radius:8px;font-size:10px;cursor:pointer;font-weight:600;"
            >Details →</button>
            <button
              onclick="ANTARA.planTripWith('${dest.id}')"
              style="flex:1;padding:6px 8px;background:var(--accent-gold);color:white;border:none;border-radius:8px;font-size:10px;cursor:pointer;font-weight:600;"
            >🗓️ Plan</button>
          </div>
        </div>`;

      L.marker([dest.latitude, dest.longitude], { icon })
        .addTo(this.mapInstance)
        .bindPopup(popupContent, { maxWidth: 240 });
    });
  },

  _getScopeCenterAndZoom() {
    if (this.currentScope === 'odisha') return { center: [20.5, 84.5], zoom: 7 };
    if (this.currentScope === 'india') return { center: [22.5, 80.0], zoom: 5 };
    if (this.currentScope === 'global') return { center: [22.0, 15.0], zoom: 2.5 };
    return { center: [22.0, 45.0], zoom: 3 };
  },

  _filterMarkers(dests) {
    let res = [...dests];

    if (this.activeCategoryFilter !== 'All') {
      res = res.filter(d => (d.category || '').toLowerCase().includes(this.activeCategoryFilter.toLowerCase()));
    }

    if (this.activeRegionFilter !== 'All') {
      res = res.filter(d => d.district === this.activeRegionFilter || d.state === this.activeRegionFilter || d.country === this.activeRegionFilter || d.region === this.activeRegionFilter);
    }

    if (this.activeStatusFilter === 'Saved') {
      const savedIds = new Set((window.wayfarerStore?.getDestinations?.() || []).map(d => d.id));
      res = res.filter(d => savedIds.has(d.id));
    } else if (this.activeStatusFilter === 'Visited') {
      const visitedIds = new Set((window.wayfarerStore?.getDestinations?.() || []).filter(d => d.status === 'Visited').map(d => d.id));
      res = res.filter(d => visitedIds.has(d.id));
    }

    return res;
  },

  _setScope(scope) {
    this.currentScope = scope;
    this.activeRegionFilter = 'All';
    this._refresh();
  },

  _setCategory(cat) {
    this.activeCategoryFilter = cat;
    this._refresh();
  },

  _setRegion(reg) {
    this.activeRegionFilter = reg;
    this._refresh();
    if (reg !== 'All') {
      this._focusRegion(reg);
    }
  },

  _setStatus(st) {
    this.activeStatusFilter = st;
    this._refresh();
  },

  _resetMapView() {
    const { center, zoom } = this._getScopeCenterAndZoom();
    if (this.mapInstance) {
      this.mapInstance.flyTo(center, zoom, { animate: true, duration: 1.2 });
    }
  },

  _refresh() {
    const container = document.getElementById('view-map');
    if (container) this.render(container);
  },

  _focusRegion(regName) {
    const dests = this._getScopeDestinations().filter(d => (d.district === regName || d.state === regName || d.country === regName || d.region === regName) && d.latitude && d.longitude);

    if (dests.length > 0 && this.mapInstance) {
      const target = dests[0];
      const zoom = this.currentScope === 'odisha' ? 10 : this.currentScope === 'india' ? 7 : 6;
      this.mapInstance.flyTo([target.latitude, target.longitude], zoom, { animate: true, duration: 1.2 });
    } else {
      WFNotify?.show(`Centering on ${regName}`, 'info');
    }
  }
};
