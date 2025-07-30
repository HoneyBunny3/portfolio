// assets/js/include.js
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const response = await fetch(`/includes/${file}`);
    const content = await response.text();
    el.innerHTML = content;
  });
});