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
  border-radius: 40px 0 0 0;
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
  transition: all 500ms linear;
}

.item.fade-out {
  transform: scaleY(0);
  opacity: 0;
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
  width: 100%;
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
  width: clamp(300px, 60%, 800px);
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

.form button, .edit-project {
  width: max-content;
  text-transform: lowercase;
  border: none;
  background-color: transparent;
}

.form button:hover, 
.form button:focus, 
.edit-project:hover, 
.edit-project:focus {
  color: var(--alert);
}

.edit-project {
  font-size: 0.9rem;
}

.label-wrapper {
  display: flex;
  gap: 0.5rem;
}

select {
  margin-left: 0.5rem;
}

.warning {
  display: none;
  color: var(--alert);
}

.warning.show {
  display: inline;
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
}

.nav-button-wrapper {
  display: flex;
  align-items: center; 
}

.nav-button-wrapper .icon {
  transform: translateY(-10%);
}

.small-icon {
  height: 1rem;
  transform: translateY(-10%);
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
}

.select {
  width: 100%;
  min-width: 15ch;
  border: 1px solid var(--neutral-300);
  border-radius: 0.25em;
  padding: 0.5em;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
}

.select::after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color: var(--alert);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  justify-self: end;
}

select,
.select:after {
  grid-area: select;
}

select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--alert);
  border-radius: inherit;
}

@media only screen and (max-width: 550px) {
  body {
    grid-template-columns: 1fr;
  }

  main {
    padding: 5vw;
    grid-row: 1;
  }

  .nav {
    height: max-content;
    grid-row: 2;
  }

  .new-buttons-div {
    flex-direction: column;
  }

  .item {
    flex-wrap: wrap;
    row-gap: 0.3rem;
  }

  .project-header {
    display: flex;
    align-items: center;
    row-gap: 0.5rem;
    column-gap: 1rem;
    flex-wrap: wrap;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');\n\n/* reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\np, \nsection,\narticle {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* end reset */\n\n:root {\n  --neutral-100: rgb(255, 255, 255);\n  --netural-200: rgb(240, 240, 240);\n  --neutral-300: #264143;\n  --accent: #e99f4c;\n  --alert: #de5499;\n\n  \n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  background-color: var(--neutral-100);\n  color: var(--neutral-300);\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1;\n}\n\nmain {\n  padding: 3rem 10vw;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  gap: 1rem;\n  background-color: var(--netural-200);\n  height: 100%;\n  border-radius: 40px 0 0 0;\n}\n\n.nav > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.nav .project-div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.nav button {\n  background-color: transparent;\n  border: none;\n  font-size: 0.8rem;\n}\n\n.item {\n  line-height: 1;\n  transition: all 500ms linear;\n}\n\n.item.fade-out {\n  transform: scaleY(0);\n  opacity: 0;\n}\n\n.item, .item label {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.item .label-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item .project-title {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.task-group {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-group h2 {\n  border-bottom: 2px solid var(--neutral-300);\n}\n\n.new-buttons-div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.new-buttons-div button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--accent);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  white-space: nowrap;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.datetime-display {\n  display: flex;\n  gap: 0.5rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: clamp(300px, 60%, 800px);\n  padding: 0.5rem 0;\n}\n\n.form input, textarea {\n  width: 100%;\n  border: 1px solid var(--neutral-300);\n  border-radius: 5px;\n  padding: 0.5rem;\n  font-family: inherit;\n  background-color: inherit;\n}\n\n.form input:focus, textarea:focus {\n  outline: 2px solid var(--alert);\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\ninput[type=\"submit\"]:focus, input[type=\"submit\"]:hover {\n  border: 1px solid var(--alert);\n  color: var(--alert);\n}\n\ninput[type=checkbox] {\n  accent-color: var(--alert);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.form button, .edit-project {\n  width: max-content;\n  text-transform: lowercase;\n  border: none;\n  background-color: transparent;\n}\n\n.form button:hover, \n.form button:focus, \n.edit-project:hover, \n.edit-project:focus {\n  color: var(--alert);\n}\n\n.edit-project {\n  font-size: 0.9rem;\n}\n\n.label-wrapper {\n  display: flex;\n  gap: 0.5rem;\n}\n\nselect {\n  margin-left: 0.5rem;\n}\n\n.warning {\n  display: none;\n  color: var(--alert);\n}\n\n.warning.show {\n  display: inline;\n}\n\n.button-div {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n\n.high {\n  color: var(--alert);\n}\n\n.icon {\n  height: 1.5rem;\n}\n\n.edit-button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  align-items: end;\n  padding: 0;\n}\n\n.nav-button-wrapper {\n  display: flex;\n  align-items: center; \n}\n\n.nav-button-wrapper .icon {\n  transform: translateY(-10%);\n}\n\n.small-icon {\n  height: 1rem;\n  transform: translateY(-10%);\n}\n\nselect {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: inherit;\n  line-height: inherit;\n  outline: none;\n}\n\n.select {\n  width: 100%;\n  min-width: 15ch;\n  border: 1px solid var(--neutral-300);\n  border-radius: 0.25em;\n  padding: 0.5em;\n  font-size: 1rem;\n  cursor: pointer;\n  background-color: transparent;\n  display: grid;\n  grid-template-areas: \"select\";\n  align-items: center;\n  position: relative;\n}\n\n.select::after {\n  content: \"\";\n  width: 0.8em;\n  height: 0.5em;\n  background-color: var(--alert);\n  clip-path: polygon(100% 0%, 0 0%, 50% 100%);\n  justify-self: end;\n}\n\nselect,\n.select:after {\n  grid-area: select;\n}\n\nselect:focus + .focus {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  border: 2px solid var(--alert);\n  border-radius: inherit;\n}\n\n@media only screen and (max-width: 550px) {\n  body {\n    grid-template-columns: 1fr;\n  }\n\n  main {\n    padding: 5vw;\n    grid-row: 1;\n  }\n\n  .nav {\n    height: max-content;\n    grid-row: 2;\n  }\n\n  .new-buttons-div {\n    flex-direction: column;\n  }\n\n  .item {\n    flex-wrap: wrap;\n    row-gap: 0.3rem;\n  }\n\n  .project-header {\n    display: flex;\n    align-items: center;\n    row-gap: 0.5rem;\n    column-gap: 1rem;\n    flex-wrap: wrap;\n  }\n}"],"sourceRoot":""}]);
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
      (0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.navComponent)(todos, document.querySelector('header'));
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

  const selectWrapper = document.createElement('div');
  selectWrapper.classList.add('select');

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

  selectWrapper.appendChild(field);
  fieldDiv.appendChild(fieldLabel);
  fieldDiv.appendChild(selectWrapper);

  return fieldDiv;
}

function createPrioritySelect(task, options) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('input-field');

  const selectWrapper = document.createElement('div');
  selectWrapper.classList.add('select');

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

  selectWrapper.appendChild(field);
  fieldDiv.appendChild(fieldLabel);
  fieldDiv.appendChild(selectWrapper);

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
      const warning = f.querySelector('.warning');
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
/* harmony import */ var _circle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./circle.svg */ "./src/circle.svg");









