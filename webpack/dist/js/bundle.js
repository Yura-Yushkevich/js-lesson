/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {



function myModule(){
    this.hello = function(){
        console.log('hello');
    };
    
    this.goodbay = function(){
       console.log('bye!'); 
    };

}


module.exports = myModule;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**************************!*
  !*** ./src/js/script.js ***!
  \**************************/


const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js");


const myModuleInstanse = new myModule;

myModuleInstanse.hello();
myModuleInstanse.goodbay();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map