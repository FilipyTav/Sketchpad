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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: rgb(50, 50, 50);\n    position: relative;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\ninput[type=\"color\"] {\n    display: none;\n}\n\n/* Navbar starts here */\n\nnav.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n\n    background: #000;\n\n    padding: 1rem 0;\n\n    box-shadow: 0 4px 10px black;\n}\n\n.btn {\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    position: relative;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.btn::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -0.8rem;\n\n    margin: 0 100%;\n\n    height: 0.2rem;\n\n    max-width: 0;\n    transition: max-width 0.5s ease, margin 0.7s ease;\n\n    background: white;\n\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 0.5px var(--clr_default);\n}\n\n.btn:hover::before {\n    max-width: 10vw;\n    margin: 0 0;\n}\n\n.eraser.active {\n    background: var(--clr_default);\n    color: #000;\n}\n\n.side_btn {\n    background: black;\n    font-weight: bold;\n\n    padding: 0.5rem 2rem 0.5rem 1rem;\n    border-radius: 5px;\n\n    position: absolute;\n    left: 0;\n\n    transform: translateX(-89%);\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: transform 0.5s ease-in;\n}\n\n.change_bg {\n    top: 30%;\n}\n\n.side_btn:hover {\n    transform: translateX(-5%);\n    cursor: pointer;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n\n    min-height: 100vh;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n.select_color {\n    cursor: pointer;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n\n    margin-top: 1rem;\n}\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.canvas.erasing {\n    cursor: crosshair;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n\n    bottom: 30%;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: var(--bg_color);\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/sketchp.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --clr_default: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: rgb(50, 50, 50);\n    position: relative;\n}\n\nbutton {\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\ninput[type=\"color\"] {\n    display: none;\n}\n\n/* Navbar starts here */\n\nnav.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 50px;\n\n    background: #000;\n\n    padding: 1rem 0;\n\n    box-shadow: 0 4px 10px black;\n}\n\n.btn {\n    padding: 8px 24px;\n    border: none;\n    border-radius: 10px;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    position: relative;\n}\n\n.btn:hover {\n    cursor: pointer;\n}\n\n.btn::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -0.8rem;\n\n    margin: 0 100%;\n\n    height: 0.2rem;\n\n    max-width: 0;\n    transition: max-width 0.5s ease, margin 0.7s ease;\n\n    background: white;\n\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 0.5px var(--clr_default);\n}\n\n.btn:hover::before {\n    max-width: 10vw;\n    margin: 0 0;\n}\n\n.eraser.active {\n    background: var(--clr_default);\n    color: #000;\n}\n\n.side_btn {\n    background: black;\n    font-weight: bold;\n\n    padding: 0.5rem 2rem 0.5rem 1rem;\n    border-radius: 5px;\n\n    position: absolute;\n    left: 0;\n\n    transform: translateX(-89%);\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: transform 0.5s ease-in;\n}\n\n.change_bg {\n    top: 30%;\n}\n\n.side_btn:hover {\n    transform: translateX(-5%);\n    cursor: pointer;\n}\n\n.options {\n    background: black;\n    box-shadow: -4px 0 10px black;\n\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n\n    min-height: 100vh;\n\n    max-width: 0;\n\n    transition: max-width 0.5s ease-in-out;\n\n    overflow: hidden;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.options.active {\n    max-width: 200vw;\n}\n\n.header .open_options,\n.header .close {\n    width: 50px;\n    color: var(--clr_default);\n    filter: drop-shadow(3px 3px 5px white);\n}\n\n.options .option {\n    margin: 0 15vw;\n    padding: 0.5rem 1rem;\n\n    font-size: 1rem;\n\n    color: var(--clr_default);\n    border: var(--clr_default) 0.125rem solid;\n    box-shadow: inset 0 0 0.5rem 0 var(--clr_default),\n        0 0 0.5em 2px var(--clr_default);\n\n    transition: box-shadow 0.3s ease-in;\n}\n\n.option:hover {\n    background-color: var(--clr_default);\n    color: black;\n\n    box-shadow: inset 0 0 5rem 10px var(--clr_default);\n}\n\n.option.rainbow {\n    animation: rainbow 2s infinite;\n}\n\n.select_color {\n    cursor: pointer;\n}\n\n/* Navbar ends here */\n\n/* Canvas starts here */\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n\n    margin-top: 1rem;\n}\n\n.canvas {\n    height: 90vw;\n    width: 90vw;\n    display: grid;\n    align-items: center;\n    border: 20px solid purple;\n    background: #eee;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: auto;\n}\n\n.canvas.erasing {\n    cursor: crosshair;\n}\n\n.grid_item {\n    display: grid;\n    place-items: center;\n    width: 1px;\n    height: 1px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n/* Canvas ends here */\n\n/* Sizing input starts here */\n\n.sizing {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.3rem;\n\n    bottom: 30%;\n}\n\n.sizing label {\n    align-self: center;\n}\n\n.sizing .io {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 5px;\n}\n\n#sizes {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Sizing input ends here */\n\n.shine {\n    background: var(--bg_color);\n}\n\n@media (min-width: 40em) {\n    .canvas {\n        height: 90vh;\n        width: 90vh;\n    }\n\n    .options .option {\n        margin: 0 10vw;\n    }\n}\n\n@keyframes rainbow {\n    0% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n    50% {\n        text-shadow: blueviolet 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 blueviolet, 0 0 0.5rem 2px blueviolet;\n    }\n    75% {\n        text-shadow: rebeccapurple 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 rebeccapurple,\n            0 0 0.5rem 2px rebeccapurple;\n    }\n    100% {\n        text-shadow: #48abe0 0 0 10px;\n\n        box-shadow: inset 0 0 0.5rem 0 #48abe0, 0 0 0.5rem 2px #48abe0;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjOztBQUUxQjtBQUNBLFlBQVksOEVBQXlDO0FBQ3JELFNBQVM7O0FBRVQ7QUFDQSxZQUFZLDJFQUFzQztBQUNsRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMLGFBQWE7QUFDYixDQUFDOztBQUVrQjs7Ozs7OztVQ2hPbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQStCOztBQUVHO0FBQ0E7O0FBRWxDO0FBQ0E7QUFDQSxJQUFJLG9EQUFlOztBQUVuQjtBQUNBLElBQUksMERBQXFCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHdEQUFtQixPQUFPLGdEQUFXO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9zdHlsZXMvc2tldGNocC5jc3MiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvc3R5bGVzL3NrZXRjaHAuY3NzPzEyOGYiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvQ2FudmFzLmpzIiwid2VicGFjazovL3NrZXRjaHBhZC8uL3NyYy9qcy9ET01fZWwuanMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkLy4vc3JjL2pzL05hdmJhci5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NrZXRjaHBhZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9za2V0Y2hwYWQvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY2xyX2RlZmF1bHQ6IHdoaXRlO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBOYXZiYXIgc3RhcnRzIGhlcmUgKi9cXG5cXG5uYXYuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG5cXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCBibGFjaztcXG59XFxuXFxuLmJ0biB7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgYm9yZGVyOiB2YXIoLS1jbHJfZGVmYXVsdCkgMC4xMjVyZW0gc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCB2YXIoLS1jbHJfZGVmYXVsdCksXFxuICAgICAgICAwIDAgMC41ZW0gMnB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAtMC44cmVtO1xcblxcbiAgICBtYXJnaW46IDAgMTAwJTtcXG5cXG4gICAgaGVpZ2h0OiAwLjJyZW07XFxuXFxuICAgIG1heC13aWR0aDogMDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNXMgZWFzZSwgbWFyZ2luIDAuN3MgZWFzZTtcXG5cXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCB2YXIoLS1jbHJfZGVmYXVsdCksXFxuICAgICAgICAwIDAgMC41ZW0gMC41cHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcbn1cXG5cXG4uYnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgICBtYXgtd2lkdGg6IDEwdnc7XFxuICAgIG1hcmdpbjogMCAwO1xcbn1cXG5cXG4uZXJhc2VyLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5zaWRlX2J0biB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW0gMC41cmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTg5JSk7XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgYm9yZGVyOiB2YXIoLS1jbHJfZGVmYXVsdCkgMC4xMjVyZW0gc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVyZW0gMCB2YXIoLS1jbHJfZGVmYXVsdCksXFxuICAgICAgICAwIDAgMC41ZW0gMnB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbjtcXG59XFxuXFxuLmNoYW5nZV9iZyB7XFxuICAgIHRvcDogMzAlO1xcbn1cXG5cXG4uc2lkZV9idG46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAtNHB4IDAgMTBweCBibGFjaztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBtYXgtd2lkdGg6IDA7XFxuXFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLm9wdGlvbnMuYWN0aXZlIHtcXG4gICAgbWF4LXdpZHRoOiAyMDB2dztcXG59XFxuXFxuLmhlYWRlciAub3Blbl9vcHRpb25zLFxcbi5oZWFkZXIgLmNsb3NlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCA1cHggd2hpdGUpO1xcbn1cXG5cXG4ub3B0aW9ucyAub3B0aW9uIHtcXG4gICAgbWFyZ2luOiAwIDE1dnc7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGJvcmRlcjogdmFyKC0tY2xyX2RlZmF1bHQpIDAuMTI1cmVtIHNvbGlkO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgdmFyKC0tY2xyX2RlZmF1bHQpLFxcbiAgICAgICAgMCAwIDAuNWVtIDJweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuXFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4ub3B0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cmVtIDEwcHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcbn1cXG5cXG4ub3B0aW9uLnJhaW5ib3cge1xcbiAgICBhbmltYXRpb246IHJhaW5ib3cgMnMgaW5maW5pdGU7XFxufVxcblxcbi5zZWxlY3RfY29sb3Ige1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciBlbmRzIGhlcmUgKi9cXG5cXG4vKiBDYW52YXMgc3RhcnRzIGhlcmUgKi9cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmNhbnZhcyB7XFxuICAgIGhlaWdodDogOTB2dztcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCBwdXJwbGU7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uY2FudmFzLmVyYXNpbmcge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmdyaWRfaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBDYW52YXMgZW5kcyBoZXJlICovXFxuXFxuLyogU2l6aW5nIGlucHV0IHN0YXJ0cyBoZXJlICovXFxuXFxuLnNpemluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAwLjNyZW07XFxuXFxuICAgIGJvdHRvbTogMzAlO1xcbn1cXG5cXG4uc2l6aW5nIGxhYmVsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2l6aW5nIC5pbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NpemVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBTaXppbmcgaW5wdXQgZW5kcyBoZXJlICovXFxuXFxuLnNoaW5lIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmdfY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgICAuY2FudmFzIHtcXG4gICAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgICAgIHdpZHRoOiA5MHZoO1xcbiAgICB9XFxuXFxuICAgIC5vcHRpb25zIC5vcHRpb24ge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwdnc7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByYWluYm93IHtcXG4gICAgMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IGJsdWV2aW9sZXQgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgYmx1ZXZpb2xldCwgMCAwIDAuNXJlbSAycHggYmx1ZXZpb2xldDtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJlYmVjY2FwdXJwbGUgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgcmViZWNjYXB1cnBsZSxcXG4gICAgICAgICAgICAwIDAgMC41cmVtIDJweCByZWJlY2NhcHVycGxlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICM0OGFiZTAgMCAwIDEwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgIzQ4YWJlMCwgMCAwIDAuNXJlbSAycHggIzQ4YWJlMDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NrZXRjaHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLGFBQWE7SUFD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Q0E7UUFDSSxnQ0FBZ0M7O1FBRWhDLG9FQUFvRTtJQUN4RTtJQUNBO1FBQ0ksbUNBQW1DOztRQUVuQzt3Q0FDZ0M7SUFDcEM7SUFDQTtRQUNJLDZCQUE2Qjs7UUFFN0IsOERBQThEO0lBQ2xFO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNscl9kZWZhdWx0OiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTmF2YmFyIHN0YXJ0cyBoZXJlICovXFxuXFxubmF2LmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcblxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggYmxhY2s7XFxufVxcblxcbi5idG4ge1xcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGJvcmRlcjogdmFyKC0tY2xyX2RlZmF1bHQpIDAuMTI1cmVtIHNvbGlkO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgdmFyKC0tY2xyX2RlZmF1bHQpLFxcbiAgICAgICAgMCAwIDAuNWVtIDJweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogLTAuOHJlbTtcXG5cXG4gICAgbWFyZ2luOiAwIDEwMCU7XFxuXFxuICAgIGhlaWdodDogMC4ycmVtO1xcblxcbiAgICBtYXgtd2lkdGg6IDA7XFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjVzIGVhc2UsIG1hcmdpbiAwLjdzIGVhc2U7XFxuXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcblxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgdmFyKC0tY2xyX2RlZmF1bHQpLFxcbiAgICAgICAgMCAwIDAuNWVtIDAuNXB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG59XFxuXFxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgbWF4LXdpZHRoOiAxMHZ3O1xcbiAgICBtYXJnaW46IDAgMDtcXG59XFxuXFxuLmVyYXNlci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uc2lkZV9idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtIDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04OSUpO1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuICAgIGJvcmRlcjogdmFyKC0tY2xyX2RlZmF1bHQpIDAuMTI1cmVtIHNvbGlkO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41cmVtIDAgdmFyKC0tY2xyX2RlZmF1bHQpLFxcbiAgICAgICAgMCAwIDAuNWVtIDJweCB2YXIoLS1jbHJfZGVmYXVsdCk7XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW47XFxufVxcblxcbi5jaGFuZ2VfYmcge1xcbiAgICB0b3A6IDMwJTtcXG59XFxuXFxuLnNpZGVfYnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm94LXNoYWRvdzogLTRweCAwIDEwcHggYmxhY2s7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgbWF4LXdpZHRoOiAwO1xcblxcbiAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMC41cyBlYXNlLWluLW91dDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDRyZW07XFxufVxcblxcbi5vcHRpb25zLmFjdGl2ZSB7XFxuICAgIG1heC13aWR0aDogMjAwdnc7XFxufVxcblxcbi5oZWFkZXIgLm9wZW5fb3B0aW9ucyxcXG4uaGVhZGVyIC5jbG9zZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggNXB4IHdoaXRlKTtcXG59XFxuXFxuLm9wdGlvbnMgLm9wdGlvbiB7XFxuICAgIG1hcmdpbjogMCAxNXZ3O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tY2xyX2RlZmF1bHQpO1xcbiAgICBib3JkZXI6IHZhcigtLWNscl9kZWZhdWx0KSAwLjEyNXJlbSBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHZhcigtLWNscl9kZWZhdWx0KSxcXG4gICAgICAgIDAgMCAwLjVlbSAycHggdmFyKC0tY2xyX2RlZmF1bHQpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLm9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNscl9kZWZhdWx0KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXJlbSAxMHB4IHZhcigtLWNscl9kZWZhdWx0KTtcXG59XFxuXFxuLm9wdGlvbi5yYWluYm93IHtcXG4gICAgYW5pbWF0aW9uOiByYWluYm93IDJzIGluZmluaXRlO1xcbn1cXG5cXG4uc2VsZWN0X2NvbG9yIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgZW5kcyBoZXJlICovXFxuXFxuLyogQ2FudmFzIHN0YXJ0cyBoZXJlICovXFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5jYW52YXMge1xcbiAgICBoZWlnaHQ6IDkwdnc7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG59XFxuXFxuLmNhbnZhcy5lcmFzaW5nIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5ncmlkX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLyogQ2FudmFzIGVuZHMgaGVyZSAqL1xcblxcbi8qIFNpemluZyBpbnB1dCBzdGFydHMgaGVyZSAqL1xcblxcbi5zaXppbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMC4zcmVtO1xcblxcbiAgICBib3R0b206IDMwJTtcXG59XFxuXFxuLnNpemluZyBsYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpemluZyAuaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzaXplcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogU2l6aW5nIGlucHV0IGVuZHMgaGVyZSAqL1xcblxcbi5zaGluZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnX2NvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLmNhbnZhcyB7XFxuICAgICAgICBoZWlnaHQ6IDkwdmg7XFxuICAgICAgICB3aWR0aDogOTB2aDtcXG4gICAgfVxcblxcbiAgICAub3B0aW9ucyAub3B0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHZ3O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiBibHVldmlvbGV0IDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIGJsdWV2aW9sZXQsIDAgMCAwLjVyZW0gMnB4IGJsdWV2aW9sZXQ7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiByZWJlY2NhcHVycGxlIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwIHJlYmVjY2FwdXJwbGUsXFxuICAgICAgICAgICAgMCAwIDAuNXJlbSAycHggcmViZWNjYXB1cnBsZTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjNDhhYmUwIDAgMCAxMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNXJlbSAwICM0OGFiZTAsIDAgMCAwLjVyZW0gMnB4ICM0OGFiZTA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tldGNocC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZXRjaHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbFwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSBcIi4vT3B0aW9uc1wiO1xuXG5jb25zdCBDYW52YXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGluZm8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZfcmVjdCA9IERPTV9lbC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY2Fudl9yZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjYW52X3JlY3Qud2lkdGg7XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZVxuICAgICAgICAgICAgPyBnZXRDb21wdXRlZFN0eWxlKERPTV9lbC5jYW52YXMsIG51bGwpXG4gICAgICAgICAgICA6IERPTV9lbC5jYW52YXMuY3VycmVudFN0eWxlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBDaGFuZ2VzIHRoZSBzaXplIG9mIGVhY2ggcGl4ZWwgYWNjb3JkaW5nIHRvIHRoZSBzY3JlZW4gc2l6ZVxuICAgIGNvbnN0IGFkYXB0X3BpeGVscyA9IChlbGVtZW50LCB7IGhlaWdodCwgd2lkdGgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXNfcGVyX2NvbHVtbiA9IERPTV9lbC5vcHRpb25zLnNpemluZ19vdXRwdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYWRhcHQgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgICAgIChoZWlnaHQgLSBwYXJzZUludChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKiAyKSAvXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zX3Blcl9jb2x1bW5cbiAgICAgICAgICAgICAgICB9cHhgLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICAod2lkdGggLSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICogMikgL1xuICAgICAgICAgICAgICAgICAgICBpdGVtc19wZXJfY29sdW1uXG4gICAgICAgICAgICAgICAgfXB4YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgPyBhZGFwdChlbGVtZW50KVxuICAgICAgICAgICAgOiBET01fZWwuZ3JpZF9pdGVtcygpLmZvckVhY2goKGl0ZW0pID0+IGFkYXB0KGl0ZW0pKTtcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlcyBhIGNhbnZhcyB3aXRoIChudW0pIHNxdWFyZXMgZGl2c1xuICAgIGNvbnN0IGdlbmVyYXRlID0gKG51bSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc19wZXJfY29sdW1uID0gTWF0aC5zcXJ0KG51bSk7XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGluZm8oKTtcblxuICAgICAgICAvLyBDcmVhdGVzIGRpdnMgYmFzZWQgb24gdGhlIGFyZ3VtZW50IG51bWJlclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkX2l0ZW0gPSBET01fZWwubmV3X2VsKFwiZGl2XCIpO1xuXG4gICAgICAgICAgICBncmlkX2l0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcImdyaWRfaXRlbVwiKTtcbiAgICAgICAgICAgIGFkYXB0X3BpeGVscyhncmlkX2l0ZW0sIGRldGFpbHMpO1xuXG4gICAgICAgICAgICBncmlkX2l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpKTtcblxuICAgICAgICAgICAgZ3JpZF9pdGVtLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ19jb2xvclwiLCBcInJveWFsYmx1ZVwiKTtcblxuICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5hcHBlbmRDaGlsZChncmlkX2l0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlcyB0aGUgY2FudmFzIHNpemUgYW5kIGdyaWQgbGF5b3V0IGJhc2VkIG9uIHRoZSBhcmd1bWVudCBudW1iZXJcbiAgICAgICAgRE9NX2VsLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtpdGVtc19wZXJfY29sdW1ufSwgMWZyKWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgTmF2YmFyLmludGVyYWN0aW9uX3R5cGVzW05hdmJhci5jdXJyZW50X3R5cGVbMF1dLmNvbmZpZy5hZGQoKTtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHBhcmVudFxuICAgIGNvbnN0IHB1cmdlX2FsbF9jaGlsZHJlbiA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGRlY2xhcmUgYW4gYXJyYXkgZm9yIGFsbCB0aGUgdGltZU91dHNcbiAgICBjb25zdCByZXNpemVfdGltZV9vdXRzID0ge307XG5cbiAgICAvLyB0byBjbGVhciB0aGVtIGFsbCwganVzdCBjYWxsIHRoaXNcbiAgICBjb25zdCBjbGVhcl9yZXNpemVfdG1fb3QgPSAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaWQgaW4gcmVzaXplX3RpbWVfb3V0cykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZV90aW1lX291dHNbaWRdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBSZXNpemVzIGNhbnZhcyBiYXNlZCBvbiB1c2VyIGlucHV0XG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVzaXplX3RpbWVfb3V0c1tcInVuaXF1ZV9pZFwiXSkgY2xlYXJfcmVzaXplX3RtX290KCk7XG5cbiAgICAgICAgLy8gQ2hhbmdlcyB0aGUgb3V0cHV0IHRvIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHZhbHVlXG4gICAgICAgIERPTV9lbC5vcHRpb25zLnNpemluZ19vdXRwdXQudmFsdWUgPSBET01fZWwub3B0aW9ucy5zaXppbmdfaW5wdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlc19wZXJfc2lkZSA9IERPTV9lbC5vcHRpb25zLnNpemluZ19pbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgc3dpdGNoIChjaGVja19pZl92YWxpZF9udW1iZXIoc3F1YXJlc19wZXJfc2lkZSwgMSwgMTAwKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIk5vdCBwb3NzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2JsZW0gd2l0aCByZXNpemVfY2FudmFzKCkgZnVuY3Rpb25cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlcyBhbGwgcGl4ZWxzIGZyb20gdGhlIHByZXZpb3VzIGNhbnZhc1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBET01fZWwuY2FudmFzLmNvbnRhaW5zKERPTV9lbC5maXJzdF9ncmlkX2l0ZW0oKSk6XG4gICAgICAgICAgICAgICAgICAgIHB1cmdlX2FsbF9jaGlsZHJlbihET01fZWwuY2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9ibGVtIHdoZW4gcmVzaXplX2NhbnZhcygpIGZ1bmN0aW9uXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNxdWFyZXNfcGVyX3NpZGUgPSBOdW1iZXIoc3F1YXJlc19wZXJfc2lkZSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBuZXcsIHJlc2l6ZWQgY2FudmFzXG4gICAgICAgICAgICBnZW5lcmF0ZShzcXVhcmVzX3Blcl9zaWRlICoqIDIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlc2l6ZV90aW1lX291dHNbXCJ1bmlxdWVfaWRcIl0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFjdGl2YXRlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cbiAgICAvLyBDaGVja3MgaWYgdGhlIHVzZXIgaW5wdXQgaXMgYSB2YWxpZCBudW1iZXIgYmFzZWQgb24gbWluIGFuZCBtYXggdmFsdWVzXG4gICAgY29uc3QgY2hlY2tfaWZfdmFsaWRfbnVtYmVyID0gKG51bWJlciwgbWluLCBtYXgpID0+IHtcbiAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKG51bWJlcik7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzTmFOKG51bWJlcik6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBjYXNlIG51bSA+IG1heDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGNhc2UgbnVtIDwgbWluOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgY2FzZSBudW0gPj0gbWluICYmIG51bSA8PSBtYXg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvYmxlbSB3aXRoIGNoZWNrX2lmX3ZhbGlkX251bWJlcigpIGZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVWhtbSwgaXQgY2xlYXJzIHRoZSBjYW52YXNcbiAgICAvLyBieSByZW1vdmluZyB0aGUgY2xhc3MgYWRkZWQgdG8gdGhlbSB3aGVuIGRyYXdpbmdcbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChwaXhlbCkgPT4ge1xuICAgICAgICAgICAgcGl4ZWwuY2xhc3NMaXN0LnJlbW92ZShcInNoaW5lXCIpO1xuICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnX2NvbG9yXCIsIFwiXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPcHRpb25zLmRyYXdpbmdfc3R5bGVzLnJhaW5ib3cuY2xlYXJfYWxsX2ludGVydmFscygpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBpbmZvLCBnZW5lcmF0ZSwgY2xlYXIsIHJlc2l6ZSwgYWRhcHRfcGl4ZWxzIH07XG59KSgpO1xuXG5leHBvcnQgeyBDYW52YXMgfTtcbiIsImNvbnN0IERPTV9lbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXNcIik7XG5cbiAgICBjb25zdCBncmlkX2l0ZW1zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRfaXRlbVwiKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpcnN0X2dyaWRfaXRlbSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9pdGVtXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBuYXYgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2LmhlYWRlclwiKTtcblxuICAgICAgICBjb25zdCBidXR0b25zID0ge1xuICAgICAgICAgICAgY2xlYXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNsZWFyXCIpLFxuICAgICAgICAgICAgZXJhc2VyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5lcmFzZXJcIiksXG4gICAgICAgICAgICBpbnRlcmFjdGlvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW50ZXJhY3Rpb25cIiksXG4gICAgICAgICAgICBjb2xvcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjYmdfY29sb3JcIiksXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsgY29udGFpbmVyLCBidXR0b25zIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IG5ld19lbCA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcHRpb25zID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3B0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG9wZW5fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5vcGVuX29wdGlvbnNcIik7XG4gICAgICAgIGNvbnN0IGNsb3NlX2J0biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmNsb3NlXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yX3BpY2tlciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yX3BpY2tlclwiKTtcbiAgICAgICAgY29uc3Qgc2l6aW5nX2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaXppbmdfaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IHNpemluZ19vdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpemluZ19vdXRwdXRcIik7XG5cbiAgICAgICAgY29uc3QgcmFuZG9tID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tXCIpO1xuICAgICAgICBjb25zdCBncmF5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JheVwiKTtcbiAgICAgICAgY29uc3QgcmFpbmJvdyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnJhaW5ib3dcIik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgICAgb3Blbl9idG4sXG4gICAgICAgICAgICBjbG9zZV9idG4sXG4gICAgICAgICAgICBjb2xvcl9waWNrZXIsXG4gICAgICAgICAgICBzaXppbmdfaW5wdXQsXG4gICAgICAgICAgICBzaXppbmdfb3V0cHV0LFxuICAgICAgICAgICAgcmFuZG9tLFxuICAgICAgICAgICAgZ3JheSxcbiAgICAgICAgICAgIHJhaW5ib3csXG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHNoaW5pbmcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYW52YXMucXVlcnlTZWxlY3RvckFsbChcIi5zaGluaW5nXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjYW52YXMsXG4gICAgICAgIGdyaWRfaXRlbXMsXG4gICAgICAgIGZpcnN0X2dyaWRfaXRlbSxcbiAgICAgICAgbmV3X2VsLFxuICAgICAgICBuYXYsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHNoaW5pbmcsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IERPTV9lbCB9O1xuIiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQgeyBET01fZWwgfSBmcm9tIFwiLi9ET01fZWxcIjtcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiLi9PcHRpb25zXCI7XG5cbmNvbnN0IE5hdmJhciA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgeyBjbGVhciwgaW50ZXJhY3Rpb24sIGVyYXNlciwgY29sb3IgfSA9IERPTV9lbC5uYXYuYnV0dG9ucztcblxuICAgIGNvbnN0IHJlbW92ZV9zaGluZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IERPTV9lbC5jYW52YXMpIHJldHVybjtcblxuICAgICAgICBPcHRpb25zLmRyYXdpbmdfc3R5bGVzLnJhaW5ib3cuY2xlYXJfaW50ZXJ2YWwoZWxlbWVudCk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpbmVcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vZGVzID0ge1xuICAgICAgICBlcmFzZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJhc2VyXCIsXG5cbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGFkZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gaW50ZXJhY3Rpb25fdHlwZXNbY3VycmVudF90eXBlWzBdXTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlLmNvbmZpZy5jbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIERPTV9lbC5jYW52YXMuY2xhc3NMaXN0LmFkZChcImVyYXNpbmdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZS50ZWNobmljYWxfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZV9zaGluZSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBpbnRlcmFjdGlvbl90eXBlc1tjdXJyZW50X3R5cGVbMF1dO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUuY29uZmlnLmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiZXJhc2luZ1wiKTtcblxuICAgICAgICAgICAgICAgICAgICBET01fZWwuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLnRlY2huaWNhbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlX3NoaW5lLFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUuY29uZmlnLmFkZCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwaXhlbDoge1xuICAgICAgICAgICAgdHlwZTogXCJwaXhlbFwiLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBsZXQgY3VycmVudF9tb2RlID0gW1wicGl4ZWxcIl07XG5cbiAgICBjb25zdCBpbnRlcmFjdGlvbl90eXBlcyA9IHtcbiAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgIGlkOiAwLFxuXG4gICAgICAgICAgICB0eXBlOiBcImNsaWNrXCIsXG4gICAgICAgICAgICB0ZWNobmljYWxfbmFtZTogXCJjbGlja1wiLFxuXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBhZGQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBPcHRpb25zLmNoYW5nZV9jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBPcHRpb25zLmNoYW5nZV9jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgaWQ6IDEsXG5cbiAgICAgICAgICAgIHR5cGU6IFwiaG92ZXJcIixcbiAgICAgICAgICAgIHRlY2huaWNhbF9uYW1lOiBcIm1vdXNlb3ZlclwiLFxuXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBhZGQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb3VzZW92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zLmNoYW5nZV9jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLmdyaWRfaXRlbXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb3VzZW92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zLmNoYW5nZV9jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBsZXQgY3VycmVudF90eXBlID0gW1wiY2xpY2tcIl07XG5cbiAgICBjb25zdCBzZXRfaW50ZXJhY3Rpb25fdGV4dCA9ICgpID0+IHtcbiAgICAgICAgaW50ZXJhY3Rpb24udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgY3VycmVudF90eXBlWzBdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY3VycmVudF90eXBlWzBdLnNsaWNlKDEpO1xuICAgIH07XG5cbiAgICBzZXRfaW50ZXJhY3Rpb25fdGV4dCgpO1xuXG4gICAgLy8gQWRkcyBmdW5jdGlvbmFsaXR5IHRvIHRoZSB0b3AgYnV0dG9uc1xuICAgIGNvbnN0IG1hbmFnZV9idXR0b25zID0gKCkgPT4ge1xuICAgICAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQ2FudmFzLmNsZWFyKTtcblxuICAgICAgICBET01fZWwub3B0aW9ucy5zaXppbmdfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIENhbnZhcy5yZXNpemUpO1xuXG4gICAgICAgIGVyYXNlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZXJhc2VyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudF9tb2RlWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBpeGVsXCI6XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbW9kZVswXSA9IFwiZXJhc2VyXCI7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVzLmVyYXNlci5jb25maWcuYWRkKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImVyYXNlclwiOlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X21vZGVbMF0gPSBcInBpeGVsXCI7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVzLmVyYXNlci5jb25maWcuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGludGVyYWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudF9tb2RlWzBdID09PSBcImVyYXNlclwiKSBtb2Rlcy5lcmFzZXIuY29uZmlnLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBpbnRlcmFjdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gaW50ZXJhY3Rpb25fdHlwZXNbY3VycmVudF07XG5cbiAgICAgICAgICAgIHR5cGUuY29uZmlnLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdHlwZS5pZDtcblxuICAgICAgICAgICAgY29uc3QgbmV4dF9pZCA9IChpbmRleCArIDEpICUgT2JqZWN0LmtleXMoaW50ZXJhY3Rpb25fdHlwZXMpLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBpbnRlcmFjdGlvbiBpbiBpbnRlcmFjdGlvbl90eXBlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gaW50ZXJhY3Rpb25fdHlwZXNbaW50ZXJhY3Rpb25dLmlkO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSBuZXh0X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdHlwZVswXSA9IGludGVyYWN0aW9uX3R5cGVzW2ludGVyYWN0aW9uXS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldF9pbnRlcmFjdGlvbl90ZXh0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRfdHlwZSA9XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25fdHlwZXNbaW50ZXJhY3Rpb24udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgICAgIG5leHRfdHlwZS5jb25maWcuYWRkKCk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50X21vZGVbMF0gPT09IFwiZXJhc2VyXCIpIG1vZGVzLmVyYXNlci5jb25maWcuYWRkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hvc2VuX2NvbG9yID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgIERPTV9lbC5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2hvc2VuX2NvbG9yO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgbWFuYWdlX2J1dHRvbnMsIGludGVyYWN0aW9uX3R5cGVzLCBjdXJyZW50X3R5cGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IE5hdmJhciB9O1xuIiwiaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsXCI7XG5cbmNvbnN0IE9wdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJhbmRvbV9jb2xvciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgKChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYpIDw8IDApLnRvU3RyaW5nKDE2KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29sb3JfY29udmVyc2lvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBoZXhfMl9yZ2IgPSAoaGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgICB2YXIgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgICAgICAgdmFyIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgICAgICAgICAgdmFyIGIgPSBiaWdpbnQgJiAyNTU7XG5cbiAgICAgICAgICAgIHJldHVybiBbciwgZywgYl0uam9pbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJnYmFfMl9oZXggPSAocmdiYSkgPT5cbiAgICAgICAgICAgIGAjJHtyZ2JhXG4gICAgICAgICAgICAgICAgLm1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCtcXC57MCwxfVxcZCopKT9cXCkkLyxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgLm1hcCgobiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgKGkgPT09IDMgPyBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobikgKiAyNTUpIDogcGFyc2VGbG9hdChuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYWRTdGFydCgyLCBcIjBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiTmFOXCIsIFwiXCIpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKX1gO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZXhfMl9yZ2IsXG4gICAgICAgICAgICByZ2JhXzJfaGV4LFxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBkcmF3aW5nX3N0eWxlcyA9IHtcbiAgICAgICAgY29sb3I6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBcIiM1ZjllYTBcIjtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldCB2YWx1ZShuZXdfdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGl4ZWwsIGN1cnJlbnRfY29sb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5jbGFzc0xpc3QuYWRkKFwic2hpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG5cbiAgICAgICAgcmFpbmJvdzogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhbmRvbV9jb2xvcigpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbHMgPSB7fTtcblxuICAgICAgICAgICAgY29uc3QgY2xlYXJfaW50ZXJ2YWwgPSAoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsc1tpZF0pO1xuXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgY2xlYXJfYWxsX2ludGVydmFscyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBpeGVsIGluIGludGVydmFscykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsc1twaXhlbF0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIERPTV9lbC5ncmlkX2l0ZW1zKCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IChpdGVtLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIiksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGl4ZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbV9jb2xvcigpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQgMXMgZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLmNsYXNzTGlzdC5hZGQoXCJzaGluZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21fY29sb3IoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxfaWQgPSBwaXhlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJ2YWxzW3BpeGVsX2lkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaW50ZXJ2YWxzW3BpeGVsX2lkXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsc1twaXhlbF9pZF0gPSBpZDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2V0IGNsZWFyX2FsbF9pbnRlcnZhbHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGVhcl9hbGxfaW50ZXJ2YWxzO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGVhcl9pbnRlcnZhbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG5cbiAgICAgICAgZ3JheTogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsdW1pbm9zaXR5ID0gMDtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gYHJnYmEoJHtsdW1pbm9zaXR5fSwgJHtsdW1pbm9zaXR5fSwgJHtsdW1pbm9zaXR5fSlgO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXQgY29uZmlnKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBpeGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmdfY29sb3JcIiwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsdW1pbm9zaXR5ID0gKGx1bWlub3NpdHkgKyAxNSkgJSAyNTU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYHJnYmEoJHtsdW1pbm9zaXR5fSwgJHtsdW1pbm9zaXR5fSwgJHtsdW1pbm9zaXR5fSlgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5jbGFzc0xpc3QuYWRkKFwic2hpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG5cbiAgICAgICAgcmFuZG9tOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmFuZG9tX2NvbG9yKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGl4ZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1iZ19jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbV9jb2xvcigpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbC5jbGFzc0xpc3QuYWRkKFwic2hpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG4gICAgfTtcblxuICAgIGxldCBjdXJyZW50X3N0eWxlID0gW1wiY29sb3JcIl07XG5cbiAgICAvLyBDaGFuZ2VzIHRoZSBjb2xvciBvZiB0aGUgZGl2cyBieSBhZGRpbmcgYSBjbGFzcyB0byBpdFxuICAgIGNvbnN0IGNoYW5nZV9jb2xvciA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZ2V0Q29tcHV0ZWRTdHlsZShzcXVhcmUpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRyYXdpbmdfc3R5bGVzW2N1cnJlbnRfc3R5bGVbMF1dO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfYmcgPSBjb2xvcl9jb252ZXJzaW9ucy5yZ2JhXzJfaGV4KFxuICAgICAgICAgICAgZGV0YWlscy5nZXRQcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZC1jb2xvclwiKSxcbiAgICAgICAgKTtcblxuICAgICAgICBzdHlsZS5jb25maWcoc3F1YXJlLCBjdXJyZW50X2JnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYXR0YWNoX2xpc3RlbmVycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHsgY2xvc2VfYnRuLCBvcGVuX2J0biwgY29sb3JfcGlja2VyLCByYW5kb20sIGdyYXksIHJhaW5ib3cgfSA9XG4gICAgICAgICAgICBET01fZWwub3B0aW9ucztcblxuICAgICAgICBjbG9zZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIERPTV9lbC5vcHRpb25zLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBvcGVuX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgRE9NX2VsLm9wdGlvbnMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbG9yX3BpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRfc3R5bGVbMF0gPSBcImNvbG9yXCI7XG4gICAgICAgICAgICBjb25zdCBjaG9zZW5fY29sb3IgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgICAgZHJhd2luZ19zdHlsZXNbXCJjb2xvclwiXVtcInZhbHVlXCJdID0gY2hvc2VuX2NvbG9yO1xuICAgICAgICB9KTtcblxuICAgICAgICByYW5kb20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRfc3R5bGVbMF0gPSBcInJhbmRvbVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBncmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50X3N0eWxlWzBdID0gXCJncmF5XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJhaW5ib3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRfc3R5bGVbMF0gPSBcInJhaW5ib3dcIjtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7IGNoYW5nZV9jb2xvciwgZHJhd2luZ19zdHlsZXMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IE9wdGlvbnMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3N0eWxlcy9za2V0Y2hwLmNzc1wiO1xuXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICAgIC8vIENyZWF0ZSBhIDE2eDE2IGdyaWQgb2YgZGl2cyBpbnNpZGUgdGhlIGNhbnZhcyB3aGVuIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICBDYW52YXMuZ2VuZXJhdGUoMjU2KTtcblxuICAgIC8vIEFjdGl2YXRlIHRvcCBidXR0b25zXG4gICAgTmF2YmFyLm1hbmFnZV9idXR0b25zKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcInJlc2l6ZVwiLFxuICAgICgpID0+IENhbnZhcy5hZGFwdF9waXhlbHMobnVsbCwgQ2FudmFzLmluZm8oKSksXG4gICAgdHJ1ZSxcbik7XG5cbi8vIEFzIHNvb24gYXMgdGhlIHBhZ2UgZnVsbHkgbG9hZHMgY2FsbHMgdGhlIG1haW4gZnVuY3Rpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBtYWluKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==