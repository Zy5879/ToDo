/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\naside {\n    flex-direction: column;\n}\n\n.add-popup {\n    display: none;\n}\n\n.todopoup {\n    display: none;\n}\n\n/* .hometoday {\n    display: none;\n} */\n\n/* .task-popup {\n    display: none;\n} */\n\n/* .homemain {\n    display: none\n}\n\n.todopoup {\n    display: none;\n}\n\n/* .todo-popup {\n    display: none;\n}\n\n.main-home {\n    display: none;\n}\n\n.todo-form {\n    display: none;\n}\n.main-tody {\n    display: none;\n} */", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;GAEG;;AAEH;;GAEG;;AAEH;;;;;;;;;;;;;;;;;;;;;GAqBG","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\naside {\n    flex-direction: column;\n}\n\n.add-popup {\n    display: none;\n}\n\n.todopoup {\n    display: none;\n}\n\n/* .hometoday {\n    display: none;\n} */\n\n/* .task-popup {\n    display: none;\n} */\n\n/* .homemain {\n    display: none\n}\n\n.todopoup {\n    display: none;\n}\n\n/* .todo-popup {\n    display: none;\n}\n\n.main-home {\n    display: none;\n}\n\n.todo-form {\n    display: none;\n}\n.main-tody {\n    display: none;\n} */"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/module/project.js":
/*!*******************************!*\
  !*** ./src/module/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/module/pubsub.js");


const projects = (() => {
    let list = [];
    function renderTemp(container) {
        let template = document.getElementById('projectListTemplate')
        let div = template.content.cloneNode(true);
        container.appendChild(div)
        console.log('PROJECTS: we want to know if a project is added')
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectAdded', addProject)
    }

    //tell pubsub controller that we want to know about a project being added
    function addProject(name) {
        //project added event publish
        console.log(`I hear that ${name} is being added`)
        let projectlist = list
        projectlist.push(name)
        console.log(projectlist)
        projectlist = Array.from(list).sort()
        // list = Array.from(list).sort()
        console.log('projectUpdated',name)
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('projectUpdated', name)

        let ul = document.querySelector('.projectName ul')
        ul.innerHTML =''
        let df = document.createDocumentFragment()
        projectlist.forEach(name => {
            let li = document.createElement('li')
            li.innerText = name;
            df.appendChild(li)
        });
        ul.appendChild(df);

     }
     return {
        renderTemp,
        addProject
     }

})()

/***/ }),

/***/ "./src/module/projectForm.js":
/*!***********************************!*\
  !*** ./src/module/projectForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectForm": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/module/pubsub.js");


const projectForm = (() => {
    const addBtn = document.getElementById('add-projects')
    addBtn.addEventListener('click', showInput)
    const addpopup = document.querySelector('.add-popup')

    function showInput() {
        addBtn.style.display = 'none'
        // let addpopup = document.querySelector('.add-popup')
        addpopup.style.display = 'block'
        // let formadd = document.getElementById('adding')
        // formadd.addEventListener('click',addProjectForm)
        let form = document.querySelector('.project-form')
        form.querySelector('button').addEventListener('click', addProjectForm)

        // let goBack = document.getElementById('goback')
        // goBack.addEventListener('click', )
        // form.getElementById('adding').addEventListener('click', addProjectForm)
    };
    function addProjectForm(e) {
        //stops page from reloading once form button is clicked
        e.preventDefault()
        let input = document.querySelector('.project-form input')
        let name = input.value;
        input.value  = '';

        //let people know that project is being added
        // console.log(`PROJECT FORM: a project ${name} has been added`)
        // pubsub.publish('projectAdded',name)
        addBtn.style.display = 'block'
        addpopup.style.display = 'none'

        console.log(`PROJECT FORM: a project ${name} has been added`)
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('projectAdded',name)

    }
})()

/***/ }),

/***/ "./src/module/projectfactory.js":
/*!**************************************!*\
  !*** ./src/module/projectfactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFactory": () => (/* binding */ ProjectFactory)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

const ProjectFactory = (name,id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()) => {
    let todos = [];
    return {
        name:name,
        todos,
        // id:uuidv4(),

        getProject() {
            return name
        },
        getID() {
            return id
        },
        addTask(task) {
            return todos.push(task)
        },
        deleteTask(targetTask) {
            const grabTask = todos.find((oldtask) => oldtask.task === targetTask)
            return todos.splice(todos.indexOf(grabTask), 1)
        },
    }
}


/***/ }),

/***/ "./src/module/pubsub.js":
/*!******************************!*\
  !*** ./src/module/pubsub.js ***!
  \******************************/
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

/***/ "./src/module/todofactory.js":
/*!***********************************!*\
  !*** ./src/module/todofactory.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoFactory": () => (/* binding */ TodoFactory)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

const TodoFactory = (task,duedate,id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()) => {
    // let id = uuidv4()
    return {
        task:task,
        duedate:duedate,
        id,

        getTask() {
            return task
        },
        getDueDate() {
            return duedate
        },
        getID () {
            return id
        },
        setTask(value) {
            task = value
        },
        setDate(value) {
            duedate = value
        },

    }
    
}



/***/ }),

/***/ "./src/module/todolist.js":
/*!********************************!*\
  !*** ./src/module/todolist.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todolist": () => (/* binding */ todolist)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/module/pubsub.js");


const todolist = (() => {
    // const templatecontain = document.createElement('template')
    // templatecontain.classList.add('todoListTemplate')
    // const templatediv = document.createElement('div')
    // templatediv.classList.add('todotask')
    // const templateul = document.createElement('ul')
    // templatediv.appendChild(templateul)
    // templatecontain.appendChild(templatediv)
    // const main = document.querySelector('main')
    let list = []
    function renderForm(container) {
        // let template = document.querySelector('.todoListTemplate')
        // let templatediv = template.content.cloneNode(true)
        // container.appendChild(templatediv)
        let template = document.getElementById('todoListTemplate')
        let div = template.content.cloneNode(true)
        container.appendChild(div)
        //tell pubsub that we want to know about a todo being added
        console.log('TODO: want to know if a todo is being added')
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('todoAdded',adTodo)
    }
    function adTodo(task) {
        console.log(`I hear that a ${task} is being added`)
        let taskList = list;
        taskList.push(task)
        console.log(taskList)
        taskList = Array.from(list).sort()
        console.log('todoUpdated', task)
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('todoUpdated',task)

        let ul2 = document.querySelector('.todoTask ul')
        ul2.innerText = ''
        let df2 = document.createDocumentFragment()
        taskList.forEach(task => {
            let li2 = document.createElement('li')
            li2.innerText = task
            df2.appendChild(li2)
        });
        ul2.appendChild(df2)
        // main.appendChild(ul2)
        // let li = document.createElement('li')
        // li.innerText = task
        // df.appendChild(li)
        // renderForm(main)
    }
    return {
        renderForm,
        adTodo
    }
})()

