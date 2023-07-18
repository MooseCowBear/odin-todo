/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
p, 
section,
article {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  display: block;
}

button {
  font-family: inherit;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

html:focus-within {
  scroll-behavior: smooth;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* end reset */

:root {
  --neutral-100: rgb(244 244 245);
  --netural-200: rgb(228 228 231);
  --neutral-300: rgb(39 39 42);
  --neutral-400: rgb(24 24 27);
}

body {
  font-family: 'Poppins', sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  background-color: var(--neutral-100);
  color: var(--neutral-300);
}

h1 {
  font-size: 3rem;
  line-height: 1;
}

h1, h2, h3 {
  color: var(--neutral-400);
}

main {
  padding: 3rem 10vw;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}

.nav {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  background-color: var(--netural-200);
  height: 100%;
  border-radius: 30px 0 0 0;
}

.nav > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}

.nav .project-div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}

button {
  cursor: pointer;
}

.nav button {
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
}

.item {
  line-height: 1;
}

.item, .item label {
  display: flex;
  align-items: first baseline;
  gap: 1rem;
}

.item .label-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item .project-title {
  text-transform: uppercase;
  font-size: 0.8rem;
}

.task-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-group h2 {
  border-bottom: 2px solid black;
}

.new-buttons-div {
  display: flex;
  justify-content: space-between;
  width: 100%;;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.datetime-display {
  display: flex;
  gap: 0.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: clamp(300px, 60%, 800px); /* need to adjust bc currently overflows */
  padding: 0.5rem 0;
}

.form input, textarea {
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: inherit;
  background-color: inherit;
}

input[type="submit"] {
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
}

.form button {
  width: max-content;
  text-transform: lowercase;
  border: none;
  background-color: transparent;
}

.label-wrapper {
  display: flex;
  gap: 0.5rem;
}

select {
  margin-left: 0.5rem;
}

.warning {
  
  color: salmon;
}

.button-div {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,UAAU;AACV;;;EAGE,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE;GACC,qBAAqB;EACtB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;AACA,cAAc;;AAEd;EACE,+BAA+B;EAC/B,+BAA+B;EAC/B,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,gCAAgC;EAChC,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,oCAAoC;EACpC,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,+BAA+B,EAAE,0CAA0C;EAC3E,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;AAChC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');\n\n/* reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\np, \nsection,\narticle {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* end reset */\n\n:root {\n  --neutral-100: rgb(244 244 245);\n  --netural-200: rgb(228 228 231);\n  --neutral-300: rgb(39 39 42);\n  --neutral-400: rgb(24 24 27);\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  background-color: var(--neutral-100);\n  color: var(--neutral-300);\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1;\n}\n\nh1, h2, h3 {\n  color: var(--neutral-400);\n}\n\nmain {\n  padding: 3rem 10vw;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  gap: 1rem;\n  background-color: var(--netural-200);\n  height: 100%;\n  border-radius: 30px 0 0 0;\n}\n\n.nav > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.nav .project-div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.nav button {\n  background-color: transparent;\n  border: none;\n  font-size: 0.8rem;\n}\n\n.item {\n  line-height: 1;\n}\n\n.item, .item label {\n  display: flex;\n  align-items: first baseline;\n  gap: 1rem;\n}\n\n.item .label-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item .project-title {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.task-group {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-group h2 {\n  border-bottom: 2px solid black;\n}\n\n.new-buttons-div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.datetime-display {\n  display: flex;\n  gap: 0.5rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: clamp(300px, 60%, 800px); /* need to adjust bc currently overflows */\n  padding: 0.5rem 0;\n}\n\n.form input, textarea {\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 0.5rem;\n  font-family: inherit;\n  background-color: inherit;\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.form button {\n  width: max-content;\n  text-transform: lowercase;\n  border: none;\n  background-color: transparent;\n}\n\n.label-wrapper {\n  display: flex;\n  gap: 0.5rem;\n}\n\nselect {\n  margin-left: 0.5rem;\n}\n\n.warning {\n  \n  color: salmon;\n}\n\n.button-div {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectFormComponent: () => (/* binding */ projectFormComponent),
/* harmony export */   taskFormComponent: () => (/* binding */ taskFormComponent)
/* harmony export */ });
/* harmony import */ var _projectComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectComponent.js */ "./src/projectComponent.js");
/* harmony import */ var _tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksComponent.js */ "./src/tasksComponent.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");




function projectFormComponent(parent, nodeToReplace, todos, project = null) {
  const component = document.createElement('div');
  component.id = "form";
  component.classList.add('form');

  const f = document.createElement('form');

  const titleField = createSimpleInput(project, "title", "text", "Title: *", "Project must have a title.");
  f.appendChild(titleField);

  const categoryField = createSimpleInput(project, "category", "text", "Category:", "")
  f.appendChild(categoryField);

  const dateField = createSimpleInput(project, "date", "date", "Deadline:", "");
  f.appendChild(dateField);

  const timeField = createSimpleInput(project, "time", "time", "Time:", "");
  f.appendChild(timeField);

  const description = createTextarea(project, "description", "Description:");
  f.appendChild(description);

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  f.appendChild(submitBtn);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('button-div');
  const cancel = document.createElement('button');
  cancel.textContent = 'Cancel';
  buttonsDiv.appendChild(cancel);

  if (project) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn'); //will make this small
    deleteBtn.textContent = 'Delete Project';
    buttonsDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      todos.deleteProject(project.getId());
      (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, "All", parent); //want to go to "home" + also need to redraw nav!
      (0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.navComponent)(todos, document.querySelector('header'));
    });
  }

  f.appendChild(buttonsDiv);

  component.appendChild(f);
  nodeToReplace.replaceWith(component);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const validates = validateInput([titleField]);
    if (!validates) return; 

    console.log("title value:", document.getElementById('title'), document.getElementById('title').value);

    if (project) {
      todos.updateProject(
        project.getId(), 
        document.getElementById('title').value.trim().toLowerCase(), 
        document.getElementById('description').value, 
        document.getElementById('date').value, 
        document.getElementById('time').value, 
        document.getElementById('category').value.trim().toLowerCase()
      );
      
      (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, project.getId(), parent);
    }
    else { 
      const projectId = todos.createProject(
        document.getElementById('title').value.trim().toLowerCase(), 
        document.getElementById('description').value, 
        document.getElementById('date').value, 
        document.getElementById('time').value, 
        document.getElementById('category').value.trim().toLowerCase()
      );
      (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, projectId, parent);
    }
  });

  cancel.addEventListener("click", () => {
    console.log("cancel button clicked", nodeToReplace);
    component.replaceWith(nodeToReplace);
  });
}

function taskFormComponent(parent, nodeToReplace, todos, taskSubset, projectID, task = null) {
  console.log("TASK", task);
  console.log("PROJECT ID", projectID);

  const component = document.createElement('div');
  component.id = "form";
  component.classList.add('form');

  const f = document.createElement('form');

  const description = createSimpleInput(task, "description", "text", "Task: *", "Must have task.");
  f.appendChild(description);

  //if you came from a project's page, would expect that that project is the project for the task.
  //in that case, would want a hidden field with projectid value
  if (!task && !projectID) {
    const projects = todos.getProjects(); 
    const projectIdField = createProjectSelect(task, projects);
    f.appendChild(projectIdField);
  }
  else if (!task && projectID) {
    const projectIdField = document.createElement("input");
    projectIdField.type = "hidden";
    projectIdField.value = projectID;
    projectIdField.id = "project";
    f.appendChild(projectIdField);
  }

  const priority = createPrioritySelect(task, ["low", "medium", "high"]);
  f.appendChild(priority);

  const dateField = createSimpleInput(task, "date", "date", "Deadline:", "");
  f.appendChild(dateField);

  const timeField = createSimpleInput(task, "time", "time", "Time:", "");
  f.appendChild(timeField);

  const categoryField = createSimpleInput(task, "category", "text", "Category:");
  f.appendChild(categoryField);

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  f.appendChild(submitBtn);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('button-div');
  const cancel = document.createElement('button');
  cancel.textContent = 'Cancel';
  buttonsDiv.appendChild(cancel);

  if (task) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Task';
    buttonsDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      console.log(todos.getTasks());
      console.log("task id to delete", task.getId());

      todos.deleteTask(task.getId());

      console.log(todos.getTasks());

      if (taskSubset) {
        (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, taskSubset, parent);
      }
      else {
        (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, projectID, parent);
      }
    });
  }

  f.appendChild(buttonsDiv);

  component.appendChild(f);
  nodeToReplace.replaceWith(component);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const validates = validateInput([description]);
    if (!validates) return; 

    const catInput = document.getElementById('category').value.trim();
    const cat = catInput === "" ? "uncategorized" : catInput;
    console.log("cat", cat);

    if (task) {
      todos.updateTask(
        task.getId(), 
        document.getElementById('description').value, 
        document.getElementById('priority').value,
        document.getElementById('date').value, 
        document.getElementById('time').value, 
        cat.toLowerCase()
      );
      
      if (taskSubset) {
        (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, taskSubset, parent);
      }
      else {
        (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, projectID, parent);
      }
    }
    else {
      todos.createTask(
        document.getElementById('description').value, 
        parseInt(document.getElementById('project').value),
        document.getElementById('priority').value,
        document.getElementById('date').value, 
        document.getElementById('time').value, 
        cat.toLowerCase()
      );

      const noTaskMessage = document.getElementById('no-task-message');
      if (noTaskMessage) {
        noTaskMessage.remove();
      }

      if (taskSubset) {
        (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, taskSubset, parent);
      }
      else {
        (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, projectID, parent);
      }
    }
  });

  cancel.addEventListener("click", () => {
    component.replaceWith(nodeToReplace);
  });
}

