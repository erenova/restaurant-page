const hamburgerIcon = document.querySelector("#hamburgerMenu");
const modals = document.querySelectorAll("[data-hamburger]");
const modalDark = document.querySelector("#modal-dark");
const modalMenu = document.querySelector("#modal-menu");
const closeButton = document.querySelector("#closeButton");

closeButton.addEventListener("click", disableAll);

hamburgerIcon.addEventListener("click", () => {
  enableAll();
});

modalDark.addEventListener("click", () => {
  disableAll();
});

function disableAll() {
  modalMenu.classList.add("translate-x-full");

  setTimeout(() => {
    modals.forEach((item) => {
      item.dataset.hamburger = "false";
      item.classList.add("hidden");
    });
  }, 100);
}
function enableAll() {
  modals.forEach((item) => {
    item.dataset.hamburger = "true";
    item.classList.remove("hidden");
  });
  requestAnimationFrame(() => {
    modalMenu.classList.remove("translate-x-full");
  });
}

function checkMenuStatus() {
  let value = modalDark.dataset.hamburger;

  return value === "true";
}

enableAll();
