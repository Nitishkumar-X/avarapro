/* ==========================================================================
   WAYFARER — Memories View (was Journal)
   Personal travel memories, photo logs, reflections
   ========================================================================== */

window.WFMemoriesView = {
  render(container) {
    const store = window.wayfarerStore;
    const journals = store?._state?.journals || [];

    container.innerHTML = `
      <div class="wf-memories animate-fade-in">
        <div class="wf-page-content pt-24 pb-8">
          <div class="wf-section-header">
            <div>
              <div class="wf-section-eyebrow">Your Story</div>
              <h1 class="wf-headline wf-text-primary">Travel Memories</h1>
            </div>
            <button onclick="WFMemoriesView._openNewEntry()" class="wf-btn wf-btn-primary">
              + New Memory
            </button>
          </div>
        </div>

        <div class="wf-page-content pb-12">
          ${journals.length === 0 ? `
            <div class="wf-empty wf-card rounded-2xl" style="border:1.5px dashed var(--border-medium)">
              <div class="wf-empty-icon">📖</div>
              <div class="wf-empty-title">Your memories live here</div>
              <div class="wf-empty-desc">Document your travels, reflect on journeys, keep photos and notes from every adventure.</div>
              <button onclick="WFMemoriesView._openNewEntry()" class="wf-btn wf-btn-primary mt-5">Write First Memory</button>
            </div>` : `
            <div class="columns-1 md:columns-2 gap-5 space-y-5">
              ${journals.map(entry => this._renderEntry(entry)).join('')}
            </div>`}
        </div>
      </div>`;
  },

  _renderEntry(entry) {
    return `
      <div class="wf-card rounded-2xl overflow-hidden break-inside-avoid mb-5 animate-fade-up">
        ${entry.image ? `<div class="relative h-48 overflow-hidden"><img src="${entry.image}" alt="${entry.title}" class="w-full h-full object-cover" onerror="this.style.display='none'" /></div>` : ''}
        <div class="p-5">
          <div class="wf-label mb-2">${entry.date ? WF.formatDate(entry.date) : ''} · ${entry.destination || ''}</div>
          <h3 class="font-serif wf-text-primary text-xl mb-2">${entry.title}</h3>
          <p class="wf-text-secondary text-sm leading-relaxed">${entry.content || ''}</p>
          ${(entry.tags||[]).length > 0 ? `
            <div class="flex flex-wrap gap-2 mt-3">
              ${entry.tags.map(t => `<span class="wf-badge wf-badge-muted text-[9px]">${t}</span>`).join('')}
            </div>` : ''}
        </div>
      </div>`;
  },

  _openNewEntry() {
    const inner = document.getElementById('trip-modal-inner');
    const overlay = document.getElementById('trip-modal-overlay');
    if (!inner || !overlay) return;

    inner.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-6 pb-4 border-b wf-border">
          <h2 class="font-serif wf-text-primary text-2xl">New Memory</h2>
          <button onclick="WF.closeTripModal()" class="wf-btn wf-btn-ghost wf-btn-icon">×</button>
        </div>
        <form class="space-y-4" onsubmit="WFMemoriesView._saveEntry(event)">
          <div>
            <label class="wf-label-text">Title</label>
            <input name="title" type="text" class="wf-input" placeholder="Golden hour at Konark..." required />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="wf-label-text">Date</label>
              <input name="date" type="date" class="wf-input" />
            </div>
            <div>
              <label class="wf-label-text">Destination</label>
              <input name="destination" type="text" class="wf-input" placeholder="Puri, Odisha" />
            </div>
          </div>
          <div>
            <label class="wf-label-text">Your Memory</label>
            <textarea name="content" class="wf-textarea" style="min-height:120px" placeholder="Write about what you felt, saw, experienced..."></textarea>
          </div>
          <div>
            <label class="wf-label-text">Tags (comma separated)</label>
            <input name="tags" type="text" class="wf-input" placeholder="sunrise, temple, peaceful" />
          </div>
          <div class="flex gap-3 pt-2">
            <button type="submit" class="wf-btn wf-btn-primary flex-1">Save Memory</button>
            <button type="button" onclick="WF.closeTripModal()" class="wf-btn wf-btn-ghost">Cancel</button>
          </div>
        </form>
      </div>`;

    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
    WF.tripModalOpen = true;
  },

  _saveEntry(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    const store = window.wayfarerStore;
    if (!store) return;

    if (!store._state.journals) store._state.journals = [];
    store._state.journals.unshift({
      id: `mem_${Date.now()}`,
      title: data.title,
      date: data.date,
      destination: data.destination,
      content: data.content,
      tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
      createdAt: new Date().toISOString()
    });
    store.save();

    WFNotify?.show('Memory saved 📖', 'success');
    WF.closeTripModal();
    const container = document.getElementById('view-memories');
    if (container) WFMemoriesView.render(container);
  }
};
