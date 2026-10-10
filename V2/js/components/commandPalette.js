/* ==========================================================================
   WAYFARER V2 — Fuzzy Command Search & Navigation Modal (⌘K)
   ========================================================================== */

window.WayfarerCommandPalette = {
  isOpen: false,

  init() {
    const backdrop = document.getElementById("command-palette-backdrop");
    const input = document.getElementById("command-search-input");

    if (backdrop) backdrop.addEventListener("click", () => this.toggle(false));

    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        this.toggle();
      } else if (e.key === "Escape" && this.isOpen) {
        this.toggle(false);
      }
    });

    if (input) {
      input.addEventListener("input", (e) => this.handleSearch(e.target.value));
    }
  },

  toggle(forceState) {
    const modal = document.getElementById("command-palette-modal");
    const input = document.getElementById("command-search-input");

    this.isOpen = forceState !== undefined ? forceState : !this.isOpen;

    if (modal) {
      if (this.isOpen) {
        modal.classList.remove("hidden");
        if (input) {
          input.value = "";
          input.focus();
        }
        this.handleSearch("");
      } else {
        modal.classList.add("hidden");
      }
    }
  },

  handleSearch(query) {
    const resultsContainer = document.getElementById("command-search-results");
    if (!resultsContainer) return;

    const q = (query || "").toLowerCase().trim();
    const destinations = window.wayfarerStore.getDestinations();
    const trips = window.wayfarerStore.getTrips();
    const memories = window.wayfarerStore.getMemories();

    let items = [];

    // Filter Destinations
    destinations.forEach(d => {
      if (!q || d.name.toLowerCase().includes(q) || (d.region && d.region.toLowerCase().includes(q))) {
        items.push({
          type: "Destination",
          title: d.name,
          sub: `${d.region || d.state || 'India'}, ${d.country || 'India'} · ₹${(d.budget || 30000).toLocaleString()}`,
          image: d.image,
          action: () => {
            this.toggle(false);
            window.wayfarerApp.switchTab("bucketlist");
            if (window.wayfarerBucketList) window.wayfarerBucketList.openDestinationDetail(d.id);
          }
        });
      }
    });

    // Filter Trips
    trips.forEach(t => {
      if (!q || t.title.toLowerCase().includes(q) || t.destinationName.toLowerCase().includes(q)) {
        items.push({
          type: "Expedition Trip",
          title: t.title,
          sub: `Dates: ${t.startDate} to ${t.endDate} · Status: ${t.status}`,
          image: t.coverImage,
          action: () => {
            this.toggle(false);
            window.wayfarerApp.switchTab("trips");
          }
        });
      }
    });

    // Filter Memories
    memories.forEach(m => {
      if (!q || m.title.toLowerCase().includes(q) || m.location.toLowerCase().includes(q)) {
        items.push({
          type: "Field Journal",
          title: m.title,
          sub: `Logged: ${m.location} (${m.date})`,
          image: m.coverImage,
          action: () => {
            this.toggle(false);
            window.wayfarerApp.switchTab("journal");
          }
        });
      }
    });

    if (items.length === 0) {
      resultsContainer.innerHTML = `
        <div class="py-8 text-center text-xs text-stone-400 font-serif">
          No search results matching "${query}"
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = items.slice(0, 8).map((item, idx) => `
      <div
        onclick="window.WayfarerCommandPalette.executeAction(${idx})"
        class="flex items-center gap-3 p-3 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-[#1B3B2B]/10 dark:hover:bg-[#02C39A]/20 cursor-pointer transition-colors"
      >
        <img src="${item.image}" class="w-10 h-10 rounded-xl object-cover" />
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <h4 class="font-serif font-bold text-sm text-[#1C1917] dark:text-white">${item.title}</h4>
            <span class="text-[9px] uppercase font-bold text-[#1B3B2B] dark:text-[#02C39A] bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded">${item.type}</span>
          </div>
          <p class="text-xs text-stone-400 mt-0.5">${item.sub}</p>
        </div>
      </div>
    `).join("");

    window._commandPaletteActions = items.map(i => i.action);
  },

  executeAction(idx) {
    if (window._commandPaletteActions && window._commandPaletteActions[idx]) {
      window._commandPaletteActions[idx]();
    }
  }
};
