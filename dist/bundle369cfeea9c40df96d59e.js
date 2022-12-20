/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    height: 300px;\n    max-width: 80%;\n}\n\n.modal.active {\n    transform: translate(-50%,-50%) scale(1);\n}\n\n.todomodal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    height: 300px;\n    max-width: 80%;\n}\n\n.todomodal.active {\n    transform: translate(-50%,-50%) scale(1);\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    transition: 200ms ease-in-out;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgb(0, 0, 0, .6);\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}\n\n/* .project-form {\n    display: none;\n} */\n\n/* .task-form {\n    display: none;\n} */", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,wCAAwC;IACxC,6BAA6B;IAC7B,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,wCAAwC;IACxC,6BAA6B;IAC7B,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;;GAEG;;AAEH;;GAEG","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    height: 300px;\n    max-width: 80%;\n}\n\n.modal.active {\n    transform: translate(-50%,-50%) scale(1);\n}\n\n.todomodal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    height: 300px;\n    max-width: 80%;\n}\n\n.todomodal.active {\n    transform: translate(-50%,-50%) scale(1);\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    transition: 200ms ease-in-out;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgb(0, 0, 0, .6);\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}\n\n/* .project-form {\n    display: none;\n} */\n\n/* .task-form {\n    display: none;\n} */"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/modules/TodoController.js":
/*!***************************************!*\
  !*** ./src/modules/TodoController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");



// export const TodoController = () => {
//     let projects = [];
//     return {
//         projects,
//         setProjects(project) {
//             projects = project
//         },
//         addProject(projectname) {
//             if(projects.find((project) => project.name === projectname.name))
//             return
//             projects.push(projectname)
//         },
//         deleteProject(projectname) {
//             const grabProject = projects.find((project) => project.getProjectName() === projectname.name)
//             return projects.splice(projects.indexOf(grabProject),1)
//         },
//         getProject(projectname) {
//             if(projects.find((project) => project.getProjectName() === projectname.name)) 
//             return projectname

//         },

//     }
// }

 const TodoController = (() => {
    let projects = []
    const addProject = (projectname) => {
        if(projects.find((project) => project.name === projectname.name))
        return
        projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.Projects)(projectname))

    }
    const deleteProject = (projectname) => {
        const grabProject = projects.find((project) => project.name === projectname.name)
        return projects.splice(projects.indexOf(grabProject),1)
    }
    const getProject = (projectname) => {
       return projects.find((project) => project.getProjectName() === projectname)
    }
    const addTodo = (projectname,task) => {
        // const grabProject = getProject(projectname).todos
        return getProject(projectname).addTask((0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(task))
    //  const grabProject = projects.find((project) => project.getProjectName() === projectname)
    //  return grabProject.addTask(Task(task,date))
    }
    const deleteTodo = (projectname, task) => {
        return getProject(projectname).deleteTask(task)
    }

    const editProjectTodo = (projectname,task,date) => {
        return getProject(projectname).editTodo(task,date)
    }

    // const editTodo = (projectname)
   
    return {
        projects,
        addProject,
        deleteProject,
        getProject,
        deleteTodo,
        addTodo,
        editProjectTodo
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoController);

let user1 = TodoController
// let user1 = TodoController().addProject('Name')
user1.addProject('Name')
user1.addTodo('Name','task')
// user1.editProjectTodo('Name','netask','1/2/2022')



console.log(user1)

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectForm": () => (/* binding */ projectForm),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _TodoController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoController */ "./src/modules/TodoController.js");





//  const projectmodal = (() => {
//     const openModalButtons = document.querySelectorAll('[data-modal-target]')
//     const closeModalButtons = document.querySelectorAll('[data-close-button]')
//     const overlay = document.getElementById('overlay')

//     openModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = document.querySelector(button.dataset.modalTarget)
//             openModal(modal)
//         })
//     })

//     overlay.addEventListener('click', () => {
//         const modals = document.querySelectorAll('.modal.active')
//         modals.forEach(modal => {
//             closeModal(modal)
//         })
//     })

//     closeModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = button.closest('.modal')
//             closeModal(modal)
//         })
//     })

//     function openModal(modal) {
//         if(modal == null) return
//         modal.classList.add('active')
//         overlay.classList.add('active')
//     }
//     function closeModal(modal) {
//         if(modal == null) return 
//         modal.classList.remove('active')
//         overlay.classList.remove('active')
//     }
// })()

