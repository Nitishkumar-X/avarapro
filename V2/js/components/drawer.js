/* ==========================================================================
   WAYFARER V2 — Reusable Slide Drawer Overlay Controller
   ========================================================================== */

window.WayfarerDrawer = {
  isOpen: false,

  init() {
    const overlay = document.getElementById("drawer-overlay");
    const closeBtn = document.getElementById("drawer-close-btn");

    if (overlay) overlay.addEventListener("click", () => this.close());
    if (closeBtn) closeBtn.addEventListener("click", () => this.close());
  },

  open(title, htmlContent) {
    const overlay = document.getElementById("drawer-overlay");
    const container = document.getElementById("drawer-container");
    const titleEl = document.getElementById("drawer-title");
    const bodyEl = document.getElementById("drawer-body");

    if (!container || !bodyEl) return;

    if (titleEl) titleEl.textContent = title || "Details";
    bodyEl.innerHTML = htmlContent;

    if (overlay) overlay.classList.remove("hidden");
    container.classList.remove("translate-x-full");

    this.isOpen = true;
    document.body.style.overflow = "hidden";
  },

  close() {
    const overlay = document.getElementById("drawer-overlay");
    const container = document.getElementById("drawer-container");

    if (container) container.classList.add("translate-x-full");
    if (overlay) overlay.classList.add("hidden");

    this.isOpen = false;
    document.body.style.overflow = "auto";
  }
};