function createSimpleInput(elem, id, type, labelText, warning) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('input-field');

  const field = document.createElement('input');
  field.type = type;
  field.id = id;

  if (elem) {
    console.log(`get${id.charAt(0).toUpperCase() + id.slice(1)}`);
    field.value = elem[`get${id.charAt(0).toUpperCase() + id.slice(1)}`]();
    console.log("field value: ", field.value);
  }

  const labelWrapper = document.createElement('div');
  labelWrapper.classList.add('label-wrapper');

  const fieldLabel = document.createElement('label');
  fieldLabel.textContent = labelText;
  fieldLabel.htmlFor = id;

  const notice = document.createElement('p');
  notice.textContent = warning;
  notice.classList.add('warning');

  labelWrapper.appendChild(fieldLabel);
  labelWrapper.appendChild(notice);
  fieldDiv.appendChild(labelWrapper);
  fieldDiv.appendChild(field);

  return fieldDiv;
}

function createProjectSelect(task, options) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('input-field');

  const field = document.createElement('select');
  field.id = "project";

  const fieldLabel = document.createElement('label');
  fieldLabel.textContent = "Project:";
  fieldLabel.htmlFor = "project";

  const noneOption = document.createElement('option');
  noneOption.value = 0;
  noneOption.textContent = "None";
  if (!task) {
    noneOption.selected = true;
  }
  field.appendChild(noneOption);

  for (const opt of options) {
    const selectOption = document.createElement('option');
    selectOption.value = opt.getId();
    selectOption.textContent = opt.getTitle();
    if (task && task.getProjectId() === opt.getId()) {
      selectOption.selected = true;
    }
    field.appendChild(selectOption);
  }

  fieldDiv.appendChild(fieldLabel);
  fieldDiv.appendChild(field);

  return fieldDiv;
}

function createPrioritySelect(task, options) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('input-field');

  const field = document.createElement('select');
  field.id = "priority";

  const fieldLabel = document.createElement('label');
  fieldLabel.textContent = "Priority:";
  fieldLabel.htmlFor = "priority";

  for (const opt of options) {
    const selectOption = document.createElement('option');
    selectOption.value = opt;
    selectOption.textContent = opt;
    if (task && opt === task.getPriority()) {
      selectOption.selected = true;
    }
    field.appendChild(selectOption);
  }

  fieldDiv.appendChild(fieldLabel);
  fieldDiv.appendChild(field);

  return fieldDiv;  
}

function createTextarea(elem, id, labelText) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('input-field');

  const field = document.createElement('textarea');
  field.id = id;

  if (elem) {
    field.value = elem[`get${id.charAt(0).toUpperCase() + id.slice(1)}`]();
    console.log("field value: ", field.value);
  }

  const fieldLabel = document.createElement('label');
  fieldLabel.textContent = labelText;
  fieldLabel.htmlFor = id;

  fieldDiv.appendChild(fieldLabel);
  fieldDiv.appendChild(field);

  return fieldDiv;
}

function validateInput(fields) {
  let good = true;
  for (const f of fields) {
    const input = f.querySelector('input');
    if (input.value.trim() === "") {
      const warning = f.querySelector('warning');
      warning.classList.add('show');
      good = false;
    }
  }
  return good;
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navComponent: () => (/* binding */ navComponent)
/* harmony export */ });
/* harmony import */ var _viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewHelpers.js */ "./src/viewHelpers.js");
/* harmony import */ var _tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksComponent.js */ "./src/tasksComponent.js");
/* harmony import */ var _projectComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectComponent.js */ "./src/projectComponent.js");




function navComponent(todos, parent) {
  //draws buttons to task views: today, upcoming, anytime, complete
  parent.textContent = ""
  const component = document.createElement('nav');
  component.classList.add('nav');

  const tasksDiv = document.createElement('div');
  const tasksTitle = document.createElement('h2');
  tasksTitle.textContent = "Tasks";
  tasksDiv.appendChild(tasksTitle);

  const buttons = ['All', 'Today', 'Upcoming', 'Completed'];

  for (const b of buttons) {
    const btn = document.createElement('button');
    btn.textContent = b;
    tasksDiv.appendChild(btn);
  }

  addTaskListener(tasksDiv, todos);
  component.appendChild(tasksDiv);

  const projectsDiv = document.createElement('div');
  const projectsDivTitle = document.createElement('h2');
  projectsDivTitle.textContent = "Projects";
  projectsDiv.appendChild(projectsDivTitle);

  const projects = todos.getProjects();

  for (const cat of (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCategories)(projects)) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');

    const title = document.createElement('h3'); //h1 and h2 will be in the main content part
    title.textContent = cat;
    projectDiv.appendChild(title);

    const sortedProjects = (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(projects.filter(elem => elem.getCategory() === cat));

    for (const p of sortedProjects) { //THIS WILL PROBABLY CHANGE
      const projectItem = document.createElement('button');
      projectItem.classList.add("project-item");
      projectItem.textContent = p.getTitle();
      projectDiv.appendChild(projectItem);
      projectItem.dataset.id = `${p.getId()}`;
    }
    projectsDiv.appendChild(projectDiv);
  }

  addProjectListener(projectsDiv, todos);
  component.appendChild(projectsDiv);

  //draws each category of project, with projects from that category listed (in order of date)
  parent.appendChild(component);
}

function addTaskListener(buttonDiv, todos) {
  buttonDiv.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const content = document.getElementById('content');

      (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, e.target.textContent, content);
    }
  });
}

function addProjectListener(buttonDiv, todos) {
  buttonDiv.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const content = document.getElementById('content');
      
      (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_2__.projectComponent)(todos, parseInt(e.target.dataset.id), content);
    }
  });
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _schedulable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedulable.js */ "./src/schedulable.js");


const Project = (id, title, description, date, time, category) => {
  const schedulable = (0,_schedulable_js__WEBPACK_IMPORTED_MODULE_0__.Schedulable)(date, time);

  const getId = () => {
    return id;
  };

  const getTitle = () => {
    return title;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const getDescription = () => {
    return description;
  };

  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const getCategory = () => {
    return category;
  };

  const setCategory = (newCategory) => {
    category = newCategory;
  };

  return {
    ...schedulable,
    getId,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getCategory,
    setCategory
  };
};

/***/ }),

/***/ "./src/projectComponent.js":
/*!*********************************!*\
  !*** ./src/projectComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectComponent: () => (/* binding */ projectComponent)
/* harmony export */ });
/* harmony import */ var _viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewHelpers.js */ "./src/viewHelpers.js");
/* harmony import */ var _subcomponents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcomponents.js */ "./src/subcomponents.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");





function projectComponent(todos, projectId, parent) {
  parent.textContent = "";

  const component = document.createElement('div');
  component.classList.add('component');
  const header = document.createElement('div');
  header.classList.add('project-header');

  const title = document.createElement('h1');
  title.textContent = todos.getProjectById(projectId).getTitle();
  header.appendChild(title);

  const dateDisplay = document.createElement('p');
  dateDisplay.textContent = todos.getProjectById(projectId).dateFormatted();
  header.appendChild(dateDisplay);

  const projectEdit = document.createElement('button');
  projectEdit.id = "edit-project";
  projectEdit.textContent = 'Edit';
  header.appendChild(projectEdit);

  component.appendChild(header);

  const d = todos.getProjectById(projectId).getDescription();
  if (d !== "") {
    const descriptDisplay = document.createElement('p');
    descriptDisplay.textContent = d;
    component.appendChild(descriptDisplay);
  }

  const newFormDiv = document.createElement('div'); //where new form will go on page if button is pressed
  newFormDiv.id = "form";
  component.appendChild(newFormDiv); 

  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addNewFormBtns)(parent);

  const projectDiv = document.createElement('div');
  projectDiv.classList.add('main-content');

  const tasks = todos.getTasksByProjectId(projectId); //this is both completed and not

  for (const cat of (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCategories)(tasks)) { 
    //create task group 
    const group = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)(cat);
    //now list the tasks for each category
    const sortedTasks = (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(tasks.filter(elem => elem.getCategory() === cat));

    for (const t of sortedTasks) {
      const item = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(todos, t, true);
      group.appendChild(item);
    }
    projectDiv.appendChild(group);
  }
  component.appendChild(projectDiv);
  parent.appendChild(component);

  addButtonListeners(parent, todos, projectId);
}

function addButtonListeners(parent, todos, projectId) {
  const newProject = document.getElementById('new-project');
  const newTask = document.getElementById('new-task');
  const formDiv = document.getElementById('form');

  newProject.addEventListener("click", () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.projectFormComponent)(parent, formDiv, todos);
  });

  newTask.addEventListener("click", () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.taskFormComponent)(parent, formDiv, todos, null, projectId);
  });

  const projectEditBtn = document.getElementById('edit-project');
  projectEditBtn.addEventListener("click", () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.projectFormComponent)(parent, formDiv, todos, todos.getProjectById(projectId));
  });

  const editBtns = document.querySelectorAll('.edit-button');
  for (let i = 0; i < editBtns.length; i ++){
    editBtns[i].addEventListener("click", (e) => {
      const taskDiv = document.getElementById((0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskItemId)(e.target.dataset.taskId));
      const task = todos.getTaskById(parseInt(e.target.dataset.taskId));
      (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.taskFormComponent)(parent, taskDiv, todos, null, projectId, task);
    });
  }
}



/***/ }),

/***/ "./src/schedulable.js":
/*!****************************!*\
  !*** ./src/schedulable.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Schedulable: () => (/* binding */ Schedulable)
