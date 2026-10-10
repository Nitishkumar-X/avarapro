/* ==========================================================================
   WAYFARER V2 — Field Notes & Travel Journal Vault
   ========================================================================== */

window.WayfarerJournalView = {
  render() {
    const container = document.getElementById("view-journal");
    if (!container) return;

    const memories = window.wayfarerStore.getMemories();

    container.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-1 block">FIELD ARCHIVE</span>
          <h1 class="font-serif text-4xl md:text-6xl font-bold text-[#1C1917] dark:text-white">Travel Field Notes</h1>
          <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-1">Quiet reflections, photography notes, and expedition logs.</p>
        </div>

        <button onclick="window.WayfarerJournalView.openAddMemoryModal()" class="btn-editorial-pill text-xs">
          <span>+ Log Field Memory</span>
        </button>
      </div>

      <div class="space-y-8">
        ${memories.length === 0 ? `
          <div class="py-16 text-center editorial-card">
            <p class="text-lg text-[#57534E] font-serif">No field memories logged yet.</p>
          </div>
        ` : memories.map(mem => `
          <div class="editorial-card p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-black/5 dark:border-white/10">
            <div class="md:col-span-6 h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <img src="${mem.coverImage}" class="w-full h-full object-cover" />
            </div>

            <div class="md:col-span-6 flex flex-col justify-center">
              <div class="flex items-center justify-between text-xs text-stone-400 mb-2">
                <span>📍 ${mem.location}</span>
                <span class="text-amber-500 font-semibold">★ ${mem.rating || 5.0}</span>
              </div>

              <h3 class="font-serif text-3xl font-bold text-[#1C1917] dark:text-white mb-3">“${mem.title}”</h3>
              <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] font-light leading-relaxed mb-6 italic">“${mem.story}”</p>

              <div class="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10 text-xs text-[#57534E] dark:text-[#A3C9AB]">
                <span>Date: <strong class="text-[#1C1917] dark:text-white">${mem.date}</strong></span>
                <span>Mood: <strong class="text-[#1B3B2B] dark:text-[#02C39A]">${mem.mood}</strong></span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  openAddMemoryModal() {
    const title = prompt("Enter Memory Title:");
    if (!title) return;
    const location = prompt("Enter Location (e.g. Pangong Lake, Ladakh):", "Pangong Lake, Ladakh");
    const story = prompt("Write your field note story:");

    if (title && story) {
      window.wayfarerStore.addMemory({
        title: title,
        location: location || "Wilderness",
        story: story,
        rating: 5.0,
        mood: "Awe-inspired",
        coverImage: "../NATURE/amy-w-IPFrMULxHjE-unsplash.jpg"
      });

      if (window.WayfarerNotify) window.WayfarerNotify.show("Saved memory to Field Journal Vault!", "success");
      this.render();
    }
  }
};
