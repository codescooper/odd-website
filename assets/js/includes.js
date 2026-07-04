// Animation favicon (Chrome/Edge/Safari n'animent pas les GIF favicons,
// on cycle les 9 frames PNG via JS pour un rendu animé cross-browser).
function startFaviconAnimation() {
  const base = "assets/images/Favicon%20step/";
  const frames = Array.from({ length: 9 }, (_, i) => `${base}${i + 1}.png`);

  // Précharge pour éviter les clignotements
  frames.forEach((src) => { const img = new Image(); img.src = src; });

  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.type = "image/png";

  let i = 0;
  setInterval(() => {
    link.href = frames[i];
    i = (i + 1) % frames.length;
  }, 120);
}

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

// Newsletter du footer -> Web3Forms (envoi e-mail)
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button");
    if (btn) btn.disabled = true;
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(form) });
      const json = await res.json();
      alert(json.success ? "Merci, votre inscription est bien enregistrée !" : "L'envoi a échoué. Réessayez plus tard.");
      if (json.success) form.reset();
    } catch (err) {
      alert("Connexion impossible. Réessayez plus tard.");
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}

// Boutons "Appeler / WhatsApp" (don, contact...) : ouverture au clic,
// fermeture au clic extérieur ou sur Échap.
function initQuickCta() {
  const ctas = document.querySelectorAll(".quick-cta");
  if (!ctas.length) return;

  ctas.forEach((cta) => {
    const trigger = cta.querySelector(".quick-cta__trigger");
    if (!trigger || trigger.dataset.ready === "1") return;
    trigger.dataset.ready = "1";

    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = cta.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));

      document.querySelectorAll(".quick-cta.open").forEach((other) => {
        if (other !== cta) {
          other.classList.remove("open");
          const b = other.querySelector(".quick-cta__trigger");
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".quick-cta")) {
      document.querySelectorAll(".quick-cta.open").forEach((cta) => {
        cta.classList.remove("open");
        const b = cta.querySelector(".quick-cta__trigger");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".quick-cta.open").forEach((cta) => {
        cta.classList.remove("open");
        const b = cta.querySelector(".quick-cta__trigger");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    }
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  await loadPartial("#site-header", "partials/header.html");
  await loadPartial("#site-footer", "partials/footer.html");

  // active link + init burger/dropdowns
  setActiveNav();
  initNewsletter();
  initQuickCta();

  // IMPORTANT : après injection, on initialise ton JS de menu
  if (window.initHeaderMenu) window.initHeaderMenu();
  if (window.initParticipation) window.initParticipation();
});
