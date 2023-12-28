import { settings } from "..";
import { setImagesSrc } from "./assetManagement";
import { backButtonVisibility } from "./goBack";
import { setText } from "./languageManagement";
import { addMenuItem } from "./menu";
import { productsList } from "./product";

function beverageProducts() {
  addMenuItem(productsList[4]);
  addMenuItem(productsList[5]);
  addMenuItem(productsList[6]);
  addMenuItem(productsList[7]);
  addMenuItem(productsList[8]);
  addMenuItem(productsList[9]);
  addMenuItem(productsList[10]);
  addMenuItem(productsList[11]);
  addMenuItem(productsList[12]);
}

function openMenuBeveragesPage() {
  settings.currentPage = "beverages";
  window.location.hash = "#beverages";
  document.querySelector("#app").innerHTML = `
  <div class=" flex flex-col items-center md:flex-row md:items-start md:justify-center mt-24 gap-8 xl:gap-0 select-none">
  <div id="dish-section" class="sm:mr-8 sm:ml-8 xl:ml-24 flex flex-col items-center gap-4">
      <div class="font-serif text-4xl font-bold text-slate-800 text-center">${setText(
        "menu",
        "beverages"
      )}</div>
      <div beverageHolder class="gap-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
       lg:gap-x-24 mt-2 place-items-center">
      </div>

  </div>
  
</div>`;
  beverageProducts();
  setImagesSrc();
  backButtonVisibility();
  window.scrollTo(0, 0);
}

export { openMenuBeveragesPage };