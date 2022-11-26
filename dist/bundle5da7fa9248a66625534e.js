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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\naside {\n    flex-direction: column;\n}\n\n.add-popup {\n    display: none;\n}\n\n/* .todo-popup {\n    display: none;\n}\n\n.main-home {\n    display: none;\n}\n\n.todo-form {\n    display: none;\n}\n.main-tody {\n    display: none;\n} */", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;;;;;;;;;GAaG","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\naside {\n    flex-direction: column;\n}\n\n.add-popup {\n    display: none;\n}\n\n/* .todo-popup {\n    display: none;\n}\n\n.main-home {\n    display: none;\n}\n\n.todo-form {\n    display: none;\n}\n.main-tody {\n    display: none;\n} */"],"sourceRoot":""}]);
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
    const main = document.querySelector('main')
    let list = []
    function renderForm(container) {
        // let template = document.querySelector('.todoListTemplate')
        // let templatediv = template.content.cloneNode(true)
        // container.appendChild(templatediv)
        let template2 = document.getElementById('todoListTemplate')
        let div2 = template2.content.cloneNode(true)
        container.appendChild(div2)
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

    function addTaskForm(e) {
        e.preventDefault()
        // let input = document.querySelector('.todo-form input')
        let input = document.querySelector('.todo-form input')
        let task = input.value;
        input.value = ''

        todoadder.style.display = 'block'
        document.querySelector('.todo-form').style.display = 'none'
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
    const main = document.querySelector('.main')
    const homeBtn = document.getElementById('home')
    homeBtn.addEventListener('click', () => {
        const homecontent = document.querySelector('.main')
        while(homecontent.firstChild) {
            homecontent.removeChild(homecontent.firstChild)
        };
        displayHome()
    })

    function displayHome() {
        const mainhome = document.createElement('h2')
        mainhome.textContent = 'HOME'
        mainhome.classList.add('Home-header')
        const todaybutton = document.createElement('button')
        todaybutton.textContent = 'Add Task'
        todaybutton.classList.add('add-home')
        const holdTask = document.createElement('main')
        holdTask.classList.add('holdtask')
        const taskpop = document.createElement('div')
        taskpop.classList.add('task-popup')
        const todoform = document.createElement('form')
        todoform.classList.add('todo-form')
        const todoinput = document.createElement('input')
        todoinput.setAttribute('type','text')
        const todoadd = document.createElement('button')
        todoadd.classList.add('todoadd')
        todoadd.textContent = 'Add'

        todoform.append(todoinput,todoadd)
        taskpop.appendChild(todoform)

        main.append(mainhome,todaybutton,holdTask,taskpop)

    }
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
    let aside = document.querySelector('aside');
    // let main = document.querySelector('main')
    //add project module
    _module_project__WEBPACK_IMPORTED_MODULE_3__.projects.renderTemp(aside)
    // todolist.renderForm(main)
    
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUI4Qjs7QUFFdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0EscUNBQXFDLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuRDZCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7QUFDQTs7QUFFQSxJQUFJOztBQUVHO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQyxRQUFRLHVEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xJTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULENBQUM7Ozs7OztVQ3BFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtRDtBQUNNO0FBQ047QUFDUDtBQUNDO0FBQ1o7QUFDZTtBQUNoRCxXQUFXLElBQUk7QUFDZixZQUFZLGNBQWM7QUFDRTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGUvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGUvcHJvamVjdGZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGUvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlL3RvZG9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlL3RvZG9saXN0Zm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZS91aS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmFzaWRlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZC1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIC50b2RvLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4taG9tZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWFpbi10b2R5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOzs7Ozs7Ozs7Ozs7O0dBYUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmFzaWRlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZC1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIC50b2RvLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4taG9tZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWFpbi10b2R5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZnVuY3Rpb24gcmVuZGVyVGVtcChjb250YWluZXIpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0VGVtcGxhdGUnKVxuICAgICAgICBsZXQgZGl2ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIGNvbnNvbGUubG9nKCdQUk9KRUNUUzogd2Ugd2FudCB0byBrbm93IGlmIGEgcHJvamVjdCBpcyBhZGRlZCcpXG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIGFkZFByb2plY3QpXG4gICAgfVxuXG4gICAgLy90ZWxsIHB1YnN1YiBjb250cm9sbGVyIHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0IGEgcHJvamVjdCBiZWluZyBhZGRlZFxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICAgICAgICAvL3Byb2plY3QgYWRkZWQgZXZlbnQgcHVibGlzaFxuICAgICAgICBjb25zb2xlLmxvZyhgSSBoZWFyIHRoYXQgJHtuYW1lfSBpcyBiZWluZyBhZGRlZGApXG4gICAgICAgIGxldCBwcm9qZWN0bGlzdCA9IGxpc3RcbiAgICAgICAgcHJvamVjdGxpc3QucHVzaChuYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0bGlzdClcbiAgICAgICAgcHJvamVjdGxpc3QgPSBBcnJheS5mcm9tKGxpc3QpLnNvcnQoKVxuICAgICAgICAvLyBsaXN0ID0gQXJyYXkuZnJvbShsaXN0KS5zb3J0KClcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RVcGRhdGVkJyxuYW1lKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgncHJvamVjdFVwZGF0ZWQnLCBuYW1lKVxuXG4gICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZSB1bCcpXG4gICAgICAgIHVsLmlubmVySFRNTCA9JydcbiAgICAgICAgbGV0IGRmID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgIHByb2plY3RsaXN0LmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBuYW1lO1xuICAgICAgICAgICAgZGYuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIH0pO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChkZik7XG5cbiAgICAgfVxuICAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJUZW1wLFxuICAgICAgICBhZGRQcm9qZWN0XG4gICAgIH1cblxufSkoKSIsImltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWInXG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0Rm9ybSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0cycpXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0lucHV0KVxuICAgIGNvbnN0IGFkZHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wb3B1cCcpXG5cbiAgICBmdW5jdGlvbiBzaG93SW5wdXQoKSB7XG4gICAgICAgIGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vIGxldCBhZGRwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcG9wdXAnKVxuICAgICAgICBhZGRwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAvLyBsZXQgZm9ybWFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRpbmcnKVxuICAgICAgICAvLyBmb3JtYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRQcm9qZWN0Rm9ybSlcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJylcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RGb3JtKVxuXG4gICAgICAgIC8vIGxldCBnb0JhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29iYWNrJylcbiAgICAgICAgLy8gZ29CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKVxuICAgICAgICAvLyBmb3JtLmdldEVsZW1lbnRCeUlkKCdhZGRpbmcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RGb3JtKVxuICAgIH07XG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oZSkge1xuICAgICAgICAvL3N0b3BzIHBhZ2UgZnJvbSByZWxvYWRpbmcgb25jZSBmb3JtIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtIGlucHV0JylcbiAgICAgICAgbGV0IG5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgaW5wdXQudmFsdWUgID0gJyc7XG5cbiAgICAgICAgLy9sZXQgcGVvcGxlIGtub3cgdGhhdCBwcm9qZWN0IGlzIGJlaW5nIGFkZGVkXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBQUk9KRUNUIEZPUk06IGEgcHJvamVjdCAke25hbWV9IGhhcyBiZWVuIGFkZGVkYClcbiAgICAgICAgLy8gcHVic3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsbmFtZSlcbiAgICAgICAgYWRkQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIGFkZHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICBjb25zb2xlLmxvZyhgUFJPSkVDVCBGT1JNOiBhIHByb2plY3QgJHtuYW1lfSBoYXMgYmVlbiBhZGRlZGApXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLG5hbWUpXG5cbiAgICB9XG59KSgpIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmV4cG9ydCBjb25zdCBQcm9qZWN0RmFjdG9yeSA9IChuYW1lLGlkID0gdXVpZHY0KCkpID0+IHtcbiAgICBsZXQgdG9kb3MgPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgIHRvZG9zLFxuICAgICAgICAvLyBpZDp1dWlkdjQoKSxcblxuICAgICAgICBnZXRQcm9qZWN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SUQoKSB7XG4gICAgICAgICAgICByZXR1cm4gaWRcbiAgICAgICAgfSxcbiAgICAgICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9kb3MucHVzaCh0YXNrKVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVUYXNrKHRhcmdldFRhc2spIHtcbiAgICAgICAgICAgIGNvbnN0IGdyYWJUYXNrID0gdG9kb3MuZmluZCgob2xkdGFzaykgPT4gb2xkdGFzay50YXNrID09PSB0YXJnZXRUYXNrKVxuICAgICAgICAgICAgcmV0dXJuIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKGdyYWJUYXNrKSwgMSlcbiAgICAgICAgfSxcbiAgICB9XG59XG4iLCJjb25zdCBwdWJzdWIgPSAoKCkgPT4ge1xuICAgIGxldCBfcHVic3ViID0ge307XG5cbiAgICAvL3N1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoX3B1YnN1YltldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgX3B1YnN1YltldmVudE5hbWVdID0gW107XG4gICAgICAgIH07XG4gICAgICAgIF9wdWJzdWJbZXZlbnROYW1lXS5wdXNoKGZuKVxuICAgIH07XG5cbiAgICAvL3Vuc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudE5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coX3B1YnN1YltldmVudE5hbWVdLmxlbmd0aCAtIDEpO1xuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0uc3BsaWNlKChfcHVic3ViW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSksIDEpO1xuXG4gICAgfVxuXG4gICAgLy9wdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KF9wdWJzdWJbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIF9wdWJzdWJbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICB9XG5cbiAgICAgLy9kZWJ1Z1xuICAgICBmdW5jdGlvbiB2aWV3RXZlbnRzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhfcHVic3ViKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgIHVuc3Vic2NyaWJlLFxuICAgICAgICBwdWJsaXNoLFxuICAgICAgICB2aWV3RXZlbnRzXG4gICAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHB1YnN1YiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCJcbmV4cG9ydCBjb25zdCBUb2RvRmFjdG9yeSA9ICh0YXNrLGR1ZWRhdGUsaWQgPSB1dWlkdjQoKSkgPT4ge1xuICAgIC8vIGxldCBpZCA9IHV1aWR2NCgpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFzazp0YXNrLFxuICAgICAgICBkdWVkYXRlOmR1ZWRhdGUsXG4gICAgICAgIGlkLFxuXG4gICAgICAgIGdldFRhc2soKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFza1xuICAgICAgICB9LFxuICAgICAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIGR1ZWRhdGVcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SUQgKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRhc2sodmFsdWUpIHtcbiAgICAgICAgICAgIHRhc2sgPSB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBzZXREYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICBkdWVkYXRlID0gdmFsdWVcbiAgICAgICAgfSxcblxuICAgIH1cbiAgICBcbn1cblxuIiwiaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IHRvZG9saXN0ID0gKCgpID0+IHtcbiAgICAvLyBjb25zdCB0ZW1wbGF0ZWNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpXG4gICAgLy8gdGVtcGxhdGVjb250YWluLmNsYXNzTGlzdC5hZGQoJ3RvZG9MaXN0VGVtcGxhdGUnKVxuICAgIC8vIGNvbnN0IHRlbXBsYXRlZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyB0ZW1wbGF0ZWRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvdGFzaycpXG4gICAgLy8gY29uc3QgdGVtcGxhdGV1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAvLyB0ZW1wbGF0ZWRpdi5hcHBlbmRDaGlsZCh0ZW1wbGF0ZXVsKVxuICAgIC8vIHRlbXBsYXRlY29udGFpbi5hcHBlbmRDaGlsZCh0ZW1wbGF0ZWRpdilcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbGV0IGxpc3QgPSBbXVxuICAgIGZ1bmN0aW9uIHJlbmRlckZvcm0oY29udGFpbmVyKSB7XG4gICAgICAgIC8vIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdFRlbXBsYXRlJylcbiAgICAgICAgLy8gbGV0IHRlbXBsYXRlZGl2ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBsYXRlZGl2KVxuICAgICAgICBsZXQgdGVtcGxhdGUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0VGVtcGxhdGUnKVxuICAgICAgICBsZXQgZGl2MiA9IHRlbXBsYXRlMi5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2MilcbiAgICAgICAgLy90ZWxsIHB1YnN1YiB0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCBhIHRvZG8gYmVpbmcgYWRkZWRcbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE86IHdhbnQgdG8ga25vdyBpZiBhIHRvZG8gaXMgYmVpbmcgYWRkZWQnKVxuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKCd0b2RvQWRkZWQnLGFkVG9kbylcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRUb2RvKHRhc2spIHtcbiAgICAgICAgY29uc29sZS5sb2coYEkgaGVhciB0aGF0IGEgJHt0YXNrfSBpcyBiZWluZyBhZGRlZGApXG4gICAgICAgIGxldCB0YXNrTGlzdCA9IGxpc3Q7XG4gICAgICAgIHRhc2tMaXN0LnB1c2godGFzaylcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpXG4gICAgICAgIHRhc2tMaXN0ID0gQXJyYXkuZnJvbShsaXN0KS5zb3J0KClcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZG9VcGRhdGVkJywgdGFzaylcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3RvZG9VcGRhdGVkJyx0YXNrKVxuXG4gICAgICAgIGxldCB1bDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1Rhc2sgdWwnKVxuICAgICAgICB1bDIuaW5uZXJUZXh0ID0gJydcbiAgICAgICAgbGV0IGRmMiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgbGV0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGxpMi5pbm5lclRleHQgPSB0YXNrXG4gICAgICAgICAgICBkZjIuYXBwZW5kQ2hpbGQobGkyKVxuICAgICAgICB9KTtcbiAgICAgICAgdWwyLmFwcGVuZENoaWxkKGRmMilcbiAgICAgICAgLy8gbWFpbi5hcHBlbmRDaGlsZCh1bDIpXG4gICAgICAgIC8vIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgLy8gbGkuaW5uZXJUZXh0ID0gdGFza1xuICAgICAgICAvLyBkZi5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgLy8gcmVuZGVyRm9ybShtYWluKVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJGb3JtLFxuICAgICAgICBhZFRvZG9cbiAgICB9XG59KSgpIiwiaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy8gZXhwb3J0IGNvbnN0IHRvZG9Gb3JtID0gKCgpID0+IHtcbi8vICAgICBjb25zdCB0b2RvQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkZXInKVxuLy8gICAgIGNvbnN0IHRvZG9zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcG9wdXAnKVxuXG4vLyAgICAgdG9kb0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2hvd1RvZG9JbnB1dClcbi8vICAgICBmdW5jdGlvbiBzaG93VG9kb0lucHV0KCkge1xuLy8gICAgICAgICB0b2RvQWRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbi8vICAgICAgICAgdG9kb3Nob3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbi8vICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbi8vICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkVG9kb0Zvcm0pXG5cbi8vICAgICB9XG4vLyAgICAgZnVuY3Rpb24gYWRkVG9kb0Zvcm0oZSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbi8vICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybSBpbnB1dCcpO1xuLy8gICAgICAgICBsZXQgdGFzayA9IGlucHV0LnZhbHVlO1xuLy8gICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuLy8gICAgICAgICAvL3RlbGwgcGVvcGxlIHRoYXQgYSB0YXNrIGhhcyBiZWVuIGFkZGVkXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGBUT0RPIEZPUk06IGEgdGFzayAke3Rhc2t9IHdhcyBhZGRlZGApXG4vLyAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b2RvQWRkZWQnLHRhc2spXG4vLyAgICAgfVxuXG4vLyB9KSgpXG5cbmV4cG9ydCBjb25zdCB0b2RvRm9ybSA9ICgoKSA9PiB7XG4gICAgLy8gY29uc3QgZGl2bWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKVxuICAgIC8vIGNvbnN0IHRvZG9zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcG9wdXAnKVxuICAgIC8vIGNvbnN0IG1haW5ob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taG9tZScpXG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICAvLyBjb25zdCB0b2RvYWRkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1hZGRlcicpXG4gICAgLy8gY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbiAgICAvLyBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndG9kby1wb3AnKVxuICAgIC8vIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZSlcblxuICAgIC8vIGZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIC8vICAgICBtYWluaG9tZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICB0b2RvYWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kb0lucHV0KVxuICAgICAgICAvLyB0b2RvYWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAvLyAgICAgdG9kb2FkZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLnRvZG8tZm9ybScpXG4gICAgICAgIC8vIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrRm9ybSlcblxuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dUb2RvSW5wdXQoKSB7XG4gICAgLy8gICAgIHRvZG9hZGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICB0b2RvZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkVGFza0Zvcm0pXG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgLy8gICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgIHRvZG9hZGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgIHRvZG9wb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAvLyB9XG4gICAgLy8gZnVuY3Rpb24gaGVhZExpc3QoKSB7XG5cbiAgICAgICAgLy8gY29uc3QgbWFpbmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAvLyBtYWluaDIudGV4dENvbnRlbnQgPSAnSE9NRSdcbiAgICAgICAgLy8gY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgLy8gY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYWRkZXInKVxuICAgICAgICAvLyBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgICAgIC8vIGNvbnN0IGNyZWF0ZURpdkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyBjcmVhdGVEaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcG9wdXAnKVxuICAgICAgICAvLyBjcmVhdGVEaXZGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICAvLyBjb25zdCBjcmVhdGVtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG5cbiAgICAgICAgLy8gbWFpbmgyLmFwcGVuZENoaWxkKGNyZWF0ZW1haW4pXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICAvLyBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAvLyBmb3JtaW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkVCcpXG5cbiAgICAgICAgLy8gY29uc3QgYnRuYWRkdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIC8vIGJ0bmFkZHRhc2suY2xhc3NMaXN0LmFkZCgnYWRkdG9kbycpXG4gICAgICAgIC8vIGJ0bmFkZHRhc2sudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG5cbiAgICAgICAgLy8gZm9ybS5hcHBlbmQoZm9ybWlucHV0LGJ0bmFkZHRhc2spXG4gICAgICAgIC8vIGNyZWF0ZURpdkZvcm0uYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICBcbiAgICAgICAgLy8gZGl2bWFpbi5hcHBlbmQobWFpbmgyLGNyZWF0ZUJ1dHRvbixjcmVhdGVEaXZGb3JtKVxuXG4gICAgICAgIC8vIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2RvSW5wdXQpXG4gICAgLy8gfSBcbiAgICAvLyBmdW5jdGlvbiBzaG93VG9kb0lucHV0KCkge1xuICAgIC8vICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkZXInKVxuICAgIC8vICAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wb3B1cCcpXG4gICAgLy8gICAgIHRvZG9mb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpXG4gICAgLy8gICAgIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrRm9ybSlcbiAgICAvLyAgICAgY29uc3QgdG9kb3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wb3B1cCcpXG4gICAgLy8gICAgIHRvZG9zaG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFza0Zvcm0oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybSBpbnB1dCcpXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0gaW5wdXQnKVxuICAgICAgICBsZXQgdGFzayA9IGlucHV0LnZhbHVlO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG5cbiAgICAgICAgdG9kb2FkZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vdGVsbCBwZW9wbGUgdGhhdCBhIHRhc2sgaGFzIGJlZW4gYWRkZWRcbiAgICAgICAgY29uc29sZS5sb2coYFRPRE8gRk9STTogYSB0YXNrICR7dGFza30gaGFzIGJlZW4gYWRkZWRgKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgndG9kb0FkZGVkJywgdGFzaylcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBzaG93Q2xpY2soKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUkVHSVNURVIgQ0xJQ0tcIilcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkZXInKVxuICAgIC8vIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDbGljaylcbiAgICAvLyBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaG9tZWNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG4gICAgLy8gICAgIHdoaWxlKGhvbWVjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAvLyAgICAgICAgIGhvbWVjb250ZW50LnJlbW92ZUNoaWxkKGhvbWVjb250ZW50LmZpcnN0Q2hpbGQpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaGVhZExpc3QoKVxuICAgIC8vIH0pXG5cbn0pKCkiLCJcbmV4cG9ydCBjb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvbWVjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgICAgICB3aGlsZShob21lY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBob21lY29udGVudC5yZW1vdmVDaGlsZChob21lY29udGVudC5maXJzdENoaWxkKVxuICAgICAgICB9O1xuICAgICAgICBkaXNwbGF5SG9tZSgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xuICAgICAgICBjb25zdCBtYWluaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgbWFpbmhvbWUudGV4dENvbnRlbnQgPSAnSE9NRSdcbiAgICAgICAgbWFpbmhvbWUuY2xhc3NMaXN0LmFkZCgnSG9tZS1oZWFkZXInKVxuICAgICAgICBjb25zdCB0b2RheWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHRvZGF5YnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJ1xuICAgICAgICB0b2RheWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaG9tZScpXG4gICAgICAgIGNvbnN0IGhvbGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgICAgIGhvbGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2hvbGR0YXNrJylcbiAgICAgICAgY29uc3QgdGFza3BvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2twb3AuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpXG4gICAgICAgIGNvbnN0IHRvZG9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIHRvZG9mb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG4gICAgICAgIGNvbnN0IHRvZG9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdG9kb2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgICAgICBjb25zdCB0b2RvYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgdG9kb2FkZC5jbGFzc0xpc3QuYWRkKCd0b2RvYWRkJylcbiAgICAgICAgdG9kb2FkZC50ZXh0Q29udGVudCA9ICdBZGQnXG5cbiAgICAgICAgdG9kb2Zvcm0uYXBwZW5kKHRvZG9pbnB1dCx0b2RvYWRkKVxuICAgICAgICB0YXNrcG9wLmFwcGVuZENoaWxkKHRvZG9mb3JtKVxuXG4gICAgICAgIG1haW4uYXBwZW5kKG1haW5ob21lLHRvZGF5YnV0dG9uLGhvbGRUYXNrLHRhc2twb3ApXG5cbiAgICB9XG4gICAgLy8gY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKVxuICAgIC8vIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10b2R5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAvLyAgICAgY29uc3QgdG9kYXljb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taG9tZScpXG4gICAgLy8gICAgIHdoaWxlKHRvZGF5Y29udGVudC5maXJzdENoaWxkKSB7XG4gICAgLy8gICAgICAgICB0b2RheWNvbnRlbnQucmVtb3ZlQ2hpbGQodG9kYXljb250ZW50LmZpcnN0Q2hpbGQpXG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ob21lJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGhpZGVIb21lKClcbiAgICAvLyB9KVxuXG4gICAgLy8gZnVuY3Rpb24gaGlkZUhvbWUoKSB7XG4gICAgLy8gfVxuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG4gICAgLy8gY29uc3QgdG9kb3BvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvJylcbiAgICAvLyBmdW5jdGlvbiBoZWFkTGlzdCgpIHtcbiAgICAvLyAgICAgY29uc3QgbWFpbmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIC8vICAgICBtYWluaDIudGV4dENvbnRlbnQgPSAnSE9NRSdcbiAgICAvLyAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyAgICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYWRkZXInKVxuICAgIC8vICAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG4gICAgLy8gICAgIG1haW4uYXBwZW5kKG1haW5oMixjcmVhdGVCdXR0b24pXG4gICAgLy8gfVxuICAgIC8vIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBob21lY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyAgICAgd2hpbGUoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIC8vICAgICAgICAgaG9tZWNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBoZWFkTGlzdCgpXG4gICAgLy8gIH0pXG5cbn0pKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBUb2RvRmFjdG9yeSB9IGZyb20gXCIuL21vZHVsZS90b2RvZmFjdG9yeVwiO1xuaW1wb3J0IHsgUHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9tb2R1bGUvcHJvamVjdGZhY3RvcnlcIjtcbmltcG9ydCB7IHByb2plY3RGb3JtIH0gZnJvbSBcIi4vbW9kdWxlL3Byb2plY3RGb3JtXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL21vZHVsZS9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvbGlzdCB9IGZyb20gXCIuL21vZHVsZS90b2RvbGlzdFwiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9tb2R1bGUvdWlcIjtcbmltcG9ydCB7IHRvZG9Gb3JtfSBmcm9tIFwiLi9tb2R1bGUvdG9kb2xpc3Rmb3JtXCI7XG4vLyBpbXBvcnQge3VpfSBmcm9tICcuL21vZHVsZS91aSdcbi8vIGltcG9ydCB7IHByb2plY3RGb3JtIH0gZnJvbSBcIi4vbW9kdWxlL3JlYWRwcm9qZWN0c1wiO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gICAgLy8gbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICAvL2FkZCBwcm9qZWN0IG1vZHVsZVxuICAgIHByb2plY3RzLnJlbmRlclRlbXAoYXNpZGUpXG4gICAgLy8gdG9kb2xpc3QucmVuZGVyRm9ybShtYWluKVxuICAgIFxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=