/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);





function loadPage(){
    let content = document.getElementById("content");
    // top
    let topBar = document.createElement("div")
    topBar.classList.add("top-bar")
    content.appendChild(topBar)

    let containerTop = document.createElement("div")
    containerTop.classList.add("containerTop")

    topBar.appendChild(containerTop)

    let top = document.createElement("div")
    top.classList.add("top")
    containerTop.appendChild(top)

    let logo = document.createElement("div")
    logo.classList.add("logo")
    logo.innerHTML = "Best Choice"
    top.appendChild(logo)

    
    //menu
    let menu = document.createElement("menu")
    menu.classList.add("menu")


    let li = document.createElement("li")
    menu.appendChild(li)
    let a = document.createElement("a")
    a.textContent = "Home"
    a.classList.add("btn")
    a.classList.add("active")
    
    li.appendChild(a) 

  
    li = document.createElement("li")
    menu.appendChild(li)
    a = document.createElement("a")
    a.setAttribute("id","menu")
    a.textContent = "Menu"
    a.classList.add("btn")
    
    li.appendChild(a) 

    li = document.createElement("li")
    menu.appendChild(li)
    a = document.createElement("a")
    a.textContent = "Contact"
    a.setAttribute("id","contact")
    a.classList.add("btn")
    li.appendChild(a) 
    
    top.appendChild(menu)

    //center page

    let main = document.createElement("div")
    main.classList.add("main")
    content.appendChild(main)
    let containerMain = document.createElement("div")
    containerMain.classList.add("containerMain")
    main.appendChild(containerMain)
    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)(containerMain,"home")
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.nav)(containerMain, "food")
    ;(0,_contacts__WEBPACK_IMPORTED_MODULE_1__.contacts)(containerMain,"contact")
    
    //nav(main);

    //footer
    let footer = document.createElement("div")
    footer.classList.add("footer")
    content.appendChild(footer)
    
    let containerFooter = document.createElement("div")
    containerFooter.classList.add("containerFooter")
    containerFooter.innerHTML = `Copyright © 2021 <a href="https://github.com/Jess2D"> [ jess2d 🦄 ]</a>`
    footer.appendChild(containerFooter)

}



function openPage(evt, page) {
    let i, pageContent, pagelinks;

    pageContent = document.getElementsByClassName('main')
    for (i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = "none";
      }

    pagelinks = document.getElementsByClassName("btn");
      for (i = 0; i < pagelinks.length; i++) {
        pagelinks[i].className = pagelinks[i].className.replace(" active", "");
      }

    //document.getElementById(page).style.display = "block";
    //evt.currentTarget.className += " active";
}




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
function home(containerMain, id) {
    
    containerMain.setAttribute("id",id)
  
    let wrap = document.createElement("div")
    wrap.classList.add("wrap")
    containerMain.appendChild(wrap)

    let ourHistory = document.createElement("div")
    ourHistory.classList.add("our-history")
    wrap.appendChild(ourHistory)

    let p = document.createElement("p")
    p.innerText = "We imagine a world where there’s no such thing as a Health Food taste bad and all farmers live prosperously."
    ourHistory.appendChild(p)

    let button = document.createElement("button")
    button.classList.add("butt")
    button.innerHTML = "Learn More"
    ourHistory.appendChild(button)

    let imageHome = document.createElement("div")
    imageHome.classList.add("image-home")

    let img = document.createElement("img")
    img.src = "../img/health.PNG"

    imageHome.appendChild(img)
    wrap.appendChild(imageHome)

}



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
function contacts(containerMain, id) {
    containerMain.setAttribute("id",id)

    let wrap = document.createElement("div")
    wrap.classList.add("wrap")
    containerMain.appendChild(wrap)

    let menu = document.createElement("menu")
    menu.classList.add("contact")
    wrap.appendChild(menu)

    let li = document.createElement("li")
    menu.appendChild(li)
    let img = document.createElement("img")
    img.setAttribute("src", "../img/contact.jpg")
    img.setAttribute("alt","Restaurant Contact")
    li.appendChild(img)

    menu.appendChild(li)

    li = document.createElement("li")
    li.innerText = " Phone:(+21#) 1234 - 5678"
    menu.appendChild(li)


    li = document.createElement("li")
    li.innerText = "Adress: Rua Street, 1. Bairro, Jupiter"
    menu.appendChild(li)


    li = document.createElement("li")
    li.innerText = "Tuesday-Sunday:  12pm - 9pm"
    menu.appendChild(li)

    



    
}




/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });
function nav(containerMain, id) {
    containerMain.setAttribute("id",id)

    let wrap = document.createElement("div")
    wrap.classList.add("wrap")
    containerMain.appendChild(wrap)

    let grid = document.createElement("div")
    grid.classList.add("grid")
    wrap.appendChild(grid)

  let elements = [
      {"class":"food-photo", 
      "src" : "../img/chia.jpg",
      "alt": "Chia", 
      "h2": "Chia Pudding"}, 

      
      {"class":"food-photo", 
      "src" : "../img/chiken-salad.jpg",
      "alt": "Chicken Salad", 
      "h2": "Chicken Salad"},

      {"class":"food-photo", 
      "src" : "../img/fetta-salad.jpg",
      "alt": "Fetta Salad", 
      "h2": "Fetta Salad"}, 


      {"class":"food-photo", 
      "src" : "../img/somthie.jpg",
      "alt": "Smothie", 
      "h2": "Warrior Smothie"},

      {"class":"food-photo", 
      "src" : "../img/french-toast.jpg",
      "alt": "French Toast", 
      "h2": "French Toast"},

      {"class":"food-photo", 
      "src" : "../img/gluten-free-muffin.jpg",
      "alt": "Gluten Free Muffin", 
      "h2": "Gluten Free Muffin"},
      
      {"class":"food-photo", 
      "src" : "../img/leek-soup.jpg",
      "alt": "Leek and Potato Soup", 
      "h2": "Leek and Potato Soup"},

      {"class":"food-photo", 
      "src" : "../img/ojo-bife.jpg",
      "alt": "Scot File", 
      "h2": "Beef Socth"},

      {"class":"food-photo", 
      "src" : "../img/rump.jpg",
      "alt": "Beef Rump", 
      "h2": "Beef Rump"},


  ]

  elements.map(elemnt => {
      let card = document.createElement("div")
      card.classList.add("card")
      grid.appendChild(card)

      let image = document.createElement("img")
      image.setAttribute("src", elemnt.src)
      image.setAttribute("alt", elemnt.alt)
      image.classList.add(elemnt.class)
      card.appendChild(image)

      let h2 = document.createElement("h2")
      h2.innerText = elemnt.h2
      card.appendChild(h2)
      grid.appendChild(card)
      
  })

    
}





/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 




(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadPage)();
})();

/******/ })()
;