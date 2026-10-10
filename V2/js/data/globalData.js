/* ==========================================================================
   WAYFARER V2 — Global Travel Intelligence & Visa Dataset
   Hierarchy: WORLD → COUNTRY → REGION → CITY → DESTINATION
   Source Tier 1: Official Foreign Ministries, Immigration Boards, UNESCO
   ========================================================================== */

window.GLOBAL_TRAVEL_DATA = {
  lastVerified: "2026-08-12",

  currencies: [
    { code: "INR", name: "Indian Rupee", symbol: "₹", rateToINR: 1.0 },
    { code: "USD", name: "US Dollar", symbol: "$", rateToINR: 84.2 },
    { code: "EUR", name: "Euro", symbol: "€", rateToINR: 91.5 },
    { code: "GBP", name: "British Pound", symbol: "£", rateToINR: 108.0 },
    { code: "JPY", name: "Japanese Yen", symbol: "¥", rateToINR: 0.57 },
    { code: "THB", name: "Thai Baht", symbol: "฿", rateToINR: 2.45 },
    { code: "AED", name: "UAE Dirham", symbol: "AED", rateToINR: 22.9 },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF", rateToINR: 96.8 },
    { code: "AUD", name: "Australian Dollar", symbol: "A$", rateToINR: 55.4 }
  ],

  countries: [
    {
      code: "JPN",
      name: "Japan",
      capital: "Tokyo",
      region: "East Asia",
      currency: "JPY",
      officialLanguage: "Japanese",
      timeZone: "JST (UTC+9)",
      visaInfo: {
        type: "eVisa / Embassy Visa",
        indianPassport: "eVisa for tourists (Single entry 90 days)",
        passportValidity: "Valid for duration of stay",
        officialPortal: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        lastChecked: "2026-08-10",
        notes: "Apply via Japan e-Visa system or VFS Global center."
      },
      flagshipDestinations: [
        {
          id: "gdest_kyoto",
          name: "Kyoto Arashiyama & Gion",
          country: "Japan",
          region: "Kansai",
          city: "Kyoto",
          category: "Culture",
          tags: ["temples", "bamboo-forest", "unesco", "cherry-blossoms"],
          image: "../NATURE/tsukada-kazuhiro-a3Y2evcKqzk-unsplash.jpg",
          description: "Historic imperial capital of Japan, famous for 17 UNESCO World Heritage Sites, Arashiyama Bamboo Grove, and Fushimi Inari Taisha.",
          bestSeason: "March – May & October – November",
          recommendedDuration: 4,
          dailyBudgetINR: { budget: 4500, midRange: 9000, luxury: 22000 },
          sources: [{ sourceName: "Japan National Tourism Organization (JNTO)", url: "https://www.japan.travel", lastVerified: "2026-08-10" }]
        }
      ]
    },

    {
      code: "CHE",
      name: "Switzerland",
      capital: "Bern",
      region: "Western Europe",
      currency: "CHF",
      officialLanguage: "German, French, Italian, Romansh",
      timeZone: "CET (UTC+1)",
      visaInfo: {
        type: "Schengen Visa (C)",
        indianPassport: "Schengen Visa required prior to travel",
        passportValidity: "3 months beyond intended departure",
        officialPortal: "https://www.sem.admin.ch",
        lastChecked: "2026-08-10",
        notes: "Requires biometrics appointment via VFS Global & minimum travel insurance."
      },
      flagshipDestinations: [
        {
          id: "gdest_zermatt",
          name: "Zermatt & Matterhorn",
          country: "Switzerland",
          region: "Valais",
          city: "Zermatt",
          category: "Mountains",
          tags: ["alps", "matterhorn", "skiing", "hiking"],
          image: "../NATURE/anders-wideskott-_QnPkc4C6E4-unsplash.jpg",
          description: "Car-free mountain resort village at the foot of the iconic pyramid-shaped Matterhorn peak.",
          bestSeason: "December – April (Snow) & July – September (Hiking)",
          recommendedDuration: 4,
          dailyBudgetINR: { budget: 8500, midRange: 18000, luxury: 42000 },
          sources: [{ sourceName: "MySwitzerland Tourism Board", url: "https://www.myswitzerland.com", lastVerified: "2026-08-10" }]
        }
      ]
    },

    {
      code: "THA",
      name: "Thailand",
      capital: "Bangkok",
      region: "Southeast Asia",
      currency: "THB",
      officialLanguage: "Thai",
      timeZone: "ICT (UTC+7)",
      visaInfo: {
        type: "Visa Free / Exemption",
        indianPassport: "Visa Exemption for Indian tourists (up to 60 days stay)",
        passportValidity: "6 months validity required",
        officialPortal: "https://www.immigration.go.th",
        lastChecked: "2026-08-10",
        notes: "Visa-free entry policy updated in 2024. Confirm return ticket & hotel voucher."
      },
      flagshipDestinations: [
        {
          id: "gdest_phuket",
          name: "Phuket & Phi Phi Islands",
          country: "Thailand",
          region: "Southern Thailand",
          city: "Phuket",
          category: "Beaches",
          tags: ["islands", "limestone-cliffs", "snorkeling", "beaches"],
          image: "../NATURE/naja-bertolt-jensen-Dm3MNrAbA_I-unsplash.jpg",
          description: "Emerald Andaman Sea waters, towering karst limestone cliffs, and white sand coral islands.",
          bestSeason: "November – April",
          recommendedDuration: 5,
          dailyBudgetINR: { budget: 2500, midRange: 5500, luxury: 15000 },
          sources: [{ sourceName: "Tourism Authority of Thailand (TAT)", url: "https://www.tourismthailand.org", lastVerified: "2026-08-10" }]
        }
      ]
    },

    {
      code: "ARE",
      name: "United Arab Emirates",
      capital: "Abu Dhabi",
      region: "Middle East",
      currency: "AED",
      officialLanguage: "Arabic",
      timeZone: "GST (UTC+4)",
      visaInfo: {
        type: "eVisa / Visa on Arrival",
        indianPassport: "Visa on Arrival for US/UK/Schengen visa holders; eVisa for others",
        passportValidity: "6 months validity required",
        officialPortal: "https://icp.gov.ae",
        lastChecked: "2026-08-10",
        notes: "Instant 14-day VoA at Dubai/Abu Dhabi for US visa holders."
      },
      flagshipDestinations: [
        {
          id: "gdest_dubai",
          name: "Dubai Skyline & Desert Reserve",
          country: "United Arab Emirates",
          region: "Emirate of Dubai",
          city: "Dubai",
          category: "Deserts",
          tags: ["architecture", "desert-safari", "shopping", "skyscrapers"],
          image: "../NATURE/moiz-k-malik-68aXi4RVhMQ-unsplash.jpg",
          description: "Futuristic architecture of Burj Khalifa, dune bashing in Al Marmoom desert reserve, and luxury coastal resorts.",
          bestSeason: "November – March",
          recommendedDuration: 4,
          dailyBudgetINR: { budget: 4000, midRange: 9500, luxury: 25000 },
          sources: [{ sourceName: "Visit Dubai Official Portal", url: "https://www.visitdubai.com", lastVerified: "2026-08-10" }]
        }
      ]
    },

    {
      code: "ISL",
      name: "Iceland",
      capital: "Reykjavik",
      region: "Northern Europe",
      currency: "EUR",
      officialLanguage: "Icelandic",
      timeZone: "GMT (UTC+0)",
      visaInfo: {
        type: "Schengen Visa (C)",
        indianPassport: "Schengen Visa required prior to departure",
        passportValidity: "3 months beyond stay",
        officialPortal: "https://www.utl.is",
        lastChecked: "2026-08-10",
        notes: "Apply via VFS Global Embassy of Denmark/Iceland."
      },
      flagshipDestinations: [
        {
          id: "gdest_iceland_ring",
          name: "Iceland Ring Road & Aurora",
          country: "Iceland",
          region: "Southern Region",
          city: "Reykjavik",
          category: "Waterfalls",
          tags: ["glaciers", "northern-lights", "geysers", "volcanic"],
          image: "../NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
          description: "Land of fire and ice, black sand beaches of Vik, Skogafoss waterfall, and dancing Aurora Borealis.",
          bestSeason: "September – April (Northern Lights) & June – August (Midnight Sun)",
          recommendedDuration: 7,
          dailyBudgetINR: { budget: 7500, midRange: 16000, luxury: 38000 },
          sources: [{ sourceName: "Visit Iceland Official", url: "https://www.visiticeland.com", lastVerified: "2026-08-10" }]
        }
      ]
    }
  ]
};
