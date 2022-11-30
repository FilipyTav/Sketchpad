/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/sketchp.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/sketchp.css ***!
  \**********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: white;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\n/* Navbar starts here */\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n}\n\n.btn {\n    background: rgb(38, 148, 211);\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n\n    min-height: 100%;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n}\n\n.header .close {\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: cadetblue;\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/sketchp.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA,uBAAuB;;AAEvB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;;IAE7B,kBAAkB;IAClB,QAAQ;IACR,MAAM;;IAEN,gBAAgB;;IAEhB,YAAY;;IAEZ,sCAAsC;;IAEtC,gBAAgB;;IAEhB,aAAa;IACb,wBAAwB;IACxB,mBAAmB;;IAEnB,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,oBAAoB;;IAEpB,eAAe;;IAEf,yBAAyB;IACzB,yCAAyC;IACzC;wCACoC;;IAEpC,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;IACpC,YAAY;;IAEZ,kDAAkD;AACtD;;AAEA;IACI,8BAA8B;AAClC;;AAEA,qBAAqB;;AAErB,uBAAuB;;AAEvB;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,qCAAqC;IACrC,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;IACxB,SAAS;AACb;;AAEA,qBAAqB;;AAErB,6BAA6B;;AAE7B;IACI,aAAa;IACb,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,2BAA2B;;AAE3B;IACI,qBAAqB;AACzB;;AAEA;IACI;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,6BAA6B;;QAE7B,8DAA8D;IAClE;IACA;QACI,gCAAgC;;QAEhC,oEAAoE;IACxE;IACA;QACI,mCAAmC;;QAEnC;wCACgC;IACpC;IACA;QACI,6BAA6B;;QAE7B,8DAA8D;IAClE;AACJ","sourcesContent":[":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: white;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\n/* Navbar starts here */\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n}\n\n.btn {\n    background: rgb(38, 148, 211);\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n\n    min-height: 100%;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n}\n\n.header .close {\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: cadetblue;\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n"],"sourceRoot":""}]);
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/sketchp.css":
/*!********************************!*\
  !*** ./src/styles/sketchp.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sketchp_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sketchp.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/sketchp.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sketchp_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sketchp_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sketchp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sketchp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/Canvas.js":
/*!**************************!*\
  !*** ./src/js/Canvas.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _DOM_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_el */ "./src/js/DOM_el.js");


