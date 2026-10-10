/* ==========================================================================
   ANTARA — Packing Checklist & Expedition Prep View (v3.0)
   Gear categories, readiness meter, instant search, batch packing controls,
   trip presets (Trekking, Beach, Winter, Temple, Flight, Safari), item manager
   ========================================================================== */

window.WFChecklistView = {
  currentCategory: 'All',
  searchQuery: '',
  categories: ['All', 'Clothing', 'Documents', 'Gear', 'Toiletries', 'Electronics', 'Medications', 'Miscellaneous'],

  render(container) {
    const root = typeof container === 'string' ? document.getElementById(container) : container;
    if (!root) return;

    root.innerHTML = this._getHTML();
    this._bindEvents(root);
    this._renderItems(root);
    this._updateProgress(root);
  },

  _getHTML() {
    return `
      <div class="wf-checklist animate-fade-in pb-24">
        <!-- Header -->
        <div class="wf-page-content pt-24 pb-6">
          <div class="wf-section-header">
            <div>
              <div class="wf-section-eyebrow">Expedition Prep &amp; Gear</div>
              <h1 class="wf-headline wf-text-primary">Packing Checklist</h1>
              <p class="text-xs wf-text-muted mt-1">Organize your essentials, calculate expedition readiness, and batch-manage gear.</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="WFChecklistView._packAll()" class="wf-btn wf-btn-secondary wf-btn-sm" title="Pack all items">
                ✓ Pack All
              </button>
              <button onclick="WFChecklistView._unpackAll()" class="wf-btn wf-btn-ghost wf-btn-sm" title="Unpack all items">
                ↺ Unpack All
              </button>
              <button onclick="WFChecklistView._openAddItemModal()" class="wf-btn wf-btn-primary">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                Add Gear
              </button>
            </div>
          </div>
        </div>

        <div class="wf-page-content space-y-6">

          <!-- Readiness Progress Bar -->
          <div class="wf-card rounded-2xl p-6 border wf-border shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <div>
                <span class="text-xs font-semibold tracking-wider uppercase wf-text-muted">Expedition Readiness Meter</span>
                <div class="font-serif text-2xl wf-text-primary mt-0.5">
                  <span id="checklist-packed-count">0</span> / <span id="checklist-total-count">0</span> Packed
                </div>
              </div>
              <span id="readiness-percentage" class="font-serif text-3xl font-light text-amber-600 dark:text-amber-400">0%</span>
            </div>

            <!-- Bar -->
            <div class="w-full h-3 rounded-full overflow-hidden wf-bg-secondary p-0.5 border wf-border">
              <div id="readiness-bar" class="h-full rounded-full transition-all duration-700 ease-out" style="width: 0%; background: linear-gradient(90deg, var(--accent-sage) 0%, var(--accent-gold) 100%)"></div>
            </div>

            <!-- Quick Kit Presets -->
            <div class="mt-6 pt-5 border-t wf-border">
              <div class="flex items-center justify-between mb-3">
                <div class="wf-label">Curated Gear Kit Presets</div>
                <button onclick="WFChecklistView._clearChecked()" class="text-xs wf-text-muted hover:text-red-500 transition-colors">
                  🗑 Clear Packed
                </button>
              </div>
              <div class="flex flex-wrap gap-2.5">
                <button onclick="WFChecklistView._applyPreset('trekking')" class="wf-btn wf-btn-secondary wf-btn-sm">
                  🏔️ Trekking Kit
                </button>
                <button onclick="WFChecklistView._applyPreset('beach')" class="wf-btn wf-btn-secondary wf-btn-sm">
                  🏖️ Coastal &amp; Beach
                </button>
                <button onclick="WFChecklistView._applyPreset('winter')" class="wf-btn wf-btn-secondary wf-btn-sm">
                  ❄️ Hill Station &amp; Winter
                </button>
                <button onclick="WFChecklistView._applyPreset('temple')" class="wf-btn wf-btn-secondary wf-btn-sm">
                  🛕 Temple Pilgrimage
                </button>
                <button onclick="WFChecklistView._applyPreset('flight')" class="wf-btn wf-btn-secondary wf-btn-sm">
                  🌐 International Flight &amp; Forex
                </button>
                <button onclick="WFChecklistView._applyPreset('safari')" class="wf-btn wf-btn-secondary wf-btn-sm">
                  🐅 Wildlife Safari
                </button>
              </div>
            </div>
          </div>

          <!-- Instant Search & Filter Bar -->
          <div class="flex flex-col sm:flex-row items-center gap-3">
            <div class="relative flex-1 w-full">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-stone-400">🔍</span>
              <input
                type="text"
                id="checklist-search-input"
                class="wf-input pl-9 pr-8 text-xs py-2.5 w-full"
                placeholder="Search gear items by name or notes..."
                value="${this.searchQuery}"
                oninput="WFChecklistView._handleSearch(this.value)"
              />
              ${this.searchQuery ? `
                <button
                  onclick="WFChecklistView._clearSearch()"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >✕</button>` : ''}
            </div>
          </div>

          <!-- Category Filter Tabs with dynamic count badges -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar" id="checklist-category-tabs">
            ${this._renderCategoryTabsHTML()}
          </div>

          <!-- Items Grid -->
          <div id="checklist-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <!-- Injected by _renderItems -->
          </div>

          <!-- Empty State -->
          <div id="checklist-empty" class="wf-empty wf-card rounded-2xl hidden p-8 text-center" style="border:1.5px dashed var(--border-medium)">
            <div class="wf-empty-icon text-4xl mb-2">🎒</div>
            <div class="wf-empty-title font-serif text-lg wf-text-primary mb-1">No items found</div>
            <div class="wf-empty-desc text-xs wf-text-muted max-w-sm mx-auto">
              ${this.searchQuery ? `No gear items match "${this.searchQuery}". Try clearing search.` : 'Add your gear items above or load one of the quick presets to get ready.'}
            </div>
          </div>

        </div>
      </div>
    `;
  },

  _renderCategoryTabsHTML() {
    const store = window.wayfarerStore;
    const items = store?.getChecklist?.() || [];

    return this.categories.map(cat => {
      const catItems = cat === 'All' ? items : items.filter(i => i.category === cat);
      const total = catItems.length;
      const packed = catItems.filter(i => (i.checked || i.packed)).length;
      const isTarget = this.currentCategory === cat;

      return `
        <button
          class="checklist-tab px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
            isTarget ? 'bg-forest-700 text-white border-forest-700 shadow-md' : 'wf-card wf-text-secondary wf-border hover:border-forest-600'
          }"
          data-category="${cat}"
          onclick="WFChecklistView._setCategory('${cat}')"
        >
          <span>${cat}</span>
          ${total > 0 ? `
            <span class="text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
              isTarget ? 'bg-white/20 text-white' : (packed === total ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'wf-bg-secondary wf-text-muted')
            }">
              ${packed}/${total}${packed === total ? ' ✓' : ''}
            </span>` : ''}
        </button>
      `;
    }).join('');
  },

  _bindEvents(root) {
    // Search input enter or esc
    const searchInput = root.querySelector('#checklist-search-input');
    searchInput?.addEventListener('keydown', e => {
      if (e.key === 'Escape') this._clearSearch();
    });
  },

  _handleSearch(query) {
    this.searchQuery = query.trim().toLowerCase();
    const container = document.getElementById('view-checklist');
    if (container) {
      this._renderItems(container);
    }
  },

  _clearSearch() {
    this.searchQuery = '';
    const container = document.getElementById('view-checklist');
    if (container) {
      const input = container.querySelector('#checklist-search-input');
      if (input) input.value = '';
      this._renderItems(container);
    }
  },

  _setCategory(cat) {
    this.currentCategory = cat;
    const container = document.getElementById('view-checklist');
    if (container) {
      const tabsEl = container.querySelector('#checklist-category-tabs');
      if (tabsEl) tabsEl.innerHTML = this._renderCategoryTabsHTML();
      this._renderItems(container);
    }
  },

  _renderItems(container) {
    const grid = container.querySelector('#checklist-grid');
    const emptyState = container.querySelector('#checklist-empty');
    if (!grid) return;

    const store = window.wayfarerStore;
    const items = store?.getChecklist?.() || [];

    const filtered = items.filter(item => {
      // Category filter
      if (this.currentCategory !== 'All' && item.category !== this.currentCategory) {
        return false;
      }
      // Search filter
      if (this.searchQuery) {
        const matchName = (item.name || '').toLowerCase().includes(this.searchQuery);
        const matchNotes = (item.notes || '').toLowerCase().includes(this.searchQuery);
        const matchCat = (item.category || '').toLowerCase().includes(this.searchQuery);
        return matchName || matchNotes || matchCat;
      }
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyState?.classList.remove('hidden');
      return;
    }

    emptyState?.classList.add('hidden');
    grid.innerHTML = filtered.map(item => {
      const isChecked = !!(item.checked || item.packed);
      return `
        <div class="wf-card rounded-2xl p-4 border wf-border flex items-start gap-3.5 transition-all hover:shadow-md ${
          isChecked ? 'opacity-65 bg-black/[0.02] dark:bg-white/[0.02]' : ''
        }" data-id="${item.id}">
          <button
            onclick="WFChecklistView._toggleItem('${item.id}')"
            class="w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
              isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-400/50 hover:border-emerald-600'
            }"
            title="${isChecked ? 'Mark unpacked' : 'Mark packed'}"
          >
            ${isChecked ? '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : ''}
          </button>

          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="wf-badge wf-badge-muted text-[10px] py-0.5 px-2">${item.category || 'Gear'}</span>
              ${item.quantity > 1 ? `<span class="text-[11px] font-mono wf-text-muted">×${item.quantity}</span>` : ''}
            </div>
            <h4 class="text-sm font-medium wf-text-primary ${isChecked ? 'line-through opacity-70' : ''}">${item.name}</h4>
            ${item.notes ? `<p class="text-xs wf-text-muted mt-1 leading-relaxed">${item.notes}</p>` : ''}
          </div>

          <button
            onclick="WFChecklistView._deleteItem('${item.id}')"
            class="wf-btn wf-btn-ghost wf-btn-sm p-1 text-stone-400 hover:text-red-500 transition-colors"
            title="Delete item"
          >
            ✕
          </button>
        </div>
      `;
    }).join('');
  },

  _updateProgress(container) {
    const store = window.wayfarerStore;
    const items = store?.getChecklist?.() || [];
    const total = items.length;
    const packed = items.filter(i => i.checked || i.packed).length;
    const percentage = total === 0 ? 0 : Math.round((packed / total) * 100);

    const packedCountEl = container.querySelector('#checklist-packed-count');
    const totalCountEl = container.querySelector('#checklist-total-count');
    const percentageEl = container.querySelector('#readiness-percentage');
    const barEl = container.querySelector('#readiness-bar');

    if (packedCountEl) packedCountEl.textContent = packed;
    if (totalCountEl) totalCountEl.textContent = total;
    if (percentageEl) percentageEl.textContent = percentage + '%';
    if (barEl) barEl.style.width = percentage + '%';

    // Update category tabs counts
    const tabsEl = container.querySelector('#checklist-category-tabs');
    if (tabsEl) tabsEl.innerHTML = this._renderCategoryTabsHTML();
  },

  _toggleItem(id) {
    const store = window.wayfarerStore;
    if (!store) return;
    const item = (store.getChecklist() || []).find(c => c.id === id);
    if (item) {
      item.checked = !item.checked;
      item.packed = item.checked;
      store.save();
      store.notify();
    }
    const container = document.getElementById('view-checklist');
    if (container) {
      this._renderItems(container);
      this._updateProgress(container);
    }
  },

  _packAll() {
    window.wayfarerStore?.packAllChecklist?.();
    WFNotify?.show('All gear packed! Expedition ready 🎒', 'success');
    const container = document.getElementById('view-checklist');
    if (container) {
      this._renderItems(container);
      this._updateProgress(container);
    }
  },

  _unpackAll() {
    window.wayfarerStore?.unpackAllChecklist?.();
    WFNotify?.show('Checklist reset to unpacked', 'info');
    const container = document.getElementById('view-checklist');
    if (container) {
      this._renderItems(container);
      this._updateProgress(container);
    }
  },

  _clearChecked() {
    window.wayfarerStore?.clearCheckedChecklist?.();
    WFNotify?.show('Removed packed items from checklist', 'info');
    const container = document.getElementById('view-checklist');
    if (container) {
      this._renderItems(container);
      this._updateProgress(container);
    }
  },

  _deleteItem(id) {
    const store = window.wayfarerStore;
    if (!store) return;
    store.deleteChecklistItem(id);
    WFNotify?.show('Item removed from checklist', 'info');
    const container = document.getElementById('view-checklist');
    if (container) {
      this._renderItems(container);
      this._updateProgress(container);
    }
  },

  _openAddItemModal() {
    const overlay = document.getElementById('trip-modal-overlay');
    const inner = document.getElementById('trip-modal-inner');
    if (!overlay || !inner) return;

    const options = this.categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('');

    inner.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-6 pb-4 border-b wf-border">
          <div class="flex items-center gap-2">
            <span class="text-xl">🎒</span>
            <h3 class="font-serif wf-text-primary text-2xl">Add Gear Item</h3>
          </div>
          <button onclick="ANTARA.closeTripModal()" class="wf-btn wf-btn-ghost wf-btn-icon">✕</button>
        </div>

        <form id="checklist-add-form" class="space-y-4" onsubmit="WFChecklistView._handleAddItemSubmit(event)">
          <div>
            <label class="wf-label-text">Item Name</label>
            <input type="text" id="chk-item-name" class="wf-input" placeholder="e.g. Rain Poncho / Universal Adapter" required />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="wf-label-text">Category</label>
              <select id="chk-item-cat" class="wf-select">
                ${options}
              </select>
            </div>
            <div>
              <label class="wf-label-text">Quantity</label>
              <input type="number" id="chk-item-qty" min="1" max="99" value="1" class="wf-input" />
            </div>
          </div>

          <div>
            <label class="wf-label-text">Notes (Optional)</label>
            <input type="text" id="chk-item-notes" class="wf-input" placeholder="e.g. Keep in cabin bag / waterproof pouch" />
          </div>

          <div class="flex gap-3 pt-3">
            <button type="submit" class="wf-btn wf-btn-primary flex-1">Add to Checklist</button>
            <button type="button" onclick="ANTARA.closeTripModal()" class="wf-btn wf-btn-ghost">Cancel</button>
          </div>
        </form>
      </div>
    `;

    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
    ANTARA.tripModalOpen = true;
  },

  _handleAddItemSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('chk-item-name')?.value.trim();
    const category = document.getElementById('chk-item-cat')?.value || 'Gear';
    const quantity = parseInt(document.getElementById('chk-item-qty')?.value, 10) || 1;
    const notes = document.getElementById('chk-item-notes')?.value.trim() || '';

    if (!name) return;

    const store = window.wayfarerStore;
    if (store) {
      store.addChecklistItem({
        name,
        category,
        quantity,
        notes,
        checked: false,
        packed: false
      });
      WFNotify?.show(`Added ${name} to checklist`, 'success');
    }

    ANTARA.closeTripModal();
    const container = document.getElementById('view-checklist');
    if (container) {
      this._renderItems(container);
      this._updateProgress(container);
    }
  },

  _applyPreset(preset) {
    const store = window.wayfarerStore;
    if (!store) return;

    const presets = {
      trekking: [
        { name: 'Waterproof Trekking Shoes', category: 'Clothing', quantity: 1, notes: 'Broken-in trail shoes' },
        { name: 'Merino Wool / Quick-Dry Socks', category: 'Clothing', quantity: 3, notes: 'Cushioned sole' },
        { name: 'Trekking Poles', category: 'Gear', quantity: 2, notes: 'Foldable' },
        { name: 'Headlamp & Spare Batteries', category: 'Gear', quantity: 1, notes: '300+ lumens' },
        { name: 'Water Filter Bottle / Tablets', category: 'Gear', quantity: 1, notes: 'For streams' },
        { name: 'Electrolyte Sachets (ORS)', category: 'Medications', quantity: 5, notes: 'Hydration' }
      ],
      beach: [
        { name: 'Sunscreen SPF 50+ (Reef-safe)', category: 'Toiletries', quantity: 1, notes: 'Broad spectrum' },
        { name: 'UV Protective Sunglasses', category: 'Gear', quantity: 1, notes: 'Polarized' },
        { name: 'Quick-Dry Microfiber Towel', category: 'Gear', quantity: 1, notes: 'Sand-resistant' },
        { name: 'Dry Bag for Phone & Cash', category: 'Gear', quantity: 1, notes: '10L waterproof' },
        { name: 'Flip-Flops / Aqua Shoes', category: 'Clothing', quantity: 1, notes: 'Coastal walk' },
        { name: 'Aloe Vera After-Sun Gel', category: 'Toiletries', quantity: 1, notes: 'Soothing' }
      ],
      winter: [
        { name: 'Thermal Base Layer (Top & Bottom)', category: 'Clothing', quantity: 2, notes: 'Fleece lined' },
        { name: 'Down Jacket / Windcheater', category: 'Clothing', quantity: 1, notes: 'Sub-10°C rating' },
        { name: 'Warm Beanie & Neck Gaiter', category: 'Clothing', quantity: 1, notes: 'Woolen' },
        { name: 'Insulated Touchscreen Gloves', category: 'Clothing', quantity: 1, notes: 'Windproof' },
        { name: 'Lip Balm with SPF', category: 'Toiletries', quantity: 1, notes: 'Cold protection' },
        { name: 'Insulated Thermos Flask', category: 'Gear', quantity: 1, notes: 'Hot water / chai' }
      ],
      temple: [
        { name: 'Modest Traditional Cotton Attire', category: 'Clothing', quantity: 2, notes: 'Kurta / Dhoti / Saree' },
        { name: 'Easy Slip-On Footwear', category: 'Clothing', quantity: 1, notes: 'Quick removal at temple gates' },
        { name: 'Cash in Small Denominations', category: 'Documents', quantity: 1, notes: 'For prasad & dakshina' },
        { name: 'Cloth Carry Bag', category: 'Gear', quantity: 2, notes: 'For shoes & prasad' },
        { name: 'Government ID Cards (Aadhaar/DL)', category: 'Documents', quantity: 1, notes: 'Temple queue entry' },
        { name: 'Hand Sanitizer & Wet Wipes', category: 'Toiletries', quantity: 1, notes: 'Post darshan' }
      ],
      flight: [
        { name: 'Original Passport (6+ months validity)', category: 'Documents', quantity: 1, notes: 'Keep in travel pouch' },
        { name: 'Printed Visa & Return Tickets', category: 'Documents', quantity: 2, notes: 'Immigration backup' },
        { name: 'Multi-Country Universal Adapter', category: 'Electronics', quantity: 1, notes: 'UK/EU/US compatible' },
        { name: 'Forex Multi-Currency Card & Cash', category: 'Documents', quantity: 1, notes: 'Backup credit card' },
        { name: 'Noise-Cancelling Headphones', category: 'Electronics', quantity: 1, notes: 'In-flight comfort' },
        { name: 'In-Flight Memory Foam Neck Pillow', category: 'Gear', quantity: 1, notes: 'Long haul flights' },
        { name: 'Blue/Black Ballpoint Pen', category: 'Miscellaneous', quantity: 2, notes: 'Immigration & customs forms' }
      ],
      safari: [
        { name: 'Khaki / Earthy Olive Cotton Shirts', category: 'Clothing', quantity: 2, notes: 'Avoid bright colors' },
        { name: 'Binoculars (8x42 or 10x42)', category: 'Gear', quantity: 1, notes: 'Wildlife spotting' },
        { name: 'Telephoto Lens & Camera Strap', category: 'Electronics', quantity: 1, notes: '200mm+ recommended' },
        { name: 'Insect Repellent Spray (DEET)', category: 'Medications', quantity: 1, notes: 'Mosquito/tick protection' },
        { name: 'Dust Buff / Face Bandana', category: 'Clothing', quantity: 2, notes: 'For open gypsy tracks' },
        { name: 'Wide-Brim Safari Sun Hat', category: 'Clothing', quantity: 1, notes: 'Sun protection' }
      ]
    };

    const items = presets[preset] || [];
    items.forEach(item => {
      store.addChecklistItem({
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        notes: item.notes,
        checked: false,
        packed: false
      });
    });

    WFNotify?.show(`Added ${items.length} items from ${preset.toUpperCase()} kit!`, 'success');
    const container = document.getElementById('view-checklist');
    if (container) {
      this._renderItems(container);
      this._updateProgress(container);
    }
  }
};

// Aliases
window.WayfarerChecklistView = window.WFChecklistView;
