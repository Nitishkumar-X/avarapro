/* ==========================================================================
   WAYFARER V2 — Main Application Controller & Router
   ========================================================================== */

(function() {
  class App {
    constructor() {
      this.currentTab = "home";
      this.views = {
        home: window.WayfarerHomeView,
        explore: window.WayfarerExploreView,
        bucketlist: window.wayfarerBucketList,
        trips: window.WayfarerTripsView,
        checklist: window.WayfarerChecklistView,
        journal: window.WayfarerJournalView,
        passport: window.WayfarerPassportView,
        map: window.WayfarerMapView,
        insights: window.WayfarerInsightsView,
        settings: window.WayfarerSettingsView
      };
      this.init();
    }

    init() {
      // Check saved theme preference
      const isDark = localStorage.getItem("wayfarer_theme") === "dark";
      if (isDark) {
        document.documentElement.classList.add("dark");
      }

      // Initialize UI Components
      if (window.WayfarerDrawer) window.WayfarerDrawer.init();
      if (window.WayfarerCommandPalette) window.WayfarerCommandPalette.init();

      // Bind nav buttons
      document.querySelectorAll("[data-nav-target]").forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-nav-target");
          this.switchTab(target);
        });
      });

      // Subscribe to central store
      window.wayfarerStore.subscribe(() => {
        this.renderCurrentView();
      });

      // Initial render
      this.switchTab("home");
    }

    switchTab(tabName) {
      if (!this.views[tabName]) return;

      this.currentTab = tabName;

      // Update Nav Buttons active state
      document.querySelectorAll("[data-nav-target]").forEach(btn => {
        const target = btn.getAttribute("data-nav-target");
        if (target === tabName) {
          btn.classList.add("nav-pill-active");
        } else {
          btn.classList.remove("nav-pill-active");
        }
      });

      // Hide all view containers & show target
      document.querySelectorAll(".view-container").forEach(c => c.classList.add("hidden"));
      const activeEl = document.getElementById(`view-${tabName}`);
      if (activeEl) activeEl.classList.remove("hidden");

      this.renderCurrentView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    renderCurrentView() {
      const activeView = this.views[this.currentTab];
      if (activeView && activeView.render) {
        activeView.render();
      }
    }

    toggleTheme() {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("wayfarer_theme", isDark ? "dark" : "light");
      if (this.currentTab === "map" && window.WayfarerMapView) {
        window.WayfarerMapView.render();
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.wayfarerApp = new App();
  });
})();
