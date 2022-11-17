/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\naside {\n    flex-direction: column;\n}\n\n\n.add-project-popup {\n    display: none;\n}\n/* input.AddProject {\n    display: none;\n} */", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;AACjB;AACA;;GAEG","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\naside {\n    flex-direction: column;\n}\n\n\n.add-project-popup {\n    display: none;\n}\n/* input.AddProject {\n    display: none;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/modules/ProjectManager.js":
/*!***************************************!*\
  !*** ./src/modules/ProjectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectName": () => (/* binding */ ProjectName)
/* harmony export */ });
// import { toDate, isToday, isThisWeek, subDays } from "date-fns";
// import { Todo } from "./TodoManager";
// export class ProjectName {
//     constructor(name) {
//         this.name = name;
//         this.task = []
//     }
//     setName(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
//     getAllTasks() {
//         return this.task
//     }
//     getSingleTask(taskName) {
//         return this.task.find((task) => task === taskName)
//     }
//     contains(taskName) {
//         return this.task.some((task) => task === taskName)
//     }
//     addTask(newTask) {
//         if(this.task.find((task) => task === newTask)) 
//         return 
//         this.task.push(newTask)
//     }
//     deleteTask(taskName) {
//          const grabTask = this.task.find((tasks) => tasks === taskName)
//          this.task.splice(this.task.indexOf(grabTask), 1)
//     }
//     getTodayTask() {
//         this.task.filter((task) => {
//             const updateToday = new Date(task)
//             return isToday(toDate(updateToday))
//         })
//     }
//     getUpcoming() {
//         this.task.filter((task) => {
//             const updateUpcoming = new Date(task)
//             return isThisWeek(subDays(toDate(updateUpcoming)), 1)
//         })
//     }
// }

const ProjectName = (name) => {
    let task = []
    return {
        name:name,
        task,
        getName() {
            return name
        },
        setName(name) {
            name = name
        },
        addTask(newTask) {
            if(task.find((tasks) => tasks === newTask))
            return
            task.push(newTask)
        },
        getTask() {
            return task
        },
        // contains(taskName) {
        //     return task.some((tasks) => tasks === taskName)
        // },
        getSingleTask(taskName) {
            return task.find((tasks) => tasks.task === taskName)
        },
        // addTask(newTask) {
        //     if(task.find((tasks) => tasks === newTask))
        //     return
        //     task.push(newTask)
        // },
        deleteTask(targetTask) {
            const grabTask = task.find((tasks) => tasks === targetTask)
            return task.splice(task.indexOf(grabTask), 1)
        },
        addDate(date) {
            return task.push(date)
        }
        // getTodayTask() {
        //     task.filter((tasks) => {
        //         const updateToday = new Date(tasks)
        //         return isToday(toDate(updateToday))
        //     })
        // },
        // getUpcomingTask() {
        //     task.filter((tasks) => {
        //         const updateUpcoming = new Date(tasks)
        //         return isThisWeek(subDays(toDate(updateUpcoming)), 1)
        //     })
        // }

    }
}

// let user1 = ProjectName('Console')
// user1.addTask('Create')
// user1.addDate('11/22/2022')
// console.log(user1)

// let user2 = ProjectName('Log')
// user2.addTask('DUMN')
// user2.addDate('11/12/2022')

// console.log(user2)





