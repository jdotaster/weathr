/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}

body {
    background-color: #181818;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-areas: 
        "header header header"
        "nav nav nav"
        ". content ."
}

.header {
    grid-area: header;
    background-image: linear-gradient(90deg, #2f005b, #002946);
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: sticky;
    top: 0;
}

.header-title {
    color: rgb(255, 255, 255);
    width: 18rem;
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
}

.header-form-container {
    margin: auto 2rem;
}

.nav {
    display: flex;
    justify-content: space-around;
    grid-area: nav;
    height: 3rem;
    color: white;
    background-color: black;
}

.nav-item {
    margin: .5rem;
    font-size: 1.5rem;
    width: 20vw;
    text-align: center;
}

.nav-item-active { 
    border-bottom: 1px solid white;
}

.content {
    grid-area: content;
    height: calc(100vh - 4rem - 3rem);
    padding: 1rem;
}

.content-form-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content-form-location {
    color: white;
    align-self: center;
    font-size: 2rem;
}

.location-input {
    border: 2px solid white;
    border-radius: .5rem;
    font-size: 1.5rem;
    background-color: black;
    color: white;
    padding: .5rem;
    margin: 4px auto;
}

.forecast-current {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6fr 2fr 2fr 2fr;
    grid-template-areas: 
        "conditions windspeed"
        "feelslike humidity"
        "dewpoint pressure"
        "sunrise sunset";
    height: 100%;
    width: 100%;
    background-color: rgb(0,0,0,32%);
    padding: 2rem;
}

.forecast-current-conditions {
    grid-area: conditions;
}

.forecast-current-windspeed {
    grid-area: windspeed;
}

.forecast-current-feelslike {
    grid-area: feelslike;
}

.forecast-current-humidity {
    grid-area: humidity;
}

.forecast-current-dewpoint {
    grid-area: dewpoint;
}

.forecast-current-pressure {
    grid-area: pressure;
}
.forecast-current-sunrise {
    grid-area: sunrise;
}
.forecast-current-sunset {
    grid-area: sunset;
}

.forecast-item {
    border-bottom: 1px solid white;
    color: white;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,yCAAyC;IACzC,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,wBAAwB;IACxB,mCAAmC;IACnC;;;;AAIJ;;AAEA;IACI,iBAAiB;IACjB,0DAA0D;IAC1D,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC;;;;wBAIoB;IACpB,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB","sourcesContent":["* {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: #181818;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-template-areas: \n        \"header header header\"\n        \"nav nav nav\"\n        \". content .\"\n}\n\n.header {\n    grid-area: header;\n    background-image: linear-gradient(90deg, #2f005b, #002946);\n    height: 4rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: sticky;\n    top: 0;\n}\n\n.header-title {\n    color: rgb(255, 255, 255);\n    width: 18rem;\n    font-size: 2rem;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.header-form-container {\n    margin: auto 2rem;\n}\n\n.nav {\n    display: flex;\n    justify-content: space-around;\n    grid-area: nav;\n    height: 3rem;\n    color: white;\n    background-color: black;\n}\n\n.nav-item {\n    margin: .5rem;\n    font-size: 1.5rem;\n    width: 20vw;\n    text-align: center;\n}\n\n.nav-item-active { \n    border-bottom: 1px solid white;\n}\n\n.content {\n    grid-area: content;\n    height: calc(100vh - 4rem - 3rem);\n    padding: 1rem;\n}\n\n.content-form-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.content-form-location {\n    color: white;\n    align-self: center;\n    font-size: 2rem;\n}\n\n.location-input {\n    border: 2px solid white;\n    border-radius: .5rem;\n    font-size: 1.5rem;\n    background-color: black;\n    color: white;\n    padding: .5rem;\n    margin: 4px auto;\n}\n\n.forecast-current {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 6fr 2fr 2fr 2fr;\n    grid-template-areas: \n        \"conditions windspeed\"\n        \"feelslike humidity\"\n        \"dewpoint pressure\"\n        \"sunrise sunset\";\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0,0,0,32%);\n    padding: 2rem;\n}\n\n.forecast-current-conditions {\n    grid-area: conditions;\n}\n\n.forecast-current-windspeed {\n    grid-area: windspeed;\n}\n\n.forecast-current-feelslike {\n    grid-area: feelslike;\n}\n\n.forecast-current-humidity {\n    grid-area: humidity;\n}\n\n.forecast-current-dewpoint {\n    grid-area: dewpoint;\n}\n\n.forecast-current-pressure {\n    grid-area: pressure;\n}\n.forecast-current-sunrise {\n    grid-area: sunrise;\n}\n.forecast-current-sunset {\n    grid-area: sunset;\n}\n\n.forecast-item {\n    border-bottom: 1px solid white;\n    color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles.css":
/*!*******************************!*\
  !*** ./src/assets/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/forecast.js":
/*!************************************!*\
  !*** ./src/components/forecast.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/elementFactory */ "./src/modules/elementFactory.js");


const Forecast = () => {
    const elements = (0,_modules_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const currentConditions = (data) => {
        console.log(data);
    }

    return { currentConditions };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forecast);

/***/ }),

/***/ "./src/components/locationInput.js":
/*!*****************************************!*\
  !*** ./src/components/locationInput.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/elementFactory */ "./src/modules/elementFactory.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/events.js");



