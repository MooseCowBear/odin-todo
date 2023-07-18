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
  align-items: center;
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
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
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

.icon {
  height: 1.5rem;
}

.edit-button {
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: end;
  padding: 0;
  /*transform: translateY(50%);*/
}

.nav-button-wrapper {
  display: flex;
  align-items: center;
  
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,UAAU;AACV;;;EAGE,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE;GACC,qBAAqB;EACtB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;AACA,cAAc;;AAEd;EACE,iCAAiC;EACjC,iCAAiC;EACjC,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;;;AAGlB;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,gCAAgC;EAChC,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,oCAAoC;EACpC,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,+BAA+B,EAAE,0CAA0C;EAC3E,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,gBAAgB;EAChB,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;;AAErB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');\n\n/* reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\np, \nsection,\narticle {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* end reset */\n\n:root {\n  --neutral-100: rgb(255, 255, 255);\n  --netural-200: rgb(240, 240, 240);\n  --neutral-300: #264143;\n  --accent: #e99f4c;\n  --alert: #de5499;\n\n  \n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  background-color: var(--neutral-100);\n  color: var(--neutral-300);\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1;\n}\n\nmain {\n  padding: 3rem 10vw;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  gap: 1rem;\n  background-color: var(--netural-200);\n  height: 100%;\n  border-radius: 30px 0 0 0;\n}\n\n.nav > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.nav .project-div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.nav button {\n  background-color: transparent;\n  border: none;\n  font-size: 0.8rem;\n}\n\n.item {\n  line-height: 1;\n}\n\n.item, .item label {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.item .label-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item .project-title {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.task-group {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-group h2 {\n  border-bottom: 2px solid var(--neutral-300);\n}\n\n.new-buttons-div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;;\n}\n\n.new-buttons-div button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--accent);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  white-space: nowrap;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.datetime-display {\n  display: flex;\n  gap: 0.5rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: clamp(300px, 60%, 800px); /* need to adjust bc currently overflows */\n  padding: 0.5rem 0;\n}\n\n.form input, textarea {\n  width: 100%;\n  border: 1px solid var(--neutral-300);\n  border-radius: 5px;\n  padding: 0.5rem;\n  font-family: inherit;\n  background-color: inherit;\n}\n\n.form input:focus, textarea:focus {\n  outline: 2px solid var(--alert);\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\ninput[type=\"submit\"]:focus, input[type=\"submit\"]:hover {\n  border: 1px solid var(--alert);\n  color: var(--alert);\n}\n\ninput[type=checkbox] {\n  accent-color: var(--alert);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.form button {\n  width: max-content;\n  text-transform: lowercase;\n  border: none;\n  background-color: transparent;\n}\n\n.form button:hover, .form button:focus {\n  color: var(--alert);\n}\n\n.label-wrapper {\n  display: flex;\n  gap: 0.5rem;\n}\n\nselect {\n  margin-left: 0.5rem;\n}\n\n.warning {\n  \n  color: var(--alert);\n}\n\n.button-div {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n\n.high {\n  color: var(--alert);\n}\n\n.icon {\n  height: 1.5rem;\n}\n\n.edit-button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  align-items: end;\n  padding: 0;\n  /*transform: translateY(50%);*/\n}\n\n.nav-button-wrapper {\n  display: flex;\n  align-items: center;\n  \n}"],"sourceRoot":""}]);
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
/* harmony import */ var _format_list_bulleted_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format-list-bulleted.svg */ "./src/format-list-bulleted.svg");
/* harmony import */ var _alarm_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alarm.svg */ "./src/alarm.svg");
/* harmony import */ var _calendar_month_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-month.svg */ "./src/calendar-month.svg");
/* harmony import */ var _check_circle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-circle.svg */ "./src/check-circle.svg");








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
  const all = new Image();
  all.src = _format_list_bulleted_svg__WEBPACK_IMPORTED_MODULE_3__;
  all.classList.add("icon");
  const today = new Image();
  today.src = _alarm_svg__WEBPACK_IMPORTED_MODULE_4__;
  today.classList.add("icon");
  const up = new Image();
  up.src = _calendar_month_svg__WEBPACK_IMPORTED_MODULE_5__;
  up.classList.add("icon");
  const comp = new Image();
  comp.src = _check_circle_svg__WEBPACK_IMPORTED_MODULE_6__;
  comp.classList.add("icon");

  const icons = [all, today, up, comp];

  for (let i = 0; i < buttons.length; i ++) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add("nav-button-wrapper");
    buttonWrapper.appendChild(icons[i]);
    const btn = document.createElement('button');
    btn.textContent = buttons[i];
    buttonWrapper.appendChild(btn);
    tasksDiv.appendChild(buttonWrapper);
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
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus.svg */ "./src/plus.svg");
/* harmony import */ var _information_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information-outline.svg */ "./src/information-outline.svg");




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

  if (task.timeFormatted() !== "") {
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
  }

  //here want to add the info icon in a button to edit
  const edit = document.createElement('button');
  edit.classList.add("edit-button");
  edit.dataset.taskId = `${task.getId()}`; //to be used in event listener that updates task

  const editIcon = new Image();
  editIcon.src = _information_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
  editIcon.classList.add("icon");
  editIcon.dataset.taskId = `${task.getId()}`;
  edit.appendChild(editIcon);
  
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

  const plusIcon1 = new Image();
  plusIcon1.src = _plus_svg__WEBPACK_IMPORTED_MODULE_1__;

  const newProject = document.createElement('button');
  newProject.id = "new-project";
  newProject.appendChild(plusIcon1);
  const pcopy = document.createElement('span');
  pcopy.textContent = "New Project";
  newProject.appendChild(pcopy);

  newFormBtnsDiv.appendChild(newProject);

  const plusIcon2 = new Image();
  plusIcon2.src = _plus_svg__WEBPACK_IMPORTED_MODULE_1__;

  const newTask = document.createElement('button');
  newTask.id = "new-task"; 
  newTask.appendChild(plusIcon2);
  const taskcopy = document.createElement('span');
  taskcopy.textContent = "New Task";
  newTask.appendChild(taskcopy);
  
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

/***/ }),

/***/ "./src/alarm.svg":
/*!***********************!*\
  !*** ./src/alarm.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "789d7640d7321b6bf213.svg";

/***/ }),

/***/ "./src/calendar-month.svg":
/*!********************************!*\
  !*** ./src/calendar-month.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60df16e27159e655b18a.svg";

/***/ }),

/***/ "./src/check-circle.svg":
/*!******************************!*\
  !*** ./src/check-circle.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59e28db3a1a81e6472e8.svg";

/***/ }),

/***/ "./src/format-list-bulleted.svg":
/*!**************************************!*\
  !*** ./src/format-list-bulleted.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df8e1fdff9e6b2a3932c.svg";

/***/ }),

