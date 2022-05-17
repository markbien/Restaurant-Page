/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/chat.png":
/*!**********************!*\
  !*** ./src/chat.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de20a0b17504a41550c.png";

/***/ }),

/***/ "./src/phone-call.png":
/*!****************************!*\
  !*** ./src/phone-call.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00387604a72df1241c24.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _chat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.png */ "./src/chat.png");
/* harmony import */ var _phone_call_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-call.png */ "./src/phone-call.png");




// bind $ to document.querySelector
const $ = document.querySelector.bind(document);
// bind $create to creating elements
const $create = document.createElement.bind(document);
// declare body variable
const body = $('body');
// initially set the body's class
body.classList.add('menu');

// create content div
const content = $create('div');
content.setAttribute('id', 'content');
// append to body and this will contain all the components
body.appendChild(content);

// create navigation component
function navComponent(){
    const nav = $create('nav');
    const ul = $create('ul');
    const tabs = ['Home', 'Menu', 'Contact Us'];
    
    nav.appendChild(ul);
    tabs.forEach(tab => {
        const li = $create('li');
        li.textContent = tab;
        ul.appendChild(li);
    });

    return nav;
}

// create footer component
function footerComponent(){
    const footer = $create('footer');
    footer.textContent = "Baktol Restaurant Inc.";

    return footer;
}

// home tab component
function homeTabComponent(){
    const homeTab = $create('div');
    homeTab.classList.add('home-tab');

    const top = $create('div');
    top.classList.add('top');

    const companyName = $create('h1');
    companyName.textContent = "Baktol Restaurant";

    const hr = $create('hr');

    const history = $create('p');
    history.textContent = "Founded in 2022 by Parsley and Lexi. It started as a small coffee shop that is pet-friendly and extended its services to provide top tier delicacies and dishes.";
    history.classList.add('text-justify');

    const bottom = $create('div');
    bottom.classList.add('bottom');

    const vision = $create('h3');
    vision.textContent = "Vision";

    const visionText = $create("p");
    visionText.classList.add('text-justify');
    visionText.textContent = "A leading 5 star restaurant that has served millions of customers with delicious and extravagant dishes. Known to many as Miracle-Resto.";

    const mission = $create('h3');
    mission.textContent = "Mission";

    const missionText = $create("p");
    missionText.classList.add('text-justify');
    missionText.textContent = "To provide world class service and dishes at a low price to ensure everyone gets to enjoy our foods and services.";

    top.appendChild(companyName);
    top.appendChild(hr);
    top.appendChild(history);

    bottom.appendChild(vision);
    bottom.appendChild(visionText);
    bottom.appendChild(mission);
    bottom.appendChild(missionText);

    homeTab.appendChild(top);
    homeTab.appendChild(bottom);

    return homeTab;
}

// contact tab component
function contactComponent(){
    const contactTab = $create('div');
    contactTab.classList.add('contact-tab');

    const emailTab = $create('div');
    emailTab.classList.add('contact');

    const chatIcon = new Image();
    chatIcon.src = _chat_png__WEBPACK_IMPORTED_MODULE_1__;

    const emailContents = $create('div');
    emailContents.classList.add('contents');

    const h3 = $create('h3');
    h3.textContent = "Customer Support";

    const p1 = $create("p");
    p1.textContent = "Send us an email with your feedbacks or any questions that you have.";

    const btn = $create('button');
    btn.textContent = "Contact Us";

    const phoneTab = $create("div");
    phoneTab.classList.add("contact");

    const callIcon = new Image();
    callIcon.src = _phone_call_png__WEBPACK_IMPORTED_MODULE_2__;

    const phoneContents = $create('div');
    phoneContents.classList.add('contents');

    const h3a = $create("h3");
    h3a.textContent = "Talk to us";

    const p2 = $create('p');
    p2.textContent = "Call us to get faster assistance.";

    const p3 = $create('p');
    p3.textContent = "+63-999-999-9999";

    contactTab.appendChild(emailTab);
    contactTab.appendChild(phoneTab);

    emailTab.appendChild(chatIcon);
    emailTab.appendChild(emailContents);    
    
    emailContents.appendChild(h3);
    emailContents.appendChild(p1);
    emailContents.appendChild(btn);

    phoneTab.appendChild(callIcon);
    phoneTab.appendChild(phoneContents);

    phoneContents.appendChild(h3a);
    phoneContents.appendChild(p2);
    phoneContents.appendChild(p3);

    return contactTab;
}

