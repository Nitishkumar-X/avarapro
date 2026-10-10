/* ==========================================================================
   WAYFARER V2 — Smart Packing & Equipment Assistant
   ========================================================================== */

window.WayfarerChecklistView = {
  render() {
    const container = document.getElementById("view-checklist");
    if (!container) return;

    const upcoming = window.wayfarerStore.getUpcomingTrip();
    if (!upcoming) {
      container.innerHTML = `
        <div class="py-20 text-center editorial-card">
          <h2 class="font-serif text-3xl font-bold text-[#1C1917] dark:text-white">No Active Expedition Checklist</h2>
          <p class="text-sm text-stone-400 mt-2">Start a trip planning session to generate smart packing lists.</p>
        </div>
      `;
      return;
    }

    const items = window.wayfarerStore.getChecklist(upcoming.id);
    const checkedCount = items.filter(i => i.checked).length;
    const totalCount = items.length;
    const progressPct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

    const categories = [...new Set(items.map(i => i.category))];

    container.innerHTML = `
      <div class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-1 block">PACKING & GEAR INTELLIGENCE</span>
          <h1 class="font-serif text-4xl md:text-6xl font-bold text-[#1C1917] dark:text-white">Expedition Gear Checklist</h1>
          <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-1">Smart equipment assistant for <strong>${upcoming.title}</strong>.</p>
        </div>

        <button onclick="window.WayfarerChecklistView.openAddItemModal('${upcoming.id}')" class="btn-editorial-pill text-xs">
          <span>+ Add Custom Item</span>
        </button>
      </div>

      <!-- PROGRESS BAR CARD -->
      <div class="editorial-card p-6 md:p-8 mb-10 border border-[#1B3B2B]/20">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs uppercase font-bold text-[#1B3B2B] dark:text-[#02C39A]">Readiness Progress</span>
          <span class="font-serif text-2xl font-bold text-[#1C1917] dark:text-white">${checkedCount} / ${totalCount} Items Packed (${progressPct}%)</span>
        </div>
        <div class="w-full h-3 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
          <div class="h-full bg-[#1B3B2B] dark:bg-[#02C39A] transition-all duration-500" style="width: ${progressPct}%"></div>
        </div>
      </div>

      <!-- CHECKLIST CATEGORY GROUPS -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${categories.map(cat => `
          <div class="editorial-card p-6 border border-black/5 dark:border-white/10">
            <h3 class="font-serif font-bold text-xl text-[#1C1917] dark:text-white mb-4 pb-2 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
              <span>${cat}</span>
              <span class="text-xs font-sans text-stone-400 font-normal">
                ${items.filter(i => i.category === cat && i.checked).length}/${items.filter(i => i.category === cat).length}
              </span>
            </h3>

            <div class="space-y-3">
              ${items.filter(i => i.category === cat).map(item => `
                <label class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    ${item.checked ? 'checked' : ''}
                    onchange="window.WayfarerChecklistView.toggleItem('${upcoming.id}', '${item.id}')"
                    class="w-4 h-4 rounded text-[#1B3B2B] dark:text-[#02C39A] focus:ring-0"
                  />
                  <span class="text-xs text-[#1C1917] dark:text-white font-medium ${item.checked ? 'line-through opacity-50' : ''}">${item.text}</span>
                </label>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  toggleItem(tripId, itemId) {
    window.wayfarerStore.toggleChecklistItem(tripId, itemId);
    this.render();
  },

  openAddItemModal(tripId) {
    const text = prompt("Enter new item to add to your expedition checklist:");
    if (text && text.trim()) {
      window.wayfarerStore.addChecklistItem(tripId, text.trim());
      if (window.WayfarerNotify) window.WayfarerNotify.show(`Added "${text.trim()}" to checklist`, "success");
      this.render();
    }
  }
};
