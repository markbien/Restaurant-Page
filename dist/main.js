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




const pageComponents = (() => {
  const $ = document.querySelector.bind(document);
  const $create = document.createElement.bind(document);
  const body = $("body");
  const content = $create("div");
  content.setAttribute("id", "content");
  body.appendChild(content);

  function navComponent() {
    const nav = $create("nav");
    const ul = $create("ul");
    const tabs = ["Home", "Menu", "Contact Us"];

    nav.appendChild(ul);
    tabs.forEach((tab) => {
      const li = $create("li");
      li.textContent = tab;
      attachEvent(li);
      ul.appendChild(li);
    });
    return nav;
  }

  function footerComponent() {
    const footer = $create("footer");
    footer.textContent = "Baktol Restaurant Inc.";

    return footer;
  }

  function homeTabComponent() {
    clearTab();
    const homeTab = $create("div");
    homeTab.classList.add("home-tab");
    body.classList.add("home");

    const top = $create("div");
    top.classList.add("top");

    const companyName = $create("h1");
    companyName.textContent = "Baktol Restaurant";

    const hr = $create("hr");

    const history = $create("p");
    history.textContent =
      "Founded in 2022 by Parsley and Lexi. It started as a small coffee shop that is pet-friendly and extended its services to provide top tier delicacies and dishes.";
    history.classList.add("text-justify");

    const bottom = $create("div");
    bottom.classList.add("bottom");

    const vision = $create("h3");
    vision.textContent = "Vision";

    const visionText = $create("p");
    visionText.classList.add("text-justify");
    visionText.textContent =
      "A leading 5 star restaurant that has served millions of customers with delicious and extravagant dishes. Known to many as Miracle-Resto.";

    const mission = $create("h3");
    mission.textContent = "Mission";

    const missionText = $create("p");
    missionText.classList.add("text-justify");
    missionText.textContent =
      "To provide world class service and dishes at a low price to ensure everyone gets to enjoy our foods and services.";

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

  function contactComponent() {
    clearTab();
    body.classList.add("contact-us");

    const contactTab = $create("div");
    contactTab.classList.add("contact-tab");

    const emailTab = $create("div");
    emailTab.classList.add("contact");

    const emailContents = $create("div");
    emailContents.classList.add("contents");

    const h3 = $create("h3");
    h3.textContent = "Customer Support";

    const p1 = $create("p");
    p1.textContent =
      "Send us an email with your feedbacks or any questions that you have.";

    const btn = $create("button");
    btn.textContent = "Contact Us";

    const phoneTab = $create("div");
    phoneTab.classList.add("contact");

    const phoneContents = $create("div");
    phoneContents.classList.add("contents");

    const h3a = $create("h3");
    h3a.textContent = "Talk to us";

    const p2 = $create("p");
    p2.textContent = "Call us to get faster assistance.";

    const p3 = $create("p");
    p3.textContent = "+63-999-999-9999";

    contactTab.appendChild(emailTab);
    contactTab.appendChild(phoneTab);

    emailTab.appendChild(emailContents);

    emailContents.appendChild(h3);
    emailContents.appendChild(p1);
    emailContents.appendChild(btn);

    phoneTab.appendChild(phoneContents);

    phoneContents.appendChild(h3a);
    phoneContents.appendChild(p2);
    phoneContents.appendChild(p3);

    return contactTab;
  }

  function menuComponent() {
    clearTab();
    body.classList.add("menu");

    const menuTab = $create("div");
    menuTab.classList.add("menu-tab");

    const coffeeTable = $create("table");
    const saladTable = $create("table");

    generateTD("Coffee", "Coffee", "Price", coffeeTable);
    generateTD("Salad", "Salad", "Price", saladTable);

    menuTab.appendChild(coffeeTable);
    menuTab.appendChild(saladTable);

    return menuTab;
  }

  // generate test items
  function generateTD(text1, text2, text3, table) {
    const tr1 = $create("tr");
    const th = $create("th");
    th.setAttribute("colspan", 2);
    th.textContent = text1;
    tr1.appendChild(th);
    table.appendChild(tr1);

    for (let i = 1; i <= 4; i++) {
      const tr = $create("tr");
      const name = $create("td");
      name.textContent = `${text2} ${i}`;

      const price = $create("td");
      price.textContent = `${text3} ${i}`;

      tr.appendChild(name);
      tr.appendChild(price);

      table.appendChild(tr);

      // only add the HR when i < 4
      // means HR will not be added after the last item
      if (i < 4) {
        const trForHrTag = $create("tr");
        const tdForHrTag = $create("td");
        tdForHrTag.setAttribute("colspan", 2);
        const hr = $create("hr");

        tdForHrTag.appendChild(hr);
        trForHrTag.appendChild(tdForHrTag);

        table.appendChild(trForHrTag);
      }
    }
  }

  function initializeHeadFoot() {
    body.insertBefore(navComponent(), content);
    body.appendChild(footerComponent());
  }

  // initially set the home page as default
  function setHomeAsDefault() {
    content.appendChild(homeTabComponent());
  }

  function attachEvent(elem) {
    if (elem.textContent === "Home") {
      elem.addEventListener("click", function () {
        content.appendChild(homeTabComponent());
      });
    } else if (elem.textContent === "Menu") {
      elem.addEventListener("click", function () {
        content.appendChild(menuComponent());
      });
    } else {
      elem.addEventListener("click", function () {
        content.appendChild(contactComponent());
      });
    }
  }

  function clearTab() {
    content.innerHTML = "";
  }

  return {
    initializeHeadFoot,
    setHomeAsDefault,
  };
})();

const pageLoader = (() => {
  // default page to load the header and footer
  pageComponents.initializeHeadFoot();

  //   initialize home
  pageComponents.setHomeAsDefault();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1M7QUFDTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTyxFQUFFLEVBQUU7QUFDdkM7QUFDQTtBQUNBLDZCQUE2QixPQUFPLEVBQUUsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4vY2hhdC5wbmdcIjtcclxuaW1wb3J0IFBob25lIGZyb20gXCIuL3Bob25lLWNhbGwucG5nXCI7XHJcblxyXG5jb25zdCBwYWdlQ29tcG9uZW50cyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XHJcbiAgY29uc3QgJGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuYmluZChkb2N1bWVudCk7XHJcbiAgY29uc3QgYm9keSA9ICQoXCJib2R5XCIpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSAkY3JlYXRlKFwiZGl2XCIpO1xyXG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG4gIGZ1bmN0aW9uIG5hdkNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IG5hdiA9ICRjcmVhdGUoXCJuYXZcIik7XHJcbiAgICBjb25zdCB1bCA9ICRjcmVhdGUoXCJ1bFwiKTtcclxuICAgIGNvbnN0IHRhYnMgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3QgVXNcIl07XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpID0gJGNyZWF0ZShcImxpXCIpO1xyXG4gICAgICBsaS50ZXh0Q29udGVudCA9IHRhYjtcclxuICAgICAgYXR0YWNoRXZlbnQobGkpO1xyXG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuYXY7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmb290ZXJDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBmb290ZXIgPSAkY3JlYXRlKFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJCYWt0b2wgUmVzdGF1cmFudCBJbmMuXCI7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhvbWVUYWJDb21wb25lbnQoKSB7XHJcbiAgICBjbGVhclRhYigpO1xyXG4gICAgY29uc3QgaG9tZVRhYiA9ICRjcmVhdGUoXCJkaXZcIik7XHJcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoXCJob21lLXRhYlwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcblxyXG4gICAgY29uc3QgdG9wID0gJGNyZWF0ZShcImRpdlwiKTtcclxuICAgIHRvcC5jbGFzc0xpc3QuYWRkKFwidG9wXCIpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhbnlOYW1lID0gJGNyZWF0ZShcImgxXCIpO1xyXG4gICAgY29tcGFueU5hbWUudGV4dENvbnRlbnQgPSBcIkJha3RvbCBSZXN0YXVyYW50XCI7XHJcblxyXG4gICAgY29uc3QgaHIgPSAkY3JlYXRlKFwiaHJcIik7XHJcblxyXG4gICAgY29uc3QgaGlzdG9yeSA9ICRjcmVhdGUoXCJwXCIpO1xyXG4gICAgaGlzdG9yeS50ZXh0Q29udGVudCA9XHJcbiAgICAgIFwiRm91bmRlZCBpbiAyMDIyIGJ5IFBhcnNsZXkgYW5kIExleGkuIEl0IHN0YXJ0ZWQgYXMgYSBzbWFsbCBjb2ZmZWUgc2hvcCB0aGF0IGlzIHBldC1mcmllbmRseSBhbmQgZXh0ZW5kZWQgaXRzIHNlcnZpY2VzIHRvIHByb3ZpZGUgdG9wIHRpZXIgZGVsaWNhY2llcyBhbmQgZGlzaGVzLlwiO1xyXG4gICAgaGlzdG9yeS5jbGFzc0xpc3QuYWRkKFwidGV4dC1qdXN0aWZ5XCIpO1xyXG5cclxuICAgIGNvbnN0IGJvdHRvbSA9ICRjcmVhdGUoXCJkaXZcIik7XHJcbiAgICBib3R0b20uY2xhc3NMaXN0LmFkZChcImJvdHRvbVwiKTtcclxuXHJcbiAgICBjb25zdCB2aXNpb24gPSAkY3JlYXRlKFwiaDNcIik7XHJcbiAgICB2aXNpb24udGV4dENvbnRlbnQgPSBcIlZpc2lvblwiO1xyXG5cclxuICAgIGNvbnN0IHZpc2lvblRleHQgPSAkY3JlYXRlKFwicFwiKTtcclxuICAgIHZpc2lvblRleHQuY2xhc3NMaXN0LmFkZChcInRleHQtanVzdGlmeVwiKTtcclxuICAgIHZpc2lvblRleHQudGV4dENvbnRlbnQgPVxyXG4gICAgICBcIkEgbGVhZGluZyA1IHN0YXIgcmVzdGF1cmFudCB0aGF0IGhhcyBzZXJ2ZWQgbWlsbGlvbnMgb2YgY3VzdG9tZXJzIHdpdGggZGVsaWNpb3VzIGFuZCBleHRyYXZhZ2FudCBkaXNoZXMuIEtub3duIHRvIG1hbnkgYXMgTWlyYWNsZS1SZXN0by5cIjtcclxuXHJcbiAgICBjb25zdCBtaXNzaW9uID0gJGNyZWF0ZShcImgzXCIpO1xyXG4gICAgbWlzc2lvbi50ZXh0Q29udGVudCA9IFwiTWlzc2lvblwiO1xyXG5cclxuICAgIGNvbnN0IG1pc3Npb25UZXh0ID0gJGNyZWF0ZShcInBcIik7XHJcbiAgICBtaXNzaW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dC1qdXN0aWZ5XCIpO1xyXG4gICAgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPVxyXG4gICAgICBcIlRvIHByb3ZpZGUgd29ybGQgY2xhc3Mgc2VydmljZSBhbmQgZGlzaGVzIGF0IGEgbG93IHByaWNlIHRvIGVuc3VyZSBldmVyeW9uZSBnZXRzIHRvIGVuam95IG91ciBmb29kcyBhbmQgc2VydmljZXMuXCI7XHJcblxyXG4gICAgdG9wLmFwcGVuZENoaWxkKGNvbXBhbnlOYW1lKTtcclxuICAgIHRvcC5hcHBlbmRDaGlsZChocik7XHJcbiAgICB0b3AuYXBwZW5kQ2hpbGQoaGlzdG9yeSk7XHJcblxyXG4gICAgYm90dG9tLmFwcGVuZENoaWxkKHZpc2lvbik7XHJcbiAgICBib3R0b20uYXBwZW5kQ2hpbGQodmlzaW9uVGV4dCk7XHJcbiAgICBib3R0b20uYXBwZW5kQ2hpbGQobWlzc2lvbik7XHJcbiAgICBib3R0b20uYXBwZW5kQ2hpbGQobWlzc2lvblRleHQpO1xyXG5cclxuICAgIGhvbWVUYWIuYXBwZW5kQ2hpbGQodG9wKTtcclxuICAgIGhvbWVUYWIuYXBwZW5kQ2hpbGQoYm90dG9tKTtcclxuXHJcbiAgICByZXR1cm4gaG9tZVRhYjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbnRhY3RDb21wb25lbnQoKSB7XHJcbiAgICBjbGVhclRhYigpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC11c1wiKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0VGFiID0gJGNyZWF0ZShcImRpdlwiKTtcclxuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGFiXCIpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsVGFiID0gJGNyZWF0ZShcImRpdlwiKTtcclxuICAgIGVtYWlsVGFiLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsQ29udGVudHMgPSAkY3JlYXRlKFwiZGl2XCIpO1xyXG4gICAgZW1haWxDb250ZW50cy5jbGFzc0xpc3QuYWRkKFwiY29udGVudHNcIik7XHJcblxyXG4gICAgY29uc3QgaDMgPSAkY3JlYXRlKFwiaDNcIik7XHJcbiAgICBoMy50ZXh0Q29udGVudCA9IFwiQ3VzdG9tZXIgU3VwcG9ydFwiO1xyXG5cclxuICAgIGNvbnN0IHAxID0gJGNyZWF0ZShcInBcIik7XHJcbiAgICBwMS50ZXh0Q29udGVudCA9XHJcbiAgICAgIFwiU2VuZCB1cyBhbiBlbWFpbCB3aXRoIHlvdXIgZmVlZGJhY2tzIG9yIGFueSBxdWVzdGlvbnMgdGhhdCB5b3UgaGF2ZS5cIjtcclxuXHJcbiAgICBjb25zdCBidG4gPSAkY3JlYXRlKFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcblxyXG4gICAgY29uc3QgcGhvbmVUYWIgPSAkY3JlYXRlKFwiZGl2XCIpO1xyXG4gICAgcGhvbmVUYWIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcblxyXG4gICAgY29uc3QgcGhvbmVDb250ZW50cyA9ICRjcmVhdGUoXCJkaXZcIik7XHJcbiAgICBwaG9uZUNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50c1wiKTtcclxuXHJcbiAgICBjb25zdCBoM2EgPSAkY3JlYXRlKFwiaDNcIik7XHJcbiAgICBoM2EudGV4dENvbnRlbnQgPSBcIlRhbGsgdG8gdXNcIjtcclxuXHJcbiAgICBjb25zdCBwMiA9ICRjcmVhdGUoXCJwXCIpO1xyXG4gICAgcDIudGV4dENvbnRlbnQgPSBcIkNhbGwgdXMgdG8gZ2V0IGZhc3RlciBhc3Npc3RhbmNlLlwiO1xyXG5cclxuICAgIGNvbnN0IHAzID0gJGNyZWF0ZShcInBcIik7XHJcbiAgICBwMy50ZXh0Q29udGVudCA9IFwiKzYzLTk5OS05OTktOTk5OVwiO1xyXG5cclxuICAgIGNvbnRhY3RUYWIuYXBwZW5kQ2hpbGQoZW1haWxUYWIpO1xyXG4gICAgY29udGFjdFRhYi5hcHBlbmRDaGlsZChwaG9uZVRhYik7XHJcblxyXG4gICAgZW1haWxUYWIuYXBwZW5kQ2hpbGQoZW1haWxDb250ZW50cyk7XHJcblxyXG4gICAgZW1haWxDb250ZW50cy5hcHBlbmRDaGlsZChoMyk7XHJcbiAgICBlbWFpbENvbnRlbnRzLmFwcGVuZENoaWxkKHAxKTtcclxuICAgIGVtYWlsQ29udGVudHMuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICBwaG9uZVRhYi5hcHBlbmRDaGlsZChwaG9uZUNvbnRlbnRzKTtcclxuXHJcbiAgICBwaG9uZUNvbnRlbnRzLmFwcGVuZENoaWxkKGgzYSk7XHJcbiAgICBwaG9uZUNvbnRlbnRzLmFwcGVuZENoaWxkKHAyKTtcclxuICAgIHBob25lQ29udGVudHMuYXBwZW5kQ2hpbGQocDMpO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0VGFiO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpIHtcclxuICAgIGNsZWFyVGFiKCk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVUYWIgPSAkY3JlYXRlKFwiZGl2XCIpO1xyXG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKFwibWVudS10YWJcIik7XHJcblxyXG4gICAgY29uc3QgY29mZmVlVGFibGUgPSAkY3JlYXRlKFwidGFibGVcIik7XHJcbiAgICBjb25zdCBzYWxhZFRhYmxlID0gJGNyZWF0ZShcInRhYmxlXCIpO1xyXG5cclxuICAgIGdlbmVyYXRlVEQoXCJDb2ZmZWVcIiwgXCJDb2ZmZWVcIiwgXCJQcmljZVwiLCBjb2ZmZWVUYWJsZSk7XHJcbiAgICBnZW5lcmF0ZVREKFwiU2FsYWRcIiwgXCJTYWxhZFwiLCBcIlByaWNlXCIsIHNhbGFkVGFibGUpO1xyXG5cclxuICAgIG1lbnVUYWIuYXBwZW5kQ2hpbGQoY29mZmVlVGFibGUpO1xyXG4gICAgbWVudVRhYi5hcHBlbmRDaGlsZChzYWxhZFRhYmxlKTtcclxuXHJcbiAgICByZXR1cm4gbWVudVRhYjtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIHRlc3QgaXRlbXNcclxuICBmdW5jdGlvbiBnZW5lcmF0ZVREKHRleHQxLCB0ZXh0MiwgdGV4dDMsIHRhYmxlKSB7XHJcbiAgICBjb25zdCB0cjEgPSAkY3JlYXRlKFwidHJcIik7XHJcbiAgICBjb25zdCB0aCA9ICRjcmVhdGUoXCJ0aFwiKTtcclxuICAgIHRoLnNldEF0dHJpYnV0ZShcImNvbHNwYW5cIiwgMik7XHJcbiAgICB0aC50ZXh0Q29udGVudCA9IHRleHQxO1xyXG4gICAgdHIxLmFwcGVuZENoaWxkKHRoKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyMSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRyID0gJGNyZWF0ZShcInRyXCIpO1xyXG4gICAgICBjb25zdCBuYW1lID0gJGNyZWF0ZShcInRkXCIpO1xyXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7dGV4dDJ9ICR7aX1gO1xyXG5cclxuICAgICAgY29uc3QgcHJpY2UgPSAkY3JlYXRlKFwidGRcIik7XHJcbiAgICAgIHByaWNlLnRleHRDb250ZW50ID0gYCR7dGV4dDN9ICR7aX1gO1xyXG5cclxuICAgICAgdHIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHByaWNlKTtcclxuXHJcbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcclxuXHJcbiAgICAgIC8vIG9ubHkgYWRkIHRoZSBIUiB3aGVuIGkgPCA0XHJcbiAgICAgIC8vIG1lYW5zIEhSIHdpbGwgbm90IGJlIGFkZGVkIGFmdGVyIHRoZSBsYXN0IGl0ZW1cclxuICAgICAgaWYgKGkgPCA0KSB7XHJcbiAgICAgICAgY29uc3QgdHJGb3JIclRhZyA9ICRjcmVhdGUoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCB0ZEZvckhyVGFnID0gJGNyZWF0ZShcInRkXCIpO1xyXG4gICAgICAgIHRkRm9ySHJUYWcuc2V0QXR0cmlidXRlKFwiY29sc3BhblwiLCAyKTtcclxuICAgICAgICBjb25zdCBociA9ICRjcmVhdGUoXCJoclwiKTtcclxuXHJcbiAgICAgICAgdGRGb3JIclRhZy5hcHBlbmRDaGlsZChocik7XHJcbiAgICAgICAgdHJGb3JIclRhZy5hcHBlbmRDaGlsZCh0ZEZvckhyVGFnKTtcclxuXHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHJGb3JIclRhZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVIZWFkRm9vdCgpIHtcclxuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKG5hdkNvbXBvbmVudCgpLCBjb250ZW50KTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyQ29tcG9uZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdGlhbGx5IHNldCB0aGUgaG9tZSBwYWdlIGFzIGRlZmF1bHRcclxuICBmdW5jdGlvbiBzZXRIb21lQXNEZWZhdWx0KCkge1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lVGFiQ29tcG9uZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZWxlbSkge1xyXG4gICAgaWYgKGVsZW0udGV4dENvbnRlbnQgPT09IFwiSG9tZVwiKSB7XHJcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVUYWJDb21wb25lbnQoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtLnRleHRDb250ZW50ID09PSBcIk1lbnVcIikge1xyXG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29tcG9uZW50KCkpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb21wb25lbnQoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJUYWIoKSB7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdGlhbGl6ZUhlYWRGb290LFxyXG4gICAgc2V0SG9tZUFzRGVmYXVsdCxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgcGFnZUxvYWRlciA9ICgoKSA9PiB7XHJcbiAgLy8gZGVmYXVsdCBwYWdlIHRvIGxvYWQgdGhlIGhlYWRlciBhbmQgZm9vdGVyXHJcbiAgcGFnZUNvbXBvbmVudHMuaW5pdGlhbGl6ZUhlYWRGb290KCk7XHJcblxyXG4gIC8vICAgaW5pdGlhbGl6ZSBob21lXHJcbiAgcGFnZUNvbXBvbmVudHMuc2V0SG9tZUFzRGVmYXVsdCgpO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=