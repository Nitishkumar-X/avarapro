/* WAYFARER Initial Sample Data System */

window.INITIAL_DATA = {
  profile: {
    name: "Nitish Sharma",
    handle: "@wayfarer_explorer",
    homeLocation: "Bengaluru, India",
    travelStyle: ["Nature", "High Altitude", "Road Trips", "Photography", "Slow Travel"],
    bio: "Seeker of quiet cabins, untouched mountain passes, and sunrise trails.",
    avatar: "NATURE/denys-kostyuchenko-FQjUaIMQF3Q-unsplash.jpg",
    budgetPreference: "Comfortable",
    preferredDuration: "5-10 Days"
  },

  categories: [
    { id: "cat_mountains", name: "Mountains", icon: "🏔️", count: 14, cover: "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg" },
    { id: "cat_lakes", name: "Lakes", icon: "🏞️", count: 8, cover: "NATURE/amy-w-IPFrMULxHjE-unsplash.jpg" },
    { id: "cat_forests", name: "Forests", icon: "🌲", count: 11, cover: "NATURE/christoph-von-gellhorn-kjA82leKmJc-unsplash.jpg" },
    { id: "cat_waterfalls", name: "Waterfalls", icon: "🌊", count: 6, cover: "NATURE/dez-hester-dezhester-mi6IWXb57rE-unsplash.jpg" },
    { id: "cat_beaches", name: "Beaches", icon: "🏖️", count: 9, cover: "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg" },
    { id: "cat_roadtrips", name: "Road Trips", icon: "🛣️", count: 12, cover: "NATURE/marcin-nowak-iXqTqC-f6jI-unsplash.jpg" },
    { id: "cat_nationalparks", name: "National Parks", icon: "🏕️", count: 7, cover: "NATURE/samson-ZGjbiukp_-A-unsplash.jpg" },
    { id: "cat_deserts", name: "Deserts", icon: "🏜️", count: 4, cover: "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg" }
  ],

  destinations: [
    {
      id: "dest_spiti",
      name: "Spiti Valley",
      country: "India",
      region: "Himachal Pradesh",
      city: "Kaza",
      category: "Road Trips",
      image: "NATURE/119632.jpg",
      description: "Cold desert mountain valley high in the Himalayas, famous for ancient monasteries and winding high-altitude passes.",
      whyVisit: "To experience ultimate silence at Key Monastery and drive through the high Passes.",
      budget: 35000,
      duration: 8,
      season: "May – October",
      priority: "High",
      status: "Booked", // Dreaming | Researching | Planning | Booked | Visited
      companions: ["Solo", "Friends"],
      rating: 4.9,
      coordinates: [32.2461, 78.0349],
      isFavorite: true,
      notes: "Acclimatize in Manali first. Ensure BSNL SIM or satellite phone."
    },
    {
      id: "dest_ladakh",
      name: "Ladakh & Zanskar",
      country: "India",
      region: "Ladakh",
      city: "Leh",
      category: "Mountains",
      image: "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
      description: "The land of high passes, crystal azure tarns, and dramatic snow-capped granite peaks.",
      whyVisit: "Camp under the Milky Way at Pangong Tso and cross Khardung La.",
      budget: 45000,
      duration: 9,
      season: "June – September",
      priority: "High",
      status: "Planning",
      companions: ["Friends"],
      rating: 5.0,
      coordinates: [34.1526, 77.5771],
      isFavorite: true,
      notes: "Keep Diamox ready for high altitude sickness. Oxygen cylinders recommended for Nubra."
    },
    {
      id: "dest_kashmir",
      name: "Kashmir Great Lakes",
      country: "India",
      region: "Jammu & Kashmir",
      city: "Srinagar",
      category: "Lakes",
      image: "NATURE/florian-k-r1RjYmC6frI-unsplash.jpg",
      description: "Seven pristine alpine lakes nestled among high mountain passes and emerald meadows.",
      whyVisit: "Walk through carpets of alpine wildflowers and mirror lakes.",
      budget: 28000,
      duration: 7,
      season: "July – August",
      priority: "High",
      status: "Visited",
      companions: ["Group"],
      rating: 4.95,
      coordinates: [34.0837, 74.7973],
      isFavorite: true,
      notes: "Completed in August 2025. Unforgettable mirror reflections at Vishansar."
    },
    {
      id: "dest_meghalaya",
      name: "Meghalaya & Dawki",
      country: "India",
      region: "Meghalaya",
      city: "Cherrapunji",
      category: "Waterfalls",
      image: "NATURE/june-o-Tq61bW38kmM-unsplash.jpg",
      description: "Abode of clouds, living root bridges, and glass-like crystal rivers.",
      whyVisit: "Kayak on the transparent Umngot River and hike to Wei Sawdong.",
      budget: 32000,
      duration: 6,
      season: "October – April",
      priority: "Medium",
      status: "Researching",
      companions: ["Solo"],
      rating: 4.8,
      coordinates: [25.2986, 91.7319],
      isFavorite: false,
      notes: "Best to rent a scooty in Shillong for rural village exploration."
    },
    {
      id: "dest_goa",
      name: "South Goa Coastal Drift",
      country: "India",
      region: "Goa",
      city: "Palolem",
      category: "Beaches",
      image: "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      description: "Tranquil palm-fringed coves, calm tides, and golden hour sunsets.",
      whyVisit: "Slow coastal living away from crowded beaches.",
      budget: 20000,
      duration: 5,
      season: "November – February",
      priority: "Medium",
      status: "Visited",
      companions: ["Partner"],
      rating: 4.7,
      coordinates: [15.0100, 74.0231],
      isFavorite: true,
      notes: "Stayed at Agonda wooden huts. Amazing quiet mornings."
    },
    {
      id: "dest_kerala",
      name: "Silent Valley & Wayanad",
      country: "India",
      region: "Kerala",
      city: "Wayanad",
      category: "Forests",
      image: "NATURE/christoph-von-gellhorn-kjA82leKmJc-unsplash.jpg",
      description: "Ancient evergreen rainforests, spice plantations, and misty bamboo trails.",
      whyVisit: "Deep forest solitude and elephant safari.",
      budget: 25000,
      duration: 6,
      season: "September – March",
      priority: "Medium",
      status: "Dreaming",
      companions: ["Solo"],
      rating: 4.6,
      coordinates: [11.6854, 76.1320],
      isFavorite: false,
      notes: "Check treehouse stays in Vythiri."
    },
    {
      id: "dest_rajasthan",
      name: "Jaisalmer Thar Desert",
      country: "India",
      region: "Rajasthan",
      city: "Jaisalmer",
      category: "Deserts",
      image: "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
      description: "Golden sand dunes, star-filled night skies, and ancient fortresses.",
      whyVisit: "Sunset camel safari and night stargazing.",
      budget: 22000,
      duration: 4,
      season: "October – March",
      priority: "Low",
      status: "Dreaming",
      companions: ["Friends"],
      rating: 4.5,
      coordinates: [26.9157, 70.9083],
      isFavorite: false,
      notes: "Combine with Jodhpur blue city."
    }
  ],

  trips: [
    {
      id: "trip_spiti_2026",
      destinationId: "dest_spiti",
      title: "Spiti Valley High Pass Overland",
      destinationName: "Spiti Valley",
      startDate: "2026-09-18",
      endDate: "2026-09-26",
      status: "Upcoming", // Upcoming | Active | Completed | Cancelled
      coverImage: "NATURE/119632.jpg",
      companions: ["Rahul", "Ananya"],
      type: "Road Trip",
      budget: {
        estimated: 35000,
        actual: 24500,
        items: [
          { category: "Transportation", name: "4x4 Vehicle Rental & Fuel", amount: 16000 },
          { category: "Accommodation", name: "Homestays & Mud Huts", amount: 5500 },
          { category: "Food", name: "Local Meals & Chai", amount: 2000 },
          { category: "Emergency", name: "Buffer & Fuel Cans", amount: 1000 }
        ]
      },
      readiness: {
        documents: true,
        transport: true,
        hotel: true,
        packingPct: 75,
        itineraryPct: 80
      },
      itinerary: [
        { day: 1, time: "06:00", title: "Departure from Manali", location: "Manali -> Atal Tunnel", note: "Early start to beat traffic at Solang", status: "completed" },
        { day: 1, time: "14:00", title: "Cross Kunzum Pass (4,551m)", location: "Kunzum Stupa", note: "Offer prayer flags at the stupa", status: "completed" },
        { day: 1, time: "18:30", title: "Arrival in Kaza", location: "Kaza Village", note: "Check into homestay and rest for altitude", status: "pending" },
        { day: 2, time: "09:00", title: "Key Monastery Visit", location: "Key Gompa", note: "Meet monks and drink butter tea", status: "pending" },
        { day: 2, time: "14:00", title: "Hikkim & Komic", location: "World's Highest Post Office", note: "Send postcards to family", status: "pending" },
        { day: 3, time: "07:30", title: "Chandratal Lake Trek", location: "Chandratal Camp", note: "Night stargazing by Moon Lake", status: "pending" }
      ]
    },
    {
      id: "trip_kashmir_2025",
      destinationId: "dest_kashmir",
      title: "Kashmir Great Lakes Wilderness",
      destinationName: "Kashmir Great Lakes",
      startDate: "2025-08-10",
      endDate: "2025-08-17",
      status: "Completed",
      coverImage: "NATURE/florian-k-r1RjYmC6frI-unsplash.jpg",
      companions: ["Solo"],
      type: "Mountain",
      budget: {
        estimated: 30000,
        actual: 28200,
        items: [
          { category: "Transportation", name: "Flights & Taxi", amount: 14000 },
          { category: "Accommodation", name: "Trekking Camps", amount: 9000 },
          { category: "Food", name: "Trek Rations", amount: 3200 },
          { category: "Gear", name: "Porter & Sleeping Bag", amount: 2000 }
        ]
      },
      readiness: {
        documents: true,
        transport: true,
        hotel: true,
        packingPct: 100,
        itineraryPct: 100
      },
      itinerary: [
        { day: 1, time: "09:00", title: "Srinagar Arrival", location: "Dal Lake", note: "Shikara ride at sunset", status: "completed" },
        { day: 2, time: "07:00", title: "Sonamarg to Nichnai", location: "Nichnai Pass", note: "Ascend through pine forest", status: "completed" },
        { day: 3, time: "11:00", title: "Vishansar Lake Base", location: "Vishansar Tarn", note: "Pristine mirror reflections", status: "completed" }
      ]
    },
    {
      id: "trip_goa_2025",
      destinationId: "dest_goa",
      title: "South Goa Quiet Palms Retreat",
      destinationName: "South Goa",
      startDate: "2025-02-14",
      endDate: "2025-02-19",
      status: "Completed",
      coverImage: "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      companions: ["Partner"],
      type: "Beach",
      budget: {
        estimated: 22000,
        actual: 19800,
        items: [
          { category: "Transportation", name: "Scooter & Fuel", amount: 2500 },
          { category: "Accommodation", name: "Beach Hut", amount: 11000 },
          { category: "Food", name: "Seafood & Cafes", amount: 6300 }
        ]
      },
      readiness: {
        documents: true,
        transport: true,
        hotel: true,
        packingPct: 100,
        itineraryPct: 100
      },
      itinerary: [
        { day: 1, time: "16:00", title: "Palolem Sunset Drift", location: "Palolem Cove", note: "Fresh coconut water by the waves", status: "completed" },
        { day: 2, time: "08:00", title: "Butterfly Beach Kayak", location: "Butterfly Island", note: "Spotted dolphins along the cliffs", status: "completed" }
      ]
    }
  ],

  checklists: {
    trip_spiti_2026: [
      { id: "ck_1", category: "DOCUMENTS", text: "Passport & Govt ID Card", checked: true },
      { id: "ck_2", category: "DOCUMENTS", text: "Inner Line Permits / Printed Copies", checked: true },
      { id: "ck_3", category: "DOCUMENTS", text: "Vehicle Registration & Insurance", checked: true },
      { id: "ck_4", category: "MONEY", text: "Cash (No ATMs beyond Kaza)", checked: true },
      { id: "ck_5", category: "CLOTHING", text: "Thermal Innerwear (3 sets)", checked: true },
      { id: "ck_6", category: "CLOTHING", text: "Heavy Down Jacket (-10°C rated)", checked: true },
      { id: "ck_7", category: "CLOTHING", text: "Waterproof Trekking Shoes", checked: true },
      { id: "ck_8", category: "TOILETRIES", text: "High SPF Sunscreen (SPF 50+)", checked: true },
      { id: "ck_9", category: "TOILETRIES", text: "Lip Balm & Cold Cream", checked: true },
      { id: "ck_10", category: "ELECTRONICS", text: "Power Bank (20000mAh x 2)", checked: true },
      { id: "ck_11", category: "ELECTRONICS", text: "Camera & Extra SD Cards", checked: false },
      { id: "ck_12", category: "HEALTH", text: "Altitude Sickness Medicine (Diamox)", checked: true },
      { id: "ck_13", category: "HEALTH", text: "First Aid & O2 Meter", checked: true },
      { id: "ck_14", category: "TRAVEL GEAR", text: "Headlamp with Spare Batteries", checked: false },
      { id: "ck_15", category: "TRAVEL GEAR", text: "Insulated Water Flask", checked: true },
      { id: "ck_16", category: "TRAVEL GEAR", text: "Fuel Canister & Tow Rope", checked: false }
    ]
  },

  memories: [
    {
      id: "mem_1",
      tripId: "trip_kashmir_2025",
      title: "The Morning Everything Went Quiet",
      location: "Vishansar Lake, Kashmir",
      date: "2025-08-14",
      coverImage: "NATURE/florian-k-r1RjYmC6frI-unsplash.jpg",
      gallery: [
        "NATURE/florian-k-r1RjYmC6frI-unsplash.jpg",
        "NATURE/camille-brodard-AVi4lkHl5L4-unsplash.jpg",
        "NATURE/denys-kostyuchenko-FQjUaIMQF3Q-unsplash.jpg"
      ],
      story: "We unzipped the tent at 5:30 AM to find Vishansar Lake still as polished obsidian. Not a single breath of wind disturbed the reflection of Nanda Peak. We brewed black tea over portable stove and sat in total silence for two hours.",
      mood: "Peaceful",
      rating: 5.0,
      tags: ["solitude", "lake", "mountains", "sunrise"]
    },
    {
      id: "mem_2",
      tripId: "trip_goa_2025",
      title: "Golden Tide at Agonda Cove",
      location: "Agonda Beach, South Goa",
      date: "2025-02-16",
      coverImage: "NATURE/pepe-nero-JsSM2T9iPRU-unsplash.jpg",
      gallery: [
        "NATURE/pepe-nero-JsSM2T9iPRU-unsplash.jpg",
        "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg"
      ],
      story: "As the sun dipped behind the cliff, the tide rolled in like liquid gold. Fishermen were pulling their wooden catamarans onto the dry sand while sea hawks hovered above.",
      mood: "Inspired",
      rating: 4.8,
      tags: ["sunset", "beach", "calm"]
    }
  ],

  passport: {
    stamps: [
      { id: "st_1", title: "HIMALAYAS", subtitle: "High Altitude Pass", date: "AUG 2025", icon: "🏔️", code: "IND-HIM-8848" },
      { id: "st_2", title: "KASHMIR", subtitle: "Great Lakes Trail", date: "AUG 2025", icon: "🏞️", code: "IND-JK-4412" },
      { id: "st_3", title: "GOA COAST", subtitle: "Arabian Sea Drift", date: "FEB 2025", icon: "🌊", code: "IND-GA-0091" },
      { id: "st_4", title: "HIMACHAL", subtitle: "Pine Ridge Pass", date: "OCT 2024", icon: "🌲", code: "IND-HP-3321" },
      { id: "st_5", title: "MEGHALAYA", subtitle: "Cloud Plateau", date: "NOV 2024", icon: "🍃", code: "IND-ML-7720" }
    ],
    achievements: [
      { id: "ach_1", title: "First Adventure", desc: "Completed your first logged trip.", icon: "🧭", unlocked: true, date: "Oct 2024" },
      { id: "ach_2", title: "Mountain Soul", desc: "Visited 5+ mountain destinations.", icon: "🏔️", unlocked: true, date: "Aug 2025" },
      { id: "ach_3", title: "Road Warrior", desc: "Completed a 500+ km overland trip.", icon: "🛣️", unlocked: true, date: "Sep 2025" },
      { id: "ach_4", title: "Explorer", desc: "Added 10+ places to your Bucket List.", icon: "📍", unlocked: true, date: "Feb 2026" },
      { id: "ach_5", title: "Nature Seeker", desc: "Logged 50+ total days of travel.", icon: "🌿", unlocked: false, progress: "34 / 50 Days" },
      { id: "ach_6", title: "High Altitude Pioneer", desc: "Crossed a pass above 4,000 meters.", icon: "🦅", unlocked: true, date: "Aug 2025" }
    ]
  }
};
