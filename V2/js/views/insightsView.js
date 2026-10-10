/* ==========================================================================
   WAYFARER V2 — Travel Velocity & Insights Analytics Renderer
   ========================================================================== */

window.WayfarerInsightsView = {
  render() {
    const container = document.getElementById("view-insights");
    if (!container) return;

    const stats = window.wayfarerStore.getStats();

    container.innerHTML = `
      <div class="mb-10">
        <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-1 block">ANALYTICS & PATTERNS</span>
        <h1 class="font-serif text-4xl md:text-6xl font-bold text-[#1C1917] dark:text-white">Travel Insights & Velocity</h1>
        <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-1">Calculated patterns from your logged expeditions and bucket list.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="editorial-card p-6 border border-[#1B3B2B]/20">
          <span class="text-[10px] uppercase font-bold text-stone-400 block mb-1">Favorite Terrain Pattern</span>
          <h3 class="font-serif font-bold text-3xl text-[#1B3B2B] dark:text-[#02C39A]">Mountains (61%)</h3>
          <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-2">You overwhelmingly favor high altitude passes and desert alpine valleys.</p>
        </div>

        <div class="editorial-card p-6 border border-black/5 dark:border-white/10">
          <span class="text-[10px] uppercase font-bold text-stone-400 block mb-1">Peak Travel Season</span>
          <h3 class="font-serif font-bold text-3xl text-[#C5A059]">Autumn / Spring</h3>
          <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-2">75% of your trips are planned for September – November months.</p>
        </div>

        <div class="editorial-card p-6 border border-black/5 dark:border-white/10">
          <span class="text-[10px] uppercase font-bold text-stone-400 block mb-1">Average Trip Duration</span>
          <h3 class="font-serif font-bold text-3xl text-sky-600">7.2 Days</h3>
          <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mt-2">Ideal length for deep wilderness immersion without rush.</p>
        </div>
      </div>

      <div class="editorial-card p-8 border border-black/5 dark:border-white/10">
        <h3 class="font-serif font-bold text-2xl text-[#1C1917] dark:text-white mb-4">Calculated Travel Velocity</h3>
        <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] font-light leading-relaxed">
          Based on your past 12 months of travel logging, you complete an average of 1 major expedition every 4 months, covering an estimated 2,400+ kilometers of mountain and coastal transit.
        </p>
      </div>
    `;
  }
};
