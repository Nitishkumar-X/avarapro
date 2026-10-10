/* ==========================================================================
   WAYFARER V2 — Digital Passport, UNESCO Heritage & Geographic Footprint
   ========================================================================== */

window.WayfarerPassportView = {
  render() {
    const container = document.getElementById("view-passport");
    if (!container) return;

    const profile = window.wayfarerStore.getProfile();
    const stats = window.wayfarerStore.getStats();
    const passportData = window.wayfarerStore.state.passport;
    const stamps = passportData.stamps || [];
    const achievements = passportData.achievements || [];
    const unescoData = window.ACTIVITIES_DATA ? window.ACTIVITIES_DATA.unescoIndiaSites : [];

    container.innerHTML = `
      <div class="mb-10">
        <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-2 block">TRAVEL IDENTITY</span>
        <h1 class="font-serif text-4xl md:text-6xl font-bold text-[#1C1917] dark:text-white">Digital Travel Passport</h1>
        <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-1">Collectible stamps, 36 State & UT footprint, and UNESCO World Heritage directory.</p>
      </div>

      <div class="editorial-card p-6 md:p-10 rounded-[32px] mb-12 relative overflow-hidden border border-black/5 dark:border-white/10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 flex flex-col items-center text-center p-6 editorial-card border border-black/5 dark:border-white/10">
            <div class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#1B3B2B]/30 dark:border-[#02C39A]/30 p-1">
              <img src="${profile.avatar}" class="w-full h-full object-cover rounded-full" />
            </div>

            <h2 class="font-serif text-3xl font-bold text-[#1C1917] dark:text-white">${profile.name}</h2>
            <p class="text-xs text-[#1B3B2B] dark:text-[#02C39A] font-medium">${profile.handle} · ${profile.homeLocation}</p>

            <div class="grid grid-cols-2 gap-3 w-full mt-6 pt-6 border-t border-black/5 dark:border-white/10 text-center">
              <div>
                <span class="text-2xl font-serif font-bold text-amber-600">${stats.completedTrips}</span>
                <span class="text-[9px] uppercase text-stone-400 block">Trips Logged</span>
              </div>
              <div>
                <span class="text-2xl font-serif font-bold text-[#1B3B2B] dark:text-[#02C39A]">${stats.countriesVisited}</span>
                <span class="text-[9px] uppercase text-stone-400 block">Countries</span>
              </div>
              <div>
                <span class="text-2xl font-serif font-bold text-sky-600">${stats.placesVisited}</span>
                <span class="text-[9px] uppercase text-stone-400 block">Places Visited</span>
              </div>
              <div>
                <span class="text-2xl font-serif font-bold text-rose-500">${stats.totalTravelDays}</span>
                <span class="text-[9px] uppercase text-stone-400 block">Travel Days</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <h3 class="font-serif text-2xl font-bold text-[#1C1917] dark:text-white mb-4 flex items-center gap-2">
              <span>✈️ Passport Visas & Stamps</span>
              <span class="text-xs font-normal text-[#57534E]">(${stamps.length} Stamps Unlocked)</span>
            </h3>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              ${stamps.map(st => `
                <div class="passport-stamp p-4 cursor-pointer">
                  <span class="text-3xl mb-1">${st.icon}</span>
                  <h4 class="font-serif font-bold text-[#C5A059] text-sm tracking-wider uppercase">${st.title}</h4>
                  <p class="text-[10px] text-[#57534E] dark:text-[#A3C9AB]">${st.subtitle}</p>
                  <span class="text-[9px] text-[#C5A059] mt-1 font-mono tracking-widest">${st.code || 'IND-2025'}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>

      <section class="mb-14">
        <div class="flex items-center justify-between mb-6">
          <div>
            <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold block mb-1">AUTHENTICATED DIRECTORY</span>
            <h2 class="font-serif text-3xl font-bold text-[#1C1917] dark:text-white">India UNESCO World Heritage Sites (45 Sites)</h2>
          </div>
          <a href="https://whc.unesco.org/en/statesparties/in" target="_blank" class="text-xs text-[#1B3B2B] dark:text-[#02C39A] font-semibold hover:underline">UNESCO Portal ↗</a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${unescoData.slice(0, 12).map(u => `
            <div class="editorial-card p-4 flex items-center justify-between">
              <div>
                <span class="text-[9px] uppercase font-bold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded">${u.category} · ${u.year}</span>
                <h4 class="font-serif font-bold text-base text-[#1C1917] dark:text-white mt-1">${u.name}</h4>
                <p class="text-xs text-stone-400">📍 ${u.state}</p>
              </div>
              <a href="${u.officialUrl}" target="_blank" class="text-xs text-[#1B3B2B] dark:text-[#02C39A] font-bold">UNESCO ↗</a>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="mb-12">
        <h2 class="font-serif text-3xl text-[#1C1917] dark:text-white font-semibold mb-6">Travel Milestones & Badges</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${achievements.map(ach => `
            <div class="editorial-card p-5 flex items-start gap-4 ${ach.unlocked ? 'border-[#C5A059]/40' : 'opacity-60'}">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                ach.unlocked ? 'bg-amber-500/10 text-amber-600 border border-amber-500/30' : 'bg-black/5 text-stone-400'
              }">
                ${ach.icon}
              </div>

              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-serif font-bold text-lg text-[#1C1917] dark:text-white">${ach.title}</h4>
                  ${ach.unlocked ? '<span class="text-[9px] text-[#1B3B2B] dark:text-[#02C39A] font-semibold bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded">UNLOCKED</span>' : ''}
                </div>
                <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-1">${ach.desc}</p>
                <div class="mt-2 text-[10px] text-stone-400 font-mono">
                  ${ach.unlocked ? `Unlocked: ${ach.date || '2025'}` : (ach.progress || 'Locked')}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }
};
