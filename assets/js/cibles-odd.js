const modal = document.getElementById("imgModal");
const modalImg = modal.querySelector(".img-modal__img");
const closeBtn = modal.querySelector(".img-modal__close");

// Ouvrir modal
document.querySelectorAll(".odd-thumb img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    modalImg.src = img.src;
    modalImg.alt = img.alt || "Image agrandie";

    // 🔥 empêche scroll arrière
    document.body.style.overflow = "hidden";
  });
});

// Fermer modal
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  modalImg.src = "";

  // 🔥 réactive scroll
  document.body.style.overflow = "";
}

// Bouton fermer
closeBtn.addEventListener("click", closeModal);

// Click extérieur
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ESC clavier
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});