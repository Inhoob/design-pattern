/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factoryMethod/Bow.ts":
/*!**********************************!*\
  !*** ./src/factoryMethod/Bow.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Bow = /** @class */ (function () {
    function Bow() {
    }
    Bow.prototype.use = function () {
        return "샥 쏘기";
    };
    return Bow;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bow);


/***/ }),

/***/ "./src/factoryMethod/Factory.ts":
/*!**************************************!*\
  !*** ./src/factoryMethod/Factory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (name) {
        if (!this.isCreatable(name))
            return null;
        var item = this.createItem(name);
        this.postprocessItem(name);
        return item;
    };
    return Factory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);


/***/ }),

/***/ "./src/factoryMethod/ItemFactory.ts":
/*!******************************************!*\
  !*** ./src/factoryMethod/ItemFactory.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bow */ "./src/factoryMethod/Bow.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/factoryMethod/Factory.ts");
/* harmony import */ var _Shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shield */ "./src/factoryMethod/Shield.ts");
/* harmony import */ var _Sword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sword */ "./src/factoryMethod/Sword.ts");
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




var ItemCount = /** @class */ (function () {
    function ItemCount(_maxCount) {
        this._maxCount = _maxCount;
        this._currentCount = 0;
    }
    Object.defineProperty(ItemCount.prototype, "maxCount", {
        get: function () {
            return this._maxCount;
        },
        enumerable: false,
        configurable: true
    });
    ItemCount.prototype.isCreatable = function () {
        return this._currentCount < this._maxCount;
    };
    ItemCount.prototype.increaseCount = function () {
        if (this.isCreatable())
            this._currentCount++;
    };
    return ItemCount;
}());
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory() {
        var _this = _super.call(this) || this;
        _this.repository = new Map();
        _this.repository.set("sword", new ItemCount(3));
        _this.repository.set("shild", new ItemCount(5));
        _this.repository.set("bow", new ItemCount(2));
        return _this;
    }
    ItemFactory.prototype.isCreatable = function (name) {
        var itemCount = this.repository.get(name);
        return itemCount.isCreatable();
    };
    ItemFactory.prototype.createItem = function (name) {
        if (name === "sword")
            return new _Sword__WEBPACK_IMPORTED_MODULE_3__["default"]();
        if (name === "shild")
            return new _Shield__WEBPACK_IMPORTED_MODULE_2__["default"]();
        if (name === "bow")
            return new _Bow__WEBPACK_IMPORTED_MODULE_0__["default"]();
    };
    ItemFactory.prototype.postprocessItem = function (name) {
        var itemCount = this.repository.get(name);
        if (itemCount)
            itemCount.increaseCount();
    };
    return ItemFactory;
}(_Factory__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFactory);


/***/ }),

/***/ "./src/factoryMethod/Shield.ts":
/*!*************************************!*\
  !*** ./src/factoryMethod/Shield.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.use = function () {
        return "방패로 삭 막기";
    };
    return Shield;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shield);


/***/ }),

/***/ "./src/factoryMethod/Sword.ts":
/*!************************************!*\
  !*** ./src/factoryMethod/Sword.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.use = function () {
        return "칼로 삭 베기";
    };
    return Sword;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sword);


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
/*!************************************!*\
  !*** ./src/factoryMethod/index.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemFactory */ "./src/factoryMethod/ItemFactory.ts");

