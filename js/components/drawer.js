/* ==========================================================================
   WAYFARER / ANTARA — Reusable Slide Drawer Component
   Auto-attaches to DOM if elements don't exist
   ========================================================================== */

window.WayfarerDrawer = {
  container: null,
  overlay: null,
  contentEl: null,
  titleEl: null,

  init() {
    this.container = document.getElementById("drawer-container");
    this.overlay = document.getElementById("drawer-overlay");
    this.contentEl = document.getElementById("drawer-body");
    this.titleEl = document.getElementById("drawer-title");

    if (!this.container) {
      // Auto-inject drawer elements into body
      const wrapper = document.createElement("div");
      wrapper.innerHTML = `
        <div id="drawer-overlay" class="fixed inset-0 z-[75] bg-black/60 backdrop-blur-sm hidden transition-opacity duration-300"></div>
        <aside id="drawer-container" class="fixed top-0 right-0 h-full w-full sm:w-[480px] z-[76] wf-surface border-l wf-border translate-x-full transition-transform duration-400 ease-out overflow-y-auto flex flex-col shadow-2xl">
          <div class="flex items-center justify-between p-5 border-b wf-border bg-black/[0.02] dark:bg-white/[0.02]">
            <h3 id="drawer-title" class="font-serif wf-text-primary text-xl font-medium"></h3>
            <button id="drawer-close-btn" class="wf-btn wf-btn-ghost wf-btn-icon">✕</button>
          </div>
          <div id="drawer-body" class="p-6 flex-1 overflow-y-auto"></div>
        </aside>
      `;
      document.body.appendChild(wrapper);
      this.container = document.getElementById("drawer-container");
      this.overlay = document.getElementById("drawer-overlay");
      this.contentEl = document.getElementById("drawer-body");
      this.titleEl = document.getElementById("drawer-title");
    }

    if (this.overlay) {
      this.overlay.addEventListener("click", () => this.close());
    }

    const closeBtn = document.getElementById("drawer-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.close());
    }
  },

  open(title, htmlContent) {
    if (!this.container) this.init();

    if (this.titleEl) this.titleEl.textContent = title;
    if (this.contentEl) this.contentEl.innerHTML = htmlContent;

    this.container.classList.remove("translate-x-full");
    this.container.classList.add("translate-x-0");
    this.overlay?.classList.remove("hidden");

    document.body.style.overflow = "hidden";
  },

  close() {
    if (!this.container) return;

    this.container.classList.remove("translate-x-0");
    this.container.classList.add("translate-x-full");
    this.overlay?.classList.add("hidden");

    document.body.style.overflow = "";
  }
};

// Aliases
window.WFDrawer = window.WayfarerDrawer;