const projects = (() => {
    let list = [];
    function renderTemp(container) {
        let template = document.getElementById('projectListTemplate')
        let div = template.content.cloneNode(true);
        container.appendChild(div)

        console.log('PROJECTS: we want to know if a project is added')
        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('projectAdded',addProject)
    }
    function addProject(name) {
        //project added event publish
        console.log(`I hear that ${name} is being added`)
        let projectlist = list
        let userone = _TodoController__WEBPACK_IMPORTED_MODULE_3__["default"]
        let projects = userone.projects
        // console.log(projects)
        userone.addProject(name)
        // console.log(userone.getProject(name))
        projectlist.push(userone)
        console.log(userone)
        // console.log('This is',userone)
        console.log(projectlist)
        projectlist = Array.from(list).sort()
        console.log('projectUpdated')
        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('projectUpdated', name)

        let projectnamediv = document.querySelector('.projectname')
        projectnamediv.textContent = ''
        let df = document.createDocumentFragment()
        projects.forEach(name => {
            let div = document.createElement('div')
            div.classList.add('project-content')
            let button =  document.createElement('button')
            button.addEventListener('click', () => {
                const currentproject = document.querySelector('.currentproject')
                currentproject.textContent = `${name.name}`
                const taskbutton  = document.getElementById('taskbtn')
                taskbutton.addEventListener('click', (e) => {
                    e.preventDefault()
                    let inputtext = document.getElementById('inputTask')
                    let task = inputtext.value;
                    inputtext.value = '';
            
                    let inputdate = document.getElementById('inputDate')
                    let date = inputdate.value;
                    inputdate.value =  ''
                })
            })
            let pbutton = document.createElement('p')
            pbutton.textContent = `${name.name}`
            button.appendChild(pbutton)
            div.appendChild(button)
            df.appendChild(div)
        })
        projectnamediv.appendChild(df)


        // const displayprojects = document.querySelector('.showprojects')

        // let button = document.querySelector('.projectname button')
        // button.innerHTML = '';
        // let projectnamediv = document.querySelector('.projectname')
        // projectnamediv.innerText = ''
        // let df = document.createDocumentFragment()
        // projects.forEach(name => {
        //     let div = document.createElement('div')
        //     div.classList.add('project-content')
        //     let button = document.createElement('button')
        //     button.addEventListener('click', () => {
        //         const projectpage = document.querySelector('.showprojects')
        //         while(projectpage.firstChild) {
        //             projectpage.removeChild(projectpage.firstChild)
        //         }
        //         const div = document.createElement('div')
        //         const h2 = document.createElement('h2')
        //         h2.innerText = `${name.name}`
        //         const holdtodo = document.createElement('div')
        //         holdtodo.classList.add('hold-tasks')
        //         const addTodoButton = document.createElement('button')
        //         addTodoButton.setAttribute("data-todomodal-target",'#todomodal')
        //         addTodoButton.classList.add('add-task')
                // addTodoButton.addEventListener('click', todoModal)
                    // const todomodal = document.createElement('div')
                    // todomodal.classList.add('todomodal')
                    // todomodal.setAttribute("id","todomodal")
            
                    // const todomodalheader = document.createElement('div')
                    // todomodalheader.classList.add('todalmodal-header')
            
                    // const todomodaltitle = document.createElement('div')
                    // todomodaltitle.classList.add('title')
                    // todomodaltitle.innerText = 'New Task'
            
                    // const todoclosebutton = document.createElement('button')
                    // todoclosebutton.classList.add('close-button')
                    // todoclosebutton.innerText = `&times;`
            
                    // todomodalheader.append(todomodaltitle,todoclosebutton)
            
                    // const todomodalbody = document.createElement('div')
                    // todomodalbody.classList.add('todomodal-body')
            
                    // const todomodalform = document.createElement('form')
                    // todomodalform.setAttribute('id','todoform')
                    // const todotaskinput = document.createElement('input')
                    // todotaskinput.setAttribute('type','text')
                    // todotaskinput.classList.add('inputTask')
                    // const tododateinput = document.createElement('input')
                    // tododateinput.setAttribute('type','date')
                    // tododateinput.classList.add('inputDate')
                    // const todosubmit = document.createElement('button')
                    // todosubmit.setAttribute('type','submit')
                    // todosubmit.classList.add('todobtn')
                    // todosubmit.innerText = 'Submit'
            
                    // todomodalform.append(todotaskinput,tododateinput,todosubmit)
            
                    // todomodalbody.appendChild(todomodalform)
            
                    // todomodal.append(todomodalheader,todomodalbody)
            
                    // document.body.appendChild(todomodal)
            
                    // const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
                    // const closeTodoModalButtons = document.querySelectorAll('.close-button')
                    // const overlay = document.getElementById('overlay')
            
                    // openTodoModalButtons.forEach(button => {
                    //     button.addEventListener('click', () => {
                    //         const modal = document.querySelector(button.dataset.todomodalTarget)
                    //         openModal(modal)
                    //     })
                    // })
            
                    // overlay.addEventListener('click', () => {
                    //     const modals = document.querySelectorAll('.todomodal.active') 
                    //     modals.forEach(modal => {
                    //         closeModal(modal)
                    //     })
                    // })
            
                    // closeTodoModalButtons.forEach(button => {
                    //     button.addEventListener('click', () => {
                    //         const modal = button.closest('.todomodal')
                    //         closeModal(modal)
                    //     })
                    // })
                    // function openModal(modal) {
                    //     if(modal == null) return
                    //     modal.classList.add('active')
                    //     overlay.classList.add('active')
                    // }
                    // function closeModal(modal) {
                    //     if(modal == null) return
                    //     modal.classList.remove('active')
                    //     overlay.classList.remove('active')
                    // }
                // })
        //         addTodoButton.innerText = 'Add Todo'

        //         div.append(h2,holdtodo,addTodoButton)
                
        //         displayprojects.appendChild(div)

        //     })
        //     let pbutton = document.createElement('p')
        //     pbutton.innerText = `${name.name}`
        //     button.appendChild(pbutton)
        //     div.appendChild(button)
        //     df.appendChild(div)
        // })
        // projectnamediv.appendChild(df)
            // const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
            // const closeTodoModalButtons = document.querySelectorAll('.close-button')
            // const overlay = document.getElementById('overlay')
    
            // openTodoModalButtons.forEach(button => {
            //     button.addEventListener('click', () => {
            //         const modal = document.querySelector(button.dataset.todomodalTarget)
            //         openModal(modal)
            //     })
            // })
    
            // overlay.addEventListener('click', () => {
            //     const modals = document.querySelectorAll('.todomodal.active') 
            //     modals.forEach(modal => {
            //         closeModal(modal)
            //     })
            // })
    
            // closeTodoModalButtons.forEach(button => {
            //     button.addEventListener('click', () => {
            //         const modal = button.closest('.todomodal')
            //         closeModal(modal)
            //     })
            // })
            // function openModal(modal) {
            //     if(modal == null) return
            //     modal.classList.add('active')
            //     overlay.classList.add('active')
            // }
            // function closeModal(modal) {
            //     if(modal == null) return
            //     modal.classList.remove('active')
            //     overlay.classList.remove('active')
            // }

        // let df = document.createDocumentFragment()
        // projects.forEach(name => {
        //     let p = document.createElement('p')
        //     p.innerText = `${name.name}`;
        //     let div = document.createElement('div')
        //     div.appendChild(p)
        //     df.appendChild(div)
        // });
        // button.appendChild(df)
        // projects.forEach(name => {
        //     let p = document.querySelector('.projectname p')
        //     p.innerText  = `${name.name}`
        // })
        // projectlist.forEach(name => {
        //     if(projects.find((project) => project.name === name)) {
        //         return true
        //     } else {
        //         return false
        //     }
            // let p = document.querySelector('.projectname p')
    //         // p.innerText = `${name}`
    //     })
    }

    const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
    const closeTodoModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openTodoModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.todomodalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.todomodal.active') 
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeTodoModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.todomodal')
            closeModal(modal)
        })
    })
    function openModal(modal) {
        if(modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }
    function closeModal(modal) {
        if(modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }

    // const todosubmit = document.getElementById('taskbtn')
    // todosubmit.addEventListener('click',addTodoToProject)

    // function addTodoToProject(e) {
    //     e.preventDefault()
        // let inputtext = document.getElementById('inputTask')
        // let task = inputtext.value;
        // inputtext.value = '';

        // let inputdate = document.getElementById('inputDate')
        // let date = inputdate.value;
        // inputdate.value =  ''
        
    // }

    // const todomodal = document.createElement('div')
    //                 todomodal.classList.add('todomodal')
    //                 todomodal.setAttribute("id","todomodal")
            
    //                 const todomodalheader = document.createElement('div')
    //                 todomodalheader.classList.add('todalmodal-header')
            
    //                 const todomodaltitle = document.createElement('div')
    //                 todomodaltitle.classList.add('title')
    //                 todomodaltitle.innerText = 'New Task'
            
    //                 const todoclosebutton = document.createElement('button')
    //                 todoclosebutton.classList.add('close-button')
    //                 todoclosebutton.innerText = `&times;`
            
    //                 todomodalheader.append(todomodaltitle,todoclosebutton)
            
    //                 const todomodalbody = document.createElement('div')
    //                 todomodalbody.classList.add('todomodal-body')
            
    //                 const todomodalform = document.createElement('form')
    //                 todomodalform.setAttribute('id','todoform')
    //                 const todotaskinput = document.createElement('input')
    //                 todotaskinput.setAttribute('type','text')
    //                 todotaskinput.classList.add('inputTask')
    //                 const tododateinput = document.createElement('input')
    //                 tododateinput.setAttribute('type','date')
    //                 tododateinput.classList.add('inputDate')
    //                 const todosubmit = document.createElement('button')
    //                 todosubmit.setAttribute('type','submit')
    //                 todosubmit.classList.add('todobtn')
    //                 todosubmit.innerText = 'Submit'
            
    //                 todomodalform.append(todotaskinput,tododateinput,todosubmit)
            
    //                 todomodalbody.appendChild(todomodalform)
            
    //                 todomodal.append(todomodalheader,todomodalbody)
            
    //                 document.body.appendChild(todomodal)
            
    //                 const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
    //                 const closeTodoModalButtons = document.querySelectorAll('.close-button')
    //                 const overlay = document.getElementById('overlay')
            
    //                 openTodoModalButtons.forEach(button => {
    //                     button.addEventListener('click', () => {
    //                         const modal = document.querySelector(button.dataset.todomodalTarget)
    //                         openModal(modal)
    //                     })
    //                 })
            
    //                 overlay.addEventListener('click', () => {
    //                     const modals = document.querySelectorAll('.todomodal.active') 
    //                     modals.forEach(modal => {
    //                         closeModal(modal)
    //                     })
    //                 })
            
    //                 closeTodoModalButtons.forEach(button => {
    //                     button.addEventListener('click', () => {
    //                         const modal = button.closest('.todomodal')
    //                         closeModal(modal)
    //                     })
    //                 })
    //                 function openModal(modal) {
    //                     if(modal == null) return
    //                     modal.classList.add('active')
    //                     overlay.classList.add('active')
    //                 }
    //                 function closeModal(modal) {
    //                     if(modal == null) return
    //                     modal.classList.remove('active')
    //                     overlay.classList.remove('active')
    //                 }

    // function todoModal() {
    //     const todomodal = document.createElement('div')
    //     todomodal.classList.add('todomodal')
    //     todomodal.setAttribute("id","todomodal")

    //     const todomodalheader = document.createElement('div')
    //     todomodalheader.classList.add('todalmodal-header')

    //     const todomodaltitle = document.createElement('div')
    //     todomodaltitle.classList.add('title')
    //     todomodaltitle.innerText = 'New Task'

    //     const todoclosebutton = document.createElement('button')
    //     todoclosebutton.classList.add('close-button')
    //     todoclosebutton.innerText = `&times;`

    //     todomodalheader.append(todomodaltitle,todoclosebutton)

    //     const todomodalbody = document.createElement('div')
    //     todomodalbody.classList.add('todomodal-body')

    //     const todomodalform = document.createElement('form')
    //     todomodalform.setAttribute('id','todoform')
    //     const todotaskinput = document.createElement('input')
    //     todotaskinput.setAttribute('type','text')
    //     todotaskinput.classList.add('inputTask')
    //     const tododateinput = document.createElement('input')
    //     tododateinput.setAttribute('type','date')
    //     tododateinput.classList.add('inputDate')
    //     const todosubmit = document.createElement('button')
    //     todosubmit.setAttribute('type','submit')
    //     todosubmit.classList.add('todobtn')
    //     todosubmit.innerText = 'Submit'

    //     todomodalform.append(todotaskinput,tododateinput,todosubmit)

    //     todomodalbody.appendChild(todomodalform)

    //     todomodal.append(todomodalheader,todomodalbody)

    //     // document.body.appendChild(todomodal)

        // const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
        // const closeTodoModalButtons = document.querySelectorAll('.close-button')
        // const overlay = document.getElementById('overlay')

        // openTodoModalButtons.forEach(button => {
        //     button.addEventListener('click', () => {
        //         const modal = document.querySelector(button.dataset.todomodalTarget)
        //         openModal(modal)
        //     })
        // })

        // overlay.addEventListener('click', () => {
        //     const modals = document.querySelectorAll('.todomodal.active') 
        //     modals.forEach(modal => {
        //         closeModal(modal)
        //     })
        // })

        // closeTodoModalButtons.forEach(button => {
        //     button.addEventListener('click', () => {
        //         const modal = button.closest('.todomodal')
        //         closeModal(modal)
        //     })
        // })
        // function openModal(modal) {
        //     if(modal == null) return
        //     modal.classList.add('active')
        //     overlay.classList.add('active')
        // }
        // function closeModal(modal) {
        //     if(modal == null) return
        //     modal.classList.remove('active')
        //     overlay.classList.remove('active')
        // }

    //     document.body.appendChild(todomodal)
    // }

//     const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
//     const closeTodoModalButtons = document.querySelectorAll('[data-close-button]')
//     const overlay = document.getElementById('overlay')

//     openTodoModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = document.querySelector(button.dataset.todomodalTarget)
//             openModal(modal)
//         })
//     })

//     overlay.addEventListener('click', () => {
//         const modals = document.querySelectorAll('.todomodal.active') 
//         modals.forEach(modal => {
//             closeModal(modal)
//         })
//     })

//     closeTodoModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = button.closest('.todomodal')
//             closeModal(modal)
//         })
//     })
//     function openModal(modal) {
//         if(modal == null) return
//         modal.classList.add('active')
//         overlay.classList.add('active')
//     }
//     function closeModal(modal) {
//         if(modal == null) return
//         modal.classList.remove('active')
//         overlay.classList.remove('active')
//     }


    return {
        renderTemp
    }

})()

