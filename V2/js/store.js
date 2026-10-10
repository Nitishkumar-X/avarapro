/* ==========================================================================
   WAYFARER V2 — Central Reactive Store & Data Intelligence Manager
   ========================================================================== */

(function() {
  const STORAGE_KEY = "wayfarer_v2_store";

  class Store {
    constructor() {
      this.state = null;
      this.listeners = [];
      this.init();
    }

    init() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          this.state = JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse saved V2 state, resetting to initial dataset", e);
          this.loadDefaultState();
        }
      } else {
        this.loadDefaultState();
      }
    }

    loadDefaultState() {
      const initial = window.INITIAL_DATA || { profile: {}, categories: [], destinations: [], trips: [], checklists: {}, memories: [], passport: { stamps: [], achievements: [] } };
      this.state = JSON.parse(JSON.stringify(initial));

      // Merge verified India destinations if not present
      if (window.INDIA_TRAVEL_DATA && window.INDIA_TRAVEL_DATA.destinations) {
        window.INDIA_TRAVEL_DATA.destinations.forEach(d => {
          if (!this.state.destinations.some(existing => existing.id === d.id)) {
            this.state.destinations.push(d);
          }
        });
      }

      this.save();
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        this.notify();
      } catch (e) {
        console.error("Error saving V2 state to localStorage", e);
      }
    }

    subscribe(listener) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter(l => l !== listener);
      };
    }

    notify() {
      this.listeners.forEach(fn => fn(this.state));
    }

    /* --- PROFILE --- */
    getProfile() {
      return this.state.profile || {};
    }

    updateProfile(data) {
      this.state.profile = { ...this.state.profile, ...data };
      this.save();
    }

    /* --- DESTINATIONS --- */
    getDestinations() {
      return this.state.destinations || [];
    }

    getDestination(id) {
      return this.getDestinations().find(d => d.id === id);
    }

    addDestination(dest) {
      const newDest = {
        id: "dest_" + Date.now(),
        rating: 4.8,
        isFavorite: false,
        status: "Dreaming",
        companions: ["Solo"],
        coordinates: [28.6139, 77.2090],
        confidenceScore: "Medium",
        lastVerified: new Date().toISOString().split('T')[0],
        sources: [
          { sourceName: "Traveler Logged Entry", sourceType: "User Input", lastVerified: new Date().toISOString().split('T')[0] }
        ],
        ...dest
      };
      this.state.destinations.unshift(newDest);
      this.save();
      return newDest;
    }

    updateDestination(id, updates) {
      const idx = this.state.destinations.findIndex(d => d.id === id);
      if (idx !== -1) {
        this.state.destinations[idx] = { ...this.state.destinations[idx], ...updates };
        this.save();
      }
    }

    deleteDestination(id) {
      this.state.destinations = this.state.destinations.filter(d => d.id !== id);
      this.save();
    }

    /* --- TRIPS & ITINERARY --- */
    getTrips() {
      return this.state.trips || [];
    }

    getTrip(id) {
      return this.getTrips().find(t => t.id === id);
    }

    getUpcomingTrip() {
      return this.getTrips().find(t => t.status === "Upcoming" || t.status === "Active") || this.getTrips()[0];
    }

    convertBucketToTrip(destId, startDate, endDate, companions = ["Solo"]) {
      const dest = this.getDestination(destId);
      if (!dest) return null;

      dest.status = "Planning";

      const tripId = "trip_" + Date.now();
      const suggestedItinerary = window.WayfarerItineraryEngine ? window.WayfarerItineraryEngine.getSuggestedItinerary(destId, dest.duration || 7) : [];

      const newTrip = {
        id: tripId,
        destinationId: dest.id,
        title: `${dest.name} Expedition`,
        destinationName: dest.name,
        startDate: startDate || new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
        endDate: endDate || new Date(Date.now() + 37*24*60*60*1000).toISOString().split('T')[0],
        status: "Upcoming",
        coverImage: dest.image,
        companions: companions,
        type: dest.category,
        budget: {
          estimated: dest.budget || 30000,
          actual: 0,
          items: [
            { category: "Transportation", name: "Flights / Rail / Fuel", amount: Math.round((dest.budget || 30000) * 0.38) },
            { category: "Accommodation", name: "Stay & Lodge", amount: Math.round((dest.budget || 30000) * 0.34) },
            { category: "Food", name: "Local Dining & Chai", amount: Math.round((dest.budget || 30000) * 0.18) },
            { category: "Activities", name: "Permits & Guides", amount: Math.round((dest.budget || 30000) * 0.10) }
          ]
        },
        readiness: {
          documents: true,
          transport: true,
          hotel: false,
          packingPct: 0,
          itineraryPct: 80
        },
        itinerary: suggestedItinerary
      };

      this.state.trips.unshift(newTrip);
      this.generateChecklistForTrip(tripId, dest.category);
      this.save();
      return newTrip;
    }

    completeTrip(tripId) {
      const trip = this.getTrip(tripId);
      if (!trip) return;

      trip.status = "Completed";

      if (trip.destinationId) {
        const dest = this.getDestination(trip.destinationId);
        if (dest) dest.status = "Visited";
      }

      const newStamp = {
        id: "st_" + Date.now(),
        title: (trip.destinationName || "EXPLORER").toUpperCase(),
        subtitle: (trip.type || "Expedition") + " Trail",
        date: new Date().toLocaleString('default', { month: 'short', year: 'numeric' }).toUpperCase(),
        icon: trip.type === "Mountains" ? "🏔️" : trip.type === "Beaches" ? "🌊" : trip.type === "Road Trips" ? "🛣️" : "🌲",
        code: "WAY-" + Math.floor(1000 + Math.random() * 9000)
      };
      if (!this.state.passport.stamps) this.state.passport.stamps = [];
      this.state.passport.stamps.unshift(newStamp);

      this.evaluateAchievements();
      this.save();
    }

    /* --- CHECKLIST ENGINE --- */
    getChecklist(tripId) {
      if (!this.state.checklists) this.state.checklists = {};
      return this.state.checklists[tripId] || [];
    }

    toggleChecklistItem(tripId, itemId) {
      const list = this.getChecklist(tripId);
      const item = list.find(i => i.id === itemId);
      if (item) {
        item.checked = !item.checked;
        this.updateTripPackingReadiness(tripId);
        this.save();
      }
    }

    addChecklistItem(tripId, text, category = "TRAVEL GEAR") {
      if (!this.state.checklists) this.state.checklists = {};
      if (!this.state.checklists[tripId]) this.state.checklists[tripId] = [];

      const newItem = {
        id: "ck_" + Date.now(),
        category: category.toUpperCase(),
        text: text,
        checked: false
      };
      this.state.checklists[tripId].push(newItem);
      this.updateTripPackingReadiness(tripId);
      this.save();
      return newItem;
    }

    generateChecklistForTrip(tripId, categoryName = "General") {
      const baseItems = [
        { category: "DOCUMENTS", text: "Government ID / Passport Copies" },
        { category: "DOCUMENTS", text: "Hotel & Transport Vouchers" },
        { category: "DOCUMENTS", text: "Travel Insurance Policy" },
        { category: "MONEY", text: "Cash & Emergency Reserve" },
        { category: "CLOTHING", text: "T-Shirts & Quick-Dry Trek Wear" },
        { category: "CLOTHING", text: "Walking / Hiking Shoes" },
        { category: "TOILETRIES", text: "Sunscreen SPF 50+ & Lip Balm" },
        { category: "ELECTRONICS", text: "Phone, Chargers & Power Bank" },
        { category: "HEALTH", text: "First Aid Kit & Personal Medicines" }
      ];

      const catLower = (categoryName || "").toLowerCase();
      if (catLower.includes("mountain") || catLower.includes("road")) {
        baseItems.push(
          { category: "CLOTHING", text: "Heavy Down Jacket & Thermal Inners" },
          { category: "HEALTH", text: "Altitude Sickness Medicine (Diamox)" },
          { category: "TRAVEL GEAR", text: "Headlamp & Spare Batteries" }
        );
      } else if (catLower.includes("beach")) {
        baseItems.push(
          { category: "CLOTHING", text: "Swimwear & Flip Flops" },
          { category: "TRAVEL GEAR", text: "Waterproof Phone Pouch" }
        );
      }

      if (!this.state.checklists) this.state.checklists = {};
      this.state.checklists[tripId] = baseItems.map((item, idx) => ({
        id: `ck_${Date.now()}_${idx}`,
        category: item.category,
        text: item.text,
        checked: false
      }));
    }

    updateTripPackingReadiness(tripId) {
      const list = this.getChecklist(tripId);
      const trip = this.getTrip(tripId);
      if (list.length > 0 && trip) {
        const checkedCount = list.filter(i => i.checked).length;
        const pct = Math.round((checkedCount / list.length) * 100);
        if (!trip.readiness) trip.readiness = {};
        trip.readiness.packingPct = pct;
      }
    }

    /* --- MEMORIES & JOURNAL --- */
    getMemories() {
      return this.state.memories || [];
    }

    addMemory(memoryData) {
      const newMem = {
        id: "mem_" + Date.now(),
        date: new Date().toISOString().split('T')[0],
        rating: 5.0,
        tags: ["travel", "nature"],
        gallery: [memoryData.coverImage],
        ...memoryData
      };
      this.state.memories.unshift(newMem);
      this.save();
      return newMem;
    }

    /* --- ACHIEVEMENTS & STATS --- */
    evaluateAchievements() {
      const completedTrips = this.getTrips().filter(t => t.status === "Completed").length;
      const visitedDests = this.getDestinations().filter(d => d.status === "Visited").length;

      if (this.state.passport && this.state.passport.achievements) {
        this.state.passport.achievements.forEach(ach => {
          if (ach.id === "ach_1" && completedTrips >= 1) ach.unlocked = true;
          if (ach.id === "ach_2" && visitedDests >= 2) ach.unlocked = true;
          if (ach.id === "ach_4" && this.getDestinations().length >= 5) ach.unlocked = true;
        });
      }
    }

    getStats() {
      const destinations = this.getDestinations();
      const trips = this.getTrips();
      const memories = this.getMemories();

      const visited = destinations.filter(d => d.status === "Visited");
      const countries = [...new Set(destinations.map(d => d.country))];
      const totalDays = trips.reduce((acc, t) => acc + (t.status === "Completed" ? 7 : 0), 34);

      return {
        completedTrips: trips.filter(t => t.status === "Completed").length,
        countriesVisited: countries.length,
        placesVisited: visited.length,
        totalTravelDays: totalDays,
        bucketCount: destinations.length,
        upcomingTrip: this.getUpcomingTrip(),
        memoriesCount: memories.length
      };
    }

    exportJSON() {
      return JSON.stringify(this.state, null, 2);
    }

    importJSON(jsonStr) {
      try {
        const parsed = JSON.parse(jsonStr);
        if (parsed.profile && parsed.destinations) {
          this.state = parsed;
          this.save();
          return true;
        }
      } catch (e) {
        console.error("Invalid V2 JSON import", e);
      }
      return false;
    }

    resetToSampleData() {
      this.loadDefaultState();
    }
  }

  window.wayfarerStore = new Store();
})();
