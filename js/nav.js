(()=>{var __webpack_modules__={369:()=>{eval("var Nav = function Nav(navItems, menu, menuBtn) {\n  var menuEl = document.querySelector(menu);\n  function navSwitch() {\n    var navNodes = document.querySelectorAll(navItems);\n    if (navNodes) {\n      navNodes.forEach(function (item) {\n        item.addEventListener('click', function () {\n          navNodes.forEach(function (item) {\n            item.classList.remove('active');\n            menuClose();\n          });\n          if (item.classList.contains(menuBtn.slice(1))) {\n            menuOpen();\n          }\n          item.classList.add('active');\n        });\n      });\n    }\n  }\n  function menuOpen() {\n    if (menuEl) {\n      document.body.style.overflow = 'hidden';\n      menuEl.classList.add('active');\n    }\n  }\n  function menuClose() {\n    if (menuEl) {\n      document.body.style.overflow = '';\n      menuEl.classList.remove('active');\n    }\n  }\n  navSwitch();\n};\nNav('.b-nav .b-nav__item', '.sidebar--mobile', '.b-nav--menu');\n\n//# sourceURL=webpack:///./utils/nav.js?")}},__webpack_exports__={};__webpack_modules__[369]()})();