import { productsList } from "./product";
import { setImagesSrc } from "./assetManagement";
import { settings } from "..";
import { langChoice, langSettings, setText } from "./languageManagement";
import { animationInterval, resetMoveValue, stopAnimation } from "./home";
/*
*türkçe ve ingilizce dil seçeneğini hesaba katarak yaz
TODO menü ürünlerini producttan üretip
TODO koda dahil et

*/

function addMenuItem(product, lang) {
  if (product.type === "beverage") {
    document.querySelector("[beverageHolder]").innerHTML += `<div
    class="border-gray-700 border-2 rounded-md bg-zinc-500 flex flex-col gap-3 w-24 md:w-28 lg:w-32 items-center">
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
</div>`;
  } else {
    document.querySelector("[dishHolder]").innerHTML += `
  <div class="border-gray-700 border-2 rounded-md bg-zinc-500 flex flex-col gap-3 w-52 items-center">
  <p class="text-3xl text-slate-200 text-center font-bold">${langChoice(
    product.title
  )}</p>
  <div class="w-40"><img data-dynamic-src="${product.imageSrc}" alt=""></div>
  <div class="grid grid-cols-2  h-full items-end text-stone-300">
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
  }
}

function appendAllMenuItems() {
  productsList.forEach((element) => {
    addMenuItem(element);
  });
  setImagesSrc();
}

function openMenuPage() {
  let htmlText = `<div class="flex flex-col items-center md:flex-row md:items-start md:justify-around mt-24 gap-8 xl:gap-0">
  <div id="dishes" class="sm:mr-8 sm:ml-8 xl:ml-24">
      <div class="font-serif text-4xl font-bold text-slate-800 text-center">${setText(
        "menu",
        "leafDoner"
      )}</div>
      <div dishHolder class="gap-8 grid grid-cols-1
      sm:grid-cols-2 lg:gap-x-24 mt-2">
      </div>
  </div>
  <div id="beverages" class="md:mr-7 md:ml-2 xl:mr-24">
      <div class="font-serif text-4xl font-bold text-slate-800 text-center">${setText(
        "menu",
        "beverages"
      )}</div>
      <div beverageHolder class=" rounded-sm gap-2 grid grid-cols-2 
      sm:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-8 mt-2">


      </div>
  </div>
</div>`;
  if (langSettings.activeLanguage === "tr") {
    htmlText = `<div class=" flex flex-col items-center md:flex-row md:items-start md:justify-around mt-24 gap-8 xl:gap-0">
    <div id="dishes" class="sm:mr-8 sm:ml-8 xl:ml-24">
        <div class="font-serif text-4xl font-bold text-slate-800 text-center">Yaprak Döner</div>
        <div dishHolder class="gap-8 grid grid-cols-1
        sm:grid-cols-2 lg:gap-x-24 mt-2">
        </div>
    </div>
    <div id="beverages" class="md:mr-7 md:ml-2 xl:mr-24">
        <div class="font-serif text-4xl font-bold text-slate-800 text-center">İçecekler</div>
        <div beverageHolder class=" rounded-sm gap-2 grid grid-cols-2 
        sm:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-8 mt-2">
  
  
        </div>
    </div>
  </div>`;
  }
  document.querySelector("#app").innerHTML = htmlText;
  appendAllMenuItems();
  settings.currentPage = "menu";
  stopAnimation();
  resetMoveValue();
}

export { openMenuPage };
