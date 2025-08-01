/**
 * initInteractiveUI
 * Initializes theme preference, back-to-top behavior, and dynamic navbar updates
 */
function initInteractiveUI() {
  // ============================================
  // DARK MODE SETUP
  // ============================================

  const toggleBtn = document.getElementById('darkModeToggle');
  const modeIcon = document.getElementById('modeIcon');

  // Load and apply saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    modeIcon?.classList.remove('fa-moon');
    modeIcon?.classList.add('fa-sun');
  }

  // Handle dark/light mode toggle
  toggleBtn?.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');

    // Animate icon rotation
    modeIcon?.classList.add('rotate');
    setTimeout(() => modeIcon?.classList.remove('rotate'), 500);

    // Swap icons and save preference
    if (isDark) {
      modeIcon?.classList.remove('fa-moon');
      modeIcon?.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      modeIcon?.classList.remove('fa-sun');
      modeIcon?.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // ============================================
  // BACK TO TOP BUTTON BEHAVIOR
  // ============================================

  const backToTopBtn = document.getElementById('backToTop');

  // Show or hide back-to-top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn?.classList.add('show');
    } else {
      backToTopBtn?.classList.remove('show');
    }
  });

  // Scroll to top on button click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================================
  // NAVIGATION HIGHLIGHT AND HIDING LOGIC
  // ============================================

  // Get the value of data-nav set on <body>
  const navTarget = document.body.getAttribute("data-nav");

  if (navTarget) {
    // Hide ALL matching nav links for the current section
    document.querySelectorAll(`[data-nav="${navTarget}"]`).forEach(navLink => {
      navLink.classList.add("active");
      // Only hide if more than 1 nav item exists
      const totalNavLinks = navLink.closest("ul")?.querySelectorAll(".nav-link").length || 0;
      if (totalNavLinks > 1) {
        navLink.classList.add("d-none");
      }
    });
  }
}

/**
 * Wait until all includes are loaded before initializing interactivity
 */
document.addEventListener("includesLoaded", () => {
  initInteractiveUI();
});