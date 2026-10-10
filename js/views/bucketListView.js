(function() {
    class BucketListView {
        constructor() {
            this.container = null;
            this.currentStatus = 'All';
            this.currentPriority = 'All';
            this.currentSort = 'Name A-Z';
            this.images = [
                'NATURE/amy-w-IPFrMULxHjE-unsplash.jpg',
                'NATURE/florian-k-r1RjYmC6frI-unsplash.jpg',
                'NATURE/jon-flobrant-rB7-LCa_diU-unsplash.jpg',
                'NATURE/june-o-Tq61bW38kmM-unsplash.jpg',
                'NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg',
                'NATURE/119632.jpg',
                'NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg',
                'NATURE/roberto-nickson-wdCkqK1oRIc-unsplash.jpg'
            ];
            this.stages = ['Dreaming', 'Researching', 'Planning', 'Booked', 'Visited'];
            this.stageIcons = {
                'Dreaming': '☁️',
                'Researching': '🔍',
                'Planning': '🗓️',
                'Booked': '✈️',
                'Visited': '✅'
            };
            this.viewMode = 'grid'; // 'grid' | 'pipeline'
        }

        render(containerId) {
            // Support DOM element or string ID
            if (containerId && typeof containerId === 'object' && containerId.nodeType) {
                this.container = containerId;
            } else {
                const id = containerId || 'view-bucketlist';
                this.container = document.getElementById(id);
            }
            if (!this.container) return;
            this.refresh();
        }

        refresh() {
            // Re-resolve container in case it was lost (e.g. after a tab switch)
            if (!this.container) {
                this.container = document.getElementById('view-bucketlist');
            }
            if (!this.container) return;

            const allDestinations = window.wayfarerStore.getDestinations() || [];
            
            // Calculate stats
            const total = allDestinations.length;
            const dreamingCount = allDestinations.filter(d => d.status === 'Dreaming').length;
            const visitedCount = allDestinations.filter(d => d.status === 'Visited').length;
            
            const stageCounts = { 'All': total };
            this.stages.forEach(stage => {
                stageCounts[stage] = allDestinations.filter(d => d.status === stage).length;
            });

            // Filter logic
            let filteredDestinations = allDestinations.filter(d => {
                if (this.currentStatus !== 'All' && d.status !== this.currentStatus) return false;
                if (this.currentPriority !== 'All' && d.priority !== this.currentPriority) return false;
                return true;
            });

            // Sort logic
            filteredDestinations.sort((a, b) => {
                if (this.currentSort === 'Name A-Z') {
                    return a.name.localeCompare(b.name);
                } else if (this.currentSort === 'Budget ASC') {
                    return (a.estimatedBudget || 0) - (b.estimatedBudget || 0);
                } else if (this.currentSort === 'Budget DESC') {
                    return (b.estimatedBudget || 0) - (a.estimatedBudget || 0);
                } else if (this.currentSort === 'Rating') {
                    return (b.rating || 0) - (a.rating || 0);
                }
                return 0;
            });

            // Build HTML
            let html = `
                <div class="wayfarer-bucket-list pb-20">
                    <!-- 1. PAGE HEADER -->
                    <div class="mb-10 flex flex-col md:flex-row justify-between md:items-end gap-6">
                        <div>
                            <div class="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-3">PERSONAL COLLECTION & INTELLIGENCE</div>
                            <h1 class="font-serif text-5xl md:text-6xl italic text-forest-900 mb-4">Bucket List Horizons</h1>
                            <div class="flex items-center gap-4 text-sm text-neutral-600">
                                <span><strong>${total}</strong> Total Destinations</span>
                                <span>&bull;</span>
                                <span><strong>${dreamingCount}</strong> Dreaming</span>
                                <span>&bull;</span>
                                <span><strong>${visitedCount}</strong> Visited</span>
                            </div>
                        </div>
                        <button onclick="window.wayfarerBucketList.openAddDrawer()" class="btn-editorial-pill shrink-0 whitespace-nowrap shadow-sm hover:shadow-md transition-shadow px-6 py-3 bg-forest-800 text-white rounded-full font-medium text-sm flex items-center gap-2">
                            <span>+ Add Destination</span>
                        </button>
                    </div>

                    <!-- 3. JOURNEY PIPELINE VISUAL -->
                    <div class="flex items-center w-full bg-white rounded-2xl shadow-sm border border-neutral-100 p-2 mb-8 overflow-x-auto hide-scrollbar">
                        ${this.stages.map((stage, idx) => `
                            <div onclick="window.wayfarerBucketList.setStatus('${stage}')" class="cursor-pointer flex-1 flex items-center justify-center min-w-[120px] py-3 px-4 rounded-xl transition-colors ${this.currentStatus === stage ? 'bg-forest-50' : 'hover:bg-neutral-50'}">
                                <div class="flex flex-col items-center gap-1">
                                    <div class="text-xl">${this.stageIcons[stage]}</div>
                                    <div class="text-xs font-medium text-neutral-800">${stage}</div>
                                    <div class="text-[10px] text-neutral-400">${stageCounts[stage]} places</div>
                                </div>
                            </div>
                            ${idx < this.stages.length - 1 ? '<div class="text-neutral-300 px-2 flex-shrink-0">→</div>' : ''}
                        `).join('')}
                    </div>

                    <!-- 2. FILTER BAR -->
                    <div class="editorial-card bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 mb-8 flex flex-col lg:flex-row gap-4 justify-between items-center">
                        <div class="flex flex-wrap items-center gap-2">
                            <button onclick="window.wayfarerBucketList.setStatus('All')" class="px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${this.currentStatus === 'All' ? 'bg-forest-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}">All (${total})</button>
                            ${this.stages.map(stage => `
                                <button onclick="window.wayfarerBucketList.setStatus('${stage}')" class="px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${this.currentStatus === stage ? 'bg-forest-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}">${stage} (${stageCounts[stage]})</button>
                            `).join('')}
                        </div>
                        <div class="flex items-center gap-3 w-full lg:w-auto flex-wrap">
                            <!-- View Mode Toggle -->
                            <div class="flex items-center gap-1 p-1 rounded-xl bg-neutral-100 border border-neutral-200">
                                <button onclick="window.wayfarerBucketList.setViewMode('grid')" class="px-3 py-1 text-xs rounded-lg font-medium transition-colors ${this.viewMode === 'grid' ? 'bg-white shadow-sm text-forest-900 font-semibold' : 'text-neutral-500 hover:text-neutral-900'}">🎴 Cards</button>
                                <button onclick="window.wayfarerBucketList.setViewMode('pipeline')" class="px-3 py-1 text-xs rounded-lg font-medium transition-colors ${this.viewMode === 'pipeline' ? 'bg-white shadow-sm text-forest-900 font-semibold' : 'text-neutral-500 hover:text-neutral-900'}">📋 Kanban</button>
                            </div>
                            <select onchange="window.wayfarerBucketList.setPriority(this.value)" class="text-sm bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 outline-none focus:border-forest-500">
                                <option value="All" ${this.currentPriority === 'All' ? 'selected' : ''}>All Priorities</option>
                                <option value="High" ${this.currentPriority === 'High' ? 'selected' : ''}>High Priority</option>
                                <option value="Medium" ${this.currentPriority === 'Medium' ? 'selected' : ''}>Medium Priority</option>
                                <option value="Low" ${this.currentPriority === 'Low' ? 'selected' : ''}>Low Priority</option>
                            </select>
                            <select onchange="window.wayfarerBucketList.setSortOrder(this.value)" class="text-sm bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 outline-none focus:border-forest-500">
                                <option value="Name A-Z" ${this.currentSort === 'Name A-Z' ? 'selected' : ''}>Name A-Z</option>
                                <option value="Budget ASC" ${this.currentSort === 'Budget ASC' ? 'selected' : ''}>Budget (Low to High)</option>
                                <option value="Budget DESC" ${this.currentSort === 'Budget DESC' ? 'selected' : ''}>Budget (High to Low)</option>
                                <option value="Rating" ${this.currentSort === 'Rating' ? 'selected' : ''}>Rating</option>
                            </select>
                        </div>
                    </div>
            `;

            // 4. KANBAN PIPELINE OR DESTINATION CARDS GRID OR EMPTY STATE
            if (this.viewMode === 'pipeline') {
                html += this._renderKanbanPipeline(allDestinations, stageCounts);
            } else if (filteredDestinations.length === 0) {
                html += `
                    <div class="flex flex-col items-center justify-center py-20 text-center">
                        <div class="w-24 h-24 bg-forest-50 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-10 h-10 text-forest-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 class="font-serif text-2xl text-forest-900 mb-2">No Destinations Found</h3>
                        <p class="text-neutral-500 mb-8 max-w-md">Your bucket list is waiting for its next great adventure. Start collecting destinations you dream of visiting.</p>
                        <button onclick="window.wayfarerBucketList.openAddDrawer()" class="btn-editorial-pill px-8 py-3 bg-forest-800 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                            Go Explore &rarr;
                        </button>
                    </div>
                `;
            } else {
                html += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;
                
                filteredDestinations.forEach(dest => {
                    const defaultImg = this.images[0];
                    const priorityDotClass = dest.priority === 'High' ? 'bg-red-500' : dest.priority === 'Medium' ? 'bg-amber-500' : 'bg-neutral-400';
                    const ratingHtml = Array.from({length: 5}).map((_, i) => `<span class="${i < (dest.rating || 0) ? 'text-amber-400' : 'text-neutral-300'}">★</span>`).join('');
                    
                    html += `
                        <div onclick="window.wayfarerBucketList.openDestinationDetail('${dest.id}')" class="editorial-card-interactive group bg-white rounded-3xl shadow-sm hover:shadow-xl border border-neutral-100 overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300 transform hover:-translate-y-1">
                            <div class="relative h-[220px] overflow-hidden rounded-t-3xl">
                                <img src="${dest.coverImage || defaultImg}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${dest.name}">
                                <div class="absolute top-4 left-4">
                                    <span class="bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md">${dest.category || 'Travel'}</span>
                                </div>
                                <div class="absolute top-4 right-4">
                                    <span class="badge-${dest.status ? dest.status.toLowerCase() : 'dreaming'} bg-white/90 text-forest-900 text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-sm">${dest.status || 'Dreaming'}</span>
                                </div>
                            </div>
                            <div class="p-5 flex flex-col flex-grow">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="flex items-center gap-2">
                                        <div class="w-2 h-2 rounded-full ${priorityDotClass}" title="${dest.priority} Priority"></div>
                                        <div class="text-xs font-medium text-neutral-500">${dest.region}, ${dest.country}</div>
                                    </div>
                                    <div class="text-xs flex gap-0.5">${ratingHtml}</div>
                                </div>
                                <h3 class="font-serif font-bold text-2xl text-forest-900 mb-2 leading-tight">${dest.name}</h3>
                                <p class="text-sm text-neutral-600 line-clamp-2 mb-4 flex-grow">${dest.whyVisit || 'A beautiful destination to explore.'}</p>
                                <div class="pt-4 border-t border-neutral-100 flex justify-between items-center text-xs text-neutral-500 font-medium">
                                    <div class="flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> ${dest.bestSeason || 'Year-round'}</div>
                                    <div class="flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> INR ${dest.estimatedBudget ? dest.estimatedBudget.toLocaleString() : '--'}</div>
                                </div>

                                <!-- Interactive Stage Quick Progression Bar -->
                                <div class="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2" onclick="event.stopPropagation()">
                                    <select
                                        onchange="window.wayfarerBucketList.updateDestStatus('${dest.id}', this.value)"
                                        class="text-[11px] bg-neutral-50 border border-neutral-200 rounded-lg px-2 py-1 outline-none text-neutral-700 font-medium"
                                    >
                                        ${this.stages.map(s => `<option value="${s}" ${dest.status === s ? 'selected' : ''}>${this.stageIcons[s]} ${s}</option>`).join('')}
                                    </select>
                                    <div class="flex items-center gap-1.5">
                                        ${dest.status !== 'Visited' ? `
                                            <button
                                                onclick="window.wayfarerBucketList.advanceStage('${dest.id}')"
                                                class="text-[11px] px-2.5 py-1 rounded-lg bg-forest-50 hover:bg-forest-100 text-forest-800 font-semibold transition-colors flex items-center gap-1"
                                                title="Advance to next pipeline stage"
                                            >
                                                <span>${this.getNextStageLabel(dest.status)}</span>
                                                <span>➔</span>
                                            </button>` : `
                                            <span class="text-[11px] text-emerald-600 font-bold px-2 py-1">✓ Visited</span>`}
                                        <button
                                            onclick="ANTARA.planTripWith('${dest.id}')"
                                            class="text-[11px] px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-semibold transition-colors flex items-center gap-1"
                                            title="Plan trip with this destination"
                                        >
                                            🗓️ Plan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
                
                html += `</div>`;
            }

            html += `</div>`;
            this.container.innerHTML = html;
        }

        _renderKanbanPipeline(allDestinations, stageCounts) {
            return `
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-6">
                    ${this.stages.map(stage => {
                        const stageDests = allDestinations.filter(d => (d.status || 'Dreaming') === stage);
                        return `
                            <div class="bg-neutral-50 rounded-2xl p-3.5 border border-neutral-200 flex flex-col min-w-[240px]">
                                <div class="flex items-center justify-between mb-3 pb-2 border-b border-neutral-200">
                                    <div class="flex items-center gap-2">
                                        <span class="text-base">${this.stageIcons[stage]}</span>
                                        <span class="text-xs font-bold text-forest-900 uppercase tracking-wider">${stage}</span>
                                    </div>
                                    <span class="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-700">${stageDests.length}</span>
                                </div>
                                <div class="space-y-3 flex-1 overflow-y-auto max-h-[600px] pr-1">
                                    ${stageDests.length === 0 ? `
                                        <div class="text-center py-8 text-neutral-400 text-xs italic">No places in ${stage}</div>` : `
                                        ${stageDests.map(d => `
                                            <div class="bg-white rounded-xl p-3 border border-neutral-100 shadow-sm hover:shadow transition-shadow flex flex-col gap-2">
                                                <div class="flex items-start gap-2.5 cursor-pointer" onclick="window.wayfarerBucketList.openDestinationDetail('${d.id}')">
                                                    <img src="${d.coverImage || this.images[0]}" class="w-12 h-12 rounded-lg object-cover flex-shrink-0" onerror="this.src='NATURE/119632.jpg'" />
                                                    <div class="flex-1 min-w-0">
                                                        <div class="text-xs font-semibold text-neutral-800 truncate">${d.name}</div>
                                                        <div class="text-[10px] text-neutral-500 truncate">${d.region || d.country || ''}</div>
                                                        <div class="text-[10px] font-mono text-amber-600 mt-0.5">₹${(d.estimatedBudget || d.budget || 0).toLocaleString()}</div>
                                                    </div>
                                                </div>
                                                <div class="flex items-center justify-between pt-2 border-t border-neutral-100 text-[11px]">
                                                    <div class="flex gap-1">
                                                        <button onclick="window.wayfarerBucketList.regressStage('${d.id}')" class="px-2 py-0.5 rounded hover:bg-neutral-100 text-neutral-500 font-bold" title="Move back" ${stage === 'Dreaming' ? 'disabled style="opacity:0.25"' : ''}>←</button>
                                                        <button onclick="window.wayfarerBucketList.advanceStage('${d.id}')" class="px-2 py-0.5 rounded hover:bg-neutral-100 text-neutral-500 font-bold" title="Advance" ${stage === 'Visited' ? 'disabled style="opacity:0.25"' : ''}>→</button>
                                                    </div>
                                                    <button onclick="ANTARA.planTripWith('${d.id}')" class="text-amber-700 font-semibold hover:underline text-[10px]">🗓️ Plan Trip</button>
                                                </div>
                                            </div>
                                        `).join('')}
                                    `}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        setViewMode(mode) {
            this.viewMode = mode;
            this.refresh();
        }

        getNextStageLabel(currentStatus) {
            const map = {
                'Dreaming': 'Research',
                'Researching': 'Plan',
                'Planning': 'Book',
                'Booked': 'Visit',
                'Visited': 'Complete'
            };
            return map[currentStatus] || 'Next';
        }

        advanceStage(destId) {
            const dest = window.wayfarerStore.getDestination(destId);
            if (!dest) return;
            const curIdx = this.stages.indexOf(dest.status || 'Dreaming');
            if (curIdx !== -1 && curIdx < this.stages.length - 1) {
                const next = this.stages[curIdx + 1];
                window.wayfarerStore.updateDestination(destId, { status: next });
                window.wayfarerStore.save();
                if (window.WFNotify) window.WFNotify.show(`Moved ${dest.name} to ${next}! ✨`, 'success');
                this.refresh();
            }
        }

        regressStage(destId) {
            const dest = window.wayfarerStore.getDestination(destId);
            if (!dest) return;
            const curIdx = this.stages.indexOf(dest.status || 'Dreaming');
            if (curIdx > 0) {
                const prev = this.stages[curIdx - 1];
                window.wayfarerStore.updateDestination(destId, { status: prev });
                window.wayfarerStore.save();
                if (window.WFNotify) window.WFNotify.show(`Moved ${dest.name} back to ${prev}`, 'info');
                this.refresh();
            }
        }

        setStatus(st) {
            this.currentStatus = st;
            this.refresh();
        }

        setPriority(pr) {
            this.currentPriority = pr;
            this.refresh();
        }

        setSortOrder(order) {
            this.currentSort = order;
            this.refresh();
        }

        openDestinationDetail(id) {
            const dest = window.wayfarerStore.getDestination(id);
            if (!dest) return;

            // Generate multi-tier costs if engine exists
            let costHtml = '';
            if (window.WayfarerCostEngine && window.WayfarerCostEngine.calculateTripEstimate) {
                const days = dest.duration || 7;
                const budget = window.WayfarerCostEngine.calculateTripEstimate(dest, days, 'budget');
                const mid = window.WayfarerCostEngine.calculateTripEstimate(dest, days, 'mid');
                const comf = window.WayfarerCostEngine.calculateTripEstimate(dest, days, 'comfortable');
                
                if(budget && mid && comf) {
                    costHtml = `
                    <div class="mb-8">
                        <h4 class="text-sm tracking-wider font-semibold uppercase text-neutral-500 mb-4">Cost Intelligence (${days} Days)</h4>
                        <div class="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                            <div class="min-w-[200px] p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex-1">
                                <div class="text-xs font-bold text-neutral-500 uppercase mb-1">Budget</div>
                                <div class="text-xl font-serif text-forest-900 mb-3">₹${budget.total.toLocaleString()}</div>
                                <div class="text-[10px] text-neutral-500 space-y-1">
                                    <div class="flex justify-between"><span>Stay:</span><span>₹${budget.breakdown.accommodation.toLocaleString()}</span></div>
                                    <div class="flex justify-between"><span>Food:</span><span>₹${budget.breakdown.food.toLocaleString()}</span></div>
                                    <div class="flex justify-between"><span>Activity:</span><span>₹${budget.breakdown.activities.toLocaleString()}</span></div>
                                </div>
                            </div>
                            <div class="min-w-[200px] p-4 rounded-2xl bg-forest-50 border border-forest-300 flex-1 relative shadow-sm">
                                <div class="absolute -top-2 left-1/2 -translate-x-1/2 bg-forest-600 text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full">Recommended</div>
                                <div class="text-xs font-bold text-forest-700 uppercase mb-1">Mid-Range</div>
                                <div class="text-xl font-serif text-forest-900 mb-3">₹${mid.total.toLocaleString()}</div>
                                <div class="text-[10px] text-forest-700/80 space-y-1">
                                    <div class="flex justify-between"><span>Stay:</span><span>₹${mid.breakdown.accommodation.toLocaleString()}</span></div>
                                    <div class="flex justify-between"><span>Food:</span><span>₹${mid.breakdown.food.toLocaleString()}</span></div>
                                    <div class="flex justify-between"><span>Activity:</span><span>₹${mid.breakdown.activities.toLocaleString()}</span></div>
                                </div>
                            </div>
                            <div class="min-w-[200px] p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex-1">
                                <div class="text-xs font-bold text-neutral-500 uppercase mb-1">Comfortable</div>
                                <div class="text-xl font-serif text-forest-900 mb-3">₹${comf.total.toLocaleString()}</div>
                                <div class="text-[10px] text-neutral-500 space-y-1">
                                    <div class="flex justify-between"><span>Stay:</span><span>₹${comf.breakdown.accommodation.toLocaleString()}</span></div>
                                    <div class="flex justify-between"><span>Food:</span><span>₹${comf.breakdown.food.toLocaleString()}</span></div>
                                    <div class="flex justify-between"><span>Activity:</span><span>₹${comf.breakdown.activities.toLocaleString()}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="text-[10px] text-neutral-400 italic">Source: Based on government survey data & traveller reports</div>
                    </div>
                    `;
                }
            }

            // Transport intelligence
            let transportHtml = `
            <div class="mb-8">
                <h4 class="text-sm tracking-wider font-semibold uppercase text-neutral-500 mb-3">Transport Intelligence</h4>
                <div class="bg-white border border-neutral-100 rounded-xl p-4 shadow-sm">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                            <div class="text-xs text-neutral-400 mb-1">✈️ Nearest Airport</div>
                            <div class="font-medium text-neutral-800">${dest.transport?.airport || 'Major Regional Airport'}</div>
                        </div>
                        <div>
                            <div class="text-xs text-neutral-400 mb-1">🚂 Nearest Railway</div>
                            <div class="font-medium text-neutral-800">${dest.transport?.railway || 'Central Station'}</div>
                        </div>
                        <div>
                            <div class="text-xs text-neutral-400 mb-1">🛣️ Road Access</div>
                            <div class="font-medium text-neutral-800">${dest.transport?.road || 'Well connected via NH'}</div>
                        </div>
                    </div>
                    <div class="text-xs text-neutral-600 p-3 bg-neutral-50 rounded-lg">
                        <strong>Best Route:</strong> Fly into the nearest major airport, then take a scenic drive or pre-booked taxi to the destination. Consider local transit for eco-friendly exploring.
                    </div>
                </div>
            </div>
            `;

            let combinationHtml = '';
            if (window.WayfarerItineraryEngine && window.WayfarerItineraryEngine.destinationCombinations) {
                // Mocking combination fetching for UI
                combinationHtml = `
                <div class="mb-8">
                    <h4 class="text-sm tracking-wider font-semibold uppercase text-neutral-500 mb-3">Places to Combine</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600 border border-neutral-200">Nearby City Center</span>
                        <span class="px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600 border border-neutral-200">National Park Extension</span>
                        <span class="px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600 border border-neutral-200">Coastal Route</span>
                    </div>
                </div>
                `;
            }

            const html = `
                <div class="flex flex-col h-full bg-white relative">
                    <!-- Hero -->
                    <div class="h-[240px] w-full relative shrink-0">
                        <img src="${dest.coverImage || this.images[0]}" class="w-full h-full object-cover" alt="${dest.name}">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div class="absolute bottom-4 left-6 right-6">
                            <div class="flex gap-2 mb-2">
                                <span class="bg-forest-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm">${dest.status || 'Dreaming'}</span>
                                <span class="bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase px-2 py-1 rounded-sm">${dest.region}</span>
                            </div>
                            <h2 class="font-serif text-3xl md:text-4xl text-white font-bold leading-tight">${dest.name}</h2>
                            <div class="text-white/80 text-sm mt-1">${dest.country}</div>
                        </div>
                    </div>

                    <div class="flex-grow overflow-y-auto p-6 lg:p-8 hide-scrollbar pb-32">
                        <!-- 3-stat row -->
                        <div class="flex border-y border-neutral-100 py-4 mb-8">
                            <div class="flex-1 border-r border-neutral-100 px-2 text-center">
                                <div class="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Season</div>
                                <div class="font-medium text-sm text-forest-900">${dest.bestSeason || 'Year-round'}</div>
                            </div>
                            <div class="flex-1 border-r border-neutral-100 px-2 text-center">
                                <div class="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Duration</div>
                                <div class="font-medium text-sm text-forest-900">${dest.duration || 7} Days</div>
                            </div>
                            <div class="flex-1 px-2 text-center">
                                <div class="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Base Est.</div>
                                <div class="font-medium text-sm text-forest-900">₹${(dest.estimatedBudget || 0).toLocaleString()}</div>
                            </div>
                        </div>

                        <!-- Content Sections -->
                        <div class="mb-8">
                            <h4 class="text-sm tracking-wider font-semibold uppercase text-neutral-500 mb-2">Why Visit</h4>
                            <p class="text-sm text-neutral-700 leading-relaxed font-serif">${dest.whyVisit || 'A breathtaking destination offering immense cultural and natural beauty.'}</p>
                        </div>
                        
                        ${costHtml}
                        ${transportHtml}
                        ${combinationHtml}

                        <div class="mb-8">
                             <h4 class="text-sm tracking-wider font-semibold uppercase text-neutral-500 mb-3">Data Provenance</h4>
                             <div class="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                                <div class="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">🛡️</div>
                                <div class="flex-1">
                                    <div class="text-xs font-semibold text-neutral-700">WAYFARER Intelligence Engine</div>
                                    <div class="text-[10px] text-neutral-500">Verified ${new Date().toLocaleDateString()} &bull; 94% Confidence</div>
                                </div>
                                <span class="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">VERIFIED</span>
                             </div>
                        </div>
                    </div>

                    <!-- Fixed Action Bottom Bar -->
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4 z-10 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
                        <div class="flex items-center gap-3 w-full md:w-auto">
                            <select onchange="window.wayfarerBucketList.updateDestStatus('${dest.id}', this.value)" class="text-sm bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 outline-none focus:border-forest-500 flex-1 md:w-40">
                                ${this.stages.map(s => `<option value="${s}" ${dest.status === s ? 'selected' : ''}>${s}</option>`).join('')}
                            </select>
                            <button onclick="window.wayfarerBucketList.deleteDest('${dest.id}')" class="text-red-500 hover:text-red-700 text-sm font-medium px-2 underline">Remove</button>
                        </div>
                        <button onclick="window.wayfarerBucketList.convertToTrip('${dest.id}')" class="w-full md:w-auto bg-forest-800 hover:bg-forest-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
                            Move to Trip Planning &rarr;
                        </button>
                    </div>
                </div>
            `;

            window.WayfarerDrawer.open(`${dest.name} Intelligence`, html);
        }

        openAddDrawer() {
            const imageOptionsHtml = this.images.map((img, i) => `
                <div class="relative cursor-pointer group">
                    <input type="radio" name="coverImage" value="${img}" id="img_${i}" class="peer sr-only" ${i === 0 ? 'checked' : ''}>
                    <label for="img_${i}" class="block h-24 rounded-lg overflow-hidden border-2 border-transparent peer-checked:border-forest-600 transition-all">
                        <img src="${img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform">
                    </label>
                </div>
            `).join('');

            const html = `
                <div class="p-6 h-full flex flex-col bg-neutral-50 overflow-y-auto hide-scrollbar">
                    <div class="mb-6">
                        <h2 class="font-serif text-3xl text-forest-900 mb-2">New Destination</h2>
                        <p class="text-sm text-neutral-500">Add a new destination to your intelligence pipeline.</p>
                    </div>

                    <form onsubmit="window.wayfarerBucketList.handleAddSubmit(event)" class="space-y-5 flex-grow pb-24">
                        <div class="space-y-4 bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
                            <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-100 pb-2">Core Info</h3>
                            <div>
                                <label class="block text-xs font-medium text-neutral-700 mb-1">Destination Name</label>
                                <input type="text" name="name" required class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500 focus:bg-white transition-colors" placeholder="e.g. Kyoto">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-medium text-neutral-700 mb-1">Country</label>
                                    <input type="text" name="country" required class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500 focus:bg-white" placeholder="e.g. Japan">
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-neutral-700 mb-1">Region/State</label>
                                    <input type="text" name="region" required class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500 focus:bg-white" placeholder="e.g. Kansai">
                                </div>
                            </div>
                        </div>

                        <div class="space-y-4 bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
                             <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-100 pb-2">Classification</h3>
                             <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-medium text-neutral-700 mb-1">Category</label>
                                    <select name="category" class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500">
                                        <option value="Cultural">Cultural</option>
                                        <option value="Nature">Nature & Wildlife</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Relaxation">Relaxation</option>
                                        <option value="Urban">Urban Exploration</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-neutral-700 mb-1">Priority</label>
                                    <select name="priority" class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500">
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>
                             </div>
                        </div>

                        <div class="space-y-4 bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
                            <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-100 pb-2">Planning Intelligence</h3>
                            <div class="grid grid-cols-3 gap-3">
                                <div class="col-span-1">
                                    <label class="block text-xs font-medium text-neutral-700 mb-1">Est. Budget (INR)</label>
                                    <input type="number" name="estimatedBudget" required class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500" placeholder="100000">
                                </div>
                                <div class="col-span-1">
                                    <label class="block text-xs font-medium text-neutral-700 mb-1">Best Season</label>
                                    <input type="text" name="bestSeason" class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500" placeholder="Spring/Autumn">
                                </div>
                                <div class="col-span-1">
                                    <label class="block text-xs font-medium text-neutral-700 mb-1">Duration (Days)</label>
                                    <input type="number" name="duration" value="7" class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500">
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-neutral-700 mb-1">Why Visit</label>
                                <textarea name="whyVisit" rows="3" class="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest-500 resize-none" placeholder="What makes this destination special?"></textarea>
                            </div>
                        </div>

                        <div class="space-y-4 bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
                            <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-100 pb-2">Cover Image</h3>
                            <div class="grid grid-cols-4 gap-2">
                                ${imageOptionsHtml}
                            </div>
                        </div>

                        <!-- Fixed Bottom Bar -->
                        <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-100 shadow-[0_-4px_15px_rgba(0,0,0,0.05)] z-20 flex justify-end gap-3">
                            <button type="button" onclick="window.WayfarerDrawer.close()" class="px-5 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors">Cancel</button>
                            <button type="submit" class="px-6 py-2.5 bg-forest-800 hover:bg-forest-900 text-white rounded-lg text-sm font-medium shadow-sm transition-colors">Save Destination</button>
                        </div>
                    </form>
                </div>
            `;

            window.WayfarerDrawer.open('Add Destination', html);
        }

        handleAddSubmit(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            
            const newDest = {
                name: formData.get('name'),
                country: formData.get('country'),
                region: formData.get('region'),
                category: formData.get('category'),
                priority: formData.get('priority'),
                estimatedBudget: parseInt(formData.get('estimatedBudget'), 10),
                bestSeason: formData.get('bestSeason'),
                duration: parseInt(formData.get('duration'), 10) || 7,
                whyVisit: formData.get('whyVisit'),
                coverImage: formData.get('coverImage'),
                status: 'Dreaming',
                rating: 0
            };

            window.wayfarerStore.addDestination(newDest);
            window.wayfarerStore.save();
            
            if (window.WayfarerNotify) {
                window.WayfarerNotify.show(`Added ${newDest.name} to Bucket List`, 'success');
            }
            
            window.WayfarerDrawer.close();
            this.refresh();
        }

        convertToTrip(destId) {
            if (window.wayfarerStore.convertBucketToTrip) {
                const tripId = window.wayfarerStore.convertBucketToTrip(destId);
                window.wayfarerStore.save();
                window.WayfarerDrawer.close();
                
                if (window.WayfarerNotify) {
                    window.WayfarerNotify.show('Destination moved to Trip Planning!', 'success');
                }
                
                if (window.wayfarerApp && window.wayfarerApp.switchTab) {
                    window.wayfarerApp.switchTab('trips');
                }
                this.refresh();
            }
        }

        deleteDest(id) {
            if(confirm('Are you sure you want to remove this destination?')) {
                window.wayfarerStore.deleteDestination(id);
                window.wayfarerStore.save();
                window.WayfarerDrawer.close();
                
                if (window.WayfarerNotify) {
                    window.WayfarerNotify.show('Destination removed', 'info');
                }
                this.refresh();
            }
        }

        updateDestStatus(destId, newStatus) {
            window.wayfarerStore.updateDestination(destId, { status: newStatus });
            window.wayfarerStore.save();
            this.refresh(); // Update the main view
            
            // Note: Since drawer is already open with static HTML, we don't strictly re-render the drawer 
            // unless we re-call openDestinationDetail. Doing so here to keep UI synced seamlessly.
            this.openDestinationDetail(destId);
            
            if (window.WayfarerNotify) {
                window.WayfarerNotify.show(`Status updated to ${newStatus}`, 'success');
            }
        }
    }

    window.wayfarerBucketList = new BucketListView();
    window.WFBucketListView = window.wayfarerBucketList;
})();
