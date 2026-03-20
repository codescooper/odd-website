const modal = document.getElementById("imgModal");
const modalImg = modal.querySelector(".img-modal__img");
const closeBtn = modal.querySelector(".img-modal__close");

document.querySelectorAll(".odd-thumb img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});