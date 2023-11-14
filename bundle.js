/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   settings: () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_assetManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/assetManagement */ \"./src/modules/assetManagement.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/product */ \"./src/modules/product.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hamburger */ \"./src/modules/hamburger.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_languageManagement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/languageManagement */ \"./src/modules/languageManagement.js\");\n\n\n\n\n\n\n\n\n\nvar settings = {\n  currentPage: \"\"\n};\n_modules_languageManagement__WEBPACK_IMPORTED_MODULE_7__.navItems[\"home\"].forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    if (settings.currentPage !== \"home\") {\n      (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.openHomePage)();\n    }\n  });\n});\n_modules_languageManagement__WEBPACK_IMPORTED_MODULE_7__.navItems[\"menu\"].forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    if (settings.currentPage !== \"menu\") {\n      (0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__.openMenuPage)();\n    }\n  });\n});\n_modules_languageManagement__WEBPACK_IMPORTED_MODULE_7__.navItems[\"contact\"].forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    if (settings.currentPage !== \"contact\") {\n      (0,_modules_contact__WEBPACK_IMPORTED_MODULE_6__.openContactPage)();\n    }\n  });\n});\nwindow.onload = function () {\n  switch (window.location.hash) {\n    case \"#menu\":\n      (0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__.openMenuPage)();\n      break;\n    case \"#home\":\n      (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.openHomePage)();\n      break;\n    case \"#contact\":\n      (0,_modules_contact__WEBPACK_IMPORTED_MODULE_6__.openContactPage)();\n      break;\n    case \"\":\n      (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.openHomePage)();\n      break;\n    default:\n      (0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__.openMenuPage)();\n  }\n};\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/assetManagement.js":
/*!****************************************!*\
  !*** ./src/modules/assetManagement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setImagesSrc: () => (/* binding */ setImagesSrc)\n/* harmony export */ });\nvar imagesContext = __webpack_require__(\"./src/assets sync \\\\.(png%7Cjpe?g%7Csvg)$\");\nvar imageSource = imagesContext.keys().reduce(function (images, path) {\n  // Create a custom key, for instance, you might want to remove './' from the path\n  var key = path.replace(\"./\", \"\");\n  // Assign a value to the custom key\n  images[key] = imagesContext(path);\n  return images;\n}, {});\nfunction setImagesSrc() {\n  var dynamicImages = document.querySelectorAll(\"[data-dynamic-src]\");\n  dynamicImages.forEach(function (item) {\n    item.src = imageSource[item.dataset.dynamicSrc];\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", setImagesSrc);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/assetManagement.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openContactPage: () => (/* binding */ openContactPage)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _languageManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languageManagement */ \"./src/modules/languageManagement.js\");\n\n\n\nvar htmlApp = document.querySelector(\"#app\");\nfunction openContactPage() {\n  htmlApp.innerHTML = \"<div class=\\\"flex flex-col items-center mt-24 gap-6 justify-center text-center select-none\\\">\\n      <div class=\\\"font-semibold text-3xl flex justify-start\\\">\".concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_2__.setText)(\"about\", \"contact\"), \": <span><a href=\\\"tel:02125193875\\\"\\n                  class=\\\"text-blue-500 underline text-2xl ml-2\\\">(0212) 519 38 75</a>\\n          </span></div>\\n      <div class=\\\"font-semibold text-3xl flex justify-start\\\">\").concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_2__.setText)(\"about\", \"location\"), \": <span><a target=\\\"_blank\\\"\\n                  class=\\\"text-blue-500 underline text-2xl ml-2\\\"\\n                  href=\\\"https://maps.app.goo.gl/8jW122zquVpoPwzo6\\\">\").concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_2__.setText)(\"about\", \"maps\"), \"</a>\\n      \\n          </span>\\n      \\n      </div>\\n      <div>\\n          <iframe\\n              src=\\\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12042.30051903458!2d28.9660933!3d41.0126717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9923fca6c85%3A0x6e39a9e25ba73eae!2zTWXFn2h1ciBEw7ZuZXJjaSBIYWPEsSBPc21hbifEsW4gWWVyaQ!5e0!3m2!1sen!2str!4v1699798047762!5m2!1sen!2str\\\"\\n              style=\\\"border:0;\\\" allowfullscreen=\\\"\\\" loading=\\\"lazy\\\"\\n              class=\\\"w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[500px]\\\"\\n              referrerpolicy=\\\"no-referrer-when-downgrade\\\"></iframe>\\n      </div>\\n      </div>\");\n  ___WEBPACK_IMPORTED_MODULE_0__.settings.currentPage = \"contact\";\n  window.location.hash = \"#contact\";\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__.stopAnimation)();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/hamburger.js":
