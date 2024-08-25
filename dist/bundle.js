/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/weatherService.js":
/*!***************************************!*\
  !*** ./src/modules/weatherService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const API_KEY = '9VTULFNXC5FZCZMXK6PZC9GWQ';

const WeatherService = (location = 'Boise') => {
  const getWeather = async () => {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?key=${API_KEY}`, 
      { 
        method: 'GET' 
      }
    )
    .then((res) => res)
    .catch((err) => {
        throw new Error(err);
    });

    return response.json();
  }

  const getCurrent = async () => {
    const data = await getWeather();
    return data.currentConditions;
  }

  const getForecast = async () => {
    const data = await getWeather();
    return data;
  }

  return { getCurrent, getForecast };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherService);

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
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherService */ "./src/modules/weatherService.js");


const app = (async () => {
    const weatherService = (0,_modules_weatherService__WEBPACK_IMPORTED_MODULE_0__["default"])();
    
    console.log(await weatherService.getCurrent());
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2RkFBNkYsU0FBUyxpQkFBaUIsUUFBUTtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7O1VDakM3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05zRDs7QUFFdEQ7QUFDQSwyQkFBMkIsbUVBQWM7QUFDekM7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoci8uL3NyYy9tb2R1bGVzL3dlYXRoZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL3dlYXRoci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aHIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoci8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBBUElfS0VZID0gJzlWVFVMRk5YQzVGWkNaTVhLNlBaQzlHV1EnO1xuXG5jb25zdCBXZWF0aGVyU2VydmljZSA9IChsb2NhdGlvbiA9ICdCb2lzZScpID0+IHtcbiAgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259L25leHQ3ZGF5cz9rZXk9JHtBUElfS0VZfWAsIFxuICAgICAgeyBcbiAgICAgICAgbWV0aG9kOiAnR0VUJyBcbiAgICAgIH1cbiAgICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIGNvbnN0IGdldEN1cnJlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoKTtcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50Q29uZGl0aW9ucztcbiAgfVxuXG4gIGNvbnN0IGdldEZvcmVjYXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICByZXR1cm4geyBnZXRDdXJyZW50LCBnZXRGb3JlY2FzdCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyU2VydmljZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBXZWF0aGVyU2VydmljZSBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJTZXJ2aWNlXCI7XG5cbmNvbnN0IGFwcCA9IChhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlclNlcnZpY2UgPSBXZWF0aGVyU2VydmljZSgpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGF3YWl0IHdlYXRoZXJTZXJ2aWNlLmdldEN1cnJlbnQoKSk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==