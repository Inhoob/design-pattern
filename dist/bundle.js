/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/composite/File.ts":
/*!*******************************!*\
  !*** ./src/composite/File.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/composite/Unit.ts");
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

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name, size) {
        var _this = _super.call(this, name) || this;
        _this.size = size;
        return _this;
    }
    File.prototype.getSize = function () {
        return this.size;
    };
    return File;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);


/***/ }),

/***/ "./src/composite/Folder.ts":
/*!*********************************!*\
  !*** ./src/composite/Folder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/composite/Unit.ts");
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

var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name, size) {
        var _this = _super.call(this, name) || this;
        _this.size = size;
        _this.units = [];
        return _this;
    }
    Folder.prototype.getSize = function () {
        return this.units.reduce(function (acc, curr) { return acc + curr.getSize(); }, 0);
    };
    Folder.prototype.add = function (unit) {
        this.units.push(unit);
    };
    Folder.prototype.createUnit = function (unit, dom) {
        var domUnit = document.createElement("div");
        domUnit.classList.add("unit");
        domUnit.innerHTML = "<div><span>".concat(unit.getName(), "</span><span>(").concat(unit.getSize(), ")</span></div>");
        dom.append(domUnit);
        return domUnit;
    };
    Folder.prototype.list = function (dom) {
        var _this = this;
        var domUnit = this.createUnit(this, dom);
        var bFolder = this instanceof Folder;
        if (bFolder) {
            this.units.forEach(function (unit) {
                if (unit instanceof Folder) {
                    unit.list(domUnit); //composite 는 단일체와 집합체를 묶다보니 재귀가 종종 들어간다
                }
                else {
                    _this.createUnit(unit, domUnit);
                }
            });
        }
    };
    return Folder;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Folder);


/***/ }),

/***/ "./src/composite/Unit.ts":
/*!*******************************!*\
  !*** ./src/composite/Unit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Unit = /** @class */ (function () {
    function Unit(name) {
        this.name = name;
    }
    Unit.prototype.getName = function () {
        return this.name;
    };
    return Unit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unit);


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
  !*** ./src/composite/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File */ "./src/composite/File.ts");
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Folder */ "./src/composite/Folder.ts");


