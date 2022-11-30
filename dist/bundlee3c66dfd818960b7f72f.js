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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nli {\n    list-style-type: none;\n}\n\naside {\n    flex-direction: column;\n}\n\n.add-popup {\n    display: none;\n}\n\n.todopoup {\n    display: none;\n}\n\n.hometoday {\n    display: none;\n}\n\n.homeupcoming {\n    display: none;\n}\n\n.addtaskproject{\n    display: none;\n}\n\n.projectmain {\n    display: none;\n}\n/* .task-popup {\n    display: none;\n} */\n\n/* .homemain {\n    display: none\n}\n\n.todopoup {\n    display: none;\n}\n\n/* .todo-popup {\n    display: none;\n}\n\n.main-home {\n    display: none;\n}\n\n.todo-form {\n    display: none;\n}\n.main-tody {\n    display: none;\n} */", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;AACA;;GAEG;;AAEH;;;;;;;;;;;;;;;;;;;;;GAqBG","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nli {\n    list-style-type: none;\n}\n\naside {\n    flex-direction: column;\n}\n\n.add-popup {\n    display: none;\n}\n\n.todopoup {\n    display: none;\n}\n\n.hometoday {\n    display: none;\n}\n\n.homeupcoming {\n    display: none;\n}\n\n.addtaskproject{\n    display: none;\n}\n\n.projectmain {\n    display: none;\n}\n/* .task-popup {\n    display: none;\n} */\n\n/* .homemain {\n    display: none\n}\n\n.todopoup {\n    display: none;\n}\n\n/* .todo-popup {\n    display: none;\n}\n\n.main-home {\n    display: none;\n}\n\n.todo-form {\n    display: none;\n}\n.main-tody {\n    display: none;\n} */"],"sourceRoot":""}]);
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
        let ul = document.querySelector('.projectName ul')
        ul.addEventListener('click',showProject)
        console.log('PROJECTS: we want to know if a project is added')
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectAdded', addProject)
    }

    function showProject(ev) {
        document.querySelector('.homemain').style.display = 'none'
        document.querySelector('.hometoday').style.display = 'none'
        document.querySelector('.homeupcoming').style.display = 'none'
        document.querySelector('.projectmain').style.display = 'block'
        let input = document.querySelector('.project-content')
        let taskname = ev.target.closest('li')
        let name = taskname.textContent
        list = list.filter((tn => tn !== name))
        input.textContent = name
        document.querySelector('.addtaskproject').style.display = 'block'
        // if(list === name) {
        //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
        // }
        // list.forEach(task => {
        //     let input = document.querySelector('.project-content')
        //     input.textContent = task
        // })
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

            // if(projectlist === name) {
            //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
            // }
        });
        ul.appendChild(df);

        // if(projectlist.name === name) {
        //     alert('PROJECTS MUST HAVE A DIFFER')
        //  }

     }


    // //  if(list === name) {
    // //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
    // }
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

        let div = document.querySelector('.todoTask')
        div.innerHTML = ''
        let df = document.createDocumentFragment()
        taskList.forEach(task => {
            let button = document.createElement('button')
            button.classList.add('todo-content')
            let div2 = document.createElement('div')
            let ptask = document.createElement('p')
            ptask.innerHTML = task
            div2.appendChild(ptask)
            button.appendChild(div2)
            df.appendChild(button)
        })
        div.appendChild(df)


        // let ul = document.querySelector('.todoTask ul')
        // ul.innerHTML =''
        // let df = document.createDocumentFragment()
        // taskList.forEach(name => {
        //     let button = document.createElement('button')
        //     let divleft = document.createElement('div')
        //     let divleftp = document.createElement('p')
        //     divleftp.innerText = name
        //     divleft.appendChild(divleftp)
        //     let divright = document.createElement('div')
        //     let divrightinput = document.createElement('input')
        //     divrightinput.classList.add('date-picker')
        //     divrightinput.setAttribute('type','date')            
        //     let divrightp = document.createElement('p')
            // divrightp.innerText = divrightinput
            // divright.append(divrightinput,divrightp)
            // button.append(divleft,divright)
            // df.appendChild(button)
            // let li = document.createElement('li')
            // button.innerText = name;
            // li.appendChild(button)
            // df.appendChild(li)
        // });
        // ul.appendChild(df);

        // let ul2 = document.querySelector('.todoTask ul')
        // ul2.innerText = ''
        // const df = createDocumentFragment()

        // taskList.forEach(task => {
        //     let button = document.createElement('button')
        //     button.innerHTML = task
        //     ul2.appendChild(button)
        // })
        // let df2 = document.createDocumentFragment()
        // taskList.forEach(task => {
        //     let li2 = document.createElement('li')
        //     li2.innerText = task
        //     df2.appendChild(li2)
        // });

        // ul2.appendChild(df2)
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
        document.querySelector('.hometoday').style.display = 'none'
        document.querySelector('.homeupcoming').style.display = 'none'
        document.querySelector('.projectmain').style.display = 'none'

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

//    const todayBtn = document.getElementById('today')
//    todayBtn.addEventListener('click', () => {
//         document.querySelector('.homemain').style.display = 'none';
//         document.querySelector('.homeupcoming').style.display = 'none'
//         document.querySelector('.hometoday').style.display = 'block'
//    })

