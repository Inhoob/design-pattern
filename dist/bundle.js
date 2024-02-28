/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mediator/CoolAircon.ts":
/*!************************************!*\
  !*** ./src/mediator/CoolAircon.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var HeatBoiler = /** @class */ (function (_super) {
    __extends(HeatBoiler, _super);
    function HeatBoiler(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    HeatBoiler.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? "aircon 꺼짐" : "aircon 가동중";
        if (this.bOff)
            dom.classList.remove("highlighting");
        else
            dom.classList.add("highlighting");
    };
    HeatBoiler.prototype.off = function () {
        if (this.bOff) {
            return;
        }
        this.bOff = true;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.on = function () {
        if (!this.bOff) {
            return;
        }
        this.bOff = false;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.isRunning = function () {
        return !this.off;
    };
    return HeatBoiler;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeatBoiler);


/***/ }),

/***/ "./src/mediator/Door.ts":
/*!******************************!*\
  !*** ./src/mediator/Door.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Door.prototype.displayState = function (dom) {
        dom.innerHTML = this.bClosed ? "door closed" : "door open";
        if (this.bClosed)
            dom.classList.remove("highlighting");
        else
            dom.classList.add("highlighting");
    };
    Door.prototype.open = function () {
        if (this.bClosed) {
            this.bClosed = false;
            this.mediator.participantChanged(this);
        }
    };
    Door.prototype.close = function () {
        if (!this.bClosed) {
            this.bClosed = true;
            this.mediator.participantChanged(this);
        }
    };
    Door.prototype.isClosed = function () {
        return this.bClosed;
    };
    return Door;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Door);


/***/ }),

/***/ "./src/mediator/HeatBoiler.ts":
/*!************************************!*\
  !*** ./src/mediator/HeatBoiler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var HeatBoiler = /** @class */ (function (_super) {
    __extends(HeatBoiler, _super);
    function HeatBoiler(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    HeatBoiler.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? "boiler off" : "boiler on";
        if (this.bOff)
            dom.classList.remove("highlighting");
        else
            dom.classList.add("highlighting");
    };
    HeatBoiler.prototype.off = function () {
        if (this.bOff) {
            return;
        }
        this.bOff = true;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.on = function () {
        if (!this.bOff) {
            return;
        }
        this.bOff = false;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.isRunning = function () {
        return !this.off;
    };
    return HeatBoiler;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeatBoiler);


/***/ }),

/***/ "./src/mediator/Participant.ts":
/*!*************************************!*\
  !*** ./src/mediator/Participant.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Participant = /** @class */ (function () {
    function Participant(mediator) {
        this.mediator = mediator;
    }
    return Participant;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Participant);


/***/ }),

/***/ "./src/mediator/SmartHome.ts":
/*!***********************************!*\
  !*** ./src/mediator/SmartHome.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CoolAircon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoolAircon */ "./src/mediator/CoolAircon.ts");
/* harmony import */ var _Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Door */ "./src/mediator/Door.ts");
/* harmony import */ var _HeatBoiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeatBoiler */ "./src/mediator/HeatBoiler.ts");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Window */ "./src/mediator/Window.ts");




