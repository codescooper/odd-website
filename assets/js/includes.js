async function loadPartial(selector, url) {
  const host = document.querySelector(selector);
  if (!host) return;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    host.innerHTML = `<!-- Erreur chargement: ${url} -->`;
    return;
  }
  host.innerHTML = await res.text();
}

function setActiveNav() {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll(".block-header__nav a.item-content").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();

    // support "/" ou "index.html"
    const isHome = (current === "index.html" && (href === "/" || href.includes("index")));
    const isMatch = href.includes(current);

    if (isHome || isMatch) a.classList.add("active");
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  await loadPartial("#site-header", "partials/header.html");
  await loadPartial("#site-footer", "partials/footer.html");

  // active link + init burger/dropdowns
  setActiveNav();

  // IMPORTANT : après injection, on initialise ton JS de menu
  if (window.initHeaderMenu) window.initHeaderMenu();
  if (window.initParticipation) window.initParticipation();
});
