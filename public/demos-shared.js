// Shared Interactions & Animation Engine for Dope IT Solution Demos

(function() {
  // 1. Toast Notification System
  let toastContainer = document.getElementById('premiumToastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'premiumToastContainer';
    document.body.appendChild(toastContainer);
  }

  window.showToast = function(title, message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `premium-toast ${type}`;

    const iconSvg = type === 'success' 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Trigger reveal transition
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 4000);
  };

  // 2. Intersection Observer for Scroll Reveals
  document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Shadow
    const topNav = document.querySelector('.top-nav') || document.querySelector('.demo-bar');
    if (topNav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
          topNav.classList.add('nav-scrolled-active');
        } else {
          topNav.classList.remove('nav-scrolled-active');
        }
      }, { passive: true });
    }

    // Observe elements for scroll reveal
    const revealTargets = document.querySelectorAll(
      '.hero-content, .features-grid > *, .menu-grid > *, .program-grid > *, .products-grid > *, .doctors-grid > *, .craft-grid > *, .bulletin-card, .reservation-box, .ppdb-banner, .queue-box, .export-box, .stat-card'
    );

    revealTargets.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      if (index % 3 === 1) el.classList.add('delay-100');
      if (index % 3 === 2) el.classList.add('delay-200');
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealTargets.forEach(el => observer.observe(el));
    } else {
      // Fallback
      revealTargets.forEach(el => el.classList.add('is-revealed'));
    }

    // Button pulse class
    document.querySelectorAll('button, .btn-main, .btn-action').forEach(b => {
      b.classList.add('btn-pulse-active');
    });
  });
})();
