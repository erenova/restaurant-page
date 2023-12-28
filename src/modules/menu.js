import { productsList } from "./product";
import { setImagesSrc } from "./assetManagement";
import { settings } from "..";
import { langChoice, langSettings, setText } from "./languageManagement";
import { resetMoveValue, stopAnimation } from "./home";
import { openMenuDonerPage } from "./menuDoner";
import { openMenuBeveragesPage } from "./menuBeverages";
import { backButtonVisibility } from "./goBack";

function addMenuItem(product, isButton, setSpesificWidth) {
  let widthClasses = `w-28 md:w-28 lg:w-32`;
  let holderTag = `div`;
  let holderClosingTag = `div`;
  let dynamicHeight = "h-72";
  if (isButton) {
    widthClasses = `w-52 h-60`;
    holderTag = `button type="button"`;
    holderClosingTag = `div`;
    dynamicHeight = "h-60";
  }

  if (product.type === "dish") {
    document.querySelector("[dishHolder]").innerHTML += `
  <${holderTag} class="border-gray-700 border-2 rounded-md bg-zinc-500 flex flex-col gap-3 w-52 ${dynamicHeight} items-center justify-center">
  <p class="text-3xl text-slate-200 text-center font-bold">${langChoice(
    product.title
  )}</p>
  <div class="w-40"><img data-dynamic-src="${product.imageSrc}" alt=""></div>
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
</${holderClosingTag}>`;
  } else if (product.type === "beverage") {
    document.querySelector("[beverageHolder]").innerHTML += `<${holderTag}
    class="border-gray-700 border-2 rounded-md bg-zinc-500 flex flex-col gap-3 ${widthClasses} h-60 items-center">
    <p class="text-2xl text-slate-200 text-center font-bold">${langChoice(
      product.title
    )}</p>
    <p class="text-lg text-slate-100 text-center font-light mt-[-10px]">${langChoice(
      product.info
    )}</p>
    <div class="w-12 flex h-full items-end "><img data-dynamic-src="${
      product.imageSrc
    }" alt=""></div>
    <div class="text-stone-300 flex items-end">
        <div class="text-xl text-end"><span class="text-3xl font-semibold">${
          product.prices
        }</span> TL</div>
    </div>
</${holderClosingTag}>`;
  } else {
    alert("No Such Product");
  }
}

function appendAllMenuItems() {
  productsList.forEach((element) => {
    addMenuItem(element);
  });
  setImagesSrc();
}

function appendMenuButtons() {
  addMenuItem(productsList[0], true);
  addMenuItem(productsList[4], true);
  setImagesSrc();
}

function openMenuPage() {
  let htmlText = `<div class="flex flex-col items-center md:flex-row md:items-start md:justify-center mt-24 gap-8 xl:gap-0 select-none">
  <button id="dishes" class="sm:mr-8 sm:ml-8 xl:ml-24 flex flex-col items-center gap-4">
      <div class="font-serif text-4xl font-bold text-slate-800 text-center">${setText(
        "menu",
        "doner"
      )}</div>
      <div dishHolder class="gap-8 grid grid-cols-1
       lg:gap-x-24 mt-2">
      </div>
      <div class="font-serif text-xl font-bold text-slate-600 text-center">Click To view The Doner Page</div>

  </button>
  <button id="beverages" class="md:mr-7 md:ml-2 xl:mr-24 flex flex-col items-center gap-4">
      <div class="font-serif text-4xl font-bold text-slate-800 text-center">${setText(
        "menu",
        "beverages"
      )}</div>
      <div beverageHolder class="rounded-sm gap-2 grid grid-cols-1 md:gap-x-4 lg:gap-x-8 mt-2">


      </div>
      <div class="font-serif text-xl font-bold text-slate-600 text-center">Click To view The Beverages Page</div>

  </button>
</div>`;
  if (langSettings.activeLanguage === "tr") {
    htmlText = `<div class=" flex flex-col items-center md:flex-row md:items-start md:justify-center mt-24 gap-8 xl:gap-0 select-none">
    <button id="dishes" class="sm:mr-8 sm:ml-8 xl:ml-24 flex flex-col items-center gap-4">
        <div class="font-serif text-4xl font-bold text-slate-800 text-center">${setText(
          "menu",
          "doner"
        )}</div>
        <div dishHolder class="gap-8 grid grid-cols-1
         lg:gap-x-24 mt-2 place-items-center">
        </div>
        <div class="font-serif text-xl font-bold text-slate-600 text-center">${setText(
          "menu",
          "donerPage"
        )}</div>

    </button>
    <button id="beverages" class="md:mr-7 md:ml-2 xl:mr-24 flex flex-col items-center gap-4">
        <div class="font-serif text-4xl font-bold text-slate-800 text-center">${setText(
          "menu",
          "beverages"
        )}</div>
        <div beverageHolder class=" rounded-sm gap-2 grid grid-cols-1 md:gap-x-4 lg:gap-x-8 mt-2">
  
  
        </div>
        <div class="font-serif text-xl font-bold text-slate-600 text-center">${setText(
          "menu",
          "beveragesPage"
        )}</div>
    </button>
  </div>`;
  }
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