function menuComponent(){
    const menuTab = $create("div");
    menuTab.classList.add("menu-tab");

    const coffeeTable = $create('table');
    const saladTable = $create('table');

    generateTD('Coffee', 'Coffee', 'Price', coffeeTable);
    generateTD('Salad', 'Salad', 'Price', saladTable);

    menuTab.appendChild(coffeeTable);
    menuTab.appendChild(saladTable);
    
    return menuTab;
}

// generate test items
function generateTD(text1, text2, text3, table){
    const tr1 = $create('tr');
    const th = $create("th");
    th.setAttribute('colspan', 2);
    th.textContent = text1;
    tr1.appendChild(th);
    table.appendChild(tr1);

    for(let i = 1; i <= 4; i++){
        const tr = $create("tr");
        const name = $create('td');
        name.textContent = `${text2} ${i}`;

        const price = $create('td');
        price.textContent = `${text3} ${i}`;

        tr.appendChild(name);
        tr.appendChild(price);

        table.appendChild(tr);


// only add the HR when i < 4
// means HR will not be added after the last item
        if (i < 4) {
            const trForHrTag = $create('tr');
            const tdForHrTag = $create('td');
            tdForHrTag.setAttribute("colspan", 2);
            const hr = $create('hr');
    
            tdForHrTag.appendChild(hr);
            trForHrTag.appendChild(tdForHrTag);    
    
            table.appendChild(trForHrTag);
        }        
    }
}


