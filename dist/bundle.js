/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/Article.ts":
/*!*********************************!*\
  !*** ./src/template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        this.displayHtml = function () {
            //파생클래스에서 사용할 수 없도록 readonly 처리
            return "\n    ".concat(_this.titleHtml(), "\n    ").concat(_this.contentHtml(), "\n    ").concat(_this.footerHtmml(), "\n    ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/template/EditableDisplayArticle.ts":
/*!************************************************!*\
  !*** ./src/template/EditableDisplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        var _this = _super.call(this, article) || this;
        _this.article = article;
        return _this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div>\n    <span>\uC81C\uBAA9</span>\n    <input value = ".concat(this.article.getTitle(), ">\n    </div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) {
            return "".concat(item, "\n");
        });
        return "<span>\uB0B4\uC6A9</span><br/><textarea cols='50' rows='5'>".concat(items.join(""), "</textarea>");
    };
    EditableDisplayArticle.prototype.footerHtmml = function () {
        return "<div><span>\uD15C\uD50C\uB9BF</span><input value = ".concat(this.article.getFooter(), "></div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/SimpleDisplayArticle.ts":
/*!**********************************************!*\
  !*** ./src/template/SimpleDisplayArticle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(items.join(""), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtmml = function () {
        return "<p>".concat(this.article.getFooter(), "</p>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/template/SimpleDisplayArticle.ts");



var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]("제목", ["문자1", "문자2", "문자3"], "footer");
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
document.querySelector(".content").innerHTML = display.displayHtml();
document.querySelector(".edit-mode").addEventListener("change", function (event) {
    var display;
    if (event.target.checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article);
    }
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    }
    document.querySelector(".content").innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDOEI7QUFDSjtBQUUxRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVuRSxJQUFNLE9BQU8sR0FBRyxJQUFJLDZEQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVyRSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUs7SUFDcEUsSUFBSSxPQUFPLENBQUM7SUFDWixJQUF1QixLQUFLLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdDLE9BQU8sR0FBRyxJQUFJLCtEQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxHQUFHLElBQUksNkRBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvdGVtcGxhdGUvRGlzcGxheUFydGljbGVUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy90ZW1wbGF0ZS9FZGl0YWJsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL1NpbXBsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvdGVtcGxhdGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyxcbiAgICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZ1tdLFxuICAgIHByaXZhdGUgZm9vdGVyOiBzdHJpbmdcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgcHVibGljIGdldENvbnRlbnQoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9vdGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9vdGVyO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFydGljbGU6IEFydGljbGUpIHt9XG5cbiAgcHVibGljIHJlYWRvbmx5IGRpc3BsYXlIdG1sID0gKCkgPT4ge1xuICAgIC8v7YyM7IOd7YG0656Y7Iqk7JeQ7IScIOyCrOyaqe2VoCDsiJgg7JeG64+E66GdIHJlYWRvbmx5IOyymOumrFxuICAgIHJldHVybiBgXG4gICAgJHt0aGlzLnRpdGxlSHRtbCgpfVxuICAgICR7dGhpcy5jb250ZW50SHRtbCgpfVxuICAgICR7dGhpcy5mb290ZXJIdG1tbCgpfVxuICAgIGA7XG4gIH07XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRpdGxlSHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjb250ZW50SHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBmb290ZXJIdG1tbCgpOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlRGlzcGxheUFydGljbGUgZXh0ZW5kcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcbiAgcHJvdGVjdGVkIHRpdGxlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdj5cbiAgICA8c3Bhbj7soJzrqqk8L3NwYW4+XG4gICAgPGlucHV0IHZhbHVlID0gJHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX0+XG4gICAgPC9kaXY+YDtcbiAgfVxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuYXJ0aWNsZS5nZXRDb250ZW50KCkubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gYCR7aXRlbX1cXG5gO1xuICAgIH0pO1xuICAgIHJldHVybiBgPHNwYW4+64K07JqpPC9zcGFuPjxici8+PHRleHRhcmVhIGNvbHM9JzUwJyByb3dzPSc1Jz4ke2l0ZW1zLmpvaW4oXG4gICAgICBcIlwiXG4gICAgKX08L3RleHRhcmVhPmA7XG4gIH1cbiAgcHJvdGVjdGVkIGZvb3Rlckh0bW1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2PjxzcGFuPu2FnO2UjOumvzwvc3Bhbj48aW5wdXQgdmFsdWUgPSAke3RoaXMuYXJ0aWNsZS5nZXRGb290ZXIoKX0+PC9kaXY+YDtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIHN1cGVyKGFydGljbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKGFydGljbGU6IEFydGljbGUpIHtcbiAgICBzdXBlcihhcnRpY2xlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0aXRsZUh0bWwoKSB7XG4gICAgcmV0dXJuIGA8aDE+JHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX08L2gxPmA7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmFydGljbGUuZ2V0Q29udGVudCgpLm1hcCgoaXRlbSkgPT4gYDxsaT4ke2l0ZW19PC9saT5gKTtcbiAgICByZXR1cm4gYDx1bD4ke2l0ZW1zLmpvaW4oXCJcIil9PC91bD5gO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZvb3Rlckh0bW1sKCkge1xuICAgIHJldHVybiBgPHA+JHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9PC9wPmA7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xuaW1wb3J0IEVkaXRhYmxlRGlzcGxheUFydGljbGUgZnJvbSBcIi4vRWRpdGFibGVEaXNwbGF5QXJ0aWNsZVwiO1xuaW1wb3J0IFNpbXBsZURpc3BsYXlBcnRpY2xlIGZyb20gXCIuL1NpbXBsZURpc3BsYXlBcnRpY2xlXCI7XG5cbmNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShcIuygnOuqqVwiLCBbXCLrrLjsnpAxXCIsIFwi66y47J6QMlwiLCBcIuusuOyekDNcIl0sIFwiZm9vdGVyXCIpO1xuXG5jb25zdCBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgbGV0IGRpc3BsYXk7XG4gIGlmICgoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jaGVja2VkKSB7XG4gICAgZGlzcGxheSA9IG5ldyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9