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
    const addTodo = (projectname,task,date) => {
        // const grabProject = getProject(projectname).todos
        return getProject(projectname).addTask((task,date))
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
user1.addTodo('Name','task','11/22/2022')
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
                // const taskbutton  = document.getElementById('taskbtn')
                // taskbutton.addEventListener('click', (e) => {
                //     e.preventDefault()
                //     let inputtext = document.getElementById('inputTask')
                //     let task = inputtext.value;
                //     inputtext.value = '';
            
                //     let inputdate = document.getElementById('inputDate')
                //     let date = inputdate.value;
                //     inputdate.value =  ''

                //     console.log(userone.addTodo(`${name.name}`,task))
                // })
            })
            let pbutton = document.createElement('p')
            pbutton.textContent = `${name.name}`
            button.appendChild(pbutton)
            div.appendChild(button)
            df.appendChild(div)

            // const taskbutton  = document.getElementById('taskbtn')
            //     taskbutton.addEventListener('click', (e) => {
            //         e.preventDefault()
            //         let inputtext = document.getElementById('inputTask')
            //         let task = inputtext.value;
            //         inputtext.value = '';
            
            //         let inputdate = document.getElementById('inputDate')
            //         let date = inputdate.value;
            //         inputdate.value =  ''

            //         console.log(userone.addTodo(`${name.name}`,task))
            //     })
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

    const todosubmit = document.getElementById('taskbtn')
    todosubmit.addEventListener('click', (e) => {
        let userone = _TodoController__WEBPACK_IMPORTED_MODULE_3__["default"]
        // let projects = userone.projects
        const currentproject = document.querySelector('.currentproject').textContent
         e.preventDefault()
        let inputtext = document.getElementById('inputTask')
        let task = inputtext.value;
        inputtext.value = '';
            
        let inputdate = document.getElementById('inputDate')
        let date = inputdate.value;
        inputdate.value =  ''
        // console.log(date)
        console.log(userone.addTodo(currentproject,date,task))
            

                    // projects.forEach(project => {
                    //     console.log(userone.addTodo(`${project.name}`,task))
                    // })

                })
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
        addTask(task,date) {
            // if(todos.find((todo) => todo.getProjectName() === task)) return
             return todos.push((0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)(task,date))
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

const Task = (task,duedate,id) => {
    return {
        task,
        duedate,
        id:(0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),

        getTask() {
            return task;
        },
        getDate() {
            return duedate;
        },

    }
}


let user1 = Task('task','date')
console.log(user1)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlZWQyNDA0Mzk0OWI3NGY3NzRkYzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2Qyw2QkFBNkIsR0FBRyxZQUFZLHNCQUFzQixlQUFlLGdCQUFnQiwrQ0FBK0Msb0NBQW9DLGtCQUFrQiw4QkFBOEIsbUJBQW1CLG9CQUFvQixxQkFBcUIsR0FBRyxtQkFBbUIsK0NBQStDLEdBQUcsZ0JBQWdCLHNCQUFzQixlQUFlLGdCQUFnQiwrQ0FBK0Msb0NBQW9DLGtCQUFrQiw4QkFBOEIsbUJBQW1CLG9CQUFvQixxQkFBcUIsR0FBRyx1QkFBdUIsK0NBQStDLEdBQUcsY0FBYyxzQkFBc0IsaUJBQWlCLG9DQUFvQyxhQUFhLGNBQWMsZUFBZSxnQkFBZ0IseUNBQXlDLDJCQUEyQixHQUFHLHFCQUFxQiwwQkFBMEIsaUJBQWlCLEdBQUcsc0JBQXNCLG9CQUFvQixJQUFJLHFCQUFxQixvQkFBb0IsSUFBSSxTQUFTLHVGQUF1RixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sNEJBQTRCLDZCQUE2QixHQUFHLFlBQVksc0JBQXNCLGVBQWUsZ0JBQWdCLCtDQUErQyxvQ0FBb0Msa0JBQWtCLDhCQUE4QixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLG1CQUFtQiwrQ0FBK0MsR0FBRyxnQkFBZ0Isc0JBQXNCLGVBQWUsZ0JBQWdCLCtDQUErQyxvQ0FBb0Msa0JBQWtCLDhCQUE4QixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLHVCQUF1QiwrQ0FBK0MsR0FBRyxjQUFjLHNCQUFzQixpQkFBaUIsb0NBQW9DLGFBQWEsY0FBYyxlQUFlLGdCQUFnQix5Q0FBeUMsMkJBQTJCLEdBQUcscUJBQXFCLDBCQUEwQixpQkFBaUIsR0FBRyxzQkFBc0Isb0JBQW9CLElBQUkscUJBQXFCLG9CQUFvQixJQUFJLHFCQUFxQjtBQUNydkY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0hELGlFQUFlLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRyx5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQXBJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHdEQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENTO0FBQ047QUFDc0I7O0FBRWpEO0FBQ0EsTUFBTSw2REFBaUI7QUFDdkIsV0FBVyw2REFBaUI7QUFDNUI7O0FBRUE7QUFDQSxpREFBaUQsK0NBQUcsS0FBSzs7QUFFekQ7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsOERBQWU7QUFDeEI7O0FBRUEsaUVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJjOztBQUUvQjtBQUNBLHFDQUFxQyxzREFBVTtBQUMvQzs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDTmM7QUFDUDs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGNBQWM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGcUM7QUFDUDtBQUNBO0FBQ2dCO0FBQ1o7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBLHNCQUFzQix1REFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCxVQUFVO0FBQ2hFLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2I7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNELFVBQVU7QUFDaEUsb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0Esc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEMsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsYUFBYTtBQUN2RSx3QkFBd0I7O0FBRXhCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsTUFBTTtBQUNyRCxRQUFRLHVEQUFjOztBQUV0Qjs7QUFFQSxDQUFDOzs7OztBQUs2QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDanBCNkI7QUFDSjs7QUFFN0IsQ0FBUSw2QkFBNkIsZ0RBQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQiwyQ0FBSTtBQUNuQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ29CO0FBQzVCO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBTTs7QUFFakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ0E7QUFDTztBQUNTO0FBQ0Y7QUFDYjs7QUFFdkM7QUFDQTs7QUFFQSxJQUFJLDREQUFtQjtBQUN2QixDQUFDOztBQUVELFlBQVksNkNBQTZDO0FBQ3pELFdBQVcsTUFBTTtBQUNqQixZQUFZLE1BQU07QUFDbEIsZUFBZSxjQUFjO0FBQzdCLFlBQVksV0FBVztBQUN2QixZQUFZLFdBQVc7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzP2FmN2MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvVG9kb0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9kb21vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4udG9kb21vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjYpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi8qIC50YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBOztHQUVHOztBQUVIOztHQUVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9kb21vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4udG9kb21vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjYpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi8qIC50YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG4vLyBleHBvcnQgY29uc3QgVG9kb0NvbnRyb2xsZXIgPSAoKSA9PiB7XG4vLyAgICAgbGV0IHByb2plY3RzID0gW107XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvamVjdHMsXG4vLyAgICAgICAgIHNldFByb2plY3RzKHByb2plY3QpIHtcbi8vICAgICAgICAgICAgIHByb2plY3RzID0gcHJvamVjdFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RuYW1lKSB7XG4vLyAgICAgICAgICAgICBpZihwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3RuYW1lLm5hbWUpKVxuLy8gICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RuYW1lKVxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RuYW1lKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBncmFiUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKSA9PT0gcHJvamVjdG5hbWUubmFtZSlcbi8vICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihncmFiUHJvamVjdCksMSlcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgZ2V0UHJvamVjdChwcm9qZWN0bmFtZSkge1xuLy8gICAgICAgICAgICAgaWYocHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpID09PSBwcm9qZWN0bmFtZS5uYW1lKSkgXG4vLyAgICAgICAgICAgICByZXR1cm4gcHJvamVjdG5hbWVcblxuLy8gICAgICAgICB9LFxuXG4vLyAgICAgfVxuLy8gfVxuXG4gY29uc3QgVG9kb0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0bmFtZSkgPT4ge1xuICAgICAgICBpZihwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3RuYW1lLm5hbWUpKVxuICAgICAgICByZXR1cm5cbiAgICAgICAgcHJvamVjdHMucHVzaChQcm9qZWN0cyhwcm9qZWN0bmFtZSkpXG5cbiAgICB9XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0bmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBncmFiUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdG5hbWUubmFtZSlcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKGdyYWJQcm9qZWN0KSwxKVxuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RuYW1lKSA9PiB7XG4gICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKSA9PT0gcHJvamVjdG5hbWUpXG4gICAgfVxuICAgIGNvbnN0IGFkZFRvZG8gPSAocHJvamVjdG5hbWUsdGFzayxkYXRlKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGdyYWJQcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0bmFtZSkudG9kb3NcbiAgICAgICAgcmV0dXJuIGdldFByb2plY3QocHJvamVjdG5hbWUpLmFkZFRhc2soKHRhc2ssZGF0ZSkpXG4gICAgLy8gIGNvbnN0IGdyYWJQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpID09PSBwcm9qZWN0bmFtZSlcbiAgICAvLyAgcmV0dXJuIGdyYWJQcm9qZWN0LmFkZFRhc2soVGFzayh0YXNrLGRhdGUpKVxuICAgIH1cbiAgICBjb25zdCBkZWxldGVUb2RvID0gKHByb2plY3RuYW1lLCB0YXNrKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRQcm9qZWN0KHByb2plY3RuYW1lKS5kZWxldGVUYXNrKHRhc2spXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFByb2plY3RUb2RvID0gKHByb2plY3RuYW1lLHRhc2ssZGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0UHJvamVjdChwcm9qZWN0bmFtZSkuZWRpdFRvZG8odGFzayxkYXRlKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGVkaXRUb2RvID0gKHByb2plY3RuYW1lKVxuICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdHMsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVRvZG8sXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIGVkaXRQcm9qZWN0VG9kb1xuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0NvbnRyb2xsZXJcblxubGV0IHVzZXIxID0gVG9kb0NvbnRyb2xsZXJcbi8vIGxldCB1c2VyMSA9IFRvZG9Db250cm9sbGVyKCkuYWRkUHJvamVjdCgnTmFtZScpXG51c2VyMS5hZGRQcm9qZWN0KCdOYW1lJylcbnVzZXIxLmFkZFRvZG8oJ05hbWUnLCd0YXNrJywnMTEvMjIvMjAyMicpXG4vLyB1c2VyMS5lZGl0UHJvamVjdFRvZG8oJ05hbWUnLCduZXRhc2snLCcxLzIvMjAyMicpXG5cblxuXG5jb25zb2xlLmxvZyh1c2VyMSkiLCJpbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFRvZG9Db250cm9sbGVyIGZyb20gXCIuL1RvZG9Db250cm9sbGVyXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuLy8gIGNvbnN0IHByb2plY3Rtb2RhbCA9ICgoKSA9PiB7XG4vLyAgICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKVxuLy8gICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uXScpXG4vLyAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcblxuLy8gICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuLy8gICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXQpXG4vLyAgICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcblxuLy8gICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC5hY3RpdmUnKVxuLy8gICAgICAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4vLyAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG5cbi8vICAgICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpXG4vLyAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG5cbi8vICAgICBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbi8vICAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4vLyAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4vLyAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbi8vICAgICB9XG4vLyAgICAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuLy8gICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm4gXG4vLyAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4vLyAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgICB9XG4vLyB9KSgpXG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZ1bmN0aW9uIHJlbmRlclRlbXAoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdFRlbXBsYXRlJylcbiAgICAgICAgbGV0IGRpdiA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdQUk9KRUNUUzogd2Ugd2FudCB0byBrbm93IGlmIGEgcHJvamVjdCBpcyBhZGRlZCcpXG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsYWRkUHJvamVjdClcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XG4gICAgICAgIC8vcHJvamVjdCBhZGRlZCBldmVudCBwdWJsaXNoXG4gICAgICAgIGNvbnNvbGUubG9nKGBJIGhlYXIgdGhhdCAke25hbWV9IGlzIGJlaW5nIGFkZGVkYClcbiAgICAgICAgbGV0IHByb2plY3RsaXN0ID0gbGlzdFxuICAgICAgICBsZXQgdXNlcm9uZSA9IFRvZG9Db250cm9sbGVyXG4gICAgICAgIGxldCBwcm9qZWN0cyA9IHVzZXJvbmUucHJvamVjdHNcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICAgIHVzZXJvbmUuYWRkUHJvamVjdChuYW1lKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2Vyb25lLmdldFByb2plY3QobmFtZSkpXG4gICAgICAgIHByb2plY3RsaXN0LnB1c2godXNlcm9uZSlcbiAgICAgICAgY29uc29sZS5sb2codXNlcm9uZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1RoaXMgaXMnLHVzZXJvbmUpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RsaXN0KVxuICAgICAgICBwcm9qZWN0bGlzdCA9IEFycmF5LmZyb20obGlzdCkuc29ydCgpXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0VXBkYXRlZCcpXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0VXBkYXRlZCcsIG5hbWUpXG5cbiAgICAgICAgbGV0IHByb2plY3RuYW1lZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RuYW1lJylcbiAgICAgICAgcHJvamVjdG5hbWVkaXYudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBsZXQgZGYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGVudCcpXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudHByb2plY3QnKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7bmFtZS5uYW1lfWBcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB0YXNrYnV0dG9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrYnRuJylcbiAgICAgICAgICAgICAgICAvLyB0YXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBpbnB1dHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrJylcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHRhc2sgPSBpbnB1dHRleHQudmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlucHV0dGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBpbnB1dGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJylcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRhdGUgPSBpbnB1dGRhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlucHV0ZGF0ZS52YWx1ZSA9ICAnJ1xuXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXJvbmUuYWRkVG9kbyhgJHtuYW1lLm5hbWV9YCx0YXNrKSlcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBwYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBwYnV0dG9uLnRleHRDb250ZW50ID0gYCR7bmFtZS5uYW1lfWBcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChwYnV0dG9uKVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgICAgICAgIGRmLmFwcGVuZENoaWxkKGRpdilcblxuICAgICAgICAgICAgLy8gY29uc3QgdGFza2J1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza2J0bicpXG4gICAgICAgICAgICAvLyAgICAgdGFza2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgaW5wdXR0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFzaycpXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCB0YXNrID0gaW5wdXR0ZXh0LnZhbHVlO1xuICAgICAgICAgICAgLy8gICAgICAgICBpbnB1dHRleHQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgaW5wdXRkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RGF0ZScpXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBkYXRlID0gaW5wdXRkYXRlLnZhbHVlO1xuICAgICAgICAgICAgLy8gICAgICAgICBpbnB1dGRhdGUudmFsdWUgPSAgJydcblxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh1c2Vyb25lLmFkZFRvZG8oYCR7bmFtZS5uYW1lfWAsdGFzaykpXG4gICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdG5hbWVkaXYuYXBwZW5kQ2hpbGQoZGYpXG5cblxuICAgICAgICAvLyBjb25zdCBkaXNwbGF5cHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd3Byb2plY3RzJylcblxuICAgICAgICAvLyBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RuYW1lIGJ1dHRvbicpXG4gICAgICAgIC8vIGJ1dHRvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gbGV0IHByb2plY3RuYW1lZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RuYW1lJylcbiAgICAgICAgLy8gcHJvamVjdG5hbWVkaXYuaW5uZXJUZXh0ID0gJydcbiAgICAgICAgLy8gbGV0IGRmID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgIC8vIHByb2plY3RzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnQnKVxuICAgICAgICAvLyAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIC8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd3Byb2plY3RzJylcbiAgICAgICAgLy8gICAgICAgICB3aGlsZShwcm9qZWN0cGFnZS5maXJzdENoaWxkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RwYWdlLnJlbW92ZUNoaWxkKHByb2plY3RwYWdlLmZpcnN0Q2hpbGQpXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIC8vICAgICAgICAgaDIuaW5uZXJUZXh0ID0gYCR7bmFtZS5uYW1lfWBcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBob2xkdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vICAgICAgICAgaG9sZHRvZG8uY2xhc3NMaXN0LmFkZCgnaG9sZC10YXNrcycpXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIC8vICAgICAgICAgYWRkVG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG9tb2RhbC10YXJnZXRcIiwnI3RvZG9tb2RhbCcpXG4gICAgICAgIC8vICAgICAgICAgYWRkVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpXG4gICAgICAgICAgICAgICAgLy8gYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZG9Nb2RhbClcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb21vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb21vZGFsLmNsYXNzTGlzdC5hZGQoJ3RvZG9tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9kb21vZGFsXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb21vZGFsaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb21vZGFsaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZGFsbW9kYWwtaGVhZGVyJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvbW9kYWx0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb21vZGFsdGl0bGUuaW5uZXJUZXh0ID0gJ05ldyBUYXNrJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9jbG9zZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9jbG9zZWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvY2xvc2VidXR0b24uaW5uZXJUZXh0ID0gYCZ0aW1lcztgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb21vZGFsaGVhZGVyLmFwcGVuZCh0b2RvbW9kYWx0aXRsZSx0b2RvY2xvc2VidXR0b24pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb21vZGFsYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGJvZHkuY2xhc3NMaXN0LmFkZCgndG9kb21vZGFsLWJvZHknKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9tb2RhbGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb21vZGFsZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvdGFza2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvdGFza2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvdGFza2lucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0VGFzaycpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9kYXRlaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9kYXRlaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9kYXRlaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXREYXRlJylcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb3N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9zdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb3N1Ym1pdC5jbGFzc0xpc3QuYWRkKCd0b2RvYnRuJylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb3N1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0J1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGZvcm0uYXBwZW5kKHRvZG90YXNraW5wdXQsdG9kb2RhdGVpbnB1dCx0b2Rvc3VibWl0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGJvZHkuYXBwZW5kQ2hpbGQodG9kb21vZGFsZm9ybSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWwuYXBwZW5kKHRvZG9tb2RhbGhlYWRlcix0b2RvbW9kYWxib2R5KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb21vZGFsKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG9wZW5Ub2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9kb21vZGFsLXRhcmdldF0nKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBvcGVuVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRvZG9tb2RhbFRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvcGVuTW9kYWwobW9kYWwpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb21vZGFsLmFjdGl2ZScpIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3NlVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLnRvZG9tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIC8vICAgICAgICAgYWRkVG9kb0J1dHRvbi5pbm5lclRleHQgPSAnQWRkIFRvZG8nXG5cbiAgICAgICAgLy8gICAgICAgICBkaXYuYXBwZW5kKGgyLGhvbGR0b2RvLGFkZFRvZG9CdXR0b24pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgZGlzcGxheXByb2plY3RzLmFwcGVuZENoaWxkKGRpdilcblxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gICAgIGxldCBwYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIC8vICAgICBwYnV0dG9uLmlubmVyVGV4dCA9IGAke25hbWUubmFtZX1gXG4gICAgICAgIC8vICAgICBidXR0b24uYXBwZW5kQ2hpbGQocGJ1dHRvbilcbiAgICAgICAgLy8gICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIC8vICAgICBkZi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIHByb2plY3RuYW1lZGl2LmFwcGVuZENoaWxkKGRmKVxuICAgICAgICAgICAgLy8gY29uc3Qgb3BlblRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2RvbW9kYWwtdGFyZ2V0XScpXG4gICAgICAgICAgICAvLyBjb25zdCBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJylcbiAgICAgICAgICAgIC8vIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG4gICAgXG4gICAgICAgICAgICAvLyBvcGVuVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQudG9kb21vZGFsVGFyZ2V0KVxuICAgICAgICAgICAgLy8gICAgICAgICBvcGVuTW9kYWwobW9kYWwpXG4gICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgIC8vIH0pXG4gICAgXG4gICAgICAgICAgICAvLyBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvbW9kYWwuYWN0aXZlJykgXG4gICAgICAgICAgICAvLyAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyB9KVxuICAgIFxuICAgICAgICAgICAgLy8gY2xvc2VUb2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIC8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy50b2RvbW9kYWwnKVxuICAgICAgICAgICAgLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIC8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIC8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gbGV0IGRmID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgIC8vIHByb2plY3RzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAvLyAgICAgcC5pbm5lclRleHQgPSBgJHtuYW1lLm5hbWV9YDtcbiAgICAgICAgLy8gICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyAgICAgZGl2LmFwcGVuZENoaWxkKHApXG4gICAgICAgIC8vICAgICBkZi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBidXR0b24uYXBwZW5kQ2hpbGQoZGYpXG4gICAgICAgIC8vIHByb2plY3RzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZSBwJylcbiAgICAgICAgLy8gICAgIHAuaW5uZXJUZXh0ICA9IGAke25hbWUubmFtZX1gXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIHByb2plY3RsaXN0LmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIC8vICAgICBpZihwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyBsZXQgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZSBwJylcbiAgICAvLyAgICAgICAgIC8vIHAuaW5uZXJUZXh0ID0gYCR7bmFtZX1gXG4gICAgLy8gICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2RvbW9kYWwtdGFyZ2V0XScpXG4gICAgY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uXScpXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcblxuICAgIG9wZW5Ub2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRvZG9tb2RhbFRhcmdldClcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9tb2RhbC5hY3RpdmUnKSBcbiAgICAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xvc2VUb2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLnRvZG9tb2RhbCcpXG4gICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG5cbiAgICBjb25zdCB0b2Rvc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tidG4nKVxuICAgIHRvZG9zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgdXNlcm9uZSA9IFRvZG9Db250cm9sbGVyXG4gICAgICAgIC8vIGxldCBwcm9qZWN0cyA9IHVzZXJvbmUucHJvamVjdHNcbiAgICAgICAgY29uc3QgY3VycmVudHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudHByb2plY3QnKS50ZXh0Q29udGVudFxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBpbnB1dHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrJylcbiAgICAgICAgbGV0IHRhc2sgPSBpbnB1dHRleHQudmFsdWU7XG4gICAgICAgIGlucHV0dGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgIGxldCBpbnB1dGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJylcbiAgICAgICAgbGV0IGRhdGUgPSBpbnB1dGRhdGUudmFsdWU7XG4gICAgICAgIGlucHV0ZGF0ZS52YWx1ZSA9ICAnJ1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlKVxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vyb25lLmFkZFRvZG8oY3VycmVudHByb2plY3QsZGF0ZSx0YXNrKSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh1c2Vyb25lLmFkZFRvZG8oYCR7cHJvamVjdC5uYW1lfWAsdGFzaykpXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgIC8vIGNvbnN0IHRvZG9zdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza2J0bicpXG4gICAgLy8gdG9kb3N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkVG9kb1RvUHJvamVjdClcblxuICAgIC8vIGZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QoZSkge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8gbGV0IGlucHV0dGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKVxuICAgICAgICAvLyBsZXQgdGFzayA9IGlucHV0dGV4dC52YWx1ZTtcbiAgICAgICAgLy8gaW5wdXR0ZXh0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgLy8gbGV0IGlucHV0ZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKVxuICAgICAgICAvLyBsZXQgZGF0ZSA9IGlucHV0ZGF0ZS52YWx1ZTtcbiAgICAgICAgLy8gaW5wdXRkYXRlLnZhbHVlID0gICcnXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHRvZG9tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbC5jbGFzc0xpc3QuYWRkKCd0b2RvbW9kYWwnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZG9tb2RhbFwiKVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9tb2RhbGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RhbG1vZGFsLWhlYWRlcicpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb21vZGFsdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWx0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbHRpdGxlLmlubmVyVGV4dCA9ICdOZXcgVGFzaydcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvY2xvc2VidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvY2xvc2VidXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb2Nsb3NlYnV0dG9uLmlubmVyVGV4dCA9IGAmdGltZXM7YFxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbGhlYWRlci5hcHBlbmQodG9kb21vZGFsdGl0bGUsdG9kb2Nsb3NlYnV0dG9uKVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9tb2RhbGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWxib2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG9tb2RhbC1ib2R5JylcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvbW9kYWxmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9mb3JtJylcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb3Rhc2tpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb3Rhc2tpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb3Rhc2tpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dFRhc2snKVxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvZGF0ZWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvZGF0ZWlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvZGF0ZWlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0RGF0ZScpXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9zdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2Rvc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9zdWJtaXQuY2xhc3NMaXN0LmFkZCgndG9kb2J0bicpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9zdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCdcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWxmb3JtLmFwcGVuZCh0b2RvdGFza2lucHV0LHRvZG9kYXRlaW5wdXQsdG9kb3N1Ym1pdClcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWxib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbGZvcm0pXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsLmFwcGVuZCh0b2RvbW9kYWxoZWFkZXIsdG9kb21vZGFsYm9keSlcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbClcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBvcGVuVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZG9tb2RhbC10YXJnZXRdJylcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgb3BlblRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC50b2RvbW9kYWxUYXJnZXQpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9tb2RhbC5hY3RpdmUnKSBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy50b2RvbW9kYWwnKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRvZG9Nb2RhbCgpIHtcbiAgICAvLyAgICAgY29uc3QgdG9kb21vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgdG9kb21vZGFsLmNsYXNzTGlzdC5hZGQoJ3RvZG9tb2RhbCcpXG4gICAgLy8gICAgIHRvZG9tb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9kb21vZGFsXCIpXG5cbiAgICAvLyAgICAgY29uc3QgdG9kb21vZGFsaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgdG9kb21vZGFsaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZGFsbW9kYWwtaGVhZGVyJylcblxuICAgIC8vICAgICBjb25zdCB0b2RvbW9kYWx0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gICAgIHRvZG9tb2RhbHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICAvLyAgICAgdG9kb21vZGFsdGl0bGUuaW5uZXJUZXh0ID0gJ05ldyBUYXNrJ1xuXG4gICAgLy8gICAgIGNvbnN0IHRvZG9jbG9zZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gICAgIHRvZG9jbG9zZWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKVxuICAgIC8vICAgICB0b2RvY2xvc2VidXR0b24uaW5uZXJUZXh0ID0gYCZ0aW1lcztgXG5cbiAgICAvLyAgICAgdG9kb21vZGFsaGVhZGVyLmFwcGVuZCh0b2RvbW9kYWx0aXRsZSx0b2RvY2xvc2VidXR0b24pXG5cbiAgICAvLyAgICAgY29uc3QgdG9kb21vZGFsYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gICAgIHRvZG9tb2RhbGJvZHkuY2xhc3NMaXN0LmFkZCgndG9kb21vZGFsLWJvZHknKVxuXG4gICAgLy8gICAgIGNvbnN0IHRvZG9tb2RhbGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAvLyAgICAgdG9kb21vZGFsZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb2Zvcm0nKVxuICAgIC8vICAgICBjb25zdCB0b2RvdGFza2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIC8vICAgICB0b2RvdGFza2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgIC8vICAgICB0b2RvdGFza2lucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0VGFzaycpXG4gICAgLy8gICAgIGNvbnN0IHRvZG9kYXRlaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgLy8gICAgIHRvZG9kYXRlaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG4gICAgLy8gICAgIHRvZG9kYXRlaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXREYXRlJylcbiAgICAvLyAgICAgY29uc3QgdG9kb3N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgLy8gICAgIHRvZG9zdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcbiAgICAvLyAgICAgdG9kb3N1Ym1pdC5jbGFzc0xpc3QuYWRkKCd0b2RvYnRuJylcbiAgICAvLyAgICAgdG9kb3N1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0J1xuXG4gICAgLy8gICAgIHRvZG9tb2RhbGZvcm0uYXBwZW5kKHRvZG90YXNraW5wdXQsdG9kb2RhdGVpbnB1dCx0b2Rvc3VibWl0KVxuXG4gICAgLy8gICAgIHRvZG9tb2RhbGJvZHkuYXBwZW5kQ2hpbGQodG9kb21vZGFsZm9ybSlcblxuICAgIC8vICAgICB0b2RvbW9kYWwuYXBwZW5kKHRvZG9tb2RhbGhlYWRlcix0b2RvbW9kYWxib2R5KVxuXG4gICAgLy8gICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb21vZGFsKVxuXG4gICAgICAgIC8vIGNvbnN0IG9wZW5Ub2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9kb21vZGFsLXRhcmdldF0nKVxuICAgICAgICAvLyBjb25zdCBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJylcbiAgICAgICAgLy8gY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcblxuICAgICAgICAvLyBvcGVuVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIC8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRvZG9tb2RhbFRhcmdldClcbiAgICAgICAgLy8gICAgICAgICBvcGVuTW9kYWwobW9kYWwpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb21vZGFsLmFjdGl2ZScpIFxuICAgICAgICAvLyAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIGNsb3NlVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIC8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLnRvZG9tb2RhbCcpXG4gICAgICAgIC8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgICAgICAvLyAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgIC8vICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAvLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgLy8gICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb21vZGFsKVxuICAgIC8vIH1cblxuLy8gICAgIGNvbnN0IG9wZW5Ub2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9kb21vZGFsLXRhcmdldF0nKVxuLy8gICAgIGNvbnN0IGNsb3NlVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuLy8gICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG5cbi8vICAgICBvcGVuVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC50b2RvbW9kYWxUYXJnZXQpXG4vLyAgICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcblxuLy8gICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvbW9kYWwuYWN0aXZlJykgXG4vLyAgICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbi8vICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcblxuLy8gICAgIGNsb3NlVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy50b2RvbW9kYWwnKVxuLy8gICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbi8vICAgICAgICAgfSlcbi8vICAgICB9KVxuLy8gICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuLy8gICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbi8vICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbi8vICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuLy8gICAgIH1cbi8vICAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4vLyAgICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuLy8gICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuLy8gICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4vLyAgICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJUZW1wXG4gICAgfVxuXG59KSgpXG5cbmNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgICBjb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpXG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b25dJylcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4gICAgb3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldClcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLmFjdGl2ZScpXG4gICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJylcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVybiBcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGxldCBwcm9qZWN0c3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpXG4gICAgcHJvamVjdHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkUHJvamVjdEZvcm0pXG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRQcm9qZWN0TmFtZScpXG4gICAgICAgIGxldCBuYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgY29uc29sZS5sb2coYFBST0pFQ1QgRk9STTogYSBwcm9qZWN0ICR7bmFtZX0gaGFzIGJlZW4gYWRkZWRgKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgncHJvamVjdEFkZGVkJyxuYW1lKVxuXG4gICAgfVxuXG59KSgpXG5cblxuXG5cbmV4cG9ydCB7cHJvamVjdEZvcm0sIHByb2plY3RzfVxuLy8gZXhwb3J0IGNvbnN0IHByb2plY3Rtb2RhbCA9ICgoKSA9PiB7XG4vLyAgICBjb25zdCBvcGVuUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpXG4vLyAgICBjb25zdCBjbG9zZVByb2plY3RNb2RhbCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b25dJylcbi8vICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG5cbi8vICAgIG9wZW5Qcm9qZWN0TW9kYWwuZm9yRWFjaChidXR0b24gPT4ge1xuLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldCcpXG4vLyAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbi8vICAgICB9KVxuLy8gICAgfSlcblxuLy8gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1tb2RhbC5hY3RpdmUnKVxuLy8gICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbi8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbi8vICAgICB9KVxuLy8gICAgfSlcblxuLy8gICAgY2xvc2VQcm9qZWN0TW9kYWwuZm9yRWFjaChidXR0b24gPT4ge1xuLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJylcbi8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbi8vICAgICB9KVxuLy8gICAgfSlcblxuLy8gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4vLyAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuIFxuLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4vLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuLy8gICAgfVxuXG4vLyAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4vLyAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuIFxuLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4vLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuLy8gICAgfVxuLy8gfSkoKSIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiXG5cbiBleHBvcnQgY29uc3QgUHJvamVjdHMgPSAobmFtZSwgaWQgPSB1dWlkdjQoKSkgPT4ge1xuICAgIGxldCB0b2RvcyA9IFtdXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICBpZCxcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIHNldFByb2plY3ROYW1lKHZhbHVlKSB7XG4gICAgICAgICAgICBuYW1lID0gdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvamVjdE5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZVxuICAgICAgICB9LFxuICAgICAgICBzZXRUb2RvKHRhc2tzLGRhdGUpIHtcbiAgICAgICAgICAgIHRvZG9zLnRhc2sgPT0gdGFza3NcbiAgICAgICAgICAgIHRvZG9zLmRhdGUgPT0gZGF0ZVxuICAgICAgICB9LFxuICAgICAgICBhZGRUYXNrKHRhc2ssZGF0ZSkge1xuICAgICAgICAgICAgLy8gaWYodG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5nZXRQcm9qZWN0TmFtZSgpID09PSB0YXNrKSkgcmV0dXJuXG4gICAgICAgICAgICAgcmV0dXJuIHRvZG9zLnB1c2goVGFzayh0YXNrLGRhdGUpKVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVUYXNrKHRhcmdldCl7XG4gICAgICAgICAgICBjb25zdCBncmFiVGFzayA9IHRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gdGFyZ2V0KVxuICAgICAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YoZ3JhYlRhc2spLDEpXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRUb2RvKG5ld1Rhc2ssbmV3RGF0ZSkge1xuICAgICAgICAgICAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvLnRhc2sgPSBuZXdUYXNrLFxuICAgICAgICAgICAgICAgIHRvZG8uZHVlZGF0ZSA9IG5ld0RhdGVcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgICAgICAgICAgIC8vIGlmKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRvZG8uaWQgPSBpZFxuICAgICAgICAgICAgICAgIC8vICAgICB0b2RvLnRhc2sgPSBuZXdUYXNrXG4gICAgICAgICAgICAgICAgLy8gICAgIHRvZG8uZHVlZGF0ZSA9IG5ld0RhdGVcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRvZG9cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCB1c2VyMSA9IFByb2plY3RzKCdOZXcgUHJvamVjdCcpXG51c2VyMS5hZGRUYXNrKCdDcmVhdGUnLCcxMS8yMi8yMDIyJylcbnVzZXIxLmVkaXRUb2RvKCdjcmF0ZScsJzEvMi8yMDIyJylcbmNvbnNvbGUubG9nKHVzZXIxKVxuIiwiY29uc3QgcHVic3ViID0gKCgpID0+IHtcbiAgICBsZXQgX3B1YnN1YiA9IHt9O1xuXG4gICAgLy9zdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KF9wdWJzdWJbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9wdWJzdWJbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgICB9O1xuXG4gICAgLy91bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9wdWJzdWJbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX3B1YnN1YltldmVudE5hbWVdLnNwbGljZSgoX3B1YnN1YltldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcblxuICAgIH1cblxuICAgIC8vcHVibGlzaCBldmVudCB3aXRoIGRhdGFcbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgLi4uZGF0YSkge1xuICAgICAgICBpZighQXJyYXkuaXNBcnJheShfcHVic3ViW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgfVxuXG4gICAgIC8vZGVidWdcbiAgICAgZnVuY3Rpb24gdmlld0V2ZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coX3B1YnN1Yik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICB1bnN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgdmlld0V2ZW50c1xuICAgIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBwdWJzdWIiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiXG5leHBvcnQgY29uc3QgVGFzayA9ICh0YXNrLGR1ZWRhdGUsaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBkdWVkYXRlLFxuICAgICAgICBpZDp1dWlkdjQoKSxcblxuICAgICAgICBnZXRUYXNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gZHVlZGF0ZTtcbiAgICAgICAgfSxcblxuICAgIH1cbn1cblxuXG5sZXQgdXNlcjEgPSBUYXNrKCd0YXNrJywnZGF0ZScpXG5jb25zb2xlLmxvZyh1c2VyMSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuL21vZHVsZXMvcHVic3ViXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrXCI7XG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvVG9kb0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7cHJvamVjdEZvcm0sIHByb2plY3RzIH0gZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlL3N0eWxlcy5jc3MnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob2xkLXByb2plY3RzJyk7XG5cbiAgICBwcm9qZWN0cy5yZW5kZXJUZW1wKG5hdilcbn0pXG5cbi8vIGltcG9ydCB7IFRvZG9GYWN0b3J5LCBQcm9qZWN0RmFjdG9yeSwgUHJvamVjdE1hbmdlciB9IGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xuLy8gaW1wb3J0IHt0b2RvfSBmcm9tICcuL21vZHVsZXMvdGFzaydcbi8vIGltcG9ydCB7IFVJIH0gIGZyb20gJy4vbW9kdWxlcy9VSSdcbi8vIC8vIGltcG9ydCB7IHByb2plY3RGb3JtIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbi8vIGltcG9ydCB7IHRhc2tmb3JtIH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrZm9ybVwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUvc3R5bGVzLmNzcydcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9sZC1wcm9qZWN0cycpXG4vLyAgICAgcmVuZGVyIHRlbXBsYXRlIGZvciBwcm9qZWN0c1xuLy8gICAgIHByb2plY3RzLnJlbmRlclRlbXAoYXNpZGUpXG4vLyAgICAgdG9kby5yZW5kZXJUZW1wKGFzaWRlMilcbi8vIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9