// inserts the nav component BEFORE the content div
body.insertBefore(navComponent(), content);
// appends the footer to the body (currently the last element)
body.appendChild(footerComponent());
// appends one of the tabs to the content div
// will change later so that the CLICK will trigger the appending of components
// will also need to CLEAR before APPENDING
content.appendChild(menuComponent());
// content.appendChild(contactComponent());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1M7QUFDTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTyxFQUFFLEVBQUU7QUFDekM7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBDaGF0IGZyb20gXCIuL2NoYXQucG5nXCI7XHJcbmltcG9ydCBQaG9uZSBmcm9tIFwiLi9waG9uZS1jYWxsLnBuZ1wiO1xyXG5cclxuLy8gYmluZCAkIHRvIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JcclxuY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XHJcbi8vIGJpbmQgJGNyZWF0ZSB0byBjcmVhdGluZyBlbGVtZW50c1xyXG5jb25zdCAkY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcclxuLy8gZGVjbGFyZSBib2R5IHZhcmlhYmxlXHJcbmNvbnN0IGJvZHkgPSAkKCdib2R5Jyk7XHJcbi8vIGluaXRpYWxseSBzZXQgdGhlIGJvZHkncyBjbGFzc1xyXG5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHJcbi8vIGNyZWF0ZSBjb250ZW50IGRpdlxyXG5jb25zdCBjb250ZW50ID0gJGNyZWF0ZSgnZGl2Jyk7XHJcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbi8vIGFwcGVuZCB0byBib2R5IGFuZCB0aGlzIHdpbGwgY29udGFpbiBhbGwgdGhlIGNvbXBvbmVudHNcclxuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbi8vIGNyZWF0ZSBuYXZpZ2F0aW9uIGNvbXBvbmVudFxyXG5mdW5jdGlvbiBuYXZDb21wb25lbnQoKXtcclxuICAgIGNvbnN0IG5hdiA9ICRjcmVhdGUoJ25hdicpO1xyXG4gICAgY29uc3QgdWwgPSAkY3JlYXRlKCd1bCcpO1xyXG4gICAgY29uc3QgdGFicyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QgVXMnXTtcclxuICAgIFxyXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpID0gJGNyZWF0ZSgnbGknKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhYjtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG4vLyBjcmVhdGUgZm9vdGVyIGNvbXBvbmVudFxyXG5mdW5jdGlvbiBmb290ZXJDb21wb25lbnQoKXtcclxuICAgIGNvbnN0IGZvb3RlciA9ICRjcmVhdGUoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJCYWt0b2wgUmVzdGF1cmFudCBJbmMuXCI7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuLy8gaG9tZSB0YWIgY29tcG9uZW50XHJcbmZ1bmN0aW9uIGhvbWVUYWJDb21wb25lbnQoKXtcclxuICAgIGNvbnN0IGhvbWVUYWIgPSAkY3JlYXRlKCdkaXYnKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnaG9tZS10YWInKTtcclxuXHJcbiAgICBjb25zdCB0b3AgPSAkY3JlYXRlKCdkaXYnKTtcclxuICAgIHRvcC5jbGFzc0xpc3QuYWRkKCd0b3AnKTtcclxuXHJcbiAgICBjb25zdCBjb21wYW55TmFtZSA9ICRjcmVhdGUoJ2gxJyk7XHJcbiAgICBjb21wYW55TmFtZS50ZXh0Q29udGVudCA9IFwiQmFrdG9sIFJlc3RhdXJhbnRcIjtcclxuXHJcbiAgICBjb25zdCBociA9ICRjcmVhdGUoJ2hyJyk7XHJcblxyXG4gICAgY29uc3QgaGlzdG9yeSA9ICRjcmVhdGUoJ3AnKTtcclxuICAgIGhpc3RvcnkudGV4dENvbnRlbnQgPSBcIkZvdW5kZWQgaW4gMjAyMiBieSBQYXJzbGV5IGFuZCBMZXhpLiBJdCBzdGFydGVkIGFzIGEgc21hbGwgY29mZmVlIHNob3AgdGhhdCBpcyBwZXQtZnJpZW5kbHkgYW5kIGV4dGVuZGVkIGl0cyBzZXJ2aWNlcyB0byBwcm92aWRlIHRvcCB0aWVyIGRlbGljYWNpZXMgYW5kIGRpc2hlcy5cIjtcclxuICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgndGV4dC1qdXN0aWZ5Jyk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tID0gJGNyZWF0ZSgnZGl2Jyk7XHJcbiAgICBib3R0b20uY2xhc3NMaXN0LmFkZCgnYm90dG9tJyk7XHJcblxyXG4gICAgY29uc3QgdmlzaW9uID0gJGNyZWF0ZSgnaDMnKTtcclxuICAgIHZpc2lvbi50ZXh0Q29udGVudCA9IFwiVmlzaW9uXCI7XHJcblxyXG4gICAgY29uc3QgdmlzaW9uVGV4dCA9ICRjcmVhdGUoXCJwXCIpO1xyXG4gICAgdmlzaW9uVGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWp1c3RpZnknKTtcclxuICAgIHZpc2lvblRleHQudGV4dENvbnRlbnQgPSBcIkEgbGVhZGluZyA1IHN0YXIgcmVzdGF1cmFudCB0aGF0IGhhcyBzZXJ2ZWQgbWlsbGlvbnMgb2YgY3VzdG9tZXJzIHdpdGggZGVsaWNpb3VzIGFuZCBleHRyYXZhZ2FudCBkaXNoZXMuIEtub3duIHRvIG1hbnkgYXMgTWlyYWNsZS1SZXN0by5cIjtcclxuXHJcbiAgICBjb25zdCBtaXNzaW9uID0gJGNyZWF0ZSgnaDMnKTtcclxuICAgIG1pc3Npb24udGV4dENvbnRlbnQgPSBcIk1pc3Npb25cIjtcclxuXHJcbiAgICBjb25zdCBtaXNzaW9uVGV4dCA9ICRjcmVhdGUoXCJwXCIpO1xyXG4gICAgbWlzc2lvblRleHQuY2xhc3NMaXN0LmFkZCgndGV4dC1qdXN0aWZ5Jyk7XHJcbiAgICBtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9IFwiVG8gcHJvdmlkZSB3b3JsZCBjbGFzcyBzZXJ2aWNlIGFuZCBkaXNoZXMgYXQgYSBsb3cgcHJpY2UgdG8gZW5zdXJlIGV2ZXJ5b25lIGdldHMgdG8gZW5qb3kgb3VyIGZvb2RzIGFuZCBzZXJ2aWNlcy5cIjtcclxuXHJcbiAgICB0b3AuYXBwZW5kQ2hpbGQoY29tcGFueU5hbWUpO1xyXG4gICAgdG9wLmFwcGVuZENoaWxkKGhyKTtcclxuICAgIHRvcC5hcHBlbmRDaGlsZChoaXN0b3J5KTtcclxuXHJcbiAgICBib3R0b20uYXBwZW5kQ2hpbGQodmlzaW9uKTtcclxuICAgIGJvdHRvbS5hcHBlbmRDaGlsZCh2aXNpb25UZXh0KTtcclxuICAgIGJvdHRvbS5hcHBlbmRDaGlsZChtaXNzaW9uKTtcclxuICAgIGJvdHRvbS5hcHBlbmRDaGlsZChtaXNzaW9uVGV4dCk7XHJcblxyXG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZCh0b3ApO1xyXG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChib3R0b20pO1xyXG5cclxuICAgIHJldHVybiBob21lVGFiO1xyXG59XHJcblxyXG4vLyBjb250YWN0IHRhYiBjb21wb25lbnRcclxuZnVuY3Rpb24gY29udGFjdENvbXBvbmVudCgpe1xyXG4gICAgY29uc3QgY29udGFjdFRhYiA9ICRjcmVhdGUoJ2RpdicpO1xyXG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRhYicpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsVGFiID0gJGNyZWF0ZSgnZGl2Jyk7XHJcbiAgICBlbWFpbFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcblxyXG4gICAgY29uc3QgY2hhdEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNoYXRJY29uLnNyYyA9IENoYXQ7XHJcblxyXG4gICAgY29uc3QgZW1haWxDb250ZW50cyA9ICRjcmVhdGUoJ2RpdicpO1xyXG4gICAgZW1haWxDb250ZW50cy5jbGFzc0xpc3QuYWRkKCdjb250ZW50cycpO1xyXG5cclxuICAgIGNvbnN0IGgzID0gJGNyZWF0ZSgnaDMnKTtcclxuICAgIGgzLnRleHRDb250ZW50ID0gXCJDdXN0b21lciBTdXBwb3J0XCI7XHJcblxyXG4gICAgY29uc3QgcDEgPSAkY3JlYXRlKFwicFwiKTtcclxuICAgIHAxLnRleHRDb250ZW50ID0gXCJTZW5kIHVzIGFuIGVtYWlsIHdpdGggeW91ciBmZWVkYmFja3Mgb3IgYW55IHF1ZXN0aW9ucyB0aGF0IHlvdSBoYXZlLlwiO1xyXG5cclxuICAgIGNvbnN0IGJ0biA9ICRjcmVhdGUoJ2J1dHRvbicpO1xyXG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcblxyXG4gICAgY29uc3QgcGhvbmVUYWIgPSAkY3JlYXRlKFwiZGl2XCIpO1xyXG4gICAgcGhvbmVUYWIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcblxyXG4gICAgY29uc3QgY2FsbEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNhbGxJY29uLnNyYyA9IFBob25lO1xyXG5cclxuICAgIGNvbnN0IHBob25lQ29udGVudHMgPSAkY3JlYXRlKCdkaXYnKTtcclxuICAgIHBob25lQ29udGVudHMuY2xhc3NMaXN0LmFkZCgnY29udGVudHMnKTtcclxuXHJcbiAgICBjb25zdCBoM2EgPSAkY3JlYXRlKFwiaDNcIik7XHJcbiAgICBoM2EudGV4dENvbnRlbnQgPSBcIlRhbGsgdG8gdXNcIjtcclxuXHJcbiAgICBjb25zdCBwMiA9ICRjcmVhdGUoJ3AnKTtcclxuICAgIHAyLnRleHRDb250ZW50ID0gXCJDYWxsIHVzIHRvIGdldCBmYXN0ZXIgYXNzaXN0YW5jZS5cIjtcclxuXHJcbiAgICBjb25zdCBwMyA9ICRjcmVhdGUoJ3AnKTtcclxuICAgIHAzLnRleHRDb250ZW50ID0gXCIrNjMtOTk5LTk5OS05OTk5XCI7XHJcblxyXG4gICAgY29udGFjdFRhYi5hcHBlbmRDaGlsZChlbWFpbFRhYik7XHJcbiAgICBjb250YWN0VGFiLmFwcGVuZENoaWxkKHBob25lVGFiKTtcclxuXHJcbiAgICBlbWFpbFRhYi5hcHBlbmRDaGlsZChjaGF0SWNvbik7XHJcbiAgICBlbWFpbFRhYi5hcHBlbmRDaGlsZChlbWFpbENvbnRlbnRzKTsgICAgXHJcbiAgICBcclxuICAgIGVtYWlsQ29udGVudHMuYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgZW1haWxDb250ZW50cy5hcHBlbmRDaGlsZChwMSk7XHJcbiAgICBlbWFpbENvbnRlbnRzLmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgcGhvbmVUYWIuYXBwZW5kQ2hpbGQoY2FsbEljb24pO1xyXG4gICAgcGhvbmVUYWIuYXBwZW5kQ2hpbGQocGhvbmVDb250ZW50cyk7XHJcblxyXG4gICAgcGhvbmVDb250ZW50cy5hcHBlbmRDaGlsZChoM2EpO1xyXG4gICAgcGhvbmVDb250ZW50cy5hcHBlbmRDaGlsZChwMik7XHJcbiAgICBwaG9uZUNvbnRlbnRzLmFwcGVuZENoaWxkKHAzKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFjdFRhYjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpe1xyXG4gICAgY29uc3QgbWVudVRhYiA9ICRjcmVhdGUoXCJkaXZcIik7XHJcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRhYlwiKTtcclxuXHJcbiAgICBjb25zdCBjb2ZmZWVUYWJsZSA9ICRjcmVhdGUoJ3RhYmxlJyk7XHJcbiAgICBjb25zdCBzYWxhZFRhYmxlID0gJGNyZWF0ZSgndGFibGUnKTtcclxuXHJcbiAgICBnZW5lcmF0ZVREKCdDb2ZmZWUnLCAnQ29mZmVlJywgJ1ByaWNlJywgY29mZmVlVGFibGUpO1xyXG4gICAgZ2VuZXJhdGVURCgnU2FsYWQnLCAnU2FsYWQnLCAnUHJpY2UnLCBzYWxhZFRhYmxlKTtcclxuXHJcbiAgICBtZW51VGFiLmFwcGVuZENoaWxkKGNvZmZlZVRhYmxlKTtcclxuICAgIG1lbnVUYWIuYXBwZW5kQ2hpbGQoc2FsYWRUYWJsZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBtZW51VGFiO1xyXG59XHJcblxyXG4vLyBnZW5lcmF0ZSB0ZXN0IGl0ZW1zXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVEQodGV4dDEsIHRleHQyLCB0ZXh0MywgdGFibGUpe1xyXG4gICAgY29uc3QgdHIxID0gJGNyZWF0ZSgndHInKTtcclxuICAgIGNvbnN0IHRoID0gJGNyZWF0ZShcInRoXCIpO1xyXG4gICAgdGguc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgMik7XHJcbiAgICB0aC50ZXh0Q29udGVudCA9IHRleHQxO1xyXG4gICAgdHIxLmFwcGVuZENoaWxkKHRoKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyMSk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSA0OyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHRyID0gJGNyZWF0ZShcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAkY3JlYXRlKCd0ZCcpO1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHt0ZXh0Mn0gJHtpfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaWNlID0gJGNyZWF0ZSgndGQnKTtcclxuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGAke3RleHQzfSAke2l9YDtcclxuXHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG5cclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XHJcblxyXG5cclxuLy8gb25seSBhZGQgdGhlIEhSIHdoZW4gaSA8IDRcclxuLy8gbWVhbnMgSFIgd2lsbCBub3QgYmUgYWRkZWQgYWZ0ZXIgdGhlIGxhc3QgaXRlbVxyXG4gICAgICAgIGlmIChpIDwgNCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ckZvckhyVGFnID0gJGNyZWF0ZSgndHInKTtcclxuICAgICAgICAgICAgY29uc3QgdGRGb3JIclRhZyA9ICRjcmVhdGUoJ3RkJyk7XHJcbiAgICAgICAgICAgIHRkRm9ySHJUYWcuc2V0QXR0cmlidXRlKFwiY29sc3BhblwiLCAyKTtcclxuICAgICAgICAgICAgY29uc3QgaHIgPSAkY3JlYXRlKCdocicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRkRm9ySHJUYWcuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgICAgICAgICB0ckZvckhyVGFnLmFwcGVuZENoaWxkKHRkRm9ySHJUYWcpOyAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0ckZvckhyVGFnKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGluc2VydHMgdGhlIG5hdiBjb21wb25lbnQgQkVGT1JFIHRoZSBjb250ZW50IGRpdlxyXG5ib2R5Lmluc2VydEJlZm9yZShuYXZDb21wb25lbnQoKSwgY29udGVudCk7XHJcbi8vIGFwcGVuZHMgdGhlIGZvb3RlciB0byB0aGUgYm9keSAoY3VycmVudGx5IHRoZSBsYXN0IGVsZW1lbnQpXHJcbmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyQ29tcG9uZW50KCkpO1xyXG4vLyBhcHBlbmRzIG9uZSBvZiB0aGUgdGFicyB0byB0aGUgY29udGVudCBkaXZcclxuLy8gd2lsbCBjaGFuZ2UgbGF0ZXIgc28gdGhhdCB0aGUgQ0xJQ0sgd2lsbCB0cmlnZ2VyIHRoZSBhcHBlbmRpbmcgb2YgY29tcG9uZW50c1xyXG4vLyB3aWxsIGFsc28gbmVlZCB0byBDTEVBUiBiZWZvcmUgQVBQRU5ESU5HXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbXBvbmVudCgpKTtcclxuLy8gY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==