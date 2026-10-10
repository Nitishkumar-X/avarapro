/* ==========================================================================
   WAYFARER / ANTARA — India Hierarchical Travel Intelligence Dataset
   28 States · 8 UTs · 40+ Premier Pan-India Destinations with Rich Metadata
   ========================================================================== */

window.INDIA_TRAVEL_DATA = {
  country: "India",
  code: "IND",
  officialPortal: "https://www.incredibleindia.org",
  totalStates: 28,
  totalUTs: 8,
  lastVerified: "2026-09-01",
  
  statesAndUTs: [
    { name: "Andhra Pradesh", type: "State", capital: "Amaravati", region: "South", knownFor: "Tirupati, Araku Valley, Belum Caves, Gandikota Fort", officialSource: "AP Tourism (aptourism.gov.in)" },
    { name: "Arunachal Pradesh", type: "State", capital: "Itanagar", region: "Northeast", knownFor: "Tawang Monastery, Ziro Valley, Namdapha National Park", officialSource: "Arunachal Tourism (arunachaltourism.com)" },
    { name: "Assam", type: "State", capital: "Dispur", region: "Northeast", knownFor: "Kaziranga National Park, Majuli Island, Kamakhya Temple", officialSource: "Assam Tourism (tourism.assam.gov.in)" },
    { name: "Bihar", type: "State", capital: "Patna", region: "East", knownFor: "Bodh Gaya (UNESCO), Nalanda Mahavihara (UNESCO), Rajgir", officialSource: "Bihar Tourism (bihartourism.gov.in)" },
    { name: "Chhattisgarh", type: "State", capital: "Raipur", region: "Central", knownFor: "Chitrakote Falls, Kanger Valley National Park, Bastar", officialSource: "Chhattisgarh Tourism (cgtourism.choice.gov.in)" },
    { name: "Goa", type: "State", capital: "Panaji", region: "West", knownFor: "Churches of Goa (UNESCO), Palolem Beach, Dudhsagar Falls", officialSource: "Goa Tourism (goatourism.gov.in)" },
    { name: "Gujarat", type: "State", capital: "Gandhinagar", region: "West", knownFor: "Rann of Kutch, Champaner (UNESCO), Rani ki Vav (UNESCO), Gir National Park", officialSource: "Gujarat Tourism (gujarattourism.com)" },
    { name: "Haryana", type: "State", capital: "Chandigarh", region: "North", knownFor: "Sultanpur National Park, Kurukshetra, Morni Hills", officialSource: "Haryana Tourism (haryanatourism.gov.in)" },
    { name: "Himachal Pradesh", type: "State", capital: "Shimla", region: "North", knownFor: "Spiti Valley, Great Himalayan NP (UNESCO), Manali, Dharamshala", officialSource: "Himachal Tourism (hptdc.in)" },
    { name: "Jharkhand", type: "State", capital: "Ranchi", region: "East", knownFor: "Hundru Falls, Betla National Park, Parasnath Hill", officialSource: "Jharkhand Tourism (tourism.jharkhand.gov.in)" },
    { name: "Karnataka", type: "State", capital: "Bengaluru", region: "South", knownFor: "Hampi (UNESCO), Pattadakal (UNESCO), Coorg, Western Ghats", officialSource: "Karnataka Tourism (karnatakatourism.org)" },
    { name: "Kerala", type: "State", capital: "Thiruvananthapuram", region: "South", knownFor: "Alleppey Backwaters, Munnar Tea Hills, Silent Valley, Varkala", officialSource: "Kerala Tourism (keralatourism.org)" },
    { name: "Madhya Pradesh", type: "State", capital: "Bhopal", region: "Central", knownFor: "Khajuraho (UNESCO), Sanchi Stupa (UNESCO), Bhimbetka (UNESCO), Kanha", officialSource: "MP Tourism (mptourism.com)" },
    { name: "Maharashtra", type: "State", capital: "Mumbai", region: "West", knownFor: "Ajanta & Ellora Caves (UNESCO), Western Ghats, Chhatrapati Shivaji Terminus", officialSource: "Maharashtra Tourism (maharashtratourism.gov.in)" },
    { name: "Manipur", type: "State", capital: "Imphal", region: "Northeast", knownFor: "Loktak Lake (Floating Phumdis), Keibul Lamjao NP, Kangla Fort", officialSource: "Manipur Tourism (manipurtourism.gov.in)" },
    { name: "Meghalaya", type: "State", capital: "Shillong", region: "Northeast", knownFor: "Cherrapunji, Dawki Umngot River, Living Root Bridges", officialSource: "Meghalaya Tourism (meghalayatourism.in)" },
    { name: "Mizoram", type: "State", capital: "Aizawl", region: "Northeast", knownFor: "Phawngpui Blue Mountain, Reiek Peak, Tamdil Lake", officialSource: "Mizoram Tourism (tourism.mizoram.gov.in)" },
    { name: "Nagaland", type: "State", capital: "Kohima", region: "Northeast", knownFor: "Dzukou Valley, Hornbill Festival, Kohima War Cemetery", officialSource: "Nagaland Tourism (tourism.nagaland.gov.in)" },
    { name: "Odisha", type: "State", capital: "Bhubaneswar", region: "East", knownFor: "Konark Sun Temple (UNESCO), Chilika Lake, Puri Jagannath Temple", officialSource: "Odisha Tourism (odishatourism.gov.in)" },
    { name: "Punjab", type: "State", capital: "Chandigarh", region: "North", knownFor: "Golden Temple Amritsar, Wagah Border, Anandpur Sahib", officialSource: "Punjab Tourism (punjabtourism.punjab.gov.in)" },
    { name: "Rajasthan", type: "State", capital: "Jaipur", region: "Northwest", knownFor: "Hill Forts of Rajasthan (UNESCO), Jaipur Pink City (UNESCO), Jaisalmer Dunes", officialSource: "Rajasthan Tourism (tourism.rajasthan.gov.in)" },
    { name: "Sikkim", type: "State", capital: "Gangtok", region: "Northeast", knownFor: "Khangchendzonga National Park (UNESCO), Gurudongmar Lake, Yumthang", officialSource: "Sikkim Tourism (sikkimtourism.gov.in)" },
    { name: "Tamil Nadu", type: "State", capital: "Chennai", region: "South", knownFor: "Great Living Chola Temples (UNESCO), Mahabalipuram (UNESCO), Nilgiri Railway", officialSource: "Tamil Nadu Tourism (tamilnadutourism.tn.gov.in)" },
    { name: "Telangana", type: "State", capital: "Hyderabad", region: "South", knownFor: "Ramappa Temple (UNESCO), Charminar, Golconda Fort, Warangal", officialSource: "Telangana Tourism (telanganatourism.gov.in)" },
    { name: "Tripura", type: "State", capital: "Agartala", region: "Northeast", knownFor: "Ujjayanta Palace, Unakoti Rock Carvings, Neermahal Water Palace", officialSource: "Tripura Tourism (tripuratourism.gov.in)" },
    { name: "Uttar Pradesh", type: "State", capital: "Lucknow", region: "North", knownFor: "Taj Mahal (UNESCO), Agra Fort (UNESCO), Fatehpur Sikri (UNESCO), Varanasi", officialSource: "UP Tourism (uptourism.gov.in)" },
    { name: "Uttarakhand", type: "State", capital: "Dehradun", region: "North", knownFor: "Valley of Flowers & Nanda Devi NP (UNESCO), Rishikesh, Kedarkantha", officialSource: "Uttarakhand Tourism (uttarakhandtourism.gov.in)" },
    { name: "West Bengal", type: "State", capital: "Kolkata", region: "East", knownFor: "Sundarbans NP (UNESCO), Darjeeling Himalayan Railway (UNESCO), Kalimpong", officialSource: "West Bengal Tourism (wbtourism.gov.in)" },
    
    // 8 UNION TERRITORIES
    { name: "Andaman & Nicobar Islands", type: "Union Territory", capital: "Port Blair", region: "Islands", knownFor: "Havelock Radhanagar Beach, Cellular Jail, Neil Island", officialSource: "Andaman Tourism (andamantourism.gov.in)" },
    { name: "Chandigarh", type: "Union Territory", capital: "Chandigarh", region: "North", knownFor: "Rock Garden, Sukhna Lake, Capitol Complex (UNESCO)", officialSource: "Chandigarh Tourism (chandigarhtourism.gov.in)" },
    { name: "Dadra & Nagar Haveli and Daman & Diu", type: "Union Territory", capital: "Daman", region: "West", knownFor: "Diu Fort, Devka Beach, Silvassa Gardens", officialSource: "Daman & Diu Tourism (daman.nic.in)" },
    { name: "Delhi", type: "Union Territory", capital: "New Delhi", region: "North", knownFor: "Qutb Minar (UNESCO), Humayun's Tomb (UNESCO), Red Fort (UNESCO)", officialSource: "Delhi Tourism (delhitourism.gov.in)" },
    { name: "Jammu & Kashmir", type: "Union Territory", capital: "Srinagar / Jammu", region: "North", knownFor: "Kashmir Great Lakes, Gulmarg Gondola, Pahalgam, Pahalgam Valley", officialSource: "J&K Tourism (jk-tourism.com)" },
    { name: "Ladakh", type: "Union Territory", capital: "Leh", region: "North", knownFor: "Pangong Tso, Nubra Valley, Zanskar Pass, Khardung La", officialSource: "Ladakh Tourism (ladakhtourism.lh.gov.in)" },
    { name: "Lakshadweep", type: "Union Territory", capital: "Kavaratti", region: "Islands", knownFor: "Bangaram Atoll, Agatti Coral Reefs, Minicoy Lighthouse", officialSource: "Lakshadweep Tourism (lakshadweeptourism.gov.in)" },
    { name: "Puducherry", type: "Union Territory", capital: "Puducherry", region: "South", knownFor: "French Quarter Promenade, Auroville, Paradise Beach", officialSource: "Puducherry Tourism (pon.nic.in)" }
  ],

  destinations: [
  {
    "id": "dest_spiti",
    "name": "Spiti Valley",
    "officialName": "Spiti Sub-Division, Lahaul & Spiti District",
    "country": "India",
    "state": "Himachal Pradesh",
    "district": "Lahaul & Spiti",
    "city": "Kaza",
    "region": "Himalayas",
    "latitude": 32.2461,
    "longitude": 78.0349,
    "category": "Road Trips",
    "tags": [
      "mountains",
      "fog",
      "road-trip",
      "solitude",
      "himalayas"
    ],
    "image": "NATURE/119632.jpg",
    "description": "Cold desert mountain valley high in the Himalayas, famous for Key Monastery, Tabo Monastery, and winding high-altitude passes like Kunzum La (4,551m).",
    "bestSeason": "May – October",
    "recommendedDuration": 8,
    "estimatedDailyBudget": {
      "budget": 2200,
      "midRange": 4500,
      "luxury": 9500
    }
  },
  {
    "id": "dest_ladakh",
    "name": "Ladakh & Pangong Tso",
    "officialName": "Leh & Kargil Districts, Union Territory of Ladakh",
    "country": "India",
    "state": "Ladakh",
    "district": "Leh",
    "city": "Leh",
    "region": "Himalayas",
    "latitude": 34.1526,
    "longitude": 77.5771,
    "category": "Mountains",
    "tags": [
      "mountains",
      "snow",
      "hiking",
      "adventure",
      "azure-lakes"
    ],
    "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
    "description": "The land of high passes, crystal azure tarns like Pangong Tso and Tso Moriri, and dramatic snow-capped granite peaks.",
    "bestSeason": "June – September",
    "recommendedDuration": 9,
    "estimatedDailyBudget": {
      "budget": 2800,
      "midRange": 5500,
      "luxury": 12000
    }
  },
  {
    "id": "dest_kashmir",
    "name": "Kashmir Great Lakes & Gulmarg",
    "officialName": "Ganderbal & Baramulla Districts, J&K",
    "country": "India",
    "state": "Jammu & Kashmir",
    "district": "Baramulla",
    "city": "Gulmarg",
    "region": "Himalayas",
    "latitude": 34.0484,
    "longitude": 74.3805,
    "category": "Mountains",
    "tags": [
      "snow",
      "meadows",
      "gondola",
      "alpine-lakes",
      "pine-forests"
    ],
    "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
    "description": "Paradise on earth with highest ski gondola in Asia at Gulmarg, floating Dal Lake houseboats, and seven pristine alpine lakes.",
    "bestSeason": "April – October & Dec – March (Skiing)",
    "recommendedDuration": 7,
    "estimatedDailyBudget": {
      "budget": 2600,
      "midRange": 5500,
      "luxury": 14000
    }
  },
  {
    "id": "dest_valley_of_flowers",
    "name": "Valley of Flowers & Rishikesh",
    "officialName": "Chamoli & Dehradun Districts, Uttarakhand",
    "country": "India",
    "state": "Uttarakhand",
    "district": "Chamoli",
    "city": "Joshimath",
    "region": "Himalayas",
    "latitude": 30.728,
    "longitude": 79.6053,
    "category": "Trekking",
    "tags": [
      "alpine-flowers",
      "unesco",
      "ganga",
      "yoga",
      "river-rafting"
    ],
    "image": "NATURE/101859.jpg",
    "description": "UNESCO alpine valley carpeted in hundreds of endemic wildflowers, paired with the spiritual yoga & white-water capital Rishikesh.",
    "bestSeason": "July – September (Flowers) & Oct – May (Rishikesh)",
    "recommendedDuration": 6,
    "estimatedDailyBudget": {
      "budget": 2000,
      "midRange": 4200,
      "luxury": 10000
    }
  },
  {
    "id": "dest_tawang",
    "name": "Tawang Monastery & Sela Pass",
    "officialName": "Tawang District, Arunachal Pradesh",
    "country": "India",
    "state": "Arunachal Pradesh",
    "district": "Tawang",
    "city": "Tawang",
    "region": "Northeast",
    "latitude": 27.5861,
    "longitude": 91.8594,
    "category": "Spiritual",
    "tags": [
      "buddhist-monastery",
      "snow-pass",
      "sela-pass",
      "cloud-valleys"
    ],
    "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
    "description": "Largest Buddhist monastery in India perched at 3,000m, dramatic frozen Sela Pass (4,170m), and mist-shrouded tribal valleys.",
    "bestSeason": "March – May & September – November",
    "recommendedDuration": 6,
    "estimatedDailyBudget": {
      "budget": 2200,
      "midRange": 4500,
      "luxury": 10500
    }
  },
  {
    "id": "dest_dzukou",
    "name": "Dzukou Valley & Hornbill Trail",
    "officialName": "Kohima District, Nagaland",
    "country": "India",
    "state": "Nagaland",
    "district": "Kohima",
    "city": "Kohima",
    "region": "Northeast",
    "latitude": 25.5682,
    "longitude": 94.0628,
    "category": "Trekking",
    "tags": [
      "rolling-hills",
      "dzukou-lily",
      "tribal-culture",
      "pristine"
    ],
    "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
    "description": "Breathtaking rolling emerald hills at 2,452m, endemic Dzukou lilies, and the vibrant tribal pageantry of the Hornbill Festival.",
    "bestSeason": "June – September (Lilies) & October – December",
    "recommendedDuration": 5,
    "estimatedDailyBudget": {
      "budget": 1800,
      "midRange": 3800,
      "luxury": 8500
    }
  },
  {
    "id": "dest_meghalaya_root",
    "name": "Cherrapunji & Living Root Bridges",
    "officialName": "East Khasi Hills District, Meghalaya",
    "country": "India",
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "city": "Sohra",
    "region": "Northeast",
    "latitude": 25.2702,
    "longitude": 91.7323,
    "category": "Waterfalls",
    "tags": [
      "double-decker-bridge",
      "living-root-bridges",
      "waterfalls",
      "caves"
    ],
    "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
    "description": "Centuries-old bio-engineering marvels grown from Ficus elastica roots by the Khasi tribe, roaring Nohkalikai falls, and Mawlynnong.",
    "bestSeason": "October – May",
    "recommendedDuration": 5,
    "estimatedDailyBudget": {
      "budget": 2200,
      "midRange": 4800,
      "luxury": 11000
    }
  },
  {
    "id": "dest_kaziranga",
    "name": "Kaziranga National Park",
    "officialName": "Golaghat, Nagaon & Sonitpur Districts, Assam",
    "country": "India",
    "state": "Assam",
    "district": "Golaghat",
    "city": "Kohora",
    "region": "Northeast",
    "latitude": 26.5775,
    "longitude": 93.1711,
    "category": "Wildlife",
    "tags": [
      "one-horned-rhino",
      "unesco",
      "brahmaputra",
      "safari",
      "wildlife"
    ],
    "image": "NATURE/119632.jpg",
    "description": "UNESCO World Heritage site sanctuary holding two-thirds of the world's great one-horned rhinoceroses in tall elephant grass floodplains.",
    "bestSeason": "November – April",
    "recommendedDuration": 4,
    "estimatedDailyBudget": {
      "budget": 2500,
      "midRange": 5500,
      "luxury": 14000
    }
  },
  {
    "id": "dest_sikkim",
    "name": "Gurudongmar Lake & Yumthang Valley",
    "officialName": "North Sikkim District, Sikkim",
    "country": "India",
    "state": "Sikkim",
    "district": "Mangan",
    "city": "Lachen",
    "region": "Himalayas",
    "latitude": 27.9942,
    "longitude": 88.7061,
    "category": "Lakes",
    "tags": [
      "high-altitude-lake",
      "sacred",
      "rhododendrons",
      "snow-peaks"
    ],
    "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
    "description": "Sacred high-altitude lake at 5,430m blessed by Guru Padmasambhava, surrounded by snow-clad peaks and Yumthang valley of rhododendrons.",
    "bestSeason": "April – June & October – November",
    "recommendedDuration": 6,
    "estimatedDailyBudget": {
      "budget": 2400,
      "midRange": 5000,
      "luxury": 11500
    }
  },
  {
    "id": "dest_sundarbans",
    "name": "Sundarbans Mangrove Tiger Reserve",
    "officialName": "South 24 Parganas District, West Bengal",
    "country": "India",
    "state": "West Bengal",
    "district": "South 24 Parganas",
    "city": "Canning",
    "region": "East",
    "latitude": 21.9497,
    "longitude": 89.1833,
    "category": "Wildlife",
    "tags": [
      "bengal-tiger",
      "mangroves",
      "unesco",
      "boat-safari",
      "delta"
    ],
    "image": "NATURE/122119.jpg",
    "description": "Largest contiguous mangrove forest on Earth, tidal delta network of swimming Royal Bengal Tigers, saltwater crocodiles, and mudflats.",
    "bestSeason": "October – March",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 2000,
      "midRange": 4500,
      "luxury": 10000
    }
  },
  {
    "id": "dest_darjeeling",
    "name": "Darjeeling Tea Highlands & Toy Train",
    "officialName": "Darjeeling District, West Bengal",
    "country": "India",
    "state": "West Bengal",
    "district": "Darjeeling",
    "city": "Darjeeling",
    "region": "East",
    "latitude": 27.041,
    "longitude": 88.2663,
    "category": "Heritage",
    "tags": [
      "kanchenjunga",
      "toy-train",
      "tea-gardens",
      "tiger-hill",
      "unesco"
    ],
    "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
    "description": "Queen of the Hills framing sunrise over Mount Kanchenjunga (8,586m), UNESCO Himalayan Toy Train, and lush heritage tea estates.",
    "bestSeason": "March – May & October – December",
    "recommendedDuration": 4,
    "estimatedDailyBudget": {
      "budget": 2200,
      "midRange": 4800,
      "luxury": 12000
    }
  },
  {
    "id": "dest_varanasi",
    "name": "Varanasi Ganga Ghats & Sarnath",
    "officialName": "Varanasi District, Uttar Pradesh",
    "country": "India",
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "city": "Varanasi",
    "region": "North",
    "latitude": 25.3176,
    "longitude": 82.9739,
    "category": "Spiritual",
    "tags": [
      "ganga-aarti",
      "ancient-city",
      "ghats",
      "kashi",
      "sarnath"
    ],
    "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
    "description": "World's oldest continually inhabited city, evening Ganga Aarti at Dashashwamedh Ghat, labyrinthine silk lanes, and Buddha's first sermon at Sarnath.",
    "bestSeason": "October – March",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 1600,
      "midRange": 3800,
      "luxury": 9500
    }
  },
  {
    "id": "dest_taj_mahal",
    "name": "Taj Mahal & Fatehpur Sikri",
    "officialName": "Agra District, Uttar Pradesh",
    "country": "India",
    "state": "Uttar Pradesh",
    "district": "Agra",
    "city": "Agra",
    "region": "North",
    "latitude": 27.1751,
    "longitude": 78.0421,
    "category": "Heritage",
    "tags": [
      "taj-mahal",
      "wonder-of-world",
      "mughal-architecture",
      "unesco"
    ],
    "image": "NATURE/101859.jpg",
    "description": "Immortal monument of white Makrana marble built by Emperor Shah Jahan on the Yamuna river, flanked by red sandstone Agra Fort.",
    "bestSeason": "October – March",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 2000,
      "midRange": 4500,
      "luxury": 15000
    }
  },
  {
    "id": "dest_jaipur",
    "name": "Jaipur Pink City & Amer Fort",
    "officialName": "Jaipur District, Rajasthan",
    "country": "India",
    "state": "Rajasthan",
    "district": "Jaipur",
    "city": "Jaipur",
    "region": "Northwest",
    "latitude": 26.9124,
    "longitude": 75.7873,
    "category": "Heritage",
    "tags": [
      "hawa-mahal",
      "amer-fort",
      "pink-city",
      "palaces",
      "unesco"
    ],
    "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
    "description": "UNESCO World Heritage city of royal palaces, honeycomb façade of Hawa Mahal, Jantar Mantar observatory, and hilltop Amer Fort.",
    "bestSeason": "October – March",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 2000,
      "midRange": 4500,
      "luxury": 14000
    }
  },
  {
    "id": "dest_jaisalmer",
    "name": "Jaisalmer Golden Fort & Thar Dunes",
    "officialName": "Jaisalmer District, Rajasthan",
    "country": "India",
    "state": "Rajasthan",
    "district": "Jaisalmer",
    "city": "Jaisalmer",
    "region": "Northwest",
    "latitude": 26.9157,
    "longitude": 70.9083,
    "category": "Landscape",
    "tags": [
      "desert",
      "camel-safari",
      "living-fort",
      "havelis",
      "golden-city"
    ],
    "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
    "description": "Golden sandstone citadel rising from the yellow sands of the Great Thar Desert, desert camping at Sam Dunes, and carved Jain havelis.",
    "bestSeason": "October – March",
    "recommendedDuration": 4,
    "estimatedDailyBudget": {
      "budget": 2200,
      "midRange": 4800,
      "luxury": 13000
    }
  },
  {
    "id": "dest_udaipur",
    "name": "Udaipur City of Lakes & Lake Pichola",
    "officialName": "Udaipur District, Rajasthan",
    "country": "India",
    "state": "Rajasthan",
    "district": "Udaipur",
    "city": "Udaipur",
    "region": "Northwest",
    "latitude": 24.5854,
    "longitude": 73.7125,
    "category": "Heritage",
    "tags": [
      "city-palace",
      "lake-pichola",
      "monsoon-palace",
      "romance"
    ],
    "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
    "description": "Venice of the East with majestic City Palace overlooking the calm waters of Lake Pichola and the floating white marble Lake Palace.",
    "bestSeason": "September – March",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 2400,
      "midRange": 5500,
      "luxury": 16000
    }
  },
  {
    "id": "dest_rann_of_kutch",
    "name": "Rann of Kutch & White Salt Desert",
    "officialName": "Kutch District, Gujarat",
    "country": "India",
    "state": "Gujarat",
    "district": "Kutch",
    "city": "Dhordo",
    "region": "West",
    "latitude": 23.8344,
    "longitude": 69.8329,
    "category": "Landscape",
    "tags": [
      "white-desert",
      "salt-flats",
      "rann-utsav",
      "handicrafts",
      "full-moon"
    ],
    "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
    "description": "Endless 7,505 sq km horizon of sparkling white salt crystal desert, vibrant Rogan art and Kutchi embroidery, and magical full moon nights.",
    "bestSeason": "November – February (Rann Utsav)",
    "recommendedDuration": 4,
    "estimatedDailyBudget": {
      "budget": 2500,
      "midRange": 5800,
      "luxury": 15000
    }
  },
  {
    "id": "dest_gir",
    "name": "Gir National Park (Asiatic Lions)",
    "officialName": "Junagadh & Gir Somnath Districts, Gujarat",
    "country": "India",
    "state": "Gujarat",
    "district": "Gir Somnath",
    "city": "Sasan Gir",
    "region": "West",
    "latitude": 21.1243,
    "longitude": 70.8242,
    "category": "Wildlife",
    "tags": [
      "asiatic-lions",
      "safari",
      "dry-deciduous",
      "unique-wildlife"
    ],
    "image": "NATURE/119632.jpg",
    "description": "The sole wild habitat on planet Earth for the majestic Asiatic Lion, roaming dry teak forests and acacia savannahs.",
    "bestSeason": "December – April",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 2400,
      "midRange": 5200,
      "luxury": 13000
    }
  },
  {
    "id": "dest_ajanta_ellora",
    "name": "Ajanta & Ellora Rock-Cut Caves",
    "officialName": "Chhatrapati Sambhajinagar District, Maharashtra",
    "country": "India",
    "state": "Maharashtra",
    "district": "Chhatrapati Sambhajinagar",
    "city": "Aurangabad",
    "region": "West",
    "latitude": 20.5519,
    "longitude": 75.7033,
    "category": "Archaeology",
    "tags": [
      "rock-cut",
      "unesco",
      "kailasa-temple",
      "buddhist-frescoes",
      "caves"
    ],
    "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
    "description": "Monolithic Kailasa temple carved top-down from a single basalt mountain cliff, alongside 30 ancient painted Buddhist rock caves.",
    "bestSeason": "October – March",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 1800,
      "midRange": 4000,
      "luxury": 9500
    }
  },
  {
    "id": "dest_khajuraho",
    "name": "Khajuraho Monument Complex",
    "officialName": "Chhatarpur District, Madhya Pradesh",
    "country": "India",
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "city": "Khajuraho",
    "region": "Central",
    "latitude": 24.8318,
    "longitude": 79.9199,
    "category": "Heritage",
    "tags": [
      "temples",
      "erotic-sculptures",
      "chandela",
      "unesco",
      "nagara-style"
    ],
    "image": "NATURE/101859.jpg",
    "description": "UNESCO pinnacle of Nagara temple architecture featuring intricate sandstone carvings celebrating every nuance of human existence.",
    "bestSeason": "October – March",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 1800,
      "midRange": 4200,
      "luxury": 10000
    }
  },
  {
    "id": "dest_bandhavgarh",
    "name": "Bandhavgarh & Kanha Tiger Reserves",
    "officialName": "Umaria & Mandla Districts, Madhya Pradesh",
    "country": "India",
    "state": "Madhya Pradesh",
    "district": "Umaria",
    "city": "Tala",
    "region": "Central",
    "latitude": 23.7226,
    "longitude": 80.9996,
    "category": "Wildlife",
    "tags": [
      "tiger-safari",
      "sal-forest",
      "highest-tiger-density",
      "jungle-book"
    ],
    "image": "NATURE/119632.jpg",
    "description": "Highest density of Royal Bengal Tigers in India nestled beneath an ancient 2,000-year-old hilltop fortress and dense Sal forests.",
    "bestSeason": "October – May",
    "recommendedDuration": 4,
    "estimatedDailyBudget": {
      "budget": 3000,
      "midRange": 6800,
      "luxury": 18000
    }
  },
  {
    "id": "dest_chitrakote",
    "name": "Chitrakote Falls (Niagara of India)",
    "officialName": "Bastar District, Chhattisgarh",
    "country": "India",
    "state": "Chhattisgarh",
    "district": "Bastar",
    "city": "Jagdalpur",
    "region": "Central",
    "latitude": 19.2016,
    "longitude": 81.7056,
    "category": "Waterfalls",
    "tags": [
      "horseshoe-fall",
      "indravati-river",
      "bastar-tribal",
      "widest-waterfall"
    ],
    "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
    "description": "India's widest waterfall plunging 30m over a 300m-wide horseshoe canyon on the Indravati river, paired with vibrant Bastar bell-metal crafts.",
    "bestSeason": "July – October (Monsoon Flow) & Nov – Feb",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 1600,
      "midRange": 3500,
      "luxury": 8000
    }
  },
  {
    "id": "dest_hampi",
    "name": "Hampi Vijayanagara Boulder Ruins",
    "officialName": "Vijayanagara District, Karnataka",
    "country": "India",
    "state": "Karnataka",
    "district": "Vijayanagara",
    "city": "Hampi",
    "region": "South",
    "latitude": 15.335,
    "longitude": 76.46,
    "category": "Heritage",
    "tags": [
      "stone-chariot",
      "boulders",
      "tungabhadra",
      "unesco",
      "ancient-empire"
    ],
    "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
    "description": "Surreal red granite boulder landscape of the 14th-century capital of the Vijayanagara Empire, Stone Chariot, and musical pillars.",
    "bestSeason": "October – March",
    "recommendedDuration": 4,
    "estimatedDailyBudget": {
      "budget": 1800,
      "midRange": 4200,
      "luxury": 11000
    }
  },
  {
    "id": "dest_coorg",
    "name": "Coorg Coffee Highlands & Abbey Falls",
    "officialName": "Kodagu District, Karnataka",
    "country": "India",
    "state": "Karnataka",
    "district": "Kodagu",
    "city": "Madikeri",
    "region": "South",
    "latitude": 12.4244,
    "longitude": 75.7382,
    "category": "Mountains",
    "tags": [
      "coffee-plantations",
      "western-ghats",
      "waterfalls",
      "misty-hills"
    ],
    "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
    "description": "Scotland of India blanketed in emerald Arabica coffee and black pepper plantations, roaring Abbey Falls, and Tibetan Golden Temple.",
    "bestSeason": "October – April",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 2200,
      "midRange": 4800,
      "luxury": 12500
    }
  },
  {
    "id": "dest_gokarna",
    "name": "Gokarna Om Beach & Kudle Bay",
    "officialName": "Uttara Kannada District, Karnataka",
    "country": "India",
    "state": "Karnataka",
    "district": "Uttara Kannada",
    "city": "Gokarna",
    "region": "South",
    "latitude": 14.5479,
    "longitude": 74.3188,
    "category": "Beach",
    "tags": [
      "om-beach",
      "clifftop-treks",
      "shiva-temple",
      "unspoilt-beaches"
    ],
    "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
    "description": "Laid-back coastal pilgrimage town where forested Western Ghats meet the Arabian Sea, famous for Om-shaped beach and cliff hikes.",
    "bestSeason": "October – March",
    "recommendedDuration": 4,
    "estimatedDailyBudget": {
      "budget": 1500,
      "midRange": 3500,
      "luxury": 8500
    }
  },
  {
    "id": "dest_munnar",
    "name": "Munnar Tea Hills & Eravikulam",
    "officialName": "Idukki District, Kerala",
    "country": "India",
    "state": "Kerala",
    "district": "Idukki",
    "city": "Munnar",
    "region": "South",
    "latitude": 10.0889,
    "longitude": 77.0595,
    "category": "Mountains",
    "tags": [
      "tea-gardens",
      "anamudi-peak",
      "nilgiri-tahr",
      "western-ghats"
    ],
    "image": "NATURE/119632.jpg",
    "description": "Undulating emerald carpets of manicured tea plantations at 1,600m, home to endangered Nilgiri Tahr and South India's highest peak Anamudi.",
    "bestSeason": "September – May",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 2000,
      "midRange": 4500,
      "luxury": 12000
    }
  },
  {
    "id": "dest_alleppey",
    "name": "Alleppey Houseboat Backwaters",
    "officialName": "Alappuzha District, Kerala",
    "country": "India",
    "state": "Kerala",
    "district": "Alappuzha",
    "city": "Alappuzha",
    "region": "South",
    "latitude": 9.4981,
    "longitude": 76.3388,
    "category": "Lakes",
    "tags": [
      "backwaters",
      "houseboat",
      "paddy-fields",
      "canal-cruise"
    ],
    "image": "NATURE/122119.jpg",
    "description": "Cruising palm-fringed tranquil lagoons and narrow emerald canals aboard traditional thatched Kettuvallam houseboats.",
    "bestSeason": "October – March",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 2800,
      "midRange": 6500,
      "luxury": 16000
    }
  },
  {
    "id": "dest_varkala",
    "name": "Varkala Red Cliff & Papanasam Beach",
    "officialName": "Thiruvananthapuram District, Kerala",
    "country": "India",
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "city": "Varkala",
    "region": "South",
    "latitude": 8.7379,
    "longitude": 76.7163,
    "category": "Beach",
    "tags": [
      "red-laterite-cliffs",
      "arabian-sea",
      "ayurveda",
      "sunsets"
    ],
    "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
    "description": "Dramatic red laterite sea cliffs standing sentinel over sandy beaches, natural mineral springs, clifftop cafes, and yoga sanctuaries.",
    "bestSeason": "October – March",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 1600,
      "midRange": 3800,
      "luxury": 9500
    }
  },
  {
    "id": "dest_thanjavur",
    "name": "Thanjavur Brihadisvara (Great Living Chola)",
    "officialName": "Thanjavur District, Tamil Nadu",
    "country": "India",
    "state": "Tamil Nadu",
    "district": "Thanjavur",
    "city": "Thanjavur",
    "region": "South",
    "latitude": 10.7828,
    "longitude": 79.1318,
    "category": "Heritage",
    "tags": [
      "chola-temple",
      "granite-vimana",
      "unesco",
      "1000-years-old"
    ],
    "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
    "description": "Magnificent 1,000-year-old Brihadisvara Temple built entirely of granite by Raja Raja Chola I with an 80-tonne monolithic cupola.",
    "bestSeason": "November – February",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 1500,
      "midRange": 3200,
      "luxury": 7500
    }
  },
  {
    "id": "dest_mahabalipuram",
    "name": "Mahabalipuram Shore Temples",
    "officialName": "Chengalpattu District, Tamil Nadu",
    "country": "India",
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "city": "Mahabalipuram",
    "region": "South",
    "latitude": 12.6269,
    "longitude": 80.1927,
    "category": "Heritage",
    "tags": [
      "shore-temple",
      "arjuna-penance",
      "pallava-dynasty",
      "unesco",
      "bay-of-bengal"
    ],
    "image": "NATURE/101859.jpg",
    "description": "7th-century Pallava coastal sanctuary with rock-cut rathas, colossal open-air bas-relief of Arjuna's Penance, and oceanfront Shore Temple.",
    "bestSeason": "October – March",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 1800,
      "midRange": 4000,
      "luxury": 9500
    }
  },
  {
    "id": "dest_ooty",
    "name": "Ooty & Nilgiri Mountain Railway",
    "officialName": "Nilgiris District, Tamil Nadu",
    "country": "India",
    "state": "Tamil Nadu",
    "district": "Nilgiris",
    "city": "Udhagamandalam",
    "region": "South",
    "latitude": 11.4102,
    "longitude": 76.695,
    "category": "Mountains",
    "tags": [
      "blue-mountains",
      "toy-train",
      "botanical-gardens",
      "tea-hills",
      "unesco"
    ],
    "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
    "description": "Blue Mountain colonial retreat reached via century-old UNESCO rack-and-pinion steam locomotive climbing through 16 tunnels.",
    "bestSeason": "March – June & October – January",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 2000,
      "midRange": 4500,
      "luxury": 11000
    }
  },
  {
    "id": "dest_palolem",
    "name": "Palolem Beach & South Goa Coast",
    "officialName": "South Goa District, Goa",
    "country": "India",
    "state": "Goa",
    "district": "South Goa",
    "city": "Canacona",
    "region": "West",
    "latitude": 15.01,
    "longitude": 74.0232,
    "category": "Beach",
    "tags": [
      "crescent-bay",
      "dolphins",
      "shacks",
      "kayaking",
      "silent-disco"
    ],
    "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
    "description": "Pristine mile-long crescent bay fringed by coconut palms, calm turquoise waters, sea kayaking, and dolphin spotting.",
    "bestSeason": "November – March",
    "recommendedDuration": 4,
    "estimatedDailyBudget": {
      "budget": 2000,
      "midRange": 4800,
      "luxury": 12000
    }
  },
  {
    "id": "dest_dudhsagar",
    "name": "Dudhsagar Falls & Bhagwan Mahaveer",
    "officialName": "South Goa District, Goa",
    "country": "India",
    "state": "Goa",
    "district": "South Goa",
    "city": "Collem",
    "region": "West",
    "latitude": 15.3144,
    "longitude": 74.3143,
    "category": "Waterfalls",
    "tags": [
      "sea-of-milk",
      "tiered-waterfall",
      "railway-bridge",
      "jeep-safari"
    ],
    "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
    "description": "Four-tiered 'Sea of Milk' cataract cascading 310 meters down the Western Ghats cliffside with trains crossing right across its spray.",
    "bestSeason": "October – March & Monsoon (View Only)",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 1800,
      "midRange": 3800,
      "luxury": 9000
    }
  },
  {
    "id": "dest_andaman",
    "name": "Havelock Island Radhanagar Beach",
    "officialName": "South Andaman District, Andaman & Nicobar",
    "country": "India",
    "state": "Andaman & Nicobar Islands",
    "district": "South Andaman",
    "city": "Havelock (Swaraj Dweep)",
    "region": "Islands",
    "latitude": 11.9845,
    "longitude": 92.9463,
    "category": "Beach",
    "tags": [
      "radhanagar-beach",
      "scuba-diving",
      "coral-reef",
      "bioluminescence"
    ],
    "image": "NATURE/122119.jpg",
    "description": "Asia's best beach with fine white sand, azure waters, pristine coral reefs of Elephant Beach, and world-class scuba diving.",
    "bestSeason": "October – May",
    "recommendedDuration": 6,
    "estimatedDailyBudget": {
      "budget": 3500,
      "midRange": 7500,
      "luxury": 18000
    }
  },
  {
    "id": "dest_lakshadweep",
    "name": "Bangaram Coral Atoll",
    "officialName": "Lakshadweep District, Lakshadweep",
    "country": "India",
    "state": "Lakshadweep",
    "district": "Lakshadweep",
    "city": "Bangaram",
    "region": "Islands",
    "latitude": 10.9419,
    "longitude": 72.2907,
    "category": "Island",
    "tags": [
      "coral-atoll",
      "turquoise-lagoon",
      "turtle-sanctuary",
      "snorkeling"
    ],
    "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
    "description": "Teardrop-shaped coral atoll surrounded by a vast turquoise lagoon of calm shallow water, vibrant coral gardens, and sea turtles.",
    "bestSeason": "October – April",
    "recommendedDuration": 5,
    "estimatedDailyBudget": {
      "budget": 4500,
      "midRange": 9500,
      "luxury": 22000
    }
  },
  {
    "id": "dest_puducherry",
    "name": "Puducherry French Colony & Auroville",
    "officialName": "Puducherry District, Puducherry",
    "country": "India",
    "state": "Puducherry",
    "district": "Puducherry",
    "city": "Puducherry",
    "region": "South",
    "latitude": 11.9416,
    "longitude": 79.8083,
    "category": "Heritage",
    "tags": [
      "french-quarter",
      "auroville",
      "bougainvillea",
      "promenade-beach"
    ],
    "image": "NATURE/101859.jpg",
    "description": "Charming French colonial villas draped in bougainvillea, seaside Promenade, Sri Aurobindo Ashram, and the golden Matrimandir sphere.",
    "bestSeason": "October – March",
    "recommendedDuration": 3,
    "estimatedDailyBudget": {
      "budget": 1800,
      "midRange": 4200,
      "luxury": 10500
    }
  },
  {
    "id": "dest_gandikota",
    "name": "Gandikota Grand Canyon & Fort",
    "officialName": "YSR Kadapa District, Andhra Pradesh",
    "country": "India",
    "state": "Andhra Pradesh",
    "district": "YSR Kadapa",
    "city": "Gandikota",
    "region": "South",
    "latitude": 14.8142,
    "longitude": 78.2862,
    "category": "Landscape",
    "tags": [
      "grand-canyon",
      "pennar-river",
      "red-granite-gorge",
      "fort"
    ],
    "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
    "description": "The Grand Canyon of India, carved by the Pennar river through 300-foot sheer red granite cliffs below the 13th-century Gandikota fort.",
    "bestSeason": "October – March",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 1400,
      "midRange": 3200,
      "luxury": 7500
    }
  },
  {
    "id": "dest_amritsar",
    "name": "Amritsar Golden Temple (Harmandir Sahib)",
    "officialName": "Amritsar District, Punjab",
    "country": "India",
    "state": "Punjab",
    "district": "Amritsar",
    "city": "Amritsar",
    "region": "North",
    "latitude": 31.62,
    "longitude": 74.8765,
    "category": "Spiritual",
    "tags": [
      "golden-temple",
      "amrit-sarovar",
      "langar",
      "wagah-border"
    ],
    "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
    "description": "The holiest Sikh Gurdwara gilded in gold foil over the Amrit Sarovar sacred nectar pool, legendary 24/7 free community Langar, and Wagah Border.",
    "bestSeason": "October – March",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 1500,
      "midRange": 3500,
      "luxury": 8500
    }
  },
  {
    "id": "dest_bodh_gaya",
    "name": "Bodh Gaya Mahabodhi Temple",
    "officialName": "Gaya District, Bihar",
    "country": "India",
    "state": "Bihar",
    "district": "Gaya",
    "city": "Bodh Gaya",
    "region": "East",
    "latitude": 24.696,
    "longitude": 84.9914,
    "category": "Spiritual",
    "tags": [
      "bodhi-tree",
      "enlightenment",
      "unesco",
      "buddhist-temples"
    ],
    "image": "NATURE/101859.jpg",
    "description": "The sacred cradle of Buddhism where Gautama Buddha attained supreme enlightenment beneath the Bodhi Tree (circa 531 BC).",
    "bestSeason": "October – March",
    "recommendedDuration": 2,
    "estimatedDailyBudget": {
      "budget": 1400,
      "midRange": 3200,
      "luxury": 7000
    }
  }
]
};
