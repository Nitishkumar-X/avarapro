/* ==========================================================================
   WAYFARER V2 — Initial Core Seed Data
   ========================================================================== */

window.INITIAL_DATA = {
  profile: {
    name: "Nitin Sharma",
    handle: "@wayfarer_expeditions",
    bio: "High altitude wilderness photographer & mountain trail enthusiast.",
    homeLocation: "Bhubaneswar, Odisha, India",
    travelStyle: ["Nature", "Mountains", "High Altitude Desert", "Photography"],
    avatar: "../NATURE/119632.jpg",
    joinedDate: "October 2024"
  },

  categories: [
    { id: "cat_mountains", name: "Mountains", count: 12, image: "../NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg" },
    { id: "cat_lakes", name: "Lakes", count: 8, image: "../NATURE/florian-k-r1RjYmC6frI-unsplash.jpg" },
    { id: "cat_forests", name: "Forests", count: 9, image: "../NATURE/christoph-von-gellhorn-kjA82leKmJc-unsplash.jpg" },
    { id: "cat_waterfalls", name: "Waterfalls", count: 7, image: "../NATURE/june-o-Tq61bW38kmM-unsplash.jpg" },
    { id: "cat_beaches", name: "Beaches", count: 6, image: "../NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg" },
    { id: "cat_roadtrips", name: "Road Trips", count: 10, image: "../NATURE/119632.jpg" }
  ],

  destinations: [
    {
      id: "dest_spiti",
      name: "Spiti Valley",
      country: "India",
      state: "Himachal Pradesh",
      district: "Lahaul & Spiti",
      city: "Kaza",
      region: "Himalayas",
      category: "Road Trips",
      image: "../NATURE/119632.jpg",
      rating: 4.9,
      isFavorite: true,
      status: "Planning",
      priority: "High",
      duration: 8,
      budget: 35000,
      season: "May – October",
      description: "Cold desert mountain valley high in the Himalayas, famous for Key Monastery and high passes.",
      whyVisit: "To experience ultimate quietude at 3,800m altitude.",
      estimatedDailyBudget: { budget: 2200, midRange: 4500, luxury: 9500 },
      sources: [{ sourceName: "Incredible India Portal", sourceType: "Tier 1 Official", lastVerified: "2026-08-12" }]
    },
    {
      id: "dest_ladakh",
      name: "Ladakh & Zanskar",
      country: "India",
      state: "Ladakh",
      district: "Leh",
      city: "Leh",
      region: "Himalayas",
      category: "Mountains",
      image: "../NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
      rating: 5.0,
      isFavorite: true,
      status: "Visited",
      priority: "High",
      duration: 9,
      budget: 45000,
      season: "June – September",
      description: "The land of high passes, crystal azure tarns like Pangong Tso, and granite peaks.",
      whyVisit: "Camp under the Milky Way at Pangong Tso (4,225m).",
      estimatedDailyBudget: { budget: 2800, midRange: 5500, luxury: 12000 },
      sources: [{ sourceName: "Ladakh Tourism Board", sourceType: "Tier 1 Official", lastVerified: "2026-08-11" }]
    }
  ],

  trips: [
    {
      id: "trip_spiti_2026",
      destinationId: "dest_spiti",
      title: "Spiti High Altitude Circuit",
      destinationName: "Spiti Valley",
      startDate: "2026-09-10",
      endDate: "2026-09-18",
      status: "Upcoming",
      coverImage: "../NATURE/119632.jpg",
      companions: ["Solo"],
      type: "Road Trips",
      budget: {
        estimated: 35000,
        actual: 0,
        items: [
          { category: "Transportation", name: "Taxi & Fuel", amount: 14000 },
          { category: "Accommodation", name: "Homestays in Kaza", amount: 12000 },
          { category: "Food", name: "Local Meals & Chai", amount: 6000 },
          { category: "Activities", name: "Monastery Permits", amount: 3000 }
        ]
      },
      readiness: {
        documents: true,
        transport: true,
        hotel: true,
        packingPct: 75,
        itineraryPct: 90
      },
      itinerary: [
        { day: 1, time: "08:00", title: "Drive Manali to Kaza via Atal Tunnel & Kunzum Pass", location: "Kunzum Pass (4,551m)", note: "Take altitude medication and cross pass before noon." },
        { day: 2, time: "09:30", title: "Key Monastery & Kibber Village Walk", location: "Key Monastery", note: "Interact with monks and photograph 11th-century murals." },
        { day: 3, time: "07:00", title: "Hikkim (World's Highest Post Office) & Langza Fossil Trail", location: "Hikkim", note: "Mail postcards home from 4,400 meters." }
      ]
    }
  ],

  memories: [
    {
      id: "mem_pangong_1",
      title: "Silent Night at Pangong Tso",
      location: "Pangong Lake, Ladakh",
      date: "August 2025",
      rating: 5.0,
      mood: "Awe-inspired",
      coverImage: "../NATURE/amy-w-IPFrMULxHjE-unsplash.jpg",
      story: "The temperature dropped to -2°C at midnight. Stars reflecting in crystal still water.",
      tags: ["astrophotography", "high-lake", "ladakh"]
    }
  ],

  passport: {
    stamps: [
      { id: "st_1", title: "LADAKH HIGH PASS", subtitle: "Zanskar Expedition", date: "AUG 2025", icon: "🏔️", code: "WAY-8848" },
      { id: "st_2", title: "DAWKI CRYSTAL RIVER", subtitle: "Meghalaya Trail", date: "NOV 2024", icon: "🛶", code: "WAY-1484" }
    ],
    achievements: [
      { id: "ach_1", title: "First Expedition", desc: "Log your first complete trip", icon: "🚀", unlocked: true, date: "2025" },
      { id: "ach_2", title: "High Altitude Pioneer", desc: "Reach altitude above 3,500m", icon: "🏔️", unlocked: true, date: "2025" },
      { id: "ach_4", title: "Horizon Curator", desc: "Save 5+ destinations to Bucket List", icon: "📌", unlocked: true, date: "2026" }
    ]
  }
};