//    const upcomingBtn = document.getElementById('upcoming')
//    upcomingBtn.addEventListener('click', () => {
//     document.querySelector('.homemain').style.display = 'none'
//     document.querySelector('.hometoday').style.display = 'none'
//     document.querySelector('.homeupcoming').style.display = 'block'
//    })

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
    // todayBtn.addEventListener('click',showToday)

    // function showToday() {
    //     document.querySelector('.homemain').style.display = "none";
    //     document.querySelector('.homeupcoming').style.display = 'none';
    //     document.querySelector('.hometoday').style.display = 'block';
    // }

    // function hideOtherForm() {
    //     projectmain.style.display = "none"
        // document.querySelector('.homemain').style.display = 'none'
        // document.querySelector('.hometoday').style.display = 'none'
        // document.querySelector('.projectmain').style.display = 'none';
        // document.querySelector('.homeupcoming').style.display = 'block'
    // }
    todayBtn.addEventListener('click', () => {
         document.querySelector('.homemain').style.display = 'none';
         document.querySelector('.homeupcoming').style.display = 'none'
         document.querySelector('.hometoday').style.display = 'block'
    })
 
    const upcomingBtn = document.getElementById('upcoming')
    upcomingBtn.addEventListener('click', () => {
     document.querySelector('.homemain').style.display = 'none'
     document.querySelector('.hometoday').style.display = 'none'
     document.querySelector('.projectmain').style.display = 'none'
     document.querySelector('.homeupcoming').style.display = 'block'
    })