/*!**********************************!*\
  !*** ./src/modules/hamburger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\nvar hamburgerIcon = document.querySelector(\"#hamburgerMenu\");\nvar modals = document.querySelectorAll(\"[data-hamburger]\");\nvar modalDark = document.querySelector(\"#modal-dark\");\nvar modalMenu = document.querySelector(\"#modal-menu\");\nvar closeButton = document.querySelector(\"#closeButton\");\ncloseButton.addEventListener(\"click\", disableAll);\nhamburgerIcon.addEventListener(\"click\", function () {\n  enableAll();\n});\nmodalDark.addEventListener(\"click\", function () {\n  disableAll();\n});\nfunction disableAll() {\n  document.body.style.overflow = \"\";\n  modalMenu.classList.add(\"translate-x-full\");\n  setTimeout(function () {\n    modals.forEach(function (item) {\n      item.dataset.hamburger = \"false\";\n      item.classList.add(\"hidden\");\n    });\n  }, 100);\n}\nfunction enableAll() {\n  document.body.style.overflow = \"hidden\";\n  window.scrollTo(0, 0);\n  modals.forEach(function (item) {\n    item.dataset.hamburger = \"true\";\n    item.classList.remove(\"hidden\");\n  });\n  requestAnimationFrame(function () {\n    modalMenu.classList.remove(\"translate-x-full\");\n  });\n}\ndocument.querySelector(\"#homeHamburger\").addEventListener(\"click\", function () {\n  if (___WEBPACK_IMPORTED_MODULE_0__.settings.currentPage !== \"home\") {\n    disableAll();\n  }\n});\ndocument.querySelector(\"#menuHamburger\").addEventListener(\"click\", function () {\n  if (___WEBPACK_IMPORTED_MODULE_0__.settings.currentPage !== \"menu\") {\n    disableAll();\n  }\n});\ndocument.querySelector(\"#contactHamburger\").addEventListener(\"click\", function () {\n  if (___WEBPACK_IMPORTED_MODULE_0__.settings.currentPage !== \"contact\") {\n    disableAll();\n  }\n});\n\n//# sourceURL=webpack://restaurant-page/./src/modules/hamburger.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animationInterval: () => (/* binding */ animationInterval),\n/* harmony export */   carouselAnimation: () => (/* binding */ carouselAnimation),\n/* harmony export */   openHomePage: () => (/* binding */ openHomePage),\n/* harmony export */   resetMoveValue: () => (/* binding */ resetMoveValue),\n/* harmony export */   stopAnimation: () => (/* binding */ stopAnimation)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/modules/product.js\");\n/* harmony import */ var _assetManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetManagement */ \"./src/modules/assetManagement.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _languageManagement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languageManagement */ \"./src/modules/languageManagement.js\");\n\n\n\n\n\nvar htmlApp = document.querySelector(\"#app\");\nvar animationInterval;\nfunction appendNewCarouselItem(itemObj) {\n  var itemHtml = \"<div data-spec=\\\"clickToMenu\\\" class=\\\"w-full flex flex-none bg-zinc-600 text-white cursor-pointer\\\">\\n  <div class=\\\"flex flex-col w-full justify-center items-center text-center\\\">\\n      <img data-dynamic-src=\\\"\".concat(itemObj.imageSrc, \"\\\" src=\\\"\\\" alt=\\\"\\\" class=\\\"h-24\\\">\\n      <p class=\\\" self-center text-2xl\\\">\").concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_4__.langChoice)(itemObj.title), \"</p>\\n  </div>\\n  <div class=\\\"flex ml-4 justify-center items-center gap-4 md:gap-12 lg:gap-20 xl:gap-28 md:ml-0 md:w-full p-1\\\">\\n      <div class=\\\"flex flex-col justify-center items-center gap-1\\\">\\n          <span class=\\\"flex items-center gap-1\\\">\\n              <span data-gram=\\\"\").concat(itemObj.grams[0], \"\\\" class=\\\"text-3xl lg:text-5xl\\\">\").concat(itemObj.prices[0], \"</span>\\n              TL\\n          </span>\\n          <p><span>(\").concat(itemObj.grams[0], \"</span>gr)</p>\\n      </div>\\n      <div class=\\\"flex flex-col justify-center items-center gap-1\\\">\\n          <span class=\\\"flex items-center gap-1\\\">\\n              <span data-gram=\\\"\").concat(itemObj.grams[1], \"\\\" class=\\\"text-3xl lg:text-5xl\\\">\").concat(itemObj.prices[1], \"</span>\\n              TL\\n          </span>\\n          <p><span>(\").concat(itemObj.grams[1], \"</span>gr)</p>\\n\\n      </div>\\n      <div class=\\\"flex flex-col justify-center items-center gap-1\\\">\\n          <span class=\\\"flex items-center gap-1\\\">\\n              <span data-gram=\\\"\").concat(itemObj.grams[2], \"\\\" class=\\\"text-3xl lg:text-5xl\\\">\").concat(itemObj.prices[2], \"</span>\\n              TL\\n          </span>\\n          <p><span>(\").concat(itemObj.grams[2], \"</span>gr)</p>\\n\\n      </div>\\n  </div>\\n</div>\");\n  document.querySelector(\"[data-element=\\\"carousel\\\"]\").innerHTML += itemHtml;\n}\nfunction appendCarouselItemsAll() {\n  _product__WEBPACK_IMPORTED_MODULE_0__.productsList.forEach(function (element) {\n    if (element.type === \"dish\") {\n      appendNewCarouselItem(element);\n    }\n  });\n  (0,_assetManagement__WEBPACK_IMPORTED_MODULE_1__.setImagesSrc)();\n}\nfunction openHomePage() {\n  if (_languageManagement__WEBPACK_IMPORTED_MODULE_4__.langSettings.activeLanguage === \"tr\") {\n    htmlApp.innerHTML = \"<div class=\\\"flex flex-col items-center p-10 select-none\\\">\\n    \\n    <div class=\\\"font-serif text-2xl text-slate-700 mt-12\\\">\\u015Eehrin Premium D\\xF6ner Mekan\\u0131na</div>\\n    \\n    <div id=\\\"welcome-section\\\" class=\\\"font-ottoRegular text-5xl mt-6 text-neutral-950\\\">Ho\\u015F Geldiniz!</div>\\n  </div>\\n  <div class=\\\"max-w-full mx-auto overflow-hidden relative h-52 mt-8 md:mt-32\\\">\\n    <div data-element=\\\"carousel\\\" class=\\\"flex transition-transform duration-500 h-52\\\">\\n        <!-- original -->\\n  \\n        <!-- repeat -->\\n    </div>\\n  </div>\\n  \";\n  } else {\n    htmlApp.innerHTML = \"<div class=\\\"flex flex-col items-center p-10 select-none\\\">\\n\\n    <div id=\\\"welcome-section\\\" class=\\\"font-ottoRegular text-5xl mt-12 text-neutral-950\\\">Welcome</div>\\n  \\n    <div class=\\\"font-serif text-2xl mt-6 text-slate-700\\\">to the City's Premier D\\xF6ner Spot!</div>\\n  </div>\\n  <div class=\\\"max-w-full mx-auto overflow-hidden relative h-52 mt-8 md:mt-32\\\">\\n    <div data-element=\\\"carousel\\\" class=\\\"flex transition-transform duration-500 h-52\\\">\\n        <!-- original -->\\n  \\n        <!-- Bitti -->\\n    </div>\\n  </div>\\n  \";\n  }\n  appendCarouselItemsAll();\n  ___WEBPACK_IMPORTED_MODULE_3__.settings.currentPage = \"home\";\n  window.location.hash = \"#home\";\n  moveValue = 100;\n  animationInterval = setInterval(carouselAnimation, 1500);\n  document.querySelectorAll('[data-spec=\"clickToMenu\"]').forEach(function (item) {\n    item.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_2__.openMenuPage);\n  });\n}\nfunction stopAnimation() {\n  clearInterval(animationInterval);\n}\nvar moveValue = 100;\nfunction resetMoveValue() {\n  moveValue = 100;\n}\nvar getCarousel = function getCarousel() {\n  return document.querySelector(\"[data-element=\\\"carousel\\\"]\");\n};\nfunction carouselAnimation() {\n  if (moveValue < 400) {\n    getCarousel().style.transform = \"translateX(-\".concat(moveValue, \"%)\");\n    moveValue += 100;\n  } else {\n    moveValue = 100;\n    getCarousel().style.transform = \"translateX(-0%)\";\n  }\n}\ndocument.querySelector('[data-element=\"logo\"]').addEventListener(\"click\", function () {\n  if (___WEBPACK_IMPORTED_MODULE_3__.settings.currentPage !== \"home\") {\n    openHomePage();\n  }\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/languageManagement.js":
