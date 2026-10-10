/* ==========================================================================
   WAYFARER V2 — Profile & JSON Data Backup Settings Controller
   ========================================================================== */

window.WayfarerSettingsView = {
  render() {
    const container = document.getElementById("view-settings");
    if (!container) return;

    const profile = window.wayfarerStore.getProfile();

    container.innerHTML = `
      <div class="mb-10">
        <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-1 block">SYSTEM PREFERENCES</span>
        <h1 class="font-serif text-4xl md:text-6xl font-bold text-[#1C1917] dark:text-white">Profile & OS Settings</h1>
        <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-1">Manage traveler identity, theme preferences, and data backup exports.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="editorial-card p-6 md:p-8 border border-black/5 dark:border-white/10">
          <h3 class="font-serif font-bold text-2xl text-[#1C1917] dark:text-white mb-4">Traveler Profile</h3>

          <form onsubmit="window.WayfarerSettingsView.handleSaveProfile(event)" class="space-y-4">
            <div>
              <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Full Name</label>
              <input type="text" name="name" value="${profile.name}" required class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none" />
            </div>

            <div>
              <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Handle / Username</label>
              <input type="text" name="handle" value="${profile.handle}" required class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none" />
            </div>

            <div>
              <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Home Location</label>
              <input type="text" name="homeLocation" value="${profile.homeLocation}" required class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none" />
            </div>

            <div>
              <label class="block text-xs text-[#57534E] dark:text-[#A3C9AB] mb-1">Short Bio</label>
              <textarea name="bio" rows="2" class="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-[#1C1917] dark:text-white focus:outline-none">${profile.bio}</textarea>
            </div>

            <button type="submit" class="btn-editorial-pill w-full text-xs">Save Profile Changes</button>
          </form>
        </div>

        <div class="editorial-card p-6 md:p-8 border border-black/5 dark:border-white/10 flex flex-col justify-between">
          <div>
            <h3 class="font-serif font-bold text-2xl text-[#1C1917] dark:text-white mb-4">Data Management & Backup</h3>
            <p class="text-xs text-[#57534E] dark:text-[#A3C9AB] mb-6">Your travel intelligence operating system stores all records locally in browser persistence without cloud tracking.</p>

            <div class="space-y-3">
              <button onclick="window.WayfarerSettingsView.exportData()" class="w-full py-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 text-xs font-semibold text-[#1C1917] dark:text-white border border-black/5 dark:border-white/10">
                📥 Export Backup (JSON)
              </button>
              <button onclick="window.WayfarerSettingsView.importDataPrompt()" class="w-full py-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 text-xs font-semibold text-[#1C1917] dark:text-white border border-black/5 dark:border-white/10">
                📤 Import Backup (JSON)
              </button>
              <button onclick="window.WayfarerSettingsView.resetSampleData()" class="w-full py-3.5 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 text-xs font-semibold text-rose-500 border border-rose-500/20">
                ⚠️ Reset to Verified Sample Dataset
              </button>
            </div>
          </div>

          <div class="pt-6 border-t border-black/5 dark:border-white/10 text-[10px] text-stone-400 text-center">
            WAYFARER V2 OS · Static Frontend Architecture
          </div>
        </div>
      </div>
    `;
  },

  handleSaveProfile(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    window.wayfarerStore.updateProfile(data);
    if (window.WayfarerNotify) window.WayfarerNotify.show("Profile updated successfully!", "success");
    this.render();
  },

  exportData() {
    const jsonStr = window.wayfarerStore.exportJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wayfarer_v2_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    if (window.WayfarerNotify) window.WayfarerNotify.show("Exported JSON backup!", "success");
  },

  importDataPrompt() {
    const jsonStr = prompt("Paste your WAYFARER JSON backup string:");
    if (jsonStr) {
      const ok = window.wayfarerStore.importJSON(jsonStr);
      if (ok) {
        if (window.WayfarerNotify) window.WayfarerNotify.show("Imported JSON backup!", "success");
        location.reload();
      } else {
        alert("Invalid JSON format.");
      }
    }
  },

  resetSampleData() {
    if (confirm("Reset local store to default verified dataset?")) {
      window.wayfarerStore.resetToSampleData();
      if (window.WayfarerNotify) window.WayfarerNotify.show("Reset to default dataset.", "info");
      location.reload();
    }
  }
};
