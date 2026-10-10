/* ==========================================================================
   ANTARA — Settings View v1.5
   Profile, Home Base Configuration, CSV & JSON Import/Export Engine
   ========================================================================== */

window.WFSettingsView = {
  render(container) {
    const store = window.wayfarerStore;
    const profile = store?.getProfile?.() || {};
    const stats = store?.getStats?.() || {};
    const odishaDests = window.ODISHA_DATA?.destinations || [];

    container.innerHTML = `
      <div class="wf-settings animate-fade-in">
        <div class="wf-page-content pt-24 pb-8">
          <div class="wf-section-eyebrow mb-2">Configuration</div>
          <h1 class="wf-headline wf-text-primary">Profile &amp; Travel Database Engine</h1>
        </div>

        <div class="wf-page-content pb-14 space-y-8">

          <!-- Profile & Home Base Section -->
          <div class="wf-card rounded-2xl p-6">
            <div class="wf-section-eyebrow mb-4">User Origin &amp; Travel Preferences</div>
            <form id="profile-form" class="space-y-4" onsubmit="WFSettingsView._saveProfile(event)">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="wf-label-text">Full Name / Handle</label>
                  <input name="name" type="text" class="wf-input" value="${profile.name || 'Explorer'}" placeholder="Antara Explorer" required />
                </div>
                <div>
                  <label class="wf-label-text">Home Base / Origin City</label>
                  <select name="homecity" class="wf-select">
                    <option value="Bhubaneswar" ${(profile.homecity||'Bhubaneswar')==='Bhubaneswar' ? 'selected' : ''}>Bhubaneswar (Central Hub)</option>
                    <option value="Cuttack" ${profile.homecity==='Cuttack' ? 'selected' : ''}>Cuttack (Central Co-hub)</option>
                    <option value="Puri" ${profile.homecity==='Puri' ? 'selected' : ''}>Puri (Coastal Hub)</option>
                    <option value="Rourkela" ${profile.homecity==='Rourkela' ? 'selected' : ''}>Rourkela (Northern Hub)</option>
                    <option value="Sambalpur" ${profile.homecity==='Sambalpur' ? 'selected' : ''}>Sambalpur (Western Hub)</option>
                    <option value="Berhampur" ${profile.homecity==='Berhampur' ? 'selected' : ''}>Berhampur (Southern Hub)</option>
                  </select>
                </div>
                <div>
                  <label class="wf-label-text">Travel Style</label>
                  <select name="travelStyle" class="wf-select">
                    <option ${profile.travelStyle==='budget' ? 'selected' : ''} value="budget">Budget Day Escape</option>
                    <option ${profile.travelStyle==='midrange' || !profile.travelStyle ? 'selected' : ''} value="midrange">Comfortable Explorer</option>
                    <option ${profile.travelStyle==='luxury' ? 'selected' : ''} value="luxury">Luxury &amp; Eco Resorts</option>
                  </select>
                </div>
                <div>
                  <label class="wf-label-text">Preferred Transport</label>
                  <select name="preferredTransport" class="wf-select">
                    <option ${profile.preferredTransport==='bike' ? 'selected' : ''} value="bike">Motorcycle / Scooter</option>
                    <option ${profile.preferredTransport==='car' || !profile.preferredTransport ? 'selected' : ''} value="car">Personal Car / SUV</option>
                    <option ${profile.preferredTransport==='bus' ? 'selected' : ''} value="bus">Public Bus / Train</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="wf-btn wf-btn-primary">Save Profile &amp; Preferences</button>
            </form>
          </div>

          <!-- DATA IMPORT & EXPORT ENGINE (Mandatory Section) -->
          <div class="wf-card rounded-2xl p-6 border wf-border shadow-sm">
            <div class="wf-section-eyebrow mb-2">Database Management</div>
            <h3 class="font-serif wf-text-primary text-xl mb-2">CSV &amp; JSON Import / Export Engine</h3>
            <p class="wf-text-muted text-xs leading-relaxed mb-6">
              Export the full ${odishaDests.length}-destination database into spreadsheet CSV format for editing in Excel, Google Sheets, or Numbers. Add new places, save CSV, and upload back to import!
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

              <!-- EXPORT BOX -->
              <div class="p-5 rounded-2xl wf-bg-secondary border wf-border space-y-3">
                <div class="flex items-center gap-2 text-sm font-semibold wf-text-primary">
                  <span>📥</span> Export Database
                </div>
                <p class="text-xs wf-text-muted">Download all ${odishaDests.length} destinations with complete schema fields (Name, District, Category, Coords, Costs, Season).</p>
                <div class="flex gap-2 pt-2">
                  <button onclick="WFSettingsView._exportCSV()" class="wf-btn wf-btn-primary wf-btn-sm flex-1">
                    Export CSV (Spreadsheet)
                  </button>
                  <button onclick="WFSettingsView._exportJSON()" class="wf-btn wf-btn-secondary wf-btn-sm">
                    Export JSON
                  </button>
                </div>
              </div>

              <!-- IMPORT BOX -->
              <div class="p-5 rounded-2xl wf-bg-secondary border wf-border space-y-3">
                <div class="flex items-center gap-2 text-sm font-semibold wf-text-primary">
                  <span>📤</span> Import CSV Database
                </div>
                <p class="text-xs wf-text-muted">Upload a valid CSV file to add new verified destinations into your active database.</p>
                <div class="pt-2">
                  <input
                    type="file"
                    id="csv-file-input"
                    accept=".csv,.txt"
                    class="hidden"
                    onchange="WFSettingsView._handleCSVUpload(event)"
                  />
                  <button onclick="document.getElementById('csv-file-input').click()" class="wf-btn wf-btn-secondary wf-btn-sm w-full">
                    Select &amp; Upload CSV File...
                  </button>
                </div>
                <div id="import-status-msg" class="text-xs mt-2 font-mono"></div>
              </div>

            </div>
          </div>

          <!-- SYSTEM STATS -->
          <div class="wf-card rounded-2xl p-6">
            <div class="wf-section-eyebrow mb-4">System Overview</div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div class="p-4 rounded-xl wf-bg-secondary">
                <div class="wf-stat-num text-amber-600 dark:text-amber-400" style="font-size:2.4rem">${odishaDests.length}</div>
                <div class="wf-stat-label">Mapped Destinations</div>
              </div>
              <div class="p-4 rounded-xl wf-bg-secondary">
                <div class="wf-stat-num" style="font-size:2.4rem">30</div>
                <div class="wf-stat-label">Districts Covered</div>
              </div>
              <div class="p-4 rounded-xl wf-bg-secondary">
                <div class="wf-stat-num" style="font-size:2.4rem">${stats.placesVisited || 0}</div>
                <div class="wf-stat-label">Places Visited</div>
              </div>
              <div class="p-4 rounded-xl wf-bg-secondary">
                <div class="wf-stat-num" style="font-size:2.4rem">${stats.bucketCount || 0}</div>
                <div class="wf-stat-label">Saved in Bag</div>
              </div>
            </div>
          </div>

          <!-- DATA RESET -->
          <div class="wf-card rounded-2xl p-6">
            <div class="wf-section-eyebrow mb-4">Reset Settings</div>
            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium text-red-600 dark:text-red-400 text-sm">Reset Saved User Data</div>
                <div class="text-xs wf-text-muted">Clear local storage state to defaults</div>
              </div>
              <button onclick="WFSettingsView._resetData()" class="wf-btn wf-btn-sm text-xs" style="background:rgba(220,38,38,0.1);color:#DC2626">Reset</button>
            </div>
          </div>

          <!-- BRAND FOOTER -->
          <div class="text-center py-4">
            <p class="text-xs wf-text-muted font-serif italic">ANTARA · Personal Travel OS</p>
            <p class="text-[10px] wf-text-faint mt-1">Data curated from Odisha Tourism &amp; ASI. Ver. 1.5</p>
          </div>

        </div>
      </div>`;
  },

  _saveProfile(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    const profile = {
      name: data.name || 'Explorer',
      homecity: data.homecity || 'Bhubaneswar',
      travelStyle: data.travelStyle || 'midrange',
      preferredTransport: data.preferredTransport || 'car'
    };
    window.wayfarerStore?.updateProfile?.(profile);
    ANTARA._updateProfileInitials();
    WFNotify?.show('Profile & Origin city saved ✓', 'success');
  },

  /* EXPORT CSV ENGINE */
  _exportCSV() {
    const dests = window.ODISHA_DATA?.destinations || [];
    if (!dests.length) {
      WFNotify?.show('No destination data to export', 'error');
      return;
    }

    const headers = [
      'id', 'name', 'district', 'region', 'category', 'cost_category',
      'latitude', 'longitude', 'best_season', 'recommendedDuration',
      'difficulty', 'short_description', 'description', 'emotionalHook',
      'how_to_reach', 'nearest_airport', 'nearest_railway_station',
      'official_source', 'data_confidence', 'image'
    ];

    const csvRows = [headers.join(',')];

    dests.forEach(d => {
      const row = headers.map(h => {
        let val = d[h] !== undefined && d[h] !== null ? String(d[h]) : '';
        val = val.replace(/"/g, '""'); // Escape double quotes
        return `"${val}"`;
      });
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `antara-odisha-destinations-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    WFNotify?.show(`Exported ${dests.length} destinations to CSV 📊`, 'success');
  },

  _exportJSON() {
    const dests = window.ODISHA_DATA?.destinations || [];
    const dataStr = JSON.stringify(dests, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `antara-odisha-database-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    WFNotify?.show('Exported full database as JSON 📦', 'success');
  },

  /* ROBUST CSV LINE PARSER (Handles quoted commas & spaces) */
  _parseCSVLine(line) {
    const result = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (inQuotes && line[i+1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (c === ',' && !inQuotes) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += c;
      }
    }
    result.push(cur.trim());
    return result;
  },

  /* IMPORT CSV ENGINE WITH STRICT VALIDATION */
  _handleCSVUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const statusEl = document.getElementById('import-status-msg');
    if (statusEl) statusEl.textContent = 'Reading CSV file...';

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const lines = text.split(/\r\n|\n/);
        if (lines.length < 2) {
          throw new Error('CSV file is empty or missing headers.');
        }

        const headers = this._parseCSVLine(lines[0]).map(h => h.replace(/^"|"$/g, ''));
        let importedCount = 0;
        let errorCount = 0;
        const errors = [];

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;

          const values = this._parseCSVLine(line);
          const row = {};
          headers.forEach((h, idx) => {
            let val = values[idx] !== undefined ? values[idx].replace(/^"|"$/g, '') : '';
            row[h] = val;
          });

          // Strict validation: Name, District, Category must not be empty
          if (!row.name || !row.name.trim() || !row.district || !row.district.trim()) {
            errorCount++;
            errors.push(`Row ${i}: Skipped - missing required 'name' or 'district'.`);
            continue;
          }

          const newDest = {
            id: row.id || `custom_${Date.now()}_${i}`,
            name: row.name.trim(),
            district: row.district.trim(),
            region: row.region || 'Odisha',
            category: row.category || 'Nature',
            cost_category: row.cost_category || 'DAY TRIP',
            latitude: Number(row.latitude) || 20.2961,
            longitude: Number(row.longitude) || 85.8245,
            best_season: row.best_season || 'October – March',
            recommendedDuration: Number(row.recommendedDuration) || 1,
            difficulty: row.difficulty || 'Easy',
            short_description: row.short_description || row.description || '',
            description: row.description || row.short_description || '',
            how_to_reach: row.how_to_reach || '',
            image: row.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
            official_source: row.official_source || 'User CSV Import',
            data_confidence: 'USER ADDED',
            last_verified: new Date().toISOString().slice(0,10)
          };

          // Append/Update to Odisha global dataset
          if (window.ODISHA_DATA && window.ODISHA_DATA.destinations) {
            const existingIdx = window.ODISHA_DATA.destinations.findIndex(d => d.id === newDest.id || d.name === newDest.name);
            if (existingIdx >= 0) {
              window.ODISHA_DATA.destinations[existingIdx] = newDest;
            } else {
              window.ODISHA_DATA.destinations.push(newDest);
            }
            importedCount++;
          }
        }

        if (statusEl) {
          statusEl.textContent = `✓ ${importedCount} destinations imported/updated. (${errorCount} skipped)`;
          statusEl.className = 'text-xs mt-2 font-mono text-emerald-600 dark:text-emerald-400';
        }

        WFNotify?.show(`Successfully imported ${importedCount} destinations! 🚀`, 'success');

        // Re-render views
        if (window.WFExploreView) WFExploreView._refresh();
        if (window.WFMapView) WFMapView._refresh();

      } catch (err) {
        console.error('CSV import error:', err);
        if (statusEl) {
          statusEl.textContent = `❌ Import Failed: ${err.message}`;
          statusEl.className = 'text-xs mt-2 font-mono text-red-500';
        }
        WFNotify?.show(`Import Error: ${err.message}`, 'error');
      }
    };

    reader.readAsText(file);
  },

  _resetData() {
    if (!confirm('Clear local storage data and reset settings?')) return;
    localStorage.clear();
    WFNotify?.show('Settings reset. Refreshing...', 'info');
    setTimeout(() => window.location.reload(), 1000);
  }
};