/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ (() => {

// import {Todo}  from "./TodoManager";
// import  {ProjectName}  from "./ProjectManager";
// import { isToday, subDays, isThisWeek, toDate } from "date-fns";

// export class User {
//     constructor() {
//         this.projects = []
//         this.projects.push(new ProjectName('Today'));
//         this.projects.push(new ProjectName('Upcoming'));

//     }
//     getProjects() {
//        return this.projects
//     }
//     getProject(project) {
//         return this.projects.find((projects) => projects === project)
//     }
//     setProjects(projects) {
//         this.projects = projects
//     }
//     addProject(newProject) {
//        if (this.projects.find((project) => project === newProject))
//         return 
//         this.projects.push(newProject)
//     }
//     deleteProject(targetDelete) {
//         grabbing the project
//         const grabProject = this.projects.find((project) => project.name === targetDelete.name)
//         grabbing whatever project that you are
//         this.projects.splice(this.projects.indexOf(grabProject), 1)
//     }
//     getToday() {
//         this.getProject('Today').task = []
//         this.projects.forEach((project) => {
//           if(project === 'Today' || project === 'Upcoming')
//           return 
//           const updateToday = project.getTodayTask()
//           updateToday.forEach((task) => {
//             const todayTask = `${task.getName()}` `${project.getName()}`
//             this.getProject('Today').addTask(new Todo(todayTask, task.getDate()))
//         })

//         })
//     }
//     getUpcomingTask() {
//         this.getProject('Upcoming').task = []
//         this.projects.forEach((project) => {
//             if(project === 'Today' || project === 'Upcoming')
//             return
//             const grabUpcoming = project.getUpcoming()
//             grabUpcoming.forEach((task) => {
//                 const upcomingTask = `${task.getName()}` `${project.getName()}`
//                 this.getProject('Upcoming').addTask(new Todo(upcomingTask, task.getDate()))
//             })
//         })
//     }
// }

// export const ProjectManager = () => {
//     const projects = []
//     projects.push(ProjectName('Today'))
//     projects.push(ProjectName('Upcoming'))
//     return {
//         projects,
//         getProjects() {
//             return projects
//         },
//         getSingleProject(projectName) {
//             return projects.find((project) => project.name === projectName || project === projectName)
//         },
//         setProjects(projectName) {
//             projects = projectName
//         },
//         addProject(newProject) {
//             if(projects.find((project) => project === newProject))
//             return
//             projects.push(newProject)
//         },
//         deleteProject(targetProject) {
//             const grabProjectName = projects.find((project) => project === targetProject)
//             projects.splice(projects.indexOf(grabProjectName), 1)
//             },
//             pushTodayTasks() {
//                  projects.find((project) => project.name === 'Today')
//                  return this.getSingleProject('Today').task.push(Todo('Create','11/22/2022'))
//                 return


//             },
//         grabToday() {
//             const grabToday = projects.find((project) => project.name === 'Upcoming')
//             return this.getSingleProject('Upcoming').task
//         }
//            projects.getProjects('Today')
//            projects.forEach((project) => {
//             if(project.getName() === 'Today' || project.getName() === 'Upcoming')
//             return

//             const today = project.getTodayTask()
//             today.forEach((task) => {
//                 const todayTask = `${task.getName()}  ${project.getName()}`
//                 projects.getSingleProject('Today').addTask(new Todo(taskName, task.getDate()))

//             })
                
//             });
//         },
//         grabUpcoming() {

//         },

//      }
//  }



// console.log(user1.pushTodayTasks())
// console.log(user1.grabToday())
// console.log(user1.getSingleProject('Today'))

/***/ }),

