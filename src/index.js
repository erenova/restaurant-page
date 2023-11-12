import "./style.css";
import "./modules/assetManagement";
import { openHomePage } from "./modules/home";
import "./modules/product";
import "./modules/menu";
import { openMenuPage } from "./modules/menu";
import "./modules/hamburger";
import { openContactPage } from "./modules/contact";

export const settings = {
  currentPage: "",
};

openHomePage();
document.querySelector("#homeNav").addEventListener("click", () => {
  if (settings.currentPage !== "home") {
    openHomePage();
  }
});
document.querySelector("#menuNav").addEventListener("click", () => {
  if (settings.currentPage !== "menu") {
    openMenuPage();
  }
});

document.querySelector("#contactNav").addEventListener("click", () => {
  if (settings.currentPage !== "contact") {
    openContactPage();
  }
});
