/* ==========================================================================
   WAYFARER V2 — Global Travel Intelligence & Discovery Magazine Explorer
   ========================================================================== */

window.WayfarerExploreView = {
  currentCategory: "All",
  currentRegion: "All",
  searchQuery: "",

  render() {
    const container = document.getElementById("view-explore");
    if (!container) return;

    const assets = window.NATURE_ASSETS || [];
    const globalData = window.GLOBAL_TRAVEL_DATA || { countries: [] };

    const categories = ["All", "Mountains", "Lakes", "Forests", "Waterfalls", "Beaches", "Road Trips", "National Parks", "Deserts"];

    const filtered = assets.filter(a => {
      const matchCat = this.currentCategory === "All" || a.category.toLowerCase() === this.currentCategory.toLowerCase();
      const matchSearch = !this.searchQuery ||
        a.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        a.suggestedPlace.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        a.tags.some(t => t.toLowerCase().includes(this.searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });

    container.innerHTML = `
      <div class="mb-10">
        <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-2 block">GLOBAL TRAVEL INTELLIGENCE</span>
        <h1 class="font-serif text-4xl md:text-6xl font-bold text-[#1C1917] dark:text-white">Where will you disappear to next?</h1>
        <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-2 max-w-xl">Curated nature landscapes, 28 States & 8 UTs of India, UNESCO World Heritage properties, and global destinations.</p>
      </div>

      <div class="editorial-card p-4 md:p-6 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div class="relative w-full md:w-96">
          <input
            id="explore-search-input"
            type="text"
            placeholder="Search mountains, lakes, waterfalls, states..."
            value="${this.searchQuery}"
            class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none focus:border-[#1B3B2B] dark:focus:border-[#02C39A] pl-10"
          />
          <svg class="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>

        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
          ${categories.map(cat => `
            <button
              onclick="window.WayfarerExploreView.setCategory('${cat}')"
              class="px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                this.currentCategory === cat
                  ? 'bg-[#1B3B2B] dark:bg-[#02C39A] text-white dark:text-black shadow-md'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-[#57534E] dark:text-[#A3C9AB]'
              }"
            >
              ${cat}
            </button>
          `).join("")}
        </div>
      </div>

      <!-- GLOBAL VISA & COUNTRY INTELLIGENCE CAROUSEL -->
      <section class="mb-14">
        <div class="flex items-center justify-between mb-6">
          <h2 class="font-serif text-3xl font-bold text-[#1C1917] dark:text-white">Flagship International Horizons & Visa Rules</h2>
          <span class="text-xs text-stone-400">Official Immigration Data</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${globalData.countries.map(c => `
            <div class="editorial-card p-6 border border-[#1B3B2B]/20 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs uppercase font-bold text-[#1B3B2B] dark:text-[#02C39A] bg-[#1B3B2B]/10 dark:bg-[#02C39A]/20 px-2.5 py-1 rounded-md">
                    ${c.code} · ${c.region}
                  </span>
                  <span class="text-xs text-amber-600 font-semibold">${c.currency}</span>
                </div>
                <h3 class="font-serif font-bold text-2xl text-[#1C1917] dark:text-white">${c.name}</h3>
                <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-1">Capital: <strong>${c.capital}</strong> · Time: <strong>${c.timeZone}</strong></p>

                <div class="mt-4 p-3 rounded-xl bg-black/5 dark:bg-white/5 text-xs text-[#57534E] dark:text-[#A3C9AB] space-y-1">
                  <div class="flex items-center justify-between font-bold text-[#1C1917] dark:text-white">
                    <span>Visa Status:</span>
                    <span class="text-[#1B3B2B] dark:text-[#02C39A]">${c.visaInfo.type}</span>
                  </div>
                  <p class="text-[11px]">${c.visaInfo.indianPassport}</p>
                </div>
              </div>

              <div class="mt-4 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-stone-400">
                <span>Verified: ${c.visaInfo.lastChecked}</span>
                <a href="${c.visaInfo.officialPortal}" target="_blank" class="text-[#1B3B2B] dark:text-[#02C39A] font-semibold hover:underline">Official Portal ↗</a>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- EXPLORE ASSET GALLERY GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${filtered.length === 0 ? `
          <div class="col-span-full py-16 text-center editorial-card">
            <p class="text-lg text-[#57534E] font-serif">No scenery matching your filter.</p>
            <p class="text-xs text-stone-400 mt-1">Try resetting search query or switching categories.</p>
          </div>
        ` : filtered.map(item => `
          <div class="editorial-card-interactive overflow-hidden group flex flex-col justify-between">
            <div class="relative h-72 overflow-hidden rounded-t-[24px]">
              <img src="${item.path}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
              <span class="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium border border-white/20">
                ${item.category}
              </span>
            </div>

            <div class="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 class="font-serif font-bold text-2xl text-[#1C1917] dark:text-white group-hover:text-[#1B3B2B] dark:group-hover:text-[#02C39A] transition-colors">${item.title}</h3>
                <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-1.5 flex items-center gap-1.5 font-medium">
                  <span>📍</span> ${item.suggestedPlace}
                </p>
              </div>

              <div class="flex flex-wrap gap-1.5 my-5">
                ${item.tags.map(t => `<span class="text-[10px] bg-black/5 dark:bg-white/5 text-[#1B3B2B] dark:text-[#02C39A] px-2.5 py-1 rounded-md font-medium">#${t}</span>`).join("")}
              </div>

              <button
                onclick="window.WayfarerExploreView.addToBucketList('${item.suggestedPlace}', '${item.category}', '${item.path}')"
                class="w-full py-3 rounded-xl bg-[#1B3B2B] dark:bg-[#02C39A] hover:bg-[#122A1E] dark:hover:bg-[#00A896] text-white dark:text-black text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>+ Add to Bucket List</span>
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    const searchInput = document.getElementById("explore-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        this.render();
      });
    }
  },

  setCategory(cat) {
    this.currentCategory = cat;
    this.render();
  },

  addToBucketList(placeName, category, imagePath) {
    const newDest = window.wayfarerStore.addDestination({
      name: placeName,
      country: "India",
      region: placeName.includes(",") ? placeName.split(",")[1].trim() : "Wilderness",
      category: category,
      image: imagePath,
      description: `Discovered from Explore magazine. A breathtaking ${category.toLowerCase()} destination.`,
      whyVisit: `To experience untouched nature in ${placeName}.`,
      budget: 30000,
      duration: 6,
      season: "Autumn / Spring",
      priority: "High",
      status: "Dreaming"
    });

    if (window.WayfarerNotify) {
      window.WayfarerNotify.show(`Added ${placeName} to your Bucket List!`, "success");
    }
  }
};
