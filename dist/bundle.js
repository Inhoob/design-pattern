/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flyweight/Digit.ts":
/*!********************************!*\
  !*** ./src/flyweight/Digit.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Digit: () => (/* binding */ Digit)
/* harmony export */ });
var Digit = /** @class */ (function () {
    function Digit(url) {
        this.url = url;
        this.data = null;
    }
    Digit.prototype.load = function (url, domOutput) {
        var _this = this;
        fetch(url)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            _this.data = json;
            if (domOutput) {
                _this.put(domOutput);
            }
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    Digit.prototype.put = function (dom) {
        if (!this.data) {
            this.load(this.url, dom);
        }
        else {
            dom.innerHTML = "<div class=\"digit-layout\"></div>";
            var digitLayout_1 = dom.querySelector(".digit-layout");
            this.data.forEach(function (item) {
                var len = item.length;
                for (var i = 0; i < len + 1; i++) {
                    var domCell = document.createElement("div");
                    domCell.style.backgroundColor = item[i] === "1" ? "#ff0" : "#333";
                    digitLayout_1 === null || digitLayout_1 === void 0 ? void 0 : digitLayout_1.append(domCell);
                }
            });
        }
    };
    return Digit;
}());



/***/ }),

/***/ "./src/flyweight/DigitFactory.ts":
/*!***************************************!*\
  !*** ./src/flyweight/DigitFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitFactory: () => (/* binding */ DigitFactory)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/flyweight/Digit.ts");

var DigitFactory = /** @class */ (function () {
    function DigitFactory() {
        this.pool = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ];
    }
    DigitFactory.prototype.getDigit = function (n) {
        if (!this.pool[n]) {
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__.Digit("../../src/flyweight/data/".concat(n, ".json"));
            console.log(this.pool[n]);
        }
        return this.pool[n];
    };
    return DigitFactory;
}());



/***/ }),

/***/ "./src/flyweight/Number.ts":
/*!*********************************!*\
  !*** ./src/flyweight/Number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Number: () => (/* binding */ Number)
/* harmony export */ });
var Number = /** @class */ (function () {
    function Number(factory, num) {
        this.factory = factory;
        this.num = num;
    }
    Number.prototype.put = function (dom) {
        var strNum = this.num.toString();
        var len = strNum.length;
        dom.innerHTML = "";
        for (var i = 0; i < len; i++) {
            var div = document.createElement("div");
            this.factory.getDigit(parseInt(strNum[i])).put(div);
            dom.append(div);
        }
    };
    return Number;
}());



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
  !*** ./src/flyweight/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/flyweight/DigitFactory.ts");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number */ "./src/flyweight/Number.ts");