const Canvas = (function () {
    const info = () => {
        const canv_rect = _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.getBoundingClientRect();

        const height = canv_rect.height;
        const width = canv_rect.width;

        const style = window.getComputedStyle
            ? getComputedStyle(_DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas, null)
            : _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.currentStyle;

        return {
            height,
            width,
            style,
        };
    };

    // Changes the size of each pixel according to the screen size
    const adapt_pixels = (element, { height, width, style }) => {
        const items_per_column = _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.sizing_output.value;

        const adapt = (el) => {
            el.setAttribute(
                "style",
                `height: ${
                    (height - parseInt(style.borderTopWidth) * 2) /
                    items_per_column
                }px;
             width: ${
                 (width - parseInt(style.borderLeftWidth) * 2) /
                 items_per_column
             }px`,
            );
        };

        element
            ? adapt(element)
            : _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.grid_items().forEach((item) => adapt(item));
    };

    // Creates a canvas with (num) squares divs
    const generate = (num) => {
        const items_per_column = Math.sqrt(num);

        const details = info();

        // Creates divs based on the argument number
        for (let i = 0; i < num; i++) {
            const grid_item = _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.new_el("div");

            grid_item.classList.toggle("grid_item");
            adapt_pixels(grid_item, details);

            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.appendChild(grid_item);
        }

        // Changes the canvas size and grid layout based on the argument number
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.setAttribute(
            "style",
            `grid-template-columns: repeat(${items_per_column}, 1fr)`,
        );

        draw();
    };

    // Attach event listeners and change the style of each div inside the canvas
    const draw = () => {
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.grid_items().forEach((g_item) => {
            g_item.addEventListener("mouseover", change_color);
        });
    };

    // Removes all children from a parent
    const purge_all_children = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    // Changes the color of the divs by adding a class to it
    const change_color = (square) => {
        square.target.classList.toggle("shine");
    };

    // declare an array for all the timeOuts
    const resize_time_outs = {};

    // to clear them all, just call this
    const clear_resize_tm_ot = () => {
        for (const id in resize_time_outs) {
            clearTimeout(resize_time_outs[id]);
        }
    };

    // Resizes canvas based on user input
    const resize = () => {
        if (resize_time_outs["unique_id"]) clear_resize_tm_ot();

        // Changes the output to display the selected value
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.sizing_output.value = _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.sizing_input.value;

        const activate = () => {
            let squares_per_side = _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.sizing_input.value;

            switch (check_if_valid_number(squares_per_side, 1, 100)) {
                case true:
                    break;

                case false:
                    alert("Not possible");
                    return;
                default:
                    return "Problem with resize_canvas() function";
            }

            // Removes all pixels from the previous canvas
            switch (true) {
                case _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.contains(_DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.first_grid_item()):
                    purge_all_children(_DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas);
                    break;

                default:
                    return "Problem when resize_canvas() function";
            }

            squares_per_side = Number(squares_per_side);

            // Creates a new, resized canvas
            Canvas.generate(squares_per_side ** 2);
        };

        resize_time_outs["unique_id"] = setTimeout(() => {
            activate();
        }, 1000);
    };

    // Checks if the user input is a valid number based on min and max values
    const check_if_valid_number = (number, min, max) => {
        const num = Number(number);

        switch (true) {
            case isNaN(number):
                return false;

            case num > max:
                return false;

            case num < min:
                return false;

            case num >= min && num <= max:
                return true;

            default:
                return "Problem with check_if_valid_number() function";
        }
    };

    // Uhmm, it clears the canvas
    // by removing the class added to them when drawing
    const clear = () => {
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.grid_items().forEach((pixel) => pixel.classList.remove("shine"));
    };

    return { info, generate, clear, resize, adapt_pixels };
})();




/***/ }),

/***/ "./src/js/DOM_el.js":
/*!**************************!*\
  !*** ./src/js/DOM_el.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_el": () => (/* binding */ DOM_el)
/* harmony export */ });
const DOM_el = (function () {
    const canvas = document.querySelector(".canvas");

    const grid_items = () => {
        return Array.from(document.querySelectorAll(".grid_item"));
    };

    const first_grid_item = () => {
        return document.querySelector(".grid_item");
    };

    const clear_btn = document.querySelector(".clear");
    const sizing_input = document.querySelector(".sizing_input");
    const sizing_output = document.querySelector(".sizing_output");

    const new_el = (element) => {
        return document.createElement(element);
    };

    const options = (function () {
        const container = document.querySelector(".options");

        const items = container.querySelectorAll(".option");

        const open_btn = document.querySelector("button.open_options");
        const close_btn = container.querySelector("button.close");

        return {
            container,
            items,
            open_btn,
            close_btn,
        };
    })();

    return {
        canvas,
        grid_items,
        first_grid_item,
        clear_btn,
        sizing_input,
        sizing_output,
        new_el,
        options,
    };
})();




/***/ }),

/***/ "./src/js/Options.js":
/*!***************************!*\
  !*** ./src/js/Options.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Options": () => (/* binding */ Options)
/* harmony export */ });
/* harmony import */ var _DOM_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_el */ "./src/js/DOM_el.js");


