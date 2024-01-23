/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bridge/CaptionDisplay.ts":
/*!**************************************!*\
  !*** ./src/bridge/CaptionDisplay.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CaptionDisplay = /** @class */ (function () {
    function CaptionDisplay() {
    }
    CaptionDisplay.prototype.title = function (draft) {
        console.log("\uC81C\uBAA9: ".concat(draft.getTitle()));
    };
    CaptionDisplay.prototype.author = function (draft) {
        console.log("\uC800\uC790: ".concat(draft.getAuthor()));
    };
    CaptionDisplay.prototype.content = function (draft) {
        var content = draft.getContent();
        content.forEach(function (item) { return console.log("\uCEE8\uD150\uCE20: ".concat(item)); });
    };
    return CaptionDisplay;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptionDisplay);


/***/ }),

/***/ "./src/bridge/CharactersCounter.ts":
/*!*****************************************!*\
  !*** ./src/bridge/CharactersCounter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draft */ "./src/bridge/Draft.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CharactersCounter = /** @class */ (function (_super) {
    __extends(CharactersCounter, _super);
    function CharactersCounter(title, author, content) {
        return _super.call(this, title, author, content) || this;
    }
    CharactersCounter.prototype.getCharactorsCount = function () {
        var count = 0;
        count += this.getTitle().length;
        count += this.getAuthor().length;
        this.getContent().forEach(function (item) { return (count += item.length); });
        return count;
    };
    return CharactersCounter;
}(_Draft__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharactersCounter);


/***/ }),

/***/ "./src/bridge/Draft.ts":
/*!*****************************!*\
  !*** ./src/bridge/Draft.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Draft = /** @class */ (function () {
    function Draft(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    Draft.prototype.getTitle = function () {
        return this.title;
    };
    Draft.prototype.getAuthor = function () {
        return this.author;
    };
    Draft.prototype.getContent = function () {
        return this.content;
    };
    Draft.prototype.print = function (display) {
        display.title(this);
        display.author(this);
        display.content(this);
    };
    return Draft;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draft);


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
/*!*****************************!*\
  !*** ./src/bridge/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptionDisplay */ "./src/bridge/CaptionDisplay.ts");
/* harmony import */ var _CharactersCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharactersCounter */ "./src/bridge/CharactersCounter.ts");


var title = "복원된 지구";
var author = "김형준";
var content = [
    "플라스틱 사용의 감소와",
    "바다 생물 어획량 감소로 인하여",
    "지구는 복원되었다.",
];
var draft = new _CharactersCounter__WEBPACK_IMPORTED_MODULE_1__["default"](title, author, content);
// const display = new SimpleDisplay();
var display = new _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__["default"]();
draft.print(display);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQztBQUNyQixJQUFNLE9BQU8sR0FBRztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtDQUNiLENBQUM7QUFFRixJQUFNLEtBQUssR0FBRyxJQUFJLDBEQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFNUQsdUNBQXVDO0FBQ3ZDLElBQU0sT0FBTyxHQUFHLElBQUksdURBQWMsRUFBRSxDQUFDO0FBRXJDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9icmlkZ2UvQ2FwdGlvbkRpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYnJpZGdlL0NoYXJhY3RlcnNDb3VudGVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2JyaWRnZS9EcmFmdC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2JyaWRnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9EaXNwbGF5XCI7XG5pbXBvcnQgRHJhZnQgZnJvbSBcIi4vRHJhZnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FwdGlvbkRpc3BsYXkgaW1wbGVtZW50cyBEaXNwbGF5IHtcbiAgdGl0bGUoZHJhZnQ6IERyYWZ0KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYOygnOuqqTogJHtkcmFmdC5nZXRUaXRsZSgpfWApO1xuICB9XG4gIGF1dGhvcihkcmFmdDogRHJhZnQpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhg7KCA7J6QOiAke2RyYWZ0LmdldEF1dGhvcigpfWApO1xuICB9XG4gIGNvbnRlbnQoZHJhZnQ6IERyYWZ0KTogdm9pZCB7XG4gICAgbGV0IGNvbnRlbnQgPSBkcmFmdC5nZXRDb250ZW50KCk7XG4gICAgY29udGVudC5mb3JFYWNoKChpdGVtKSA9PiBjb25zb2xlLmxvZyhg7Luo7YWQ7LigOiAke2l0ZW19YCkpO1xuICB9XG59XG4iLCJpbXBvcnQgRHJhZnQgZnJvbSBcIi4vRHJhZnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlcnNDb3VudGVyIGV4dGVuZHMgRHJhZnQge1xuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29udGVudDogc3RyaW5nW10pIHtcbiAgICBzdXBlcih0aXRsZSwgYXV0aG9yLCBjb250ZW50KTtcbiAgfVxuXG4gIGdldENoYXJhY3RvcnNDb3VudCgpOiBudW1iZXIge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5nZXRUaXRsZSgpLmxlbmd0aDtcbiAgICBjb3VudCArPSB0aGlzLmdldEF1dGhvcigpLmxlbmd0aDtcbiAgICB0aGlzLmdldENvbnRlbnQoKS5mb3JFYWNoKChpdGVtKSA9PiAoY291bnQgKz0gaXRlbS5sZW5ndGgpKTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbn1cbiIsImltcG9ydCBEaXNwbGF5IGZyb20gXCIuL0Rpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBhdXRob3I6IHN0cmluZyxcbiAgICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZ1tdXG4gICkge31cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuICBnZXRBdXRob3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yO1xuICB9XG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIHByaW50KGRpc3BsYXk6IERpc3BsYXkpOiB2b2lkIHtcbiAgICBkaXNwbGF5LnRpdGxlKHRoaXMpO1xuICAgIGRpc3BsYXkuYXV0aG9yKHRoaXMpO1xuICAgIGRpc3BsYXkuY29udGVudCh0aGlzKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FwdGlvbkRpc3BsYXkgZnJvbSBcIi4vQ2FwdGlvbkRpc3BsYXlcIjtcbmltcG9ydCBDaGFyYWN0ZXJzQ291bnRlciBmcm9tIFwiLi9DaGFyYWN0ZXJzQ291bnRlclwiO1xuaW1wb3J0IERyYWZ0IGZyb20gXCIuL0RyYWZ0XCI7XG5pbXBvcnQgU2ltcGxlRGlzcGxheSBmcm9tIFwiLi9TaW1wbGVEaXNwbGF5XCI7XG5cbmNvbnN0IHRpdGxlID0gXCLrs7Xsm5DrkJwg7KeA6rWsXCI7XG5jb25zdCBhdXRob3IgPSBcIuq5gO2YleykgFwiO1xuY29uc3QgY29udGVudCA9IFtcbiAgXCLtlIzrnbzsiqTti7Eg7IKs7Jqp7J2YIOqwkOyGjOyZgFwiLFxuICBcIuuwlOuLpCDsg53rrLwg7Ja07ZqN65+JIOqwkOyGjOuhnCDsnbjtlZjsl6xcIixcbiAgXCLsp4DqtazripQg67O17JuQ65CY7JeI64ukLlwiLFxuXTtcblxuY29uc3QgZHJhZnQgPSBuZXcgQ2hhcmFjdGVyc0NvdW50ZXIodGl0bGUsIGF1dGhvciwgY29udGVudCk7XG5cbi8vIGNvbnN0IGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheSgpO1xuY29uc3QgZGlzcGxheSA9IG5ldyBDYXB0aW9uRGlzcGxheSgpO1xuXG5kcmFmdC5wcmludChkaXNwbGF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==