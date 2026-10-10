window.WayfarerHomeView = {
    heroInterval: null,
    heroImages: [
        'NATURE/amy-w-IPFrMULxHjE-unsplash.jpg',
        'NATURE/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg',
        'NATURE/june-o-Tq61bW38kmM-unsplash.jpg'
    ],
    currentHeroIndex: 0,
    currentRegionTab: 'Overview',
    regionTabs: ['Overview', 'Himalayas', 'Western Ghats', 'Northeast', 'Coastal', 'Rajasthan'],
    
    rightCircles: [
        { img: 'NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg', name: 'Coastal Retreat', region: 'Oceania' },
        { img: 'NATURE/florian-k-r1RjYmC6frI-unsplash.jpg', name: 'Alpine Peaks', region: 'Switzerland' },
        { img: 'NATURE/jon-flobrant-rB7-LCa_diU-unsplash.jpg', name: 'Deep Forest', region: 'Scandinavia' },
        { img: 'NATURE/tim-swaan-eOpewngf68w-unsplash.jpg', name: 'River Delta', region: 'Amazon' },
        { img: 'NATURE/cedric-letsch-UZVlSjrIJ3o-unsplash.jpg', name: 'Silent Meadow', region: 'Highlands' }
    ],

    horizons: [
        { id: 'h1', img: 'NATURE/leah-berman-FfqubkF5NLc-unsplash.jpg', name: 'Mountain Pass', region: 'Himalayas', cat: 'Alpine' },
        { id: 'h2', img: 'NATURE/maxime-niyomwungeri-z-lNmXoXt-k-unsplash.jpg', name: 'Golden Hour', region: 'Savannah', cat: 'Safari' },
        { id: 'h3', img: 'NATURE/nuno-antunes-fOLT_LO2nsc-unsplash.jpg', name: 'Hidden Valley', region: 'Andes', cat: 'Valley' },
        { id: 'h4', img: 'NATURE/roberto-nickson-wdCkqK1oRIc-unsplash.jpg', name: 'Dramatic Sky', region: 'Nordic', cat: 'Aurora' },
        { id: 'h5', img: 'NATURE/sheila-c-hqLq0Qmu4d8-unsplash.jpg', name: 'Nature Reserve', region: 'Pacific', cat: 'Forest' },
        { id: 'h6', img: 'NATURE/samson-ZGjbiukp_-A-unsplash.jpg', name: 'Cloud Peaks', region: 'Rockies', cat: 'Mountain' }
    ],

    setRegionTab: function(tab) {
        this.currentRegionTab = tab;
        const container = document.getElementById('wayfarer-home-container');
        if (container) {
            container.outerHTML = this.render();
        }
    },

    startHeroRotation: function() {
        this.stopHeroRotation();
        this.heroInterval = setInterval(() => {
            this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
            const heroBg = document.getElementById('hero-bg-layer');
            if (heroBg) {
                heroBg.style.backgroundImage = `url('${this.heroImages[this.currentHeroIndex]}')`;
            }
        }, 5000);
    },

    stopHeroRotation: function() {
        if (this.heroInterval) {
            clearInterval(this.heroInterval);
            this.heroInterval = null;
        }
    },

    render: function() {
        // Fetch from Store API safely
        const stats = window.wayfarerStore && window.wayfarerStore.getStats ? window.wayfarerStore.getStats() : { placesVisited: 14, countriesVisited: 3, totalTravelDays: 42, bucketCount: 18 };
        const destinations = window.wayfarerStore && window.wayfarerStore.getDestinations ? window.wayfarerStore.getDestinations() : [];
        const memories = window.wayfarerStore && window.wayfarerStore.getMemories ? window.wayfarerStore.getMemories() : [];
        const profile = window.wayfarerStore && window.wayfarerStore.getProfile ? window.wayfarerStore.getProfile() : {};
        const trips = window.wayfarerStore && window.wayfarerStore.getTrips ? window.wayfarerStore.getTrips() : [];

        // Personalized Recommendations Engine
        let recsHTML = '';
        if (window.WayfarerItineraryEngine && typeof window.WayfarerItineraryEngine.getRecommendationsForUser === 'function') {
            const recs = window.WayfarerItineraryEngine.getRecommendationsForUser(profile, destinations);
            if (recs && recs.length > 0) {
                recsHTML = `
                    <div class="mt-16 mb-8">
                        <h2 class="text-3xl font-serif mb-6 text-white">Matched For Your Explorer Profile</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            ${recs.map(rec => `
                                <div class="editorial-card-interactive p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                                    <div class="flex justify-between items-start mb-4">
                                        <h3 class="text-xl font-serif text-white">${rec.destinationName || rec.name || 'Unknown'}</h3>
                                        <span class="px-3 py-1 bg-green-900/30 text-green-400 text-sm font-semibold rounded-full">${rec.matchScore || 95}% Match</span>
                                    </div>
                                    <ul class="text-neutral-400 space-y-2 text-sm">
                                        ${(rec.reasons || ['High altitude preference', 'Remote location', 'Scenic trails']).map(r => `<li>• ${r}</li>`).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        }

        // Upcoming Expedition Spotlight
        let upcomingTripHTML = '';
        const upcomingTrip = trips.length > 0 ? trips[0] : { title: 'Alpine Traverse', startDate: '2026-10-01', coverImage: 'NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg', readiness: 85, daysToDeparture: 45 };
        if (upcomingTrip) {
            upcomingTripHTML = `
                <div class="mt-16 mb-8 relative rounded-3xl overflow-hidden h-[300px] shadow-2xl shadow-black">
                    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${upcomingTrip.coverImage || 'NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg'}')"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8 flex flex-col md:flex-row justify-between items-end gap-6">
                        <div class="flex-grow">
                            <span class="text-[#D4AF37] text-sm tracking-widest uppercase mb-2 block">Upcoming Expedition</span>
                            <h2 class="text-4xl font-serif text-white mb-2 drop-shadow-md">${upcomingTrip.title}</h2>
                            <p class="text-neutral-300">Departs in ${upcomingTrip.daysToDeparture || 45} days • ${upcomingTrip.startDate}</p>
                            <div class="mt-4 flex items-center gap-4">
                                <div class="flex-grow max-w-md bg-neutral-800 h-2 rounded-full overflow-hidden">
                                    <div class="bg-[#D4AF37] h-full" style="width: ${upcomingTrip.readiness || 85}%"></div>
                                </div>
                                <span class="text-xs text-neutral-400 uppercase tracking-wider">${upcomingTrip.readiness || 85}% Ready</span>
                            </div>
                        </div>
                        <div class="flex gap-4 flex-shrink-0">
                            <button class="btn-editorial-pill bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors shadow-lg">View Itinerary</button>
                            <button class="btn-editorial-pill border border-white/30 text-white backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">Open Checklist</button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Featured Journal Spotlight
        let journalHTML = '';
        const featuredMemory = memories.length > 0 ? memories[0] : { quote: "In the infinite silence of the snow, the world finally made sense. Every step forward was a step deeper into myself.", location: 'Mountain Pass', date: 'Oct 2025', mood: 'Awestruck', image: 'NATURE/119632.jpg' };
        if (featuredMemory) {
            journalHTML = `
                <div class="mt-20 mb-16">
                    <div class="flex flex-col md:flex-row gap-12 items-center">
                        <div class="w-full md:w-[60%]">
                            <img src="${featuredMemory.image || 'NATURE/119632.jpg'}" alt="Field Reflection" class="w-full h-[450px] object-cover rounded-3xl shadow-2xl shadow-black/60" />
                        </div>
                        <div class="w-full md:w-[40%] md:pr-8">
                            <span class="text-neutral-400 tracking-widest text-sm uppercase mb-6 block border-l-2 border-[#D4AF37] pl-4">Field Reflection</span>
                            <blockquote class="text-3xl font-serif italic text-white mb-8 leading-relaxed">
                                "${featuredMemory.quote || 'The silent peak calls out.'}"
                            </blockquote>
                            <div class="text-neutral-400 text-sm space-y-2 uppercase tracking-wider">
                                <p><span class="text-neutral-500 mr-2">Loc:</span> ${featuredMemory.location}</p>
                                <p><span class="text-neutral-500 mr-2">Date:</span> ${featuredMemory.date}</p>
                                <p><span class="text-neutral-500 mr-2">Mood:</span> ${featuredMemory.mood}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Start auto-rotation when rendered
        setTimeout(() => {
            this.startHeroRotation();
        }, 100);

        return `
            <div id="wayfarer-home-container" class="animate-fade-up pb-24 font-sans text-neutral-300">
                
                <!-- CINEMATIC HERO -->
                <div class="relative w-full h-[680px] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-black/80">
                    <div id="hero-bg-layer" class="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out" style="background-image: url('${this.heroImages[this.currentHeroIndex]}')"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <!-- Live Intelligence Badge -->
                    <div class="absolute top-6 right-8 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10">
                        <div class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                        <span class="text-xs tracking-widest text-white uppercase font-medium">Live Intelligence</span>
                    </div>

                    <div class="absolute inset-0 p-12 flex flex-col justify-between z-10">
                        <div>
                            <span class="text-xs font-semibold tracking-widest text-black bg-[#D4AF37] px-4 py-1.5 rounded-sm shadow-md">WAYFARER INTELLIGENCE</span>
                        </div>
                        
                        <div class="flex justify-between items-end">
                            <div class="max-w-3xl">
                                <h1 class="text-7xl font-serif italic text-white mb-4 leading-[1.1] drop-shadow-xl">Travel Beyond<br/>the Ordinary</h1>
                                <p class="text-4xl text-[#D4AF37] mb-10 drop-shadow-md" style="font-family: 'Brush Script MT', 'Great Vibes', cursive;">Slow travel, infinite silence</p>
                                <div class="flex gap-5">
                                    <button onclick="window.wayfarerApp && window.wayfarerApp.switchTab('explore')" class="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-neutral-200 transition-colors shadow-xl">Explore Landscapes &rarr;</button>
                                    <button onclick="window.wayfarerApp && window.wayfarerApp.switchTab('trips')" class="bg-black/20 backdrop-blur-sm border border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors shadow-xl">Active Expedition &rarr;</button>
                                </div>
                            </div>

                            <div class="hidden lg:flex flex-col gap-5">
                                ${this.rightCircles.map(c => `
                                    <div class="flex items-center gap-4 group cursor-pointer justify-end">
                                        <div class="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                            <p class="text-white text-sm font-serif drop-shadow-md">${c.name}</p>
                                            <p class="text-neutral-400 text-xs tracking-wider uppercase drop-shadow-md">${c.region}</p>
                                        </div>
                                        <div class="w-[60px] h-[60px] rounded-full bg-cover bg-center border-2 border-white/20 group-hover:border-white transition-all duration-300 shadow-xl" style="background-image: url('${c.img}')"></div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Bottom Strip -->
                        <div class="mt-12 border-t border-white/10 pt-6 flex gap-10 overflow-x-auto hide-scrollbar">
                            ${this.regionTabs.map(tab => `
                                <button onclick="window.WayfarerHomeView.setRegionTab('${tab}')" class="text-sm uppercase tracking-[0.2em] font-medium ${this.currentRegionTab === tab ? 'text-white border-b-2 border-[#D4AF37] pb-1' : 'text-neutral-500 hover:text-neutral-300'} transition-all whitespace-nowrap">
                                    ${tab}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- STAT COUNTER ROW -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    <div class="stat-counter-card editorial-card p-8 bg-neutral-900 rounded-3xl border border-neutral-800 text-center relative overflow-hidden group shadow-xl">
                        <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 class="text-[54px] font-serif text-white mb-2 relative z-10 leading-none">${stats.placesVisited || 0}</h3>
                        <p class="text-sm text-[#D4AF37] uppercase tracking-widest relative z-10 font-medium">Places Explored</p>
                        <p class="text-xs text-neutral-500 mt-2 relative z-10 uppercase tracking-wider">Total mapped locations</p>
                    </div>
                    <div class="stat-counter-card editorial-card p-8 bg-neutral-900 rounded-3xl border border-neutral-800 text-center relative overflow-hidden group shadow-xl">
                        <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 class="text-[54px] font-serif text-white mb-2 relative z-10 leading-none">${stats.countriesVisited || 0}</h3>
                        <p class="text-sm text-[#D4AF37] uppercase tracking-widest relative z-10 font-medium">Countries Visited</p>
                        <p class="text-xs text-neutral-500 mt-2 relative z-10 uppercase tracking-wider">Borders crossed</p>
                    </div>
                    <div class="stat-counter-card editorial-card p-8 bg-neutral-900 rounded-3xl border border-neutral-800 text-center relative overflow-hidden group shadow-xl">
                        <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 class="text-[54px] font-serif text-white mb-2 relative z-10 leading-none">${stats.totalTravelDays || 0}</h3>
                        <p class="text-sm text-[#D4AF37] uppercase tracking-widest relative z-10 font-medium">Travel Days</p>
                        <p class="text-xs text-neutral-500 mt-2 relative z-10 uppercase tracking-wider">Time on the road</p>
                    </div>
                    <div class="stat-counter-card editorial-card p-8 bg-neutral-900 rounded-3xl border border-neutral-800 text-center relative overflow-hidden group shadow-xl">
                        <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 class="text-[54px] font-serif text-white mb-2 relative z-10 leading-none">${stats.bucketCount || 0}</h3>
                        <p class="text-sm text-[#D4AF37] uppercase tracking-widest relative z-10 font-medium">Bucket List</p>
                        <p class="text-xs text-neutral-500 mt-2 relative z-10 uppercase tracking-wider">Dream destinations</p>
                    </div>
                </div>

                <!-- FEATURED HORIZONS -->
                <div class="mb-20">
                    <div class="flex justify-between items-end mb-10 px-2">
                        <h2 class="text-4xl font-serif text-white">Featured Horizons</h2>
                        <button onclick="window.wayfarerApp && window.wayfarerApp.switchTab('explore')" class="text-[#D4AF37] text-sm uppercase tracking-widest hover:text-white transition-colors font-medium">View All &rarr;</button>
                    </div>
                    <div class="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                        ${this.horizons.map(h => `
                            <div class="photo-hover-reveal flex-shrink-0 w-[300px] h-[380px] bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden relative group snap-start cursor-pointer shadow-xl" onclick="window.wayfarerBucketList && window.wayfarerBucketList.openDestinationDetail('${h.id}')">
                                <div class="w-full h-[65%] bg-cover bg-center relative transition-transform duration-700 group-hover:scale-105" style="background-image: url('${h.img}')">
                                    <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
                                    <span class="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">${h.cat}</span>
                                </div>
                                <div class="p-6 h-[35%] flex flex-col justify-between absolute bottom-0 w-full bg-neutral-900 z-10">
                                    <div>
                                        <h3 class="text-2xl font-serif text-white mb-1 group-hover:text-[#D4AF37] transition-colors">${h.name}</h3>
                                        <p class="text-xs text-neutral-500 uppercase tracking-widest">${h.region}</p>
                                    </div>
                                    <button onclick="event.stopPropagation(); window.WayfarerNotify && window.WayfarerNotify.show('Added ${h.name} to bucket list', 'success')" class="w-full py-2.5 border border-neutral-700 rounded-xl text-sm text-neutral-300 hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium">
                                        + Add to Bucket List
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${recsHTML}
                ${upcomingTripHTML}
                ${journalHTML}
                
            </div>
        `;
    }
};
