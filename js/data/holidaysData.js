/* ==========================================================================
   WAYFARER — Indian Holiday & Weekend Intelligence Engine
   Source: Government of India (Public Holidays Gazette), 2026
   ========================================================================== */

window.HOLIDAYS_DATA = {
  year: 2026,
  lastVerified: "2026-08-24",

  nationalHolidays: [
    { date: "2026-01-26", name: "Republic Day", type: "National", restricted: false },
    { date: "2026-03-29", name: "Holi", type: "National", restricted: false },
    { date: "2026-04-02", name: "Ram Navami", type: "National", restricted: false },
    { date: "2026-04-14", name: "Dr. Ambedkar Jayanti", type: "National", restricted: false },
    { date: "2026-04-14", name: "Good Friday", type: "National", restricted: false },
    { date: "2026-05-01", name: "Maharashtra Day / Labour Day", type: "Restricted", restricted: true },
    { date: "2026-05-23", name: "Buddha Purnima", type: "National", restricted: false },
    { date: "2026-06-17", name: "Eid ul-Adha (Bakrid)", type: "National", restricted: false },
    { date: "2026-07-16", name: "Muharram", type: "National", restricted: false },
    { date: "2026-07-29", name: "Rath Yatra (Puri)", type: "Odisha", restricted: false },
    { date: "2026-08-15", name: "Independence Day", type: "National", restricted: false },
    { date: "2026-08-27", name: "Janmashtami", type: "National", restricted: false },
    { date: "2026-09-02", name: "Ganesh Chaturthi", type: "National", restricted: false },
    { date: "2026-09-16", name: "Eid e-Milad (Prophet's Birthday)", type: "National", restricted: false },
    { date: "2026-10-02", name: "Gandhi Jayanti", type: "National", restricted: false },
    { date: "2026-10-20", name: "Dussehra (Vijaya Dashami)", type: "National", restricted: false },
    { date: "2026-10-29", name: "Diwali", type: "National", restricted: false },
    { date: "2026-11-04", name: "Diwali Holiday", type: "National", restricted: false },
    { date: "2026-11-14", name: "Guru Nanak Jayanti", type: "National", restricted: false },
    { date: "2026-12-25", name: "Christmas Day", type: "National", restricted: false }
  ],

  odishaStateHolidays: [
    { date: "2026-04-01", name: "Odisha Day (Utkal Divas)", type: "State" },
    { date: "2026-07-29", name: "Rath Yatra, Puri", type: "State" },
    { date: "2026-09-10", name: "Nuakhai Juhar", type: "State", region: "Western Odisha" },
    { date: "2026-11-05", name: "Karthik Purnima (Boita Bandana)", type: "State" }
  ],

  // Pre-computed long weekends for 2026 (Friday/Monday bridges)
  longWeekends: [
    {
      id: "lw_jan26",
      label: "Republic Day Weekend",
      startDate: "2026-01-24",
      endDate: "2026-01-26",
      days: 3,
      type: "3-Day",
      description: "Mon holiday + Sat + Sun",
      recommendedFor: ["beach", "heritage", "city"],
      odishaSuggestions: ["od_puri", "od_konark", "od_bhubaneswar"]
    },
    {
      id: "lw_holi",
      label: "Holi Extended Weekend",
      startDate: "2026-03-28",
      endDate: "2026-03-30",
      days: 3,
      type: "3-Day",
      description: "Sat + Sun + Mon holiday",
      recommendedFor: ["culture", "festivals"],
      odishaSuggestions: ["od_puri", "od_raghurajpur", "od_bhubaneswar"]
    },
    {
      id: "lw_april14",
      label: "Good Friday + Ambedkar Jayanti Long Weekend",
      startDate: "2026-04-12",
      endDate: "2026-04-14",
      days: 3,
      type: "3-Day",
      description: "Sun + Mon + Tue (two holidays align)",
      recommendedFor: ["nature", "hills", "offbeat"],
      odishaSuggestions: ["od_daringbadi", "od_satkosia", "od_chilika"]
    },
    {
      id: "lw_aug15",
      label: "Independence Day Weekend",
      startDate: "2026-08-15",
      endDate: "2026-08-16",
      days: 2,
      type: "2-Day",
      description: "Sat holiday",
      recommendedFor: ["nature", "monsoon waterfalls"],
      odishaSuggestions: ["od_barehipani", "od_joranda", "od_simlipal"]
    },
    {
      id: "lw_gandhi",
      label: "Gandhi Jayanti Long Weekend",
      startDate: "2026-10-02",
      endDate: "2026-10-04",
      days: 3,
      type: "3-Day",
      description: "Fri holiday + Sat + Sun",
      recommendedFor: ["wildlife", "nature", "heritage"],
      odishaSuggestions: ["od_simlipal", "od_chilika", "od_bhitarkanika"]
    },
    {
      id: "lw_dussehra",
      label: "Dussehra 4-Day Break",
      startDate: "2026-10-17",
      endDate: "2026-10-20",
      days: 4,
      type: "4-Day",
      description: "Sat + Sun + Mon + Tue holiday",
      recommendedFor: ["heritage", "wildlife", "beach"],
      odishaSuggestions: ["od_puri", "od_konark", "od_simlipal", "od_satkosia"]
    },
    {
      id: "lw_diwali",
      label: "Diwali 5-Day Break",
      startDate: "2026-10-29",
      endDate: "2026-11-02",
      days: 5,
      type: "5-Day",
      description: "Thu + Fri + Sat + Sun + Mon",
      recommendedFor: ["beach", "heritage", "nature", "wildlife"],
      odishaSuggestions: ["od_puri", "od_chilika", "od_bhitarkanika", "od_bhubaneswar"]
    },
    {
      id: "lw_christmas",
      label: "Christmas Extended Weekend",
      startDate: "2026-12-25",
      endDate: "2026-12-27",
      days: 3,
      type: "3-Day",
      description: "Fri holiday + Sat + Sun",
      recommendedFor: ["beach", "heritage", "culture"],
      odishaSuggestions: ["od_puri", "od_konark", "od_gopalpur", "od_chilika"]
    }
  ],

  // Current/upcoming long weekend (computed at runtime)
  getNextLongWeekend() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcoming = this.longWeekends.filter(lw => new Date(lw.startDate) >= today);
    return upcoming.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))[0] || null;
  },

  getDaysUntil(dateStr) {
    const target = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  },

  getCurrentSeason() {
    const month = new Date().getMonth() + 1; // 1-12
    if (month >= 10 || month <= 2) return "oct_feb";
    if (month >= 3 && month <= 5) return "mar_may";
    return "jun_sep";
  }
};
