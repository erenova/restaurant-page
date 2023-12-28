import "./style.css";
import "./modules/assetManagement";
import { openHomePage } from "./modules/home";
import "./modules/product";
import "./modules/menu";
import { openMenuPage } from "./modules/menu";
import "./modules/hamburger";
import { openContactPage } from "./modules/contact";
import { navItems } from "./modules/languageManagement";
import { openMenuBeveragesPage } from "./modules/menuBeverages";
import { openMenuDonerPage } from "./modules/menuDoner";
import "./modules/goBack";

export const settings = {
  currentPage: "",
};

navItems["home"].forEach((item) => {
  item.addEventListener("click", () => {
    if (settings.currentPage !== "home") {
      openHomePage();
    }
  });
});
navItems["menu"].forEach((item) => {
  item.addEventListener("click", () => {
    if (settings.currentPage !== "menu") {
      openMenuPage();
    }
  });
});
navItems["contact"].forEach((item) => {
  item.addEventListener("click", () => {
    if (settings.currentPage !== "contact") {
      openContactPage();
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
      openHomePage();
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