/* harmony export */ });
const Schedulable = (date, time) => {
  const getDateAsDate = () => {
    if (date === "") return null;
    const timeString = time === "" ? "T23:59:59" : "T" + time + ":00";
    return new Date(date + timeString);
  };

  const dateFormatted = () => {
    if (date === "") return date;
    const month = date[5] === "0" ? date.slice(6, 7) : date.slice(5, 7);
    const day = date[8] === "0" ? date.slice(9) : date.slice(8);
    const year = date.slice(0, 4);

    return month + "/" + day + "/" + year;
  };

  const timeFormatted = () => {
    if (time === "") return time;
    let hour = parseInt(time.slice(0, 2));
    const min = time.slice(2);
    const m = hour >= 12 ? "pm" : "am";
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}${min} ${m}`;
  };

  //also need set date, time for editing

  const setDate = (newDate) => {
    date = newDate;
  };

  const setTime = (newTime) => {
    time = newTime;
  };

  const getTime = () => {
    return time;
  }

  const getDate = () => {
    return date;
  }

  return {
    getDateAsDate,
    dateFormatted,
    timeFormatted,
    setDate,
    setTime,
    getTime,
    getDate
  };
}

/***/ }),

/***/ "./src/subcomponents.js":
/*!******************************!*\
  !*** ./src/subcomponents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewFormBtns: () => (/* binding */ addNewFormBtns),
/* harmony export */   createTaskGroup: () => (/* binding */ createTaskGroup),
/* harmony export */   createTaskItem: () => (/* binding */ createTaskItem)
/* harmony export */ });
/* harmony import */ var _viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewHelpers.js */ "./src/viewHelpers.js");


function createTaskGroup(groupTitle) {
  const groupDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = groupTitle;
  groupDiv.appendChild(title);
  groupDiv.classList.add('task-group');

  return groupDiv;
}

function createTaskItem(todos, task, includeDate = false) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');
  itemDiv.id = (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskItemId)(task.getId());

  const lbl = document.createElement('label');
  const check = document.createElement('input');
  check.type = 'checkbox'; 

  if (task.completed) {
    check.checked = true;
  }

  check.addEventListener('change', (e) => {
    task.updateStatus();

    if (e.target.checked) {
      console.log("a check box was checked");
      //want to fade out...? only if not showing completed tasks...which would require a bool...
    }
  });

  lbl.appendChild(check);

  const labelContent = document.createElement('span');
  labelContent.classList.add("label-content");
  const description = document.createElement('span');

  description.textContent = task.getDescription();
  labelContent.appendChild(description);

  if (task.getProjectId() > 0) {
    const projectTitle = document.createElement('span');
    projectTitle.textContent = todos.getProjectById(task.getProjectId()).getTitle();
    projectTitle.classList.add('project-title');
    labelContent.appendChild(projectTitle);
  }

  lbl.appendChild(labelContent);

  itemDiv.appendChild(lbl);

  const time = document.createElement('div');
  time.classList.add("datetime-display");

  if (includeDate) {
    const dateContent = document.createElement('span');
    dateContent.textContent = task.dateFormatted();
    time.appendChild(dateContent);
  }

  const timeContent = document.createElement('span');
  timeContent.textContent = task.timeFormatted(); 
  time.appendChild(timeContent);

  itemDiv.appendChild(time);

  //here want to add the info icon in a button to edit
  const edit = document.createElement('button');
  edit.classList.add("edit-button");
  edit.dataset.taskId = `${task.getId()}`; //to be used in event listener that updates task

  edit.textContent = "edit"; //for now, will update with icon
  itemDiv.appendChild(edit);

  if (task.getPriority() === 'high') {
    const priorty = document.createElement('p'); //change to icon?
    priorty.textContent = "!";
    itemDiv.appendChild(priorty);
  }

  return itemDiv;
}

function addNewFormBtns(parent) {
  const newFormBtnsDiv = document.createElement('div');
  newFormBtnsDiv.classList.add('new-buttons-div');
  const newProject = document.createElement('button');
  newProject.textContent = "New Project";
  newProject.id = "new-project";

  newFormBtnsDiv.appendChild(newProject);

  const newTask = document.createElement('button');
  newTask.textContent = "New Task";
  newTask.id = "new-task"; 
  
  newFormBtnsDiv.appendChild(newTask);

  parent.appendChild(newFormBtnsDiv);
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _schedulable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedulable.js */ "./src/schedulable.js");


const Task = (id, description, projectId, priority, date, time, category = "misc") => {
  const schedulable = (0,_schedulable_js__WEBPACK_IMPORTED_MODULE_0__.Schedulable)(date, time);

  let completed = false;

  const getId = () => {
    return id;
  };

  const getDescription = () => {
    return description;
  };
  
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const getProjectId = () => {
    return projectId;
  };

  const getCategory = () => {
    return category;
  };

  const setCategory = (newCategory) => {
    category = newCategory;
  };

  const getPriority = () => {
    return priority;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const complete = () => {
    return completed;
  };

  const updateStatus = () => {
    completed = !completed;
  };

  return {
    ...schedulable,
    getId,
    getDescription,
    setDescription,
    getProjectId,
    getCategory,
    setCategory,
    getPriority,
    setPriority,
    complete,
    updateStatus
  };
};

/***/ }),

/***/ "./src/tasksComponent.js":
/*!*******************************!*\
  !*** ./src/tasksComponent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tasksComponent: () => (/* binding */ tasksComponent)
/* harmony export */ });
/* harmony import */ var _viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewHelpers.js */ "./src/viewHelpers.js");
/* harmony import */ var _subcomponents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcomponents.js */ "./src/subcomponents.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");




function tasksComponent(todos, taskSubset, parent) {
  parent.textContent = "";

  const tasks = todos[`get${taskSubset}Tasks`]();

  const component = document.createElement('div');
  component.classList.add('component');

  const title = document.createElement('h1');
  title.textContent = taskSubset === "Today" ? "Tasks" : taskSubset;

  component.appendChild(title);

  const newFormDiv = document.createElement('div'); //where new form will go on page if button is pressed
  newFormDiv.id = "form";
  component.appendChild(newFormDiv); 

  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addNewFormBtns)(parent);

  if (tasks.length === 0) {
    const message = document.createElement('p');
    message.id ="no-tasks-message";
    message.textContent = "No tasks";
    component.appendChild(message);
    parent.appendChild(component);
    return;
  }

  const sortedTasks = (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(tasks);

  const tasksDiv = document.createElement('div');
  tasksDiv.classList.add('main-content');

  let currDate = sortedTasks[0].getDateAsDate();
  let currDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)((0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getDivTitle)(currDate));

  for (const t of sortedTasks) {
    console.log("task is:", t, t.getDescription());
    const taskItem = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(todos, t); 

    if ((0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.sameDay)(t.getDateAsDate(), currDate)) {
      //append to the current div
      currDiv.appendChild(taskItem);
    }
    else {
      //done with that group
      tasksDiv.appendChild(currDiv);
      //create a new group
      currDate = t.getDateAsDate();
      currDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)((0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getDivTitle)(currDate));
      //and then append, taskItem to the new group
      currDiv.appendChild(taskItem);
    }
  }
  tasksDiv.appendChild(currDiv); //append whatever the last one was
  component.appendChild(tasksDiv);
  parent.appendChild(component);

  addButtonListeners(parent, todos, taskSubset);
}

function addButtonListeners(parent, todos, taskSubset) {
  const newProject = document.getElementById('new-project');
  const newTask = document.getElementById('new-task');

  newProject.addEventListener("click", () => {
    const nodeToReplace = document.getElementById('form');
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.projectFormComponent)(parent, nodeToReplace, todos);
  });

  newTask.addEventListener("click", () => {
    const nodeToReplace = document.getElementById('form');
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.taskFormComponent)(parent, nodeToReplace, todos, taskSubset, null);
  });

  const editBtns = document.querySelectorAll('.edit-button');
  for (let i = 0; i < editBtns.length; i ++){
    editBtns[i].addEventListener("click", (e) => {
      const nodeToReplace = document.getElementById((0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskItemId)(e.target.dataset.taskId));
      const task = todos.getTaskById(parseInt(e.target.dataset.taskId));
      (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.taskFormComponent)(parent, nodeToReplace, todos, taskSubset, null, task);
    });
  }
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _viewHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewHelpers.js */ "./src/viewHelpers.js");




const Todo = () => {
  let projects = [];
  let tasks = [];

  let projectIdCounter = 1;
  let taskIdCounter = 1;

  const getProjectById = (id) => {
    const p = projects.filter(elem => elem.getId() === id);
    if (p.length === 0) return null;
    return p[0];
  };

  const getTaskById = (id) => {
    const t = tasks.filter(elem => elem.getId() === id);
    if (t.length === 0) return null;
    return t[0];
  };

  const createProject = (title, description, date, time, category = "uncategorized") => {
    const p = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.Project)(projectIdCounter, title, description, date, time, category);
    projects.push(p);
    projectIdCounter++;
    return p.getId();
  };

  const createTask = (description, projectId, priority, date, time, category = "uncategorized") => {
    console.log("creating task with id: ", taskIdCounter);
    const t = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(taskIdCounter, description, projectId, priority, date, time, category);
    tasks.push(t);
    taskIdCounter++;
  };

  const deleteProject = (id) => {
    projects = projects.filter(elem => elem.getId() !== id);
    tasks = tasks.filter(elem => elem.getProjectId(id) !== id);
  };

  const deleteTask = (id) => {
    tasks = tasks.filter(elem => elem.getId(id) !== id)
  };

  const updateProject = (id, title, description, date, time, category = "uncategorized") => {
    const project = getProjectById(id);
    project.setTitle(title);
    project.setDescription(description);
    project.setDate(date);
    project.setTime(time);
    project.setCategory(category);
  };

  const updateTask = (id, description, priority, date, time, category = "uncategorized") => {
    const task = getTaskById(id);
    task.setDescription(description);
    task.setPriority(priority);
    task.setDate(date);
    task.setTime(time);
    task.setCategory(category);
  };

  const getProjects = () => {
    return projects;
  };

  const getTasks = () => {
    return tasks;
  };

  const getTodayTasks = () => {
    const today = new Date(); 
    return tasks.filter(elem => !elem.complete() && (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_2__.sameDay)(elem.getDateAsDate(), today)); 
  };

  const getUpcomingTasks = () => {
    const today = new Date(); //want start of day
    today.setHours(0,0,0,0);
    return tasks.filter(elem => (elem.getDateAsDate() !== null && elem.getDateAsDate() >= today && !elem.complete()));
  };

  const getAllTasks = () => {
    return tasks.filter(elem => !elem.complete());
  }

  const getCompletedTasks = () => {
    return tasks.filter(elem => elem.complete());
  };

  const getTasksByProjectId = (id) => {
    return tasks.filter(elem => elem.getProjectId() === id);
  };

  return {
    getProjectById,
    getTaskById,
    createProject,
    createTask,
    deleteProject,
    deleteTask,
    updateProject,
    updateTask,
    getProjects,
    getTasks,
    getTodayTasks,
    getAllTasks,
    getUpcomingTasks,
    getCompletedTasks,
    getTasksByProjectId
  };
}

/***/ }),

/***/ "./src/viewHelpers.js":
/*!****************************!*\
  !*** ./src/viewHelpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTaskItemId: () => (/* binding */ generateTaskItemId),
/* harmony export */   getCategories: () => (/* binding */ getCategories),
/* harmony export */   getDivTitle: () => (/* binding */ getDivTitle),
/* harmony export */   orderByDate: () => (/* binding */ orderByDate),
/* harmony export */   sameDay: () => (/* binding */ sameDay)
/* harmony export */ });
function orderByDate(objectsWithDate) {
  return objectsWithDate.sort( function(a, b) {
    if (a.getDateAsDate() && b.getDateAsDate()) {
      if (a.getDateAsDate() > b.getDateAsDate()) {
        return 1;
      }
      else if (a.getDateAsDate() < b.getDateAsDate()) {
        return -1;
      }
      else {
        return 0;
      }
    }
    else if (a.getDateAsDate()) {
      return -1;
    }
    else if (b.getDateAsDate()) {
      return 1;
    }
    else {
      return 0;
    }
  });
}

function getCategories(arr) {
  const categories = arr.map(elem => elem.getCategory());
  console.log("CATS", [...new Set(categories)].sort());
  return [...new Set(categories)].sort();
}

//right now passing tasks.. but really want to pass dates or nil
function sameDay(one, two) { 
  if (!one && !two){
    return true;
  }
  else if (!one || !two) {
    return false;
  }
  return one.getDate() === two.getDate() && 
    one.getMonth() === two.getMonth() &&
    one.getFullYear() === two.getFullYear();
}

function getDivTitle(date) { 
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (!date) {
    return "Unscheduled";
  }
  else if (sameDay(date, today)) {
    return "Today";
  }
  else if (sameDay(date, tomorrow)) {
    return "Tomorrow";
  }
  else {
    return date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  }
}

function generateTaskItemId(id) {
  return `task_${id}`;
}

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _tasksComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksComponent.js */ "./src/tasksComponent.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");






//some dummy data -NEEDS UPDATING
const todos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_3__.Todo)(); 

todos.createProject("Project One", "some description...", "2023-07-20", "13:00", "work");
todos.createProject("Project Two", "some description....", "2023-07-20", "07:00", "work");
todos.createProject("Project Three", "some description...", "2023-09-01", "", "work");

//createTask = (description, projectId, priority, date, time, category)

todos.createTask("a thing that must be done", 1, "high", "2023-07-17", "12:00", "misc");
todos.createTask("another thing to do", 1, "low", "2023-07-17", "", "misc");
todos.createTask("a third thing", 2, "low", "2023-07-18", "", "some other category");

console.log(todos.getProjects());
console.log(todos.getTasks());

(function () {
  //test drawing the nav bar + initial state as tasks component? 
  const navParent = document.querySelector('header');
  (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.navComponent)(todos, navParent);
  const content = document.getElementById('content');
  (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_2__.tasksComponent)(todos, "All", content);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLGtCQUFrQjtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLE9BQU8sWUFBWSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFB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Y3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3NjaGVkdWxhYmxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdWJjb21wb25lbnRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YXNrc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlld0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogcmVzZXQgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5wLCBcbnNlY3Rpb24sXG5hcnRpY2xlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICBcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIGVuZCByZXNldCAqL1xuXG46cm9vdCB7XG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNDQgMjQ0IDI0NSk7XG4gIC0tbmV0dXJhbC0yMDA6IHJnYigyMjggMjI4IDIzMSk7XG4gIC0tbmV1dHJhbC0zMDA6IHJnYigzOSAzOSA0Mik7XG4gIC0tbmV1dHJhbC00MDA6IHJnYigyNCAyNCAyNyk7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLTEwMCk7XG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTMwMCk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuaDEsIGgyLCBoMyB7XG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTQwMCk7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAzcmVtIDEwdnc7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGdhcDogMXJlbTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV0dXJhbC0yMDApO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDA7XG59XG5cbi5uYXYgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5uYXYgLnByb2plY3QtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5pdGVtLCAuaXRlbSBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uaXRlbSAubGFiZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtIC5wcm9qZWN0LXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi50YXNrLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4udGFzay1ncm91cCBoMiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuLm5ldy1idXR0b25zLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7O1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5kYXRldGltZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNjAlLCA4MDBweCk7IC8qIG5lZWQgdG8gYWRqdXN0IGJjIGN1cnJlbnRseSBvdmVyZmxvd3MgKi9cbiAgcGFkZGluZzogMC41cmVtIDA7XG59XG5cbi5mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uZm9ybSBidXR0b24ge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sYWJlbC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbnNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi53YXJuaW5nIHtcbiAgXG4gIGNvbG9yOiBzYWxtb247XG59XG5cbi5idXR0b24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLFVBQVU7QUFDVjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7O0VBT0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtHQUNDLHFCQUFxQjtFQUN0Qjs7RUFFQTs7O0lBR0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0VBQ2xDO0FBQ0Y7QUFDQSxjQUFjOztBQUVkO0VBQ0UsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCwrQkFBK0IsRUFBRSwwQ0FBMEM7RUFDM0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiByZXNldCAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxucCwgXFxuc2VjdGlvbixcXG5hcnRpY2xlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG4gIFxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi8qIGVuZCByZXNldCAqL1xcblxcbjpyb290IHtcXG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNDQgMjQ0IDI0NSk7XFxuICAtLW5ldHVyYWwtMjAwOiByZ2IoMjI4IDIyOCAyMzEpO1xcbiAgLS1uZXV0cmFsLTMwMDogcmdiKDM5IDM5IDQyKTtcXG4gIC0tbmV1dHJhbC00MDA6IHJnYigyNCAyNCAyNyk7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLTEwMCk7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC0zMDApO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC00MDApO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDNyZW0gMTB2dztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXR1cmFsLTIwMCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAwO1xcbn1cXG5cXG4ubmF2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm5hdiAucHJvamVjdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLml0ZW0sIC5pdGVtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5pdGVtIC5sYWJlbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0gLnByb2plY3QtdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4udGFzay1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2stZ3JvdXAgaDIge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTs7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmRhdGV0aW1lLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA2MCUsIDgwMHB4KTsgLyogbmVlZCB0byBhZGp1c3QgYmMgY3VycmVudGx5IG92ZXJmbG93cyAqL1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi5mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5sYWJlbC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi53YXJuaW5nIHtcXG4gIFxcbiAgY29sb3I6IHNhbG1vbjtcXG59XFxuXFxuLmJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9qZWN0Q29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyB0YXNrc0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tzQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyBuYXZDb21wb25lbnQgfSBmcm9tIFwiLi9uYXYuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHByb2plY3QgPSBudWxsKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21wb25lbnQuaWQgPSBcImZvcm1cIjtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcblxuICBjb25zdCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChwcm9qZWN0LCBcInRpdGxlXCIsIFwidGV4dFwiLCBcIlRpdGxlOiAqXCIsIFwiUHJvamVjdCBtdXN0IGhhdmUgYSB0aXRsZS5cIik7XG4gIGYuYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG5cbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHByb2plY3QsIFwiY2F0ZWdvcnlcIiwgXCJ0ZXh0XCIsIFwiQ2F0ZWdvcnk6XCIsIFwiXCIpXG4gIGYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlGaWVsZCk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQocHJvamVjdCwgXCJkYXRlXCIsIFwiZGF0ZVwiLCBcIkRlYWRsaW5lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xuXG4gIGNvbnN0IHRpbWVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHByb2plY3QsIFwidGltZVwiLCBcInRpbWVcIiwgXCJUaW1lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZCh0aW1lRmllbGQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlVGV4dGFyZWEocHJvamVjdCwgXCJkZXNjcmlwdGlvblwiLCBcIkRlc2NyaXB0aW9uOlwiKTtcbiAgZi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXRCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gIGYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWRpdicpO1xuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7IC8vd2lsbCBtYWtlIHRoaXMgc21hbGxcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdG9kb3MuZGVsZXRlUHJvamVjdChwcm9qZWN0LmdldElkKCkpO1xuICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIFwiQWxsXCIsIHBhcmVudCk7IC8vd2FudCB0byBnbyB0byBcImhvbWVcIiArIGFsc28gbmVlZCB0byByZWRyYXcgbmF2IVxuICAgICAgbmF2Q29tcG9uZW50KHRvZG9zLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSk7XG4gICAgfSk7XG4gIH1cblxuICBmLmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChmKTtcbiAgbm9kZVRvUmVwbGFjZS5yZXBsYWNlV2l0aChjb21wb25lbnQpO1xuXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdmFsaWRhdGVzID0gdmFsaWRhdGVJbnB1dChbdGl0bGVGaWVsZF0pO1xuICAgIGlmICghdmFsaWRhdGVzKSByZXR1cm47IFxuXG4gICAgY29uc29sZS5sb2coXCJ0aXRsZSB2YWx1ZTpcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlKTtcblxuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICB0b2Rvcy51cGRhdGVQcm9qZWN0KFxuICAgICAgICBwcm9qZWN0LmdldElkKCksIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIFxuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdC5nZXRJZCgpLCBwYXJlbnQpO1xuICAgIH1cbiAgICBlbHNlIHsgXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB0b2Rvcy5jcmVhdGVQcm9qZWN0KFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3RJZCwgcGFyZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsIGJ1dHRvbiBjbGlja2VkXCIsIG5vZGVUb1JlcGxhY2UpO1xuICAgIGNvbXBvbmVudC5yZXBsYWNlV2l0aChub2RlVG9SZXBsYWNlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBwcm9qZWN0SUQsIHRhc2sgPSBudWxsKSB7XG4gIGNvbnNvbGUubG9nKFwiVEFTS1wiLCB0YXNrKTtcbiAgY29uc29sZS5sb2coXCJQUk9KRUNUIElEXCIsIHByb2plY3RJRCk7XG5cbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBvbmVudC5pZCA9IFwiZm9ybVwiO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVTaW1wbGVJbnB1dCh0YXNrLCBcImRlc2NyaXB0aW9uXCIsIFwidGV4dFwiLCBcIlRhc2s6ICpcIiwgXCJNdXN0IGhhdmUgdGFzay5cIik7XG4gIGYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIC8vaWYgeW91IGNhbWUgZnJvbSBhIHByb2plY3QncyBwYWdlLCB3b3VsZCBleHBlY3QgdGhhdCB0aGF0IHByb2plY3QgaXMgdGhlIHByb2plY3QgZm9yIHRoZSB0YXNrLlxuICAvL2luIHRoYXQgY2FzZSwgd291bGQgd2FudCBhIGhpZGRlbiBmaWVsZCB3aXRoIHByb2plY3RpZCB2YWx1ZVxuICBpZiAoIXRhc2sgJiYgIXByb2plY3RJRCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gdG9kb3MuZ2V0UHJvamVjdHMoKTsgXG4gICAgY29uc3QgcHJvamVjdElkRmllbGQgPSBjcmVhdGVQcm9qZWN0U2VsZWN0KHRhc2ssIHByb2plY3RzKTtcbiAgICBmLmFwcGVuZENoaWxkKHByb2plY3RJZEZpZWxkKTtcbiAgfVxuICBlbHNlIGlmICghdGFzayAmJiBwcm9qZWN0SUQpIHtcbiAgICBjb25zdCBwcm9qZWN0SWRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0SWRGaWVsZC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICBwcm9qZWN0SWRGaWVsZC52YWx1ZSA9IHByb2plY3RJRDtcbiAgICBwcm9qZWN0SWRGaWVsZC5pZCA9IFwicHJvamVjdFwiO1xuICAgIGYuYXBwZW5kQ2hpbGQocHJvamVjdElkRmllbGQpO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVQcmlvcml0eVNlbGVjdCh0YXNrLCBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdKTtcbiAgZi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQodGFzaywgXCJkYXRlXCIsIFwiZGF0ZVwiLCBcIkRlYWRsaW5lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xuXG4gIGNvbnN0IHRpbWVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHRhc2ssIFwidGltZVwiLCBcInRpbWVcIiwgXCJUaW1lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZCh0aW1lRmllbGQpO1xuXG4gIGNvbnN0IGNhdGVnb3J5RmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dCh0YXNrLCBcImNhdGVnb3J5XCIsIFwidGV4dFwiLCBcIkNhdGVnb3J5OlwiKTtcbiAgZi5hcHBlbmRDaGlsZChjYXRlZ29yeUZpZWxkKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b24tZGl2Jyk7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gIGlmICh0YXNrKSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codG9kb3MuZ2V0VGFza3MoKSk7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2sgaWQgdG8gZGVsZXRlXCIsIHRhc2suZ2V0SWQoKSk7XG5cbiAgICAgIHRvZG9zLmRlbGV0ZVRhc2sodGFzay5nZXRJZCgpKTtcblxuICAgICAgY29uc29sZS5sb2codG9kb3MuZ2V0VGFza3MoKSk7XG5cbiAgICAgIGlmICh0YXNrU3Vic2V0KSB7XG4gICAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCB0YXNrU3Vic2V0LCBwYXJlbnQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3RJRCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKGYpO1xuICBub2RlVG9SZXBsYWNlLnJlcGxhY2VXaXRoKGNvbXBvbmVudCk7XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZUlucHV0KFtkZXNjcmlwdGlvbl0pO1xuICAgIGlmICghdmFsaWRhdGVzKSByZXR1cm47IFxuXG4gICAgY29uc3QgY2F0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgY2F0ID0gY2F0SW5wdXQgPT09IFwiXCIgPyBcInVuY2F0ZWdvcml6ZWRcIiA6IGNhdElucHV0O1xuICAgIGNvbnNvbGUubG9nKFwiY2F0XCIsIGNhdCk7XG5cbiAgICBpZiAodGFzaykge1xuICAgICAgdG9kb3MudXBkYXRlVGFzayhcbiAgICAgICAgdGFzay5nZXRJZCgpLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsIFxuICAgICAgICBjYXQudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIFxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRvZG9zLmNyZWF0ZVRhc2soXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLCBcbiAgICAgICAgcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS52YWx1ZSwgXG4gICAgICAgIGNhdC50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBub1Rhc2tNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vLXRhc2stbWVzc2FnZScpO1xuICAgICAgaWYgKG5vVGFza01lc3NhZ2UpIHtcbiAgICAgICAgbm9UYXNrTWVzc2FnZS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcG9uZW50LnJlcGxhY2VXaXRoKG5vZGVUb1JlcGxhY2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2ltcGxlSW5wdXQoZWxlbSwgaWQsIHR5cGUsIGxhYmVsVGV4dCwgd2FybmluZykge1xuICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZCcpO1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZmllbGQudHlwZSA9IHR5cGU7XG4gIGZpZWxkLmlkID0gaWQ7XG5cbiAgaWYgKGVsZW0pIHtcbiAgICBjb25zb2xlLmxvZyhgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWApO1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCB2YWx1ZTogXCIsIGZpZWxkLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGxhYmVsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGFiZWwtd3JhcHBlcicpO1xuXG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICBmaWVsZExhYmVsLmh0bWxGb3IgPSBpZDtcblxuICBjb25zdCBub3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGljZS50ZXh0Q29udGVudCA9IHdhcm5pbmc7XG4gIG5vdGljZS5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG5cbiAgbGFiZWxXcmFwcGVyLmFwcGVuZENoaWxkKGZpZWxkTGFiZWwpO1xuICBsYWJlbFdyYXBwZXIuYXBwZW5kQ2hpbGQobm90aWNlKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQobGFiZWxXcmFwcGVyKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gIHJldHVybiBmaWVsZERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlbGVjdCh0YXNrLCBvcHRpb25zKSB7XG4gIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkJyk7XG5cbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgZmllbGQuaWQgPSBcInByb2plY3RcIjtcblxuICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDpcIjtcbiAgZmllbGRMYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0XCI7XG5cbiAgY29uc3Qgbm9uZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBub25lT3B0aW9uLnZhbHVlID0gMDtcbiAgbm9uZU9wdGlvbi50ZXh0Q29udGVudCA9IFwiTm9uZVwiO1xuICBpZiAoIXRhc2spIHtcbiAgICBub25lT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuICBmaWVsZC5hcHBlbmRDaGlsZChub25lT3B0aW9uKTtcblxuICBmb3IgKGNvbnN0IG9wdCBvZiBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgc2VsZWN0T3B0aW9uLnZhbHVlID0gb3B0LmdldElkKCk7XG4gICAgc2VsZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb3B0LmdldFRpdGxlKCk7XG4gICAgaWYgKHRhc2sgJiYgdGFzay5nZXRQcm9qZWN0SWQoKSA9PT0gb3B0LmdldElkKCkpIHtcbiAgICAgIHNlbGVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGZpZWxkLmFwcGVuZENoaWxkKHNlbGVjdE9wdGlvbik7XG4gIH1cblxuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZExhYmVsKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gIHJldHVybiBmaWVsZERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlTZWxlY3QodGFzaywgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZCcpO1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGZpZWxkLmlkID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgZmllbGRMYWJlbC5odG1sRm9yID0gXCJwcmlvcml0eVwiO1xuXG4gIGZvciAoY29uc3Qgb3B0IG9mIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzZWxlY3RPcHRpb24udmFsdWUgPSBvcHQ7XG4gICAgc2VsZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb3B0O1xuICAgIGlmICh0YXNrICYmIG9wdCA9PT0gdGFzay5nZXRQcmlvcml0eSgpKSB7XG4gICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBmaWVsZC5hcHBlbmRDaGlsZChzZWxlY3RPcHRpb24pO1xuICB9XG5cbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGRMYWJlbCk7XG4gIGZpZWxkRGl2LmFwcGVuZENoaWxkKGZpZWxkKTtcblxuICByZXR1cm4gZmllbGREaXY7ICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dGFyZWEoZWxlbSwgaWQsIGxhYmVsVGV4dCkge1xuICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZCcpO1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZmllbGQuaWQgPSBpZDtcblxuICBpZiAoZWxlbSkge1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCB2YWx1ZTogXCIsIGZpZWxkLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICBmaWVsZExhYmVsLmh0bWxGb3IgPSBpZDtcblxuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZExhYmVsKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gIHJldHVybiBmaWVsZERpdjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dChmaWVsZHMpIHtcbiAgbGV0IGdvb2QgPSB0cnVlO1xuICBmb3IgKGNvbnN0IGYgb2YgZmllbGRzKSB7XG4gICAgY29uc3QgaW5wdXQgPSBmLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgY29uc3Qgd2FybmluZyA9IGYucXVlcnlTZWxlY3Rvcignd2FybmluZycpO1xuICAgICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICBnb29kID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBnb29kO1xufSIsImltcG9ydCB7IG9yZGVyQnlEYXRlLCBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IHRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3NDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IHByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9qZWN0Q29tcG9uZW50LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZDb21wb25lbnQodG9kb3MsIHBhcmVudCkge1xuICAvL2RyYXdzIGJ1dHRvbnMgdG8gdGFzayB2aWV3czogdG9kYXksIHVwY29taW5nLCBhbnl0aW1lLCBjb21wbGV0ZVxuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiXG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRhc2tzVGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tzVGl0bGUpO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBbJ0FsbCcsICdUb2RheScsICdVcGNvbWluZycsICdDb21wbGV0ZWQnXTtcblxuICBmb3IgKGNvbnN0IGIgb2YgYnV0dG9ucykge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGI7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfVxuXG4gIGFkZFRhc2tMaXN0ZW5lcih0YXNrc0RpdiwgdG9kb3MpO1xuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xuXG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RzRGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qZWN0c0RpdlRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0RpdlRpdGxlKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IHRvZG9zLmdldFByb2plY3RzKCk7XG5cbiAgZm9yIChjb25zdCBjYXQgb2YgZ2V0Q2F0ZWdvcmllcyhwcm9qZWN0cykpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpdicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyAvL2gxIGFuZCBoMiB3aWxsIGJlIGluIHRoZSBtYWluIGNvbnRlbnQgcGFydFxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY2F0O1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3Qgc29ydGVkUHJvamVjdHMgPSBvcmRlckJ5RGF0ZShwcm9qZWN0cy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldENhdGVnb3J5KCkgPT09IGNhdCkpO1xuXG4gICAgZm9yIChjb25zdCBwIG9mIHNvcnRlZFByb2plY3RzKSB7IC8vVEhJUyBXSUxMIFBST0JBQkxZIENIQU5HRVxuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gICAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHAuZ2V0VGl0bGUoKTtcbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgICAgcHJvamVjdEl0ZW0uZGF0YXNldC5pZCA9IGAke3AuZ2V0SWQoKX1gO1xuICAgIH1cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfVxuXG4gIGFkZFByb2plY3RMaXN0ZW5lcihwcm9qZWN0c0RpdiwgdG9kb3MpO1xuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gIC8vZHJhd3MgZWFjaCBjYXRlZ29yeSBvZiBwcm9qZWN0LCB3aXRoIHByb2plY3RzIGZyb20gdGhhdCBjYXRlZ29yeSBsaXN0ZWQgKGluIG9yZGVyIG9mIGRhdGUpXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrTGlzdGVuZXIoYnV0dG9uRGl2LCB0b2Rvcykge1xuICBidXR0b25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgZS50YXJnZXQudGV4dENvbnRlbnQsIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICBcbiAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaWQpLCBjb250ZW50KTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IFNjaGVkdWxhYmxlIH0gZnJvbSBcIi4vc2NoZWR1bGFibGUuanNcIjtcblxuZXhwb3J0IGNvbnN0IFByb2plY3QgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpID0+IHtcbiAgY29uc3Qgc2NoZWR1bGFibGUgPSBTY2hlZHVsYWJsZShkYXRlLCB0aW1lKTtcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldENhdGVnb3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yeTtcbiAgfTtcblxuICBjb25zdCBzZXRDYXRlZ29yeSA9IChuZXdDYXRlZ29yeSkgPT4ge1xuICAgIGNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zY2hlZHVsYWJsZSxcbiAgICBnZXRJZCxcbiAgICBnZXRUaXRsZSxcbiAgICBzZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBnZXRDYXRlZ29yeSxcbiAgICBzZXRDYXRlZ29yeVxuICB9O1xufTsiLCJpbXBvcnQgeyBvcmRlckJ5RGF0ZSwgZ2V0Q2F0ZWdvcmllcywgZ2VuZXJhdGVUYXNrSXRlbUlkIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tHcm91cCwgY3JlYXRlVGFza0l0ZW0sIGFkZE5ld0Zvcm1CdG5zIH0gZnJvbSBcIi4vc3ViY29tcG9uZW50cy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdEZvcm1Db21wb25lbnQsIHRhc2tGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElkLCBwYXJlbnQpIHtcbiAgcGFyZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBvbmVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZ2V0VGl0bGUoKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpLmRhdGVGb3JtYXR0ZWQoKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGRhdGVEaXNwbGF5KTtcblxuICBjb25zdCBwcm9qZWN0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0RWRpdC5pZCA9IFwiZWRpdC1wcm9qZWN0XCI7XG4gIHByb2plY3RFZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXQpO1xuXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGQgPSB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpLmdldERlc2NyaXB0aW9uKCk7XG4gIGlmIChkICE9PSBcIlwiKSB7XG4gICAgY29uc3QgZGVzY3JpcHREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0RGlzcGxheS50ZXh0Q29udGVudCA9IGQ7XG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0RGlzcGxheSk7XG4gIH1cblxuICBjb25zdCBuZXdGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vd2hlcmUgbmV3IGZvcm0gd2lsbCBnbyBvbiBwYWdlIGlmIGJ1dHRvbiBpcyBwcmVzc2VkXG4gIG5ld0Zvcm1EaXYuaWQgPSBcImZvcm1cIjtcbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKG5ld0Zvcm1EaXYpOyBcblxuICBhZGROZXdGb3JtQnRucyhwYXJlbnQpO1xuXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICBjb25zdCB0YXNrcyA9IHRvZG9zLmdldFRhc2tzQnlQcm9qZWN0SWQocHJvamVjdElkKTsgLy90aGlzIGlzIGJvdGggY29tcGxldGVkIGFuZCBub3RcblxuICBmb3IgKGNvbnN0IGNhdCBvZiBnZXRDYXRlZ29yaWVzKHRhc2tzKSkgeyBcbiAgICAvL2NyZWF0ZSB0YXNrIGdyb3VwIFxuICAgIGNvbnN0IGdyb3VwID0gY3JlYXRlVGFza0dyb3VwKGNhdCk7XG4gICAgLy9ub3cgbGlzdCB0aGUgdGFza3MgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICBjb25zdCBzb3J0ZWRUYXNrcyA9IG9yZGVyQnlEYXRlKHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0Q2F0ZWdvcnkoKSA9PT0gY2F0KSk7XG5cbiAgICBmb3IgKGNvbnN0IHQgb2Ygc29ydGVkVGFza3MpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVUYXNrSXRlbSh0b2RvcywgdCwgdHJ1ZSk7XG4gICAgICBncm91cC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChncm91cCk7XG4gIH1cbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcblxuICBhZGRCdXR0b25MaXN0ZW5lcnMocGFyZW50LCB0b2RvcywgcHJvamVjdElkKTtcbn1cblxuZnVuY3Rpb24gYWRkQnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHByb2plY3RJZCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKTtcbiAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5cbiAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgZm9ybURpdiwgdG9kb3MpO1xuICB9KTtcblxuICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db21wb25lbnQocGFyZW50LCBmb3JtRGl2LCB0b2RvcywgbnVsbCwgcHJvamVjdElkKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0Jyk7XG4gIHByb2plY3RFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm1Db21wb25lbnQocGFyZW50LCBmb3JtRGl2LCB0b2RvcywgdG9kb3MuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtYnV0dG9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdEJ0bnMubGVuZ3RoOyBpICsrKXtcbiAgICBlZGl0QnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZW5lcmF0ZVRhc2tJdGVtSWQoZS50YXJnZXQuZGF0YXNldC50YXNrSWQpKTtcbiAgICAgIGNvbnN0IHRhc2sgPSB0b2Rvcy5nZXRUYXNrQnlJZChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnRhc2tJZCkpO1xuICAgICAgdGFza0Zvcm1Db21wb25lbnQocGFyZW50LCB0YXNrRGl2LCB0b2RvcywgbnVsbCwgcHJvamVjdElkLCB0YXNrKTtcbiAgICB9KTtcbiAgfVxufVxuXG4iLCJleHBvcnQgY29uc3QgU2NoZWR1bGFibGUgPSAoZGF0ZSwgdGltZSkgPT4ge1xuICBjb25zdCBnZXREYXRlQXNEYXRlID0gKCkgPT4ge1xuICAgIGlmIChkYXRlID09PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gdGltZSA9PT0gXCJcIiA/IFwiVDIzOjU5OjU5XCIgOiBcIlRcIiArIHRpbWUgKyBcIjowMFwiO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlICsgdGltZVN0cmluZyk7XG4gIH07XG5cbiAgY29uc3QgZGF0ZUZvcm1hdHRlZCA9ICgpID0+IHtcbiAgICBpZiAoZGF0ZSA9PT0gXCJcIikgcmV0dXJuIGRhdGU7XG4gICAgY29uc3QgbW9udGggPSBkYXRlWzVdID09PSBcIjBcIiA/IGRhdGUuc2xpY2UoNiwgNykgOiBkYXRlLnNsaWNlKDUsIDcpO1xuICAgIGNvbnN0IGRheSA9IGRhdGVbOF0gPT09IFwiMFwiID8gZGF0ZS5zbGljZSg5KSA6IGRhdGUuc2xpY2UoOCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuc2xpY2UoMCwgNCk7XG5cbiAgICByZXR1cm4gbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcjtcbiAgfTtcblxuICBjb25zdCB0aW1lRm9ybWF0dGVkID0gKCkgPT4ge1xuICAgIGlmICh0aW1lID09PSBcIlwiKSByZXR1cm4gdGltZTtcbiAgICBsZXQgaG91ciA9IHBhcnNlSW50KHRpbWUuc2xpY2UoMCwgMikpO1xuICAgIGNvbnN0IG1pbiA9IHRpbWUuc2xpY2UoMik7XG4gICAgY29uc3QgbSA9IGhvdXIgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgaG91ciA9IGhvdXIgPiAxMiA/IGhvdXIgLSAxMiA6IGhvdXI7XG4gICAgcmV0dXJuIGAke2hvdXJ9JHttaW59ICR7bX1gO1xuICB9O1xuXG4gIC8vYWxzbyBuZWVkIHNldCBkYXRlLCB0aW1lIGZvciBlZGl0aW5nXG5cbiAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgZGF0ZSA9IG5ld0RhdGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGltZSA9IChuZXdUaW1lKSA9PiB7XG4gICAgdGltZSA9IG5ld1RpbWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGltZTtcbiAgfVxuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldERhdGVBc0RhdGUsXG4gICAgZGF0ZUZvcm1hdHRlZCxcbiAgICB0aW1lRm9ybWF0dGVkLFxuICAgIHNldERhdGUsXG4gICAgc2V0VGltZSxcbiAgICBnZXRUaW1lLFxuICAgIGdldERhdGVcbiAgfTtcbn0iLCJpbXBvcnQgeyBnZW5lcmF0ZVRhc2tJdGVtSWQgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0dyb3VwKGdyb3VwVGl0bGUpIHtcbiAgY29uc3QgZ3JvdXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGdyb3VwVGl0bGU7XG4gIGdyb3VwRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZ3JvdXBEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1ncm91cCcpO1xuXG4gIHJldHVybiBncm91cERpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKHRvZG9zLCB0YXNrLCBpbmNsdWRlRGF0ZSA9IGZhbHNlKSB7XG4gIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIGl0ZW1EaXYuaWQgPSBnZW5lcmF0ZVRhc2tJdGVtSWQodGFzay5nZXRJZCgpKTtcblxuICBjb25zdCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnOyBcblxuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICBjaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgdGFzay51cGRhdGVTdGF0dXMoKTtcblxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImEgY2hlY2sgYm94IHdhcyBjaGVja2VkXCIpO1xuICAgICAgLy93YW50IHRvIGZhZGUgb3V0Li4uPyBvbmx5IGlmIG5vdCBzaG93aW5nIGNvbXBsZXRlZCB0YXNrcy4uLndoaWNoIHdvdWxkIHJlcXVpcmUgYSBib29sLi4uXG4gICAgfVxuICB9KTtcblxuICBsYmwuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gIGNvbnN0IGxhYmVsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbGFiZWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJsYWJlbC1jb250ZW50XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgbGFiZWxDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBpZiAodGFzay5nZXRQcm9qZWN0SWQoKSA+IDApIHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdG9kb3MuZ2V0UHJvamVjdEJ5SWQodGFzay5nZXRQcm9qZWN0SWQoKSkuZ2V0VGl0bGUoKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgIGxhYmVsQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICB9XG5cbiAgbGJsLmFwcGVuZENoaWxkKGxhYmVsQ29udGVudCk7XG5cbiAgaXRlbURpdi5hcHBlbmRDaGlsZChsYmwpO1xuXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGltZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZXRpbWUtZGlzcGxheVwiKTtcblxuICBpZiAoaW5jbHVkZURhdGUpIHtcbiAgICBjb25zdCBkYXRlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkYXRlQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2suZGF0ZUZvcm1hdHRlZCgpO1xuICAgIHRpbWUuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRlbnQpO1xuICB9XG5cbiAgY29uc3QgdGltZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRpbWVDb250ZW50LnRleHRDb250ZW50ID0gdGFzay50aW1lRm9ybWF0dGVkKCk7IFxuICB0aW1lLmFwcGVuZENoaWxkKHRpbWVDb250ZW50KTtcblxuICBpdGVtRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gIC8vaGVyZSB3YW50IHRvIGFkZCB0aGUgaW5mbyBpY29uIGluIGEgYnV0dG9uIHRvIGVkaXRcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ1dHRvblwiKTtcbiAgZWRpdC5kYXRhc2V0LnRhc2tJZCA9IGAke3Rhc2suZ2V0SWQoKX1gOyAvL3RvIGJlIHVzZWQgaW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB1cGRhdGVzIHRhc2tcblxuICBlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7IC8vZm9yIG5vdywgd2lsbCB1cGRhdGUgd2l0aCBpY29uXG4gIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgaWYgKHRhc2suZ2V0UHJpb3JpdHkoKSA9PT0gJ2hpZ2gnKSB7XG4gICAgY29uc3QgcHJpb3J0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy9jaGFuZ2UgdG8gaWNvbj9cbiAgICBwcmlvcnR5LnRleHRDb250ZW50ID0gXCIhXCI7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChwcmlvcnR5KTtcbiAgfVxuXG4gIHJldHVybiBpdGVtRGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Rm9ybUJ0bnMocGFyZW50KSB7XG4gIGNvbnN0IG5ld0Zvcm1CdG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0Zvcm1CdG5zRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy1idXR0b25zLWRpdicpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gIG5ld1Byb2plY3QuaWQgPSBcIm5ldy1wcm9qZWN0XCI7XG5cbiAgbmV3Rm9ybUJ0bnNEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUYXNrLnRleHRDb250ZW50ID0gXCJOZXcgVGFza1wiO1xuICBuZXdUYXNrLmlkID0gXCJuZXctdGFza1wiOyBcbiAgXG4gIG5ld0Zvcm1CdG5zRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChuZXdGb3JtQnRuc0Rpdik7XG59IiwiaW1wb3J0IHsgU2NoZWR1bGFibGUgfSBmcm9tIFwiLi9zY2hlZHVsYWJsZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgVGFzayA9IChpZCwgZGVzY3JpcHRpb24sIHByb2plY3RJZCwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5ID0gXCJtaXNjXCIpID0+IHtcbiAgY29uc3Qgc2NoZWR1bGFibGUgPSBTY2hlZHVsYWJsZShkYXRlLCB0aW1lKTtcblxuICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfTtcblxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSAobmV3Q2F0ZWdvcnkpID0+IHtcbiAgICBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnNjaGVkdWxhYmxlLFxuICAgIGdldElkLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIGdldFByb2plY3RJZCxcbiAgICBnZXRDYXRlZ29yeSxcbiAgICBzZXRDYXRlZ29yeSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBjb21wbGV0ZSxcbiAgICB1cGRhdGVTdGF0dXNcbiAgfTtcbn07IiwiaW1wb3J0IHsgb3JkZXJCeURhdGUsIHNhbWVEYXksIGdldERpdlRpdGxlLCBnZW5lcmF0ZVRhc2tJdGVtSWQgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0dyb3VwLCBjcmVhdGVUYXNrSXRlbSwgYWRkTmV3Rm9ybUJ0bnMgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0Rm9ybUNvbXBvbmVudCwgdGFza0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCkge1xuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IHRhc2tzID0gdG9kb3NbYGdldCR7dGFza1N1YnNldH1UYXNrc2BdKCk7XG5cbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdjb21wb25lbnQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1N1YnNldCA9PT0gXCJUb2RheVwiID8gXCJUYXNrc1wiIDogdGFza1N1YnNldDtcblxuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IG5ld0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy93aGVyZSBuZXcgZm9ybSB3aWxsIGdvIG9uIHBhZ2UgaWYgYnV0dG9uIGlzIHByZXNzZWRcbiAgbmV3Rm9ybURpdi5pZCA9IFwiZm9ybVwiO1xuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobmV3Rm9ybURpdik7IFxuXG4gIGFkZE5ld0Zvcm1CdG5zKHBhcmVudCk7XG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS5pZCA9XCJuby10YXNrcy1tZXNzYWdlXCI7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTm8gdGFza3NcIjtcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc29ydGVkVGFza3MgPSBvcmRlckJ5RGF0ZSh0YXNrcyk7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgbGV0IGN1cnJEYXRlID0gc29ydGVkVGFza3NbMF0uZ2V0RGF0ZUFzRGF0ZSgpO1xuICBsZXQgY3VyckRpdiA9IGNyZWF0ZVRhc2tHcm91cChnZXREaXZUaXRsZShjdXJyRGF0ZSkpO1xuXG4gIGZvciAoY29uc3QgdCBvZiBzb3J0ZWRUYXNrcykge1xuICAgIGNvbnNvbGUubG9nKFwidGFzayBpczpcIiwgdCwgdC5nZXREZXNjcmlwdGlvbigpKTtcbiAgICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZVRhc2tJdGVtKHRvZG9zLCB0KTsgXG5cbiAgICBpZiAoc2FtZURheSh0LmdldERhdGVBc0RhdGUoKSwgY3VyckRhdGUpKSB7XG4gICAgICAvL2FwcGVuZCB0byB0aGUgY3VycmVudCBkaXZcbiAgICAgIGN1cnJEaXYuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vZG9uZSB3aXRoIHRoYXQgZ3JvdXBcbiAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGN1cnJEaXYpO1xuICAgICAgLy9jcmVhdGUgYSBuZXcgZ3JvdXBcbiAgICAgIGN1cnJEYXRlID0gdC5nZXREYXRlQXNEYXRlKCk7XG4gICAgICBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKGdldERpdlRpdGxlKGN1cnJEYXRlKSk7XG4gICAgICAvL2FuZCB0aGVuIGFwcGVuZCwgdGFza0l0ZW0gdG8gdGhlIG5ldyBncm91cFxuICAgICAgY3VyckRpdi5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgfVxuICB9XG4gIHRhc2tzRGl2LmFwcGVuZENoaWxkKGN1cnJEaXYpOyAvL2FwcGVuZCB3aGF0ZXZlciB0aGUgbGFzdCBvbmUgd2FzXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuXG4gIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCB0YXNrU3Vic2V0KTtcbn1cblxuZnVuY3Rpb24gYWRkQnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHRhc2tTdWJzZXQpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG5cbiAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5vZGVUb1JlcGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MpO1xuICB9KTtcblxuICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG4gICAgdGFza0Zvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2RvcywgdGFza1N1YnNldCwgbnVsbCk7XG4gIH0pO1xuXG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtYnV0dG9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdEJ0bnMubGVuZ3RoOyBpICsrKXtcbiAgICBlZGl0QnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVUb1JlcGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZW5lcmF0ZVRhc2tJdGVtSWQoZS50YXJnZXQuZGF0YXNldC50YXNrSWQpKTtcbiAgICAgIGNvbnN0IHRhc2sgPSB0b2Rvcy5nZXRUYXNrQnlJZChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnRhc2tJZCkpO1xuICAgICAgdGFza0Zvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2RvcywgdGFza1N1YnNldCwgbnVsbCwgdGFzayk7XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IHNhbWVEYXkgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuXG5leHBvcnQgY29uc3QgVG9kbyA9ICgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIGxldCB0YXNrcyA9IFtdO1xuXG4gIGxldCBwcm9qZWN0SWRDb3VudGVyID0gMTtcbiAgbGV0IHRhc2tJZENvdW50ZXIgPSAxO1xuXG4gIGNvbnN0IGdldFByb2plY3RCeUlkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcCA9IHByb2plY3RzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoKSA9PT0gaWQpO1xuICAgIGlmIChwLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHBbMF07XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza0J5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0ID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZCgpID09PSBpZCk7XG4gICAgaWYgKHQubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdFswXTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcInVuY2F0ZWdvcml6ZWRcIikgPT4ge1xuICAgIGNvbnN0IHAgPSBQcm9qZWN0KHByb2plY3RJZENvdW50ZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpO1xuICAgIHByb2plY3RzLnB1c2gocCk7XG4gICAgcHJvamVjdElkQ291bnRlcisrO1xuICAgIHJldHVybiBwLmdldElkKCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9IChkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcInVuY2F0ZWdvcml6ZWRcIikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdGFzayB3aXRoIGlkOiBcIiwgdGFza0lkQ291bnRlcik7XG4gICAgY29uc3QgdCA9IFRhc2sodGFza0lkQ291bnRlciwgZGVzY3JpcHRpb24sIHByb2plY3RJZCwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5KTtcbiAgICB0YXNrcy5wdXNoKHQpO1xuICAgIHRhc2tJZENvdW50ZXIrKztcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKCkgIT09IGlkKTtcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0UHJvamVjdElkKGlkKSAhPT0gaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoaWQpICE9PSBpZClcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHRpbWUsIGNhdGVnb3J5ID0gXCJ1bmNhdGVnb3JpemVkXCIpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQoaWQpO1xuICAgIHByb2plY3Quc2V0VGl0bGUodGl0bGUpO1xuICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuICAgIHByb2plY3Quc2V0RGF0ZShkYXRlKTtcbiAgICBwcm9qZWN0LnNldFRpbWUodGltZSk7XG4gICAgcHJvamVjdC5zZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFzayA9IChpZCwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSA9IFwidW5jYXRlZ29yaXplZFwiKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tCeUlkKGlkKTtcbiAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICB0YXNrLnNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICB0YXNrLnNldERhdGUoZGF0ZSk7XG4gICAgdGFzay5zZXRUaW1lKHRpbWUpO1xuICAgIHRhc2suc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IFxuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZWxlbSA9PiAhZWxlbS5jb21wbGV0ZSgpICYmIHNhbWVEYXkoZWxlbS5nZXREYXRlQXNEYXRlKCksIHRvZGF5KSk7IFxuICB9O1xuXG4gIGNvbnN0IGdldFVwY29taW5nVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpOyAvL3dhbnQgc3RhcnQgb2YgZGF5XG4gICAgdG9kYXkuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IChlbGVtLmdldERhdGVBc0RhdGUoKSAhPT0gbnVsbCAmJiBlbGVtLmdldERhdGVBc0RhdGUoKSA+PSB0b2RheSAmJiAhZWxlbS5jb21wbGV0ZSgpKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+ICFlbGVtLmNvbXBsZXRlKCkpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q29tcGxldGVkVGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uY29tcGxldGUoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3NCeVByb2plY3RJZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldFByb2plY3RJZCgpID09PSBpZCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0QnlJZCxcbiAgICBnZXRUYXNrQnlJZCxcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGNyZWF0ZVRhc2ssXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBkZWxldGVUYXNrLFxuICAgIHVwZGF0ZVByb2plY3QsXG4gICAgdXBkYXRlVGFzayxcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBnZXRUYXNrcyxcbiAgICBnZXRUb2RheVRhc2tzLFxuICAgIGdldEFsbFRhc2tzLFxuICAgIGdldFVwY29taW5nVGFza3MsXG4gICAgZ2V0Q29tcGxldGVkVGFza3MsXG4gICAgZ2V0VGFza3NCeVByb2plY3RJZFxuICB9O1xufSIsImV4cG9ydCBmdW5jdGlvbiBvcmRlckJ5RGF0ZShvYmplY3RzV2l0aERhdGUpIHtcbiAgcmV0dXJuIG9iamVjdHNXaXRoRGF0ZS5zb3J0KCBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpICYmIGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICBpZiAoYS5nZXREYXRlQXNEYXRlKCkgPiBiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpIDwgYi5nZXREYXRlQXNEYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChhLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoYXJyKSB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhcnIubWFwKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpKTtcbiAgY29uc29sZS5sb2coXCJDQVRTXCIsIFsuLi5uZXcgU2V0KGNhdGVnb3JpZXMpXS5zb3J0KCkpO1xuICByZXR1cm4gWy4uLm5ldyBTZXQoY2F0ZWdvcmllcyldLnNvcnQoKTtcbn1cblxuLy9yaWdodCBub3cgcGFzc2luZyB0YXNrcy4uIGJ1dCByZWFsbHkgd2FudCB0byBwYXNzIGRhdGVzIG9yIG5pbFxuZXhwb3J0IGZ1bmN0aW9uIHNhbWVEYXkob25lLCB0d28pIHsgXG4gIGlmICghb25lICYmICF0d28pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKCFvbmUgfHwgIXR3bykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gb25lLmdldERhdGUoKSA9PT0gdHdvLmdldERhdGUoKSAmJiBcbiAgICBvbmUuZ2V0TW9udGgoKSA9PT0gdHdvLmdldE1vbnRoKCkgJiZcbiAgICBvbmUuZ2V0RnVsbFllYXIoKSA9PT0gdHdvLmdldEZ1bGxZZWFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXZUaXRsZShkYXRlKSB7IFxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKTtcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblxuICBpZiAoIWRhdGUpIHtcbiAgICByZXR1cm4gXCJVbnNjaGVkdWxlZFwiO1xuICB9XG4gIGVsc2UgaWYgKHNhbWVEYXkoZGF0ZSwgdG9kYXkpKSB7XG4gICAgcmV0dXJuIFwiVG9kYXlcIjtcbiAgfVxuICBlbHNlIGlmIChzYW1lRGF5KGRhdGUsIHRvbW9ycm93KSkge1xuICAgIHJldHVybiBcIlRvbW9ycm93XCI7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi11cycsIHsgd2Vla2RheTpcImxvbmdcIiwgeWVhcjpcIm51bWVyaWNcIiwgbW9udGg6XCJzaG9ydFwiLCBkYXk6XCJudW1lcmljXCJ9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSXRlbUlkKGlkKSB7XG4gIHJldHVybiBgdGFza18ke2lkfWA7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBuYXZDb21wb25lbnQgfSBmcm9tIFwiLi9uYXYuanNcIjtcbmltcG9ydCB7IHRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3NDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cblxuLy9zb21lIGR1bW15IGRhdGEgLU5FRURTIFVQREFUSU5HXG5jb25zdCB0b2RvcyA9IFRvZG8oKTsgXG5cbnRvZG9zLmNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IE9uZVwiLCBcInNvbWUgZGVzY3JpcHRpb24uLi5cIiwgXCIyMDIzLTA3LTIwXCIsIFwiMTM6MDBcIiwgXCJ3b3JrXCIpO1xudG9kb3MuY3JlYXRlUHJvamVjdChcIlByb2plY3QgVHdvXCIsIFwic29tZSBkZXNjcmlwdGlvbi4uLi5cIiwgXCIyMDIzLTA3LTIwXCIsIFwiMDc6MDBcIiwgXCJ3b3JrXCIpO1xudG9kb3MuY3JlYXRlUHJvamVjdChcIlByb2plY3QgVGhyZWVcIiwgXCJzb21lIGRlc2NyaXB0aW9uLi4uXCIsIFwiMjAyMy0wOS0wMVwiLCBcIlwiLCBcIndvcmtcIik7XG5cbi8vY3JlYXRlVGFzayA9IChkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpXG5cbnRvZG9zLmNyZWF0ZVRhc2soXCJhIHRoaW5nIHRoYXQgbXVzdCBiZSBkb25lXCIsIDEsIFwiaGlnaFwiLCBcIjIwMjMtMDctMTdcIiwgXCIxMjowMFwiLCBcIm1pc2NcIik7XG50b2Rvcy5jcmVhdGVUYXNrKFwiYW5vdGhlciB0aGluZyB0byBkb1wiLCAxLCBcImxvd1wiLCBcIjIwMjMtMDctMTdcIiwgXCJcIiwgXCJtaXNjXCIpO1xudG9kb3MuY3JlYXRlVGFzayhcImEgdGhpcmQgdGhpbmdcIiwgMiwgXCJsb3dcIiwgXCIyMDIzLTA3LTE4XCIsIFwiXCIsIFwic29tZSBvdGhlciBjYXRlZ29yeVwiKTtcblxuY29uc29sZS5sb2codG9kb3MuZ2V0UHJvamVjdHMoKSk7XG5jb25zb2xlLmxvZyh0b2Rvcy5nZXRUYXNrcygpKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgLy90ZXN0IGRyYXdpbmcgdGhlIG5hdiBiYXIgKyBpbml0aWFsIHN0YXRlIGFzIHRhc2tzIGNvbXBvbmVudD8gXG4gIGNvbnN0IG5hdlBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICBuYXZDb21wb25lbnQodG9kb3MsIG5hdlBhcmVudCk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICB0YXNrc0NvbXBvbmVudCh0b2RvcywgXCJBbGxcIiwgY29udGVudCk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==