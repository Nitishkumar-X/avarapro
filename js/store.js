(function() {
  const STORAGE_KEY = 'wayfarer_state_v4';

  const defaultState = {
    destinations: [
      {
        id: 'dest_spiti',
        name: 'Spiti Valley',
        country: 'India',
        region: 'Himachal Pradesh',
        category: 'Adventure',
        image: 'NATURE/119632.jpg',
        description: 'A cold desert mountain valley located high in the Himalayas in the north-eastern part of the northern Indian state of Himachal Pradesh.',
        whyVisit: 'Rugged landscapes, ancient monasteries, and pristine high-altitude lakes.',
        bestSeason: 'June to September',
        budget: 25000,
        duration: 8,
        rating: 4.8,
        priority: 'High',
        status: 'Dreaming',
        transportation: { nearestAirport: 'Bhuntar Airport (Kullu)', nearestRailwayStation: 'Joginder Nagar', roadAccess: 'Via Manali or Shimla' },
        sources: [{ sourceName: 'Wayfarer Intelligence', sourceType: 'Curated', lastVerified: new Date().toISOString() }],
        confidenceScore: 'High',
        estimatedDailyBudget: { budget: 2000, midRange: 4500, luxury: 9000 }
      },
      {
        id: 'dest_pangong',
        name: 'Pangong Tso',
        country: 'India',
        region: 'Ladakh',
        category: 'Nature',
        image: 'NATURE/amy-w-IPFrMULxHjE-unsplash.jpg',
        description: 'An endorheic lake in the Himalayas situated at an elevation of about 4,350 m.',
        whyVisit: 'Stunning crystal clear blue waters that change color, set against barren mountains.',
        bestSeason: 'May to September',
        budget: 30000,
        duration: 5,
        rating: 4.9,
        priority: 'Medium',
        status: 'Bucket List',
        transportation: { nearestAirport: 'Kushok Bakula Rimpochee Airport (Leh)', nearestRailwayStation: 'Jammu Tawi', roadAccess: 'Via Leh' },
        sources: [{ sourceName: 'Wayfarer Intelligence', sourceType: 'Curated', lastVerified: new Date().toISOString() }],
        confidenceScore: 'High',
        estimatedDailyBudget: { budget: 2500, midRange: 5500, luxury: 12000 }
      },
      {
        id: 'dest_kgl',
        name: 'Kashmir Great Lakes',
        country: 'India',
        region: 'Jammu & Kashmir',
        category: 'Trekking',
        image: 'NATURE/florian-k-r1RjYmC6frI-unsplash.jpg',
        description: 'A classic Himalayan trek passing through five alpine lakes.',
        whyVisit: 'Unmatched alpine scenery, lush meadows, and pristine high-altitude lakes.',
        bestSeason: 'July to August',
        budget: 18000,
        duration: 7,
        rating: 4.7,
        priority: 'High',
        status: 'Bucket List',
        transportation: { nearestAirport: 'Srinagar International Airport', nearestRailwayStation: 'Jammu Tawi', roadAccess: 'Via Sonamarg' },
        sources: [{ sourceName: 'Wayfarer Intelligence', sourceType: 'Curated', lastVerified: new Date().toISOString() }],
        confidenceScore: 'High',
        estimatedDailyBudget: { budget: 1500, midRange: 3500, luxury: 6000 }
      },
      {
        id: 'dest_palolem',
        name: 'Palolem Beach',
        country: 'India',
        region: 'Goa',
        category: 'Beach',
        image: 'NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg',
        description: 'A white sand beach facing a blue bay between two headlands.',
        whyVisit: 'Laid-back vibe, picturesque sunsets, and calm waters.',
        bestSeason: 'November to March',
        budget: 15000,
        duration: 4,
        rating: 4.5,
        priority: 'Low',
        status: 'Bucket List',
        transportation: { nearestAirport: 'Dabolim Airport', nearestRailwayStation: 'Canacona', roadAccess: 'Well connected by road' },
        sources: [{ sourceName: 'Wayfarer Intelligence', sourceType: 'Curated', lastVerified: new Date().toISOString() }],
        confidenceScore: 'High',
        estimatedDailyBudget: { budget: 2000, midRange: 4000, luxury: 8000 }
      },
      {
        id: 'dest_coorg',
        name: 'Coorg Coffee Estates',
        country: 'India',
        region: 'Karnataka',
        category: 'Nature',
        image: 'NATURE/june-o-Tq61bW38kmM-unsplash.jpg',
        description: 'Also known as Kodagu, a rural district in the southwest Indian state of Karnataka.',
        whyVisit: 'Lush green landscapes, coffee plantations, and misty hills.',
        bestSeason: 'September to March',
        budget: 12000,
        duration: 3,
        rating: 4.6,
        priority: 'Medium',
        status: 'Bucket List',
        transportation: { nearestAirport: 'Mangalore International Airport', nearestRailwayStation: 'Mysore', roadAccess: 'Well connected by road' },
        sources: [{ sourceName: 'Wayfarer Intelligence', sourceType: 'Curated', lastVerified: new Date().toISOString() }],
        confidenceScore: 'High',
        estimatedDailyBudget: { budget: 1800, midRange: 4000, luxury: 7500 }
      },
      {
        id: 'dest_hampi',
        name: 'Hampi Ruins',
        country: 'India',
        region: 'Karnataka',
        category: 'Culture',
        image: 'NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg',
        description: 'An ancient village in the south Indian state of Karnataka, famous for its ruined temple complexes.',
        whyVisit: 'Fascinating boulder-strewn landscapes and ancient Vijayanagara empire ruins.',
        bestSeason: 'October to March',
        budget: 10000,
        duration: 3,
        rating: 4.7,
        priority: 'High',
        status: 'Bucket List',
        transportation: { nearestAirport: 'Jindal Vijaynagar Airport (Vidyanagar)', nearestRailwayStation: 'Hosapete', roadAccess: 'Well connected by road' },
        sources: [{ sourceName: 'Wayfarer Intelligence', sourceType: 'Curated', lastVerified: new Date().toISOString() }],
        confidenceScore: 'High',
        estimatedDailyBudget: { budget: 1200, midRange: 3000, luxury: 6000 }
      }
    ],
    trips: [
      {
        id: 'trip_1',
        title: 'Spiti Expedition',
        destinationName: 'Spiti Valley',
        destinationId: 'dest_spiti',
        startDate: '2026-09-01',
        endDate: '2026-09-08',
        status: 'Active',
        type: 'Adventure',
        coverImage: 'NATURE/119632.jpg',
        companions: ['Solo'],
        itinerary: [
          { day: 'Day 1', time: '08:00 AM', title: 'Arrival in Manali', location: 'Manali', note: 'Rest and acclimatize.', status: 'Pending' },
          { day: 'Day 2', time: '06:00 AM', title: 'Drive to Kaza', location: 'Kaza', note: 'Long drive via Rohtang and Kunzum Pass.', status: 'Pending' },
          { day: 'Day 3', time: '09:00 AM', title: 'Explore Key Monastery', location: 'Key Monastery', note: 'Visit the iconic monastery.', status: 'Pending' },
          { day: 'Day 4', time: '10:00 AM', title: 'Visit Kibber & Chicham', location: 'Chicham Bridge', note: 'Highest bridge in Asia.', status: 'Pending' },
          { day: 'Day 5', time: '08:00 AM', title: 'Langza and Hikkim', location: 'Hikkim', note: 'Send a postcard from the highest post office.', status: 'Pending' }
        ],
        budget: {
          estimated: 35000,
          actual: 12000,
          items: [
            { id: 'exp_1', name: 'Flight to Kullu', category: 'Transport', amount: 8000 },
            { id: 'exp_2', name: 'Hotel in Manali', category: 'Accommodation', amount: 4000 }
          ]
        },
        readiness: { packingPct: 65 },
        notes: 'Carry diamox for AMS.'
      }
    ],
    memories: [
      {
        id: 'mem_1',
        title: 'Misty Mornings in Munnar',
        location: 'Munnar, Kerala',
        date: '2025-11-15',
        mood: 'Peaceful',
        story: 'Woke up early to catch the sunrise over the tea gardens. The mist was slowly lifting, revealing the lush green slopes. Truly magical.',
        coverImage: 'NATURE/jon-flobrant-rB7-LCa_diU-unsplash.jpg'
      },
      {
        id: 'mem_2',
        title: 'Starry Night in Jaisalmer',
        location: 'Sam Sand Dunes, Rajasthan',
        date: '2026-02-20',
        mood: 'Awestruck',
        story: 'Camped out in the desert. Never seen so many stars in my life. The silence of the desert night was profound.',
        coverImage: 'NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg'
      }
    ],
    checklist: [
      { id: 'chk_1', name: 'Passport & Visas', category: 'Documents', quantity: 1, checked: true, notes: 'Keep a digital copy' },
      { id: 'chk_2', name: 'Travel Insurance', category: 'Documents', quantity: 1, checked: false, notes: '' },
      { id: 'chk_3', name: 'Trekking Shoes', category: 'Clothing', quantity: 1, checked: true, notes: 'Waterproof preferred' },
      { id: 'chk_4', name: 'Thermal Wear', category: 'Clothing', quantity: 2, checked: false, notes: 'Top and bottom' },
      { id: 'chk_5', name: 'Power Bank', category: 'Gear', quantity: 1, checked: true, notes: '20000mAh minimum' },
      { id: 'chk_6', name: 'Headlamp', category: 'Gear', quantity: 1, checked: false, notes: 'With extra batteries' },
      { id: 'chk_7', name: 'Sunscreen', category: 'Toiletries', quantity: 1, checked: true, notes: 'SPF 50+' },
      { id: 'chk_8', name: 'First Aid Kit', category: 'Toiletries', quantity: 1, checked: false, notes: 'Include Diamox for altitude' }
    ],
    journals: [],
    profile: {
      name: 'Explorer',
      email: '',
      homecity: 'Bhubaneswar',
      travellerSince: '2024',
      travelerType: 'Solo',
      travelStyle: 'midrange',
      interests: ['wildlife', 'heritage', 'beaches'],
      bio: ''
    }
  };

  const generateId = (prefix) => prefix + '_' + Math.random().toString(36).substr(2, 9);

  // Normalize a destination object so both legacy (image/budget) and new (coverImage/estimatedBudget) fields always exist
  const normalizeDest = (d) => {
    if (!d) return d;
    return {
      ...d,
      coverImage: d.coverImage || d.image || 'NATURE/119632.jpg',
      image:      d.image      || d.coverImage || 'NATURE/119632.jpg',
      estimatedBudget: d.estimatedBudget != null ? d.estimatedBudget : (d.budget != null ? d.budget : 0),
      budget:          d.budget != null ? d.budget : (d.estimatedBudget != null ? d.estimatedBudget : 0),
      status: d.status === 'Bucket List' ? 'Dreaming' : (d.status || 'Dreaming'),
      region: d.region || d.state || 'India',
      country: d.country || 'India',
    };
  };

  window.wayfarerStore = {
    _state: {},
    _listeners: [],

    subscribe(fn) {
      this._listeners.push(fn);
      return () => {
        this._listeners = this._listeners.filter(l => l !== fn);
      };
    },

    notify() {
      this._listeners.forEach(fn => fn(this._state));
    },

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._state));
      } catch (e) {
        console.error('Failed to save state to localStorage', e);
      }
    },

    load() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          this._state = { ...defaultState, ...parsed }; // Merge to ensure missing fields exist
        } else {
          this._state = JSON.parse(JSON.stringify(defaultState));
        }
      } catch (e) {
        console.error('Failed to load state from localStorage', e);
        this._state = JSON.parse(JSON.stringify(defaultState));
      }
    },

    // DESTINATIONS
    getDestinations() {
      return (this._state.destinations || []).map(normalizeDest);
    },

    getDestination(id) {
      const raw = (this._state.destinations || []).find(d => d.id === id);
      return normalizeDest(raw);
    },

    addDestination(data) {
      const id = data.id || generateId('dest');
      const existingIdx = (this._state.destinations || []).findIndex(d => d.id === id);
      if (existingIdx !== -1) {
        this._state.destinations[existingIdx] = normalizeDest({ ...this._state.destinations[existingIdx], ...data, id });
        this.save();
        this.notify();
        return this._state.destinations[existingIdx];
      }
      const normalized = normalizeDest({ status: 'Dreaming', ...data, id });
      this._state.destinations.push(normalized);
      this.save();
      this.notify();
      return normalized;
    },

    saveDestination(data) {
      if (!data) return null;
      return this.addDestination(data);
    },

    isVisited(id) {
      if (!id) return false;
      const d = (this._state.destinations || []).find(x => x.id === id);
      return d?.status === 'Visited';
    },

    isSaved(id) {
      if (!id) return false;
      return (this._state.destinations || []).some(x => x.id === id);
    },

    markVisited(id, extraData = {}) {
      if (!id) return;
      return this.addDestination({ id, status: 'Visited', ...extraData });
    },

    updateDestination(id, patch) {
      const idx = this._state.destinations.findIndex(d => d.id === id);
      if (idx !== -1) {
        this._state.destinations[idx] = normalizeDest({ ...this._state.destinations[idx], ...patch });
        this.save();
        this.notify();
      }
    },

    deleteDestination(id) {
      this._state.destinations = this._state.destinations.filter(d => d.id !== id);
      this.save();
      this.notify();
    },

    // TRIPS
    getTrips() {
      return this._state.trips || [];
    },

    getTrip(id) {
      return this.getTrips().find(t => t.id === id);
    },

    addTrip(data) {
      const newTrip = { id: generateId('trip'), ...data };
      this._state.trips.push(newTrip);
      this.save();
      this.notify();
      return newTrip;
    },

    updateTrip(id, patch) {
      const idx = this._state.trips.findIndex(t => t.id === id);
      if (idx !== -1) {
        this._state.trips[idx] = { ...this._state.trips[idx], ...patch };
        this.save();
        this.notify();
      }
    },

    completeTrip(id) {
      this.updateTrip(id, { status: 'Completed' });
    },

    convertBucketToTrip(destId) {
      const dest = this.getDestination(destId);
      if (!dest) return null;
      
      const newTrip = {
        id: generateId('trip'),
        title: dest.name + ' Trip',
        destinationName: dest.name,
        destinationId: dest.id,
        startDate: '',
        endDate: '',
        status: 'Planned',
        type: dest.category || 'Leisure',
        coverImage: dest.image,
        companions: [],
        itinerary: [],
        budget: {
          estimated: dest.budget || 0,
          actual: 0,
          items: []
        },
        readiness: { packingPct: 0 },
        notes: ''
      };
      
      this._state.trips.push(newTrip);
      
      // Update destination status
      this.updateDestination(destId, { status: 'Planned' });
      
      this.save();
      this.notify();
      return newTrip;
    },

    addItineraryItem(tripId, item) {
      const trip = this.getTrip(tripId);
      if (trip) {
        if (!trip.itinerary) trip.itinerary = [];
        trip.itinerary.push(item);
        this.save();
        this.notify();
      }
    },

    toggleItineraryItem(tripId, idx) {
      const trip = this.getTrip(tripId);
      if (trip && trip.itinerary && trip.itinerary[idx]) {
        trip.itinerary[idx].status = trip.itinerary[idx].status === 'Completed' ? 'Pending' : 'Completed';
        this.save();
        this.notify();
      }
    },

    addTripExpense(tripId, expense) {
      const trip = this.getTrip(tripId);
      if (trip && trip.budget) {
        if (!trip.budget.items) trip.budget.items = [];
        trip.budget.items.push({ id: generateId('exp'), ...expense });
        trip.budget.actual = trip.budget.items.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
        this.save();
        this.notify();
      }
    },

    deleteItineraryItem(tripId, idx) {
      const trip = this.getTrip(tripId);
      if (trip && trip.itinerary) {
        trip.itinerary.splice(idx, 1);
        this.save();
        this.notify();
      }
    },

    deleteTripExpense(tripId, expId) {
      const trip = this.getTrip(tripId);
      if (trip && trip.budget && trip.budget.items) {
        trip.budget.items = trip.budget.items.filter(i => i.id !== expId);
        trip.budget.actual = trip.budget.items.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
        this.save();
        this.notify();
      }
    },

    // MEMORIES
    getMemories() {
      return this._state.memories || [];
    },

    getMemory(id) {
      return this.getMemories().find(m => m.id === id);
    },

    addMemory(data) {
      const newMemory = { id: generateId('mem'), ...data };
      this._state.memories.push(newMemory);
      this.save();
      this.notify();
      return newMemory;
    },

    deleteMemory(id) {
      this._state.memories = this._state.memories.filter(m => m.id !== id);
      this.save();
      this.notify();
    },

    // CHECKLIST
    getChecklist() {
      return this._state.checklist || [];
    },

    addChecklistItem(data) {
      const newItem = { id: generateId('chk'), ...data };
      this._state.checklist.push(newItem);
      this.save();
      this.notify();
      return newItem;
    },

    toggleChecklistItem(id) {
      const item = this._state.checklist.find(c => c.id === id);
      if (item) {
        item.checked = !item.checked;
        this.save();
        this.notify();
      }
    },

    deleteChecklistItem(id) {
      this._state.checklist = this._state.checklist.filter(c => c.id !== id);
      this.save();
      this.notify();
    },

    bulkAddChecklistItems(items) {
      items.forEach(item => {
        this._state.checklist.push({ id: generateId('chk'), ...item });
      });
      this.save();
      this.notify();
    },

    packAllChecklist() {
      (this._state.checklist || []).forEach(item => { item.checked = true; item.packed = true; });
      this.save();
      this.notify();
    },

    unpackAllChecklist() {
      (this._state.checklist || []).forEach(item => { item.checked = false; item.packed = false; });
      this.save();
      this.notify();
    },

    clearCheckedChecklist() {
      this._state.checklist = (this._state.checklist || []).filter(item => !item.checked && !item.packed);
      this.save();
      this.notify();
    },

    // PROFILE
    getProfile() {
      return this._state.profile || {};
    },

    updateProfile(patch) {
      this._state.profile = { ...this._state.profile, ...patch };
      this.save();
      this.notify();
    },

    // STATS
    getStats() {
      const trips = this.getTrips();
      const destinations = this.getDestinations();

      const completedTrips = trips.filter(t => t.status === 'Completed');
      const upcomingTrips = trips.filter(t => t.status === 'Planned' || t.status === 'Active');

      // Count destinations with Visited status (primary metric)
      const visitedDestinations = destinations.filter(d => d.status === 'Visited');
      const placesVisited = visitedDestinations.length || completedTrips.length;

      const uniqueCountries = new Set();
      visitedDestinations.forEach(d => { if (d.country) uniqueCountries.add(d.country); });
      completedTrips.forEach(t => {
        const dest = destinations.find(d => d.id === t.destinationId);
        if (dest && dest.country) uniqueCountries.add(dest.country);
      });
      const countriesVisited = uniqueCountries.size || (placesVisited > 0 ? 1 : 0);

      let totalTravelDays = 0;
      completedTrips.forEach(t => {
        if (t.startDate && t.endDate) {
          const start = new Date(t.startDate);
          const end = new Date(t.endDate);
          if (!isNaN(start) && !isNaN(end)) {
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            totalTravelDays += diffDays;
          }
        }
      });

      const bucketCount = destinations.filter(d => d.status !== 'Visited').length;

      const sortedUpcoming = upcomingTrips.sort((a, b) => new Date(a.startDate || '9999-12-31') - new Date(b.startDate || '9999-12-31'));
      const upcomingTrip = sortedUpcoming.length > 0 ? sortedUpcoming[0] : null;

      return {
        placesVisited,
        countriesVisited,
        totalTravelDays,
        bucketCount,
        upcomingTrip,
        completedTripsCount: completedTrips.length
      };
    },

    // SEARCH INDEX (includes Odisha data, districts, checklists, trips, and memories)
    globalSearch(query) {
      if (!query || query.trim() === '') return [];

      const q = query.toLowerCase();
      const results = [];

      // Search Odisha 30 Districts
      const allDistricts = window.ODISHA_DATA?.districts || [];
      allDistricts.forEach(dist => {
        if (dist.name.toLowerCase().includes(q) || (dist.zone && dist.zone.toLowerCase().includes(q))) {
          results.push({
            type: 'District',
            id: 'district_' + dist.name,
            title: dist.name + ' District',
            subtitle: `${dist.zone || 'Odisha'} · ${dist.destCount || 0} destinations · ${dist.signature || ''}`,
            icon: '🏛️',
            action: () => {
              ANTARA.switchView('explore');
              setTimeout(() => {
                const distSelect = document.getElementById('filter-district');
                if (distSelect) {
                  distSelect.value = dist.name;
                  distSelect.dispatchEvent(new Event('change'));
                }
              }, 150);
            }
          });
        }
      });

      // Search saved destinations
      this.getDestinations().forEach(d => {
        if ((d.name && d.name.toLowerCase().includes(q)) || (d.country && d.country.toLowerCase().includes(q)) || (d.region && d.region.toLowerCase().includes(q))) {
          results.push({ type: 'Saved Place', id: d.id, title: d.name, subtitle: d.region || d.country, image: d.image, action: () => ANTARA.openDestPanel(d.id, 'odisha') });
        }
      });

      // Search Odisha data (discovery)
      const odishaDests = (window.ODISHA_DATA && window.ODISHA_DATA.destinations) || [];
      odishaDests.forEach(d => {
        if (!results.find(r => r.id === d.id)) {
          if (d.name.toLowerCase().includes(q) || (d.district && d.district.toLowerCase().includes(q)) || (d.description && d.description.toLowerCase().includes(q)) || (d.tags || []).some(t => t.includes(q))) {
            results.push({ type: 'Odisha', id: d.id, title: d.name, subtitle: d.district + ' · ' + d.category, image: d.image, action: () => ANTARA.openDestPanel(d.id, 'odisha') });
          }
        }
      });

      // Search Pan-India destinations
      const indiaDests = (window.INDIA_TRAVEL_DATA && window.INDIA_TRAVEL_DATA.destinations) || [];
      indiaDests.forEach(d => {
        if (!results.find(r => r.id === d.id)) {
          if (d.name.toLowerCase().includes(q) || (d.state && d.state.toLowerCase().includes(q)) || (d.description && d.description.toLowerCase().includes(q)) || (d.tags || []).some(t => t.includes(q))) {
            results.push({ type: 'India', id: d.id, title: d.name, subtitle: (d.state || 'India') + ' · ' + (d.category || 'Travel'), image: d.image, action: () => ANTARA.openDestPanel(d.id, 'india') });
          }
        }
      });

      // Search Global / International destinations
      const globalDests = (window.GLOBAL_TRAVEL_DATA && window.GLOBAL_TRAVEL_DATA.destinations) || [];
      globalDests.forEach(d => {
        if (!results.find(r => r.id === d.id)) {
          if (d.name.toLowerCase().includes(q) || (d.country && d.country.toLowerCase().includes(q)) || (d.description && d.description.toLowerCase().includes(q)) || (d.tags || []).some(t => t.includes(q))) {
            results.push({ type: 'Global', id: d.id, title: d.name, subtitle: (d.country || 'World') + ' · ' + (d.visaType || d.category), image: d.image, action: () => ANTARA.openDestPanel(d.id, 'global') });
          }
        }
      });

      // Search trips
      this.getTrips().forEach(t => {
        if (t.title && t.title.toLowerCase().includes(q)) {
          results.push({ type: 'Trip', id: t.id, title: t.title, subtitle: t.status, image: t.coverImage, action: () => { ANTARA.switchView('trips'); if (window.WFTripsView?.openTrip) window.WFTripsView.openTrip(t.id); } });
        }
      });

      // Search memories
      this.getMemories().forEach(m => {
        if ((m.title && m.title.toLowerCase().includes(q)) || (m.location && m.location.toLowerCase().includes(q))) {
          results.push({ type: 'Memory', id: m.id, title: m.title, subtitle: m.location, image: m.coverImage, action: () => ANTARA.switchView('journal') });
        }
      });

      // Search packing checklist items
      (this.getChecklist() || []).forEach(item => {
        if (item.name && item.name.toLowerCase().includes(q)) {
          results.push({
            type: 'Checklist',
            id: item.id,
            title: item.name,
            subtitle: `${item.category} · ${item.checked ? 'Packed' : 'Pending'}`,
            icon: '🎒',
            action: () => ANTARA.switchView('checklist')
          });
        }
      });

      return results.slice(0, 15);
    },

    // DATA PROVENANCE
    getProvenanceForDest(destId) {
      const dest = this.getDestination(destId);
      if (!dest) return null;
      return {
        sources: dest.sources || [],
        confidenceScore: dest.confidenceScore || 'Unknown',
        lastUpdated: dest.sources && dest.sources.length > 0 ? dest.sources[0].lastVerified : null
      };
    }
  };

  // Initialize store on load
  window.wayfarerStore.load();

})();