/*!*******************************************!*\
  !*** ./src/modules/languageManagement.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeLanguage: () => (/* binding */ changeLanguage),\n/* harmony export */   langChoice: () => (/* binding */ langChoice),\n/* harmony export */   langSettings: () => (/* binding */ langSettings),\n/* harmony export */   languageScript: () => (/* binding */ languageScript),\n/* harmony export */   navItems: () => (/* binding */ navItems),\n/* harmony export */   setText: () => (/* binding */ setText)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _assetManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetManagement */ \"./src/modules/assetManagement.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\n\n\n\nvar navItems = {\n  home: document.querySelectorAll('[data-element=\"home\"]'),\n  menu: document.querySelectorAll('[data-element=\"menu\"]'),\n  contact: document.querySelectorAll('[data-element=\"contact\"]')\n};\nvar langSettings = {\n  activeLanguage: getLanguageValue()\n};\nfunction getLanguageValue() {\n  var activeItem = localStorage.getItem(\"currentLanguage\");\n  if (activeItem && (activeItem === \"en\" || activeItem === \"tr\")) {\n    return activeItem;\n  } else {\n    return \"en\";\n  }\n}\nfunction setNavItemsCorrect() {\n  navItems[\"home\"].forEach(function (item) {\n    item.innerText = setText(\"nav\", \"home\");\n  });\n  navItems[\"menu\"].forEach(function (item) {\n    item.innerText = setText(\"nav\", \"menu\");\n  });\n  navItems[\"contact\"].forEach(function (item) {\n    item.innerText = setText(\"nav\", \"contact\");\n  });\n}\nvar languageScript = {\n  home: {},\n  menu: {\n    leafDoner: [\"Leaf Doner\", \"Yaprak Döner\"],\n    beverages: [\"Beverages\", \"İçecekler\"]\n  },\n  about: {\n    contact: [\"Contact\", \"İletişim\"],\n    location: [\"Location\", \"Konum\"],\n    maps: [\"Maps Link\", \"Harita Linki\"]\n  },\n  nav: {\n    home: [\"Home\", \"Ana Menü\"],\n    menu: [\"Menu\", \"Ürünler\"],\n    contact: [\"Contact\", \"İletişim\"]\n  }\n};\nfunction setText(page, state) {\n  var currentLanguage = langSettings.activeLanguage === \"tr\" ? 1 : 0;\n  return languageScript[page][state][currentLanguage];\n}\nfunction langChoice(checkArray) {\n  if (_typeof(checkArray) === _typeof([])) {\n    var currentLanguage = langSettings.activeLanguage === \"tr\" ? 1 : 0;\n    return checkArray[currentLanguage];\n  } else {\n    return checkArray;\n  }\n}\nfunction changeLanguage() {\n  switchActiveLang();\n  reloadCurrentPage();\n  setNavItemsCorrect();\n}\nfunction switchActiveLang() {\n  switch (langSettings.activeLanguage) {\n    case \"en\":\n      langSettings.activeLanguage = \"tr\";\n      localStorage.setItem(\"currentLanguage\", \"tr\");\n      setNewLangAssets(\"Türkçe\", \"iconTurkish.svg\");\n      break;\n    default:\n      langSettings.activeLanguage = \"en\";\n      localStorage.setItem(\"currentLanguage\", \"en\");\n      setNewLangAssets(\"English\", \"iconEnglish.svg\");\n      break;\n  }\n}\nfunction setNewLangAssets(langName, file) {\n  document.querySelectorAll(\"[data-element=\\\"flag\\\"]\").forEach(function (item) {\n    item.dataset.dynamicSrc = file;\n  });\n  document.querySelectorAll(\"[data-lang-name]\").forEach(function (item) {\n    item.dataset.langName = langName;\n    item.innerText = langName;\n  });\n  (0,_assetManagement__WEBPACK_IMPORTED_MODULE_1__.setImagesSrc)();\n}\nfunction reloadCurrentPage() {\n  var changerFunction;\n  switch (___WEBPACK_IMPORTED_MODULE_0__.settings.currentPage) {\n    case \"home\":\n      changerFunction = _home__WEBPACK_IMPORTED_MODULE_3__.openHomePage;\n      break;\n    case \"menu\":\n      changerFunction = _menu__WEBPACK_IMPORTED_MODULE_4__.openMenuPage;\n      break;\n    case \"contact\":\n      changerFunction = _contact__WEBPACK_IMPORTED_MODULE_2__.openContactPage;\n      break;\n  }\n  (0,_home__WEBPACK_IMPORTED_MODULE_3__.stopAnimation)();\n  changerFunction();\n}\nfunction setCorrectImg() {\n  switch (langSettings.activeLanguage) {\n    case \"tr\":\n      setNewLangAssets(\"Türkçe\", \"iconTurkish.svg\");\n      break;\n    default:\n      setNewLangAssets(\"English\", \"iconEnglish.svg\");\n      break;\n  }\n}\ndocument.querySelectorAll(\"[language]\").forEach(function (item) {\n  item.addEventListener(\"click\", changeLanguage);\n});\ndocument.addEventListener(\"DOMContentLoaded\", setCorrectImg);\ndocument.addEventListener(\"DOMContentLoaded\", setNavItemsCorrect);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/languageManagement.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openMenuPage: () => (/* binding */ openMenuPage)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/modules/product.js\");\n/* harmony import */ var _assetManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetManagement */ \"./src/modules/assetManagement.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _languageManagement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languageManagement */ \"./src/modules/languageManagement.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n\n\n\n\n\n/*\n*türkçe ve ingilizce dil seçeneğini hesaba katarak yaz\nTODO menü ürünlerini producttan üretip\nTODO koda dahil et\n\n*/\n\nfunction addMenuItem(product, lang) {\n  if (product.type === \"beverage\") {\n    document.querySelector(\"[beverageHolder]\").innerHTML += \"<div\\n    class=\\\"border-gray-700 border-2 rounded-md bg-zinc-500 flex flex-col gap-3 w-24 md:w-28 lg:w-32 items-center\\\">\\n    <p class=\\\"text-2xl text-slate-200 text-center font-bold\\\">\".concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_3__.langChoice)(product.title), \"</p>\\n    <p class=\\\"text-lg text-slate-100 text-center font-light mt-[-10px]\\\">\").concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_3__.langChoice)(product.info), \"</p>\\n    <div class=\\\"w-12 flex h-full items-end \\\"><img data-dynamic-src=\\\"\").concat(product.imageSrc, \"\\\" alt=\\\"\\\"></div>\\n    <div class=\\\"text-stone-300 flex items-end\\\">\\n        <div class=\\\"text-xl text-end\\\"><span class=\\\"text-3xl font-semibold\\\">\").concat(product.prices, \"</span> TL</div>\\n    </div>\\n</div>\");\n  } else {\n    document.querySelector(\"[dishHolder]\").innerHTML += \"\\n  <div class=\\\"border-gray-700 border-2 rounded-md bg-zinc-500 flex flex-col gap-3 w-52 items-center\\\">\\n  <p class=\\\"text-3xl text-slate-200 text-center font-bold\\\">\".concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_3__.langChoice)(product.title), \"</p>\\n  <div class=\\\"w-40\\\"><img data-dynamic-src=\\\"\").concat(product.imageSrc, \"\\\" alt=\\\"\\\"></div>\\n  <div class=\\\"grid grid-cols-2 items-end text-stone-300\\\">\\n      <div class=\\\"text-xl text-end\\\"><span class=\\\"text-3xl font-semibold\\\">\").concat(product.prices[0], \"</span> TL</div>\\n      <div class=\\\"self-end justify-self-end mr-3\\\">(<span class=\\\"\\\">\").concat(product.grams[0], \"</span>gr)</div>\\n      <div class=\\\"text-xl text-end\\\"><span class=\\\"text-3xl font-semibold\\\">\").concat(product.prices[1], \"</span> TL</div>\\n      <div class=\\\"self-end justify-self-end mr-3\\\">(<span class=\\\"\\\">\").concat(product.grams[1], \"</span>gr)</div>\\n      <div class=\\\"text-xl text-end\\\"><span class=\\\"text-3xl font-semibold\\\">\").concat(product.prices[2], \"</span> TL</div>\\n      <div class=\\\"self-end justify-self-end mr-3\\\">(<span class=\\\"\\\">\").concat(product.grams[2], \"</span>gr)</div>\\n  </div>\\n</div>\");\n  }\n}\nfunction appendAllMenuItems() {\n  _product__WEBPACK_IMPORTED_MODULE_0__.productsList.forEach(function (element) {\n    addMenuItem(element);\n  });\n  (0,_assetManagement__WEBPACK_IMPORTED_MODULE_1__.setImagesSrc)();\n}\nfunction openMenuPage() {\n  var htmlText = \"<div class=\\\"flex flex-col items-center md:flex-row md:items-start md:justify-around mt-24 gap-8 xl:gap-0 select-none\\\">\\n  <div id=\\\"dishes\\\" class=\\\"sm:mr-8 sm:ml-8 xl:ml-24\\\">\\n      <div class=\\\"font-serif text-4xl font-bold text-slate-800 text-center\\\">\".concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_3__.setText)(\"menu\", \"leafDoner\"), \"</div>\\n      <div dishHolder class=\\\"gap-8 grid grid-cols-1\\n      sm:grid-cols-2 lg:gap-x-24 mt-2\\\">\\n      </div>\\n  </div>\\n  <div id=\\\"beverages\\\" class=\\\"md:mr-7 md:ml-2 xl:mr-24\\\">\\n      <div class=\\\"font-serif text-4xl font-bold text-slate-800 text-center\\\">\").concat((0,_languageManagement__WEBPACK_IMPORTED_MODULE_3__.setText)(\"menu\", \"beverages\"), \"</div>\\n      <div beverageHolder class=\\\" rounded-sm gap-2 grid grid-cols-2 \\n      sm:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-8 mt-2\\\">\\n\\n\\n      </div>\\n  </div>\\n</div>\");\n  if (_languageManagement__WEBPACK_IMPORTED_MODULE_3__.langSettings.activeLanguage === \"tr\") {\n    htmlText = \"<div class=\\\" flex flex-col items-center md:flex-row md:items-start md:justify-around mt-24 gap-8 xl:gap-0 select-none\\\">\\n    <div id=\\\"dishes\\\" class=\\\"sm:mr-8 sm:ml-8 xl:ml-24\\\">\\n        <div class=\\\"font-serif text-4xl font-bold text-slate-800 text-center\\\">Yaprak D\\xF6ner</div>\\n        <div dishHolder class=\\\"gap-8 grid grid-cols-1\\n        sm:grid-cols-2 lg:gap-x-24 mt-2 place-items-center\\\">\\n        </div>\\n    </div>\\n    <div id=\\\"beverages\\\" class=\\\"md:mr-7 md:ml-2 xl:mr-24\\\">\\n        <div class=\\\"font-serif text-4xl font-bold text-slate-800 text-center\\\">\\u0130\\xE7ecekler</div>\\n        <div beverageHolder class=\\\" rounded-sm gap-2 grid grid-cols-2 \\n        sm:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-8 mt-2\\\">\\n  \\n  \\n        </div>\\n    </div>\\n  </div>\";\n  }\n  document.querySelector(\"#app\").innerHTML = htmlText;\n  appendAllMenuItems();\n  ___WEBPACK_IMPORTED_MODULE_2__.settings.currentPage = \"menu\";\n  window.location.hash = \"#menu\";\n  (0,_home__WEBPACK_IMPORTED_MODULE_4__.stopAnimation)();\n  (0,_home__WEBPACK_IMPORTED_MODULE_4__.resetMoveValue)();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/product.js":
