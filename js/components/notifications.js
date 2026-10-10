/* ==========================================================================
   ANTARA — Toast Notification System v3
   Premium slide-in/out, click to dismiss, icon-per-type, limit to 4 toasts
   ========================================================================== */

window.WFNotify = {
  _count: 0,
  MAX_TOASTS: 4,

  init() {
    if (!document.getElementById('toast-container')) {
      const c = document.createElement('div');
      c.id = 'toast-container';
      c.className = 'fixed bottom-[88px] lg:bottom-6 right-4 z-[90] flex flex-col gap-2 items-end pointer-events-none';
      c.setAttribute('aria-live', 'polite');
      c.setAttribute('role', 'status');
      document.body.appendChild(c);
    }
  },

  show(message, type = 'info', duration = 4200) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    // Limit concurrent toasts
    const existing = container.querySelectorAll('.wf-toast');
    if (existing.length >= this.MAX_TOASTS) {
      existing[0].remove();
    }

    const icons = {
      success: '✅',
      error:   '❌',
      warning: '⚠️',
      info:    '✦'
    };

    const borders = {
      success: 'border-emerald-400/40',
      error:   'border-red-400/40',
      warning: 'border-amber-400/40',
      info:    'border-white/20'
    };

    const icon = icons[type] || icons.info;
    const border = borders[type] || borders.info;
    const id = `toast-${++this._count}`;

    const toast = document.createElement('div');
    toast.id = id;
    toast.className = `wf-toast toast-${type} ${border} pointer-events-all cursor-pointer`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <span class="flex-shrink-0 text-sm leading-none">${icon}</span>
      <span class="text-sm leading-snug flex-1">${message}</span>
      <button class="flex-shrink-0 opacity-50 hover:opacity-100 ml-1 text-xs transition-opacity" onclick="this.parentElement.remove()" aria-label="Dismiss">✕</button>`;

    // Click anywhere on toast to dismiss
    toast.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') this._dismiss(toast);
    });

    container.appendChild(toast);

    // Progress bar
    const bar = document.createElement('div');
    bar.style.cssText = `
      position: absolute;
      bottom: 0; left: 0;
      height: 2px;
      border-radius: 0 0 var(--radius-md) var(--radius-md);
      background: ${type === 'success' ? '#34d399' : type === 'error' ? '#f87171' : type === 'warning' ? '#fbbf24' : 'rgba(196,148,30,0.7)'};
      width: 100%;
      transition: width ${duration}ms linear;
    `;
    toast.style.position = 'relative';
    toast.style.overflow = 'hidden';
    toast.appendChild(bar);
    requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = '0%'; }));

    // Auto dismiss
    const timer = setTimeout(() => this._dismiss(toast), duration);
    toast._dismissTimer = timer;
  },

  _dismiss(toast) {
    if (!toast || !toast.parentElement) return;
    clearTimeout(toast._dismissTimer);
    toast.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    toast.style.transform = 'translateX(110%)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 320);
  },

  success(msg) { this.show(msg, 'success'); },
  error(msg)   { this.show(msg, 'error');   },
  warning(msg) { this.show(msg, 'warning'); },
  info(msg)    { this.show(msg, 'info');    }
};

window.WayfarerNotify = window.WFNotify;