/***/ }),

/***/ "./src/module/todolistform.js":
/*!************************************!*\
  !*** ./src/module/todolistform.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoForm": () => (/* binding */ todoForm)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/module/pubsub.js");

// import { UI } from "./ui";

// export const todoForm = (() => {
//     const todoAdd = document.querySelector('.todo-adder')
//     const todoshow = document.querySelector('.todo-popup')

//     todoAdd.addEventListener('click',showTodoInput)
//     function showTodoInput() {
//         todoAdd.style.display = 'none'
//         todoshow.style.display = 'block'
//         let form = document.querySelector('.todo-form')
//         form.querySelector('button').addEventListener('click',addTodoForm)

//     }
//     function addTodoForm(e) {
//         e.preventDefault()
//         let input = document.querySelector('.todo-form input');
//         let task = input.value;
//         input.value = '';
//         //tell people that a task has been added
//         console.log(`TODO FORM: a task ${task} was added`)
//         pubsub.publish('todoAdded',task)
//     }

// })()

const todoForm = (() => {
    const homeBtn = document.getElementById('home')
    
    homeBtn.addEventListener('click', showHome)

    const homemain = document.querySelector('.homemain')
    const homeaddtask = document.querySelector('.todoadd')
    // const todoadder = document.querySelector('.addT')
    const todopop = document.querySelector('.todopoup')

    homeaddtask.addEventListener('click', showForm)



    function showHome() {
        homemain.style.display = 'block'
        // homeaddtask.addEventListener('click', showForm)
    
    }

    function showForm() {
        homeaddtask.style.display = 'none'
        document.querySelector('.todopoup').style.display = 'block'
        let form = document.querySelector('.todo-form')
        form.querySelector('button').addEventListener('click', addTaskForm)



    }

    // function showFormInput() {
    //     homeaddtask.style.display = 'none';
    // }
    // const homeBtn = document.getElementById('home')
    // homeBtn.addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     };
        // const main = document.querySelector('.main')

        // const mainhome = document.createElement('h2')
        // mainhome.textContent = 'HOME'
        // mainhome.classList.add('Home-header')
        // const todaybutton = document.createElement('button')
        // todaybutton.textContent = 'Add Task'
        // todaybutton.classList.add('add-home')
        // const holdTask = document.createElement('main')
        // holdTask.classList.add('holdtask')
        // const taskpop = document.createElement('div')
        // taskpop.classList.add('task-popup')
        // const todoform = document.createElement('form')
        // todoform.classList.add('todo-form')
        // const todoinput = document.createElement('input')
        // todoinput.setAttribute('type','text')
        // const todoadd = document.createElement('button')
        // todoadd.classList.add('todoadd')
        // todoadd.textContent = 'Add'
    
        // todoform.append(todoinput,todoadd)
        // taskpop.appendChild(todoform)
    
        // main.append(mainhome,todaybutton,holdTask,taskpop)
    
    // })

    // const holdTask = document.querySelector('holdtask')
    // const main = document.querySelector('.main')

    // const mainhome = document.createElement('h2')
    // mainhome.textContent = 'HOME'
    // mainhome.classList.add('Home-header')
    // const todaybutton = document.createElement('button')
    // todaybutton.textContent = 'Add Task'
    // todaybutton.classList.add('add-home')
    // const holdTask = document.createElement('main')
    // holdTask.classList.add('holdtask')
    // const taskpop = document.createElement('div')
    // taskpop.classList.add('task-popup')
    // const todoform = document.createElement('form')
    // todoform.classList.add('todo-form')
    // const todoinput = document.createElement('input')
    // todoinput.setAttribute('type','text')
    // const todoadd = document.createElement('button')
    // todoadd.classList.add('todoadd')
    // todoadd.textContent = 'Add'

    // todoform.append(todoinput,todoadd)
    // taskpop.appendChild(todoform)

    // main.append(mainhome,todaybutton,holdTask,taskpop)


    // const homeBtn = document.getElementById('home')
    // homeBtn.addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     };

    // })

    function displayHome() {
    // const main = document.querySelector('.main')

    // const mainhome = document.createElement('h2')
    // mainhome.textContent = 'HOME'
    // mainhome.classList.add('Home-header')
    // const todaybutton = document.createElement('button')
    // todaybutton.textContent = 'Add Task'
    // todaybutton.classList.add('add-home')
    // const holdTask = document.createElement('main')
    // holdTask.classList.add('holdtask')
    // const taskpop = document.createElement('div')
    // taskpop.classList.add('task-popup')
    // const todoform = document.createElement('form')
    // todoform.classList.add('todo-form')
    // const todoinput = document.createElement('input')
    // todoinput.setAttribute('type','text')
    // const todoadd = document.createElement('button')
    // todoadd.classList.add('todoadd')
    // todoadd.textContent = 'Add'

    // todoform.append(todoinput,todoadd)
    // taskpop.appendChild(todoform)

    // main.append(mainhome,todaybutton,holdTask,taskpop)
        
        // const mainhome = document.createElement('h2')
        // mainhome.textContent = 'HOME'
        // mainhome.classList.add('Home-header')
        // const todaybutton = document.createElement('button')
        // todaybutton.textContent = 'Add Task'
        // todaybutton.classList.add('add-home')
        // const holdTask = document.createElement('main')
        // holdTask.classList.add('holdtask')
        // const taskpop = document.createElement('div')
        // taskpop.classList.add('task-popup')
        // const todoform = document.createElement('form')
        // todoform.classList.add('todo-form')
        // const todoinput = document.createElement('input')
        // todoinput.setAttribute('type','text')
        // const todoadd = document.createElement('button')
        // todoadd.classList.add('todoadd')
        // todoadd.textContent = 'Add'

        // todoform.append(todoinput,todoadd)
        // taskpop.appendChild(todoform)

        // main.append(mainhome,todaybutton,holdTask,taskpop)

    }


    // const divmain = document.querySelector('.main')
    // const todopop = document.querySelector('.todo')
    // const todoshow = document.querySelector('.todo-popup')
    // const mainhome = document.querySelector('.main-home')
    // const homeBtn = document.getElementById('home')
    // const todoadder = document.getElementById('todo-adder')
    // const todoform = document.querySelector('.todo-form')
    // const todopop = document.querySelector('todo-pop')
    // homeBtn.addEventListener('click', showHome)

    // function showHome() {
    //     mainhome.style.display = 'block'
    //     todoadder.addEventListener('click', showTodoInput)
        // todoadder.addEventListener('click',() => {
        //     document.querySelector('.todo-form').style.display = 'block'
        //     todoadder.style.display = 'none'
        // })
        // let form = document.getElementById('.todo-form')
        // form.querySelector('button').addEventListener('click', addTaskForm)

    // }

    // function showTodoInput() {
    //     todoadder.style.display = 'none'
    //     document.querySelector('.todo-form').style.display = 'block'
    //     todoform.querySelector('button').addEventListener('click',addTaskForm)
    // }

    // function showForm() {
    //     todoForm.style.display = 'block'
    //     todoadder.style.display = 'none'
    //     todopop.style.display = 'block'
    // }
    // function headList() {

        // const mainh2 = document.createElement('h2')
        // mainh2.textContent = 'HOME'
        // const createButton = document.createElement('button')
        // createButton.classList.add('todo-adder')
        // createButton.textContent = 'Add Task';

        // const createDivForm = document.createElement('div')
        // createDivForm.classList.add('todo-popup')
        // createDivForm.style.display = 'none'

        // const createmain = document.createElement('main')

        // mainh2.appendChild(createmain)

        // const form = document.createElement('form')
        // form.classList.add('todo-form')

        // const forminput = document.createElement('input')
        // forminput.classList.add('addT')

        // const btnaddtask = document.createElement('button')
        // btnaddtask.classList.add('addtodo')
        // btnaddtask.textContent = 'Add Task'

        // form.append(forminput,btnaddtask)
        // createDivForm.appendChild(form)
       
        // divmain.append(mainh2,createButton,createDivForm)

        // createButton.addEventListener('click', showTodoInput)
    // } 
    // function showTodoInput() {
    //     const addTask = document.querySelector('.todo-adder')
    //     addTask.style.display = 'none'
    //     const todoform = document.querySelector('.todo-popup')
    //     todoform.style.display = 'block'
    //     let form = document.querySelector('.todo-form')
    //     form.querySelector('button').addEventListener('click', addTaskForm)
    //     const todoshow = document.querySelector('.todo-popup')
    //     todoshow.style.display = 'block'
    // }

    // const addTaskBtn = document.querySelector('.add-home')
    // addTaskBtn.addEventListener('click', () => {
    //     addTaskBtn.style.display = 'none'
    // })
    // addTaskBtn.addEventListener('click', showForm)

    // function showForm() {
    //     addTaskBtn.style.display = 'none';
        // const taskpopup = document.querySelector('.task-popup')
        // taskpopup.style.display = 'block';
    // }

    function addTaskForm(e) {
        e.preventDefault()
        // let input = document.querySelector('.todo-form input')
        let input = document.querySelector('.todo-form input')
        let task = input.value;
        input.value = ''

        // todoadder.style.display = 'block'
        // document.querySelector('.todo-form').style.display = 'none'
        homeaddtask.style.display = 'block'
        todopop.style.display = 'none'
        //tell people that a task has been added
        console.log(`TODO FORM: a task ${task} has been added`)
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('todoAdded', task)
    }

    // function showClick() {
    //     console.log("REGISTER CLICK")
    // }
    // const btn = document.querySelector('.todo-adder')
    // btn.addEventListener('click', showClick)
    // const homeBtn = document.getElementById('home').addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     }
    //     headList()
    // })

})()

