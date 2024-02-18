/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/observer/DiceGame.ts":
/*!**********************************!*\
  !*** ./src/observer/DiceGame.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DiceGame = /** @class */ (function () {
    function DiceGame() {
        this.players = new Array();
    }
    DiceGame.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    return DiceGame;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiceGame);


/***/ }),

/***/ "./src/observer/EvenBettingPlayer.ts":
/*!*******************************************!*\
  !*** ./src/observer/EvenBettingPlayer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var EvenBettingPlayer = /** @class */ (function (_super) {
    __extends(EvenBettingPlayer, _super);
    function EvenBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    EvenBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 0;
    };
    return EvenBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EvenBettingPlayer);


/***/ }),

/***/ "./src/observer/FairDiceGame.ts":
/*!**************************************!*\
  !*** ./src/observer/FairDiceGame.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DiceGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiceGame */ "./src/observer/DiceGame.ts");
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

var FairDiceGame = /** @class */ (function (_super) {
    __extends(FairDiceGame, _super);
    function FairDiceGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FairDiceGame.prototype.play = function () {
        var n = Math.floor(Math.random() * 6) + 1;
        this.players.forEach(function (player) {
            player.update(n);
        });
        return n;
    };
    return FairDiceGame;
}(_DiceGame__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FairDiceGame);


/***/ }),

/***/ "./src/observer/NBettingPlayer.ts":
/*!****************************************!*\
  !*** ./src/observer/NBettingPlayer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var NBettingPlayer = /** @class */ (function (_super) {
    __extends(NBettingPlayer, _super);
    function NBettingPlayer(name, ns) {
        var _this = _super.call(this, name) || this;
        _this.ns = ns;
        return _this;
    }
    NBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = this.ns.includes(diceNumber);
    };
    return NBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NBettingPlayer);


/***/ }),

/***/ "./src/observer/OddBettingPlayer.ts":
/*!******************************************!*\
  !*** ./src/observer/OddBettingPlayer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var OddBettingPlayer = /** @class */ (function (_super) {
    __extends(OddBettingPlayer, _super);
    function OddBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    OddBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 1;
    };
    return OddBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OddBettingPlayer);


/***/ }),

