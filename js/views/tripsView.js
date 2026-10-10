/* ==========================================================================
   WAYFARER / ANTARA — Trips View v3.0
   Trip planning, interactive itinerary milestones, live expense logging,
   budget recalculations, unified 185-destination selector, and packing checklist
   ========================================================================== */

window.WFTripsView = {
  activeTrip: null,
  activeTab: 'overview', // 'overview' | 'itinerary' | 'budget' | 'checklist'

  render(container) {
    const root = typeof container === 'string' ? document.getElementById(container) : container;
    if (!root) return;

    const store = window.wayfarerStore;
    const trips = store?.getTrips?.() || [];

    root.innerHTML = `
      <div class="wf-trips animate-fade-in">

        <!-- ═══ HEADER ═══ -->
        <div class="wf-page-content pt-24 pb-8">
          <div class="wf-section-header">
            <div>
              <div class="wf-section-eyebrow">Personal Itineraries</div>
              <h1 class="wf-headline wf-text-primary">My Trips &amp; Expeditions</h1>
              <p class="text-xs wf-text-muted mt-1">Design daily milestones, track live spending ledgers, and manage packing readiness.</p>
            </div>
            <button onclick="ANTARA.openTripModal(null)" class="wf-btn wf-btn-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              New Trip
            </button>
          </div>
        </div>

        <!-- ═══ TRIP CARDS ═══ -->
        <div class="wf-page-content pb-16">
          ${trips.length === 0 ? this._renderEmpty() : this._renderTrips(trips, store)}
        </div>

      </div>`;
  },

  _renderEmpty() {
    return `
      <div class="wf-empty wf-card rounded-2xl p-10 text-center" style="border:1.5px dashed var(--border-medium)">
        <div class="wf-empty-icon text-4xl mb-3">✈️</div>
        <div class="wf-empty-title font-serif text-2xl wf-text-primary mb-2">No trips planned yet</div>
        <div class="wf-empty-desc text-sm wf-text-muted max-w-md mx-auto mb-6">
          Plan your first journey across Odisha, Pan-India, or International destinations. Set dates, build daily milestones, and log expenses.
        </div>
        <button onclick="ANTARA.openTripModal(null)" class="wf-btn wf-btn-primary">Plan Your First Trip</button>
      </div>`;
  },

  _renderTrips(trips, store) {
    const active = trips.filter(t => t.status === 'Active' || t.status === 'Planned');
    const completed = trips.filter(t => t.status === 'Completed');
    const past = trips.filter(t => t.status === 'Past');

    return `
      ${active.length > 0 ? `
        <div class="mb-10">
          <div class="flex items-center justify-between mb-4">
            <span class="wf-label">Active &amp; Upcoming Expeditions (${active.length})</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${active.map(t => this._renderTripCard(t, store, true)).join('')}
          </div>
        </div>` : ''}

      ${completed.length > 0 ? `
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="wf-label">Completed Expeditions (${completed.length})</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${completed.map(t => this._renderTripCard(t, store, false)).join('')}
          </div>
        </div>` : ''}

      <div class="mt-8 text-center">
        <button onclick="ANTARA.openTripModal(null)" class="wf-btn wf-btn-secondary">+ Plan Another Trip</button>
      </div>`;
  },

  _renderTripCard(trip, store, isActive) {
    const budget = trip.budget || {};
    const spent = budget.actual || 0;
    const total = budget.estimated || 0;
    const pct = total > 0 ? Math.min(100, Math.round((spent / total) * 100)) : 0;
    const readiness = trip.readiness?.packingPct || 0;
    const daysLeft = trip.startDate ? ANTARA.daysUntil(trip.startDate) : null;

    return `
      <div class="wf-card rounded-2xl overflow-hidden animate-fade-up border wf-border ${isActive ? 'shadow-sm hover:shadow-md transition-shadow' : 'opacity-80'}">
        <!-- Cover image -->
        <div class="relative h-48 overflow-hidden bg-stone-200 dark:bg-stone-800">
          <img
            src="${trip.coverImage || 'NATURE/119632.jpg'}"
            alt="${trip.title}"
            class="w-full h-full object-cover"
            onerror="window.handleImageError ? handleImageError(this, '${trip.type || 'Nature'}', '${trip.id}') : (this.src='NATURE/119632.jpg');"
            loading="lazy"
          />
          <div class="absolute inset-0" style="background:linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)"></div>

          <!-- Status badge -->
          <div class="absolute top-3 left-3 flex gap-1.5">
            <span class="wf-badge text-[10px]" style="background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);color:white;border:1px solid rgba(255,255,255,0.2)">${trip.status}</span>
            <span class="wf-badge text-[10px]" style="background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);color:white">${trip.type || 'Leisure'}</span>
          </div>

          <!-- Days countdown -->
          ${daysLeft !== null && daysLeft >= 0 ? `
            <div class="absolute top-3 right-3">
              <div class="text-center px-3 py-1.5 rounded-xl" style="background:rgba(0,0,0,0.55);backdrop-filter:blur(6px)">
                <div class="font-serif text-white text-lg leading-none">${daysLeft}</div>
                <div class="text-white/70 text-[9px] uppercase tracking-wider">days to go</div>
              </div>
            </div>` : ''}

          <div class="absolute bottom-0 left-0 right-0 p-4">
            <div class="wf-label text-white/70 mb-0.5">${ANTARA.formatDate(trip.startDate)} → ${ANTARA.formatDate(trip.endDate)}</div>
            <h3 class="font-serif text-white text-2xl font-normal leading-tight">${trip.title}</h3>
          </div>
        </div>

        <!-- Trip body -->
        <div class="p-5 space-y-4">

          <!-- Budget progress -->
          ${total > 0 ? `
            <div>
              <div class="flex justify-between text-xs mb-1.5">
                <span class="wf-text-muted font-medium">Budget Ledger</span>
                <span class="wf-text-primary font-mono font-medium">₹${spent.toLocaleString('en-IN')} / ₹${total.toLocaleString('en-IN')} (${pct}%)</span>
              </div>
              <div class="wf-progress h-2 rounded-full overflow-hidden wf-bg-secondary">
                <div class="wf-progress-fill h-full rounded-full transition-all duration-500" style="width:${pct}%;${pct > 90 ? 'background:linear-gradient(90deg, #ef4444, #f59e0b)' : 'background:linear-gradient(90deg, var(--accent-sage), var(--accent-forest))'}"></div>
              </div>
            </div>` : ''}

          <!-- Packing readiness -->
          ${isActive ? `
            <div>
              <div class="flex justify-between text-xs mb-1.5">
                <span class="wf-text-muted font-medium">Gear Readiness</span>
                <span class="wf-text-primary font-medium font-mono">${readiness}%</span>
              </div>
              <div class="wf-progress h-2 rounded-full overflow-hidden wf-bg-secondary">
                <div class="wf-progress-fill h-full rounded-full transition-all duration-500" style="width:${readiness}%; background:linear-gradient(90deg, var(--accent-gold), var(--accent-forest));"></div>
              </div>
            </div>` : ''}

          <!-- Quick stats counter -->
          <div class="flex items-center gap-4 text-xs wf-text-muted pt-1">
            <span class="inline-flex items-center gap-1">📅 <strong>${(trip.itinerary || []).length}</strong> stops</span>
            <span class="inline-flex items-center gap-1">💰 <strong>${(trip.budget?.items || []).length}</strong> expenses logged</span>
          </div>

          <!-- Action buttons -->
          <div class="flex items-center gap-2 pt-2 border-t wf-border">
            <button onclick="WFTripsView.openTrip('${trip.id}')" class="wf-btn wf-btn-primary wf-btn-sm flex-1">
              Open Itinerary &amp; Budget →
            </button>
            ${isActive ? `
              <button onclick="WFTripsView.completeTrip('${trip.id}')" class="wf-btn wf-btn-secondary wf-btn-sm" title="Mark completed">✓ Complete</button>` : ''}
            <button onclick="WFTripsView.deleteTrip('${trip.id}')" class="wf-btn wf-btn-ghost wf-btn-sm text-stone-400 hover:text-red-500" title="Delete trip">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
      </div>`;
  },

  openTrip(tripId) {
    const store = window.wayfarerStore;
    const trip = store?.getTrip?.(tripId);
    if (!trip) return;

    const inner = document.getElementById('trip-modal-inner');
    const overlay = document.getElementById('trip-modal-overlay');
    if (!inner || !overlay) return;

    inner.innerHTML = this._renderTripDetail(trip, store);
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
    ANTARA.tripModalOpen = true;
  },

  _renderTripDetail(trip, store) {
    return `
      <div>
        <!-- Header -->
        <div class="flex items-start justify-between mb-5 pb-4 border-b wf-border">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="wf-label">${trip.destinationName || 'Expedition'}</span>
              <span class="wf-badge wf-badge-muted text-[10px]">${trip.status}</span>
            </div>
            <h2 class="font-serif wf-text-primary text-2xl md:text-3xl">${trip.title}</h2>
            <p class="wf-text-muted text-xs mt-1">
              ${ANTARA.formatDate(trip.startDate) || 'Dates TBD'} ${trip.endDate ? `– ${ANTARA.formatDate(trip.endDate)}` : ''}
              ${trip.type ? `· ${trip.type}` : ''}
            </p>
          </div>
          <button onclick="ANTARA.closeTripModal()" class="wf-btn wf-btn-ghost wf-btn-icon text-lg">✕</button>
        </div>

        <!-- Tab buttons -->
        <div class="flex gap-1 mb-5 bg-stone-100 dark:bg-stone-900 rounded-xl p-1">
          ${[
            { id: 'overview', label: 'Overview', icon: '📋' },
            { id: 'itinerary', label: 'Itinerary', icon: '📅' },
            { id: 'budget', label: 'Budget & Expenses', icon: '💰' },
            { id: 'checklist', label: 'Checklist', icon: '✓' }
          ].map(tab => `
            <button
              onclick="WFTripsView._switchTab('${trip.id}', '${tab.id}')"
              class="flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5
                ${this.activeTab === tab.id ? 'wf-bg-primary wf-text-primary shadow-sm bg-white dark:bg-stone-800' : 'wf-text-muted hover:wf-text-secondary'}"
            >
              <span>${tab.icon}</span>
              <span>${tab.label}</span>
            </button>`).join('')}
        </div>

        <!-- Tab content -->
        <div id="trip-tab-content">
          ${this._renderTripTab(trip, store)}
        </div>
      </div>`;
  },

  _renderTripTab(trip, store) {
    const tab = this.activeTab;
    const budget = trip.budget || { estimated: 0, actual: 0, items: [] };

    // ═══ 1. OVERVIEW TAB ═══
    if (tab === 'overview') {
      return `
        <div class="space-y-5 animate-fade-in">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="wf-surface border wf-border rounded-xl p-3.5">
              <div class="wf-label text-[10px] mb-1">Status</div>
              <div class="wf-text-primary font-medium text-sm">${trip.status}</div>
            </div>
            <div class="wf-surface border wf-border rounded-xl p-3.5">
              <div class="wf-label text-[10px] mb-1">Trip Style</div>
              <div class="wf-text-primary font-medium text-sm">${trip.type || 'Leisure'}</div>
            </div>
            <div class="wf-surface border wf-border rounded-xl p-3.5">
              <div class="wf-label text-[10px] mb-1">Budget Spent</div>
              <div class="wf-text-primary font-medium text-sm font-mono">₹${(budget.actual || 0).toLocaleString('en-IN')}</div>
            </div>
            <div class="wf-surface border wf-border rounded-xl p-3.5">
              <div class="wf-label text-[10px] mb-1">Stops Planned</div>
              <div class="wf-text-primary font-medium text-sm font-mono">${(trip.itinerary || []).length}</div>
            </div>
          </div>

          ${trip.notes ? `
            <div class="wf-surface border wf-border rounded-xl p-4">
              <div class="wf-label mb-2">Expedition Notes</div>
              <p class="text-sm wf-text-secondary leading-relaxed">${trip.notes}</p>
            </div>` : ''}

          <!-- Fast actions -->
          <div class="flex flex-wrap gap-2 pt-2">
            <button onclick="WFTripsView._switchTab('${trip.id}', 'itinerary')" class="wf-btn wf-btn-secondary wf-btn-sm flex-1">
              📅 Manage Milestones (${(trip.itinerary || []).length})
            </button>
            <button onclick="WFTripsView._switchTab('${trip.id}', 'budget')" class="wf-btn wf-btn-secondary wf-btn-sm flex-1">
              💰 Log Expense (₹${(budget.actual || 0).toLocaleString('en-IN')})
            </button>
            <button onclick="WFTripsView.exportTripBrief('${trip.id}')" class="wf-btn wf-btn-ghost wf-btn-sm">
              📋 Copy Briefing
            </button>
          </div>
        </div>`;
    }

    // ═══ 2. ITINERARY TAB ═══
    if (tab === 'itinerary') {
      const items = trip.itinerary || [];
      return `
        <div class="space-y-5 animate-fade-in">
          <!-- Action bar -->
          <div class="flex items-center justify-between">
            <div class="wf-label">Daily Itinerary Milestones (${items.length})</div>
            <button onclick="WFTripsView.autoGenerateItinerary('${trip.id}')" class="wf-btn wf-btn-secondary wf-btn-sm text-xs">
              ✨ Auto-Fill Highlights
            </button>
          </div>

          <!-- Milestones Timeline -->
          ${items.length === 0 ? `
            <div class="wf-empty wf-card rounded-xl p-6 text-center border wf-border" style="min-height:140px">
              <div class="wf-empty-icon text-3xl mb-1">📅</div>
              <div class="text-sm wf-text-primary font-medium">No itinerary stops added yet</div>
              <div class="text-xs wf-text-muted mt-1">Use the form below or click "Auto-Fill Highlights" to populate stops.</div>
            </div>` : `
            <div class="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
              ${items.map((item, i) => {
                const isCompleted = item.status === 'Completed';
                return `
                  <div class="wf-card rounded-xl p-3.5 border wf-border flex items-start justify-between gap-3 ${isCompleted ? 'opacity-65 bg-black/[0.02] dark:bg-white/[0.02]' : ''}">
                    <button
                      onclick="WFTripsView.toggleItineraryMilestone('${trip.id}', ${i})"
                      class="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${isCompleted ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-400/50 hover:border-emerald-600'}"
                      title="Toggle completed"
                    >
                      ${isCompleted ? '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : ''}
                    </button>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2 mb-0.5">
                        <span class="wf-badge wf-badge-gold text-[9px] px-1.5 py-0.5">${item.day || 'Day 1'}</span>
                        ${item.time ? `<span class="text-[11px] font-mono wf-text-muted">⏱ ${item.time}</span>` : ''}
                      </div>
                      <h4 class="text-sm font-medium wf-text-primary ${isCompleted ? 'line-through opacity-75' : ''}">${item.title}</h4>
                      ${item.location ? `<div class="text-xs wf-text-muted truncate mt-0.5">📍 ${item.location}</div>` : ''}
                      ${item.note ? `<div class="text-xs wf-text-secondary mt-1 italic leading-snug">${item.note}</div>` : ''}
                    </div>
                    <button onclick="WFTripsView.deleteItineraryMilestone('${trip.id}', ${i})" class="text-stone-400 hover:text-red-500 text-xs p-1" title="Delete stop">✕</button>
                  </div>`;
              }).join('')}
            </div>`}

          <!-- Add Milestone Inline Form -->
          <div class="wf-surface border wf-border rounded-xl p-4">
            <div class="wf-label mb-3">+ Add New Milestone / Stop</div>
            <form onsubmit="WFTripsView.addMilestone(event, '${trip.id}')" class="space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div>
                  <label class="wf-label-text">Day</label>
                  <select name="day" class="wf-select text-xs py-1.5">
                    <option value="Day 1">Day 1</option>
                    <option value="Day 2">Day 2</option>
                    <option value="Day 3">Day 3</option>
                    <option value="Day 4">Day 4</option>
                    <option value="Day 5">Day 5</option>
                    <option value="Day 6">Day 6</option>
                    <option value="Day 7">Day 7</option>
                  </select>
                </div>
                <div>
                  <label class="wf-label-text">Time</label>
                  <input name="time" type="text" class="wf-input text-xs py-1.5" placeholder="e.g. 08:30 AM" />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label class="wf-label-text">Location</label>
                  <input name="location" type="text" class="wf-input text-xs py-1.5" placeholder="e.g. Golden Beach" />
                </div>
              </div>
              <div>
                <label class="wf-label-text">Milestone Activity</label>
                <input name="title" type="text" class="wf-input text-xs py-1.5" placeholder="e.g. Sunrise viewing &amp; breakfast" required />
              </div>
              <div>
                <label class="wf-label-text">Notes (Optional)</label>
                <input name="note" type="text" class="wf-input text-xs py-1.5" placeholder="e.g. Book entry tickets in advance" />
              </div>
              <button type="submit" class="wf-btn wf-btn-primary wf-btn-sm w-full mt-1">Add Milestone to Itinerary</button>
            </form>
          </div>
        </div>`;
    }

    // ═══ 3. BUDGET TAB ═══
    if (tab === 'budget') {
      const spent = budget.actual || 0;
      const total = budget.estimated || 0;
      const remaining = total - spent;
      const items = budget.items || [];
      const pct = total > 0 ? Math.min(100, Math.round((spent / total) * 100)) : 0;

      return `
        <div class="space-y-5 animate-fade-in">
          <!-- Budget Meter Card -->
          <div class="wf-surface rounded-xl p-4 border wf-border space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <div class="wf-label text-[10px] mb-0.5">Total Spent</div>
                <div class="font-serif wf-text-primary text-2xl font-normal">₹${spent.toLocaleString('en-IN')}</div>
                <div class="text-[11px] wf-text-muted">Target: ₹${total.toLocaleString('en-IN')}</div>
              </div>
              <div class="text-right">
                <div class="wf-label text-[10px] mb-0.5">Remaining</div>
                <div class="font-serif text-2xl font-normal ${remaining < 0 ? 'text-red-500 font-semibold' : 'text-emerald-600 dark:text-emerald-400'}">
                  ₹${remaining.toLocaleString('en-IN')}
                </div>
                <div class="text-[11px] wf-text-muted">${remaining < 0 ? 'Over budget' : 'Under budget'}</div>
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="wf-progress h-2 rounded-full overflow-hidden wf-bg-secondary">
              <div class="wf-progress-fill h-full rounded-full transition-all duration-500" style="width:${pct}%;${pct > 90 ? 'background:linear-gradient(90deg, #ef4444, #f59e0b)' : 'background:linear-gradient(90deg, var(--accent-sage), var(--accent-forest))'}"></div>
            </div>
          </div>

          <!-- Expense List -->
          <div>
            <div class="wf-label mb-2.5">Expense Ledger (${items.length} logged)</div>
            ${items.length === 0 ? `
              <div class="wf-empty wf-card rounded-xl p-5 text-center border wf-border" style="min-height:100px">
                <div class="text-xs wf-text-muted">No expenses recorded yet. Use the form below to log flights, stays, or meals.</div>
              </div>` : `
              <div class="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                ${items.map(item => `
                  <div class="flex items-center justify-between p-3 rounded-xl wf-card border wf-border">
                    <div class="min-w-0 flex-1">
                      <div class="text-sm font-medium wf-text-primary truncate">${item.name}</div>
                      <span class="wf-badge wf-badge-muted text-[9px] mt-0.5">${item.category || 'Misc'}</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="font-mono font-medium text-sm wf-text-primary">₹${(Number(item.amount) || 0).toLocaleString('en-IN')}</span>
                      <button onclick="WFTripsView.deleteExpense('${trip.id}', '${item.id}')" class="text-stone-400 hover:text-red-500 text-xs" title="Delete expense">✕</button>
                    </div>
                  </div>`).join('')}
              </div>`}
          </div>

          <!-- Add Expense Form -->
          <div class="wf-surface border wf-border rounded-xl p-4">
            <div class="wf-label mb-3">+ Log New Expense</div>
            <form onsubmit="WFTripsView.addExpense(event, '${trip.id}')" class="space-y-3">
              <div class="grid grid-cols-2 gap-2.5">
                <div>
                  <label class="wf-label-text">Expense Item</label>
                  <input name="name" type="text" class="wf-input text-xs py-1.5" placeholder="e.g. Eco-Resort Booking" required />
                </div>
                <div>
                  <label class="wf-label-text">Amount (₹)</label>
                  <input name="amount" type="number" min="1" class="wf-input text-xs py-1.5" placeholder="2500" required />
                </div>
              </div>
              <div>
                <label class="wf-label-text">Category</label>
                <select name="category" class="wf-select text-xs py-1.5">
                  <option value="Stay">Accommodation &amp; Stay</option>
                  <option value="Transport">Transport &amp; Fuel</option>
                  <option value="Food">Food &amp; Dining</option>
                  <option value="Activities">Entry, Guides &amp; Activities</option>
                  <option value="Gear">Gear &amp; Supplies</option>
                  <option value="Shopping">Local Crafts &amp; Shopping</option>
                  <option value="Misc">Miscellaneous</option>
                </select>
              </div>
              <button type="submit" class="wf-btn wf-btn-primary wf-btn-sm w-full mt-1">Record Expense in Ledger</button>
            </form>
          </div>
        </div>`;
    }

    // ═══ 4. CHECKLIST TAB ═══
    if (tab === 'checklist') {
      const items = store?.getChecklist?.() || [];
      const packedCount = items.filter(i => i.checked || i.packed).length;

      return `
        <div class="space-y-4 animate-fade-in">
          <div class="flex items-center justify-between">
            <div class="wf-label">Gear Packing Status (${packedCount}/${items.length} Packed)</div>
            <div class="flex gap-2">
              <button onclick="WFTripsView.packAllTripGear('${trip.id}')" class="wf-btn wf-btn-secondary wf-btn-sm text-xs">✓ Pack All</button>
              <button onclick="WFTripsView.unpackAllTripGear('${trip.id}')" class="wf-btn wf-btn-ghost wf-btn-sm text-xs">↺ Unpack All</button>
            </div>
          </div>

          ${items.length === 0 ? `
            <div class="wf-empty wf-card rounded-xl p-6 text-center border wf-border" style="min-height:120px">
              <div class="wf-empty-icon text-3xl mb-1">🎒</div>
              <div class="text-xs wf-text-muted">No packing items found. Go to the Packing Checklist tab or load a preset kit!</div>
            </div>` : `
            <div class="space-y-2 max-h-[280px] overflow-y-auto pr-1">
              ${items.map(item => {
                const isChecked = !!(item.checked || item.packed);
                return `
                  <label class="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-900/50 border wf-border transition-colors ${isChecked ? 'opacity-65' : ''}">
                    <input
                      type="checkbox"
                      ${isChecked ? 'checked' : ''}
                      onchange="wayfarerStore.toggleChecklistItem('${item.id}'); WFTripsView._refreshTabContent('${trip.id}');"
                      class="w-4 h-4 rounded accent-forest-700 cursor-pointer"
                    />
                    <div class="flex-1 min-w-0">
                      <div class="text-xs font-medium wf-text-primary ${isChecked ? 'line-through opacity-70' : ''}">${item.name}</div>
                      <div class="text-[10px] wf-text-muted">${item.category} ${item.quantity > 1 ? `· ×${item.quantity}` : ''}</div>
                    </div>
                  </label>`;
              }).join('')}
            </div>`}

          <!-- Quick Gear Item Add -->
          <div class="wf-surface border wf-border rounded-xl p-3.5">
            <form onsubmit="WFTripsView.addTripChecklistItem(event, '${trip.id}')" class="flex gap-2">
              <input name="name" type="text" class="wf-input text-xs py-1.5 flex-1" placeholder="Quick add gear item..." required />
              <button type="submit" class="wf-btn wf-btn-primary wf-btn-sm">Add Item</button>
            </form>
          </div>
        </div>`;
    }

    return '';
  },

  _switchTab(tripId, tab) {
    this.activeTab = tab;
    this._refreshTabContent(tripId);
  },

  _refreshTabContent(tripId) {
    const store = window.wayfarerStore;
    const trip = store?.getTrip?.(tripId);
    const content = document.getElementById('trip-tab-content');
    if (content && trip) {
      content.innerHTML = this._renderTripTab(trip, store);
      // Update tab buttons
      document.querySelectorAll('#trip-modal-inner button[onclick*="_switchTab"]').forEach(btn => {
        const isActive = btn.getAttribute('onclick').includes(`'${this.activeTab}'`);
        btn.className = `flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
          isActive ? 'wf-bg-primary wf-text-primary shadow-sm bg-white dark:bg-stone-800' : 'wf-text-muted hover:wf-text-secondary'
        }`;
      });
    }
  },

  // ═══ INTERACTIVE ITINERARY METHODS ═══
  addMilestone(e, tripId) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const milestone = {
      day: formData.get('day') || 'Day 1',
      time: formData.get('time') || '',
      title: formData.get('title'),
      location: formData.get('location') || '',
      note: formData.get('note') || '',
      status: 'Pending'
    };

    window.wayfarerStore?.addItineraryItem?.(tripId, milestone);
    WFNotify?.show(`Added "${milestone.title}" to itinerary`, 'success');
    this._refreshTabContent(tripId);
  },

  toggleItineraryMilestone(tripId, idx) {
    window.wayfarerStore?.toggleItineraryItem?.(tripId, idx);
    this._refreshTabContent(tripId);
  },

  deleteItineraryMilestone(tripId, idx) {
    window.wayfarerStore?.deleteItineraryItem?.(tripId, idx);
    WFNotify?.show('Itinerary milestone deleted', 'info');
    this._refreshTabContent(tripId);
  },

  autoGenerateItinerary(tripId) {
    const store = window.wayfarerStore;
    const trip = store?.getTrip?.(tripId);
    if (!trip) return;

    // Find destination
    const dest = (window.ODISHA_DATA?.destinations || []).find(d => d.id === trip.destinationId)
      || (window.INDIA_TRAVEL_DATA?.destinations || []).find(d => d.id === trip.destinationId)
      || (window.GLOBAL_TRAVEL_DATA?.destinations || []).find(d => d.id === trip.destinationId);

    const activities = dest?.things_to_do || dest?.highlights || [
      'Morning arrival, orientation & local breakfast',
      'Guided cultural exploration & photography',
      'Scenic sunset vantage point & authentic local dinner'
    ];

    const newMilestones = activities.slice(0, 4).map((act, i) => ({
      day: `Day ${Math.floor(i / 2) + 1}`,
      time: i % 2 === 0 ? '09:00 AM' : '04:30 PM',
      title: act,
      location: dest?.name || trip.destinationName || '',
      note: 'Curated milestone from top destination highlights',
      status: 'Pending'
    }));

    newMilestones.forEach(m => {
      store.addItineraryItem(tripId, m);
    });

    WFNotify?.show(`Auto-populated ${newMilestones.length} milestone stops! ✨`, 'success');
    this._refreshTabContent(tripId);
  },

  // ═══ INTERACTIVE EXPENSE METHODS ═══
  addExpense(e, tripId) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const expense = {
      name: formData.get('name'),
      amount: Number(formData.get('amount')) || 0,
      category: formData.get('category') || 'Misc',
      date: new Date().toISOString().split('T')[0]
    };

    window.wayfarerStore?.addTripExpense?.(tripId, expense);
    WFNotify?.show(`Recorded ₹${expense.amount.toLocaleString('en-IN')} for ${expense.name}`, 'success');
    this._refreshTabContent(tripId);
  },

  deleteExpense(tripId, expId) {
    window.wayfarerStore?.deleteTripExpense?.(tripId, expId);
    WFNotify?.show('Expense removed from ledger', 'info');
    this._refreshTabContent(tripId);
  },

  // ═══ CHECKLIST TRIP HELPERS ═══
  packAllTripGear(tripId) {
    window.wayfarerStore?.packAllChecklist?.();
    WFNotify?.show('All items packed! Ready to depart ✈️', 'success');
    this._refreshTabContent(tripId);
  },

  unpackAllTripGear(tripId) {
    window.wayfarerStore?.unpackAllChecklist?.();
    WFNotify?.show('Unpacked all items', 'info');
    this._refreshTabContent(tripId);
  },

  addTripChecklistItem(e, tripId) {
    e.preventDefault();
    const name = e.target.elements.name?.value.trim();
    if (!name) return;
    window.wayfarerStore?.addChecklistItem?.({
      name,
      category: 'Gear',
      quantity: 1,
      checked: false,
      packed: false
    });
    WFNotify?.show(`Added ${name} to gear checklist`, 'success');
    e.target.reset();
    this._refreshTabContent(tripId);
  },

  exportTripBrief(tripId) {
    const store = window.wayfarerStore;
    const trip = store?.getTrip?.(tripId);
    if (!trip) return;

    let brief = `ANTARA EXPEDITION BRIEFING: ${trip.title.toUpperCase()}\n`;
    brief += `Destination: ${trip.destinationName}\n`;
    brief += `Dates: ${trip.startDate || 'TBD'} to ${trip.endDate || 'TBD'}\n`;
    brief += `Budget: ₹${(trip.budget?.actual || 0).toLocaleString('en-IN')} / ₹${(trip.budget?.estimated || 0).toLocaleString('en-IN')}\n\n`;
    brief += `--- ITINERARY STOPS ---\n`;
    (trip.itinerary || []).forEach(item => {
      brief += `[${item.status === 'Completed' ? '✓' : ' '}] ${item.day} ${item.time ? `(${item.time})` : ''}: ${item.title} - ${item.location || ''}\n`;
    });

    navigator.clipboard?.writeText(brief).then(() => {
      WFNotify?.show('Expedition briefing copied to clipboard! 📋', 'success');
    }).catch(() => {
      WFNotify?.show('Failed to copy to clipboard', 'error');
    });
  },

  completeTrip(tripId) {
    window.wayfarerStore?.updateTrip?.(tripId, { status: 'Completed' });
    WFNotify?.show('Trip marked as completed ✓', 'success');
  },

  deleteTrip(tripId) {
    if (!confirm('Delete this trip? This cannot be undone.')) return;
    const store = window.wayfarerStore;
    if (store) {
      store._state.trips = (store._state.trips || []).filter(t => t.id !== tripId);
      store.save();
      store.notify();
    }
    WFNotify?.show('Trip deleted', 'info');
  },

  // ═══ TRIP CREATION MODAL WITH 185 DESTINATIONS & PREFILL ═══
  renderTripModal(tripId, prefilledDestId) {
    if (tripId) {
      this.openTrip(tripId);
      return '';
    }

    const odishaDests = window.ODISHA_DATA?.destinations || [];
    const indiaDests = window.INDIA_TRAVEL_DATA?.destinations || [];
    const globalDests = window.GLOBAL_TRAVEL_DATA?.destinations || [];

    let prefill = null;
    if (prefilledDestId) {
      prefill = odishaDests.find(d => d.id === prefilledDestId)
        || indiaDests.find(d => d.id === prefilledDestId)
        || globalDests.find(d => d.id === prefilledDestId)
        || window.wayfarerStore?.getDestination(prefilledDestId);
    }

    // Default dates: 7 days to 11 days from now
    const now = new Date();
    const startD = new Date(now.getTime() + 7 * 86400000).toISOString().split('T')[0];
    const endD = new Date(now.getTime() + 11 * 86400000).toISOString().split('T')[0];

    // Estimated budget calculation
    let defaultBudget = 15000;
    if (prefill) {
      if (prefill.dailyBudgetINR?.midRange) {
        defaultBudget = prefill.dailyBudgetINR.midRange * 4;
      } else if (prefill.estimatedDailyBudget?.midRange) {
        defaultBudget = prefill.estimatedDailyBudget.midRange * 4;
      } else if (prefill.budget) {
        defaultBudget = prefill.budget;
      }
    }

    const defaultTitle = prefill ? `${prefill.name} Expedition` : '';

    this.activeTab = 'overview';
    return `
      <div>
        <div class="flex items-center justify-between mb-6 pb-4 border-b wf-border">
          <div>
            <h2 class="font-serif wf-text-primary text-2xl">Plan a New Expedition</h2>
            <p class="text-xs wf-text-muted mt-0.5">Select from 185 destinations across Odisha, India, and the World</p>
          </div>
          <button onclick="ANTARA.closeTripModal()" class="wf-btn wf-btn-ghost wf-btn-icon">✕</button>
        </div>

        <form id="new-trip-form" class="space-y-4" onsubmit="WFTripsView._saveNewTrip(event)">
          <div>
            <label class="wf-label-text">Trip Name</label>
            <input
              name="title"
              type="text"
              class="wf-input"
              value="${defaultTitle}"
              placeholder="e.g. Konark Coastal Escape / Kyoto Cultural Journey"
              required
            />
          </div>

          <div>
            <label class="wf-label-text">Destination (185 Places Available)</label>
            <select name="destination" class="wf-select" required>
              <option value="">Select an adventure destination...</option>
              
              <optgroup label="🏛️ Odisha Destinations (${odishaDests.length})">
                ${odishaDests.map(d => `<option value="${d.id}" ${prefill?.id === d.id ? 'selected' : ''}>${d.name}, ${d.district}</option>`).join('')}
              </optgroup>

              <optgroup label="🇮🇳 Pan-India Flagships (${indiaDests.length})">
                ${indiaDests.map(d => `<option value="${d.id}" ${prefill?.id === d.id ? 'selected' : ''}>${d.name} (${d.state})</option>`).join('')}
              </optgroup>

              <optgroup label="🌐 Global Wonders (${globalDests.length})">
                ${globalDests.map(d => `<option value="${d.id}" ${prefill?.id === d.id ? 'selected' : ''}>${d.name} (${d.country})</option>`).join('')}
              </optgroup>

              <option value="other">Other / Custom Location</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="wf-label-text">Start Date</label>
              <input name="startDate" type="date" value="${startD}" class="wf-input" />
            </div>
            <div>
              <label class="wf-label-text">End Date</label>
              <input name="endDate" type="date" value="${endD}" class="wf-input" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="wf-label-text">Estimated Budget (₹)</label>
              <input name="budget" type="number" class="wf-input" value="${defaultBudget}" min="0" />
            </div>
            <div>
              <label class="wf-label-text">Trip Type</label>
              <select name="type" class="wf-select">
                <option ${prefill?.category === 'Leisure' ? 'selected' : ''}>Leisure</option>
                <option ${prefill?.category === 'Adventure' ? 'selected' : ''}>Adventure</option>
                <option ${prefill?.category === 'Heritage' ? 'selected' : ''}>Heritage</option>
                <option ${prefill?.category === 'Wildlife' ? 'selected' : ''}>Wildlife</option>
                <option ${prefill?.category === 'Beach' ? 'selected' : ''}>Beach</option>
                <option ${prefill?.category === 'Culture' ? 'selected' : ''}>Cultural</option>
                <option ${prefill?.category === 'Spiritual' ? 'selected' : ''}>Spiritual</option>
              </select>
            </div>
          </div>

          <div>
            <label class="wf-label-text">Notes &amp; Reminders</label>
            <textarea name="notes" class="wf-textarea" placeholder="Travel companions, things to pack, special bookings...">${prefill ? `Expedition to ${prefill.name}. Best season: ${prefill.best_season || prefill.bestSeason || 'Year-round'}.` : ''}</textarea>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="wf-btn wf-btn-primary flex-1">Create Expedition</button>
            <button type="button" onclick="ANTARA.closeTripModal()" class="wf-btn wf-btn-ghost">Cancel</button>
          </div>
        </form>
      </div>`;
  },

  _saveNewTrip(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));

    const allDests = [
      ...(window.ODISHA_DATA?.destinations || []),
      ...(window.INDIA_TRAVEL_DATA?.destinations || []),
      ...(window.GLOBAL_TRAVEL_DATA?.destinations || [])
    ];

    const dest = allDests.find(d => d.id === data.destination) || window.wayfarerStore?.getDestination(data.destination);

    const newTrip = {
      title: data.title || (dest ? `${dest.name} Expedition` : 'New Trip'),
      destinationId: data.destination || null,
      destinationName: dest?.name || data.destination || '',
      startDate: data.startDate || '',
      endDate: data.endDate || '',
      status: 'Planned',
      type: data.type || dest?.category || 'Leisure',
      coverImage: dest?.image || 'NATURE/119632.jpg',
      companions: [],
      itinerary: (dest?.things_to_do || dest?.highlights || []).slice(0, 3).map((act, i) => ({
        day: `Day ${i + 1}`,
        time: '09:00 AM',
        title: act,
        location: dest?.name || '',
        note: 'Curated milestone from destination highlights',
        status: 'Pending'
      })),
      budget: {
        estimated: Number(data.budget) || 15000,
        actual: 0,
        items: []
      },
      readiness: { packingPct: 0 },
      notes: data.notes || ''
    };

    window.wayfarerStore?.addTrip?.(newTrip);
    WFNotify?.show(`Expedition "${newTrip.title}" created with 3 milestones! ✈️`, 'success');
    ANTARA.closeTripModal();

    // Re-render trips view
    if (ANTARA.currentView === 'trips') {
      this.render(document.getElementById('view-trips'));
    }
  },

  _bindModal() {}
};

// Aliases
window.WF = window.ANTARA;
