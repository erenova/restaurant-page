const htmlApp = document.querySelector("#app");

function appendNewCarouselItem(itemObj) {
  let itemHtml = `<div class="w-full h-full flex flex-none bg-zinc-600 text-white">
  <div class="flex flex-col w-full  h-full justify-center items-center text-center">
      <img data-dynamic-src="${itemObj.imageSrc}" src="" alt="" class="h-24">
      <p class=" self-center text-2xl">${itemObj.title}</p>
  </div>
  <div class="flex ml-4 justify-center items-center gap-4 md:gap-12 lg:gap-20 xl:gap-28 md:ml-0 md:w-full p-1">
      <div class="flex flex-col justify-center items-center gap-1">
          <span class="flex items-center gap-1">
              <span data-gram="${itemObj.grams[0]}" class="text-3xl lg:text-5xl">${itemObj.prices[0]}</span>
              TL
          </span>
          <p><span>(${itemObj.grams[0]}</span>gr)</p>
      </div>
      <div class="flex flex-col justify-center items-center gap-1">
          <span class="flex items-center gap-1">
              <span data-gram="${itemObj.grams[1]}" class="text-3xl lg:text-5xl">${itemObj.prices[1]}</span>
              TL
          </span>
          <p><span>(${itemObj.grams[1]}</span>gr)</p>

      </div>
      <div class="flex flex-col justify-center items-center gap-1">
          <span class="flex items-center gap-1">
              <span data-gram="${itemObj.grams[2]}" class="text-3xl lg:text-5xl">${itemObj.prices[2]}</span>
              TL
          </span>
          <p><span>(${itemObj.grams[2]}</span>gr)</p>

      </div>
  </div>
</div>`;

  document.querySelector(`[data-element="carousel"]`).innerHTML += itemHtml;
}

function appendCarouselItemsAll() {
  productsList.forEach((element) => {
    appendNewCarouselItem(element);
  });
}

function clearPage() {
  htmlApp.innerHTML = ``;
}

function openPageHome(lang) {
  if (lang === "tr") {
    htmlApp.innerHTML = `<div class="flex flex-col items-center p-10">
    
    <div class="font-serif text-2xl text-slate-700 mt-12">Şehrin Premium Döner Mekanına</div>
    
    <div id="welcome-section" class="font-ottoRegular text-5xl mt-6 text-neutral-950">Hoş Geldiniz!</div>
  </div>
  <div class="max-w-full mx-auto overflow-hidden relative h-52 mt-8 md:mt-32">
    <div data-element="carousel" class="flex transition-transform duration-500 h-52">
        <!-- original -->
  
        <!-- repeat -->
    </div>
  </div>
  `;
  } else {
    htmlApp.innerHTML = `<div class="flex flex-col items-center p-10">

    <div id="welcome-section" class="font-ottoRegular text-5xl mt-12 text-neutral-950">Welcome</div>
  
    <div class="font-serif text-2xl mt-6 text-slate-700">to the City's Premier Döner Spot!</div>
  </div>
  <div class="max-w-full mx-auto overflow-hidden relative h-52 mt-8 md:mt-32">
    <div data-element="carousel" class="flex transition-transform duration-500 h-52">
        <!-- original -->
  
        <!-- Bitti -->
    </div>
  </div>
  `;
  }

  appendCarouselItemsAll();
}
