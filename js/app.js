/* ==========================================================================
   ANTARA — Application Controller (v1.5)
   Centralized routing, theme, profile, travel bag, lightbox, panel management
   Branding: ANTARA Personal Travel OS
   ========================================================================== */

(function () {
  'use strict';

  const VIEWS = ['discover', 'explore', 'bucketlist', 'trips', 'checklist', 'journal', 'passport', 'map', 'insights', 'settings', 'memories'];

  /* ------------------------------------------------------------------
     CORE APP OBJECT
  ------------------------------------------------------------------ */
  window.ANTARA = {
    currentView: 'discover',
    destPanelOpen: false,
    travelBagOpen: false,
    tripModalOpen: false,
    appsSheetOpen: false,

    /* ---- INIT ---- */
    init() {
      this._applyTheme();
      this._updateProfileInitials();
      this._updateTravelBagBadge();
      this._bindNavButtons();
      this._bindKeyboard();
      this._initScrollBehavior();

      // Subscribe to store changes for reactive re-render & badge updates
      if (window.wayfarerStore) {
        window.wayfarerStore.subscribe(() => {
          this._updateTravelBagBadge();
          this._renderCurrentView();
        });
      }

      // Boot to discover view
      this.switchView('discover');
    },

    /* ---- THEME ---- */
    _applyTheme() {
      const saved = localStorage.getItem('antara_theme') || localStorage.getItem('wf_theme') || 'light';
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-icon-moon')?.classList.add('hidden');
        document.getElementById('theme-icon-sun')?.classList.remove('hidden');
      } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-icon-sun')?.classList.add('hidden');
        document.getElementById('theme-icon-moon')?.classList.remove('hidden');
      }
    },

    toggleTheme() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('antara_theme', isDark ? 'dark' : 'light');
      const moon = document.getElementById('theme-icon-moon');
      const sun  = document.getElementById('theme-icon-sun');
      if (isDark) { moon?.classList.add('hidden'); sun?.classList.remove('hidden'); }
      else        { sun?.classList.add('hidden');  moon?.classList.remove('hidden'); }
      // Re-render map for tile layer update
      if (this.currentView === 'map' && window.WFMapView) WFMapView.render();
      WFNotify?.show(isDark ? '🌙 Deep Forest mode active' : '☀️ Warm Ivory mode active', 'info');
    },

    /* ---- SCROLL BEHAVIOR ---- */
    _initScrollBehavior() {
      const header = document.getElementById('wf-header');
      const backTop = document.getElementById('back-to-top');
      const handleScroll = () => {
        const y = window.scrollY;
        if (header) header.classList.toggle('scrolled', y > 60);
        if (backTop) backTop.classList.toggle('visible', y > 400);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    },

    /* ---- PAGE LOADER ---- */
    showLoader() {
      const el = document.getElementById('wf-page-loader');
      if (el) el.classList.remove('hidden');
    },
    hideLoader() {
      const el = document.getElementById('wf-page-loader');
      if (el) {
        el.style.opacity = '0';
        setTimeout(() => { el.classList.add('hidden'); el.style.opacity = ''; }, 400);
      }
    },

    /* ---- PROFILE INITIALS ---- */
    _updateProfileInitials() {
      const profile = window.wayfarerStore?.getProfile?.() || {};
      const name = profile.name || 'Antara Explorer';
      const initials = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
      const el = document.getElementById('profile-initials');
      if (el) el.textContent = initials;
    },

    /* ---- TRAVEL BAG (SAVED LIST) BADGE & DRAWER ---- */
    _updateTravelBagBadge() {
      const count = (window.wayfarerStore?.getDestinations?.() || []).length;
      const badge = document.getElementById('saved-bag-count');
      if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
      }
    },

    openTravelBag() {
      const overlay = document.getElementById('travel-bag-overlay');
      const panel = document.getElementById('travel-bag-panel');
      const inner = document.getElementById('travel-bag-inner');
      if (!panel || !inner) return;

      const saved = window.wayfarerStore?.getDestinations?.() || [];
      const odishaDests = window.ODISHA_DATA?.destinations || [];

      inner.innerHTML = `
        <div class="flex items-center justify-between mb-6 pb-4 border-b wf-border">
          <div class="flex items-center gap-2">
            <span class="text-xl">📌</span>
            <div>
              <h3 class="font-serif wf-text-primary text-xl">Travel Bag</h3>
              <p class="text-xs wf-text-muted">${saved.length} saved place${saved.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button onclick="ANTARA.closeTravelBag()" class="wf-btn wf-btn-ghost wf-btn-icon">✕</button>
        </div>

        ${saved.length === 0 ? `
          <div class="wf-empty" style="min-height:220px">
            <div class="wf-empty-icon">🎒</div>
            <div class="wf-empty-title">Your Travel Bag is empty</div>
            <div class="wf-empty-desc">Click "+ Save" on any destination to save it for your upcoming trips</div>
            <button onclick="ANTARA.closeTravelBag(); ANTARA.switchView('explore');" class="wf-btn wf-btn-primary wf-btn-sm mt-4">Explore Destinations</button>
          </div>` : `
          <div class="space-y-3 mb-6 max-h-[65vh] overflow-y-auto pr-1">
            ${saved.map(dest => {
              const od = odishaDests.find(o => o.id === dest.id) || dest;
              return `
                <div class="wf-card rounded-xl p-3 flex items-center gap-3 border wf-border group">
                  <div class="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src="${od.image || dest.image}" alt="${dest.name}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.style.background='var(--bg-secondary)'" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-serif wf-text-primary text-base truncate">${dest.name}</h4>
                    <p class="text-xs wf-text-muted truncate">${od.district || dest.region || 'Odisha'} · ${od.category || dest.category || 'Nature'}</p>
                    <span class="wf-badge ${dest.status==='Visited' ? 'wf-badge-gold' : 'wf-badge-sage'} text-[9px] mt-1">${dest.status}</span>
                  </div>
                  <div class="flex flex-col gap-1 flex-shrink-0">
                    <button onclick="ANTARA.openDestPanel('${dest.id}','odisha'); ANTARA.closeTravelBag();" class="wf-btn wf-btn-ghost wf-btn-sm text-xs p-1" title="View">👁</button>
                    <button onclick="wayfarerStore.deleteDestination('${dest.id}'); ANTARA.openTravelBag();" class="wf-btn wf-btn-ghost wf-btn-sm text-xs p-1 text-red-500" title="Remove">✕</button>
                  </div>
                </div>`;
            }).join('')}
          </div>
          <div class="pt-3 border-t wf-border flex gap-2">
            <button onclick="ANTARA.closeTravelBag(); ANTARA.switchView('trips');" class="wf-btn wf-btn-primary flex-1">Plan Trip with Saved →</button>
          </div>`}
      `;

      overlay.classList.remove('hidden');
      overlay.classList.add('opacity-100');
      panel.style.transform = 'translateX(0)';
      document.body.style.overflow = 'hidden';
      this.travelBagOpen = true;
    },

    closeTravelBag() {
      const overlay = document.getElementById('travel-bag-overlay');
      const panel = document.getElementById('travel-bag-panel');
      if (!panel) return;
      panel.style.transform = 'translateX(100%)';
      overlay?.classList.add('hidden');
      document.body.style.overflow = '';
      this.travelBagOpen = false;
    },

    /* ---- MOBILE APPS SUITE SHEET ---- */
    openAppsSheet() {
      const overlay = document.getElementById('apps-sheet-overlay');
      const sheet = document.getElementById('apps-sheet');
      if (!sheet) return;
      overlay?.classList.remove('hidden');
      requestAnimationFrame(() => overlay?.classList.add('opacity-100'));
      sheet.style.transform = 'translateY(0)';
      document.body.style.overflow = 'hidden';
      this.appsSheetOpen = true;
    },

    closeAppsSheet() {
      const overlay = document.getElementById('apps-sheet-overlay');
      const sheet = document.getElementById('apps-sheet');
      if (!sheet) return;
      sheet.style.transform = 'translateY(100%)';
      overlay?.classList.remove('opacity-100');
      setTimeout(() => overlay?.classList.add('hidden'), 300);
      document.body.style.overflow = '';
      this.appsSheetOpen = false;
    },

    /* ---- QUICK CROSS-NAV SHORTCUTS ---- */
    openChecklist() { this.switchView('checklist'); },
    openJournal() { this.switchView('journal'); },
    openBucketList() { this.switchView('bucketlist'); },
    openInsights() { this.switchView('insights'); },

    /* ---- NAVIGATION ---- */
    _bindNavButtons() {
      document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          this.switchView(btn.dataset.nav);
        });
      });
    },

    switchView(viewId) {
      if (!VIEWS.includes(viewId)) return;
      const prev = this.currentView;
      this.currentView = viewId;

      // Show loader for non-trivial switches
      if (prev !== viewId) this.showLoader();

      // Hide all views
      VIEWS.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) el.classList.add('hidden');
      });

      // Show target
      const target = document.getElementById(`view-${viewId}`);
      if (target) target.classList.remove('hidden');

      // Update nav highlights
      this._updateNavHighlight(viewId);

      // Render the view
      this._renderCurrentView();

      // Hide loader after render
      setTimeout(() => this.hideLoader(), 180);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    _updateNavHighlight(viewId) {
      document.querySelectorAll('.wf-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.nav === viewId);
        btn.setAttribute('aria-current', btn.dataset.nav === viewId ? 'page' : 'false');
      });
      document.querySelectorAll('.wf-mob-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.nav === viewId);
        btn.setAttribute('aria-current', btn.dataset.nav === viewId ? 'page' : 'false');
      });
    },

    /* ---- RENDER DISPATCH ---- */
    _renderCurrentView() {
      const viewId = this.currentView;
      const container = document.getElementById(`view-${viewId}`);
      if (!container) return;

      try {
        switch (viewId) {
          case 'discover':
            if (window.WFDiscoverView) WFDiscoverView.render(container);
            break;
          case 'explore':
            if (window.WFExploreView) WFExploreView.render(container);
            break;
          case 'bucketlist':
            if (window.WFBucketListView) WFBucketListView.render(container);
            break;
          case 'trips':
            if (window.WFTripsView) WFTripsView.render(container);
            break;
          case 'checklist':
            if (window.WFChecklistView) WFChecklistView.render(container);
            break;
          case 'journal':
            if (window.WFJournalView) WFJournalView.render(container);
            break;
          case 'passport':
            if (window.WFPassportView) WFPassportView.render(container);
            break;
          case 'map':
            if (window.WFMapView) WFMapView.render(container);
            break;
          case 'insights':
            if (window.WFInsightsView) WFInsightsView.render(container);
            break;
          case 'memories':
            if (window.WFJournalView) WFJournalView.render(container);
            else if (window.WFMemoriesView) WFMemoriesView.render(container);
            break;
          case 'settings':
            if (window.WFSettingsView) WFSettingsView.render(container);
            break;
        }
      } catch (err) {
        console.error(`[ANTARA] Error rendering view "${viewId}":`, err);
        container.innerHTML = `
          <div class="wf-empty">
            <div class="wf-empty-icon">⚠️</div>
            <div class="wf-empty-title">Render Error</div>
            <div class="wf-empty-desc">${err.message}</div>
          </div>`;
      }
    },

    /* ---- DESTINATION PANEL ---- */
    openDestPanel(destId, source) {
      const overlay = document.getElementById('dest-panel-overlay');
      const panel = document.getElementById('dest-panel');
      const inner = document.getElementById('dest-panel-inner');
      if (!panel || !inner) return;

      // Resolve aliases
      if (destId === 'dest_chilika') destId = 'od_chilika_satapada';
      if (destId === 'dest_lunar_oasis') destId = 'lunar_oasis_villa';

      let dest = (window.ODISHA_DATA?.destinations || []).find(d => d.id === destId)
        || (window.INDIA_TRAVEL_DATA?.destinations || []).find(d => d.id === destId)
        || (window.GLOBAL_TRAVEL_DATA?.destinations || []).find(d => d.id === destId)
        || window.wayfarerStore?.getDestination(destId);

      // Check Vision OS collections
      if (!dest && window.WFPassportView?.collections) {
        for (const c of Object.values(window.WFPassportView.collections)) {
          const item = (c.items || []).find(it => it.id === destId);
          if (item) {
            dest = {
              id: item.id,
              name: item.title,
              category: item.sub || 'Heritage Sanctuary',
              district: item.district || 'Ancient Region',
              region: item.district || 'Europe',
              country: item.district?.includes('District') ? 'India' : 'Greece',
              image: item.photo,
              description: item.desc,
              highlights: [item.sub, item.address, item.coords],
              things_to_do: ['Historical exploration & photography', 'Guided heritage sanctuary walk', 'Sunset golden hour viewing'],
              best_season: 'April – October',
              recommendedDuration: 2,
              status: window.wayfarerStore?.isVisited(item.id) ? 'Visited' : 'Dreaming'
            };
            break;
          }
        }
      }

      // Check Hero spotlights
      if (!dest && window.WFDiscoverView?.heroSpotlights) {
        for (const spot of Object.values(window.WFDiscoverView.heroSpotlights)) {
          if (spot.id === destId) {
            dest = {
              id: spot.id,
              name: spot.title,
              category: spot.propType || 'Luxury Villa',
              district: spot.locName || 'Desert Oasis',
              region: spot.location,
              country: spot.locName === 'Athens' ? 'Greece' : (spot.locName.includes('Odisha') || spot.locName.includes('Puri') || spot.locName.includes('Koraput') ? 'India' : 'United States'),
              image: spot.image,
              description: spot.description,
              highlights: [spot.priceDisplay, `${spot.specs.area} · ${spot.specs.beds}`, spot.coords],
              things_to_do: ['Architectural villa tour', 'Panoramic desert/mountain relaxation', 'Starlight terrace observation'],
              best_season: 'Year-round',
              recommendedDuration: 3,
              status: window.wayfarerStore?.isVisited(spot.id) ? 'Visited' : 'Dreaming'
            };
            break;
          }
        }
      }

      if (!dest) {
        WFNotify?.show('Destination not found', 'error');
        return;
      }

      inner.innerHTML = this._renderDestPanel(dest);
      overlay.classList.remove('hidden');
      overlay.classList.add('opacity-100');
      panel.style.transform = 'translateX(0)';

      document.body.style.overflow = 'hidden';
      this.destPanelOpen = true;
    },

    closeDestPanel() {
      const overlay = document.getElementById('dest-panel-overlay');
      const panel = document.getElementById('dest-panel');
      if (!panel) return;

      panel.style.transform = 'translateX(100%)';
      overlay?.classList.add('hidden');
      document.body.style.overflow = '';
      this.destPanelOpen = false;
    },

    _renderDestPanel(dest) {
      const store = window.wayfarerStore;
      const savedDest = (store?.getDestinations() || []).find(d => d.id === dest.id);
      const isSaved = !!savedDest;
      const isVisited = savedDest?.status === 'Visited';

      // Distance and Fuel calculation
      const origin = window.AntaraCostEngine?.getOriginCoords?.() || { name: 'Bhubaneswar', lat: 20.2961, lng: 85.8245 };
      const distKm = (dest.latitude && dest.longitude) ? (window.AntaraCostEngine?.calculateDistance?.(origin.lat, origin.lng, dest.latitude, dest.longitude) || 0) : 0;
      const fuelBike = window.AntaraCostEngine?.calculateFuelEstimate?.(distKm, "bike") || {};
      const fuelCar = window.AntaraCostEngine?.calculateFuelEstimate?.(distKm, "car") || {};

      const costs = dest.estimatedCosts || {};

      const thingsToDoHTML = (dest.things_to_do || dest.highlights || []).slice(0,5).map(h => `
        <li class="flex items-start gap-2 text-sm wf-text-secondary py-1.5 border-b wf-border last:border-0">
          <span class="wf-text-gold mt-0.5 flex-shrink-0">✦</span>
          <span>${h}</span>
        </li>`).join('');

      const isInternational = dest.country && dest.country !== 'India';

      return `
        <div class="animate-fade-in pb-12">
          <!-- Hero Image -->
          <div class="relative h-72 md:h-80 overflow-hidden">
            <img
              src="${dest.image || ''}"
              alt="${dest.name}"
              class="w-full h-full object-cover"
              onerror="window.handleImageError ? handleImageError(this, '${dest.category || 'Nature'}', '${dest.id}') : (this.src='NATURE/119632.jpg');"
            />
            <div class="absolute inset-0" style="background:linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)"></div>

            <!-- Close button -->
            <button
              onclick="ANTARA.closeDestPanel()"
              class="absolute top-4 left-4 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors z-10"
              aria-label="Close panel"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <!-- Badges -->
            <div class="absolute top-4 right-4 flex gap-2">
              ${dest.visaType ? `<span class="wf-badge wf-badge-gold text-[10px]" style="background:rgba(217,119,6,0.85);color:white">${dest.visaType}</span>` : ''}
              ${dest.cost_category ? `<span class="wf-badge wf-badge-gold text-[10px]" style="background:rgba(0,0,0,0.5);backdrop-filter:blur(8px)">${dest.cost_category}</span>` : ''}
              <span class="wf-badge wf-badge-sage text-[10px]" style="background:rgba(0,0,0,0.5);backdrop-filter:blur(8px)">${dest.category || 'Nature'}</span>
            </div>

            <!-- Title overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <div class="wf-label text-white/70 mb-1">
                ${isInternational ? `${dest.country} · ${dest.region || dest.city || 'Global'}` : (dest.district ? dest.district + ' District' : (dest.state || 'Odisha') + ' · ' + (dest.region || 'India'))}
                ${distKm > 0 ? ' · ' + distKm + ' km from ' + origin.name : ''}
              </div>
              <h2 class="text-white text-3xl md:text-4xl font-serif font-light leading-tight drop-shadow-md">${dest.name}</h2>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 space-y-6">

            <!-- Quick badges row -->
            <div class="flex flex-wrap gap-2">
              ${dest.best_season || dest.bestSeason ? `<span class="wf-badge wf-badge-sage">🌤 Best: ${dest.best_season || dest.bestSeason}</span>` : ''}
              ${dest.recommendedDuration ? `<span class="wf-badge wf-badge-muted">⏱ ${dest.recommendedDuration} day${dest.recommendedDuration > 1 ? 's' : ''}</span>` : ''}
              ${distKm > 0 ? `<span class="wf-badge wf-badge-forest">🚗 ${distKm} km from ${origin.name}</span>` : ''}
              ${dest.difficulty ? `<span class="wf-badge wf-badge-muted">⛰ ${dest.difficulty}</span>` : ''}
              ${isInternational ? `<span class="wf-badge wf-badge-gold">🌐 International Destination</span>` : ''}
            </div>

            <!-- Emotional Hook -->
            ${dest.emotionalHook ? `
              <p class="font-serif text-xl italic text-amber-600 dark:text-amber-300 leading-relaxed">"${dest.emotionalHook}"</p>` : ''}

            <!-- Description -->
            <div>
              <div class="wf-label mb-2">About</div>
              <p class="wf-text-secondary text-sm leading-relaxed">${dest.description || dest.short_description || ''}</p>
            </div>

            <!-- International Visa & Budget Intelligence -->
            ${isInternational ? `
              <div class="wf-surface rounded-2xl p-4 border wf-border space-y-3">
                <div class="flex items-center justify-between">
                  <div class="wf-label">Visa Intelligence · Indian Passport</div>
                  <span class="wf-badge wf-badge-gold text-[10px] font-semibold">${dest.visaType || 'Visa Guide'}</span>
                </div>
                <p class="text-sm font-medium wf-text-primary leading-relaxed">${dest.indianPassportVisa || 'Visa requirements apply.'}</p>
                ${dest.flightHub ? `<div class="text-xs wf-text-muted">✈️ Major Flight Hub: <strong class="wf-text-primary">${dest.flightHub}</strong></div>` : ''}
                ${dest.dailyBudgetINR ? `
                  <div class="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                    <div class="p-2.5 rounded-xl wf-bg-secondary"><div class="text-[10px] wf-text-muted">Budget</div><div class="font-serif font-semibold wf-text-primary">₹${(dest.dailyBudgetINR.budget||0).toLocaleString('en-IN')}/d</div></div>
                    <div class="p-2.5 rounded-xl wf-bg-secondary"><div class="text-[10px] wf-text-muted">Mid-Range</div><div class="font-serif font-semibold text-amber-600 dark:text-amber-400">₹${(dest.dailyBudgetINR.midRange||0).toLocaleString('en-IN')}/d</div></div>
                    <div class="p-2.5 rounded-xl wf-bg-secondary"><div class="text-[10px] wf-text-muted">Luxury</div><div class="font-serif font-semibold wf-text-primary">₹${(dest.dailyBudgetINR.luxury||0).toLocaleString('en-IN')}/d</div></div>
                  </div>` : ''}
                ${dest.visaPortal ? `
                  <div class="pt-1">
                    <a href="${dest.visaPortal}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 hover:underline">
                      <span>Official Immigration / Visa Portal ↗</span>
                    </a>
                  </div>` : ''}
              </div>` : ''}

            <!-- Pan-India Daily Budget Card -->
            ${(!isInternational && dest.estimatedDailyBudget) ? `
              <div class="wf-surface rounded-2xl p-4 border wf-border space-y-2">
                <div class="wf-label">Estimated Daily Budget (${dest.state || 'India'})</div>
                <div class="grid grid-cols-3 gap-2 text-center text-xs">
                  <div class="p-2.5 rounded-xl wf-bg-secondary"><div class="text-[10px] wf-text-muted">Budget</div><div class="font-serif font-semibold wf-text-primary">₹${(dest.estimatedDailyBudget.budget||0).toLocaleString('en-IN')}/d</div></div>
                  <div class="p-2.5 rounded-xl wf-bg-secondary"><div class="text-[10px] wf-text-muted">Comfort</div><div class="font-serif font-semibold text-amber-600 dark:text-amber-400">₹${(dest.estimatedDailyBudget.midRange||0).toLocaleString('en-IN')}/d</div></div>
                  <div class="p-2.5 rounded-xl wf-bg-secondary"><div class="text-[10px] wf-text-muted">Luxury</div><div class="font-serif font-semibold wf-text-primary">₹${(dest.estimatedDailyBudget.luxury||0).toLocaleString('en-IN')}/d</div></div>
                </div>
              </div>` : ''}

            <!-- Road Distance & Fuel Estimator -->
            ${distKm > 0 ? `
              <div class="wf-surface rounded-2xl p-4 border wf-border">
                <div class="wf-label mb-3">Road Distance &amp; Fuel Estimate (from ${origin.name})</div>
                <div class="grid grid-cols-2 gap-3 text-center">
                  <div class="p-3 rounded-xl wf-bg-secondary">
                    <div class="text-xs wf-text-muted mb-1">🏍 Motorcycle (Round trip)</div>
                    <div class="font-serif text-xl wf-text-primary">${fuelBike.formattedFuel || '—'}</div>
                    <div class="text-[10px] wf-text-faint">${distKm * 2} km total · ${fuelBike.litersNeeded || 0}L petrol</div>
                  </div>
                  <div class="p-3 rounded-xl wf-bg-secondary">
                    <div class="text-xs wf-text-muted mb-1">🚗 Car / SUV (Round trip)</div>
                    <div class="font-serif text-xl wf-text-primary">${fuelCar.formattedFuel || '—'}</div>
                    <div class="text-[10px] wf-text-faint">${distKm * 2} km total · ${fuelCar.litersNeeded || 0}L petrol</div>
                  </div>
                </div>
              </div>` : ''}

            <!-- Things to do -->
            ${thingsToDoHTML ? `
              <div>
                <div class="wf-label mb-3">Top Things to Do</div>
                <ul class="space-y-1">${thingsToDoHTML}</ul>
              </div>` : ''}

            <!-- Cost Breakdown -->
            ${costs.transportCost || costs.totalEstimatedRange ? `
              <div class="wf-surface rounded-2xl p-4 border wf-border">
                <div class="wf-label mb-3">Estimated Cost Breakdown</div>
                <div class="space-y-2 text-sm">
                  ${costs.transportCost ? `<div class="flex justify-between py-1 border-b wf-border"><span class="wf-text-muted">Transport / Fuel</span><span class="wf-text-primary font-medium">${costs.transportCost}</span></div>` : ''}
                  ${costs.accommodationCost ? `<div class="flex justify-between py-1 border-b wf-border"><span class="wf-text-muted">Accommodation</span><span class="wf-text-primary font-medium">${costs.accommodationCost}</span></div>` : ''}
                  ${costs.foodCost ? `<div class="flex justify-between py-1 border-b wf-border"><span class="wf-text-muted">Food &amp; Dining</span><span class="wf-text-primary font-medium">${costs.foodCost}</span></div>` : ''}
                  ${costs.activityCost ? `<div class="flex justify-between py-1 border-b wf-border"><span class="wf-text-muted">Entry &amp; Activities</span><span class="wf-text-primary font-medium">${costs.activityCost}</span></div>` : ''}
                  ${costs.totalEstimatedRange ? `<div class="flex justify-between pt-2 text-base font-semibold"><span class="wf-text-primary font-serif">Estimated Total Range</span><span class="text-amber-600 dark:text-amber-400 font-serif">${costs.totalEstimatedRange}</span></div>` : ''}
                </div>
              </div>` : ''}

            <!-- How to reach -->
            ${dest.how_to_reach || dest.nearest_airport || dest.nearest_railway_station ? `
              <div>
                <div class="wf-label mb-3">How to Reach</div>
                <div class="space-y-2 text-xs wf-text-secondary">
                  ${dest.how_to_reach ? `<p class="leading-relaxed mb-2">${dest.how_to_reach}</p>` : ''}
                  ${dest.nearest_airport ? `<div class="flex items-center gap-2"><span>✈️ Airport:</span><span class="wf-text-primary font-medium">${dest.nearest_airport}</span></div>` : ''}
                  ${dest.nearest_railway_station ? `<div class="flex items-center gap-2"><span>🚆 Railway:</span><span class="wf-text-primary font-medium">${dest.nearest_railway_station}</span></div>` : ''}
                </div>
              </div>` : ''}

            <!-- Action buttons -->
            <div class="space-y-2 pt-4">
              <div class="flex gap-2.5">
                <button
                  onclick="ANTARA.planTripWith('${dest.id}')"
                  class="wf-btn wf-btn-primary flex-1"
                >
                  🗓️ Plan Expedition Here
                </button>
                <button
                  onclick="ANTARA.shareDestination('${dest.id}')"
                  class="wf-btn wf-btn-secondary"
                  title="Share / Copy summary"
                >
                  🔗 Share
                </button>
              </div>
              <div class="flex gap-2.5">
                <button
                  onclick="ANTARA.toggleBucketList('${dest.id}', '${dest.name}', '${dest.category || ''}')"
                  class="wf-btn wf-btn-secondary flex-1"
                  id="btn-save-${dest.id}"
                >
                  ${isSaved ? '✓ Saved in Bag' : '+ Save to Bag'}
                </button>
                <button
                  onclick="ANTARA.markVisited('${dest.id}', '${dest.name}')"
                  class="wf-btn wf-btn-secondary flex-1"
                >
                  ${isVisited ? '✓ Visited' : 'Mark Visited'}
                </button>
              </div>
            </div>

            <!-- Provenance & Data Confidence -->
            <div class="pt-3 border-t wf-border flex items-center justify-between text-[11px] wf-text-faint">
              <span>Source: ${dest.official_source || 'Odisha Tourism / Verified'}</span>
              <span class="wf-badge wf-badge-muted text-[9px]">${dest.data_confidence || 'VERIFIED'} · ${dest.last_verified || 'Aug 2026'}</span>
            </div>

          </div>
        </div>`;
    },

    /* ---- 1-CLICK TRIP PLANNER INTEGRATION ---- */
    planTripWith(destId) {
      this.closeDestPanel();
      this.switchView('trips');
      this.openTripModal(null, destId);
    },

    /* ---- SHARE DESTINATION ---- */
    shareDestination(destId) {
      let dest = (window.ODISHA_DATA?.destinations || []).find(d => d.id === destId)
        || (window.INDIA_TRAVEL_DATA?.destinations || []).find(d => d.id === destId)
        || (window.GLOBAL_TRAVEL_DATA?.destinations || []).find(d => d.id === destId)
        || window.wayfarerStore?.getDestination(destId);

      if (!dest) return;
      const text = `Explore ${dest.name} with ANTARA Travel OS!\nRegion: ${dest.district || dest.state || dest.country}\nCategory: ${dest.category || 'Nature'}\nBest Season: ${dest.best_season || dest.bestSeason || 'Year-round'}\nHighlights: ${(dest.things_to_do || dest.highlights || []).slice(0, 3).join(', ')}`;

      navigator.clipboard?.writeText(text).then(() => {
        WFNotify?.show(`Copied ${dest.name} briefing to clipboard! 📋`, 'success');
      }).catch(() => {
        WFNotify?.show(`Link ready for ${dest.name}`, 'info');
      });
    },

    /* ---- BUCKET LIST ACTIONS ---- */
    toggleBucketList(destId, destName, category) {
      const store = window.wayfarerStore;
      if (!store) return;
      const existing = store.getDestinations().find(d => d.id === destId);

      if (existing) {
        store.deleteDestination(destId);
        WFNotify?.show(`Removed ${destName} from Travel Bag`, 'info');
      } else {
        const found = (window.ODISHA_DATA?.destinations || []).find(d => d.id === destId)
          || (window.INDIA_TRAVEL_DATA?.destinations || []).find(d => d.id === destId)
          || (window.GLOBAL_TRAVEL_DATA?.destinations || []).find(d => d.id === destId);

        store.addDestination({
          id: destId,
          name: destName,
          category: category || found?.category || 'Nature',
          region: found?.district || found?.state || found?.region || 'Odisha',
          country: found?.country || 'India',
          status: 'Dreaming',
          image: found?.image || '',
          description: found?.description || '',
          budget: 5000,
          rating: 0
        });
        WFNotify?.show(`Saved ${destName} to Travel Bag 📌`, 'success');
      }

      this._updateTravelBagBadge();

      // Update button text if panel open
      const btn = document.getElementById(`btn-save-${destId}`);
      if (btn) {
        const isNowSaved = !!store.getDestinations().find(d => d.id === destId);
        btn.textContent = isNowSaved ? '✓ Saved in Bag' : '+ Save to Bag';
      }
    },

    markVisited(destId, destName, category) {
      const store = window.wayfarerStore;
      if (!store) return;
      const existing = store.getDestinations().find(d => d.id === destId);
      if (existing) {
        store.updateDestination(destId, { status: 'Visited' });
      } else {
        const found = (window.ODISHA_DATA?.destinations || []).find(d => d.id === destId)
          || (window.INDIA_TRAVEL_DATA?.destinations || []).find(d => d.id === destId)
          || (window.GLOBAL_TRAVEL_DATA?.destinations || []).find(d => d.id === destId);

        store.addDestination({
          id: destId,
          name: destName || found?.name || 'Sanctuary',
          status: 'Visited',
          region: found?.district || found?.state || found?.region || 'Odisha',
          country: found?.country || 'India',
          image: found?.image || '',
          description: found?.description || '',
          budget: 0,
          rating: 0,
          category: category || found?.category || 'Nature'
        });
      }
      this._updateTravelBagBadge();
      // Immediately update the button in the panel if open
      const visitBtn = document.querySelector(`[onclick*="markVisited('${destId}'"]`);
      if (visitBtn) {
        visitBtn.textContent = '✓ Visited';
        visitBtn.classList.add('opacity-60');
      }
      // Also update the save button if in panel
      const saveBtn = document.getElementById(`btn-save-${destId}`);
      if (saveBtn) saveBtn.textContent = '✓ Saved in Bag';
      WFNotify?.show(`Marked ${destName || 'destination'} as Visited ✓`, 'success');
      AntaraAudio?.playStamp?.();
    },

    /* ---- TRIP MODAL ---- */
    openTripModal(tripId, prefilledDestId) {
      const overlay = document.getElementById('trip-modal-overlay');
      const inner = document.getElementById('trip-modal-inner');
      if (!overlay || !inner) return;

      if (window.WFTripsView?.renderTripModal) {
        inner.innerHTML = WFTripsView.renderTripModal(tripId, prefilledDestId);
      }
      overlay.classList.remove('hidden');
      overlay.classList.add('flex');
      document.body.style.overflow = 'hidden';
      this.tripModalOpen = true;
    },

    closeTripModal(e) {
      if (e && e.target !== e.currentTarget) return;
      const overlay = document.getElementById('trip-modal-overlay');
      overlay?.classList.add('hidden');
      overlay?.classList.remove('flex');
      document.body.style.overflow = '';
      this.tripModalOpen = false;
    },

    /* ---- LIGHTBOX ---- */
    openLightbox(src, caption) {
      const lb = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');
      const cap = document.getElementById('lightbox-caption');
      if (!lb || !img) return;
      img.src = src;
      img.alt = caption || '';
      if (cap) cap.textContent = caption || '';
      lb.classList.remove('hidden');
      lb.classList.add('flex');
    },

    closeLightbox() {
      const lb = document.getElementById('lightbox');
      lb?.classList.add('hidden');
      lb?.classList.remove('flex');
    },

    /* ---- KEYBOARD SHORTCUTS ---- */
    _bindKeyboard() {
      document.addEventListener('keydown', e => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          window.WayfarerCommandPalette?.toggle();
        }
        if (e.key === 'Escape') {
          if (window.WayfarerCommandPalette?.isOpen) {
            window.WayfarerCommandPalette.toggle();
          } else if (this.appsSheetOpen) {
            this.closeAppsSheet();
          } else if (this.travelBagOpen) {
            this.closeTravelBag();
          } else if (this.destPanelOpen) {
            this.closeDestPanel();
          } else if (this.tripModalOpen) {
            this.closeTripModal();
          } else if (document.getElementById('lightbox')?.classList.contains('flex')) {
            this.closeLightbox();
          }
        }
      });
    },

    /* ---- HELPERS ---- */
    formatCurrency(amount) {
      if (amount >= 100000) return `₹${(amount/100000).toFixed(1)}L`;
      if (amount >= 1000) return `₹${Math.round(amount/1000)}k`;
      return `₹${amount}`;
    },

    daysUntil(dateStr) {
      const d = new Date(dateStr);
      const t = new Date(); t.setHours(0,0,0,0); d.setHours(0,0,0,0);
      return Math.ceil((d - t) / 86400000);
    },

    formatDate(dateStr) {
      if (!dateStr) return '';
      return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  };

  /* ------------------------------------------------------------------
     BOOT & ALIASES
  ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    // Legacy alias
    window.WF = window.ANTARA;
    window.wayfarerApp = {
      switchTab: (id) => ANTARA.switchView(id),
      toggleTheme: () => ANTARA.toggleTheme()
    };

    if (window.WFNotify) WFNotify.init();

    if (window.WayfarerCommandPalette) WayfarerCommandPalette.init();

    ANTARA.init();
  });

})();
