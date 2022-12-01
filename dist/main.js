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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: white;\n    position: relative;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\ninput[type=\"color\"] {\n    display: none;\n}\n\n/* Navbar starts here */\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n}\n\n.btn {\n    background: rgb(38, 148, 211);\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.eraser.active {\n    background: purple;\n}\n\n.change_bg {\n    background: black;\n    font-weight: bold;\n\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n\n    position: absolute;\n    left: 0;\n    bottom: 50%;\n\n    transform: translate(-92%, -50%);\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: transform 0.5s ease-in;\n}\n\n.change_bg:hover {\n    transform: translate(-5%, -50%);\n    cursor: pointer;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n\n    min-height: 100vh;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n}\n\n.header .close {\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n.select_color {\n    cursor: pointer;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.canvas.erasing {\n    cursor: crosshair;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: var(--bg_color);\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/sketchp.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA,uBAAuB;;AAEvB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;;IAEjB,oBAAoB;IACpB,kBAAkB;;IAElB,kBAAkB;IAClB,OAAO;IACP,WAAW;;IAEX,gCAAgC;;IAEhC,eAAe;;IAEf,yBAAyB;IACzB,yCAAyC;IACzC;wCACoC;;IAEpC,kCAAkC;AACtC;;AAEA;IACI,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;;IAE7B,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,SAAS;;IAET,iBAAiB;;IAEjB,YAAY;;IAEZ,sCAAsC;;IAEtC,gBAAgB;;IAEhB,aAAa;IACb,wBAAwB;IACxB,mBAAmB;;IAEnB,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,oBAAoB;;IAEpB,eAAe;;IAEf,yBAAyB;IACzB,yCAAyC;IACzC;wCACoC;;IAEpC,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;IACpC,YAAY;;IAEZ,kDAAkD;AACtD;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;AAEA,qBAAqB;;AAErB,uBAAuB;;AAEvB;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,qCAAqC;IACrC,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;IACxB,SAAS;AACb;;AAEA,qBAAqB;;AAErB,6BAA6B;;AAE7B;IACI,aAAa;IACb,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,2BAA2B;;AAE3B;IACI,2BAA2B;AAC/B;;AAEA;IACI;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,6BAA6B;;QAE7B,8DAA8D;IAClE;IACA;QACI,gCAAgC;;QAEhC,oEAAoE;IACxE;IACA;QACI,mCAAmC;;QAEnC;wCACgC;IACpC;IACA;QACI,6BAA6B;;QAE7B,8DAA8D;IAClE;AACJ","sourcesContent":[":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: white;\n    position: relative;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\ninput[type=\"color\"] {\n    display: none;\n}\n\n/* Navbar starts here */\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n}\n\n.btn {\n    background: rgb(38, 148, 211);\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.eraser.active {\n    background: purple;\n}\n\n.change_bg {\n    background: black;\n    font-weight: bold;\n\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n\n    position: absolute;\n    left: 0;\n    bottom: 50%;\n\n    transform: translate(-92%, -50%);\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: transform 0.5s ease-in;\n}\n\n.change_bg:hover {\n    transform: translate(-5%, -50%);\n    cursor: pointer;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n\n    min-height: 100vh;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n}\n\n.header .close {\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n.select_color {\n    cursor: pointer;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.canvas.erasing {\n    cursor: crosshair;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: var(--bg_color);\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n"],"sourceRoot":""}]);
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

        _Options__WEBPACK_IMPORTED_MODULE_2__.Options.drawing_styles.rainbow.clear_all_intervals();
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
            color: container.querySelector("#bg_color"),
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
    const { clear, interaction, eraser, color } = _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.nav.buttons;

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

        color.addEventListener("input", (e) => {
            const chosen_color = e.target.value;

            _DOM_el__WEBPACK_IMPORTED_MODULE_1__.DOM_el.canvas.style.backgroundColor = chosen_color;
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

    let current_style = ["color"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7O0FBRUc7QUFDQTs7QUFFbEM7QUFDQTtBQUNBLElBQUksb0RBQWU7O0FBRW5CO0FBQ0EsSUFBSSwwREFBcUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBLFVBQVUsd0RBQW1CLE9BQU8sZ0RBQVc7QUFDL0M7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL3N0eWxlcy9za2V0Y2hwLmNzcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9zdHlsZXMvc2tldGNocC5jc3M/MTI4ZiIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL2pzL0RPTV9lbC5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvTmF2YmFyLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9PcHRpb25zLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jbHJfZGVmYXVsdDogd2hpdGU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTmF2YmFyIHN0YXJ0cyBoZXJlICovXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM4LCAxNDgsIDIxMSk7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcmFzZXIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogcHVycGxlO1xcbn1cXG5cXG4uY2hhbmdlX2JnIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogNTAlO1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTIlLCAtNTAlKTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBib3JkZXI6IHZhcigtLWNscl9kZWZhdWx0KSAwLjEyNXJlbSBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHZhcigtLWNscl9kZWZhdWx0KSxcXG4gICAgICAgIDAgMCAwLjVlbSAycHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcblxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluO1xcbn1cXG5cXG4uY2hhbmdlX2JnOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUlLCAtNTAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAtNHB4IDAgMTBweCBibGFjaztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBtYXgtd2lkdGg6IDA7XFxuXFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLm9wdGlvbnMuYWN0aXZlIHtcXG4gICAgbWF4LXdpZHRoOiAyMDB2dztcXG59XFxuXFxuLmhlYWRlciAub3Blbl9vcHRpb25zLFxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDVweCB3aGl0ZSk7XFxufVxcblxcbi5vcHRpb25zIC5vcHRpb24ge1xcbiAgICBtYXJnaW46IDAgMTV2dztcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgYm9yZGVyOiB2YXIoLS1jbHJfZGVmYXVsdCkgMC4xMjVyZW0gc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCB2YXIoLS1jbHJfZGVmYXVsdCksXFxuICAgICAgICAwIDAgMC41ZW0gMnB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gMTBweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxufVxcblxcbi5vcHRpb24ucmFpbmJvdyB7XFxuICAgIGFuaW1hdGlvbjogcmFpbmJvdyAycyBpbmZpbml0ZTtcXG59XFxuXFxuLnNlbGVjdF9jb2xvciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTmF2YmFyIGVuZHMgaGVyZSAqL1xcblxcbi8qIENhbnZhcyBzdGFydHMgaGVyZSAqL1xcblxcbi5jYW52YXMge1xcbiAgICBoZWlnaHQ6IDkwdnc7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG59XFxuXFxuLmNhbnZhcy5lcmFzaW5nIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5ncmlkX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qIENhbnZhcyBlbmRzIGhlcmUgKi9cXG5cXG4vKiBTaXppbmcgaW5wdXQgc3RhcnRzIGhlcmUgKi9cXG5cXG4uc2l6aW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnNpemluZyBsYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpemluZyAuaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzaXplcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogU2l6aW5nIGlucHV0IGVuZHMgaGVyZSAqL1xcblxcbi5zaGluZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnX2NvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLmNhbnZhcyB7XFxuICAgICAgICBoZWlnaHQ6IDkwdmg7XFxuICAgICAgICB3aWR0aDogOTB2aDtcXG4gICAgfVxcblxcbiAgICAub3B0aW9ucyAub3B0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHZ3O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiBibHVldmlvbGV0IDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIGJsdWV2aW9sZXQsIDAgMCAwLjVyZW0gMnB4IGJsdWV2aW9sZXQ7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiByZWJlY2NhcHVycGxlIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHJlYmVjY2FwdXJwbGUsXFxuICAgICAgICAgICAgMCAwIDAuNXJlbSAycHggcmViZWNjYXB1cnBsZTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9za2V0Y2hwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLHVCQUF1Qjs7QUFFdkI7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjs7SUFFakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXOztJQUVYLGdDQUFnQzs7SUFFaEMsZUFBZTs7SUFFZix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDO3dDQUNvQzs7SUFFcEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCOztJQUU3QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTOztJQUVULGlCQUFpQjs7SUFFakIsWUFBWTs7SUFFWixzQ0FBc0M7O0lBRXRDLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7O0lBRW5CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjs7SUFFcEIsZUFBZTs7SUFFZix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDO3dDQUNvQzs7SUFFcEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7O0lBRVosa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCLHVCQUF1Qjs7QUFFdkI7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQSxxQkFBcUI7O0FBRXJCLDZCQUE2Qjs7QUFFN0I7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBLDJCQUEyQjs7QUFFM0I7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2Qjs7UUFFN0IsOERBQThEO0lBQ2xFO0lBQ0E7UUFDSSxnQ0FBZ0M7O1FBRWhDLG9FQUFvRTtJQUN4RTtJQUNBO1FBQ0ksbUNBQW1DOztRQUVuQzt3Q0FDZ0M7SUFDcEM7SUFDQTtRQUNJLDZCQUE2Qjs7UUFFN0IsOERBQThEO0lBQ2xFO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNscl9kZWZhdWx0OiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBOYXZiYXIgc3RhcnRzIGhlcmUgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzgsIDE0OCwgMjExKTtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVyYXNlci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XFxufVxcblxcbi5jaGFuZ2VfYmcge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiA1MCU7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MiUsIC01MCUpO1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGJvcmRlcjogdmFyKC0tY2xyX2RlZmF1bHQpIDAuMTI1cmVtIHNvbGlkO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgdmFyKC0tY2xyX2RlZmF1bHQpLFxcbiAgICAgICAgMCAwIDAuNWVtIDJweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW47XFxufVxcblxcbi5jaGFuZ2VfYmc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC01MCUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IC00cHggMCAxMHB4IGJsYWNrO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICAgIG1heC13aWR0aDogMDtcXG5cXG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4ub3B0aW9ucy5hY3RpdmUge1xcbiAgICBtYXgtd2lkdGg6IDIwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIC5vcGVuX29wdGlvbnMsXFxuLmhlYWRlciAuY2xvc2Uge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmhlYWRlciAuY2xvc2Uge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggNXB4IHdoaXRlKTtcXG59XFxuXFxuLm9wdGlvbnMgLm9wdGlvbiB7XFxuICAgIG1hcmdpbjogMCAxNXZ3O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBib3JkZXI6IHZhcigtLWNscl9kZWZhdWx0KSAwLjEyNXJlbSBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHZhcigtLWNscl9kZWZhdWx0KSxcXG4gICAgICAgIDAgMCAwLjVlbSAycHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLm9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXJlbSAxMHB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG59XFxuXFxuLm9wdGlvbi5yYWluYm93IHtcXG4gICAgYW5pbWF0aW9uOiByYWluYm93IDJzIGluZmluaXRlO1xcbn1cXG5cXG4uc2VsZWN0X2NvbG9yIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgZW5kcyBoZXJlICovXFxuXFxuLyogQ2FudmFzIHN0YXJ0cyBoZXJlICovXFxuXFxuLmNhbnZhcyB7XFxuICAgIGhlaWdodDogOTB2dztcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCBwdXJwbGU7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uY2FudmFzLmVyYXNpbmcge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmdyaWRfaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLyogQ2FudmFzIGVuZHMgaGVyZSAqL1xcblxcbi8qIFNpemluZyBpbnB1dCBzdGFydHMgaGVyZSAqL1xcblxcbi5zaXppbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4uc2l6aW5nIGxhYmVsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2l6aW5nIC5pbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NpemVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBTaXppbmcgaW5wdXQgZW5kcyBoZXJlICovXFxuXFxuLnNoaW5lIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmdfY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgICAuY2FudmFzIHtcXG4gICAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgICAgIHdpZHRoOiA5MHZoO1xcbiAgICB9XFxuXFxuICAgIC5vcHRpb25zIC5vcHRpb24ge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwdnc7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByYWluYm93IHtcXG4gICAgMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IGJsdWV2aW9sZXQgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgYmx1ZXZpb2xldCwgMCAwIDAuNXJlbSAycHggYmx1ZXZpb2xldDtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJlYmVjY2FwdXJwbGUgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgcmViZWNjYXB1cnBsZSxcXG4gICAgICAgICAgICAwIDAgMC41cmVtIDJweCByZWJlY2NhcHVycGxlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2V0Y2hwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tldGNocC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsXCI7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiLi9PcHRpb25zXCI7XG5cbmNvbnN0IENhbnZhcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaW5mbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2Fudl9yZWN0ID0gRE9NX2VsLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBjYW52X3JlY3QuaGVpZ2h0O1xuICAgICAgICBjb25zdCB3aWR0aCA9IGNhbnZfcmVjdC53aWR0aDtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlXG4gICAgICAgICAgICA/IGdldENvbXB1dGVkU3R5bGUoRE9NX2VsLmNhbnZhcywgbnVsbClcbiAgICAgICAgICAgIDogRE9NX2VsLmNhbnZhcy5jdXJyZW50U3R5bGU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIENoYW5nZXMgdGhlIHNpemUgb2YgZWFjaCBwaXhlbCBhY2NvcmRpbmcgdG8gdGhlIHNjcmVlbiBzaXplXG4gICAgY29uc3QgYWRhcHRfcGl4ZWxzID0gKGVsZW1lbnQsIHsgaGVpZ2h0LCB3aWR0aCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc19wZXJfY29sdW1uID0gRE9NX2VsLm9wdGlvbnMuc2l6aW5nX291dHB1dC52YWx1ZTtcblxuICAgICAgICBjb25zdCBhZGFwdCA9IChlbCkgPT4ge1xuICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIixcbiAgICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICAgICAgKGhlaWdodCAtIHBhcnNlSW50KHN0eWxlLmJvcmRlclRvcFdpZHRoKSAqIDIpIC9cbiAgICAgICAgICAgICAgICAgICAgaXRlbXNfcGVyX2NvbHVtblxuICAgICAgICAgICAgICAgIH1weGAsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgICAgICh3aWR0aCAtIHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnRXaWR0aCkgKiAyKSAvXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zX3Blcl9jb2x1bW5cbiAgICAgICAgICAgICAgICB9cHhgLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICA/IGFkYXB0KGVsZW1lbnQpXG4gICAgICAgICAgICA6IERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaCgoaXRlbSkgPT4gYWRhcHQoaXRlbSkpO1xuICAgIH07XG5cbiAgICAvLyBDcmVhdGVzIGEgY2FudmFzIHdpdGggKG51bSkgc3F1YXJlcyBkaXZzXG4gICAgY29uc3QgZ2VuZXJhdGUgPSAobnVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zX3Blcl9jb2x1bW4gPSBNYXRoLnNxcnQobnVtKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzID0gaW5mbygpO1xuXG4gICAgICAgIC8vIENyZWF0ZXMgZGl2cyBiYXNlZCBvbiB0aGUgYXJndW1lbnQgbnVtYmVyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRfaXRlbSA9IERPTV9lbC5uZXdfZWwoXCJkaXZcIik7XG5cbiAgICAgICAgICAgIGdyaWRfaXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JpZF9pdGVtXCIpO1xuICAgICAgICAgICAgYWRhcHRfcGl4ZWxzKGdyaWRfaXRlbSwgZGV0YWlscyk7XG5cbiAgICAgICAgICAgIGdyaWRfaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGkpO1xuXG4gICAgICAgICAgICBncmlkX2l0ZW0uc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnX2NvbG9yXCIsIFwicm95YWxibHVlXCIpO1xuXG4gICAgICAgICAgICBET01fZWwuY2FudmFzLmFwcGVuZENoaWxkKGdyaWRfaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGFuZ2VzIHRoZSBjYW52YXMgc2l6ZSBhbmQgZ3JpZCBsYXlvdXQgYmFzZWQgb24gdGhlIGFyZ3VtZW50IG51bWJlclxuICAgICAgICBET01fZWwuY2FudmFzLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3R5bGVcIixcbiAgICAgICAgICAgIGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke2l0ZW1zX3Blcl9jb2x1bW59LCAxZnIpYCxcbiAgICAgICAgKTtcblxuICAgICAgICBOYXZiYXIuaW50ZXJhY3Rpb25fdHlwZXNbTmF2YmFyLmN1cnJlbnRfdHlwZVswXV0uY29uZmlnLmFkZCgpO1xuICAgIH07XG5cbiAgICAvLyBSZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGEgcGFyZW50XG4gICAgY29uc3QgcHVyZ2VfYWxsX2NoaWxkcmVuID0gKHBhcmVudCkgPT4ge1xuICAgICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZGVjbGFyZSBhbiBhcnJheSBmb3IgYWxsIHRoZSB0aW1lT3V0c1xuICAgIGNvbnN0IHJlc2l6ZV90aW1lX291dHMgPSB7fTtcblxuICAgIC8vIHRvIGNsZWFyIHRoZW0gYWxsLCBqdXN0IGNhbGwgdGhpc1xuICAgIGNvbnN0IGNsZWFyX3Jlc2l6ZV90bV9vdCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiByZXNpemVfdGltZV9vdXRzKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplX3RpbWVfb3V0c1tpZF0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJlc2l6ZXMgY2FudmFzIGJhc2VkIG9uIHVzZXIgaW5wdXRcbiAgICBjb25zdCByZXNpemUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChyZXNpemVfdGltZV9vdXRzW1widW5pcXVlX2lkXCJdKSBjbGVhcl9yZXNpemVfdG1fb3QoKTtcblxuICAgICAgICAvLyBDaGFuZ2VzIHRoZSBvdXRwdXQgdG8gZGlzcGxheSB0aGUgc2VsZWN0ZWQgdmFsdWVcbiAgICAgICAgRE9NX2VsLm9wdGlvbnMuc2l6aW5nX291dHB1dC52YWx1ZSA9IERPTV9lbC5vcHRpb25zLnNpemluZ19pbnB1dC52YWx1ZTtcblxuICAgICAgICBjb25zdCBhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzcXVhcmVzX3Blcl9zaWRlID0gRE9NX2VsLm9wdGlvbnMuc2l6aW5nX2lucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGNoZWNrX2lmX3ZhbGlkX251bWJlcihzcXVhcmVzX3Blcl9zaWRlLCAxLCAxMDApKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTm90IHBvc3NpYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvYmxlbSB3aXRoIHJlc2l6ZV9jYW52YXMoKSBmdW5jdGlvblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmVzIGFsbCBwaXhlbHMgZnJvbSB0aGUgcHJldmlvdXMgY2FudmFzXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIERPTV9lbC5jYW52YXMuY29udGFpbnMoRE9NX2VsLmZpcnN0X2dyaWRfaXRlbSgpKTpcbiAgICAgICAgICAgICAgICAgICAgcHVyZ2VfYWxsX2NoaWxkcmVuKERPTV9lbC5jYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2JsZW0gd2hlbiByZXNpemVfY2FudmFzKCkgZnVuY3Rpb25cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3F1YXJlc19wZXJfc2lkZSA9IE51bWJlcihzcXVhcmVzX3Blcl9zaWRlKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIG5ldywgcmVzaXplZCBjYW52YXNcbiAgICAgICAgICAgIGdlbmVyYXRlKHNxdWFyZXNfcGVyX3NpZGUgKiogMik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzaXplX3RpbWVfb3V0c1tcInVuaXF1ZV9pZFwiXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZhdGUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8vIENoZWNrcyBpZiB0aGUgdXNlciBpbnB1dCBpcyBhIHZhbGlkIG51bWJlciBiYXNlZCBvbiBtaW4gYW5kIG1heCB2YWx1ZXNcbiAgICBjb25zdCBjaGVja19pZl92YWxpZF9udW1iZXIgPSAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNOYU4obnVtYmVyKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGNhc2UgbnVtID4gbWF4OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgY2FzZSBudW0gPCBtaW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBjYXNlIG51bSA+PSBtaW4gJiYgbnVtIDw9IG1heDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9ibGVtIHdpdGggY2hlY2tfaWZfdmFsaWRfbnVtYmVyKCkgZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVaG1tLCBpdCBjbGVhcnMgdGhlIGNhbnZhc1xuICAgIC8vIGJ5IHJlbW92aW5nIHRoZSBjbGFzcyBhZGRlZCB0byB0aGVtIHdoZW4gZHJhd2luZ1xuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKHBpeGVsKSA9PiB7XG4gICAgICAgICAgICBwaXhlbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpbmVcIik7XG4gICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmdfY29sb3JcIiwgXCJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9wdGlvbnMuZHJhd2luZ19zdHlsZXMucmFpbmJvdy5jbGVhcl9hbGxfaW50ZXJ2YWxzKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGluZm8sIGdlbmVyYXRlLCBjbGVhciwgcmVzaXplLCBhZGFwdF9waXhlbHMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IENhbnZhcyB9O1xuIiwiY29uc3QgRE9NX2VsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhc1wiKTtcblxuICAgIGNvbnN0IGdyaWRfaXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZF9pdGVtXCIpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmlyc3RfZ3JpZF9pdGVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX2l0ZW1cIik7XG4gICAgfTtcblxuICAgIGNvbnN0IG5hdiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYuaGVhZGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB7XG4gICAgICAgICAgICBjbGVhcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIiksXG4gICAgICAgICAgICBlcmFzZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmVyYXNlclwiKSxcbiAgICAgICAgICAgIGludGVyYWN0aW9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnRlcmFjdGlvblwiKSxcbiAgICAgICAgICAgIGNvbG9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNiZ19jb2xvclwiKSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4geyBjb250YWluZXIsIGJ1dHRvbnMgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgbmV3X2VsID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25cIik7XG5cbiAgICAgICAgY29uc3Qgb3Blbl9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLm9wZW5fb3B0aW9uc1wiKTtcbiAgICAgICAgY29uc3QgY2xvc2VfYnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2xvc2VcIik7XG5cbiAgICAgICAgY29uc3QgY29sb3JfcGlja2VyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JfcGlja2VyXCIpO1xuICAgICAgICBjb25zdCBzaXppbmdfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpemluZ19pbnB1dFwiKTtcbiAgICAgICAgY29uc3Qgc2l6aW5nX291dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l6aW5nX291dHB1dFwiKTtcblxuICAgICAgICBjb25zdCByYW5kb20gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5yYW5kb21cIik7XG4gICAgICAgIGNvbnN0IGdyYXkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ncmF5XCIpO1xuICAgICAgICBjb25zdCByYWluYm93ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucmFpbmJvd1wiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICBvcGVuX2J0bixcbiAgICAgICAgICAgIGNsb3NlX2J0bixcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlcixcbiAgICAgICAgICAgIHNpemluZ19pbnB1dCxcbiAgICAgICAgICAgIHNpemluZ19vdXRwdXQsXG4gICAgICAgICAgICByYW5kb20sXG4gICAgICAgICAgICBncmF5LFxuICAgICAgICAgICAgcmFpbmJvdyxcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgc2hpbmluZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhbnZhcy5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaW5pbmdcIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNhbnZhcyxcbiAgICAgICAgZ3JpZF9pdGVtcyxcbiAgICAgICAgZmlyc3RfZ3JpZF9pdGVtLFxuICAgICAgICBuZXdfZWwsXG4gICAgICAgIG5hdixcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgc2hpbmluZyxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHsgRE9NX2VsIH07XG4iLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbFwiO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gXCIuL09wdGlvbnNcIjtcblxuY29uc3QgTmF2YmFyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IGNsZWFyLCBpbnRlcmFjdGlvbiwgZXJhc2VyLCBjb2xvciB9ID0gRE9NX2VsLm5hdi5idXR0b25zO1xuXG4gICAgY29uc3QgcmVtb3ZlX3NoaW5lID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gRE9NX2VsLmNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIE9wdGlvbnMuZHJhd2luZ19zdHlsZXMucmFpbmJvdy5jbGVhcl9pbnRlcnZhbChlbGVtZW50KTtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGluZVwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW9kZXMgPSB7XG4gICAgICAgIGVyYXNlcjoge1xuICAgICAgICAgICAgdHlwZTogXCJlcmFzZXJcIixcblxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgYWRkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBpbnRlcmFjdGlvbl90eXBlc1tjdXJyZW50X3R5cGVbMF1dO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUuY29uZmlnLmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiZXJhc2luZ1wiKTtcblxuICAgICAgICAgICAgICAgICAgICBET01fZWwuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLnRlY2huaWNhbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlX3NoaW5lLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGludGVyYWN0aW9uX3R5cGVzW2N1cnJlbnRfdHlwZVswXV07XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZS5jb25maWcuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICBET01fZWwuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJlcmFzaW5nXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIERPTV9lbC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUudGVjaG5pY2FsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVfc2hpbmUsXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZS5jb25maWcuYWRkKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHBpeGVsOiB7XG4gICAgICAgICAgICB0eXBlOiBcInBpeGVsXCIsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCBjdXJyZW50X21vZGUgPSBbXCJwaXhlbFwiXTtcblxuICAgIGNvbnN0IGludGVyYWN0aW9uX3R5cGVzID0ge1xuICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgaWQ6IDAsXG5cbiAgICAgICAgICAgIHR5cGU6IFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRlY2huaWNhbF9uYW1lOiBcImNsaWNrXCIsXG5cbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGFkZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE9wdGlvbnMuY2hhbmdlX2NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGVhcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE9wdGlvbnMuY2hhbmdlX2NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICBpZDogMSxcblxuICAgICAgICAgICAgdHlwZTogXCJob3ZlclwiLFxuICAgICAgICAgICAgdGVjaG5pY2FsX25hbWU6IFwibW91c2VvdmVyXCIsXG5cbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGFkZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnMuY2hhbmdlX2NvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGVhcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnMuY2hhbmdlX2NvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCBjdXJyZW50X3R5cGUgPSBbXCJjbGlja1wiXTtcblxuICAgIGNvbnN0IHNldF9pbnRlcmFjdGlvbl90ZXh0ID0gKCkgPT4ge1xuICAgICAgICBpbnRlcmFjdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBjdXJyZW50X3R5cGVbMF0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjdXJyZW50X3R5cGVbMF0uc2xpY2UoMSk7XG4gICAgfTtcblxuICAgIHNldF9pbnRlcmFjdGlvbl90ZXh0KCk7XG5cbiAgICAvLyBBZGRzIGZ1bmN0aW9uYWxpdHkgdG8gdGhlIHRvcCBidXR0b25zXG4gICAgY29uc3QgbWFuYWdlX2J1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBDYW52YXMuY2xlYXIpO1xuXG4gICAgICAgIERPTV9lbC5vcHRpb25zLnNpemluZ19pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgQ2FudmFzLnJlc2l6ZSk7XG5cbiAgICAgICAgZXJhc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBlcmFzZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50X21vZGVbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGl4ZWxcIjpcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9tb2RlWzBdID0gXCJlcmFzZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgbW9kZXMuZXJhc2VyLmNvbmZpZy5hZGQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiZXJhc2VyXCI6XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbW9kZVswXSA9IFwicGl4ZWxcIjtcbiAgICAgICAgICAgICAgICAgICAgbW9kZXMuZXJhc2VyLmNvbmZpZy5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW50ZXJhY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50X21vZGVbMF0gPT09IFwiZXJhc2VyXCIpIG1vZGVzLmVyYXNlci5jb25maWcuY2xlYXIoKTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGludGVyYWN0aW9uLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBpbnRlcmFjdGlvbl90eXBlc1tjdXJyZW50XTtcblxuICAgICAgICAgICAgdHlwZS5jb25maWcuY2xlYXIoKTtcblxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0eXBlLmlkO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0X2lkID0gKGluZGV4ICsgMSkgJSBPYmplY3Qua2V5cyhpbnRlcmFjdGlvbl90eXBlcykubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGludGVyYWN0aW9uIGluIGludGVyYWN0aW9uX3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBpbnRlcmFjdGlvbl90eXBlc1tpbnRlcmFjdGlvbl0uaWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09IG5leHRfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF90eXBlWzBdID0gaW50ZXJhY3Rpb25fdHlwZXNbaW50ZXJhY3Rpb25dLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0X2ludGVyYWN0aW9uX3RleHQoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dF90eXBlID1cbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbl90eXBlc1tpbnRlcmFjdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICAgICAgbmV4dF90eXBlLmNvbmZpZy5hZGQoKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRfbW9kZVswXSA9PT0gXCJlcmFzZXJcIikgbW9kZXMuZXJhc2VyLmNvbmZpZy5hZGQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaG9zZW5fY29sb3IgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjaG9zZW5fY29sb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBtYW5hZ2VfYnV0dG9ucywgaW50ZXJhY3Rpb25fdHlwZXMsIGN1cnJlbnRfdHlwZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgTmF2YmFyIH07XG4iLCJpbXBvcnQgeyBET01fZWwgfSBmcm9tIFwiLi9ET01fZWxcIjtcblxuY29uc3QgT3B0aW9ucyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmFuZG9tX2NvbG9yID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gXCIjXCIgKyAoKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikgPDwgMCkudG9TdHJpbmcoMTYpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb2xvcl9jb252ZXJzaW9ucyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGhleF8yX3JnYiA9IChoZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByID0gKGJpZ2ludCA+PiAxNikgJiAyNTU7XG4gICAgICAgICAgICB2YXIgZyA9IChiaWdpbnQgPj4gOCkgJiAyNTU7XG4gICAgICAgICAgICB2YXIgYiA9IGJpZ2ludCAmIDI1NTtcblxuICAgICAgICAgICAgcmV0dXJuIFtyLCBnLCBiXS5qb2luKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmdiYV8yX2hleCA9IChyZ2JhKSA9PlxuICAgICAgICAgICAgYCMke3JnYmFcbiAgICAgICAgICAgICAgICAubWF0Y2goXG4gICAgICAgICAgICAgICAgICAgIC9ecmdiYT9cXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspKD86LFxccyooXFxkK1xcLnswLDF9XFxkKikpP1xcKSQvLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAubWFwKChuLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAoaSA9PT0gMyA/IE1hdGgucm91bmQocGFyc2VGbG9hdChuKSAqIDI1NSkgOiBwYXJzZUZsb2F0KG4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZFN0YXJ0KDIsIFwiMFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJOYU5cIiwgXCJcIiksXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpfWA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhleF8yX3JnYixcbiAgICAgICAgICAgIHJnYmFfMl9oZXgsXG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGRyYXdpbmdfc3R5bGVzID0ge1xuICAgICAgICBjb2xvcjogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IFwiIzVmOWVhMFwiO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0IHZhbHVlKG5ld192YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2V0IGNvbmZpZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwaXhlbCwgY3VycmVudF9jb2xvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWJnX2NvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC5hZGQoXCJzaGluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKSxcblxuICAgICAgICByYWluYm93OiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmFuZG9tX2NvbG9yKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVydmFscyA9IHt9O1xuXG4gICAgICAgICAgICBjb25zdCBjbGVhcl9pbnRlcnZhbCA9IChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxzW2lkXSk7XG5cbiAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBjbGVhcl9hbGxfaW50ZXJ2YWxzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGl4ZWwgaW4gaW50ZXJ2YWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxzW3BpeGVsXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gKGl0ZW0uc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2V0IGNvbmZpZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwaXhlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWJnX2NvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tX2NvbG9yKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZCAxcyBlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuY2xhc3NMaXN0LmFkZChcInNoaW5lXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWJnX2NvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbV9jb2xvcigpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhlbF9pZCA9IHBpeGVsLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcnZhbHNbcGl4ZWxfaWRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpbnRlcnZhbHNbcGl4ZWxfaWRdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxzW3BpeGVsX2lkXSA9IGlkO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXQgY2xlYXJfYWxsX2ludGVydmFscygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsZWFyX2FsbF9pbnRlcnZhbHM7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGNsZWFyX2ludGVydmFsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKSxcblxuICAgICAgICBncmF5OiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGx1bWlub3NpdHkgPSAwO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBgcmdiYSgke2x1bWlub3NpdHl9LCAke2x1bWlub3NpdHl9LCAke2x1bWlub3NpdHl9KWA7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGl4ZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ19jb2xvclwiLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGx1bWlub3NpdHkgPSAobHVtaW5vc2l0eSArIDE1KSAlIDI1NTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBgcmdiYSgke2x1bWlub3NpdHl9LCAke2x1bWlub3NpdHl9LCAke2x1bWlub3NpdHl9KWA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC5hZGQoXCJzaGluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKSxcblxuICAgICAgICByYW5kb206IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYW5kb21fY29sb3IoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2V0IGNvbmZpZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwaXhlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWJnX2NvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tX2NvbG9yKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC5hZGQoXCJzaGluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKSxcbiAgICB9O1xuXG4gICAgbGV0IGN1cnJlbnRfc3R5bGUgPSBbXCJjb2xvclwiXTtcblxuICAgIC8vIENoYW5nZXMgdGhlIGNvbG9yIG9mIHRoZSBkaXZzIGJ5IGFkZGluZyBhIGNsYXNzIHRvIGl0XG4gICAgY29uc3QgY2hhbmdlX2NvbG9yID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBnZXRDb21wdXRlZFN0eWxlKHNxdWFyZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZHJhd2luZ19zdHlsZXNbY3VycmVudF9zdHlsZVswXV07XG5cbiAgICAgICAgY29uc3QgY3VycmVudF9iZyA9IGNvbG9yX2NvbnZlcnNpb25zLnJnYmFfMl9oZXgoXG4gICAgICAgICAgICBkZXRhaWxzLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpLFxuICAgICAgICApO1xuXG4gICAgICAgIHN0eWxlLmNvbmZpZyhzcXVhcmUsIGN1cnJlbnRfYmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRhY2hfbGlzdGVuZXJzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgeyBjbG9zZV9idG4sIG9wZW5fYnRuLCBjb2xvcl9waWNrZXIsIHJhbmRvbSwgZ3JheSwgcmFpbmJvdyB9ID1cbiAgICAgICAgICAgIERPTV9lbC5vcHRpb25zO1xuXG4gICAgICAgIGNsb3NlX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgRE9NX2VsLm9wdGlvbnMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9wZW5fYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBET01fZWwub3B0aW9ucy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29sb3JfcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY3VycmVudF9zdHlsZVswXSA9IFwiY29sb3JcIjtcbiAgICAgICAgICAgIGNvbnN0IGNob3Nlbl9jb2xvciA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgICBkcmF3aW5nX3N0eWxlc1tcImNvbG9yXCJdW1widmFsdWVcIl0gPSBjaG9zZW5fY29sb3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudF9zdHlsZVswXSA9IFwicmFuZG9tXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRfc3R5bGVbMF0gPSBcImdyYXlcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmFpbmJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudF9zdHlsZVswXSA9IFwicmFpbmJvd1wiO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgY2hhbmdlX2NvbG9yLCBkcmF3aW5nX3N0eWxlcyB9O1xufSkoKTtcblxuZXhwb3J0IHsgT3B0aW9ucyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3R5bGVzL3NrZXRjaHAuY3NzXCI7XG5cbmltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyXCI7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGEgMTZ4MTYgZ3JpZCBvZiBkaXZzIGluc2lkZSB0aGUgY2FudmFzIHdoZW4gbG9hZGluZyB0aGUgcGFnZVxuICAgIENhbnZhcy5nZW5lcmF0ZSgyNTYpO1xuXG4gICAgLy8gQWN0aXZhdGUgdG9wIGJ1dHRvbnNcbiAgICBOYXZiYXIubWFuYWdlX2J1dHRvbnMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwicmVzaXplXCIsXG4gICAgKCkgPT4gQ2FudmFzLmFkYXB0X3BpeGVscyhudWxsLCBDYW52YXMuaW5mbygpKSxcbiAgICB0cnVlLFxuKTtcblxuLy8gQXMgc29vbiBhcyB0aGUgcGFnZSBmdWxseSBsb2FkcyBjYWxscyB0aGUgbWFpbiBmdW5jdGlvblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG1haW4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9