const projectForm = (() => {
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    function openModal(modal) {
        if(modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }
    function closeModal(modal) {
        if(modal == null) return 
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }

    let projectsubmit = document.getElementById('btn')
    projectsubmit.addEventListener('click',addProjectForm)

    function addProjectForm(e) {
        e.preventDefault()
        let input = document.getElementById('inputProjectName')
        let name = input.value;
        input.value = '';

        closeModal(modal)
        console.log(`PROJECT FORM: a project ${name} has been added`)
        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('projectAdded',name)

    }

})()





// export const projectmodal = (() => {
//    const openProjectModal = document.querySelectorAll('[data-modal-target]')
//    const closeProjectModal  = document.querySelectorAll('[data-close-button]')
//    const overlay = document.getElementById('overlay')

//    openProjectModal.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector('button.dataset.modalTarget')
//         openModal(modal)
//     })
//    })

//    overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.project-modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
//    })

//    closeProjectModal.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
//    })

//    function openModal(modal) {
//     if(modal == null) return 
//     modal.classList.add('active')
//     overlay.classList.add('active')
//    }

//    function closeModal(modal) {
//     if(modal == null) return 
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
//    }
// })()

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");



 const Projects = (name, id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])()) => {
    let todos = []
    return {
        name:name,
        id,
        todos,
        setProjectName(value) {
            name = value
        },
        getProjectName() {
            return name
        },
        setTodo(tasks,date) {
            todos.task == tasks
            todos.date == date
        },
        addTask(task) {
            if(todos.find((todo) => todo.getProjectName() === task)) return
             todos.push((0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)(task))
        },
        deleteTask(target){
            const grabTask = todos.find((todo) => todo.name === target)
            todos.splice(todos.indexOf(grabTask),1)
        },
        editTodo(newTask,newDate) {
            todos = todos.map((todo) => {
                todo.task = newTask,
                todo.duedate = newDate
                return todo
                // if(todo.id === id) {
                //     todo.id = id
                //     todo.task = newTask
                //     todo.duedate = newDate
                // }
                // return todo
            })
        }
    }
}

