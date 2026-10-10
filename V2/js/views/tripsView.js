/* ==========================================================================
   WAYFARER V2 — Active Expeditions & Itinerary Workspace
   ========================================================================== */

window.WayfarerTripsView = {
  render() {
    const container = document.getElementById("view-trips");
    if (!container) return;

    const trips = window.wayfarerStore.getTrips();
    const activeTrip = trips[0];

    if (!activeTrip) {
      container.innerHTML = `
        <div class="py-20 text-center editorial-card">
          <h2 class="font-serif text-3xl font-bold text-[#1C1917] dark:text-white">No Active Expedition Plan</h2>
          <p class="text-sm text-stone-400 mt-2">Convert a destination from your Bucket List to begin trip planning.</p>
          <button onclick="window.wayfarerApp.switchTab('bucketlist')" class="mt-6 btn-editorial-pill">Go to Bucket List</button>
        </div>
      `;
      return;
    }

    const readiness = activeTrip.readiness || { packingPct: 75, itineraryPct: 90 };
    const budget = activeTrip.budget || { estimated: 35000, actual: 0, items: [] };

    container.innerHTML = `
      <div class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-1 block">EXPEDITION WORKSPACE</span>
          <h1 class="font-serif text-4xl md:text-6xl font-bold text-[#1C1917] dark:text-white">${activeTrip.title}</h1>
          <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-1">Dates: <strong>${activeTrip.startDate}</strong> to <strong>${activeTrip.endDate}</strong> · Status: <span class="text-[#1B3B2B] dark:text-[#02C39A] font-semibold">${activeTrip.status}</span></p>
        </div>

        <button onclick="window.WayfarerTripsView.completeCurrentTrip('${activeTrip.id}')" class="btn-editorial-pill text-xs">
          <span>✓ Mark Expedition Completed</span>
        </button>
      </div>

      <!-- TRIP HERO IMAGE & READINESS GAUGE -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div class="lg:col-span-8 h-80 md:h-[420px] rounded-[32px] overflow-hidden relative shadow-2xl">
          <img src="${activeTrip.coverImage}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
            <div>
              <span class="text-xs uppercase tracking-wider text-[#E5C158] font-bold block mb-1">Destination Base</span>
              <h2 class="font-serif text-3xl md:text-4xl font-bold">${activeTrip.destinationName}</h2>
            </div>
            <div class="text-right">
              <span class="text-xs text-white/80 block">Companions</span>
              <span class="text-sm font-semibold">${activeTrip.companions ? activeTrip.companions.join(", ") : 'Solo'}</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 flex flex-col justify-between space-y-4">
          <!-- READINESS CARD -->
          <div class="editorial-card p-6 border border-[#1B3B2B]/20">
            <h3 class="font-serif text-2xl font-bold text-[#1C1917] dark:text-white mb-4">Expedition Readiness</h3>

            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span>Packing Checklist</span>
                  <span class="text-[#1B3B2B] dark:text-[#02C39A]">${readiness.packingPct}%</span>
                </div>
                <div class="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                  <div class="h-full bg-[#1B3B2B] dark:bg-[#02C39A] transition-all" style="width: ${readiness.packingPct}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span>Itinerary Finalization</span>
                  <span class="text-[#1B3B2B] dark:text-[#02C39A]">${readiness.itineraryPct}%</span>
                </div>
                <div class="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                  <div class="h-full bg-[#1B3B2B] dark:bg-[#02C39A] transition-all" style="width: ${readiness.itineraryPct}%"></div>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-black/5 dark:border-white/10 text-xs space-y-2 text-[#57534E] dark:text-[#A3C9AB]">
              <p>📄 Documents Verified: <strong>${readiness.documents ? 'YES' : 'NO'}</strong></p>
              <p>✈️ Transport Booked: <strong>${readiness.transport ? 'YES' : 'NO'}</strong></p>
              <p>🏨 Stays Confirmed: <strong>${readiness.hotel ? 'YES' : 'PENDING'}</strong></p>
            </div>
          </div>

          <!-- BUDGET SUMMARY CARD -->
          <div class="editorial-card p-6 border border-black/5 dark:border-white/10">
            <span class="text-[10px] uppercase text-stone-400 font-bold block mb-1">Estimated Budget</span>
            <div class="text-3xl font-serif font-bold text-[#1B3B2B] dark:text-[#02C39A]">
              ₹${(budget.estimated || 35000).toLocaleString()}
            </div>
            <p class="text-xs text-stone-400 mt-1">Itemized across stay, transport & permits.</p>
          </div>
        </div>
      </div>

      <!-- DAY BY DAY ITINERARY TIMELINE -->
      <section class="mb-12">
        <h3 class="font-serif text-3xl font-bold text-[#1C1917] dark:text-white mb-6">Chapter Itinerary Timeline</h3>

        <div class="space-y-4">
          ${(activeTrip.itinerary || []).map(item => `
            <div class="editorial-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-2xl bg-[#1B3B2B]/10 dark:bg-[#02C39A]/20 text-[#1B3B2B] dark:text-[#02C39A] font-serif font-bold text-lg flex items-center justify-center border border-[#1B3B2B]/20">
                  D${item.day}
                </div>
                <div>
                  <span class="text-[10px] uppercase font-bold text-stone-400">${item.time || '08:00 AM'} · 📍 ${item.location}</span>
                  <h4 class="font-serif font-bold text-xl text-[#1C1917] dark:text-white mt-0.5">${item.title}</h4>
                  <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-1 font-light">${item.note}</p>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  },

  completeCurrentTrip(tripId) {
    if (confirm("Mark this expedition as completed and add stamp to your Passport?")) {
      window.wayfarerStore.completeTrip(tripId);
      if (window.WayfarerNotify) window.WayfarerNotify.show("Expedition completed! Passport stamp updated.", "success");
      window.wayfarerApp.switchTab("passport");
    }
  }
};