function navComponent(todos, parent) {
  //draws buttons to task views: today, upcoming, anytime, complete
  parent.textContent = ""
  const component = document.createElement('nav');
  component.classList.add('nav');

  //need a hambuger for the mobile layout...

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

    const title = document.createElement('h3');
    title.textContent = cat;
    projectDiv.appendChild(title);

    const sortedProjects = (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(projects.filter(elem => elem.getCategory() === cat));

    for (const p of sortedProjects) { 
      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add("nav-button-wrapper");
      const circleIcon = new Image();
      circleIcon.src = _circle_svg__WEBPACK_IMPORTED_MODULE_7__;
      circleIcon.classList.add("small-icon");
      buttonWrapper.appendChild(circleIcon);
      const projectItem = document.createElement('button');
      projectItem.classList.add("project-item");
      projectItem.textContent = p.getTitle();
      projectItem.dataset.id = `${p.getId()}`;
      buttonWrapper.appendChild(projectItem);
      projectDiv.appendChild(buttonWrapper);
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
  projectEdit.classList.add("edit-project");
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

  if (task.complete()) {
    check.checked = true;
  }

  check.addEventListener('change', (e) => {
    task.updateStatus();

    if (e.target.checked) {
      //except don't want this if in completed...
      const pageTitle = document.querySelector('h1');
      if (pageTitle.textContent !== "Completed") {
        const ancestorItem = e.target.closest(".item");
        ancestorItem.classList.add("fade-out");
      }
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

  const updateProject = (id, title, description, date, time, category) => {
    const project = getProjectById(id);
    project.setTitle(title);
    project.setDescription(description);
    project.setDate(date);
    project.setTime(time);
    project.setCategory(category);
  };

  const updateTask = (id, description, priority, date, time, category) => {
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

/***/ "./src/circle.svg":
/*!************************!*\
  !*** ./src/circle.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bed6c0eb32ecd4dbd31.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLGtCQUFrQjtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixPQUFPLFlBQVksT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLGdHQUFnRyxJQUFJLG1CQUFtQiwyQ0FBMkMsMkJBQTJCLEdBQUcsa0RBQWtELGNBQWMsZUFBZSxHQUFHLFNBQVMsb0JBQW9C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Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQjtBQUNhO0FBQ3BCOzs7QUFHakM7QUFDQSxjQUFjLDhDQUFJOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFZO0FBQ2Q7QUFDQSxFQUFFLGtFQUFjO0FBQ2hCLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NoZWR1bGFibGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N1YmNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2tzQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3SGVscGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogcmVzZXQgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5wLCBcbnNlY3Rpb24sXG5hcnRpY2xlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICBcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIGVuZCByZXNldCAqL1xuXG46cm9vdCB7XG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1uZXR1cmFsLTIwMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAtLW5ldXRyYWwtMzAwOiAjMjY0MTQzO1xuICAtLWFjY2VudDogI2U5OWY0YztcbiAgLS1hbGVydDogI2RlNTQ5OTtcblxuICBcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtMTAwKTtcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtMzAwKTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogM3JlbSAxMHZ3O1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDFyZW07XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBnYXA6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldHVyYWwtMjAwKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4IDAgMCAwO1xufVxuXG4ubmF2ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubmF2IC5wcm9qZWN0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgbGluZWFyO1xufVxuXG4uaXRlbS5mYWRlLW91dCB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaXRlbSwgLml0ZW0gbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5pdGVtIC5sYWJlbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW0gLnByb2plY3QtdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnRhc2stZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi50YXNrLWdyb3VwIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcbn1cblxuLm5ldy1idXR0b25zLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXctYnV0dG9ucy1kaXYgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBoZWlnaHQ6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5kYXRldGltZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNjAlLCA4MDBweCk7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuXG4uZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5mb3JtIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hbGVydCk7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hbGVydCk7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5mb3JtIGJ1dHRvbiwgLmVkaXQtcHJvamVjdCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0gYnV0dG9uOmhvdmVyLCBcbi5mb3JtIGJ1dHRvbjpmb2N1cywgXG4uZWRpdC1wcm9qZWN0OmhvdmVyLCBcbi5lZGl0LXByb2plY3Q6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG4uZWRpdC1wcm9qZWN0IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5sYWJlbC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbnNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi53YXJuaW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuLndhcm5pbmcuc2hvdyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhpZ2gge1xuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogMS41cmVtO1xufVxuXG4uZWRpdC1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2LWJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG59XG5cbi5uYXYtYnV0dG9uLXdyYXBwZXIgLmljb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59XG5cbi5zbWFsbC1pY29uIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59XG5cbnNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMWVtIDAgMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDE1Y2g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNlbGVjdFwiO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWxlY3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDAuOGVtO1xuICBoZWlnaHQ6IDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGVydCk7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAlLCAwIDAlLCA1MCUgMTAwJSk7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG5zZWxlY3QsXG4uc2VsZWN0OmFmdGVyIHtcbiAgZ3JpZC1hcmVhOiBzZWxlY3Q7XG59XG5cbnNlbGVjdDpmb2N1cyArIC5mb2N1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMXB4O1xuICBsZWZ0OiAtMXB4O1xuICByaWdodDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hbGVydCk7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgYm9keSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICBtYWluIHtcbiAgICBwYWRkaW5nOiA1dnc7XG4gICAgZ3JpZC1yb3c6IDE7XG4gIH1cblxuICAubmF2IHtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIGdyaWQtcm93OiAyO1xuICB9XG5cbiAgLm5ldy1idXR0b25zLWRpdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5pdGVtIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcm93LWdhcDogMC4zcmVtO1xuICB9XG5cbiAgLnByb2plY3QtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogMC41cmVtO1xuICAgIGNvbHVtbi1nYXA6IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLFVBQVU7QUFDVjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7O0VBT0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtHQUNDLHFCQUFxQjtFQUN0Qjs7RUFFQTs7O0lBR0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0VBQ2xD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aW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogcmVzZXQgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbnAsIFxcbnNlY3Rpb24sXFxuYXJ0aWNsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuICBcXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG4vKiBlbmQgcmVzZXQgKi9cXG5cXG46cm9vdCB7XFxuICAtLW5ldXRyYWwtMTAwOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLW5ldHVyYWwtMjAwOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAtLW5ldXRyYWwtMzAwOiAjMjY0MTQzO1xcbiAgLS1hY2NlbnQ6ICNlOTlmNGM7XFxuICAtLWFsZXJ0OiAjZGU1NDk5O1xcblxcbiAgXFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLTEwMCk7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC0zMDApO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAzcmVtIDEwdnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV0dXJhbC0yMDApO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgMDtcXG59XFxuXFxuLm5hdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXYgLnByb2plY3QtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgbGluZWFyO1xcbn1cXG5cXG4uaXRlbS5mYWRlLW91dCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5pdGVtLCAuaXRlbSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLml0ZW0gLmxhYmVsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbSAucHJvamVjdC10aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50YXNrLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGFzay1ncm91cCBoMiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5ldy1idXR0b25zLWRpdiBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGF0ZXRpbWUtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDYwJSwgODAwcHgpO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi5mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmZvcm0gaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hbGVydCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cywgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWxlcnQpO1xcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4uZm9ybSBidXR0b24sIC5lZGl0LXByb2plY3Qge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZm9ybSBidXR0b246aG92ZXIsIFxcbi5mb3JtIGJ1dHRvbjpmb2N1cywgXFxuLmVkaXQtcHJvamVjdDpob3ZlciwgXFxuLmVkaXQtcHJvamVjdDpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubGFiZWwtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbnNlbGVjdCB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLndhcm5pbmcuc2hvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWdoIHtcXG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uZWRpdC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG59XFxuXFxuLm5hdi1idXR0b24td3JhcHBlciAuaWNvbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbi5zbWFsbC1pY29uIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMWVtIDAgMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjdXJzb3I6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDE1Y2g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJzZWxlY3RcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlbGVjdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC44ZW07XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQpO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCUsIDAgMCUsIDUwJSAxMDAlKTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5zZWxlY3QsXFxuLnNlbGVjdDphZnRlciB7XFxuICBncmlkLWFyZWE6IHNlbGVjdDtcXG59XFxuXFxuc2VsZWN0OmZvY3VzICsgLmZvY3VzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTFweDtcXG4gIGxlZnQ6IC0xcHg7XFxuICByaWdodDogLTFweDtcXG4gIGJvdHRvbTogLTFweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiA1dnc7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgfVxcblxcbiAgLm5ldy1idXR0b25zLWRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuaXRlbSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcm93LWdhcDogMC4zcmVtO1xcbiAgfVxcblxcbiAgLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMC41cmVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvamVjdENvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgbmF2Q29tcG9uZW50IH0gZnJvbSBcIi4vbmF2LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCBwcm9qZWN0ID0gbnVsbCkge1xuICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcG9uZW50LmlkID0gXCJmb3JtXCI7XG4gIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCB0aXRsZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQocHJvamVjdCwgXCJ0aXRsZVwiLCBcInRleHRcIiwgXCJUaXRsZTogKlwiLCBcIlByb2plY3QgbXVzdCBoYXZlIGEgdGl0bGUuXCIpO1xuICBmLmFwcGVuZENoaWxkKHRpdGxlRmllbGQpO1xuXG4gIGNvbnN0IGNhdGVnb3J5RmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChwcm9qZWN0LCBcImNhdGVnb3J5XCIsIFwidGV4dFwiLCBcIkNhdGVnb3J5OlwiLCBcIlwiKVxuICBmLmFwcGVuZENoaWxkKGNhdGVnb3J5RmllbGQpO1xuXG4gIGNvbnN0IGRhdGVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHByb2plY3QsIFwiZGF0ZVwiLCBcImRhdGVcIiwgXCJEZWFkbGluZTpcIiwgXCJcIik7XG4gIGYuYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkKTtcblxuICBjb25zdCB0aW1lRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChwcm9qZWN0LCBcInRpbWVcIiwgXCJ0aW1lXCIsIFwiVGltZTpcIiwgXCJcIik7XG4gIGYuYXBwZW5kQ2hpbGQodGltZUZpZWxkKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZVRleHRhcmVhKHByb2plY3QsIFwiZGVzY3JpcHRpb25cIiwgXCJEZXNjcmlwdGlvbjpcIik7XG4gIGYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBmLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1kaXYnKTtcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgaWYgKHByb2plY3QpIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpOyAvL3dpbGwgbWFrZSB0aGlzIHNtYWxsXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZG9zLmRlbGV0ZVByb2plY3QocHJvamVjdC5nZXRJZCgpKTtcbiAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBcIkFsbFwiLCBwYXJlbnQpOyAvL3dhbnQgdG8gZ28gdG8gXCJob21lXCIgKyBhbHNvIG5lZWQgdG8gcmVkcmF3IG5hdiFcbiAgICAgIG5hdkNvbXBvbmVudCh0b2RvcywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykpO1xuICAgIH0pO1xuICB9XG5cbiAgZi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcblxuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZik7XG4gIG5vZGVUb1JlcGxhY2UucmVwbGFjZVdpdGgoY29tcG9uZW50KTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlSW5wdXQoW3RpdGxlRmllbGRdKTtcbiAgICBpZiAoIXZhbGlkYXRlcykgcmV0dXJuOyBcblxuICAgIGNvbnNvbGUubG9nKFwidGl0bGUgdmFsdWU6XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSk7XG5cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgdG9kb3MudXBkYXRlUHJvamVjdChcbiAgICAgICAgcHJvamVjdC5nZXRJZCgpLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBcbiAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3QuZ2V0SWQoKSwgcGFyZW50KTtcbiAgICB9XG4gICAgZWxzZSB7IFxuICAgICAgY29uc3QgcHJvamVjdElkID0gdG9kb3MuY3JlYXRlUHJvamVjdChcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SWQsIHBhcmVudCk7XG4gICAgICBuYXZDb21wb25lbnQodG9kb3MsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsIGJ1dHRvbiBjbGlja2VkXCIsIG5vZGVUb1JlcGxhY2UpO1xuICAgIGNvbXBvbmVudC5yZXBsYWNlV2l0aChub2RlVG9SZXBsYWNlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBwcm9qZWN0SUQsIHRhc2sgPSBudWxsKSB7XG4gIGNvbnNvbGUubG9nKFwiVEFTS1wiLCB0YXNrKTtcbiAgY29uc29sZS5sb2coXCJQUk9KRUNUIElEXCIsIHByb2plY3RJRCk7XG5cbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBvbmVudC5pZCA9IFwiZm9ybVwiO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVTaW1wbGVJbnB1dCh0YXNrLCBcImRlc2NyaXB0aW9uXCIsIFwidGV4dFwiLCBcIlRhc2s6ICpcIiwgXCJNdXN0IGhhdmUgdGFzay5cIik7XG4gIGYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIC8vaWYgeW91IGNhbWUgZnJvbSBhIHByb2plY3QncyBwYWdlLCB3b3VsZCBleHBlY3QgdGhhdCB0aGF0IHByb2plY3QgaXMgdGhlIHByb2plY3QgZm9yIHRoZSB0YXNrLlxuICAvL2luIHRoYXQgY2FzZSwgd291bGQgd2FudCBhIGhpZGRlbiBmaWVsZCB3aXRoIHByb2plY3RpZCB2YWx1ZVxuICBpZiAoIXRhc2sgJiYgIXByb2plY3RJRCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gdG9kb3MuZ2V0UHJvamVjdHMoKTsgXG4gICAgY29uc3QgcHJvamVjdElkRmllbGQgPSBjcmVhdGVQcm9qZWN0U2VsZWN0KHRhc2ssIHByb2plY3RzKTtcbiAgICBmLmFwcGVuZENoaWxkKHByb2plY3RJZEZpZWxkKTtcbiAgfVxuICBlbHNlIGlmICghdGFzayAmJiBwcm9qZWN0SUQpIHtcbiAgICBjb25zdCBwcm9qZWN0SWRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0SWRGaWVsZC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICBwcm9qZWN0SWRGaWVsZC52YWx1ZSA9IHByb2plY3RJRDtcbiAgICBwcm9qZWN0SWRGaWVsZC5pZCA9IFwicHJvamVjdFwiO1xuICAgIGYuYXBwZW5kQ2hpbGQocHJvamVjdElkRmllbGQpO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVQcmlvcml0eVNlbGVjdCh0YXNrLCBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdKTtcbiAgZi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQodGFzaywgXCJkYXRlXCIsIFwiZGF0ZVwiLCBcIkRlYWRsaW5lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xuXG4gIGNvbnN0IHRpbWVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KHRhc2ssIFwidGltZVwiLCBcInRpbWVcIiwgXCJUaW1lOlwiLCBcIlwiKTtcbiAgZi5hcHBlbmRDaGlsZCh0aW1lRmllbGQpO1xuXG4gIGNvbnN0IGNhdGVnb3J5RmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dCh0YXNrLCBcImNhdGVnb3J5XCIsIFwidGV4dFwiLCBcIkNhdGVnb3J5OlwiKTtcbiAgZi5hcHBlbmRDaGlsZChjYXRlZ29yeUZpZWxkKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b24tZGl2Jyk7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gIGlmICh0YXNrKSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codG9kb3MuZ2V0VGFza3MoKSk7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2sgaWQgdG8gZGVsZXRlXCIsIHRhc2suZ2V0SWQoKSk7XG5cbiAgICAgIHRvZG9zLmRlbGV0ZVRhc2sodGFzay5nZXRJZCgpKTtcblxuICAgICAgY29uc29sZS5sb2codG9kb3MuZ2V0VGFza3MoKSk7XG5cbiAgICAgIGlmICh0YXNrU3Vic2V0KSB7XG4gICAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCB0YXNrU3Vic2V0LCBwYXJlbnQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3RJRCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKGYpO1xuICBub2RlVG9SZXBsYWNlLnJlcGxhY2VXaXRoKGNvbXBvbmVudCk7XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZUlucHV0KFtkZXNjcmlwdGlvbl0pO1xuICAgIGlmICghdmFsaWRhdGVzKSByZXR1cm47IFxuXG4gICAgY29uc3QgY2F0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgY2F0ID0gY2F0SW5wdXQgPT09IFwiXCIgPyBcInVuY2F0ZWdvcml6ZWRcIiA6IGNhdElucHV0O1xuICAgIGNvbnNvbGUubG9nKFwiY2F0XCIsIGNhdCk7XG5cbiAgICBpZiAodGFzaykge1xuICAgICAgdG9kb3MudXBkYXRlVGFzayhcbiAgICAgICAgdGFzay5nZXRJZCgpLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSwgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsIFxuICAgICAgICBjYXQudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIFxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRvZG9zLmNyZWF0ZVRhc2soXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLCBcbiAgICAgICAgcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLCBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS52YWx1ZSwgXG4gICAgICAgIGNhdC50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBub1Rhc2tNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vLXRhc2stbWVzc2FnZScpO1xuICAgICAgaWYgKG5vVGFza01lc3NhZ2UpIHtcbiAgICAgICAgbm9UYXNrTWVzc2FnZS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcG9uZW50LnJlcGxhY2VXaXRoKG5vZGVUb1JlcGxhY2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2ltcGxlSW5wdXQoZWxlbSwgaWQsIHR5cGUsIGxhYmVsVGV4dCwgd2FybmluZykge1xuICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZCcpO1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZmllbGQudHlwZSA9IHR5cGU7XG4gIGZpZWxkLmlkID0gaWQ7XG5cbiAgaWYgKGVsZW0pIHtcbiAgICBjb25zb2xlLmxvZyhgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWApO1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCB2YWx1ZTogXCIsIGZpZWxkLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGxhYmVsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGFiZWwtd3JhcHBlcicpO1xuXG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICBmaWVsZExhYmVsLmh0bWxGb3IgPSBpZDtcblxuICBjb25zdCBub3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGljZS50ZXh0Q29udGVudCA9IHdhcm5pbmc7XG4gIG5vdGljZS5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG5cbiAgbGFiZWxXcmFwcGVyLmFwcGVuZENoaWxkKGZpZWxkTGFiZWwpO1xuICBsYWJlbFdyYXBwZXIuYXBwZW5kQ2hpbGQobm90aWNlKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQobGFiZWxXcmFwcGVyKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gIHJldHVybiBmaWVsZERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlbGVjdCh0YXNrLCBvcHRpb25zKSB7XG4gIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkJyk7XG5cbiAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWxlY3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdCcpO1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGZpZWxkLmlkID0gXCJwcm9qZWN0XCI7XG5cbiAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG4gIGZpZWxkTGFiZWwuaHRtbEZvciA9IFwicHJvamVjdFwiO1xuXG4gIGNvbnN0IG5vbmVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbm9uZU9wdGlvbi52YWx1ZSA9IDA7XG4gIG5vbmVPcHRpb24udGV4dENvbnRlbnQgPSBcIk5vbmVcIjtcbiAgaWYgKCF0YXNrKSB7XG4gICAgbm9uZU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gIH1cbiAgZmllbGQuYXBwZW5kQ2hpbGQobm9uZU9wdGlvbik7XG5cbiAgZm9yIChjb25zdCBvcHQgb2Ygb3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdE9wdGlvbi52YWx1ZSA9IG9wdC5nZXRJZCgpO1xuICAgIHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9wdC5nZXRUaXRsZSgpO1xuICAgIGlmICh0YXNrICYmIHRhc2suZ2V0UHJvamVjdElkKCkgPT09IG9wdC5nZXRJZCgpKSB7XG4gICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBmaWVsZC5hcHBlbmRDaGlsZChzZWxlY3RPcHRpb24pO1xuICB9XG5cbiAgc2VsZWN0V3JhcHBlci5hcHBlbmRDaGlsZChmaWVsZCk7XG4gIGZpZWxkRGl2LmFwcGVuZENoaWxkKGZpZWxkTGFiZWwpO1xuICBmaWVsZERpdi5hcHBlbmRDaGlsZChzZWxlY3RXcmFwcGVyKTtcblxuICByZXR1cm4gZmllbGREaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5U2VsZWN0KHRhc2ssIG9wdGlvbnMpIHtcbiAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmllbGREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmllbGQnKTtcblxuICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlbGVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0Jyk7XG5cbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgZmllbGQuaWQgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICBmaWVsZExhYmVsLmh0bWxGb3IgPSBcInByaW9yaXR5XCI7XG5cbiAgZm9yIChjb25zdCBvcHQgb2Ygb3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdE9wdGlvbi52YWx1ZSA9IG9wdDtcbiAgICBzZWxlY3RPcHRpb24udGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgaWYgKHRhc2sgJiYgb3B0ID09PSB0YXNrLmdldFByaW9yaXR5KCkpIHtcbiAgICAgIHNlbGVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGZpZWxkLmFwcGVuZENoaWxkKHNlbGVjdE9wdGlvbik7XG4gIH1cblxuICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGRMYWJlbCk7XG4gIGZpZWxkRGl2LmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xuXG4gIHJldHVybiBmaWVsZERpdjsgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0YXJlYShlbGVtLCBpZCwgbGFiZWxUZXh0KSB7XG4gIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkJyk7XG5cbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBmaWVsZC5pZCA9IGlkO1xuXG4gIGlmIChlbGVtKSB7XG4gICAgZmllbGQudmFsdWUgPSBlbGVtW2BnZXQke2lkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaWQuc2xpY2UoMSl9YF0oKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIHZhbHVlOiBcIiwgZmllbGQudmFsdWUpO1xuICB9XG5cbiAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIGZpZWxkTGFiZWwuaHRtbEZvciA9IGlkO1xuXG4gIGZpZWxkRGl2LmFwcGVuZENoaWxkKGZpZWxkTGFiZWwpO1xuICBmaWVsZERpdi5hcHBlbmRDaGlsZChmaWVsZCk7XG5cbiAgcmV0dXJuIGZpZWxkRGl2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGZpZWxkcykge1xuICBsZXQgZ29vZCA9IHRydWU7XG4gIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICBjb25zdCBpbnB1dCA9IGYucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBjb25zdCB3YXJuaW5nID0gZi5xdWVyeVNlbGVjdG9yKCcud2FybmluZycpO1xuICAgICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICBnb29kID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBnb29kO1xufSIsImltcG9ydCB7IG9yZGVyQnlEYXRlLCBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IHRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3NDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IHByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9qZWN0Q29tcG9uZW50LmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9mb3JtYXQtbGlzdC1idWxsZXRlZC5zdmdcIjtcbmltcG9ydCBBbGFybSBmcm9tIFwiLi9hbGFybS5zdmdcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi9jYWxlbmRhci1tb250aC5zdmdcIjtcbmltcG9ydCBDaGVjayBmcm9tIFwiLi9jaGVjay1jaXJjbGUuc3ZnXCI7XG5pbXBvcnQgQ2lyY2xlIGZyb20gXCIuL2NpcmNsZS5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdkNvbXBvbmVudCh0b2RvcywgcGFyZW50KSB7XG4gIC8vZHJhd3MgYnV0dG9ucyB0byB0YXNrIHZpZXdzOiB0b2RheSwgdXBjb21pbmcsIGFueXRpbWUsIGNvbXBsZXRlXG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCJcbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAvL25lZWQgYSBoYW1idWdlciBmb3IgdGhlIG1vYmlsZSBsYXlvdXQuLi5cblxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGFza3NUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcbiAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza3NUaXRsZSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFsnQWxsJywgJ1RvZGF5JywgJ1VwY29taW5nJywgJ0NvbXBsZXRlZCddO1xuICBjb25zdCBhbGwgPSBuZXcgSW1hZ2UoKTtcbiAgYWxsLnNyYyA9IExpc3Q7XG4gIGFsbC5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgSW1hZ2UoKTtcbiAgdG9kYXkuc3JjID0gQWxhcm07XG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICBjb25zdCB1cCA9IG5ldyBJbWFnZSgpO1xuICB1cC5zcmMgPSBDYWxlbmRhcjtcbiAgdXAuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gIGNvbnN0IGNvbXAgPSBuZXcgSW1hZ2UoKTtcbiAgY29tcC5zcmMgPSBDaGVjaztcbiAgY29tcC5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblxuICBjb25zdCBpY29ucyA9IFthbGwsIHRvZGF5LCB1cCwgY29tcF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSArKykge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uLXdyYXBwZXJcIik7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChpY29uc1tpXSk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gYnV0dG9uc1tpXTtcbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG4gIH1cblxuICBhZGRUYXNrTGlzdGVuZXIodGFza3NEaXYsIHRvZG9zKTtcbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcblxuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0c0RpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcHJvamVjdHNEaXZUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXZUaXRsZSk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSB0b2Rvcy5nZXRQcm9qZWN0cygpO1xuXG4gIGZvciAoY29uc3QgY2F0IG9mIGdldENhdGVnb3JpZXMocHJvamVjdHMpKSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kaXYnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNhdDtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHNvcnRlZFByb2plY3RzID0gb3JkZXJCeURhdGUocHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpID09PSBjYXQpKTtcblxuICAgIGZvciAoY29uc3QgcCBvZiBzb3J0ZWRQcm9qZWN0cykgeyBcbiAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b24td3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IGNpcmNsZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGNpcmNsZUljb24uc3JjID0gQ2lyY2xlO1xuICAgICAgY2lyY2xlSWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGwtaWNvblwiKTtcbiAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY2lyY2xlSWNvbik7XG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gcC5nZXRUaXRsZSgpO1xuICAgICAgcHJvamVjdEl0ZW0uZGF0YXNldC5pZCA9IGAke3AuZ2V0SWQoKX1gO1xuICAgICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICAgIH1cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfVxuXG4gIGFkZFByb2plY3RMaXN0ZW5lcihwcm9qZWN0c0RpdiwgdG9kb3MpO1xuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gIC8vZHJhd3MgZWFjaCBjYXRlZ29yeSBvZiBwcm9qZWN0LCB3aXRoIHByb2plY3RzIGZyb20gdGhhdCBjYXRlZ29yeSBsaXN0ZWQgKGluIG9yZGVyIG9mIGRhdGUpXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrTGlzdGVuZXIoYnV0dG9uRGl2LCB0b2Rvcykge1xuICBidXR0b25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgZS50YXJnZXQudGV4dENvbnRlbnQsIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICBcbiAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaWQpLCBjb250ZW50KTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IFNjaGVkdWxhYmxlIH0gZnJvbSBcIi4vc2NoZWR1bGFibGUuanNcIjtcblxuZXhwb3J0IGNvbnN0IFByb2plY3QgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpID0+IHtcbiAgY29uc3Qgc2NoZWR1bGFibGUgPSBTY2hlZHVsYWJsZShkYXRlLCB0aW1lKTtcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldENhdGVnb3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yeTtcbiAgfTtcblxuICBjb25zdCBzZXRDYXRlZ29yeSA9IChuZXdDYXRlZ29yeSkgPT4ge1xuICAgIGNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zY2hlZHVsYWJsZSxcbiAgICBnZXRJZCxcbiAgICBnZXRUaXRsZSxcbiAgICBzZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBnZXRDYXRlZ29yeSxcbiAgICBzZXRDYXRlZ29yeVxuICB9O1xufTsiLCJpbXBvcnQgeyBvcmRlckJ5RGF0ZSwgZ2V0Q2F0ZWdvcmllcywgZ2VuZXJhdGVUYXNrSXRlbUlkIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tHcm91cCwgY3JlYXRlVGFza0l0ZW0sIGFkZE5ld0Zvcm1CdG5zIH0gZnJvbSBcIi4vc3ViY29tcG9uZW50cy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdEZvcm1Db21wb25lbnQsIHRhc2tGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElkLCBwYXJlbnQpIHtcbiAgcGFyZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBvbmVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZ2V0VGl0bGUoKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpLmRhdGVGb3JtYXR0ZWQoKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGRhdGVEaXNwbGF5KTtcblxuICBjb25zdCBwcm9qZWN0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0RWRpdC5pZCA9IFwiZWRpdC1wcm9qZWN0XCI7XG4gIHByb2plY3RFZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXByb2plY3RcIik7XG4gIHByb2plY3RFZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnOyBcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RFZGl0KTtcblxuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBkID0gdG9kb3MuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKS5nZXREZXNjcmlwdGlvbigpO1xuICBpZiAoZCAhPT0gXCJcIikge1xuICAgIGNvbnN0IGRlc2NyaXB0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdERpc3BsYXkudGV4dENvbnRlbnQgPSBkO1xuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChkZXNjcmlwdERpc3BsYXkpO1xuICB9XG5cbiAgY29uc3QgbmV3Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3doZXJlIG5ldyBmb3JtIHdpbGwgZ28gb24gcGFnZSBpZiBidXR0b24gaXMgcHJlc3NlZFxuICBuZXdGb3JtRGl2LmlkID0gXCJmb3JtXCI7XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChuZXdGb3JtRGl2KTsgXG5cbiAgYWRkTmV3Rm9ybUJ0bnMocGFyZW50KTtcblxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgY29uc3QgdGFza3MgPSB0b2Rvcy5nZXRUYXNrc0J5UHJvamVjdElkKHByb2plY3RJZCk7IC8vdGhpcyBpcyBib3RoIGNvbXBsZXRlZCBhbmQgbm90XG5cbiAgZm9yIChjb25zdCBjYXQgb2YgZ2V0Q2F0ZWdvcmllcyh0YXNrcykpIHsgXG4gICAgLy9jcmVhdGUgdGFzayBncm91cCBcbiAgICBjb25zdCBncm91cCA9IGNyZWF0ZVRhc2tHcm91cChjYXQpO1xuICAgIC8vbm93IGxpc3QgdGhlIHRhc2tzIGZvciBlYWNoIGNhdGVnb3J5XG4gICAgY29uc3Qgc29ydGVkVGFza3MgPSBvcmRlckJ5RGF0ZSh0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldENhdGVnb3J5KCkgPT09IGNhdCkpO1xuXG4gICAgZm9yIChjb25zdCB0IG9mIHNvcnRlZFRhc2tzKSB7XG4gICAgICBjb25zdCBpdGVtID0gY3JlYXRlVGFza0l0ZW0odG9kb3MsIHQsIHRydWUpO1xuICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICB9XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG5cbiAgYWRkQnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHByb2plY3RJZCk7XG59XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCBwcm9qZWN0SWQpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuXG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zKTtcbiAgfSk7XG5cbiAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgZm9ybURpdiwgdG9kb3MsIG51bGwsIHByb2plY3RJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdCcpO1xuICBwcm9qZWN0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgZm9ybURpdiwgdG9kb3MsIHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkpO1xuICB9KTtcblxuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWJ1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRCdG5zLmxlbmd0aDsgaSArKyl7XG4gICAgZWRpdEJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2VuZXJhdGVUYXNrSXRlbUlkKGUudGFyZ2V0LmRhdGFzZXQudGFza0lkKSk7XG4gICAgICBjb25zdCB0YXNrID0gdG9kb3MuZ2V0VGFza0J5SWQocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC50YXNrSWQpKTtcbiAgICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgdGFza0RpdiwgdG9kb3MsIG51bGwsIHByb2plY3RJZCwgdGFzayk7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwiZXhwb3J0IGNvbnN0IFNjaGVkdWxhYmxlID0gKGRhdGUsIHRpbWUpID0+IHtcbiAgY29uc3QgZ2V0RGF0ZUFzRGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoZGF0ZSA9PT0gXCJcIikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IHRpbWUgPT09IFwiXCIgPyBcIlQyMzo1OTo1OVwiIDogXCJUXCIgKyB0aW1lICsgXCI6MDBcIjtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSArIHRpbWVTdHJpbmcpO1xuICB9O1xuXG4gIGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGUgPT09IFwiXCIpIHJldHVybiBkYXRlO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZVs1XSA9PT0gXCIwXCIgPyBkYXRlLnNsaWNlKDYsIDcpIDogZGF0ZS5zbGljZSg1LCA3KTtcbiAgICBjb25zdCBkYXkgPSBkYXRlWzhdID09PSBcIjBcIiA/IGRhdGUuc2xpY2UoOSkgOiBkYXRlLnNsaWNlKDgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLnNsaWNlKDAsIDQpO1xuXG4gICAgcmV0dXJuIG1vbnRoICsgXCIvXCIgKyBkYXkgKyBcIi9cIiArIHllYXI7XG4gIH07XG5cbiAgY29uc3QgdGltZUZvcm1hdHRlZCA9ICgpID0+IHtcbiAgICBpZiAodGltZSA9PT0gXCJcIikgcmV0dXJuIHRpbWU7XG4gICAgbGV0IGhvdXIgPSBwYXJzZUludCh0aW1lLnNsaWNlKDAsIDIpKTtcbiAgICBjb25zdCBtaW4gPSB0aW1lLnNsaWNlKDIpO1xuICAgIGNvbnN0IG0gPSBob3VyID49IDEyID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIGhvdXIgPSBob3VyID4gMTIgPyBob3VyIC0gMTIgOiBob3VyO1xuICAgIHJldHVybiBgJHtob3VyfSR7bWlufSAke219YDtcbiAgfTtcblxuICAvL2Fsc28gbmVlZCBzZXQgZGF0ZSwgdGltZSBmb3IgZWRpdGluZ1xuXG4gIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgIGRhdGUgPSBuZXdEYXRlO1xuICB9O1xuXG4gIGNvbnN0IHNldFRpbWUgPSAobmV3VGltZSkgPT4ge1xuICAgIHRpbWUgPSBuZXdUaW1lO1xuICB9O1xuXG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cblxuICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREYXRlQXNEYXRlLFxuICAgIGRhdGVGb3JtYXR0ZWQsXG4gICAgdGltZUZvcm1hdHRlZCxcbiAgICBzZXREYXRlLFxuICAgIHNldFRpbWUsXG4gICAgZ2V0VGltZSxcbiAgICBnZXREYXRlXG4gIH07XG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVUYXNrSXRlbUlkIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCBQbHVzIGZyb20gXCIuL3BsdXMuc3ZnXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi9pbmZvcm1hdGlvbi1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0dyb3VwKGdyb3VwVGl0bGUpIHtcbiAgY29uc3QgZ3JvdXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGdyb3VwVGl0bGU7XG4gIGdyb3VwRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZ3JvdXBEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1ncm91cCcpO1xuXG4gIHJldHVybiBncm91cERpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKHRvZG9zLCB0YXNrLCBpbmNsdWRlRGF0ZSA9IGZhbHNlKSB7XG4gIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIGl0ZW1EaXYuaWQgPSBnZW5lcmF0ZVRhc2tJdGVtSWQodGFzay5nZXRJZCgpKTtcblxuICBjb25zdCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnOyBcblxuICBpZiAodGFzay5jb21wbGV0ZSgpKSB7XG4gICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIHRhc2sudXBkYXRlU3RhdHVzKCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgLy9leGNlcHQgZG9uJ3Qgd2FudCB0aGlzIGlmIGluIGNvbXBsZXRlZC4uLlxuICAgICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgICAgIGlmIChwYWdlVGl0bGUudGV4dENvbnRlbnQgIT09IFwiQ29tcGxldGVkXCIpIHtcbiAgICAgICAgY29uc3QgYW5jZXN0b3JJdGVtID0gZS50YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpO1xuICAgICAgICBhbmNlc3Rvckl0ZW0uY2xhc3NMaXN0LmFkZChcImZhZGUtb3V0XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGJsLmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICBjb25zdCBsYWJlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxhYmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibGFiZWwtY29udGVudFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG4gIGxhYmVsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgaWYgKHRhc2suZ2V0UHJvamVjdElkKCkgPiAwKSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRvZG9zLmdldFByb2plY3RCeUlkKHRhc2suZ2V0UHJvamVjdElkKCkpLmdldFRpdGxlKCk7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBsYWJlbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgfVxuXG4gIGxibC5hcHBlbmRDaGlsZChsYWJlbENvbnRlbnQpO1xuXG4gIGl0ZW1EaXYuYXBwZW5kQ2hpbGQobGJsKTtcblxuICBpZiAodGFzay50aW1lRm9ybWF0dGVkKCkgIT09IFwiXCIpIHtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZXRpbWUtZGlzcGxheVwiKTtcblxuICAgIGlmIChpbmNsdWRlRGF0ZSkge1xuICAgICAgY29uc3QgZGF0ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBkYXRlQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2suZGF0ZUZvcm1hdHRlZCgpO1xuICAgICAgdGltZS5hcHBlbmRDaGlsZChkYXRlQ29udGVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGltZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGltZUNvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpbWVGb3JtYXR0ZWQoKTsgXG4gICAgdGltZS5hcHBlbmRDaGlsZCh0aW1lQ29udGVudCk7XG5cbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICB9XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ1dHRvblwiKTtcbiAgZWRpdC5kYXRhc2V0LnRhc2tJZCA9IGAke3Rhc2suZ2V0SWQoKX1gOyAvL3RvIGJlIHVzZWQgaW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB1cGRhdGVzIHRhc2tcblxuICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBlZGl0SWNvbi5zcmMgPSBJbmZvO1xuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgZWRpdEljb24uZGF0YXNldC50YXNrSWQgPSBgJHt0YXNrLmdldElkKCl9YDtcbiAgZWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gIFxuICBpdGVtRGl2LmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gIGlmICh0YXNrLmdldFByaW9yaXR5KCkgPT09ICdoaWdoJykge1xuICAgIGNvbnN0IHByaW9ydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IC8vY2hhbmdlIHRvIGljb24/XG4gICAgcHJpb3J0eS50ZXh0Q29udGVudCA9IFwiIVwiO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJpb3J0eSk7XG4gIH1cblxuICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQodGFzay5nZXRQcmlvcml0eSgpKTtcblxuICByZXR1cm4gaXRlbURpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0Zvcm1CdG5zKHBhcmVudCkge1xuICBjb25zdCBuZXdGb3JtQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdGb3JtQnRuc0Rpdi5jbGFzc0xpc3QuYWRkKCduZXctYnV0dG9ucy1kaXYnKTtcblxuICBjb25zdCBwbHVzSWNvbjEgPSBuZXcgSW1hZ2UoKTtcbiAgcGx1c0ljb24xLnNyYyA9IFBsdXM7XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0LmlkID0gXCJuZXctcHJvamVjdFwiO1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHBsdXNJY29uMSk7XG4gIGNvbnN0IHBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwY29weS50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwY29weSk7XG5cbiAgbmV3Rm9ybUJ0bnNEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbiAgY29uc3QgcGx1c0ljb24yID0gbmV3IEltYWdlKCk7XG4gIHBsdXNJY29uMi5zcmMgPSBQbHVzO1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3VGFzay5pZCA9IFwibmV3LXRhc2tcIjsgXG4gIG5ld1Rhc2suYXBwZW5kQ2hpbGQocGx1c0ljb24yKTtcbiAgY29uc3QgdGFza2NvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRhc2tjb3B5LnRleHRDb250ZW50ID0gXCJOZXcgVGFza1wiO1xuICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tjb3B5KTtcbiAgXG4gIG5ld0Zvcm1CdG5zRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChuZXdGb3JtQnRuc0Rpdik7XG59IiwiaW1wb3J0IHsgU2NoZWR1bGFibGUgfSBmcm9tIFwiLi9zY2hlZHVsYWJsZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgVGFzayA9IChpZCwgZGVzY3JpcHRpb24sIHByb2plY3RJZCwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5ID0gXCJtaXNjXCIpID0+IHtcbiAgY29uc3Qgc2NoZWR1bGFibGUgPSBTY2hlZHVsYWJsZShkYXRlLCB0aW1lKTtcblxuICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfTtcblxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSAobmV3Q2F0ZWdvcnkpID0+IHtcbiAgICBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnNjaGVkdWxhYmxlLFxuICAgIGdldElkLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIGdldFByb2plY3RJZCxcbiAgICBnZXRDYXRlZ29yeSxcbiAgICBzZXRDYXRlZ29yeSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBjb21wbGV0ZSxcbiAgICB1cGRhdGVTdGF0dXNcbiAgfTtcbn07IiwiaW1wb3J0IHsgb3JkZXJCeURhdGUsIHNhbWVEYXksIGdldERpdlRpdGxlLCBnZW5lcmF0ZVRhc2tJdGVtSWQgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0dyb3VwLCBjcmVhdGVUYXNrSXRlbSwgYWRkTmV3Rm9ybUJ0bnMgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0Rm9ybUNvbXBvbmVudCwgdGFza0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCkge1xuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IHRhc2tzID0gdG9kb3NbYGdldCR7dGFza1N1YnNldH1UYXNrc2BdKCk7XG5cbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdjb21wb25lbnQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1N1YnNldCA9PT0gXCJUb2RheVwiID8gXCJUYXNrc1wiIDogdGFza1N1YnNldDtcblxuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IG5ld0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy93aGVyZSBuZXcgZm9ybSB3aWxsIGdvIG9uIHBhZ2UgaWYgYnV0dG9uIGlzIHByZXNzZWRcbiAgbmV3Rm9ybURpdi5pZCA9IFwiZm9ybVwiO1xuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobmV3Rm9ybURpdik7IFxuXG4gIGFkZE5ld0Zvcm1CdG5zKHBhcmVudCk7XG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS5pZCA9XCJuby10YXNrcy1tZXNzYWdlXCI7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTm8gdGFza3NcIjtcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc29ydGVkVGFza3MgPSBvcmRlckJ5RGF0ZSh0YXNrcyk7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgbGV0IGN1cnJEYXRlID0gc29ydGVkVGFza3NbMF0uZ2V0RGF0ZUFzRGF0ZSgpO1xuICBsZXQgY3VyckRpdiA9IGNyZWF0ZVRhc2tHcm91cChnZXREaXZUaXRsZShjdXJyRGF0ZSkpO1xuXG4gIGZvciAoY29uc3QgdCBvZiBzb3J0ZWRUYXNrcykge1xuICAgIGNvbnNvbGUubG9nKFwidGFzayBpczpcIiwgdCwgdC5nZXREZXNjcmlwdGlvbigpKTtcbiAgICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZVRhc2tJdGVtKHRvZG9zLCB0KTsgXG5cbiAgICBpZiAoc2FtZURheSh0LmdldERhdGVBc0RhdGUoKSwgY3VyckRhdGUpKSB7XG4gICAgICAvL2FwcGVuZCB0byB0aGUgY3VycmVudCBkaXZcbiAgICAgIGN1cnJEaXYuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vZG9uZSB3aXRoIHRoYXQgZ3JvdXBcbiAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGN1cnJEaXYpO1xuICAgICAgLy9jcmVhdGUgYSBuZXcgZ3JvdXBcbiAgICAgIGN1cnJEYXRlID0gdC5nZXREYXRlQXNEYXRlKCk7XG4gICAgICBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKGdldERpdlRpdGxlKGN1cnJEYXRlKSk7XG4gICAgICAvL2FuZCB0aGVuIGFwcGVuZCwgdGFza0l0ZW0gdG8gdGhlIG5ldyBncm91cFxuICAgICAgY3VyckRpdi5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgfVxuICB9XG4gIHRhc2tzRGl2LmFwcGVuZENoaWxkKGN1cnJEaXYpOyAvL2FwcGVuZCB3aGF0ZXZlciB0aGUgbGFzdCBvbmUgd2FzXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuXG4gIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCB0YXNrU3Vic2V0KTtcbn1cblxuZnVuY3Rpb24gYWRkQnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHRhc2tTdWJzZXQpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG5cbiAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5vZGVUb1JlcGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MpO1xuICB9KTtcblxuICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG4gICAgdGFza0Zvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2RvcywgdGFza1N1YnNldCwgbnVsbCk7XG4gIH0pO1xuXG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtYnV0dG9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdEJ0bnMubGVuZ3RoOyBpICsrKXtcbiAgICBlZGl0QnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVUb1JlcGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZW5lcmF0ZVRhc2tJdGVtSWQoZS50YXJnZXQuZGF0YXNldC50YXNrSWQpKTtcbiAgICAgIGNvbnN0IHRhc2sgPSB0b2Rvcy5nZXRUYXNrQnlJZChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnRhc2tJZCkpO1xuICAgICAgdGFza0Zvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2RvcywgdGFza1N1YnNldCwgbnVsbCwgdGFzayk7XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IHNhbWVEYXkgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuXG5leHBvcnQgY29uc3QgVG9kbyA9ICgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIGxldCB0YXNrcyA9IFtdO1xuXG4gIGxldCBwcm9qZWN0SWRDb3VudGVyID0gMTtcbiAgbGV0IHRhc2tJZENvdW50ZXIgPSAxO1xuXG4gIGNvbnN0IGdldFByb2plY3RCeUlkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcCA9IHByb2plY3RzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoKSA9PT0gaWQpO1xuICAgIGlmIChwLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHBbMF07XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza0J5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0ID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZCgpID09PSBpZCk7XG4gICAgaWYgKHQubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdFswXTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcInVuY2F0ZWdvcml6ZWRcIikgPT4ge1xuICAgIGNvbnN0IHAgPSBQcm9qZWN0KHByb2plY3RJZENvdW50ZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpO1xuICAgIHByb2plY3RzLnB1c2gocCk7XG4gICAgcHJvamVjdElkQ291bnRlcisrO1xuICAgIHJldHVybiBwLmdldElkKCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9IChkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcInVuY2F0ZWdvcml6ZWRcIikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdGFzayB3aXRoIGlkOiBcIiwgdGFza0lkQ291bnRlcik7XG4gICAgY29uc3QgdCA9IFRhc2sodGFza0lkQ291bnRlciwgZGVzY3JpcHRpb24sIHByb2plY3RJZCwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5KTtcbiAgICB0YXNrcy5wdXNoKHQpO1xuICAgIHRhc2tJZENvdW50ZXIrKztcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKCkgIT09IGlkKTtcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0UHJvamVjdElkKGlkKSAhPT0gaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoaWQpICE9PSBpZClcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHRpbWUsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlkKGlkKTtcbiAgICBwcm9qZWN0LnNldFRpdGxlKHRpdGxlKTtcbiAgICBwcm9qZWN0LnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICBwcm9qZWN0LnNldERhdGUoZGF0ZSk7XG4gICAgcHJvamVjdC5zZXRUaW1lKHRpbWUpO1xuICAgIHByb2plY3Quc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoaWQsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza0J5SWQoaWQpO1xuICAgIHRhc2suc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuICAgIHRhc2suc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xuICAgIHRhc2suc2V0RGF0ZShkYXRlKTtcbiAgICB0YXNrLnNldFRpbWUodGltZSk7XG4gICAgdGFzay5zZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBjb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTsgXG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+ICFlbGVtLmNvbXBsZXRlKCkgJiYgc2FtZURheShlbGVtLmdldERhdGVBc0RhdGUoKSwgdG9kYXkpKTsgXG4gIH07XG5cbiAgY29uc3QgZ2V0VXBjb21pbmdUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IC8vd2FudCBzdGFydCBvZiBkYXlcbiAgICB0b2RheS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gKGVsZW0uZ2V0RGF0ZUFzRGF0ZSgpICE9PSBudWxsICYmIGVsZW0uZ2V0RGF0ZUFzRGF0ZSgpID49IHRvZGF5ICYmICFlbGVtLmNvbXBsZXRlKCkpKTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gIWVsZW0uY29tcGxldGUoKSk7XG4gIH1cblxuICBjb25zdCBnZXRDb21wbGV0ZWRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb21wbGV0ZSgpKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdElkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0UHJvamVjdElkKCkgPT09IGlkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RCeUlkLFxuICAgIGdldFRhc2tCeUlkLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY3JlYXRlVGFzayxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgdXBkYXRlUHJvamVjdCxcbiAgICB1cGRhdGVUYXNrLFxuICAgIGdldFByb2plY3RzLFxuICAgIGdldFRhc2tzLFxuICAgIGdldFRvZGF5VGFza3MsXG4gICAgZ2V0QWxsVGFza3MsXG4gICAgZ2V0VXBjb21pbmdUYXNrcyxcbiAgICBnZXRDb21wbGV0ZWRUYXNrcyxcbiAgICBnZXRUYXNrc0J5UHJvamVjdElkXG4gIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9yZGVyQnlEYXRlKG9iamVjdHNXaXRoRGF0ZSkge1xuICByZXR1cm4gb2JqZWN0c1dpdGhEYXRlLnNvcnQoIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoYS5nZXREYXRlQXNEYXRlKCkgJiYgYi5nZXREYXRlQXNEYXRlKCkpIHtcbiAgICAgIGlmIChhLmdldERhdGVBc0RhdGUoKSA+IGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYS5nZXREYXRlQXNEYXRlKCkgPCBiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcyhhcnIpIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGFyci5tYXAoZWxlbSA9PiBlbGVtLmdldENhdGVnb3J5KCkpO1xuICBjb25zb2xlLmxvZyhcIkNBVFNcIiwgWy4uLm5ldyBTZXQoY2F0ZWdvcmllcyldLnNvcnQoKSk7XG4gIHJldHVybiBbLi4ubmV3IFNldChjYXRlZ29yaWVzKV0uc29ydCgpO1xufVxuXG4vL3JpZ2h0IG5vdyBwYXNzaW5nIHRhc2tzLi4gYnV0IHJlYWxseSB3YW50IHRvIHBhc3MgZGF0ZXMgb3IgbmlsXG5leHBvcnQgZnVuY3Rpb24gc2FtZURheShvbmUsIHR3bykgeyBcbiAgaWYgKCFvbmUgJiYgIXR3byl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoIW9uZSB8fCAhdHdvKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBvbmUuZ2V0RGF0ZSgpID09PSB0d28uZ2V0RGF0ZSgpICYmIFxuICAgIG9uZS5nZXRNb250aCgpID09PSB0d28uZ2V0TW9udGgoKSAmJlxuICAgIG9uZS5nZXRGdWxsWWVhcigpID09PSB0d28uZ2V0RnVsbFllYXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdlRpdGxlKGRhdGUpIHsgXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpO1xuICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuXG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybiBcIlVuc2NoZWR1bGVkXCI7XG4gIH1cbiAgZWxzZSBpZiAoc2FtZURheShkYXRlLCB0b2RheSkpIHtcbiAgICByZXR1cm4gXCJUb2RheVwiO1xuICB9XG4gIGVsc2UgaWYgKHNhbWVEYXkoZGF0ZSwgdG9tb3Jyb3cpKSB7XG4gICAgcmV0dXJuIFwiVG9tb3Jyb3dcIjtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLXVzJywgeyB3ZWVrZGF5OlwibG9uZ1wiLCB5ZWFyOlwibnVtZXJpY1wiLCBtb250aDpcInNob3J0XCIsIGRheTpcIm51bWVyaWNcIn0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tJdGVtSWQoaWQpIHtcbiAgcmV0dXJuIGB0YXNrXyR7aWR9YDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbmF2Q29tcG9uZW50IH0gZnJvbSBcIi4vbmF2LmpzXCI7XG5pbXBvcnQgeyB0YXNrc0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tzQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG5cbi8vc29tZSBkdW1teSBkYXRhIC1ORUVEUyBVUERBVElOR1xuY29uc3QgdG9kb3MgPSBUb2RvKCk7IFxuXG50b2Rvcy5jcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBPbmVcIiwgXCJzb21lIGRlc2NyaXB0aW9uLi4uXCIsIFwiMjAyMy0wNy0yMFwiLCBcIjEzOjAwXCIsIFwid29ya1wiKTtcbnRvZG9zLmNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IFR3b1wiLCBcInNvbWUgZGVzY3JpcHRpb24uLi4uXCIsIFwiMjAyMy0wNy0yMFwiLCBcIjA3OjAwXCIsIFwid29ya1wiKTtcbnRvZG9zLmNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IFRocmVlXCIsIFwic29tZSBkZXNjcmlwdGlvbi4uLlwiLCBcIjIwMjMtMDktMDFcIiwgXCJcIiwgXCJ3b3JrXCIpO1xuXG4vL2NyZWF0ZVRhc2sgPSAoZGVzY3JpcHRpb24sIHByb2plY3RJZCwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5KVxuXG50b2Rvcy5jcmVhdGVUYXNrKFwiYSB0aGluZyB0aGF0IG11c3QgYmUgZG9uZVwiLCAxLCBcImhpZ2hcIiwgXCIyMDIzLTA3LTE3XCIsIFwiMTI6MDBcIiwgXCJtaXNjXCIpO1xudG9kb3MuY3JlYXRlVGFzayhcImFub3RoZXIgdGhpbmcgdG8gZG9cIiwgMSwgXCJsb3dcIiwgXCIyMDIzLTA3LTE3XCIsIFwiXCIsIFwibWlzY1wiKTtcbnRvZG9zLmNyZWF0ZVRhc2soXCJhIHRoaXJkIHRoaW5nXCIsIDIsIFwibG93XCIsIFwiMjAyMy0wNy0xOFwiLCBcIlwiLCBcInNvbWUgb3RoZXIgY2F0ZWdvcnlcIik7XG5cblxuKGZ1bmN0aW9uICgpIHtcbiAgLy90ZXN0IGRyYXdpbmcgdGhlIG5hdiBiYXIgKyBpbml0aWFsIHN0YXRlIGFzIHRhc2tzIGNvbXBvbmVudD8gXG4gIGNvbnN0IG5hdlBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICBuYXZDb21wb25lbnQodG9kb3MsIG5hdlBhcmVudCk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICB0YXNrc0NvbXBvbmVudCh0b2RvcywgXCJBbGxcIiwgY29udGVudCk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==