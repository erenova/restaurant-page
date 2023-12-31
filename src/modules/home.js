import { productsList } from "./product";
import { setImagesSrc } from "./assetManagement";
import { openMenuPage } from "./menu";
import { settings } from "..";
import { langChoice, langSettings } from "./languageManagement";
import { backButtonVisibility } from "./goBack";
const htmlApp = document.querySelector("#app");
let animationInterval;
function appendNewCarouselItem(itemObj, imgSize = `h-24`) {
  imgSize;

  let itemHtml = `<div data-spec="clickToMenu" class="w-full h-64 flex flex-col justify-center items-center gap-8 flex-none bg-zinc-600 text-white cursor-pointer">
  <div class="flex flex-col w-full justify-center items-center text-center">
      <img data-dynamic-src="${
        itemObj.imageSrc
      }" src="" alt="" class="${imgSize}">
      <p class=" self-center text-2xl">${langChoice(itemObj.title)}</p>
  </div>
  <div class="flex ml-4 justify-center items-center gap-4 md:gap-12 lg:gap-20 xl:gap-28 md:ml-0 md:w-full p-1">
      <div class="flex flex-col justify-center items-center gap-1">
          <span class="flex items-center gap-1">
              <span data-gram="${
                itemObj.grams[0]
              }" class="text-3xl lg:text-5xl">${itemObj.prices[0]}</span>
              TL
          </span>
          <p><span>(${itemObj.grams[0]}</span>gr)</p>
      </div>
      <div class="flex flex-col justify-center items-center gap-1">
          <span class="flex items-center gap-1">
              <span data-gram="${
                itemObj.grams[1]
              }" class="text-3xl lg:text-5xl">${itemObj.prices[1]}</span>
              TL
          </span>
          <p><span>(${itemObj.grams[1]}</span>gr)</p>

      </div>
      <div class="flex flex-col justify-center items-center gap-1">
          <span class="flex items-center gap-1">
              <span data-gram="${
                itemObj.grams[2]
              }" class="text-3xl lg:text-5xl">${itemObj.prices[2]}</span>
              TL
          </span>
          <p><span>(${itemObj.grams[2]}</span>gr)</p>

      </div>
  </div>
</div>`;

  document.querySelector(`[data-element="carousel"]`).innerHTML += itemHtml;
}

function appendCarouselItemsAll() {
  appendNewCarouselItem(productsList[0], "h-20");
  appendNewCarouselItem(productsList[1], "h-24");
  appendNewCarouselItem(productsList[2], "h-16");
  appendNewCarouselItem(productsList[3], "h-24");
  setImagesSrc();
}

function openHomePage() {
  if (langSettings.activeLanguage === "tr") {
    htmlApp.innerHTML = `<div class="flex flex-col items-center p-10 select-none">
    
    <div class="font-serif text-2xl text-slate-700 mt-12">Şehrin Lezzetli Döner Mekanına</div>
    
    <div id="welcome-section" class="font-ottoRegular text-5xl mt-6 text-neutral-950">Hoş Geldiniz!</div>
  </div>
  <div class="max-w-full mx-auto overflow-hidden relative h-64 mt-6 md:mt-32">
    <div data-element="carousel" class="flex transition-transform duration-500 h-64">
        <!-- original -->
  
        <!-- repeat -->
    </div>
  </div>
  `;
  } else {
    htmlApp.innerHTML = `<div class="flex flex-col items-center p-10 select-none">

    <div id="welcome-section" class="font-ottoRegular text-5xl mt-12 text-neutral-950">Welcome</div>
  
    <div class="font-serif text-2xl mt-6 text-slate-700">to the City's Delicious Doner Place!</div>
  </div>
  <div class="max-w-full mx-auto overflow-hidden relative h-64 mt-6 md:mt-32 flex flex-col items-center justify-center">
    <div data-element="carousel" class="flex transition-transform duration-500 h-64">
        <!-- original -->
  
        <!-- Bitti -->
    </div>
  </div>
  `;
  }
  applyCarouselSettings();
}

function applyCarouselSettings() {
  appendCarouselItemsAll();
  settings.currentPage = "home";
  window.location.hash = "#home";
  moveValue = 100;
  animationInterval = setInterval(carouselAnimation, 2500);
  document.querySelectorAll('[data-spec="clickToMenu"]').forEach((item) => {
    item.addEventListener("click", openMenuPage);
  });
  /* remove back button */
  backButtonVisibility();
}

export function stopAnimation() {
  clearInterval(animationInterval);
}

let moveValue = 100;

export function resetMoveValue() {
  moveValue = 100;
}

let getCarousel = () => {
  return document.querySelector(`[data-element="carousel"]`);
};

export function carouselAnimation() {
  if (moveValue < 400) {
    getCarousel().style.transform = `translateX(-${moveValue}%)`;
    moveValue += 100;
  } else {
    moveValue = 100;
    getCarousel().style.transform = `translateX(-0%)`;
  }
}

export { openHomePage, animationInterval };
