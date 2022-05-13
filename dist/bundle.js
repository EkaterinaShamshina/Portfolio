/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _images_example_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/example.svg */ \"./src/images/example.svg\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // создание свойства класса без конструктора\n\nvar Game = /*#__PURE__*/_createClass(function Game() {\n  _classCallCheck(this, Game);\n\n  _defineProperty(this, \"name\", 'Violin Charades');\n});\n\nvar myGame = new Game(); // создаем параграф\n\nvar p = document.createElement('p');\np.textContent = \"I like \".concat(myGame.game, \".\"); // создаем элемент заголовка\n\nvar heading = document.createElement('h1');\nheading.textContent = 'Как интересно!'; // добавляем параграф и заголовок в DOM\n\nvar root = document.querySelector('#root');\nroot.append(heading, p);\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles/main.scss?");

/***/ }),

/***/ "./src/images/example.svg":
/*!********************************!*\
  !*** ./src/images/example.svg ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNMTUuMDcyOTQsMkg4LjkzNzVDMy4zMzMzMSwyLDIsMy4zMzMzMSwyLDguOTI3MDZWMTUuMDYyNUMyLDIwLjY2NjYzLDMuMzIyOTQsMjIsOC45MjcwNiwyMkgxNS4wNjI1QzIwLjY2NjY5LDIyLDIyLDIwLjY3NzA2LDIyLDE1LjA3Mjg4VjguOTM3NUMyMiwzLjMzMzMxLDIwLjY3NzA2LDIsMTUuMDcyOTQsMlptMy4wNzI4NywxNC4yNzA4MUgxNi42ODc1Yy0uNTUyMDYsMC0uNzE4NzUtLjQ0NzkzLTEuNzA4MzEtMS40Mzc1LS44NjQ2My0uODMzMzEtMS4yMjkxOS0uOTM3NS0xLjQ0Nzk0LS45Mzc1LS4zMDIwNiwwLS4zODU0NC4wODMzMi0uMzg1NDQuNXYxLjMxMjVjMCwuMzU0MTktLjExNDU2LjU2MjUtMS4wNDE2Mi41NjI1YTUuNjkyMTQsNS42OTIxNCwwLDAsMS00LjQ0Nzk0LTIuNjY2NjhBMTEuNjI2MTEsMTEuNjI2MTEsMCwwLDEsNS4zNTQxOSw4Ljc3MDgxYzAtLjIxODc1LjA4MzMxLS40MTY2OC41LS40MTY2OEg3LjMxMjVjLjM3NSwwLC41MTA0NC4xNjY2OC42NTYyNS41NTIxMi43MDgzMSwyLjA4MzMxLDEuOTE2NjksMy44OTU4MSwyLjQwNjI1LDMuODk1ODEuMTg3NSwwLC4yNzA4MS0uMDgzMzEuMjcwODEtLjU1MjA2VjEwLjEwNDEzYy0uMDYyNS0uOTc5MTMtLjU4MzMxLTEuMDYyNS0uNTgzMzEtMS40MTY2M2EuMzYwMDguMzYwMDgsMCwwLDEsLjM3NS0uMzMzMzdoMi4yOTE2OWMuMzEyNSwwLC40MTY2Mi4xNTYyNS40MTY2Mi41MzEyNXYyLjg5NTg3YzAsLjMxMjUuMTM1NDQuNDE2NjMuMjI5MTkuNDE2NjMuMTg3NSwwLC4zMzMzMS0uMTA0MTMuNjc3MDYtLjQ0Nzg4YTExLjk5ODc3LDExLjk5ODc3LDAsMCwwLDEuNzkxNjktMi45NzkxOS42MjgxOC42MjgxOCwwLDAsMSwuNjM1NDQtLjQxNjY4SDE3LjkzNzVjLjQzNzUsMCwuNTMxMjUuMjE4NzUuNDM3NS41MzEyNUExOC4yMDUwNywxOC4yMDUwNywwLDAsMSwxNi40MTY2OSwxMi4yNWMtLjE1NjI1LjIzOTU2LS4yMTg3NS4zNjQ1NiwwLC42NDU4MS4xNDU4MS4yMTg3NS42NTYyNS42NDU4MiwxLDEuMDUyMDdhNi40ODU1Myw2LjQ4NTUzLDAsMCwxLDEuMjI5MTIsMS43MDgzN0MxOC43NzA4MSwxNi4wNjI1LDE4LjU2MjUsMTYuMjcwODEsMTguMTQ1ODEsMTYuMjcwODFaIi8+PC9zdmc+\";\n\n//# sourceURL=webpack://portfolio/./src/images/example.svg?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;