/*!********************************!*\
  !*** ./src/modules/product.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   product: () => (/* binding */ product),\n/* harmony export */   productsList: () => (/* binding */ productsList)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar product = /*#__PURE__*/_createClass(function product(title, imageSrc) {\n  var grams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [\"\", \"\", \"\"];\n  var prices = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [\"\", \"\", \"\"];\n  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"dish\";\n  var info = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : \"\";\n  _classCallCheck(this, product);\n  this.title = title;\n  this.imageSrc = imageSrc, this.grams = grams, this.prices = prices;\n  this.type = type;\n  this.info = info;\n});\nvar productsList = [new product([\"Half Bread\", \"Yarım Ekmek\"], \"itemHalf.svg\", [\"65\", \"90\", \"115\"], [\"95\", \"130\", \"165\"]), new product([\"Whole Bread\", \"Tam Ekmek\"], \"itemWhole.svg\", [\"100\", \"140\", \"180\"], [\"145\", \"200\", \"255\"]), new product([\"Quarter Bread\", \"\\xC7eyrek Ekmek\"], \"itemQuarter.svg\", [\"40\", \"55\", \"70\"], [\"55\", \"80\", \"100\"]), new product([\"On Plate\", \"Tabak\"], \"itemPlate.svg\", [\"110\", \"150\", \"190\"], [\"160\", \"215\", \"270\"]), new product([\"Cola\", \"Kola\"], \"cola.svg\", \"\", \"25\", \"beverage\", \"330 ml\"), new product([\"Fanta\", \"Fanta\"], \"fanta.svg\", \"\", \"25\", \"beverage\", \"330 ml\"), new product([\"Turnip Juice\", \"Şalgam\"], \"salgam.svg\", \"\", \"15\", \"beverage\"), new product(\"Ayran\", \"ayranBuyuk.svg\", \"\", \"15\", \"beverage\", [\"(Big)\", \"(B\\xFCy\\xFCk)\"]), new product(\"Ayran\", \"ayranKucuk.svg\", \"\", \"10\", \"beverage\", [\"(Small)\", \"(K\\xFC\\xE7\\xFCk)\"]), new product([\"Mineral Water\", \"Sade Soda\"], \"sodaSade.svg\", \"\", \"10\", \"beverage\"), new product([\"Lemon Soda\", \"Limonlu Soda\"], \"sodaLimon.svg\", \"\", \"10\", \"beverage\"), new product([\"Juice \", \"Meyve Suyu\"], \"juice.svg\", \"\", \"10\", \"beverage\", [\"(Sourcherry/\\n      Peach)\", \"(Vi\\u015Fne/\\n      \\u015Eeftali)\"]), new product([\"Water\", \"Su\"], \"su.svg\", \"\", \"5\", \"beverage\", \"(0.5 L)\")];\n\n//# sourceURL=webpack://restaurant-page/./src/modules/product.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/otto.woff2 */ \"./src/fonts/otto.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/otto.woff */ \"./src/fonts/otto.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/paris.woff2 */ \"./src/fonts/paris.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/paris.woff */ \"./src/fonts/paris.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \\`sans\\` font-family by default.\n5. Use the user's configured \\`sans\\` font-feature-settings by default.\n6. Use the user's configured \\`sans\\` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \\`html\\` so users can set them as a class directly on the \\`html\\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \\`mono\\` font family by default.\n2. Correct the odd \\`em\\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \\`sub\\` and \\`sup\\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \\`:invalid\\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \\`inherit\\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \\`display: block\\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \\`vertical-align: middle\\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.left-0 {\n  left: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.right-2 {\n  right: 0.5rem;\n}\n.top-0 {\n  top: 0px;\n}\n.top-4 {\n  top: 1rem;\n}\n.top-80 {\n  top: 20rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.mt-12 {\n  margin-top: 3rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-24 {\n  margin-top: 6rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mt-\\\\[-10px\\\\] {\n  margin-top: -10px;\n}\n.mt-\\\\[-6rem\\\\] {\n  margin-top: -6rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-24 {\n  height: 6rem;\n}\n.h-52 {\n  height: 13rem;\n}\n.h-64 {\n  height: 16rem;\n}\n.h-full {\n  height: 100%;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-24 {\n  width: 6rem;\n}\n.w-40 {\n  width: 10rem;\n}\n.w-52 {\n  width: 13rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.flex-none {\n  flex: none;\n}\n.translate-x-full {\n  --tw-translate-x: 100%;\n  transform: translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-24 {\n  --tw-translate-y: 6rem;\n  transform: translate(var(--tw-translate-x), 6rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.place-items-center {\n  align-items: center;\n  justify-items: center;\n  place-items: center;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-center {\n  align-self: center;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgba(55, 65, 81, 1);\n  border-color: rgba(55, 65, 81, var(--tw-border-opacity));\n}\n.bg-slate-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(71, 85, 105, 1);\n  background-color: rgba(71, 85, 105, var(--tw-bg-opacity));\n}\n.bg-stone-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(214, 211, 209, 1);\n  background-color: rgba(214, 211, 209, var(--tw-bg-opacity));\n}\n.bg-stone-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(168, 162, 158, 1);\n  background-color: rgba(168, 162, 158, var(--tw-bg-opacity));\n}\n.bg-zinc-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(113, 113, 122, 1);\n  background-color: rgba(113, 113, 122, var(--tw-bg-opacity));\n}\n.bg-zinc-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(82, 82, 91, 1);\n  background-color: rgba(82, 82, 91, var(--tw-bg-opacity));\n}\n.stroke-white {\n  stroke: #fff;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-10 {\n  padding: 2.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-end {\n  text-align: right;\n}\n.font-ottoRegular {\n  font-family: ottoRegular, sans-serif;\n}\n.font-serif {\n  font-family: ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-amber-50 {\n  --tw-text-opacity: 1;\n  color: rgba(255, 251, 235, 1);\n  color: rgba(255, 251, 235, var(--tw-text-opacity));\n}\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgba(59, 130, 246, 1);\n  color: rgba(59, 130, 246, var(--tw-text-opacity));\n}\n.text-neutral-950 {\n  --tw-text-opacity: 1;\n  color: rgba(10, 10, 10, 1);\n  color: rgba(10, 10, 10, var(--tw-text-opacity));\n}\n.text-red-100 {\n  --tw-text-opacity: 1;\n  color: rgba(254, 226, 226, 1);\n  color: rgba(254, 226, 226, var(--tw-text-opacity));\n}\n.text-slate-100 {\n  --tw-text-opacity: 1;\n  color: rgba(241, 245, 249, 1);\n  color: rgba(241, 245, 249, var(--tw-text-opacity));\n}\n.text-slate-200 {\n  --tw-text-opacity: 1;\n  color: rgba(226, 232, 240, 1);\n  color: rgba(226, 232, 240, var(--tw-text-opacity));\n}\n.text-slate-700 {\n  --tw-text-opacity: 1;\n  color: rgba(51, 65, 85, 1);\n  color: rgba(51, 65, 85, var(--tw-text-opacity));\n}\n.text-slate-800 {\n  --tw-text-opacity: 1;\n  color: rgba(30, 41, 59, 1);\n  color: rgba(30, 41, 59, var(--tw-text-opacity));\n}\n.text-stone-300 {\n  --tw-text-opacity: 1;\n  color: rgba(214, 211, 209, 1);\n  color: rgba(214, 211, 209, var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n\n@font-face {\n    font-family: 'ottoRegular';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\n         url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n\n\n\n@font-face {\n    font-family: 'parisRegular';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),\n         url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n\n\n\n@media (min-width: 640px) {\n\n  .sm\\\\:right-5 {\n    right: 1.25rem;\n  }\n\n  .sm\\\\:ml-8 {\n    margin-left: 2rem;\n  }\n\n  .sm\\\\:mr-8 {\n    margin-right: 2rem;\n  }\n\n  .sm\\\\:block {\n    display: block;\n  }\n\n  .sm\\\\:h-80 {\n    height: 20rem;\n  }\n\n  .sm\\\\:w-80 {\n    width: 20rem;\n  }\n\n  .sm\\\\:w-\\\\[35\\\\%\\\\] {\n    width: 35%;\n  }\n\n  .sm\\\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm\\\\:gap-5 {\n    gap: 1.25rem;\n  }\n}\n\n\n\n\n@media (min-width: 768px) {\n\n  .md\\\\:right-2 {\n    right: 0.5rem;\n  }\n\n  .md\\\\:ml-0 {\n    margin-left: 0px;\n  }\n\n  .md\\\\:ml-14 {\n    margin-left: 3.5rem;\n  }\n\n  .md\\\\:ml-2 {\n    margin-left: 0.5rem;\n  }\n\n  .md\\\\:mr-14 {\n    margin-right: 3.5rem;\n  }\n\n  .md\\\\:mr-7 {\n    margin-right: 1.75rem;\n  }\n\n  .md\\\\:mt-32 {\n    margin-top: 8rem;\n  }\n\n  .md\\\\:block {\n    display: block;\n  }\n\n  .md\\\\:hidden {\n    display: none;\n  }\n\n  .md\\\\:h-\\\\[400px\\\\] {\n    height: 400px;\n  }\n\n  .md\\\\:w-28 {\n    width: 7rem;\n  }\n\n  .md\\\\:w-\\\\[400px\\\\] {\n    width: 400px;\n  }\n\n  .md\\\\:w-full {\n    width: 100%;\n  }\n\n  .md\\\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\\\:items-start {\n    align-items: flex-start;\n  }\n\n  .md\\\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .md\\\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .md\\\\:justify-around {\n    justify-content: space-around;\n  }\n\n  .md\\\\:gap-12 {\n    gap: 3rem;\n  }\n\n  .md\\\\:gap-x-4 {\n    -moz-column-gap: 1rem;\n         column-gap: 1rem;\n  }\n}\n\n\n\n\n@media (min-width: 1024px) {\n\n  .lg\\\\:h-\\\\[500px\\\\] {\n    height: 500px;\n  }\n\n  .lg\\\\:w-32 {\n    width: 8rem;\n  }\n\n  .lg\\\\:w-\\\\[600px\\\\] {\n    width: 600px;\n  }\n\n  .lg\\\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .lg\\\\:justify-center {\n    justify-content: center;\n  }\n\n  .lg\\\\:gap-20 {\n    gap: 5rem;\n  }\n\n  .lg\\\\:gap-x-24 {\n    -moz-column-gap: 6rem;\n         column-gap: 6rem;\n  }\n\n  .lg\\\\:gap-x-8 {\n    -moz-column-gap: 2rem;\n         column-gap: 2rem;\n  }\n\n  .lg\\\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\n\n\n\n\n@media (min-width: 1280px) {\n\n  .xl\\\\:ml-24 {\n    margin-left: 6rem;\n  }\n\n  .xl\\\\:mr-24 {\n    margin-right: 6rem;\n  }\n\n  .xl\\\\:gap-0 {\n    gap: 0px;\n  }\n\n  .xl\\\\:gap-28 {\n    gap: 7rem;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/assets/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./ayranBuyuk.svg\": \"./src/assets/ayranBuyuk.svg\",\n\t\"./ayranKucuk.svg\": \"./src/assets/ayranKucuk.svg\",\n\t\"./cola.svg\": \"./src/assets/cola.svg\",\n\t\"./fanta.svg\": \"./src/assets/fanta.svg\",\n\t\"./iconEnglish.svg\": \"./src/assets/iconEnglish.svg\",\n\t\"./iconTurkish.svg\": \"./src/assets/iconTurkish.svg\",\n\t\"./itemHalf.svg\": \"./src/assets/itemHalf.svg\",\n\t\"./itemPlate.svg\": \"./src/assets/itemPlate.svg\",\n\t\"./itemQuarter.svg\": \"./src/assets/itemQuarter.svg\",\n\t\"./itemWhole.svg\": \"./src/assets/itemWhole.svg\",\n\t\"./juice.svg\": \"./src/assets/juice.svg\",\n\t\"./logo.svg\": \"./src/assets/logo.svg\",\n\t\"./menuButton.svg\": \"./src/assets/menuButton.svg\",\n\t\"./salgam.svg\": \"./src/assets/salgam.svg\",\n\t\"./sodaLimon.svg\": \"./src/assets/sodaLimon.svg\",\n\t\"./sodaSade.svg\": \"./src/assets/sodaSade.svg\",\n\t\"./su.svg\": \"./src/assets/su.svg\",\n\t\"./xButton.svg\": \"./src/assets/xButton.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/assets/ayranBuyuk.svg":
/*!***********************************!*\
  !*** ./src/assets/ayranBuyuk.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0764f275c116681140e6.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/ayranBuyuk.svg?");

/***/ }),

/***/ "./src/assets/ayranKucuk.svg":
/*!***********************************!*\
  !*** ./src/assets/ayranKucuk.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"af007ff4a0c63831504f.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/ayranKucuk.svg?");

/***/ }),

