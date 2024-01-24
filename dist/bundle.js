/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorator/BoxDecorator.ts":
/*!***************************************!*\
  !*** ./src/decorator/BoxDecorator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(targetItem) {
        var _this = _super.call(this, targetItem) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    BoxDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (i) {
        var maxWidth = this.getMaxLength();
        if (i === 0 || i === this.getLinesCount() - 1) {
            return "<span style='color:yellow'>+".concat("-".repeat(maxWidth - 2), "+</span>");
        }
        else {
            return ("<span style='color:yellow'>|</span>" +
                "".concat(this.targetItem.getString(i - 1)) +
                "<span style='color:yellow'>|</span>");
        }
    };
    return BoxDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxDecorator);


/***/ }),

/***/ "./src/decorator/Decorator.ts":
/*!************************************!*\
  !*** ./src/decorator/Decorator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/decorator/item.ts");
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

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(targetItem) {
        var _this = _super.call(this) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    return Decorator;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decorator);


/***/ }),

/***/ "./src/decorator/LineNumberDecorator.ts":
/*!**********************************************!*\
  !*** ./src/decorator/LineNumberDecorator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var LineNumberDecorator = /** @class */ (function (_super) {
    __extends(LineNumberDecorator, _super);
    function LineNumberDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    LineNumberDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    LineNumberDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 6;
    };
    LineNumberDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 6;
    };
    LineNumberDecorator.prototype.getString = function (i) {
        return ('<span style="color:green">' +
            "".concat(i).padStart(4, "0") +
            "</span><span style='color:dimgray'>: </span>".concat(this.targetItem.getString(i)));
    };
    return LineNumberDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineNumberDecorator);


/***/ }),

/***/ "./src/decorator/SideDecorator.ts":
/*!****************************************!*\
  !*** ./src/decorator/SideDecorator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(targetItem, ch) {
        var _this = _super.call(this, targetItem) || this;
        _this.targetItem = targetItem;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    SideDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + this.ch.length * 2;
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (i) {
        return ("<span style='color:gray'>".concat(this.ch, "</span>") +
            "".concat(this.targetItem.getString(i)) +
            "<span style='color:gray'>".concat(this.ch, "</span>"));
    };
    return SideDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDecorator);


/***/ }),

/***/ "./src/decorator/Strings.ts":
/*!**********************************!*\
  !*** ./src/decorator/Strings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/decorator/item.ts");
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

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = new Array();
        return _this;
    }
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getLength = function (i) {
        return this.data[i].length;
    };
    Strings.prototype.getMaxLength = function () {
        var maxLength = 0;
        this.data.forEach(function (item) {
            if (item.length > maxLength)
                maxLength = item.length;
        });
        return maxLength;
    };
    Strings.prototype.getString = function (i) {
        return this.data[i];
    };
    Strings.prototype.add = function (str) {
        this.data.push(str);
    };
    return Strings;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strings);


/***/ }),

/***/ "./src/decorator/item.ts":
/*!*******************************!*\
  !*** ./src/decorator/item.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        var cntLines = this.getLinesCount();
        for (var i = 0; i < cntLines; i++) {
            var string = this.getString(i);
            result.push(string);
        }
        dom.innerHTML = result.join("\n");
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


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
/*!********************************!*\
  !*** ./src/decorator/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxDecorator */ "./src/decorator/BoxDecorator.ts");
/* harmony import */ var _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineNumberDecorator */ "./src/decorator/LineNumberDecorator.ts");
/* harmony import */ var _SideDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideDecorator */ "./src/decorator/SideDecorator.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./src/decorator/Strings.ts");




