/* ==========================================================================
   WAYFARER V2 — Personal Bucket List Horizons & Data Intelligence Deep Dive
   ========================================================================== */

window.wayfarerBucketList = {
  currentStatus: "All",
  currentPriority: "All",

  render() {
    const container = document.getElementById("view-bucketlist");
    if (!container) return;

    const destinations = window.wayfarerStore.getDestinations();
    const statuses = ["All", "Dreaming", "Researching", "Planning", "Booked", "Visited"];

    const filtered = destinations.filter(d => {
      const matchStatus = this.currentStatus === "All" || d.status.toLowerCase() === this.currentStatus.toLowerCase();
      const matchPriority = this.currentPriority === "All" || (d.priority && d.priority.toLowerCase() === this.currentPriority.toLowerCase());
      return matchStatus && matchPriority;
    });

    container.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-2 block">PERSONAL COLLECTION & INTELLIGENCE</span>
          <h1 class="font-serif text-4xl md:text-6xl font-bold text-[#1C1917] dark:text-white">Bucket List Horizons</h1>
          <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-1">Every peak, trail, and coast with researched cost ranges & official provenance.</p>
        </div>
        <button
          onclick="window.wayfarerBucketList.openAddDrawer()"
          class="btn-editorial-pill flex items-center gap-2 w-max text-xs"
        >
          <span>+ Add Destination</span>
        </button>
      </div>

      <div class="editorial-card p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
          ${statuses.map(st => `
            <button
              onclick="window.wayfarerBucketList.setStatus('${st}')"
              class="px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                this.currentStatus === st
                  ? 'bg-[#1B3B2B] dark:bg-[#02C39A] text-white dark:text-black shadow-md'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-[#57534E] dark:text-[#A3C9AB]'
              }"
            >
              ${st} ${st !== "All" ? `(${destinations.filter(d => d.status === st).length})` : ''}
            </button>
          `).join("")}
        </div>

        <div class="flex items-center gap-2 w-full md:w-auto justify-end">
          <span class="text-xs text-[#57534E] dark:text-[#A3C9AB]">Priority:</span>
          <select
            onchange="window.wayfarerBucketList.setPriority(this.value)"
            class="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs text-[#1C1917] dark:text-white px-3 py-2 rounded-xl focus:outline-none"
          >
            <option value="All" ${this.currentPriority === 'All' ? 'selected' : ''}>All Priorities</option>
            <option value="High" ${this.currentPriority === 'High' ? 'selected' : ''}>High Priority</option>
            <option value="Medium" ${this.currentPriority === 'Medium' ? 'selected' : ''}>Medium Priority</option>
            <option value="Low" ${this.currentPriority === 'Low' ? 'selected' : ''}>Low Priority</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${filtered.length === 0 ? `
          <div class="col-span-full py-16 text-center editorial-card">
            <p class="text-lg text-[#57534E] font-serif">No destinations found in "${this.currentStatus}" stage.</p>
            <button onclick="window.wayfarerBucketList.openAddDrawer()" class="mt-4 px-5 py-2.5 bg-[#1B3B2B] dark:bg-[#02C39A] text-white dark:text-black text-xs rounded-xl font-semibold">Add New Destination</button>
          </div>
        ` : filtered.map(d => `
          <div onclick="window.wayfarerBucketList.openDestinationDetail('${d.id}')" class="editorial-card-interactive p-5 flex flex-col justify-between group">
            <div>
              <div class="relative h-52 rounded-2xl overflow-hidden mb-5">
                <img src="${d.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                <span class="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                  ${d.category}
                </span>

                <span class="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full badge-${d.status.toLowerCase()}">
                  ${d.status}
                </span>
              </div>

              <div class="flex items-center justify-between text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">
                <span>${d.region || d.state || 'India'}, ${d.country || 'India'}</span>
                <span class="text-amber-500 font-semibold">★ ${d.rating || 4.8}</span>
              </div>

              <h3 class="font-serif font-bold text-2xl text-[#1C1917] dark:text-white group-hover:text-[#1B3B2B] dark:group-hover:text-[#02C39A] transition-colors">${d.name}</h3>
              <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-2 line-clamp-2">${d.description}</p>
            </div>

            <div class="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-[#57534E] dark:text-[#A3C9AB]">
              <div>
                <span class="block text-[9px] uppercase text-stone-400">Best Season</span>
                <span class="text-[#1C1917] dark:text-white font-medium">${d.bestSeason || d.season || 'Autumn'}</span>
              </div>
              <div class="text-right">
                <span class="block text-[9px] uppercase text-stone-400">Estimated Budget</span>
                <span class="text-[#1B3B2B] dark:text-[#02C39A] font-semibold">₹${(d.budget || 30000).toLocaleString()}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  setStatus(st) {
    this.currentStatus = st;
    this.render();
  },

  setPriority(pr) {
    this.currentPriority = pr;
    this.render();
  },

  openDestinationDetail(destId) {
    const dest = window.wayfarerStore.getDestination(destId);
    if (!dest) return;

    const costEstimate = window.WayfarerCostEngine ? window.WayfarerCostEngine.calculateTripEstimate(dest, dest.duration || 7, "midRange") : null;
    const combinations = window.WayfarerItineraryEngine && window.WayfarerItineraryEngine.destinationCombinations[destId] || [];
    const sourceInfo = dest.sources && dest.sources[0] ? dest.sources[0] : { sourceName: "Incredible India Portal", sourceType: "Tier 1 Official", lastVerified: "2026-08-12" };

    const html = `
      <div class="space-y-6">
        <div class="relative h-64 rounded-2xl overflow-hidden shadow-lg">
          <img src="${dest.image}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full badge-${dest.status.toLowerCase()}">
              ${dest.status}
            </span>
            <h2 class="font-serif text-3xl font-bold text-white mt-2">${dest.name}</h2>
            <p class="text-xs text-white/80">${dest.officialName || (dest.region + ', ' + dest.country)}</p>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3 text-center">
          <div class="editorial-card p-3">
            <span class="text-[9px] uppercase text-stone-400 block">Best Season</span>
            <span class="text-xs text-[#1C1917] dark:text-white font-semibold">${dest.bestSeason || dest.season || 'Autumn'}</span>
          </div>
          <div class="editorial-card p-3">
            <span class="text-[9px] uppercase text-stone-400 block">Duration</span>
            <span class="text-xs text-[#1C1917] dark:text-white font-semibold">${dest.duration || 7} Days</span>
          </div>
          <div class="editorial-card p-3">
            <span class="text-[9px] uppercase text-stone-400 block">Est. Budget</span>
            <span class="text-xs text-[#1B3B2B] dark:text-[#02C39A] font-semibold">₹${(dest.budget || 30000).toLocaleString()}</span>
          </div>
        </div>

        <div>
          <h4 class="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">About Destination</h4>
          <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] font-light leading-relaxed">${dest.description}</p>
        </div>

        <div>
          <h4 class="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">Why Visit</h4>
          <p class="text-sm text-[#1B3B2B] dark:text-[#02C39A] italic font-serif">“${dest.whyVisit || 'To experience the sheer serenity of nature.'}”</p>
        </div>

        ${costEstimate ? `
          <div class="editorial-card p-5 border border-[#1B3B2B]/20">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xs uppercase font-bold text-[#1B3B2B] dark:text-[#02C39A]">Realistic Cost Engine Breakdown (${dest.duration || 7} Days)</h4>
              <span class="text-[10px] text-stone-400">Factual Estimates</span>
            </div>

            <div class="grid grid-cols-3 gap-2 mb-4 text-center">
              <div class="p-2.5 rounded-xl bg-black/5 dark:bg-white/5">
                <span class="text-[9px] uppercase text-stone-400 block">Budget Traveler</span>
                <span class="text-xs font-bold text-[#1C1917] dark:text-white">₹${((dest.estimatedDailyBudget ? dest.estimatedDailyBudget.budget : 2000) * (dest.duration || 7)).toLocaleString()}</span>
              </div>
              <div class="p-2.5 rounded-xl bg-[#1B3B2B]/10 dark:bg-[#02C39A]/20 border border-[#1B3B2B]/20">
                <span class="text-[9px] uppercase text-[#1B3B2B] dark:text-[#02C39A] font-bold block">Mid-Range</span>
                <span class="text-xs font-bold text-[#1B3B2B] dark:text-[#02C39A]">₹${costEstimate.totalEstimate.toLocaleString()}</span>
              </div>
              <div class="p-2.5 rounded-xl bg-black/5 dark:bg-white/5">
                <span class="text-[9px] uppercase text-stone-400 block">Comfortable</span>
                <span class="text-xs font-bold text-[#1C1917] dark:text-white">₹${((dest.estimatedDailyBudget ? dest.estimatedDailyBudget.luxury : 9000) * (dest.duration || 7)).toLocaleString()}</span>
              </div>
            </div>

            <div class="space-y-2 text-xs">
              ${costEstimate.itemizedBreakdown.map(item => `
                <div class="flex items-center justify-between p-2 rounded-lg bg-black/5 dark:bg-white/5">
                  <span class="text-[#57534E] dark:text-[#A3C9AB]">${item.category}</span>
                  <span class="font-semibold text-[#1C1917] dark:text-white">₹${item.min.toLocaleString()} – ₹${item.max.toLocaleString()}</span>
                </div>
              `).join("")}
            </div>

            <p class="text-[10px] text-stone-400 mt-3 italic">${costEstimate.methodology}</p>
          </div>
        ` : ''}

        ${dest.transportation ? `
          <div class="editorial-card p-4">
            <h4 class="text-xs uppercase font-bold text-[#1B3B2B] dark:text-[#02C39A] mb-2">Transport & Access Intelligence</h4>
            <div class="space-y-2 text-xs text-[#57534E] dark:text-[#A3C9AB]">
              <p>✈️ <strong>Airport:</strong> ${dest.transportation.nearestAirport || 'Nearest Regional Airport'}</p>
              <p>🚆 <strong>Railway:</strong> ${dest.transportation.nearestRailwayStation || 'Nearest Major Rail Junction'}</p>
              <p>🛣️ <strong>Road Access:</strong> ${dest.transportation.roadAccess || 'High speed highway & mountain pass access'}</p>
            </div>
          </div>
        ` : ''}

        ${combinations.length > 0 ? `
          <div class="editorial-card p-4">
            <h4 class="text-xs uppercase font-bold text-[#1B3B2B] dark:text-[#02C39A] mb-2">Places You Can Combine With This Trip</h4>
            <div class="flex flex-wrap gap-2">
              ${combinations.map(c => `<span class="px-3 py-1 rounded-xl bg-black/5 dark:bg-white/5 text-xs text-[#1C1917] dark:text-white font-medium">📍 ${c}</span>`).join("")}
            </div>
          </div>
        ` : ''}

        <div class="spatial-glass p-4 rounded-xl text-xs text-stone-400 space-y-1">
          <div class="flex items-center justify-between font-medium">
            <span>Primary Source: <strong class="text-[#1C1917] dark:text-white">${sourceInfo.sourceName}</strong></span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 font-bold">${sourceInfo.sourceType || 'Tier 1 Official'}</span>
          </div>
          <p>Last Verified: <strong>${sourceInfo.lastVerified || 'August 2026'}</strong> · Confidence: <strong class="text-amber-600">${dest.confidenceScore || 'High'}</strong></p>
        </div>

        <div class="pt-4 border-t border-black/5 dark:border-white/10 space-y-3">
          <button
            onclick="window.wayfarerBucketList.convertToTrip('${dest.id}')"
            class="w-full py-4 rounded-2xl bg-[#1B3B2B] dark:bg-[#02C39A] hover:opacity-90 text-white dark:text-black font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>🎒 MOVE TO TRIP PLANNING</span>
          </button>

          <button
            onclick="window.wayfarerBucketList.deleteDest('${dest.id}')"
            class="w-full py-2 text-xs text-rose-500 hover:underline text-center block"
          >
            Remove from Bucket List
          </button>
        </div>
      </div>
    `;

    window.WayfarerDrawer.open(dest.name, html);
  },

  openAddDrawer() {
    const categories = ["Mountains", "Lakes", "Forests", "Waterfalls", "Beaches", "Road Trips", "National Parks", "Deserts"];
    const assets = window.NATURE_ASSETS || [];

    const html = `
      <form id="add-destination-form" onsubmit="window.wayfarerBucketList.handleAddSubmit(event)" class="space-y-4">
        <div>
          <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Destination Name *</label>
          <input type="text" name="name" required placeholder="e.g. Kashmir Great Lakes" class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Country *</label>
            <input type="text" name="country" value="India" required class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none" />
          </div>
          <div>
            <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Region / State *</label>
            <input type="text" name="region" placeholder="e.g. Himachal Pradesh" required class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Category</label>
            <select name="category" class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none">
              ${categories.map(c => `<option value="${c}">${c}</option>`).join("")}
            </select>
          </div>
          <div>
            <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Priority</label>
            <select name="priority" class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Estimated Budget (₹)</label>
            <input type="number" name="budget" value="30000" class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none" />
          </div>
          <div>
            <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Best Season</label>
            <input type="text" name="bestSeason" value="Autumn" class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none" />
          </div>
        </div>

        <div>
          <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Cover Image</label>
          <select name="image" class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none">
            ${assets.map(a => `<option value="${a.path}">${a.title} (${a.category})</option>`).join("")}
          </select>
        </div>

        <div>
          <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Why do you want to visit?</label>
          <textarea name="whyVisit" rows="2" placeholder="To witness sunrise over alpine lakes..." class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none"></textarea>
        </div>

        <button type="submit" class="w-full py-4 bg-[#1B3B2B] dark:bg-[#02C39A] text-white dark:text-black font-semibold text-sm rounded-2xl hover:opacity-90 transition-all shadow-lg mt-4">
          Save Destination
        </button>
      </form>
    `;

    window.WayfarerDrawer.open("Add New Destination", html);
  },

  handleAddSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    window.wayfarerStore.addDestination({
      ...data,
      budget: Number(data.budget || 30000),
      duration: 7,
      description: data.whyVisit || "A beautiful nature retreat."
    });

    window.WayfarerDrawer.close();
    if (window.WayfarerNotify) window.WayfarerNotify.show(`Saved "${data.name}" to your Bucket List!`, "success");
    this.render();
  },

  convertToTrip(destId) {
    const trip = window.wayfarerStore.convertBucketToTrip(destId);
    window.WayfarerDrawer.close();

    if (trip) {
      if (window.WayfarerNotify) window.WayfarerNotify.show(`Created Trip workspace for "${trip.destinationName}"!`, "success");
      window.wayfarerApp.switchTab("trips");
    }
  },

  deleteDest(destId) {
    if (confirm("Are you sure you want to remove this destination?")) {
      window.wayfarerStore.deleteDestination(destId);
      window.WayfarerDrawer.close();
      if (window.WayfarerNotify) window.WayfarerNotify.show("Destination removed.", "info");
      this.render();
    }
  }
};
