window.initHeaderMenu = function initHeaderMenu() {

  // 👉 ICI : on vise le vrai header
  const header = document.getElementById("mainHeader");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("#mainNav");
  const mobile = window.matchMedia("(max-width: 980px)");

  if (!burger || !nav || !header) return;

  /* ===============================
     🔹 PROTECTION DOUBLE INIT
     =============================== */
  if (burger.dataset.ready === "1") return;
  burger.dataset.ready = "1";

  /* ===============================
     🔹 HAUTEUR DYNAMIQUE DU HEADER
     =============================== */
  function updateHeaderHeight() {
    const height = header.offsetHeight;
    document.documentElement.style
      .setProperty("--header-height", height + "px");
  }

  // 👉 ICI : au chargement
  updateHeaderHeight();

  // 👉 ICI : au resize
  window.addEventListener("resize", updateHeaderHeight);

  /* ===============================
     🔹 BURGER
     =============================== */
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", String(isOpen));

    // 👉 ICI : après animation du menu
    setTimeout(updateHeaderHeight, 250);
  });

  /* ===============================
     🔹 FERMETURE SUR LIEN (MOBILE)
     =============================== */
  nav.addEventListener("click", (e) => {
    if (mobile.matches && e.target.closest("a")) {
      nav.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");

      // 👉 ICI
      setTimeout(updateHeaderHeight, 250);
    }
  });

  /* ===============================
     🔹 DROPDOWNS (mobile + clavier desktop)
     =============================== */
  nav.querySelectorAll(".has-dropdown > .dropdown-trigger").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const li = e.currentTarget.closest(".has-dropdown");
      const isOpen = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));

      nav.querySelectorAll(".has-dropdown").forEach((other) => {
        if (other !== li) {
          other.classList.remove("open");
          const b = other.querySelector(".dropdown-trigger");
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });

      // 👉 ICI
      setTimeout(updateHeaderHeight, 250);
    });
  });

  /* ===============================
     🔹 CLIC HORS HEADER
     =============================== */
  document.addEventListener("click", (e) => {
    if (!e.target.closest("header")) {
      nav.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
      nav.querySelectorAll(".has-dropdown").forEach((li) =>
        li.classList.remove("open")
      );

      // 👉 ICI
      setTimeout(updateHeaderHeight, 250);
    }
  });

  /* ===============================
     🔹 FERMETURE PAR ÉCHAP
     =============================== */
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    nav.classList.remove("nav-open");
    burger.setAttribute("aria-expanded", "false");
    nav.querySelectorAll(".has-dropdown.open").forEach((li) => {
      li.classList.remove("open");
      const b = li.querySelector(".dropdown-trigger");
      if (b) b.setAttribute("aria-expanded", "false");
    });

    // 👉 ICI
    setTimeout(updateHeaderHeight, 250);
  });

  /* ===============================
     🔹 RETOUR DESKTOP
     =============================== */
  mobile.addEventListener("change", () => {
    if (!mobile.matches) {
      nav.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
      nav.querySelectorAll(".has-dropdown").forEach((li) =>
        li.classList.remove("open")
      );

      // 👉 ICI
      setTimeout(updateHeaderHeight, 250);
    }
  });
};