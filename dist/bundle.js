/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/memento/BlindMan.ts":
/*!*********************************!*\
  !*** ./src/memento/BlindMan.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   Memento: () => (/* binding */ Memento),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Action;
(function (Action) {
    Action[Action["UP"] = 1] = "UP";
    Action[Action["DOWN"] = 2] = "DOWN";
    Action[Action["LEFT"] = 3] = "LEFT";
    Action[Action["RIGHT"] = 4] = "RIGHT";
})(Action || (Action = {}));
var Memento = /** @class */ (function () {
    function Memento(_x, _y, actions) {
        this._x = _x;
        this._y = _y;
        this._actions = new Array();
        this._actions = structuredClone(actions);
    }
    Object.defineProperty(Memento.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Memento.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Memento.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Memento;
}());

var BlindMan = /** @class */ (function () {
    function BlindMan(currentX, currentY, targetX, targetY) {
        this.currentX = currentX;
        this.currentY = currentY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.actions = new Array();
    }
    BlindMan.prototype.walk = function (action) {
        this.actions.push(action);
        if (action === Action.UP)
            this.currentY += 1;
        if (action === Action.DOWN)
            this.currentY -= 1;
        if (action === Action.LEFT)
            this.currentX -= 1;
        if (action === Action.RIGHT)
            this.currentX += 1;
        return Math.sqrt(Math.pow(this.targetX - this.currentX, 2) +
            Math.pow(this.targetY - this.currentY, 2));
    };
    BlindMan.prototype.createMemento = function () {
        return new Memento(this.currentX, this.currentY, this.actions);
    };
    BlindMan.prototype.restoreMemento = function (memento) {
        this.currentX = memento.x;
        this.currentY = memento.y;
        this.actions = structuredClone(memento.actions);
    };
    BlindMan.prototype.resultPath = function () {
        return this.actions.map(function (action) { return Action[action]; }).join("->");
    };
    return BlindMan;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlindMan);


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
  !*** ./src/memento/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlindMan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlindMan */ "./src/memento/BlindMan.ts");

var blindMan = new _BlindMan__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 10, 10);
var minDistance = Number.MAX_VALUE;
var memento = null;
while (true) {
    var action = Math.floor(Math.random() * 4) + 1;
    var distance = blindMan.walk(action);
    console.log(_BlindMan__WEBPACK_IMPORTED_MODULE_0__.Action[action], distance);
    if (distance === 0.0) {
        console.log("도착!!");
        break;
    }
    if (minDistance > distance) {
        minDistance = distance;
        memento = blindMan.createMemento();
    }
    else {
        if (memento !== null) {
            blindMan.restoreMemento(memento);
        }
    }
}
console.log(blindMan.resultPath());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBTSxDQUFDO1FBQ04sSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvbWVtZW50by9CbGluZE1hbi50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL21lbWVudG8vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQWN0aW9uIHtcbiAgVVAgPSAxLFxuICBET1dOID0gMixcbiAgTEVGVCA9IDMsXG4gIFJJR0hUID0gNCxcbn1cblxuZXhwb3J0IGNsYXNzIE1lbWVudG8ge1xuICBwcml2YXRlIF9hY3Rpb25zID0gbmV3IEFycmF5PEFjdGlvbj4oKTtcbiAgZ2V0IGFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnM7XG4gIH1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfeDogbnVtYmVyLCBwcml2YXRlIF95OiBudW1iZXIsIGFjdGlvbnM6IEFycmF5PEFjdGlvbj4pIHtcbiAgICB0aGlzLl9hY3Rpb25zID0gc3RydWN0dXJlZENsb25lKGFjdGlvbnMpO1xuICB9XG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsaW5kTWFuIHtcbiAgcHJpdmF0ZSBhY3Rpb25zID0gbmV3IEFycmF5PEFjdGlvbj4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXJyZW50WDogbnVtYmVyLFxuICAgIHByaXZhdGUgY3VycmVudFk6IG51bWJlcixcbiAgICBwcml2YXRlIHRhcmdldFg6IG51bWJlcixcbiAgICBwcml2YXRlIHRhcmdldFk6IG51bWJlclxuICApIHt9XG5cbiAgd2FsayhhY3Rpb246IEFjdGlvbik6IG51bWJlciB7XG4gICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICBpZiAoYWN0aW9uID09PSBBY3Rpb24uVVApIHRoaXMuY3VycmVudFkgKz0gMTtcbiAgICBpZiAoYWN0aW9uID09PSBBY3Rpb24uRE9XTikgdGhpcy5jdXJyZW50WSAtPSAxO1xuICAgIGlmIChhY3Rpb24gPT09IEFjdGlvbi5MRUZUKSB0aGlzLmN1cnJlbnRYIC09IDE7XG4gICAgaWYgKGFjdGlvbiA9PT0gQWN0aW9uLlJJR0hUKSB0aGlzLmN1cnJlbnRYICs9IDE7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KHRoaXMudGFyZ2V0WCAtIHRoaXMuY3VycmVudFgsIDIpICtcbiAgICAgICAgTWF0aC5wb3codGhpcy50YXJnZXRZIC0gdGhpcy5jdXJyZW50WSwgMilcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlTWVtZW50bygpOiBNZW1lbnRvIHtcbiAgICByZXR1cm4gbmV3IE1lbWVudG8odGhpcy5jdXJyZW50WCwgdGhpcy5jdXJyZW50WSwgdGhpcy5hY3Rpb25zKTtcbiAgfVxuXG4gIHJlc3RvcmVNZW1lbnRvKG1lbWVudG86IE1lbWVudG8pIHtcbiAgICB0aGlzLmN1cnJlbnRYID0gbWVtZW50by54O1xuICAgIHRoaXMuY3VycmVudFkgPSBtZW1lbnRvLnk7XG4gICAgdGhpcy5hY3Rpb25zID0gc3RydWN0dXJlZENsb25lKG1lbWVudG8uYWN0aW9ucyk7XG4gIH1cblxuICByZXN1bHRQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gQWN0aW9uW2FjdGlvbl0pLmpvaW4oXCItPlwiKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQmxpbmRNYW4sIHsgQWN0aW9uLCBNZW1lbnRvIH0gZnJvbSBcIi4vQmxpbmRNYW5cIjtcblxuY29uc3QgYmxpbmRNYW4gPSBuZXcgQmxpbmRNYW4oMCwgMCwgMTAsIDEwKTtcblxubGV0IG1pbkRpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcbmxldCBtZW1lbnRvOiBNZW1lbnRvID0gbnVsbDtcblxud2hpbGUgKHRydWUpIHtcbiAgY29uc3QgYWN0aW9uOiBBY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XG4gIGNvbnN0IGRpc3RhbmNlID0gYmxpbmRNYW4ud2FsayhhY3Rpb24pO1xuXG4gIGNvbnNvbGUubG9nKEFjdGlvblthY3Rpb25dLCBkaXN0YW5jZSk7XG5cbiAgaWYgKGRpc3RhbmNlID09PSAwLjApIHtcbiAgICBjb25zb2xlLmxvZyhcIuuPhOywqSEhXCIpO1xuICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKG1pbkRpc3RhbmNlID4gZGlzdGFuY2UpIHtcbiAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIG1lbWVudG8gPSBibGluZE1hbi5jcmVhdGVNZW1lbnRvKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1lbWVudG8gIT09IG51bGwpIHtcbiAgICAgIGJsaW5kTWFuLnJlc3RvcmVNZW1lbnRvKG1lbWVudG8pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zb2xlLmxvZyhibGluZE1hbi5yZXN1bHRQYXRoKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9