import { settings } from "..";
import { setImagesSrc } from "./assetManagement";
import { openContactPage } from "./contact";
import { openHomePage, stopAnimation } from "./home";
import { openMenuPage } from "./menu";
import { openMenuBeveragesPage } from "./menuBeverages";
import { openMenuDonerPage } from "./menuDoner";

export const navItems = {
  home: document.querySelectorAll('[data-element="home"]'),
  menu: document.querySelectorAll('[data-element="menu"]'),
  contact: document.querySelectorAll('[data-element="contact"]'),
};

export const langSettings = {
  activeLanguage: getLanguageValue(),
};

function getLanguageValue() {
  let activeItem = localStorage.getItem("currentLanguage");
  if (activeItem && (activeItem === "en" || activeItem === "tr")) {
    return activeItem;
  } else {
    return "en";
  }
}

function setNavItemsCorrect() {
  navItems["home"].forEach((item) => {
    item.innerText = setText("nav", "home");
  });
  navItems["menu"].forEach((item) => {
    item.innerText = setText("nav", "menu");
  });
  navItems["contact"].forEach((item) => {
    item.innerText = setText("nav", "contact");
  });
}

export const languageScript = {
  home: {},
  menu: {
    doner: ["Doner", "Döner"],
    beverages: ["Beverages", "İçecekler"],
  },
  about: {
    contact: ["Phone", "Telefon"],
    location: ["Location", "Konum"],
    maps: ["Maps Link", "Harita Linki"],
  },
  nav: {
    home: ["Home", "Ana Sayfa"],
    menu: ["Menu", "Menü"],
    contact: ["Contact", "İletişim"],
  },
};

export function setText(page, state) {
  let currentLanguage = langSettings.activeLanguage === "tr" ? 1 : 0;
  return languageScript[page][state][currentLanguage];
}

export function langChoice(checkArray) {
  if (typeof checkArray === typeof []) {
    let currentLanguage = langSettings.activeLanguage === "tr" ? 1 : 0;
    return checkArray[currentLanguage];
  } else {
    return checkArray;
  }
}

export function changeLanguage() {
  switchActiveLang();
  reloadCurrentPage();
  setNavItemsCorrect();
}

function switchActiveLang() {
  switch (langSettings.activeLanguage) {
    case "en":
      langSettings.activeLanguage = "tr";
      localStorage.setItem("currentLanguage", "tr");
      setNewLangAssets("TR", "languageIcon.svg");
      break;

    default:
      langSettings.activeLanguage = "en";
      localStorage.setItem("currentLanguage", "en");

      setNewLangAssets("EN", "languageIcon.svg");
      break;
  }
}

function setNewLangAssets(langName, file) {
  document.querySelectorAll(`[data-element="flag"]`).forEach((item) => {
    item.dataset.dynamicSrc = file;
  });
  document.querySelectorAll(`[data-lang-name]`).forEach((item) => {
    item.dataset.langName = langName;
    item.innerText = langName;
  });
  setImagesSrc();
}

function reloadCurrentPage() {
  let changerFunction;
  switch (settings.currentPage) {
    case "home":
      changerFunction = openHomePage;
      break;
    case "menu":
      changerFunction = openMenuPage;
      break;
    case "doner":
      changerFunction = openMenuDonerPage;
      break;
    case "beverages":
      changerFunction = openMenuBeveragesPage;
      break;
    case "contact":
      changerFunction = openContactPage;
      break;
  }
  stopAnimation();

  changerFunction();
}

function setCorrectImg() {
  switch (langSettings.activeLanguage) {
    case "tr":
      setNewLangAssets("TR", "languageIcon.svg");
      break;

    default:
      setNewLangAssets("EN", "languageIcon.svg");
      break;
  }
}

document.querySelectorAll("[language]").forEach((item) => {
  item.addEventListener("click", changeLanguage);
});

document.addEventListener("DOMContentLoaded", setCorrectImg);
document.addEventListener("DOMContentLoaded", setNavItemsCorrect);
