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
  --neutral-100: rgb(255, 255, 255);
  --netural-200: rgb(240, 240, 240);
  --neutral-300: #264143;
  --accent: #e99f4c;
  --alert: #de5499;

  
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
  border-bottom: 2px solid var(--neutral-300);
}

.new-buttons-div {
  display: flex;
  justify-content: space-between;
  width: 100%;;
}

.new-buttons-div button {
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--accent);
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
  border: 1px solid var(--neutral-300);
  border-radius: 5px;
  padding: 0.5rem;
  font-family: inherit;
  background-color: inherit;
}

.form input:focus, textarea:focus {
  outline: 2px solid var(--alert);
}

input[type="submit"] {
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
}

input[type="submit"]:focus, input[type="submit"]:hover {
  border: 1px solid var(--alert);
  color: var(--alert);
}

input[type=checkbox] {
  accent-color: var(--alert);
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

.form button:hover, .form button:focus {
  color: var(--alert);
}

.label-wrapper {
  display: flex;
  gap: 0.5rem;
}

select {
  margin-left: 0.5rem;
}

.warning {
  
  color: var(--alert);
}

.button-div {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.high {
  color: var(--alert);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,UAAU;AACV;;;EAGE,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE;GACC,qBAAqB;EACtB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;AACA,cAAc;;AAEd;EACE,iCAAiC;EACjC,iCAAiC;EACjC,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;;;AAGlB;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,gCAAgC;EAChC,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,oCAAoC;EACpC,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,+BAA+B,EAAE,0CAA0C;EAC3E,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');\n\n/* reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\np, \nsection,\narticle {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* end reset */\n\n:root {\n  --neutral-100: rgb(255, 255, 255);\n  --netural-200: rgb(240, 240, 240);\n  --neutral-300: #264143;\n  --accent: #e99f4c;\n  --alert: #de5499;\n\n  \n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  background-color: var(--neutral-100);\n  color: var(--neutral-300);\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1;\n}\n\nmain {\n  padding: 3rem 10vw;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  gap: 1rem;\n  background-color: var(--netural-200);\n  height: 100%;\n  border-radius: 30px 0 0 0;\n}\n\n.nav > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.nav .project-div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.nav button {\n  background-color: transparent;\n  border: none;\n  font-size: 0.8rem;\n}\n\n.item {\n  line-height: 1;\n}\n\n.item, .item label {\n  display: flex;\n  align-items: first baseline;\n  gap: 1rem;\n}\n\n.item .label-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item .project-title {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.task-group {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-group h2 {\n  border-bottom: 2px solid var(--neutral-300);\n}\n\n.new-buttons-div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;;\n}\n\n.new-buttons-div button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--accent);\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.datetime-display {\n  display: flex;\n  gap: 0.5rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: clamp(300px, 60%, 800px); /* need to adjust bc currently overflows */\n  padding: 0.5rem 0;\n}\n\n.form input, textarea {\n  width: 100%;\n  border: 1px solid var(--neutral-300);\n  border-radius: 5px;\n  padding: 0.5rem;\n  font-family: inherit;\n  background-color: inherit;\n}\n\n.form input:focus, textarea:focus {\n  outline: 2px solid var(--alert);\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\ninput[type=\"submit\"]:focus, input[type=\"submit\"]:hover {\n  border: 1px solid var(--alert);\n  color: var(--alert);\n}\n\ninput[type=checkbox] {\n  accent-color: var(--alert);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.form button {\n  width: max-content;\n  text-transform: lowercase;\n  border: none;\n  background-color: transparent;\n}\n\n.form button:hover, .form button:focus {\n  color: var(--alert);\n}\n\n.label-wrapper {\n  display: flex;\n  gap: 0.5rem;\n}\n\nselect {\n  margin-left: 0.5rem;\n}\n\n.warning {\n  \n  color: var(--alert);\n}\n\n.button-div {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n\n.high {\n  color: var(--alert);\n}\n"],"sourceRoot":""}]);
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

  itemDiv.classList.add(task.getPriority());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLGtCQUFrQjtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixPQUFPLFlBQVksT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9B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VztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDbUI7QUFDYTtBQUNwQjs7O0FBR2pDO0FBQ0EsY0FBYyw4Q0FBSTs7QUFFbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVk7QUFDZDtBQUNBLEVBQUUsa0VBQWM7QUFDaEIsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zY2hlZHVsYWJsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3ViY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdGFza3NDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXdIZWxwZXJzLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHJlc2V0ICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxucCwgXG5zZWN0aW9uLFxuYXJ0aWNsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmE6bm90KFtjbGFzc10pIHtcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBodG1sOmZvY3VzLXdpdGhpbiB7XG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XG4gIH1cbiAgXG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4vKiBlbmQgcmVzZXQgKi9cblxuOnJvb3Qge1xuICAtLW5ldXRyYWwtMTAwOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tbmV0dXJhbC0yMDA6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgLS1uZXV0cmFsLTMwMDogIzI2NDE0MztcbiAgLS1hY2NlbnQ6ICNlOTlmNGM7XG4gIC0tYWxlcnQ6ICNkZTU0OTk7XG5cbiAgXG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLTEwMCk7XG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTMwMCk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDNyZW0gMTB2dztcbn1cblxuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbiAgZ2FwOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXR1cmFsLTIwMCk7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMDtcbn1cblxuLm5hdiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLm5hdiAucHJvamVjdC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLml0ZW0ge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLml0ZW0sIC5pdGVtIGxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZpcnN0IGJhc2VsaW5lO1xuICBnYXA6IDFyZW07XG59XG5cbi5pdGVtIC5sYWJlbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW0gLnByb2plY3QtdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnRhc2stZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi50YXNrLWdyb3VwIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcbn1cblxuLm5ldy1idXR0b25zLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7O1xufVxuXG4ubmV3LWJ1dHRvbnMtZGl2IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZGF0ZXRpbWUtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogY2xhbXAoMzAwcHgsIDYwJSwgODAwcHgpOyAvKiBuZWVkIHRvIGFkanVzdCBiYyBjdXJyZW50bHkgb3ZlcmZsb3dzICovXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuXG4uZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5mb3JtIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hbGVydCk7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hbGVydCk7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5mb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0gYnV0dG9uOmhvdmVyLCAuZm9ybSBidXR0b246Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG4ubGFiZWwtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG5zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4ud2FybmluZyB7XG4gIFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG4uYnV0dG9uLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGlnaCB7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsVUFBVTtBQUNWOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7RUFPRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0dBQ0MscUJBQXFCO0VBQ3RCOztFQUVBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRjtBQUNBLGNBQWM7O0FBRWQ7RUFDRSxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCOzs7QUFHbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsK0JBQStCLEVBQUUsMENBQTBDO0VBQzNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIHJlc2V0ICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5wLCBcXG5zZWN0aW9uLFxcbmFydGljbGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcbiAgXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLyogZW5kIHJlc2V0ICovXFxuXFxuOnJvb3Qge1xcbiAgLS1uZXV0cmFsLTEwMDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1uZXR1cmFsLTIwMDogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgLS1uZXV0cmFsLTMwMDogIzI2NDE0MztcXG4gIC0tYWNjZW50OiAjZTk5ZjRjO1xcbiAgLS1hbGVydDogI2RlNTQ5OTtcXG5cXG4gIFxcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC0xMDApO1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtMzAwKTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm1haW4ge1xcbiAgcGFkZGluZzogM3JlbSAxMHZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldHVyYWwtMjAwKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDA7XFxufVxcblxcbi5uYXYgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubmF2IC5wcm9qZWN0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5pdGVtIHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uaXRlbSwgLml0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLml0ZW0gLmxhYmVsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbSAucHJvamVjdC10aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50YXNrLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGFzay1ncm91cCBoMiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTs7XFxufVxcblxcbi5uZXctYnV0dG9ucy1kaXYgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kYXRldGltZS1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNjAlLCA4MDBweCk7IC8qIG5lZWQgdG8gYWRqdXN0IGJjIGN1cnJlbnRseSBvdmVyZmxvd3MgKi9cXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4uZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5mb3JtIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMsIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcXG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uOmhvdmVyLCAuZm9ybSBidXR0b246Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLmxhYmVsLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgXFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG4uYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2plY3RDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IHRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3NDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IG5hdkNvbXBvbmVudCB9IGZyb20gXCIuL25hdi5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEZvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2RvcywgcHJvamVjdCA9IG51bGwpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBvbmVudC5pZCA9IFwiZm9ybVwiO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgdGl0bGVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHByb2plY3QsIFwidGl0bGVcIiwgXCJ0ZXh0XCIsIFwiVGl0bGU6ICpcIiwgXCJQcm9qZWN0IG11c3QgaGF2ZSBhIHRpdGxlLlwiKTtcbiAgZi5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcblxuICBjb25zdCBjYXRlZ29yeUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQocHJvamVjdCwgXCJjYXRlZ29yeVwiLCBcInRleHRcIiwgXCJDYXRlZ29yeTpcIiwgXCJcIilcbiAgZi5hcHBlbmRDaGlsZChjYXRlZ29yeUZpZWxkKTtcblxuICBjb25zdCBkYXRlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChwcm9qZWN0LCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiRGVhZGxpbmU6XCIsIFwiXCIpO1xuICBmLmFwcGVuZENoaWxkKGRhdGVGaWVsZCk7XG5cbiAgY29uc3QgdGltZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQocHJvamVjdCwgXCJ0aW1lXCIsIFwidGltZVwiLCBcIlRpbWU6XCIsIFwiXCIpO1xuICBmLmFwcGVuZENoaWxkKHRpbWVGaWVsZCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVUZXh0YXJlYShwcm9qZWN0LCBcImRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb246XCIpO1xuICBmLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b24tZGl2Jyk7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gIGlmIChwcm9qZWN0KSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTsgLy93aWxsIG1ha2UgdGhpcyBzbWFsbFxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2Rvcy5kZWxldGVQcm9qZWN0KHByb2plY3QuZ2V0SWQoKSk7XG4gICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgXCJBbGxcIiwgcGFyZW50KTsgLy93YW50IHRvIGdvIHRvIFwiaG9tZVwiICsgYWxzbyBuZWVkIHRvIHJlZHJhdyBuYXYhXG4gICAgICBuYXZDb21wb25lbnQodG9kb3MsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKGYpO1xuICBub2RlVG9SZXBsYWNlLnJlcGxhY2VXaXRoKGNvbXBvbmVudCk7XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZUlucHV0KFt0aXRsZUZpZWxkXSk7XG4gICAgaWYgKCF2YWxpZGF0ZXMpIHJldHVybjsgXG5cbiAgICBjb25zb2xlLmxvZyhcInRpdGxlIHZhbHVlOlwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUpO1xuXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIHRvZG9zLnVwZGF0ZVByb2plY3QoXG4gICAgICAgIHByb2plY3QuZ2V0SWQoKSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgXG4gICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0LmdldElkKCksIHBhcmVudCk7XG4gICAgfVxuICAgIGVsc2UgeyBcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRvZG9zLmNyZWF0ZVByb2plY3QoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElkLCBwYXJlbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjYW5jZWwgYnV0dG9uIGNsaWNrZWRcIiwgbm9kZVRvUmVwbGFjZSk7XG4gICAgY29tcG9uZW50LnJlcGxhY2VXaXRoKG5vZGVUb1JlcGxhY2UpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHRhc2tTdWJzZXQsIHByb2plY3RJRCwgdGFzayA9IG51bGwpIHtcbiAgY29uc29sZS5sb2coXCJUQVNLXCIsIHRhc2spO1xuICBjb25zb2xlLmxvZyhcIlBST0pFQ1QgSURcIiwgcHJvamVjdElEKTtcblxuICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcG9uZW50LmlkID0gXCJmb3JtXCI7XG4gIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZVNpbXBsZUlucHV0KHRhc2ssIFwiZGVzY3JpcHRpb25cIiwgXCJ0ZXh0XCIsIFwiVGFzazogKlwiLCBcIk11c3QgaGF2ZSB0YXNrLlwiKTtcbiAgZi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgLy9pZiB5b3UgY2FtZSBmcm9tIGEgcHJvamVjdCdzIHBhZ2UsIHdvdWxkIGV4cGVjdCB0aGF0IHRoYXQgcHJvamVjdCBpcyB0aGUgcHJvamVjdCBmb3IgdGhlIHRhc2suXG4gIC8vaW4gdGhhdCBjYXNlLCB3b3VsZCB3YW50IGEgaGlkZGVuIGZpZWxkIHdpdGggcHJvamVjdGlkIHZhbHVlXG4gIGlmICghdGFzayAmJiAhcHJvamVjdElEKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSB0b2Rvcy5nZXRQcm9qZWN0cygpOyBcbiAgICBjb25zdCBwcm9qZWN0SWRGaWVsZCA9IGNyZWF0ZVByb2plY3RTZWxlY3QodGFzaywgcHJvamVjdHMpO1xuICAgIGYuYXBwZW5kQ2hpbGQocHJvamVjdElkRmllbGQpO1xuICB9XG4gIGVsc2UgaWYgKCF0YXNrICYmIHByb2plY3RJRCkge1xuICAgIGNvbnN0IHByb2plY3RJZEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3RJZEZpZWxkLnR5cGUgPSBcImhpZGRlblwiO1xuICAgIHByb2plY3RJZEZpZWxkLnZhbHVlID0gcHJvamVjdElEO1xuICAgIHByb2plY3RJZEZpZWxkLmlkID0gXCJwcm9qZWN0XCI7XG4gICAgZi5hcHBlbmRDaGlsZChwcm9qZWN0SWRGaWVsZCk7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZVByaW9yaXR5U2VsZWN0KHRhc2ssIFtcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl0pO1xuICBmLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICBjb25zdCBkYXRlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dCh0YXNrLCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiRGVhZGxpbmU6XCIsIFwiXCIpO1xuICBmLmFwcGVuZENoaWxkKGRhdGVGaWVsZCk7XG5cbiAgY29uc3QgdGltZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQodGFzaywgXCJ0aW1lXCIsIFwidGltZVwiLCBcIlRpbWU6XCIsIFwiXCIpO1xuICBmLmFwcGVuZENoaWxkKHRpbWVGaWVsZCk7XG5cbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHRhc2ssIFwiY2F0ZWdvcnlcIiwgXCJ0ZXh0XCIsIFwiQ2F0ZWdvcnk6XCIpO1xuICBmLmFwcGVuZENoaWxkKGNhdGVnb3J5RmllbGQpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBmLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1kaXYnKTtcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgaWYgKHRhc2spIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0b2Rvcy5nZXRUYXNrcygpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidGFzayBpZCB0byBkZWxldGVcIiwgdGFzay5nZXRJZCgpKTtcblxuICAgICAgdG9kb3MuZGVsZXRlVGFzayh0YXNrLmdldElkKCkpO1xuXG4gICAgICBjb25zb2xlLmxvZyh0b2Rvcy5nZXRUYXNrcygpKTtcblxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcblxuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZik7XG4gIG5vZGVUb1JlcGxhY2UucmVwbGFjZVdpdGgoY29tcG9uZW50KTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlSW5wdXQoW2Rlc2NyaXB0aW9uXSk7XG4gICAgaWYgKCF2YWxpZGF0ZXMpIHJldHVybjsgXG5cbiAgICBjb25zdCBjYXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjYXQgPSBjYXRJbnB1dCA9PT0gXCJcIiA/IFwidW5jYXRlZ29yaXplZFwiIDogY2F0SW5wdXQ7XG4gICAgY29uc29sZS5sb2coXCJjYXRcIiwgY2F0KTtcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICB0b2Rvcy51cGRhdGVUYXNrKFxuICAgICAgICB0YXNrLmdldElkKCksIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS52YWx1ZSwgXG4gICAgICAgIGNhdC50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgXG4gICAgICBpZiAodGFza1N1YnNldCkge1xuICAgICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SUQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdG9kb3MuY3JlYXRlVGFzayhcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsIFxuICAgICAgICBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWUsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLnZhbHVlLCBcbiAgICAgICAgY2F0LnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5vVGFza01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8tdGFzay1tZXNzYWdlJyk7XG4gICAgICBpZiAobm9UYXNrTWVzc2FnZSkge1xuICAgICAgICBub1Rhc2tNZXNzYWdlLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFza1N1YnNldCkge1xuICAgICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SUQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wb25lbnQucmVwbGFjZVdpdGgobm9kZVRvUmVwbGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVJbnB1dChlbGVtLCBpZCwgdHlwZSwgbGFiZWxUZXh0LCB3YXJuaW5nKSB7XG4gIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkJyk7XG5cbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBmaWVsZC50eXBlID0gdHlwZTtcbiAgZmllbGQuaWQgPSBpZDtcblxuICBpZiAoZWxlbSkge1xuICAgIGNvbnNvbGUubG9nKGBnZXQke2lkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaWQuc2xpY2UoMSl9YCk7XG4gICAgZmllbGQudmFsdWUgPSBlbGVtW2BnZXQke2lkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaWQuc2xpY2UoMSl9YF0oKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIHZhbHVlOiBcIiwgZmllbGQudmFsdWUpO1xuICB9XG5cbiAgY29uc3QgbGFiZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdsYWJlbC13cmFwcGVyJyk7XG5cbiAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIGZpZWxkTGFiZWwuaHRtbEZvciA9IGlkO1xuXG4gIGNvbnN0IG5vdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm90aWNlLnRleHRDb250ZW50ID0gd2FybmluZztcbiAgbm90aWNlLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcblxuICBsYWJlbFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmllbGRMYWJlbCk7XG4gIGxhYmVsV3JhcHBlci5hcHBlbmRDaGlsZChub3RpY2UpO1xuICBmaWVsZERpdi5hcHBlbmRDaGlsZChsYWJlbFdyYXBwZXIpO1xuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZCk7XG5cbiAgcmV0dXJuIGZpZWxkRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0KHRhc2ssIG9wdGlvbnMpIHtcbiAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmllbGREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmllbGQnKTtcblxuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBmaWVsZC5pZCA9IFwicHJvamVjdFwiO1xuXG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0OlwiO1xuICBmaWVsZExhYmVsLmh0bWxGb3IgPSBcInByb2plY3RcIjtcblxuICBjb25zdCBub25lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG5vbmVPcHRpb24udmFsdWUgPSAwO1xuICBub25lT3B0aW9uLnRleHRDb250ZW50ID0gXCJOb25lXCI7XG4gIGlmICghdGFzaykge1xuICAgIG5vbmVPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG4gIGZpZWxkLmFwcGVuZENoaWxkKG5vbmVPcHRpb24pO1xuXG4gIGZvciAoY29uc3Qgb3B0IG9mIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzZWxlY3RPcHRpb24udmFsdWUgPSBvcHQuZ2V0SWQoKTtcbiAgICBzZWxlY3RPcHRpb24udGV4dENvbnRlbnQgPSBvcHQuZ2V0VGl0bGUoKTtcbiAgICBpZiAodGFzayAmJiB0YXNrLmdldFByb2plY3RJZCgpID09PSBvcHQuZ2V0SWQoKSkge1xuICAgICAgc2VsZWN0T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoc2VsZWN0T3B0aW9uKTtcbiAgfVxuXG4gIGZpZWxkRGl2LmFwcGVuZENoaWxkKGZpZWxkTGFiZWwpO1xuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZCk7XG5cbiAgcmV0dXJuIGZpZWxkRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eVNlbGVjdCh0YXNrLCBvcHRpb25zKSB7XG4gIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkJyk7XG5cbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgZmllbGQuaWQgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICBmaWVsZExhYmVsLmh0bWxGb3IgPSBcInByaW9yaXR5XCI7XG5cbiAgZm9yIChjb25zdCBvcHQgb2Ygb3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdE9wdGlvbi52YWx1ZSA9IG9wdDtcbiAgICBzZWxlY3RPcHRpb24udGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgaWYgKHRhc2sgJiYgb3B0ID09PSB0YXNrLmdldFByaW9yaXR5KCkpIHtcbiAgICAgIHNlbGVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGZpZWxkLmFwcGVuZENoaWxkKHNlbGVjdE9wdGlvbik7XG4gIH1cblxuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZExhYmVsKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gIHJldHVybiBmaWVsZERpdjsgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0YXJlYShlbGVtLCBpZCwgbGFiZWxUZXh0KSB7XG4gIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkJyk7XG5cbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBmaWVsZC5pZCA9IGlkO1xuXG4gIGlmIChlbGVtKSB7XG4gICAgZmllbGQudmFsdWUgPSBlbGVtW2BnZXQke2lkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaWQuc2xpY2UoMSl9YF0oKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIHZhbHVlOiBcIiwgZmllbGQudmFsdWUpO1xuICB9XG5cbiAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIGZpZWxkTGFiZWwuaHRtbEZvciA9IGlkO1xuXG4gIGZpZWxkRGl2LmFwcGVuZENoaWxkKGZpZWxkTGFiZWwpO1xuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZCk7XG5cbiAgcmV0dXJuIGZpZWxkRGl2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGZpZWxkcykge1xuICBsZXQgZ29vZCA9IHRydWU7XG4gIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICBjb25zdCBpbnB1dCA9IGYucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBjb25zdCB3YXJuaW5nID0gZi5xdWVyeVNlbGVjdG9yKCd3YXJuaW5nJyk7XG4gICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIGdvb2QgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdvb2Q7XG59IiwiaW1wb3J0IHsgb3JkZXJCeURhdGUsIGdldENhdGVnb3JpZXMgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2plY3RDb21wb25lbnQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdkNvbXBvbmVudCh0b2RvcywgcGFyZW50KSB7XG4gIC8vZHJhd3MgYnV0dG9ucyB0byB0YXNrIHZpZXdzOiB0b2RheSwgdXBjb21pbmcsIGFueXRpbWUsIGNvbXBsZXRlXG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCJcbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGFza3NUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcbiAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza3NUaXRsZSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFsnQWxsJywgJ1RvZGF5JywgJ1VwY29taW5nJywgJ0NvbXBsZXRlZCddO1xuXG4gIGZvciAoY29uc3QgYiBvZiBidXR0b25zKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gYjtcbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICB9XG5cbiAgYWRkVGFza0xpc3RlbmVyKHRhc2tzRGl2LCB0b2Rvcyk7XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG5cbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdHNEaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RzRGl2VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RzRGl2VGl0bGUpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gdG9kb3MuZ2V0UHJvamVjdHMoKTtcblxuICBmb3IgKGNvbnN0IGNhdCBvZiBnZXRDYXRlZ29yaWVzKHByb2plY3RzKSkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7IC8vaDEgYW5kIGgyIHdpbGwgYmUgaW4gdGhlIG1haW4gY29udGVudCBwYXJ0XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXQ7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBzb3J0ZWRQcm9qZWN0cyA9IG9yZGVyQnlEYXRlKHByb2plY3RzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0Q2F0ZWdvcnkoKSA9PT0gY2F0KSk7XG5cbiAgICBmb3IgKGNvbnN0IHAgb2Ygc29ydGVkUHJvamVjdHMpIHsgLy9USElTIFdJTEwgUFJPQkFCTFkgQ0hBTkdFXG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gcC5nZXRUaXRsZSgpO1xuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LmlkID0gYCR7cC5nZXRJZCgpfWA7XG4gICAgfVxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9XG5cbiAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzRGl2LCB0b2Rvcyk7XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbiAgLy9kcmF3cyBlYWNoIGNhdGVnb3J5IG9mIHByb2plY3QsIHdpdGggcHJvamVjdHMgZnJvbSB0aGF0IGNhdGVnb3J5IGxpc3RlZCAoaW4gb3JkZXIgb2YgZGF0ZSlcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBlLnRhcmdldC50ZXh0Q29udGVudCwgY29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdExpc3RlbmVyKGJ1dHRvbkRpdiwgdG9kb3MpIHtcbiAgYnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgIFxuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZCksIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgU2NoZWR1bGFibGUgfSBmcm9tIFwiLi9zY2hlZHVsYWJsZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdCA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuICBjb25zdCBzY2hlZHVsYWJsZSA9IFNjaGVkdWxhYmxlKGRhdGUsIHRpbWUpO1xuXG4gIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IHNldENhdGVnb3J5ID0gKG5ld0NhdGVnb3J5KSA9PiB7XG4gICAgY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnNjaGVkdWxhYmxlLFxuICAgIGdldElkLFxuICAgIGdldFRpdGxlLFxuICAgIHNldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIGdldENhdGVnb3J5LFxuICAgIHNldENhdGVnb3J5XG4gIH07XG59OyIsImltcG9ydCB7IG9yZGVyQnlEYXRlLCBnZXRDYXRlZ29yaWVzLCBnZW5lcmF0ZVRhc2tJdGVtSWQgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0dyb3VwLCBjcmVhdGVUYXNrSXRlbSwgYWRkTmV3Rm9ybUJ0bnMgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0Rm9ybUNvbXBvbmVudCwgdGFza0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SWQsIHBhcmVudCkge1xuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnY29tcG9uZW50Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb3MuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKS5nZXRUaXRsZSgpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZGF0ZUZvcm1hdHRlZCgpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGF0ZURpc3BsYXkpO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RFZGl0LmlkID0gXCJlZGl0LXByb2plY3RcIjtcbiAgcHJvamVjdEVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdCk7XG5cbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgZCA9IHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZ2V0RGVzY3JpcHRpb24oKTtcbiAgaWYgKGQgIT09IFwiXCIpIHtcbiAgICBjb25zdCBkZXNjcmlwdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHREaXNwbGF5LnRleHRDb250ZW50ID0gZDtcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHREaXNwbGF5KTtcbiAgfVxuXG4gIGNvbnN0IG5ld0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy93aGVyZSBuZXcgZm9ybSB3aWxsIGdvIG9uIHBhZ2UgaWYgYnV0dG9uIGlzIHByZXNzZWRcbiAgbmV3Rm9ybURpdi5pZCA9IFwiZm9ybVwiO1xuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobmV3Rm9ybURpdik7IFxuXG4gIGFkZE5ld0Zvcm1CdG5zKHBhcmVudCk7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gIGNvbnN0IHRhc2tzID0gdG9kb3MuZ2V0VGFza3NCeVByb2plY3RJZChwcm9qZWN0SWQpOyAvL3RoaXMgaXMgYm90aCBjb21wbGV0ZWQgYW5kIG5vdFxuXG4gIGZvciAoY29uc3QgY2F0IG9mIGdldENhdGVnb3JpZXModGFza3MpKSB7IFxuICAgIC8vY3JlYXRlIHRhc2sgZ3JvdXAgXG4gICAgY29uc3QgZ3JvdXAgPSBjcmVhdGVUYXNrR3JvdXAoY2F0KTtcbiAgICAvL25vdyBsaXN0IHRoZSB0YXNrcyBmb3IgZWFjaCBjYXRlZ29yeVxuICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gb3JkZXJCeURhdGUodGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpID09PSBjYXQpKTtcblxuICAgIGZvciAoY29uc3QgdCBvZiBzb3J0ZWRUYXNrcykge1xuICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZVRhc2tJdGVtKHRvZG9zLCB0LCB0cnVlKTtcbiAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgfVxuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuXG4gIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCBwcm9qZWN0SWQpO1xufVxuXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMocGFyZW50LCB0b2RvcywgcHJvamVjdElkKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKTtcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcblxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm1Db21wb25lbnQocGFyZW50LCBmb3JtRGl2LCB0b2Rvcyk7XG4gIH0pO1xuXG4gIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zLCBudWxsLCBwcm9qZWN0SWQpO1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKTtcbiAgcHJvamVjdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zLCB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0QnRucy5sZW5ndGg7IGkgKyspe1xuICAgIGVkaXRCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdlbmVyYXRlVGFza0l0ZW1JZChlLnRhcmdldC5kYXRhc2V0LnRhc2tJZCkpO1xuICAgICAgY29uc3QgdGFzayA9IHRvZG9zLmdldFRhc2tCeUlkKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQudGFza0lkKSk7XG4gICAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIHRhc2tEaXYsIHRvZG9zLCBudWxsLCBwcm9qZWN0SWQsIHRhc2spO1xuICAgIH0pO1xuICB9XG59XG5cbiIsImV4cG9ydCBjb25zdCBTY2hlZHVsYWJsZSA9IChkYXRlLCB0aW1lKSA9PiB7XG4gIGNvbnN0IGdldERhdGVBc0RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGUgPT09IFwiXCIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSB0aW1lID09PSBcIlwiID8gXCJUMjM6NTk6NTlcIiA6IFwiVFwiICsgdGltZSArIFwiOjAwXCI7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUgKyB0aW1lU3RyaW5nKTtcbiAgfTtcblxuICBjb25zdCBkYXRlRm9ybWF0dGVkID0gKCkgPT4ge1xuICAgIGlmIChkYXRlID09PSBcIlwiKSByZXR1cm4gZGF0ZTtcbiAgICBjb25zdCBtb250aCA9IGRhdGVbNV0gPT09IFwiMFwiID8gZGF0ZS5zbGljZSg2LCA3KSA6IGRhdGUuc2xpY2UoNSwgNyk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZVs4XSA9PT0gXCIwXCIgPyBkYXRlLnNsaWNlKDkpIDogZGF0ZS5zbGljZSg4KTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5zbGljZSgwLCA0KTtcblxuICAgIHJldHVybiBtb250aCArIFwiL1wiICsgZGF5ICsgXCIvXCIgKyB5ZWFyO1xuICB9O1xuXG4gIGNvbnN0IHRpbWVGb3JtYXR0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRpbWUgPT09IFwiXCIpIHJldHVybiB0aW1lO1xuICAgIGxldCBob3VyID0gcGFyc2VJbnQodGltZS5zbGljZSgwLCAyKSk7XG4gICAgY29uc3QgbWluID0gdGltZS5zbGljZSgyKTtcbiAgICBjb25zdCBtID0gaG91ciA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICBob3VyID0gaG91ciA+IDEyID8gaG91ciAtIDEyIDogaG91cjtcbiAgICByZXR1cm4gYCR7aG91cn0ke21pbn0gJHttfWA7XG4gIH07XG5cbiAgLy9hbHNvIG5lZWQgc2V0IGRhdGUsIHRpbWUgZm9yIGVkaXRpbmdcblxuICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICBkYXRlID0gbmV3RGF0ZTtcbiAgfTtcblxuICBjb25zdCBzZXRUaW1lID0gKG5ld1RpbWUpID0+IHtcbiAgICB0aW1lID0gbmV3VGltZTtcbiAgfTtcblxuICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgIHJldHVybiB0aW1lO1xuICB9XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0RGF0ZUFzRGF0ZSxcbiAgICBkYXRlRm9ybWF0dGVkLFxuICAgIHRpbWVGb3JtYXR0ZWQsXG4gICAgc2V0RGF0ZSxcbiAgICBzZXRUaW1lLFxuICAgIGdldFRpbWUsXG4gICAgZ2V0RGF0ZVxuICB9O1xufSIsImltcG9ydCB7IGdlbmVyYXRlVGFza0l0ZW1JZCB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrR3JvdXAoZ3JvdXBUaXRsZSkge1xuICBjb25zdCBncm91cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gZ3JvdXBUaXRsZTtcbiAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBncm91cERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWdyb3VwJyk7XG5cbiAgcmV0dXJuIGdyb3VwRGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW0odG9kb3MsIHRhc2ssIGluY2x1ZGVEYXRlID0gZmFsc2UpIHtcbiAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgaXRlbURpdi5pZCA9IGdlbmVyYXRlVGFza0l0ZW1JZCh0YXNrLmdldElkKCkpO1xuXG4gIGNvbnN0IGxibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7IFxuXG4gIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICB0YXNrLnVwZGF0ZVN0YXR1cygpO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYSBjaGVjayBib3ggd2FzIGNoZWNrZWRcIik7XG4gICAgICAvL3dhbnQgdG8gZmFkZSBvdXQuLi4/IG9ubHkgaWYgbm90IHNob3dpbmcgY29tcGxldGVkIHRhc2tzLi4ud2hpY2ggd291bGQgcmVxdWlyZSBhIGJvb2wuLi5cbiAgICB9XG4gIH0pO1xuXG4gIGxibC5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgY29uc3QgbGFiZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsYWJlbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImxhYmVsLWNvbnRlbnRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xuICBsYWJlbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGlmICh0YXNrLmdldFByb2plY3RJZCgpID4gMCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0b2Rvcy5nZXRQcm9qZWN0QnlJZCh0YXNrLmdldFByb2plY3RJZCgpKS5nZXRUaXRsZSgpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgbGFiZWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIH1cblxuICBsYmwuYXBwZW5kQ2hpbGQobGFiZWxDb250ZW50KTtcblxuICBpdGVtRGl2LmFwcGVuZENoaWxkKGxibCk7XG5cbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aW1lLmNsYXNzTGlzdC5hZGQoXCJkYXRldGltZS1kaXNwbGF5XCIpO1xuXG4gIGlmIChpbmNsdWRlRGF0ZSkge1xuICAgIGNvbnN0IGRhdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRhdGVDb250ZW50LnRleHRDb250ZW50ID0gdGFzay5kYXRlRm9ybWF0dGVkKCk7XG4gICAgdGltZS5hcHBlbmRDaGlsZChkYXRlQ29udGVudCk7XG4gIH1cblxuICBjb25zdCB0aW1lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGltZUNvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpbWVGb3JtYXR0ZWQoKTsgXG4gIHRpbWUuYXBwZW5kQ2hpbGQodGltZUNvbnRlbnQpO1xuXG4gIGl0ZW1EaXYuYXBwZW5kQ2hpbGQodGltZSk7XG5cbiAgLy9oZXJlIHdhbnQgdG8gYWRkIHRoZSBpbmZvIGljb24gaW4gYSBidXR0b24gdG8gZWRpdFxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uXCIpO1xuICBlZGl0LmRhdGFzZXQudGFza0lkID0gYCR7dGFzay5nZXRJZCgpfWA7IC8vdG8gYmUgdXNlZCBpbiBldmVudCBsaXN0ZW5lciB0aGF0IHVwZGF0ZXMgdGFza1xuXG4gIGVkaXQudGV4dENvbnRlbnQgPSBcImVkaXRcIjsgLy9mb3Igbm93LCB3aWxsIHVwZGF0ZSB3aXRoIGljb25cbiAgaXRlbURpdi5hcHBlbmRDaGlsZChlZGl0KTtcblxuICBpZiAodGFzay5nZXRQcmlvcml0eSgpID09PSAnaGlnaCcpIHtcbiAgICBjb25zdCBwcmlvcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOyAvL2NoYW5nZSB0byBpY29uP1xuICAgIHByaW9ydHkudGV4dENvbnRlbnQgPSBcIiFcIjtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKHByaW9ydHkpO1xuICB9XG5cbiAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKHRhc2suZ2V0UHJpb3JpdHkoKSk7XG5cbiAgcmV0dXJuIGl0ZW1EaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdGb3JtQnRucyhwYXJlbnQpIHtcbiAgY29uc3QgbmV3Rm9ybUJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3Rm9ybUJ0bnNEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LWJ1dHRvbnMtZGl2Jyk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgbmV3UHJvamVjdC5pZCA9IFwibmV3LXByb2plY3RcIjtcblxuICBuZXdGb3JtQnRuc0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Rhc2sudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG4gIG5ld1Rhc2suaWQgPSBcIm5ldy10YXNrXCI7IFxuICBcbiAgbmV3Rm9ybUJ0bnNEaXYuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0Zvcm1CdG5zRGl2KTtcbn0iLCJpbXBvcnQgeyBTY2hlZHVsYWJsZSB9IGZyb20gXCIuL3NjaGVkdWxhYmxlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcIm1pc2NcIikgPT4ge1xuICBjb25zdCBzY2hlZHVsYWJsZSA9IFNjaGVkdWxhYmxlKGRhdGUsIHRpbWUpO1xuXG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuICBcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdElkO1xuICB9O1xuXG4gIGNvbnN0IGdldENhdGVnb3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yeTtcbiAgfTtcblxuICBjb25zdCBzZXRDYXRlZ29yeSA9IChuZXdDYXRlZ29yeSkgPT4ge1xuICAgIGNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9O1xuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY29tcGxldGVkO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVN0YXR1cyA9ICgpID0+IHtcbiAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc2NoZWR1bGFibGUsXG4gICAgZ2V0SWQsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0UHJvamVjdElkLFxuICAgIGdldENhdGVnb3J5LFxuICAgIHNldENhdGVnb3J5LFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGNvbXBsZXRlLFxuICAgIHVwZGF0ZVN0YXR1c1xuICB9O1xufTsiLCJpbXBvcnQgeyBvcmRlckJ5RGF0ZSwgc2FtZURheSwgZ2V0RGl2VGl0bGUsIGdlbmVyYXRlVGFza0l0ZW1JZCB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrR3JvdXAsIGNyZWF0ZVRhc2tJdGVtLCBhZGROZXdGb3JtQnRucyB9IGZyb20gXCIuL3N1YmNvbXBvbmVudHMuanNcIjtcbmltcG9ydCB7IHByb2plY3RGb3JtQ29tcG9uZW50LCB0YXNrRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KSB7XG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgdGFza3MgPSB0b2Rvc1tgZ2V0JHt0YXNrU3Vic2V0fVRhc2tzYF0oKTtcblxuICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBvbmVudCcpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrU3Vic2V0ID09PSBcIlRvZGF5XCIgPyBcIlRhc2tzXCIgOiB0YXNrU3Vic2V0O1xuXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbmV3Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3doZXJlIG5ldyBmb3JtIHdpbGwgZ28gb24gcGFnZSBpZiBidXR0b24gaXMgcHJlc3NlZFxuICBuZXdGb3JtRGl2LmlkID0gXCJmb3JtXCI7XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChuZXdGb3JtRGl2KTsgXG5cbiAgYWRkTmV3Rm9ybUJ0bnMocGFyZW50KTtcblxuICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZXNzYWdlLmlkID1cIm5vLXRhc2tzLW1lc3NhZ2VcIjtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJObyB0YXNrc1wiO1xuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzb3J0ZWRUYXNrcyA9IG9yZGVyQnlEYXRlKHRhc2tzKTtcblxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICBsZXQgY3VyckRhdGUgPSBzb3J0ZWRUYXNrc1swXS5nZXREYXRlQXNEYXRlKCk7XG4gIGxldCBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKGdldERpdlRpdGxlKGN1cnJEYXRlKSk7XG5cbiAgZm9yIChjb25zdCB0IG9mIHNvcnRlZFRhc2tzKSB7XG4gICAgY29uc29sZS5sb2coXCJ0YXNrIGlzOlwiLCB0LCB0LmdldERlc2NyaXB0aW9uKCkpO1xuICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW0odG9kb3MsIHQpOyBcblxuICAgIGlmIChzYW1lRGF5KHQuZ2V0RGF0ZUFzRGF0ZSgpLCBjdXJyRGF0ZSkpIHtcbiAgICAgIC8vYXBwZW5kIHRvIHRoZSBjdXJyZW50IGRpdlxuICAgICAgY3VyckRpdi5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9kb25lIHdpdGggdGhhdCBncm91cFxuICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoY3VyckRpdik7XG4gICAgICAvL2NyZWF0ZSBhIG5ldyBncm91cFxuICAgICAgY3VyckRhdGUgPSB0LmdldERhdGVBc0RhdGUoKTtcbiAgICAgIGN1cnJEaXYgPSBjcmVhdGVUYXNrR3JvdXAoZ2V0RGl2VGl0bGUoY3VyckRhdGUpKTtcbiAgICAgIC8vYW5kIHRoZW4gYXBwZW5kLCB0YXNrSXRlbSB0byB0aGUgbmV3IGdyb3VwXG4gICAgICBjdXJyRGl2LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICB9XG4gIH1cbiAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoY3VyckRpdik7IC8vYXBwZW5kIHdoYXRldmVyIHRoZSBsYXN0IG9uZSB3YXNcbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG5cbiAgYWRkQnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHRhc2tTdWJzZXQpO1xufVxuXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMocGFyZW50LCB0b2RvcywgdGFza1N1YnNldCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKTtcblxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2Rvcyk7XG4gIH0pO1xuXG4gIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBub2RlVG9SZXBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBudWxsKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0QnRucy5sZW5ndGg7IGkgKyspe1xuICAgIGVkaXRCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdlbmVyYXRlVGFza0l0ZW1JZChlLnRhcmdldC5kYXRhc2V0LnRhc2tJZCkpO1xuICAgICAgY29uc3QgdGFzayA9IHRvZG9zLmdldFRhc2tCeUlkKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQudGFza0lkKSk7XG4gICAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBudWxsLCB0YXNrKTtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgc2FtZURheSB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUb2RvID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgbGV0IHRhc2tzID0gW107XG5cbiAgbGV0IHByb2plY3RJZENvdW50ZXIgPSAxO1xuICBsZXQgdGFza0lkQ291bnRlciA9IDE7XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBwID0gcHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZCgpID09PSBpZCk7XG4gICAgaWYgKHAubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gcFswXTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrQnlJZCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHQgPSB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKCkgPT09IGlkKTtcbiAgICBpZiAodC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0WzBdO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSA9IFwidW5jYXRlZ29yaXplZFwiKSA9PiB7XG4gICAgY29uc3QgcCA9IFByb2plY3QocHJvamVjdElkQ291bnRlciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSk7XG4gICAgcHJvamVjdHMucHVzaChwKTtcbiAgICBwcm9qZWN0SWRDb3VudGVyKys7XG4gICAgcmV0dXJuIHAuZ2V0SWQoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKGRlc2NyaXB0aW9uLCBwcm9qZWN0SWQsIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSA9IFwidW5jYXRlZ29yaXplZFwiKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGluZyB0YXNrIHdpdGggaWQ6IFwiLCB0YXNrSWRDb3VudGVyKTtcbiAgICBjb25zdCB0ID0gVGFzayh0YXNrSWRDb3VudGVyLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpO1xuICAgIHRhc2tzLnB1c2godCk7XG4gICAgdGFza0lkQ291bnRlcisrO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoKSAhPT0gaWQpO1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRQcm9qZWN0SWQoaWQpICE9PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZChpZCkgIT09IGlkKVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcInVuY2F0ZWdvcml6ZWRcIikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChpZCk7XG4gICAgcHJvamVjdC5zZXRUaXRsZSh0aXRsZSk7XG4gICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdC5zZXREYXRlKGRhdGUpO1xuICAgIHByb2plY3Quc2V0VGltZSh0aW1lKTtcbiAgICBwcm9qZWN0LnNldENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5ID0gXCJ1bmNhdGVnb3JpemVkXCIpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza0J5SWQoaWQpO1xuICAgIHRhc2suc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuICAgIHRhc2suc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xuICAgIHRhc2suc2V0RGF0ZShkYXRlKTtcbiAgICB0YXNrLnNldFRpbWUodGltZSk7XG4gICAgdGFzay5zZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBjb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTsgXG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+ICFlbGVtLmNvbXBsZXRlKCkgJiYgc2FtZURheShlbGVtLmdldERhdGVBc0RhdGUoKSwgdG9kYXkpKTsgXG4gIH07XG5cbiAgY29uc3QgZ2V0VXBjb21pbmdUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IC8vd2FudCBzdGFydCBvZiBkYXlcbiAgICB0b2RheS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gKGVsZW0uZ2V0RGF0ZUFzRGF0ZSgpICE9PSBudWxsICYmIGVsZW0uZ2V0RGF0ZUFzRGF0ZSgpID49IHRvZGF5ICYmICFlbGVtLmNvbXBsZXRlKCkpKTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gIWVsZW0uY29tcGxldGUoKSk7XG4gIH1cblxuICBjb25zdCBnZXRDb21wbGV0ZWRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb21wbGV0ZSgpKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdElkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0UHJvamVjdElkKCkgPT09IGlkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RCeUlkLFxuICAgIGdldFRhc2tCeUlkLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY3JlYXRlVGFzayxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgdXBkYXRlUHJvamVjdCxcbiAgICB1cGRhdGVUYXNrLFxuICAgIGdldFByb2plY3RzLFxuICAgIGdldFRhc2tzLFxuICAgIGdldFRvZGF5VGFza3MsXG4gICAgZ2V0QWxsVGFza3MsXG4gICAgZ2V0VXBjb21pbmdUYXNrcyxcbiAgICBnZXRDb21wbGV0ZWRUYXNrcyxcbiAgICBnZXRUYXNrc0J5UHJvamVjdElkXG4gIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9yZGVyQnlEYXRlKG9iamVjdHNXaXRoRGF0ZSkge1xuICByZXR1cm4gb2JqZWN0c1dpdGhEYXRlLnNvcnQoIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoYS5nZXREYXRlQXNEYXRlKCkgJiYgYi5nZXREYXRlQXNEYXRlKCkpIHtcbiAgICAgIGlmIChhLmdldERhdGVBc0RhdGUoKSA+IGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYS5nZXREYXRlQXNEYXRlKCkgPCBiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcyhhcnIpIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGFyci5tYXAoZWxlbSA9PiBlbGVtLmdldENhdGVnb3J5KCkpO1xuICBjb25zb2xlLmxvZyhcIkNBVFNcIiwgWy4uLm5ldyBTZXQoY2F0ZWdvcmllcyldLnNvcnQoKSk7XG4gIHJldHVybiBbLi4ubmV3IFNldChjYXRlZ29yaWVzKV0uc29ydCgpO1xufVxuXG4vL3JpZ2h0IG5vdyBwYXNzaW5nIHRhc2tzLi4gYnV0IHJlYWxseSB3YW50IHRvIHBhc3MgZGF0ZXMgb3IgbmlsXG5leHBvcnQgZnVuY3Rpb24gc2FtZURheShvbmUsIHR3bykgeyBcbiAgaWYgKCFvbmUgJiYgIXR3byl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoIW9uZSB8fCAhdHdvKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBvbmUuZ2V0RGF0ZSgpID09PSB0d28uZ2V0RGF0ZSgpICYmIFxuICAgIG9uZS5nZXRNb250aCgpID09PSB0d28uZ2V0TW9udGgoKSAmJlxuICAgIG9uZS5nZXRGdWxsWWVhcigpID09PSB0d28uZ2V0RnVsbFllYXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdlRpdGxlKGRhdGUpIHsgXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpO1xuICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuXG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybiBcIlVuc2NoZWR1bGVkXCI7XG4gIH1cbiAgZWxzZSBpZiAoc2FtZURheShkYXRlLCB0b2RheSkpIHtcbiAgICByZXR1cm4gXCJUb2RheVwiO1xuICB9XG4gIGVsc2UgaWYgKHNhbWVEYXkoZGF0ZSwgdG9tb3Jyb3cpKSB7XG4gICAgcmV0dXJuIFwiVG9tb3Jyb3dcIjtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLXVzJywgeyB3ZWVrZGF5OlwibG9uZ1wiLCB5ZWFyOlwibnVtZXJpY1wiLCBtb250aDpcInNob3J0XCIsIGRheTpcIm51bWVyaWNcIn0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tJdGVtSWQoaWQpIHtcbiAgcmV0dXJuIGB0YXNrXyR7aWR9YDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG5hdkNvbXBvbmVudCB9IGZyb20gXCIuL25hdi5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuXG4vL3NvbWUgZHVtbXkgZGF0YSAtTkVFRFMgVVBEQVRJTkdcbmNvbnN0IHRvZG9zID0gVG9kbygpOyBcblxudG9kb3MuY3JlYXRlUHJvamVjdChcIlByb2plY3QgT25lXCIsIFwic29tZSBkZXNjcmlwdGlvbi4uLlwiLCBcIjIwMjMtMDctMjBcIiwgXCIxMzowMFwiLCBcIndvcmtcIik7XG50b2Rvcy5jcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBUd29cIiwgXCJzb21lIGRlc2NyaXB0aW9uLi4uLlwiLCBcIjIwMjMtMDctMjBcIiwgXCIwNzowMFwiLCBcIndvcmtcIik7XG50b2Rvcy5jcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBUaHJlZVwiLCBcInNvbWUgZGVzY3JpcHRpb24uLi5cIiwgXCIyMDIzLTA5LTAxXCIsIFwiXCIsIFwid29ya1wiKTtcblxuLy9jcmVhdGVUYXNrID0gKGRlc2NyaXB0aW9uLCBwcm9qZWN0SWQsIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSlcblxudG9kb3MuY3JlYXRlVGFzayhcImEgdGhpbmcgdGhhdCBtdXN0IGJlIGRvbmVcIiwgMSwgXCJoaWdoXCIsIFwiMjAyMy0wNy0xN1wiLCBcIjEyOjAwXCIsIFwibWlzY1wiKTtcbnRvZG9zLmNyZWF0ZVRhc2soXCJhbm90aGVyIHRoaW5nIHRvIGRvXCIsIDEsIFwibG93XCIsIFwiMjAyMy0wNy0xN1wiLCBcIlwiLCBcIm1pc2NcIik7XG50b2Rvcy5jcmVhdGVUYXNrKFwiYSB0aGlyZCB0aGluZ1wiLCAyLCBcImxvd1wiLCBcIjIwMjMtMDctMThcIiwgXCJcIiwgXCJzb21lIG90aGVyIGNhdGVnb3J5XCIpO1xuXG5jb25zb2xlLmxvZyh0b2Rvcy5nZXRQcm9qZWN0cygpKTtcbmNvbnNvbGUubG9nKHRvZG9zLmdldFRhc2tzKCkpO1xuXG4oZnVuY3Rpb24gKCkge1xuICAvL3Rlc3QgZHJhd2luZyB0aGUgbmF2IGJhciArIGluaXRpYWwgc3RhdGUgYXMgdGFza3MgY29tcG9uZW50PyBcbiAgY29uc3QgbmF2UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIG5hdkNvbXBvbmVudCh0b2RvcywgbmF2UGFyZW50KTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBcIkFsbFwiLCBjb250ZW50KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9