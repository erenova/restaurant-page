import { productsList } from "./product";
import { setImagesSrc } from "./assetManagement";
import { settings } from "..";
import { langChoice, setText } from "./languageManagement";
import { resetMoveValue, stopAnimation } from "./home";
import { openMenuDonerPage } from "./menuDoner";
import { openMenuBeveragesPage } from "./menuBeverages";
import { backButtonVisibility } from "./goBack";

function addMenuItem(
  product,
  dishImgClass = "w-40",
  beverageImgClass = "w-12"
) {
  if (product.type === "dish") {
    document.querySelector("[dishHolder]").innerHTML += `
  <div class="border-gray-700 border-2 rounded-md bg-zinc-500 flex flex-col gap-3 w-44 h-64 items-center justify-center">
  <p class="text-2xl text-slate-200 text-center ">${langChoice(
    product.title
  )}</p>
  <div class="${dishImgClass} flex items-center justify-center"><img data-dynamic-src="${
      product.imageSrc
    }" alt=""></div>
  <div class="grid grid-cols-2 items-end text-stone-300">
      <div class="text-xl text-end"><span class="text-3xl font-semibold">${
        product.prices[0]
      }</span> TL</div>
      <div class="self-end justify-self-end mr-3">(<span class="">${
        product.grams[0]
      }</span>gr)</div>
      <div class="text-xl text-end"><span class="text-3xl font-semibold">${
        product.prices[1]
      }</span> TL</div>
      <div class="self-end justify-self-end mr-3">(<span class="">${
        product.grams[1]
      }</span>gr)</div>
      <div class="text-xl text-end"><span class="text-3xl font-semibold">${
        product.prices[2]
      }</span> TL</div>
      <div class="self-end justify-self-end mr-3">(<span class="">${
        product.grams[2]
      }</span>gr)</div>
  </div>
</div>`;
  } else if (product.type === "beverage") {
    document.querySelector("[beverageHolder]").innerHTML += `<div 
    class="border-gray-700 border-2 rounded-md bg-zinc-500 flex flex-col gap-3 w-28 md:w-28 lg:w-32 h-60 items-center">
    <p class="text-2xl text-slate-200 text-center font-bold">${langChoice(
      product.title
    )}</p>
    <p class="text-sm text-slate-100 text-center font-light mt-[-10px]">${langChoice(
      product.info
    )}</p>
    <div class="${beverageImgClass} flex h-full items-center "><img data-dynamic-src="${
      product.imageSrc
    }" alt=""></div>
    <div class="text-stone-300 flex items-center">
        <div class="text-xl text-end"><span class="text-3xl font-semibold">${
          product.prices
        }</span> TL</div>
    </div>
</div>`;
  } else {
    alert("No Such Product");
  }
}
function addMenuItemToMenuPage(product, size, place) {
  let itemsDOM = `<div ><img data-dynamic-src="${product.imageSrc}" class="${size}"></div>`;

  document.querySelector(`[${place}]`).innerHTML = itemsDOM;
}

function appendMenuButtons() {
  addMenuItemToMenuPage(
    productsList[0],
    "h-28 w-[150px] sm:w-[170px] ",
    "dishHolder"
  );
  addMenuItemToMenuPage(productsList[4], "h-28 ", "beverageHolder");
  setImagesSrc();
}

function openMenuPage() {
  let htmlText = `<div class="flex justify-center gap-4 mt-40">
  <button id="dishes" class="flex flex-col items-center justify-center gap-12">
      <div class="font-serif text-3xl font-bold text-slate-800 text-center">${setText(
        "menu",
        "doner"
      )}</div>
      <div dishHolder class="mt-2">
      </div>

  </button>
  <button id="beverages" class=" flex flex-col items-center gap-12">
      <div class="font-serif text-3xl font-bold text-slate-800 text-center">${setText(
        "menu",
        "beverages"
      )}</div>
      <div beverageHolder class="mt-2 ">


      </div>

  </button>
</div>`;

  document.querySelector("#app").innerHTML = htmlText;
  appendMenuButtons();
  settings.currentPage = "menu";
  window.location.hash = "#menu";
  stopAnimation();
  resetMoveValue();

  document.querySelector("#dishes").addEventListener("click", (e) => {
    openMenuDonerPage();
  });
  document.querySelector("#beverages").addEventListener("click", (e) => {
    openMenuBeveragesPage();
  });
  backButtonVisibility();
}

export { openMenuPage, addMenuItem };
