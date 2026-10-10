/* ==========================================================================
   WAYFARER / ANTARA — Global Travel Intelligence & Visa Dataset
   32 Countries · 41 Flagship Global Destinations · Visa Rules for Indian Citizens
   ========================================================================== */

window.GLOBAL_TRAVEL_DATA = {
  "lastVerified": "2026-09-01",
  "currencies": [
    {
      "code": "INR",
      "name": "Indian Rupee",
      "symbol": "₹",
      "rateToINR": 1
    },
    {
      "code": "USD",
      "name": "US Dollar",
      "symbol": "$",
      "rateToINR": 84.5
    },
    {
      "code": "EUR",
      "name": "Euro",
      "symbol": "€",
      "rateToINR": 92
    },
    {
      "code": "GBP",
      "name": "British Pound",
      "symbol": "£",
      "rateToINR": 108.5
    },
    {
      "code": "JPY",
      "name": "Japanese Yen",
      "symbol": "¥",
      "rateToINR": 0.58
    },
    {
      "code": "THB",
      "name": "Thai Baht",
      "symbol": "฿",
      "rateToINR": 2.48
    },
    {
      "code": "AED",
      "name": "UAE Dirham",
      "symbol": "AED",
      "rateToINR": 23
    },
    {
      "code": "CHF",
      "name": "Swiss Franc",
      "symbol": "CHF",
      "rateToINR": 97.2
    },
    {
      "code": "SGD",
      "name": "Singapore Dollar",
      "symbol": "S$",
      "rateToINR": 64
    },
    {
      "code": "MYR",
      "name": "Malaysian Ringgit",
      "symbol": "RM",
      "rateToINR": 19.5
    },
    {
      "code": "IDR",
      "name": "Indonesian Rupiah",
      "symbol": "Rp",
      "rateToINR": 0.0054
    },
    {
      "code": "AUD",
      "name": "Australian Dollar",
      "symbol": "A$",
      "rateToINR": 56.2
    },
    {
      "code": "CAD",
      "name": "Canadian Dollar",
      "symbol": "C$",
      "rateToINR": 62
    },
    {
      "code": "NPR",
      "name": "Nepalese Rupee",
      "symbol": "NPR",
      "rateToINR": 0.625
    },
    {
      "code": "LKR",
      "name": "Sri Lankan Rupee",
      "symbol": "LKR",
      "rateToINR": 0.28
    },
    {
      "code": "BTN",
      "name": "Bhutanese Ngultrum",
      "symbol": "Nu",
      "rateToINR": 1
    }
  ],
  "countries": [
    {
      "code": "JPN",
      "name": "Japan",
      "capital": "Tokyo",
      "region": "East Asia",
      "currency": "JPY",
      "visaInfo": {
        "type": "eVisa",
        "indianPassport": "Online eVisa (90-day tourist entry)",
        "officialPortal": "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        "feeINR": 2500,
        "processingDays": 5
      },
      "flagshipDestinations": [
        {
          "id": "gdest_kyoto",
          "name": "Kyoto Ancient Temples & Gion",
          "country": "Japan",
          "region": "Kansai",
          "city": "Kyoto",
          "category": "Culture",
          "tags": [
            "temples",
            "bamboo-forest",
            "unesco",
            "cherry-blossoms"
          ],
          "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
          "description": "Former imperial capital of Japan with 17 UNESCO World Heritage sites, bamboo groves, and thousand vermillion torii gates of Fushimi Inari.",
          "bestSeason": "March – May & October – November",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 4500,
            "midRange": 9000,
            "luxury": 22000
          },
          "flightHub": "Osaka KIX / Tokyo HND",
          "latitude": 35.0116,
          "longitude": 135.7681
        },
        {
          "id": "gdest_fuji",
          "name": "Mount Fuji & Five Lakes",
          "country": "Japan",
          "region": "Chubu",
          "city": "Fujikawaguchiko",
          "category": "Mountains",
          "tags": [
            "volcano",
            "sacred-peaks",
            "lakes",
            "hiking"
          ],
          "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
          "description": "Japan's sacred 3,776m snow-capped stratovolcano reflected in the serene waters of Lake Kawaguchiko.",
          "bestSeason": "July – September (Climbing) & Nov – Feb (Clear Views)",
          "recommendedDuration": 3,
          "dailyBudgetINR": {
            "budget": 4800,
            "midRange": 9500,
            "luxury": 24000
          },
          "flightHub": "Tokyo NRT / HND",
          "latitude": 35.3606,
          "longitude": 138.7274
        }
      ]
    },
    {
      "code": "CHE",
      "name": "Switzerland",
      "capital": "Bern",
      "region": "Western Europe",
      "currency": "CHF",
      "visaInfo": {
        "type": "Schengen Visa (C)",
        "indianPassport": "Schengen Visa required with biometrics via VFS",
        "officialPortal": "https://www.sem.admin.ch",
        "feeINR": 7500,
        "processingDays": 15
      },
      "flagshipDestinations": [
        {
          "id": "gdest_zermatt",
          "name": "Zermatt & Matterhorn Peak",
          "country": "Switzerland",
          "region": "Valais",
          "city": "Zermatt",
          "category": "Mountains",
          "tags": [
            "alps",
            "matterhorn",
            "skiing",
            "hiking",
            "glaciers"
          ],
          "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
          "description": "Car-free alpine paradise standing beneath the iconic pyramidal spire of the 4,478m Matterhorn.",
          "bestSeason": "December – April (Ski) & July – Sept (Hiking)",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 8500,
            "midRange": 18000,
            "luxury": 42000
          },
          "flightHub": "Zurich ZRH / Geneva GVA",
          "latitude": 45.9765,
          "longitude": 7.7491
        },
        {
          "id": "gdest_interlaken",
          "name": "Interlaken & Jungfraujoch",
          "country": "Switzerland",
          "region": "Bernese Oberland",
          "city": "Interlaken",
          "category": "Mountains",
          "tags": [
            "top-of-europe",
            "glacier-train",
            "lakes",
            "adventure"
          ],
          "image": "NATURE/119632.jpg",
          "description": "Gateway to the high Alps nestled between Lake Thun and Lake Brienz with train up to the Top of Europe (3,454m).",
          "bestSeason": "May – October & December – March",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 8000,
            "midRange": 17000,
            "luxury": 38000
          },
          "flightHub": "Zurich ZRH",
          "latitude": 46.6863,
          "longitude": 7.8632
        }
      ]
    },
    {
      "code": "THA",
      "name": "Thailand",
      "capital": "Bangkok",
      "region": "Southeast Asia",
      "currency": "THB",
      "visaInfo": {
        "type": "Visa Free Exemption",
        "indianPassport": "60 Days Visa-Free entry for Indian citizens",
        "officialPortal": "https://www.immigration.go.th",
        "feeINR": 0,
        "processingDays": 0
      },
      "flagshipDestinations": [
        {
          "id": "gdest_phuket",
          "name": "Phuket & Phi Phi Archipelago",
          "country": "Thailand",
          "region": "Andaman Sea",
          "city": "Phuket",
          "category": "Beach",
          "tags": [
            "islands",
            "limestone-cliffs",
            "snorkeling",
            "beaches"
          ],
          "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
          "description": "Towering karst cliffs rising from emerald Andaman waters, vibrant coral gardens, and white coral beaches.",
          "bestSeason": "November – April",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 2500,
            "midRange": 5500,
            "luxury": 15000
          },
          "flightHub": "Phuket HKT / Bangkok BKK",
          "latitude": 7.8804,
          "longitude": 98.3923
        },
        {
          "id": "gdest_chiangmai",
          "name": "Chiang Mai Northern Highlands",
          "country": "Thailand",
          "region": "Northern Thailand",
          "city": "Chiang Mai",
          "category": "Culture",
          "tags": [
            "temples",
            "night-bazaars",
            "elephant-sanctuaries",
            "mountains"
          ],
          "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
          "description": "Mist-cloaked mountainous cultural heart of Lanna heritage, ancient golden wats, and lush jungle sanctuaries.",
          "bestSeason": "November – February",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 2000,
            "midRange": 4500,
            "luxury": 12000
          },
          "flightHub": "Chiang Mai CNX",
          "latitude": 18.7883,
          "longitude": 98.9853
        }
      ]
    },
    {
      "code": "ARE",
      "name": "United Arab Emirates",
      "capital": "Abu Dhabi",
      "region": "Middle East",
      "currency": "AED",
      "visaInfo": {
        "type": "eVisa / VoA",
        "indianPassport": "Instant 14-day Visa on Arrival for US/UK/Schengen visa holders; 30-day eVisa for others",
        "officialPortal": "https://icp.gov.ae",
        "feeINR": 6500,
        "processingDays": 2
      },
      "flagshipDestinations": [
        {
          "id": "gdest_dubai",
          "name": "Dubai Ultra-Modern Oasis",
          "country": "United Arab Emirates",
          "region": "Emirate of Dubai",
          "city": "Dubai",
          "category": "Architecture",
          "tags": [
            "burj-khalifa",
            "desert-safari",
            "luxury",
            "skyscrapers"
          ],
          "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
          "description": "Futuristic skyscrapers, the 828m Burj Khalifa, golden desert dunes, and hyper-modern coastal architecture.",
          "bestSeason": "November – March",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 4000,
            "midRange": 9500,
            "luxury": 25000
          },
          "flightHub": "Dubai DXB",
          "latitude": 25.2048,
          "longitude": 55.2708
        }
      ]
    },
    {
      "code": "ISL",
      "name": "Iceland",
      "capital": "Reykjavik",
      "region": "Northern Europe",
      "currency": "EUR",
      "visaInfo": {
        "type": "Schengen Visa (C)",
        "indianPassport": "Schengen Visa required prior to travel",
        "officialPortal": "https://www.utl.is",
        "feeINR": 7500,
        "processingDays": 15
      },
      "flagshipDestinations": [
        {
          "id": "gdest_iceland_ring",
          "name": "Iceland Golden Circle & Aurora",
          "country": "Iceland",
          "region": "Southern Region",
          "city": "Reykjavik",
          "category": "Waterfalls",
          "tags": [
            "northern-lights",
            "geysers",
            "glaciers",
            "black-sand-beach"
          ],
          "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
          "description": "Land of fire and ice, majestic Gullfoss and Skogafoss waterfalls, steaming geysers, and dancing Aurora Borealis.",
          "bestSeason": "Sept – April (Aurora) & June – Aug (Midnight Sun)",
          "recommendedDuration": 7,
          "dailyBudgetINR": {
            "budget": 7500,
            "midRange": 16000,
            "luxury": 38000
          },
          "flightHub": "Keflavik KEF",
          "latitude": 64.1466,
          "longitude": -21.9426
        }
      ]
    },
    {
      "code": "FRA",
      "name": "France",
      "capital": "Paris",
      "region": "Western Europe",
      "currency": "EUR",
      "visaInfo": {
        "type": "Schengen Visa (C)",
        "indianPassport": "Schengen Visa required via France-Visas & VFS",
        "officialPortal": "https://france-visas.gouv.fr",
        "feeINR": 7500,
        "processingDays": 12
      },
      "flagshipDestinations": [
        {
          "id": "gdest_paris",
          "name": "Paris & The Seine Embankments",
          "country": "France",
          "region": "Île-de-France",
          "city": "Paris",
          "category": "Heritage",
          "tags": [
            "eiffel-tower",
            "louvre",
            "art",
            "gastronomy",
            "unesco"
          ],
          "image": "NATURE/101859.jpg",
          "description": "The City of Light, home to the Eiffel Tower, the Louvre, Gothic Notre-Dame, and world-class culinary art.",
          "bestSeason": "April – June & September – November",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 6500,
            "midRange": 14000,
            "luxury": 35000
          },
          "flightHub": "Paris CDG / ORY",
          "latitude": 48.8566,
          "longitude": 2.3522
        },
        {
          "id": "gdest_french_riviera",
          "name": "French Riviera & Côte d'Azur",
          "country": "France",
          "region": "Provence-Alpes-Côte d'Azur",
          "city": "Nice",
          "category": "Beach",
          "tags": [
            "mediterranean",
            "coastal-promenade",
            "monaco",
            "cannes"
          ],
          "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
          "description": "Sun-drenched Mediterranean coastline, Promenade des Anglais in Nice, clifftop medieval villages, and sapphire seas.",
          "bestSeason": "May – October",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 7000,
            "midRange": 15000,
            "luxury": 38000
          },
          "flightHub": "Nice NCE",
          "latitude": 43.7102,
          "longitude": 7.262
        }
      ]
    },
    {
      "code": "ITA",
      "name": "Italy",
      "capital": "Rome",
      "region": "Southern Europe",
      "currency": "EUR",
      "visaInfo": {
        "type": "Schengen Visa (C)",
        "indianPassport": "Schengen Visa required via VFS",
        "officialPortal": "https://vistoperitalia.esteri.it",
        "feeINR": 7500,
        "processingDays": 15
      },
      "flagshipDestinations": [
        {
          "id": "gdest_rome",
          "name": "Rome Imperial Colosseum & Vatican",
          "country": "Italy",
          "region": "Lazio",
          "city": "Rome",
          "category": "Heritage",
          "tags": [
            "colosseum",
            "vatican",
            "ancient-rome",
            "pantheon",
            "unesco"
          ],
          "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
          "description": "The Eternal City with 2,800 years of living history, the Colosseum, St. Peter's Basilica, and Fontana di Trevi.",
          "bestSeason": "April – June & October – November",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 5800,
            "midRange": 12500,
            "luxury": 30000
          },
          "flightHub": "Rome FCO",
          "latitude": 41.9028,
          "longitude": 12.4964
        },
        {
          "id": "gdest_amalfi",
          "name": "Amalfi Coast & Positano",
          "country": "Italy",
          "region": "Campania",
          "city": "Positano",
          "category": "Coastal",
          "tags": [
            "clifftop-villages",
            "mediterranean",
            "lemons",
            "scenic-drive"
          ],
          "image": "NATURE/122119.jpg",
          "description": "Dramatic vertical cliffs tumbling into the Tyrrhenian Sea, pastel-hued villages, and fragrant lemon groves.",
          "bestSeason": "May – September",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 7500,
            "midRange": 16000,
            "luxury": 40000
          },
          "flightHub": "Naples NAP",
          "latitude": 40.6281,
          "longitude": 14.485
        }
      ]
    },
    {
      "code": "GRC",
      "name": "Greece",
      "capital": "Athens",
      "region": "Southern Europe",
      "currency": "EUR",
      "visaInfo": {
        "type": "Schengen Visa (C)",
        "indianPassport": "Schengen Visa required via GVCW/VFS",
        "officialPortal": "https://www.mfa.gr",
        "feeINR": 7500,
        "processingDays": 14
      },
      "flagshipDestinations": [
        {
          "id": "gdest_santorini",
          "name": "Santorini Caldera & Oia Sunsets",
          "country": "Greece",
          "region": "Cyclades",
          "city": "Oia",
          "category": "Island",
          "tags": [
            "caldera",
            "whitewashed",
            "blue-domes",
            "aegean-sea",
            "sunsets"
          ],
          "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
          "description": "Iconic whitewashed cubic houses and sapphire-blue church domes perched 300m above a submerged volcanic caldera.",
          "bestSeason": "April – October",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 6500,
            "midRange": 14000,
            "luxury": 36000
          },
          "flightHub": "Santorini JTR / Athens ATH",
          "latitude": 36.4618,
          "longitude": 25.3753
        }
      ]
    },
    {
      "code": "ESP",
      "name": "Spain",
      "capital": "Madrid",
      "region": "Southwestern Europe",
      "currency": "EUR",
      "visaInfo": {
        "type": "Schengen Visa (C)",
        "indianPassport": "Schengen Visa required via BLS International",
        "officialPortal": "https://www.exteriores.gob.es",
        "feeINR": 7500,
        "processingDays": 15
      },
      "flagshipDestinations": [
        {
          "id": "gdest_barcelona",
          "name": "Barcelona & Gaudí's Sagrada Família",
          "country": "Spain",
          "region": "Catalonia",
          "city": "Barcelona",
          "category": "Heritage",
          "tags": [
            "sagrada-familia",
            "gaudi",
            "gothic-quarter",
            "mediterranean"
          ],
          "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
          "description": "Masterpieces of modernisme architecture, Antoni Gaudí's soaring basilica, sun-lit urban beaches, and tapas culture.",
          "bestSeason": "May – June & September – October",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 5200,
            "midRange": 11500,
            "luxury": 28000
          },
          "flightHub": "Barcelona BCN",
          "latitude": 41.3879,
          "longitude": 2.1699
        }
      ]
    },
    {
      "code": "GBR",
      "name": "United Kingdom",
      "capital": "London",
      "region": "Northwestern Europe",
      "currency": "GBP",
      "visaInfo": {
        "type": "Standard Visitor Visa",
        "indianPassport": "UK Standard Visitor Visa (6-month multi-entry)",
        "officialPortal": "https://www.gov.uk/standard-visitor-visa",
        "feeINR": 12000,
        "processingDays": 15
      },
      "flagshipDestinations": [
        {
          "id": "gdest_scotland",
          "name": "Scottish Highlands & Isle of Skye",
          "country": "United Kingdom",
          "region": "Scotland",
          "city": "Inverness",
          "category": "Mountains",
          "tags": [
            "lochs",
            "castles",
            "highlands",
            "glen-coe",
            "scenic"
          ],
          "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
          "description": "Dramatic glacial glens, legendary Loch Ness, romantic medieval castles, and the dramatic sea cliffs of the Quiraing.",
          "bestSeason": "May – September",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 6500,
            "midRange": 14000,
            "luxury": 32000
          },
          "flightHub": "Edinburgh EDI / Glasgow GLA",
          "latitude": 57.4778,
          "longitude": -4.2247
        }
      ]
    },
    {
      "code": "NOR",
      "name": "Norway",
      "capital": "Oslo",
      "region": "Northern Europe",
      "currency": "EUR",
      "visaInfo": {
        "type": "Schengen Visa (C)",
        "indianPassport": "Schengen Visa required via VFS",
        "officialPortal": "https://www.udi.no",
        "feeINR": 7500,
        "processingDays": 15
      },
      "flagshipDestinations": [
        {
          "id": "gdest_norway_fjords",
          "name": "Geirangerfjord & Lofoten Islands",
          "country": "Norway",
          "region": "Western Fjords",
          "city": "Geiranger",
          "category": "Waterfalls",
          "tags": [
            "fjords",
            "unesco",
            "midnight-sun",
            "kayaking",
            "cliffs"
          ],
          "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
          "description": "UNESCO-protected emerald fjord flanked by nearly vertical 1,000m mountains and thunderous waterfalls like the Seven Sisters.",
          "bestSeason": "June – August (Summer) & Feb – April (Aurora/Ski)",
          "recommendedDuration": 6,
          "dailyBudgetINR": {
            "budget": 8500,
            "midRange": 18000,
            "luxury": 44000
          },
          "flightHub": "Bergen BGO / Oslo OSL",
          "latitude": 62.1008,
          "longitude": 7.2059
        }
      ]
    },
    {
      "code": "TUR",
      "name": "Turkey",
      "capital": "Ankara",
      "region": "Eurasia",
      "currency": "EUR",
      "visaInfo": {
        "type": "eVisa / Sticker Visa",
        "indianPassport": "Instant eVisa for valid US/UK/Schengen visa holders; embassy visa for others",
        "officialPortal": "https://www.evisa.gov.tr",
        "feeINR": 4200,
        "processingDays": 3
      },
      "flagshipDestinations": [
        {
          "id": "gdest_cappadocia",
          "name": "Cappadocia Fairy Chimneys & Balloons",
          "country": "Turkey",
          "region": "Central Anatolia",
          "city": "Göreme",
          "category": "Landscape",
          "tags": [
            "hot-air-balloons",
            "cave-dwellings",
            "fairy-chimneys",
            "underground-cities"
          ],
          "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
          "description": "Lunar landscape of wind-sculpted tuff spires and subterranean ancient cities, famous for hundreds of sunrise hot air balloons.",
          "bestSeason": "April – June & September – November",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 3500,
            "midRange": 7800,
            "luxury": 20000
          },
          "flightHub": "Nevşehir NAV / Kayseri ASR / Istanbul IST",
          "latitude": 38.6431,
          "longitude": 34.8289
        },
        {
          "id": "gdest_istanbul",
          "name": "Istanbul Bosphorus & Hagia Sophia",
          "country": "Turkey",
          "region": "Marmara",
          "city": "Istanbul",
          "category": "Heritage",
          "tags": [
            "hagia-sophia",
            "blue-mosque",
            "bosphorus",
            "grand-bazaar"
          ],
          "image": "NATURE/101859.jpg",
          "description": "The historical crossroads of Europe and Asia spanning the Bosphorus Strait with Byzantine and Ottoman imperial grandeur.",
          "bestSeason": "April – May & September – November",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 3200,
            "midRange": 7000,
            "luxury": 18000
          },
          "flightHub": "Istanbul IST / SAW",
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      ]
    },
    {
      "code": "EGY",
      "name": "Egypt",
      "capital": "Cairo",
      "region": "North Africa",
      "currency": "USD",
      "visaInfo": {
        "type": "Visa on Arrival / eVisa",
        "indianPassport": "Visa on Arrival for Indian tourists or online eVisa",
        "officialPortal": "https://visa2egypt.gov.eg",
        "feeINR": 2200,
        "processingDays": 2
      },
      "flagshipDestinations": [
        {
          "id": "gdest_giza",
          "name": "Great Pyramids of Giza & Nile Valley",
          "country": "Egypt",
          "region": "Giza Governorate",
          "city": "Cairo",
          "category": "Archaeology",
          "tags": [
            "pyramids",
            "sphinx",
            "nile",
            "pharaohs",
            "unesco"
          ],
          "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
          "description": "Sole surviving Wonder of the Ancient World, the Great Pyramid of Khufu (circa 2560 BC) guarded by the enigmatic Great Sphinx.",
          "bestSeason": "October – April",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 2500,
            "midRange": 5500,
            "luxury": 15000
          },
          "flightHub": "Cairo CAI",
          "latitude": 29.9792,
          "longitude": 31.1342
        }
      ]
    },
    {
      "code": "MAR",
      "name": "Morocco",
      "capital": "Rabat",
      "region": "North Africa",
      "currency": "USD",
      "visaInfo": {
        "type": "eVisa",
        "indianPassport": "Online eVisa for Indian passport holders",
        "officialPortal": "https://www.acces-maroc.ma",
        "feeINR": 6500,
        "processingDays": 3
      },
      "flagshipDestinations": [
        {
          "id": "gdest_marrakech",
          "name": "Marrakech Medina & Sahara Merzouga",
          "country": "Morocco",
          "region": "Marrakech-Safi",
          "city": "Marrakech",
          "category": "Culture",
          "tags": [
            "medina",
            "souks",
            "sahara-dunes",
            "riads",
            "atlas-mountains"
          ],
          "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
          "description": "The Red City's labyrinths of spice souks and Jemaa el-Fnaa square leading to the towering golden Erg Chebbi dunes of the Sahara.",
          "bestSeason": "October – April",
          "recommendedDuration": 6,
          "dailyBudgetINR": {
            "budget": 3200,
            "midRange": 7200,
            "luxury": 18000
          },
          "flightHub": "Marrakech RAK / Casablanca CMN",
          "latitude": 31.6295,
          "longitude": -7.9811
        }
      ]
    },
    {
      "code": "KEN",
      "name": "Kenya",
      "capital": "Nairobi",
      "region": "East Africa",
      "currency": "USD",
      "visaInfo": {
        "type": "Electronic Travel Authorisation (eTA)",
        "indianPassport": "Visa-Free regime with online eTA system",
        "officialPortal": "https://www.etakenya.go.ke",
        "feeINR": 2800,
        "processingDays": 3
      },
      "flagshipDestinations": [
        {
          "id": "gdest_masaimara",
          "name": "Masai Mara Great Wildebeest Migration",
          "country": "Kenya",
          "region": "Rift Valley",
          "city": "Narok",
          "category": "Wildlife",
          "tags": [
            "safari",
            "big-five",
            "great-migration",
            "savannah",
            "lions"
          ],
          "image": "NATURE/119632.jpg",
          "description": "World's most spectacle wildlife arena, sweeping acacia plains home to millions of migrating wildebeest, lions, and leopards.",
          "bestSeason": "July – October (Great Migration) & Jan – Feb",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 8500,
            "midRange": 19000,
            "luxury": 45000
          },
          "flightHub": "Nairobi NBO",
          "latitude": -1.4061,
          "longitude": 35.0085
        }
      ]
    },
    {
      "code": "ZAF",
      "name": "South Africa",
      "capital": "Pretoria",
      "region": "Southern Africa",
      "currency": "USD",
      "visaInfo": {
        "type": "eVisa / Embassy Visa",
        "indianPassport": "Online eVisa or VFS submission",
        "officialPortal": "https://ehome.dha.gov.za/epermit",
        "feeINR": 3500,
        "processingDays": 10
      },
      "flagshipDestinations": [
        {
          "id": "gdest_capetown",
          "name": "Cape Town Table Mountain & Cape Point",
          "country": "South Africa",
          "region": "Western Cape",
          "city": "Cape Town",
          "category": "Coastal",
          "tags": [
            "table-mountain",
            "penguins",
            "cape-of-good-hope",
            "winelands"
          ],
          "image": "NATURE/122119.jpg",
          "description": "Dramatic mountain-meets-ocean peninsula crowned by Table Mountain, penguin colonies at Boulders Beach, and scenic coastal drives.",
          "bestSeason": "November – March",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 3800,
            "midRange": 8500,
            "luxury": 22000
          },
          "flightHub": "Cape Town CPT",
          "latitude": -33.9249,
          "longitude": 18.4241
        }
      ]
    },
    {
      "code": "VNM",
      "name": "Vietnam",
      "capital": "Hanoi",
      "region": "Southeast Asia",
      "currency": "USD",
      "visaInfo": {
        "type": "eVisa",
        "indianPassport": "Online 90-day multi/single entry eVisa for Indian passport holders",
        "officialPortal": "https://evisa.xuatnhapcanh.gov.vn",
        "feeINR": 2100,
        "processingDays": 3
      },
      "flagshipDestinations": [
        {
          "id": "gdest_halong",
          "name": "Ha Long Bay Emerald Karst Waters",
          "country": "Vietnam",
          "region": "Quang Ninh",
          "city": "Ha Long",
          "category": "Coastal",
          "tags": [
            "unesco",
            "karst-islands",
            "caves",
            "cruises",
            "emerald-sea"
          ],
          "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
          "description": "Over 1,600 limestone monolithic pillars and islets topped with rainforests rising from the tranquil Gulf of Tonkin.",
          "bestSeason": "October – December & March – April",
          "recommendedDuration": 3,
          "dailyBudgetINR": {
            "budget": 2000,
            "midRange": 4500,
            "luxury": 12000
          },
          "flightHub": "Hanoi HAN",
          "latitude": 20.9101,
          "longitude": 107.1839
        },
        {
          "id": "gdest_hoian",
          "name": "Hoi An Ancient Lantern Town",
          "country": "Vietnam",
          "region": "Quang Nam",
          "city": "Hoi An",
          "category": "Heritage",
          "tags": [
            "lanterns",
            "unesco",
            "tailors",
            "ancient-trading-port"
          ],
          "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
          "description": "Exquisitely preserved Southeast Asian trading port illuminated every evening by thousands of silk lanterns along the Thu Bon River.",
          "bestSeason": "February – July",
          "recommendedDuration": 3,
          "dailyBudgetINR": {
            "budget": 1800,
            "midRange": 4000,
            "luxury": 10000
          },
          "flightHub": "Da Nang DAD",
          "latitude": 15.8801,
          "longitude": 108.338
        }
      ]
    },
    {
      "code": "IDN",
      "name": "Indonesia",
      "capital": "Jakarta",
      "region": "Southeast Asia",
      "currency": "IDR",
      "visaInfo": {
        "type": "e-VoA / Visa on Arrival",
        "indianPassport": "30-day Visa on Arrival / e-VoA (extendable to 60 days)",
        "officialPortal": "https://molina.imigrasi.go.id",
        "feeINR": 2700,
        "processingDays": 1
      },
      "flagshipDestinations": [
        {
          "id": "gdest_bali",
          "name": "Bali Cultural Highlands & Nusa Penida",
          "country": "Indonesia",
          "region": "Bali Province",
          "city": "Ubud",
          "category": "Culture",
          "tags": [
            "rice-terraces",
            "waterfalls",
            "coral-reefs",
            "hindu-temples",
            "beaches"
          ],
          "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
          "description": "The Island of the Gods, emerald Tegalalang rice terraces, sacred sea temples of Uluwatu and Tanah Lot, and dramatic Kelingking cliffs.",
          "bestSeason": "April – October",
          "recommendedDuration": 6,
          "dailyBudgetINR": {
            "budget": 2200,
            "midRange": 5000,
            "luxury": 14000
          },
          "flightHub": "Denpasar DPS",
          "latitude": -8.5069,
          "longitude": 115.2625
        },
        {
          "id": "gdest_komodo",
          "name": "Komodo National Park & Pink Beach",
          "country": "Indonesia",
          "region": "East Nusa Tenggara",
          "city": "Labuan Bajo",
          "category": "Wildlife",
          "tags": [
            "komodo-dragons",
            "pink-beach",
            "manta-rays",
            "islands",
            "unesco"
          ],
          "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
          "description": "World's only natural sanctuary of the prehistoric Komodo Dragon, featuring rare pink sand beaches and world-class manta dive sites.",
          "bestSeason": "April – November",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 3500,
            "midRange": 8000,
            "luxury": 22000
          },
          "flightHub": "Labuan Bajo LBJ",
          "latitude": -8.5562,
          "longitude": 119.489
        }
      ]
    },
    {
      "code": "MYS",
      "name": "Malaysia",
      "capital": "Kuala Lumpur",
      "region": "Southeast Asia",
      "currency": "MYR",
      "visaInfo": {
        "type": "Visa Free",
        "indianPassport": "30 Days Visa-Free entry for Indian citizens",
        "officialPortal": "https://www.imi.gov.my",
        "feeINR": 0,
        "processingDays": 0
      },
      "flagshipDestinations": [
        {
          "id": "gdest_kl",
          "name": "Kuala Lumpur & Batu Caves",
          "country": "Malaysia",
          "region": "Federal Territory",
          "city": "Kuala Lumpur",
          "category": "Architecture",
          "tags": [
            "petronas-towers",
            "batu-caves",
            "food",
            "skyscrapers"
          ],
          "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
          "description": "Gleaming 452m Petronas Twin Towers, ancient limestone cavern temples of Batu Caves, and multicultural hawker food streets.",
          "bestSeason": "May – July & December – February",
          "recommendedDuration": 3,
          "dailyBudgetINR": {
            "budget": 2200,
            "midRange": 4800,
            "luxury": 13000
          },
          "flightHub": "Kuala Lumpur KUL",
          "latitude": 3.139,
          "longitude": 101.6869
        },
        {
          "id": "gdest_langkawi",
          "name": "Langkawi Archipelago & Sky Bridge",
          "country": "Malaysia",
          "region": "Kedah",
          "city": "Kuah",
          "category": "Beach",
          "tags": [
            "geopark",
            "cable-car",
            "mangroves",
            "duty-free",
            "beaches"
          ],
          "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
          "description": "Jewel of Kedah with 99 islands, UNESCO Global Geopark mangroves, and a curved curved sky bridge suspended 660m above sea level.",
          "bestSeason": "November – April",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 2500,
            "midRange": 5500,
            "luxury": 14000
          },
          "flightHub": "Langkawi LGK",
          "latitude": 6.35,
          "longitude": 99.8
        }
      ]
    },
    {
      "code": "SGP",
      "name": "Singapore",
      "capital": "Singapore",
      "region": "Southeast Asia",
      "currency": "SGD",
      "visaInfo": {
        "type": "eVisa",
        "indianPassport": "Paper/eVisa required prior to travel via authorized agents",
        "officialPortal": "https://www.ica.gov.sg",
        "feeINR": 2200,
        "processingDays": 3
      },
      "flagshipDestinations": [
        {
          "id": "gdest_singapore",
          "name": "Marina Bay & Gardens by the Bay",
          "country": "Singapore",
          "region": "Central Region",
          "city": "Singapore",
          "category": "Architecture",
          "tags": [
            "supertrees",
            "skypark",
            "cloud-forest",
            "clean-city"
          ],
          "image": "NATURE/101859.jpg",
          "description": "Global garden city renowned for towering Supertree structures, futuristic climate conservatories, and Marina Bay Sands.",
          "bestSeason": "November – January & June – August",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 4500,
            "midRange": 10500,
            "luxury": 28000
          },
          "flightHub": "Singapore SIN",
          "latitude": 1.2847,
          "longitude": 103.861
        }
      ]
    },
    {
      "code": "MDV",
      "name": "Maldives",
      "capital": "Malé",
      "region": "South Asia",
      "currency": "USD",
      "visaInfo": {
        "type": "Visa on Arrival",
        "indianPassport": "Free 30-day Visa on Arrival for Indian citizens",
        "officialPortal": "https://immigration.gov.mv",
        "feeINR": 0,
        "processingDays": 0
      },
      "flagshipDestinations": [
        {
          "id": "gdest_maldives",
          "name": "Baa Atoll & Turquoise Lagoons",
          "country": "Maldives",
          "region": "Baa Atoll",
          "city": "Eydhafushi",
          "category": "Island",
          "tags": [
            "overwater-villas",
            "manta-rays",
            "coral-atolls",
            "snorkeling",
            "unesco"
          ],
          "image": "NATURE/122119.jpg",
          "description": "UNESCO Biosphere Reserve with the world's largest gathering of manta rays at Hanifaru Bay, crystal lagoons, and overwater bungalows.",
          "bestSeason": "November – April",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 5500,
            "midRange": 16000,
            "luxury": 45000
          },
          "flightHub": "Malé MLE",
          "latitude": 5.1432,
          "longitude": 72.9774
        }
      ]
    },
    {
      "code": "LKA",
      "name": "Sri Lanka",
      "capital": "Colombo",
      "region": "South Asia",
      "currency": "LKR",
      "visaInfo": {
        "type": "ETA / Visa Free Pilot",
        "indianPassport": "Free ETA / Visa waiver pilot scheme for Indian citizens",
        "officialPortal": "https://www.eta.gov.lk",
        "feeINR": 0,
        "processingDays": 1
      },
      "flagshipDestinations": [
        {
          "id": "gdest_sigiriya",
          "name": "Sigiriya Lion Rock & Ella Tea Hills",
          "country": "Sri Lanka",
          "region": "Central Province",
          "city": "Sigiriya",
          "category": "Heritage",
          "tags": [
            "lion-rock",
            "tea-plantations",
            "train-ride",
            "fortress",
            "unesco"
          ],
          "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
          "description": "A 200m vertical granite citadel rising above tropical forests, ancient frescoes, mirror walls, and scenic tea train journeys to Ella.",
          "bestSeason": "December – April & July – September",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 1800,
            "midRange": 4200,
            "luxury": 11000
          },
          "flightHub": "Colombo CMB",
          "latitude": 7.957,
          "longitude": 80.7603
        }
      ]
    },
    {
      "code": "NPL",
      "name": "Nepal",
      "capital": "Kathmandu",
      "region": "South Asia",
      "currency": "NPR",
      "visaInfo": {
        "type": "Freedom of Movement",
        "indianPassport": "No Visa required for Indian citizens (Valid Passport or Voter ID sufficient)",
        "officialPortal": "https://nepalimmigration.gov.np",
        "feeINR": 0,
        "processingDays": 0
      },
      "flagshipDestinations": [
        {
          "id": "gdest_everest",
          "name": "Everest Base Camp & Pokhara Lake",
          "country": "Nepal",
          "region": "Khumbu / Gandaki",
          "city": "Pokhara",
          "category": "Mountains",
          "tags": [
            "himalayas",
            "everest",
            "annapurna",
            "paragliding",
            "trekking"
          ],
          "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
          "description": "The roof of the world, epic trekking routes under Mount Everest (8,848m) and serene Phewa Lake overlooking the Annapurna range.",
          "bestSeason": "October – December & March – May",
          "recommendedDuration": 7,
          "dailyBudgetINR": {
            "budget": 1500,
            "midRange": 3500,
            "luxury": 9000
          },
          "flightHub": "Kathmandu KTM",
          "latitude": 28.2096,
          "longitude": 83.9856
        }
      ]
    },
    {
      "code": "BTN",
      "name": "Bhutan",
      "capital": "Thimphu",
      "region": "South Asia",
      "currency": "BTN",
      "visaInfo": {
        "type": "Entry Permit",
        "indianPassport": "Entry Permit issued with Sustainable Development Fee (SDF) of ₹1,200/day for Indians",
        "officialPortal": "https://www.doi.gov.bt",
        "feeINR": 1200,
        "processingDays": 3
      },
      "flagshipDestinations": [
        {
          "id": "gdest_bhutan_tigersnest",
          "name": "Paro Taktsang (Tiger's Nest Monastery)",
          "country": "Bhutan",
          "region": "Paro Valley",
          "city": "Paro",
          "category": "Spiritual",
          "tags": [
            "clifftop-monastery",
            "himalayas",
            "dzongs",
            "gross-national-happiness"
          ],
          "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
          "description": "Iconic 17th-century Himalayan Buddhist monastery clinging miraculously to a sheer 900m cliff face overlooking the Paro valley.",
          "bestSeason": "March – May & September – November",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 3500,
            "midRange": 7500,
            "luxury": 18000
          },
          "flightHub": "Paro PBH",
          "latitude": 27.4919,
          "longitude": 89.3635
        }
      ]
    },
    {
      "code": "AUS",
      "name": "Australia",
      "capital": "Canberra",
      "region": "Oceania",
      "currency": "AUD",
      "visaInfo": {
        "type": "Visitor Visa (Subclass 600)",
        "indianPassport": "Online Australian Tourist Visa (Subclass 600)",
        "officialPortal": "https://immi.homeaffairs.gov.au",
        "feeINR": 10500,
        "processingDays": 20
      },
      "flagshipDestinations": [
        {
          "id": "gdest_sydney",
          "name": "Sydney Harbour & Great Barrier Reef",
          "country": "Australia",
          "region": "NSW & Queensland",
          "city": "Sydney",
          "category": "Coastal",
          "tags": [
            "opera-house",
            "great-barrier-reef",
            "surfing",
            "coral-sea"
          ],
          "image": "NATURE/122119.jpg",
          "description": "World-famous Sydney Opera House sails, Harbour Bridge climbs, and the 2,300km living underwater wonderland of the Great Barrier Reef.",
          "bestSeason": "September – November & March – May",
          "recommendedDuration": 7,
          "dailyBudgetINR": {
            "budget": 6500,
            "midRange": 14000,
            "luxury": 32000
          },
          "flightHub": "Sydney SYD / Cairns CNS",
          "latitude": -33.8688,
          "longitude": 151.2093
        }
      ]
    },
    {
      "code": "NZL",
      "name": "New Zealand",
      "capital": "Wellington",
      "region": "Oceania",
      "currency": "AUD",
      "visaInfo": {
        "type": "Visitor Visa",
        "indianPassport": "Online Visitor Visa required",
        "officialPortal": "https://www.immigration.govt.nz",
        "feeINR": 11000,
        "processingDays": 20
      },
      "flagshipDestinations": [
        {
          "id": "gdest_queenstown",
          "name": "Queenstown & Milford Sound Fiordland",
          "country": "New Zealand",
          "region": "Otago / Southland",
          "city": "Queenstown",
          "category": "Mountains",
          "tags": [
            "fiords",
            "adventure-capital",
            "bungy",
            "glaciers",
            "lord-of-the-rings"
          ],
          "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
          "description": "World's adventure capital on the shores of Lake Wakatipu, and the eighth wonder of the world: majestic Mitre Peak and Milford Sound.",
          "bestSeason": "December – February (Summer) & June – August (Ski)",
          "recommendedDuration": 6,
          "dailyBudgetINR": {
            "budget": 7000,
            "midRange": 15000,
            "luxury": 34000
          },
          "flightHub": "Queenstown ZQN / Auckland AKL",
          "latitude": -45.0312,
          "longitude": 168.6626
        }
      ]
    },
    {
      "code": "USA",
      "name": "United States",
      "capital": "Washington, D.C.",
      "region": "North America",
      "currency": "USD",
      "visaInfo": {
        "type": "B1/B2 Visitor Visa",
        "indianPassport": "B1/B2 Visa with in-person interview appointment",
        "officialPortal": "https://travel.state.gov",
        "feeINR": 15500,
        "processingDays": 30
      },
      "flagshipDestinations": [
        {
          "id": "gdest_grandcanyon",
          "name": "Grand Canyon & Western National Parks",
          "country": "United States",
          "region": "Arizona / Utah",
          "city": "Flagstaff",
          "category": "Landscape",
          "tags": [
            "grand-canyon",
            "red-rocks",
            "colorado-river",
            "monument-valley"
          ],
          "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
          "description": "One mile deep and 277 miles long, immense multi-colored gorge carved over six million years by the mighty Colorado River.",
          "bestSeason": "March – May & September – November",
          "recommendedDuration": 6,
          "dailyBudgetINR": {
            "budget": 7500,
            "midRange": 16000,
            "luxury": 38000
          },
          "flightHub": "Las Vegas LAS / Phoenix PHX",
          "latitude": 36.0544,
          "longitude": -112.1401
        }
      ]
    },
    {
      "code": "CAN",
      "name": "Canada",
      "capital": "Ottawa",
      "region": "North America",
      "currency": "CAD",
      "visaInfo": {
        "type": "Visitor Visa (TRV)",
        "indianPassport": "Temporary Resident Visa (TRV) required",
        "officialPortal": "https://www.canada.ca/en/immigration-refugees-citizenship.html",
        "feeINR": 8500,
        "processingDays": 25
      },
      "flagshipDestinations": [
        {
          "id": "gdest_banff",
          "name": "Banff National Park & Lake Louise",
          "country": "Canada",
          "region": "Alberta",
          "city": "Banff",
          "category": "Lakes",
          "tags": [
            "rocky-mountains",
            "turquoise-lakes",
            "glaciers",
            "wildlife"
          ],
          "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
          "description": "Glacier-fed turquoise lakes, towering snow-capped peaks of the Canadian Rockies, hot springs, and abundant wildlife.",
          "bestSeason": "June – September (Lakes) & Dec – April (Ski)",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 6800,
            "midRange": 14500,
            "luxury": 34000
          },
          "flightHub": "Calgary YYC",
          "latitude": 51.1784,
          "longitude": -115.5708
        }
      ]
    },
    {
      "code": "PER",
      "name": "Peru",
      "capital": "Lima",
      "region": "South America",
      "currency": "USD",
      "visaInfo": {
        "type": "Tourist Visa / Visa Waiver",
        "indianPassport": "Visa Exemption for valid US, UK, Canada, Australia, or Schengen visa holders",
        "officialPortal": "https://www.gob.pe/rree",
        "feeINR": 2500,
        "processingDays": 5
      },
      "flagshipDestinations": [
        {
          "id": "gdest_machupicchu",
          "name": "Machu Picchu & Sacred Valley of the Incas",
          "country": "Peru",
          "region": "Cusco",
          "city": "Aguas Calientes",
          "category": "Archaeology",
          "tags": [
            "incas",
            "lost-city",
            "andes",
            "trekking",
            "unesco"
          ],
          "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
          "description": "15th-century Inca citadel built 2,430m above sea level on a mountain ridge in the Amazonian Andes, framed by Huayna Picchu.",
          "bestSeason": "May – October",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 3500,
            "midRange": 7500,
            "luxury": 19000
          },
          "flightHub": "Cusco CUZ / Lima LIM",
          "latitude": -13.1631,
          "longitude": -72.545
        }
      ]
    },
    {
      "code": "GEO",
      "name": "Georgia",
      "capital": "Tbilisi",
      "region": "Caucasus",
      "currency": "USD",
      "visaInfo": {
        "type": "eVisa / Visa-Free",
        "indianPassport": "Visa-Free for valid US/UK/Schengen visa; simple online eVisa for others",
        "officialPortal": "https://www.evisa.gov.ge",
        "feeINR": 2100,
        "processingDays": 5
      },
      "flagshipDestinations": [
        {
          "id": "gdest_kazbegi",
          "name": "Kazbegi Mount & Gergeti Trinity Church",
          "country": "Georgia",
          "region": "Mtskheta-Mtianeti",
          "city": "Stepantsminda",
          "category": "Mountains",
          "tags": [
            "caucasus",
            "clifftop-church",
            "snow-peaks",
            "hiking"
          ],
          "image": "NATURE/119632.jpg",
          "description": "14th-century stone church dramatically isolated against the backdrop of 5,047m Mount Kazbek in the high Caucasus.",
          "bestSeason": "May – October",
          "recommendedDuration": 4,
          "dailyBudgetINR": {
            "budget": 2400,
            "midRange": 5000,
            "luxury": 13000
          },
          "flightHub": "Tbilisi TBS",
          "latitude": 42.6587,
          "longitude": 44.6414
        }
      ]
    },
    {
      "code": "OMN",
      "name": "Oman",
      "capital": "Muscat",
      "region": "Middle East",
      "currency": "AED",
      "visaInfo": {
        "type": "eVisa / Visa-Free 14 Days",
        "indianPassport": "14-Day Visa-Free entry for Indian citizens meeting specific residency/visa conditions; 30-day eVisa for others",
        "officialPortal": "https://evisa.rop.gov.om",
        "feeINR": 4200,
        "processingDays": 2
      },
      "flagshipDestinations": [
        {
          "id": "gdest_muscat",
          "name": "Muscat Grand Mosque & Wahiba Sands",
          "country": "Oman",
          "region": "Muscat Governorate",
          "city": "Muscat",
          "category": "Culture",
          "tags": [
            "grand-mosque",
            "wadis",
            "desert-dunes",
            "fjords-of-musandam"
          ],
          "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
          "description": "Sultan Qaboos Grand Mosque, turquoise natural swimming holes of Wadi Shab, and towering saffron dunes of the Wahiba Sands.",
          "bestSeason": "October – April",
          "recommendedDuration": 5,
          "dailyBudgetINR": {
            "budget": 3800,
            "midRange": 8200,
            "luxury": 21000
          },
          "flightHub": "Muscat MCT",
          "latitude": 23.588,
          "longitude": 58.3829
        }
      ]
    },
    {
      "code": "MUS",
      "name": "Mauritius",
      "capital": "Port Louis",
      "region": "Indian Ocean",
      "currency": "USD",
      "visaInfo": {
        "type": "Visa on Arrival",
        "indianPassport": "Free 60-day Visa on Arrival for Indian passport holders",
        "officialPortal": "https://passport.govmu.org",
        "feeINR": 0,
        "processingDays": 0
      },
      "flagshipDestinations": [
        {
          "id": "gdest_mauritius",
          "name": "Le Morne Brabant & Chamarel Dunes",
          "country": "Mauritius",
          "region": "Black River District",
          "city": "Le Morne",
          "category": "Beach",
          "tags": [
            "underwater-waterfall",
            "coral-reefs",
            "unesco",
            "seven-coloured-earth"
          ],
          "image": "NATURE/122119.jpg",
          "description": "UNESCO basalt mountain rising 556m above sapphire lagoons, optical illusion of underwater waterfalls, and seven-coloured volcanic dunes.",
          "bestSeason": "May – December",
          "recommendedDuration": 6,
          "dailyBudgetINR": {
            "budget": 4500,
            "midRange": 11000,
            "luxury": 28000
          },
          "flightHub": "Sir Seewoosagur Ramgoolam MRU",
          "latitude": -20.4497,
          "longitude": 57.3276
        }
      ]
    }
  ],
  "destinations": [
    {
      "id": "gdest_kyoto",
      "name": "Kyoto Ancient Temples & Gion",
      "country": "Japan",
      "region": "Kansai",
      "city": "Kyoto",
      "category": "Culture",
      "tags": [
        "temples",
        "bamboo-forest",
        "unesco",
        "cherry-blossoms"
      ],
      "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
      "description": "Former imperial capital of Japan with 17 UNESCO World Heritage sites, bamboo groves, and thousand vermillion torii gates of Fushimi Inari.",
      "bestSeason": "March – May & October – November",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 4500,
        "midRange": 9000,
        "luxury": 22000
      },
      "flightHub": "Osaka KIX / Tokyo HND",
      "countryCode": "JPN",
      "countryName": "Japan",
      "visaType": "eVisa",
      "indianPassportVisa": "Online eVisa (90-day tourist entry)",
      "visaPortal": "https://www.mofa.go.jp/j_info/visit/visa/index.html",
      "latitude": 35.0116,
      "longitude": 135.7681
    },
    {
      "id": "gdest_fuji",
      "name": "Mount Fuji & Five Lakes",
      "country": "Japan",
      "region": "Chubu",
      "city": "Fujikawaguchiko",
      "category": "Mountains",
      "tags": [
        "volcano",
        "sacred-peaks",
        "lakes",
        "hiking"
      ],
      "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
      "description": "Japan's sacred 3,776m snow-capped stratovolcano reflected in the serene waters of Lake Kawaguchiko.",
      "bestSeason": "July – September (Climbing) & Nov – Feb (Clear Views)",
      "recommendedDuration": 3,
      "dailyBudgetINR": {
        "budget": 4800,
        "midRange": 9500,
        "luxury": 24000
      },
      "flightHub": "Tokyo NRT / HND",
      "countryCode": "JPN",
      "countryName": "Japan",
      "visaType": "eVisa",
      "indianPassportVisa": "Online eVisa (90-day tourist entry)",
      "visaPortal": "https://www.mofa.go.jp/j_info/visit/visa/index.html",
      "latitude": 35.3606,
      "longitude": 138.7274
    },
    {
      "id": "gdest_zermatt",
      "name": "Zermatt & Matterhorn Peak",
      "country": "Switzerland",
      "region": "Valais",
      "city": "Zermatt",
      "category": "Mountains",
      "tags": [
        "alps",
        "matterhorn",
        "skiing",
        "hiking",
        "glaciers"
      ],
      "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
      "description": "Car-free alpine paradise standing beneath the iconic pyramidal spire of the 4,478m Matterhorn.",
      "bestSeason": "December – April (Ski) & July – Sept (Hiking)",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 8500,
        "midRange": 18000,
        "luxury": 42000
      },
      "flightHub": "Zurich ZRH / Geneva GVA",
      "countryCode": "CHE",
      "countryName": "Switzerland",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required with biometrics via VFS",
      "visaPortal": "https://www.sem.admin.ch",
      "latitude": 45.9765,
      "longitude": 7.7491
    },
    {
      "id": "gdest_interlaken",
      "name": "Interlaken & Jungfraujoch",
      "country": "Switzerland",
      "region": "Bernese Oberland",
      "city": "Interlaken",
      "category": "Mountains",
      "tags": [
        "top-of-europe",
        "glacier-train",
        "lakes",
        "adventure"
      ],
      "image": "NATURE/119632.jpg",
      "description": "Gateway to the high Alps nestled between Lake Thun and Lake Brienz with train up to the Top of Europe (3,454m).",
      "bestSeason": "May – October & December – March",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 8000,
        "midRange": 17000,
        "luxury": 38000
      },
      "flightHub": "Zurich ZRH",
      "countryCode": "CHE",
      "countryName": "Switzerland",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required with biometrics via VFS",
      "visaPortal": "https://www.sem.admin.ch",
      "latitude": 46.6863,
      "longitude": 7.8632
    },
    {
      "id": "gdest_phuket",
      "name": "Phuket & Phi Phi Archipelago",
      "country": "Thailand",
      "region": "Andaman Sea",
      "city": "Phuket",
      "category": "Beach",
      "tags": [
        "islands",
        "limestone-cliffs",
        "snorkeling",
        "beaches"
      ],
      "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
      "description": "Towering karst cliffs rising from emerald Andaman waters, vibrant coral gardens, and white coral beaches.",
      "bestSeason": "November – April",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 2500,
        "midRange": 5500,
        "luxury": 15000
      },
      "flightHub": "Phuket HKT / Bangkok BKK",
      "countryCode": "THA",
      "countryName": "Thailand",
      "visaType": "Visa Free Exemption",
      "indianPassportVisa": "60 Days Visa-Free entry for Indian citizens",
      "visaPortal": "https://www.immigration.go.th",
      "latitude": 7.8804,
      "longitude": 98.3923
    },
    {
      "id": "gdest_chiangmai",
      "name": "Chiang Mai Northern Highlands",
      "country": "Thailand",
      "region": "Northern Thailand",
      "city": "Chiang Mai",
      "category": "Culture",
      "tags": [
        "temples",
        "night-bazaars",
        "elephant-sanctuaries",
        "mountains"
      ],
      "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      "description": "Mist-cloaked mountainous cultural heart of Lanna heritage, ancient golden wats, and lush jungle sanctuaries.",
      "bestSeason": "November – February",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 2000,
        "midRange": 4500,
        "luxury": 12000
      },
      "flightHub": "Chiang Mai CNX",
      "countryCode": "THA",
      "countryName": "Thailand",
      "visaType": "Visa Free Exemption",
      "indianPassportVisa": "60 Days Visa-Free entry for Indian citizens",
      "visaPortal": "https://www.immigration.go.th",
      "latitude": 18.7883,
      "longitude": 98.9853
    },
    {
      "id": "gdest_dubai",
      "name": "Dubai Ultra-Modern Oasis",
      "country": "United Arab Emirates",
      "region": "Emirate of Dubai",
      "city": "Dubai",
      "category": "Architecture",
      "tags": [
        "burj-khalifa",
        "desert-safari",
        "luxury",
        "skyscrapers"
      ],
      "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
      "description": "Futuristic skyscrapers, the 828m Burj Khalifa, golden desert dunes, and hyper-modern coastal architecture.",
      "bestSeason": "November – March",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 4000,
        "midRange": 9500,
        "luxury": 25000
      },
      "flightHub": "Dubai DXB",
      "countryCode": "ARE",
      "countryName": "United Arab Emirates",
      "visaType": "eVisa / VoA",
      "indianPassportVisa": "Instant 14-day Visa on Arrival for US/UK/Schengen visa holders; 30-day eVisa for others",
      "visaPortal": "https://icp.gov.ae",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    {
      "id": "gdest_iceland_ring",
      "name": "Iceland Golden Circle & Aurora",
      "country": "Iceland",
      "region": "Southern Region",
      "city": "Reykjavik",
      "category": "Waterfalls",
      "tags": [
        "northern-lights",
        "geysers",
        "glaciers",
        "black-sand-beach"
      ],
      "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
      "description": "Land of fire and ice, majestic Gullfoss and Skogafoss waterfalls, steaming geysers, and dancing Aurora Borealis.",
      "bestSeason": "Sept – April (Aurora) & June – Aug (Midnight Sun)",
      "recommendedDuration": 7,
      "dailyBudgetINR": {
        "budget": 7500,
        "midRange": 16000,
        "luxury": 38000
      },
      "flightHub": "Keflavik KEF",
      "countryCode": "ISL",
      "countryName": "Iceland",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required prior to travel",
      "visaPortal": "https://www.utl.is",
      "latitude": 64.1466,
      "longitude": -21.9426
    },
    {
      "id": "gdest_paris",
      "name": "Paris & The Seine Embankments",
      "country": "France",
      "region": "Île-de-France",
      "city": "Paris",
      "category": "Heritage",
      "tags": [
        "eiffel-tower",
        "louvre",
        "art",
        "gastronomy",
        "unesco"
      ],
      "image": "NATURE/101859.jpg",
      "description": "The City of Light, home to the Eiffel Tower, the Louvre, Gothic Notre-Dame, and world-class culinary art.",
      "bestSeason": "April – June & September – November",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 6500,
        "midRange": 14000,
        "luxury": 35000
      },
      "flightHub": "Paris CDG / ORY",
      "countryCode": "FRA",
      "countryName": "France",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required via France-Visas & VFS",
      "visaPortal": "https://france-visas.gouv.fr",
      "latitude": 48.8566,
      "longitude": 2.3522
    },
    {
      "id": "gdest_french_riviera",
      "name": "French Riviera & Côte d'Azur",
      "country": "France",
      "region": "Provence-Alpes-Côte d'Azur",
      "city": "Nice",
      "category": "Beach",
      "tags": [
        "mediterranean",
        "coastal-promenade",
        "monaco",
        "cannes"
      ],
      "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
      "description": "Sun-drenched Mediterranean coastline, Promenade des Anglais in Nice, clifftop medieval villages, and sapphire seas.",
      "bestSeason": "May – October",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 7000,
        "midRange": 15000,
        "luxury": 38000
      },
      "flightHub": "Nice NCE",
      "countryCode": "FRA",
      "countryName": "France",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required via France-Visas & VFS",
      "visaPortal": "https://france-visas.gouv.fr",
      "latitude": 43.7102,
      "longitude": 7.262
    },
    {
      "id": "gdest_rome",
      "name": "Rome Imperial Colosseum & Vatican",
      "country": "Italy",
      "region": "Lazio",
      "city": "Rome",
      "category": "Heritage",
      "tags": [
        "colosseum",
        "vatican",
        "ancient-rome",
        "pantheon",
        "unesco"
      ],
      "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      "description": "The Eternal City with 2,800 years of living history, the Colosseum, St. Peter's Basilica, and Fontana di Trevi.",
      "bestSeason": "April – June & October – November",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 5800,
        "midRange": 12500,
        "luxury": 30000
      },
      "flightHub": "Rome FCO",
      "countryCode": "ITA",
      "countryName": "Italy",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required via VFS",
      "visaPortal": "https://vistoperitalia.esteri.it",
      "latitude": 41.9028,
      "longitude": 12.4964
    },
    {
      "id": "gdest_amalfi",
      "name": "Amalfi Coast & Positano",
      "country": "Italy",
      "region": "Campania",
      "city": "Positano",
      "category": "Coastal",
      "tags": [
        "clifftop-villages",
        "mediterranean",
        "lemons",
        "scenic-drive"
      ],
      "image": "NATURE/122119.jpg",
      "description": "Dramatic vertical cliffs tumbling into the Tyrrhenian Sea, pastel-hued villages, and fragrant lemon groves.",
      "bestSeason": "May – September",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 7500,
        "midRange": 16000,
        "luxury": 40000
      },
      "flightHub": "Naples NAP",
      "countryCode": "ITA",
      "countryName": "Italy",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required via VFS",
      "visaPortal": "https://vistoperitalia.esteri.it",
      "latitude": 40.6281,
      "longitude": 14.485
    },
    {
      "id": "gdest_santorini",
      "name": "Santorini Caldera & Oia Sunsets",
      "country": "Greece",
      "region": "Cyclades",
      "city": "Oia",
      "category": "Island",
      "tags": [
        "caldera",
        "whitewashed",
        "blue-domes",
        "aegean-sea",
        "sunsets"
      ],
      "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
      "description": "Iconic whitewashed cubic houses and sapphire-blue church domes perched 300m above a submerged volcanic caldera.",
      "bestSeason": "April – October",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 6500,
        "midRange": 14000,
        "luxury": 36000
      },
      "flightHub": "Santorini JTR / Athens ATH",
      "countryCode": "GRC",
      "countryName": "Greece",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required via GVCW/VFS",
      "visaPortal": "https://www.mfa.gr",
      "latitude": 36.4618,
      "longitude": 25.3753
    },
    {
      "id": "gdest_barcelona",
      "name": "Barcelona & Gaudí's Sagrada Família",
      "country": "Spain",
      "region": "Catalonia",
      "city": "Barcelona",
      "category": "Heritage",
      "tags": [
        "sagrada-familia",
        "gaudi",
        "gothic-quarter",
        "mediterranean"
      ],
      "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
      "description": "Masterpieces of modernisme architecture, Antoni Gaudí's soaring basilica, sun-lit urban beaches, and tapas culture.",
      "bestSeason": "May – June & September – October",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 5200,
        "midRange": 11500,
        "luxury": 28000
      },
      "flightHub": "Barcelona BCN",
      "countryCode": "ESP",
      "countryName": "Spain",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required via BLS International",
      "visaPortal": "https://www.exteriores.gob.es",
      "latitude": 41.3879,
      "longitude": 2.1699
    },
    {
      "id": "gdest_scotland",
      "name": "Scottish Highlands & Isle of Skye",
      "country": "United Kingdom",
      "region": "Scotland",
      "city": "Inverness",
      "category": "Mountains",
      "tags": [
        "lochs",
        "castles",
        "highlands",
        "glen-coe",
        "scenic"
      ],
      "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
      "description": "Dramatic glacial glens, legendary Loch Ness, romantic medieval castles, and the dramatic sea cliffs of the Quiraing.",
      "bestSeason": "May – September",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 6500,
        "midRange": 14000,
        "luxury": 32000
      },
      "flightHub": "Edinburgh EDI / Glasgow GLA",
      "countryCode": "GBR",
      "countryName": "United Kingdom",
      "visaType": "Standard Visitor Visa",
      "indianPassportVisa": "UK Standard Visitor Visa (6-month multi-entry)",
      "visaPortal": "https://www.gov.uk/standard-visitor-visa",
      "latitude": 57.4778,
      "longitude": -4.2247
    },
    {
      "id": "gdest_norway_fjords",
      "name": "Geirangerfjord & Lofoten Islands",
      "country": "Norway",
      "region": "Western Fjords",
      "city": "Geiranger",
      "category": "Waterfalls",
      "tags": [
        "fjords",
        "unesco",
        "midnight-sun",
        "kayaking",
        "cliffs"
      ],
      "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
      "description": "UNESCO-protected emerald fjord flanked by nearly vertical 1,000m mountains and thunderous waterfalls like the Seven Sisters.",
      "bestSeason": "June – August (Summer) & Feb – April (Aurora/Ski)",
      "recommendedDuration": 6,
      "dailyBudgetINR": {
        "budget": 8500,
        "midRange": 18000,
        "luxury": 44000
      },
      "flightHub": "Bergen BGO / Oslo OSL",
      "countryCode": "NOR",
      "countryName": "Norway",
      "visaType": "Schengen Visa (C)",
      "indianPassportVisa": "Schengen Visa required via VFS",
      "visaPortal": "https://www.udi.no",
      "latitude": 62.1008,
      "longitude": 7.2059
    },
    {
      "id": "gdest_cappadocia",
      "name": "Cappadocia Fairy Chimneys & Balloons",
      "country": "Turkey",
      "region": "Central Anatolia",
      "city": "Göreme",
      "category": "Landscape",
      "tags": [
        "hot-air-balloons",
        "cave-dwellings",
        "fairy-chimneys",
        "underground-cities"
      ],
      "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
      "description": "Lunar landscape of wind-sculpted tuff spires and subterranean ancient cities, famous for hundreds of sunrise hot air balloons.",
      "bestSeason": "April – June & September – November",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 3500,
        "midRange": 7800,
        "luxury": 20000
      },
      "flightHub": "Nevşehir NAV / Kayseri ASR / Istanbul IST",
      "countryCode": "TUR",
      "countryName": "Turkey",
      "visaType": "eVisa / Sticker Visa",
      "indianPassportVisa": "Instant eVisa for valid US/UK/Schengen visa holders; embassy visa for others",
      "visaPortal": "https://www.evisa.gov.tr",
      "latitude": 38.6431,
      "longitude": 34.8289
    },
    {
      "id": "gdest_istanbul",
      "name": "Istanbul Bosphorus & Hagia Sophia",
      "country": "Turkey",
      "region": "Marmara",
      "city": "Istanbul",
      "category": "Heritage",
      "tags": [
        "hagia-sophia",
        "blue-mosque",
        "bosphorus",
        "grand-bazaar"
      ],
      "image": "NATURE/101859.jpg",
      "description": "The historical crossroads of Europe and Asia spanning the Bosphorus Strait with Byzantine and Ottoman imperial grandeur.",
      "bestSeason": "April – May & September – November",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 3200,
        "midRange": 7000,
        "luxury": 18000
      },
      "flightHub": "Istanbul IST / SAW",
      "countryCode": "TUR",
      "countryName": "Turkey",
      "visaType": "eVisa / Sticker Visa",
      "indianPassportVisa": "Instant eVisa for valid US/UK/Schengen visa holders; embassy visa for others",
      "visaPortal": "https://www.evisa.gov.tr",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    {
      "id": "gdest_giza",
      "name": "Great Pyramids of Giza & Nile Valley",
      "country": "Egypt",
      "region": "Giza Governorate",
      "city": "Cairo",
      "category": "Archaeology",
      "tags": [
        "pyramids",
        "sphinx",
        "nile",
        "pharaohs",
        "unesco"
      ],
      "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
      "description": "Sole surviving Wonder of the Ancient World, the Great Pyramid of Khufu (circa 2560 BC) guarded by the enigmatic Great Sphinx.",
      "bestSeason": "October – April",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 2500,
        "midRange": 5500,
        "luxury": 15000
      },
      "flightHub": "Cairo CAI",
      "countryCode": "EGY",
      "countryName": "Egypt",
      "visaType": "Visa on Arrival / eVisa",
      "indianPassportVisa": "Visa on Arrival for Indian tourists or online eVisa",
      "visaPortal": "https://visa2egypt.gov.eg",
      "latitude": 29.9792,
      "longitude": 31.1342
    },
    {
      "id": "gdest_marrakech",
      "name": "Marrakech Medina & Sahara Merzouga",
      "country": "Morocco",
      "region": "Marrakech-Safi",
      "city": "Marrakech",
      "category": "Culture",
      "tags": [
        "medina",
        "souks",
        "sahara-dunes",
        "riads",
        "atlas-mountains"
      ],
      "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      "description": "The Red City's labyrinths of spice souks and Jemaa el-Fnaa square leading to the towering golden Erg Chebbi dunes of the Sahara.",
      "bestSeason": "October – April",
      "recommendedDuration": 6,
      "dailyBudgetINR": {
        "budget": 3200,
        "midRange": 7200,
        "luxury": 18000
      },
      "flightHub": "Marrakech RAK / Casablanca CMN",
      "countryCode": "MAR",
      "countryName": "Morocco",
      "visaType": "eVisa",
      "indianPassportVisa": "Online eVisa for Indian passport holders",
      "visaPortal": "https://www.acces-maroc.ma",
      "latitude": 31.6295,
      "longitude": -7.9811
    },
    {
      "id": "gdest_masaimara",
      "name": "Masai Mara Great Wildebeest Migration",
      "country": "Kenya",
      "region": "Rift Valley",
      "city": "Narok",
      "category": "Wildlife",
      "tags": [
        "safari",
        "big-five",
        "great-migration",
        "savannah",
        "lions"
      ],
      "image": "NATURE/119632.jpg",
      "description": "World's most spectacle wildlife arena, sweeping acacia plains home to millions of migrating wildebeest, lions, and leopards.",
      "bestSeason": "July – October (Great Migration) & Jan – Feb",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 8500,
        "midRange": 19000,
        "luxury": 45000
      },
      "flightHub": "Nairobi NBO",
      "countryCode": "KEN",
      "countryName": "Kenya",
      "visaType": "Electronic Travel Authorisation (eTA)",
      "indianPassportVisa": "Visa-Free regime with online eTA system",
      "visaPortal": "https://www.etakenya.go.ke",
      "latitude": -1.4061,
      "longitude": 35.0085
    },
    {
      "id": "gdest_capetown",
      "name": "Cape Town Table Mountain & Cape Point",
      "country": "South Africa",
      "region": "Western Cape",
      "city": "Cape Town",
      "category": "Coastal",
      "tags": [
        "table-mountain",
        "penguins",
        "cape-of-good-hope",
        "winelands"
      ],
      "image": "NATURE/122119.jpg",
      "description": "Dramatic mountain-meets-ocean peninsula crowned by Table Mountain, penguin colonies at Boulders Beach, and scenic coastal drives.",
      "bestSeason": "November – March",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 3800,
        "midRange": 8500,
        "luxury": 22000
      },
      "flightHub": "Cape Town CPT",
      "countryCode": "ZAF",
      "countryName": "South Africa",
      "visaType": "eVisa / Embassy Visa",
      "indianPassportVisa": "Online eVisa or VFS submission",
      "visaPortal": "https://ehome.dha.gov.za/epermit",
      "latitude": -33.9249,
      "longitude": 18.4241
    },
    {
      "id": "gdest_halong",
      "name": "Ha Long Bay Emerald Karst Waters",
      "country": "Vietnam",
      "region": "Quang Ninh",
      "city": "Ha Long",
      "category": "Coastal",
      "tags": [
        "unesco",
        "karst-islands",
        "caves",
        "cruises",
        "emerald-sea"
      ],
      "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
      "description": "Over 1,600 limestone monolithic pillars and islets topped with rainforests rising from the tranquil Gulf of Tonkin.",
      "bestSeason": "October – December & March – April",
      "recommendedDuration": 3,
      "dailyBudgetINR": {
        "budget": 2000,
        "midRange": 4500,
        "luxury": 12000
      },
      "flightHub": "Hanoi HAN",
      "countryCode": "VNM",
      "countryName": "Vietnam",
      "visaType": "eVisa",
      "indianPassportVisa": "Online 90-day multi/single entry eVisa for Indian passport holders",
      "visaPortal": "https://evisa.xuatnhapcanh.gov.vn",
      "latitude": 20.9101,
      "longitude": 107.1839
    },
    {
      "id": "gdest_hoian",
      "name": "Hoi An Ancient Lantern Town",
      "country": "Vietnam",
      "region": "Quang Nam",
      "city": "Hoi An",
      "category": "Heritage",
      "tags": [
        "lanterns",
        "unesco",
        "tailors",
        "ancient-trading-port"
      ],
      "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
      "description": "Exquisitely preserved Southeast Asian trading port illuminated every evening by thousands of silk lanterns along the Thu Bon River.",
      "bestSeason": "February – July",
      "recommendedDuration": 3,
      "dailyBudgetINR": {
        "budget": 1800,
        "midRange": 4000,
        "luxury": 10000
      },
      "flightHub": "Da Nang DAD",
      "countryCode": "VNM",
      "countryName": "Vietnam",
      "visaType": "eVisa",
      "indianPassportVisa": "Online 90-day multi/single entry eVisa for Indian passport holders",
      "visaPortal": "https://evisa.xuatnhapcanh.gov.vn",
      "latitude": 15.8801,
      "longitude": 108.338
    },
    {
      "id": "gdest_bali",
      "name": "Bali Cultural Highlands & Nusa Penida",
      "country": "Indonesia",
      "region": "Bali Province",
      "city": "Ubud",
      "category": "Culture",
      "tags": [
        "rice-terraces",
        "waterfalls",
        "coral-reefs",
        "hindu-temples",
        "beaches"
      ],
      "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
      "description": "The Island of the Gods, emerald Tegalalang rice terraces, sacred sea temples of Uluwatu and Tanah Lot, and dramatic Kelingking cliffs.",
      "bestSeason": "April – October",
      "recommendedDuration": 6,
      "dailyBudgetINR": {
        "budget": 2200,
        "midRange": 5000,
        "luxury": 14000
      },
      "flightHub": "Denpasar DPS",
      "countryCode": "IDN",
      "countryName": "Indonesia",
      "visaType": "e-VoA / Visa on Arrival",
      "indianPassportVisa": "30-day Visa on Arrival / e-VoA (extendable to 60 days)",
      "visaPortal": "https://molina.imigrasi.go.id",
      "latitude": -8.5069,
      "longitude": 115.2625
    },
    {
      "id": "gdest_komodo",
      "name": "Komodo National Park & Pink Beach",
      "country": "Indonesia",
      "region": "East Nusa Tenggara",
      "city": "Labuan Bajo",
      "category": "Wildlife",
      "tags": [
        "komodo-dragons",
        "pink-beach",
        "manta-rays",
        "islands",
        "unesco"
      ],
      "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
      "description": "World's only natural sanctuary of the prehistoric Komodo Dragon, featuring rare pink sand beaches and world-class manta dive sites.",
      "bestSeason": "April – November",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 3500,
        "midRange": 8000,
        "luxury": 22000
      },
      "flightHub": "Labuan Bajo LBJ",
      "countryCode": "IDN",
      "countryName": "Indonesia",
      "visaType": "e-VoA / Visa on Arrival",
      "indianPassportVisa": "30-day Visa on Arrival / e-VoA (extendable to 60 days)",
      "visaPortal": "https://molina.imigrasi.go.id",
      "latitude": -8.5562,
      "longitude": 119.489
    },
    {
      "id": "gdest_kl",
      "name": "Kuala Lumpur & Batu Caves",
      "country": "Malaysia",
      "region": "Federal Territory",
      "city": "Kuala Lumpur",
      "category": "Architecture",
      "tags": [
        "petronas-towers",
        "batu-caves",
        "food",
        "skyscrapers"
      ],
      "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
      "description": "Gleaming 452m Petronas Twin Towers, ancient limestone cavern temples of Batu Caves, and multicultural hawker food streets.",
      "bestSeason": "May – July & December – February",
      "recommendedDuration": 3,
      "dailyBudgetINR": {
        "budget": 2200,
        "midRange": 4800,
        "luxury": 13000
      },
      "flightHub": "Kuala Lumpur KUL",
      "countryCode": "MYS",
      "countryName": "Malaysia",
      "visaType": "Visa Free",
      "indianPassportVisa": "30 Days Visa-Free entry for Indian citizens",
      "visaPortal": "https://www.imi.gov.my",
      "latitude": 3.139,
      "longitude": 101.6869
    },
    {
      "id": "gdest_langkawi",
      "name": "Langkawi Archipelago & Sky Bridge",
      "country": "Malaysia",
      "region": "Kedah",
      "city": "Kuah",
      "category": "Beach",
      "tags": [
        "geopark",
        "cable-car",
        "mangroves",
        "duty-free",
        "beaches"
      ],
      "image": "NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
      "description": "Jewel of Kedah with 99 islands, UNESCO Global Geopark mangroves, and a curved curved sky bridge suspended 660m above sea level.",
      "bestSeason": "November – April",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 2500,
        "midRange": 5500,
        "luxury": 14000
      },
      "flightHub": "Langkawi LGK",
      "countryCode": "MYS",
      "countryName": "Malaysia",
      "visaType": "Visa Free",
      "indianPassportVisa": "30 Days Visa-Free entry for Indian citizens",
      "visaPortal": "https://www.imi.gov.my",
      "latitude": 6.35,
      "longitude": 99.8
    },
    {
      "id": "gdest_singapore",
      "name": "Marina Bay & Gardens by the Bay",
      "country": "Singapore",
      "region": "Central Region",
      "city": "Singapore",
      "category": "Architecture",
      "tags": [
        "supertrees",
        "skypark",
        "cloud-forest",
        "clean-city"
      ],
      "image": "NATURE/101859.jpg",
      "description": "Global garden city renowned for towering Supertree structures, futuristic climate conservatories, and Marina Bay Sands.",
      "bestSeason": "November – January & June – August",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 4500,
        "midRange": 10500,
        "luxury": 28000
      },
      "flightHub": "Singapore SIN",
      "countryCode": "SGP",
      "countryName": "Singapore",
      "visaType": "eVisa",
      "indianPassportVisa": "Paper/eVisa required prior to travel via authorized agents",
      "visaPortal": "https://www.ica.gov.sg",
      "latitude": 1.2847,
      "longitude": 103.861
    },
    {
      "id": "gdest_maldives",
      "name": "Baa Atoll & Turquoise Lagoons",
      "country": "Maldives",
      "region": "Baa Atoll",
      "city": "Eydhafushi",
      "category": "Island",
      "tags": [
        "overwater-villas",
        "manta-rays",
        "coral-atolls",
        "snorkeling",
        "unesco"
      ],
      "image": "NATURE/122119.jpg",
      "description": "UNESCO Biosphere Reserve with the world's largest gathering of manta rays at Hanifaru Bay, crystal lagoons, and overwater bungalows.",
      "bestSeason": "November – April",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 5500,
        "midRange": 16000,
        "luxury": 45000
      },
      "flightHub": "Malé MLE",
      "countryCode": "MDV",
      "countryName": "Maldives",
      "visaType": "Visa on Arrival",
      "indianPassportVisa": "Free 30-day Visa on Arrival for Indian citizens",
      "visaPortal": "https://immigration.gov.mv",
      "latitude": 5.1432,
      "longitude": 72.9774
    },
    {
      "id": "gdest_sigiriya",
      "name": "Sigiriya Lion Rock & Ella Tea Hills",
      "country": "Sri Lanka",
      "region": "Central Province",
      "city": "Sigiriya",
      "category": "Heritage",
      "tags": [
        "lion-rock",
        "tea-plantations",
        "train-ride",
        "fortress",
        "unesco"
      ],
      "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      "description": "A 200m vertical granite citadel rising above tropical forests, ancient frescoes, mirror walls, and scenic tea train journeys to Ella.",
      "bestSeason": "December – April & July – September",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 1800,
        "midRange": 4200,
        "luxury": 11000
      },
      "flightHub": "Colombo CMB",
      "countryCode": "LKA",
      "countryName": "Sri Lanka",
      "visaType": "ETA / Visa Free Pilot",
      "indianPassportVisa": "Free ETA / Visa waiver pilot scheme for Indian citizens",
      "visaPortal": "https://www.eta.gov.lk",
      "latitude": 7.957,
      "longitude": 80.7603
    },
    {
      "id": "gdest_everest",
      "name": "Everest Base Camp & Pokhara Lake",
      "country": "Nepal",
      "region": "Khumbu / Gandaki",
      "city": "Pokhara",
      "category": "Mountains",
      "tags": [
        "himalayas",
        "everest",
        "annapurna",
        "paragliding",
        "trekking"
      ],
      "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
      "description": "The roof of the world, epic trekking routes under Mount Everest (8,848m) and serene Phewa Lake overlooking the Annapurna range.",
      "bestSeason": "October – December & March – May",
      "recommendedDuration": 7,
      "dailyBudgetINR": {
        "budget": 1500,
        "midRange": 3500,
        "luxury": 9000
      },
      "flightHub": "Kathmandu KTM",
      "countryCode": "NPL",
      "countryName": "Nepal",
      "visaType": "Freedom of Movement",
      "indianPassportVisa": "No Visa required for Indian citizens (Valid Passport or Voter ID sufficient)",
      "visaPortal": "https://nepalimmigration.gov.np",
      "latitude": 28.2096,
      "longitude": 83.9856
    },
    {
      "id": "gdest_bhutan_tigersnest",
      "name": "Paro Taktsang (Tiger's Nest Monastery)",
      "country": "Bhutan",
      "region": "Paro Valley",
      "city": "Paro",
      "category": "Spiritual",
      "tags": [
        "clifftop-monastery",
        "himalayas",
        "dzongs",
        "gross-national-happiness"
      ],
      "image": "NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
      "description": "Iconic 17th-century Himalayan Buddhist monastery clinging miraculously to a sheer 900m cliff face overlooking the Paro valley.",
      "bestSeason": "March – May & September – November",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 3500,
        "midRange": 7500,
        "luxury": 18000
      },
      "flightHub": "Paro PBH",
      "countryCode": "BTN",
      "countryName": "Bhutan",
      "visaType": "Entry Permit",
      "indianPassportVisa": "Entry Permit issued with Sustainable Development Fee (SDF) of ₹1,200/day for Indians",
      "visaPortal": "https://www.doi.gov.bt",
      "latitude": 27.4919,
      "longitude": 89.3635
    },
    {
      "id": "gdest_sydney",
      "name": "Sydney Harbour & Great Barrier Reef",
      "country": "Australia",
      "region": "NSW & Queensland",
      "city": "Sydney",
      "category": "Coastal",
      "tags": [
        "opera-house",
        "great-barrier-reef",
        "surfing",
        "coral-sea"
      ],
      "image": "NATURE/122119.jpg",
      "description": "World-famous Sydney Opera House sails, Harbour Bridge climbs, and the 2,300km living underwater wonderland of the Great Barrier Reef.",
      "bestSeason": "September – November & March – May",
      "recommendedDuration": 7,
      "dailyBudgetINR": {
        "budget": 6500,
        "midRange": 14000,
        "luxury": 32000
      },
      "flightHub": "Sydney SYD / Cairns CNS",
      "countryCode": "AUS",
      "countryName": "Australia",
      "visaType": "Visitor Visa (Subclass 600)",
      "indianPassportVisa": "Online Australian Tourist Visa (Subclass 600)",
      "visaPortal": "https://immi.homeaffairs.gov.au",
      "latitude": -33.8688,
      "longitude": 151.2093
    },
    {
      "id": "gdest_queenstown",
      "name": "Queenstown & Milford Sound Fiordland",
      "country": "New Zealand",
      "region": "Otago / Southland",
      "city": "Queenstown",
      "category": "Mountains",
      "tags": [
        "fiords",
        "adventure-capital",
        "bungy",
        "glaciers",
        "lord-of-the-rings"
      ],
      "image": "NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
      "description": "World's adventure capital on the shores of Lake Wakatipu, and the eighth wonder of the world: majestic Mitre Peak and Milford Sound.",
      "bestSeason": "December – February (Summer) & June – August (Ski)",
      "recommendedDuration": 6,
      "dailyBudgetINR": {
        "budget": 7000,
        "midRange": 15000,
        "luxury": 34000
      },
      "flightHub": "Queenstown ZQN / Auckland AKL",
      "countryCode": "NZL",
      "countryName": "New Zealand",
      "visaType": "Visitor Visa",
      "indianPassportVisa": "Online Visitor Visa required",
      "visaPortal": "https://www.immigration.govt.nz",
      "latitude": -45.0312,
      "longitude": 168.6626
    },
    {
      "id": "gdest_grandcanyon",
      "name": "Grand Canyon & Western National Parks",
      "country": "United States",
      "region": "Arizona / Utah",
      "city": "Flagstaff",
      "category": "Landscape",
      "tags": [
        "grand-canyon",
        "red-rocks",
        "colorado-river",
        "monument-valley"
      ],
      "image": "NATURE/dan-meyers-IQVFVH0ajag-unsplash.jpg",
      "description": "One mile deep and 277 miles long, immense multi-colored gorge carved over six million years by the mighty Colorado River.",
      "bestSeason": "March – May & September – November",
      "recommendedDuration": 6,
      "dailyBudgetINR": {
        "budget": 7500,
        "midRange": 16000,
        "luxury": 38000
      },
      "flightHub": "Las Vegas LAS / Phoenix PHX",
      "countryCode": "USA",
      "countryName": "United States",
      "visaType": "B1/B2 Visitor Visa",
      "indianPassportVisa": "B1/B2 Visa with in-person interview appointment",
      "visaPortal": "https://travel.state.gov",
      "latitude": 36.0544,
      "longitude": -112.1401
    },
    {
      "id": "gdest_banff",
      "name": "Banff National Park & Lake Louise",
      "country": "Canada",
      "region": "Alberta",
      "city": "Banff",
      "category": "Lakes",
      "tags": [
        "rocky-mountains",
        "turquoise-lakes",
        "glaciers",
        "wildlife"
      ],
      "image": "NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
      "description": "Glacier-fed turquoise lakes, towering snow-capped peaks of the Canadian Rockies, hot springs, and abundant wildlife.",
      "bestSeason": "June – September (Lakes) & Dec – April (Ski)",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 6800,
        "midRange": 14500,
        "luxury": 34000
      },
      "flightHub": "Calgary YYC",
      "countryCode": "CAN",
      "countryName": "Canada",
      "visaType": "Visitor Visa (TRV)",
      "indianPassportVisa": "Temporary Resident Visa (TRV) required",
      "visaPortal": "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      "latitude": 51.1784,
      "longitude": -115.5708
    },
    {
      "id": "gdest_machupicchu",
      "name": "Machu Picchu & Sacred Valley of the Incas",
      "country": "Peru",
      "region": "Cusco",
      "city": "Aguas Calientes",
      "category": "Archaeology",
      "tags": [
        "incas",
        "lost-city",
        "andes",
        "trekking",
        "unesco"
      ],
      "image": "NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
      "description": "15th-century Inca citadel built 2,430m above sea level on a mountain ridge in the Amazonian Andes, framed by Huayna Picchu.",
      "bestSeason": "May – October",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 3500,
        "midRange": 7500,
        "luxury": 19000
      },
      "flightHub": "Cusco CUZ / Lima LIM",
      "countryCode": "PER",
      "countryName": "Peru",
      "visaType": "Tourist Visa / Visa Waiver",
      "indianPassportVisa": "Visa Exemption for valid US, UK, Canada, Australia, or Schengen visa holders",
      "visaPortal": "https://www.gob.pe/rree",
      "latitude": -13.1631,
      "longitude": -72.545
    },
    {
      "id": "gdest_kazbegi",
      "name": "Kazbegi Mount & Gergeti Trinity Church",
      "country": "Georgia",
      "region": "Mtskheta-Mtianeti",
      "city": "Stepantsminda",
      "category": "Mountains",
      "tags": [
        "caucasus",
        "clifftop-church",
        "snow-peaks",
        "hiking"
      ],
      "image": "NATURE/119632.jpg",
      "description": "14th-century stone church dramatically isolated against the backdrop of 5,047m Mount Kazbek in the high Caucasus.",
      "bestSeason": "May – October",
      "recommendedDuration": 4,
      "dailyBudgetINR": {
        "budget": 2400,
        "midRange": 5000,
        "luxury": 13000
      },
      "flightHub": "Tbilisi TBS",
      "countryCode": "GEO",
      "countryName": "Georgia",
      "visaType": "eVisa / Visa-Free",
      "indianPassportVisa": "Visa-Free for valid US/UK/Schengen visa; simple online eVisa for others",
      "visaPortal": "https://www.evisa.gov.ge",
      "latitude": 42.6587,
      "longitude": 44.6414
    },
    {
      "id": "gdest_muscat",
      "name": "Muscat Grand Mosque & Wahiba Sands",
      "country": "Oman",
      "region": "Muscat Governorate",
      "city": "Muscat",
      "category": "Culture",
      "tags": [
        "grand-mosque",
        "wadis",
        "desert-dunes",
        "fjords-of-musandam"
      ],
      "image": "NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
      "description": "Sultan Qaboos Grand Mosque, turquoise natural swimming holes of Wadi Shab, and towering saffron dunes of the Wahiba Sands.",
      "bestSeason": "October – April",
      "recommendedDuration": 5,
      "dailyBudgetINR": {
        "budget": 3800,
        "midRange": 8200,
        "luxury": 21000
      },
      "flightHub": "Muscat MCT",
      "countryCode": "OMN",
      "countryName": "Oman",
      "visaType": "eVisa / Visa-Free 14 Days",
      "indianPassportVisa": "14-Day Visa-Free entry for Indian citizens meeting specific residency/visa conditions; 30-day eVisa for others",
      "visaPortal": "https://evisa.rop.gov.om",
      "latitude": 23.588,
      "longitude": 58.3829
    },
    {
      "id": "gdest_mauritius",
      "name": "Le Morne Brabant & Chamarel Dunes",
      "country": "Mauritius",
      "region": "Black River District",
      "city": "Le Morne",
      "category": "Beach",
      "tags": [
        "underwater-waterfall",
        "coral-reefs",
        "unesco",
        "seven-coloured-earth"
      ],
      "image": "NATURE/122119.jpg",
      "description": "UNESCO basalt mountain rising 556m above sapphire lagoons, optical illusion of underwater waterfalls, and seven-coloured volcanic dunes.",
      "bestSeason": "May – December",
      "recommendedDuration": 6,
      "dailyBudgetINR": {
        "budget": 4500,
        "midRange": 11000,
        "luxury": 28000
      },
      "flightHub": "Sir Seewoosagur Ramgoolam MRU",
      "countryCode": "MUS",
      "countryName": "Mauritius",
      "visaType": "Visa on Arrival",
      "indianPassportVisa": "Free 60-day Visa on Arrival for Indian passport holders",
      "visaPortal": "https://passport.govmu.org",
      "latitude": -20.4497,
      "longitude": 57.3276
    }
  ]
};