const Options = (function () {
    const attach_listeners = (function () {
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.close_btn.addEventListener("click", (e) => {
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.container.classList.remove("active");
        });

        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.open_btn.addEventListener("click", (e) => {
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.container.classList.add("active");
        });
    })();

    return {};
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_sketchp_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/sketchp.css */ "./src/styles/sketchp.css");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _DOM_el__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM_el */ "./src/js/DOM_el.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Options */ "./src/js/Options.js");






// Adds functionality to the top buttons
const manage_top_buttons = () => {
    _DOM_el__WEBPACK_IMPORTED_MODULE_2__.DOM_el.clear_btn.addEventListener("click", _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.clear);
    _DOM_el__WEBPACK_IMPORTED_MODULE_2__.DOM_el.sizing_input.addEventListener("input", _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.resize);
};

const main = () => {
    // Create a 16x16 grid of divs inside the canvas when loading the page
    _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.generate(256);

    // Activate top buttons
    manage_top_buttons();
};

window.addEventListener(
    "resize",
    () => _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.adapt_pixels(null, _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.info()),
    true,
);

// As soon as the page fully loads calls the main function
window.addEventListener("load", main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZ0I7O0FBRWxDO0FBQ0E7QUFDQSxRQUFRLDhFQUF5QztBQUNqRCxZQUFZLDhFQUF5QztBQUNyRCxTQUFTOztBQUVULFFBQVEsNkVBQXdDO0FBQ2hELFlBQVksMkVBQXNDO0FBQ2xELFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFa0I7Ozs7Ozs7VUNoQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7O0FBRUc7QUFDQTtBQUNFOztBQUVwQztBQUNBO0FBQ0EsSUFBSSxzRUFBaUMsVUFBVSxpREFBWTtBQUMzRCxJQUFJLHlFQUFvQyxVQUFVLGtEQUFhO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFlOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsd0RBQW1CLE9BQU8sZ0RBQVc7QUFDL0M7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL3N0eWxlcy9za2V0Y2hwLmNzcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9zdHlsZXMvc2tldGNocC5jc3M/MTI4ZiIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL2pzL0RPTV9lbC5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY2xyX2RlZmF1bHQ6IHdoaXRlO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciBzdGFydHMgaGVyZSAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzOCwgMTQ4LCAyMTEpO1xcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAtNHB4IDAgMTBweCBibGFjaztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcblxcbiAgICBtYXgtd2lkdGg6IDA7XFxuXFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLm9wdGlvbnMuYWN0aXZlIHtcXG4gICAgbWF4LXdpZHRoOiAyMDB2dztcXG59XFxuXFxuLmhlYWRlciAub3Blbl9vcHRpb25zLFxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDVweCB3aGl0ZSk7XFxufVxcblxcbi5vcHRpb25zIC5vcHRpb24ge1xcbiAgICBtYXJnaW46IDAgMTV2dztcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgYm9yZGVyOiB2YXIoLS1jbHJfZGVmYXVsdCkgMC4xMjVyZW0gc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCB2YXIoLS1jbHJfZGVmYXVsdCksXFxuICAgICAgICAwIDAgMC41ZW0gMnB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gMTBweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxufVxcblxcbi5vcHRpb24ucmFpbmJvdyB7XFxuICAgIGFuaW1hdGlvbjogcmFpbmJvdyAycyBpbmZpbml0ZTtcXG59XFxuXFxuLyogTmF2YmFyIGVuZHMgaGVyZSAqL1xcblxcbi8qIENhbnZhcyBzdGFydHMgaGVyZSAqL1xcblxcbi5jYW52YXMge1xcbiAgICBoZWlnaHQ6IDkwdnc7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG59XFxuXFxuLmdyaWRfaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLyogQ2FudmFzIGVuZHMgaGVyZSAqL1xcblxcbi8qIFNpemluZyBpbnB1dCBzdGFydHMgaGVyZSAqL1xcblxcbi5zaXppbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4uc2l6aW5nIGxhYmVsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2l6aW5nIC5pbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NpemVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBTaXppbmcgaW5wdXQgZW5kcyBoZXJlICovXFxuXFxuLnNoaW5lIHtcXG4gICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgICAuY2FudmFzIHtcXG4gICAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgICAgIHdpZHRoOiA5MHZoO1xcbiAgICB9XFxuXFxuICAgIC5vcHRpb25zIC5vcHRpb24ge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwdnc7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByYWluYm93IHtcXG4gICAgMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IGJsdWV2aW9sZXQgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgYmx1ZXZpb2xldCwgMCAwIDAuNXJlbSAycHggYmx1ZXZpb2xldDtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJlYmVjY2FwdXJwbGUgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgcmViZWNjYXB1cnBsZSxcXG4gICAgICAgICAgICAwIDAgMC41cmVtIDJweCByZWJlY2NhcHVycGxlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NrZXRjaHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBLHVCQUF1Qjs7QUFFdkI7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZCQUE2Qjs7SUFFN0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNOztJQUVOLGdCQUFnQjs7SUFFaEIsWUFBWTs7SUFFWixzQ0FBc0M7O0lBRXRDLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7O0lBRW5CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjs7SUFFcEIsZUFBZTs7SUFFZix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDO3dDQUNvQzs7SUFFcEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7O0lBRVosa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBLHFCQUFxQjs7QUFFckIsdUJBQXVCOztBQUV2QjtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBLHFCQUFxQjs7QUFFckIsNkJBQTZCOztBQUU3QjtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUEsMkJBQTJCOztBQUUzQjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCOztRQUU3Qiw4REFBOEQ7SUFDbEU7SUFDQTtRQUNJLGdDQUFnQzs7UUFFaEMsb0VBQW9FO0lBQ3hFO0lBQ0E7UUFDSSxtQ0FBbUM7O1FBRW5DO3dDQUNnQztJQUNwQztJQUNBO1FBQ0ksNkJBQTZCOztRQUU3Qiw4REFBOEQ7SUFDbEU7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY2xyX2RlZmF1bHQ6IHdoaXRlO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciBzdGFydHMgaGVyZSAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzOCwgMTQ4LCAyMTEpO1xcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAtNHB4IDAgMTBweCBibGFjaztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcblxcbiAgICBtYXgtd2lkdGg6IDA7XFxuXFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLm9wdGlvbnMuYWN0aXZlIHtcXG4gICAgbWF4LXdpZHRoOiAyMDB2dztcXG59XFxuXFxuLmhlYWRlciAub3Blbl9vcHRpb25zLFxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDVweCB3aGl0ZSk7XFxufVxcblxcbi5vcHRpb25zIC5vcHRpb24ge1xcbiAgICBtYXJnaW46IDAgMTV2dztcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgYm9yZGVyOiB2YXIoLS1jbHJfZGVmYXVsdCkgMC4xMjVyZW0gc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCB2YXIoLS1jbHJfZGVmYXVsdCksXFxuICAgICAgICAwIDAgMC41ZW0gMnB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gMTBweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxufVxcblxcbi5vcHRpb24ucmFpbmJvdyB7XFxuICAgIGFuaW1hdGlvbjogcmFpbmJvdyAycyBpbmZpbml0ZTtcXG59XFxuXFxuLyogTmF2YmFyIGVuZHMgaGVyZSAqL1xcblxcbi8qIENhbnZhcyBzdGFydHMgaGVyZSAqL1xcblxcbi5jYW52YXMge1xcbiAgICBoZWlnaHQ6IDkwdnc7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG59XFxuXFxuLmdyaWRfaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLyogQ2FudmFzIGVuZHMgaGVyZSAqL1xcblxcbi8qIFNpemluZyBpbnB1dCBzdGFydHMgaGVyZSAqL1xcblxcbi5zaXppbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4uc2l6aW5nIGxhYmVsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2l6aW5nIC5pbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NpemVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBTaXppbmcgaW5wdXQgZW5kcyBoZXJlICovXFxuXFxuLnNoaW5lIHtcXG4gICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgICAuY2FudmFzIHtcXG4gICAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgICAgIHdpZHRoOiA5MHZoO1xcbiAgICB9XFxuXFxuICAgIC5vcHRpb25zIC5vcHRpb24ge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwdnc7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByYWluYm93IHtcXG4gICAgMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IGJsdWV2aW9sZXQgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgYmx1ZXZpb2xldCwgMCAwIDAuNXJlbSAycHggYmx1ZXZpb2xldDtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJlYmVjY2FwdXJwbGUgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgcmViZWNjYXB1cnBsZSxcXG4gICAgICAgICAgICAwIDAgMC41cmVtIDJweCByZWJlY2NhcHVycGxlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2V0Y2hwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tldGNocC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsXCI7XG5cbmNvbnN0IENhbnZhcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaW5mbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2Fudl9yZWN0ID0gRE9NX2VsLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBjYW52X3JlY3QuaGVpZ2h0O1xuICAgICAgICBjb25zdCB3aWR0aCA9IGNhbnZfcmVjdC53aWR0aDtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlXG4gICAgICAgICAgICA/IGdldENvbXB1dGVkU3R5bGUoRE9NX2VsLmNhbnZhcywgbnVsbClcbiAgICAgICAgICAgIDogRE9NX2VsLmNhbnZhcy5jdXJyZW50U3R5bGU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIENoYW5nZXMgdGhlIHNpemUgb2YgZWFjaCBwaXhlbCBhY2NvcmRpbmcgdG8gdGhlIHNjcmVlbiBzaXplXG4gICAgY29uc3QgYWRhcHRfcGl4ZWxzID0gKGVsZW1lbnQsIHsgaGVpZ2h0LCB3aWR0aCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc19wZXJfY29sdW1uID0gRE9NX2VsLnNpemluZ19vdXRwdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYWRhcHQgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICAgICAgYGhlaWdodDogJHtcbiAgICAgICAgICAgICAgICAgICAgKGhlaWdodCAtIHBhcnNlSW50KHN0eWxlLmJvcmRlclRvcFdpZHRoKSAqIDIpIC9cbiAgICAgICAgICAgICAgICAgICAgaXRlbXNfcGVyX2NvbHVtblxuICAgICAgICAgICAgICAgIH1weDtcbiAgICAgICAgICAgICB3aWR0aDogJHtcbiAgICAgICAgICAgICAgICAgKHdpZHRoIC0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSAqIDIpIC9cbiAgICAgICAgICAgICAgICAgaXRlbXNfcGVyX2NvbHVtblxuICAgICAgICAgICAgIH1weGAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgID8gYWRhcHQoZWxlbWVudClcbiAgICAgICAgICAgIDogRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChpdGVtKSA9PiBhZGFwdChpdGVtKSk7XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZXMgYSBjYW52YXMgd2l0aCAobnVtKSBzcXVhcmVzIGRpdnNcbiAgICBjb25zdCBnZW5lcmF0ZSA9IChudW0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXNfcGVyX2NvbHVtbiA9IE1hdGguc3FydChudW0pO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBpbmZvKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlcyBkaXZzIGJhc2VkIG9uIHRoZSBhcmd1bWVudCBudW1iZXJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZF9pdGVtID0gRE9NX2VsLm5ld19lbChcImRpdlwiKTtcblxuICAgICAgICAgICAgZ3JpZF9pdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJncmlkX2l0ZW1cIik7XG4gICAgICAgICAgICBhZGFwdF9waXhlbHMoZ3JpZF9pdGVtLCBkZXRhaWxzKTtcblxuICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5hcHBlbmRDaGlsZChncmlkX2l0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlcyB0aGUgY2FudmFzIHNpemUgYW5kIGdyaWQgbGF5b3V0IGJhc2VkIG9uIHRoZSBhcmd1bWVudCBudW1iZXJcbiAgICAgICAgRE9NX2VsLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtpdGVtc19wZXJfY29sdW1ufSwgMWZyKWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgZHJhdygpO1xuICAgIH07XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIGFuZCBjaGFuZ2UgdGhlIHN0eWxlIG9mIGVhY2ggZGl2IGluc2lkZSB0aGUgY2FudmFzXG4gICAgY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgICAgICAgRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChnX2l0ZW0pID0+IHtcbiAgICAgICAgICAgIGdfaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGNoYW5nZV9jb2xvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBSZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGEgcGFyZW50XG4gICAgY29uc3QgcHVyZ2VfYWxsX2NoaWxkcmVuID0gKHBhcmVudCkgPT4ge1xuICAgICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ2hhbmdlcyB0aGUgY29sb3Igb2YgdGhlIGRpdnMgYnkgYWRkaW5nIGEgY2xhc3MgdG8gaXRcbiAgICBjb25zdCBjaGFuZ2VfY29sb3IgPSAoc3F1YXJlKSA9PiB7XG4gICAgICAgIHNxdWFyZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcInNoaW5lXCIpO1xuICAgIH07XG5cbiAgICAvLyBkZWNsYXJlIGFuIGFycmF5IGZvciBhbGwgdGhlIHRpbWVPdXRzXG4gICAgY29uc3QgcmVzaXplX3RpbWVfb3V0cyA9IHt9O1xuXG4gICAgLy8gdG8gY2xlYXIgdGhlbSBhbGwsIGp1c3QgY2FsbCB0aGlzXG4gICAgY29uc3QgY2xlYXJfcmVzaXplX3RtX290ID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHJlc2l6ZV90aW1lX291dHMpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVfdGltZV9vdXRzW2lkXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmVzaXplcyBjYW52YXMgYmFzZWQgb24gdXNlciBpbnB1dFxuICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlc2l6ZV90aW1lX291dHNbXCJ1bmlxdWVfaWRcIl0pIGNsZWFyX3Jlc2l6ZV90bV9vdCgpO1xuXG4gICAgICAgIC8vIENoYW5nZXMgdGhlIG91dHB1dCB0byBkaXNwbGF5IHRoZSBzZWxlY3RlZCB2YWx1ZVxuICAgICAgICBET01fZWwuc2l6aW5nX291dHB1dC52YWx1ZSA9IERPTV9lbC5zaXppbmdfaW5wdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlc19wZXJfc2lkZSA9IERPTV9lbC5zaXppbmdfaW5wdXQudmFsdWU7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY2hlY2tfaWZfdmFsaWRfbnVtYmVyKHNxdWFyZXNfcGVyX3NpZGUsIDEsIDEwMCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJOb3QgcG9zc2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9ibGVtIHdpdGggcmVzaXplX2NhbnZhcygpIGZ1bmN0aW9uXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZXMgYWxsIHBpeGVscyBmcm9tIHRoZSBwcmV2aW91cyBjYW52YXNcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRE9NX2VsLmNhbnZhcy5jb250YWlucyhET01fZWwuZmlyc3RfZ3JpZF9pdGVtKCkpOlxuICAgICAgICAgICAgICAgICAgICBwdXJnZV9hbGxfY2hpbGRyZW4oRE9NX2VsLmNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvYmxlbSB3aGVuIHJlc2l6ZV9jYW52YXMoKSBmdW5jdGlvblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcXVhcmVzX3Blcl9zaWRlID0gTnVtYmVyKHNxdWFyZXNfcGVyX3NpZGUpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGVzIGEgbmV3LCByZXNpemVkIGNhbnZhc1xuICAgICAgICAgICAgQ2FudmFzLmdlbmVyYXRlKHNxdWFyZXNfcGVyX3NpZGUgKiogMik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzaXplX3RpbWVfb3V0c1tcInVuaXF1ZV9pZFwiXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZhdGUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8vIENoZWNrcyBpZiB0aGUgdXNlciBpbnB1dCBpcyBhIHZhbGlkIG51bWJlciBiYXNlZCBvbiBtaW4gYW5kIG1heCB2YWx1ZXNcbiAgICBjb25zdCBjaGVja19pZl92YWxpZF9udW1iZXIgPSAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNOYU4obnVtYmVyKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGNhc2UgbnVtID4gbWF4OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgY2FzZSBudW0gPCBtaW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBjYXNlIG51bSA+PSBtaW4gJiYgbnVtIDw9IG1heDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9ibGVtIHdpdGggY2hlY2tfaWZfdmFsaWRfbnVtYmVyKCkgZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVaG1tLCBpdCBjbGVhcnMgdGhlIGNhbnZhc1xuICAgIC8vIGJ5IHJlbW92aW5nIHRoZSBjbGFzcyBhZGRlZCB0byB0aGVtIHdoZW4gZHJhd2luZ1xuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKHBpeGVsKSA9PiBwaXhlbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpbmVcIikpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBpbmZvLCBnZW5lcmF0ZSwgY2xlYXIsIHJlc2l6ZSwgYWRhcHRfcGl4ZWxzIH07XG59KSgpO1xuXG5leHBvcnQgeyBDYW52YXMgfTtcbiIsImNvbnN0IERPTV9lbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXNcIik7XG5cbiAgICBjb25zdCBncmlkX2l0ZW1zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRfaXRlbVwiKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpcnN0X2dyaWRfaXRlbSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9pdGVtXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhcl9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsZWFyXCIpO1xuICAgIGNvbnN0IHNpemluZ19pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l6aW5nX2lucHV0XCIpO1xuICAgIGNvbnN0IHNpemluZ19vdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpemluZ19vdXRwdXRcIik7XG5cbiAgICBjb25zdCBuZXdfZWwgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc1wiKTtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKTtcblxuICAgICAgICBjb25zdCBvcGVuX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ub3Blbl9vcHRpb25zXCIpO1xuICAgICAgICBjb25zdCBjbG9zZV9idG4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5jbG9zZVwiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICBvcGVuX2J0bixcbiAgICAgICAgICAgIGNsb3NlX2J0bixcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBncmlkX2l0ZW1zLFxuICAgICAgICBmaXJzdF9ncmlkX2l0ZW0sXG4gICAgICAgIGNsZWFyX2J0bixcbiAgICAgICAgc2l6aW5nX2lucHV0LFxuICAgICAgICBzaXppbmdfb3V0cHV0LFxuICAgICAgICBuZXdfZWwsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IERPTV9lbCB9O1xuIiwiaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsXCI7XG5cbmNvbnN0IE9wdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGF0dGFjaF9saXN0ZW5lcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBET01fZWwub3B0aW9ucy5jbG9zZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBET01fZWwub3B0aW9ucy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRE9NX2VsLm9wdGlvbnMub3Blbl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBET01fZWwub3B0aW9ucy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7fTtcbn0pKCk7XG5cbmV4cG9ydCB7IE9wdGlvbnMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3N0eWxlcy9za2V0Y2hwLmNzc1wiO1xuXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbFwiO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gXCIuL09wdGlvbnNcIjtcblxuLy8gQWRkcyBmdW5jdGlvbmFsaXR5IHRvIHRoZSB0b3AgYnV0dG9uc1xuY29uc3QgbWFuYWdlX3RvcF9idXR0b25zID0gKCkgPT4ge1xuICAgIERPTV9lbC5jbGVhcl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIENhbnZhcy5jbGVhcik7XG4gICAgRE9NX2VsLnNpemluZ19pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgQ2FudmFzLnJlc2l6ZSk7XG59O1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICAgIC8vIENyZWF0ZSBhIDE2eDE2IGdyaWQgb2YgZGl2cyBpbnNpZGUgdGhlIGNhbnZhcyB3aGVuIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICBDYW52YXMuZ2VuZXJhdGUoMjU2KTtcblxuICAgIC8vIEFjdGl2YXRlIHRvcCBidXR0b25zXG4gICAgbWFuYWdlX3RvcF9idXR0b25zKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcInJlc2l6ZVwiLFxuICAgICgpID0+IENhbnZhcy5hZGFwdF9waXhlbHMobnVsbCwgQ2FudmFzLmluZm8oKSksXG4gICAgdHJ1ZSxcbik7XG5cbi8vIEFzIHNvb24gYXMgdGhlIHBhZ2UgZnVsbHkgbG9hZHMgY2FsbHMgdGhlIG1haW4gZnVuY3Rpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBtYWluKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==