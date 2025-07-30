// assets/js/include.js
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");
  let pending = includes.length;

  if (pending === 0) {
    document.dispatchEvent(new Event("includesLoaded"));
    return;
  }

  includes.forEach((el) => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        el.innerHTML = data;
        pending--;
        if (pending === 0) {
          document.dispatchEvent(new Event("includesLoaded"));
        }
      });
  });
});