/***/ "./src/observer/Player.ts":
/*!********************************!*\
  !*** ./src/observer/Player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Player = /** @class */ (function () {
    function Player(_name) {
        this._name = _name;
        this._winning = false;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "winning", {
        get: function () {
            return this._winning;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


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
  !*** ./src/observer/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EvenBettingPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvenBettingPlayer */ "./src/observer/EvenBettingPlayer.ts");
/* harmony import */ var _FairDiceGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FairDiceGame */ "./src/observer/FairDiceGame.ts");
/* harmony import */ var _NBettingPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NBettingPlayer */ "./src/observer/NBettingPlayer.ts");
/* harmony import */ var _OddBettingPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OddBettingPlayer */ "./src/observer/OddBettingPlayer.ts");




var diceGame = new _FairDiceGame__WEBPACK_IMPORTED_MODULE_1__["default"]();
var players = [
    new _OddBettingPlayer__WEBPACK_IMPORTED_MODULE_3__["default"]("홀"),
    new _EvenBettingPlayer__WEBPACK_IMPORTED_MODULE_0__["default"]("짝"),
    new _NBettingPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]("점쟁이", [2, 3, 5]),
];
players.forEach(function (player) { return diceGame.addPlayer(player); });
function updateBoard() {
    var domPlayers = document.querySelector(".players");
    domPlayers.innerHTML = "";
    players.forEach(function (player) {
        var domPlayer = document.createElement("div");
        domPlayer.innerText = player.name;
        if (player.winning)
            domPlayer.classList.add("win");
        domPlayers.append(domPlayer);
    });
}
updateBoard();
document.querySelector("button").addEventListener("click", function () {
    var diceNumber = diceGame.play();
    var domDice = document.querySelector(".dice");
    domDice.innerText = diceNumber.toString();
    updateBoard();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUNZLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBSzFDLENBQUM7SUFKQyw0QkFBUyxHQUFULFVBQVUsTUFBYztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUgsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjZCO0FBRTlCO0lBQStDLHFDQUFNO0lBS25ELDJCQUFZLElBQVk7UUFDdEIsYUFBSyxZQUFDLElBQUksQ0FBQyxTQUFDO0lBQ2QsQ0FBQztJQU5ELGtDQUFNLEdBQU4sVUFBTyxVQUFrQjtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFLSCx3QkFBQztBQUFELENBQUMsQ0FSOEMsK0NBQU0sR0FRcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmlDO0FBRWxDO0lBQTBDLGdDQUFRO0lBQWxEOztJQVFBLENBQUM7SUFQQywyQkFBSSxHQUFKO1FBQ0UsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLENBUnlDLGlEQUFRLEdBUWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y2QjtBQUU5QjtJQUE0QyxrQ0FBTTtJQUNoRCx3QkFBWSxJQUFZLEVBQVUsRUFBaUI7UUFDakQsa0JBQUssWUFBQyxJQUFJLENBQUMsU0FBQztRQURvQixRQUFFLEdBQUYsRUFBRSxDQUFlOztJQUVuRCxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLFVBQWtCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxDQVIyQywrQ0FBTSxHQVFqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNkI7QUFFOUI7SUFBOEMsb0NBQU07SUFLbEQsMEJBQVksSUFBWTtRQUN0QixhQUFLLFlBQUMsSUFBSSxDQUFDLFNBQUM7SUFDZCxDQUFDO0lBTkQsaUNBQU0sR0FBTixVQUFPLFVBQWtCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUtILHVCQUFDO0FBQUQsQ0FBQyxDQVI2QywrQ0FBTSxHQVFuRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0lBRUUsZ0JBQW9CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRHZCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFDQSxDQUFDO0lBRXJDLHNCQUFJLHdCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBR0gsYUFBQztBQUFELENBQUM7Ozs7Ozs7O1VDYkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05vRDtBQUNWO0FBQ0k7QUFDSTtBQUVsRCxJQUFNLFFBQVEsR0FBRyxJQUFJLHFEQUFZLEVBQUUsQ0FBQztBQUNwQyxJQUFNLE9BQU8sR0FBRztJQUNkLElBQUkseURBQWdCLENBQUMsR0FBRyxDQUFDO0lBQ3pCLElBQUksMERBQWlCLENBQUMsR0FBRyxDQUFDO0lBQzFCLElBQUksdURBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3JDLENBQUM7QUFFRixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFLLGVBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztBQUV4RCxTQUFTLFdBQVc7SUFDbEIsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RCxVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtRQUNyQixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLE1BQU0sQ0FBQyxPQUFPO1lBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxXQUFXLEVBQUUsQ0FBQztBQUVkLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3pELElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztJQUMvRCxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxXQUFXLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL0RpY2VHYW1lLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL0V2ZW5CZXR0aW5nUGxheWVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL0ZhaXJEaWNlR2FtZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9vYnNlcnZlci9OQmV0dGluZ1BsYXllci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9vYnNlcnZlci9PZGRCZXR0aW5nUGxheWVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL1BsYXllci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIERpY2VHYW1lIHtcbiAgcHJvdGVjdGVkIHBsYXllcnMgPSBuZXcgQXJyYXk8UGxheWVyPigpO1xuICBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICB9XG4gIGFic3RyYWN0IHBsYXkoKTogbnVtYmVyO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbkJldHRpbmdQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICB1cGRhdGUoZGljZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fd2lubmluZyA9IGRpY2VOdW1iZXIgJSAyID09PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCBEaWNlR2FtZSBmcm9tIFwiLi9EaWNlR2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlyRGljZUdhbWUgZXh0ZW5kcyBEaWNlR2FtZSB7XG4gIHBsYXkoKTogbnVtYmVyIHtcbiAgICBjb25zdCBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci51cGRhdGUobik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG47XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5CZXR0aW5nUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwcml2YXRlIG5zOiBBcnJheTxudW1iZXI+KSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cblxuICB1cGRhdGUoZGljZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fd2lubmluZyA9IHRoaXMubnMuaW5jbHVkZXMoZGljZU51bWJlcik7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9kZEJldHRpbmdQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICB1cGRhdGUoZGljZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fd2lubmluZyA9IGRpY2VOdW1iZXIgJSAyID09PSAxO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBsYXllciB7XG4gIHByb3RlY3RlZCBfd2lubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcpIHt9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgd2lubmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lubmluZztcbiAgfVxuXG4gIGFic3RyYWN0IHVwZGF0ZShkaWNlTnVtYmVyOiBudW1iZXIpOiB2b2lkO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRXZlbkJldHRpbmdQbGF5ZXIgZnJvbSBcIi4vRXZlbkJldHRpbmdQbGF5ZXJcIjtcbmltcG9ydCBGYWlyRGljZUdhbWUgZnJvbSBcIi4vRmFpckRpY2VHYW1lXCI7XG5pbXBvcnQgTkJldHRpbmdQbGF5ZXIgZnJvbSBcIi4vTkJldHRpbmdQbGF5ZXJcIjtcbmltcG9ydCBPZGRCZXR0aW5nUGxheWVyIGZyb20gXCIuL09kZEJldHRpbmdQbGF5ZXJcIjtcblxuY29uc3QgZGljZUdhbWUgPSBuZXcgRmFpckRpY2VHYW1lKCk7XG5jb25zdCBwbGF5ZXJzID0gW1xuICBuZXcgT2RkQmV0dGluZ1BsYXllcihcIu2ZgFwiKSxcbiAgbmV3IEV2ZW5CZXR0aW5nUGxheWVyKFwi7KedXCIpLFxuICBuZXcgTkJldHRpbmdQbGF5ZXIoXCLsoJDsn4HsnbRcIiwgWzIsIDMsIDVdKSxcbl07XG5cbnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiBkaWNlR2FtZS5hZGRQbGF5ZXIocGxheWVyKSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkKCkge1xuICBjb25zdCBkb21QbGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJzXCIpO1xuICBkb21QbGF5ZXJzLmlubmVySFRNTCA9IFwiXCI7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgZG9tUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb21QbGF5ZXIuaW5uZXJUZXh0ID0gcGxheWVyLm5hbWU7XG4gICAgaWYgKHBsYXllci53aW5uaW5nKSBkb21QbGF5ZXIuY2xhc3NMaXN0LmFkZChcIndpblwiKTtcbiAgICBkb21QbGF5ZXJzLmFwcGVuZChkb21QbGF5ZXIpO1xuICB9KTtcbn1cblxudXBkYXRlQm9hcmQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgZGljZU51bWJlciA9IGRpY2VHYW1lLnBsYXkoKTtcbiAgY29uc3QgZG9tRGljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGljZVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgZG9tRGljZS5pbm5lclRleHQgPSBkaWNlTnVtYmVyLnRvU3RyaW5nKCk7XG4gIHVwZGF0ZUJvYXJkKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==