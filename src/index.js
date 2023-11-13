import "./style.css";
import "./modules/assetManagement";
import { openHomePage } from "./modules/home";
import "./modules/product";
import "./modules/menu";
import { openMenuPage } from "./modules/menu";
import "./modules/hamburger";
import { openContactPage } from "./modules/contact";
import { navItems } from "./modules/languageManagement";

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
