/* ==========================================================================
   WAYFARER V2 — Interactive Leaflet Map Controller
   ========================================================================== */

window.WayfarerMapView = {
  mapInstance: null,

  render() {
    const container = document.getElementById("view-map");
    if (!container) return;

    container.innerHTML = `
      <div class="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#1B3B2B] dark:text-[#02C39A] font-semibold mb-1 block">SPATIAL MAP EXPLORER</span>
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-[#1C1917] dark:text-white">Geographic Travel Cartography</h1>
          <p class="text-sm text-[#57534E] dark:text-[#A3C9AB] mt-1">Pins reflecting your Dreaming, Planning, and Visited destinations.</p>
        </div>
      </div>

      <div class="editorial-card h-[600px] w-full overflow-hidden relative shadow-2xl rounded-[32px] border border-black/10 dark:border-white/10">
        <div id="leaflet-map-container" class="w-full h-full"></div>
      </div>
    `;

    setTimeout(() => this.initMap(), 100);
  },

  initMap() {
    const mapEl = document.getElementById("leaflet-map-container");
    if (!mapEl) return;

    if (this.mapInstance) {
      this.mapInstance.remove();
      this.mapInstance = null;
    }

    const isDark = document.documentElement.classList.contains("dark");
    const tileUrl = isDark
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

    const map = L.map("leaflet-map-container", {
      center: [22.5937, 78.9629],
      zoom: 5,
      zoomControl: true
    });

    L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> & Incredible India',
      subdomains: "abcd",
      maxZoom: 19
    }).addTo(map);

    const destinations = window.wayfarerStore.getDestinations();

    destinations.forEach(d => {
      if (d.coordinates && Array.isArray(d.coordinates)) {
        const color = d.status === "Visited" ? "#10B981" : d.status === "Planning" ? "#F59E0B" : "#38BDF8";

        const customIcon = L.divIcon({
          className: "custom-map-pin",
          html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 12px ${color};"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        const marker = L.marker(d.coordinates, { icon: customIcon }).addTo(map);

        const popupContent = `
          <div style="width: 220px; font-family: 'Plus Jakarta Sans', sans-serif;">
            <img src="${d.image}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 12px; margin-bottom: 8px;" />
            <h4 style="font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: bold; margin: 0;">${d.name}</h4>
            <p style="font-size: 11px; color: #78716C; margin: 2px 0 6px 0;">${d.region || d.state || 'India'}</p>
            <button onclick="window.wayfarerBucketList.openDestinationDetail('${d.id}')" style="width: 100%; padding: 6px; background: #1B3B2B; color: white; border: none; border-radius: 8px; font-size: 11px; cursor: pointer; font-weight: 600;">Open Destination →</button>
          </div>
        `;

        marker.bindPopup(popupContent);
      }
    });

    this.mapInstance = map;
  }
};