/***/ "./src/assets/cola.svg":
/*!*****************************!*\
  !*** ./src/assets/cola.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b2bcd4b6297bfa373d7a.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cola.svg?");

/***/ }),

/***/ "./src/assets/fanta.svg":
/*!******************************!*\
  !*** ./src/assets/fanta.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b2905994b2e1876ce3cd.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fanta.svg?");

/***/ }),

/***/ "./src/assets/iconEnglish.svg":
/*!************************************!*\
  !*** ./src/assets/iconEnglish.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"74b2a30bd138a1d5f4e6.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/iconEnglish.svg?");

/***/ }),

/***/ "./src/assets/iconTurkish.svg":
/*!************************************!*\
  !*** ./src/assets/iconTurkish.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"083310b8b8db40b44b6f.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/iconTurkish.svg?");

/***/ }),

/***/ "./src/assets/itemHalf.svg":
/*!*********************************!*\
  !*** ./src/assets/itemHalf.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"174c8e1f130a742662a0.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/itemHalf.svg?");

/***/ }),

/***/ "./src/assets/itemPlate.svg":
/*!**********************************!*\
  !*** ./src/assets/itemPlate.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e27d185ef68c30a55c50.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/itemPlate.svg?");

/***/ }),

/***/ "./src/assets/itemQuarter.svg":
/*!************************************!*\
  !*** ./src/assets/itemQuarter.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b6d0a1b30140853aebc2.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/itemQuarter.svg?");

/***/ }),

