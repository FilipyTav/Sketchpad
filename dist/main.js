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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: white;\n    position: relative;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\n/* Navbar starts here */\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n}\n\n.btn {\n    background: rgb(38, 148, 211);\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.eraser.active {\n    background: purple;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n\n    min-height: 100vh;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n}\n\n.header .close {\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n#color_picker {\n    display: none;\n}\n\n.select_color {\n    cursor: pointer;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.canvas.erasing {\n    cursor: crosshair;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: var(--bg_color);\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/sketchp.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA,uBAAuB;;AAEvB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;;IAE7B,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,SAAS;;IAET,iBAAiB;;IAEjB,YAAY;;IAEZ,sCAAsC;;IAEtC,gBAAgB;;IAEhB,aAAa;IACb,wBAAwB;IACxB,mBAAmB;;IAEnB,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,oBAAoB;;IAEpB,eAAe;;IAEf,yBAAyB;IACzB,yCAAyC;IACzC;wCACoC;;IAEpC,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;IACpC,YAAY;;IAEZ,kDAAkD;AACtD;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA,qBAAqB;;AAErB,uBAAuB;;AAEvB;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,qCAAqC;IACrC,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;IACxB,SAAS;AACb;;AAEA,qBAAqB;;AAErB,6BAA6B;;AAE7B;IACI,aAAa;IACb,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,2BAA2B;;AAE3B;IACI,2BAA2B;AAC/B;;AAEA;IACI;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,6BAA6B;;QAE7B,8DAA8D;IAClE;IACA;QACI,gCAAgC;;QAEhC,oEAAoE;IACxE;IACA;QACI,mCAAmC;;QAEnC;wCACgC;IACpC;IACA;QACI,6BAA6B;;QAE7B,8DAA8D;IAClE;AACJ","sourcesContent":[":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: white;\n    position: relative;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\n/* Navbar starts here */\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n}\n\n.btn {\n    background: rgb(38, 148, 211);\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.eraser.active {\n    background: purple;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n\n    min-height: 100vh;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n}\n\n.header .close {\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n#color_picker {\n    display: none;\n}\n\n.select_color {\n    cursor: pointer;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.canvas.erasing {\n    cursor: crosshair;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: var(--bg_color);\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/js/Navbar.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options */ "./src/js/Options.js");




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
        const items_per_column = _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.sizing_output.value;

        const adapt = (el) => {
            el.style.setProperty(
                "height",
                `${
                    (height - parseInt(style.borderTopWidth) * 2) /
                    items_per_column
                }px`,
            );

            el.style.setProperty(
                "width",
                `${
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

            grid_item.setAttribute("data-id", i);

            grid_item.style.setProperty("--bg_color", "royalblue");

            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.appendChild(grid_item);
        }

        // Changes the canvas size and grid layout based on the argument number
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.setAttribute(
            "style",
            `grid-template-columns: repeat(${items_per_column}, 1fr)`,
        );

        _Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar.interaction_types[_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar.current_type[0]].config.add();
    };

    // Removes all children from a parent
    const purge_all_children = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
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
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.sizing_output.value = _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.sizing_input.value;

        const activate = () => {
            let squares_per_side = _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.sizing_input.value;

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
            generate(squares_per_side ** 2);
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
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.grid_items().forEach((pixel) => {
            pixel.classList.remove("shine");
            pixel.style.setProperty("--bg_color", "");
        });

        _Options__WEBPACK_IMPORTED_MODULE_2__.Options.drawing_styles.rainbow.clear_intervals();
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

    const nav = (function () {
        const container = document.querySelector("nav.header");

        const buttons = {
            clear: container.querySelector(".clear"),
            eraser: container.querySelector(".eraser"),
            interaction: container.querySelector(".interaction"),
        };

        return { container, buttons };
    })();

    const new_el = (element) => {
        return document.createElement(element);
    };

    const options = (function () {
        const container = document.querySelector(".options");

        const items = container.querySelectorAll(".option");

        const open_btn = document.querySelector("button.open_options");
        const close_btn = container.querySelector("button.close");

        const color_picker = container.querySelector("#color_picker");
        const sizing_input = document.querySelector(".sizing_input");
        const sizing_output = document.querySelector(".sizing_output");

        const random = container.querySelector(".random");
        const gray = container.querySelector(".gray");
        const rainbow = container.querySelector(".rainbow");

        return {
            container,
            items,
            open_btn,
            close_btn,
            color_picker,
            sizing_input,
            sizing_output,
            random,
            gray,
            rainbow,
        };
    })();

    const shining = () => {
        return canvas.querySelectorAll(".shining");
    };

    return {
        canvas,
        grid_items,
        first_grid_item,
        new_el,
        nav,
        options,
        shining,
    };
})();




/***/ }),

/***/ "./src/js/Navbar.js":
/*!**************************!*\
  !*** ./src/js/Navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _DOM_el__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_el */ "./src/js/DOM_el.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options */ "./src/js/Options.js");




const Navbar = (function () {
    const { clear, interaction, eraser } = _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.nav.buttons;

    const remove_shine = (e) => {
        const element = e.target;
        if (element === _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.canvas) return;

        _Options__WEBPACK_IMPORTED_MODULE_2__.Options.drawing_styles.rainbow.clear_interval(element);

        element.classList.remove("shine");
    };

    const modes = {
        eraser: {
            type: "eraser",

            config: {
                add: () => {
                    const type = interaction_types[current_type[0]];

                    type.config.clear();

                    _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.canvas.classList.add("erasing");

                    _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.canvas.addEventListener(
                        type.technical_name,
                        remove_shine,
                    );
                },
                clear: () => {
                    const type = interaction_types[current_type[0]];

                    type.config.clear();

                    _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.canvas.classList.remove("erasing");

                    _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.canvas.removeEventListener(
                        type.technical_name,
                        remove_shine,
                    );

                    type.config.add();
                },
            },
        },
        pixel: {
            type: "pixel",
        },
    };

    let current_mode = ["pixel"];

    const interaction_types = {
        click: {
            id: 0,

            type: "click",
            technical_name: "click",

            config: {
                add: () => {
                    _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.grid_items().forEach((item) => {
                        item.addEventListener("click", _Options__WEBPACK_IMPORTED_MODULE_2__.Options.change_color);
                    });
                },
                clear: () => {
                    _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.grid_items().forEach((item) => {
                        item.removeEventListener("click", _Options__WEBPACK_IMPORTED_MODULE_2__.Options.change_color);
                    });
                },
            },
        },
        hover: {
            id: 1,

            type: "hover",
            technical_name: "mouseover",

            config: {
                add: () => {
                    _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.grid_items().forEach((item) => {
                        item.addEventListener(
                            "mouseover",
                            _Options__WEBPACK_IMPORTED_MODULE_2__.Options.change_color,
                        );
                    });
                },
                clear: () => {
                    _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.grid_items().forEach((item) => {
                        item.removeEventListener(
                            "mouseover",
                            _Options__WEBPACK_IMPORTED_MODULE_2__.Options.change_color,
                        );
                    });
                },
            },
        },
    };

    let current_type = ["click"];

    const set_interaction_text = () => {
        interaction.textContent =
            current_type[0].charAt(0).toUpperCase() + current_type[0].slice(1);
    };

    set_interaction_text();

    // Adds functionality to the top buttons
    const manage_buttons = () => {
        clear.addEventListener("click", _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.clear);

        _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.options.sizing_input.addEventListener("input", _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.resize);

        eraser.addEventListener("click", () => {
            eraser.classList.toggle("active");

            switch (current_mode[0]) {
                case "pixel":
                    current_mode[0] = "eraser";
                    modes.eraser.config.add();
                    break;

                case "eraser":
                    current_mode[0] = "pixel";
                    modes.eraser.config.clear();
                    break;
            }
        });

        interaction.addEventListener("click", () => {
            if (current_mode[0] === "eraser") modes.eraser.config.clear();

            const current = interaction.textContent.toLowerCase();

            const type = interaction_types[current];

            type.config.clear();

            const index = type.id;

            const next_id = (index + 1) % Object.keys(interaction_types).length;

            for (const interaction in interaction_types) {
                const id = interaction_types[interaction].id;

                if (id === next_id) {
                    current_type[0] = interaction_types[interaction].type;
                    break;
                }
            }

            set_interaction_text();

            const next_type =
                interaction_types[interaction.textContent.toLowerCase()];

            next_type.config.add();

            if (current_mode[0] === "eraser") modes.eraser.config.add();
        });
    };

    return { manage_buttons, interaction_types, current_type };
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
    const random_color = () => {
        return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    };

    const color_conversions = (function () {
        const hex_2_rgb = (hex) => {
            var bigint = parseInt(hex, 16);
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;

            return [r, g, b].join();
        };

        const rgba_2_hex = (rgba) =>
            `#${rgba
                .match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/,
                )
                .slice(1)
                .map((n, i) =>
                    (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
                        .toString(16)
                        .padStart(2, "0")
                        .replace("NaN", ""),
                )
                .join("")}`;

        return {
            hex_2_rgb,
            rgba_2_hex,
        };
    })();

    const drawing_styles = {
        color: (function () {
            let value = "#5f9ea0";

            return {
                get value() {
                    return value;
                },
                set value(new_value) {
                    value = new_value;
                },

                get config() {
                    return (pixel, current_color) => {
                        pixel.style.setProperty(
                            "--bg_color",
                            value.toLowerCase(),
                        );

                        pixel.classList.add("shine");
                    };
                },
            };
        })(),

        rainbow: (function () {
            let value = random_color();

            const intervals = {};

            const clear_interval = (el) => {
                const id = el.getAttribute("data-id");

                clearInterval(intervals[id]);

                el.style.transition = "none";
            };

            const clear_all_intervals = () => {
                for (const pixel in intervals) {
                    clearInterval(intervals[pixel]);
                }

                _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.grid_items().forEach(
                    (item) => (item.style.transition = "none"),
                );
            };

            return {
                get value() {
                    return value;
                },

                get config() {
                    return (pixel) => {
                        pixel.style.setProperty(
                            "--bg_color",
                            random_color().toLowerCase(),
                        );

                        pixel.style.setProperty(
                            "transition",
                            "background 1s ease-in-out",
                        );

                        pixel.classList.add("shine");

                        const id = setInterval(() => {
                            pixel.style.setProperty(
                                "--bg_color",
                                random_color().toLowerCase(),
                            );
                        }, 1000);

                        const pixel_id = pixel.getAttribute("data-id");

                        if (intervals[pixel_id])
                            clearTimeout(intervals[pixel_id]);

                        intervals[pixel_id] = id;
                    };
                },

                get clear_all_intervals() {
                    return clear_all_intervals;
                },

                clear_interval,
            };
        })(),

        gray: (function () {
            let luminosity = 0;

            let value = `rgba(${luminosity}, ${luminosity}, ${luminosity})`;

            return {
                get value() {
                    return value;
                },

                get config() {
                    return (pixel) => {
                        pixel.style.setProperty("--bg_color", value);

                        luminosity = (luminosity + 15) % 255;

                        value = `rgba(${luminosity}, ${luminosity}, ${luminosity})`;

                        pixel.classList.add("shine");
                    };
                },
            };
        })(),

        random: (function () {
            let value = random_color();

            return {
                get value() {
                    return value;
                },

                get config() {
                    return (pixel) => {
                        pixel.style.setProperty(
                            "--bg_color",
                            random_color().toLowerCase(),
                        );

                        pixel.classList.add("shine");
                    };
                },
            };
        })(),
    };

    let current_style = ["rainbow"];

    // Changes the color of the divs by adding a class to it
    const change_color = (e) => {
        const square = e.target;
        const details = getComputedStyle(square);
        const style = drawing_styles[current_style[0]];

        const current_bg = color_conversions.rgba_2_hex(
            details.getPropertyValue("background-color"),
        );

        style.config(square, current_bg);
    };

    const attach_listeners = (function () {
        const { close_btn, open_btn, color_picker, random, gray, rainbow } =
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options;

        close_btn.addEventListener("click", () => {
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.container.classList.remove("active");
        });

        open_btn.addEventListener("click", () => {
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.container.classList.add("active");
        });

        color_picker.addEventListener("input", (e) => {
            current_style[0] = "color";
            const chosen_color = e.target.value;

            drawing_styles["color"]["value"] = chosen_color;
        });

        random.addEventListener("click", () => {
            current_style[0] = "random";
        });

        gray.addEventListener("click", () => {
            current_style[0] = "gray";
        });

        rainbow.addEventListener("click", () => {
            current_style[0] = "rainbow";
        });
    })();

    return { change_color, drawing_styles };
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
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/js/Navbar.js");





const main = () => {
    // Create a 16x16 grid of divs inside the canvas when loading the page
    _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.generate(256);

    // Activate top buttons
    _Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar.manage_buttons();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bURBQWM7O0FBRTFCO0FBQ0EsWUFBWSw4RUFBeUM7QUFDckQsU0FBUzs7QUFFVDtBQUNBLFlBQVksMkVBQXNDO0FBQ2xELFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUwsYUFBYTtBQUNiLENBQUM7O0FBRWtCOzs7Ozs7O1VDaE9uQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7O0FBRUc7QUFDQTs7QUFFbEM7QUFDQTtBQUNBLElBQUksb0RBQWU7O0FBRW5CO0FBQ0EsSUFBSSwwREFBcUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBLFVBQVUsd0RBQW1CLE9BQU8sZ0RBQVc7QUFDL0M7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL3N0eWxlcy9za2V0Y2hwLmNzcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9zdHlsZXMvc2tldGNocC5jc3M/MTI4ZiIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL2pzL0RPTV9lbC5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvTmF2YmFyLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9PcHRpb25zLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jbHJfZGVmYXVsdDogd2hpdGU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgc3RhcnRzIGhlcmUgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzgsIDE0OCwgMjExKTtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVyYXNlci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IC00cHggMCAxMHB4IGJsYWNrO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICAgIG1heC13aWR0aDogMDtcXG5cXG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4ub3B0aW9ucy5hY3RpdmUge1xcbiAgICBtYXgtd2lkdGg6IDIwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIC5vcGVuX29wdGlvbnMsXFxuLmhlYWRlciAuY2xvc2Uge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmhlYWRlciAuY2xvc2Uge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggNXB4IHdoaXRlKTtcXG59XFxuXFxuLm9wdGlvbnMgLm9wdGlvbiB7XFxuICAgIG1hcmdpbjogMCAxNXZ3O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBib3JkZXI6IHZhcigtLWNscl9kZWZhdWx0KSAwLjEyNXJlbSBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHZhcigtLWNscl9kZWZhdWx0KSxcXG4gICAgICAgIDAgMCAwLjVlbSAycHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLm9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXJlbSAxMHB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG59XFxuXFxuLm9wdGlvbi5yYWluYm93IHtcXG4gICAgYW5pbWF0aW9uOiByYWluYm93IDJzIGluZmluaXRlO1xcbn1cXG5cXG4jY29sb3JfcGlja2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdF9jb2xvciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTmF2YmFyIGVuZHMgaGVyZSAqL1xcblxcbi8qIENhbnZhcyBzdGFydHMgaGVyZSAqL1xcblxcbi5jYW52YXMge1xcbiAgICBoZWlnaHQ6IDkwdnc7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG59XFxuXFxuLmNhbnZhcy5lcmFzaW5nIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5ncmlkX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qIENhbnZhcyBlbmRzIGhlcmUgKi9cXG5cXG4vKiBTaXppbmcgaW5wdXQgc3RhcnRzIGhlcmUgKi9cXG5cXG4uc2l6aW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnNpemluZyBsYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpemluZyAuaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzaXplcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogU2l6aW5nIGlucHV0IGVuZHMgaGVyZSAqL1xcblxcbi5zaGluZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnX2NvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLmNhbnZhcyB7XFxuICAgICAgICBoZWlnaHQ6IDkwdmg7XFxuICAgICAgICB3aWR0aDogOTB2aDtcXG4gICAgfVxcblxcbiAgICAub3B0aW9ucyAub3B0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHZ3O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiBibHVldmlvbGV0IDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIGJsdWV2aW9sZXQsIDAgMCAwLjVyZW0gMnB4IGJsdWV2aW9sZXQ7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiByZWJlY2NhcHVycGxlIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHJlYmVjY2FwdXJwbGUsXFxuICAgICAgICAgICAgMCAwIDAuNXJlbSAycHggcmViZWNjYXB1cnBsZTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9za2V0Y2hwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCOztJQUU3QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTOztJQUVULGlCQUFpQjs7SUFFakIsWUFBWTs7SUFFWixzQ0FBc0M7O0lBRXRDLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7O0lBRW5CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjs7SUFFcEIsZUFBZTs7SUFFZix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDO3dDQUNvQzs7SUFFcEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7O0lBRVosa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEscUJBQXFCOztBQUVyQix1QkFBdUI7O0FBRXZCO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7O0FBRUEscUJBQXFCOztBQUVyQiw2QkFBNkI7O0FBRTdCO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQSwyQkFBMkI7O0FBRTNCO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7O1FBRTdCLDhEQUE4RDtJQUNsRTtJQUNBO1FBQ0ksZ0NBQWdDOztRQUVoQyxvRUFBb0U7SUFDeEU7SUFDQTtRQUNJLG1DQUFtQzs7UUFFbkM7d0NBQ2dDO0lBQ3BDO0lBQ0E7UUFDSSw2QkFBNkI7O1FBRTdCLDhEQUE4RDtJQUNsRTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jbHJfZGVmYXVsdDogd2hpdGU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgc3RhcnRzIGhlcmUgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzgsIDE0OCwgMjExKTtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVyYXNlci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IC00cHggMCAxMHB4IGJsYWNrO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICAgIG1heC13aWR0aDogMDtcXG5cXG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4ub3B0aW9ucy5hY3RpdmUge1xcbiAgICBtYXgtd2lkdGg6IDIwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIC5vcGVuX29wdGlvbnMsXFxuLmhlYWRlciAuY2xvc2Uge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmhlYWRlciAuY2xvc2Uge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggNXB4IHdoaXRlKTtcXG59XFxuXFxuLm9wdGlvbnMgLm9wdGlvbiB7XFxuICAgIG1hcmdpbjogMCAxNXZ3O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBib3JkZXI6IHZhcigtLWNscl9kZWZhdWx0KSAwLjEyNXJlbSBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHZhcigtLWNscl9kZWZhdWx0KSxcXG4gICAgICAgIDAgMCAwLjVlbSAycHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLm9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXJlbSAxMHB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG59XFxuXFxuLm9wdGlvbi5yYWluYm93IHtcXG4gICAgYW5pbWF0aW9uOiByYWluYm93IDJzIGluZmluaXRlO1xcbn1cXG5cXG4jY29sb3JfcGlja2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdF9jb2xvciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTmF2YmFyIGVuZHMgaGVyZSAqL1xcblxcbi8qIENhbnZhcyBzdGFydHMgaGVyZSAqL1xcblxcbi5jYW52YXMge1xcbiAgICBoZWlnaHQ6IDkwdnc7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG59XFxuXFxuLmNhbnZhcy5lcmFzaW5nIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5ncmlkX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qIENhbnZhcyBlbmRzIGhlcmUgKi9cXG5cXG4vKiBTaXppbmcgaW5wdXQgc3RhcnRzIGhlcmUgKi9cXG5cXG4uc2l6aW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnNpemluZyBsYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpemluZyAuaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzaXplcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogU2l6aW5nIGlucHV0IGVuZHMgaGVyZSAqL1xcblxcbi5zaGluZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnX2NvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLmNhbnZhcyB7XFxuICAgICAgICBoZWlnaHQ6IDkwdmg7XFxuICAgICAgICB3aWR0aDogOTB2aDtcXG4gICAgfVxcblxcbiAgICAub3B0aW9ucyAub3B0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHZ3O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiBibHVldmlvbGV0IDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIGJsdWV2aW9sZXQsIDAgMCAwLjVyZW0gMnB4IGJsdWV2aW9sZXQ7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiByZWJlY2NhcHVycGxlIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHJlYmVjY2FwdXJwbGUsXFxuICAgICAgICAgICAgMCAwIDAuNXJlbSAycHggcmViZWNjYXB1cnBsZTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tldGNocC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZXRjaHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbFwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSBcIi4vT3B0aW9uc1wiO1xuXG5jb25zdCBDYW52YXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGluZm8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZfcmVjdCA9IERPTV9lbC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY2Fudl9yZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjYW52X3JlY3Qud2lkdGg7XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZVxuICAgICAgICAgICAgPyBnZXRDb21wdXRlZFN0eWxlKERPTV9lbC5jYW52YXMsIG51bGwpXG4gICAgICAgICAgICA6IERPTV9lbC5jYW52YXMuY3VycmVudFN0eWxlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBDaGFuZ2VzIHRoZSBzaXplIG9mIGVhY2ggcGl4ZWwgYWNjb3JkaW5nIHRvIHRoZSBzY3JlZW4gc2l6ZVxuICAgIGNvbnN0IGFkYXB0X3BpeGVscyA9IChlbGVtZW50LCB7IGhlaWdodCwgd2lkdGgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXNfcGVyX2NvbHVtbiA9IERPTV9lbC5vcHRpb25zLnNpemluZ19vdXRwdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYWRhcHQgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgICAgIChoZWlnaHQgLSBwYXJzZUludChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKiAyKSAvXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zX3Blcl9jb2x1bW5cbiAgICAgICAgICAgICAgICB9cHhgLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICAod2lkdGggLSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICogMikgL1xuICAgICAgICAgICAgICAgICAgICBpdGVtc19wZXJfY29sdW1uXG4gICAgICAgICAgICAgICAgfXB4YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgPyBhZGFwdChlbGVtZW50KVxuICAgICAgICAgICAgOiBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGl0ZW0pID0+IGFkYXB0KGl0ZW0pKTtcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlcyBhIGNhbnZhcyB3aXRoIChudW0pIHNxdWFyZXMgZGl2c1xuICAgIGNvbnN0IGdlbmVyYXRlID0gKG51bSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc19wZXJfY29sdW1uID0gTWF0aC5zcXJ0KG51bSk7XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGluZm8oKTtcblxuICAgICAgICAvLyBDcmVhdGVzIGRpdnMgYmFzZWQgb24gdGhlIGFyZ3VtZW50IG51bWJlclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkX2l0ZW0gPSBET01fZWwubmV3X2VsKFwiZGl2XCIpO1xuXG4gICAgICAgICAgICBncmlkX2l0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcImdyaWRfaXRlbVwiKTtcbiAgICAgICAgICAgIGFkYXB0X3BpeGVscyhncmlkX2l0ZW0sIGRldGFpbHMpO1xuXG4gICAgICAgICAgICBncmlkX2l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpKTtcblxuICAgICAgICAgICAgZ3JpZF9pdGVtLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ19jb2xvclwiLCBcInJveWFsYmx1ZVwiKTtcblxuICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5hcHBlbmRDaGlsZChncmlkX2l0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlcyB0aGUgY2FudmFzIHNpemUgYW5kIGdyaWQgbGF5b3V0IGJhc2VkIG9uIHRoZSBhcmd1bWVudCBudW1iZXJcbiAgICAgICAgRE9NX2VsLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtpdGVtc19wZXJfY29sdW1ufSwgMWZyKWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgTmF2YmFyLmludGVyYWN0aW9uX3R5cGVzW05hdmJhci5jdXJyZW50X3R5cGVbMF1dLmNvbmZpZy5hZGQoKTtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHBhcmVudFxuICAgIGNvbnN0IHB1cmdlX2FsbF9jaGlsZHJlbiA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGRlY2xhcmUgYW4gYXJyYXkgZm9yIGFsbCB0aGUgdGltZU91dHNcbiAgICBjb25zdCByZXNpemVfdGltZV9vdXRzID0ge307XG5cbiAgICAvLyB0byBjbGVhciB0aGVtIGFsbCwganVzdCBjYWxsIHRoaXNcbiAgICBjb25zdCBjbGVhcl9yZXNpemVfdG1fb3QgPSAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaWQgaW4gcmVzaXplX3RpbWVfb3V0cykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZV90aW1lX291dHNbaWRdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBSZXNpemVzIGNhbnZhcyBiYXNlZCBvbiB1c2VyIGlucHV0XG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVzaXplX3RpbWVfb3V0c1tcInVuaXF1ZV9pZFwiXSkgY2xlYXJfcmVzaXplX3RtX290KCk7XG5cbiAgICAgICAgLy8gQ2hhbmdlcyB0aGUgb3V0cHV0IHRvIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHZhbHVlXG4gICAgICAgIERPTV9lbC5vcHRpb25zLnNpemluZ19vdXRwdXQudmFsdWUgPSBET01fZWwub3B0aW9ucy5zaXppbmdfaW5wdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlc19wZXJfc2lkZSA9IERPTV9lbC5vcHRpb25zLnNpemluZ19pbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgc3dpdGNoIChjaGVja19pZl92YWxpZF9udW1iZXIoc3F1YXJlc19wZXJfc2lkZSwgMSwgMTAwKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIk5vdCBwb3NzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2JsZW0gd2l0aCByZXNpemVfY2FudmFzKCkgZnVuY3Rpb25cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlcyBhbGwgcGl4ZWxzIGZyb20gdGhlIHByZXZpb3VzIGNhbnZhc1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBET01fZWwuY2FudmFzLmNvbnRhaW5zKERPTV9lbC5maXJzdF9ncmlkX2l0ZW0oKSk6XG4gICAgICAgICAgICAgICAgICAgIHB1cmdlX2FsbF9jaGlsZHJlbihET01fZWwuY2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9ibGVtIHdoZW4gcmVzaXplX2NhbnZhcygpIGZ1bmN0aW9uXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNxdWFyZXNfcGVyX3NpZGUgPSBOdW1iZXIoc3F1YXJlc19wZXJfc2lkZSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBuZXcsIHJlc2l6ZWQgY2FudmFzXG4gICAgICAgICAgICBnZW5lcmF0ZShzcXVhcmVzX3Blcl9zaWRlICoqIDIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlc2l6ZV90aW1lX291dHNbXCJ1bmlxdWVfaWRcIl0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFjdGl2YXRlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cbiAgICAvLyBDaGVja3MgaWYgdGhlIHVzZXIgaW5wdXQgaXMgYSB2YWxpZCBudW1iZXIgYmFzZWQgb24gbWluIGFuZCBtYXggdmFsdWVzXG4gICAgY29uc3QgY2hlY2tfaWZfdmFsaWRfbnVtYmVyID0gKG51bWJlciwgbWluLCBtYXgpID0+IHtcbiAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKG51bWJlcik7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzTmFOKG51bWJlcik6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBjYXNlIG51bSA+IG1heDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGNhc2UgbnVtIDwgbWluOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgY2FzZSBudW0gPj0gbWluICYmIG51bSA8PSBtYXg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvYmxlbSB3aXRoIGNoZWNrX2lmX3ZhbGlkX251bWJlcigpIGZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVWhtbSwgaXQgY2xlYXJzIHRoZSBjYW52YXNcbiAgICAvLyBieSByZW1vdmluZyB0aGUgY2xhc3MgYWRkZWQgdG8gdGhlbSB3aGVuIGRyYXdpbmdcbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChwaXhlbCkgPT4ge1xuICAgICAgICAgICAgcGl4ZWwuY2xhc3NMaXN0LnJlbW92ZShcInNoaW5lXCIpO1xuICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnX2NvbG9yXCIsIFwiXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPcHRpb25zLmRyYXdpbmdfc3R5bGVzLnJhaW5ib3cuY2xlYXJfaW50ZXJ2YWxzKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGluZm8sIGdlbmVyYXRlLCBjbGVhciwgcmVzaXplLCBhZGFwdF9waXhlbHMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IENhbnZhcyB9O1xuIiwiY29uc3QgRE9NX2VsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhc1wiKTtcblxuICAgIGNvbnN0IGdyaWRfaXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZF9pdGVtXCIpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmlyc3RfZ3JpZF9pdGVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX2l0ZW1cIik7XG4gICAgfTtcblxuICAgIGNvbnN0IG5hdiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYuaGVhZGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB7XG4gICAgICAgICAgICBjbGVhcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIiksXG4gICAgICAgICAgICBlcmFzZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmVyYXNlclwiKSxcbiAgICAgICAgICAgIGludGVyYWN0aW9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnRlcmFjdGlvblwiKSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4geyBjb250YWluZXIsIGJ1dHRvbnMgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgbmV3X2VsID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25cIik7XG5cbiAgICAgICAgY29uc3Qgb3Blbl9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLm9wZW5fb3B0aW9uc1wiKTtcbiAgICAgICAgY29uc3QgY2xvc2VfYnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2xvc2VcIik7XG5cbiAgICAgICAgY29uc3QgY29sb3JfcGlja2VyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JfcGlja2VyXCIpO1xuICAgICAgICBjb25zdCBzaXppbmdfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpemluZ19pbnB1dFwiKTtcbiAgICAgICAgY29uc3Qgc2l6aW5nX291dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l6aW5nX291dHB1dFwiKTtcblxuICAgICAgICBjb25zdCByYW5kb20gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5yYW5kb21cIik7XG4gICAgICAgIGNvbnN0IGdyYXkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ncmF5XCIpO1xuICAgICAgICBjb25zdCByYWluYm93ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucmFpbmJvd1wiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICBvcGVuX2J0bixcbiAgICAgICAgICAgIGNsb3NlX2J0bixcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlcixcbiAgICAgICAgICAgIHNpemluZ19pbnB1dCxcbiAgICAgICAgICAgIHNpemluZ19vdXRwdXQsXG4gICAgICAgICAgICByYW5kb20sXG4gICAgICAgICAgICBncmF5LFxuICAgICAgICAgICAgcmFpbmJvdyxcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgc2hpbmluZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhbnZhcy5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaW5pbmdcIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNhbnZhcyxcbiAgICAgICAgZ3JpZF9pdGVtcyxcbiAgICAgICAgZmlyc3RfZ3JpZF9pdGVtLFxuICAgICAgICBuZXdfZWwsXG4gICAgICAgIG5hdixcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgc2hpbmluZyxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHsgRE9NX2VsIH07XG4iLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbFwiO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gXCIuL09wdGlvbnNcIjtcblxuY29uc3QgTmF2YmFyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IGNsZWFyLCBpbnRlcmFjdGlvbiwgZXJhc2VyIH0gPSBET01fZWwubmF2LmJ1dHRvbnM7XG5cbiAgICBjb25zdCByZW1vdmVfc2hpbmUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBET01fZWwuY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgT3B0aW9ucy5kcmF3aW5nX3N0eWxlcy5yYWluYm93LmNsZWFyX2ludGVydmFsKGVsZW1lbnQpO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoaW5lXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBtb2RlcyA9IHtcbiAgICAgICAgZXJhc2VyOiB7XG4gICAgICAgICAgICB0eXBlOiBcImVyYXNlclwiLFxuXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBhZGQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGludGVyYWN0aW9uX3R5cGVzW2N1cnJlbnRfdHlwZVswXV07XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZS5jb25maWcuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICBET01fZWwuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJlcmFzaW5nXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIERPTV9lbC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUudGVjaG5pY2FsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVfc2hpbmUsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGVhcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gaW50ZXJhY3Rpb25fdHlwZXNbY3VycmVudF90eXBlWzBdXTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlLmNvbmZpZy5jbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIERPTV9lbC5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImVyYXNpbmdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZS50ZWNobmljYWxfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZV9zaGluZSxcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlLmNvbmZpZy5hZGQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGl4ZWw6IHtcbiAgICAgICAgICAgIHR5cGU6IFwicGl4ZWxcIixcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgbGV0IGN1cnJlbnRfbW9kZSA9IFtcInBpeGVsXCJdO1xuXG4gICAgY29uc3QgaW50ZXJhY3Rpb25fdHlwZXMgPSB7XG4gICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICBpZDogMCxcblxuICAgICAgICAgICAgdHlwZTogXCJjbGlja1wiLFxuICAgICAgICAgICAgdGVjaG5pY2FsX25hbWU6IFwiY2xpY2tcIixcblxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgYWRkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgT3B0aW9ucy5jaGFuZ2VfY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgT3B0aW9ucy5jaGFuZ2VfY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuXG4gICAgICAgICAgICB0eXBlOiBcImhvdmVyXCIsXG4gICAgICAgICAgICB0ZWNobmljYWxfbmFtZTogXCJtb3VzZW92ZXJcIixcblxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgYWRkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW91c2VvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3B0aW9ucy5jaGFuZ2VfY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW91c2VvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3B0aW9ucy5jaGFuZ2VfY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgbGV0IGN1cnJlbnRfdHlwZSA9IFtcImNsaWNrXCJdO1xuXG4gICAgY29uc3Qgc2V0X2ludGVyYWN0aW9uX3RleHQgPSAoKSA9PiB7XG4gICAgICAgIGludGVyYWN0aW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIGN1cnJlbnRfdHlwZVswXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGN1cnJlbnRfdHlwZVswXS5zbGljZSgxKTtcbiAgICB9O1xuXG4gICAgc2V0X2ludGVyYWN0aW9uX3RleHQoKTtcblxuICAgIC8vIEFkZHMgZnVuY3Rpb25hbGl0eSB0byB0aGUgdG9wIGJ1dHRvbnNcbiAgICBjb25zdCBtYW5hZ2VfYnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIENhbnZhcy5jbGVhcik7XG5cbiAgICAgICAgRE9NX2VsLm9wdGlvbnMuc2l6aW5nX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBDYW52YXMucmVzaXplKTtcblxuICAgICAgICBlcmFzZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVyYXNlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnRfbW9kZVswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaXhlbFwiOlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X21vZGVbMF0gPSBcImVyYXNlclwiO1xuICAgICAgICAgICAgICAgICAgICBtb2Rlcy5lcmFzZXIuY29uZmlnLmFkZCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJlcmFzZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9tb2RlWzBdID0gXCJwaXhlbFwiO1xuICAgICAgICAgICAgICAgICAgICBtb2Rlcy5lcmFzZXIuY29uZmlnLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpbnRlcmFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRfbW9kZVswXSA9PT0gXCJlcmFzZXJcIikgbW9kZXMuZXJhc2VyLmNvbmZpZy5jbGVhcigpO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gaW50ZXJhY3Rpb24udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGludGVyYWN0aW9uX3R5cGVzW2N1cnJlbnRdO1xuXG4gICAgICAgICAgICB0eXBlLmNvbmZpZy5jbGVhcigpO1xuXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHR5cGUuaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRfaWQgPSAoaW5kZXggKyAxKSAlIE9iamVjdC5rZXlzKGludGVyYWN0aW9uX3R5cGVzKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgaW50ZXJhY3Rpb24gaW4gaW50ZXJhY3Rpb25fdHlwZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGludGVyYWN0aW9uX3R5cGVzW2ludGVyYWN0aW9uXS5pZDtcblxuICAgICAgICAgICAgICAgIGlmIChpZCA9PT0gbmV4dF9pZCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3R5cGVbMF0gPSBpbnRlcmFjdGlvbl90eXBlc1tpbnRlcmFjdGlvbl0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRfaW50ZXJhY3Rpb25fdGV4dCgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0X3R5cGUgPVxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uX3R5cGVzW2ludGVyYWN0aW9uLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgICAgICBuZXh0X3R5cGUuY29uZmlnLmFkZCgpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudF9tb2RlWzBdID09PSBcImVyYXNlclwiKSBtb2Rlcy5lcmFzZXIuY29uZmlnLmFkZCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgbWFuYWdlX2J1dHRvbnMsIGludGVyYWN0aW9uX3R5cGVzLCBjdXJyZW50X3R5cGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IE5hdmJhciB9O1xuIiwiaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsXCI7XG5cbmNvbnN0IE9wdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJhbmRvbV9jb2xvciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgKChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYpIDw8IDApLnRvU3RyaW5nKDE2KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29sb3JfY29udmVyc2lvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBoZXhfMl9yZ2IgPSAoaGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgICB2YXIgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgICAgICAgdmFyIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgICAgICAgICAgdmFyIGIgPSBiaWdpbnQgJiAyNTU7XG5cbiAgICAgICAgICAgIHJldHVybiBbciwgZywgYl0uam9pbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJnYmFfMl9oZXggPSAocmdiYSkgPT5cbiAgICAgICAgICAgIGAjJHtyZ2JhXG4gICAgICAgICAgICAgICAgLm1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCtcXC57MCwxfVxcZCopKT9cXCkkLyxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgLm1hcCgobiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgKGkgPT09IDMgPyBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobikgKiAyNTUpIDogcGFyc2VGbG9hdChuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYWRTdGFydCgyLCBcIjBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiTmFOXCIsIFwiXCIpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKX1gO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZXhfMl9yZ2IsXG4gICAgICAgICAgICByZ2JhXzJfaGV4LFxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBkcmF3aW5nX3N0eWxlcyA9IHtcbiAgICAgICAgY29sb3I6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBcIiM1ZjllYTBcIjtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldCB2YWx1ZShuZXdfdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGl4ZWwsIGN1cnJlbnRfY29sb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5jbGFzc0xpc3QuYWRkKFwic2hpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG5cbiAgICAgICAgcmFpbmJvdzogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhbmRvbV9jb2xvcigpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbHMgPSB7fTtcblxuICAgICAgICAgICAgY29uc3QgY2xlYXJfaW50ZXJ2YWwgPSAoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsc1tpZF0pO1xuXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgY2xlYXJfYWxsX2ludGVydmFscyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBpeGVsIGluIGludGVydmFscykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsc1twaXhlbF0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IChpdGVtLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIiksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGl4ZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbV9jb2xvcigpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQgMXMgZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC5hZGQoXCJzaGluZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21fY29sb3IoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxfaWQgPSBwaXhlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJ2YWxzW3BpeGVsX2lkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaW50ZXJ2YWxzW3BpeGVsX2lkXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsc1twaXhlbF9pZF0gPSBpZDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2V0IGNsZWFyX2FsbF9pbnRlcnZhbHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGVhcl9hbGxfaW50ZXJ2YWxzO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGVhcl9pbnRlcnZhbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG5cbiAgICAgICAgZ3JheTogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsdW1pbm9zaXR5ID0gMDtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gYHJnYmEoJHtsdW1pbm9zaXR5fSwgJHtsdW1pbm9zaXR5fSwgJHtsdW1pbm9zaXR5fSlgO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXQgY29uZmlnKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBpeGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmdfY29sb3JcIiwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsdW1pbm9zaXR5ID0gKGx1bWlub3NpdHkgKyAxNSkgJSAyNTU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYHJnYmEoJHtsdW1pbm9zaXR5fSwgJHtsdW1pbm9zaXR5fSwgJHtsdW1pbm9zaXR5fSlgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5jbGFzc0xpc3QuYWRkKFwic2hpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG5cbiAgICAgICAgcmFuZG9tOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmFuZG9tX2NvbG9yKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGl4ZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbV9jb2xvcigpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5jbGFzc0xpc3QuYWRkKFwic2hpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG4gICAgfTtcblxuICAgIGxldCBjdXJyZW50X3N0eWxlID0gW1wicmFpbmJvd1wiXTtcblxuICAgIC8vIENoYW5nZXMgdGhlIGNvbG9yIG9mIHRoZSBkaXZzIGJ5IGFkZGluZyBhIGNsYXNzIHRvIGl0XG4gICAgY29uc3QgY2hhbmdlX2NvbG9yID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBnZXRDb21wdXRlZFN0eWxlKHNxdWFyZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZHJhd2luZ19zdHlsZXNbY3VycmVudF9zdHlsZVswXV07XG5cbiAgICAgICAgY29uc3QgY3VycmVudF9iZyA9IGNvbG9yX2NvbnZlcnNpb25zLnJnYmFfMl9oZXgoXG4gICAgICAgICAgICBkZXRhaWxzLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpLFxuICAgICAgICApO1xuXG4gICAgICAgIHN0eWxlLmNvbmZpZyhzcXVhcmUsIGN1cnJlbnRfYmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRhY2hfbGlzdGVuZXJzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgeyBjbG9zZV9idG4sIG9wZW5fYnRuLCBjb2xvcl9waWNrZXIsIHJhbmRvbSwgZ3JheSwgcmFpbmJvdyB9ID1cbiAgICAgICAgICAgIERPTV9lbC5vcHRpb25zO1xuXG4gICAgICAgIGNsb3NlX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgRE9NX2VsLm9wdGlvbnMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9wZW5fYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBET01fZWwub3B0aW9ucy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29sb3JfcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY3VycmVudF9zdHlsZVswXSA9IFwiY29sb3JcIjtcbiAgICAgICAgICAgIGNvbnN0IGNob3Nlbl9jb2xvciA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgICBkcmF3aW5nX3N0eWxlc1tcImNvbG9yXCJdW1widmFsdWVcIl0gPSBjaG9zZW5fY29sb3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudF9zdHlsZVswXSA9IFwicmFuZG9tXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRfc3R5bGVbMF0gPSBcImdyYXlcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmFpbmJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudF9zdHlsZVswXSA9IFwicmFpbmJvd1wiO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgY2hhbmdlX2NvbG9yLCBkcmF3aW5nX3N0eWxlcyB9O1xufSkoKTtcblxuZXhwb3J0IHsgT3B0aW9ucyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3R5bGVzL3NrZXRjaHAuY3NzXCI7XG5cbmltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyXCI7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGEgMTZ4MTYgZ3JpZCBvZiBkaXZzIGluc2lkZSB0aGUgY2FudmFzIHdoZW4gbG9hZGluZyB0aGUgcGFnZVxuICAgIENhbnZhcy5nZW5lcmF0ZSgyNTYpO1xuXG4gICAgLy8gQWN0aXZhdGUgdG9wIGJ1dHRvbnNcbiAgICBOYXZiYXIubWFuYWdlX2J1dHRvbnMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwicmVzaXplXCIsXG4gICAgKCkgPT4gQ2FudmFzLmFkYXB0X3BpeGVscyhudWxsLCBDYW52YXMuaW5mbygpKSxcbiAgICB0cnVlLFxuKTtcblxuLy8gQXMgc29vbiBhcyB0aGUgcGFnZSBmdWxseSBsb2FkcyBjYWxscyB0aGUgbWFpbiBmdW5jdGlvblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG1haW4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9