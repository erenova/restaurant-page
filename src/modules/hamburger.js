import { settings } from "..";
import { openHomePage } from "./home";
import { openMenuPage } from "./menu";

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
  document.body.style.overflow = "";
  modalMenu.classList.add("translate-x-full");

  setTimeout(() => {
    modals.forEach((item) => {
      item.dataset.hamburger = "false";
      item.classList.add("hidden");
    });
  }, 100);
}
function enableAll() {
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);

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

document.querySelector("#homeHamburger").addEventListener("click", () => {
  if (settings.currentPage !== "home") {
    disableAll();
  }
});
document.querySelector("#menuHamburger").addEventListener("click", () => {
  if (settings.currentPage !== "menu") {
    disableAll();
  }
});
document.querySelector("#contactHamburger").addEventListener("click", () => {
  if (settings.currentPage !== "contact") {
    disableAll();
  }
});
