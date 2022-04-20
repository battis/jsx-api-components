(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@battis/jsx-api"), require("@battis/jsx-components"), require("path-browserify"));
	else if(typeof define === 'function' && define.amd)
		define(["@battis/jsx-api", "@battis/jsx-components", "path-browserify"], factory);
	else if(typeof exports === 'object')
		exports["BattisJsxApiComponents"] = factory(require("@battis/jsx-api"), require("@battis/jsx-components"), require("path-browserify"));
	else
		root["BattisJsxApiComponents"] = factory(root["@battis/jsx-api"], root["@battis/jsx-components"], root["path-browserify"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__battis_jsx_api__, __WEBPACK_EXTERNAL_MODULE__battis_jsx_components__, __WEBPACK_EXTERNAL_MODULE_path_browserify__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerComponent = void 0;
const ServerComponent_1 = __importDefault(__webpack_require__(/*! ./src/ServerComponent */ "./src/ServerComponent.ts"));
exports.ServerComponent = ServerComponent_1.default;


/***/ }),

/***/ "./src/ServerComponent.ts":
/*!********************************!*\
  !*** ./src/ServerComponent.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const path_browserify_1 = __importDefault(__webpack_require__(/*! path-browserify */ "path-browserify"));
const jsx_api_1 = __webpack_require__(/*! @battis/jsx-api */ "@battis/jsx-api");
const jsx_components_1 = __webpack_require__(/*! @battis/jsx-components */ "@battis/jsx-components");
class ServerComponent extends jsx_components_1.StatefulComponent {
    constructor(...args) {
        super(...args);
    }
    get id() {
        return this.state.id;
    }
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield jsx_api_1.API.post({
                endpoint: this.serverPath,
                body: data,
            });
            if (result) {
                return new this(result);
            }
            return null;
        });
    }
    static get(id, selector) {
        return __awaiter(this, void 0, void 0, function* () {
            // try to find component in DOM first
            if (selector) {
                const elements = document.body.querySelectorAll(selector);
                for (let i = 0; i < elements.length; i++) {
                    const component = this.for(elements[i]);
                    if ((component === null || component === void 0 ? void 0 : component.id) === id) {
                        return component;
                    }
                }
            }
            // ...then request from server
            const data = yield jsx_api_1.API.get({
                endpoint: path_browserify_1.default.join(this.serverPath, id),
            });
            let component;
            if (data) {
                component = new this(data);
            }
            return component || null;
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield jsx_api_1.API.get({
                endpoint: this.serverPath,
            });
            return data.map((datum) => new this(datum));
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const key of Object.getOwnPropertyNames(this.state)) {
                if (key in data && data[key] === this.state[key]) {
                    delete data[key];
                }
            }
            if (Object.getOwnPropertyNames(data).length) {
                const result = yield jsx_api_1.API.put({
                    endpoint: path_browserify_1.default.join(this.constructor.serverPath, this.id),
                    body: data,
                });
                this.updateState(result);
            }
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            yield jsx_api_1.API.delete({
                endpoint: path_browserify_1.default.join(this.constructor.serverPath, this.id),
            });
            this.element.remove();
        });
    }
    editCallback(edits) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.update(edits);
        });
    }
    editableProperties() {
        const props = {};
        Object.getOwnPropertyNames(this.state)
            .filter((key) => key !== "id")
            .forEach((key) => (props[key] = this.state[key]));
        return props;
    }
    updateState(data) {
        for (const prop of Object.getOwnPropertyNames(data)) {
            this.state[prop] = data[prop];
        }
    }
}
exports["default"] = ServerComponent;


/***/ }),

/***/ "@battis/jsx-api":
/*!**********************************!*\
  !*** external "@battis/jsx-api" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__battis_jsx_api__;

/***/ }),

/***/ "@battis/jsx-components":
/*!*****************************************!*\
  !*** external "@battis/jsx-components" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__battis_jsx_components__;

/***/ }),

