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

/***/ "./utils/nav.js":
/*!**********************!*\
  !*** ./utils/nav.js ***!
  \**********************/
/***/ (() => {

eval("var Nav = function Nav(navItems, menu, menuBtn) {\n  var menuEl = document.querySelector(menu);\n  function navSwitch() {\n    var navNodes = document.querySelectorAll(navItems);\n    if (navNodes) {\n      navNodes.forEach(function (item) {\n        item.addEventListener('click', function () {\n          navNodes.forEach(function (item) {\n            item.classList.remove('active');\n            menuClose();\n          });\n          if (item.classList.contains(menuBtn.slice(1))) {\n            menuOpen();\n          }\n          item.classList.add('active');\n        });\n      });\n    }\n  }\n  function menuOpen() {\n    if (menuEl) {\n      document.body.style.overflow = 'hidden';\n      menuEl.classList.add('active');\n    }\n  }\n  function menuClose() {\n    if (menuEl) {\n      document.body.style.overflow = '';\n      menuEl.classList.remove('active');\n    }\n  }\n  navSwitch();\n};\nNav('.b-nav .b-nav__item', '.sidebar--mobile', '.b-nav--menu');\n\n//# sourceURL=webpack:///./utils/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./utils/nav.js"]();
/******/ 	
/******/ })()
;