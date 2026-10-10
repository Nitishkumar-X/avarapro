/**
 * WAYFARER Journal View
 * Renders the Field Notes & Memories view.
 */

window.WayfarerJournalView = (function() {
    const ASSETS = [
        'NATURE/remy-hellequin-EJVUb4_qayc-unsplash.jpg',
        'NATURE/roberto-nickson-wdCkqK1oRIc-unsplash.jpg',
        'NATURE/sheila-c-hqLq0Qmu4d8-unsplash.jpg',
        'NATURE/niko-photos-tGTVxeOr_Rs-unsplash.jpg',
        'NATURE/tim-swaan-eOpewngf68w-unsplash.jpg',
        'NATURE/june-o-Tq61bW38kmM-unsplash.jpg'
    ];

    const MOOD_MAP = {
        'Awestruck': { color: '#3b82f6', icon: '✨' },
        'Serene': { color: '#10b981', icon: '🌿' },
        'Adventurous': { color: '#f59e0b', icon: '⛰️' },
        'Melancholic': { color: '#8b5cf6', icon: '🌧️' },
        'Grateful': { color: '#fbbf24', icon: '🙏' },
        'Curious': { color: '#14b8a6', icon: '🔍' }
    };

    const MOODS = ['All', 'Awestruck', 'Serene', 'Adventurous', 'Melancholic', 'Grateful', 'Curious'];

    let currentFilter = 'All';
    let _currentContainer = null;

    /**
     * Renders the complete Journal View into the given container.
     */
    function render(containerId) {
        const container = (containerId && typeof containerId === 'object' && containerId.nodeType) ? containerId : document.getElementById(containerId || 'view-journal');
        if (!container) return;
        _currentContainer = container;

        let memories = window.wayfarerStore.getMemories() || [];
        
        // Apply filter
        let filteredMemories = memories;
        if (currentFilter !== 'All') {
            filteredMemories = memories.filter(m => m.mood === currentFilter);
        }

        // Sort by date descending (assuming dates are YYYY-MM-DD strings or timestamps)
        filteredMemories.sort((a, b) => new Date(b.date) - new Date(a.date));

        const featuredMemory = filteredMemories.length > 0 ? filteredMemories[0] : null;
        const gridMemories = filteredMemories.length > 1 ? filteredMemories.slice(1) : [];

        let html = `
            <div class="journal-view animate-fade-in pb-24">
                ${renderHeader()}
                
                <div class="max-w-7xl mx-auto px-6">
                    ${memories.length === 0 ? renderEmptyState() : `
                        ${featuredMemory ? renderFeaturedSpotlight(featuredMemory) : ''}
                        ${gridMemories.length > 0 ? renderGrid(gridMemories) : (featuredMemory ? '' : renderEmptyState())}
                    `}
                </div>
            </div>
        `;

        container.innerHTML = html;
        bindEvents(containerId);
    }

    function renderHeader() {
        return `
            <header class="max-w-7xl mx-auto px-6 pt-16 pb-12">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <div class="text-sm tracking-widest uppercase text-accent/80 font-medium mb-3">FIELD NOTES & MEMORIES</div>
                        <h1 class="text-5xl md:text-7xl font-serif italic text-dark leading-none">Travel Journal</h1>
                    </div>
                    <button id="btn-new-entry" class="btn-editorial-pill self-start md:self-auto bg-dark text-light px-8 py-4 rounded-full font-medium tracking-wide hover:bg-accent transition-colors flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                        New Entry
                    </button>
                </div>
                
                <div class="flex flex-wrap gap-3 mt-8 pb-4 border-b border-dark/10">
                    ${MOODS.map(mood => `
                        <button class="mood-filter-btn px-5 py-2 rounded-full text-sm font-medium transition-all ${currentFilter === mood ? 'bg-dark text-light shadow-md' : 'bg-light border border-dark/10 text-dark/70 hover:border-dark/30 hover:text-dark'}" data-mood="${mood}">
                            ${mood !== 'All' ? MOOD_MAP[mood]?.icon + ' ' : ''}${mood}
                        </button>
                    `).join('')}
                </div>
            </header>
        `;
    }

    function renderFeaturedSpotlight(memory) {
        const moodData = MOOD_MAP[memory.mood] || { color: '#000', icon: '' };
        
        return `
            <section class="mb-20 animate-slide-up" style="animation-delay: 0.1s;">
                <div class="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-6 shadow-2xl border border-dark/5 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full" style="background-color: ${moodData.color}"></div>
                    
                    <div class="lg:w-[60%] relative h-[400px] lg:h-[520px] rounded-2xl overflow-hidden group">
                        <img src="${memory.coverImage || ASSETS[0]}" alt="${memory.title}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium text-dark">
                            <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            ${memory.location}
                        </div>
                    </div>
                    
                    <div class="lg:w-[40%] flex flex-col justify-center py-6 pr-6">
                        <div class="flex items-center justify-between mb-6">
                            <div class="text-xs font-bold tracking-widest uppercase text-accent">Field Reflection</div>
                            <button class="btn-delete-entry text-dark/30 hover:text-red-500 transition-colors p-2" data-id="${memory.id}" title="Delete Memory">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                        
                        <h2 class="text-4xl font-serif text-dark mb-4">${memory.title}</h2>
                        
                        <div class="flex items-center gap-4 text-sm text-dark/60 mb-8 pb-8 border-b border-dark/10">
                            <span class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                ${new Date(memory.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-dark/5" style="color: ${moodData.color}">
                                ${moodData.icon} ${memory.mood}
                            </span>
                        </div>
                        
                        <p class="font-serif italic text-xl text-dark/80 leading-relaxed mb-10 line-clamp-4">
                            "${memory.story}"
                        </p>
                        
                        <button class="btn-read-full mt-auto self-start group flex items-center gap-2 text-dark font-medium pb-1 border-b-2 border-dark hover:border-accent hover:text-accent transition-colors" data-id="${memory.id}">
                            Read Full Entry 
                            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    function renderGrid(memories) {
        return `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" style="animation-delay: 0.2s;">
                ${memories.map((memory, index) => {
                    const moodData = MOOD_MAP[memory.mood] || { color: '#000', icon: '' };
                    return `
                        <div class="journal-entry-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-dark/5 flex flex-col relative h-full">
                            <div class="absolute top-0 left-0 w-1.5 h-full z-10" style="background-color: ${moodData.color}"></div>
                            
                            <button class="absolute top-3 right-3 z-20 btn-delete-entry text-white/70 hover:text-red-500 bg-dark/20 hover:bg-white p-2 rounded-full backdrop-blur-sm transition-all shadow-sm opacity-0 group-hover:opacity-100" data-id="${memory.id}" title="Delete Memory">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>

                            <div class="h-48 relative overflow-hidden">
                                <img src="${memory.coverImage || ASSETS[0]}" alt="${memory.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div class="absolute top-3 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-sm" style="color: ${moodData.color}">
                                    ${moodData.icon} ${memory.mood}
                                </div>
                            </div>
                            
                            <div class="p-6 flex-grow flex flex-col pl-8">
                                <div class="text-xs font-semibold tracking-wider text-accent uppercase mb-2 flex justify-between items-center">
                                    <span>${memory.location}</span>
                                </div>
                                <h3 class="text-xl font-serif font-bold text-dark mb-2 leading-tight">${memory.title}</h3>
                                <div class="text-xs text-dark/50 mb-4 font-medium flex items-center gap-1">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    ${new Date(memory.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>
                                
                                <p class="text-dark/70 text-sm line-clamp-3 mb-6 italic font-serif leading-relaxed flex-grow">
                                    ${memory.story}
                                </p>
                                
                                <button class="btn-read-full mt-auto flex items-center gap-1 text-sm font-medium text-dark group-hover:text-accent transition-colors" data-id="${memory.id}">
                                    Read Entry 
                                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    function renderEmptyState() {
        return `
            <div class="py-32 flex flex-col items-center justify-center text-center animate-fade-in">
                <div class="w-32 h-32 mb-8 text-dark/10 relative">
                    <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    <div class="absolute -bottom-2 -right-2 text-4xl">✨</div>
                </div>
                <h2 class="text-4xl font-serif text-dark mb-4">Your Journal is Empty</h2>
                <p class="text-lg text-dark/60 max-w-md mb-8">Document your extraordinary journeys, serendipitous encounters, and awe-inspiring moments.</p>
                <button id="btn-empty-new-entry" class="btn-editorial-pill bg-dark text-light px-8 py-4 rounded-full font-medium tracking-wide hover:bg-accent transition-colors">
                    Start Your Travel Journal
                </button>
            </div>
        `;
    }

    function bindEvents(containerId) {
        const container = (containerId && typeof containerId === 'object' && containerId.nodeType)
            ? containerId
            : (document.getElementById(containerId) || _currentContainer);
        if (!container) return;

        // Filter clicks
        container.querySelectorAll('.mood-filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mood = e.currentTarget.dataset.mood;
                setMoodFilter(mood, container);
            });
        });

        // New Entry buttons
        const newBtn = container.querySelector('#btn-new-entry');
        if (newBtn) newBtn.addEventListener('click', openAddEntry);
        
        const emptyNewBtn = container.querySelector('#btn-empty-new-entry');
        if (emptyNewBtn) emptyNewBtn.addEventListener('click', openAddEntry);

        // Read Full Entry clicks
        container.querySelectorAll('.btn-read-full').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                openFullEntry(id);
            });
        });

        // Delete buttons
        container.querySelectorAll('.btn-delete-entry').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = e.currentTarget.dataset.id;
                deleteEntry(id, container);
            });
        });
    }

    function setMoodFilter(mood, containerParam) {
        currentFilter = mood;
        render(containerParam || _currentContainer);
    }

    function openAddEntry() {
        const today = new Date().toISOString().split('T')[0];
        
        const html = `
            <form id="journal-add-form" class="flex flex-col h-full">
                <div class="flex-grow overflow-y-auto p-6 space-y-8">
                    
                    <div>
                        <label class="block text-xs font-bold tracking-widest uppercase text-dark/50 mb-2">Title *</label>
                        <input type="text" id="entry-title" required placeholder="A Morning in Kyoto..." class="w-full text-2xl font-serif text-dark bg-transparent border-b border-dark/20 focus:border-accent focus:outline-none py-2 transition-colors placeholder:text-dark/20" />
                    </div>

                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-bold tracking-widest uppercase text-dark/50 mb-2">Location *</label>
                            <input type="text" id="entry-location" required placeholder="Kyoto, Japan" class="w-full text-base text-dark bg-transparent border-b border-dark/20 focus:border-accent focus:outline-none py-2 transition-colors" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold tracking-widest uppercase text-dark/50 mb-2">Date *</label>
                            <input type="date" id="entry-date" required value="${today}" class="w-full text-base text-dark bg-transparent border-b border-dark/20 focus:border-accent focus:outline-none py-2 transition-colors" />
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold tracking-widest uppercase text-dark/50 mb-4">Primary Mood</label>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                            ${MOODS.filter(m => m !== 'All').map((mood, idx) => `
                                <label class="cursor-pointer relative">
                                    <input type="radio" name="entry-mood" value="${mood}" ${idx === 0 ? 'checked' : ''} class="peer sr-only" />
                                    <div class="px-4 py-3 border border-dark/10 rounded-xl peer-checked:border-accent peer-checked:bg-accent/5 hover:bg-dark/5 transition-all text-sm font-medium flex flex-col items-center gap-1 text-center">
                                        <span class="text-2xl">${MOOD_MAP[mood].icon}</span>
                                        <span>${mood}</span>
                                    </div>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold tracking-widest uppercase text-dark/50 mb-2">The Story / Reflection *</label>
                        <textarea id="entry-story" required rows="8" placeholder="Write about what you saw, how you felt..." class="w-full text-base font-serif text-dark bg-dark/5 border border-dark/10 rounded-xl p-4 focus:border-accent focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"></textarea>
                    </div>

                    <div>
                        <label class="block text-xs font-bold tracking-widest uppercase text-dark/50 mb-4">Cover Image</label>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                            ${ASSETS.map((asset, idx) => `
                                <label class="cursor-pointer relative group">
                                    <input type="radio" name="entry-cover" value="${asset}" ${idx === 0 ? 'checked' : ''} class="peer sr-only" />
                                    <div class="aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-accent peer-checked:shadow-lg transition-all relative">
                                        <img src="${asset}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div class="absolute inset-0 bg-accent/20 opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center">
                                            <svg class="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                </div>
                
                <div class="p-6 border-t border-dark/10 bg-white/50 backdrop-blur flex justify-end gap-4">
                    <button type="button" class="btn-cancel px-6 py-3 rounded-full text-dark font-medium hover:bg-dark/5 transition-colors">Cancel</button>
                    <button type="submit" class="px-8 py-3 rounded-full bg-dark text-white font-medium hover:bg-accent transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Save Memory
                    </button>
                </div>
            </form>
        `;

        window.WayfarerDrawer.open('New Field Note', html);

        // Bind form events
        setTimeout(() => {
            const form = document.getElementById('journal-add-form');
            if (form) {
                form.addEventListener('submit', handleSubmit);
                form.querySelector('.btn-cancel').addEventListener('click', () => window.WayfarerDrawer.close());
            }
        }, 100);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const title = document.getElementById('entry-title').value.trim();
        const location = document.getElementById('entry-location').value.trim();
        const date = document.getElementById('entry-date').value;
        const mood = document.querySelector('input[name="entry-mood"]:checked').value;
        const story = document.getElementById('entry-story').value.trim();
        const coverImage = document.querySelector('input[name="entry-cover"]:checked').value;

        if (!title || !location || !date || !story) {
            window.WayfarerNotify.show('Please fill in all required fields.', 'error');
            return;
        }

        const newMemory = {
            id: 'mem_' + Date.now(),
            title,
            location,
            date,
            mood,
            story,
            coverImage,
            createdAt: new Date().toISOString()
        };

        window.wayfarerStore.addMemory(newMemory);
        window.wayfarerStore.save();
        
        window.WayfarerDrawer.close();
        window.WayfarerNotify.show('Memory captured successfully.', 'success');
        
        // Re-render view in current container
        const journalViewEl = document.querySelector('.journal-view');
        const target = journalViewEl ? journalViewEl.parentElement : (_currentContainer || 'view-journal');
        if (target) render(target);
    }

    function openFullEntry(memId) {
        const memories = window.wayfarerStore.getMemories() || [];
        const memory = memories.find(m => m.id === memId);
        
        if (!memory) return;

        const moodData = MOOD_MAP[memory.mood] || { color: '#000', icon: '' };
        const dateStr = new Date(memory.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        const html = `
            <div class="flex flex-col h-full bg-light">
                <div class="relative h-72 md:h-96 w-full flex-shrink-0">
                    <img src="${memory.coverImage}" class="w-full h-full object-cover" alt="Cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 right-6 text-white">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 border border-white/10">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                ${memory.location}
                            </span>
                            <span class="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold flex items-center gap-1 border border-white/10" style="color: ${moodData.color}">
                                ${moodData.icon} ${memory.mood}
                            </span>
                        </div>
                        <h2 class="text-3xl md:text-5xl font-serif text-white mb-2 leading-tight">${memory.title}</h2>
                        <div class="text-white/70 text-sm flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            ${dateStr}
                        </div>
                    </div>
                </div>

                <div class="flex-grow overflow-y-auto p-6 md:p-10">
                    <div class="max-w-3xl mx-auto">
                        <div class="prose prose-lg prose-serif text-dark/80 leading-relaxed max-w-none">
                            ${memory.story.split('\n').map(p => p.trim() ? `<p class="mb-6">${p}</p>` : '').join('')}
                        </div>
                    </div>
                </div>

                <div class="p-6 border-t border-dark/10 bg-white flex justify-between items-center flex-shrink-0">
                    <button class="btn-delete-full flex items-center gap-2 text-red-500 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors" data-id="${memory.id}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        Delete Memory
                    </button>
                    <button class="btn-close-full px-6 py-2 bg-dark text-white rounded-full font-medium hover:bg-accent transition-colors">
                        Close
                    </button>
                </div>
            </div>
        `;

        // Setting title to empty since we have our own header in the drawer body
        window.WayfarerDrawer.open('', html);

        // Bind events in drawer
        setTimeout(() => {
            const drawerContent = document.querySelector('.drawer-content'); // Assume drawer injects here or we just search doc
            if (!drawerContent) return;
            
            const closeBtn = drawerContent.querySelector('.btn-close-full');
            if (closeBtn) closeBtn.addEventListener('click', () => window.WayfarerDrawer.close());

            const delBtn = drawerContent.querySelector('.btn-delete-full');
            if (delBtn) {
                delBtn.addEventListener('click', (e) => {
                    const id = e.currentTarget.dataset.id;
                    deleteEntry(id);
                });
            }
        }, 100);
    }

    function deleteEntry(id, containerId = null) {
        if (confirm('Are you sure you want to delete this memory? This cannot be undone.')) {
            window.wayfarerStore.deleteMemory(id);
            window.wayfarerStore.save();
            
            window.WayfarerDrawer.close(); // Close if open in drawer
            window.WayfarerNotify.show('Memory deleted.', 'info');
            
            // Re-render
            const targetContainer = containerId || _currentContainer || 'view-journal';
            render(targetContainer);
        }
    }

    return {
        render
    };

})();

window.WFJournalView = window.WayfarerJournalView;

