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

    const chatIcon = new Image();
    chatIcon.src = _chat_png__WEBPACK_IMPORTED_MODULE_1__;

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

    const callIcon = new Image();
    callIcon.src = _phone_call_png__WEBPACK_IMPORTED_MODULE_2__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCIuL2NoYXQucG5nXCI7XHJcbmltcG9ydCBQaG9uZSBmcm9tIFwiLi9waG9uZS1jYWxsLnBuZ1wiO1xyXG5cclxuY29uc3QgcGFnZUNvbXBvbmVudHMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xyXG4gIGNvbnN0ICRjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpO1xyXG4gIGNvbnN0IGJvZHkgPSAkKFwiYm9keVwiKTtcclxuICBjb25zdCBjb250ZW50ID0gJGNyZWF0ZShcImRpdlwiKTtcclxuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICBmdW5jdGlvbiBuYXZDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBuYXYgPSAkY3JlYXRlKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdWwgPSAkY3JlYXRlKFwidWxcIik7XHJcbiAgICBjb25zdCB0YWJzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0IFVzXCJdO1xyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgICBjb25zdCBsaSA9ICRjcmVhdGUoXCJsaVwiKTtcclxuICAgICAgbGkudGV4dENvbnRlbnQgPSB0YWI7XHJcbiAgICAgIGF0dGFjaEV2ZW50KGxpKTtcclxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm9vdGVyQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gJGNyZWF0ZShcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiQmFrdG9sIFJlc3RhdXJhbnQgSW5jLlwiO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBob21lVGFiQ29tcG9uZW50KCkge1xyXG4gICAgY2xlYXJUYWIoKTtcclxuICAgIGNvbnN0IGhvbWVUYWIgPSAkY3JlYXRlKFwiZGl2XCIpO1xyXG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwiaG9tZS10YWJcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG5cclxuICAgIGNvbnN0IHRvcCA9ICRjcmVhdGUoXCJkaXZcIik7XHJcbiAgICB0b3AuY2xhc3NMaXN0LmFkZChcInRvcFwiKTtcclxuXHJcbiAgICBjb25zdCBjb21wYW55TmFtZSA9ICRjcmVhdGUoXCJoMVwiKTtcclxuICAgIGNvbXBhbnlOYW1lLnRleHRDb250ZW50ID0gXCJCYWt0b2wgUmVzdGF1cmFudFwiO1xyXG5cclxuICAgIGNvbnN0IGhyID0gJGNyZWF0ZShcImhyXCIpO1xyXG5cclxuICAgIGNvbnN0IGhpc3RvcnkgPSAkY3JlYXRlKFwicFwiKTtcclxuICAgIGhpc3RvcnkudGV4dENvbnRlbnQgPVxyXG4gICAgICBcIkZvdW5kZWQgaW4gMjAyMiBieSBQYXJzbGV5IGFuZCBMZXhpLiBJdCBzdGFydGVkIGFzIGEgc21hbGwgY29mZmVlIHNob3AgdGhhdCBpcyBwZXQtZnJpZW5kbHkgYW5kIGV4dGVuZGVkIGl0cyBzZXJ2aWNlcyB0byBwcm92aWRlIHRvcCB0aWVyIGRlbGljYWNpZXMgYW5kIGRpc2hlcy5cIjtcclxuICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZChcInRleHQtanVzdGlmeVwiKTtcclxuXHJcbiAgICBjb25zdCBib3R0b20gPSAkY3JlYXRlKFwiZGl2XCIpO1xyXG4gICAgYm90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b21cIik7XHJcblxyXG4gICAgY29uc3QgdmlzaW9uID0gJGNyZWF0ZShcImgzXCIpO1xyXG4gICAgdmlzaW9uLnRleHRDb250ZW50ID0gXCJWaXNpb25cIjtcclxuXHJcbiAgICBjb25zdCB2aXNpb25UZXh0ID0gJGNyZWF0ZShcInBcIik7XHJcbiAgICB2aXNpb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWp1c3RpZnlcIik7XHJcbiAgICB2aXNpb25UZXh0LnRleHRDb250ZW50ID1cclxuICAgICAgXCJBIGxlYWRpbmcgNSBzdGFyIHJlc3RhdXJhbnQgdGhhdCBoYXMgc2VydmVkIG1pbGxpb25zIG9mIGN1c3RvbWVycyB3aXRoIGRlbGljaW91cyBhbmQgZXh0cmF2YWdhbnQgZGlzaGVzLiBLbm93biB0byBtYW55IGFzIE1pcmFjbGUtUmVzdG8uXCI7XHJcblxyXG4gICAgY29uc3QgbWlzc2lvbiA9ICRjcmVhdGUoXCJoM1wiKTtcclxuICAgIG1pc3Npb24udGV4dENvbnRlbnQgPSBcIk1pc3Npb25cIjtcclxuXHJcbiAgICBjb25zdCBtaXNzaW9uVGV4dCA9ICRjcmVhdGUoXCJwXCIpO1xyXG4gICAgbWlzc2lvblRleHQuY2xhc3NMaXN0LmFkZChcInRleHQtanVzdGlmeVwiKTtcclxuICAgIG1pc3Npb25UZXh0LnRleHRDb250ZW50ID1cclxuICAgICAgXCJUbyBwcm92aWRlIHdvcmxkIGNsYXNzIHNlcnZpY2UgYW5kIGRpc2hlcyBhdCBhIGxvdyBwcmljZSB0byBlbnN1cmUgZXZlcnlvbmUgZ2V0cyB0byBlbmpveSBvdXIgZm9vZHMgYW5kIHNlcnZpY2VzLlwiO1xyXG5cclxuICAgIHRvcC5hcHBlbmRDaGlsZChjb21wYW55TmFtZSk7XHJcbiAgICB0b3AuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgdG9wLmFwcGVuZENoaWxkKGhpc3RvcnkpO1xyXG5cclxuICAgIGJvdHRvbS5hcHBlbmRDaGlsZCh2aXNpb24pO1xyXG4gICAgYm90dG9tLmFwcGVuZENoaWxkKHZpc2lvblRleHQpO1xyXG4gICAgYm90dG9tLmFwcGVuZENoaWxkKG1pc3Npb24pO1xyXG4gICAgYm90dG9tLmFwcGVuZENoaWxkKG1pc3Npb25UZXh0KTtcclxuXHJcbiAgICBob21lVGFiLmFwcGVuZENoaWxkKHRvcCk7XHJcbiAgICBob21lVGFiLmFwcGVuZENoaWxkKGJvdHRvbSk7XHJcblxyXG4gICAgcmV0dXJuIGhvbWVUYWI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb250YWN0Q29tcG9uZW50KCkge1xyXG4gICAgY2xlYXJUYWIoKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdXNcIik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdFRhYiA9ICRjcmVhdGUoXCJkaXZcIik7XHJcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRhYlwiKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbFRhYiA9ICRjcmVhdGUoXCJkaXZcIik7XHJcbiAgICBlbWFpbFRhYi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgICBjb25zdCBjaGF0SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2hhdEljb24uc3JjID0gQ2hhdDtcclxuXHJcbiAgICBjb25zdCBlbWFpbENvbnRlbnRzID0gJGNyZWF0ZShcImRpdlwiKTtcclxuICAgIGVtYWlsQ29udGVudHMuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRzXCIpO1xyXG5cclxuICAgIGNvbnN0IGgzID0gJGNyZWF0ZShcImgzXCIpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSBcIkN1c3RvbWVyIFN1cHBvcnRcIjtcclxuXHJcbiAgICBjb25zdCBwMSA9ICRjcmVhdGUoXCJwXCIpO1xyXG4gICAgcDEudGV4dENvbnRlbnQgPVxyXG4gICAgICBcIlNlbmQgdXMgYW4gZW1haWwgd2l0aCB5b3VyIGZlZWRiYWNrcyBvciBhbnkgcXVlc3Rpb25zIHRoYXQgeW91IGhhdmUuXCI7XHJcblxyXG4gICAgY29uc3QgYnRuID0gJGNyZWF0ZShcImJ1dHRvblwiKTtcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xyXG5cclxuICAgIGNvbnN0IHBob25lVGFiID0gJGNyZWF0ZShcImRpdlwiKTtcclxuICAgIHBob25lVGFiLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5cclxuICAgIGNvbnN0IGNhbGxJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjYWxsSWNvbi5zcmMgPSBQaG9uZTtcclxuXHJcbiAgICBjb25zdCBwaG9uZUNvbnRlbnRzID0gJGNyZWF0ZShcImRpdlwiKTtcclxuICAgIHBob25lQ29udGVudHMuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRzXCIpO1xyXG5cclxuICAgIGNvbnN0IGgzYSA9ICRjcmVhdGUoXCJoM1wiKTtcclxuICAgIGgzYS50ZXh0Q29udGVudCA9IFwiVGFsayB0byB1c1wiO1xyXG5cclxuICAgIGNvbnN0IHAyID0gJGNyZWF0ZShcInBcIik7XHJcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiQ2FsbCB1cyB0byBnZXQgZmFzdGVyIGFzc2lzdGFuY2UuXCI7XHJcblxyXG4gICAgY29uc3QgcDMgPSAkY3JlYXRlKFwicFwiKTtcclxuICAgIHAzLnRleHRDb250ZW50ID0gXCIrNjMtOTk5LTk5OS05OTk5XCI7XHJcblxyXG4gICAgY29udGFjdFRhYi5hcHBlbmRDaGlsZChlbWFpbFRhYik7XHJcbiAgICBjb250YWN0VGFiLmFwcGVuZENoaWxkKHBob25lVGFiKTtcclxuXHJcbiAgICBlbWFpbFRhYi5hcHBlbmRDaGlsZChjaGF0SWNvbik7XHJcbiAgICBlbWFpbFRhYi5hcHBlbmRDaGlsZChlbWFpbENvbnRlbnRzKTtcclxuXHJcbiAgICBlbWFpbENvbnRlbnRzLmFwcGVuZENoaWxkKGgzKTtcclxuICAgIGVtYWlsQ29udGVudHMuYXBwZW5kQ2hpbGQocDEpO1xyXG4gICAgZW1haWxDb250ZW50cy5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgIHBob25lVGFiLmFwcGVuZENoaWxkKGNhbGxJY29uKTtcclxuICAgIHBob25lVGFiLmFwcGVuZENoaWxkKHBob25lQ29udGVudHMpO1xyXG5cclxuICAgIHBob25lQ29udGVudHMuYXBwZW5kQ2hpbGQoaDNhKTtcclxuICAgIHBob25lQ29udGVudHMuYXBwZW5kQ2hpbGQocDIpO1xyXG4gICAgcGhvbmVDb250ZW50cy5hcHBlbmRDaGlsZChwMyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3RUYWI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q29tcG9uZW50KCkge1xyXG4gICAgY2xlYXJUYWIoKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcblxyXG4gICAgY29uc3QgbWVudVRhYiA9ICRjcmVhdGUoXCJkaXZcIik7XHJcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRhYlwiKTtcclxuXHJcbiAgICBjb25zdCBjb2ZmZWVUYWJsZSA9ICRjcmVhdGUoXCJ0YWJsZVwiKTtcclxuICAgIGNvbnN0IHNhbGFkVGFibGUgPSAkY3JlYXRlKFwidGFibGVcIik7XHJcblxyXG4gICAgZ2VuZXJhdGVURChcIkNvZmZlZVwiLCBcIkNvZmZlZVwiLCBcIlByaWNlXCIsIGNvZmZlZVRhYmxlKTtcclxuICAgIGdlbmVyYXRlVEQoXCJTYWxhZFwiLCBcIlNhbGFkXCIsIFwiUHJpY2VcIiwgc2FsYWRUYWJsZSk7XHJcblxyXG4gICAgbWVudVRhYi5hcHBlbmRDaGlsZChjb2ZmZWVUYWJsZSk7XHJcbiAgICBtZW51VGFiLmFwcGVuZENoaWxkKHNhbGFkVGFibGUpO1xyXG5cclxuICAgIHJldHVybiBtZW51VGFiO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2VuZXJhdGUgdGVzdCBpdGVtc1xyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlVEQodGV4dDEsIHRleHQyLCB0ZXh0MywgdGFibGUpIHtcclxuICAgIGNvbnN0IHRyMSA9ICRjcmVhdGUoXCJ0clwiKTtcclxuICAgIGNvbnN0IHRoID0gJGNyZWF0ZShcInRoXCIpO1xyXG4gICAgdGguc2V0QXR0cmlidXRlKFwiY29sc3BhblwiLCAyKTtcclxuICAgIHRoLnRleHRDb250ZW50ID0gdGV4dDE7XHJcbiAgICB0cjEuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodHIxKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgY29uc3QgdHIgPSAkY3JlYXRlKFwidHJcIik7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSAkY3JlYXRlKFwidGRcIik7XHJcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHt0ZXh0Mn0gJHtpfWA7XHJcblxyXG4gICAgICBjb25zdCBwcmljZSA9ICRjcmVhdGUoXCJ0ZFwiKTtcclxuICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBgJHt0ZXh0M30gJHtpfWA7XHJcblxyXG4gICAgICB0ci5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG5cclxuICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgLy8gb25seSBhZGQgdGhlIEhSIHdoZW4gaSA8IDRcclxuICAgICAgLy8gbWVhbnMgSFIgd2lsbCBub3QgYmUgYWRkZWQgYWZ0ZXIgdGhlIGxhc3QgaXRlbVxyXG4gICAgICBpZiAoaSA8IDQpIHtcclxuICAgICAgICBjb25zdCB0ckZvckhyVGFnID0gJGNyZWF0ZShcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IHRkRm9ySHJUYWcgPSAkY3JlYXRlKFwidGRcIik7XHJcbiAgICAgICAgdGRGb3JIclRhZy5zZXRBdHRyaWJ1dGUoXCJjb2xzcGFuXCIsIDIpO1xyXG4gICAgICAgIGNvbnN0IGhyID0gJGNyZWF0ZShcImhyXCIpO1xyXG5cclxuICAgICAgICB0ZEZvckhyVGFnLmFwcGVuZENoaWxkKGhyKTtcclxuICAgICAgICB0ckZvckhyVGFnLmFwcGVuZENoaWxkKHRkRm9ySHJUYWcpO1xyXG5cclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0ckZvckhyVGFnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUhlYWRGb290KCkge1xyXG4gICAgYm9keS5pbnNlcnRCZWZvcmUobmF2Q29tcG9uZW50KCksIGNvbnRlbnQpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXJDb21wb25lbnQoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0aWFsbHkgc2V0IHRoZSBob21lIHBhZ2UgYXMgZGVmYXVsdFxyXG4gIGZ1bmN0aW9uIHNldEhvbWVBc0RlZmF1bHQoKSB7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVUYWJDb21wb25lbnQoKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdHRhY2hFdmVudChlbGVtKSB7XHJcbiAgICBpZiAoZWxlbS50ZXh0Q29udGVudCA9PT0gXCJIb21lXCIpIHtcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVRhYkNvbXBvbmVudCgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW0udGV4dENvbnRlbnQgPT09IFwiTWVudVwiKSB7XHJcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb21wb25lbnQoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbXBvbmVudCgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhclRhYigpIHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0aWFsaXplSGVhZEZvb3QsXHJcbiAgICBzZXRIb21lQXNEZWZhdWx0LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBwYWdlTG9hZGVyID0gKCgpID0+IHtcclxuICAvLyBkZWZhdWx0IHBhZ2UgdG8gbG9hZCB0aGUgaGVhZGVyIGFuZCBmb290ZXJcclxuICBwYWdlQ29tcG9uZW50cy5pbml0aWFsaXplSGVhZEZvb3QoKTtcclxuXHJcbiAgLy8gICBpbml0aWFsaXplIGhvbWVcclxuICBwYWdlQ29tcG9uZW50cy5zZXRIb21lQXNEZWZhdWx0KCk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==