/***/ }),

/***/ "./src/module/ui.js":
/*!**************************!*\
  !*** ./src/module/ui.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });

const UI = (() => {
    const todayBtn = document.getElementById('today')
    // const main = document.querySelector('.main')
    // const homeBtn = document.getElementById('home')
    // homeBtn.addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     };
    //     displayHome()
    // })

    // function displayHome() {
    //     const mainhome = document.createElement('h2')
    //     mainhome.textContent = 'HOME'
    //     mainhome.classList.add('Home-header')
    //     const todaybutton = document.createElement('button')
    //     todaybutton.textContent = 'Add Task'
    //     todaybutton.classList.add('add-home')
    //     const holdTask = document.createElement('main')
    //     holdTask.classList.add('holdtask')
    //     const taskpop = document.createElement('div')
    //     taskpop.classList.add('task-popup')
    //     const todoform = document.createElement('form')
    //     todoform.classList.add('todo-form')
    //     const todoinput = document.createElement('input')
    //     todoinput.setAttribute('type','text')
    //     const todoadd = document.createElement('button')
    //     todoadd.classList.add('todoadd')
    //     todoadd.textContent = 'Add'

    //     todoform.append(todoinput,todoadd)
    //     taskpop.appendChild(todoform)

    //     main.append(mainhome,todaybutton,holdTask,taskpop)
    // }
    // const todayBtn = document.getElementById('today')
    // todayBtn.addEventListener('click' ,() => {
    //     document.querySelector('.main-tody').style.display = 'block'
    //     const todaycontent = document.querySelector('.main-home')
    //     while(todaycontent.firstChild) {
    //         todaycontent.removeChild(todaycontent.firstChild)
    //         document.querySelector('.main-home').style.display = 'none'
    //     }
    //     hideHome()
    // })

    // function hideHome() {
    // }
    // const main = document.querySelector('.main')
    // const todopop = document.querySelector('.todo')
    // function headList() {
    //     const mainh2 = document.createElement('h2')
    //     mainh2.textContent = 'HOME'
    //     const createButton = document.createElement('button')
    //     createButton.classList.add('todo-adder')
    //     createButton.textContent = 'Add Task'
    //     main.append(mainh2,createButton)
    // }
    // const homeBtn = document.getElementById('home').addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     }
    //     headList()
    //  })

})()

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
/* harmony import */ var _module_todofactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/todofactory */ "./src/module/todofactory.js");
/* harmony import */ var _module_projectfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/projectfactory */ "./src/module/projectfactory.js");
/* harmony import */ var _module_projectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/projectForm */ "./src/module/projectForm.js");
/* harmony import */ var _module_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/project */ "./src/module/project.js");
/* harmony import */ var _module_todolist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/todolist */ "./src/module/todolist.js");
/* harmony import */ var _module_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/ui */ "./src/module/ui.js");
/* harmony import */ var _module_todolistform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/todolistform */ "./src/module/todolistform.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");







