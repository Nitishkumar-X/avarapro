/* ==========================================================================
   WAYFARER — Itinerary Generator, Geodesic Combinations & Recommendations
   ========================================================================== */

window.WayfarerItineraryEngine = {
  // Geographically valid combinations
  destinationCombinations: {
    dest_spiti: ["Pangong Tso (Ladakh)", "Manali Ridge", "Chandratal Moon Lake", "Key Monastery"],
    dest_ladakh: ["Nubra Valley", "Pangong Tso", "Zanskar Gorge", "Magnetic Hill"],
    dest_kashmir: ["Vishansar Lake", "Sonamarg Meadows", "Gulmarg Gondola", "Dal Lake Srinagar"],
    dest_meghalaya: ["Cherrapunji Waterfalls", "Dawki River", "Nongriat Root Bridge", "Shillong Peak"],
    dest_goa: ["Agonda Beach", "Palolem Cove", "Dudhsagar Falls", "Old Goa UNESCO Churches"],
    dest_kerala: ["Silent Valley NP", "Wayanad Tea Hills", "Chembra Peak", "Athirappilly Falls"],
    dest_rajasthan: ["Jaisalmer Fort", "Sam Sand Dunes", "Jodhpur Blue City", "Ranthambore NP"]
  },

  getSuggestedItinerary(destinationId, days = 7) {
    const dest = window.wayfarerStore.getDestination(destinationId);
    if (!dest) return [];

    const name = dest.name;
    const region = dest.region || dest.state;

    if (days <= 3) {
      return [
        { day: 1, time: "09:00", title: `Arrival & Orientation in ${name}`, location: dest.city || name, note: "Check-in, acclimatize, and explore local village market." },
        { day: 2, time: "06:30", title: `Sunrise Viewpoint & Main Sightseeing`, location: `${name} Ridge`, note: dest.whyVisit || "Witness morning light over high viewpoints." },
        { day: 3, time: "11:00", title: "Cultural Craft Trail & Departure", location: name, note: "Sample local cuisine and purchase regional handicrafts before departure." }
      ];
    } else if (days <= 7) {
      return [
        { day: 1, time: "08:00", title: `Arrival in ${region} & Base Setup`, location: dest.city || name, note: "Settle into homestay/lodge and check equipment." },
        { day: 2, time: "07:00", title: `${name} Main Exploration Hike`, location: `${name} Circuit`, note: "Pristine nature trails and landscape photography." },
        { day: 3, time: "09:30", title: "High Pass & Viewpoint Expedition", location: `${name} High Point`, note: "Cross high elevation ridge and take field notes." },
        { day: 4, time: "10:00", title: "UNESCO / Heritage & Cultural Discovery", location: `${name} Monasteries / Forts`, note: "Interact with local elders and discover centuries-old history." },
        { day: 5, time: "08:30", title: "Nearby Sanctuary / River Trail", location: `${name} Wilderness`, note: "Observe flora, fauna, and mirror-still waters." },
        { day: 6, time: "16:00", title: "Golden Hour Photography & Quiet Reflection", location: `${name} Outlook`, note: "Watch sunset roll over the landscape." },
        { day: 7, time: "10:00", title: "Final Field Log & Return Journey", location: dest.city || name, note: "Pack gear and log trip expenses in your Travel OS." }
      ];
    } else {
      return [
        { day: 1, time: "09:00", title: `Grand Overland Arrival in ${name}`, location: dest.city || name, note: "Base camp establishment." },
        { day: 3, time: "07:30", title: "Deep Valley & Remote Settlement Exploration", location: `${name} Interior`, note: "Off-the-beaten-path exploration." },
        { day: 6, time: "06:00", title: "High Summit Pass Crossing", location: `${name} Pass`, note: "High altitude trek/drive." },
        { day: 9, time: "11:00", title: "Cultural immersion & Local Gastronomy", location: `${name} Market`, note: "Learn traditional recipes and folklore." },
        { day: 10, time: "15:00", title: "Expedition Conclusion", location: dest.city || name, note: "Prepare return flight/train." }
      ];
    }
  },

  getRecommendationsForUser(profile, destinations) {
    if (!destinations || destinations.length === 0) return [];

    const preferredStyle = profile && profile.travelStyle ? profile.travelStyle : ["Nature", "Mountains"];

    return destinations.map(d => {
      let score = 0;
      let reasons = [];

      if (d.category === "Mountains" || d.category === "Road Trips") {
        score += 30;
        reasons.push("Matches your high altitude & mountain preference");
      }

      if (d.season && d.season.toLowerCase().includes("autumn")) {
        score += 25;
        reasons.push("Perfect October/Autumn climate");
      }

      if (d.budget && d.budget <= 35000) {
        score += 25;
        reasons.push("Fits comfortable budget range (< ₹35,000)");
      }

      if (d.rating && d.rating >= 4.8) {
        score += 20;
        reasons.push("Top-rated 4.8+ traveler sanctuary");
      }

      return {
        destination: d,
        score: score,
        reasons: reasons
      };
    }).sort((a, b) => b.score - a.score);
  }
};
