window.addEventListener("DOMContentLoaded", () => {
  const includeElements = document.querySelectorAll("[data-include]");
  let remaining = includeElements.length;

  if (remaining === 0) {
    document.dispatchEvent(new Event("includesLoaded"));
    return;
  }

  includeElements.forEach(el => {
    const file = el.getAttribute("data-include");

    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}`);
        }
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
        remaining--;
        if (remaining === 0) {
          document.dispatchEvent(new Event("includesLoaded"));
        }
      })
      .catch(error => {
        console.error("Include error:", error);
        remaining--;
        if (remaining === 0) {
          document.dispatchEvent(new Event("includesLoaded"));
        }
      });
  });
});