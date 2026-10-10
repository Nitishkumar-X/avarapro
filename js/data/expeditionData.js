/* ==========================================================================
   NATUREX · ANTARA — Expedition & Deep Travel Intelligence Layer
   Curated Multi-Day Routes, Verified Expedition Guides, Sustainability Metrics,
   Interactive Vibe Matcher Personas, and Explorer Field Scrapbook
   ========================================================================== */

window.EXPEDITION_DATA = {
  /* ------------------------------------------------------------------ */
  /* 1. CURATED MULTI-DAY EXPEDITION TRAILS                             */
  /* ------------------------------------------------------------------ */
  trails: [
    {
      id: "trail_eastern_ghats",
      title: "The Eastern Ghats Cloud Trail",
      subtitle: "5 Days · 620 km · High Altitude Wilderness",
      heroImg: "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
      difficulty: "Challenging",
      maxElevation: "1,672m (Deomali Peak)",
      durationDays: 5,
      totalDistanceKm: 620,
      season: "October to February",
      tags: ["High Altitude", "Tribal Culture", "Waterfalls", "Stargazing"],
      summary: "Odisha's premier mountain expedition scaling the highest peak Deomali, descending into the sacred subterranean Gupteswar caves, and swimming beneath the roaring Duduma waterfalls.",
      waypoints: [
        { name: "Bhubaneswar", elevation: 45, day: 1, desc: "Basecamp assembly and heritage briefing" },
        { name: "Koraput Highlands", elevation: 870, day: 2, desc: "Tribal haat market and Kolab reservoir camp" },
        { name: "Deomali Summit Ridge", elevation: 1672, day: 3, desc: "Cloud-walk trek, sunset over 360° Eastern Ghats" },
        { name: "Duduma Waterfalls", elevation: 540, day: 4, desc: "Machkund river canyon & rainforest descent" },
        { name: "Gupteswar Caves", elevation: 480, day: 5, desc: "Ancient limestone caverns & Kolab riverbanks" }
      ],
      elevationProfile: [45, 240, 870, 1200, 1672, 1100, 540, 480],
      highlights: ["360° Panoramic Cloud Inversions", "Indigenous Bonda & Gadaba Culture", "Midnight Astrophotography Campsite"]
    },
    {
      id: "trail_black_tiger",
      title: "The Black Tiger Biosphere Traverse",
      subtitle: "4 Days · 460 km · UNESCO Biosphere Reserve",
      heroImg: "NATURE/christoph-von-gellhorn-kjA82leKmJc-unsplash.jpg",
      difficulty: "Moderate",
      maxElevation: "1,158m (Khairiburu)",
      durationDays: 4,
      totalDistanceKm: 460,
      season: "November to April",
      tags: ["Wild Tigers", "Giant Waterfalls", "Sal Canopies", "UNESCO"],
      summary: "The only sanctuary on earth home to the legendary melanistic black tigers. Traverse 2,750 km² of dense pristine sal forest and marvel at Barehipani's 399m two-tiered waterfall.",
      waypoints: [
        { name: "Baripada Gate", elevation: 36, day: 1, desc: "Permits and ancient Mayurbhanj Royal briefing" },
        { name: "Chahala Meadow", elevation: 620, day: 2, desc: "Salt lick elephant & sambar watching post" },
        { name: "Barehipani Fall", elevation: 980, day: 3, desc: "India's second-highest fall crashing 399m into gorge" },
        { name: "Joranda & Gurguria", elevation: 750, day: 4, desc: "Misty pine trails and eco-camp orchids" }
      ],
      elevationProfile: [36, 320, 620, 850, 980, 820, 750],
      highlights: ["Melanistic Black Tiger Territory", "Orchidarium with 92 rare wild species", "Elephant herd corridors"]
    },
    {
      id: "trail_kashmir_odisha",
      title: "The High Pine & Coffee Valley Circuit",
      subtitle: "3 Days · 340 km · Kandhamal Highlands",
      heroImg: "NATURE/b-k-HAl6CKxM3xU-unsplash.jpg",
      difficulty: "Easy - Moderate",
      maxElevation: "915m (Daringbadi)",
      durationDays: 3,
      totalDistanceKm: 340,
      season: "November to January (Frost Season)",
      tags: ["Pine Meadows", "Coffee Estates", "Waterfalls", "Cool Climate"],
      summary: "Known as the 'Kashmir of Odisha', where morning frost sparkles on pine needles, organic coffee aromas fill the misty mountain air, and secluded jungle waterfalls await.",
      waypoints: [
        { name: "Bhubaneswar", elevation: 45, day: 1, desc: "Ghats road trip via Nayagarh & Dasapalla" },
        { name: "Daringbadi Valley", elevation: 915, day: 1, desc: "Silent pine forest walks & organic coffee tasting" },
        { name: "Midubandha Falls", elevation: 760, day: 2, desc: "Hidden forest plunge pool & butterfly haven" },
        { name: "Belghar Sanctuary", elevation: 840, day: 3, desc: "Kutia Kondh tribal settlements and wild hornbills" }
      ],
      elevationProfile: [45, 180, 520, 915, 760, 840, 45],
      highlights: ["Sub-zero morning dew in winter", "Certified organic black pepper and coffee plantations", "Towering Himalayan-style pine canopies"]
    },
    {
      id: "trail_mangrove_estuary",
      title: "The Primeval Mangrove & Dolphin Sea Safari",
      subtitle: "4 Days · 390 km · Ramsar Wetlands & Ocean Rookeries",
      heroImg: "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      difficulty: "Easy",
      maxElevation: "15m (Coastal Estuary)",
      durationDays: 4,
      totalDistanceKm: 390,
      season: "October to March",
      tags: ["Irrawaddy Dolphins", "Giant Estuarine Crocs", "Olive Ridley Turtles", "Kayaking"],
      summary: "From Asia's largest brackish lagoon Chilika to the impenetrable tidal mangroves of Bhitarkanika, witness 1.2 million migratory birds, jumping Irrawaddy dolphins, and world record 23-foot saltwater crocodiles.",
      waypoints: [
        { name: "Satapada (Chilika)", elevation: 2, day: 1, desc: "Wooden catamaran dolphin cruises & sea mouth sandbars" },
        { name: "Mangalajodi Marsh", elevation: 4, day: 2, desc: "Silent hand-poled skiff birding among purple swamphens" },
        { name: "Dangmal (Bhitarkanika)", elevation: 5, day: 3, desc: "Creek boat safari through mangrove canopy & crocodile nursery" },
        { name: "Gahirmatha Marine Sanctuary", elevation: 1, day: 4, desc: "World's largest Olive Ridley sea turtle nesting beach" }
      ],
      elevationProfile: [2, 4, 3, 5, 2, 1],
      highlights: ["Rare Irrawaddy dolphin sightings", "1,600+ Wild Saltwater Crocodiles", "1.2 Million Migratory Siberian Birds"]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* 2. VERIFIED WILDERNESS GUIDES DIRECTORY                            */
  /* ------------------------------------------------------------------ */
  guides: [
    {
      id: "guide_subhashree",
      name: "Subhashree Mohanty",
      role: "Chief Wildlife Naturalist & Birding Master",
      region: "Simlipal & Chilika Ramsar Lagoon",
      avatar: "NATURE/sheila-c-hqLq0Qmu4d8-unsplash.jpg",
      rating: 4.98,
      expeditionsCount: 142,
      languages: ["Odia", "English", "Hindi"],
      badge: "WII Certified · Master Naturalist",
      bio: "12 years tracking melanistic tigers in Mayurbhanj and leading silent dawn birding skiffs across Mangalajodi marshes.",
      specialties: ["Bird Song Identification", "Wildlife Photography", "Eco-Camp Wilderness Survival"]
    },
    {
      id: "guide_bikram",
      name: "Bikram Keshari Ray",
      role: "High-Altitude Trek Leader & Mountaineer",
      region: "Deomali Peak & Eastern Ghats Ridge",
      avatar: "NATURE/sean-pollock-PhYq704ffdA-unsplash.jpg",
      rating: 4.96,
      expeditionsCount: 118,
      languages: ["Odia", "English", "Desia"],
      badge: "HMI Darjeeling Certified · Alpine First Aid",
      bio: "Pioneered 4 new ridgeline trails across Koraput highlands. Led over 100 successful high-altitude summits with zero safety incidents.",
      specialties: ["Alpine Navigation", "Night Ridge Camping", "Highland Weather Reading"]
    },
    {
      id: "guide_ananya",
      name: "Dr. Ananya Senapati",
      role: "Kalinga Temple Historian & Epigraphist",
      region: "Konark, Puri, Bhubaneswar & Ratnagiri",
      avatar: "NATURE/leah-berman-FfqubkF5NLc-unsplash.jpg",
      rating: 5.0,
      expeditionsCount: 184,
      languages: ["Odia", "English", "Hindi", "Sanskrit"],
      badge: "ASI Accredited Scholar · Ph.D Kalinga Architecture",
      bio: "Author and scholar unlocking the celestial alignments and tantric sculptural symbolism of 1,200-year-old Kalinga temple complexes.",
      specialties: ["Sacred Geometry", "Temple Inscriptions", "Living Folk Heritage"]
    },
    {
      id: "guide_debasish",
      name: "Debasish Nayak",
      role: "Estuary Marine Biologist & Coastal Guide",
      region: "Bhitarkanika Mangroves & Gahirmatha",
      avatar: "NATURE/cedric-letsch-UZVlSjrIJ3o-unsplash.jpg",
      rating: 4.93,
      expeditionsCount: 94,
      languages: ["Odia", "English", "Bengali"],
      badge: "WWF Marine Guardian · Licensed Boat Captain",
      bio: "Born in the coastal village of Rajnagar. Dedicated his life to preserving Olive Ridley turtle hatchlings and mangrove creek ecology.",
      specialties: ["Tidal Creek Navigation", "Reptile Behavior", "Night Turtle Patrol"]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* 3. SUSTAINABILITY & CONSERVATION IMPACT METRICS                     */
  /* ------------------------------------------------------------------ */
  sustainability: {
    stats: [
      { label: "Community Eco-Cottages", value: "100%", sub: "100% locally operated by tribal forest communities" },
      { label: "Indigenous Artisan Uplift", value: "+310%", sub: "Direct household revenue growth for Dhokra & Pattachitra artisans" },
      { label: "Single-Use Plastics", value: "0 kg", sub: "Strict zero-single-use-plastic mandate across all 47 nature camps" },
      { label: "Protected Turtle Coastline", value: "485 km", sub: "Protected Olive Ridley breeding and nesting marine sanctuary" }
    ],
    initiatives: [
      {
        title: "Community Forest Protection Councils (VSS)",
        desc: "Over 85% of camping fees flow directly into village schools, clean solar microgrids, and local wildlife patrolling.",
        tag: "Social Equity"
      },
      {
        title: "Silent Electric & Hand-Poled Skiffs",
        desc: "Strict motor bans in critical bird nesting channels to protect 1.2M migratory birds from noise and fuel runoff.",
        tag: "Wetland Ecology"
      },
      {
        title: "Leave No Trace Digital Certification",
        desc: "Every NatureX traveler receives a digital Leave No Trace passport stamp and pledges to leave trails pristine.",
        tag: "Responsible Travel"
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* 4. EXPEDITION VIBE MATCHER QUIZ PERSONAS                           */
  /* ------------------------------------------------------------------ */
  quiz: {
    questions: [
      {
        id: "terrain",
        title: "What landscape calls your soul?",
        subtitle: "Select the terrain that recharges your spirit",
        options: [
          { id: "mountain", label: "Misty Mountain Peaks", icon: "🏔️", desc: "Cloud inversions, crisp alpine wind, high summits" },
          { id: "coastal", label: "Golden Azure Coastlines", icon: "🌊", desc: "Endless surf, sea breeze, sunset catamaran sails" },
          { id: "forest", label: "Deep Tiger Jungles", icon: "🐅", desc: "Dense sal canopies, waterfall roars, raw wilderness" },
          { id: "heritage", label: "Ancient Sacred Stone", icon: "🏛️", desc: "1,000-year-old temples, carved wheels, sacred hymns" }
        ]
      },
      {
        id: "pace",
        title: "What is your expedition pace?",
        subtitle: "How do you prefer to experience the journey?",
        options: [
          { id: "adrenaline", label: "High-Adrenaline Explorer", icon: "⚡", desc: "Steep summit scrambles, rapids, wilderness camping" },
          { id: "serene", label: "Soulful Serenity & Wellness", icon: "🧘", desc: "Slow sunrise walks, forest meditation, quiet coffee" },
          { id: "culture", label: "Cultural Archaeologist", icon: "🏺", desc: "Living folk arts, tribal markets, ancient legends" },
          { id: "family", label: "Cozy Family Eco-Escape", icon: "🏕️", desc: "Safe luxury wooden cottages, gentle trails, starry skies" }
        ]
      },
      {
        id: "season",
        title: "When do you plan to embark?",
        subtitle: "Every season reveals a different soul of nature",
        options: [
          { id: "winter", label: "Golden Winter (Oct – Feb)", icon: "❄️", desc: "Crisp mornings, clear starlit skies, dolphin season" },
          { id: "monsoon", label: "Wild Monsoon (Jun – Sep)", icon: "🌧️", desc: "Gushing waterfalls, emerald rainforests, misty valleys" },
          { id: "spring", label: "Warm Spring & Forest Bloom (Mar – May)", icon: "🌸", desc: "Flame of the forest in red bloom, beach sunrises" }
        ]
      }
    ],
    matches: {
      "mountain_adrenaline": {
        name: "Deomali Peak & Eastern Ghats Ridge",
        destId: "od_deomali",
        matchScore: "99%",
        badge: "Highest Summit · 1,672m",
        why: "Ideal for your hunger for high elevation and rugged ridgelines. Stand above the cloud sea overlooking 360° virgin valley vistas.",
        bestMonth: "November – February",
        estBudget: "₹3,500 / day",
        image: "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg"
      },
      "mountain_serene": {
        name: "Daringbadi Pine Valley & Coffee Highlands",
        destId: "od_daringbadi",
        matchScore: "97%",
        badge: "Kashmir of Odisha · 915m",
        why: "Whispering pine canopies, organic coffee aroma, and morning frost. Perfect for unhurried contemplative peace.",
        bestMonth: "October – March",
        estBudget: "₹2,800 / day",
        image: "NATURE/b-k-HAl6CKxM3xU-unsplash.jpg"
      },
      "forest_adrenaline": {
        name: "Simlipal Tiger Reserve & Barehipani Falls",
        destId: "od_simlipal",
        matchScore: "98%",
        badge: "UNESCO Biosphere · Black Tigers",
        why: "Dense sal forest canopy, deep river crossings, and the thundering 399m Barehipani waterfall.",
        bestMonth: "November – April",
        estBudget: "₹4,200 / day",
        image: "NATURE/christoph-von-gellhorn-kjA82leKmJc-unsplash.jpg"
      },
      "forest_serene": {
        name: "Satkosia Tiger Gorge & Mahanadi River",
        destId: "od_satkosia",
        matchScore: "96%",
        badge: "Deep River Canyon · Eco-Camp",
        why: "Drift in wooden boats through the breathtaking 22-km gorge carved by the Mahanadi river, listening to calling hornbills.",
        bestMonth: "October – March",
        estBudget: "₹3,200 / day",
        image: "NATURE/camille-brodard-AVi4lkHl5L4-unsplash.jpg"
      },
      "coastal_adrenaline": {
        name: "Bhitarkanika Tidal Mangroves & Croc Creeks",
        destId: "od_bhitarkanika",
        matchScore: "95%",
        badge: "Ramsar Delta · 23ft Saltwater Crocs",
        why: "Kayaking through twisted mangrove roots and exploring isolated coastal islands where giant reptiles rule.",
        bestMonth: "October – March",
        estBudget: "₹3,600 / day",
        image: "NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg"
      },
      "coastal_serene": {
        name: "Chilika Lagoon (Satapada & Mangalajodi)",
        destId: "od_chilika_satapada",
        matchScore: "97%",
        badge: "Ramsar Wetland · Irrawaddy Dolphins",
        why: "Witness jumping Irrawaddy dolphins and silent sunrise boat rides through water hyacinth channels with 1.2M birds.",
        bestMonth: "November – January",
        estBudget: "₹2,500 / day",
        image: "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg"
      },
      "heritage_culture": {
        name: "Konark Sun Temple & Raghurajpur Craft Village",
        destId: "od_konark",
        matchScore: "99%",
        badge: "UNESCO World Heritage · 13th C.",
        why: "A stone universe of celestial chariots and living master artisans painting thousand-year-old Pattachitra scrolls.",
        bestMonth: "October – March",
        estBudget: "₹2,200 / day",
        image: "NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg"
      },
      "default": {
        name: "Deomali Peak & Koraput Highlands",
        destId: "od_deomali",
        matchScore: "96%",
        badge: "Cloud Peak · Eastern Ghats",
        why: "The crown jewel of Odisha's mountain wilderness offering high summits, rich indigenous heritage, and starry skies.",
        bestMonth: "October – February",
        estBudget: "₹3,200 / day",
        image: "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg"
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* 5. POLAROID FIELD MEMORIES & SCRAPBOOK                             */
  /* ------------------------------------------------------------------ */
  scrapbook: [
    {
      id: "mem_01",
      title: "Midnight Milky Way over Deomali Ridge",
      author: "Aarav & Meera · Bangalore",
      date: "Nov 2026",
      rot: -3.5,
      img: "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
      note: "Pitching our tent right below the 1,672m summit marker. Zero light pollution — the Milky Way arch was so clear we could see the galactic core with naked eyes!",
      likes: 89,
      tags: ["Astrophotography", "Deomali", "SummitCamp"]
    },
    {
      id: "mem_02",
      title: "Catamaran Dolphin Dance at Satapada",
      author: "Pooja Das · Bhubaneswar",
      date: "Dec 2026",
      rot: 2.8,
      img: "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      note: "Three Irrawaddy dolphins surfaced literally alongside our wooden boat. Their curved fins broke the sunrise mist like poetry.",
      likes: 124,
      tags: ["Chilika", "Dolphins", "SunriseMagic"]
    },
    {
      id: "mem_03",
      title: "Rainbow Mist at Barehipani 399m Fall",
      author: "Tenzin & Kabir · Delhi",
      date: "Jan 2027",
      rot: -2.0,
      img: "NATURE/christoph-von-gellhorn-kjA82leKmJc-unsplash.jpg",
      note: "Standing at the viewpoint cliff. The sheer volume of water falling two tiers created a permanent circular rainbow in the morning sun.",
      likes: 112,
      tags: ["Simlipal", "Waterfalls", "Wilderness"]
    },
    {
      id: "mem_04",
      title: "Steaming Coffee in Daringbadi Pine Frost",
      author: "Siddharth Rao · Hyderabad",
      date: "Dec 2026",
      rot: 4.2,
      img: "NATURE/b-k-HAl6CKxM3xU-unsplash.jpg",
      note: "Temperature dropped to 4°C at night. Woke up to white frost on pine needles, drinking fresh roasted Kandhamal tribal coffee. Pure bliss.",
      likes: 95,
      tags: ["Daringbadi", "FrostMorning", "PineValley"]
    }
  ]
};
