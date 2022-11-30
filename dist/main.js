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

            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.appendChild(grid_item);
        }

        // Changes the canvas size and grid layout based on the argument number
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.canvas.setAttribute(
            "style",
            `grid-template-columns: repeat(${items_per_column}, 1fr)`,
        );

        draw();
    };

    const drawing_styles = { color: "", rainbow: "", gray: "", random: "" };

    let current_style = ["color"];

    // Attach event listeners and change the style of each div inside the canvas
    const draw = () => {
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.grid_items().forEach((g_item) => {
            g_item.addEventListener("mouseover", (e) =>
                change_color(e.target, drawing_styles[current_style[0]]),
            );
        });
    };

    // Removes all children from a parent
    const purge_all_children = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    // Changes the color of the divs by adding a class to it
    const change_color = (square, color) => {
        square.classList.toggle("shine");
        square.style.setProperty("--bg_color", color);
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

        return {
            container,
            items,
            open_btn,
            close_btn,
            color_picker,
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
    const attach_listeners = (function () {
        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.close_btn.addEventListener("click", (e) => {
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.container.classList.remove("active");
        });

        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.open_btn.addEventListener("click", (e) => {
            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.container.classList.add("active");
        });

        _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.options.color_picker.addEventListener("input", (e) => {
            const chosen_color = e.target.value;

            _DOM_el__WEBPACK_IMPORTED_MODULE_0__.DOM_el.shining().forEach((item) => {
                item.setAttribute("style", `background: ${chosen_color}`);
            });
        });
    })();

    const select_color = () => {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7O0FBRUc7QUFDQTtBQUNFOztBQUVwQztBQUNBO0FBQ0EsSUFBSSxzRUFBaUMsVUFBVSxpREFBWTtBQUMzRCxJQUFJLHlFQUFvQyxVQUFVLGtEQUFhO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFlOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsd0RBQW1CLE9BQU8sZ0RBQVc7QUFDL0M7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL3N0eWxlcy9za2V0Y2hwLmNzcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9zdHlsZXMvc2tldGNocC5jc3M/MTI4ZiIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL2pzL0RPTV9lbC5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY2xyX2RlZmF1bHQ6IHdoaXRlO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTmF2YmFyIHN0YXJ0cyBoZXJlICovXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM4LCAxNDgsIDIxMSk7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IC00cHggMCAxMHB4IGJsYWNrO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICAgIG1heC13aWR0aDogMDtcXG5cXG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4ub3B0aW9ucy5hY3RpdmUge1xcbiAgICBtYXgtd2lkdGg6IDIwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIC5vcGVuX29wdGlvbnMsXFxuLmhlYWRlciAuY2xvc2Uge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmhlYWRlciAuY2xvc2Uge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggNXB4IHdoaXRlKTtcXG59XFxuXFxuLm9wdGlvbnMgLm9wdGlvbiB7XFxuICAgIG1hcmdpbjogMCAxNXZ3O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBib3JkZXI6IHZhcigtLWNscl9kZWZhdWx0KSAwLjEyNXJlbSBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHZhcigtLWNscl9kZWZhdWx0KSxcXG4gICAgICAgIDAgMCAwLjVlbSAycHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLm9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXJlbSAxMHB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG59XFxuXFxuLm9wdGlvbi5yYWluYm93IHtcXG4gICAgYW5pbWF0aW9uOiByYWluYm93IDJzIGluZmluaXRlO1xcbn1cXG5cXG4jY29sb3JfcGlja2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdF9jb2xvciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTmF2YmFyIGVuZHMgaGVyZSAqL1xcblxcbi8qIENhbnZhcyBzdGFydHMgaGVyZSAqL1xcblxcbi5jYW52YXMge1xcbiAgICBoZWlnaHQ6IDkwdnc7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG59XFxuXFxuLmdyaWRfaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLyogQ2FudmFzIGVuZHMgaGVyZSAqL1xcblxcbi8qIFNpemluZyBpbnB1dCBzdGFydHMgaGVyZSAqL1xcblxcbi5zaXppbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4uc2l6aW5nIGxhYmVsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2l6aW5nIC5pbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NpemVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBTaXppbmcgaW5wdXQgZW5kcyBoZXJlICovXFxuXFxuLnNoaW5lIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmdfY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgICAuY2FudmFzIHtcXG4gICAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgICAgIHdpZHRoOiA5MHZoO1xcbiAgICB9XFxuXFxuICAgIC5vcHRpb25zIC5vcHRpb24ge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwdnc7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByYWluYm93IHtcXG4gICAgMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IGJsdWV2aW9sZXQgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgYmx1ZXZpb2xldCwgMCAwIDAuNXJlbSAycHggYmx1ZXZpb2xldDtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJlYmVjY2FwdXJwbGUgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgcmViZWNjYXB1cnBsZSxcXG4gICAgICAgICAgICAwIDAgMC41cmVtIDJweCByZWJlY2NhcHVycGxlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NrZXRjaHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7O0lBRVQsaUJBQWlCOztJQUVqQixZQUFZOztJQUVaLHNDQUFzQzs7SUFFdEMsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjs7SUFFbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9COztJQUVwQixlQUFlOztJQUVmLHlCQUF5QjtJQUN6Qix5Q0FBeUM7SUFDekM7d0NBQ29DOztJQUVwQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTs7SUFFWixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCLHVCQUF1Qjs7QUFFdkI7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQSxxQkFBcUI7O0FBRXJCLDZCQUE2Qjs7QUFFN0I7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBLDJCQUEyQjs7QUFFM0I7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2Qjs7UUFFN0IsOERBQThEO0lBQ2xFO0lBQ0E7UUFDSSxnQ0FBZ0M7O1FBRWhDLG9FQUFvRTtJQUN4RTtJQUNBO1FBQ0ksbUNBQW1DOztRQUVuQzt3Q0FDZ0M7SUFDcEM7SUFDQTtRQUNJLDZCQUE2Qjs7UUFFN0IsOERBQThEO0lBQ2xFO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNscl9kZWZhdWx0OiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciBzdGFydHMgaGVyZSAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzOCwgMTQ4LCAyMTEpO1xcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAtNHB4IDAgMTBweCBibGFjaztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBtYXgtd2lkdGg6IDA7XFxuXFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLm9wdGlvbnMuYWN0aXZlIHtcXG4gICAgbWF4LXdpZHRoOiAyMDB2dztcXG59XFxuXFxuLmhlYWRlciAub3Blbl9vcHRpb25zLFxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDVweCB3aGl0ZSk7XFxufVxcblxcbi5vcHRpb25zIC5vcHRpb24ge1xcbiAgICBtYXJnaW46IDAgMTV2dztcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgYm9yZGVyOiB2YXIoLS1jbHJfZGVmYXVsdCkgMC4xMjVyZW0gc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCB2YXIoLS1jbHJfZGVmYXVsdCksXFxuICAgICAgICAwIDAgMC41ZW0gMnB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gMTBweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxufVxcblxcbi5vcHRpb24ucmFpbmJvdyB7XFxuICAgIGFuaW1hdGlvbjogcmFpbmJvdyAycyBpbmZpbml0ZTtcXG59XFxuXFxuI2NvbG9yX3BpY2tlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWxlY3RfY29sb3Ige1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciBlbmRzIGhlcmUgKi9cXG5cXG4vKiBDYW52YXMgc3RhcnRzIGhlcmUgKi9cXG5cXG4uY2FudmFzIHtcXG4gICAgaGVpZ2h0OiA5MHZ3O1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHB1cnBsZTtcXG4gICAgYmFja2dyb3VuZDogI2VlZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxufVxcblxcbi5ncmlkX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qIENhbnZhcyBlbmRzIGhlcmUgKi9cXG5cXG4vKiBTaXppbmcgaW5wdXQgc3RhcnRzIGhlcmUgKi9cXG5cXG4uc2l6aW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnNpemluZyBsYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpemluZyAuaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzaXplcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogU2l6aW5nIGlucHV0IGVuZHMgaGVyZSAqL1xcblxcbi5zaGluZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnX2NvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLmNhbnZhcyB7XFxuICAgICAgICBoZWlnaHQ6IDkwdmg7XFxuICAgICAgICB3aWR0aDogOTB2aDtcXG4gICAgfVxcblxcbiAgICAub3B0aW9ucyAub3B0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHZ3O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiBibHVldmlvbGV0IDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIGJsdWV2aW9sZXQsIDAgMCAwLjVyZW0gMnB4IGJsdWV2aW9sZXQ7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiByZWJlY2NhcHVycGxlIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHJlYmVjY2FwdXJwbGUsXFxuICAgICAgICAgICAgMCAwIDAuNXJlbSAycHggcmViZWNjYXB1cnBsZTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tldGNocC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZXRjaHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbFwiO1xuXG5jb25zdCBDYW52YXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGluZm8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZfcmVjdCA9IERPTV9lbC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY2Fudl9yZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjYW52X3JlY3Qud2lkdGg7XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZVxuICAgICAgICAgICAgPyBnZXRDb21wdXRlZFN0eWxlKERPTV9lbC5jYW52YXMsIG51bGwpXG4gICAgICAgICAgICA6IERPTV9lbC5jYW52YXMuY3VycmVudFN0eWxlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBDaGFuZ2VzIHRoZSBzaXplIG9mIGVhY2ggcGl4ZWwgYWNjb3JkaW5nIHRvIHRoZSBzY3JlZW4gc2l6ZVxuICAgIGNvbnN0IGFkYXB0X3BpeGVscyA9IChlbGVtZW50LCB7IGhlaWdodCwgd2lkdGgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXNfcGVyX2NvbHVtbiA9IERPTV9lbC5zaXppbmdfb3V0cHV0LnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGFkYXB0ID0gKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiLFxuICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICAoaGVpZ2h0IC0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpICogMikgL1xuICAgICAgICAgICAgICAgICAgICBpdGVtc19wZXJfY29sdW1uXG4gICAgICAgICAgICAgICAgfXB4YCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICAgICAgKHdpZHRoIC0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSAqIDIpIC9cbiAgICAgICAgICAgICAgICAgICAgaXRlbXNfcGVyX2NvbHVtblxuICAgICAgICAgICAgICAgIH1weGAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgID8gYWRhcHQoZWxlbWVudClcbiAgICAgICAgICAgIDogRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChpdGVtKSA9PiBhZGFwdChpdGVtKSk7XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZXMgYSBjYW52YXMgd2l0aCAobnVtKSBzcXVhcmVzIGRpdnNcbiAgICBjb25zdCBnZW5lcmF0ZSA9IChudW0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXNfcGVyX2NvbHVtbiA9IE1hdGguc3FydChudW0pO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBpbmZvKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlcyBkaXZzIGJhc2VkIG9uIHRoZSBhcmd1bWVudCBudW1iZXJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZF9pdGVtID0gRE9NX2VsLm5ld19lbChcImRpdlwiKTtcblxuICAgICAgICAgICAgZ3JpZF9pdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJncmlkX2l0ZW1cIik7XG4gICAgICAgICAgICBhZGFwdF9waXhlbHMoZ3JpZF9pdGVtLCBkZXRhaWxzKTtcblxuICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5hcHBlbmRDaGlsZChncmlkX2l0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlcyB0aGUgY2FudmFzIHNpemUgYW5kIGdyaWQgbGF5b3V0IGJhc2VkIG9uIHRoZSBhcmd1bWVudCBudW1iZXJcbiAgICAgICAgRE9NX2VsLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtpdGVtc19wZXJfY29sdW1ufSwgMWZyKWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgZHJhdygpO1xuICAgIH07XG5cbiAgICBjb25zdCBkcmF3aW5nX3N0eWxlcyA9IHsgY29sb3I6IFwiXCIsIHJhaW5ib3c6IFwiXCIsIGdyYXk6IFwiXCIsIHJhbmRvbTogXCJcIiB9O1xuXG4gICAgbGV0IGN1cnJlbnRfc3R5bGUgPSBbXCJjb2xvclwiXTtcblxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgYW5kIGNoYW5nZSB0aGUgc3R5bGUgb2YgZWFjaCBkaXYgaW5zaWRlIHRoZSBjYW52YXNcbiAgICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGdfaXRlbSkgPT4ge1xuICAgICAgICAgICAgZ19pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+XG4gICAgICAgICAgICAgICAgY2hhbmdlX2NvbG9yKGUudGFyZ2V0LCBkcmF3aW5nX3N0eWxlc1tjdXJyZW50X3N0eWxlWzBdXSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHBhcmVudFxuICAgIGNvbnN0IHB1cmdlX2FsbF9jaGlsZHJlbiA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENoYW5nZXMgdGhlIGNvbG9yIG9mIHRoZSBkaXZzIGJ5IGFkZGluZyBhIGNsYXNzIHRvIGl0XG4gICAgY29uc3QgY2hhbmdlX2NvbG9yID0gKHNxdWFyZSwgY29sb3IpID0+IHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC50b2dnbGUoXCJzaGluZVwiKTtcbiAgICAgICAgc3F1YXJlLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ19jb2xvclwiLCBjb2xvcik7XG4gICAgfTtcblxuICAgIC8vIGRlY2xhcmUgYW4gYXJyYXkgZm9yIGFsbCB0aGUgdGltZU91dHNcbiAgICBjb25zdCByZXNpemVfdGltZV9vdXRzID0ge307XG5cbiAgICAvLyB0byBjbGVhciB0aGVtIGFsbCwganVzdCBjYWxsIHRoaXNcbiAgICBjb25zdCBjbGVhcl9yZXNpemVfdG1fb3QgPSAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaWQgaW4gcmVzaXplX3RpbWVfb3V0cykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZV90aW1lX291dHNbaWRdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBSZXNpemVzIGNhbnZhcyBiYXNlZCBvbiB1c2VyIGlucHV0XG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVzaXplX3RpbWVfb3V0c1tcInVuaXF1ZV9pZFwiXSkgY2xlYXJfcmVzaXplX3RtX290KCk7XG5cbiAgICAgICAgLy8gQ2hhbmdlcyB0aGUgb3V0cHV0IHRvIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHZhbHVlXG4gICAgICAgIERPTV9lbC5zaXppbmdfb3V0cHV0LnZhbHVlID0gRE9NX2VsLnNpemluZ19pbnB1dC52YWx1ZTtcblxuICAgICAgICBjb25zdCBhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzcXVhcmVzX3Blcl9zaWRlID0gRE9NX2VsLnNpemluZ19pbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgc3dpdGNoIChjaGVja19pZl92YWxpZF9udW1iZXIoc3F1YXJlc19wZXJfc2lkZSwgMSwgMTAwKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIk5vdCBwb3NzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2JsZW0gd2l0aCByZXNpemVfY2FudmFzKCkgZnVuY3Rpb25cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlcyBhbGwgcGl4ZWxzIGZyb20gdGhlIHByZXZpb3VzIGNhbnZhc1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBET01fZWwuY2FudmFzLmNvbnRhaW5zKERPTV9lbC5maXJzdF9ncmlkX2l0ZW0oKSk6XG4gICAgICAgICAgICAgICAgICAgIHB1cmdlX2FsbF9jaGlsZHJlbihET01fZWwuY2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9ibGVtIHdoZW4gcmVzaXplX2NhbnZhcygpIGZ1bmN0aW9uXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNxdWFyZXNfcGVyX3NpZGUgPSBOdW1iZXIoc3F1YXJlc19wZXJfc2lkZSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBuZXcsIHJlc2l6ZWQgY2FudmFzXG4gICAgICAgICAgICBDYW52YXMuZ2VuZXJhdGUoc3F1YXJlc19wZXJfc2lkZSAqKiAyKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXNpemVfdGltZV9vdXRzW1widW5pcXVlX2lkXCJdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmF0ZSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgLy8gQ2hlY2tzIGlmIHRoZSB1c2VyIGlucHV0IGlzIGEgdmFsaWQgbnVtYmVyIGJhc2VkIG9uIG1pbiBhbmQgbWF4IHZhbHVlc1xuICAgIGNvbnN0IGNoZWNrX2lmX3ZhbGlkX251bWJlciA9IChudW1iZXIsIG1pbiwgbWF4KSA9PiB7XG4gICAgICAgIGNvbnN0IG51bSA9IE51bWJlcihudW1iZXIpO1xuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBpc05hTihudW1iZXIpOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgY2FzZSBudW0gPiBtYXg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBjYXNlIG51bSA8IG1pbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGNhc2UgbnVtID49IG1pbiAmJiBudW0gPD0gbWF4OlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2JsZW0gd2l0aCBjaGVja19pZl92YWxpZF9udW1iZXIoKSBmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFVobW0sIGl0IGNsZWFycyB0aGUgY2FudmFzXG4gICAgLy8gYnkgcmVtb3ZpbmcgdGhlIGNsYXNzIGFkZGVkIHRvIHRoZW0gd2hlbiBkcmF3aW5nXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaCgocGl4ZWwpID0+IHtcbiAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGluZVwiKTtcbiAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ19jb2xvclwiLCBcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGluZm8sIGdlbmVyYXRlLCBjbGVhciwgcmVzaXplLCBhZGFwdF9waXhlbHMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IENhbnZhcyB9O1xuIiwiY29uc3QgRE9NX2VsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhc1wiKTtcblxuICAgIGNvbnN0IGdyaWRfaXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZF9pdGVtXCIpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmlyc3RfZ3JpZF9pdGVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX2l0ZW1cIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIik7XG4gICAgY29uc3Qgc2l6aW5nX2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaXppbmdfaW5wdXRcIik7XG4gICAgY29uc3Qgc2l6aW5nX291dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l6aW5nX291dHB1dFwiKTtcblxuICAgIGNvbnN0IG5ld19lbCA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcHRpb25zID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3B0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG9wZW5fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5vcGVuX29wdGlvbnNcIik7XG4gICAgICAgIGNvbnN0IGNsb3NlX2J0biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmNsb3NlXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yX3BpY2tlciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yX3BpY2tlclwiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICBvcGVuX2J0bixcbiAgICAgICAgICAgIGNsb3NlX2J0bixcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlcixcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgc2hpbmluZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhbnZhcy5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaW5pbmdcIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNhbnZhcyxcbiAgICAgICAgZ3JpZF9pdGVtcyxcbiAgICAgICAgZmlyc3RfZ3JpZF9pdGVtLFxuICAgICAgICBjbGVhcl9idG4sXG4gICAgICAgIHNpemluZ19pbnB1dCxcbiAgICAgICAgc2l6aW5nX291dHB1dCxcbiAgICAgICAgbmV3X2VsLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBzaGluaW5nLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBET01fZWwgfTtcbiIsImltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbFwiO1xuXG5jb25zdCBPcHRpb25zID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhdHRhY2hfbGlzdGVuZXJzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRE9NX2VsLm9wdGlvbnMuY2xvc2VfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgRE9NX2VsLm9wdGlvbnMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIERPTV9lbC5vcHRpb25zLm9wZW5fYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgRE9NX2VsLm9wdGlvbnMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIERPTV9lbC5vcHRpb25zLmNvbG9yX3BpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNob3Nlbl9jb2xvciA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgICBET01fZWwuc2hpbmluZygpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kOiAke2Nob3Nlbl9jb2xvcn1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgc2VsZWN0X2NvbG9yID0gKCkgPT4ge307XG5cbiAgICByZXR1cm4ge307XG59KSgpO1xuXG5leHBvcnQgeyBPcHRpb25zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvc2tldGNocC5jc3NcIjtcblxuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQgeyBET01fZWwgfSBmcm9tIFwiLi9ET01fZWxcIjtcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiLi9PcHRpb25zXCI7XG5cbi8vIEFkZHMgZnVuY3Rpb25hbGl0eSB0byB0aGUgdG9wIGJ1dHRvbnNcbmNvbnN0IG1hbmFnZV90b3BfYnV0dG9ucyA9ICgpID0+IHtcbiAgICBET01fZWwuY2xlYXJfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBDYW52YXMuY2xlYXIpO1xuICAgIERPTV9lbC5zaXppbmdfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIENhbnZhcy5yZXNpemUpO1xufTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgICAvLyBDcmVhdGUgYSAxNngxNiBncmlkIG9mIGRpdnMgaW5zaWRlIHRoZSBjYW52YXMgd2hlbiBsb2FkaW5nIHRoZSBwYWdlXG4gICAgQ2FudmFzLmdlbmVyYXRlKDI1Nik7XG5cbiAgICAvLyBBY3RpdmF0ZSB0b3AgYnV0dG9uc1xuICAgIG1hbmFnZV90b3BfYnV0dG9ucygpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJyZXNpemVcIixcbiAgICAoKSA9PiBDYW52YXMuYWRhcHRfcGl4ZWxzKG51bGwsIENhbnZhcy5pbmZvKCkpLFxuICAgIHRydWUsXG4pO1xuXG4vLyBBcyBzb29uIGFzIHRoZSBwYWdlIGZ1bGx5IGxvYWRzIGNhbGxzIHRoZSBtYWluIGZ1bmN0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbWFpbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=