var SmartHome = /** @class */ (function () {
    function SmartHome() {
        this.door = new _Door__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.window = new _Window__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.aircon = new _CoolAircon__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.heatBoiler = new _HeatBoiler__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    }
    SmartHome.prototype.participantChanged = function (participant) {
        if (participant === this.door && !this.door.isClosed()) {
            this.aircon.off();
            this.heatBoiler.off();
        }
        if (participant === this.window && !this.window.isClosed()) {
            this.aircon.off();
            this.heatBoiler.off();
        }
        if (participant === this.aircon && !this.aircon.isRunning()) {
            this.heatBoiler.off();
            this.window.close();
            this.door.close();
        }
        if (participant === this.heatBoiler && !this.heatBoiler.isRunning()) {
            this.aircon.off();
            this.window.close();
            this.door.close();
        }
    };
    SmartHome.prototype.display = function () {
        var dom1 = document.querySelector(".door");
        var dom2 = document.querySelector(".window");
        var dom3 = document.querySelector(".coolaircon");
        var dom4 = document.querySelector(".heatboiler");
        this.door.displayState(dom1);
        this.window.displayState(dom2);
        this.aircon.displayState(dom3);
        this.heatBoiler.displayState(dom4);
    };
    SmartHome.prototype.install = function () {
        var _this = this;
        var dom1 = document.querySelector(".door");
        var dom2 = document.querySelector(".window");
        var dom3 = document.querySelector(".coolaircon");
        var dom4 = document.querySelector(".heatboiler");
        dom1.addEventListener("click", function () {
            _this.door.isClosed() ? _this.door.open() : _this.door.close();
            _this.display();
        });
        dom2.addEventListener("click", function () {
            _this.window.isClosed() ? _this.window.open() : _this.window.close();
            _this.display();
        });
        dom3.addEventListener("click", function () {
            _this.aircon.isRunning() ? _this.aircon.off() : _this.aircon.on();
            _this.display();
        });
        dom4.addEventListener("click", function () {
            _this.heatBoiler.isRunning()
                ? _this.heatBoiler.off()
                : _this.heatBoiler.on();
            _this.display();
        });
        this.display();
    };
    return SmartHome;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartHome);


/***/ }),

/***/ "./src/mediator/Window.ts":
/*!********************************!*\
  !*** ./src/mediator/Window.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Window.prototype.displayState = function (dom) {
        dom.innerHTML = this.bClosed ? "window closed" : "window open";
        if (this.bClosed)
            dom.classList.remove("highlighting");
        else
            dom.classList.add("highlighting");
    };
    Window.prototype.open = function () {
        if (this.bClosed) {
            this.bClosed = false;
            this.mediator.participantChanged(this);
        }
    };
    Window.prototype.close = function () {
        if (!this.bClosed) {
            this.bClosed = true;
            this.mediator.participantChanged(this);
        }
    };
    Window.prototype.isClosed = function () {
        return this.bClosed;
    };
    return Window;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);


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
/*!*******************************!*\
  !*** ./src/mediator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmartHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartHome */ "./src/mediator/SmartHome.ts");

