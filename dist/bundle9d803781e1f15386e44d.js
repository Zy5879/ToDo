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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    height: 300px;\n    max-width: 80%;\n}\n\n.modal.active {\n    transform: translate(-50%,-50%) scale(1);\n}\n\n.todomodal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    height: 300px;\n    max-width: 80%;\n}\n\n.todomodal.active {\n    transform: translate(-50%,-50%) scale(1);\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    transition: 200ms ease-in-out;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgb(0, 0, 0, .6);\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}\n\n#add-task {\n    display: none;\n}\n\n.close {\n    /* max-width: 30px;\n    height: 50px; */\n    /* pointer-events: none; */\n    display: inline-block;\n    cursor: pointer;\n}\n\n.project-content button {\n    display: flex;\n    align-items: center;    \n}\n\n/* .project-content {\n    display: grid;\n} */\n/* .project-form {\n    display: none;\n} */\n\n/* .task-form {\n    display: none;\n} */", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,wCAAwC;IACxC,6BAA6B;IAC7B,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,wCAAwC;IACxC,6BAA6B;IAC7B,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;mBACe;IACf,0BAA0B;IAC1B,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;;GAEG;AACH;;GAEG;;AAEH;;GAEG","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    height: 300px;\n    max-width: 80%;\n}\n\n.modal.active {\n    transform: translate(-50%,-50%) scale(1);\n}\n\n.todomodal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    height: 300px;\n    max-width: 80%;\n}\n\n.todomodal.active {\n    transform: translate(-50%,-50%) scale(1);\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    transition: 200ms ease-in-out;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgb(0, 0, 0, .6);\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}\n\n#add-task {\n    display: none;\n}\n\n.close {\n    /* max-width: 30px;\n    height: 50px; */\n    /* pointer-events: none; */\n    display: inline-block;\n    cursor: pointer;\n}\n\n.project-content button {\n    display: flex;\n    align-items: center;    \n}\n\n/* .project-content {\n    display: grid;\n} */\n/* .project-form {\n    display: none;\n} */\n\n/* .task-form {\n    display: none;\n} */"],"sourceRoot":""}]);
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
        const grabProject = projects.find((project) => project === projectname)
        return projects.splice(projects.indexOf(grabProject),1)
    }
    const getProject = (projectname) => {
       return projects.find((project) => project.getProjectName() === projectname)
    }
    const addTodo = (projectname,task,date) => {
        // const grabProject = getProject(projectname).todos
        // return getProject(projectname).addTask((task,date))
         return getProject(projectname).todos.push((0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(task,date))
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
user1.addProject('Name')
user1.addTodo('Name','task','1/22/2022')
user1.deleteProject('Name')
console.log(user1)

// let user1 = TodoController().addProject('Name')
// user1.addTodo('Name','task','11/22/2022')

// user1.editProjectTodo('Name','netask','1/2/2022')



// console.log(user1)

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
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");








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
            button.classList.add('projectindex')
            let buttondiv = document.createElement('div')

            // button.addEventListener('click', (e) => {
            //     if(e.target.className == 'name') {
            //         const currentproject = document.querySelector('.currentproject')
            //         currentproject.textContent = `${name.name}`
            //         const displaytodos = document.querySelector('.hold-todos')
            //         while(displaytodos.firstChild) {
            //             displaytodos.removeChild(displaytodos.firstChild)
            //         }
            //         displayTodos()
            //         showCurrentTodos()
            //         const addTask = document.getElementById('add-task')
            //         addTask.style.display = 'block'
            //     }
            //     else if(e.target.className == 'close') {
            //         const currentproject = document.querySelector('.project-content')
            //         const
            //         console.log(userone.deleteProject(currentproject))
                // }
                // const currentproject = document.querySelector('.currentproject')
                // currentproject.textContent = `${name.name}`
                // const displaytodos = document.querySelector('.hold-todos')
                // while(displaytodos.firstChild) {
                //     displaytodos.removeChild(displaytodos.firstChild)
                // }
            //     const todosubmit = document.getElementById('taskbtn')
            //     todosubmit.addEventListener('click',displayTodo)
            //     showCurrentTodos()
            //     const addTask = document.getElementById('add-task')
            //     addTask.style.display = 'block'
            //     displayTodos()
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
            // })
            let spanbutton = document.createElement('span')
            spanbutton.textContent = `${name.name}`
            spanbutton.classList.add('name')
            let pimg = new Image()
            pimg.classList.add('close')
            pimg.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_4__
            buttondiv.append(pimg,spanbutton)
            button.appendChild(buttondiv)
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
        const div = document.querySelector('.project-content')
        const spanbutton = document.querySelector('.name').textContent
        div.addEventListener('click', (e) => {
            if(e.target.className == 'close') {
                const button = e.target.parentElement
                div.removeChild(button)
                console.log(userone.deleteProject(spanbutton))
            }
        })

        // const pimg = document.querySelector('.close')
        // pimg.addEventListener('click',deleteProject)


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
        // })
    }

    // function deleteProject(e) {
    //     if(e.target.className === 'close') {
    //         console.log('Hey')
        // }
        // let userone = TodoController
        // const pbutton = document.querySelector('.name').textContent
        // console.log(userone.deleteProject(pbutton))
    // })

    const taskbtn = document.getElementById('taskbtn')
    taskbtn.addEventListener('click', displayTodo)


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

    function displayTodo(e) {
        e.preventDefault()
        let userone = _TodoController__WEBPACK_IMPORTED_MODULE_3__["default"]
        const currentproject = document.querySelector('.currentproject').textContent
        let input = document.getElementById('inputTask')
        let task = input.value
        input.value = '';

        let inputdate = document.getElementById('inputDate')
        let date = inputdate.value;
        inputdate.value = '';

        console.log(userone.addTodo(currentproject,task,date))
        const div = document.createElement('div')
        div.classList.add('task-content')

        const button = document.createElement('button')
        button.classList.add('taskindex')
        const divrightside = document.createElement('div')
        divrightside.classList.add('rightside')
        // divrightside.appendChild(p)

        const divleftside = document.createElement('div')
        divleftside.classList.add('leftside')

        // divleftside.appendChild(p2)
        // div.append(divleftside,divrightside)

        const p = document.createElement('p')
        p.textContent = task
        const p2 = document.createElement('p')
        p2.textContent = date;

        const nav = document.querySelector('.hold-todos')

        divrightside.appendChild(p)
        divleftside.appendChild(p2)


        button.append(divrightside,divleftside)
        div.appendChild(button)


        nav.appendChild(div)
        // nav.append(p,p2)

    }

    function showCurrentTodos() {
        let userone = _TodoController__WEBPACK_IMPORTED_MODULE_3__["default"]
        const currentproject = document.querySelector('.currentproject').textContent
        console.log(userone.getProject(currentproject).todos)

        const nav = document.querySelector('.hold-todos')
        for(const objIndex of userone.getProject(currentproject).todos) {
            const div = document.createElement('div')
            div.classList.add('task-content')

            const button = document.createElement('button')
            button.classList.add('taskindex')

            const divleftside = document.createElement('div')
            divleftside.classList.add('leftside')
            const leftsidep = document.createElement('p')
            leftsidep.textContent = objIndex.task
            divleftside.appendChild(leftsidep)

            const divrightside = document.createElement('div')
            divrightside.classList.add('rightside')
            const rightsidep = document.createElement('p')
            rightsidep.textContent = objIndex.duedate
            divrightside.appendChild(rightsidep)

            button.append(divleftside,divrightside)
            div.appendChild(button)
            nav.appendChild(div)
            console.log(objIndex.duedate)
            const list = document.createElement('div')
            list.setAttribute('class',objIndex);
            for(const key in objIndex) {
                const div = document.createElement('div')
                div.classList.add('task-content')
                const button = document.createElement('button')
                const divleftside = document.createElement('div')
                divleftside.classList.add('leftside')
                divleftside.appendChild(liElemnt)
                const divrightside = document.createElement('div')
                divrightside.classList.add('rightside')
                const liElemnt = document.createElement('p');
                button.append(divleftside,divrightside)
                liElemnt.textContent = `${key}:${objIndex[key]}`;
                liElemnt.textContent = `${objIndex[key]}`
                list.appendChild(liElemnt)
            }
            nav.appendChild(list)
        }
    }

    // const todosubmit = document.getElementById('taskbtn')
    // todosubmit.addEventListener('click', (e) => {
    //     let userone = TodoController
        // let projects = userone.projects
        // const currentproject = document.querySelector('.currentproject').textContent
        //  e.preventDefault()
        // let inputtext = document.getElementById('inputTask')
        // let task = inputtext.value;
        // inputtext.value = '';
            
        // let inputdate = document.getElementById('inputDate')
        // let date = inputdate.value;
        // inputdate.value =  ''
        // console.log(date)
        // console.log(userone.addTodo(currentproject,task,date))
        // const p = document.createElement('p')
        // p.innerText = task
        // const nav = document.querySelector('.hold-todos')
        // nav.appendChild(p)
        // console.log(userone.getProject(currentproject).todos)
        // let currenttodos = userone.getProject(currentproject).todos
        // currenttodos.forEach(task) 
 // projects.forEach(project => {
                    //     console.log(userone.addTodo(`${project.name}`,task))
                    // })

                // })
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

    // function displayTodos() {
    //     const nav = document.querySelector('.hold-todos')
        
    // }

    function displayTodos() {
        const currentproject = document.querySelector('.currentproject').textContent
        let userone = _TodoController__WEBPACK_IMPORTED_MODULE_3__["default"]
        let projecttodos = userone.getProject(currentproject).todos

        const nav = document.createElement('p')
        nav.textContent = `${projecttodos}`
        const holdtodos = document.querySelector('.hold-todos')
        holdtodos.appendChild(nav)
       console.log(projecttodos)
    }

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
// user1.editTodo('crate','1/2/2022')
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

const Task = (task,duedate, id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()) => {
    return {
        task,
        duedate,
        id,
        // id:uuidv4(),

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

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "close.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0FBQ2xCLGVBQWUsY0FBYztBQUM3QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxXQUFXO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUvc3R5bGVzLmNzcz9hZjdjIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1RvZG9Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvZG9tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRvZG9tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC42KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbG9zZSB7XFxuICAgIC8qIG1heC13aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4OyAqL1xcbiAgICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTsgKi9cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXFxufVxcblxcbi8qIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn0gKi9cXG4vKiAucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLyogLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7bUJBQ2U7SUFDZiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBOztHQUVHO0FBQ0g7O0dBRUc7O0FBRUg7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi50b2RvbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi50b2RvbW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuNik7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICAvKiBtYXgtd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNTBweDsgKi9cXG4gICAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50IGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcbn1cXG5cXG4vKiAucHJvamVjdC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59ICovXFxuLyogLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi8qIC50YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG4vLyBleHBvcnQgY29uc3QgVG9kb0NvbnRyb2xsZXIgPSAoKSA9PiB7XG4vLyAgICAgbGV0IHByb2plY3RzID0gW107XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvamVjdHMsXG4vLyAgICAgICAgIHNldFByb2plY3RzKHByb2plY3QpIHtcbi8vICAgICAgICAgICAgIHByb2plY3RzID0gcHJvamVjdFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RuYW1lKSB7XG4vLyAgICAgICAgICAgICBpZihwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3RuYW1lLm5hbWUpKVxuLy8gICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RuYW1lKVxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RuYW1lKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBncmFiUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKSA9PT0gcHJvamVjdG5hbWUubmFtZSlcbi8vICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihncmFiUHJvamVjdCksMSlcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgZ2V0UHJvamVjdChwcm9qZWN0bmFtZSkge1xuLy8gICAgICAgICAgICAgaWYocHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpID09PSBwcm9qZWN0bmFtZS5uYW1lKSkgXG4vLyAgICAgICAgICAgICByZXR1cm4gcHJvamVjdG5hbWVcblxuLy8gICAgICAgICB9LFxuXG4vLyAgICAgfVxuLy8gfVxuXG4gY29uc3QgVG9kb0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0bmFtZSkgPT4ge1xuICAgICAgICBpZihwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3RuYW1lLm5hbWUpKVxuICAgICAgICByZXR1cm5cbiAgICAgICAgcHJvamVjdHMucHVzaChQcm9qZWN0cyhwcm9qZWN0bmFtZSkpXG5cbiAgICB9XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0bmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBncmFiUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QgPT09IHByb2plY3RuYW1lKVxuICAgICAgICByZXR1cm4gcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YoZ3JhYlByb2plY3QpLDEpXG4gICAgfVxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdG5hbWUpID0+IHtcbiAgICAgICByZXR1cm4gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpID09PSBwcm9qZWN0bmFtZSlcbiAgICB9XG4gICAgY29uc3QgYWRkVG9kbyA9IChwcm9qZWN0bmFtZSx0YXNrLGRhdGUpID0+IHtcbiAgICAgICAgLy8gY29uc3QgZ3JhYlByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RuYW1lKS50b2Rvc1xuICAgICAgICAvLyByZXR1cm4gZ2V0UHJvamVjdChwcm9qZWN0bmFtZSkuYWRkVGFzaygodGFzayxkYXRlKSlcbiAgICAgICAgIHJldHVybiBnZXRQcm9qZWN0KHByb2plY3RuYW1lKS50b2Rvcy5wdXNoKFRhc2sodGFzayxkYXRlKSlcbiAgICAvLyAgY29uc3QgZ3JhYlByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3ROYW1lKCkgPT09IHByb2plY3RuYW1lKVxuICAgIC8vICByZXR1cm4gZ3JhYlByb2plY3QuYWRkVGFzayhUYXNrKHRhc2ssZGF0ZSkpXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSAocHJvamVjdG5hbWUsIHRhc2spID0+IHtcbiAgICAgICAgcmV0dXJuIGdldFByb2plY3QocHJvamVjdG5hbWUpLmRlbGV0ZVRhc2sodGFzaylcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdFRvZG8gPSAocHJvamVjdG5hbWUsdGFzayxkYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRQcm9qZWN0KHByb2plY3RuYW1lKS5lZGl0VG9kbyh0YXNrLGRhdGUpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZWRpdFRvZG8gPSAocHJvamVjdG5hbWUpXG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgZWRpdFByb2plY3RUb2RvXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udHJvbGxlclxuXG5sZXQgdXNlcjEgPSBUb2RvQ29udHJvbGxlclxudXNlcjEuYWRkUHJvamVjdCgnTmFtZScpXG51c2VyMS5hZGRUb2RvKCdOYW1lJywndGFzaycsJzEvMjIvMjAyMicpXG51c2VyMS5kZWxldGVQcm9qZWN0KCdOYW1lJylcbmNvbnNvbGUubG9nKHVzZXIxKVxuXG4vLyBsZXQgdXNlcjEgPSBUb2RvQ29udHJvbGxlcigpLmFkZFByb2plY3QoJ05hbWUnKVxuLy8gdXNlcjEuYWRkVG9kbygnTmFtZScsJ3Rhc2snLCcxMS8yMi8yMDIyJylcblxuLy8gdXNlcjEuZWRpdFByb2plY3RUb2RvKCdOYW1lJywnbmV0YXNrJywnMS8yLzIwMjInKVxuXG5cblxuLy8gY29uc29sZS5sb2codXNlcjEpIiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBUb2RvQ29udHJvbGxlciBmcm9tIFwiLi9Ub2RvQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi4vYXNzZXRzL2Nsb3NlLnN2ZydcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzIGZyb20gXCJkYXRlLWZucy9lc20vZnAvZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrcy9pbmRleC5qc1wiO1xuXG4vLyAgY29uc3QgcHJvamVjdG1vZGFsID0gKCgpID0+IHtcbi8vICAgICBjb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpXG4vLyAgICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b25dJylcbi8vICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4vLyAgICAgb3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldClcbi8vICAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbi8vICAgICAgICAgfSlcbi8vICAgICB9KVxuXG4vLyAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLmFjdGl2ZScpXG4vLyAgICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbi8vICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcblxuLy8gICAgIGNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbi8vICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJylcbi8vICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcblxuLy8gICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuLy8gICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbi8vICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbi8vICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuLy8gICAgIH1cbi8vICAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4vLyAgICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVybiBcbi8vICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuLy8gICAgIH1cbi8vIH0pKClcblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZnVuY3Rpb24gcmVuZGVyVGVtcChjb250YWluZXIpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0VGVtcGxhdGUnKVxuICAgICAgICBsZXQgZGl2ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ1BST0pFQ1RTOiB3ZSB3YW50IHRvIGtub3cgaWYgYSBwcm9qZWN0IGlzIGFkZGVkJylcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJyxhZGRQcm9qZWN0KVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgLy9wcm9qZWN0IGFkZGVkIGV2ZW50IHB1Ymxpc2hcbiAgICAgICAgY29uc29sZS5sb2coYEkgaGVhciB0aGF0ICR7bmFtZX0gaXMgYmVpbmcgYWRkZWRgKVxuICAgICAgICBsZXQgcHJvamVjdGxpc3QgPSBsaXN0XG4gICAgICAgIGxldCB1c2Vyb25lID0gVG9kb0NvbnRyb2xsZXJcbiAgICAgICAgbGV0IHByb2plY3RzID0gdXNlcm9uZS5wcm9qZWN0c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgdXNlcm9uZS5hZGRQcm9qZWN0KG5hbWUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJvbmUuZ2V0UHJvamVjdChuYW1lKSlcbiAgICAgICAgcHJvamVjdGxpc3QucHVzaCh1c2Vyb25lKVxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vyb25lKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnVGhpcyBpcycsdXNlcm9uZSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdGxpc3QpXG4gICAgICAgIHByb2plY3RsaXN0ID0gQXJyYXkuZnJvbShsaXN0KS5zb3J0KClcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RVcGRhdGVkJylcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3RVcGRhdGVkJywgbmFtZSlcblxuICAgICAgICBsZXQgcHJvamVjdG5hbWVkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG5hbWUnKVxuICAgICAgICBwcm9qZWN0bmFtZWRpdi50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50JylcbiAgICAgICAgICAgIGxldCBidXR0b24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0aW5kZXgnKVxuICAgICAgICAgICAgbGV0IGJ1dHRvbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgICAgIC8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09ICduYW1lJykge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBjdXJyZW50cHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50cHJvamVjdCcpXG4gICAgICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7bmFtZS5uYW1lfWBcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgZGlzcGxheXRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtdG9kb3MnKVxuICAgICAgICAgICAgLy8gICAgICAgICB3aGlsZShkaXNwbGF5dG9kb3MuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGlzcGxheXRvZG9zLnJlbW92ZUNoaWxkKGRpc3BsYXl0b2Rvcy5maXJzdENoaWxkKVxuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIGRpc3BsYXlUb2RvcygpXG4gICAgICAgICAgICAvLyAgICAgICAgIHNob3dDdXJyZW50VG9kb3MoKVxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJylcbiAgICAgICAgICAgIC8vICAgICAgICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBlbHNlIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGN1cnJlbnRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudCcpXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJvbmUuZGVsZXRlUHJvamVjdChjdXJyZW50cHJvamVjdCkpXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGN1cnJlbnRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRwcm9qZWN0JylcbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50cHJvamVjdC50ZXh0Q29udGVudCA9IGAke25hbWUubmFtZX1gXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZGlzcGxheXRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtdG9kb3MnKVxuICAgICAgICAgICAgICAgIC8vIHdoaWxlKGRpc3BsYXl0b2Rvcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRpc3BsYXl0b2Rvcy5yZW1vdmVDaGlsZChkaXNwbGF5dG9kb3MuZmlyc3RDaGlsZClcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgdG9kb3N1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrYnRuJylcbiAgICAgICAgICAgIC8vICAgICB0b2Rvc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5VG9kbylcbiAgICAgICAgICAgIC8vICAgICBzaG93Q3VycmVudFRvZG9zKClcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJylcbiAgICAgICAgICAgIC8vICAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAvLyAgICAgZGlzcGxheVRvZG9zKClcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB0YXNrYnV0dG9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrYnRuJylcbiAgICAgICAgICAgICAgICAvLyB0YXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBpbnB1dHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrJylcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHRhc2sgPSBpbnB1dHRleHQudmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlucHV0dGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBpbnB1dGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJylcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRhdGUgPSBpbnB1dGRhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlucHV0ZGF0ZS52YWx1ZSA9ICAnJ1xuXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXJvbmUuYWRkVG9kbyhgJHtuYW1lLm5hbWV9YCx0YXNrKSlcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIGxldCBzcGFuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBzcGFuYnV0dG9uLnRleHRDb250ZW50ID0gYCR7bmFtZS5uYW1lfWBcbiAgICAgICAgICAgIHNwYW5idXR0b24uY2xhc3NMaXN0LmFkZCgnbmFtZScpXG4gICAgICAgICAgICBsZXQgcGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgICAgICBwaW1nLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbiAgICAgICAgICAgIHBpbWcuc3JjID0gY2xvc2VcbiAgICAgICAgICAgIGJ1dHRvbmRpdi5hcHBlbmQocGltZyxzcGFuYnV0dG9uKVxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbmRpdilcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgICAgICBkZi5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgICAgIC8vIGNvbnN0IHRhc2tidXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tidG4nKVxuICAgICAgICAgICAgLy8gICAgIHRhc2tidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGlucHV0dGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKVxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdGFzayA9IGlucHV0dGV4dC52YWx1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaW5wdXR0ZXh0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGlucHV0ZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKVxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgZGF0ZSA9IGlucHV0ZGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaW5wdXRkYXRlLnZhbHVlID0gICcnXG5cbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codXNlcm9uZS5hZGRUb2RvKGAke25hbWUubmFtZX1gLHRhc2spKVxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RuYW1lZGl2LmFwcGVuZENoaWxkKGRmKVxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50JylcbiAgICAgICAgY29uc3Qgc3BhbmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnRcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChidXR0b24pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcm9uZS5kZWxldGVQcm9qZWN0KHNwYW5idXR0b24pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNvbnN0IHBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxuICAgICAgICAvLyBwaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVQcm9qZWN0KVxuXG5cbiAgICAgICAgLy8gY29uc3QgZGlzcGxheXByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dwcm9qZWN0cycpXG5cbiAgICAgICAgLy8gbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZSBidXR0b24nKVxuICAgICAgICAvLyBidXR0b24uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIC8vIGxldCBwcm9qZWN0bmFtZWRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0bmFtZScpXG4gICAgICAgIC8vIHByb2plY3RuYW1lZGl2LmlubmVyVGV4dCA9ICcnXG4gICAgICAgIC8vIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICAvLyBwcm9qZWN0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50JylcbiAgICAgICAgLy8gICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dwcm9qZWN0cycpXG4gICAgICAgIC8vICAgICAgICAgd2hpbGUocHJvamVjdHBhZ2UuZmlyc3RDaGlsZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0cGFnZS5yZW1vdmVDaGlsZChwcm9qZWN0cGFnZS5maXJzdENoaWxkKVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAvLyAgICAgICAgIGgyLmlubmVyVGV4dCA9IGAke25hbWUubmFtZX1gXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgaG9sZHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyAgICAgICAgIGhvbGR0b2RvLmNsYXNzTGlzdC5hZGQoJ2hvbGQtdGFza3MnKVxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvbW9kYWwtdGFyZ2V0XCIsJyN0b2RvbW9kYWwnKVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKVxuICAgICAgICAgICAgICAgIC8vIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvTW9kYWwpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbC5jbGFzc0xpc3QuYWRkKCd0b2RvbW9kYWwnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZG9tb2RhbFwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9tb2RhbGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RhbG1vZGFsLWhlYWRlcicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb21vZGFsdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWx0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbHRpdGxlLmlubmVyVGV4dCA9ICdOZXcgVGFzaydcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvY2xvc2VidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvY2xvc2VidXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb2Nsb3NlYnV0dG9uLmlubmVyVGV4dCA9IGAmdGltZXM7YFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGhlYWRlci5hcHBlbmQodG9kb21vZGFsdGl0bGUsdG9kb2Nsb3NlYnV0dG9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9tb2RhbGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWxib2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG9tb2RhbC1ib2R5JylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvbW9kYWxmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9tb2RhbGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9mb3JtJylcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb3Rhc2tpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb3Rhc2tpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb3Rhc2tpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dFRhc2snKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvZGF0ZWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvZGF0ZWlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvZGF0ZWlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0RGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9zdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAvLyB0b2Rvc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9zdWJtaXQuY2xhc3NMaXN0LmFkZCgndG9kb2J0bicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9zdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCdcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWxmb3JtLmFwcGVuZCh0b2RvdGFza2lucHV0LHRvZG9kYXRlaW5wdXQsdG9kb3N1Ym1pdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvbW9kYWxib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbGZvcm0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb21vZGFsLmFwcGVuZCh0b2RvbW9kYWxoZWFkZXIsdG9kb21vZGFsYm9keSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBvcGVuVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZG9tb2RhbC10YXJnZXRdJylcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gb3BlblRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC50b2RvbW9kYWxUYXJnZXQpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9tb2RhbC5hY3RpdmUnKSBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy50b2RvbW9kYWwnKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvZG9CdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJ1xuXG4gICAgICAgIC8vICAgICAgICAgZGl2LmFwcGVuZChoMixob2xkdG9kbyxhZGRUb2RvQnV0dG9uKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIGRpc3BsYXlwcm9qZWN0cy5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICBsZXQgcGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAvLyAgICAgcGJ1dHRvbi5pbm5lclRleHQgPSBgJHtuYW1lLm5hbWV9YFxuICAgICAgICAvLyAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHBidXR0b24pXG4gICAgICAgIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICAvLyAgICAgZGYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBwcm9qZWN0bmFtZWRpdi5hcHBlbmRDaGlsZChkZilcbiAgICAgICAgICAgIC8vIGNvbnN0IG9wZW5Ub2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9kb21vZGFsLXRhcmdldF0nKVxuICAgICAgICAgICAgLy8gY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpXG4gICAgICAgICAgICAvLyBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuICAgIFxuICAgICAgICAgICAgLy8gb3BlblRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRvZG9tb2RhbFRhcmdldClcbiAgICAgICAgICAgIC8vICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyB9KVxuICAgIFxuICAgICAgICAgICAgLy8gb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb21vZGFsLmFjdGl2ZScpIFxuICAgICAgICAgICAgLy8gICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gfSlcbiAgICBcbiAgICAgICAgICAgIC8vIGNsb3NlVG9kb01vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcudG9kb21vZGFsJylcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgICAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAvLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgICAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAvLyAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICAvLyBwcm9qZWN0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgLy8gICAgIHAuaW5uZXJUZXh0ID0gYCR7bmFtZS5uYW1lfWA7XG4gICAgICAgIC8vICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gICAgIGRpdi5hcHBlbmRDaGlsZChwKVxuICAgICAgICAvLyAgICAgZGYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gYnV0dG9uLmFwcGVuZENoaWxkKGRmKVxuICAgICAgICAvLyBwcm9qZWN0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG5hbWUgcCcpXG4gICAgICAgIC8vICAgICBwLmlubmVyVGV4dCAgPSBgJHtuYW1lLm5hbWV9YFxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBwcm9qZWN0bGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgaWYocHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKSkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gbGV0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdG5hbWUgcCcpXG4gICAgLy8gICAgICAgICAvLyBwLmlubmVyVGV4dCA9IGAke25hbWV9YFxuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICAgIC8vICAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjbG9zZScpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdIZXknKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGxldCB1c2Vyb25lID0gVG9kb0NvbnRyb2xsZXJcbiAgICAgICAgLy8gY29uc3QgcGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnRcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcm9uZS5kZWxldGVQcm9qZWN0KHBidXR0b24pKVxuICAgIC8vIH0pXG5cbiAgICBjb25zdCB0YXNrYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tidG4nKVxuICAgIHRhc2tidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VG9kbylcblxuXG4gICAgY29uc3Qgb3BlblRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2RvbW9kYWwtdGFyZ2V0XScpXG4gICAgY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uXScpXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcblxuICAgIG9wZW5Ub2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRvZG9tb2RhbFRhcmdldClcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9tb2RhbC5hY3RpdmUnKSBcbiAgICAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xvc2VUb2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLnRvZG9tb2RhbCcpXG4gICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VG9kbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgdXNlcm9uZSA9IFRvZG9Db250cm9sbGVyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRwcm9qZWN0JykudGV4dENvbnRlbnRcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFzaycpXG4gICAgICAgIGxldCB0YXNrID0gaW5wdXQudmFsdWVcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBsZXQgaW5wdXRkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RGF0ZScpXG4gICAgICAgIGxldCBkYXRlID0gaW5wdXRkYXRlLnZhbHVlO1xuICAgICAgICBpbnB1dGRhdGUudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vyb25lLmFkZFRvZG8oY3VycmVudHByb2plY3QsdGFzayxkYXRlKSlcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpXG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tpbmRleCcpXG4gICAgICAgIGNvbnN0IGRpdnJpZ2h0c2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdnJpZ2h0c2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodHNpZGUnKVxuICAgICAgICAvLyBkaXZyaWdodHNpZGUuYXBwZW5kQ2hpbGQocClcblxuICAgICAgICBjb25zdCBkaXZsZWZ0c2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdmxlZnRzaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnRzaWRlJylcblxuICAgICAgICAvLyBkaXZsZWZ0c2lkZS5hcHBlbmRDaGlsZChwMilcbiAgICAgICAgLy8gZGl2LmFwcGVuZChkaXZsZWZ0c2lkZSxkaXZyaWdodHNpZGUpXG5cbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwLnRleHRDb250ZW50ID0gdGFza1xuICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwMi50ZXh0Q29udGVudCA9IGRhdGU7XG5cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtdG9kb3MnKVxuXG4gICAgICAgIGRpdnJpZ2h0c2lkZS5hcHBlbmRDaGlsZChwKVxuICAgICAgICBkaXZsZWZ0c2lkZS5hcHBlbmRDaGlsZChwMilcblxuXG4gICAgICAgIGJ1dHRvbi5hcHBlbmQoZGl2cmlnaHRzaWRlLGRpdmxlZnRzaWRlKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG5cbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgLy8gbmF2LmFwcGVuZChwLHAyKVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcbiAgICAgICAgbGV0IHVzZXJvbmUgPSBUb2RvQ29udHJvbGxlclxuICAgICAgICBjb25zdCBjdXJyZW50cHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50cHJvamVjdCcpLnRleHRDb250ZW50XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJvbmUuZ2V0UHJvamVjdChjdXJyZW50cHJvamVjdCkudG9kb3MpXG5cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtdG9kb3MnKVxuICAgICAgICBmb3IoY29uc3Qgb2JqSW5kZXggb2YgdXNlcm9uZS5nZXRQcm9qZWN0KGN1cnJlbnRwcm9qZWN0KS50b2Rvcykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKVxuXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tpbmRleCcpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpdmxlZnRzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRpdmxlZnRzaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnRzaWRlJylcbiAgICAgICAgICAgIGNvbnN0IGxlZnRzaWRlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgbGVmdHNpZGVwLnRleHRDb250ZW50ID0gb2JqSW5kZXgudGFza1xuICAgICAgICAgICAgZGl2bGVmdHNpZGUuYXBwZW5kQ2hpbGQobGVmdHNpZGVwKVxuXG4gICAgICAgICAgICBjb25zdCBkaXZyaWdodHNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2cmlnaHRzaWRlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0c2lkZScpXG4gICAgICAgICAgICBjb25zdCByaWdodHNpZGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICByaWdodHNpZGVwLnRleHRDb250ZW50ID0gb2JqSW5kZXguZHVlZGF0ZVxuICAgICAgICAgICAgZGl2cmlnaHRzaWRlLmFwcGVuZENoaWxkKHJpZ2h0c2lkZXApXG5cbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmQoZGl2bGVmdHNpZGUsZGl2cmlnaHRzaWRlKVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmpJbmRleC5kdWVkYXRlKVxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLG9iakluZGV4KTtcbiAgICAgICAgICAgIGZvcihjb25zdCBrZXkgaW4gb2JqSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2bGVmdHNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGRpdmxlZnRzaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnRzaWRlJylcbiAgICAgICAgICAgICAgICBkaXZsZWZ0c2lkZS5hcHBlbmRDaGlsZChsaUVsZW1udClcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZyaWdodHNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGRpdnJpZ2h0c2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodHNpZGUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGxpRWxlbW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmQoZGl2bGVmdHNpZGUsZGl2cmlnaHRzaWRlKVxuICAgICAgICAgICAgICAgIGxpRWxlbW50LnRleHRDb250ZW50ID0gYCR7a2V5fToke29iakluZGV4W2tleV19YDtcbiAgICAgICAgICAgICAgICBsaUVsZW1udC50ZXh0Q29udGVudCA9IGAke29iakluZGV4W2tleV19YFxuICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlFbGVtbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobGlzdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnN0IHRvZG9zdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza2J0bicpXG4gICAgLy8gdG9kb3N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gICAgIGxldCB1c2Vyb25lID0gVG9kb0NvbnRyb2xsZXJcbiAgICAgICAgLy8gbGV0IHByb2plY3RzID0gdXNlcm9uZS5wcm9qZWN0c1xuICAgICAgICAvLyBjb25zdCBjdXJyZW50cHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50cHJvamVjdCcpLnRleHRDb250ZW50XG4gICAgICAgIC8vICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8gbGV0IGlucHV0dGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKVxuICAgICAgICAvLyBsZXQgdGFzayA9IGlucHV0dGV4dC52YWx1ZTtcbiAgICAgICAgLy8gaW5wdXR0ZXh0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gbGV0IGlucHV0ZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKVxuICAgICAgICAvLyBsZXQgZGF0ZSA9IGlucHV0ZGF0ZS52YWx1ZTtcbiAgICAgICAgLy8gaW5wdXRkYXRlLnZhbHVlID0gICcnXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJvbmUuYWRkVG9kbyhjdXJyZW50cHJvamVjdCx0YXNrLGRhdGUpKVxuICAgICAgICAvLyBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIC8vIHAuaW5uZXJUZXh0ID0gdGFza1xuICAgICAgICAvLyBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9sZC10b2RvcycpXG4gICAgICAgIC8vIG5hdi5hcHBlbmRDaGlsZChwKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2Vyb25lLmdldFByb2plY3QoY3VycmVudHByb2plY3QpLnRvZG9zKVxuICAgICAgICAvLyBsZXQgY3VycmVudHRvZG9zID0gdXNlcm9uZS5nZXRQcm9qZWN0KGN1cnJlbnRwcm9qZWN0KS50b2Rvc1xuICAgICAgICAvLyBjdXJyZW50dG9kb3MuZm9yRWFjaCh0YXNrKSBcbiAvLyBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2codXNlcm9uZS5hZGRUb2RvKGAke3Byb2plY3QubmFtZX1gLHRhc2spKVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAvLyBjb25zdCB0b2Rvc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tidG4nKVxuICAgIC8vIHRvZG9zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFRvZG9Ub1Byb2plY3QpXG5cbiAgICAvLyBmdW5jdGlvbiBhZGRUb2RvVG9Qcm9qZWN0KGUpIHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIC8vIGxldCBpbnB1dHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrJylcbiAgICAgICAgLy8gbGV0IHRhc2sgPSBpbnB1dHRleHQudmFsdWU7XG4gICAgICAgIC8vIGlucHV0dGV4dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIC8vIGxldCBpbnB1dGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJylcbiAgICAgICAgLy8gbGV0IGRhdGUgPSBpbnB1dGRhdGUudmFsdWU7XG4gICAgICAgIC8vIGlucHV0ZGF0ZS52YWx1ZSA9ICAnJ1xuICAgICAgICBcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCB0b2RvbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWwuY2xhc3NMaXN0LmFkZCgndG9kb21vZGFsJylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0b2RvbW9kYWxcIilcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvbW9kYWxoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWxoZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kYWxtb2RhbC1oZWFkZXInKVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9tb2RhbHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWx0aXRsZS5pbm5lclRleHQgPSAnTmV3IFRhc2snXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb2Nsb3NlYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb2Nsb3NlYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9jbG9zZWJ1dHRvbi5pbm5lclRleHQgPSBgJnRpbWVzO2BcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWxoZWFkZXIuYXBwZW5kKHRvZG9tb2RhbHRpdGxlLHRvZG9jbG9zZWJ1dHRvbilcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvbW9kYWxib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsYm9keS5jbGFzc0xpc3QuYWRkKCd0b2RvbW9kYWwtYm9keScpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb21vZGFsZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2RvbW9kYWxmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvZm9ybScpXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG90YXNraW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG90YXNraW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG90YXNraW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRUYXNrJylcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb2RhdGVpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb2RhdGVpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb2RhdGVpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dERhdGUnKVxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2Rvc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb3N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2Rvc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3RvZG9idG4nKVxuICAgIC8vICAgICAgICAgICAgICAgICB0b2Rvc3VibWl0LmlubmVyVGV4dCA9ICdTdWJtaXQnXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsZm9ybS5hcHBlbmQodG9kb3Rhc2tpbnB1dCx0b2RvZGF0ZWlucHV0LHRvZG9zdWJtaXQpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgdG9kb21vZGFsYm9keS5hcHBlbmRDaGlsZCh0b2RvbW9kYWxmb3JtKVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvZG9tb2RhbC5hcHBlbmQodG9kb21vZGFsaGVhZGVyLHRvZG9tb2RhbGJvZHkpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvbW9kYWwpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3Qgb3BlblRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2RvbW9kYWwtdGFyZ2V0XScpXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS1idXR0b24nKVxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIG9wZW5Ub2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQudG9kb21vZGFsVGFyZ2V0KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvbW9kYWwuYWN0aXZlJykgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgY2xvc2VUb2RvTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcudG9kb21vZGFsJylcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiB0b2RvTW9kYWwoKSB7XG4gICAgLy8gICAgIGNvbnN0IHRvZG9tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gICAgIHRvZG9tb2RhbC5jbGFzc0xpc3QuYWRkKCd0b2RvbW9kYWwnKVxuICAgIC8vICAgICB0b2RvbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZG9tb2RhbFwiKVxuXG4gICAgLy8gICAgIGNvbnN0IHRvZG9tb2RhbGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gICAgIHRvZG9tb2RhbGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RhbG1vZGFsLWhlYWRlcicpXG5cbiAgICAvLyAgICAgY29uc3QgdG9kb21vZGFsdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICB0b2RvbW9kYWx0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgLy8gICAgIHRvZG9tb2RhbHRpdGxlLmlubmVyVGV4dCA9ICdOZXcgVGFzaydcblxuICAgIC8vICAgICBjb25zdCB0b2RvY2xvc2VidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vICAgICB0b2RvY2xvc2VidXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJylcbiAgICAvLyAgICAgdG9kb2Nsb3NlYnV0dG9uLmlubmVyVGV4dCA9IGAmdGltZXM7YFxuXG4gICAgLy8gICAgIHRvZG9tb2RhbGhlYWRlci5hcHBlbmQodG9kb21vZGFsdGl0bGUsdG9kb2Nsb3NlYnV0dG9uKVxuXG4gICAgLy8gICAgIGNvbnN0IHRvZG9tb2RhbGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICAgICB0b2RvbW9kYWxib2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG9tb2RhbC1ib2R5JylcblxuICAgIC8vICAgICBjb25zdCB0b2RvbW9kYWxmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgLy8gICAgIHRvZG9tb2RhbGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9mb3JtJylcbiAgICAvLyAgICAgY29uc3QgdG9kb3Rhc2tpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAvLyAgICAgdG9kb3Rhc2tpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAvLyAgICAgdG9kb3Rhc2tpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dFRhc2snKVxuICAgIC8vICAgICBjb25zdCB0b2RvZGF0ZWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIC8vICAgICB0b2RvZGF0ZWlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuICAgIC8vICAgICB0b2RvZGF0ZWlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0RGF0ZScpXG4gICAgLy8gICAgIGNvbnN0IHRvZG9zdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vICAgICB0b2Rvc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpXG4gICAgLy8gICAgIHRvZG9zdWJtaXQuY2xhc3NMaXN0LmFkZCgndG9kb2J0bicpXG4gICAgLy8gICAgIHRvZG9zdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCdcblxuICAgIC8vICAgICB0b2RvbW9kYWxmb3JtLmFwcGVuZCh0b2RvdGFza2lucHV0LHRvZG9kYXRlaW5wdXQsdG9kb3N1Ym1pdClcblxuICAgIC8vICAgICB0b2RvbW9kYWxib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbGZvcm0pXG5cbiAgICAvLyAgICAgdG9kb21vZGFsLmFwcGVuZCh0b2RvbW9kYWxoZWFkZXIsdG9kb21vZGFsYm9keSlcblxuICAgIC8vICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbClcblxuICAgICAgICAvLyBjb25zdCBvcGVuVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZG9tb2RhbC10YXJnZXRdJylcbiAgICAgICAgLy8gY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpXG4gICAgICAgIC8vIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG5cbiAgICAgICAgLy8gb3BlblRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC50b2RvbW9kYWxUYXJnZXQpXG4gICAgICAgIC8vICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9tb2RhbC5hY3RpdmUnKSBcbiAgICAgICAgLy8gICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAvLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy50b2RvbW9kYWwnKVxuICAgICAgICAvLyAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgICAgICAgLy8gICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgLy8gICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIC8vICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbiAgICAgICAgLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIC8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIC8vIH1cblxuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9tb2RhbClcbiAgICAvLyB9XG5cbi8vICAgICBjb25zdCBvcGVuVG9kb01vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZG9tb2RhbC10YXJnZXRdJylcbi8vICAgICBjb25zdCBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b25dJylcbi8vICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4vLyAgICAgb3BlblRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuLy8gICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQudG9kb21vZGFsVGFyZ2V0KVxuLy8gICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG5cbi8vICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb21vZGFsLmFjdGl2ZScpIFxuLy8gICAgICAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4vLyAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG5cbi8vICAgICBjbG9zZVRvZG9Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuLy8gICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcudG9kb21vZGFsJylcbi8vICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcbi8vICAgICBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbi8vICAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4vLyAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4vLyAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbi8vICAgICB9XG4vLyAgICAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuLy8gICAgICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm5cbi8vICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuLy8gICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIGRpc3BsYXlUb2RvcygpIHtcbiAgICAvLyAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtdG9kb3MnKVxuICAgICAgICBcbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VG9kb3MoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRwcm9qZWN0JykudGV4dENvbnRlbnRcbiAgICAgICAgbGV0IHVzZXJvbmUgPSBUb2RvQ29udHJvbGxlclxuICAgICAgICBsZXQgcHJvamVjdHRvZG9zID0gdXNlcm9uZS5nZXRQcm9qZWN0KGN1cnJlbnRwcm9qZWN0KS50b2Rvc1xuXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBuYXYudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0dG9kb3N9YFxuICAgICAgICBjb25zdCBob2xkdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9sZC10b2RvcycpXG4gICAgICAgIGhvbGR0b2Rvcy5hcHBlbmRDaGlsZChuYXYpXG4gICAgICAgY29uc29sZS5sb2cocHJvamVjdHRvZG9zKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclRlbXBcbiAgICB9XG5cbn0pKClcblxuY29uc3QgcHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG9wZW5Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJylcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG5cbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KVxuICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwuYWN0aXZlJylcbiAgICAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKVxuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgaWYobW9kYWwgPT0gbnVsbCkgcmV0dXJuIFxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJylcbiAgICBwcm9qZWN0c3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRQcm9qZWN0Rm9ybSlcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByb2plY3ROYW1lJylcbiAgICAgICAgbGV0IG5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICBjb25zb2xlLmxvZyhgUFJPSkVDVCBGT1JNOiBhIHByb2plY3QgJHtuYW1lfSBoYXMgYmVlbiBhZGRlZGApXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLG5hbWUpXG5cbiAgICB9XG5cbn0pKClcblxuXG5cblxuZXhwb3J0IHtwcm9qZWN0Rm9ybSwgcHJvamVjdHN9XG4vLyBleHBvcnQgY29uc3QgcHJvamVjdG1vZGFsID0gKCgpID0+IHtcbi8vICAgIGNvbnN0IG9wZW5Qcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJylcbi8vICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuLy8gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcblxuLy8gICAgb3BlblByb2plY3RNb2RhbC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0Jylcbi8vICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuLy8gICAgIH0pXG4vLyAgICB9KVxuXG4vLyAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW1vZGFsLmFjdGl2ZScpXG4vLyAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuLy8gICAgIH0pXG4vLyAgICB9KVxuXG4vLyAgICBjbG9zZVByb2plY3RNb2RhbC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKVxuLy8gICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuLy8gICAgIH0pXG4vLyAgICB9KVxuXG4vLyAgICBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbi8vICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm4gXG4vLyAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbi8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4vLyAgICB9XG5cbi8vICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbi8vICAgICBpZihtb2RhbCA9PSBudWxsKSByZXR1cm4gXG4vLyAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4vLyAgICB9XG4vLyB9KSgpIiwiaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gXCJ1dWlkXCJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCJcblxuIGV4cG9ydCBjb25zdCBQcm9qZWN0cyA9IChuYW1lLCBpZCA9IHV1aWR2NCgpKSA9PiB7XG4gICAgbGV0IHRvZG9zID0gW11cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgIGlkLFxuICAgICAgICB0b2RvcyxcbiAgICAgICAgc2V0UHJvamVjdE5hbWUodmFsdWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRvZG8odGFza3MsZGF0ZSkge1xuICAgICAgICAgICAgdG9kb3MudGFzayA9PSB0YXNrc1xuICAgICAgICAgICAgdG9kb3MuZGF0ZSA9PSBkYXRlXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFRhc2sodGFzayxkYXRlKSB7XG4gICAgICAgICAgICAvLyBpZih0b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmdldFByb2plY3ROYW1lKCkgPT09IHRhc2spKSByZXR1cm5cbiAgICAgICAgICAgICAgcmV0dXJuIHRvZG9zLnB1c2goVGFzayh0YXNrLGRhdGUpKVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVUYXNrKHRhcmdldCl7XG4gICAgICAgICAgICBjb25zdCBncmFiVGFzayA9IHRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gdGFyZ2V0KVxuICAgICAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YoZ3JhYlRhc2spLDEpXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRUb2RvKG5ld1Rhc2ssbmV3RGF0ZSkge1xuICAgICAgICAgICAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvLnRhc2sgPSBuZXdUYXNrLFxuICAgICAgICAgICAgICAgIHRvZG8uZHVlZGF0ZSA9IG5ld0RhdGVcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgICAgICAgICAgIC8vIGlmKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRvZG8uaWQgPSBpZFxuICAgICAgICAgICAgICAgIC8vICAgICB0b2RvLnRhc2sgPSBuZXdUYXNrXG4gICAgICAgICAgICAgICAgLy8gICAgIHRvZG8uZHVlZGF0ZSA9IG5ld0RhdGVcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRvZG9cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCB1c2VyMSA9IFByb2plY3RzKCdOZXcgUHJvamVjdCcpXG51c2VyMS5hZGRUYXNrKCdDcmVhdGUnLCcxMS8yMi8yMDIyJylcbi8vIHVzZXIxLmVkaXRUb2RvKCdjcmF0ZScsJzEvMi8yMDIyJylcbmNvbnNvbGUubG9nKHVzZXIxKVxuIiwiY29uc3QgcHVic3ViID0gKCgpID0+IHtcbiAgICBsZXQgX3B1YnN1YiA9IHt9O1xuXG4gICAgLy9zdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KF9wdWJzdWJbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9wdWJzdWJbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgICB9O1xuXG4gICAgLy91bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9wdWJzdWJbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX3B1YnN1YltldmVudE5hbWVdLnNwbGljZSgoX3B1YnN1YltldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcblxuICAgIH1cblxuICAgIC8vcHVibGlzaCBldmVudCB3aXRoIGRhdGFcbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgLi4uZGF0YSkge1xuICAgICAgICBpZighQXJyYXkuaXNBcnJheShfcHVic3ViW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBfcHVic3ViW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgfVxuXG4gICAgIC8vZGVidWdcbiAgICAgZnVuY3Rpb24gdmlld0V2ZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coX3B1YnN1Yik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICB1bnN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgdmlld0V2ZW50c1xuICAgIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBwdWJzdWIiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiXG5leHBvcnQgY29uc3QgVGFzayA9ICh0YXNrLGR1ZWRhdGUsIGlkID0gdXVpZHY0KCkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBkdWVkYXRlLFxuICAgICAgICBpZCxcbiAgICAgICAgLy8gaWQ6dXVpZHY0KCksXG5cbiAgICAgICAgZ2V0VGFzaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9LFxuICAgICAgICBnZXREYXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIGR1ZWRhdGU7XG4gICAgICAgIH0sXG5cbiAgICB9XG59XG5cblxubGV0IHVzZXIxID0gVGFzaygndGFzaycsJ2RhdGUnKVxuY29uc29sZS5sb2codXNlcjEpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4vbW9kdWxlcy9wdWJzdWJcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9Ub2RvQ29udHJvbGxlclwiO1xuaW1wb3J0IHtwcm9qZWN0Rm9ybSwgcHJvamVjdHMgfSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUvc3R5bGVzLmNzcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbGQtcHJvamVjdHMnKTtcblxuICAgIHByb2plY3RzLnJlbmRlclRlbXAobmF2KVxufSlcblxuLy8gaW1wb3J0IHsgVG9kb0ZhY3RvcnksIFByb2plY3RGYWN0b3J5LCBQcm9qZWN0TWFuZ2VyIH0gZnJvbSBcIi4vbW9kdWxlcy90b2RvXCI7XG4vLyBpbXBvcnQge3RvZG99IGZyb20gJy4vbW9kdWxlcy90YXNrJ1xuLy8gaW1wb3J0IHsgVUkgfSAgZnJvbSAnLi9tb2R1bGVzL1VJJ1xuLy8gLy8gaW1wb3J0IHsgcHJvamVjdEZvcm0gfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3Rmb3JtXCI7XG4vLyBpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuLy8gaW1wb3J0IHsgdGFza2Zvcm0gfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tmb3JtXCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS9zdHlsZXMuY3NzJ1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLy8gICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob2xkLXByb2plY3RzJylcbi8vICAgICByZW5kZXIgdGVtcGxhdGUgZm9yIHByb2plY3RzXG4vLyAgICAgcHJvamVjdHMucmVuZGVyVGVtcChhc2lkZSlcbi8vICAgICB0b2RvLnJlbmRlclRlbXAoYXNpZGUyKVxuLy8gfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=