/***/ "./src/modules/TodoManager.js":
/*!************************************!*\
  !*** ./src/modules/TodoManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
//  const Todo = (task,description,duedate,project) => {
//     let todoTask = task;
//     let todoDescription = description;
//     let todoDuedate = duedate;
//     let todoProject = project;

//     let todos = {
//         task:task,
//         description:description,
//         duedate:duedate,
//         project:project
//     }

//     return {
//         get task() {
//             return todoTask
//         },
//         set task(task) {
//             todoTask = task;
//         },
    
//         get description() {
//             return todoDescription
//         },
//         set description(description) {
//             todoDescription = description
//         },
//         get duedate() {
//             return todoDuedate
//         },
//         set duedate(duedate) {
//             todoDuedate = duedate
//         },
//         get project() {
//             return todoProject
//         },
//         set project(project) {
//             todoProject = project
//         },
//         todos
//     }
// }


// console.log(user1.project)


// let user2 = Todo('task','task','task','task')
// user2.task = 'Play Game'
// user2.duedate = '11/22/2022'
// console.log(user2)

// export  class Todo {
//     constructor(task,duedate = 'DueDate?') {
//         this.task = task;
//         this.duedate = duedate;
//     }
//     setTaskName(task) {
//         this.task = task
//     }
//     getTaskName() {
//         return this.task
//     }
//     getDate() {
//         return this.duedate
//     }
//     setDate(duedate) {
//         this.duedate = duedate
//     }
    // getDateFormatted() {
    //     const day = this.duedate.split('/')[0]
    //     const month = this.duedate.split('/')[1]
    //     const year = this.duedate.split('/')[2]
    //     return `${day}/${month}/${year}`
    // }
// }

// import { isDate } from "date-fns/esm"

const Todo = (task,duedate = 'DueDate?') => {
    return {
        task:task,
        duedate: duedate,
        setTask(task) {
            task = task
        },
        getTask() {
            return task
        },
        getDate() {
            return duedate;
        },
        setDate(duedate) {
            duedate = duedate
        },
        // getDateFormatted() {
        //     const day = duedate.split('/')[0]
        //     const month = duedate.split('/')[1]
        //     const year = duedate.split('/')[2]
        //     return `${day}/${month}/${year}`
        // }
        
    }
}

let user1 = Todo('Create','11/12/2022')


console.log(user1.getDate())








/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectManager */ "./src/modules/ProjectManager.js");
/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoManager */ "./src/modules/TodoManager.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Todo__WEBPACK_IMPORTED_MODULE_2__);




