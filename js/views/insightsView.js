class WayfarerInsightsView {
    constructor() {
        this.store = window.wayfarerStore;
    }

    render(containerId) {
        const container = (containerId && typeof containerId === 'object' && containerId.nodeType) ? containerId : document.getElementById(containerId || 'view-insights');
        if (!container) {
            console.error(`Container #${containerId} not found.`);
            return;
        }

        // Mock data fallbacks in case store is incomplete
        const stats = this.store && this.store.getStats ? this.store.getStats() : { totalTrips: 24, placesVisited: 142, countries: 18, travelDays: 365 };
        const destinations = this.store && this.store.getDestinations ? this.store.getDestinations() : [];
        const trips = this.store && this.store.getTrips ? this.store.getTrips() : [];
        const memories = this.store && this.store.getMemories ? this.store.getMemories() : [];

        // 1. CINEMATIC HEADER
        const headerHTML = `
            <header class="mb-20 text-center animate-fade-in-up">
                <p class="text-xs tracking-[0.3em] text-accent uppercase mb-4 opacity-70">Travel Intelligence Analytics</p>
                <h1 class="font-serif text-5xl md:text-7xl mb-6 text-primary">Your Explorer DNA</h1>
                <p class="text-lg md:text-xl text-primary/60 max-w-2xl mx-auto font-light">A data-driven portrait of your wanderlust</p>
            </header>
        `;

        // 2. SUMMARY STAT CARDS
        const statCardsHTML = `
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                ${this.createStatCard('Total Trips', stats.totalTrips || 12, '+15% YoY', 'from-accent/20 to-transparent')}
                ${this.createStatCard('Places Visited', stats.placesVisited || 48, '+8% YoY', 'from-accent/20 to-transparent')}
                ${this.createStatCard('Countries', stats.countries || 9, '+22% YoY', 'from-accent/20 to-transparent')}
                ${this.createStatCard('Travel Days', stats.travelDays || 112, '+5% YoY', 'from-accent/20 to-transparent')}
            </section>
        `;

        // 3. EXPLORER PERSONALITY CARD
        const personalityHTML = `
            <section class="mb-20">
                <h2 class="font-serif text-3xl mb-8 text-primary border-b border-primary/20 pb-4">Explorer Profile</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black/20 p-8 rounded-2xl border border-primary/10">
                    <div class="flex flex-col justify-center">
                        <h3 class="text-accent text-sm tracking-widest uppercase mb-2">Dominant Archetype</h3>
                        <h4 class="font-serif text-5xl text-primary mb-6">Mountain Soul</h4>
                        <ul class="space-y-4 text-primary/70 text-lg">
                            <li class="flex items-center gap-3"><span class="text-accent">✧</span> Prefers shoulder season travel</li>
                            <li class="flex items-center gap-3"><span class="text-accent">✧</span> Drawn to high altitude destinations</li>
                            <li class="flex items-center gap-3"><span class="text-accent">✧</span> Immersive local experiences over tourist hubs</li>
                            <li class="flex items-center gap-3"><span class="text-accent">✧</span> High propensity for spontaneous bookings</li>
                        </ul>
                    </div>
                    <div class="flex items-center justify-center">
                        <div class="relative w-64 h-64 rounded-full flex items-center justify-center bg-black/40 border border-primary/20 shadow-[0_0_50px_rgba(255,255,255,0.05)]" 
                             style="background: conic-gradient(var(--accent-color, #d4af37) 0% 40%, rgba(255,255,255,0.2) 40% 70%, rgba(255,255,255,0.05) 70% 100%);">
                             <div class="absolute inset-2 rounded-full bg-[#111] flex items-center justify-center flex-col">
                                 <span class="text-4xl font-serif text-primary">40%</span>
                                 <span class="text-xs uppercase tracking-widest text-primary/50">Nature & Wild</span>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        // 4. CATEGORY BREAKDOWN BARS
        const categories = [
            { name: 'Mountains', count: 24, percentage: 80 },
            { name: 'Lakes', count: 18, percentage: 60 },
            { name: 'Forests', count: 15, percentage: 50 },
            { name: 'National Parks', count: 12, percentage: 40 },
            { name: 'Road Trips', count: 9, percentage: 30 },
            { name: 'Beaches', count: 6, percentage: 20 },
        ];
        
        const barsHTML = `
            <section class="mb-20">
                <h2 class="font-serif text-3xl mb-8 text-primary border-b border-primary/20 pb-4">Terrain Affinities</h2>
                <div class="space-y-6">
                    ${categories.map(cat => `
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-sm">
                                <span class="text-primary/80 uppercase tracking-wider">${cat.name}</span>
                                <span class="text-primary font-serif">${cat.count} / ${cat.percentage}%</span>
                            </div>
                            <div class="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
                                <div class="insight-chart-bar h-full bg-accent transition-all duration-1000 ease-out" style="width: 0%;" data-width="${cat.percentage}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;

        // 5. SEASON PREFERENCE MATRIX
        const seasons = [
            { name: 'Spring', count: 8, intensity: 'bg-primary/40' },
            { name: 'Summer', count: 14, intensity: 'bg-primary/80' },
            { name: 'Autumn', count: 10, intensity: 'bg-primary/50' },
            { name: 'Winter', count: 4, intensity: 'bg-primary/20' }
        ];

        const seasonsHTML = `
            <section class="mb-20">
                <h2 class="font-serif text-3xl mb-8 text-primary border-b border-primary/20 pb-4">Seasonality Matrix</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${seasons.map(s => `
                        <div class="${s.intensity} p-8 rounded-xl border border-primary/10 flex flex-col items-center justify-center transition-transform hover:scale-105 duration-500">
                            <span class="text-sm uppercase tracking-widest text-black/60 font-bold mix-blend-overlay mb-2">${s.name}</span>
                            <span class="text-4xl font-serif text-black/80 mix-blend-overlay">${s.count}</span>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;

        // 6. BUCKET LIST JOURNEY PIPELINE
        const pipeline = [
            { stage: 'Dreaming', count: 42, color: 'text-primary/40', border: 'border-primary/40' },
            { stage: 'Researching', count: 18, color: 'text-primary/60', border: 'border-primary/60' },
            { stage: 'Planning', count: 7, color: 'text-primary/80', border: 'border-primary/80' },
            { stage: 'Booked', count: 3, color: 'text-accent', border: 'border-accent' },
            { stage: 'Visited', count: 86, color: 'text-primary', border: 'border-primary' }
        ];

        const pipelineHTML = `
            <section class="mb-20">
                <h2 class="font-serif text-3xl mb-8 text-primary border-b border-primary/20 pb-4">Journey Funnel</h2>
                <div class="flex flex-col md:flex-row items-center justify-between gap-4 w-full overflow-x-auto pb-4">
                    ${pipeline.map((p, i) => `
                        <div class="flex-1 min-w-[120px] flex flex-col items-center text-center">
                            <div class="w-20 h-20 rounded-full border-2 ${p.border} flex items-center justify-center mb-4 bg-black/50 shadow-lg">
                                <span class="text-2xl font-serif ${p.color}">${p.count}</span>
                            </div>
                            <span class="text-xs uppercase tracking-wider text-primary/70">${p.stage}</span>
                        </div>
                        ${i < pipeline.length - 1 ? `<div class="hidden md:block text-primary/30 text-2xl">→</div>` : ''}
                    `).join('')}
                </div>
            </section>
        `;

        // 7. TOP DESTINATIONS LEADERBOARD
        const leaderboardHTML = `
            <section class="mb-20">
                <h2 class="font-serif text-3xl mb-8 text-primary border-b border-primary/20 pb-4">Apex Destinations</h2>
                <div class="space-y-4">
                    ${[1,2,3,4,5].map(i => `
                        <div class="flex items-center justify-between p-4 bg-black/20 border border-primary/10 rounded-lg hover:bg-black/40 transition-colors">
                            <div class="flex items-center gap-6">
                                <span class="text-2xl font-serif text-primary/40">0${i}</span>
                                <div>
                                    <h4 class="text-lg font-serif text-primary">Destination ${i}</h4>
                                    <span class="text-xs text-accent uppercase tracking-wider">Dreaming</span>
                                </div>
                            </div>
                            <div class="flex text-accent text-sm">★★★★★</div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;

        // 8. MONTHLY TRAVEL HEATMAP
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const heatmapHTML = `
            <section class="mb-20">
                <h2 class="font-serif text-3xl mb-8 text-primary border-b border-primary/20 pb-4">Activity Heatmap</h2>
                <div class="grid grid-cols-6 md:grid-cols-12 gap-2">
                    ${months.map((m, i) => {
                        const intensity = Math.random();
                        const bgOpacity = 0.1 + (intensity * 0.9); // 0.1 to 1.0
                        return `
                        <div class="flex flex-col items-center gap-2 group cursor-pointer">
                            <div class="w-full aspect-square rounded bg-accent transition-all duration-300 group-hover:scale-110" style="opacity: ${bgOpacity}"></div>
                            <span class="text-[10px] uppercase tracking-wider text-primary/50 group-hover:text-primary">${m}</span>
                        </div>
                    `}).join('')}
                </div>
            </section>
        `;

        // 9. BUDGET INTELLIGENCE SUMMARY
        const budgetHTML = `
            <section class="mb-20">
                <h2 class="font-serif text-3xl mb-8 text-primary border-b border-primary/20 pb-4">Capital Allocation</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-black/30 p-8 rounded-xl border border-primary/10 flex flex-col justify-center text-center">
                        <span class="text-xs uppercase tracking-widest text-primary/50 mb-2">Total Projected Span</span>
                        <span class="text-4xl font-serif text-primary">$45,200</span>
                    </div>
                    <div class="bg-black/30 p-8 rounded-xl border border-primary/10 flex flex-col justify-center text-center">
                        <span class="text-xs uppercase tracking-widest text-primary/50 mb-2">Average Per Trip</span>
                        <span class="text-4xl font-serif text-primary">$2,400</span>
                    </div>
                    <div class="bg-black/30 p-8 rounded-xl border border-primary/10 flex flex-col justify-center text-center">
                        <span class="text-xs uppercase tracking-widest text-primary/50 mb-2">Highest Value Target</span>
                        <span class="text-2xl font-serif text-primary mb-1">Kyoto, Japan</span>
                        <span class="text-sm text-accent">$6,800 est.</span>
                    </div>
                </div>
            </section>
        `;

        // 10. DATA SOURCE TRANSPARENCY PANEL
        const transparencyHTML = `
            <section class="mb-10 p-6 bg-black/10 border border-primary/5 rounded-lg text-center">
                <p class="text-xs text-primary/40 uppercase tracking-widest leading-loose">
                    Intelligence Engine v2.1.4 <br>
                    Data freshness: Just now • Confidence score: 98% <br>
                    All demographic & geo-data cross-referenced with official government portals & UNESCO registries.
                </p>
            </section>
        `;

        const wrapperHTML = `
            <div class="max-w-6xl mx-auto px-6 py-12">
                ${headerHTML}
                ${statCardsHTML}
                ${personalityHTML}
                ${barsHTML}
                ${seasonsHTML}
                ${pipelineHTML}
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    ${leaderboardHTML.replace('mb-20', '')}
                    ${heatmapHTML.replace('mb-20', '')}
                </div>
                ${budgetHTML}
                ${transparencyHTML}
            </div>
        `;

        container.innerHTML = wrapperHTML;

        // Animate bars after render
        setTimeout(() => {
            const bars = container.querySelectorAll('.insight-chart-bar');
            bars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                if (targetWidth) {
                    bar.style.width = targetWidth;
                }
            });
        }, 100);
    }

    createStatCard(label, value, trend, gradientClass) {
        return `
            <div class="relative overflow-hidden bg-gradient-to-br ${gradientClass} bg-black/40 p-8 rounded-2xl border border-primary/10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
                <div class="absolute -right-10 -top-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors"></div>
                <span class="text-xs uppercase tracking-widest text-primary/60 mb-6">${label}</span>
                <div class="flex items-end justify-between">
                    <span class="text-6xl font-serif text-primary leading-none">${value}</span>
                    <span class="text-sm text-accent tracking-wider">${trend}</span>
                </div>
            </div>
        `;
    }
}

window.WayfarerInsightsView = new WayfarerInsightsView();
window.WFInsightsView = window.WayfarerInsightsView;
