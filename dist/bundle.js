/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adaptor/Animal.ts":
/*!*******************************!*\
  !*** ./src/adaptor/Animal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);


/***/ }),

/***/ "./src/adaptor/Cat.ts":
/*!****************************!*\
  !*** ./src/adaptor/Cat.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adaptor/Animal.ts");
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

var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.sound = function () {
        console.log("".concat(this.name, "\uAC00 \uB0D0\uC639"));
    };
    return Cat;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cat);


/***/ }),

/***/ "./src/adaptor/Dog.ts":
/*!****************************!*\
  !*** ./src/adaptor/Dog.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adaptor/Animal.ts");
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

var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, "\uAC00 \uBA4D\uBA4D"));
    };
    return Dog;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dog);


/***/ }),

/***/ "./src/adaptor/Tiger.ts":
/*!******************************!*\
  !*** ./src/adaptor/Tiger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Object.defineProperty(Tiger.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Tiger.prototype.roar = function () {
        return "으르릉~";
    };
    return Tiger;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tiger);


/***/ }),

/***/ "./src/adaptor/TigerAdapter.ts":
/*!*************************************!*\
  !*** ./src/adaptor/TigerAdapter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adaptor/Animal.ts");
/* harmony import */ var _Tiger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiger */ "./src/adaptor/Tiger.ts");
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


var TigerAdapter = /** @class */ (function (_super) {
    __extends(TigerAdapter, _super);
    function TigerAdapter(name) {
        var _this = _super.call(this, name) || this;
        _this.tiger = new _Tiger__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this.tiger.name = name;
        return _this;
    }
    TigerAdapter.prototype.sound = function () {
        console.log("".concat(this.tiger.name, "\uAC00 ").concat(this.tiger.roar()));
    };
    return TigerAdapter;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TigerAdapter);


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
/*!******************************!*\
  !*** ./src/adaptor/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cat */ "./src/adaptor/Cat.ts");
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dog */ "./src/adaptor/Dog.ts");
/* harmony import */ var _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TigerAdapter */ "./src/adaptor/TigerAdapter.ts");



var list = Array();
list.push(new _Dog__WEBPACK_IMPORTED_MODULE_1__["default"]("댕이"));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]("솜털이"));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]("츄츄"));
list.push(new _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]("타이가오"));
// const tiger = new Tiger();
// tiger.name = "타타타";
// list.push(tiger); //Argument of type 'Tiger' is not assignable to parameter of type 'Animal'. 이걸 위해서 tiger adaptor 클래스 추가해야함.
list.forEach(function (animal) {
    animal.sound();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksQ0FBQyxJQUFJLHFEQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyw2QkFBNkI7QUFDN0Isc0JBQXNCO0FBQ3RCLGdJQUFnSTtBQUVoSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtJQUNsQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdG9yL0FuaW1hbC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdG9yL0NhdC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdG9yL0RvZy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdG9yL1RpZ2VyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2FkYXB0b3IvVGlnZXJBZGFwdGVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWRhcHRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBbmltYWwge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmFtZTogc3RyaW5nKSB7fVxuXG4gIGFic3RyYWN0IHNvdW5kKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0IGV4dGVuZHMgQW5pbWFsIHtcbiAgc291bmQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfeqwgCDrg5DsmLlgKTtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCBBbmltYWwgZnJvbSBcIi4vQW5pbWFsXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWwge1xuICBzb3VuZCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV96rCAIOupjeupjWApO1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXIge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgfCBudWxsO1xuICBzZXQgbmFtZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdjtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICByb2FyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwi7Jy866W066aJflwiO1xuICB9XG59XG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuaW1wb3J0IFRpZ2VyIGZyb20gXCIuL1RpZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2VyQWRhcHRlciBleHRlbmRzIEFuaW1hbCB7XG4gIHByaXZhdGUgdGlnZXI6IFRpZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMudGlnZXIgPSBuZXcgVGlnZXIoKTtcbiAgICB0aGlzLnRpZ2VyLm5hbWUgPSBuYW1lO1xuICB9XG4gIHNvdW5kKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMudGlnZXIubmFtZX3qsIAgJHt0aGlzLnRpZ2VyLnJvYXIoKX1gKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuaW1wb3J0IENhdCBmcm9tIFwiLi9DYXRcIjtcbmltcG9ydCBEb2cgZnJvbSBcIi4vRG9nXCI7XG5pbXBvcnQgVGlnZXIgZnJvbSBcIi4vVGlnZXJcIjtcbmltcG9ydCBUaWdlckFkYXB0ZXIgZnJvbSBcIi4vVGlnZXJBZGFwdGVyXCI7XG5cbmNvbnN0IGxpc3QgPSBBcnJheTxBbmltYWw+KCk7XG5cbmxpc3QucHVzaChuZXcgRG9nKFwi64yV7J20XCIpKTtcbmxpc3QucHVzaChuZXcgQ2F0KFwi7Iac7YS47J20XCIpKTtcbmxpc3QucHVzaChuZXcgQ2F0KFwi7LiE7LiEXCIpKTtcbmxpc3QucHVzaChuZXcgVGlnZXJBZGFwdGVyKFwi7YOA7J206rCA7JikXCIpKTtcbi8vIGNvbnN0IHRpZ2VyID0gbmV3IFRpZ2VyKCk7XG4vLyB0aWdlci5uYW1lID0gXCLtg4Dtg4Dtg4BcIjtcbi8vIGxpc3QucHVzaCh0aWdlcik7IC8vQXJndW1lbnQgb2YgdHlwZSAnVGlnZXInIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdBbmltYWwnLiDsnbTqsbgg7JyE7ZW07IScIHRpZ2VyIGFkYXB0b3Ig7YG0656Y7IqkIOy2lOqwgO2VtOyVvO2VqC5cblxubGlzdC5mb3JFYWNoKChhbmltYWwpID0+IHtcbiAgYW5pbWFsLnNvdW5kKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==