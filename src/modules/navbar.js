import { aboutFunc } from "./about";
import { homeFunc } from "./home";
import { menuFunc } from "./menu";

export function elCreate(para) {
  return document.createElement(para);
}

export let createNavbar = () => {
  function elCreate(para) {
    return document.createElement(para);
  }
  let content = document.getElementById("content");
  let nav = elCreate("nav");
  let navs = elCreate("div");
  let home = elCreate("div");
  let menu = elCreate("div");
  let about = elCreate("div");
  let img = elCreate("img");
  navs.classList.add("navs");
  home.classList.add("navigation");
  home.classList.add("active");
  menu.classList.add("navigation");
  about.classList.add("navigation");
  home.id = "homeNav";
  menu.id = "menuNav";
  about.id = "aboutNav";
  img.src = "./others/hamblogo.png";
  img.id = "navlogo";
  home.innerText = "Home";
  menu.innerText = "Menu";
  about.innerText = "About";
  content.appendChild(nav);
  nav.appendChild(img);
  nav.appendChild(navs);
  navs.appendChild(home);
  navs.appendChild(menu);
  navs.appendChild(about);

  home.addEventListener("click", () => {
    if (home.classList.contains("active")) {
    } else {
      menu.classList.remove("active");
      about.classList.remove("active");
      home.classList.add("active");
      document.getElementsByClassName("main")[0].remove();
      homeFunc();
    }
  });

  menu.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
    } else {
      home.classList.remove("active");
      about.classList.remove("active");
      menu.classList.add("active");
      document.getElementsByClassName("main")[0].remove();
      menuFunc();
    }
  });
  about.addEventListener("click", () => {
    if (about.classList.contains("active")) {
    } else {
      home.classList.remove("active");
      menu.classList.remove("active");
      about.classList.add("active");
      document.getElementsByClassName("main")[0].remove();
      aboutFunc();
    }
  });
};