/***/ "./src/information-outline.svg":
/*!*************************************!*\
  !*** ./src/information-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73418a41d4ae2348d032.svg";

/***/ }),

/***/ "./src/plus.svg":
/*!**********************!*\
  !*** ./src/plus.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46f3a754dff9273f7a4b.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21CO0FBQ2E7QUFDcEI7OztBQUdqQztBQUNBLGNBQWMsOENBQUk7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFZO0FBQ2Q7QUFDQSxFQUFFLGtFQUFjO0FBQ2hCLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NoZWR1bGFibGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N1YmNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2tzQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3SGVscGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogcmVzZXQgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5wLCBcbnNlY3Rpb24sXG5hcnRpY2xlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICBcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIGVuZCByZXNldCAqL1xuXG46cm9vdCB7XG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1uZXR1cmFsLTIwMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAtLW5ldXRyYWwtMzAwOiAjMjY0MTQzO1xuICAtLWFjY2VudDogI2U5OWY0YztcbiAgLS1hbGVydDogI2RlNTQ5OTtcblxuICBcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtMTAwKTtcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtMzAwKTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogM3JlbSAxMHZ3O1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDFyZW07XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBnYXA6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldHVyYWwtMjAwKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAwO1xufVxuXG4ubmF2ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubmF2IC5wcm9qZWN0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uaXRlbSwgLml0ZW0gbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5pdGVtIC5sYWJlbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW0gLnByb2plY3QtdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnRhc2stZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi50YXNrLWdyb3VwIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcbn1cblxuLm5ldy1idXR0b25zLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7O1xufVxuXG4ubmV3LWJ1dHRvbnMtZGl2IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgaGVpZ2h0OiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZGF0ZXRpbWUtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogY2xhbXAoMzAwcHgsIDYwJSwgODAwcHgpOyAvKiBuZWVkIHRvIGFkanVzdCBiYyBjdXJyZW50bHkgb3ZlcmZsb3dzICovXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuXG4uZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5mb3JtIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hbGVydCk7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hbGVydCk7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5mb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0gYnV0dG9uOmhvdmVyLCAuZm9ybSBidXR0b246Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG4ubGFiZWwtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG5zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4ud2FybmluZyB7XG4gIFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG4uYnV0dG9uLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGlnaCB7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5lZGl0LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIHBhZGRpbmc6IDA7XG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7Ki9cbn1cblxuLm5hdi1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxVQUFVO0FBQ1Y7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7OztFQU9FLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtF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QUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiByZXNldCAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxucCwgXFxuc2VjdGlvbixcXG5hcnRpY2xlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG4gIFxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi8qIGVuZCByZXNldCAqL1xcblxcbjpyb290IHtcXG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tbmV0dXJhbC0yMDA6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIC0tbmV1dHJhbC0zMDA6ICMyNjQxNDM7XFxuICAtLWFjY2VudDogI2U5OWY0YztcXG4gIC0tYWxlcnQ6ICNkZTU0OTk7XFxuXFxuICBcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtMTAwKTtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTMwMCk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDNyZW0gMTB2dztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXR1cmFsLTIwMCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAwO1xcbn1cXG5cXG4ubmF2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm5hdiAucHJvamVjdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLml0ZW0sIC5pdGVtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaXRlbSAubGFiZWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtIC5wcm9qZWN0LXRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnRhc2stZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrLWdyb3VwIGgyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XFxufVxcblxcbi5uZXctYnV0dG9ucy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlOztcXG59XFxuXFxuLm5ldy1idXR0b25zLWRpdiBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGF0ZXRpbWUtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDYwJSwgODAwcHgpOyAvKiBuZWVkIHRvIGFkanVzdCBiYyBjdXJyZW50bHkgb3ZlcmZsb3dzICovXFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuXFxuLmZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZm9ybSBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hbGVydCk7XFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBhY2NlbnQtY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5mb3JtIGJ1dHRvbjpob3ZlciwgLmZvcm0gYnV0dG9uOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbi5sYWJlbC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi53YXJuaW5nIHtcXG4gIFxcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLmJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLmljb24ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5lZGl0LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpOyovXFxufVxcblxcbi5uYXYtYnV0dG9uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9qZWN0Q29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyB0YXNrc0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tzQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyBuYXZDb21wb25lbnQgfSBmcm9tIFwiLi9uYXYuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHByb2plY3QgPSBudWxsKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21wb25lbnQuaWQgPSBcImZvcm1cIjtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcblxuICBjb25zdCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChwcm9qZWN0LCBcInRpdGxlXCIsIFwidGV4dFwiLCBcIlRpdGxlOiAqXCIsIFwiUHJvamVjdCBtdXN0IGhhdmUgYSB0aXRsZS5cIik7XG4gIGYuYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG5cbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHByb2plY3QsIFwiY2F0ZWdvcnlcIiwgXCJ0ZXh0XCIsIFwiQ2F0ZWdvcnk6XCIsIFwiXCIpXG4gIGYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlGaWVsZCk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQocHJvamVjdCwgXCJkYXRlXCIsIFwiZGF0ZVwiLCBcIkRlYWRsaW5lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xuXG4gIGNvbnN0IHRpbWVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHByb2plY3QsIFwidGltZVwiLCBcInRpbWVcIiwgXCJUaW1lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZCh0aW1lRmllbGQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlVGV4dGFyZWEocHJvamVjdCwgXCJkZXNjcmlwdGlvblwiLCBcIkRlc2NyaXB0aW9uOlwiKTtcbiAgZi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXRCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gIGYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWRpdicpO1xuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7IC8vd2lsbCBtYWtlIHRoaXMgc21hbGxcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdG9kb3MuZGVsZXRlUHJvamVjdChwcm9qZWN0LmdldElkKCkpO1xuICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIFwiQWxsXCIsIHBhcmVudCk7IC8vd2FudCB0byBnbyB0byBcImhvbWVcIiArIGFsc28gbmVlZCB0byByZWRyYXcgbmF2IVxuICAgICAgbmF2Q29tcG9uZW50KHRvZG9zLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSk7XG4gICAgfSk7XG4gIH1cblxuICBmLmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChmKTtcbiAgbm9kZVRvUmVwbGFjZS5yZXBsYWNlV2l0aChjb21wb25lbnQpO1xuXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdmFsaWRhdGVzID0gdmFsaWRhdGVJbnB1dChbdGl0bGVGaWVsZF0pO1xuICAgIGlmICghdmFsaWRhdGVzKSByZXR1cm47IFxuXG4gICAgY29uc29sZS5sb2coXCJ0aXRsZSB2YWx1ZTpcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlKTtcblxuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICB0b2Rvcy51cGRhdGVQcm9qZWN0KFxuICAgICAgICBwcm9qZWN0LmdldElkKCksIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIFxuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdC5nZXRJZCgpLCBwYXJlbnQpO1xuICAgIH1cbiAgICBlbHNlIHsgXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB0b2Rvcy5jcmVhdGVQcm9qZWN0KFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3RJZCwgcGFyZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsIGJ1dHRvbiBjbGlja2VkXCIsIG5vZGVUb1JlcGxhY2UpO1xuICAgIGNvbXBvbmVudC5yZXBsYWNlV2l0aChub2RlVG9SZXBsYWNlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBwcm9qZWN0SUQsIHRhc2sgPSBudWxsKSB7XG4gIGNvbnNvbGUubG9nKFwiVEFTS1wiLCB0YXNrKTtcbiAgY29uc29sZS5sb2coXCJQUk9KRUNUIElEXCIsIHByb2plY3RJRCk7XG5cbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBvbmVudC5pZCA9IFwiZm9ybVwiO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVTaW1wbGVJbnB1dCh0YXNrLCBcImRlc2NyaXB0aW9uXCIsIFwidGV4dFwiLCBcIlRhc2s6ICpcIiwgXCJNdXN0IGhhdmUgdGFzay5cIik7XG4gIGYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIC8vaWYgeW91IGNhbWUgZnJvbSBhIHByb2plY3QncyBwYWdlLCB3b3VsZCBleHBlY3QgdGhhdCB0aGF0IHByb2plY3QgaXMgdGhlIHByb2plY3QgZm9yIHRoZSB0YXNrLlxuICAvL2luIHRoYXQgY2FzZSwgd291bGQgd2FudCBhIGhpZGRlbiBmaWVsZCB3aXRoIHByb2plY3RpZCB2YWx1ZVxuICBpZiAoIXRhc2sgJiYgIXByb2plY3RJRCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gdG9kb3MuZ2V0UHJvamVjdHMoKTsgXG4gICAgY29uc3QgcHJvamVjdElkRmllbGQgPSBjcmVhdGVQcm9qZWN0U2VsZWN0KHRhc2ssIHByb2plY3RzKTtcbiAgICBmLmFwcGVuZENoaWxkKHByb2plY3RJZEZpZWxkKTtcbiAgfVxuICBlbHNlIGlmICghdGFzayAmJiBwcm9qZWN0SUQpIHtcbiAgICBjb25zdCBwcm9qZWN0SWRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0SWRGaWVsZC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICBwcm9qZWN0SWRGaWVsZC52YWx1ZSA9IHByb2plY3RJRDtcbiAgICBwcm9qZWN0SWRGaWVsZC5pZCA9IFwicHJvamVjdFwiO1xuICAgIGYuYXBwZW5kQ2hpbGQocHJvamVjdElkRmllbGQpO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVQcmlvcml0eVNlbGVjdCh0YXNrLCBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdKTtcbiAgZi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQodGFzaywgXCJkYXRlXCIsIFwiZGF0ZVwiLCBcIkRlYWRsaW5lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xuXG4gIGNvbnN0IHRpbWVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHRhc2ssIFwidGltZVwiLCBcInRpbWVcIiwgXCJUaW1lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZCh0aW1lRmllbGQpO1xuXG4gIGNvbnN0IGNhdGVnb3J5RmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dCh0YXNrLCBcImNhdGVnb3J5XCIsIFwidGV4dFwiLCBcIkNhdGVnb3J5OlwiKTtcbiAgZi5hcHBlbmRDaGlsZChjYXRlZ29yeUZpZWxkKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b24tZGl2Jyk7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gIGlmICh0YXNrKSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codG9kb3MuZ2V0VGFza3MoKSk7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2sgaWQgdG8gZGVsZXRlXCIsIHRhc2suZ2V0SWQoKSk7XG5cbiAgICAgIHRvZG9zLmRlbGV0ZVRhc2sodGFzay5nZXRJZCgpKTtcblxuICAgICAgY29uc29sZS5sb2codG9kb3MuZ2V0VGFza3MoKSk7XG5cbiAgICAgIGlmICh0YXNrU3Vic2V0KSB7XG4gICAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCB0YXNrU3Vic2V0LCBwYXJlbnQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3RJRCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKGYpO1xuICBub2RlVG9SZXBsYWNlLnJlcGxhY2VXaXRoKGNvbXBvbmVudCk7XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZUlucHV0KFtkZXNjcmlwdGlvbl0pO1xuICAgIGlmICghdmFsaWRhdGVzKSByZXR1cm47IFxuXG4gICAgY29uc3QgY2F0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgY2F0ID0gY2F0SW5wdXQgPT09IFwiXCIgPyBcInVuY2F0ZWdvcml6ZWRcIiA6IGNhdElucHV0O1xuICAgIGNvbnNvbGUubG9nKFwiY2F0XCIsIGNhdCk7XG5cbiAgICBpZiAodGFzaykge1xuICAgICAgdG9kb3MudXBkYXRlVGFzayhcbiAgICAgICAgdGFzay5nZXRJZCgpLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsIFxuICAgICAgICBjYXQudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIFxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRvZG9zLmNyZWF0ZVRhc2soXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLCBcbiAgICAgICAgcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS52YWx1ZSwgXG4gICAgICAgIGNhdC50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBub1Rhc2tNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vLXRhc2stbWVzc2FnZScpO1xuICAgICAgaWYgKG5vVGFza01lc3NhZ2UpIHtcbiAgICAgICAgbm9UYXNrTWVzc2FnZS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcG9uZW50LnJlcGxhY2VXaXRoKG5vZGVUb1JlcGxhY2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2ltcGxlSW5wdXQoZWxlbSwgaWQsIHR5cGUsIGxhYmVsVGV4dCwgd2FybmluZykge1xuICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZCcpO1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZmllbGQudHlwZSA9IHR5cGU7XG4gIGZpZWxkLmlkID0gaWQ7XG5cbiAgaWYgKGVsZW0pIHtcbiAgICBjb25zb2xlLmxvZyhgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWApO1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCB2YWx1ZTogXCIsIGZpZWxkLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGxhYmVsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGFiZWwtd3JhcHBlcicpO1xuXG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICBmaWVsZExhYmVsLmh0bWxGb3IgPSBpZDtcblxuICBjb25zdCBub3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGljZS50ZXh0Q29udGVudCA9IHdhcm5pbmc7XG4gIG5vdGljZS5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG5cbiAgbGFiZWxXcmFwcGVyLmFwcGVuZENoaWxkKGZpZWxkTGFiZWwpO1xuICBsYWJlbFdyYXBwZXIuYXBwZW5kQ2hpbGQobm90aWNlKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQobGFiZWxXcmFwcGVyKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gIHJldHVybiBmaWVsZERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlbGVjdCh0YXNrLCBvcHRpb25zKSB7XG4gIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkJyk7XG5cbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgZmllbGQuaWQgPSBcInByb2plY3RcIjtcblxuICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDpcIjtcbiAgZmllbGRMYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0XCI7XG5cbiAgY29uc3Qgbm9uZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBub25lT3B0aW9uLnZhbHVlID0gMDtcbiAgbm9uZU9wdGlvbi50ZXh0Q29udGVudCA9IFwiTm9uZVwiO1xuICBpZiAoIXRhc2spIHtcbiAgICBub25lT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuICBmaWVsZC5hcHBlbmRDaGlsZChub25lT3B0aW9uKTtcblxuICBmb3IgKGNvbnN0IG9wdCBvZiBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgc2VsZWN0T3B0aW9uLnZhbHVlID0gb3B0LmdldElkKCk7XG4gICAgc2VsZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb3B0LmdldFRpdGxlKCk7XG4gICAgaWYgKHRhc2sgJiYgdGFzay5nZXRQcm9qZWN0SWQoKSA9PT0gb3B0LmdldElkKCkpIHtcbiAgICAgIHNlbGVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGZpZWxkLmFwcGVuZENoaWxkKHNlbGVjdE9wdGlvbik7XG4gIH1cblxuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZExhYmVsKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gIHJldHVybiBmaWVsZERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlTZWxlY3QodGFzaywgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZCcpO1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGZpZWxkLmlkID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgZmllbGRMYWJlbC5odG1sRm9yID0gXCJwcmlvcml0eVwiO1xuXG4gIGZvciAoY29uc3Qgb3B0IG9mIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzZWxlY3RPcHRpb24udmFsdWUgPSBvcHQ7XG4gICAgc2VsZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb3B0O1xuICAgIGlmICh0YXNrICYmIG9wdCA9PT0gdGFzay5nZXRQcmlvcml0eSgpKSB7XG4gICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBmaWVsZC5hcHBlbmRDaGlsZChzZWxlY3RPcHRpb24pO1xuICB9XG5cbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGRMYWJlbCk7XG4gIGZpZWxkRGl2LmFwcGVuZENoaWxkKGZpZWxkKTtcblxuICByZXR1cm4gZmllbGREaXY7ICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dGFyZWEoZWxlbSwgaWQsIGxhYmVsVGV4dCkge1xuICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZCcpO1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZmllbGQuaWQgPSBpZDtcblxuICBpZiAoZWxlbSkge1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCB2YWx1ZTogXCIsIGZpZWxkLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICBmaWVsZExhYmVsLmh0bWxGb3IgPSBpZDtcblxuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZExhYmVsKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gIHJldHVybiBmaWVsZERpdjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dChmaWVsZHMpIHtcbiAgbGV0IGdvb2QgPSB0cnVlO1xuICBmb3IgKGNvbnN0IGYgb2YgZmllbGRzKSB7XG4gICAgY29uc3QgaW5wdXQgPSBmLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgY29uc3Qgd2FybmluZyA9IGYucXVlcnlTZWxlY3Rvcignd2FybmluZycpO1xuICAgICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICBnb29kID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBnb29kO1xufSIsImltcG9ydCB7IG9yZGVyQnlEYXRlLCBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IHRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3NDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IHByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9qZWN0Q29tcG9uZW50LmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9mb3JtYXQtbGlzdC1idWxsZXRlZC5zdmdcIjtcbmltcG9ydCBBbGFybSBmcm9tIFwiLi9hbGFybS5zdmdcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi9jYWxlbmRhci1tb250aC5zdmdcIjtcbmltcG9ydCBDaGVjayBmcm9tIFwiLi9jaGVjay1jaXJjbGUuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZDb21wb25lbnQodG9kb3MsIHBhcmVudCkge1xuICAvL2RyYXdzIGJ1dHRvbnMgdG8gdGFzayB2aWV3czogdG9kYXksIHVwY29taW5nLCBhbnl0aW1lLCBjb21wbGV0ZVxuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiXG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRhc2tzVGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tzVGl0bGUpO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBbJ0FsbCcsICdUb2RheScsICdVcGNvbWluZycsICdDb21wbGV0ZWQnXTtcbiAgY29uc3QgYWxsID0gbmV3IEltYWdlKCk7XG4gIGFsbC5zcmMgPSBMaXN0O1xuICBhbGwuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IEltYWdlKCk7XG4gIHRvZGF5LnNyYyA9IEFsYXJtO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgY29uc3QgdXAgPSBuZXcgSW1hZ2UoKTtcbiAgdXAuc3JjID0gQ2FsZW5kYXI7XG4gIHVwLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICBjb25zdCBjb21wID0gbmV3IEltYWdlKCk7XG4gIGNvbXAuc3JjID0gQ2hlY2s7XG4gIGNvbXAuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG5cbiAgY29uc3QgaWNvbnMgPSBbYWxsLCB0b2RheSwgdXAsIGNvbXBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkgKyspIHtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbi13cmFwcGVyXCIpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoaWNvbnNbaV0pO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ1dHRvbnNbaV07XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidG4pO1xuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICB9XG5cbiAgYWRkVGFza0xpc3RlbmVyKHRhc2tzRGl2LCB0b2Rvcyk7XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG5cbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdHNEaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RzRGl2VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RzRGl2VGl0bGUpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gdG9kb3MuZ2V0UHJvamVjdHMoKTtcblxuICBmb3IgKGNvbnN0IGNhdCBvZiBnZXRDYXRlZ29yaWVzKHByb2plY3RzKSkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7IC8vaDEgYW5kIGgyIHdpbGwgYmUgaW4gdGhlIG1haW4gY29udGVudCBwYXJ0XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXQ7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBzb3J0ZWRQcm9qZWN0cyA9IG9yZGVyQnlEYXRlKHByb2plY3RzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0Q2F0ZWdvcnkoKSA9PT0gY2F0KSk7XG5cbiAgICBmb3IgKGNvbnN0IHAgb2Ygc29ydGVkUHJvamVjdHMpIHsgLy9USElTIFdJTEwgUFJPQkFCTFkgQ0hBTkdFXG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gcC5nZXRUaXRsZSgpO1xuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LmlkID0gYCR7cC5nZXRJZCgpfWA7XG4gICAgfVxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9XG5cbiAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzRGl2LCB0b2Rvcyk7XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbiAgLy9kcmF3cyBlYWNoIGNhdGVnb3J5IG9mIHByb2plY3QsIHdpdGggcHJvamVjdHMgZnJvbSB0aGF0IGNhdGVnb3J5IGxpc3RlZCAoaW4gb3JkZXIgb2YgZGF0ZSlcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBlLnRhcmdldC50ZXh0Q29udGVudCwgY29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdExpc3RlbmVyKGJ1dHRvbkRpdiwgdG9kb3MpIHtcbiAgYnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgIFxuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZCksIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgU2NoZWR1bGFibGUgfSBmcm9tIFwiLi9zY2hlZHVsYWJsZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdCA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuICBjb25zdCBzY2hlZHVsYWJsZSA9IFNjaGVkdWxhYmxlKGRhdGUsIHRpbWUpO1xuXG4gIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IHNldENhdGVnb3J5ID0gKG5ld0NhdGVnb3J5KSA9PiB7XG4gICAgY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnNjaGVkdWxhYmxlLFxuICAgIGdldElkLFxuICAgIGdldFRpdGxlLFxuICAgIHNldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIGdldENhdGVnb3J5LFxuICAgIHNldENhdGVnb3J5XG4gIH07XG59OyIsImltcG9ydCB7IG9yZGVyQnlEYXRlLCBnZXRDYXRlZ29yaWVzLCBnZW5lcmF0ZVRhc2tJdGVtSWQgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0dyb3VwLCBjcmVhdGVUYXNrSXRlbSwgYWRkTmV3Rm9ybUJ0bnMgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0Rm9ybUNvbXBvbmVudCwgdGFza0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SWQsIHBhcmVudCkge1xuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnY29tcG9uZW50Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb3MuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKS5nZXRUaXRsZSgpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZGF0ZUZvcm1hdHRlZCgpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGF0ZURpc3BsYXkpO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RFZGl0LmlkID0gXCJlZGl0LXByb2plY3RcIjtcbiAgcHJvamVjdEVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdCk7XG5cbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgZCA9IHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZ2V0RGVzY3JpcHRpb24oKTtcbiAgaWYgKGQgIT09IFwiXCIpIHtcbiAgICBjb25zdCBkZXNjcmlwdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHREaXNwbGF5LnRleHRDb250ZW50ID0gZDtcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHREaXNwbGF5KTtcbiAgfVxuXG4gIGNvbnN0IG5ld0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy93aGVyZSBuZXcgZm9ybSB3aWxsIGdvIG9uIHBhZ2UgaWYgYnV0dG9uIGlzIHByZXNzZWRcbiAgbmV3Rm9ybURpdi5pZCA9IFwiZm9ybVwiO1xuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobmV3Rm9ybURpdik7IFxuXG4gIGFkZE5ld0Zvcm1CdG5zKHBhcmVudCk7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gIGNvbnN0IHRhc2tzID0gdG9kb3MuZ2V0VGFza3NCeVByb2plY3RJZChwcm9qZWN0SWQpOyAvL3RoaXMgaXMgYm90aCBjb21wbGV0ZWQgYW5kIG5vdFxuXG4gIGZvciAoY29uc3QgY2F0IG9mIGdldENhdGVnb3JpZXModGFza3MpKSB7IFxuICAgIC8vY3JlYXRlIHRhc2sgZ3JvdXAgXG4gICAgY29uc3QgZ3JvdXAgPSBjcmVhdGVUYXNrR3JvdXAoY2F0KTtcbiAgICAvL25vdyBsaXN0IHRoZSB0YXNrcyBmb3IgZWFjaCBjYXRlZ29yeVxuICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gb3JkZXJCeURhdGUodGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpID09PSBjYXQpKTtcblxuICAgIGZvciAoY29uc3QgdCBvZiBzb3J0ZWRUYXNrcykge1xuICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZVRhc2tJdGVtKHRvZG9zLCB0LCB0cnVlKTtcbiAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgfVxuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuXG4gIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCBwcm9qZWN0SWQpO1xufVxuXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMocGFyZW50LCB0b2RvcywgcHJvamVjdElkKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKTtcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcblxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm1Db21wb25lbnQocGFyZW50LCBmb3JtRGl2LCB0b2Rvcyk7XG4gIH0pO1xuXG4gIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zLCBudWxsLCBwcm9qZWN0SWQpO1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKTtcbiAgcHJvamVjdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zLCB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0QnRucy5sZW5ndGg7IGkgKyspe1xuICAgIGVkaXRCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdlbmVyYXRlVGFza0l0ZW1JZChlLnRhcmdldC5kYXRhc2V0LnRhc2tJZCkpO1xuICAgICAgY29uc3QgdGFzayA9IHRvZG9zLmdldFRhc2tCeUlkKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQudGFza0lkKSk7XG4gICAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIHRhc2tEaXYsIHRvZG9zLCBudWxsLCBwcm9qZWN0SWQsIHRhc2spO1xuICAgIH0pO1xuICB9XG59XG5cbiIsImV4cG9ydCBjb25zdCBTY2hlZHVsYWJsZSA9IChkYXRlLCB0aW1lKSA9PiB7XG4gIGNvbnN0IGdldERhdGVBc0RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGUgPT09IFwiXCIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSB0aW1lID09PSBcIlwiID8gXCJUMjM6NTk6NTlcIiA6IFwiVFwiICsgdGltZSArIFwiOjAwXCI7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUgKyB0aW1lU3RyaW5nKTtcbiAgfTtcblxuICBjb25zdCBkYXRlRm9ybWF0dGVkID0gKCkgPT4ge1xuICAgIGlmIChkYXRlID09PSBcIlwiKSByZXR1cm4gZGF0ZTtcbiAgICBjb25zdCBtb250aCA9IGRhdGVbNV0gPT09IFwiMFwiID8gZGF0ZS5zbGljZSg2LCA3KSA6IGRhdGUuc2xpY2UoNSwgNyk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZVs4XSA9PT0gXCIwXCIgPyBkYXRlLnNsaWNlKDkpIDogZGF0ZS5zbGljZSg4KTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5zbGljZSgwLCA0KTtcblxuICAgIHJldHVybiBtb250aCArIFwiL1wiICsgZGF5ICsgXCIvXCIgKyB5ZWFyO1xuICB9O1xuXG4gIGNvbnN0IHRpbWVGb3JtYXR0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRpbWUgPT09IFwiXCIpIHJldHVybiB0aW1lO1xuICAgIGxldCBob3VyID0gcGFyc2VJbnQodGltZS5zbGljZSgwLCAyKSk7XG4gICAgY29uc3QgbWluID0gdGltZS5zbGljZSgyKTtcbiAgICBjb25zdCBtID0gaG91ciA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICBob3VyID0gaG91ciA+IDEyID8gaG91ciAtIDEyIDogaG91cjtcbiAgICByZXR1cm4gYCR7aG91cn0ke21pbn0gJHttfWA7XG4gIH07XG5cbiAgLy9hbHNvIG5lZWQgc2V0IGRhdGUsIHRpbWUgZm9yIGVkaXRpbmdcblxuICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICBkYXRlID0gbmV3RGF0ZTtcbiAgfTtcblxuICBjb25zdCBzZXRUaW1lID0gKG5ld1RpbWUpID0+IHtcbiAgICB0aW1lID0gbmV3VGltZTtcbiAgfTtcblxuICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgIHJldHVybiB0aW1lO1xuICB9XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0RGF0ZUFzRGF0ZSxcbiAgICBkYXRlRm9ybWF0dGVkLFxuICAgIHRpbWVGb3JtYXR0ZWQsXG4gICAgc2V0RGF0ZSxcbiAgICBzZXRUaW1lLFxuICAgIGdldFRpbWUsXG4gICAgZ2V0RGF0ZVxuICB9O1xufSIsImltcG9ydCB7IGdlbmVyYXRlVGFza0l0ZW1JZCB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5pbXBvcnQgUGx1cyBmcm9tIFwiLi9wbHVzLnN2Z1wiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaW5mb3JtYXRpb24tb3V0bGluZS5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tHcm91cChncm91cFRpdGxlKSB7XG4gIGNvbnN0IGdyb3VwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBncm91cFRpdGxlO1xuICBncm91cERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGdyb3VwRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZ3JvdXAnKTtcblxuICByZXR1cm4gZ3JvdXBEaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrSXRlbSh0b2RvcywgdGFzaywgaW5jbHVkZURhdGUgPSBmYWxzZSkge1xuICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICBpdGVtRGl2LmlkID0gZ2VuZXJhdGVUYXNrSXRlbUlkKHRhc2suZ2V0SWQoKSk7XG5cbiAgY29uc3QgbGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVjay50eXBlID0gJ2NoZWNrYm94JzsgXG5cbiAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIHRhc2sudXBkYXRlU3RhdHVzKCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJhIGNoZWNrIGJveCB3YXMgY2hlY2tlZFwiKTtcbiAgICAgIC8vd2FudCB0byBmYWRlIG91dC4uLj8gb25seSBpZiBub3Qgc2hvd2luZyBjb21wbGV0ZWQgdGFza3MuLi53aGljaCB3b3VsZCByZXF1aXJlIGEgYm9vbC4uLlxuICAgIH1cbiAgfSk7XG5cbiAgbGJsLmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICBjb25zdCBsYWJlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxhYmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibGFiZWwtY29udGVudFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG4gIGxhYmVsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgaWYgKHRhc2suZ2V0UHJvamVjdElkKCkgPiAwKSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRvZG9zLmdldFByb2plY3RCeUlkKHRhc2suZ2V0UHJvamVjdElkKCkpLmdldFRpdGxlKCk7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBsYWJlbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgfVxuXG4gIGxibC5hcHBlbmRDaGlsZChsYWJlbENvbnRlbnQpO1xuXG4gIGl0ZW1EaXYuYXBwZW5kQ2hpbGQobGJsKTtcblxuICBpZiAodGFzay50aW1lRm9ybWF0dGVkKCkgIT09IFwiXCIpIHtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZXRpbWUtZGlzcGxheVwiKTtcblxuICAgIGlmIChpbmNsdWRlRGF0ZSkge1xuICAgICAgY29uc3QgZGF0ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBkYXRlQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2suZGF0ZUZvcm1hdHRlZCgpO1xuICAgICAgdGltZS5hcHBlbmRDaGlsZChkYXRlQ29udGVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGltZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGltZUNvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpbWVGb3JtYXR0ZWQoKTsgXG4gICAgdGltZS5hcHBlbmRDaGlsZCh0aW1lQ29udGVudCk7XG5cbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICB9XG5cbiAgLy9oZXJlIHdhbnQgdG8gYWRkIHRoZSBpbmZvIGljb24gaW4gYSBidXR0b24gdG8gZWRpdFxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uXCIpO1xuICBlZGl0LmRhdGFzZXQudGFza0lkID0gYCR7dGFzay5nZXRJZCgpfWA7IC8vdG8gYmUgdXNlZCBpbiBldmVudCBsaXN0ZW5lciB0aGF0IHVwZGF0ZXMgdGFza1xuXG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLnNyYyA9IEluZm87XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICBlZGl0SWNvbi5kYXRhc2V0LnRhc2tJZCA9IGAke3Rhc2suZ2V0SWQoKX1gO1xuICBlZGl0LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgXG4gIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgaWYgKHRhc2suZ2V0UHJpb3JpdHkoKSA9PT0gJ2hpZ2gnKSB7XG4gICAgY29uc3QgcHJpb3J0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy9jaGFuZ2UgdG8gaWNvbj9cbiAgICBwcmlvcnR5LnRleHRDb250ZW50ID0gXCIhXCI7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChwcmlvcnR5KTtcbiAgfVxuXG4gIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCh0YXNrLmdldFByaW9yaXR5KCkpO1xuXG4gIHJldHVybiBpdGVtRGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Rm9ybUJ0bnMocGFyZW50KSB7XG4gIGNvbnN0IG5ld0Zvcm1CdG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0Zvcm1CdG5zRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy1idXR0b25zLWRpdicpO1xuXG4gIGNvbnN0IHBsdXNJY29uMSA9IG5ldyBJbWFnZSgpO1xuICBwbHVzSWNvbjEuc3JjID0gUGx1cztcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3QuaWQgPSBcIm5ldy1wcm9qZWN0XCI7XG4gIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocGx1c0ljb24xKTtcbiAgY29uc3QgcGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHBjb3B5LnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHBjb3B5KTtcblxuICBuZXdGb3JtQnRuc0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICBjb25zdCBwbHVzSWNvbjIgPSBuZXcgSW1hZ2UoKTtcbiAgcGx1c0ljb24yLnNyYyA9IFBsdXM7XG5cbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUYXNrLmlkID0gXCJuZXctdGFza1wiOyBcbiAgbmV3VGFzay5hcHBlbmRDaGlsZChwbHVzSWNvbjIpO1xuICBjb25zdCB0YXNrY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGFza2NvcHkudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG4gIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza2NvcHkpO1xuICBcbiAgbmV3Rm9ybUJ0bnNEaXYuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0Zvcm1CdG5zRGl2KTtcbn0iLCJpbXBvcnQgeyBTY2hlZHVsYWJsZSB9IGZyb20gXCIuL3NjaGVkdWxhYmxlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcIm1pc2NcIikgPT4ge1xuICBjb25zdCBzY2hlZHVsYWJsZSA9IFNjaGVkdWxhYmxlKGRhdGUsIHRpbWUpO1xuXG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuICBcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdElkO1xuICB9O1xuXG4gIGNvbnN0IGdldENhdGVnb3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yeTtcbiAgfTtcblxuICBjb25zdCBzZXRDYXRlZ29yeSA9IChuZXdDYXRlZ29yeSkgPT4ge1xuICAgIGNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9O1xuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY29tcGxldGVkO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVN0YXR1cyA9ICgpID0+IHtcbiAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc2NoZWR1bGFibGUsXG4gICAgZ2V0SWQsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0UHJvamVjdElkLFxuICAgIGdldENhdGVnb3J5LFxuICAgIHNldENhdGVnb3J5LFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGNvbXBsZXRlLFxuICAgIHVwZGF0ZVN0YXR1c1xuICB9O1xufTsiLCJpbXBvcnQgeyBvcmRlckJ5RGF0ZSwgc2FtZURheSwgZ2V0RGl2VGl0bGUsIGdlbmVyYXRlVGFza0l0ZW1JZCB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrR3JvdXAsIGNyZWF0ZVRhc2tJdGVtLCBhZGROZXdGb3JtQnRucyB9IGZyb20gXCIuL3N1YmNvbXBvbmVudHMuanNcIjtcbmltcG9ydCB7IHByb2plY3RGb3JtQ29tcG9uZW50LCB0YXNrRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KSB7XG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgdGFza3MgPSB0b2Rvc1tgZ2V0JHt0YXNrU3Vic2V0fVRhc2tzYF0oKTtcblxuICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBvbmVudCcpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrU3Vic2V0ID09PSBcIlRvZGF5XCIgPyBcIlRhc2tzXCIgOiB0YXNrU3Vic2V0O1xuXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbmV3Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3doZXJlIG5ldyBmb3JtIHdpbGwgZ28gb24gcGFnZSBpZiBidXR0b24gaXMgcHJlc3NlZFxuICBuZXdGb3JtRGl2LmlkID0gXCJmb3JtXCI7XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChuZXdGb3JtRGl2KTsgXG5cbiAgYWRkTmV3Rm9ybUJ0bnMocGFyZW50KTtcblxuICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZXNzYWdlLmlkID1cIm5vLXRhc2tzLW1lc3NhZ2VcIjtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJObyB0YXNrc1wiO1xuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzb3J0ZWRUYXNrcyA9IG9yZGVyQnlEYXRlKHRhc2tzKTtcblxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICBsZXQgY3VyckRhdGUgPSBzb3J0ZWRUYXNrc1swXS5nZXREYXRlQXNEYXRlKCk7XG4gIGxldCBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKGdldERpdlRpdGxlKGN1cnJEYXRlKSk7XG5cbiAgZm9yIChjb25zdCB0IG9mIHNvcnRlZFRhc2tzKSB7XG4gICAgY29uc29sZS5sb2coXCJ0YXNrIGlzOlwiLCB0LCB0LmdldERlc2NyaXB0aW9uKCkpO1xuICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW0odG9kb3MsIHQpOyBcblxuICAgIGlmIChzYW1lRGF5KHQuZ2V0RGF0ZUFzRGF0ZSgpLCBjdXJyRGF0ZSkpIHtcbiAgICAgIC8vYXBwZW5kIHRvIHRoZSBjdXJyZW50IGRpdlxuICAgICAgY3VyckRpdi5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9kb25lIHdpdGggdGhhdCBncm91cFxuICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoY3VyckRpdik7XG4gICAgICAvL2NyZWF0ZSBhIG5ldyBncm91cFxuICAgICAgY3VyckRhdGUgPSB0LmdldERhdGVBc0RhdGUoKTtcbiAgICAgIGN1cnJEaXYgPSBjcmVhdGVUYXNrR3JvdXAoZ2V0RGl2VGl0bGUoY3VyckRhdGUpKTtcbiAgICAgIC8vYW5kIHRoZW4gYXBwZW5kLCB0YXNrSXRlbSB0byB0aGUgbmV3IGdyb3VwXG4gICAgICBjdXJyRGl2LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICB9XG4gIH1cbiAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoY3VyckRpdik7IC8vYXBwZW5kIHdoYXRldmVyIHRoZSBsYXN0IG9uZSB3YXNcbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG5cbiAgYWRkQnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHRhc2tTdWJzZXQpO1xufVxuXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMocGFyZW50LCB0b2RvcywgdGFza1N1YnNldCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKTtcblxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2Rvcyk7XG4gIH0pO1xuXG4gIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBub2RlVG9SZXBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBudWxsKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0QnRucy5sZW5ndGg7IGkgKyspe1xuICAgIGVkaXRCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdlbmVyYXRlVGFza0l0ZW1JZChlLnRhcmdldC5kYXRhc2V0LnRhc2tJZCkpO1xuICAgICAgY29uc3QgdGFzayA9IHRvZG9zLmdldFRhc2tCeUlkKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQudGFza0lkKSk7XG4gICAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBudWxsLCB0YXNrKTtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgc2FtZURheSB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUb2RvID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgbGV0IHRhc2tzID0gW107XG5cbiAgbGV0IHByb2plY3RJZENvdW50ZXIgPSAxO1xuICBsZXQgdGFza0lkQ291bnRlciA9IDE7XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBwID0gcHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZCgpID09PSBpZCk7XG4gICAgaWYgKHAubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gcFswXTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrQnlJZCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHQgPSB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKCkgPT09IGlkKTtcbiAgICBpZiAodC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0WzBdO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSA9IFwidW5jYXRlZ29yaXplZFwiKSA9PiB7XG4gICAgY29uc3QgcCA9IFByb2plY3QocHJvamVjdElkQ291bnRlciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSk7XG4gICAgcHJvamVjdHMucHVzaChwKTtcbiAgICBwcm9qZWN0SWRDb3VudGVyKys7XG4gICAgcmV0dXJuIHAuZ2V0SWQoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKGRlc2NyaXB0aW9uLCBwcm9qZWN0SWQsIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSA9IFwidW5jYXRlZ29yaXplZFwiKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGluZyB0YXNrIHdpdGggaWQ6IFwiLCB0YXNrSWRDb3VudGVyKTtcbiAgICBjb25zdCB0ID0gVGFzayh0YXNrSWRDb3VudGVyLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpO1xuICAgIHRhc2tzLnB1c2godCk7XG4gICAgdGFza0lkQ291bnRlcisrO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoKSAhPT0gaWQpO1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRQcm9qZWN0SWQoaWQpICE9PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZChpZCkgIT09IGlkKVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcInVuY2F0ZWdvcml6ZWRcIikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChpZCk7XG4gICAgcHJvamVjdC5zZXRUaXRsZSh0aXRsZSk7XG4gICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdC5zZXREYXRlKGRhdGUpO1xuICAgIHByb2plY3Quc2V0VGltZSh0aW1lKTtcbiAgICBwcm9qZWN0LnNldENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5ID0gXCJ1bmNhdGVnb3JpemVkXCIpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza0J5SWQoaWQpO1xuICAgIHRhc2suc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuICAgIHRhc2suc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xuICAgIHRhc2suc2V0RGF0ZShkYXRlKTtcbiAgICB0YXNrLnNldFRpbWUodGltZSk7XG4gICAgdGFzay5zZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBjb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTsgXG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+ICFlbGVtLmNvbXBsZXRlKCkgJiYgc2FtZURheShlbGVtLmdldERhdGVBc0RhdGUoKSwgdG9kYXkpKTsgXG4gIH07XG5cbiAgY29uc3QgZ2V0VXBjb21pbmdUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IC8vd2FudCBzdGFydCBvZiBkYXlcbiAgICB0b2RheS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gKGVsZW0uZ2V0RGF0ZUFzRGF0ZSgpICE9PSBudWxsICYmIGVsZW0uZ2V0RGF0ZUFzRGF0ZSgpID49IHRvZGF5ICYmICFlbGVtLmNvbXBsZXRlKCkpKTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gIWVsZW0uY29tcGxldGUoKSk7XG4gIH1cblxuICBjb25zdCBnZXRDb21wbGV0ZWRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb21wbGV0ZSgpKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdElkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0UHJvamVjdElkKCkgPT09IGlkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RCeUlkLFxuICAgIGdldFRhc2tCeUlkLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY3JlYXRlVGFzayxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgdXBkYXRlUHJvamVjdCxcbiAgICB1cGRhdGVUYXNrLFxuICAgIGdldFByb2plY3RzLFxuICAgIGdldFRhc2tzLFxuICAgIGdldFRvZGF5VGFza3MsXG4gICAgZ2V0QWxsVGFza3MsXG4gICAgZ2V0VXBjb21pbmdUYXNrcyxcbiAgICBnZXRDb21wbGV0ZWRUYXNrcyxcbiAgICBnZXRUYXNrc0J5UHJvamVjdElkXG4gIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9yZGVyQnlEYXRlKG9iamVjdHNXaXRoRGF0ZSkge1xuICByZXR1cm4gb2JqZWN0c1dpdGhEYXRlLnNvcnQoIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoYS5nZXREYXRlQXNEYXRlKCkgJiYgYi5nZXREYXRlQXNEYXRlKCkpIHtcbiAgICAgIGlmIChhLmdldERhdGVBc0RhdGUoKSA+IGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYS5nZXREYXRlQXNEYXRlKCkgPCBiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcyhhcnIpIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGFyci5tYXAoZWxlbSA9PiBlbGVtLmdldENhdGVnb3J5KCkpO1xuICBjb25zb2xlLmxvZyhcIkNBVFNcIiwgWy4uLm5ldyBTZXQoY2F0ZWdvcmllcyldLnNvcnQoKSk7XG4gIHJldHVybiBbLi4ubmV3IFNldChjYXRlZ29yaWVzKV0uc29ydCgpO1xufVxuXG4vL3JpZ2h0IG5vdyBwYXNzaW5nIHRhc2tzLi4gYnV0IHJlYWxseSB3YW50IHRvIHBhc3MgZGF0ZXMgb3IgbmlsXG5leHBvcnQgZnVuY3Rpb24gc2FtZURheShvbmUsIHR3bykgeyBcbiAgaWYgKCFvbmUgJiYgIXR3byl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoIW9uZSB8fCAhdHdvKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBvbmUuZ2V0RGF0ZSgpID09PSB0d28uZ2V0RGF0ZSgpICYmIFxuICAgIG9uZS5nZXRNb250aCgpID09PSB0d28uZ2V0TW9udGgoKSAmJlxuICAgIG9uZS5nZXRGdWxsWWVhcigpID09PSB0d28uZ2V0RnVsbFllYXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdlRpdGxlKGRhdGUpIHsgXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpO1xuICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuXG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybiBcIlVuc2NoZWR1bGVkXCI7XG4gIH1cbiAgZWxzZSBpZiAoc2FtZURheShkYXRlLCB0b2RheSkpIHtcbiAgICByZXR1cm4gXCJUb2RheVwiO1xuICB9XG4gIGVsc2UgaWYgKHNhbWVEYXkoZGF0ZSwgdG9tb3Jyb3cpKSB7XG4gICAgcmV0dXJuIFwiVG9tb3Jyb3dcIjtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLXVzJywgeyB3ZWVrZGF5OlwibG9uZ1wiLCB5ZWFyOlwibnVtZXJpY1wiLCBtb250aDpcInNob3J0XCIsIGRheTpcIm51bWVyaWNcIn0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tJdGVtSWQoaWQpIHtcbiAgcmV0dXJuIGB0YXNrXyR7aWR9YDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbmF2Q29tcG9uZW50IH0gZnJvbSBcIi4vbmF2LmpzXCI7XG5pbXBvcnQgeyB0YXNrc0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tzQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG5cbi8vc29tZSBkdW1teSBkYXRhIC1ORUVEUyBVUERBVElOR1xuY29uc3QgdG9kb3MgPSBUb2RvKCk7IFxuXG50b2Rvcy5jcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBPbmVcIiwgXCJzb21lIGRlc2NyaXB0aW9uLi4uXCIsIFwiMjAyMy0wNy0yMFwiLCBcIjEzOjAwXCIsIFwid29ya1wiKTtcbnRvZG9zLmNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IFR3b1wiLCBcInNvbWUgZGVzY3JpcHRpb24uLi4uXCIsIFwiMjAyMy0wNy0yMFwiLCBcIjA3OjAwXCIsIFwid29ya1wiKTtcbnRvZG9zLmNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IFRocmVlXCIsIFwic29tZSBkZXNjcmlwdGlvbi4uLlwiLCBcIjIwMjMtMDktMDFcIiwgXCJcIiwgXCJ3b3JrXCIpO1xuXG4vL2NyZWF0ZVRhc2sgPSAoZGVzY3JpcHRpb24sIHByb2plY3RJZCwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5KVxuXG50b2Rvcy5jcmVhdGVUYXNrKFwiYSB0aGluZyB0aGF0IG11c3QgYmUgZG9uZVwiLCAxLCBcImhpZ2hcIiwgXCIyMDIzLTA3LTE3XCIsIFwiMTI6MDBcIiwgXCJtaXNjXCIpO1xudG9kb3MuY3JlYXRlVGFzayhcImFub3RoZXIgdGhpbmcgdG8gZG9cIiwgMSwgXCJsb3dcIiwgXCIyMDIzLTA3LTE3XCIsIFwiXCIsIFwibWlzY1wiKTtcbnRvZG9zLmNyZWF0ZVRhc2soXCJhIHRoaXJkIHRoaW5nXCIsIDIsIFwibG93XCIsIFwiMjAyMy0wNy0xOFwiLCBcIlwiLCBcInNvbWUgb3RoZXIgY2F0ZWdvcnlcIik7XG5cbmNvbnNvbGUubG9nKHRvZG9zLmdldFByb2plY3RzKCkpO1xuY29uc29sZS5sb2codG9kb3MuZ2V0VGFza3MoKSk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vdGVzdCBkcmF3aW5nIHRoZSBuYXYgYmFyICsgaW5pdGlhbCBzdGF0ZSBhcyB0YXNrcyBjb21wb25lbnQ/IFxuICBjb25zdCBuYXZQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgbmF2Q29tcG9uZW50KHRvZG9zLCBuYXZQYXJlbnQpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgdGFza3NDb21wb25lbnQodG9kb3MsIFwiQWxsXCIsIGNvbnRlbnQpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=