const UI = (() => {
   const projectBtn = document.getElementById('add-project')
   projectBtn.addEventListener('click', showInput)

   function showInput() {      
      projectBtn.style.display = 'none'
      const addInput = document.querySelector('.add-project-popup');
      addInput.style.display = 'block';
      addInput.style.flexDirection = 'column'
   }

   const todayBtn = document.getElementById('today')
   todayBtn.addEventListener('click', displayToday)

   function displayToday() {
      console.log('click')
      const main = document.querySelector('.main')
   }
   return {
   }
})();

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/ProjectManager.js/index.js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _modules_TodoManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TodoManager.js */ "./src/modules/TodoManager.js");
/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Todo.js */ "./src/modules/Todo.js");
/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_Todo_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlNTEzYjk3Y2NkN2U3MWIzMmJkMmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2Qyw2QkFBNkIsR0FBRyxXQUFXLDZCQUE2QixHQUFHLDBCQUEwQixvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLElBQUksU0FBUyx1RkFBdUYsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxNQUFNLE1BQU0sNEJBQTRCLDZCQUE2QixHQUFHLFdBQVcsNkJBQTZCLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsSUFBSSxxQkFBcUI7QUFDM2xCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLFlBQVksdUNBQXVDO0FBQ25ELFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzR0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksY0FBYztBQUMxQixZQUFZLHVDQUF1Qzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlLEtBQUssa0JBQWtCO0FBQzFFO0FBQ0EsWUFBWTs7QUFFWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlLEtBQUssa0JBQWtCO0FBQ2pGO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxpQkFBaUIsRUFBRSxrQkFBa0I7QUFDN0U7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjs7QUFFQSxZQUFZOztBQUVaO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixJQUFJLEdBQUcsTUFBTSxHQUFHLEtBQUs7QUFDMUM7QUFDQTs7QUFFQSxZQUFZLFNBQVM7O0FBRWQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUcrQztBQUNWO0FBQ0c7O0FBRWpDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7VUN4QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxRTtBQUNyQjtBQUNHO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9Ub2RvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmFzaWRlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuLmFkZC1wcm9qZWN0LXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogaW5wdXQuQWRkUHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7QUFDQTs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYXNpZGUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4uYWRkLXByb2plY3QtcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiBpbnB1dC5BZGRQcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbi8vIGltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9Ub2RvTWFuYWdlclwiO1xuLy8gZXhwb3J0IGNsYXNzIFByb2plY3ROYW1lIHtcbi8vICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4vLyAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyAgICAgICAgIHRoaXMudGFzayA9IFtdXG4vLyAgICAgfVxuLy8gICAgIHNldE5hbWUobmFtZSkge1xuLy8gICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4vLyAgICAgfVxuLy8gICAgIGdldE5hbWUoKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLm5hbWVcbi8vICAgICB9XG4vLyAgICAgZ2V0QWxsVGFza3MoKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLnRhc2tcbi8vICAgICB9XG4vLyAgICAgZ2V0U2luZ2xlVGFzayh0YXNrTmFtZSkge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy50YXNrLmZpbmQoKHRhc2spID0+IHRhc2sgPT09IHRhc2tOYW1lKVxuLy8gICAgIH1cbi8vICAgICBjb250YWlucyh0YXNrTmFtZSkge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy50YXNrLnNvbWUoKHRhc2spID0+IHRhc2sgPT09IHRhc2tOYW1lKVxuLy8gICAgIH1cbi8vICAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbi8vICAgICAgICAgaWYodGhpcy50YXNrLmZpbmQoKHRhc2spID0+IHRhc2sgPT09IG5ld1Rhc2spKSBcbi8vICAgICAgICAgcmV0dXJuIFxuLy8gICAgICAgICB0aGlzLnRhc2sucHVzaChuZXdUYXNrKVxuLy8gICAgIH1cbi8vICAgICBkZWxldGVUYXNrKHRhc2tOYW1lKSB7XG4vLyAgICAgICAgICBjb25zdCBncmFiVGFzayA9IHRoaXMudGFzay5maW5kKCh0YXNrcykgPT4gdGFza3MgPT09IHRhc2tOYW1lKVxuLy8gICAgICAgICAgdGhpcy50YXNrLnNwbGljZSh0aGlzLnRhc2suaW5kZXhPZihncmFiVGFzayksIDEpXG4vLyAgICAgfVxuLy8gICAgIGdldFRvZGF5VGFzaygpIHtcbi8vICAgICAgICAgdGhpcy50YXNrLmZpbHRlcigodGFzaykgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgdXBkYXRlVG9kYXkgPSBuZXcgRGF0ZSh0YXNrKVxuLy8gICAgICAgICAgICAgcmV0dXJuIGlzVG9kYXkodG9EYXRlKHVwZGF0ZVRvZGF5KSlcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vLyAgICAgZ2V0VXBjb21pbmcoKSB7XG4vLyAgICAgICAgIHRoaXMudGFzay5maWx0ZXIoKHRhc2spID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVVwY29taW5nID0gbmV3IERhdGUodGFzaylcbi8vICAgICAgICAgICAgIHJldHVybiBpc1RoaXNXZWVrKHN1YkRheXModG9EYXRlKHVwZGF0ZVVwY29taW5nKSksIDEpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfVxuXG5leHBvcnQgY29uc3QgUHJvamVjdE5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGxldCB0YXNrID0gW11cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIGdldE5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZVxuICAgICAgICB9LFxuICAgICAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICAgICAgaWYodGFzay5maW5kKCh0YXNrcykgPT4gdGFza3MgPT09IG5ld1Rhc2spKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB0YXNrLnB1c2gobmV3VGFzaylcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGFzaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGNvbnRhaW5zKHRhc2tOYW1lKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gdGFzay5zb21lKCh0YXNrcykgPT4gdGFza3MgPT09IHRhc2tOYW1lKVxuICAgICAgICAvLyB9LFxuICAgICAgICBnZXRTaW5nbGVUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFzay5maW5kKCh0YXNrcykgPT4gdGFza3MudGFzayA9PT0gdGFza05hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICAvLyAgICAgaWYodGFzay5maW5kKCh0YXNrcykgPT4gdGFza3MgPT09IG5ld1Rhc2spKVxuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vICAgICB0YXNrLnB1c2gobmV3VGFzaylcbiAgICAgICAgLy8gfSxcbiAgICAgICAgZGVsZXRlVGFzayh0YXJnZXRUYXNrKSB7XG4gICAgICAgICAgICBjb25zdCBncmFiVGFzayA9IHRhc2suZmluZCgodGFza3MpID0+IHRhc2tzID09PSB0YXJnZXRUYXNrKVxuICAgICAgICAgICAgcmV0dXJuIHRhc2suc3BsaWNlKHRhc2suaW5kZXhPZihncmFiVGFzayksIDEpXG4gICAgICAgIH0sXG4gICAgICAgIGFkZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2sucHVzaChkYXRlKVxuICAgICAgICB9XG4gICAgICAgIC8vIGdldFRvZGF5VGFzaygpIHtcbiAgICAgICAgLy8gICAgIHRhc2suZmlsdGVyKCh0YXNrcykgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHVwZGF0ZVRvZGF5ID0gbmV3IERhdGUodGFza3MpXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGlzVG9kYXkodG9EYXRlKHVwZGF0ZVRvZGF5KSlcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGdldFVwY29taW5nVGFzaygpIHtcbiAgICAgICAgLy8gICAgIHRhc2suZmlsdGVyKCh0YXNrcykgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHVwZGF0ZVVwY29taW5nID0gbmV3IERhdGUodGFza3MpXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGlzVGhpc1dlZWsoc3ViRGF5cyh0b0RhdGUodXBkYXRlVXBjb21pbmcpKSwgMSlcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cblxuICAgIH1cbn1cblxuLy8gbGV0IHVzZXIxID0gUHJvamVjdE5hbWUoJ0NvbnNvbGUnKVxuLy8gdXNlcjEuYWRkVGFzaygnQ3JlYXRlJylcbi8vIHVzZXIxLmFkZERhdGUoJzExLzIyLzIwMjInKVxuLy8gY29uc29sZS5sb2codXNlcjEpXG5cbi8vIGxldCB1c2VyMiA9IFByb2plY3ROYW1lKCdMb2cnKVxuLy8gdXNlcjIuYWRkVGFzaygnRFVNTicpXG4vLyB1c2VyMi5hZGREYXRlKCcxMS8xMi8yMDIyJylcblxuLy8gY29uc29sZS5sb2codXNlcjIpXG5cblxuXG4iLCIvLyBpbXBvcnQge1RvZG99ICBmcm9tIFwiLi9Ub2RvTWFuYWdlclwiO1xuLy8gaW1wb3J0ICB7UHJvamVjdE5hbWV9ICBmcm9tIFwiLi9Qcm9qZWN0TWFuYWdlclwiO1xuLy8gaW1wb3J0IHsgaXNUb2RheSwgc3ViRGF5cywgaXNUaGlzV2VlaywgdG9EYXRlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbi8vIGV4cG9ydCBjbGFzcyBVc2VyIHtcbi8vICAgICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4vLyAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdE5hbWUoJ1RvZGF5JykpO1xuLy8gICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3ROYW1lKCdVcGNvbWluZycpKTtcblxuLy8gICAgIH1cbi8vICAgICBnZXRQcm9qZWN0cygpIHtcbi8vICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuLy8gICAgIH1cbi8vICAgICBnZXRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdHMpID0+IHByb2plY3RzID09PSBwcm9qZWN0KVxuLy8gICAgIH1cbi8vICAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuLy8gICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcbi8vICAgICB9XG4vLyAgICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4vLyAgICAgICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdCA9PT0gbmV3UHJvamVjdCkpXG4vLyAgICAgICAgIHJldHVybiBcbi8vICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4vLyAgICAgfVxuLy8gICAgIGRlbGV0ZVByb2plY3QodGFyZ2V0RGVsZXRlKSB7XG4vLyAgICAgICAgIGdyYWJiaW5nIHRoZSBwcm9qZWN0XG4vLyAgICAgICAgIGNvbnN0IGdyYWJQcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHRhcmdldERlbGV0ZS5uYW1lKVxuLy8gICAgICAgICBncmFiYmluZyB3aGF0ZXZlciBwcm9qZWN0IHRoYXQgeW91IGFyZVxuLy8gICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YoZ3JhYlByb2plY3QpLCAxKVxuLy8gICAgIH1cbi8vICAgICBnZXRUb2RheSgpIHtcbi8vICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUb2RheScpLnRhc2sgPSBbXVxuLy8gICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbi8vICAgICAgICAgICBpZihwcm9qZWN0ID09PSAnVG9kYXknIHx8IHByb2plY3QgPT09ICdVcGNvbWluZycpXG4vLyAgICAgICAgICAgcmV0dXJuIFxuLy8gICAgICAgICAgIGNvbnN0IHVwZGF0ZVRvZGF5ID0gcHJvamVjdC5nZXRUb2RheVRhc2soKVxuLy8gICAgICAgICAgIHVwZGF0ZVRvZGF5LmZvckVhY2goKHRhc2spID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHRvZGF5VGFzayA9IGAke3Rhc2suZ2V0TmFtZSgpfWAgYCR7cHJvamVjdC5nZXROYW1lKCl9YFxuLy8gICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUb2RheScpLmFkZFRhc2sobmV3IFRvZG8odG9kYXlUYXNrLCB0YXNrLmdldERhdGUoKSkpXG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vLyAgICAgZ2V0VXBjb21pbmdUYXNrKCkge1xuLy8gICAgICAgICB0aGlzLmdldFByb2plY3QoJ1VwY29taW5nJykudGFzayA9IFtdXG4vLyAgICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuLy8gICAgICAgICAgICAgaWYocHJvamVjdCA9PT0gJ1RvZGF5JyB8fCBwcm9qZWN0ID09PSAnVXBjb21pbmcnKVxuLy8gICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgICAgICBjb25zdCBncmFiVXBjb21pbmcgPSBwcm9qZWN0LmdldFVwY29taW5nKClcbi8vICAgICAgICAgICAgIGdyYWJVcGNvbWluZy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgdXBjb21pbmdUYXNrID0gYCR7dGFzay5nZXROYW1lKCl9YCBgJHtwcm9qZWN0LmdldE5hbWUoKX1gXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdVcGNvbWluZycpLmFkZFRhc2sobmV3IFRvZG8odXBjb21pbmdUYXNrLCB0YXNrLmdldERhdGUoKSkpXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IFByb2plY3RNYW5hZ2VyID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHByb2plY3RzID0gW11cbi8vICAgICBwcm9qZWN0cy5wdXNoKFByb2plY3ROYW1lKCdUb2RheScpKVxuLy8gICAgIHByb2plY3RzLnB1c2goUHJvamVjdE5hbWUoJ1VwY29taW5nJykpXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvamVjdHMsXG4vLyAgICAgICAgIGdldFByb2plY3RzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGdldFNpbmdsZVByb2plY3QocHJvamVjdE5hbWUpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lIHx8IHByb2plY3QgPT09IHByb2plY3ROYW1lKVxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBzZXRQcm9qZWN0cyhwcm9qZWN0TmFtZSkge1xuLy8gICAgICAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0TmFtZVxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbi8vICAgICAgICAgICAgIGlmKHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QgPT09IG5ld1Byb2plY3QpKVxuLy8gICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGRlbGV0ZVByb2plY3QodGFyZ2V0UHJvamVjdCkge1xuLy8gICAgICAgICAgICAgY29uc3QgZ3JhYlByb2plY3ROYW1lID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdCA9PT0gdGFyZ2V0UHJvamVjdClcbi8vICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKGdyYWJQcm9qZWN0TmFtZSksIDEpXG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgcHVzaFRvZGF5VGFza3MoKSB7XG4vLyAgICAgICAgICAgICAgICAgIHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gJ1RvZGF5Jylcbi8vICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2luZ2xlUHJvamVjdCgnVG9kYXknKS50YXNrLnB1c2goVG9kbygnQ3JlYXRlJywnMTEvMjIvMjAyMicpKVxuLy8gICAgICAgICAgICAgICAgIHJldHVyblxuXG5cbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgIGdyYWJUb2RheSgpIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGdyYWJUb2RheSA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gJ1VwY29taW5nJylcbi8vICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNpbmdsZVByb2plY3QoJ1VwY29taW5nJykudGFza1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgICAgIHByb2plY3RzLmdldFByb2plY3RzKCdUb2RheScpXG4vLyAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbi8vICAgICAgICAgICAgIGlmKHByb2plY3QuZ2V0TmFtZSgpID09PSAnVG9kYXknIHx8IHByb2plY3QuZ2V0TmFtZSgpID09PSAnVXBjb21pbmcnKVxuLy8gICAgICAgICAgICAgcmV0dXJuXG5cbi8vICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gcHJvamVjdC5nZXRUb2RheVRhc2soKVxuLy8gICAgICAgICAgICAgdG9kYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5VGFzayA9IGAke3Rhc2suZ2V0TmFtZSgpfSAgJHtwcm9qZWN0LmdldE5hbWUoKX1gXG4vLyAgICAgICAgICAgICAgICAgcHJvamVjdHMuZ2V0U2luZ2xlUHJvamVjdCgnVG9kYXknKS5hZGRUYXNrKG5ldyBUb2RvKHRhc2tOYW1lLCB0YXNrLmdldERhdGUoKSkpXG5cbi8vICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgZ3JhYlVwY29taW5nKCkge1xuXG4vLyAgICAgICAgIH0sXG5cbi8vICAgICAgfVxuLy8gIH1cblxuXG5cbi8vIGNvbnNvbGUubG9nKHVzZXIxLnB1c2hUb2RheVRhc2tzKCkpXG4vLyBjb25zb2xlLmxvZyh1c2VyMS5ncmFiVG9kYXkoKSlcbi8vIGNvbnNvbGUubG9nKHVzZXIxLmdldFNpbmdsZVByb2plY3QoJ1RvZGF5JykpIiwiLy8gIGNvbnN0IFRvZG8gPSAodGFzayxkZXNjcmlwdGlvbixkdWVkYXRlLHByb2plY3QpID0+IHtcbi8vICAgICBsZXQgdG9kb1Rhc2sgPSB0YXNrO1xuLy8gICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbi8vICAgICBsZXQgdG9kb0R1ZWRhdGUgPSBkdWVkYXRlO1xuLy8gICAgIGxldCB0b2RvUHJvamVjdCA9IHByb2plY3Q7XG5cbi8vICAgICBsZXQgdG9kb3MgPSB7XG4vLyAgICAgICAgIHRhc2s6dGFzayxcbi8vICAgICAgICAgZGVzY3JpcHRpb246ZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGR1ZWRhdGU6ZHVlZGF0ZSxcbi8vICAgICAgICAgcHJvamVjdDpwcm9qZWN0XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZ2V0IHRhc2soKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gdG9kb1Rhc2tcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgc2V0IHRhc2sodGFzaykge1xuLy8gICAgICAgICAgICAgdG9kb1Rhc2sgPSB0YXNrO1xuLy8gICAgICAgICB9LFxuICAgIFxuLy8gICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gdG9kb0Rlc2NyaXB0aW9uXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuLy8gICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgZ2V0IGR1ZWRhdGUoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gdG9kb0R1ZWRhdGVcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgc2V0IGR1ZWRhdGUoZHVlZGF0ZSkge1xuLy8gICAgICAgICAgICAgdG9kb0R1ZWRhdGUgPSBkdWVkYXRlXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGdldCBwcm9qZWN0KCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHRvZG9Qcm9qZWN0XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHNldCBwcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgICAgICAgIHRvZG9Qcm9qZWN0ID0gcHJvamVjdFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB0b2Rvc1xuLy8gICAgIH1cbi8vIH1cblxuXG4vLyBjb25zb2xlLmxvZyh1c2VyMS5wcm9qZWN0KVxuXG5cbi8vIGxldCB1c2VyMiA9IFRvZG8oJ3Rhc2snLCd0YXNrJywndGFzaycsJ3Rhc2snKVxuLy8gdXNlcjIudGFzayA9ICdQbGF5IEdhbWUnXG4vLyB1c2VyMi5kdWVkYXRlID0gJzExLzIyLzIwMjInXG4vLyBjb25zb2xlLmxvZyh1c2VyMilcblxuLy8gZXhwb3J0ICBjbGFzcyBUb2RvIHtcbi8vICAgICBjb25zdHJ1Y3Rvcih0YXNrLGR1ZWRhdGUgPSAnRHVlRGF0ZT8nKSB7XG4vLyAgICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4vLyAgICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4vLyAgICAgfVxuLy8gICAgIHNldFRhc2tOYW1lKHRhc2spIHtcbi8vICAgICAgICAgdGhpcy50YXNrID0gdGFza1xuLy8gICAgIH1cbi8vICAgICBnZXRUYXNrTmFtZSgpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMudGFza1xuLy8gICAgIH1cbi8vICAgICBnZXREYXRlKCkge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5kdWVkYXRlXG4vLyAgICAgfVxuLy8gICAgIHNldERhdGUoZHVlZGF0ZSkge1xuLy8gICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlXG4vLyAgICAgfVxuICAgIC8vIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgLy8gICAgIGNvbnN0IGRheSA9IHRoaXMuZHVlZGF0ZS5zcGxpdCgnLycpWzBdXG4gICAgLy8gICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVkYXRlLnNwbGl0KCcvJylbMV1cbiAgICAvLyAgICAgY29uc3QgeWVhciA9IHRoaXMuZHVlZGF0ZS5zcGxpdCgnLycpWzJdXG4gICAgLy8gICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gXG4gICAgLy8gfVxuLy8gfVxuXG4vLyBpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiZGF0ZS1mbnMvZXNtXCJcblxuZXhwb3J0IGNvbnN0IFRvZG8gPSAodGFzayxkdWVkYXRlID0gJ0R1ZURhdGU/JykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2s6dGFzayxcbiAgICAgICAgZHVlZGF0ZTogZHVlZGF0ZSxcbiAgICAgICAgc2V0VGFzayh0YXNrKSB7XG4gICAgICAgICAgICB0YXNrID0gdGFza1xuICAgICAgICB9LFxuICAgICAgICBnZXRUYXNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBkdWVkYXRlO1xuICAgICAgICB9LFxuICAgICAgICBzZXREYXRlKGR1ZWRhdGUpIHtcbiAgICAgICAgICAgIGR1ZWRhdGUgPSBkdWVkYXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBkYXkgPSBkdWVkYXRlLnNwbGl0KCcvJylbMF1cbiAgICAgICAgLy8gICAgIGNvbnN0IG1vbnRoID0gZHVlZGF0ZS5zcGxpdCgnLycpWzFdXG4gICAgICAgIC8vICAgICBjb25zdCB5ZWFyID0gZHVlZGF0ZS5zcGxpdCgnLycpWzJdXG4gICAgICAgIC8vICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YFxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH1cbn1cblxubGV0IHVzZXIxID0gVG9kbygnQ3JlYXRlJywnMTEvMTIvMjAyMicpXG5cblxuY29uc29sZS5sb2codXNlcjEuZ2V0RGF0ZSgpKVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgUHJvamVjdE5hbWUgfSBmcm9tIFwiLi9Qcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL1RvZG9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBQcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL1RvZG9cIjtcblxuZXhwb3J0IGNvbnN0IFVJID0gKCgpID0+IHtcbiAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKVxuICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dJbnB1dClcblxuICAgZnVuY3Rpb24gc2hvd0lucHV0KCkgeyAgICAgIFxuICAgICAgcHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBjb25zdCBhZGRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpO1xuICAgICAgYWRkSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBhZGRJbnB1dC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbidcbiAgIH1cblxuICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKVxuICAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VG9kYXkpXG5cbiAgIGZ1bmN0aW9uIGRpc3BsYXlUb2RheSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpXG4gICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgfVxuICAgcmV0dXJuIHtcbiAgIH1cbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtQcm9qZWN0TmFtZX0gIGZyb20gXCIuL21vZHVsZXMvUHJvamVjdE1hbmFnZXIuanMvaW5kZXguanMuanNcIjtcbmltcG9ydCAge1RvZG99ICBmcm9tIFwiLi9tb2R1bGVzL1RvZG9NYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL21vZHVsZXMvVG9kby5qc1wiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXkuanNcIjtcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==