/***/ "path-browserify":
/*!**********************************!*\
  !*** external "path-browserify" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_path_browserify__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QiwwQ0FBMEMsbUJBQU8sQ0FBQyx1REFBdUI7QUFDekUsdUJBQXVCOzs7Ozs7Ozs7OztBQ1BWO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBDQUEwQyxtQkFBTyxDQUFDLHdDQUFpQjtBQUNuRSxrQkFBa0IsbUJBQU8sQ0FBQyx3Q0FBaUI7QUFDM0MseUJBQXlCLG1CQUFPLENBQUMsc0RBQXdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDN0dmOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0JhdHRpc0pzeEFwaUNvbXBvbmVudHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0JhdHRpc0pzeEFwaUNvbXBvbmVudHMvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlDb21wb25lbnRzLy4vc3JjL1NlcnZlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlDb21wb25lbnRzL2V4dGVybmFsIHVtZCBcIkBiYXR0aXMvanN4LWFwaVwiIiwid2VicGFjazovL0JhdHRpc0pzeEFwaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiQGJhdHRpcy9qc3gtY29tcG9uZW50c1wiIiwid2VicGFjazovL0JhdHRpc0pzeEFwaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwicGF0aC1icm93c2VyaWZ5XCIiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpQ29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlDb21wb25lbnRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpQ29tcG9uZW50cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpQ29tcG9uZW50cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGJhdHRpcy9qc3gtYXBpXCIpLCByZXF1aXJlKFwiQGJhdHRpcy9qc3gtY29tcG9uZW50c1wiKSwgcmVxdWlyZShcInBhdGgtYnJvd3NlcmlmeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYmF0dGlzL2pzeC1hcGlcIiwgXCJAYmF0dGlzL2pzeC1jb21wb25lbnRzXCIsIFwicGF0aC1icm93c2VyaWZ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkJhdHRpc0pzeEFwaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYmF0dGlzL2pzeC1hcGlcIiksIHJlcXVpcmUoXCJAYmF0dGlzL2pzeC1jb21wb25lbnRzXCIpLCByZXF1aXJlKFwicGF0aC1icm93c2VyaWZ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJCYXR0aXNKc3hBcGlDb21wb25lbnRzXCJdID0gZmFjdG9yeShyb290W1wiQGJhdHRpcy9qc3gtYXBpXCJdLCByb290W1wiQGJhdHRpcy9qc3gtY29tcG9uZW50c1wiXSwgcm9vdFtcInBhdGgtYnJvd3NlcmlmeVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmF0dGlzX2pzeF9hcGlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmF0dGlzX2pzeF9jb21wb25lbnRzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGF0aF9icm93c2VyaWZ5X18pID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VydmVyQ29tcG9uZW50ID0gdm9pZCAwO1xuY29uc3QgU2VydmVyQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL1NlcnZlckNvbXBvbmVudFwiKSk7XG5leHBvcnRzLlNlcnZlckNvbXBvbmVudCA9IFNlcnZlckNvbXBvbmVudF8xLmRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGF0aF9icm93c2VyaWZ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhdGgtYnJvd3NlcmlmeVwiKSk7XG5jb25zdCBqc3hfYXBpXzEgPSByZXF1aXJlKFwiQGJhdHRpcy9qc3gtYXBpXCIpO1xuY29uc3QganN4X2NvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCJAYmF0dGlzL2pzeC1jb21wb25lbnRzXCIpO1xuY2xhc3MgU2VydmVyQ29tcG9uZW50IGV4dGVuZHMganN4X2NvbXBvbmVudHNfMS5TdGF0ZWZ1bENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pZDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShkYXRhKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBqc3hfYXBpXzEuQVBJLnBvc3Qoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiB0aGlzLnNlcnZlclBhdGgsXG4gICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcyhyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0KGlkLCBzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbmQgY29tcG9uZW50IGluIERPTSBmaXJzdFxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5mb3IoZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvbXBvbmVudCA9PT0gbnVsbCB8fCBjb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBvbmVudC5pZCkgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLi4udGhlbiByZXF1ZXN0IGZyb20gc2VydmVyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQganN4X2FwaV8xLkFQSS5nZXQoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBwYXRoX2Jyb3dzZXJpZnlfMS5kZWZhdWx0LmpvaW4odGhpcy5zZXJ2ZXJQYXRoLCBpZCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyB0aGlzKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudCB8fCBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGxpc3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQganN4X2FwaV8xLkFQSS5nZXQoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiB0aGlzLnNlcnZlclBhdGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLm1hcCgoZGF0dW0pID0+IG5ldyB0aGlzKGRhdHVtKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGUoZGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIGRhdGEgJiYgZGF0YVtrZXldID09PSB0aGlzLnN0YXRlW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQganN4X2FwaV8xLkFQSS5wdXQoe1xuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogcGF0aF9icm93c2VyaWZ5XzEuZGVmYXVsdC5qb2luKHRoaXMuY29uc3RydWN0b3Iuc2VydmVyUGF0aCwgdGhpcy5pZCksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQganN4X2FwaV8xLkFQSS5kZWxldGUoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBwYXRoX2Jyb3dzZXJpZnlfMS5kZWZhdWx0LmpvaW4odGhpcy5jb25zdHJ1Y3Rvci5zZXJ2ZXJQYXRoLCB0aGlzLmlkKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWRpdENhbGxiYWNrKGVkaXRzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLnVwZGF0ZShlZGl0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlZGl0YWJsZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuc3RhdGUpXG4gICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGtleSAhPT0gXCJpZFwiKVxuICAgICAgICAgICAgLmZvckVhY2goKGtleSkgPT4gKHByb3BzW2tleV0gPSB0aGlzLnN0YXRlW2tleV0pKTtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0ZShkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZVtwcm9wXSA9IGRhdGFbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTZXJ2ZXJDb21wb25lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2JhdHRpc19qc3hfYXBpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19iYXR0aXNfanN4X2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGF0aF9icm93c2VyaWZ5X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=