var root = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("root");
root.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("a.txt", 1000));
root.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("b.txt", 2000));
var sub1 = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub1");
root.add(sub1);
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("sa.txt", 100));
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("sb.txt", 4000));
var subSub = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub3");
sub1.add(subSub);
subSub.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("subsub1.txt", 2250));
subSub.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("subsub1.txt", 5340));
var sub2 = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub2");
root.add(sub2);
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("SA.txt", 250));
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("SA.txt", 340));
var dom = document.querySelector("#list");
root.list(dom);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQjtJQUFrQyx3QkFBSTtJQUNwQyxjQUFZLElBQVksRUFBVSxJQUFZO1FBQzVDLGtCQUFLLFlBQUMsSUFBSSxDQUFDLFNBQUM7UUFEb0IsVUFBSSxHQUFKLElBQUksQ0FBUTs7SUFFOUMsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJO0lBQ2xCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxDQVBpQyw2Q0FBSSxHQU9yQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUeUI7QUFFMUI7SUFBb0MsMEJBQUk7SUFFdEMsZ0JBQVksSUFBWSxFQUFVLElBQWE7UUFDN0Msa0JBQUssWUFBQyxJQUFJLENBQUMsU0FBQztRQURvQixVQUFJLEdBQUosSUFBSSxDQUFTO1FBRHZDLFdBQUssR0FBZ0IsRUFBRSxDQUFDOztJQUdoQyxDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSSxJQUFLLFVBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQXBCLENBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELG9CQUFHLEdBQUgsVUFBSSxJQUFVO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVPLDJCQUFVLEdBQWxCLFVBQW1CLElBQVUsRUFBRSxHQUFZO1FBQ3pDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxxQkFBYyxJQUFJLENBQUMsT0FBTyxFQUFFLDJCQUFpQixJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFnQixDQUFDO1FBQ2hHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxHQUFZO1FBQWpCLGlCQVlDO1FBWEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLE1BQU0sQ0FBQztRQUN2QyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUN0QixJQUFJLElBQUksWUFBWSxNQUFNLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztnQkFDOUQsQ0FBQztxQkFBTSxDQUFDO29CQUNOLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLENBbkNtQyw2Q0FBSSxHQW1DdkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0Q7SUFDRSxjQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFFLENBQUM7SUFFbkMsc0JBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFDbEIsQ0FBQztJQUdILFdBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ1JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ0k7QUFFOUIsSUFBTSxJQUFJLEdBQUcsSUFBSSwrQ0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSw2Q0FBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSw2Q0FBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRWxDLElBQU0sSUFBSSxHQUFHLElBQUksK0NBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZDQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZDQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSwrQ0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZDQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZDQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSwrQ0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVsQyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9jb21wb3NpdGUvRmlsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9jb21wb3NpdGUvRm9sZGVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2NvbXBvc2l0ZS9Vbml0LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvY29tcG9zaXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVbml0IGZyb20gXCIuL1VuaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZSBleHRlbmRzIFVuaXQge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaXZhdGUgc2l6ZTogbnVtYmVyKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cbiAgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNpemVcbiAgfVxufVxuIiwiaW1wb3J0IFVuaXQgZnJvbSBcIi4vVW5pdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb2xkZXIgZXh0ZW5kcyBVbml0IHtcbiAgcHJpdmF0ZSB1bml0czogQXJyYXk8VW5pdD4gPSBbXTtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwcml2YXRlIHNpemU/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy51bml0cy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5nZXRTaXplKCksIDApO1xuICB9XG5cbiAgYWRkKHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLnVuaXRzLnB1c2godW5pdCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVuaXQodW5pdDogVW5pdCwgZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3QgZG9tVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tVW5pdC5jbGFzc0xpc3QuYWRkKFwidW5pdFwiKTtcbiAgICBkb21Vbml0LmlubmVySFRNTCA9IGA8ZGl2PjxzcGFuPiR7dW5pdC5nZXROYW1lKCl9PC9zcGFuPjxzcGFuPigke3VuaXQuZ2V0U2l6ZSgpfSk8L3NwYW4+PC9kaXY+YDtcbiAgICBkb20uYXBwZW5kKGRvbVVuaXQpO1xuICAgIHJldHVybiBkb21Vbml0O1xuICB9XG5cbiAgbGlzdChkb206IEVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21Vbml0ID0gdGhpcy5jcmVhdGVVbml0KHRoaXMsIGRvbSk7XG4gICAgY29uc3QgYkZvbGRlciA9IHRoaXMgaW5zdGFuY2VvZiBGb2xkZXI7XG4gICAgaWYgKGJGb2xkZXIpIHtcbiAgICAgIHRoaXMudW5pdHMuZm9yRWFjaCgodW5pdCkgPT4ge1xuICAgICAgICBpZiAodW5pdCBpbnN0YW5jZW9mIEZvbGRlcikge1xuICAgICAgICAgIHVuaXQubGlzdChkb21Vbml0KTsgLy9jb21wb3NpdGUg64qUIOuLqOydvOyytOyZgCDsp5HtlanssrTrpbwg66y264uk67O064uIIOyerOq3gOqwgCDsooXsooUg65Ok7Ja06rCE64ukXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVVbml0KHVuaXQsIGRvbVVuaXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVuaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZyl7fVxuXG4gIGdldE5hbWUoKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm5hbWVcbiAgfVxuXG4gIGFic3RyYWN0IGdldFNpemUoKTpudW1iZXI7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRmlsZSBmcm9tIFwiLi9GaWxlXCI7XG5pbXBvcnQgRm9sZGVyIGZyb20gXCIuL0ZvbGRlclwiO1xuXG5jb25zdCByb290ID0gbmV3IEZvbGRlcihcInJvb3RcIik7XG5yb290LmFkZChuZXcgRmlsZShcImEudHh0XCIsIDEwMDApKTtcbnJvb3QuYWRkKG5ldyBGaWxlKFwiYi50eHRcIiwgMjAwMCkpO1xuXG5jb25zdCBzdWIxID0gbmV3IEZvbGRlcihcInN1YjFcIik7XG5yb290LmFkZChzdWIxKTtcbnN1YjEuYWRkKG5ldyBGaWxlKFwic2EudHh0XCIsIDEwMCkpO1xuc3ViMS5hZGQobmV3IEZpbGUoXCJzYi50eHRcIiwgNDAwMCkpO1xuXG5jb25zdCBzdWJTdWIgPSBuZXcgRm9sZGVyKFwic3ViM1wiKTtcbnN1YjEuYWRkKHN1YlN1Yik7XG5zdWJTdWIuYWRkKG5ldyBGaWxlKFwic3Vic3ViMS50eHRcIiwgMjI1MCkpO1xuc3ViU3ViLmFkZChuZXcgRmlsZShcInN1YnN1YjEudHh0XCIsIDUzNDApKTtcblxuY29uc3Qgc3ViMiA9IG5ldyBGb2xkZXIoXCJzdWIyXCIpO1xucm9vdC5hZGQoc3ViMik7XG5zdWIyLmFkZChuZXcgRmlsZShcIlNBLnR4dFwiLCAyNTApKTtcbnN1YjIuYWRkKG5ldyBGaWxlKFwiU0EudHh0XCIsIDM0MCkpO1xuXG5jb25zdCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIik7XG5yb290Lmxpc3QoZG9tKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==