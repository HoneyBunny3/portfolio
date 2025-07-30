// assets/js/include.js
document.addEventListener("DOMContentLoaded", async function () {
  const includes = document.querySelectorAll("[data-include]");
  const fetches = Array.from(includes).map(async (el) => {
    const file = el.getAttribute("data-include");
    const response = await fetch(`/includes/${file}`);
    const content = await response.text();
    el.innerHTML = content;
  });

  // Wait for all includes to finish loading
  await Promise.all(fetches);

  // Now safely run back-to-top and dark mode setup
  if (typeof initInteractiveUI === "function") {
    initInteractiveUI();
  }
});