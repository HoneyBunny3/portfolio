function initInteractiveUI() {
  // Back to Top
  const backToTopBtn = document.getElementById('backToTop');
  const toggleBtn = document.getElementById('darkModeToggle');
  const modeIcon = document.getElementById('modeIcon');

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


  toggleBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Rotate the icon
    modeIcon.classList.add('rotate');
    setTimeout(() => modeIcon.classList.remove('rotate'), 500);

    // Swap icons
    if (document.body.classList.contains('dark-mode')) {
      modeIcon.classList.remove('fa-moon');
      modeIcon.classList.add('fa-sun');
    } else {
      modeIcon.classList.remove('fa-sun');
      modeIcon.classList.add('fa-moon');
    }
  });
}