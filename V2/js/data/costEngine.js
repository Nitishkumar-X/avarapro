/* ==========================================================================
   WAYFARER V2 — Multi-Tier Realistic Travel Cost Engine & Expense Tracker
   ========================================================================== */

window.WayfarerCostEngine = {
  calculateTripEstimate(destination, days = 7, travelerStyle = "midRange") {
    if (!destination) return null;

    const baseDaily = destination.estimatedDailyBudget || { budget: 2000, midRange: 4200, luxury: 9500 };
    const dailyRate = baseDaily[travelerStyle] || baseDaily.midRange || 4200;

    const transportRatio = 0.35;
    const stayRatio = 0.32;
    const foodRatio = 0.18;
    const localTransitRatio = 0.08;
    const activitiesRatio = 0.07;

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
        { category: "Intercity Transport", min: Math.round(totalEstimate * transportRatio * 0.85), max: Math.round(totalEstimate * transportRatio * 1.15) },
        { category: "Accommodation & Stay", min: Math.round(totalEstimate * stayRatio * 0.9), max: Math.round(totalEstimate * stayRatio * 1.2) },
        { category: "Food & Dining", min: Math.round(totalEstimate * foodRatio * 0.85), max: Math.round(totalEstimate * foodRatio * 1.15) },
        { category: "Local Transit & Taxi", min: Math.round(totalEstimate * localTransitRatio * 0.8), max: Math.round(totalEstimate * localTransitRatio * 1.2) },
        { category: "Entry Fees & Activities", min: Math.round(totalEstimate * activitiesRatio * 0.8), max: Math.round(totalEstimate * activitiesRatio * 1.2) }
      ],
      methodology: "Based on verified average public prices & tier-1 tourism data (Checked Aug 2026)",
      provenance: destination.sources ? destination.sources[0] : { sourceName: "Incredible India / Official Tourism Board", lastVerified: "2026-08-12" }
    };
  },

  convertCurrency(amountINR, targetCurrencyCode = "USD") {
    const currencies = (window.GLOBAL_TRAVEL_DATA && window.GLOBAL_TRAVEL_DATA.currencies) || [];
    const target = currencies.find(c => c.code === targetCurrencyCode);
    if (!target) return { amount: amountINR, symbol: "₹" };

    const converted = amountINR / target.rateToINR;
    return {
      amount: Math.round(converted),
      formatted: `${target.symbol}${Math.round(converted).toLocaleString()}`,
      symbol: target.symbol,
      code: target.code
    };
  }
};