var home = new _SmartHome__WEBPACK_IMPORTED_MODULE_0__["default"]();
home.install();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQztBQUVwQyxJQUFNLElBQUksR0FBRyxJQUFJLGtEQUFTLEVBQUUsQ0FBQztBQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9tZWRpYXRvci9Db29sQWlyY29uLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL0Rvb3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvbWVkaWF0b3IvSGVhdEJvaWxlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9tZWRpYXRvci9QYXJ0aWNpcGFudC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9tZWRpYXRvci9TbWFydEhvbWUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvbWVkaWF0b3IvV2luZG93LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvbWVkaWF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhdG9yIGZyb20gXCIuL01lZGlhdG9yXCI7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSBcIi4vUGFydGljaXBhbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhdEJvaWxlciBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgcHJpdmF0ZSBiT2ZmID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJIVE1MID0gdGhpcy5iT2ZmID8gXCJhaXJjb24g6rq87KeQXCIgOiBcImFpcmNvbiDqsIDrj5nspJFcIjtcbiAgICBpZiAodGhpcy5iT2ZmKSBkb20uY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodGluZ1wiKTtcbiAgICBlbHNlIGRvbS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0aW5nXCIpO1xuICB9XG5cbiAgb2ZmKCkge1xuICAgIGlmICh0aGlzLmJPZmYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5iT2ZmID0gdHJ1ZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcbiAgfVxuICBvbigpIHtcbiAgICBpZiAoIXRoaXMuYk9mZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJPZmYgPSBmYWxzZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcbiAgfVxuICBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuICF0aGlzLm9mZjtcbiAgfVxufVxuIiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gXCIuL01lZGlhdG9yXCI7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSBcIi4vUGFydGljaXBhbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9vciBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgcHJpdmF0ZSBiQ2xvc2VkID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJIVE1MID0gdGhpcy5iQ2xvc2VkID8gXCJkb29yIGNsb3NlZFwiIDogXCJkb29yIG9wZW5cIjtcbiAgICBpZiAodGhpcy5iQ2xvc2VkKSBkb20uY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodGluZ1wiKTtcbiAgICBlbHNlIGRvbS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0aW5nXCIpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAodGhpcy5iQ2xvc2VkKSB7XG4gICAgICB0aGlzLmJDbG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICAgIH1cbiAgfVxuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuYkNsb3NlZCkge1xuICAgICAgdGhpcy5iQ2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICAgIH1cbiAgfVxuICBpc0Nsb3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5iQ2xvc2VkO1xuICB9XG59XG4iLCJpbXBvcnQgTWVkaWF0b3IgZnJvbSBcIi4vTWVkaWF0b3JcIjtcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tIFwiLi9QYXJ0aWNpcGFudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWF0Qm9pbGVyIGV4dGVuZHMgUGFydGljaXBhbnQge1xuICBwcml2YXRlIGJPZmYgPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJPZmYgPyBcImJvaWxlciBvZmZcIiA6IFwiYm9pbGVyIG9uXCI7XG4gICAgaWYgKHRoaXMuYk9mZikgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRpbmdcIik7XG4gICAgZWxzZSBkb20uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodGluZ1wiKTtcbiAgfVxuXG4gIG9mZigpIHtcbiAgICBpZiAodGhpcy5iT2ZmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYk9mZiA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cbiAgb24oKSB7XG4gICAgaWYgKCF0aGlzLmJPZmYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5iT2ZmID0gZmFsc2U7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cbiAgaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiAhdGhpcy5vZmY7XG4gIH1cbn1cbiIsImltcG9ydCBNZWRpYXRvciBmcm9tIFwiLi9NZWRpYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQYXJ0aWNpcGFudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtZWRpYXRvcjogTWVkaWF0b3IpIHt9XG4gIGFic3RyYWN0IGRpc3BsYXlTdGF0ZShkb206IEhUTUxFbGVtZW50KTogdm9pZDtcbn1cbiIsImltcG9ydCBDb29sQWlyY29uIGZyb20gXCIuL0Nvb2xBaXJjb25cIjtcbmltcG9ydCBEb29yIGZyb20gXCIuL0Rvb3JcIjtcbmltcG9ydCBIZWF0Qm9pbGVyIGZyb20gXCIuL0hlYXRCb2lsZXJcIjtcbmltcG9ydCBNZWRpYXRvciBmcm9tIFwiLi9NZWRpYXRvclwiO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gXCIuL1BhcnRpY2lwYW50XCI7XG5pbXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydEhvbWUgaW1wbGVtZW50cyBNZWRpYXRvciB7XG4gIGRvb3IgPSBuZXcgRG9vcih0aGlzKTtcbiAgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzKTtcbiAgYWlyY29uID0gbmV3IENvb2xBaXJjb24odGhpcyk7XG4gIGhlYXRCb2lsZXIgPSBuZXcgSGVhdEJvaWxlcih0aGlzKTtcblxuICBwYXJ0aWNpcGFudENoYW5nZWQocGFydGljaXBhbnQ6IFBhcnRpY2lwYW50KTogdm9pZCB7XG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmRvb3IgJiYgIXRoaXMuZG9vci5pc0Nsb3NlZCgpKSB7XG4gICAgICB0aGlzLmFpcmNvbi5vZmYoKTtcbiAgICAgIHRoaXMuaGVhdEJvaWxlci5vZmYoKTtcbiAgICB9XG5cbiAgICBpZiAocGFydGljaXBhbnQgPT09IHRoaXMud2luZG93ICYmICF0aGlzLndpbmRvdy5pc0Nsb3NlZCgpKSB7XG4gICAgICB0aGlzLmFpcmNvbi5vZmYoKTtcbiAgICAgIHRoaXMuaGVhdEJvaWxlci5vZmYoKTtcbiAgICB9XG5cbiAgICBpZiAocGFydGljaXBhbnQgPT09IHRoaXMuYWlyY29uICYmICF0aGlzLmFpcmNvbi5pc1J1bm5pbmcoKSkge1xuICAgICAgdGhpcy5oZWF0Qm9pbGVyLm9mZigpO1xuICAgICAgdGhpcy53aW5kb3cuY2xvc2UoKTtcbiAgICAgIHRoaXMuZG9vci5jbG9zZSgpO1xuICAgIH1cblxuICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gdGhpcy5oZWF0Qm9pbGVyICYmICF0aGlzLmhlYXRCb2lsZXIuaXNSdW5uaW5nKCkpIHtcbiAgICAgIHRoaXMuYWlyY29uLm9mZigpO1xuICAgICAgdGhpcy53aW5kb3cuY2xvc2UoKTtcbiAgICAgIHRoaXMuZG9vci5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgY29uc3QgZG9tMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9vclwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb20yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kb3dcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29vbGFpcmNvblwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb200ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWF0Ym9pbGVyXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuZG9vci5kaXNwbGF5U3RhdGUoZG9tMSk7XG4gICAgdGhpcy53aW5kb3cuZGlzcGxheVN0YXRlKGRvbTIpO1xuICAgIHRoaXMuYWlyY29uLmRpc3BsYXlTdGF0ZShkb20zKTtcbiAgICB0aGlzLmhlYXRCb2lsZXIuZGlzcGxheVN0YXRlKGRvbTQpO1xuICB9XG5cbiAgaW5zdGFsbCgpIHtcbiAgICBjb25zdCBkb20xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb29yXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvd1wiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb20zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29sYWlyY29uXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYXRib2lsZXJcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgZG9tMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kb29yLmlzQ2xvc2VkKCkgPyB0aGlzLmRvb3Iub3BlbigpIDogdGhpcy5kb29yLmNsb3NlKCk7XG4gICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICB9KTtcbiAgICBkb20yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLndpbmRvdy5pc0Nsb3NlZCgpID8gdGhpcy53aW5kb3cub3BlbigpIDogdGhpcy53aW5kb3cuY2xvc2UoKTtcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH0pO1xuICAgIGRvbTMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuYWlyY29uLmlzUnVubmluZygpID8gdGhpcy5haXJjb24ub2ZmKCkgOiB0aGlzLmFpcmNvbi5vbigpO1xuICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfSk7XG4gICAgZG9tNC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5oZWF0Qm9pbGVyLmlzUnVubmluZygpXG4gICAgICAgID8gdGhpcy5oZWF0Qm9pbGVyLm9mZigpXG4gICAgICAgIDogdGhpcy5oZWF0Qm9pbGVyLm9uKCk7XG4gICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gXCIuL01lZGlhdG9yXCI7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSBcIi4vUGFydGljaXBhbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93IGV4dGVuZHMgUGFydGljaXBhbnQge1xuICBwcml2YXRlIGJDbG9zZWQgPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJDbG9zZWQgPyBcIndpbmRvdyBjbG9zZWRcIiA6IFwid2luZG93IG9wZW5cIjtcbiAgICBpZiAodGhpcy5iQ2xvc2VkKSBkb20uY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodGluZ1wiKTtcbiAgICBlbHNlIGRvbS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0aW5nXCIpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAodGhpcy5iQ2xvc2VkKSB7XG4gICAgICB0aGlzLmJDbG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICAgIH1cbiAgfVxuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuYkNsb3NlZCkge1xuICAgICAgdGhpcy5iQ2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICAgIH1cbiAgfVxuICBpc0Nsb3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5iQ2xvc2VkO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTbWFydEhvbWUgZnJvbSBcIi4vU21hcnRIb21lXCI7XG5cbmNvbnN0IGhvbWUgPSBuZXcgU21hcnRIb21lKCk7XG5ob21lLmluc3RhbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==