let user1 = Projects('New Project')
user1.addTask('Create','11/22/2022')
user1.editTodo('crate','1/2/2022')
console.log(user1)


/***/ }),

/***/ "./src/modules/pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pubsub = (() => {
    let _pubsub = {};

    //subscribe event to list
    function subscribe(eventName, fn) {
        if(!Array.isArray(_pubsub[eventName])) {
            _pubsub[eventName] = [];
        };
        _pubsub[eventName].push(fn)
    };

    //unsubscribe event to list
    function unsubscribe(eventName) {
        console.log(eventName);
        console.log(_pubsub[eventName].length - 1);
        _pubsub[eventName].splice((_pubsub[eventName].length - 1), 1);

    }

    //publish event with data
    function publish(eventName, ...data) {
        if(!Array.isArray(_pubsub[eventName])) {
            return
        }
        _pubsub[eventName].forEach(callback => {
            callback(...data);
        });
            
     }

     //debug
     function viewEvents() {
        console.log(_pubsub);
    }

    return {
        subscribe,
        unsubscribe,
        publish,
        viewEvents
    }
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

const Task = (task,id) => {
    return {
        task,
        // duedate,
        id:(0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),

        getTask() {
            return task;
        },
        // getDate() {
        //     return duedate
        // },

    }
}


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pubsub */ "./src/modules/pubsub.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_TodoController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/TodoController */ "./src/modules/TodoController.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/styles.css */ "./src/style/styles.css");







document.addEventListener('DOMContentLoaded', () => {
    let nav = document.querySelector('.hold-projects');

    _modules_UI__WEBPACK_IMPORTED_MODULE_4__.projects.renderTemp(nav)
})

// import { TodoFactory, ProjectFactory, ProjectManger } from "./modules/todo";
// import {todo} from './modules/task'
// import { UI }  from './modules/UI'
// // import { projectForm } from "./modules/projectform";
// import { projects } from "./modules/project";
// import { taskform } from "./modules/taskform";
// import style from './style/styles.css'