const LocationInput = () => {
    const elements = (0,_modules_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const events = (0,_events__WEBPACK_IMPORTED_MODULE_1__["default"])();

    const registerSubmitEvent = (form, input) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const location = input.value;
            events.locationSet(location);
        })
    }

    const contentInput = () => {
        const container = elements.create('div', { className: 'content-form-container' })
        const form = elements.create('form', { className: 'content-form-location location-input-form', action: '#' });
        const label = elements.create('label', { className: 'content-form-location-label', for: 'location-input', innerHTML: 'Get weather for ' });
        const input = elements.create('input', { className: 'content-form-location-input location-input', name: 'location-input', type: 'text', placeholder: 'City or zip code'});

        container.appendChild(form);
        form.appendChild(label);
        form.appendChild(input);
        document.getElementById('content').appendChild(container);

        registerSubmitEvent(form, input);
    }

    const headerInput = () => {
        const container = elements.create('div', { className: 'header-form-container' });
        const form = elements.create('form', { className: 'header-location-form location-input-form', action: '#' });
        const input = elements.create('input', { className: 'header-location-input location-input', type: 'text', placeholder: 'City or zip code' });

        container.appendChild(form);
        form.appendChild(input);
        document.getElementById('header').appendChild(container);

        registerSubmitEvent(form, input);
    }

    return { contentInput, headerInput };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationInput);

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Events = () => {

    const locationSet = (location) => {
        const event = new CustomEvent('locationSet', { detail: location });
        document.dispatchEvent(event);
    }

    return { locationSet };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

/***/ }),

/***/ "./src/modules/elementFactory.js":
/*!***************************************!*\
  !*** ./src/modules/elementFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ElementFactory = () => {
    const create = (type, attributes) => {
        const element = document.createElement(type);
        for (const a in attributes) {
            element[a] = attributes[a];
        }

        return element;
    }
    return { create };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementFactory);

/***/ }),

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
    const current =  data.currentConditions;
    return {
      conditions: current.conditions,
      dewpoint: current.dew,
      feelslike: current.feelslike,
      humidity: current.humidity,
      pressure: current.pressure,
      sunrise: current.sunrise,
      sunset: current.sunset,
      temp: current.temp,
      windspeed: current.windspeed
    }
  }

  const getHourly = async (location) => {
    const data = await getData({location: location, date1: 'today'});
    return data.days.hours;
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles.css */ "./src/assets/styles.css");
/* harmony import */ var _modules_weatherService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weatherService */ "./src/modules/weatherService.js");
/* harmony import */ var _components_forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forecast */ "./src/components/forecast.js");
/* harmony import */ var _components_locationInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/locationInput */ "./src/components/locationInput.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./src/events.js");






