function initInteractiveUI() {
  const backToTopBtn = document.getElementById('backToTop');
  const toggleBtn = document.getElementById('darkModeToggle');
  const modeIcon = document.getElementById('modeIcon');

  // Determine initial theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
  }

  // Handle toggle click
  toggleBtn?.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');

    // Animate icon rotation
    modeIcon.classList.add('rotate');
    setTimeout(() => modeIcon.classList.remove('rotate'), 500);

    // Swap icons and save preference
    if (isDark) {
      modeIcon.classList.remove('fa-moon');
      modeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      modeIcon.classList.remove('fa-sun');
      modeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // Back to Top behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn?.classList.add('show');
    } else {
      backToTopBtn?.classList.remove('show');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}