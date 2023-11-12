import "./style.css";
import "./modules/assetManagement";
import { openHomePage } from "./modules/home";
import "./modules/menuItem";
import "./modules/menu";
import { openMenuPage } from "./modules/menu";
import "./modules/hamburger";

openHomePage();
document.querySelector("#home").addEventListener("click", openHomePage);
document.querySelector("#menu").addEventListener("click", openMenuPage);