// import {ui} from './module/ui'
// import { projectForm } from "./module/readprojects";


document.addEventListener('DOMContentLoaded', () => {
    let aside = document.querySelector('.hold-projects');
    let main = document.querySelector('main')
    //add project module
    _module_project__WEBPACK_IMPORTED_MODULE_3__.projects.renderTemp(aside)
    _module_todolist__WEBPACK_IMPORTED_MODULE_4__.todolist.renderForm(main)
    
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTs7QUFFUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQyxRQUFRLHVEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFTTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxDQUFDOzs7Ozs7VUNwRUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDTTtBQUNOO0FBQ1A7QUFDQztBQUNaO0FBQ2U7QUFDaEQsV0FBVyxJQUFJO0FBQ2YsWUFBWSxjQUFjO0FBQ0U7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBbUI7QUFDdkIsSUFBSSxpRUFBbUI7QUFDdkI7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGUvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZS9wcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZS9wcm9qZWN0ZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZS9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGUvdG9kb2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGUvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGUvdG9kb2xpc3Rmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlL3VpLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYXNpZGUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9wb3VwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogLmhvbWV0b2RheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi8qIC50YXNrLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLyogLmhvbWVtYWluIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4udG9kb3BvdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAudG9kby1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLWhvbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1haW4tdG9keSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0dBRUc7O0FBRUg7O0dBRUc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYXNpZGUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9wb3VwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogLmhvbWV0b2RheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi8qIC50YXNrLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLyogLmhvbWVtYWluIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4udG9kb3BvdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAudG9kby1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLWhvbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1haW4tdG9keSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZ1bmN0aW9uIHJlbmRlclRlbXAoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdFRlbXBsYXRlJylcbiAgICAgICAgbGV0IGRpdiA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICBjb25zb2xlLmxvZygnUFJPSkVDVFM6IHdlIHdhbnQgdG8ga25vdyBpZiBhIHByb2plY3QgaXMgYWRkZWQnKVxuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCBhZGRQcm9qZWN0KVxuICAgIH1cblxuICAgIC8vdGVsbCBwdWJzdWIgY29udHJvbGxlciB0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCBhIHByb2plY3QgYmVpbmcgYWRkZWRcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgLy9wcm9qZWN0IGFkZGVkIGV2ZW50IHB1Ymxpc2hcbiAgICAgICAgY29uc29sZS5sb2coYEkgaGVhciB0aGF0ICR7bmFtZX0gaXMgYmVpbmcgYWRkZWRgKVxuICAgICAgICBsZXQgcHJvamVjdGxpc3QgPSBsaXN0XG4gICAgICAgIHByb2plY3RsaXN0LnB1c2gobmFtZSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdGxpc3QpXG4gICAgICAgIHByb2plY3RsaXN0ID0gQXJyYXkuZnJvbShsaXN0KS5zb3J0KClcbiAgICAgICAgLy8gbGlzdCA9IEFycmF5LmZyb20obGlzdCkuc29ydCgpXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0VXBkYXRlZCcsbmFtZSlcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3RVcGRhdGVkJywgbmFtZSlcblxuICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE5hbWUgdWwnKVxuICAgICAgICB1bC5pbm5lckhUTUwgPScnXG4gICAgICAgIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICBwcm9qZWN0bGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgICAgIGRmLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICB9KTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoZGYpO1xuXG4gICAgIH1cbiAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyVGVtcCxcbiAgICAgICAgYWRkUHJvamVjdFxuICAgICB9XG5cbn0pKCkiLCJpbXBvcnQgcHVic3ViIGZyb20gJy4vcHVic3ViJ1xuXG5leHBvcnQgY29uc3QgcHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdHMnKVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dJbnB1dClcbiAgICBjb25zdCBhZGRwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcG9wdXAnKVxuXG4gICAgZnVuY3Rpb24gc2hvd0lucHV0KCkge1xuICAgICAgICBhZGRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAvLyBsZXQgYWRkcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXBvcHVwJylcbiAgICAgICAgYWRkcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgLy8gbGV0IGZvcm1hZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkaW5nJylcbiAgICAgICAgLy8gZm9ybWFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkUHJvamVjdEZvcm0pXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpXG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0Rm9ybSlcblxuICAgICAgICAvLyBsZXQgZ29CYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvYmFjaycpXG4gICAgICAgIC8vIGdvQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIClcbiAgICAgICAgLy8gZm9ybS5nZXRFbGVtZW50QnlJZCgnYWRkaW5nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0Rm9ybSlcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKGUpIHtcbiAgICAgICAgLy9zdG9wcyBwYWdlIGZyb20gcmVsb2FkaW5nIG9uY2UgZm9ybSBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybSBpbnB1dCcpXG4gICAgICAgIGxldCBuYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGlucHV0LnZhbHVlICA9ICcnO1xuXG4gICAgICAgIC8vbGV0IHBlb3BsZSBrbm93IHRoYXQgcHJvamVjdCBpcyBiZWluZyBhZGRlZFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgUFJPSkVDVCBGT1JNOiBhIHByb2plY3QgJHtuYW1lfSBoYXMgYmVlbiBhZGRlZGApXG4gICAgICAgIC8vIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLG5hbWUpXG4gICAgICAgIGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICBhZGRwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAgICAgY29uc29sZS5sb2coYFBST0pFQ1QgRk9STTogYSBwcm9qZWN0ICR7bmFtZX0gaGFzIGJlZW4gYWRkZWRgKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgncHJvamVjdEFkZGVkJyxuYW1lKVxuXG4gICAgfVxufSkoKSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5leHBvcnQgY29uc3QgUHJvamVjdEZhY3RvcnkgPSAobmFtZSxpZCA9IHV1aWR2NCgpKSA9PiB7XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICB0b2RvcyxcbiAgICAgICAgLy8gaWQ6dXVpZHY0KCksXG5cbiAgICAgICAgZ2V0UHJvamVjdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGdldElEKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9zLnB1c2godGFzaylcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlVGFzayh0YXJnZXRUYXNrKSB7XG4gICAgICAgICAgICBjb25zdCBncmFiVGFzayA9IHRvZG9zLmZpbmQoKG9sZHRhc2spID0+IG9sZHRhc2sudGFzayA9PT0gdGFyZ2V0VGFzaylcbiAgICAgICAgICAgIHJldHVybiB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZihncmFiVGFzayksIDEpXG4gICAgICAgIH0sXG4gICAgfVxufVxuIiwiY29uc3QgcHVic3ViID0gKCgpID0+IHtcbiAgICBsZXQgX3B1YnN1YiA9IHt9O1xuXG4gICAgLy9zdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KF9wdWJzdWJbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9wdWJzdWJbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgICB9O1xuXG4gICAgLy91bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9wdWJzdWJbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX3B1YnN1YltldmVudE5hbWVdLnNwbGljZSgoX3B1YnN1YltldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcblxuICAgIH1cblxuICAgIC8vcHVibGlzaCBldmVudCB3aXRoIGRhdGFcbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgLi4uZGF0YSkge1xuICAgICAgICBpZighQXJyYXkuaXNBcnJheShfcHVic3ViW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgfVxuXG4gICAgIC8vZGVidWdcbiAgICAgZnVuY3Rpb24gdmlld0V2ZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coX3B1YnN1Yik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICB1bnN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgdmlld0V2ZW50c1xuICAgIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBwdWJzdWIiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiXG5leHBvcnQgY29uc3QgVG9kb0ZhY3RvcnkgPSAodGFzayxkdWVkYXRlLGlkID0gdXVpZHY0KCkpID0+IHtcbiAgICAvLyBsZXQgaWQgPSB1dWlkdjQoKVxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2s6dGFzayxcbiAgICAgICAgZHVlZGF0ZTpkdWVkYXRlLFxuICAgICAgICBpZCxcblxuICAgICAgICBnZXRUYXNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBkdWVkYXRlXG4gICAgICAgIH0sXG4gICAgICAgIGdldElEICgpIHtcbiAgICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICB9LFxuICAgICAgICBzZXRUYXNrKHZhbHVlKSB7XG4gICAgICAgICAgICB0YXNrID0gdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgZHVlZGF0ZSA9IHZhbHVlXG4gICAgICAgIH0sXG5cbiAgICB9XG4gICAgXG59XG5cbiIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBjb25zdCB0b2RvbGlzdCA9ICgoKSA9PiB7XG4gICAgLy8gY29uc3QgdGVtcGxhdGVjb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKVxuICAgIC8vIHRlbXBsYXRlY29udGFpbi5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdFRlbXBsYXRlJylcbiAgICAvLyBjb25zdCB0ZW1wbGF0ZWRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gdGVtcGxhdGVkaXYuY2xhc3NMaXN0LmFkZCgndG9kb3Rhc2snKVxuICAgIC8vIGNvbnN0IHRlbXBsYXRldWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgLy8gdGVtcGxhdGVkaXYuYXBwZW5kQ2hpbGQodGVtcGxhdGV1bClcbiAgICAvLyB0ZW1wbGF0ZWNvbnRhaW4uYXBwZW5kQ2hpbGQodGVtcGxhdGVkaXYpXG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGxldCBsaXN0ID0gW11cbiAgICBmdW5jdGlvbiByZW5kZXJGb3JtKGNvbnRhaW5lcikge1xuICAgICAgICAvLyBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3RUZW1wbGF0ZScpXG4gICAgICAgIC8vIGxldCB0ZW1wbGF0ZWRpdiA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wbGF0ZWRpdilcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0VGVtcGxhdGUnKVxuICAgICAgICBsZXQgZGl2ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgLy90ZWxsIHB1YnN1YiB0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCBhIHRvZG8gYmVpbmcgYWRkZWRcbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE86IHdhbnQgdG8ga25vdyBpZiBhIHRvZG8gaXMgYmVpbmcgYWRkZWQnKVxuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKCd0b2RvQWRkZWQnLGFkVG9kbylcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRUb2RvKHRhc2spIHtcbiAgICAgICAgY29uc29sZS5sb2coYEkgaGVhciB0aGF0IGEgJHt0YXNrfSBpcyBiZWluZyBhZGRlZGApXG4gICAgICAgIGxldCB0YXNrTGlzdCA9IGxpc3Q7XG4gICAgICAgIHRhc2tMaXN0LnB1c2godGFzaylcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpXG4gICAgICAgIHRhc2tMaXN0ID0gQXJyYXkuZnJvbShsaXN0KS5zb3J0KClcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZG9VcGRhdGVkJywgdGFzaylcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3RvZG9VcGRhdGVkJyx0YXNrKVxuXG4gICAgICAgIGxldCB1bDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1Rhc2sgdWwnKVxuICAgICAgICB1bDIuaW5uZXJUZXh0ID0gJydcbiAgICAgICAgbGV0IGRmMiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgbGV0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGxpMi5pbm5lclRleHQgPSB0YXNrXG4gICAgICAgICAgICBkZjIuYXBwZW5kQ2hpbGQobGkyKVxuICAgICAgICB9KTtcbiAgICAgICAgdWwyLmFwcGVuZENoaWxkKGRmMilcbiAgICAgICAgLy8gbWFpbi5hcHBlbmRDaGlsZCh1bDIpXG4gICAgICAgIC8vIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgLy8gbGkuaW5uZXJUZXh0ID0gdGFza1xuICAgICAgICAvLyBkZi5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgLy8gcmVuZGVyRm9ybShtYWluKVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJGb3JtLFxuICAgICAgICBhZFRvZG9cbiAgICB9XG59KSgpIiwiaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWJcIjtcbi8vIGltcG9ydCB7IFVJIH0gZnJvbSBcIi4vdWlcIjtcblxuLy8gZXhwb3J0IGNvbnN0IHRvZG9Gb3JtID0gKCgpID0+IHtcbi8vICAgICBjb25zdCB0b2RvQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkZXInKVxuLy8gICAgIGNvbnN0IHRvZG9zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcG9wdXAnKVxuXG4vLyAgICAgdG9kb0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2hvd1RvZG9JbnB1dClcbi8vICAgICBmdW5jdGlvbiBzaG93VG9kb0lucHV0KCkge1xuLy8gICAgICAgICB0b2RvQWRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbi8vICAgICAgICAgdG9kb3Nob3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbi8vICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbi8vICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkVG9kb0Zvcm0pXG5cbi8vICAgICB9XG4vLyAgICAgZnVuY3Rpb24gYWRkVG9kb0Zvcm0oZSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbi8vICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybSBpbnB1dCcpO1xuLy8gICAgICAgICBsZXQgdGFzayA9IGlucHV0LnZhbHVlO1xuLy8gICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuLy8gICAgICAgICAvL3RlbGwgcGVvcGxlIHRoYXQgYSB0YXNrIGhhcyBiZWVuIGFkZGVkXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGBUT0RPIEZPUk06IGEgdGFzayAke3Rhc2t9IHdhcyBhZGRlZGApXG4vLyAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b2RvQWRkZWQnLHRhc2spXG4vLyAgICAgfVxuXG4vLyB9KSgpXG5cbmV4cG9ydCBjb25zdCB0b2RvRm9ybSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICBcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0hvbWUpXG5cbiAgICBjb25zdCBob21lbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lbWFpbicpXG4gICAgY29uc3QgaG9tZWFkZHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2FkZCcpXG4gICAgLy8gY29uc3QgdG9kb2FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFQnKVxuICAgIGNvbnN0IHRvZG9wb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3BvdXAnKVxuXG4gICAgaG9tZWFkZHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Rm9ybSlcblxuXG5cbiAgICBmdW5jdGlvbiBzaG93SG9tZSgpIHtcbiAgICAgICAgaG9tZW1haW4uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgLy8gaG9tZWFkZHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Rm9ybSlcbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICAgICAgaG9tZWFkZHRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3BvdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKVxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza0Zvcm0pXG5cblxuXG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gc2hvd0Zvcm1JbnB1dCgpIHtcbiAgICAvLyAgICAgaG9tZWFkZHRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICAvLyBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBob21lY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyAgICAgd2hpbGUoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIC8vICAgICAgICAgaG9tZWNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgICAgICAvLyBjb25zdCBtYWluaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgLy8gbWFpbmhvbWUudGV4dENvbnRlbnQgPSAnSE9NRSdcbiAgICAgICAgLy8gbWFpbmhvbWUuY2xhc3NMaXN0LmFkZCgnSG9tZS1oZWFkZXInKVxuICAgICAgICAvLyBjb25zdCB0b2RheWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIC8vIHRvZGF5YnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJ1xuICAgICAgICAvLyB0b2RheWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaG9tZScpXG4gICAgICAgIC8vIGNvbnN0IGhvbGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgICAgIC8vIGhvbGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2hvbGR0YXNrJylcbiAgICAgICAgLy8gY29uc3QgdGFza3BvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIHRhc2twb3AuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpXG4gICAgICAgIC8vIGNvbnN0IHRvZG9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIC8vIHRvZG9mb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG4gICAgICAgIC8vIGNvbnN0IHRvZG9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgLy8gdG9kb2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgICAgICAvLyBjb25zdCB0b2RvYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgLy8gdG9kb2FkZC5jbGFzc0xpc3QuYWRkKCd0b2RvYWRkJylcbiAgICAgICAgLy8gdG9kb2FkZC50ZXh0Q29udGVudCA9ICdBZGQnXG4gICAgXG4gICAgICAgIC8vIHRvZG9mb3JtLmFwcGVuZCh0b2RvaW5wdXQsdG9kb2FkZClcbiAgICAgICAgLy8gdGFza3BvcC5hcHBlbmRDaGlsZCh0b2RvZm9ybSlcbiAgICBcbiAgICAgICAgLy8gbWFpbi5hcHBlbmQobWFpbmhvbWUsdG9kYXlidXR0b24saG9sZFRhc2ssdGFza3BvcClcbiAgICBcbiAgICAvLyB9KVxuXG4gICAgLy8gY29uc3QgaG9sZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdob2xkdGFzaycpXG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgIC8vIGNvbnN0IG1haW5ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIC8vIG1haW5ob21lLnRleHRDb250ZW50ID0gJ0hPTUUnXG4gICAgLy8gbWFpbmhvbWUuY2xhc3NMaXN0LmFkZCgnSG9tZS1oZWFkZXInKVxuICAgIC8vIGNvbnN0IHRvZGF5YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyB0b2RheWJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICAvLyB0b2RheWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaG9tZScpXG4gICAgLy8gY29uc3QgaG9sZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICAvLyBob2xkVGFzay5jbGFzc0xpc3QuYWRkKCdob2xkdGFzaycpXG4gICAgLy8gY29uc3QgdGFza3BvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gdGFza3BvcC5jbGFzc0xpc3QuYWRkKCd0YXNrLXBvcHVwJylcbiAgICAvLyBjb25zdCB0b2RvZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIC8vIHRvZG9mb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG4gICAgLy8gY29uc3QgdG9kb2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIC8vIHRvZG9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAvLyBjb25zdCB0b2RvYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyB0b2RvYWRkLmNsYXNzTGlzdC5hZGQoJ3RvZG9hZGQnKVxuICAgIC8vIHRvZG9hZGQudGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgLy8gdG9kb2Zvcm0uYXBwZW5kKHRvZG9pbnB1dCx0b2RvYWRkKVxuICAgIC8vIHRhc2twb3AuYXBwZW5kQ2hpbGQodG9kb2Zvcm0pXG5cbiAgICAvLyBtYWluLmFwcGVuZChtYWluaG9tZSx0b2RheWJ1dHRvbixob2xkVGFzayx0YXNrcG9wKVxuXG5cbiAgICAvLyBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxuICAgIC8vIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhvbWVjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIC8vICAgICB3aGlsZShob21lY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgLy8gICAgICAgICBob21lY29udGVudC5yZW1vdmVDaGlsZChob21lY29udGVudC5maXJzdENoaWxkKVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gfSlcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG5cbiAgICAvLyBjb25zdCBtYWluaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAvLyBtYWluaG9tZS50ZXh0Q29udGVudCA9ICdIT01FJ1xuICAgIC8vIG1haW5ob21lLmNsYXNzTGlzdC5hZGQoJ0hvbWUtaGVhZGVyJylcbiAgICAvLyBjb25zdCB0b2RheWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gdG9kYXlidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG4gICAgLy8gdG9kYXlidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWhvbWUnKVxuICAgIC8vIGNvbnN0IGhvbGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgLy8gaG9sZFRhc2suY2xhc3NMaXN0LmFkZCgnaG9sZHRhc2snKVxuICAgIC8vIGNvbnN0IHRhc2twb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vIHRhc2twb3AuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpXG4gICAgLy8gY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAvLyB0b2RvZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKVxuICAgIC8vIGNvbnN0IHRvZG9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAvLyB0b2RvaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgLy8gY29uc3QgdG9kb2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gdG9kb2FkZC5jbGFzc0xpc3QuYWRkKCd0b2RvYWRkJylcbiAgICAvLyB0b2RvYWRkLnRleHRDb250ZW50ID0gJ0FkZCdcblxuICAgIC8vIHRvZG9mb3JtLmFwcGVuZCh0b2RvaW5wdXQsdG9kb2FkZClcbiAgICAvLyB0YXNrcG9wLmFwcGVuZENoaWxkKHRvZG9mb3JtKVxuXG4gICAgLy8gbWFpbi5hcHBlbmQobWFpbmhvbWUsdG9kYXlidXR0b24saG9sZFRhc2ssdGFza3BvcClcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IG1haW5ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAvLyBtYWluaG9tZS50ZXh0Q29udGVudCA9ICdIT01FJ1xuICAgICAgICAvLyBtYWluaG9tZS5jbGFzc0xpc3QuYWRkKCdIb21lLWhlYWRlcicpXG4gICAgICAgIC8vIGNvbnN0IHRvZGF5YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgLy8gdG9kYXlidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG4gICAgICAgIC8vIHRvZGF5YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1ob21lJylcbiAgICAgICAgLy8gY29uc3QgaG9sZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICAgICAgLy8gaG9sZFRhc2suY2xhc3NMaXN0LmFkZCgnaG9sZHRhc2snKVxuICAgICAgICAvLyBjb25zdCB0YXNrcG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gdGFza3BvcC5jbGFzc0xpc3QuYWRkKCd0YXNrLXBvcHVwJylcbiAgICAgICAgLy8gY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgLy8gdG9kb2Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtJylcbiAgICAgICAgLy8gY29uc3QgdG9kb2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAvLyB0b2RvaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgICAgIC8vIGNvbnN0IHRvZG9hZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAvLyB0b2RvYWRkLmNsYXNzTGlzdC5hZGQoJ3RvZG9hZGQnKVxuICAgICAgICAvLyB0b2RvYWRkLnRleHRDb250ZW50ID0gJ0FkZCdcblxuICAgICAgICAvLyB0b2RvZm9ybS5hcHBlbmQodG9kb2lucHV0LHRvZG9hZGQpXG4gICAgICAgIC8vIHRhc2twb3AuYXBwZW5kQ2hpbGQodG9kb2Zvcm0pXG5cbiAgICAgICAgLy8gbWFpbi5hcHBlbmQobWFpbmhvbWUsdG9kYXlidXR0b24saG9sZFRhc2ssdGFza3BvcClcblxuICAgIH1cblxuXG4gICAgLy8gY29uc3QgZGl2bWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKVxuICAgIC8vIGNvbnN0IHRvZG9zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcG9wdXAnKVxuICAgIC8vIGNvbnN0IG1haW5ob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taG9tZScpXG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICAvLyBjb25zdCB0b2RvYWRkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1hZGRlcicpXG4gICAgLy8gY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbiAgICAvLyBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndG9kby1wb3AnKVxuICAgIC8vIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZSlcblxuICAgIC8vIGZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIC8vICAgICBtYWluaG9tZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICB0b2RvYWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kb0lucHV0KVxuICAgICAgICAvLyB0b2RvYWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAvLyAgICAgdG9kb2FkZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLnRvZG8tZm9ybScpXG4gICAgICAgIC8vIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrRm9ybSlcblxuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dUb2RvSW5wdXQoKSB7XG4gICAgLy8gICAgIHRvZG9hZGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICB0b2RvZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkVGFza0Zvcm0pXG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgLy8gICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgIHRvZG9hZGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgIHRvZG9wb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAvLyB9XG4gICAgLy8gZnVuY3Rpb24gaGVhZExpc3QoKSB7XG5cbiAgICAgICAgLy8gY29uc3QgbWFpbmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAvLyBtYWluaDIudGV4dENvbnRlbnQgPSAnSE9NRSdcbiAgICAgICAgLy8gY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgLy8gY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYWRkZXInKVxuICAgICAgICAvLyBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgICAgIC8vIGNvbnN0IGNyZWF0ZURpdkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyBjcmVhdGVEaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcG9wdXAnKVxuICAgICAgICAvLyBjcmVhdGVEaXZGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICAvLyBjb25zdCBjcmVhdGVtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG5cbiAgICAgICAgLy8gbWFpbmgyLmFwcGVuZENoaWxkKGNyZWF0ZW1haW4pXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICAvLyBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAvLyBmb3JtaW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkVCcpXG5cbiAgICAgICAgLy8gY29uc3QgYnRuYWRkdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIC8vIGJ0bmFkZHRhc2suY2xhc3NMaXN0LmFkZCgnYWRkdG9kbycpXG4gICAgICAgIC8vIGJ0bmFkZHRhc2sudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG5cbiAgICAgICAgLy8gZm9ybS5hcHBlbmQoZm9ybWlucHV0LGJ0bmFkZHRhc2spXG4gICAgICAgIC8vIGNyZWF0ZURpdkZvcm0uYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICBcbiAgICAgICAgLy8gZGl2bWFpbi5hcHBlbmQobWFpbmgyLGNyZWF0ZUJ1dHRvbixjcmVhdGVEaXZGb3JtKVxuXG4gICAgICAgIC8vIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2RvSW5wdXQpXG4gICAgLy8gfSBcbiAgICAvLyBmdW5jdGlvbiBzaG93VG9kb0lucHV0KCkge1xuICAgIC8vICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkZXInKVxuICAgIC8vICAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wb3B1cCcpXG4gICAgLy8gICAgIHRvZG9mb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpXG4gICAgLy8gICAgIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrRm9ybSlcbiAgICAvLyAgICAgY29uc3QgdG9kb3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wb3B1cCcpXG4gICAgLy8gICAgIHRvZG9zaG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaG9tZScpXG4gICAgLy8gYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gfSlcbiAgICAvLyBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pXG5cbiAgICAvLyBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICAvLyAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvLyBjb25zdCB0YXNrcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1wb3B1cCcpXG4gICAgICAgIC8vIHRhc2twb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrRm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtIGlucHV0JylcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybSBpbnB1dCcpXG4gICAgICAgIGxldCB0YXNrID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcblxuICAgICAgICAvLyB0b2RvYWRkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgaG9tZWFkZHRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgdG9kb3BvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vdGVsbCBwZW9wbGUgdGhhdCBhIHRhc2sgaGFzIGJlZW4gYWRkZWRcbiAgICAgICAgY29uc29sZS5sb2coYFRPRE8gRk9STTogYSB0YXNrICR7dGFza30gaGFzIGJlZW4gYWRkZWRgKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgndG9kb0FkZGVkJywgdGFzaylcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBzaG93Q2xpY2soKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUkVHSVNURVIgQ0xJQ0tcIilcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkZXInKVxuICAgIC8vIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDbGljaylcbiAgICAvLyBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaG9tZWNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG4gICAgLy8gICAgIHdoaWxlKGhvbWVjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAvLyAgICAgICAgIGhvbWVjb250ZW50LnJlbW92ZUNoaWxkKGhvbWVjb250ZW50LmZpcnN0Q2hpbGQpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaGVhZExpc3QoKVxuICAgIC8vIH0pXG5cbn0pKCkiLCJcbmV4cG9ydCBjb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKVxuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICAvLyBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBob21lY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyAgICAgd2hpbGUoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIC8vICAgICAgICAgaG9tZWNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgZGlzcGxheUhvbWUoKVxuICAgIC8vIH0pXG5cbiAgICAvLyBmdW5jdGlvbiBkaXNwbGF5SG9tZSgpIHtcbiAgICAvLyAgICAgY29uc3QgbWFpbmhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgLy8gICAgIG1haW5ob21lLnRleHRDb250ZW50ID0gJ0hPTUUnXG4gICAgLy8gICAgIG1haW5ob21lLmNsYXNzTGlzdC5hZGQoJ0hvbWUtaGVhZGVyJylcbiAgICAvLyAgICAgY29uc3QgdG9kYXlidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vICAgICB0b2RheWJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICAvLyAgICAgdG9kYXlidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWhvbWUnKVxuICAgIC8vICAgICBjb25zdCBob2xkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIC8vICAgICBob2xkVGFzay5jbGFzc0xpc3QuYWRkKCdob2xkdGFzaycpXG4gICAgLy8gICAgIGNvbnN0IHRhc2twb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICB0YXNrcG9wLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcG9wdXAnKVxuICAgIC8vICAgICBjb25zdCB0b2RvZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIC8vICAgICB0b2RvZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKVxuICAgIC8vICAgICBjb25zdCB0b2RvaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgLy8gICAgIHRvZG9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAvLyAgICAgY29uc3QgdG9kb2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gICAgIHRvZG9hZGQuY2xhc3NMaXN0LmFkZCgndG9kb2FkZCcpXG4gICAgLy8gICAgIHRvZG9hZGQudGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgLy8gICAgIHRvZG9mb3JtLmFwcGVuZCh0b2RvaW5wdXQsdG9kb2FkZClcbiAgICAvLyAgICAgdGFza3BvcC5hcHBlbmRDaGlsZCh0b2RvZm9ybSlcblxuICAgIC8vICAgICBtYWluLmFwcGVuZChtYWluaG9tZSx0b2RheWJ1dHRvbixob2xkVGFzayx0YXNrcG9wKVxuICAgIC8vIH1cbiAgICAvLyBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpXG4gICAgLy8gdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICBjb25zdCB0b2RheWNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ob21lJylcbiAgICAvLyAgICAgd2hpbGUodG9kYXljb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAvLyAgICAgICAgIHRvZGF5Y29udGVudC5yZW1vdmVDaGlsZCh0b2RheWNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhvbWUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaGlkZUhvbWUoKVxuICAgIC8vIH0pXG5cbiAgICAvLyBmdW5jdGlvbiBoaWRlSG9tZSgpIHtcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKVxuICAgIC8vIGZ1bmN0aW9uIGhlYWRMaXN0KCkge1xuICAgIC8vICAgICBjb25zdCBtYWluaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgLy8gICAgIG1haW5oMi50ZXh0Q29udGVudCA9ICdIT01FJ1xuICAgIC8vICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vICAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1hZGRlcicpXG4gICAgLy8gICAgIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICAvLyAgICAgbWFpbi5hcHBlbmQobWFpbmgyLGNyZWF0ZUJ1dHRvbilcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhvbWVjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIC8vICAgICB3aGlsZShob21lY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgLy8gICAgICAgICBob21lY29udGVudC5yZW1vdmVDaGlsZChob21lY29udGVudC5maXJzdENoaWxkKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGhlYWRMaXN0KClcbiAgICAvLyAgfSlcblxufSkoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRvZG9GYWN0b3J5IH0gZnJvbSBcIi4vbW9kdWxlL3RvZG9mYWN0b3J5XCI7XG5pbXBvcnQgeyBQcm9qZWN0RmFjdG9yeSB9IGZyb20gXCIuL21vZHVsZS9wcm9qZWN0ZmFjdG9yeVwiO1xuaW1wb3J0IHsgcHJvamVjdEZvcm0gfSBmcm9tIFwiLi9tb2R1bGUvcHJvamVjdEZvcm1cIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vbW9kdWxlL3Byb2plY3RcIjtcbmltcG9ydCB7IHRvZG9saXN0IH0gZnJvbSBcIi4vbW9kdWxlL3RvZG9saXN0XCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL21vZHVsZS91aVwiO1xuaW1wb3J0IHsgdG9kb0Zvcm19IGZyb20gXCIuL21vZHVsZS90b2RvbGlzdGZvcm1cIjtcbi8vIGltcG9ydCB7dWl9IGZyb20gJy4vbW9kdWxlL3VpJ1xuLy8gaW1wb3J0IHsgcHJvamVjdEZvcm0gfSBmcm9tIFwiLi9tb2R1bGUvcmVhZHByb2plY3RzXCI7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtcHJvamVjdHMnKTtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIC8vYWRkIHByb2plY3QgbW9kdWxlXG4gICAgcHJvamVjdHMucmVuZGVyVGVtcChhc2lkZSlcbiAgICB0b2RvbGlzdC5yZW5kZXJGb3JtKG1haW4pXG4gICAgXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==