var strs = new _Strings__WEBPACK_IMPORTED_MODULE_3__["default"]();
strs.add("Hello!!");
strs.add("My name is Inhoo");
strs.add("Design-Pattern is Powerful");
var domPre = document.querySelector("pre");
// strs.print(domPre);
var d1 = new _SideDecorator__WEBPACK_IMPORTED_MODULE_2__["default"](strs, '"');
// d1.print(domPre);
var d2 = new _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__["default"](d1);
// d2.print(domPre);
var d3 = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__["default"](d2);
d3.print(domPre);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNjO0FBQ1o7QUFDWjtBQUNoQyxJQUFNLElBQUksR0FBRyxJQUFJLGdEQUFPLEVBQUUsQ0FBQztBQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFFdkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxzQkFBc0I7QUFFdEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxzREFBYSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4QyxvQkFBb0I7QUFFcEIsSUFBTSxFQUFFLEdBQUcsSUFBSSw0REFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QyxvQkFBb0I7QUFFcEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxxREFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9kZWNvcmF0b3IvQm94RGVjb3JhdG9yLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2RlY29yYXRvci9EZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL0xpbmVOdW1iZXJEZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL1NpZGVEZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL1N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9kZWNvcmF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlY29yYXRvciBmcm9tIFwiLi9EZWNvcmF0b3JcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94RGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpICsgMjtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpKSArIDI7XG4gIH1cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIDI7XG4gIH1cbiAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmdldE1heExlbmd0aCgpO1xuICAgIGlmIChpID09PSAwIHx8IGkgPT09IHRoaXMuZ2V0TGluZXNDb3VudCgpIC0gMSkge1xuICAgICAgcmV0dXJuIGA8c3BhbiBzdHlsZT0nY29sb3I6eWVsbG93Jz4rJHtcIi1cIi5yZXBlYXQobWF4V2lkdGggLSAyKX0rPC9zcGFuPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGA8c3BhbiBzdHlsZT0nY29sb3I6eWVsbG93Jz58PC9zcGFuPmAgK1xuICAgICAgICBgJHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGkgLSAxKX1gICtcbiAgICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPnw8L3NwYW4+YFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEZWNvcmF0b3IgZXh0ZW5kcyBJdGVtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iLCJpbXBvcnQgRGVjb3JhdG9yIGZyb20gXCIuL0RlY29yYXRvclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTnVtYmVyRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpO1xuICB9XG4gIGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGkpICsgNjtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldE1heExlbmd0aCgpICsgNjtcbiAgfVxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgJzxzcGFuIHN0eWxlPVwiY29sb3I6Z3JlZW5cIj4nICtcbiAgICAgIGAke2l9YC5wYWRTdGFydCg0LCBcIjBcIikgK1xuICAgICAgYDwvc3Bhbj48c3BhbiBzdHlsZT0nY29sb3I6ZGltZ3JheSc+OiA8L3NwYW4+JHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKFxuICAgICAgICBpXG4gICAgICApfWBcbiAgICApO1xuICB9XG4gIGNvbnN0cnVjdG9yKHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IERlY29yYXRvciBmcm9tIFwiLi9EZWNvcmF0b3JcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZURlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExpbmVzQ291bnQoKTtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpKSArIHRoaXMuY2gubGVuZ3RoICogMjtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldE1heExlbmd0aCgpICsgdGhpcy5jaC5sZW5ndGggKiAyO1xuICB9XG4gIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICBgPHNwYW4gc3R5bGU9J2NvbG9yOmdyYXknPiR7dGhpcy5jaH08L3NwYW4+YCArXG4gICAgICBgJHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGkpfWAgK1xuICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjpncmF5Jz4ke3RoaXMuY2h9PC9zcGFuPmBcbiAgICApO1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0YXJnZXRJdGVtOiBJdGVtLCBwcml2YXRlIGNoOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5ncyBleHRlbmRzIEl0ZW0ge1xuICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG4gIH1cbiAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtpXS5sZW5ndGg7XG4gIH1cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgbGV0IG1heExlbmd0aCA9IDA7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmxlbmd0aCA+IG1heExlbmd0aCkgbWF4TGVuZ3RoID0gaXRlbS5sZW5ndGg7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heExlbmd0aDtcbiAgfVxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2ldO1xuICB9XG4gIHByaXZhdGUgZGF0YSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYWRkKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLnB1c2goc3RyKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSXRlbSB7XG4gIGFic3RyYWN0IGdldExpbmVzQ291bnQoKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRNYXhMZW5ndGgoKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHByaW50KGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBjbnRMaW5lcyA9IHRoaXMuZ2V0TGluZXNDb3VudCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY250TGluZXM7IGkrKykge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaSk7XG4gICAgICByZXN1bHQucHVzaChzdHJpbmcpO1xuICAgIH1cbiAgICBkb20uaW5uZXJIVE1MID0gcmVzdWx0LmpvaW4oXCJcXG5cIik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJveERlY29yYXRvciBmcm9tIFwiLi9Cb3hEZWNvcmF0b3JcIjtcbmltcG9ydCBMaW5lTnVtYmVyRGVjb3JhdG9yIGZyb20gXCIuL0xpbmVOdW1iZXJEZWNvcmF0b3JcIjtcbmltcG9ydCBTaWRlRGVjb3JhdG9yIGZyb20gXCIuL1NpZGVEZWNvcmF0b3JcIjtcbmltcG9ydCBTdHJpbmdzIGZyb20gXCIuL1N0cmluZ3NcIjtcbmNvbnN0IHN0cnMgPSBuZXcgU3RyaW5ncygpO1xuc3Rycy5hZGQoXCJIZWxsbyEhXCIpO1xuc3Rycy5hZGQoXCJNeSBuYW1lIGlzIEluaG9vXCIpO1xuc3Rycy5hZGQoXCJEZXNpZ24tUGF0dGVybiBpcyBQb3dlcmZ1bFwiKTtcblxuY29uc3QgZG9tUHJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInByZVwiKTtcbi8vIHN0cnMucHJpbnQoZG9tUHJlKTtcblxuY29uc3QgZDEgPSBuZXcgU2lkZURlY29yYXRvcihzdHJzLCAnXCInKTtcbi8vIGQxLnByaW50KGRvbVByZSk7XG5cbmNvbnN0IGQyID0gbmV3IExpbmVOdW1iZXJEZWNvcmF0b3IoZDEpO1xuLy8gZDIucHJpbnQoZG9tUHJlKTtcblxuY29uc3QgZDMgPSBuZXcgQm94RGVjb3JhdG9yKGQyKTtcbmQzLnByaW50KGRvbVByZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=