/***/ "./src/assets/itemWhole.svg":
/*!**********************************!*\
  !*** ./src/assets/itemWhole.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dc512e52efa8bc96803c.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/itemWhole.svg?");

/***/ }),

/***/ "./src/assets/juice.svg":
/*!******************************!*\
  !*** ./src/assets/juice.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2b8f16881d0e0f5b94dd.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/juice.svg?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1b4f784bb171b8eaa918.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/logo.svg?");

/***/ }),

/***/ "./src/assets/menuButton.svg":
/*!***********************************!*\
  !*** ./src/assets/menuButton.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"644fa295fdd5f662e642.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menuButton.svg?");

/***/ }),

/***/ "./src/assets/salgam.svg":
/*!*******************************!*\
  !*** ./src/assets/salgam.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b95a5ca24698e232722d.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/salgam.svg?");

/***/ }),

/***/ "./src/assets/sodaLimon.svg":
/*!**********************************!*\
  !*** ./src/assets/sodaLimon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4c4a1e0b171ab8e41267.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/sodaLimon.svg?");

/***/ }),

/***/ "./src/assets/sodaSade.svg":
/*!*********************************!*\
  !*** ./src/assets/sodaSade.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"676bf423920c20426d10.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/sodaSade.svg?");

/***/ }),

/***/ "./src/assets/su.svg":
/*!***************************!*\
  !*** ./src/assets/su.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2f122c36083f522b5365.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/su.svg?");

/***/ }),

/***/ "./src/assets/xButton.svg":
/*!********************************!*\
  !*** ./src/assets/xButton.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6a797b962f110b5cbd6a.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/xButton.svg?");

/***/ }),

/***/ "./src/fonts/otto.woff":
/*!*****************************!*\
  !*** ./src/fonts/otto.woff ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"365bd6600cf2e3bce6ce.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/otto.woff?");

/***/ }),

/***/ "./src/fonts/otto.woff2":
/*!******************************!*\
  !*** ./src/fonts/otto.woff2 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1798c080904eafa7471a.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/otto.woff2?");

/***/ }),

/***/ "./src/fonts/paris.woff":
/*!******************************!*\
  !*** ./src/fonts/paris.woff ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fb828a8c0b693d9201bd.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/paris.woff?");

/***/ }),

/***/ "./src/fonts/paris.woff2":
/*!*******************************!*\
  !*** ./src/fonts/paris.woff2 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d6098ca8e08e4bb2013a.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/paris.woff2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;