const app = (async () => {
    const weatherService = (0,_modules_weatherService__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const forecast = (0,_components_forecast__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const locationInput = (0,_components_locationInput__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const events = (0,_events__WEBPACK_IMPORTED_MODULE_4__["default"])();

    document.addEventListener('DOMContentLoaded', async () => {
        locationInput.headerInput();
        if (!localStorage.getItem('location')) {
            locationInput.contentInput();
        } else {
            const weather = await weatherService.getCurrent(localStorage.getItem('location'))
            forecast.currentConditions(weather);
        }
    })

    document.addEventListener('locationSet', async (event) => {
        localStorage.setItem('location', event.detail);
        const inputs = document.querySelectorAll('.location-input');
        for (const input of inputs) {
            input.value = event.detail;
        }
        const weather = await weatherService.getCurrent(localStorage.getItem('location'))
        forecast.currentConditions(weather);
    });
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUN5QjtBQUNUO0FBQ1U7QUFDekI7O0FBRTlCO0FBQ0EsMkJBQTJCLG1FQUFjO0FBQ3pDLHFCQUFxQixnRUFBUTtBQUM3QiwwQkFBMEIscUVBQWE7QUFDdkMsbUJBQW1CLG1EQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhyLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhyLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzPzk1MWYiLCJ3ZWJwYWNrOi8vd2VhdGhyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aHIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aHIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aHIvLi9zcmMvY29tcG9uZW50cy9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aHIvLi9zcmMvY29tcG9uZW50cy9sb2NhdGlvbklucHV0LmpzIiwid2VicGFjazovL3dlYXRoci8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhyLy4vc3JjL21vZHVsZXMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhyLy4vc3JjL21vZHVsZXMvd2VhdGhlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aHIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhyLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJoZWFkZXIgaGVhZGVyIGhlYWRlclwiXG4gICAgICAgIFwibmF2IG5hdiBuYXZcIlxuICAgICAgICBcIi4gY29udGVudCAuXCJcbn1cblxuLmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMmYwMDViLCAjMDAyOTQ2KTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB3aWR0aDogMThyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5oZWFkZXItZm9ybS1jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0byAycmVtO1xufVxuXG4ubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGdyaWQtYXJlYTogbmF2O1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5uYXYtaXRlbSB7XG4gICAgbWFyZ2luOiAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogMjB2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbS1hY3RpdmUgeyBcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSAtIDNyZW0pO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jb250ZW50LWZvcm0tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudC1mb3JtLWxvY2F0aW9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmxvY2F0aW9uLWlucHV0IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgbWFyZ2luOiA0cHggYXV0bztcbn1cblxuLmZvcmVjYXN0LWN1cnJlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNmZyIDJmciAyZnIgMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImNvbmRpdGlvbnMgd2luZHNwZWVkXCJcbiAgICAgICAgXCJmZWVsc2xpa2UgaHVtaWRpdHlcIlxuICAgICAgICBcImRld3BvaW50IHByZXNzdXJlXCJcbiAgICAgICAgXCJzdW5yaXNlIHN1bnNldFwiO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMzIlKTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZm9yZWNhc3QtY3VycmVudC1jb25kaXRpb25zIHtcbiAgICBncmlkLWFyZWE6IGNvbmRpdGlvbnM7XG59XG5cbi5mb3JlY2FzdC1jdXJyZW50LXdpbmRzcGVlZCB7XG4gICAgZ3JpZC1hcmVhOiB3aW5kc3BlZWQ7XG59XG5cbi5mb3JlY2FzdC1jdXJyZW50LWZlZWxzbGlrZSB7XG4gICAgZ3JpZC1hcmVhOiBmZWVsc2xpa2U7XG59XG5cbi5mb3JlY2FzdC1jdXJyZW50LWh1bWlkaXR5IHtcbiAgICBncmlkLWFyZWE6IGh1bWlkaXR5O1xufVxuXG4uZm9yZWNhc3QtY3VycmVudC1kZXdwb2ludCB7XG4gICAgZ3JpZC1hcmVhOiBkZXdwb2ludDtcbn1cblxuLmZvcmVjYXN0LWN1cnJlbnQtcHJlc3N1cmUge1xuICAgIGdyaWQtYXJlYTogcHJlc3N1cmU7XG59XG4uZm9yZWNhc3QtY3VycmVudC1zdW5yaXNlIHtcbiAgICBncmlkLWFyZWE6IHN1bnJpc2U7XG59XG4uZm9yZWNhc3QtY3VycmVudC1zdW5zZXQge1xuICAgIGdyaWQtYXJlYTogc3Vuc2V0O1xufVxuXG4uZm9yZWNhc3QtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQzs7OztBQUlKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBEQUEwRDtJQUMxRCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLE1BQU07QUFDVjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkM7Ozs7d0JBSW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJuYXYgbmF2IG5hdlxcXCJcXG4gICAgICAgIFxcXCIuIGNvbnRlbnQgLlxcXCJcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyZjAwNWIsICMwMDI5NDYpO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4uaGVhZGVyLWZvcm0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvIDJyZW07XFxufVxcblxcbi5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtaXRlbS1hY3RpdmUgeyBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSAtIDNyZW0pO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC1mb3JtLWxvY2F0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbjogNHB4IGF1dG87XFxufVxcblxcbi5mb3JlY2FzdC1jdXJyZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZmciAyZnIgMmZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiY29uZGl0aW9ucyB3aW5kc3BlZWRcXFwiXFxuICAgICAgICBcXFwiZmVlbHNsaWtlIGh1bWlkaXR5XFxcIlxcbiAgICAgICAgXFxcImRld3BvaW50IHByZXNzdXJlXFxcIlxcbiAgICAgICAgXFxcInN1bnJpc2Ugc3Vuc2V0XFxcIjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDMyJSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1jdXJyZW50LWNvbmRpdGlvbnMge1xcbiAgICBncmlkLWFyZWE6IGNvbmRpdGlvbnM7XFxufVxcblxcbi5mb3JlY2FzdC1jdXJyZW50LXdpbmRzcGVlZCB7XFxuICAgIGdyaWQtYXJlYTogd2luZHNwZWVkO1xcbn1cXG5cXG4uZm9yZWNhc3QtY3VycmVudC1mZWVsc2xpa2Uge1xcbiAgICBncmlkLWFyZWE6IGZlZWxzbGlrZTtcXG59XFxuXFxuLmZvcmVjYXN0LWN1cnJlbnQtaHVtaWRpdHkge1xcbiAgICBncmlkLWFyZWE6IGh1bWlkaXR5O1xcbn1cXG5cXG4uZm9yZWNhc3QtY3VycmVudC1kZXdwb2ludCB7XFxuICAgIGdyaWQtYXJlYTogZGV3cG9pbnQ7XFxufVxcblxcbi5mb3JlY2FzdC1jdXJyZW50LXByZXNzdXJlIHtcXG4gICAgZ3JpZC1hcmVhOiBwcmVzc3VyZTtcXG59XFxuLmZvcmVjYXN0LWN1cnJlbnQtc3VucmlzZSB7XFxuICAgIGdyaWQtYXJlYTogc3VucmlzZTtcXG59XFxuLmZvcmVjYXN0LWN1cnJlbnQtc3Vuc2V0IHtcXG4gICAgZ3JpZC1hcmVhOiBzdW5zZXQ7XFxufVxcblxcbi5mb3JlY2FzdC1pdGVtIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRWxlbWVudEZhY3RvcnkgZnJvbSBcIi4uL21vZHVsZXMvZWxlbWVudEZhY3RvcnlcIjtcblxuY29uc3QgRm9yZWNhc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBFbGVtZW50RmFjdG9yeSgpO1xuXG4gICAgY29uc3QgY3VycmVudENvbmRpdGlvbnMgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjdXJyZW50Q29uZGl0aW9ucyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JlY2FzdDsiLCJpbXBvcnQgRWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vbW9kdWxlcy9lbGVtZW50RmFjdG9yeSc7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uL2V2ZW50cyc7XG5cbmNvbnN0IExvY2F0aW9uSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBFbGVtZW50RmFjdG9yeSgpO1xuICAgIGNvbnN0IGV2ZW50cyA9IEV2ZW50cygpO1xuXG4gICAgY29uc3QgcmVnaXN0ZXJTdWJtaXRFdmVudCA9IChmb3JtLCBpbnB1dCkgPT4ge1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBldmVudHMubG9jYXRpb25TZXQobG9jYXRpb24pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudHMuY3JlYXRlKCdkaXYnLCB7IGNsYXNzTmFtZTogJ2NvbnRlbnQtZm9ybS1jb250YWluZXInIH0pXG4gICAgICAgIGNvbnN0IGZvcm0gPSBlbGVtZW50cy5jcmVhdGUoJ2Zvcm0nLCB7IGNsYXNzTmFtZTogJ2NvbnRlbnQtZm9ybS1sb2NhdGlvbiBsb2NhdGlvbi1pbnB1dC1mb3JtJywgYWN0aW9uOiAnIycgfSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZWxlbWVudHMuY3JlYXRlKCdsYWJlbCcsIHsgY2xhc3NOYW1lOiAnY29udGVudC1mb3JtLWxvY2F0aW9uLWxhYmVsJywgZm9yOiAnbG9jYXRpb24taW5wdXQnLCBpbm5lckhUTUw6ICdHZXQgd2VhdGhlciBmb3IgJyB9KTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBlbGVtZW50cy5jcmVhdGUoJ2lucHV0JywgeyBjbGFzc05hbWU6ICdjb250ZW50LWZvcm0tbG9jYXRpb24taW5wdXQgbG9jYXRpb24taW5wdXQnLCBuYW1lOiAnbG9jYXRpb24taW5wdXQnLCB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiAnQ2l0eSBvciB6aXAgY29kZSd9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHJlZ2lzdGVyU3VibWl0RXZlbnQoZm9ybSwgaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcklucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50cy5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnaGVhZGVyLWZvcm0tY29udGFpbmVyJyB9KTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGVsZW1lbnRzLmNyZWF0ZSgnZm9ybScsIHsgY2xhc3NOYW1lOiAnaGVhZGVyLWxvY2F0aW9uLWZvcm0gbG9jYXRpb24taW5wdXQtZm9ybScsIGFjdGlvbjogJyMnIH0pO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnRzLmNyZWF0ZSgnaW5wdXQnLCB7IGNsYXNzTmFtZTogJ2hlYWRlci1sb2NhdGlvbi1pbnB1dCBsb2NhdGlvbi1pbnB1dCcsIHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6ICdDaXR5IG9yIHppcCBjb2RlJyB9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICByZWdpc3RlclN1Ym1pdEV2ZW50KGZvcm0sIGlucHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250ZW50SW5wdXQsIGhlYWRlcklucHV0IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uSW5wdXQ7IiwiY29uc3QgRXZlbnRzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbG9jYXRpb25TZXQgPSAobG9jYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xvY2F0aW9uU2V0JywgeyBkZXRhaWw6IGxvY2F0aW9uIH0pO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsb2NhdGlvblNldCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7IiwiY29uc3QgRWxlbWVudEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGZvciAoY29uc3QgYSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBlbGVtZW50W2FdID0gYXR0cmlidXRlc1thXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4geyBjcmVhdGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudEZhY3Rvcnk7IiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBBUElfS0VZID0gJzlWVFVMRk5YQzVGWkNaTVhLNlBaQzlHV1EnO1xuXG5jb25zdCBXZWF0aGVyU2VydmljZSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChvcHRpb25zID0geyBsb2NhdGlvbjogJ0JvaXNlJyB9KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9gXG4gICAgICAgICsgYCR7b3B0aW9ucy5sb2NhdGlvbn1gXG4gICAgICAgICsgYCR7b3B0aW9ucy5kYXRlMSA/ICcvJyArIG9wdGlvbnMuZGF0ZTEgOiAnJ31gXG4gICAgICAgICsgYCR7b3B0aW9ucy5kYXRlMiA/ICcvJyArIG9wdGlvbnMuZGF0ZTIgOiAnJ31gXG4gICAgICAgICsgYD9rZXk9JHtBUElfS0VZfWAsIFxuICAgICAgeyBcbiAgICAgICAgbWV0aG9kOiAnR0VUJyBcbiAgICAgIH1cbiAgICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIGNvbnN0IGdldEN1cnJlbnQgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSh7bG9jYXRpb246IGxvY2F0aW9uLCBkYXRlMTogJ3RvZGF5J30pO1xuICAgIGNvbnN0IGN1cnJlbnQgPSAgZGF0YS5jdXJyZW50Q29uZGl0aW9ucztcbiAgICByZXR1cm4ge1xuICAgICAgY29uZGl0aW9uczogY3VycmVudC5jb25kaXRpb25zLFxuICAgICAgZGV3cG9pbnQ6IGN1cnJlbnQuZGV3LFxuICAgICAgZmVlbHNsaWtlOiBjdXJyZW50LmZlZWxzbGlrZSxcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgcHJlc3N1cmU6IGN1cnJlbnQucHJlc3N1cmUsXG4gICAgICBzdW5yaXNlOiBjdXJyZW50LnN1bnJpc2UsXG4gICAgICBzdW5zZXQ6IGN1cnJlbnQuc3Vuc2V0LFxuICAgICAgdGVtcDogY3VycmVudC50ZW1wLFxuICAgICAgd2luZHNwZWVkOiBjdXJyZW50LndpbmRzcGVlZFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldEhvdXJseSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHtsb2NhdGlvbjogbG9jYXRpb24sIGRhdGUxOiAndG9kYXknfSk7XG4gICAgcmV0dXJuIGRhdGEuZGF5cy5ob3VycztcbiAgfVxuXG4gIGNvbnN0IGdldEZvcmVjYXN0ID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoe2xvY2F0aW9uOiBsb2NhdGlvbiwgZGF0ZTE6ICduZXh0N2RheXMnfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICByZXR1cm4geyBnZXRDdXJyZW50LCBnZXRGb3JlY2FzdCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyU2VydmljZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFdlYXRoZXJTZXJ2aWNlIGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyU2VydmljZSc7XG5pbXBvcnQgRm9yZWNhc3QgZnJvbSAnLi9jb21wb25lbnRzL2ZvcmVjYXN0JztcbmltcG9ydCBMb2NhdGlvbklucHV0IGZyb20gJy4vY29tcG9uZW50cy9sb2NhdGlvbklucHV0JztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG5jb25zdCBhcHAgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJTZXJ2aWNlID0gV2VhdGhlclNlcnZpY2UoKTtcbiAgICBjb25zdCBmb3JlY2FzdCA9IEZvcmVjYXN0KCk7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IExvY2F0aW9uSW5wdXQoKTtcbiAgICBjb25zdCBldmVudHMgPSBFdmVudHMoKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxvY2F0aW9uSW5wdXQuaGVhZGVySW5wdXQoKTtcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSkge1xuICAgICAgICAgICAgbG9jYXRpb25JbnB1dC5jb250ZW50SW5wdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyU2VydmljZS5nZXRDdXJyZW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpKVxuICAgICAgICAgICAgZm9yZWNhc3QuY3VycmVudENvbmRpdGlvbnMod2VhdGhlcik7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb25TZXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2F0aW9uJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxvY2F0aW9uLWlucHV0Jyk7XG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRzKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgd2VhdGhlclNlcnZpY2UuZ2V0Q3VycmVudChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSlcbiAgICAgICAgZm9yZWNhc3QuY3VycmVudENvbmRpdGlvbnMod2VhdGhlcik7XG4gICAgfSk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==