import "./style.css";
import "./modules/assetManagement";
import "./modules/getPadding";
import { openHomePage } from "./modules/home";
import "./modules/product";
import "./modules/menu";
import { openMenuPage } from "./modules/menu";
import "./modules/hamburger";
import { openContactPage } from "./modules/contact";
import { langSettings, navItems } from "./modules/languageManagement";
import { openMenuBeveragesPage } from "./modules/menuBeverages";
import { openMenuDonerPage } from "./modules/menuDoner";
import "./modules/goBack";
import { setPadding } from "./modules/getPadding";

export const settings = {
  currentPage: "",
};

navItems["home"].forEach((item) => {
  item.addEventListener("click", () => {
    if (settings.currentPage !== "home") {
      openHomePage();
      setPadding();
    }
  });
});
navItems["menu"].forEach((item) => {
  item.addEventListener("click", () => {
    if (settings.currentPage !== "menu") {
      openMenuPage();
      setPadding();
    }
  });
});
navItems["contact"].forEach((item) => {
  item.addEventListener("click", () => {
    if (settings.currentPage !== "contact") {
      openContactPage();
      setPadding();
    }
  });
});

window.onload = function () {
  switch (window.location.hash) {
    case "#menu":
      openMenuPage();
      break;
    case "#doner":
      openMenuDonerPage();
      break;
    case "#beverages":
      openMenuBeveragesPage();
      break;
    case "#home":
      openMenuPage();
      break;
    case "#contact":
      openContactPage();
      break;
    case "":
      openHomePage();
      break;
    default:
      openMenuPage();
  }
};

/* For Load Skeleton problem */
window.addEventListener("load", () => {
  document.querySelector("html").style.visibility = "visible";
  document.querySelector("html").style.opacity = "1";
});
