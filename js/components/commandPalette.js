/* ==========================================================================
   ANTARA — Command Palette (⌘K Global Search)
   Real-time search across 120+ destinations, districts, tags & trips
   ========================================================================== */

window.WayfarerCommandPalette = {
  isOpen: false,
  _debounce: null,

  init() {
    const input = document.getElementById('command-search-input');
    if (!input) return;

    input.addEventListener('input', e => {
      clearTimeout(this._debounce);
      this._debounce = setTimeout(() => this._search(e.target.value), 180);
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const first = document.querySelector('#command-search-results .wf-cmd-result');
        if (first) first.click();
      }
    });
  },

  toggle() {
    const overlay = document.getElementById('command-palette-overlay');
    if (!overlay) return;
    this.isOpen = !this.isOpen;
    overlay.classList.toggle('hidden', !this.isOpen);

    if (this.isOpen) {
      const input = document.getElementById('command-search-input');
      input?.focus();
      this._search('');
    }
  },

  _search(query) {
    const resultsEl = document.getElementById('command-search-results');
    if (!resultsEl) return;

    const q = query.trim().toLowerCase();
    let results = [];

    if (window.wayfarerStore) {
      results = window.wayfarerStore.globalSearch(q);
    }

    const shortcuts = q ? [] : [
      { type: 'Navigate', title: 'Discover Odisha', subtitle: 'Featured journeys & seasonal highlights', icon: '🏠', action: () => ANTARA.switchView('discover') },
      { type: 'Navigate', title: 'Explore 30 Districts', subtitle: '105+ verified destinations across all Odisha districts', icon: '🗺️', action: () => ANTARA.switchView('explore') },
      { type: 'Navigate', title: 'Bucket List Matrix', subtitle: 'Dreaming, Researching & Visited pipeline', icon: '⭐', action: () => ANTARA.switchView('bucketlist') },
      { type: 'Navigate', title: 'Trip Itineraries', subtitle: 'Smart cost engine & day-by-day routes', icon: '✈️', action: () => ANTARA.switchView('trips') },
      { type: 'Navigate', title: 'Packing Checklist', subtitle: 'Smart gear kits & packing readiness score', icon: '🎒', action: () => ANTARA.switchView('checklist') },
      { type: 'Navigate', title: 'Field Notes & Journal', subtitle: 'Memories, mood tracking & travel stories', icon: '📖', action: () => ANTARA.switchView('journal') },
      { type: 'Navigate', title: 'Travel Passport', subtitle: '30-district stamps, tier badges & stats', icon: '🛂', action: () => ANTARA.switchView('passport') },
      { type: 'Navigate', title: 'Interactive Cartography', subtitle: 'State map with terrain & district pins', icon: '🌐', action: () => ANTARA.switchView('map') },
      { type: 'Navigate', title: 'Explorer DNA Insights', subtitle: 'Terrain affinities, budget velocity & analytics', icon: '🧬', action: () => ANTARA.switchView('insights') },
      { type: 'Navigate', title: 'Travel Bag', subtitle: 'Saved places & fast planning drawer', icon: '📌', action: () => ANTARA.openTravelBag() },
      { type: 'Navigate', title: 'Settings & Data Center', subtitle: 'Origin home city, backup & reset', icon: '⚙️', action: () => ANTARA.switchView('settings') }
    ];

    const items = [...shortcuts, ...results];

    if (items.length === 0) {
      resultsEl.innerHTML = `
        <div class="wf-empty" style="min-height:80px">
          <div class="wf-empty-desc">No matching results for "${q}"</div>
        </div>`;
      return;
    }

    resultsEl.innerHTML = items.map((item, idx) => `
      <div
        class="wf-cmd-result flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800/60 cursor-pointer transition-colors"
        id="cmd-result-${idx}"
        tabindex="0"
        role="option"
      >
        <div class="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center wf-bg-secondary text-sm">
          ${item.image ? `<img src="${item.image}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.textContent='${item.icon||'📍'}'" />` : (item.icon || '📍')}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium wf-text-primary truncate">${item.title}</div>
          <div class="text-xs wf-text-muted truncate">${item.subtitle || ''}</div>
        </div>
        <span class="wf-badge wf-badge-muted text-[9px] flex-shrink-0">${item.type}</span>
      </div>`).join('');

    items.forEach((item, idx) => {
      const el = document.getElementById(`cmd-result-${idx}`);
      if (!el) return;
      const handler = () => {
        this.toggle();
        if (item.action) item.action();
        else if (item.id && !item.type.includes('Navigate')) {
          ANTARA.openDestPanel(item.id, 'odisha');
        }
      };
      el.addEventListener('click', handler);
      el.addEventListener('keydown', e => e.key === 'Enter' && handler());
    });
  }
};
