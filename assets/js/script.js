// Back to Top behavior
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn?.classList.remove('d-none');
  } else {
    backToTopBtn?.classList.add('d-none');
  }
});

backToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: Change icon
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});