var factory = new _ItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domOutput = document.querySelector("textarea");
var buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        var itemName = event.target.innerText;
        var item = factory.create(itemName);
        if (item) {
            domOutput.value += "\n".concat(item.use());
        }
        else {
            domOutput.value += "\n".concat(itemName, "\uC744 \uC0AC\uC6A9\uD560\uC218\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
        }
    });
    domOutput.scrollTop = domOutput.scrollHeight;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFFSCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mYWN0b3J5TWV0aG9kL0Jvdy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mYWN0b3J5TWV0aG9kL0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjdG9yeU1ldGhvZC9JdGVtRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mYWN0b3J5TWV0aG9kL1NoaWVsZC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mYWN0b3J5TWV0aG9kL1N3b3JkLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjdG9yeU1ldGhvZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdyBpbXBsZW1lbnRzIEl0ZW0ge1xuICB1c2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCLsg6Ug7I+Y6riwXCI7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcblxuZXhwb3J0IHR5cGUgSXRlbU5hbWUgPSBcInN3b3JkXCIgfCBcInNoaWxkXCIgfCBcImJvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGlzQ3JlYXRhYmxlKG5hbWU6IEl0ZW1OYW1lKTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUl0ZW0obmFtZTogSXRlbU5hbWUpOiBJdGVtO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcG9zdHByb2Nlc3NJdGVtKG5hbWU6IEl0ZW1OYW1lKTogdm9pZDtcblxuICBjcmVhdGUobmFtZTogSXRlbU5hbWUpOiBJdGVtIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLmlzQ3JlYXRhYmxlKG5hbWUpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5jcmVhdGVJdGVtKG5hbWUpO1xuICAgIHRoaXMucG9zdHByb2Nlc3NJdGVtKG5hbWUpO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iLCJpbXBvcnQgQm93IGZyb20gXCIuL0Jvd1wiO1xuaW1wb3J0IEZhY3RvcnksIHsgSXRlbU5hbWUgfSBmcm9tIFwiLi9GYWN0b3J5XCI7XG5pbXBvcnQgU2hpZWxkIGZyb20gXCIuL1NoaWVsZFwiO1xuaW1wb3J0IFN3b3JkIGZyb20gXCIuL1N3b3JkXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmNsYXNzIEl0ZW1Db3VudCB7XG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudCA9IDA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21heENvdW50OiBudW1iZXIpIHt9XG4gIGdldCBtYXhDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q291bnQ7XG4gIH1cbiAgaXNDcmVhdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDb3VudCA8IHRoaXMuX21heENvdW50O1xuICB9XG4gIGluY3JlYXNlQ291bnQoKSB7XG4gICAgaWYgKHRoaXMuaXNDcmVhdGFibGUoKSkgdGhpcy5fY3VycmVudENvdW50Kys7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUZhY3RvcnkgZXh0ZW5kcyBGYWN0b3J5IHtcbiAgcHJpdmF0ZSByZXBvc2l0b3J5ID0gbmV3IE1hcDxJdGVtTmFtZSwgSXRlbUNvdW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZXBvc2l0b3J5LnNldChcInN3b3JkXCIsIG5ldyBJdGVtQ291bnQoMykpO1xuICAgIHRoaXMucmVwb3NpdG9yeS5zZXQoXCJzaGlsZFwiLCBuZXcgSXRlbUNvdW50KDUpKTtcbiAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KFwiYm93XCIsIG5ldyBJdGVtQ291bnQoMikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ3JlYXRhYmxlKG5hbWU6IEl0ZW1OYW1lKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5yZXBvc2l0b3J5LmdldChuYW1lKTtcbiAgICByZXR1cm4gaXRlbUNvdW50LmlzQ3JlYXRhYmxlKCk7XG4gIH1cbiAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW0obmFtZTogSXRlbU5hbWUpOiBJdGVtIHtcbiAgICBpZiAobmFtZSA9PT0gXCJzd29yZFwiKSByZXR1cm4gbmV3IFN3b3JkKCk7XG4gICAgaWYgKG5hbWUgPT09IFwic2hpbGRcIikgcmV0dXJuIG5ldyBTaGllbGQoKTtcbiAgICBpZiAobmFtZSA9PT0gXCJib3dcIikgcmV0dXJuIG5ldyBCb3coKTtcbiAgfVxuICBwcm90ZWN0ZWQgcG9zdHByb2Nlc3NJdGVtKG5hbWU6IEl0ZW1OYW1lKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5yZXBvc2l0b3J5LmdldChuYW1lKTtcbiAgICBpZiAoaXRlbUNvdW50KSBpdGVtQ291bnQuaW5jcmVhc2VDb3VudCgpO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaWVsZCBpbXBsZW1lbnRzIEl0ZW0ge1xuICB1c2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCLrsKntjKjroZwg7IKtIOunieq4sFwiO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3b3JkIGltcGxlbWVudHMgSXRlbSB7XG4gIHVzZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIuy5vOuhnCDsgq0g67Kg6riwXCI7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSXRlbU5hbWUgfSBmcm9tIFwiLi9GYWN0b3J5XCI7XG5pbXBvcnQgSXRlbUZhY3RvcnkgZnJvbSBcIi4vSXRlbUZhY3RvcnlcIjtcblxuY29uc3QgZmFjdG9yeSA9IG5ldyBJdGVtRmFjdG9yeSgpO1xuXG5jb25zdCBkb21PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXRlbU5hbWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQ7XG4gICAgY29uc3QgaXRlbSA9IGZhY3RvcnkuY3JlYXRlKGl0ZW1OYW1lIGFzIEl0ZW1OYW1lKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgZG9tT3V0cHV0LnZhbHVlICs9IGBcXG4ke2l0ZW0udXNlKCl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tT3V0cHV0LnZhbHVlICs9IGBcXG4ke2l0ZW1OYW1lfeydhCDsgqzsmqntlaDsiJjqsIAg7JeG7Iq164uI64ukYDtcbiAgICB9XG4gIH0pO1xuXG4gIGRvbU91dHB1dC5zY3JvbGxUb3AgPSBkb21PdXRwdXQuc2Nyb2xsSGVpZ2h0O1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=