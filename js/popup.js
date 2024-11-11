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

/***/ "./utils/popup.js":
/*!************************!*\
  !*** ./utils/popup.js ***!
  \************************/
/***/ (() => {

eval("var Popup = function Popup(popup, openBtn, closeBtn) {\n  var popupEl = document.querySelector(popup);\n  var openButton = document.querySelector(openBtn);\n  var closeButton = document.querySelector(closeBtn);\n  function open(e) {\n    if (popupEl) {\n      e.stopPropagation();\n      popupEl.classList.remove('close');\n      popupEl.classList.add('open');\n      document.body.style.overflow = 'hidden';\n    }\n  }\n  function close() {\n    popupEl.classList.remove('open');\n    popupEl.classList.add('close');\n    document.body.style.overflow = '';\n  }\n  function closeOutside(e) {\n    if (!e.target.closest('.popup__container') && popupEl.classList.contains('open')) {\n      close();\n    }\n  }\n  function keyPress(e) {\n    if (e.key === 'Escape') {\n      close();\n    }\n  }\n  if (popupEl && openButton && closeButton) {\n    openButton.addEventListener('click', open);\n    closeButton.addEventListener('click', close);\n    document.addEventListener('click', closeOutside);\n    document.addEventListener('keydown', keyPress);\n  }\n};\nPopup('.popup', '.open-popup', '.popup__close');\n\n//# sourceURL=webpack:///./utils/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./utils/popup.js"]();
/******/ 	
/******/ })()
;