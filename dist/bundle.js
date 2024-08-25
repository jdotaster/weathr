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

const WeatherService = () => {
  const getData = async (options = { location: 'Boise' }) => {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
        + `${options.location}`
        + `${options.date1 ? '/' + options.date1 : ''}`
        + `${options.date2 ? '/' + options.date2 : ''}`
        + `?key=${API_KEY}`, 
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

  const getCurrent = async (location) => {
    const data = await getData({location: location, date1: 'today'});
    return data.currentConditions;
  }

  const getForecast = async (location) => {
    const data = await getData({location: location, date1: 'next7days'});
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
    
    console.log(await weatherService.getCurrent('Boise'));
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQzs7QUFFQTtBQUNBLHFDQUFxQyxtQkFBbUI7QUFDeEQ7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCLGFBQWEseUNBQXlDO0FBQ3RELGFBQWEseUNBQXlDO0FBQ3RELGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLHVDQUF1QztBQUN2RTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7VUNyQzdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTnNEOztBQUV0RDtBQUNBLDJCQUEyQixtRUFBYztBQUN6QztBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhyLy4vc3JjL21vZHVsZXMvd2VhdGhlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhyLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IEFQSV9LRVkgPSAnOVZUVUxGTlhDNUZaQ1pNWEs2UFpDOUdXUSc7XG5cbmNvbnN0IFdlYXRoZXJTZXJ2aWNlID0gKCkgPT4ge1xuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKG9wdGlvbnMgPSB7IGxvY2F0aW9uOiAnQm9pc2UnIH0pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL2BcbiAgICAgICAgKyBgJHtvcHRpb25zLmxvY2F0aW9ufWBcbiAgICAgICAgKyBgJHtvcHRpb25zLmRhdGUxID8gJy8nICsgb3B0aW9ucy5kYXRlMSA6ICcnfWBcbiAgICAgICAgKyBgJHtvcHRpb25zLmRhdGUyID8gJy8nICsgb3B0aW9ucy5kYXRlMiA6ICcnfWBcbiAgICAgICAgKyBgP2tleT0ke0FQSV9LRVl9YCwgXG4gICAgICB7IFxuICAgICAgICBtZXRob2Q6ICdHRVQnIFxuICAgICAgfVxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiByZXMpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3VycmVudCA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHtsb2NhdGlvbjogbG9jYXRpb24sIGRhdGUxOiAndG9kYXknfSk7XG4gICAgcmV0dXJuIGRhdGEuY3VycmVudENvbmRpdGlvbnM7XG4gIH1cblxuICBjb25zdCBnZXRGb3JlY2FzdCA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHtsb2NhdGlvbjogbG9jYXRpb24sIGRhdGUxOiAnbmV4dDdkYXlzJ30pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcmV0dXJuIHsgZ2V0Q3VycmVudCwgZ2V0Rm9yZWNhc3QgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlclNlcnZpY2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgV2VhdGhlclNlcnZpY2UgZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyU2VydmljZVwiO1xuXG5jb25zdCBhcHAgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJTZXJ2aWNlID0gV2VhdGhlclNlcnZpY2UoKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhhd2FpdCB3ZWF0aGVyU2VydmljZS5nZXRDdXJyZW50KCdCb2lzZScpKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9