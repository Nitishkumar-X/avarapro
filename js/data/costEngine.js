/* ==========================================================================
   ANTARA — Realistic Travel Cost & Origin Escape Distance Engine
   Features:
   - Configurable User Origin (default: Bhubaneswar / Cuttack)
   - Haversine distance calculator & road distance estimation
   - Fuel cost calculator (Bike/Car)
   - Low-Cost Escape finder (< 50 km, < 100 km, < 150 km, < 250 km, Day Trips)
   ========================================================================== */

window.AntaraCostEngine = {
  // Default User Origin: Bhubaneswar (20.2961, 85.8245) or Cuttack (20.4625, 85.8828)
  getOriginCoords() {
    const profile = window.wayfarerStore?.getProfile?.() || {};
    const city = (profile.homecity || "Bhubaneswar").toLowerCase();
    if (city.includes("cuttack")) return { name: "Cuttack", lat: 20.4625, lng: 85.8828 };
    if (city.includes("puri")) return { name: "Puri", lat: 19.8134, lng: 85.8315 };
    if (city.includes("rourkela") || city.includes("sundargarh")) return { name: "Rourkela", lat: 22.2604, lng: 84.8536 };
    if (city.includes("sambalpur")) return { name: "Sambalpur", lat: 21.4669, lng: 83.9812 };
    if (city.includes("berhampur")) return { name: "Berhampur", lat: 19.3150, lng: 84.7941 };
    // Default
    return { name: "Bhubaneswar / Cuttack", lat: 20.2961, lng: 85.8245 };
  },

  // Calculate straight line distance (Haversine formula in km)
  calculateDistance(lat1, lon1, lat2, lon2) {
    if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const straightKm = R * c;
    // Road factor approximation (~1.25x for hill/coastal roads)
    return Math.round(straightKm * 1.25);
  },

  // Fuel Cost Estimator (Petrol ₹103/L)
  calculateFuelEstimate(distanceKm, transportMode = "bike") {
    const petrolPricePerLiter = 103;
    const mileage = transportMode === "bike" ? 42 : transportMode === "car" ? 14 : 35; // km per liter
    const roundTripKm = distanceKm * 2;
    const litersNeeded = roundTripKm / mileage;
    const fuelCost = Math.round(litersNeeded * petrolPricePerLiter);
    return {
      roundTripKm,
      mode: transportMode,
      litersNeeded: litersNeeded.toFixed(1),
      estimatedFuelCost: fuelCost,
      formattedFuel: `₹${fuelCost.toLocaleString('en-IN')}`
    };
  },

  // Filter low-cost escapes relative to current origin
  getLowCostEscapes({ maxDistanceKm = 150, maxCostINR = 2000, category = null } = {}) {
    const origin = this.getOriginCoords();
    const dests = window.ODISHA_DATA?.destinations || [];

    return dests.map(d => {
      const roadKm = this.calculateDistance(origin.lat, origin.lng, d.latitude, d.longitude);
      const fuelBike = this.calculateFuelEstimate(roadKm, "bike");
      const fuelCar = this.calculateFuelEstimate(roadKm, "car");

      let totalDayTripCost = fuelBike.estimatedFuelCost + 250; // fuel + local food/tea/entry
      if (d.cost_category === 'FREE') totalDayTripCost = fuelBike.estimatedFuelCost + 150;

      return {
        ...d,
        distanceFromOriginKm: roadKm,
        fuelEstimateBike: fuelBike,
        fuelEstimateCar: fuelCar,
        calculatedDayTripCost: totalDayTripCost,
        originCity: origin.name
      };
    })
    .filter(d => {
      const matchesDist = !maxDistanceKm || d.distanceFromOriginKm <= maxDistanceKm;
      const matchesCost = !maxCostINR || d.calculatedDayTripCost <= maxCostINR || d.cost_category === 'FREE' || d.cost_category === 'LOW COST ESCAPE';
      const matchesCat = !category || category === 'All' || d.category === category;
      return matchesDist && matchesCost && matchesCat;
    })
    .sort((a, b) => a.distanceFromOriginKm - b.distanceFromOriginKm);
  },

  calculateTripEstimate(destination, days = 3, travelerStyle = "midRange") {
    if (!destination) return null;
    const baseDaily = destination.estimatedDailyBudget || { budget: 1500, midRange: 3500, luxury: 7500 };
    const dailyRate = baseDaily[travelerStyle] || baseDaily.midRange || 3500;

    const totalEstimate = dailyRate * days;
    return {
      destinationName: destination.name,
      durationDays: days,
      travelerStyle: travelerStyle,
      dailyRate: Math.round(dailyRate),
      totalEstimate: Math.round(totalEstimate),
      range: {
        min: Math.round(totalEstimate * 0.85),
        max: Math.round(totalEstimate * 1.20)
      },
      itemizedBreakdown: [
        { category: "Transport / Fuel", min: Math.round(totalEstimate * 0.30), max: Math.round(totalEstimate * 0.35) },
        { category: "Stay / Accommodation", min: Math.round(totalEstimate * 0.35), max: Math.round(totalEstimate * 0.40) },
        { category: "Food & Local Delicacies", min: Math.round(totalEstimate * 0.20), max: Math.round(totalEstimate * 0.25) },
        { category: "Sightseeing & Entry Fees", min: Math.round(totalEstimate * 0.08), max: Math.round(totalEstimate * 0.12) }
      ],
      methodology: "Estimated typical ranges based on verified Odisha tourism data"
    };
  }
};

/* Provide legacy alias */
window.WayfarerCostEngine = window.AntaraCostEngine;
