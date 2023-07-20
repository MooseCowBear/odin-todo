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
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
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

button:not(:disabled) {
  cursor: pointer;
}

.nav button {
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
}

.item {
  line-height: 1.3;
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

.item-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
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
}

.new-buttons-div button {
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
}

.new-buttons-div img {
  height: 1.5rem;
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

.form button, 
.edit-project,
.clear-deleted {
  width: max-content;
  text-transform: lowercase;
  border: none;
  background-color: transparent;
}

.form button:hover, 
.form button:focus, 
.edit-project:hover, 
.edit-project:focus,
.clear-deleted:hover,
.clear-deleted:focus {
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

@media only screen and (max-width: 600px) {
  main {
    padding: 3rem 5vw;
  }
}

@media only screen and (max-width: 550px) {
  body {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
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

  .project-header {
    display: flex;
    align-items: center;
    row-gap: 0.5rem;
    column-gap: 1rem;
    flex-wrap: wrap;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');\n\n/* reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\np, \nsection,\narticle {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* end reset */\n\n:root {\n  --neutral-100: rgb(255, 255, 255);\n  --netural-200: rgb(240, 240, 240);\n  --neutral-300: #264143;\n  --accent: #e99f4c;\n  --alert: #de5499;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  background-color: var(--neutral-100);\n  color: var(--neutral-300);\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1.2;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\nmain {\n  padding: 3rem 10vw;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  gap: 1rem;\n  background-color: var(--netural-200);\n  height: 100%;\n  border-radius: 40px 0 0 0;\n}\n\n.nav > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.nav .project-div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n\n.nav button {\n  background-color: transparent;\n  border: none;\n  font-size: 0.8rem;\n}\n\n.item {\n  line-height: 1.3;\n  transition: all 500ms linear;\n}\n\n.item.fade-out {\n  transform: scaleY(0);\n  opacity: 0;\n}\n\n.item, .item label {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.item .label-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item .project-title {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.item-content {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n}\n\n.task-group {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-group h2 {\n  border-bottom: 2px solid var(--neutral-300);\n}\n\n.new-buttons-div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.new-buttons-div button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--accent);\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  white-space: nowrap;\n}\n\n.new-buttons-div img {\n  height: 1.5rem;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.datetime-display {\n  display: flex;\n  gap: 0.5rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: clamp(300px, 60%, 800px);\n  padding: 0.5rem 0;\n}\n\n.form input, textarea {\n  width: 100%;\n  border: 1px solid var(--neutral-300);\n  border-radius: 5px;\n  padding: 0.5rem;\n  font-family: inherit;\n  background-color: inherit;\n}\n\n.form input:focus, textarea:focus {\n  outline: 2px solid var(--alert);\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\ninput[type=\"submit\"]:focus, input[type=\"submit\"]:hover {\n  border: 1px solid var(--alert);\n  color: var(--alert);\n}\n\ninput[type=checkbox] {\n  accent-color: var(--alert);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.form button, \n.edit-project,\n.clear-deleted {\n  width: max-content;\n  text-transform: lowercase;\n  border: none;\n  background-color: transparent;\n}\n\n.form button:hover, \n.form button:focus, \n.edit-project:hover, \n.edit-project:focus,\n.clear-deleted:hover,\n.clear-deleted:focus {\n  color: var(--alert);\n}\n\n.edit-project {\n  font-size: 0.9rem;\n}\n\n.label-wrapper {\n  display: flex;\n  gap: 0.5rem;\n}\n\nselect {\n  margin-left: 0.5rem;\n}\n\n.warning {\n  display: none;\n  color: var(--alert);\n}\n\n.warning.show {\n  display: inline;\n}\n\n.button-div {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n\n.high {\n  color: var(--alert);\n}\n\n.icon {\n  height: 1.5rem;\n}\n\n.edit-button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  align-items: end;\n  padding: 0;\n}\n\n.nav-button-wrapper {\n  display: flex;\n  align-items: center; \n}\n\n.nav-button-wrapper .icon {\n  transform: translateY(-10%);\n}\n\n.small-icon {\n  height: 1rem;\n  transform: translateY(-10%);\n}\n\nselect {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: inherit;\n  line-height: inherit;\n  outline: none;\n}\n\n.select {\n  width: 100%;\n  min-width: 15ch;\n  border: 1px solid var(--neutral-300);\n  border-radius: 0.25em;\n  padding: 0.5em;\n  font-size: 1rem;\n  cursor: pointer;\n  background-color: transparent;\n  display: grid;\n  grid-template-areas: \"select\";\n  align-items: center;\n  position: relative;\n}\n\n.select::after {\n  content: \"\";\n  width: 0.8em;\n  height: 0.5em;\n  background-color: var(--alert);\n  clip-path: polygon(100% 0%, 0 0%, 50% 100%);\n  justify-self: end;\n}\n\nselect,\n.select:after {\n  grid-area: select;\n}\n\nselect:focus + .focus {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  border: 2px solid var(--alert);\n  border-radius: inherit;\n}\n\n@media only screen and (max-width: 600px) {\n  main {\n    padding: 3rem 5vw;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  body {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr auto;\n  }\n\n  main {\n    padding: 5vw;\n    grid-row: 1;\n  }\n\n  .nav {\n    height: max-content;\n    grid-row: 2;\n  }\n\n  .new-buttons-div {\n    flex-direction: column;\n  }\n\n  .project-header {\n    display: flex;\n    align-items: center;\n    row-gap: 0.5rem;\n    column-gap: 1rem;\n    flex-wrap: wrap;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _subcomponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcomponents.js */ "./src/subcomponents.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");






function projectFormComponent(parent, nodeToReplace, todos, project = null) {
  const component = addFormComponent(nodeToReplace);
  const f = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('form', component, []);

  const titleField = createSimpleInput(f, project, "title", "text", "Title: *", "Project must have a title.");
  const categoryField = createSimpleInput(f, project, "category", "text", "Category:", "")
  const dateField = createSimpleInput(f, project, "date", "date", "Deadline:", "");
  const timeField = createSimpleInput(f, project, "time", "time", "Time:", "");
  const descriptionField = createTextarea(f, project, "description", "Description:");

  const submitBtn = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('input', f, [], null, {type: 'submit'});

  const buttonsDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', f, ['button-div']);
  const cancel = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('button', buttonsDiv, [], 'Cancel');

  if (project) {
    const deleteBtn = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('button', buttonsDiv, ['delete-btn'], 'Delete Project');

    deleteBtn.addEventListener("click", () => {
      todos.deleteProject(project.getId());
      (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, "All", parent); //want to go to "home" + also need to redraw nav!
      (0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.navComponent)(todos, document.querySelector('header'));
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.updateStorage)(todos);
    });
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const validates = validateInput([titleField]);
    if (!validates) return; 

    if (project) {
      todos.updateProject(
        project.getId(), 
        titleField.value, 
        descriptionField.value,
        dateField.value,
        timeField.value,
        categoryField.value
      );
      (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, project.getId(), parent);
    }
    else { 
      const projectId = todos.createProject(
        titleField.value, 
        descriptionField.value,
        dateField.value,
        timeField.value,
        categoryField.value
      );
      (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, projectId, parent);
    }
    //redraw nav, bc might have changed title even if just update
    (0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.navComponent)(todos, document.querySelector('header'));
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.updateStorage)(todos);
  });

  cancel.addEventListener("click", () => {
    component.replaceWith(nodeToReplace);
  });
}

function taskFormComponent(parent, nodeToReplace, todos, taskSubset, projectID, task = null) {
  const component = addFormComponent(nodeToReplace);
  const f = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('form', component, []);

  const descriptionField = createSimpleInput(f, task, "description", "text", "Task: *", "Must have task.");
  let projectField;

  if (!task && !projectID) {
    const projects = todos.getProjects(); 
    projectField = createProjectSelect(f, task, projects);
  }
  else if (!task && projectID) {
    projectField = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('input', f, [], null, {type: 'hidden', value: projectID, id: 'project'});
  }

  const priorityField = createPrioritySelect(f, task, ["low", "medium", "high"]);
  const dateField = createSimpleInput(f, task, "date", "date", "Deadline:", "");
  const timeField = createSimpleInput(f, task, "time", "time", "Time:", "");
  const categoryField = createSimpleInput(f, task, "category", "text", "Category:");

  const submitBtn = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('input', f, [], null, {type: 'submit'});

  const buttonsDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', f, ['button-div']);
  const cancel = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('button', buttonsDiv, [], 'Cancel');

  if (task) {
    const deleteBtn = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('button', buttonsDiv, ['delete-btn'], 'Delete Task');

    deleteBtn.addEventListener("click", () => {
      todos.deleteTask(task.getId());

      if (taskSubset) {
        (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, taskSubset, parent);
      }
      else {
        (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, projectID, parent);
      }
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.updateStorage)(todos);
    });
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const validates = validateInput([descriptionField]);
    if (!validates) return; 

    if (task) {
      todos.updateTask(
        task.getId(), 
        descriptionField.value,
        priorityField.value,
        dateField.value,
        timeField.value,
        categoryField.value
      );
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.updateStorage)(todos);

      if (taskSubset) {
        (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, taskSubset, parent);
      }
      else {
        (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_0__.projectComponent)(todos, projectID, parent);
      }
    }
    else {
      todos.createTask(
        descriptionField.value,
        projectField.value,
        priorityField.value,
        dateField.value,
        timeField.value,
        categoryField.value
      );
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.updateStorage)(todos);

      const noTaskMessage = document.getElementById('no-task-message');
      if (noTaskMessage) {
        noTaskMessage.remove();
      }

      if (taskSubset) {
        (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, 'All', parent);
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

function addFormComponent(nodeToReplace) {
  const component = document.createElement('div'); 
  component.id = "form";
  component.classList.add('form');
  nodeToReplace.replaceWith(component);

  return component;
}

function createSimpleInput(parent, elem, id, type, labelText, warning) {
  const fieldDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', parent, ['input-field']);
  const labelWrapper = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', fieldDiv, ['label-wrapper']);
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('label', labelWrapper, [], labelText, {htmlFor: id});
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('p', labelWrapper, ['warning'], warning);
  const field = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('input', fieldDiv, [], null, {type: type, id: id});

  if (elem) {
    field.value = elem[`get${id.charAt(0).toUpperCase() + id.slice(1)}`]();
  }
  return field;
}

function createProjectSelect(parent, task, options) {
  const fieldDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', parent, ['input-field']);
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('label', fieldDiv, [], 'Project:', {htmlFor: 'project'});
  const selectWrapper = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', fieldDiv, ['select']);
  const field = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('select', selectWrapper, [], null, {id: 'project'});

  const noneOption = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('option', field, [], 'None', {value: 0});

  if (!task) {
    noneOption.selected = true;
  }

  for (const opt of options) {
    const selectOption = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('option', field, [], opt.getTitle(), {value: opt.getId()});

    if (task && task.getProjectId() === opt.getId()) {
      selectOption.selected = true;
    }
  }
  return field;
}

function createPrioritySelect(parent, task, options) {
  const fieldDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', parent, ['input-field']);
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('label', fieldDiv, [], 'Priority', {htmlFor: 'priority'});
  const selectWrapper = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', fieldDiv, ['select']);
  const field = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('select', selectWrapper, [], null, {id: 'priority'});

  for (const opt of options) {
    const selectOption = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('option', field, [], opt, {value: opt});
  
    if (task && opt === task.getPriority()) {
      selectOption.selected = true;
    }
  }
  return field; 
}

function createTextarea(parent, elem, id, labelText) {
  const fieldDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('div', parent, ['input-field']);
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('label', fieldDiv, [], labelText, {htmlFor: id});
  const field = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('textarea', fieldDiv, [], null, {id: id});

  if (elem) {
    field.value = elem[`get${id.charAt(0).toUpperCase() + id.slice(1)}`]();
  }

  return field; 
}

function validateInput(fields) {
  let good = true;
  for (const f of fields) {
    if (f.value.trim() === "") {
      good = false;
      const theForm = f.closest('form');
      const warning = theForm.querySelector('.warning');
      warning.classList.add('show');
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
/* harmony import */ var _subcomponents_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subcomponents.js */ "./src/subcomponents.js");










function navComponent(todos, parent) {
  parent.textContent = ""

  const component = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('nav', parent, ['nav']);
  const tasksDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('div', component, []);
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('h2', tasksDiv, [], "Tasks");

  const buttons = ['All', 'Today', 'Upcoming', 'Completed'];
  const icons = [_format_list_bulleted_svg__WEBPACK_IMPORTED_MODULE_3__, _alarm_svg__WEBPACK_IMPORTED_MODULE_4__, _calendar_month_svg__WEBPACK_IMPORTED_MODULE_5__, _check_circle_svg__WEBPACK_IMPORTED_MODULE_6__];

  for (let i = 0; i < buttons.length; i ++) {
    const buttonWrapper = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('div', tasksDiv, ['nav-button-wrapper']);
    (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addImage)(icons[i], buttonWrapper, ['icon']);
    (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('button', buttonWrapper, [], buttons[i]);
  }

  addTaskListener(tasksDiv, todos);

  const projectsDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('div', component, []);
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('h2', projectsDiv, [], 'Projects');

  const projects = todos.getProjects();

  for (const cat of (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCategories)(projects)) {
    const projectDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('div', projectsDiv, ['project-div']);
    (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('h3', projectDiv, [], cat);

    const sortedProjects = (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(projects.filter(elem => elem.getCategory() === cat));

    for (const p of sortedProjects) { 
      const buttonWrapper = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('div', projectDiv, ['nav-button-wrapper'])
      ;(0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addImage)(_circle_svg__WEBPACK_IMPORTED_MODULE_7__, buttonWrapper, ['small-icon']);
      (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_8__.addElement)('button', buttonWrapper, ['project-item'], p.getTitle(), {"data-id": p.getId()})
    }
  }
  addProjectListener(projectsDiv, todos);
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
  title = title.trim().toLowerCase();
  category = category.trim().toLowerCase();

  const getId = () => {
    return id;
  };

  const getTitle = () => {
    return title;
  };

  const setTitle = (newTitle) => {
    title = newTitle.trim().toLowerCase();
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
    category = newCategory.trim().toLowerCase();
  };

  const toJSON = () => {
    return {
      id: id,
      title: title,
      description: description,
      date: schedulable.getDate(),
      time: schedulable.getTime(),
      category: category,
    };
  };

  return {
    ...schedulable,
    getId,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getCategory,
    setCategory,
    toJSON
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

  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addNewFormBtns)(parent);

  const component = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('div', parent, ['component']);
  const header = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('div', component, ['project-header']);
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('h1', header, [], todos.getProjectById(projectId).getTitle());
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('p', header, [], todos.getProjectById(projectId).dateFormatted());
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('button', header, ['edit-project'], 'Edit', {id: 'edit-project'});

  const description = todos.getProjectById(projectId).getDescription();
  if (description !== "") {
    (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('p', component, [], description);
  }

  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('div', component, [], null, {id: 'form'}); 

  const projectDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('div', component, ['main-content']);

  const tasks = todos.getTasksByProjectId(projectId); 

  for (const cat of (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCategories)(tasks)) { 
    const group = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)(projectDiv, cat); 
    const sortedTasks = (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(tasks.filter(elem => elem.getCategory() === cat));

    for (const t of sortedTasks) {
      (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(group, todos, t, true, false); 
    }
  }
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
      const taskDiv = document.getElementById((0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskItemId)(e.target.dataset.taskid));
      const task = todos.getTaskById(parseInt(e.target.dataset.taskid));
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
    setTime,
    getTime,
    getDate,
    setDate
  };
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateStorage: () => (/* binding */ updateStorage)
/* harmony export */ });
function updateStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

/***/ }),

/***/ "./src/subcomponents.js":
/*!******************************!*\
  !*** ./src/subcomponents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addElement: () => (/* binding */ addElement),
/* harmony export */   addImage: () => (/* binding */ addImage),
/* harmony export */   addNewFormBtns: () => (/* binding */ addNewFormBtns),
/* harmony export */   createTaskGroup: () => (/* binding */ createTaskGroup),
/* harmony export */   createTaskItem: () => (/* binding */ createTaskItem)
/* harmony export */ });
/* harmony import */ var _viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewHelpers.js */ "./src/viewHelpers.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus.svg */ "./src/plus.svg");
/* harmony import */ var _information_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information-outline.svg */ "./src/information-outline.svg");





function addElement(type, parent, classes, textContent = null, options = {}){
  const elem = document.createElement(type);
  parent.appendChild(elem);
  elem.classList.add(...classes);

  if (textContent) elem.textContent = textContent; 

  for (const o in options) {
    elem.setAttribute(o, options[o]);
  }
  return elem;
};

function addImage(src, parent, classes = [], options = {}) {
  const image = new Image();
  image.src = src;
  image.classList.add(...classes);
  parent.appendChild(image);

  for (const o in options) {
    image.setAttribute(o, options[o]);
  }
}

function addNewFormBtns(parent) {
  const newFormBtnsDiv = addElement('div', parent, ['new-buttons-div']);
  const newProject = addElement('button', newFormBtnsDiv, [], null, {id: "new-project"});
  addImage(_plus_svg__WEBPACK_IMPORTED_MODULE_2__, newProject);
  addElement('p', newProject, [], "New Project");

  const newTask = addElement('button', newFormBtnsDiv, [], null, {id: "new-task"});
  addImage(_plus_svg__WEBPACK_IMPORTED_MODULE_2__, newTask);
  addElement('p', newTask, [], "New Task");
}

function createTaskGroup(parent, groupTitle) {
  const groupDiv = addElement('div', parent, ['task-group']);
  addElement('h2', groupDiv, [], groupTitle);

  return groupDiv;
}

function createTaskItem(parent, todos, task, includeDate = false, onTasksPage = true) { 
  const itemDiv = addElement('div', parent, ['item', task.getPriority()], null, {id: (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskItemId)(task.getId())});
  const lbl = addElement('label', itemDiv, []);
  const check = addElement('input', lbl, [], null, {type: 'checkbox'});

  if (task.complete()) {
    check.checked = true;
    check.disabled = true;
  }
  else {
    check.addEventListener('change', (e) => {
      task.updateStatus();
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(todos);

      if (e.target.checked) {
        const pageTitle = document.querySelector('h1');
        if (pageTitle.textContent !== "Completed") {
          const ancestorItem = e.target.closest(".item");
          ancestorItem.classList.add("fade-out");
        }
      }
    });
  }

  const wrapper = addElement('div', lbl, ['item-content']);
  const labelContent = addElement('span', wrapper, ['label-content']);
  addElement('span', labelContent, [], task.getDescription());

  if (task.getProjectId() > 0 && onTasksPage) {
    addElement('span', labelContent, ['project-title'], todos.getProjectById(task.getProjectId()).getTitle());
  }

  if (task.timeFormatted() !== "") {
    const time = addElement('div', wrapper, ['datetime-display']);

    if (includeDate) {
      addElement('span', time, [], task.dateFormatted());
    }
    addElement('span', time, [], task.timeFormatted());
  }

  const edit = addElement('button', wrapper, ['edit-button'], null, {"data-taskId": task.getId()});
  addImage(_information_outline_svg__WEBPACK_IMPORTED_MODULE_3__, edit, ['icon'], {"data-taskId": task.getId()});
  if (task.complete()) {
    edit.disabled = true;
  }

  if (task.getPriority() === 'high') {
    addElement('p', wrapper, [], "!");
  }
  return itemDiv;
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


const Task = (id, description, projectId, priority, date, time, category, completed = false) => {
  const schedulable = (0,_schedulable_js__WEBPACK_IMPORTED_MODULE_0__.Schedulable)(date, time);
  category = category.trim().toLowerCase();

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
    category = newCategory.trim().toLowerCase();
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

  const toJSON = () => {
    return {
      completed: completed,
      id: id,
      description: description,
      projectId: projectId,
      priority: priority,
      date: schedulable.getDate(),
      time: schedulable.getTime(),
      category: category
    };
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
    updateStatus,
    toJSON,
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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





function tasksComponent(todos, taskSubset, parent) {
  parent.textContent = "";

  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addNewFormBtns)(parent);
  addNewButtonListeners(parent, todos, taskSubset);

  const tasks = todos[`get${taskSubset}Tasks`]();

  const component = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('div', parent, ['component']);
  const title = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('h1', component, [], (taskSubset === "Today" ? "Tasks" : taskSubset));

  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('div', component, [], null, {id: 'form'});

  if (tasks.length === 0) {
    (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('p', component, [], "No tasks", {id: 'no-tasks-message'});
    return;
  }

  const sortedTasks = (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(tasks);

  const tasksDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('div', component, ['main-content']);

  let currDate = sortedTasks[0].getDateAsDate();
  let currDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)(tasksDiv, (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getDivTitle)(currDate)); 

  for (const t of sortedTasks) {
    if ((0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.sameDay)(t.getDateAsDate(), currDate)) {
      (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(currDiv, todos, t); 
    }
    else {
      currDate = t.getDateAsDate();
      currDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)(tasksDiv, (0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getDivTitle)(currDate));
      (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(currDiv, todos, t);
    }
  }
  addEditButtonListeners(parent, todos, taskSubset);

  if (taskSubset === 'Completed') {
    const clearCompleted = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('button', title, ['clear-deleted'], 'delete all');
    clearCompleted.addEventListener("click", () => {
    todos.clearCompletedTasks();
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(todos);

      tasksComponent(todos, 'Completed', parent);
    });
  }
}

function addNewButtonListeners(parent, todos, taskSubset) {
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
}

function addEditButtonListeners(parent, todos, taskSubset) {
  const editBtns = document.querySelectorAll('.edit-button');
  for (let i = 0; i < editBtns.length; i ++){
    editBtns[i].addEventListener("click", (e) => {
      const nodeToReplace = document.getElementById((0,_viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskItemId)(e.target.dataset.taskid));
      const task = todos.getTaskById(parseInt(e.target.dataset.taskid));
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

  const createProject = (title, description, date, time, category, id = null) => {
    const projectId = id || projectIdCounter;
    const p = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.Project)(projectId, title, description, date, time, category);
    projects.push(p);
    projectIdCounter = id ? projectIdCounter : projectIdCounter + 1;

    return p.getId();
  };

  const createTask = (description, projectId, priority, date, time, category, id = null, completed = false) => {
    const taskId = id || taskIdCounter;
    const t = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(taskId, description, parseInt(projectId), priority, date, time, category, completed);
    tasks.push(t);
    taskIdCounter = id ? taskIdCounter : taskIdCounter + 1;
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

  const clearCompletedTasks = () => {
    tasks = tasks.filter(elem => !elem.complete());
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
    return tasks.filter(elem => elem.getProjectId() === id && !elem.complete());
  };

  const toJSON = () => {
    return {
      projectIdCounter: projectIdCounter,
      taskIdCounter: taskIdCounter,
      projects: JSON.stringify(projects),
      tasks: JSON.stringify(tasks)
    }
  };

  const fromJson = (json) => {
    const todos = JSON.parse(json);
    projectIdCounter = todos.projectIdCounter;
    taskIdCounter = todos.taskIdCounter;

    const projectsArr = JSON.parse(todos.projects);
    const tasksArr = JSON.parse(todos.tasks);

    for (const elem of projectsArr) {
      createProject(
        elem.title, 
        elem.description, 
        elem.date, 
        elem.time, 
        elem.category, 
        elem.id
      );
    }
    for (const elem of tasksArr) {
      createTask(
        elem.description, 
        elem.projectId, 
        elem.priority, 
        elem.date, 
        elem.time, 
        elem.category, 
        elem.id,
        elem.completed
      );
    }
  }

  return {
    getProjectById,
    getTaskById,
    createProject,
    createTask,
    deleteProject,
    deleteTask,
    updateProject,
    updateTask,
    clearCompletedTasks,
    getProjects,
    getTasks,
    getTodayTasks,
    getAllTasks,
    getUpcomingTasks,
    getCompletedTasks,
    getTasksByProjectId,
    toJSON,
    fromJson
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





(function () {

  const data = localStorage.getItem('todos');
  const todos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_3__.Todo)();

  if (data) {
    todos.fromJson(data);
  }

  const navParent = document.querySelector('header');
  (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.navComponent)(todos, navParent);
  const content = document.getElementById('content');
  (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_2__.tasksComponent)(todos, "All", content);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLGtCQUFrQjtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixPQUFPLFlBQVksT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUs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dXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NoZWR1bGFibGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N1YmNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2tzQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3SGVscGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogcmVzZXQgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5wLCBcbnNlY3Rpb24sXG5hcnRpY2xlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICBcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIGVuZCByZXNldCAqL1xuXG46cm9vdCB7XG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1uZXR1cmFsLTIwMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAtLW5ldXRyYWwtMzAwOiAjMjY0MTQzO1xuICAtLWFjY2VudDogI2U5OWY0YztcbiAgLS1hbGVydDogI2RlNTQ5OTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtMTAwKTtcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtMzAwKTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAzcmVtIDEwdnc7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGdhcDogMXJlbTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV0dXJhbC0yMDApO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggMCAwIDA7XG59XG5cbi5uYXYgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5uYXYgLnByb2plY3QtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5idXR0b246bm90KDpkaXNhYmxlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhcjtcbn1cblxuLml0ZW0uZmFkZS1vdXQge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLml0ZW0sIC5pdGVtIGxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uaXRlbSAubGFiZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtIC5wcm9qZWN0LXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5pdGVtLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC44cmVtO1xufVxuXG4udGFzay1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnRhc2stZ3JvdXAgaDIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xufVxuXG4ubmV3LWJ1dHRvbnMtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmV3LWJ1dHRvbnMtZGl2IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5uZXctYnV0dG9ucy1kaXYgaW1nIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmRhdGV0aW1lLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA2MCUsIDgwMHB4KTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG59XG5cbi5mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLmZvcm0gaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcbn1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cywgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBhY2NlbnQtY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmZvcm0gYnV0dG9uLCBcbi5lZGl0LXByb2plY3QsXG4uY2xlYXItZGVsZXRlZCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0gYnV0dG9uOmhvdmVyLCBcbi5mb3JtIGJ1dHRvbjpmb2N1cywgXG4uZWRpdC1wcm9qZWN0OmhvdmVyLCBcbi5lZGl0LXByb2plY3Q6Zm9jdXMsXG4uY2xlYXItZGVsZXRlZDpob3Zlcixcbi5jbGVhci1kZWxldGVkOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuLmVkaXQtcHJvamVjdCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubGFiZWwtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG5zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4ud2FybmluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbi53YXJuaW5nLnNob3cge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5idXR0b24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oaWdoIHtcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmVkaXQtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdi1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxufVxuXG4ubmF2LWJ1dHRvbi13cmFwcGVyIC5pY29uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIGhlaWdodDogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG5zZWxlY3Qge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwIDFlbSAwIDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxNWNoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzZWxlY3RcIjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VsZWN0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwLjhlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwJSwgMCAwJSwgNTAlIDEwMCUpO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuc2VsZWN0LFxuLnNlbGVjdDphZnRlciB7XG4gIGdyaWQtYXJlYTogc2VsZWN0O1xufVxuXG5zZWxlY3Q6Zm9jdXMgKyAuZm9jdXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogLTFweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWxlcnQpO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDNyZW0gNXZ3O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgYm9keSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbiAgfVxuXG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDV2dztcbiAgICBncmlkLXJvdzogMTtcbiAgfVxuXG4gIC5uYXYge1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgZ3JpZC1yb3c6IDI7XG4gIH1cblxuICAubmV3LWJ1dHRvbnMtZGl2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnByb2plY3QtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogMC41cmVtO1xuICAgIGNvbHVtbi1nYXA6IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLFVBQVU7QUFDVjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7O0VBT0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Us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UztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiByZXNldCAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxucCwgXFxuc2VjdGlvbixcXG5hcnRpY2xlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG4gIFxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi8qIGVuZCByZXNldCAqL1xcblxcbjpyb290IHtcXG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tbmV0dXJhbC0yMDA6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIC0tbmV1dHJhbC0zMDA6ICMyNjQxNDM7XFxuICAtLWFjY2VudDogI2U5OWY0YztcXG4gIC0tYWxlcnQ6ICNkZTU0OTk7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLTEwMCk7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC0zMDApO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAzcmVtIDEwdnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV0dXJhbC0yMDApO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgMDtcXG59XFxuXFxuLm5hdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXYgLnByb2plY3QtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXI7XFxufVxcblxcbi5pdGVtLmZhZGUtb3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLml0ZW0sIC5pdGVtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaXRlbSAubGFiZWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtIC5wcm9qZWN0LXRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLml0ZW0tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4udGFzay1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2stZ3JvdXAgaDIge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcXG59XFxuXFxuLm5ldy1idXR0b25zLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMtZGl2IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMtZGl2IGltZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGF0ZXRpbWUtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDYwJSwgODAwcHgpO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi5mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmZvcm0gaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hbGVydCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cywgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWxlcnQpO1xcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4uZm9ybSBidXR0b24sIFxcbi5lZGl0LXByb2plY3QsXFxuLmNsZWFyLWRlbGV0ZWQge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZm9ybSBidXR0b246aG92ZXIsIFxcbi5mb3JtIGJ1dHRvbjpmb2N1cywgXFxuLmVkaXQtcHJvamVjdDpob3ZlciwgXFxuLmVkaXQtcHJvamVjdDpmb2N1cyxcXG4uY2xlYXItZGVsZXRlZDpob3ZlcixcXG4uY2xlYXItZGVsZXRlZDpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubGFiZWwtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbnNlbGVjdCB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLndhcm5pbmcuc2hvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWdoIHtcXG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uZWRpdC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG59XFxuXFxuLm5hdi1idXR0b24td3JhcHBlciAuaWNvbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbi5zbWFsbC1pY29uIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMWVtIDAgMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjdXJzb3I6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDE1Y2g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJzZWxlY3RcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlbGVjdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC44ZW07XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQpO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCUsIDAgMCUsIDUwJSAxMDAlKTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5zZWxlY3QsXFxuLnNlbGVjdDphZnRlciB7XFxuICBncmlkLWFyZWE6IHNlbGVjdDtcXG59XFxuXFxuc2VsZWN0OmZvY3VzICsgLmZvY3VzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTFweDtcXG4gIGxlZnQ6IC0xcHg7XFxuICByaWdodDogLTFweDtcXG4gIGJvdHRvbTogLTFweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiAzcmVtIDV2dztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDV2dztcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICB9XFxuXFxuICAubmV3LWJ1dHRvbnMtZGl2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2plY3RDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IHRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3NDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IG5hdkNvbXBvbmVudCB9IGZyb20gXCIuL25hdi5qc1wiO1xuaW1wb3J0IHsgYWRkRWxlbWVudCB9IGZyb20gXCIuL3N1YmNvbXBvbmVudHMuanNcIjtcbmltcG9ydCB7IHVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCBwcm9qZWN0ID0gbnVsbCkge1xuICBjb25zdCBjb21wb25lbnQgPSBhZGRGb3JtQ29tcG9uZW50KG5vZGVUb1JlcGxhY2UpO1xuICBjb25zdCBmID0gYWRkRWxlbWVudCgnZm9ybScsIGNvbXBvbmVudCwgW10pO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCBwcm9qZWN0LCBcInRpdGxlXCIsIFwidGV4dFwiLCBcIlRpdGxlOiAqXCIsIFwiUHJvamVjdCBtdXN0IGhhdmUgYSB0aXRsZS5cIik7XG4gIGNvbnN0IGNhdGVnb3J5RmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCBwcm9qZWN0LCBcImNhdGVnb3J5XCIsIFwidGV4dFwiLCBcIkNhdGVnb3J5OlwiLCBcIlwiKVxuICBjb25zdCBkYXRlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCBwcm9qZWN0LCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiRGVhZGxpbmU6XCIsIFwiXCIpO1xuICBjb25zdCB0aW1lRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCBwcm9qZWN0LCBcInRpbWVcIiwgXCJ0aW1lXCIsIFwiVGltZTpcIiwgXCJcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSBjcmVhdGVUZXh0YXJlYShmLCBwcm9qZWN0LCBcImRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb246XCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGFkZEVsZW1lbnQoJ2lucHV0JywgZiwgW10sIG51bGwsIHt0eXBlOiAnc3VibWl0J30pO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBmLCBbJ2J1dHRvbi1kaXYnXSk7XG4gIGNvbnN0IGNhbmNlbCA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbnNEaXYsIFtdLCAnQ2FuY2VsJyk7XG5cbiAgaWYgKHByb2plY3QpIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBhZGRFbGVtZW50KCdidXR0b24nLCBidXR0b25zRGl2LCBbJ2RlbGV0ZS1idG4nXSwgJ0RlbGV0ZSBQcm9qZWN0Jyk7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZG9zLmRlbGV0ZVByb2plY3QocHJvamVjdC5nZXRJZCgpKTtcbiAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBcIkFsbFwiLCBwYXJlbnQpOyAvL3dhbnQgdG8gZ28gdG8gXCJob21lXCIgKyBhbHNvIG5lZWQgdG8gcmVkcmF3IG5hdiFcbiAgICAgIG5hdkNvbXBvbmVudCh0b2RvcywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykpO1xuICAgICAgdXBkYXRlU3RvcmFnZSh0b2Rvcyk7XG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlSW5wdXQoW3RpdGxlRmllbGRdKTtcbiAgICBpZiAoIXZhbGlkYXRlcykgcmV0dXJuOyBcblxuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICB0b2Rvcy51cGRhdGVQcm9qZWN0KFxuICAgICAgICBwcm9qZWN0LmdldElkKCksIFxuICAgICAgICB0aXRsZUZpZWxkLnZhbHVlLCBcbiAgICAgICAgZGVzY3JpcHRpb25GaWVsZC52YWx1ZSxcbiAgICAgICAgZGF0ZUZpZWxkLnZhbHVlLFxuICAgICAgICB0aW1lRmllbGQudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5RmllbGQudmFsdWVcbiAgICAgICk7XG4gICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0LmdldElkKCksIHBhcmVudCk7XG4gICAgfVxuICAgIGVsc2UgeyBcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRvZG9zLmNyZWF0ZVByb2plY3QoXG4gICAgICAgIHRpdGxlRmllbGQudmFsdWUsIFxuICAgICAgICBkZXNjcmlwdGlvbkZpZWxkLnZhbHVlLFxuICAgICAgICBkYXRlRmllbGQudmFsdWUsXG4gICAgICAgIHRpbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlGaWVsZC52YWx1ZVxuICAgICAgKTtcbiAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3RJZCwgcGFyZW50KTtcbiAgICB9XG4gICAgLy9yZWRyYXcgbmF2LCBiYyBtaWdodCBoYXZlIGNoYW5nZWQgdGl0bGUgZXZlbiBpZiBqdXN0IHVwZGF0ZVxuICAgIG5hdkNvbXBvbmVudCh0b2RvcywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykpO1xuICAgIHVwZGF0ZVN0b3JhZ2UodG9kb3MpO1xuICB9KTtcblxuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wb25lbnQucmVwbGFjZVdpdGgobm9kZVRvUmVwbGFjZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFza0Zvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2RvcywgdGFza1N1YnNldCwgcHJvamVjdElELCB0YXNrID0gbnVsbCkge1xuICBjb25zdCBjb21wb25lbnQgPSBhZGRGb3JtQ29tcG9uZW50KG5vZGVUb1JlcGxhY2UpO1xuICBjb25zdCBmID0gYWRkRWxlbWVudCgnZm9ybScsIGNvbXBvbmVudCwgW10pO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCB0YXNrLCBcImRlc2NyaXB0aW9uXCIsIFwidGV4dFwiLCBcIlRhc2s6ICpcIiwgXCJNdXN0IGhhdmUgdGFzay5cIik7XG4gIGxldCBwcm9qZWN0RmllbGQ7XG5cbiAgaWYgKCF0YXNrICYmICFwcm9qZWN0SUQpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRvZG9zLmdldFByb2plY3RzKCk7IFxuICAgIHByb2plY3RGaWVsZCA9IGNyZWF0ZVByb2plY3RTZWxlY3QoZiwgdGFzaywgcHJvamVjdHMpO1xuICB9XG4gIGVsc2UgaWYgKCF0YXNrICYmIHByb2plY3RJRCkge1xuICAgIHByb2plY3RGaWVsZCA9IGFkZEVsZW1lbnQoJ2lucHV0JywgZiwgW10sIG51bGwsIHt0eXBlOiAnaGlkZGVuJywgdmFsdWU6IHByb2plY3RJRCwgaWQ6ICdwcm9qZWN0J30pO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHlGaWVsZCA9IGNyZWF0ZVByaW9yaXR5U2VsZWN0KGYsIHRhc2ssIFtcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl0pO1xuICBjb25zdCBkYXRlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCB0YXNrLCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiRGVhZGxpbmU6XCIsIFwiXCIpO1xuICBjb25zdCB0aW1lRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCB0YXNrLCBcInRpbWVcIiwgXCJ0aW1lXCIsIFwiVGltZTpcIiwgXCJcIik7XG4gIGNvbnN0IGNhdGVnb3J5RmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCB0YXNrLCBcImNhdGVnb3J5XCIsIFwidGV4dFwiLCBcIkNhdGVnb3J5OlwiKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBhZGRFbGVtZW50KCdpbnB1dCcsIGYsIFtdLCBudWxsLCB7dHlwZTogJ3N1Ym1pdCd9KTtcblxuICBjb25zdCBidXR0b25zRGl2ID0gYWRkRWxlbWVudCgnZGl2JywgZiwgWydidXR0b24tZGl2J10pO1xuICBjb25zdCBjYW5jZWwgPSBhZGRFbGVtZW50KCdidXR0b24nLCBidXR0b25zRGl2LCBbXSwgJ0NhbmNlbCcpO1xuXG4gIGlmICh0YXNrKSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gYWRkRWxlbWVudCgnYnV0dG9uJywgYnV0dG9uc0RpdiwgWydkZWxldGUtYnRuJ10sICdEZWxldGUgVGFzaycpO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2Rvcy5kZWxldGVUYXNrKHRhc2suZ2V0SWQoKSk7XG5cbiAgICAgIGlmICh0YXNrU3Vic2V0KSB7XG4gICAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCB0YXNrU3Vic2V0LCBwYXJlbnQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3RJRCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVN0b3JhZ2UodG9kb3MpO1xuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZUlucHV0KFtkZXNjcmlwdGlvbkZpZWxkXSk7XG4gICAgaWYgKCF2YWxpZGF0ZXMpIHJldHVybjsgXG5cbiAgICBpZiAodGFzaykge1xuICAgICAgdG9kb3MudXBkYXRlVGFzayhcbiAgICAgICAgdGFzay5nZXRJZCgpLCBcbiAgICAgICAgZGVzY3JpcHRpb25GaWVsZC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHlGaWVsZC52YWx1ZSxcbiAgICAgICAgZGF0ZUZpZWxkLnZhbHVlLFxuICAgICAgICB0aW1lRmllbGQudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5RmllbGQudmFsdWVcbiAgICAgICk7XG4gICAgICB1cGRhdGVTdG9yYWdlKHRvZG9zKTtcblxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRvZG9zLmNyZWF0ZVRhc2soXG4gICAgICAgIGRlc2NyaXB0aW9uRmllbGQudmFsdWUsXG4gICAgICAgIHByb2plY3RGaWVsZC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHlGaWVsZC52YWx1ZSxcbiAgICAgICAgZGF0ZUZpZWxkLnZhbHVlLFxuICAgICAgICB0aW1lRmllbGQudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5RmllbGQudmFsdWVcbiAgICAgICk7XG4gICAgICB1cGRhdGVTdG9yYWdlKHRvZG9zKTtcblxuICAgICAgY29uc3Qgbm9UYXNrTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby10YXNrLW1lc3NhZ2UnKTtcbiAgICAgIGlmIChub1Rhc2tNZXNzYWdlKSB7XG4gICAgICAgIG5vVGFza01lc3NhZ2UucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXNrU3Vic2V0KSB7XG4gICAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCAnQWxsJywgcGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SUQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wb25lbnQucmVwbGFjZVdpdGgobm9kZVRvUmVwbGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRGb3JtQ29tcG9uZW50KG5vZGVUb1JlcGxhY2UpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICBjb21wb25lbnQuaWQgPSBcImZvcm1cIjtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgbm9kZVRvUmVwbGFjZS5yZXBsYWNlV2l0aChjb21wb25lbnQpO1xuXG4gIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZUlucHV0KHBhcmVudCwgZWxlbSwgaWQsIHR5cGUsIGxhYmVsVGV4dCwgd2FybmluZykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgY29uc3QgbGFiZWxXcmFwcGVyID0gYWRkRWxlbWVudCgnZGl2JywgZmllbGREaXYsIFsnbGFiZWwtd3JhcHBlciddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBsYWJlbFdyYXBwZXIsIFtdLCBsYWJlbFRleHQsIHtodG1sRm9yOiBpZH0pO1xuICBhZGRFbGVtZW50KCdwJywgbGFiZWxXcmFwcGVyLCBbJ3dhcm5pbmcnXSwgd2FybmluZyk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgnaW5wdXQnLCBmaWVsZERpdiwgW10sIG51bGwsIHt0eXBlOiB0eXBlLCBpZDogaWR9KTtcblxuICBpZiAoZWxlbSkge1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gIH1cbiAgcmV0dXJuIGZpZWxkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0KHBhcmVudCwgdGFzaywgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sICdQcm9qZWN0OicsIHtodG1sRm9yOiAncHJvamVjdCd9KTtcbiAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGFkZEVsZW1lbnQoJ2RpdicsIGZpZWxkRGl2LCBbJ3NlbGVjdCddKTtcbiAgY29uc3QgZmllbGQgPSBhZGRFbGVtZW50KCdzZWxlY3QnLCBzZWxlY3RXcmFwcGVyLCBbXSwgbnVsbCwge2lkOiAncHJvamVjdCd9KTtcblxuICBjb25zdCBub25lT3B0aW9uID0gYWRkRWxlbWVudCgnb3B0aW9uJywgZmllbGQsIFtdLCAnTm9uZScsIHt2YWx1ZTogMH0pO1xuXG4gIGlmICghdGFzaykge1xuICAgIG5vbmVPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZm9yIChjb25zdCBvcHQgb2Ygb3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGFkZEVsZW1lbnQoJ29wdGlvbicsIGZpZWxkLCBbXSwgb3B0LmdldFRpdGxlKCksIHt2YWx1ZTogb3B0LmdldElkKCl9KTtcblxuICAgIGlmICh0YXNrICYmIHRhc2suZ2V0UHJvamVjdElkKCkgPT09IG9wdC5nZXRJZCgpKSB7XG4gICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmllbGQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5U2VsZWN0KHBhcmVudCwgdGFzaywgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sICdQcmlvcml0eScsIHtodG1sRm9yOiAncHJpb3JpdHknfSk7XG4gIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBmaWVsZERpdiwgWydzZWxlY3QnXSk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgnc2VsZWN0Jywgc2VsZWN0V3JhcHBlciwgW10sIG51bGwsIHtpZDogJ3ByaW9yaXR5J30pO1xuXG4gIGZvciAoY29uc3Qgb3B0IG9mIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBhZGRFbGVtZW50KCdvcHRpb24nLCBmaWVsZCwgW10sIG9wdCwge3ZhbHVlOiBvcHR9KTtcbiAgXG4gICAgaWYgKHRhc2sgJiYgb3B0ID09PSB0YXNrLmdldFByaW9yaXR5KCkpIHtcbiAgICAgIHNlbGVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWVsZDsgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRhcmVhKHBhcmVudCwgZWxlbSwgaWQsIGxhYmVsVGV4dCkge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sIGxhYmVsVGV4dCwge2h0bWxGb3I6IGlkfSk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgndGV4dGFyZWEnLCBmaWVsZERpdiwgW10sIG51bGwsIHtpZDogaWR9KTtcblxuICBpZiAoZWxlbSkge1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gIH1cblxuICByZXR1cm4gZmllbGQ7IFxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGZpZWxkcykge1xuICBsZXQgZ29vZCA9IHRydWU7XG4gIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICBpZiAoZi52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIGdvb2QgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRoZUZvcm0gPSBmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgIGNvbnN0IHdhcm5pbmcgPSB0aGVGb3JtLnF1ZXJ5U2VsZWN0b3IoJy53YXJuaW5nJyk7XG4gICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdvb2Q7XG59IiwiaW1wb3J0IHsgb3JkZXJCeURhdGUsIGdldENhdGVnb3JpZXMgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2plY3RDb21wb25lbnQuanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2Zvcm1hdC1saXN0LWJ1bGxldGVkLnN2Z1wiO1xuaW1wb3J0IEFsYXJtIGZyb20gXCIuL2FsYXJtLnN2Z1wiO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL2NhbGVuZGFyLW1vbnRoLnN2Z1wiO1xuaW1wb3J0IENoZWNrIGZyb20gXCIuL2NoZWNrLWNpcmNsZS5zdmdcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IHsgYWRkRWxlbWVudCwgYWRkSW1hZ2UgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZDb21wb25lbnQodG9kb3MsIHBhcmVudCkge1xuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiXG5cbiAgY29uc3QgY29tcG9uZW50ID0gYWRkRWxlbWVudCgnbmF2JywgcGFyZW50LCBbJ25hdiddKTtcbiAgY29uc3QgdGFza3NEaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBjb21wb25lbnQsIFtdKTtcbiAgYWRkRWxlbWVudCgnaDInLCB0YXNrc0RpdiwgW10sIFwiVGFza3NcIik7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFsnQWxsJywgJ1RvZGF5JywgJ1VwY29taW5nJywgJ0NvbXBsZXRlZCddO1xuICBjb25zdCBpY29ucyA9IFtMaXN0LCBBbGFybSwgQ2FsZW5kYXIsIENoZWNrXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpICsrKSB7XG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGFkZEVsZW1lbnQoJ2RpdicsIHRhc2tzRGl2LCBbJ25hdi1idXR0b24td3JhcHBlciddKTtcbiAgICBhZGRJbWFnZShpY29uc1tpXSwgYnV0dG9uV3JhcHBlciwgWydpY29uJ10pO1xuICAgIGFkZEVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbldyYXBwZXIsIFtdLCBidXR0b25zW2ldKTtcbiAgfVxuXG4gIGFkZFRhc2tMaXN0ZW5lcih0YXNrc0RpdiwgdG9kb3MpO1xuXG4gIGNvbnN0IHByb2plY3RzRGl2ID0gYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbXSk7XG4gIGFkZEVsZW1lbnQoJ2gyJywgcHJvamVjdHNEaXYsIFtdLCAnUHJvamVjdHMnKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IHRvZG9zLmdldFByb2plY3RzKCk7XG5cbiAgZm9yIChjb25zdCBjYXQgb2YgZ2V0Q2F0ZWdvcmllcyhwcm9qZWN0cykpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gYWRkRWxlbWVudCgnZGl2JywgcHJvamVjdHNEaXYsIFsncHJvamVjdC1kaXYnXSk7XG4gICAgYWRkRWxlbWVudCgnaDMnLCBwcm9qZWN0RGl2LCBbXSwgY2F0KTtcblxuICAgIGNvbnN0IHNvcnRlZFByb2plY3RzID0gb3JkZXJCeURhdGUocHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpID09PSBjYXQpKTtcblxuICAgIGZvciAoY29uc3QgcCBvZiBzb3J0ZWRQcm9qZWN0cykgeyBcbiAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBwcm9qZWN0RGl2LCBbJ25hdi1idXR0b24td3JhcHBlciddKVxuICAgICAgYWRkSW1hZ2UoQ2lyY2xlLCBidXR0b25XcmFwcGVyLCBbJ3NtYWxsLWljb24nXSk7XG4gICAgICBhZGRFbGVtZW50KCdidXR0b24nLCBidXR0b25XcmFwcGVyLCBbJ3Byb2plY3QtaXRlbSddLCBwLmdldFRpdGxlKCksIHtcImRhdGEtaWRcIjogcC5nZXRJZCgpfSlcbiAgICB9XG4gIH1cbiAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzRGl2LCB0b2Rvcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBlLnRhcmdldC50ZXh0Q29udGVudCwgY29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdExpc3RlbmVyKGJ1dHRvbkRpdiwgdG9kb3MpIHtcbiAgYnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZCksIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgU2NoZWR1bGFibGUgfSBmcm9tIFwiLi9zY2hlZHVsYWJsZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdCA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuICBjb25zdCBzY2hlZHVsYWJsZSA9IFNjaGVkdWxhYmxlKGRhdGUsIHRpbWUpO1xuICB0aXRsZSA9IHRpdGxlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICBjYXRlZ29yeSA9IGNhdGVnb3J5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IHNldENhdGVnb3J5ID0gKG5ld0NhdGVnb3J5KSA9PiB7XG4gICAgY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGRhdGU6IHNjaGVkdWxhYmxlLmdldERhdGUoKSxcbiAgICAgIHRpbWU6IHNjaGVkdWxhYmxlLmdldFRpbWUoKSxcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc2NoZWR1bGFibGUsXG4gICAgZ2V0SWQsXG4gICAgZ2V0VGl0bGUsXG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0Q2F0ZWdvcnksXG4gICAgc2V0Q2F0ZWdvcnksXG4gICAgdG9KU09OXG4gIH07XG59OyIsImltcG9ydCB7IG9yZGVyQnlEYXRlLCBnZXRDYXRlZ29yaWVzLCBnZW5lcmF0ZVRhc2tJdGVtSWQgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0dyb3VwLCBjcmVhdGVUYXNrSXRlbSwgYWRkTmV3Rm9ybUJ0bnMsIGFkZEVsZW1lbnR9IGZyb20gXCIuL3N1YmNvbXBvbmVudHMuanNcIjtcbmltcG9ydCB7IHByb2plY3RGb3JtQ29tcG9uZW50LCB0YXNrRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3RJZCwgcGFyZW50KSB7XG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgYWRkTmV3Rm9ybUJ0bnMocGFyZW50KTtcblxuICBjb25zdCBjb21wb25lbnQgPSBhZGRFbGVtZW50KCdkaXYnLCBwYXJlbnQsIFsnY29tcG9uZW50J10pO1xuICBjb25zdCBoZWFkZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBjb21wb25lbnQsIFsncHJvamVjdC1oZWFkZXInXSk7XG4gIGFkZEVsZW1lbnQoJ2gxJywgaGVhZGVyLCBbXSwgdG9kb3MuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKS5nZXRUaXRsZSgpKTtcbiAgYWRkRWxlbWVudCgncCcsIGhlYWRlciwgW10sIHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZGF0ZUZvcm1hdHRlZCgpKTtcbiAgYWRkRWxlbWVudCgnYnV0dG9uJywgaGVhZGVyLCBbJ2VkaXQtcHJvamVjdCddLCAnRWRpdCcsIHtpZDogJ2VkaXQtcHJvamVjdCd9KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZ2V0RGVzY3JpcHRpb24oKTtcbiAgaWYgKGRlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgYWRkRWxlbWVudCgncCcsIGNvbXBvbmVudCwgW10sIGRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGFkZEVsZW1lbnQoJ2RpdicsIGNvbXBvbmVudCwgW10sIG51bGwsIHtpZDogJ2Zvcm0nfSk7IFxuXG4gIGNvbnN0IHByb2plY3REaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBjb21wb25lbnQsIFsnbWFpbi1jb250ZW50J10pO1xuXG4gIGNvbnN0IHRhc2tzID0gdG9kb3MuZ2V0VGFza3NCeVByb2plY3RJZChwcm9qZWN0SWQpOyBcblxuICBmb3IgKGNvbnN0IGNhdCBvZiBnZXRDYXRlZ29yaWVzKHRhc2tzKSkgeyBcbiAgICBjb25zdCBncm91cCA9IGNyZWF0ZVRhc2tHcm91cChwcm9qZWN0RGl2LCBjYXQpOyBcbiAgICBjb25zdCBzb3J0ZWRUYXNrcyA9IG9yZGVyQnlEYXRlKHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0Q2F0ZWdvcnkoKSA9PT0gY2F0KSk7XG5cbiAgICBmb3IgKGNvbnN0IHQgb2Ygc29ydGVkVGFza3MpIHtcbiAgICAgIGNyZWF0ZVRhc2tJdGVtKGdyb3VwLCB0b2RvcywgdCwgdHJ1ZSwgZmFsc2UpOyBcbiAgICB9XG4gIH1cbiAgYWRkQnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHByb2plY3RJZCk7XG59XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCBwcm9qZWN0SWQpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuXG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zKTtcbiAgfSk7XG5cbiAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgZm9ybURpdiwgdG9kb3MsIG51bGwsIHByb2plY3RJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdCcpO1xuICBwcm9qZWN0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgZm9ybURpdiwgdG9kb3MsIHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkpO1xuICB9KTtcblxuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWJ1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRCdG5zLmxlbmd0aDsgaSArKyl7XG4gICAgZWRpdEJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2VuZXJhdGVUYXNrSXRlbUlkKGUudGFyZ2V0LmRhdGFzZXQudGFza2lkKSk7XG4gICAgICBjb25zdCB0YXNrID0gdG9kb3MuZ2V0VGFza0J5SWQocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC50YXNraWQpKTtcbiAgICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgdGFza0RpdiwgdG9kb3MsIG51bGwsIHByb2plY3RJZCwgdGFzayk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgU2NoZWR1bGFibGUgPSAoZGF0ZSwgdGltZSkgPT4ge1xuICBjb25zdCBnZXREYXRlQXNEYXRlID0gKCkgPT4ge1xuICAgIGlmIChkYXRlID09PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gdGltZSA9PT0gXCJcIiA/IFwiVDIzOjU5OjU5XCIgOiBcIlRcIiArIHRpbWUgKyBcIjowMFwiO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlICsgdGltZVN0cmluZyk7XG4gIH07XG5cbiAgY29uc3QgZGF0ZUZvcm1hdHRlZCA9ICgpID0+IHtcbiAgICBpZiAoZGF0ZSA9PT0gXCJcIikgcmV0dXJuIGRhdGU7XG4gICAgY29uc3QgbW9udGggPSBkYXRlWzVdID09PSBcIjBcIiA/IGRhdGUuc2xpY2UoNiwgNykgOiBkYXRlLnNsaWNlKDUsIDcpO1xuICAgIGNvbnN0IGRheSA9IGRhdGVbOF0gPT09IFwiMFwiID8gZGF0ZS5zbGljZSg5KSA6IGRhdGUuc2xpY2UoOCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuc2xpY2UoMCwgNCk7XG5cbiAgICByZXR1cm4gbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcjtcbiAgfTtcblxuICBjb25zdCB0aW1lRm9ybWF0dGVkID0gKCkgPT4ge1xuICAgIGlmICh0aW1lID09PSBcIlwiKSByZXR1cm4gdGltZTtcbiAgICBsZXQgaG91ciA9IHBhcnNlSW50KHRpbWUuc2xpY2UoMCwgMikpO1xuICAgIGNvbnN0IG1pbiA9IHRpbWUuc2xpY2UoMik7XG4gICAgY29uc3QgbSA9IGhvdXIgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgaG91ciA9IGhvdXIgPiAxMiA/IGhvdXIgLSAxMiA6IGhvdXI7XG4gICAgcmV0dXJuIGAke2hvdXJ9JHttaW59ICR7bX1gO1xuICB9O1xuXG4gIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgIGRhdGUgPSBuZXdEYXRlO1xuICB9O1xuXG4gIGNvbnN0IHNldFRpbWUgPSAobmV3VGltZSkgPT4ge1xuICAgIHRpbWUgPSBuZXdUaW1lO1xuICB9O1xuXG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cblxuICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREYXRlQXNEYXRlLFxuICAgIGRhdGVGb3JtYXR0ZWQsXG4gICAgdGltZUZvcm1hdHRlZCxcbiAgICBzZXRUaW1lLFxuICAgIGdldFRpbWUsXG4gICAgZ2V0RGF0ZSxcbiAgICBzZXREYXRlXG4gIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2UodG9kb3MpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbn0iLCJpbXBvcnQgeyBnZW5lcmF0ZVRhc2tJdGVtSWQgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCBQbHVzIGZyb20gXCIuL3BsdXMuc3ZnXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi9pbmZvcm1hdGlvbi1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRWxlbWVudCh0eXBlLCBwYXJlbnQsIGNsYXNzZXMsIHRleHRDb250ZW50ID0gbnVsbCwgb3B0aW9ucyA9IHt9KXtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG4gIGlmICh0ZXh0Q29udGVudCkgZWxlbS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50OyBcblxuICBmb3IgKGNvbnN0IG8gaW4gb3B0aW9ucykge1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKG8sIG9wdGlvbnNbb10pO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEltYWdlKHNyYywgcGFyZW50LCBjbGFzc2VzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBzcmM7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgZm9yIChjb25zdCBvIGluIG9wdGlvbnMpIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUobywgb3B0aW9uc1tvXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0Zvcm1CdG5zKHBhcmVudCkge1xuICBjb25zdCBuZXdGb3JtQnRuc0RpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWyduZXctYnV0dG9ucy1kaXYnXSk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBhZGRFbGVtZW50KCdidXR0b24nLCBuZXdGb3JtQnRuc0RpdiwgW10sIG51bGwsIHtpZDogXCJuZXctcHJvamVjdFwifSk7XG4gIGFkZEltYWdlKFBsdXMsIG5ld1Byb2plY3QpO1xuICBhZGRFbGVtZW50KCdwJywgbmV3UHJvamVjdCwgW10sIFwiTmV3IFByb2plY3RcIik7XG5cbiAgY29uc3QgbmV3VGFzayA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIG5ld0Zvcm1CdG5zRGl2LCBbXSwgbnVsbCwge2lkOiBcIm5ldy10YXNrXCJ9KTtcbiAgYWRkSW1hZ2UoUGx1cywgbmV3VGFzayk7XG4gIGFkZEVsZW1lbnQoJ3AnLCBuZXdUYXNrLCBbXSwgXCJOZXcgVGFza1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tHcm91cChwYXJlbnQsIGdyb3VwVGl0bGUpIHtcbiAgY29uc3QgZ3JvdXBEaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBwYXJlbnQsIFsndGFzay1ncm91cCddKTtcbiAgYWRkRWxlbWVudCgnaDInLCBncm91cERpdiwgW10sIGdyb3VwVGl0bGUpO1xuXG4gIHJldHVybiBncm91cERpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKHBhcmVudCwgdG9kb3MsIHRhc2ssIGluY2x1ZGVEYXRlID0gZmFsc2UsIG9uVGFza3NQYWdlID0gdHJ1ZSkgeyBcbiAgY29uc3QgaXRlbURpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpdGVtJywgdGFzay5nZXRQcmlvcml0eSgpXSwgbnVsbCwge2lkOiBnZW5lcmF0ZVRhc2tJdGVtSWQodGFzay5nZXRJZCgpKX0pO1xuICBjb25zdCBsYmwgPSBhZGRFbGVtZW50KCdsYWJlbCcsIGl0ZW1EaXYsIFtdKTtcbiAgY29uc3QgY2hlY2sgPSBhZGRFbGVtZW50KCdpbnB1dCcsIGxibCwgW10sIG51bGwsIHt0eXBlOiAnY2hlY2tib3gnfSk7XG5cbiAgaWYgKHRhc2suY29tcGxldGUoKSkge1xuICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgIGNoZWNrLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBlbHNlIHtcbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgdGFzay51cGRhdGVTdGF0dXMoKTtcbiAgICAgIHVwZGF0ZVN0b3JhZ2UodG9kb3MpO1xuXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgICAgICBpZiAocGFnZVRpdGxlLnRleHRDb250ZW50ICE9PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgY29uc3QgYW5jZXN0b3JJdGVtID0gZS50YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpO1xuICAgICAgICAgIGFuY2VzdG9ySXRlbS5jbGFzc0xpc3QuYWRkKFwiZmFkZS1vdXRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHdyYXBwZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBsYmwsIFsnaXRlbS1jb250ZW50J10pO1xuICBjb25zdCBsYWJlbENvbnRlbnQgPSBhZGRFbGVtZW50KCdzcGFuJywgd3JhcHBlciwgWydsYWJlbC1jb250ZW50J10pO1xuICBhZGRFbGVtZW50KCdzcGFuJywgbGFiZWxDb250ZW50LCBbXSwgdGFzay5nZXREZXNjcmlwdGlvbigpKTtcblxuICBpZiAodGFzay5nZXRQcm9qZWN0SWQoKSA+IDAgJiYgb25UYXNrc1BhZ2UpIHtcbiAgICBhZGRFbGVtZW50KCdzcGFuJywgbGFiZWxDb250ZW50LCBbJ3Byb2plY3QtdGl0bGUnXSwgdG9kb3MuZ2V0UHJvamVjdEJ5SWQodGFzay5nZXRQcm9qZWN0SWQoKSkuZ2V0VGl0bGUoKSk7XG4gIH1cblxuICBpZiAodGFzay50aW1lRm9ybWF0dGVkKCkgIT09IFwiXCIpIHtcbiAgICBjb25zdCB0aW1lID0gYWRkRWxlbWVudCgnZGl2Jywgd3JhcHBlciwgWydkYXRldGltZS1kaXNwbGF5J10pO1xuXG4gICAgaWYgKGluY2x1ZGVEYXRlKSB7XG4gICAgICBhZGRFbGVtZW50KCdzcGFuJywgdGltZSwgW10sIHRhc2suZGF0ZUZvcm1hdHRlZCgpKTtcbiAgICB9XG4gICAgYWRkRWxlbWVudCgnc3BhbicsIHRpbWUsIFtdLCB0YXNrLnRpbWVGb3JtYXR0ZWQoKSk7XG4gIH1cblxuICBjb25zdCBlZGl0ID0gYWRkRWxlbWVudCgnYnV0dG9uJywgd3JhcHBlciwgWydlZGl0LWJ1dHRvbiddLCBudWxsLCB7XCJkYXRhLXRhc2tJZFwiOiB0YXNrLmdldElkKCl9KTtcbiAgYWRkSW1hZ2UoSW5mbywgZWRpdCwgWydpY29uJ10sIHtcImRhdGEtdGFza0lkXCI6IHRhc2suZ2V0SWQoKX0pO1xuICBpZiAodGFzay5jb21wbGV0ZSgpKSB7XG4gICAgZWRpdC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBpZiAodGFzay5nZXRQcmlvcml0eSgpID09PSAnaGlnaCcpIHtcbiAgICBhZGRFbGVtZW50KCdwJywgd3JhcHBlciwgW10sIFwiIVwiKTtcbiAgfVxuICByZXR1cm4gaXRlbURpdjtcbn0iLCJpbXBvcnQgeyBTY2hlZHVsYWJsZSB9IGZyb20gXCIuL3NjaGVkdWxhYmxlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnksIGNvbXBsZXRlZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHNjaGVkdWxhYmxlID0gU2NoZWR1bGFibGUoZGF0ZSwgdGltZSk7XG4gIGNhdGVnb3J5ID0gY2F0ZWdvcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfTtcblxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSAobmV3Q2F0ZWdvcnkpID0+IHtcbiAgICBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgaWQ6IGlkLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgcHJvamVjdElkOiBwcm9qZWN0SWQsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICBkYXRlOiBzY2hlZHVsYWJsZS5nZXREYXRlKCksXG4gICAgICB0aW1lOiBzY2hlZHVsYWJsZS5nZXRUaW1lKCksXG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc2NoZWR1bGFibGUsXG4gICAgZ2V0SWQsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0UHJvamVjdElkLFxuICAgIGdldENhdGVnb3J5LFxuICAgIHNldENhdGVnb3J5LFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGNvbXBsZXRlLFxuICAgIHVwZGF0ZVN0YXR1cyxcbiAgICB0b0pTT04sXG4gIH07XG59OyIsImltcG9ydCB7IG9yZGVyQnlEYXRlLCBzYW1lRGF5LCBnZXREaXZUaXRsZSwgZ2VuZXJhdGVUYXNrSXRlbUlkIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tHcm91cCwgY3JlYXRlVGFza0l0ZW0sIGFkZE5ld0Zvcm1CdG5zLCBhZGRFbGVtZW50IH0gZnJvbSBcIi4vc3ViY29tcG9uZW50cy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdEZvcm1Db21wb25lbnQsIHRhc2tGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcbmltcG9ydCB7IHVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KSB7XG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgYWRkTmV3Rm9ybUJ0bnMocGFyZW50KTtcbiAgYWRkTmV3QnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHRhc2tTdWJzZXQpO1xuXG4gIGNvbnN0IHRhc2tzID0gdG9kb3NbYGdldCR7dGFza1N1YnNldH1UYXNrc2BdKCk7XG5cbiAgY29uc3QgY29tcG9uZW50ID0gYWRkRWxlbWVudCgnZGl2JywgcGFyZW50LCBbJ2NvbXBvbmVudCddKTtcbiAgY29uc3QgdGl0bGUgPSBhZGRFbGVtZW50KCdoMScsIGNvbXBvbmVudCwgW10sICh0YXNrU3Vic2V0ID09PSBcIlRvZGF5XCIgPyBcIlRhc2tzXCIgOiB0YXNrU3Vic2V0KSk7XG5cbiAgYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbXSwgbnVsbCwge2lkOiAnZm9ybSd9KTtcblxuICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgYWRkRWxlbWVudCgncCcsIGNvbXBvbmVudCwgW10sIFwiTm8gdGFza3NcIiwge2lkOiAnbm8tdGFza3MtbWVzc2FnZSd9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzb3J0ZWRUYXNrcyA9IG9yZGVyQnlEYXRlKHRhc2tzKTtcblxuICBjb25zdCB0YXNrc0RpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIGNvbXBvbmVudCwgWydtYWluLWNvbnRlbnQnXSk7XG5cbiAgbGV0IGN1cnJEYXRlID0gc29ydGVkVGFza3NbMF0uZ2V0RGF0ZUFzRGF0ZSgpO1xuICBsZXQgY3VyckRpdiA9IGNyZWF0ZVRhc2tHcm91cCh0YXNrc0RpdiwgZ2V0RGl2VGl0bGUoY3VyckRhdGUpKTsgXG5cbiAgZm9yIChjb25zdCB0IG9mIHNvcnRlZFRhc2tzKSB7XG4gICAgaWYgKHNhbWVEYXkodC5nZXREYXRlQXNEYXRlKCksIGN1cnJEYXRlKSkge1xuICAgICAgY3JlYXRlVGFza0l0ZW0oY3VyckRpdiwgdG9kb3MsIHQpOyBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjdXJyRGF0ZSA9IHQuZ2V0RGF0ZUFzRGF0ZSgpO1xuICAgICAgY3VyckRpdiA9IGNyZWF0ZVRhc2tHcm91cCh0YXNrc0RpdiwgZ2V0RGl2VGl0bGUoY3VyckRhdGUpKTtcbiAgICAgIGNyZWF0ZVRhc2tJdGVtKGN1cnJEaXYsIHRvZG9zLCB0KTtcbiAgICB9XG4gIH1cbiAgYWRkRWRpdEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCB0YXNrU3Vic2V0KTtcblxuICBpZiAodGFza1N1YnNldCA9PT0gJ0NvbXBsZXRlZCcpIHtcbiAgICBjb25zdCBjbGVhckNvbXBsZXRlZCA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIHRpdGxlLCBbJ2NsZWFyLWRlbGV0ZWQnXSwgJ2RlbGV0ZSBhbGwnKTtcbiAgICBjbGVhckNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZG9zLmNsZWFyQ29tcGxldGVkVGFza3MoKTtcbiAgICAgIHVwZGF0ZVN0b3JhZ2UodG9kb3MpO1xuXG4gICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgJ0NvbXBsZXRlZCcsIHBhcmVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3QnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHRhc2tTdWJzZXQpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG5cbiAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5vZGVUb1JlcGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MpO1xuICB9KTtcblxuICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG4gICAgdGFza0Zvcm1Db21wb25lbnQocGFyZW50LCBub2RlVG9SZXBsYWNlLCB0b2RvcywgdGFza1N1YnNldCwgbnVsbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFZGl0QnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHRhc2tTdWJzZXQpIHtcbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0QnRucy5sZW5ndGg7IGkgKyspe1xuICAgIGVkaXRCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdlbmVyYXRlVGFza0l0ZW1JZChlLnRhcmdldC5kYXRhc2V0LnRhc2tpZCkpO1xuICAgICAgY29uc3QgdGFzayA9IHRvZG9zLmdldFRhc2tCeUlkKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQudGFza2lkKSk7XG4gICAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBudWxsLCB0YXNrKTtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgc2FtZURheSB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUb2RvID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgbGV0IHRhc2tzID0gW107XG5cbiAgbGV0IHByb2plY3RJZENvdW50ZXIgPSAxO1xuICBsZXQgdGFza0lkQ291bnRlciA9IDE7XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBwID0gcHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZCgpID09PSBpZCk7XG4gICAgaWYgKHAubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gcFswXTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrQnlJZCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHQgPSB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKCkgPT09IGlkKTtcbiAgICBpZiAodC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0WzBdO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSwgaWQgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gaWQgfHwgcHJvamVjdElkQ291bnRlcjtcbiAgICBjb25zdCBwID0gUHJvamVjdChwcm9qZWN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpO1xuICAgIHByb2plY3RzLnB1c2gocCk7XG4gICAgcHJvamVjdElkQ291bnRlciA9IGlkID8gcHJvamVjdElkQ291bnRlciA6IHByb2plY3RJZENvdW50ZXIgKyAxO1xuXG4gICAgcmV0dXJuIHAuZ2V0SWQoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKGRlc2NyaXB0aW9uLCBwcm9qZWN0SWQsIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSwgaWQgPSBudWxsLCBjb21wbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJZCA9IGlkIHx8IHRhc2tJZENvdW50ZXI7XG4gICAgY29uc3QgdCA9IFRhc2sodGFza0lkLCBkZXNjcmlwdGlvbiwgcGFyc2VJbnQocHJvamVjdElkKSwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5LCBjb21wbGV0ZWQpO1xuICAgIHRhc2tzLnB1c2godCk7XG4gICAgdGFza0lkQ291bnRlciA9IGlkID8gdGFza0lkQ291bnRlciA6IHRhc2tJZENvdW50ZXIgKyAxO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoKSAhPT0gaWQpO1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRQcm9qZWN0SWQoaWQpICE9PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZChpZCkgIT09IGlkKVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQoaWQpO1xuICAgIHByb2plY3Quc2V0VGl0bGUodGl0bGUpO1xuICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuICAgIHByb2plY3Quc2V0RGF0ZShkYXRlKTtcbiAgICBwcm9qZWN0LnNldFRpbWUodGltZSk7XG4gICAgcHJvamVjdC5zZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFzayA9IChpZCwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrQnlJZChpZCk7XG4gICAgdGFzay5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgdGFzay5zZXRQcmlvcml0eShwcmlvcml0eSk7XG4gICAgdGFzay5zZXREYXRlKGRhdGUpO1xuICAgIHRhc2suc2V0VGltZSh0aW1lKTtcbiAgICB0YXNrLnNldENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckNvbXBsZXRlZFRhc2tzID0gKCkgPT4ge1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGVsZW0gPT4gIWVsZW0uY29tcGxldGUoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBjb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTsgXG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+ICFlbGVtLmNvbXBsZXRlKCkgJiYgc2FtZURheShlbGVtLmdldERhdGVBc0RhdGUoKSwgdG9kYXkpKTsgXG4gIH07XG5cbiAgY29uc3QgZ2V0VXBjb21pbmdUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IC8vd2FudCBzdGFydCBvZiBkYXlcbiAgICB0b2RheS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gKGVsZW0uZ2V0RGF0ZUFzRGF0ZSgpICE9PSBudWxsICYmIGVsZW0uZ2V0RGF0ZUFzRGF0ZSgpID49IHRvZGF5ICYmICFlbGVtLmNvbXBsZXRlKCkpKTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gIWVsZW0uY29tcGxldGUoKSk7XG4gIH1cblxuICBjb25zdCBnZXRDb21wbGV0ZWRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb21wbGV0ZSgpKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdElkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0UHJvamVjdElkKCkgPT09IGlkICYmICFlbGVtLmNvbXBsZXRlKCkpO1xuICB9O1xuXG4gIGNvbnN0IHRvSlNPTiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdElkQ291bnRlcjogcHJvamVjdElkQ291bnRlcixcbiAgICAgIHRhc2tJZENvdW50ZXI6IHRhc2tJZENvdW50ZXIsXG4gICAgICBwcm9qZWN0czogSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpLFxuICAgICAgdGFza3M6IEpTT04uc3RyaW5naWZ5KHRhc2tzKVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBmcm9tSnNvbiA9IChqc29uKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgIHByb2plY3RJZENvdW50ZXIgPSB0b2Rvcy5wcm9qZWN0SWRDb3VudGVyO1xuICAgIHRhc2tJZENvdW50ZXIgPSB0b2Rvcy50YXNrSWRDb3VudGVyO1xuXG4gICAgY29uc3QgcHJvamVjdHNBcnIgPSBKU09OLnBhcnNlKHRvZG9zLnByb2plY3RzKTtcbiAgICBjb25zdCB0YXNrc0FyciA9IEpTT04ucGFyc2UodG9kb3MudGFza3MpO1xuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHByb2plY3RzQXJyKSB7XG4gICAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgICBlbGVtLnRpdGxlLCBcbiAgICAgICAgZWxlbS5kZXNjcmlwdGlvbiwgXG4gICAgICAgIGVsZW0uZGF0ZSwgXG4gICAgICAgIGVsZW0udGltZSwgXG4gICAgICAgIGVsZW0uY2F0ZWdvcnksIFxuICAgICAgICBlbGVtLmlkXG4gICAgICApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgdGFza3NBcnIpIHtcbiAgICAgIGNyZWF0ZVRhc2soXG4gICAgICAgIGVsZW0uZGVzY3JpcHRpb24sIFxuICAgICAgICBlbGVtLnByb2plY3RJZCwgXG4gICAgICAgIGVsZW0ucHJpb3JpdHksIFxuICAgICAgICBlbGVtLmRhdGUsIFxuICAgICAgICBlbGVtLnRpbWUsIFxuICAgICAgICBlbGVtLmNhdGVnb3J5LCBcbiAgICAgICAgZWxlbS5pZCxcbiAgICAgICAgZWxlbS5jb21wbGV0ZWRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0QnlJZCxcbiAgICBnZXRUYXNrQnlJZCxcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGNyZWF0ZVRhc2ssXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBkZWxldGVUYXNrLFxuICAgIHVwZGF0ZVByb2plY3QsXG4gICAgdXBkYXRlVGFzayxcbiAgICBjbGVhckNvbXBsZXRlZFRhc2tzLFxuICAgIGdldFByb2plY3RzLFxuICAgIGdldFRhc2tzLFxuICAgIGdldFRvZGF5VGFza3MsXG4gICAgZ2V0QWxsVGFza3MsXG4gICAgZ2V0VXBjb21pbmdUYXNrcyxcbiAgICBnZXRDb21wbGV0ZWRUYXNrcyxcbiAgICBnZXRUYXNrc0J5UHJvamVjdElkLFxuICAgIHRvSlNPTixcbiAgICBmcm9tSnNvblxuICB9O1xufSIsImV4cG9ydCBmdW5jdGlvbiBvcmRlckJ5RGF0ZShvYmplY3RzV2l0aERhdGUpIHtcbiAgcmV0dXJuIG9iamVjdHNXaXRoRGF0ZS5zb3J0KCBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpICYmIGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICBpZiAoYS5nZXREYXRlQXNEYXRlKCkgPiBiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpIDwgYi5nZXREYXRlQXNEYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChhLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoYXJyKSB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhcnIubWFwKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpKTtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KGNhdGVnb3JpZXMpXS5zb3J0KCk7XG59XG5cbi8vcmlnaHQgbm93IHBhc3NpbmcgdGFza3MuLiBidXQgcmVhbGx5IHdhbnQgdG8gcGFzcyBkYXRlcyBvciBuaWxcbmV4cG9ydCBmdW5jdGlvbiBzYW1lRGF5KG9uZSwgdHdvKSB7IFxuICBpZiAoIW9uZSAmJiAhdHdvKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmICghb25lIHx8ICF0d28pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG9uZS5nZXREYXRlKCkgPT09IHR3by5nZXREYXRlKCkgJiYgXG4gICAgb25lLmdldE1vbnRoKCkgPT09IHR3by5nZXRNb250aCgpICYmXG4gICAgb25lLmdldEZ1bGxZZWFyKCkgPT09IHR3by5nZXRGdWxsWWVhcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGl2VGl0bGUoZGF0ZSkgeyBcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKCk7XG4gIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cbiAgaWYgKCFkYXRlKSB7XG4gICAgcmV0dXJuIFwiVW5zY2hlZHVsZWRcIjtcbiAgfVxuICBlbHNlIGlmIChzYW1lRGF5KGRhdGUsIHRvZGF5KSkge1xuICAgIHJldHVybiBcIlRvZGF5XCI7XG4gIH1cbiAgZWxzZSBpZiAoc2FtZURheShkYXRlLCB0b21vcnJvdykpIHtcbiAgICByZXR1cm4gXCJUb21vcnJvd1wiO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tdXMnLCB7IHdlZWtkYXk6XCJsb25nXCIsIHllYXI6XCJudW1lcmljXCIsIG1vbnRoOlwic2hvcnRcIiwgZGF5OlwibnVtZXJpY1wifSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFza0l0ZW1JZChpZCkge1xuICByZXR1cm4gYHRhc2tfJHtpZH1gO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBuYXZDb21wb25lbnQgfSBmcm9tIFwiLi9uYXYuanNcIjtcbmltcG9ydCB7IHRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3NDb21wb25lbnQuanNcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbihmdW5jdGlvbiAoKSB7XG5cbiAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuICBjb25zdCB0b2RvcyA9IFRvZG8oKTtcblxuICBpZiAoZGF0YSkge1xuICAgIHRvZG9zLmZyb21Kc29uKGRhdGEpO1xuICB9XG5cbiAgY29uc3QgbmF2UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIG5hdkNvbXBvbmVudCh0b2RvcywgbmF2UGFyZW50KTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBcIkFsbFwiLCBjb250ZW50KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9