console.log("flyweight!!");
var factory = new _DigitFactory__WEBPACK_IMPORTED_MODULE_0__.DigitFactory();
var domTarget = document.querySelector("#tmp");
var value = 10000;
setInterval(function () {
    var number = new _Number__WEBPACK_IMPORTED_MODULE_1__.Number(factory, value);
    number.put(domTarget);
    value++;
}, 1000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHRSxlQUFvQixHQUFXO1FBQVgsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUZ2QixTQUFJLEdBQXlCLElBQUksQ0FBQztJQUVSLENBQUM7SUFFM0Isb0JBQUksR0FBWixVQUFhLEdBQVcsRUFBRSxTQUFrQjtRQUE1QyxpQkFlQztRQWRDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDUCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWpCLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUJBQUcsR0FBSCxVQUFJLEdBQVk7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ04sR0FBRyxDQUFDLFNBQVMsR0FBRyxvQ0FBa0MsQ0FBQztZQUNuRCxJQUFNLGFBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBWTtnQkFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDakMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ2xFLGFBQVcsYUFBWCxhQUFXLHVCQUFYLGFBQVcsQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEMrQjtBQUVoQztJQUFBO1FBQ1UsU0FBSSxHQUF3QjtZQUNsQyxJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1NBQ0wsQ0FBQztJQVNKLENBQUM7SUFQQywrQkFBUSxHQUFSLFVBQVMsQ0FBUztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSx5Q0FBSyxDQUFDLG1DQUE0QixDQUFDLFVBQU8sQ0FBQyxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDtJQUNFLGdCQUFvQixPQUFxQixFQUFVLEdBQVc7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFBRyxDQUFDO0lBRWxFLG9CQUFHLEdBQUgsVUFBSSxHQUFZO1FBQ2QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7Ozs7O1VDaEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ1o7QUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUUzQixJQUFNLE9BQU8sR0FBRyxJQUFJLHVEQUFZLEVBQUUsQ0FBQztBQUVuQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRWpELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztBQUVsQixXQUFXLENBQUM7SUFDVixJQUFNLE1BQU0sR0FBRyxJQUFJLDJDQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBVSxDQUFDLENBQUM7SUFDdkIsS0FBSyxFQUFFLENBQUM7QUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mbHl3ZWlnaHQvRGlnaXQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmx5d2VpZ2h0L0RpZ2l0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mbHl3ZWlnaHQvTnVtYmVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmx5d2VpZ2h0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEaWdpdCB7XG4gIHByaXZhdGUgZGF0YTogQXJyYXk8c3RyaW5nPiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXJsOiBzdHJpbmcpIHt9XG5cbiAgcHJpdmF0ZSBsb2FkKHVybDogc3RyaW5nLCBkb21PdXRwdXQ6IEVsZW1lbnQpIHtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBqc29uO1xuXG4gICAgICAgIGlmIChkb21PdXRwdXQpIHtcbiAgICAgICAgICB0aGlzLnB1dChkb21PdXRwdXQpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdXQoZG9tOiBFbGVtZW50KSB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMubG9hZCh0aGlzLnVybCwgZG9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZGlnaXQtbGF5b3V0XCI+PC9kaXY+YDtcbiAgICAgIGNvbnN0IGRpZ2l0TGF5b3V0ID0gZG9tLnF1ZXJ5U2VsZWN0b3IoXCIuZGlnaXQtbGF5b3V0XCIpO1xuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBsZW4gPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gKyAxOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBkb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBkb21DZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGl0ZW1baV0gPT09IFwiMVwiID8gXCIjZmYwXCIgOiBcIiMzMzNcIjtcbiAgICAgICAgICBkaWdpdExheW91dD8uYXBwZW5kKGRvbUNlbGwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpZ2l0IH0gZnJvbSBcIi4vRGlnaXRcIjtcblxuZXhwb3J0IGNsYXNzIERpZ2l0RmFjdG9yeSB7XG4gIHByaXZhdGUgcG9vbDogQXJyYXk8RGlnaXQgfCBudWxsPiA9IFtcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICBdO1xuXG4gIGdldERpZ2l0KG46IG51bWJlcikge1xuICAgIGlmICghdGhpcy5wb29sW25dKSB7XG4gICAgICB0aGlzLnBvb2xbbl0gPSBuZXcgRGlnaXQoYC4uLy4uL3NyYy9mbHl3ZWlnaHQvZGF0YS8ke259Lmpzb25gKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9vbFtuXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvb2xbbl07XG4gIH1cbn1cbiIsImltcG9ydCB7IERpZ2l0RmFjdG9yeSB9IGZyb20gXCIuL0RpZ2l0RmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYWN0b3J5OiBEaWdpdEZhY3RvcnksIHByaXZhdGUgbnVtOiBudW1iZXIpIHt9XG5cbiAgcHV0KGRvbTogRWxlbWVudCkge1xuICAgIGNvbnN0IHN0ck51bSA9IHRoaXMubnVtLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbGVuID0gc3RyTnVtLmxlbmd0aDtcbiAgICBkb20uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aGlzLmZhY3RvcnkuZ2V0RGlnaXQocGFyc2VJbnQoc3RyTnVtW2ldKSkhLnB1dChkaXYpO1xuICAgICAgZG9tLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBEaWdpdEZhY3RvcnkgfSBmcm9tIFwiLi9EaWdpdEZhY3RvcnlcIjtcbmltcG9ydCB7IE51bWJlciB9IGZyb20gXCIuL051bWJlclwiO1xuXG5jb25zb2xlLmxvZyhcImZseXdlaWdodCEhXCIpO1xuXG5jb25zdCBmYWN0b3J5ID0gbmV3IERpZ2l0RmFjdG9yeSgpO1xuXG5jb25zdCBkb21UYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RtcFwiKTtcblxubGV0IHZhbHVlID0gMTAwMDA7XG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gbmV3IE51bWJlcihmYWN0b3J5LCB2YWx1ZSk7XG4gIG51bWJlci5wdXQoZG9tVGFyZ2V0ISk7XG4gIHZhbHVlKys7XG59LCAxMDAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==