//    const todayBtn = document.getElementById('today')
//    todayBtn.addEventListener('click', () => {
//         document.querySelector('body').style.display = 'none';
//    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BHNkI7QUFDOUIsWUFBWSxLQUFLOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7QUFDQTs7QUFFQSxJQUFJOztBQUVHO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFROztBQUVSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxNQUFNO0FBQy9DLFFBQVEsdURBQWM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM1RNOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULENBQUM7Ozs7OztVQ3JHRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtRDtBQUNNO0FBQ047QUFDUDtBQUNDO0FBQ1o7QUFDZTtBQUNoRCxXQUFXLElBQUk7QUFDZixZQUFZLGNBQWM7QUFDRTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QixJQUFJLGlFQUFtQjtBQUN2QjtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZS9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlL3Byb2plY3RmYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZS90b2RvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZS90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZS90b2RvbGlzdGZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGUvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYXNpZGUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9wb3VwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvbWV0b2RheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob21ldXBjb21pbmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkdGFza3Byb2plY3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0bWFpbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi8qIC50YXNrLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLyogLmhvbWVtYWluIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4udG9kb3BvdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAudG9kby1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLWhvbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1haW4tdG9keSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7O0dBRUc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmFzaWRlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZC1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvcG91cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob21ldG9kYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG9tZXVwY29taW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZHRhc2twcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdG1haW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiAudGFzay1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi8qIC5ob21lbWFpbiB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuXFxuLnRvZG9wb3VwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogLnRvZG8tcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1ob21lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tYWluLXRvZHkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBmdW5jdGlvbiByZW5kZXJUZW1wKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3RUZW1wbGF0ZScpXG4gICAgICAgIGxldCBkaXYgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lIHVsJylcbiAgICAgICAgdWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dQcm9qZWN0KVxuICAgICAgICBjb25zb2xlLmxvZygnUFJPSkVDVFM6IHdlIHdhbnQgdG8ga25vdyBpZiBhIHByb2plY3QgaXMgYWRkZWQnKVxuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCBhZGRQcm9qZWN0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9qZWN0KGV2KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lbWFpbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWV0b2RheScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWV1cGNvbWluZycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RtYWluJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudCcpXG4gICAgICAgIGxldCB0YXNrbmFtZSA9IGV2LnRhcmdldC5jbG9zZXN0KCdsaScpXG4gICAgICAgIGxldCBuYW1lID0gdGFza25hbWUudGV4dENvbnRlbnRcbiAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKCh0biA9PiB0biAhPT0gbmFtZSkpXG4gICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gbmFtZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkdGFza3Byb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAvLyBpZihsaXN0ID09PSBuYW1lKSB7XG4gICAgICAgIC8vICAgICBhbGVydCgnUFJPSkVDVFMgTVVTVCBIQVZFIEEgRElGRkVSRU5UIE5BTUVTJylcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBsaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50JylcbiAgICAgICAgLy8gICAgIGlucHV0LnRleHRDb250ZW50ID0gdGFza1xuICAgICAgICAvLyB9KVxuICAgIH1cblxuXG4gICAgLy90ZWxsIHB1YnN1YiBjb250cm9sbGVyIHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0IGEgcHJvamVjdCBiZWluZyBhZGRlZFxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICAgICAgICAvL3Byb2plY3QgYWRkZWQgZXZlbnQgcHVibGlzaFxuICAgICAgICBjb25zb2xlLmxvZyhgSSBoZWFyIHRoYXQgJHtuYW1lfSBpcyBiZWluZyBhZGRlZGApXG4gICAgICAgIGxldCBwcm9qZWN0bGlzdCA9IGxpc3RcbiAgICAgICAgcHJvamVjdGxpc3QucHVzaChuYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0bGlzdClcbiAgICAgICAgcHJvamVjdGxpc3QgPSBBcnJheS5mcm9tKGxpc3QpLnNvcnQoKVxuICAgICAgICAvLyBsaXN0ID0gQXJyYXkuZnJvbShsaXN0KS5zb3J0KClcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RVcGRhdGVkJyxuYW1lKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgncHJvamVjdFVwZGF0ZWQnLCBuYW1lKVxuXG4gICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZSB1bCcpXG4gICAgICAgIHVsLmlubmVySFRNTCA9JydcbiAgICAgICAgbGV0IGRmID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgIHByb2plY3RsaXN0LmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBuYW1lO1xuICAgICAgICAgICAgZGYuYXBwZW5kQ2hpbGQobGkpXG5cbiAgICAgICAgICAgIC8vIGlmKHByb2plY3RsaXN0ID09PSBuYW1lKSB7XG4gICAgICAgICAgICAvLyAgICAgYWxlcnQoJ1BST0pFQ1RTIE1VU1QgSEFWRSBBIERJRkZFUkVOVCBOQU1FUycpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChkZik7XG5cbiAgICAgICAgLy8gaWYocHJvamVjdGxpc3QubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAvLyAgICAgYWxlcnQoJ1BST0pFQ1RTIE1VU1QgSEFWRSBBIERJRkZFUicpXG4gICAgICAgIC8vICB9XG5cbiAgICAgfVxuXG5cbiAgICAvLyAvLyAgaWYobGlzdCA9PT0gbmFtZSkge1xuICAgIC8vIC8vICAgICBhbGVydCgnUFJPSkVDVFMgTVVTVCBIQVZFIEEgRElGRkVSRU5UIE5BTUVTJylcbiAgICAvLyB9XG4gICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclRlbXAsXG4gICAgICAgIGFkZFByb2plY3RcbiAgICAgfVxuXG59KSgpIiwiaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1YidcblxuZXhwb3J0IGNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3RzJylcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SW5wdXQpXG4gICAgY29uc3QgYWRkcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXBvcHVwJylcblxuICAgIGZ1bmN0aW9uIHNob3dJbnB1dCgpIHtcbiAgICAgICAgYWRkQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgLy8gbGV0IGFkZHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wb3B1cCcpXG4gICAgICAgIGFkZHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIC8vIGxldCBmb3JtYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGluZycpXG4gICAgICAgIC8vIGZvcm1hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFByb2plY3RGb3JtKVxuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKVxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdEZvcm0pXG5cbiAgICAgICAgLy8gbGV0IGdvQmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb2JhY2snKVxuICAgICAgICAvLyBnb0JhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCApXG4gICAgICAgIC8vIGZvcm0uZ2V0RWxlbWVudEJ5SWQoJ2FkZGluZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdEZvcm0pXG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybShlKSB7XG4gICAgICAgIC8vc3RvcHMgcGFnZSBmcm9tIHJlbG9hZGluZyBvbmNlIGZvcm0gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0gaW5wdXQnKVxuICAgICAgICBsZXQgbmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICBpbnB1dC52YWx1ZSAgPSAnJztcblxuICAgICAgICAvL2xldCBwZW9wbGUga25vdyB0aGF0IHByb2plY3QgaXMgYmVpbmcgYWRkZWRcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFBST0pFQ1QgRk9STTogYSBwcm9qZWN0ICR7bmFtZX0gaGFzIGJlZW4gYWRkZWRgKVxuICAgICAgICAvLyBwdWJzdWIucHVibGlzaCgncHJvamVjdEFkZGVkJyxuYW1lKVxuICAgICAgICBhZGRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgYWRkcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBQUk9KRUNUIEZPUk06IGEgcHJvamVjdCAke25hbWV9IGhhcyBiZWVuIGFkZGVkYClcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsbmFtZSlcblxuICAgIH1cbn0pKCkiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuZXhwb3J0IGNvbnN0IFByb2plY3RGYWN0b3J5ID0gKG5hbWUsaWQgPSB1dWlkdjQoKSkgPT4ge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6bmFtZSxcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIC8vIGlkOnV1aWR2NCgpLFxuXG4gICAgICAgIGdldFByb2plY3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZVxuICAgICAgICB9LFxuICAgICAgICBnZXRJRCgpIHtcbiAgICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICB9LFxuICAgICAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiB0b2Rvcy5wdXNoKHRhc2spXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZVRhc2sodGFyZ2V0VGFzaykge1xuICAgICAgICAgICAgY29uc3QgZ3JhYlRhc2sgPSB0b2Rvcy5maW5kKChvbGR0YXNrKSA9PiBvbGR0YXNrLnRhc2sgPT09IHRhcmdldFRhc2spXG4gICAgICAgICAgICByZXR1cm4gdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YoZ3JhYlRhc2spLCAxKVxuICAgICAgICB9LFxuICAgIH1cbn1cbiIsImNvbnN0IHB1YnN1YiA9ICgoKSA9PiB7XG4gICAgbGV0IF9wdWJzdWIgPSB7fTtcblxuICAgIC8vc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgICAgICBpZighQXJyYXkuaXNBcnJheShfcHVic3ViW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgICAgICAgX3B1YnN1YltldmVudE5hbWVdLnB1c2goZm4pXG4gICAgfTtcblxuICAgIC8vdW5zdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhfcHVic3ViW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIF9wdWJzdWJbZXZlbnROYW1lXS5zcGxpY2UoKF9wdWJzdWJbZXZlbnROYW1lXS5sZW5ndGggLSAxKSwgMSk7XG5cbiAgICB9XG5cbiAgICAvL3B1Ymxpc2ggZXZlbnQgd2l0aCBkYXRhXG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIC4uLmRhdGEpIHtcbiAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoX3B1YnN1YltldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgX3B1YnN1YltldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soLi4uZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgIH1cblxuICAgICAvL2RlYnVnXG4gICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9wdWJzdWIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHNcbiAgICB9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgcHVic3ViIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIlxuZXhwb3J0IGNvbnN0IFRvZG9GYWN0b3J5ID0gKHRhc2ssZHVlZGF0ZSxpZCA9IHV1aWR2NCgpKSA9PiB7XG4gICAgLy8gbGV0IGlkID0gdXVpZHY0KClcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrOnRhc2ssXG4gICAgICAgIGR1ZWRhdGU6ZHVlZGF0ZSxcbiAgICAgICAgaWQsXG5cbiAgICAgICAgZ2V0VGFzaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrXG4gICAgICAgIH0sXG4gICAgICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gZHVlZGF0ZVxuICAgICAgICB9LFxuICAgICAgICBnZXRJRCAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaWRcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VGFzayh2YWx1ZSkge1xuICAgICAgICAgICAgdGFzayA9IHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIHNldERhdGUodmFsdWUpIHtcbiAgICAgICAgICAgIGR1ZWRhdGUgPSB2YWx1ZVxuICAgICAgICB9LFxuXG4gICAgfVxuICAgIFxufVxuXG4iLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgY29uc3QgdG9kb2xpc3QgPSAoKCkgPT4ge1xuICAgIC8vIGNvbnN0IHRlbXBsYXRlY29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJylcbiAgICAvLyB0ZW1wbGF0ZWNvbnRhaW4uY2xhc3NMaXN0LmFkZCgndG9kb0xpc3RUZW1wbGF0ZScpXG4gICAgLy8gY29uc3QgdGVtcGxhdGVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vIHRlbXBsYXRlZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG90YXNrJylcbiAgICAvLyBjb25zdCB0ZW1wbGF0ZXVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIC8vIHRlbXBsYXRlZGl2LmFwcGVuZENoaWxkKHRlbXBsYXRldWwpXG4gICAgLy8gdGVtcGxhdGVjb250YWluLmFwcGVuZENoaWxkKHRlbXBsYXRlZGl2KVxuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBsZXQgbGlzdCA9IFtdXG4gICAgZnVuY3Rpb24gcmVuZGVyRm9ybShjb250YWluZXIpIHtcbiAgICAgICAgLy8gbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9MaXN0VGVtcGxhdGUnKVxuICAgICAgICAvLyBsZXQgdGVtcGxhdGVkaXYgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcGxhdGVkaXYpXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTGlzdFRlbXBsYXRlJylcbiAgICAgICAgbGV0IGRpdiA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIC8vdGVsbCBwdWJzdWIgdGhhdCB3ZSB3YW50IHRvIGtub3cgYWJvdXQgYSB0b2RvIGJlaW5nIGFkZGVkXG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0RPOiB3YW50IHRvIGtub3cgaWYgYSB0b2RvIGlzIGJlaW5nIGFkZGVkJylcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZSgndG9kb0FkZGVkJyxhZFRvZG8pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkVG9kbyh0YXNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBJIGhlYXIgdGhhdCBhICR7dGFza30gaXMgYmVpbmcgYWRkZWRgKVxuICAgICAgICBsZXQgdGFza0xpc3QgPSBsaXN0O1xuICAgICAgICB0YXNrTGlzdC5wdXNoKHRhc2spXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KVxuICAgICAgICB0YXNrTGlzdCA9IEFycmF5LmZyb20obGlzdCkuc29ydCgpXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2RvVXBkYXRlZCcsIHRhc2spXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b2RvVXBkYXRlZCcsdGFzaylcblxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9UYXNrJylcbiAgICAgICAgZGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50JylcbiAgICAgICAgICAgIGxldCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGxldCBwdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgcHRhc2suaW5uZXJIVE1MID0gdGFza1xuICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZChwdGFzaylcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChkaXYyKVxuICAgICAgICAgICAgZGYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICB9KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGYpXG5cblxuICAgICAgICAvLyBsZXQgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1Rhc2sgdWwnKVxuICAgICAgICAvLyB1bC5pbm5lckhUTUwgPScnXG4gICAgICAgIC8vIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICAvLyB0YXNrTGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIC8vICAgICBsZXQgZGl2bGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vICAgICBsZXQgZGl2bGVmdHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgLy8gICAgIGRpdmxlZnRwLmlubmVyVGV4dCA9IG5hbWVcbiAgICAgICAgLy8gICAgIGRpdmxlZnQuYXBwZW5kQ2hpbGQoZGl2bGVmdHApXG4gICAgICAgIC8vICAgICBsZXQgZGl2cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyAgICAgbGV0IGRpdnJpZ2h0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIC8vICAgICBkaXZyaWdodGlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtcGlja2VyJylcbiAgICAgICAgLy8gICAgIGRpdnJpZ2h0aW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBsZXQgZGl2cmlnaHRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAvLyBkaXZyaWdodHAuaW5uZXJUZXh0ID0gZGl2cmlnaHRpbnB1dFxuICAgICAgICAgICAgLy8gZGl2cmlnaHQuYXBwZW5kKGRpdnJpZ2h0aW5wdXQsZGl2cmlnaHRwKVxuICAgICAgICAgICAgLy8gYnV0dG9uLmFwcGVuZChkaXZsZWZ0LGRpdnJpZ2h0KVxuICAgICAgICAgICAgLy8gZGYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICAgICAgLy8gbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgLy8gYnV0dG9uLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgICAgICAvLyBsaS5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgICAgICAvLyBkZi5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIHVsLmFwcGVuZENoaWxkKGRmKTtcblxuICAgICAgICAvLyBsZXQgdWwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9UYXNrIHVsJylcbiAgICAgICAgLy8gdWwyLmlubmVyVGV4dCA9ICcnXG4gICAgICAgIC8vIGNvbnN0IGRmID0gY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cbiAgICAgICAgLy8gdGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAvLyAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRhc2tcbiAgICAgICAgLy8gICAgIHVsMi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIGxldCBkZjIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICAgICAgLy8gdGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIC8vICAgICBsaTIuaW5uZXJUZXh0ID0gdGFza1xuICAgICAgICAvLyAgICAgZGYyLmFwcGVuZENoaWxkKGxpMilcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gdWwyLmFwcGVuZENoaWxkKGRmMilcbiAgICAgICAgICAgIC8vIG1haW4uYXBwZW5kQ2hpbGQodWwyKVxuICAgICAgICAvLyBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIC8vIGxpLmlubmVyVGV4dCA9IHRhc2tcbiAgICAgICAgLy8gZGYuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIC8vIHJlbmRlckZvcm0obWFpbilcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyRm9ybSxcbiAgICAgICAgYWRUb2RvXG4gICAgfVxufSkoKSIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViXCI7XG4vLyBpbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpXCI7XG5cbi8vIGV4cG9ydCBjb25zdCB0b2RvRm9ybSA9ICgoKSA9PiB7XG4vLyAgICAgY29uc3QgdG9kb0FkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWFkZGVyJylcbi8vICAgICBjb25zdCB0b2Rvc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXBvcHVwJylcblxuLy8gICAgIHRvZG9BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dUb2RvSW5wdXQpXG4vLyAgICAgZnVuY3Rpb24gc2hvd1RvZG9JbnB1dCgpIHtcbi8vICAgICAgICAgdG9kb0FkZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4vLyAgICAgICAgIHRvZG9zaG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4vLyAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpXG4vLyAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFRvZG9Gb3JtKVxuXG4vLyAgICAgfVxuLy8gICAgIGZ1bmN0aW9uIGFkZFRvZG9Gb3JtKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4vLyAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0gaW5wdXQnKTtcbi8vICAgICAgICAgbGV0IHRhc2sgPSBpbnB1dC52YWx1ZTtcbi8vICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbi8vICAgICAgICAgLy90ZWxsIHBlb3BsZSB0aGF0IGEgdGFzayBoYXMgYmVlbiBhZGRlZFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhgVE9ETyBGT1JNOiBhIHRhc2sgJHt0YXNrfSB3YXMgYWRkZWRgKVxuLy8gICAgICAgICBwdWJzdWIucHVibGlzaCgndG9kb0FkZGVkJyx0YXNrKVxuLy8gICAgIH1cblxuLy8gfSkoKVxuXG5leHBvcnQgY29uc3QgdG9kb0Zvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXG4gICAgXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dIb21lKVxuXG4gICAgY29uc3QgaG9tZW1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZW1haW4nKVxuICAgIGNvbnN0IGhvbWVhZGR0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9hZGQnKVxuICAgIC8vIGNvbnN0IHRvZG9hZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUJylcbiAgICBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9wb3VwJylcblxuICAgIGhvbWVhZGR0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pXG5cblxuXG4gICAgZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gICAgICAgIGhvbWVtYWluLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21ldG9kYXknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21ldXBjb21pbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bWFpbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICAvLyBob21lYWRkdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb3JtKVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgICAgICBob21lYWRkdGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcG91cCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpXG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrRm9ybSlcblxuXG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gc2hvd0Zvcm1JbnB1dCgpIHtcbiAgICAvLyAgICAgaG9tZWFkZHRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICAvLyBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBob21lY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyAgICAgd2hpbGUoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIC8vICAgICAgICAgaG9tZWNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgICAgICAvLyBjb25zdCBtYWluaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgLy8gbWFpbmhvbWUudGV4dENvbnRlbnQgPSAnSE9NRSdcbiAgICAgICAgLy8gbWFpbmhvbWUuY2xhc3NMaXN0LmFkZCgnSG9tZS1oZWFkZXInKVxuICAgICAgICAvLyBjb25zdCB0b2RheWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIC8vIHRvZGF5YnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJ1xuICAgICAgICAvLyB0b2RheWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaG9tZScpXG4gICAgICAgIC8vIGNvbnN0IGhvbGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgICAgIC8vIGhvbGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2hvbGR0YXNrJylcbiAgICAgICAgLy8gY29uc3QgdGFza3BvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIHRhc2twb3AuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpXG4gICAgICAgIC8vIGNvbnN0IHRvZG9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIC8vIHRvZG9mb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG4gICAgICAgIC8vIGNvbnN0IHRvZG9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgLy8gdG9kb2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgICAgICAvLyBjb25zdCB0b2RvYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgLy8gdG9kb2FkZC5jbGFzc0xpc3QuYWRkKCd0b2RvYWRkJylcbiAgICAgICAgLy8gdG9kb2FkZC50ZXh0Q29udGVudCA9ICdBZGQnXG4gICAgXG4gICAgICAgIC8vIHRvZG9mb3JtLmFwcGVuZCh0b2RvaW5wdXQsdG9kb2FkZClcbiAgICAgICAgLy8gdGFza3BvcC5hcHBlbmRDaGlsZCh0b2RvZm9ybSlcbiAgICBcbiAgICAgICAgLy8gbWFpbi5hcHBlbmQobWFpbmhvbWUsdG9kYXlidXR0b24saG9sZFRhc2ssdGFza3BvcClcbiAgICBcbiAgICAvLyB9KVxuXG4gICAgLy8gY29uc3QgaG9sZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdob2xkdGFzaycpXG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgIC8vIGNvbnN0IG1haW5ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIC8vIG1haW5ob21lLnRleHRDb250ZW50ID0gJ0hPTUUnXG4gICAgLy8gbWFpbmhvbWUuY2xhc3NMaXN0LmFkZCgnSG9tZS1oZWFkZXInKVxuICAgIC8vIGNvbnN0IHRvZGF5YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyB0b2RheWJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICAvLyB0b2RheWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaG9tZScpXG4gICAgLy8gY29uc3QgaG9sZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICAvLyBob2xkVGFzay5jbGFzc0xpc3QuYWRkKCdob2xkdGFzaycpXG4gICAgLy8gY29uc3QgdGFza3BvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gdGFza3BvcC5jbGFzc0xpc3QuYWRkKCd0YXNrLXBvcHVwJylcbiAgICAvLyBjb25zdCB0b2RvZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIC8vIHRvZG9mb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG4gICAgLy8gY29uc3QgdG9kb2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIC8vIHRvZG9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAvLyBjb25zdCB0b2RvYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyB0b2RvYWRkLmNsYXNzTGlzdC5hZGQoJ3RvZG9hZGQnKVxuICAgIC8vIHRvZG9hZGQudGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgLy8gdG9kb2Zvcm0uYXBwZW5kKHRvZG9pbnB1dCx0b2RvYWRkKVxuICAgIC8vIHRhc2twb3AuYXBwZW5kQ2hpbGQodG9kb2Zvcm0pXG5cbiAgICAvLyBtYWluLmFwcGVuZChtYWluaG9tZSx0b2RheWJ1dHRvbixob2xkVGFzayx0YXNrcG9wKVxuXG5cbiAgICAvLyBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxuICAgIC8vIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhvbWVjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIC8vICAgICB3aGlsZShob21lY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgLy8gICAgICAgICBob21lY29udGVudC5yZW1vdmVDaGlsZChob21lY29udGVudC5maXJzdENoaWxkKVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gfSlcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG5cbiAgICAvLyBjb25zdCBtYWluaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAvLyBtYWluaG9tZS50ZXh0Q29udGVudCA9ICdIT01FJ1xuICAgIC8vIG1haW5ob21lLmNsYXNzTGlzdC5hZGQoJ0hvbWUtaGVhZGVyJylcbiAgICAvLyBjb25zdCB0b2RheWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gdG9kYXlidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG4gICAgLy8gdG9kYXlidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWhvbWUnKVxuICAgIC8vIGNvbnN0IGhvbGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgLy8gaG9sZFRhc2suY2xhc3NMaXN0LmFkZCgnaG9sZHRhc2snKVxuICAgIC8vIGNvbnN0IHRhc2twb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vIHRhc2twb3AuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpXG4gICAgLy8gY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAvLyB0b2RvZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKVxuICAgIC8vIGNvbnN0IHRvZG9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAvLyB0b2RvaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgLy8gY29uc3QgdG9kb2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gdG9kb2FkZC5jbGFzc0xpc3QuYWRkKCd0b2RvYWRkJylcbiAgICAvLyB0b2RvYWRkLnRleHRDb250ZW50ID0gJ0FkZCdcblxuICAgIC8vIHRvZG9mb3JtLmFwcGVuZCh0b2RvaW5wdXQsdG9kb2FkZClcbiAgICAvLyB0YXNrcG9wLmFwcGVuZENoaWxkKHRvZG9mb3JtKVxuXG4gICAgLy8gbWFpbi5hcHBlbmQobWFpbmhvbWUsdG9kYXlidXR0b24saG9sZFRhc2ssdGFza3BvcClcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IG1haW5ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAvLyBtYWluaG9tZS50ZXh0Q29udGVudCA9ICdIT01FJ1xuICAgICAgICAvLyBtYWluaG9tZS5jbGFzc0xpc3QuYWRkKCdIb21lLWhlYWRlcicpXG4gICAgICAgIC8vIGNvbnN0IHRvZGF5YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgLy8gdG9kYXlidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG4gICAgICAgIC8vIHRvZGF5YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1ob21lJylcbiAgICAgICAgLy8gY29uc3QgaG9sZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICAgICAgLy8gaG9sZFRhc2suY2xhc3NMaXN0LmFkZCgnaG9sZHRhc2snKVxuICAgICAgICAvLyBjb25zdCB0YXNrcG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gdGFza3BvcC5jbGFzc0xpc3QuYWRkKCd0YXNrLXBvcHVwJylcbiAgICAgICAgLy8gY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgLy8gdG9kb2Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtJylcbiAgICAgICAgLy8gY29uc3QgdG9kb2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAvLyB0b2RvaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgICAgIC8vIGNvbnN0IHRvZG9hZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAvLyB0b2RvYWRkLmNsYXNzTGlzdC5hZGQoJ3RvZG9hZGQnKVxuICAgICAgICAvLyB0b2RvYWRkLnRleHRDb250ZW50ID0gJ0FkZCdcblxuICAgICAgICAvLyB0b2RvZm9ybS5hcHBlbmQodG9kb2lucHV0LHRvZG9hZGQpXG4gICAgICAgIC8vIHRhc2twb3AuYXBwZW5kQ2hpbGQodG9kb2Zvcm0pXG5cbiAgICAgICAgLy8gbWFpbi5hcHBlbmQobWFpbmhvbWUsdG9kYXlidXR0b24saG9sZFRhc2ssdGFza3BvcClcblxuICAgIH1cblxuXG4gICAgLy8gY29uc3QgZGl2bWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKVxuICAgIC8vIGNvbnN0IHRvZG9zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcG9wdXAnKVxuICAgIC8vIGNvbnN0IG1haW5ob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taG9tZScpXG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICAvLyBjb25zdCB0b2RvYWRkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1hZGRlcicpXG4gICAgLy8gY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbiAgICAvLyBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndG9kby1wb3AnKVxuICAgIC8vIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZSlcblxuICAgIC8vIGZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIC8vICAgICBtYWluaG9tZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICB0b2RvYWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kb0lucHV0KVxuICAgICAgICAvLyB0b2RvYWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAvLyAgICAgdG9kb2FkZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLnRvZG8tZm9ybScpXG4gICAgICAgIC8vIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrRm9ybSlcblxuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dUb2RvSW5wdXQoKSB7XG4gICAgLy8gICAgIHRvZG9hZGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICB0b2RvZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkVGFza0Zvcm0pXG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgLy8gICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgIHRvZG9hZGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgIHRvZG9wb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAvLyB9XG4gICAgLy8gZnVuY3Rpb24gaGVhZExpc3QoKSB7XG5cbiAgICAgICAgLy8gY29uc3QgbWFpbmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAvLyBtYWluaDIudGV4dENvbnRlbnQgPSAnSE9NRSdcbiAgICAgICAgLy8gY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgLy8gY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYWRkZXInKVxuICAgICAgICAvLyBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgICAgIC8vIGNvbnN0IGNyZWF0ZURpdkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyBjcmVhdGVEaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcG9wdXAnKVxuICAgICAgICAvLyBjcmVhdGVEaXZGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICAvLyBjb25zdCBjcmVhdGVtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG5cbiAgICAgICAgLy8gbWFpbmgyLmFwcGVuZENoaWxkKGNyZWF0ZW1haW4pXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICAvLyBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAvLyBmb3JtaW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkVCcpXG5cbiAgICAgICAgLy8gY29uc3QgYnRuYWRkdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIC8vIGJ0bmFkZHRhc2suY2xhc3NMaXN0LmFkZCgnYWRkdG9kbycpXG4gICAgICAgIC8vIGJ0bmFkZHRhc2sudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG5cbiAgICAgICAgLy8gZm9ybS5hcHBlbmQoZm9ybWlucHV0LGJ0bmFkZHRhc2spXG4gICAgICAgIC8vIGNyZWF0ZURpdkZvcm0uYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICBcbiAgICAgICAgLy8gZGl2bWFpbi5hcHBlbmQobWFpbmgyLGNyZWF0ZUJ1dHRvbixjcmVhdGVEaXZGb3JtKVxuXG4gICAgICAgIC8vIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2RvSW5wdXQpXG4gICAgLy8gfSBcbiAgICAvLyBmdW5jdGlvbiBzaG93VG9kb0lucHV0KCkge1xuICAgIC8vICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkZXInKVxuICAgIC8vICAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wb3B1cCcpXG4gICAgLy8gICAgIHRvZG9mb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpXG4gICAgLy8gICAgIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrRm9ybSlcbiAgICAvLyAgICAgY29uc3QgdG9kb3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wb3B1cCcpXG4gICAgLy8gICAgIHRvZG9zaG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaG9tZScpXG4gICAgLy8gYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gfSlcbiAgICAvLyBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pXG5cbiAgICAvLyBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICAvLyAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvLyBjb25zdCB0YXNrcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1wb3B1cCcpXG4gICAgICAgIC8vIHRhc2twb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrRm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtIGlucHV0JylcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybSBpbnB1dCcpXG4gICAgICAgIGxldCB0YXNrID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcblxuICAgICAgICAvLyB0b2RvYWRkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgaG9tZWFkZHRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgdG9kb3BvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vdGVsbCBwZW9wbGUgdGhhdCBhIHRhc2sgaGFzIGJlZW4gYWRkZWRcbiAgICAgICAgY29uc29sZS5sb2coYFRPRE8gRk9STTogYSB0YXNrICR7dGFza30gaGFzIGJlZW4gYWRkZWRgKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgndG9kb0FkZGVkJywgdGFzaylcbiAgICB9XG5cbi8vICAgIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Jylcbi8vICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZW1haW4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZXVwY29taW5nJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZXRvZGF5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbi8vICAgIH0pXG5cbi8vICAgIGNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwY29taW5nJylcbi8vICAgIHVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lbWFpbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZXRvZGF5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21ldXBjb21pbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuLy8gICAgfSlcblxuICAgIC8vIGZ1bmN0aW9uIHNob3dDbGljaygpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJSRUdJU1RFUiBDTElDS1wiKVxuICAgIC8vIH1cbiAgICAvLyBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1hZGRlcicpXG4gICAgLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0NsaWNrKVxuICAgIC8vIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBob21lY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyAgICAgd2hpbGUoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIC8vICAgICAgICAgaG9tZWNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBoZWFkTGlzdCgpXG4gICAgLy8gfSlcblxufSkoKSIsIlxuZXhwb3J0IGNvbnN0IFVJID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5JylcbiAgICAvLyB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2hvd1RvZGF5KVxuXG4gICAgLy8gZnVuY3Rpb24gc2hvd1RvZGF5KCkge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZW1haW4nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21ldXBjb21pbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZXRvZGF5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gaGlkZU90aGVyRm9ybSgpIHtcbiAgICAvLyAgICAgcHJvamVjdG1haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lbWFpbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWV0b2RheScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RtYWluJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWV1cGNvbWluZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gfVxuICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVtYWluJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21ldXBjb21pbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZXRvZGF5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9KVxuIFxuICAgIGNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwY29taW5nJylcbiAgICB1cGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVtYWluJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZXRvZGF5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG1haW4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21ldXBjb21pbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH0pXG4vLyAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpXG4vLyAgICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4vLyAgICB9KVxuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICAvLyBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBob21lY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyAgICAgd2hpbGUoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIC8vICAgICAgICAgaG9tZWNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZWNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgZGlzcGxheUhvbWUoKVxuICAgIC8vIH0pXG5cbiAgICAvLyBmdW5jdGlvbiBkaXNwbGF5SG9tZSgpIHtcbiAgICAvLyAgICAgY29uc3QgbWFpbmhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgLy8gICAgIG1haW5ob21lLnRleHRDb250ZW50ID0gJ0hPTUUnXG4gICAgLy8gICAgIG1haW5ob21lLmNsYXNzTGlzdC5hZGQoJ0hvbWUtaGVhZGVyJylcbiAgICAvLyAgICAgY29uc3QgdG9kYXlidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vICAgICB0b2RheWJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICAvLyAgICAgdG9kYXlidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWhvbWUnKVxuICAgIC8vICAgICBjb25zdCBob2xkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIC8vICAgICBob2xkVGFzay5jbGFzc0xpc3QuYWRkKCdob2xkdGFzaycpXG4gICAgLy8gICAgIGNvbnN0IHRhc2twb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICB0YXNrcG9wLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcG9wdXAnKVxuICAgIC8vICAgICBjb25zdCB0b2RvZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIC8vICAgICB0b2RvZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKVxuICAgIC8vICAgICBjb25zdCB0b2RvaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgLy8gICAgIHRvZG9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAvLyAgICAgY29uc3QgdG9kb2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gICAgIHRvZG9hZGQuY2xhc3NMaXN0LmFkZCgndG9kb2FkZCcpXG4gICAgLy8gICAgIHRvZG9hZGQudGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgLy8gICAgIHRvZG9mb3JtLmFwcGVuZCh0b2RvaW5wdXQsdG9kb2FkZClcbiAgICAvLyAgICAgdGFza3BvcC5hcHBlbmRDaGlsZCh0b2RvZm9ybSlcblxuICAgIC8vICAgICBtYWluLmFwcGVuZChtYWluaG9tZSx0b2RheWJ1dHRvbixob2xkVGFzayx0YXNrcG9wKVxuICAgIC8vIH1cbiAgICAvLyBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpXG4gICAgLy8gdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICBjb25zdCB0b2RheWNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ob21lJylcbiAgICAvLyAgICAgd2hpbGUodG9kYXljb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAvLyAgICAgICAgIHRvZGF5Y29udGVudC5yZW1vdmVDaGlsZCh0b2RheWNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhvbWUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaGlkZUhvbWUoKVxuICAgIC8vIH0pXG5cbiAgICAvLyBmdW5jdGlvbiBoaWRlSG9tZSgpIHtcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAvLyBjb25zdCB0b2RvcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKVxuICAgIC8vIGZ1bmN0aW9uIGhlYWRMaXN0KCkge1xuICAgIC8vICAgICBjb25zdCBtYWluaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgLy8gICAgIG1haW5oMi50ZXh0Q29udGVudCA9ICdIT01FJ1xuICAgIC8vICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vICAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1hZGRlcicpXG4gICAgLy8gICAgIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICAvLyAgICAgbWFpbi5hcHBlbmQobWFpbmgyLGNyZWF0ZUJ1dHRvbilcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhvbWVjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIC8vICAgICB3aGlsZShob21lY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgLy8gICAgICAgICBob21lY29udGVudC5yZW1vdmVDaGlsZChob21lY29udGVudC5maXJzdENoaWxkKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGhlYWRMaXN0KClcbiAgICAvLyAgfSlcblxufSkoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRvZG9GYWN0b3J5IH0gZnJvbSBcIi4vbW9kdWxlL3RvZG9mYWN0b3J5XCI7XG5pbXBvcnQgeyBQcm9qZWN0RmFjdG9yeSB9IGZyb20gXCIuL21vZHVsZS9wcm9qZWN0ZmFjdG9yeVwiO1xuaW1wb3J0IHsgcHJvamVjdEZvcm0gfSBmcm9tIFwiLi9tb2R1bGUvcHJvamVjdEZvcm1cIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vbW9kdWxlL3Byb2plY3RcIjtcbmltcG9ydCB7IHRvZG9saXN0IH0gZnJvbSBcIi4vbW9kdWxlL3RvZG9saXN0XCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL21vZHVsZS91aVwiO1xuaW1wb3J0IHsgdG9kb0Zvcm19IGZyb20gXCIuL21vZHVsZS90b2RvbGlzdGZvcm1cIjtcbi8vIGltcG9ydCB7dWl9IGZyb20gJy4vbW9kdWxlL3VpJ1xuLy8gaW1wb3J0IHsgcHJvamVjdEZvcm0gfSBmcm9tIFwiLi9tb2R1bGUvcmVhZHByb2plY3RzXCI7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtcHJvamVjdHMnKTtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIC8vYWRkIHByb2plY3QgbW9kdWxlXG4gICAgcHJvamVjdHMucmVuZGVyVGVtcChhc2lkZSlcbiAgICB0b2RvbGlzdC5yZW5kZXJGb3JtKG1haW4pXG4gICAgXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==