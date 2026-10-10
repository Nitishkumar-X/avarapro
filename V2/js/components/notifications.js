/* ==========================================================================
   WAYFARER V2 — Spatial Toast Notification Generator
   ========================================================================== */

window.WayfarerNotify = {
  show(message, type = "success", duration = 3500) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `spatial-glass px-5 py-3.5 rounded-2xl text-xs font-semibold flex items-center gap-3 shadow-2xl transition-all duration-300 pointer-events-auto transform translate-y-4 opacity-0 border border-black/10 dark:border-white/15`;

    let icon = "✓";
    let accentClass = "text-emerald-500";

    if (type === "info") {
      icon = "ℹ";
      accentClass = "text-sky-500";
    } else if (type === "warning") {
      icon = "⚠️";
      accentClass = "text-amber-500";
    }

    toast.innerHTML = `
      <span class="w-6 h-6 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center font-bold ${accentClass}">${icon}</span>
      <span class="text-[#1C1917] dark:text-white font-medium">${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove("translate-y-4", "opacity-0");
    });

    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};
