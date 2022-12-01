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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: white;\n    position: relative;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\n/* Navbar starts here */\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n}\n\n.btn {\n    background: rgb(38, 148, 211);\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n\n    min-height: 100vh;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n}\n\n.header .close {\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n#color_picker {\n    display: none;\n}\n\n.select_color {\n    cursor: pointer;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: var(--bg_color);\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/sketchp.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA,uBAAuB;;AAEvB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;;IAE7B,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,SAAS;;IAET,iBAAiB;;IAEjB,YAAY;;IAEZ,sCAAsC;;IAEtC,gBAAgB;;IAEhB,aAAa;IACb,wBAAwB;IACxB,mBAAmB;;IAEnB,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,oBAAoB;;IAEpB,eAAe;;IAEf,yBAAyB;IACzB,yCAAyC;IACzC;wCACoC;;IAEpC,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;IACpC,YAAY;;IAEZ,kDAAkD;AACtD;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA,qBAAqB;;AAErB,uBAAuB;;AAEvB;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,qCAAqC;IACrC,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;IACxB,SAAS;AACb;;AAEA,qBAAqB;;AAErB,6BAA6B;;AAE7B;IACI,aAAa;IACb,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,2BAA2B;;AAE3B;IACI,2BAA2B;AAC/B;;AAEA;IACI;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,6BAA6B;;QAE7B,8DAA8D;IAClE;IACA;QACI,gCAAgC;;QAEhC,oEAAoE;IACxE;IACA;QACI,mCAAmC;;QAEnC;wCACgC;IACpC;IACA;QACI,6BAA6B;;QAE7B,8DAA8D;IAClE;AACJ","sourcesContent":[":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: white;\n    position: relative;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\n/* Navbar starts here */\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n}\n\n.btn {\n    background: rgb(38, 148, 211);\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n\n    min-height: 100vh;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n}\n\n.header .close {\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n#color_picker {\n    display: none;\n}\n\n.select_color {\n    cursor: pointer;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: var(--bg_color);\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./src/js/Options.js");



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

            grid_item.style.setProperty("--bg_color", "royalblue");

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
            g_item.addEventListener("mouseover", (e) =>
                _Options__WEBPACK_IMPORTED_MODULE_1__.Options.change_color(e.target),
            );
        });
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
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.grid_items().forEach((pixel) => {
            pixel.classList.remove("shine");
            pixel.style.setProperty("--bg_color", "");
        });

        _Options__WEBPACK_IMPORTED_MODULE_1__.Options.drawing_styles.rainbow.clear_intervals();
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

        const color_picker = container.querySelector("#color_picker");
        const random = container.querySelector(".random");
        const gray = container.querySelector(".gray");
        const rainbow = container.querySelector(".rainbow");

        return {
            container,
            items,
            open_btn,
            close_btn,
            color_picker,
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
        clear_btn,
        sizing_input,
        sizing_output,
        new_el,
        options,
        shining,
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
    const random_color = () => {
        return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    };

    // Returns a random interger between min (inclusive) and max (exclusive)
    const random_int = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    };

    const color_conversions = (function () {
        const hex_to_rgb = (hex) => {
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
            hex_to_rgb,
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

                        if (
                            pixel.classList.contains("shine") &&
                            current_color === value
                        ) {
                            pixel.classList.toggle("shine");
                        } else if (
                            pixel.classList.contains("shine") &&
                            current_color !== value
                        ) {
                            pixel.style.setProperty("--bg_color", value);
                        } else {
                            pixel.classList.toggle("shine");
                        }
                    };
                },
            };
        })(),

        rainbow: (function () {
            let value = random_color();

            const intervals = {};

            const clear_intervals = () => {
                for (const id in intervals) {
                    clearInterval(intervals[id]);
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

                        pixel.classList.toggle("shine");

                        const id = setInterval(() => {
                            pixel.style.setProperty(
                                "--bg_color",
                                random_color().toLowerCase(),
                            );
                        }, 1000);

                        intervals[id] = id;
                    };
                },

                get clear_intervals() {
                    return clear_intervals;
                },
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

                        pixel.classList.toggle("shine");
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

                        pixel.classList.toggle("shine");
                    };
                },
            };
        })(),
    };

    let current_style = ["color"];

    // Changes the color of the divs by adding a class to it
    const change_color = (square) => {
        const details = getComputedStyle(square);
        const style = drawing_styles[current_style[0]];

        const current_bg = color_conversions.rgba_2_hex(
            details.getPropertyValue("background-color"),
        );

        style.config(square, current_bg);
    };

    const attach_listeners = (function () {
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.close_btn.addEventListener("click", () => {
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.container.classList.remove("active");
        });

        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.open_btn.addEventListener("click", () => {
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.container.classList.add("active");
        });

        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.color_picker.addEventListener("input", (e) => {
            current_style[0] = "color";
            const chosen_color = e.target.value;

            drawing_styles["color"]["value"] = chosen_color;
        });

        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.random.addEventListener("click", () => {
            current_style[0] = "random";
        });

        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.gray.addEventListener("click", () => {
            current_style[0] = "gray";
        });

        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.rainbow.addEventListener("click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQStCOztBQUVHO0FBQ0E7QUFDRTs7QUFFcEM7QUFDQTtBQUNBLElBQUksc0VBQWlDLFVBQVUsaURBQVk7QUFDM0QsSUFBSSx5RUFBb0MsVUFBVSxrREFBYTtBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxvREFBZTs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHdEQUFtQixPQUFPLGdEQUFXO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9zdHlsZXMvc2tldGNocC5jc3MiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvc3R5bGVzL3NrZXRjaHAuY3NzPzEyOGYiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvQ2FudmFzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9ET01fZWwuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL2pzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNscl9kZWZhdWx0OiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciBzdGFydHMgaGVyZSAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzOCwgMTQ4LCAyMTEpO1xcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAtNHB4IDAgMTBweCBibGFjaztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBtYXgtd2lkdGg6IDA7XFxuXFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLm9wdGlvbnMuYWN0aXZlIHtcXG4gICAgbWF4LXdpZHRoOiAyMDB2dztcXG59XFxuXFxuLmhlYWRlciAub3Blbl9vcHRpb25zLFxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDVweCB3aGl0ZSk7XFxufVxcblxcbi5vcHRpb25zIC5vcHRpb24ge1xcbiAgICBtYXJnaW46IDAgMTV2dztcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgYm9yZGVyOiB2YXIoLS1jbHJfZGVmYXVsdCkgMC4xMjVyZW0gc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCB2YXIoLS1jbHJfZGVmYXVsdCksXFxuICAgICAgICAwIDAgMC41ZW0gMnB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gMTBweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxufVxcblxcbi5vcHRpb24ucmFpbmJvdyB7XFxuICAgIGFuaW1hdGlvbjogcmFpbmJvdyAycyBpbmZpbml0ZTtcXG59XFxuXFxuI2NvbG9yX3BpY2tlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWxlY3RfY29sb3Ige1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciBlbmRzIGhlcmUgKi9cXG5cXG4vKiBDYW52YXMgc3RhcnRzIGhlcmUgKi9cXG5cXG4uY2FudmFzIHtcXG4gICAgaGVpZ2h0OiA5MHZ3O1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHB1cnBsZTtcXG4gICAgYmFja2dyb3VuZDogI2VlZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxufVxcblxcbi5ncmlkX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qIENhbnZhcyBlbmRzIGhlcmUgKi9cXG5cXG4vKiBTaXppbmcgaW5wdXQgc3RhcnRzIGhlcmUgKi9cXG5cXG4uc2l6aW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnNpemluZyBsYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpemluZyAuaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzaXplcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogU2l6aW5nIGlucHV0IGVuZHMgaGVyZSAqL1xcblxcbi5zaGluZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnX2NvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLmNhbnZhcyB7XFxuICAgICAgICBoZWlnaHQ6IDkwdmg7XFxuICAgICAgICB3aWR0aDogOTB2aDtcXG4gICAgfVxcblxcbiAgICAub3B0aW9ucyAub3B0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHZ3O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiBibHVldmlvbGV0IDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIGJsdWV2aW9sZXQsIDAgMCAwLjVyZW0gMnB4IGJsdWV2aW9sZXQ7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiByZWJlY2NhcHVycGxlIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHJlYmVjY2FwdXJwbGUsXFxuICAgICAgICAgICAgMCAwIDAuNXJlbSAycHggcmViZWNjYXB1cnBsZTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9za2V0Y2hwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCOztJQUU3QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTOztJQUVULGlCQUFpQjs7SUFFakIsWUFBWTs7SUFFWixzQ0FBc0M7O0lBRXRDLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7O0lBRW5CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjs7SUFFcEIsZUFBZTs7SUFFZix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDO3dDQUNvQzs7SUFFcEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7O0lBRVosa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEscUJBQXFCOztBQUVyQix1QkFBdUI7O0FBRXZCO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7O0FBRUEscUJBQXFCOztBQUVyQiw2QkFBNkI7O0FBRTdCO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQSwyQkFBMkI7O0FBRTNCO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7O1FBRTdCLDhEQUE4RDtJQUNsRTtJQUNBO1FBQ0ksZ0NBQWdDOztRQUVoQyxvRUFBb0U7SUFDeEU7SUFDQTtRQUNJLG1DQUFtQzs7UUFFbkM7d0NBQ2dDO0lBQ3BDO0lBQ0E7UUFDSSw2QkFBNkI7O1FBRTdCLDhEQUE4RDtJQUNsRTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jbHJfZGVmYXVsdDogd2hpdGU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgc3RhcnRzIGhlcmUgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzgsIDE0OCwgMjExKTtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm94LXNoYWRvdzogLTRweCAwIDEwcHggYmxhY2s7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgbWF4LXdpZHRoOiAwO1xcblxcbiAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMC41cyBlYXNlLWluLW91dDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDRyZW07XFxufVxcblxcbi5vcHRpb25zLmFjdGl2ZSB7XFxuICAgIG1heC13aWR0aDogMjAwdnc7XFxufVxcblxcbi5oZWFkZXIgLm9wZW5fb3B0aW9ucyxcXG4uaGVhZGVyIC5jbG9zZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5jbG9zZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCA1cHggd2hpdGUpO1xcbn1cXG5cXG4ub3B0aW9ucyAub3B0aW9uIHtcXG4gICAgbWFyZ2luOiAwIDE1dnc7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGJvcmRlcjogdmFyKC0tY2xyX2RlZmF1bHQpIDAuMTI1cmVtIHNvbGlkO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgdmFyKC0tY2xyX2RlZmF1bHQpLFxcbiAgICAgICAgMCAwIDAuNWVtIDJweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuXFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4ub3B0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cmVtIDEwcHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcbn1cXG5cXG4ub3B0aW9uLnJhaW5ib3cge1xcbiAgICBhbmltYXRpb246IHJhaW5ib3cgMnMgaW5maW5pdGU7XFxufVxcblxcbiNjb2xvcl9waWNrZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0X2NvbG9yIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgZW5kcyBoZXJlICovXFxuXFxuLyogQ2FudmFzIHN0YXJ0cyBoZXJlICovXFxuXFxuLmNhbnZhcyB7XFxuICAgIGhlaWdodDogOTB2dztcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCBwdXJwbGU7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uZ3JpZF9pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBDYW52YXMgZW5kcyBoZXJlICovXFxuXFxuLyogU2l6aW5nIGlucHV0IHN0YXJ0cyBoZXJlICovXFxuXFxuLnNpemluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi5zaXppbmcgbGFiZWwge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zaXppbmcgLmlvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jc2l6ZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIFNpemluZyBpbnB1dCBlbmRzIGhlcmUgKi9cXG5cXG4uc2hpbmUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ19jb2xvcik7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XFxuICAgIC5jYW52YXMge1xcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xcbiAgICAgICAgd2lkdGg6IDkwdmg7XFxuICAgIH1cXG5cXG4gICAgLm9wdGlvbnMgLm9wdGlvbiB7XFxuICAgICAgICBtYXJnaW46IDAgMTB2dztcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJhaW5ib3cge1xcbiAgICAwJSB7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogIzQ4YWJlMCAwIDAgMTBweDtcXG5cXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCAjNDhhYmUwLCAwIDAgMC41cmVtIDJweCAjNDhhYmUwO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogYmx1ZXZpb2xldCAwIDAgMTBweDtcXG5cXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCBibHVldmlvbGV0LCAwIDAgMC41cmVtIDJweCBibHVldmlvbGV0O1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogcmViZWNjYXB1cnBsZSAwIDAgMTBweDtcXG5cXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCByZWJlY2NhcHVycGxlLFxcbiAgICAgICAgICAgIDAgMCAwLjVyZW0gMnB4IHJlYmVjY2FwdXJwbGU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogIzQ4YWJlMCAwIDAgMTBweDtcXG5cXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCAjNDhhYmUwLCAwIDAgMC41cmVtIDJweCAjNDhhYmUwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZXRjaHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2V0Y2hwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBET01fZWwgfSBmcm9tIFwiLi9ET01fZWxcIjtcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiLi9PcHRpb25zXCI7XG5cbmNvbnN0IENhbnZhcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaW5mbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2Fudl9yZWN0ID0gRE9NX2VsLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBjYW52X3JlY3QuaGVpZ2h0O1xuICAgICAgICBjb25zdCB3aWR0aCA9IGNhbnZfcmVjdC53aWR0aDtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlXG4gICAgICAgICAgICA/IGdldENvbXB1dGVkU3R5bGUoRE9NX2VsLmNhbnZhcywgbnVsbClcbiAgICAgICAgICAgIDogRE9NX2VsLmNhbnZhcy5jdXJyZW50U3R5bGU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIENoYW5nZXMgdGhlIHNpemUgb2YgZWFjaCBwaXhlbCBhY2NvcmRpbmcgdG8gdGhlIHNjcmVlbiBzaXplXG4gICAgY29uc3QgYWRhcHRfcGl4ZWxzID0gKGVsZW1lbnQsIHsgaGVpZ2h0LCB3aWR0aCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc19wZXJfY29sdW1uID0gRE9NX2VsLnNpemluZ19vdXRwdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYWRhcHQgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgICAgIChoZWlnaHQgLSBwYXJzZUludChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKiAyKSAvXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zX3Blcl9jb2x1bW5cbiAgICAgICAgICAgICAgICB9cHhgLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICAod2lkdGggLSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICogMikgL1xuICAgICAgICAgICAgICAgICAgICBpdGVtc19wZXJfY29sdW1uXG4gICAgICAgICAgICAgICAgfXB4YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgPyBhZGFwdChlbGVtZW50KVxuICAgICAgICAgICAgOiBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGl0ZW0pID0+IGFkYXB0KGl0ZW0pKTtcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlcyBhIGNhbnZhcyB3aXRoIChudW0pIHNxdWFyZXMgZGl2c1xuICAgIGNvbnN0IGdlbmVyYXRlID0gKG51bSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc19wZXJfY29sdW1uID0gTWF0aC5zcXJ0KG51bSk7XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGluZm8oKTtcblxuICAgICAgICAvLyBDcmVhdGVzIGRpdnMgYmFzZWQgb24gdGhlIGFyZ3VtZW50IG51bWJlclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkX2l0ZW0gPSBET01fZWwubmV3X2VsKFwiZGl2XCIpO1xuXG4gICAgICAgICAgICBncmlkX2l0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcImdyaWRfaXRlbVwiKTtcbiAgICAgICAgICAgIGFkYXB0X3BpeGVscyhncmlkX2l0ZW0sIGRldGFpbHMpO1xuXG4gICAgICAgICAgICBncmlkX2l0ZW0uc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnX2NvbG9yXCIsIFwicm95YWxibHVlXCIpO1xuXG4gICAgICAgICAgICBET01fZWwuY2FudmFzLmFwcGVuZENoaWxkKGdyaWRfaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGFuZ2VzIHRoZSBjYW52YXMgc2l6ZSBhbmQgZ3JpZCBsYXlvdXQgYmFzZWQgb24gdGhlIGFyZ3VtZW50IG51bWJlclxuICAgICAgICBET01fZWwuY2FudmFzLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3R5bGVcIixcbiAgICAgICAgICAgIGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke2l0ZW1zX3Blcl9jb2x1bW59LCAxZnIpYCxcbiAgICAgICAgKTtcblxuICAgICAgICBkcmF3KCk7XG4gICAgfTtcblxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgYW5kIGNoYW5nZSB0aGUgc3R5bGUgb2YgZWFjaCBkaXYgaW5zaWRlIHRoZSBjYW52YXNcbiAgICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGdfaXRlbSkgPT4ge1xuICAgICAgICAgICAgZ19pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+XG4gICAgICAgICAgICAgICAgT3B0aW9ucy5jaGFuZ2VfY29sb3IoZS50YXJnZXQpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gYSBwYXJlbnRcbiAgICBjb25zdCBwdXJnZV9hbGxfY2hpbGRyZW4gPSAocGFyZW50KSA9PiB7XG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBkZWNsYXJlIGFuIGFycmF5IGZvciBhbGwgdGhlIHRpbWVPdXRzXG4gICAgY29uc3QgcmVzaXplX3RpbWVfb3V0cyA9IHt9O1xuXG4gICAgLy8gdG8gY2xlYXIgdGhlbSBhbGwsIGp1c3QgY2FsbCB0aGlzXG4gICAgY29uc3QgY2xlYXJfcmVzaXplX3RtX290ID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHJlc2l6ZV90aW1lX291dHMpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVfdGltZV9vdXRzW2lkXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmVzaXplcyBjYW52YXMgYmFzZWQgb24gdXNlciBpbnB1dFxuICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlc2l6ZV90aW1lX291dHNbXCJ1bmlxdWVfaWRcIl0pIGNsZWFyX3Jlc2l6ZV90bV9vdCgpO1xuXG4gICAgICAgIC8vIENoYW5nZXMgdGhlIG91dHB1dCB0byBkaXNwbGF5IHRoZSBzZWxlY3RlZCB2YWx1ZVxuICAgICAgICBET01fZWwuc2l6aW5nX291dHB1dC52YWx1ZSA9IERPTV9lbC5zaXppbmdfaW5wdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlc19wZXJfc2lkZSA9IERPTV9lbC5zaXppbmdfaW5wdXQudmFsdWU7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY2hlY2tfaWZfdmFsaWRfbnVtYmVyKHNxdWFyZXNfcGVyX3NpZGUsIDEsIDEwMCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJOb3QgcG9zc2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9ibGVtIHdpdGggcmVzaXplX2NhbnZhcygpIGZ1bmN0aW9uXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZXMgYWxsIHBpeGVscyBmcm9tIHRoZSBwcmV2aW91cyBjYW52YXNcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRE9NX2VsLmNhbnZhcy5jb250YWlucyhET01fZWwuZmlyc3RfZ3JpZF9pdGVtKCkpOlxuICAgICAgICAgICAgICAgICAgICBwdXJnZV9hbGxfY2hpbGRyZW4oRE9NX2VsLmNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvYmxlbSB3aGVuIHJlc2l6ZV9jYW52YXMoKSBmdW5jdGlvblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcXVhcmVzX3Blcl9zaWRlID0gTnVtYmVyKHNxdWFyZXNfcGVyX3NpZGUpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGVzIGEgbmV3LCByZXNpemVkIGNhbnZhc1xuICAgICAgICAgICAgQ2FudmFzLmdlbmVyYXRlKHNxdWFyZXNfcGVyX3NpZGUgKiogMik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzaXplX3RpbWVfb3V0c1tcInVuaXF1ZV9pZFwiXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZhdGUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8vIENoZWNrcyBpZiB0aGUgdXNlciBpbnB1dCBpcyBhIHZhbGlkIG51bWJlciBiYXNlZCBvbiBtaW4gYW5kIG1heCB2YWx1ZXNcbiAgICBjb25zdCBjaGVja19pZl92YWxpZF9udW1iZXIgPSAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNOYU4obnVtYmVyKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGNhc2UgbnVtID4gbWF4OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgY2FzZSBudW0gPCBtaW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBjYXNlIG51bSA+PSBtaW4gJiYgbnVtIDw9IG1heDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9ibGVtIHdpdGggY2hlY2tfaWZfdmFsaWRfbnVtYmVyKCkgZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVaG1tLCBpdCBjbGVhcnMgdGhlIGNhbnZhc1xuICAgIC8vIGJ5IHJlbW92aW5nIHRoZSBjbGFzcyBhZGRlZCB0byB0aGVtIHdoZW4gZHJhd2luZ1xuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKHBpeGVsKSA9PiB7XG4gICAgICAgICAgICBwaXhlbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpbmVcIik7XG4gICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmdfY29sb3JcIiwgXCJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9wdGlvbnMuZHJhd2luZ19zdHlsZXMucmFpbmJvdy5jbGVhcl9pbnRlcnZhbHMoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgaW5mbywgZ2VuZXJhdGUsIGNsZWFyLCByZXNpemUsIGFkYXB0X3BpeGVscyB9O1xufSkoKTtcblxuZXhwb3J0IHsgQ2FudmFzIH07XG4iLCJjb25zdCBET01fZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FudmFzXCIpO1xuXG4gICAgY29uc3QgZ3JpZF9pdGVtcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkX2l0ZW1cIikpO1xuICAgIH07XG5cbiAgICBjb25zdCBmaXJzdF9ncmlkX2l0ZW0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfaXRlbVwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGVhclwiKTtcbiAgICBjb25zdCBzaXppbmdfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpemluZ19pbnB1dFwiKTtcbiAgICBjb25zdCBzaXppbmdfb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaXppbmdfb3V0cHV0XCIpO1xuXG4gICAgY29uc3QgbmV3X2VsID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25cIik7XG5cbiAgICAgICAgY29uc3Qgb3Blbl9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLm9wZW5fb3B0aW9uc1wiKTtcbiAgICAgICAgY29uc3QgY2xvc2VfYnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2xvc2VcIik7XG5cbiAgICAgICAgY29uc3QgY29sb3JfcGlja2VyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JfcGlja2VyXCIpO1xuICAgICAgICBjb25zdCByYW5kb20gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5yYW5kb21cIik7XG4gICAgICAgIGNvbnN0IGdyYXkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ncmF5XCIpO1xuICAgICAgICBjb25zdCByYWluYm93ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucmFpbmJvd1wiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICBvcGVuX2J0bixcbiAgICAgICAgICAgIGNsb3NlX2J0bixcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlcixcbiAgICAgICAgICAgIHJhbmRvbSxcbiAgICAgICAgICAgIGdyYXksXG4gICAgICAgICAgICByYWluYm93LFxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBzaGluaW5nID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FudmFzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpbmluZ1wiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBncmlkX2l0ZW1zLFxuICAgICAgICBmaXJzdF9ncmlkX2l0ZW0sXG4gICAgICAgIGNsZWFyX2J0bixcbiAgICAgICAgc2l6aW5nX2lucHV0LFxuICAgICAgICBzaXppbmdfb3V0cHV0LFxuICAgICAgICBuZXdfZWwsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHNoaW5pbmcsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IERPTV9lbCB9O1xuIiwiaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsXCI7XG5cbmNvbnN0IE9wdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJhbmRvbV9jb2xvciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgKChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYpIDw8IDApLnRvU3RyaW5nKDE2KTtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlcmdlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG4gICAgY29uc3QgcmFuZG9tX2ludCA9IChtaW4sIG1heCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIH07XG5cbiAgICBjb25zdCBjb2xvcl9jb252ZXJzaW9ucyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGhleF90b19yZ2IgPSAoaGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgICB2YXIgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgICAgICAgdmFyIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgICAgICAgICAgdmFyIGIgPSBiaWdpbnQgJiAyNTU7XG5cbiAgICAgICAgICAgIHJldHVybiBbciwgZywgYl0uam9pbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJnYmFfMl9oZXggPSAocmdiYSkgPT5cbiAgICAgICAgICAgIGAjJHtyZ2JhXG4gICAgICAgICAgICAgICAgLm1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCtcXC57MCwxfVxcZCopKT9cXCkkLyxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgLm1hcCgobiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgKGkgPT09IDMgPyBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobikgKiAyNTUpIDogcGFyc2VGbG9hdChuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYWRTdGFydCgyLCBcIjBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiTmFOXCIsIFwiXCIpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKX1gO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZXhfdG9fcmdiLFxuICAgICAgICAgICAgcmdiYV8yX2hleCxcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgZHJhd2luZ19zdHlsZXMgPSB7XG4gICAgICAgIGNvbG9yOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gXCIjNWY5ZWEwXCI7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQgdmFsdWUobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXQgY29uZmlnKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBpeGVsLCBjdXJyZW50X2NvbG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYmdfY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaW5lXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jb2xvciA9PT0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC50b2dnbGUoXCJzaGluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpbmVcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2NvbG9yICE9PSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnX2NvbG9yXCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuY2xhc3NMaXN0LnRvZ2dsZShcInNoaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpLFxuXG4gICAgICAgIHJhaW5ib3c6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYW5kb21fY29sb3IoKTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWxzID0ge307XG5cbiAgICAgICAgICAgIGNvbnN0IGNsZWFyX2ludGVydmFscyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlkIGluIGludGVydmFscykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsc1tpZF0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IChpdGVtLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIiksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGl4ZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbV9jb2xvcigpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQgMXMgZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC50b2dnbGUoXCJzaGluZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21fY29sb3IoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxzW2lkXSA9IGlkO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXQgY2xlYXJfaW50ZXJ2YWxzKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xlYXJfaW50ZXJ2YWxzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpLFxuXG4gICAgICAgIGdyYXk6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbHVtaW5vc2l0eSA9IDA7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGByZ2JhKCR7bHVtaW5vc2l0eX0sICR7bHVtaW5vc2l0eX0sICR7bHVtaW5vc2l0eX0pYDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2V0IGNvbmZpZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwaXhlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnX2NvbG9yXCIsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbHVtaW5vc2l0eSA9IChsdW1pbm9zaXR5ICsgMTUpICUgMjU1O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGByZ2JhKCR7bHVtaW5vc2l0eX0sICR7bHVtaW5vc2l0eX0sICR7bHVtaW5vc2l0eX0pYDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuY2xhc3NMaXN0LnRvZ2dsZShcInNoaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpLFxuXG4gICAgICAgIHJhbmRvbTogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhbmRvbV9jb2xvcigpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXQgY29uZmlnKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBpeGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYmdfY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21fY29sb3IoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuY2xhc3NMaXN0LnRvZ2dsZShcInNoaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpLFxuICAgIH07XG5cbiAgICBsZXQgY3VycmVudF9zdHlsZSA9IFtcImNvbG9yXCJdO1xuXG4gICAgLy8gQ2hhbmdlcyB0aGUgY29sb3Igb2YgdGhlIGRpdnMgYnkgYWRkaW5nIGEgY2xhc3MgdG8gaXRcbiAgICBjb25zdCBjaGFuZ2VfY29sb3IgPSAoc3F1YXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBnZXRDb21wdXRlZFN0eWxlKHNxdWFyZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZHJhd2luZ19zdHlsZXNbY3VycmVudF9zdHlsZVswXV07XG5cbiAgICAgICAgY29uc3QgY3VycmVudF9iZyA9IGNvbG9yX2NvbnZlcnNpb25zLnJnYmFfMl9oZXgoXG4gICAgICAgICAgICBkZXRhaWxzLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpLFxuICAgICAgICApO1xuXG4gICAgICAgIHN0eWxlLmNvbmZpZyhzcXVhcmUsIGN1cnJlbnRfYmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRhY2hfbGlzdGVuZXJzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRE9NX2VsLm9wdGlvbnMuY2xvc2VfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBET01fZWwub3B0aW9ucy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRE9NX2VsLm9wdGlvbnMub3Blbl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIERPTV9lbC5vcHRpb25zLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBET01fZWwub3B0aW9ucy5jb2xvcl9waWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50X3N0eWxlWzBdID0gXCJjb2xvclwiO1xuICAgICAgICAgICAgY29uc3QgY2hvc2VuX2NvbG9yID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgIGRyYXdpbmdfc3R5bGVzW1wiY29sb3JcIl1bXCJ2YWx1ZVwiXSA9IGNob3Nlbl9jb2xvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRE9NX2VsLm9wdGlvbnMucmFuZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50X3N0eWxlWzBdID0gXCJyYW5kb21cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRE9NX2VsLm9wdGlvbnMuZ3JheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudF9zdHlsZVswXSA9IFwiZ3JheVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBET01fZWwub3B0aW9ucy5yYWluYm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50X3N0eWxlWzBdID0gXCJyYWluYm93XCI7XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBjaGFuZ2VfY29sb3IsIGRyYXdpbmdfc3R5bGVzIH07XG59KSgpO1xuXG5leHBvcnQgeyBPcHRpb25zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvc2tldGNocC5jc3NcIjtcblxuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQgeyBET01fZWwgfSBmcm9tIFwiLi9ET01fZWxcIjtcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiLi9PcHRpb25zXCI7XG5cbi8vIEFkZHMgZnVuY3Rpb25hbGl0eSB0byB0aGUgdG9wIGJ1dHRvbnNcbmNvbnN0IG1hbmFnZV90b3BfYnV0dG9ucyA9ICgpID0+IHtcbiAgICBET01fZWwuY2xlYXJfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBDYW52YXMuY2xlYXIpO1xuICAgIERPTV9lbC5zaXppbmdfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIENhbnZhcy5yZXNpemUpO1xufTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgICAvLyBDcmVhdGUgYSAxNngxNiBncmlkIG9mIGRpdnMgaW5zaWRlIHRoZSBjYW52YXMgd2hlbiBsb2FkaW5nIHRoZSBwYWdlXG4gICAgQ2FudmFzLmdlbmVyYXRlKDI1Nik7XG5cbiAgICAvLyBBY3RpdmF0ZSB0b3AgYnV0dG9uc1xuICAgIG1hbmFnZV90b3BfYnV0dG9ucygpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJyZXNpemVcIixcbiAgICAoKSA9PiBDYW52YXMuYWRhcHRfcGl4ZWxzKG51bGwsIENhbnZhcy5pbmZvKCkpLFxuICAgIHRydWUsXG4pO1xuXG4vLyBBcyBzb29uIGFzIHRoZSBwYWdlIGZ1bGx5IGxvYWRzIGNhbGxzIHRoZSBtYWluIGZ1bmN0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbWFpbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=