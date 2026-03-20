window.initParticipation = function () {
  document.querySelectorAll(".odd-card").forEach((card) => {
    const btn = card.querySelector(".odd-toggle");
    const body = card.querySelector(".odd-card__body");
    if (!btn || !body) return;

    // par défaut ouvert
    btn.addEventListener("click", () => {
      const isHidden = body.style.display === "none";
      body.style.display = isHidden ? "" : "none";
      btn.textContent = isHidden ? "Réduire" : "Déplier";
      btn.setAttribute("aria-expanded", String(isHidden));
    });
  });
};