// document.addEventListener('DOMContentLoaded', () => {
//     let aside = document.querySelector('.hold-projects')
//     render template for projects
//     projects.renderTemp(aside)
//     todo.renderTemp(aside2)
// })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlMzY5Y2ZlZWE5YzQwZGY5NmQ1OWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2Qyw2QkFBNkIsR0FBRyxZQUFZLHNCQUFzQixlQUFlLGdCQUFnQiwrQ0FBK0Msb0NBQW9DLGtCQUFrQiw4QkFBOEIsbUJBQW1CLG9CQUFvQixxQkFBcUIsR0FBRyxtQkFBbUIsK0NBQStDLEdBQUcsZ0JBQWdCLHNCQUFzQixlQUFlLGdCQUFnQiwrQ0FBK0Msb0NBQW9DLGtCQUFrQiw4QkFBOEIsbUJBQW1CLG9CQUFvQixxQkFBcUIsR0FBRyx1QkFBdUIsK0NBQStDLEdBQUcsY0FBYyxzQkFBc0IsaUJBQWlCLG9DQUFvQyxhQUFhLGNBQWMsZUFBZSxnQkFBZ0IseUNBQXlDLDJCQUEyQixHQUFHLHFCQUFxQiwwQkFBMEIsaUJBQWlCLEdBQUcsc0JBQXNCLG9CQUFvQixJQUFJLHFCQUFxQixvQkFBb0IsSUFBSSxTQUFTLHVGQUF1RixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sNEJBQTRCLDZCQUE2QixHQUFHLFlBQVksc0JBQXNCLGVBQWUsZ0JBQWdCLCtDQUErQyxvQ0FBb0Msa0JBQWtCLDhCQUE4QixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLG1CQUFtQiwrQ0FBK0MsR0FBRyxnQkFBZ0Isc0JBQXNCLGVBQWUsZ0JBQWdCLCtDQUErQyxvQ0FBb0Msa0JBQWtCLDhCQUE4QixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLHVCQUF1QiwrQ0FBK0MsR0FBRyxjQUFjLHNCQUFzQixpQkFBaUIsb0NBQW9DLGFBQWEsY0FBYyxlQUFlLGdCQUFnQix5Q0FBeUMsMkJBQTJCLEdBQUcscUJBQXFCLDBCQUEwQixpQkFBaUIsR0FBRyxzQkFBc0Isb0JBQW9CLElBQUkscUJBQXFCLG9CQUFvQixJQUFJLHFCQUFxQjtBQUNydkY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0hELGlFQUFlLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRyx5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQXBJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHdEQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENTO0FBQ047QUFDc0I7O0FBRWpEO0FBQ0EsTUFBTSw2REFBaUI7QUFDdkIsV0FBVyw2REFBaUI7QUFDNUI7O0FBRUE7QUFDQSxpREFBaUQsK0NBQUcsS0FBSzs7QUFFekQ7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsOERBQWU7QUFDeEI7O0FBRUEsaUVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJjOztBQUUvQjtBQUNBLHFDQUFxQyxzREFBVTtBQUMvQzs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDTmM7QUFDUDs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDJDQUFJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsY0FBYzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZxQztBQUNQO0FBQ0E7QUFDZ0I7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBLHNCQUFzQix1REFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0Esc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEMsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0M7O0FBRS9DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxNQUFNO0FBQ3JELFFBQVEsdURBQWM7O0FBRXRCOztBQUVBLENBQUM7Ozs7O0FBSzZCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxbUI2QjtBQUNKOztBQUU3QixDQUFRLDZCQUE2QixnREFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFJO0FBQzVCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFDb0I7QUFDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFNOztBQUVqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDQTtBQUNPO0FBQ1M7QUFDRjtBQUNiOztBQUV2QztBQUNBOztBQUVBLElBQUksNERBQW1CO0FBQ3ZCLENBQUM7O0FBRUQsWUFBWSw2Q0FBNkM7QUFDekQsV0FBVyxNQUFNO0FBQ2pCLFlBQVksTUFBTTtBQUNsQixlQUFlLGNBQWM7QUFDN0IsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksV0FBVztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3M/YWY3YyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9Ub2RvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi50b2RvbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi50b2RvbW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuNik7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiAucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLyogLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUg7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi50b2RvbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi50b2RvbW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuNik7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiAucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLyogLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBUb2RvQ29udHJvbGxlciA9ICgpID0+IHtcbi8vICAgICBsZXQgcHJvamVjdHMgPSBbXTtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9qZWN0cyxcbi8vICAgICAgICAgc2V0UHJvamVjdHMocHJvamVjdCkge1xuLy8gICAgICAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGFkZFByb2plY3QocHJvamVjdG5hbWUpIHtcbi8vICAgICAgICAgICAgIGlmKHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdG5hbWUubmFtZSkpXG4vLyAgICAgICAgICAgICByZXR1cm5cbi8vICAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdG5hbWUpXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdG5hbWUpIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGdyYWJQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpID09PSBwcm9qZWN0bmFtZS5uYW1lKVxuLy8gICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKGdyYWJQcm9qZWN0KSwxKVxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBnZXRQcm9qZWN0KHByb2plY3RuYW1lKSB7XG4vLyAgICAgICAgICAgICBpZihwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3ROYW1lKCkgPT09IHByb2plY3RuYW1lLm5hbWUpKSBcbi8vICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0bmFtZVxuXG4vLyAgICAgICAgIH0sXG5cbi8vICAgICB9XG4vLyB9XG5cbiBjb25zdCBUb2RvQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3RuYW1lKSA9PiB7XG4gICAgICAgIGlmKHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdG5hbWUubmFtZSkpXG4gICAgICAgIHJldHVyblxuICAgICAgICBwcm9qZWN0cy5wdXNoKFByb2plY3RzKHByb2plY3RuYW1lKSlcblxuICAgIH1cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3RuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyYWJQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0bmFtZS5uYW1lKVxuICAgICAgICByZXR1cm4gcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YoZ3JhYlByb2plY3QpLDEpXG4gICAgfVxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdG5hbWUpID0+IHtcbiAgICAgICByZXR1cm4gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpID09PSBwcm9qZWN0bmFtZSlcbiAgICB9XG4gICAgY29uc3QgYWRkVG9kbyA9IChwcm9qZWN0bmFtZSx0YXNrKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGdyYWJQcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0bmFtZSkudG9kb3NcbiAgICAgICAgcmV0dXJuIGdldFByb2plY3QocHJvamVjdG5hbWUpLmFkZFRhc2soVGFzayh0YXNrKSlcbiAgICAvLyAgY29uc3QgZ3JhYlByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3ROYW1lKCkgPT09IHByb2plY3RuYW1lKVxuICAgIC8vICByZXR1cm4gZ3JhYlByb2plY3QuYWRkVGFzayhUYXNrKHRhc2ssZGF0ZSkpXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSAocHJvamVjdG5hbWUsIHRhc2spID0+IHtcbiAgICAgICAgcmV0dXJuIGdldFByb2plY3QocHJvamVjdG5hbWUpLmRlbGV0ZVRhc2sodGFzaylcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdFRvZG8gPSAocHJvamVjdG5hbWUsdGFzayxkYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRQcm9qZWN0KHByb2plY3RuYW1lKS5lZGl0VG9kbyh0YXNrLGRhdGUpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZWRpdFRvZG8gPSAocHJvamVjdG5hbWUpXG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgZWRpdFByb2plY3RUb2RvXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udHJvbGxlclxuXG5sZXQgdXNlcjEgPSBUb2RvQ29udHJvbGxlclxuLy8gbGV0IHVzZXIxID0gVG9kb0NvbnRyb2xsZXIoKS5hZGRQcm9qZWN0KCdOYW1lJylcbnVzZXIxLmFkZFByb2plY3QoJ05hbWUnKVxudXNlcjEuYWRkVG9kbygnTmFtZScsJ3Rhc2snKVxuLy8gdXNlcjEuZWRpdFByb2plY3RUb2RvKCdOYW1lJywnbmV0YXNrJywnMS8yLzIwMjInKVxuXG5cblxuY29uc29sZS5sb2codXNlcjEpIiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBUb2RvQ29udHJvbGxlciBmcm9tIFwiLi9Ub2RvQ29udHJvbGxlclwiO1xuXG4vLyAgY29uc3QgcHJvamVjdG1vZGFsID0gKCgpID0+IHtcbi8vICAgICBjb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpXG4vLyAgICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b25dJylcbi8vICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4vLyAgICAgb3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldClcbi8vICAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbi8vICAgICAgICAgfSlcbi8vICAgICB9KVxuXG4vLyAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLmFjdGl2ZScpXG4vLyAgICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbi8vICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcblxuLy8gICAgIGNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbi8vICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJylcbi8vICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcblxuLy8gICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuLy8gICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbi8vICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbi8vICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuLy8gICAgIH1cbi8vICAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4vLyAgICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVybiBcbi8vICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuLy8gICAgIH1cbi8vIH0pKClcblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZnVuY3Rpb24gcmVuZGVyVGVtcChjb250YWluZXIpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0VGVtcGxhdGUnKVxuICAgICAgICBsZXQgZGl2ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ1BST0pFQ1RTOiB3ZSB3YW50IHRvIGtub3cgaWYgYSBwcm9qZWN0IGlzIGFkZGVkJylcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJyxhZGRQcm9qZWN0KVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgLy9wcm9qZWN0IGFkZGVkIGV2ZW50IHB1Ymxpc2hcbiAgICAgICAgY29uc29sZS5sb2coYEkgaGVhciB0aGF0ICR7bmFtZX0gaXMgYmVpbmcgYWRkZWRgKVxuICAgICAgICBsZXQgcHJvamVjdGxpc3QgPSBsaXN0XG4gICAgICAgIGxldCB1c2Vyb25lID0gVG9kb0NvbnRyb2xsZXJcbiAgICAgICAgbGV0IHByb2plY3RzID0gdXNlcm9uZS5wcm9qZWN0c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgdXNlcm9uZS5hZGRQcm9qZWN0KG5hbWUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJvbmUuZ2V0UHJvamVjdChuYW1lKSlcbiAgICAgICAgcHJvamVjdGxpc3QucHVzaCh1c2Vyb25lKVxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vyb25lKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnVGhpcyBpcycsdXNlcm9uZSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdGxpc3QpXG4gICAgICAgIHByb2plY3RsaXN0ID0gQXJyYXkuZnJvbShsaXN0KS5zb3J0KClcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RVcGRhdGVkJylcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3RVcGRhdGVkJywgbmFtZSlcblxuICAgICAgICBsZXQgcHJvamVjdG5hbWVkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG5hbWUnKVxuICAgICAgICBwcm9qZWN0bmFtZWRpdi50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50JylcbiAgICAgICAgICAgIGxldCBidXR0b24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50cHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50cHJvamVjdCcpXG4gICAgICAgICAgICAgICAgY3VycmVudHByb2plY3QudGV4dENvbnRlbnQgPSBgJHtuYW1lLm5hbWV9YFxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tidXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tidG4nKVxuICAgICAgICAgICAgICAgIHRhc2tidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0dGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IGlucHV0dGV4dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXR0ZXh0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGlucHV0ZGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRkYXRlLnZhbHVlID0gICcnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgcGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgcGJ1dHRvbi50ZXh0Q29udGVudCA9IGAke25hbWUubmFtZX1gXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQocGJ1dHRvbilcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgICAgICBkZi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RuYW1lZGl2LmFwcGVuZENoaWxkKGRmKVxuXG5cbiAgICAgICAgLy8gY29uc3QgZGlzcGxheXByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dwcm9qZWN0cycpXG5cbiAgICAgICAgLy8gbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZSBidXR0b24nKVxuICAgICAgICAvLyBidXR0b24uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIC8vIGxldCBwcm9qZWN0bmFtZWRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZScpXG4gICAgICAgIC8vIHByb2plY3RuYW1lZGl2LmlubmVyVGV4dCA9ICcnXG4gICAgICAgIC8vIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICAvLyBwcm9qZWN0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50JylcbiAgICAgICAgLy8gICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dwcm9qZWN0cycpXG4gICAgICAgIC8vICAgICAgICAgd2hpbGUocHJvamVjdHBhZ2UuZmlyc3RDaGlsZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0cGFnZS5yZW1vdmVDaGlsZChwcm9qZWN0cGFnZS5maXJzdENoaWxkKVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAvLyAgICAgICAgIGgyLmlubmVyVGV4dCA9IGAke25hbWUubmFtZX1gXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgaG9sZHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyAgICAgICAgIGhvbGR0b2RvLmNsYXNzTGlzdC5hZGQoJ2hvbGQtdGFza3MnKVxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvbW9kYWwtdGFyZ2V0XCIsJyN0b2RvbW9kYWwnKVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKVxuICAgICAgICAgICAgICAgIC8vIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvTW9kYWwpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbC5jbGFzc0xpc3QuYWRkKCd0b2RvbW9kYWwnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZG9tb2RhbFwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9tb2RhbGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RhbG1vZGFsLWhlYWRlcicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb21vZGFsdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWx0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbHRpdGxlLmlubmVyVGV4dCA9ICdOZXcgVGFzaydcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvY2xvc2VidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvY2xvc2VidXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb2Nsb3NlYnV0dG9uLmlubmVyVGV4dCA9IGAmdGltZXM7YFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGhlYWRlci5hcHBlbmQodG9kb21vZGFsdGl0bGUsdG9kb2Nsb3NlYnV0dG9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9tb2RhbGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWxib2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG9tb2RhbC1ib2R5JylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvbW9kYWxmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9mb3JtJylcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb3Rhc2tpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb3Rhc2tpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb3Rhc2tpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dFRhc2snKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvZGF0ZWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvZGF0ZWlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvZGF0ZWlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0RGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9zdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2Rvc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9zdWJtaXQuY2xhc3NMaXN0LmFkZCgndG9kb2J0bicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9zdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCdcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWxmb3JtLmFwcGVuZCh0b2RvdGFza2lucHV0LHRvZG9kYXRlaW5wdXQsdG9kb3N1Ym1pdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWxib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbGZvcm0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb21vZGFsLmFwcGVuZCh0b2RvbW9kYWxoZWFkZXIsdG9kb21vZGFsYm9keSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBvcGVuVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZG9tb2RhbC10YXJnZXRdJylcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gb3BlblRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC50b2RvbW9kYWxUYXJnZXQpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9tb2RhbC5hY3RpdmUnKSBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy50b2RvbW9kYWwnKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvZG9CdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJ1xuXG4gICAgICAgIC8vICAgICAgICAgZGl2LmFwcGVuZChoMixob2xkdG9kbyxhZGRUb2RvQnV0dG9uKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIGRpc3BsYXlwcm9qZWN0cy5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICBsZXQgcGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAvLyAgICAgcGJ1dHRvbi5pbm5lclRleHQgPSBgJHtuYW1lLm5hbWV9YFxuICAgICAgICAvLyAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHBidXR0b24pXG4gICAgICAgIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICAvLyAgICAgZGYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBwcm9qZWN0bmFtZWRpdi5hcHBlbmRDaGlsZChkZilcbiAgICAgICAgICAgIC8vIGNvbnN0IG9wZW5Ub2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9kb21vZGFsLXRhcmdldF0nKVxuICAgICAgICAgICAgLy8gY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpXG4gICAgICAgICAgICAvLyBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuICAgIFxuICAgICAgICAgICAgLy8gb3BlblRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRvZG9tb2RhbFRhcmdldClcbiAgICAgICAgICAgIC8vICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyB9KVxuICAgIFxuICAgICAgICAgICAgLy8gb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb21vZGFsLmFjdGl2ZScpIFxuICAgICAgICAgICAgLy8gICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gfSlcbiAgICBcbiAgICAgICAgICAgIC8vIGNsb3NlVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcudG9kb21vZGFsJylcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgICAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAvLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgICAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAvLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICAvLyBwcm9qZWN0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgLy8gICAgIHAuaW5uZXJUZXh0ID0gYCR7bmFtZS5uYW1lfWA7XG4gICAgICAgIC8vICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gICAgIGRpdi5hcHBlbmRDaGlsZChwKVxuICAgICAgICAvLyAgICAgZGYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gYnV0dG9uLmFwcGVuZENoaWxkKGRmKVxuICAgICAgICAvLyBwcm9qZWN0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG5hbWUgcCcpXG4gICAgICAgIC8vICAgICBwLmlubmVyVGV4dCAgPSBgJHtuYW1lLm5hbWV9YFxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBwcm9qZWN0bGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgaWYocHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKSkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gbGV0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG5hbWUgcCcpXG4gICAgLy8gICAgICAgICAvLyBwLmlubmVyVGV4dCA9IGAke25hbWV9YFxuICAgIC8vICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Ub2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9kb21vZGFsLXRhcmdldF0nKVxuICAgIGNvbnN0IGNsb3NlVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG5cbiAgICBvcGVuVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC50b2RvbW9kYWxUYXJnZXQpXG4gICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvbW9kYWwuYWN0aXZlJykgXG4gICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy50b2RvbW9kYWwnKVxuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgdG9kb3N1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrYnRuJylcbiAgICAvLyB0b2Rvc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRUb2RvVG9Qcm9qZWN0KVxuXG4gICAgLy8gZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChlKSB7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBsZXQgaW5wdXR0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFzaycpXG4gICAgICAgIC8vIGxldCB0YXNrID0gaW5wdXR0ZXh0LnZhbHVlO1xuICAgICAgICAvLyBpbnB1dHRleHQudmFsdWUgPSAnJztcblxuICAgICAgICAvLyBsZXQgaW5wdXRkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RGF0ZScpXG4gICAgICAgIC8vIGxldCBkYXRlID0gaW5wdXRkYXRlLnZhbHVlO1xuICAgICAgICAvLyBpbnB1dGRhdGUudmFsdWUgPSAgJydcbiAgICAgICAgXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgdG9kb21vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsLmNsYXNzTGlzdC5hZGQoJ3RvZG9tb2RhbCcpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9kb21vZGFsXCIpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb21vZGFsaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZGFsbW9kYWwtaGVhZGVyJylcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvbW9kYWx0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsdGl0bGUuaW5uZXJUZXh0ID0gJ05ldyBUYXNrJ1xuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9jbG9zZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9jbG9zZWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvY2xvc2VidXR0b24uaW5uZXJUZXh0ID0gYCZ0aW1lcztgXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsaGVhZGVyLmFwcGVuZCh0b2RvbW9kYWx0aXRsZSx0b2RvY2xvc2VidXR0b24pXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb21vZGFsYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbGJvZHkuY2xhc3NMaXN0LmFkZCgndG9kb21vZGFsLWJvZHknKVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9tb2RhbGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb2Zvcm0nKVxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvdGFza2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvdGFza2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvdGFza2lucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0VGFzaycpXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9kYXRlaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9kYXRlaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9kYXRlaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXREYXRlJylcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb3N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9zdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb3N1Ym1pdC5jbGFzc0xpc3QuYWRkKCd0b2RvYnRuJylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb3N1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0J1xuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbGZvcm0uYXBwZW5kKHRvZG90YXNraW5wdXQsdG9kb2RhdGVpbnB1dCx0b2Rvc3VibWl0KVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbGJvZHkuYXBwZW5kQ2hpbGQodG9kb21vZGFsZm9ybSlcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWwuYXBwZW5kKHRvZG9tb2RhbGhlYWRlcix0b2RvbW9kYWxib2R5KVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb21vZGFsKVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Ub2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9kb21vZGFsLXRhcmdldF0nKVxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJylcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBvcGVuVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRvZG9tb2RhbFRhcmdldClcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb21vZGFsLmFjdGl2ZScpIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGNsb3NlVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLnRvZG9tb2RhbCcpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gdG9kb01vZGFsKCkge1xuICAgIC8vICAgICBjb25zdCB0b2RvbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICB0b2RvbW9kYWwuY2xhc3NMaXN0LmFkZCgndG9kb21vZGFsJylcbiAgICAvLyAgICAgdG9kb21vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0b2RvbW9kYWxcIilcblxuICAgIC8vICAgICBjb25zdCB0b2RvbW9kYWxoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICB0b2RvbW9kYWxoZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kYWxtb2RhbC1oZWFkZXInKVxuXG4gICAgLy8gICAgIGNvbnN0IHRvZG9tb2RhbHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgdG9kb21vZGFsdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIC8vICAgICB0b2RvbW9kYWx0aXRsZS5pbm5lclRleHQgPSAnTmV3IFRhc2snXG5cbiAgICAvLyAgICAgY29uc3QgdG9kb2Nsb3NlYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyAgICAgdG9kb2Nsb3NlYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpXG4gICAgLy8gICAgIHRvZG9jbG9zZWJ1dHRvbi5pbm5lclRleHQgPSBgJnRpbWVzO2BcblxuICAgIC8vICAgICB0b2RvbW9kYWxoZWFkZXIuYXBwZW5kKHRvZG9tb2RhbHRpdGxlLHRvZG9jbG9zZWJ1dHRvbilcblxuICAgIC8vICAgICBjb25zdCB0b2RvbW9kYWxib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgdG9kb21vZGFsYm9keS5jbGFzc0xpc3QuYWRkKCd0b2RvbW9kYWwtYm9keScpXG5cbiAgICAvLyAgICAgY29uc3QgdG9kb21vZGFsZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIC8vICAgICB0b2RvbW9kYWxmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvZm9ybScpXG4gICAgLy8gICAgIGNvbnN0IHRvZG90YXNraW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgLy8gICAgIHRvZG90YXNraW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgLy8gICAgIHRvZG90YXNraW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRUYXNrJylcbiAgICAvLyAgICAgY29uc3QgdG9kb2RhdGVpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAvLyAgICAgdG9kb2RhdGVpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJylcbiAgICAvLyAgICAgdG9kb2RhdGVpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dERhdGUnKVxuICAgIC8vICAgICBjb25zdCB0b2Rvc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyAgICAgdG9kb3N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuICAgIC8vICAgICB0b2Rvc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3RvZG9idG4nKVxuICAgIC8vICAgICB0b2Rvc3VibWl0LmlubmVyVGV4dCA9ICdTdWJtaXQnXG5cbiAgICAvLyAgICAgdG9kb21vZGFsZm9ybS5hcHBlbmQodG9kb3Rhc2tpbnB1dCx0b2RvZGF0ZWlucHV0LHRvZG9zdWJtaXQpXG5cbiAgICAvLyAgICAgdG9kb21vZGFsYm9keS5hcHBlbmRDaGlsZCh0b2RvbW9kYWxmb3JtKVxuXG4gICAgLy8gICAgIHRvZG9tb2RhbC5hcHBlbmQodG9kb21vZGFsaGVhZGVyLHRvZG9tb2RhbGJvZHkpXG5cbiAgICAvLyAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvbW9kYWwpXG5cbiAgICAgICAgLy8gY29uc3Qgb3BlblRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2RvbW9kYWwtdGFyZ2V0XScpXG4gICAgICAgIC8vIGNvbnN0IGNsb3NlVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS1idXR0b24nKVxuICAgICAgICAvLyBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4gICAgICAgIC8vIG9wZW5Ub2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQudG9kb21vZGFsVGFyZ2V0KVxuICAgICAgICAvLyAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgLy8gb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvbW9kYWwuYWN0aXZlJykgXG4gICAgICAgIC8vICAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgLy8gY2xvc2VUb2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcudG9kb21vZGFsJylcbiAgICAgICAgLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgIC8vICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbiAgICAgICAgLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIC8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgICAgICAvLyAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgIC8vICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAvLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAvLyB9XG5cbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvbW9kYWwpXG4gICAgLy8gfVxuXG4vLyAgICAgY29uc3Qgb3BlblRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2RvbW9kYWwtdGFyZ2V0XScpXG4vLyAgICAgY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uXScpXG4vLyAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcblxuLy8gICAgIG9wZW5Ub2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbi8vICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRvZG9tb2RhbFRhcmdldClcbi8vICAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbi8vICAgICAgICAgfSlcbi8vICAgICB9KVxuXG4vLyAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9tb2RhbC5hY3RpdmUnKSBcbi8vICAgICAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuLy8gICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbi8vICAgICAgICAgfSlcbi8vICAgICB9KVxuXG4vLyAgICAgY2xvc2VUb2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbi8vICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLnRvZG9tb2RhbCcpXG4vLyAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG4vLyAgICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4vLyAgICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuLy8gICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuLy8gICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4vLyAgICAgfVxuLy8gICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbi8vICAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4vLyAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4vLyAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclRlbXBcbiAgICB9XG5cbn0pKClcblxuY29uc3QgcHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG9wZW5Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJylcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG5cbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KVxuICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwuYWN0aXZlJylcbiAgICAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKVxuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuIFxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJylcbiAgICBwcm9qZWN0c3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRQcm9qZWN0Rm9ybSlcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByb2plY3ROYW1lJylcbiAgICAgICAgbGV0IG5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICBjb25zb2xlLmxvZyhgUFJPSkVDVCBGT1JNOiBhIHByb2plY3QgJHtuYW1lfSBoYXMgYmVlbiBhZGRlZGApXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLG5hbWUpXG5cbiAgICB9XG5cbn0pKClcblxuXG5cblxuZXhwb3J0IHtwcm9qZWN0Rm9ybSwgcHJvamVjdHN9XG4vLyBleHBvcnQgY29uc3QgcHJvamVjdG1vZGFsID0gKCgpID0+IHtcbi8vICAgIGNvbnN0IG9wZW5Qcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJylcbi8vICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuLy8gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcblxuLy8gICAgb3BlblByb2plY3RNb2RhbC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0Jylcbi8vICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuLy8gICAgIH0pXG4vLyAgICB9KVxuXG4vLyAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW1vZGFsLmFjdGl2ZScpXG4vLyAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuLy8gICAgIH0pXG4vLyAgICB9KVxuXG4vLyAgICBjbG9zZVByb2plY3RNb2RhbC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKVxuLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuLy8gICAgIH0pXG4vLyAgICB9KVxuXG4vLyAgICBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbi8vICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm4gXG4vLyAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbi8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4vLyAgICB9XG5cbi8vICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbi8vICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm4gXG4vLyAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4vLyAgICB9XG4vLyB9KSgpIiwiaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gXCJ1dWlkXCJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCJcblxuIGV4cG9ydCBjb25zdCBQcm9qZWN0cyA9IChuYW1lLCBpZCA9IHV1aWR2NCgpKSA9PiB7XG4gICAgbGV0IHRvZG9zID0gW11cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgIGlkLFxuICAgICAgICB0b2RvcyxcbiAgICAgICAgc2V0UHJvamVjdE5hbWUodmFsdWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRvZG8odGFza3MsZGF0ZSkge1xuICAgICAgICAgICAgdG9kb3MudGFzayA9PSB0YXNrc1xuICAgICAgICAgICAgdG9kb3MuZGF0ZSA9PSBkYXRlXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICAgICAgaWYodG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5nZXRQcm9qZWN0TmFtZSgpID09PSB0YXNrKSkgcmV0dXJuXG4gICAgICAgICAgICAgdG9kb3MucHVzaChUYXNrKHRhc2spKVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVUYXNrKHRhcmdldCl7XG4gICAgICAgICAgICBjb25zdCBncmFiVGFzayA9IHRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gdGFyZ2V0KVxuICAgICAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YoZ3JhYlRhc2spLDEpXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRUb2RvKG5ld1Rhc2ssbmV3RGF0ZSkge1xuICAgICAgICAgICAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvLnRhc2sgPSBuZXdUYXNrLFxuICAgICAgICAgICAgICAgIHRvZG8uZHVlZGF0ZSA9IG5ld0RhdGVcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgICAgICAgICAgIC8vIGlmKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRvZG8uaWQgPSBpZFxuICAgICAgICAgICAgICAgIC8vICAgICB0b2RvLnRhc2sgPSBuZXdUYXNrXG4gICAgICAgICAgICAgICAgLy8gICAgIHRvZG8uZHVlZGF0ZSA9IG5ld0RhdGVcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRvZG9cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCB1c2VyMSA9IFByb2plY3RzKCdOZXcgUHJvamVjdCcpXG51c2VyMS5hZGRUYXNrKCdDcmVhdGUnLCcxMS8yMi8yMDIyJylcbnVzZXIxLmVkaXRUb2RvKCdjcmF0ZScsJzEvMi8yMDIyJylcbmNvbnNvbGUubG9nKHVzZXIxKVxuIiwiY29uc3QgcHVic3ViID0gKCgpID0+IHtcbiAgICBsZXQgX3B1YnN1YiA9IHt9O1xuXG4gICAgLy9zdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KF9wdWJzdWJbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9wdWJzdWJbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgICB9O1xuXG4gICAgLy91bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9wdWJzdWJbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX3B1YnN1YltldmVudE5hbWVdLnNwbGljZSgoX3B1YnN1YltldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcblxuICAgIH1cblxuICAgIC8vcHVibGlzaCBldmVudCB3aXRoIGRhdGFcbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgLi4uZGF0YSkge1xuICAgICAgICBpZighQXJyYXkuaXNBcnJheShfcHVic3ViW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgfVxuXG4gICAgIC8vZGVidWdcbiAgICAgZnVuY3Rpb24gdmlld0V2ZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coX3B1YnN1Yik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICB1bnN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgdmlld0V2ZW50c1xuICAgIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBwdWJzdWIiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiXG5leHBvcnQgY29uc3QgVGFzayA9ICh0YXNrLGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFzayxcbiAgICAgICAgLy8gZHVlZGF0ZSxcbiAgICAgICAgaWQ6dXVpZHY0KCksXG5cbiAgICAgICAgZ2V0VGFzaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXREYXRlKCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGR1ZWRhdGVcbiAgICAgICAgLy8gfSxcblxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4vbW9kdWxlcy9wdWJzdWJcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9Ub2RvQ29udHJvbGxlclwiO1xuaW1wb3J0IHtwcm9qZWN0Rm9ybSwgcHJvamVjdHMgfSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUvc3R5bGVzLmNzcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtcHJvamVjdHMnKTtcblxuICAgIHByb2plY3RzLnJlbmRlclRlbXAobmF2KVxufSlcblxuLy8gaW1wb3J0IHsgVG9kb0ZhY3RvcnksIFByb2plY3RGYWN0b3J5LCBQcm9qZWN0TWFuZ2VyIH0gZnJvbSBcIi4vbW9kdWxlcy90b2RvXCI7XG4vLyBpbXBvcnQge3RvZG99IGZyb20gJy4vbW9kdWxlcy90YXNrJ1xuLy8gaW1wb3J0IHsgVUkgfSAgZnJvbSAnLi9tb2R1bGVzL1VJJ1xuLy8gLy8gaW1wb3J0IHsgcHJvamVjdEZvcm0gfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3Rmb3JtXCI7XG4vLyBpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuLy8gaW1wb3J0IHsgdGFza2Zvcm0gfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tmb3JtXCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS9zdHlsZXMuY3NzJ1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLy8gICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob2xkLXByb2plY3RzJylcbi8vICAgICByZW5kZXIgdGVtcGxhdGUgZm9yIHByb2plY3RzXG4vLyAgICAgcHJvamVjdHMucmVuZGVyVGVtcChhc2lkZSlcbi8vICAgICB0b2RvLnJlbmRlclRlbXAoYXNpZGUyKVxuLy8gfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=