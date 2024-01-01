import { settings } from "..";
import { setImagesSrc } from "./assetManagement";
import { backButtonVisibility } from "./goBack";
import { setText } from "./languageManagement";
import { addMenuItem } from "./menu";
import { productsList } from "./product";

function donerProducts() {
  addMenuItem(productsList[0]);
  addMenuItem(productsList[1]);
  addMenuItem(productsList[2]);
  addMenuItem(productsList[3]);
}

function openMenuDonerPage() {
  settings.currentPage = "doner";
  window.location.hash = "#doner";
  document.querySelector(
    "#app"
  ).innerHTML = `<div class=" flex flex-col items-center md:flex-row md:items-start md:justify-center mt-24 gap-8 xl:gap-0 select-none">
  <div id="dish-section" class="sm:mr-8 sm:ml-8 xl:ml-24 flex flex-col items-center gap-4">
      <div class="font-serif text-4xl font-bold text-slate-800 text-center">${setText(
        "menu",
        "doner"
      )}</div>
      <div dishHolder class=" gap-4
       grid grid-cols-2
       md:gap-x-24 mt-2 place-items-center">
      </div>

  </div>
  
</div>`;
  donerProducts();
  backButtonVisibility();
  setImagesSrc();
  window.scrollTo(0, 0);
}

export { openMenuDonerPage };
