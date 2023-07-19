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

@media only screen and (max-width: 600px) {
  main {
    padding: 3rem 5vw;
  }
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

  .project-header {
    display: flex;
    align-items: center;
    row-gap: 0.5rem;
    column-gap: 1rem;
    flex-wrap: wrap;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');\n\n/* reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\np, \nsection,\narticle {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* end reset */\n\n:root {\n  --neutral-100: rgb(255, 255, 255);\n  --netural-200: rgb(240, 240, 240);\n  --neutral-300: #264143;\n  --accent: #e99f4c;\n  --alert: #de5499;\n\n  \n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  background-color: var(--neutral-100);\n  color: var(--neutral-300);\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1;\n}\n\nmain {\n  padding: 3rem 10vw;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  gap: 1rem;\n  background-color: var(--netural-200);\n  height: 100%;\n  border-radius: 40px 0 0 0;\n}\n\n.nav > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.nav .project-div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n\n.nav button {\n  background-color: transparent;\n  border: none;\n  font-size: 0.8rem;\n}\n\n.item {\n  line-height: 1.3;\n  transition: all 500ms linear;\n}\n\n.item.fade-out {\n  transform: scaleY(0);\n  opacity: 0;\n}\n\n.item, .item label {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.item .label-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item .project-title {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.item-content {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n}\n\n.task-group {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-group h2 {\n  border-bottom: 2px solid var(--neutral-300);\n}\n\n.new-buttons-div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.new-buttons-div button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--accent);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  white-space: nowrap;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.datetime-display {\n  display: flex;\n  gap: 0.5rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: clamp(300px, 60%, 800px);\n  padding: 0.5rem 0;\n}\n\n.form input, textarea {\n  width: 100%;\n  border: 1px solid var(--neutral-300);\n  border-radius: 5px;\n  padding: 0.5rem;\n  font-family: inherit;\n  background-color: inherit;\n}\n\n.form input:focus, textarea:focus {\n  outline: 2px solid var(--alert);\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\ninput[type=\"submit\"]:focus, input[type=\"submit\"]:hover {\n  border: 1px solid var(--alert);\n  color: var(--alert);\n}\n\ninput[type=checkbox] {\n  accent-color: var(--alert);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.form button, .edit-project {\n  width: max-content;\n  text-transform: lowercase;\n  border: none;\n  background-color: transparent;\n}\n\n.form button:hover, \n.form button:focus, \n.edit-project:hover, \n.edit-project:focus {\n  color: var(--alert);\n}\n\n.edit-project {\n  font-size: 0.9rem;\n}\n\n.label-wrapper {\n  display: flex;\n  gap: 0.5rem;\n}\n\nselect {\n  margin-left: 0.5rem;\n}\n\n.warning {\n  display: none;\n  color: var(--alert);\n}\n\n.warning.show {\n  display: inline;\n}\n\n.button-div {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n\n.high {\n  color: var(--alert);\n}\n\n.icon {\n  height: 1.5rem;\n}\n\n.edit-button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  align-items: end;\n  padding: 0;\n}\n\n.nav-button-wrapper {\n  display: flex;\n  align-items: center; \n}\n\n.nav-button-wrapper .icon {\n  transform: translateY(-10%);\n}\n\n.small-icon {\n  height: 1rem;\n  transform: translateY(-10%);\n}\n\nselect {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: inherit;\n  line-height: inherit;\n  outline: none;\n}\n\n.select {\n  width: 100%;\n  min-width: 15ch;\n  border: 1px solid var(--neutral-300);\n  border-radius: 0.25em;\n  padding: 0.5em;\n  font-size: 1rem;\n  cursor: pointer;\n  background-color: transparent;\n  display: grid;\n  grid-template-areas: \"select\";\n  align-items: center;\n  position: relative;\n}\n\n.select::after {\n  content: \"\";\n  width: 0.8em;\n  height: 0.5em;\n  background-color: var(--alert);\n  clip-path: polygon(100% 0%, 0 0%, 50% 100%);\n  justify-self: end;\n}\n\nselect,\n.select:after {\n  grid-area: select;\n}\n\nselect:focus + .focus {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  border: 2px solid var(--alert);\n  border-radius: inherit;\n}\n\n@media only screen and (max-width: 600px) {\n  main {\n    padding: 3rem 5vw;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  body {\n    grid-template-columns: 1fr;\n  }\n\n  main {\n    padding: 5vw;\n    grid-row: 1;\n  }\n\n  .nav {\n    height: max-content;\n    grid-row: 2;\n  }\n\n  .new-buttons-div {\n    flex-direction: column;\n  }\n\n  .project-header {\n    display: flex;\n    align-items: center;\n    row-gap: 0.5rem;\n    column-gap: 1rem;\n    flex-wrap: wrap;\n  }\n}"],"sourceRoot":""}]);
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
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.updateStorage)(todos);
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
  console.log("in project", title, description, date, time, category, id);

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
      date: date,
      time: time,
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
      (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(group, todos, t, true); 
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
    setDate,
    setTime,
    getTime,
    getDate
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
  console.log(JSON.stringify(todos));
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

function createTaskItem(parent, todos, task, includeDate = false) { 
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

  if (task.getProjectId() > 0) {
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
      date: date,
      time: time,
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
    toJSON
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

  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addNewFormBtns)(parent);

  const tasks = todos[`get${taskSubset}Tasks`]();

  const component = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('div', parent, ['component']);
  (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.addElement)('h1', component, [], (taskSubset === "Today" ? "Tasks" : taskSubset));

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
    console.log("in todo.createProject", title, description, date, time, category, id);

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
  console.log(data);

  const todos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_3__.Todo)();

  if (data) {
    todos.fromJson(data);
    console.log(todos);
    console.log(todos.getProjects().map(elem => elem.getTitle()));
    console.log(todos.getTasks().map(elem => elem.getDescription()));
  }

  const navParent = document.querySelector('header');
  (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.navComponent)(todos, navParent);
  const content = document.getElementById('content');
  (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_2__.tasksComponent)(todos, "All", content);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLGtCQUFrQjtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsT0FBTyxZQUFZLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxnR0FBZ0csSUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQjtBQUNhO0FBQ3BCOztBQUVqQztBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLDhDQUFJOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHFEQUFZO0FBQ2Q7QUFDQSxFQUFFLGtFQUFjO0FBQ2hCLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NoZWR1bGFibGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N1YmNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2tzQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3SGVscGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogcmVzZXQgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5wLCBcbnNlY3Rpb24sXG5hcnRpY2xlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICBcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIGVuZCByZXNldCAqL1xuXG46cm9vdCB7XG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1uZXR1cmFsLTIwMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAtLW5ldXRyYWwtMzAwOiAjMjY0MTQzO1xuICAtLWFjY2VudDogI2U5OWY0YztcbiAgLS1hbGVydDogI2RlNTQ5OTtcblxuICBcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtMTAwKTtcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtMzAwKTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogM3JlbSAxMHZ3O1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDFyZW07XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBnYXA6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldHVyYWwtMjAwKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4IDAgMCAwO1xufVxuXG4ubmF2ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubmF2IC5wcm9qZWN0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXI7XG59XG5cbi5pdGVtLmZhZGUtb3V0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pdGVtLCAuaXRlbSBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLml0ZW0gLmxhYmVsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaXRlbSAucHJvamVjdC10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaXRlbS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuOHJlbTtcbn1cblxuLnRhc2stZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi50YXNrLWdyb3VwIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcbn1cblxuLm5ldy1idXR0b25zLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5ldy1idXR0b25zLWRpdiBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGhlaWdodDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmRhdGV0aW1lLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA2MCUsIDgwMHB4KTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG59XG5cbi5mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLmZvcm0gaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcbn1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cywgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBhY2NlbnQtY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmZvcm0gYnV0dG9uLCAuZWRpdC1wcm9qZWN0IHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybSBidXR0b246aG92ZXIsIFxuLmZvcm0gYnV0dG9uOmZvY3VzLCBcbi5lZGl0LXByb2plY3Q6aG92ZXIsIFxuLmVkaXQtcHJvamVjdDpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbi5lZGl0LXByb2plY3Qge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmxhYmVsLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLndhcm5pbmcge1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG4ud2FybmluZy5zaG93IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uYnV0dG9uLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGlnaCB7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5lZGl0LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYXYtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyBcbn1cblxuLm5hdi1idXR0b24td3JhcHBlciAuaWNvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuLnNtYWxsLWljb24ge1xuICBoZWlnaHQ6IDFyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuc2VsZWN0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCAxZW0gMCAwO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTVjaDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2VsZWN0XCI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlbGVjdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMC44ZW07XG4gIGhlaWdodDogMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsZXJ0KTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCUsIDAgMCUsIDUwJSAxMDAlKTtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbnNlbGVjdCxcbi5zZWxlY3Q6YWZ0ZXIge1xuICBncmlkLWFyZWE6IHNlbGVjdDtcbn1cblxuc2VsZWN0OmZvY3VzICsgLmZvY3VzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcHg7XG4gIGxlZnQ6IC0xcHg7XG4gIHJpZ2h0OiAtMXB4O1xuICBib3R0b206IC0xcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAzcmVtIDV2dztcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIGJvZHkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgbWFpbiB7XG4gICAgcGFkZGluZzogNXZ3O1xuICAgIGdyaWQtcm93OiAxO1xuICB9XG5cbiAgLm5hdiB7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBncmlkLXJvdzogMjtcbiAgfVxuXG4gIC5uZXctYnV0dG9ucy1kaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAucHJvamVjdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByb3ctZ2FwOiAwLjVyZW07XG4gICAgY29sdW1uLWdhcDogMXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsVUFBVTtBQUNWOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7RUFPRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0dBQ0MscUJBQXFCO0VBQ3RCOztFQUVBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRjtBQUNBLGNBQWM7O0FBRWQ7RUFDRSxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCOzs7QUFHbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFF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LGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQ0FBMkM7RUFDM0MsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogcmVzZXQgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbnAsIFxcbnNlY3Rpb24sXFxuYXJ0aWNsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuICBcXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG4vKiBlbmQgcmVzZXQgKi9cXG5cXG46cm9vdCB7XFxuICAtLW5ldXRyYWwtMTAwOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLW5ldHVyYWwtMjAwOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAtLW5ldXRyYWwtMzAwOiAjMjY0MTQzO1xcbiAgLS1hY2NlbnQ6ICNlOTlmNGM7XFxuICAtLWFsZXJ0OiAjZGU1NDk5O1xcblxcbiAgXFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLTEwMCk7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC0zMDApO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAzcmVtIDEwdnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV0dXJhbC0yMDApO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgMDtcXG59XFxuXFxuLm5hdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXYgLnByb2plY3QtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXI7XFxufVxcblxcbi5pdGVtLmZhZGUtb3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLml0ZW0sIC5pdGVtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaXRlbSAubGFiZWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtIC5wcm9qZWN0LXRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLml0ZW0tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4udGFzay1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2stZ3JvdXAgaDIge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcXG59XFxuXFxuLm5ldy1idXR0b25zLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMtZGl2IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kYXRldGltZS1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNjAlLCA4MDBweCk7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuXFxuLmZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZm9ybSBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hbGVydCk7XFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBhY2NlbnQtY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiwgLmVkaXQtcHJvamVjdCB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5mb3JtIGJ1dHRvbjpob3ZlciwgXFxuLmZvcm0gYnV0dG9uOmZvY3VzLCBcXG4uZWRpdC1wcm9qZWN0OmhvdmVyLCBcXG4uZWRpdC1wcm9qZWN0OmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5sYWJlbC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi53YXJuaW5nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG4ud2FybmluZy5zaG93IHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLmljb24ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5lZGl0LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5uYXYtYnV0dG9uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbn1cXG5cXG4ubmF2LWJ1dHRvbi13cmFwcGVyIC5pY29uIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuLnNtYWxsLWljb24ge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMCAxZW0gMCAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGN1cnNvcjogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTVjaDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInNlbGVjdFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VsZWN0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjhlbTtcXG4gIGhlaWdodDogMC41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGVydCk7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwJSwgMCAwJSwgNTAlIDEwMCUpO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbnNlbGVjdCxcXG4uc2VsZWN0OmFmdGVyIHtcXG4gIGdyaWQtYXJlYTogc2VsZWN0O1xcbn1cXG5cXG5zZWxlY3Q6Zm9jdXMgKyAuZm9jdXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMXB4O1xcbiAgbGVmdDogLTFweDtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgYm90dG9tOiAtMXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWxlcnQpO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDNyZW0gNXZ3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgcGFkZGluZzogNXZ3O1xcbiAgICBncmlkLXJvdzogMTtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBncmlkLXJvdzogMjtcXG4gIH1cXG5cXG4gIC5uZXctYnV0dG9ucy1kaXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMC41cmVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvamVjdENvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgbmF2Q29tcG9uZW50IH0gZnJvbSBcIi4vbmF2LmpzXCI7XG5pbXBvcnQgeyBhZGRFbGVtZW50IH0gZnJvbSBcIi4vc3ViY29tcG9uZW50cy5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHByb2plY3QgPSBudWxsKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGFkZEZvcm1Db21wb25lbnQobm9kZVRvUmVwbGFjZSk7XG4gIGNvbnN0IGYgPSBhZGRFbGVtZW50KCdmb3JtJywgY29tcG9uZW50LCBbXSk7XG5cbiAgY29uc3QgdGl0bGVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KGYsIHByb2plY3QsIFwidGl0bGVcIiwgXCJ0ZXh0XCIsIFwiVGl0bGU6ICpcIiwgXCJQcm9qZWN0IG11c3QgaGF2ZSBhIHRpdGxlLlwiKTtcbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KGYsIHByb2plY3QsIFwiY2F0ZWdvcnlcIiwgXCJ0ZXh0XCIsIFwiQ2F0ZWdvcnk6XCIsIFwiXCIpXG4gIGNvbnN0IGRhdGVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KGYsIHByb2plY3QsIFwiZGF0ZVwiLCBcImRhdGVcIiwgXCJEZWFkbGluZTpcIiwgXCJcIik7XG4gIGNvbnN0IHRpbWVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KGYsIHByb2plY3QsIFwidGltZVwiLCBcInRpbWVcIiwgXCJUaW1lOlwiLCBcIlwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25GaWVsZCA9IGNyZWF0ZVRleHRhcmVhKGYsIHByb2plY3QsIFwiZGVzY3JpcHRpb25cIiwgXCJEZXNjcmlwdGlvbjpcIik7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gYWRkRWxlbWVudCgnaW5wdXQnLCBmLCBbXSwgbnVsbCwge3R5cGU6ICdzdWJtaXQnfSk7XG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIGYsIFsnYnV0dG9uLWRpdiddKTtcbiAgY29uc3QgY2FuY2VsID0gYWRkRWxlbWVudCgnYnV0dG9uJywgYnV0dG9uc0RpdiwgW10sICdDYW5jZWwnKTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbnNEaXYsIFsnZGVsZXRlLWJ0biddLCAnRGVsZXRlIFByb2plY3QnKTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdG9kb3MuZGVsZXRlUHJvamVjdChwcm9qZWN0LmdldElkKCkpO1xuICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIFwiQWxsXCIsIHBhcmVudCk7IC8vd2FudCB0byBnbyB0byBcImhvbWVcIiArIGFsc28gbmVlZCB0byByZWRyYXcgbmF2IVxuICAgICAgbmF2Q29tcG9uZW50KHRvZG9zLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSk7XG4gICAgICB1cGRhdGVTdG9yYWdlKHRvZG9zKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdmFsaWRhdGVzID0gdmFsaWRhdGVJbnB1dChbdGl0bGVGaWVsZF0pO1xuICAgIGlmICghdmFsaWRhdGVzKSByZXR1cm47IFxuXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIHRvZG9zLnVwZGF0ZVByb2plY3QoXG4gICAgICAgIHByb2plY3QuZ2V0SWQoKSwgXG4gICAgICAgIHRpdGxlRmllbGQudmFsdWUsIFxuICAgICAgICBkZXNjcmlwdGlvbkZpZWxkLnZhbHVlLFxuICAgICAgICBkYXRlRmllbGQudmFsdWUsXG4gICAgICAgIHRpbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlGaWVsZC52YWx1ZVxuICAgICAgKTtcbiAgICAgIHByb2plY3RDb21wb25lbnQodG9kb3MsIHByb2plY3QuZ2V0SWQoKSwgcGFyZW50KTtcbiAgICB9XG4gICAgZWxzZSB7IFxuICAgICAgY29uc3QgcHJvamVjdElkID0gdG9kb3MuY3JlYXRlUHJvamVjdChcbiAgICAgICAgdGl0bGVGaWVsZC52YWx1ZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uRmllbGQudmFsdWUsXG4gICAgICAgIGRhdGVGaWVsZC52YWx1ZSxcbiAgICAgICAgdGltZUZpZWxkLnZhbHVlLFxuICAgICAgICBjYXRlZ29yeUZpZWxkLnZhbHVlXG4gICAgICApO1xuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElkLCBwYXJlbnQpO1xuICAgIH1cbiAgICAvL3JlZHJhdyBuYXYsIGJjIG1pZ2h0IGhhdmUgY2hhbmdlZCB0aXRsZSBldmVuIGlmIGp1c3QgdXBkYXRlXG4gICAgbmF2Q29tcG9uZW50KHRvZG9zLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSk7XG4gICAgdXBkYXRlU3RvcmFnZSh0b2Rvcyk7XG4gIH0pO1xuXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbXBvbmVudC5yZXBsYWNlV2l0aChub2RlVG9SZXBsYWNlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCB0YXNrU3Vic2V0LCBwcm9qZWN0SUQsIHRhc2sgPSBudWxsKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGFkZEZvcm1Db21wb25lbnQobm9kZVRvUmVwbGFjZSk7XG4gIGNvbnN0IGYgPSBhZGRFbGVtZW50KCdmb3JtJywgY29tcG9uZW50LCBbXSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25GaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KGYsIHRhc2ssIFwiZGVzY3JpcHRpb25cIiwgXCJ0ZXh0XCIsIFwiVGFzazogKlwiLCBcIk11c3QgaGF2ZSB0YXNrLlwiKTtcbiAgbGV0IHByb2plY3RGaWVsZDtcblxuICBpZiAoIXRhc2sgJiYgIXByb2plY3RJRCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gdG9kb3MuZ2V0UHJvamVjdHMoKTsgXG4gICAgcHJvamVjdEZpZWxkID0gY3JlYXRlUHJvamVjdFNlbGVjdChmLCB0YXNrLCBwcm9qZWN0cyk7XG4gIH1cbiAgZWxzZSBpZiAoIXRhc2sgJiYgcHJvamVjdElEKSB7XG4gICAgcHJvamVjdEZpZWxkID0gYWRkRWxlbWVudCgnaW5wdXQnLCBmLCBbXSwgbnVsbCwge3R5cGU6ICdoaWRkZW4nLCB2YWx1ZTogcHJvamVjdElELCBpZDogJ3Byb2plY3QnfSk7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eUZpZWxkID0gY3JlYXRlUHJpb3JpdHlTZWxlY3QoZiwgdGFzaywgW1wibG93XCIsIFwibWVkaXVtXCIsIFwiaGlnaFwiXSk7XG4gIGNvbnN0IGRhdGVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KGYsIHRhc2ssIFwiZGF0ZVwiLCBcImRhdGVcIiwgXCJEZWFkbGluZTpcIiwgXCJcIik7XG4gIGNvbnN0IHRpbWVGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KGYsIHRhc2ssIFwidGltZVwiLCBcInRpbWVcIiwgXCJUaW1lOlwiLCBcIlwiKTtcbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGNyZWF0ZVNpbXBsZUlucHV0KGYsIHRhc2ssIFwiY2F0ZWdvcnlcIiwgXCJ0ZXh0XCIsIFwiQ2F0ZWdvcnk6XCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGFkZEVsZW1lbnQoJ2lucHV0JywgZiwgW10sIG51bGwsIHt0eXBlOiAnc3VibWl0J30pO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBmLCBbJ2J1dHRvbi1kaXYnXSk7XG4gIGNvbnN0IGNhbmNlbCA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbnNEaXYsIFtdLCAnQ2FuY2VsJyk7XG5cbiAgaWYgKHRhc2spIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBhZGRFbGVtZW50KCdidXR0b24nLCBidXR0b25zRGl2LCBbJ2RlbGV0ZS1idG4nXSwgJ0RlbGV0ZSBUYXNrJyk7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZG9zLmRlbGV0ZVRhc2sodGFzay5nZXRJZCgpKTtcblxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgICAgdXBkYXRlU3RvcmFnZSh0b2Rvcyk7XG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlSW5wdXQoW2Rlc2NyaXB0aW9uRmllbGRdKTtcbiAgICBpZiAoIXZhbGlkYXRlcykgcmV0dXJuOyBcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICB0b2Rvcy51cGRhdGVUYXNrKFxuICAgICAgICB0YXNrLmdldElkKCksIFxuICAgICAgICBkZXNjcmlwdGlvbkZpZWxkLnZhbHVlLFxuICAgICAgICBwcmlvcml0eUZpZWxkLnZhbHVlLFxuICAgICAgICBkYXRlRmllbGQudmFsdWUsXG4gICAgICAgIHRpbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlGaWVsZC52YWx1ZVxuICAgICAgKTtcbiAgICAgIFxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRvZG9zLmNyZWF0ZVRhc2soXG4gICAgICAgIGRlc2NyaXB0aW9uRmllbGQudmFsdWUsXG4gICAgICAgIHByb2plY3RGaWVsZC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHlGaWVsZC52YWx1ZSxcbiAgICAgICAgZGF0ZUZpZWxkLnZhbHVlLFxuICAgICAgICB0aW1lRmllbGQudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5RmllbGQudmFsdWVcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5vVGFza01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8tdGFzay1tZXNzYWdlJyk7XG4gICAgICBpZiAobm9UYXNrTWVzc2FnZSkge1xuICAgICAgICBub1Rhc2tNZXNzYWdlLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFza1N1YnNldCkge1xuICAgICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SUQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVN0b3JhZ2UodG9kb3MpO1xuICB9KTtcblxuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wb25lbnQucmVwbGFjZVdpdGgobm9kZVRvUmVwbGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRGb3JtQ29tcG9uZW50KG5vZGVUb1JlcGxhY2UpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICBjb21wb25lbnQuaWQgPSBcImZvcm1cIjtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgbm9kZVRvUmVwbGFjZS5yZXBsYWNlV2l0aChjb21wb25lbnQpO1xuXG4gIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZUlucHV0KHBhcmVudCwgZWxlbSwgaWQsIHR5cGUsIGxhYmVsVGV4dCwgd2FybmluZykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgY29uc3QgbGFiZWxXcmFwcGVyID0gYWRkRWxlbWVudCgnZGl2JywgZmllbGREaXYsIFsnbGFiZWwtd3JhcHBlciddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBsYWJlbFdyYXBwZXIsIFtdLCBsYWJlbFRleHQsIHtodG1sRm9yOiBpZH0pO1xuICBhZGRFbGVtZW50KCdwJywgbGFiZWxXcmFwcGVyLCBbJ3dhcm5pbmcnXSwgd2FybmluZyk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgnaW5wdXQnLCBmaWVsZERpdiwgW10sIG51bGwsIHt0eXBlOiB0eXBlLCBpZDogaWR9KTtcblxuICBpZiAoZWxlbSkge1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gIH1cbiAgcmV0dXJuIGZpZWxkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0KHBhcmVudCwgdGFzaywgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sICdQcm9qZWN0OicsIHtodG1sRm9yOiAncHJvamVjdCd9KTtcbiAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGFkZEVsZW1lbnQoJ2RpdicsIGZpZWxkRGl2LCBbJ3NlbGVjdCddKTtcbiAgY29uc3QgZmllbGQgPSBhZGRFbGVtZW50KCdzZWxlY3QnLCBzZWxlY3RXcmFwcGVyLCBbXSwgbnVsbCwge2lkOiAncHJvamVjdCd9KTtcblxuICBjb25zdCBub25lT3B0aW9uID0gYWRkRWxlbWVudCgnb3B0aW9uJywgZmllbGQsIFtdLCAnTm9uZScsIHt2YWx1ZTogMH0pO1xuXG4gIGlmICghdGFzaykge1xuICAgIG5vbmVPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZm9yIChjb25zdCBvcHQgb2Ygb3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGFkZEVsZW1lbnQoJ29wdGlvbicsIGZpZWxkLCBbXSwgb3B0LmdldFRpdGxlKCksIHt2YWx1ZTogb3B0LmdldElkKCl9KTtcblxuICAgIGlmICh0YXNrICYmIHRhc2suZ2V0UHJvamVjdElkKCkgPT09IG9wdC5nZXRJZCgpKSB7XG4gICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmllbGQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5U2VsZWN0KHBhcmVudCwgdGFzaywgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sICdQcmlvcml0eScsIHtodG1sRm9yOiAncHJpb3JpdHknfSk7XG4gIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBmaWVsZERpdiwgWydzZWxlY3QnXSk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgnc2VsZWN0Jywgc2VsZWN0V3JhcHBlciwgW10sIG51bGwsIHtpZDogJ3ByaW9yaXR5J30pO1xuXG4gIGZvciAoY29uc3Qgb3B0IG9mIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBhZGRFbGVtZW50KCdvcHRpb24nLCBmaWVsZCwgW10sIG9wdCwge3ZhbHVlOiBvcHR9KTtcbiAgXG4gICAgaWYgKHRhc2sgJiYgb3B0ID09PSB0YXNrLmdldFByaW9yaXR5KCkpIHtcbiAgICAgIHNlbGVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWVsZDsgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRhcmVhKHBhcmVudCwgZWxlbSwgaWQsIGxhYmVsVGV4dCkge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sIGxhYmVsVGV4dCwge2h0bWxGb3I6IGlkfSk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgndGV4dGFyZWEnLCBmaWVsZERpdiwgW10sIG51bGwsIHtpZDogaWR9KTtcblxuICBpZiAoZWxlbSkge1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gIH1cblxuICByZXR1cm4gZmllbGQ7IFxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGZpZWxkcykge1xuICBsZXQgZ29vZCA9IHRydWU7XG4gIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICBpZiAoZi52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIGdvb2QgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRoZUZvcm0gPSBmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgIGNvbnN0IHdhcm5pbmcgPSB0aGVGb3JtLnF1ZXJ5U2VsZWN0b3IoJy53YXJuaW5nJyk7XG4gICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdvb2Q7XG59IiwiaW1wb3J0IHsgb3JkZXJCeURhdGUsIGdldENhdGVnb3JpZXMgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2plY3RDb21wb25lbnQuanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2Zvcm1hdC1saXN0LWJ1bGxldGVkLnN2Z1wiO1xuaW1wb3J0IEFsYXJtIGZyb20gXCIuL2FsYXJtLnN2Z1wiO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL2NhbGVuZGFyLW1vbnRoLnN2Z1wiO1xuaW1wb3J0IENoZWNrIGZyb20gXCIuL2NoZWNrLWNpcmNsZS5zdmdcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IHsgYWRkRWxlbWVudCwgYWRkSW1hZ2UgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZDb21wb25lbnQodG9kb3MsIHBhcmVudCkge1xuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiXG5cbiAgY29uc3QgY29tcG9uZW50ID0gYWRkRWxlbWVudCgnbmF2JywgcGFyZW50LCBbJ25hdiddKTtcbiAgY29uc3QgdGFza3NEaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBjb21wb25lbnQsIFtdKTtcbiAgYWRkRWxlbWVudCgnaDInLCB0YXNrc0RpdiwgW10sIFwiVGFza3NcIik7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFsnQWxsJywgJ1RvZGF5JywgJ1VwY29taW5nJywgJ0NvbXBsZXRlZCddO1xuICBjb25zdCBpY29ucyA9IFtMaXN0LCBBbGFybSwgQ2FsZW5kYXIsIENoZWNrXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpICsrKSB7XG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGFkZEVsZW1lbnQoJ2RpdicsIHRhc2tzRGl2LCBbJ25hdi1idXR0b24td3JhcHBlciddKTtcbiAgICBhZGRJbWFnZShpY29uc1tpXSwgYnV0dG9uV3JhcHBlciwgWydpY29uJ10pO1xuICAgIGFkZEVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbldyYXBwZXIsIFtdLCBidXR0b25zW2ldKTtcbiAgfVxuXG4gIGFkZFRhc2tMaXN0ZW5lcih0YXNrc0RpdiwgdG9kb3MpO1xuXG4gIGNvbnN0IHByb2plY3RzRGl2ID0gYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbXSk7XG4gIGFkZEVsZW1lbnQoJ2gyJywgcHJvamVjdHNEaXYsIFtdLCAnUHJvamVjdHMnKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IHRvZG9zLmdldFByb2plY3RzKCk7XG5cbiAgZm9yIChjb25zdCBjYXQgb2YgZ2V0Q2F0ZWdvcmllcyhwcm9qZWN0cykpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gYWRkRWxlbWVudCgnZGl2JywgcHJvamVjdHNEaXYsIFsncHJvamVjdC1kaXYnXSk7XG4gICAgYWRkRWxlbWVudCgnaDMnLCBwcm9qZWN0RGl2LCBbXSwgY2F0KTtcblxuICAgIGNvbnN0IHNvcnRlZFByb2plY3RzID0gb3JkZXJCeURhdGUocHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpID09PSBjYXQpKTtcblxuICAgIGZvciAoY29uc3QgcCBvZiBzb3J0ZWRQcm9qZWN0cykgeyBcbiAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBwcm9qZWN0RGl2LCBbJ25hdi1idXR0b24td3JhcHBlciddKVxuICAgICAgYWRkSW1hZ2UoQ2lyY2xlLCBidXR0b25XcmFwcGVyLCBbJ3NtYWxsLWljb24nXSk7XG4gICAgICBhZGRFbGVtZW50KCdidXR0b24nLCBidXR0b25XcmFwcGVyLCBbJ3Byb2plY3QtaXRlbSddLCBwLmdldFRpdGxlKCksIHtcImRhdGEtaWRcIjogcC5nZXRJZCgpfSlcbiAgICB9XG4gIH1cbiAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzRGl2LCB0b2Rvcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBlLnRhcmdldC50ZXh0Q29udGVudCwgY29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdExpc3RlbmVyKGJ1dHRvbkRpdiwgdG9kb3MpIHtcbiAgYnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZCksIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgU2NoZWR1bGFibGUgfSBmcm9tIFwiLi9zY2hlZHVsYWJsZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdCA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImluIHByb2plY3RcIiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSwgaWQpO1xuXG4gIGNvbnN0IHNjaGVkdWxhYmxlID0gU2NoZWR1bGFibGUoZGF0ZSwgdGltZSk7XG4gIHRpdGxlID0gdGl0bGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIGNhdGVnb3J5ID0gY2F0ZWdvcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcblxuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSAobmV3Q2F0ZWdvcnkpID0+IHtcbiAgICBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGNvbnN0IHRvSlNPTiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgIHRpbWU6IHRpbWUsXG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnNjaGVkdWxhYmxlLFxuICAgIGdldElkLFxuICAgIGdldFRpdGxlLFxuICAgIHNldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIGdldENhdGVnb3J5LFxuICAgIHNldENhdGVnb3J5LFxuICAgIHRvSlNPTlxuICB9O1xufTsiLCJpbXBvcnQgeyBvcmRlckJ5RGF0ZSwgZ2V0Q2F0ZWdvcmllcywgZ2VuZXJhdGVUYXNrSXRlbUlkIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tHcm91cCwgY3JlYXRlVGFza0l0ZW0sIGFkZE5ld0Zvcm1CdG5zLCBhZGRFbGVtZW50IH0gZnJvbSBcIi4vc3ViY29tcG9uZW50cy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdEZvcm1Db21wb25lbnQsIHRhc2tGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElkLCBwYXJlbnQpIHtcbiAgcGFyZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBhZGROZXdGb3JtQnRucyhwYXJlbnQpO1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydjb21wb25lbnQnXSk7XG4gIGNvbnN0IGhlYWRlciA9IGFkZEVsZW1lbnQoJ2RpdicsIGNvbXBvbmVudCwgWydwcm9qZWN0LWhlYWRlciddKTtcbiAgYWRkRWxlbWVudCgnaDEnLCBoZWFkZXIsIFtdLCB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpLmdldFRpdGxlKCkpO1xuICBhZGRFbGVtZW50KCdwJywgaGVhZGVyLCBbXSwgdG9kb3MuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKS5kYXRlRm9ybWF0dGVkKCkpO1xuICBhZGRFbGVtZW50KCdidXR0b24nLCBoZWFkZXIsIFsnZWRpdC1wcm9qZWN0J10sICdFZGl0Jywge2lkOiAnZWRpdC1wcm9qZWN0J30pO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kb3MuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKS5nZXREZXNjcmlwdGlvbigpO1xuICBpZiAoZGVzY3JpcHRpb24gIT09IFwiXCIpIHtcbiAgICBhZGRFbGVtZW50KCdwJywgY29tcG9uZW50LCBbXSwgZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbXSwgbnVsbCwge2lkOiAnZm9ybSd9KTsgXG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIGNvbXBvbmVudCwgWydtYWluLWNvbnRlbnQnXSk7XG5cbiAgY29uc3QgdGFza3MgPSB0b2Rvcy5nZXRUYXNrc0J5UHJvamVjdElkKHByb2plY3RJZCk7IFxuXG4gIGZvciAoY29uc3QgY2F0IG9mIGdldENhdGVnb3JpZXModGFza3MpKSB7IFxuICAgIGNvbnN0IGdyb3VwID0gY3JlYXRlVGFza0dyb3VwKHByb2plY3REaXYsIGNhdCk7IFxuICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gb3JkZXJCeURhdGUodGFza3MuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpID09PSBjYXQpKTtcblxuICAgIGZvciAoY29uc3QgdCBvZiBzb3J0ZWRUYXNrcykge1xuICAgICAgY3JlYXRlVGFza0l0ZW0oZ3JvdXAsIHRvZG9zLCB0LCB0cnVlKTsgXG4gICAgfVxuICB9XG4gIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCBwcm9qZWN0SWQpO1xufVxuXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMocGFyZW50LCB0b2RvcywgcHJvamVjdElkKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKTtcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcblxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm1Db21wb25lbnQocGFyZW50LCBmb3JtRGl2LCB0b2Rvcyk7XG4gIH0pO1xuXG4gIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zLCBudWxsLCBwcm9qZWN0SWQpO1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKTtcbiAgcHJvamVjdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zLCB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0QnRucy5sZW5ndGg7IGkgKyspe1xuICAgIGVkaXRCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdlbmVyYXRlVGFza0l0ZW1JZChlLnRhcmdldC5kYXRhc2V0LnRhc2tpZCkpO1xuICAgICAgY29uc3QgdGFzayA9IHRvZG9zLmdldFRhc2tCeUlkKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQudGFza2lkKSk7XG4gICAgICB0YXNrRm9ybUNvbXBvbmVudChwYXJlbnQsIHRhc2tEaXYsIHRvZG9zLCBudWxsLCBwcm9qZWN0SWQsIHRhc2spO1xuICAgIH0pO1xuICB9XG59XG5cbiIsImV4cG9ydCBjb25zdCBTY2hlZHVsYWJsZSA9IChkYXRlLCB0aW1lKSA9PiB7XG4gIGNvbnN0IGdldERhdGVBc0RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGUgPT09IFwiXCIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSB0aW1lID09PSBcIlwiID8gXCJUMjM6NTk6NTlcIiA6IFwiVFwiICsgdGltZSArIFwiOjAwXCI7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUgKyB0aW1lU3RyaW5nKTtcbiAgfTtcblxuICBjb25zdCBkYXRlRm9ybWF0dGVkID0gKCkgPT4ge1xuICAgIGlmIChkYXRlID09PSBcIlwiKSByZXR1cm4gZGF0ZTtcbiAgICBjb25zdCBtb250aCA9IGRhdGVbNV0gPT09IFwiMFwiID8gZGF0ZS5zbGljZSg2LCA3KSA6IGRhdGUuc2xpY2UoNSwgNyk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZVs4XSA9PT0gXCIwXCIgPyBkYXRlLnNsaWNlKDkpIDogZGF0ZS5zbGljZSg4KTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5zbGljZSgwLCA0KTtcblxuICAgIHJldHVybiBtb250aCArIFwiL1wiICsgZGF5ICsgXCIvXCIgKyB5ZWFyO1xuICB9O1xuXG4gIGNvbnN0IHRpbWVGb3JtYXR0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRpbWUgPT09IFwiXCIpIHJldHVybiB0aW1lO1xuICAgIGxldCBob3VyID0gcGFyc2VJbnQodGltZS5zbGljZSgwLCAyKSk7XG4gICAgY29uc3QgbWluID0gdGltZS5zbGljZSgyKTtcbiAgICBjb25zdCBtID0gaG91ciA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICBob3VyID0gaG91ciA+IDEyID8gaG91ciAtIDEyIDogaG91cjtcbiAgICByZXR1cm4gYCR7aG91cn0ke21pbn0gJHttfWA7XG4gIH07XG5cbiAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgZGF0ZSA9IG5ld0RhdGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGltZSA9IChuZXdUaW1lKSA9PiB7XG4gICAgdGltZSA9IG5ld1RpbWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGltZTtcbiAgfVxuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldERhdGVBc0RhdGUsXG4gICAgZGF0ZUZvcm1hdHRlZCxcbiAgICB0aW1lRm9ybWF0dGVkLFxuICAgIHNldERhdGUsXG4gICAgc2V0VGltZSxcbiAgICBnZXRUaW1lLFxuICAgIGdldERhdGVcbiAgfTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmFnZSh0b2Rvcykge1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xufSIsImltcG9ydCB7IGdlbmVyYXRlVGFza0l0ZW1JZCB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IFBsdXMgZnJvbSBcIi4vcGx1cy5zdmdcIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuL2luZm9ybWF0aW9uLW91dGxpbmUuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFbGVtZW50KHR5cGUsIHBhcmVudCwgY2xhc3NlcywgdGV4dENvbnRlbnQgPSBudWxsLCBvcHRpb25zID0ge30pe1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cbiAgaWYgKHRleHRDb250ZW50KSBlbGVtLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7IFxuXG4gIGZvciAoY29uc3QgbyBpbiBvcHRpb25zKSB7XG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUobywgb3B0aW9uc1tvXSk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW1hZ2Uoc3JjLCBwYXJlbnQsIGNsYXNzZXMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IHNyYztcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGltYWdlKTtcblxuICBmb3IgKGNvbnN0IG8gaW4gb3B0aW9ucykge1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShvLCBvcHRpb25zW29dKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Rm9ybUJ0bnMocGFyZW50KSB7XG4gIGNvbnN0IG5ld0Zvcm1CdG5zRGl2ID0gYWRkRWxlbWVudCgnZGl2JywgcGFyZW50LCBbJ25ldy1idXR0b25zLWRpdiddKTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIG5ld0Zvcm1CdG5zRGl2LCBbXSwgbnVsbCwge2lkOiBcIm5ldy1wcm9qZWN0XCJ9KTtcbiAgYWRkSW1hZ2UoUGx1cywgbmV3UHJvamVjdCk7XG4gIGFkZEVsZW1lbnQoJ3AnLCBuZXdQcm9qZWN0LCBbXSwgXCJOZXcgUHJvamVjdFwiKTtcblxuICBjb25zdCBuZXdUYXNrID0gYWRkRWxlbWVudCgnYnV0dG9uJywgbmV3Rm9ybUJ0bnNEaXYsIFtdLCBudWxsLCB7aWQ6IFwibmV3LXRhc2tcIn0pO1xuICBhZGRJbWFnZShQbHVzLCBuZXdUYXNrKTtcbiAgYWRkRWxlbWVudCgncCcsIG5ld1Rhc2ssIFtdLCBcIk5ldyBUYXNrXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0dyb3VwKHBhcmVudCwgZ3JvdXBUaXRsZSkge1xuICBjb25zdCBncm91cERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWyd0YXNrLWdyb3VwJ10pO1xuICBhZGRFbGVtZW50KCdoMicsIGdyb3VwRGl2LCBbXSwgZ3JvdXBUaXRsZSk7XG5cbiAgcmV0dXJuIGdyb3VwRGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW0ocGFyZW50LCB0b2RvcywgdGFzaywgaW5jbHVkZURhdGUgPSBmYWxzZSkgeyBcbiAgY29uc3QgaXRlbURpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpdGVtJywgdGFzay5nZXRQcmlvcml0eSgpXSwgbnVsbCwge2lkOiBnZW5lcmF0ZVRhc2tJdGVtSWQodGFzay5nZXRJZCgpKX0pO1xuICBjb25zdCBsYmwgPSBhZGRFbGVtZW50KCdsYWJlbCcsIGl0ZW1EaXYsIFtdKTtcbiAgY29uc3QgY2hlY2sgPSBhZGRFbGVtZW50KCdpbnB1dCcsIGxibCwgW10sIG51bGwsIHt0eXBlOiAnY2hlY2tib3gnfSk7XG5cbiAgaWYgKHRhc2suY29tcGxldGUoKSkge1xuICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgIGNoZWNrLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBlbHNlIHtcbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgdGFzay51cGRhdGVTdGF0dXMoKTtcbiAgICAgIHVwZGF0ZVN0b3JhZ2UodG9kb3MpO1xuXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgICAgICBpZiAocGFnZVRpdGxlLnRleHRDb250ZW50ICE9PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgY29uc3QgYW5jZXN0b3JJdGVtID0gZS50YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpO1xuICAgICAgICAgIGFuY2VzdG9ySXRlbS5jbGFzc0xpc3QuYWRkKFwiZmFkZS1vdXRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHdyYXBwZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBsYmwsIFsnaXRlbS1jb250ZW50J10pO1xuICBjb25zdCBsYWJlbENvbnRlbnQgPSBhZGRFbGVtZW50KCdzcGFuJywgd3JhcHBlciwgWydsYWJlbC1jb250ZW50J10pO1xuICBhZGRFbGVtZW50KCdzcGFuJywgbGFiZWxDb250ZW50LCBbXSwgdGFzay5nZXREZXNjcmlwdGlvbigpKTtcblxuICBpZiAodGFzay5nZXRQcm9qZWN0SWQoKSA+IDApIHtcbiAgICBhZGRFbGVtZW50KCdzcGFuJywgbGFiZWxDb250ZW50LCBbJ3Byb2plY3QtdGl0bGUnXSwgdG9kb3MuZ2V0UHJvamVjdEJ5SWQodGFzay5nZXRQcm9qZWN0SWQoKSkuZ2V0VGl0bGUoKSk7XG4gIH1cblxuICBpZiAodGFzay50aW1lRm9ybWF0dGVkKCkgIT09IFwiXCIpIHtcbiAgICBjb25zdCB0aW1lID0gYWRkRWxlbWVudCgnZGl2Jywgd3JhcHBlciwgWydkYXRldGltZS1kaXNwbGF5J10pO1xuXG4gICAgaWYgKGluY2x1ZGVEYXRlKSB7XG4gICAgICBhZGRFbGVtZW50KCdzcGFuJywgdGltZSwgW10sIHRhc2suZGF0ZUZvcm1hdHRlZCgpKTtcbiAgICB9XG4gICAgYWRkRWxlbWVudCgnc3BhbicsIHRpbWUsIFtdLCB0YXNrLnRpbWVGb3JtYXR0ZWQoKSk7XG4gIH1cblxuICBjb25zdCBlZGl0ID0gYWRkRWxlbWVudCgnYnV0dG9uJywgd3JhcHBlciwgWydlZGl0LWJ1dHRvbiddLCBudWxsLCB7XCJkYXRhLXRhc2tJZFwiOiB0YXNrLmdldElkKCl9KTtcbiAgYWRkSW1hZ2UoSW5mbywgZWRpdCwgWydpY29uJ10sIHtcImRhdGEtdGFza0lkXCI6IHRhc2suZ2V0SWQoKX0pO1xuICBpZiAodGFzay5jb21wbGV0ZSgpKSB7XG4gICAgZWRpdC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBpZiAodGFzay5nZXRQcmlvcml0eSgpID09PSAnaGlnaCcpIHtcbiAgICBhZGRFbGVtZW50KCdwJywgd3JhcHBlciwgW10sIFwiIVwiKTtcbiAgfVxuICByZXR1cm4gaXRlbURpdjtcbn0iLCJpbXBvcnQgeyBTY2hlZHVsYWJsZSB9IGZyb20gXCIuL3NjaGVkdWxhYmxlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnksIGNvbXBsZXRlZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHNjaGVkdWxhYmxlID0gU2NoZWR1bGFibGUoZGF0ZSwgdGltZSk7XG4gIGNhdGVnb3J5ID0gY2F0ZWdvcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfTtcblxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSAobmV3Q2F0ZWdvcnkpID0+IHtcbiAgICBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgaWQ6IGlkLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgcHJvamVjdElkOiBwcm9qZWN0SWQsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICBkYXRlOiBkYXRlLFxuICAgICAgdGltZTogdGltZSxcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zY2hlZHVsYWJsZSxcbiAgICBnZXRJZCxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBnZXRQcm9qZWN0SWQsXG4gICAgZ2V0Q2F0ZWdvcnksXG4gICAgc2V0Q2F0ZWdvcnksXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgc2V0UHJpb3JpdHksXG4gICAgY29tcGxldGUsXG4gICAgdXBkYXRlU3RhdHVzLFxuICAgIHRvSlNPTlxuICB9O1xufTsiLCJpbXBvcnQgeyBvcmRlckJ5RGF0ZSwgc2FtZURheSwgZ2V0RGl2VGl0bGUsIGdlbmVyYXRlVGFza0l0ZW1JZCB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrR3JvdXAsIGNyZWF0ZVRhc2tJdGVtLCBhZGROZXdGb3JtQnRucywgYWRkRWxlbWVudCB9IGZyb20gXCIuL3N1YmNvbXBvbmVudHMuanNcIjtcbmltcG9ydCB7IHByb2plY3RGb3JtQ29tcG9uZW50LCB0YXNrRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KSB7XG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgYWRkTmV3Rm9ybUJ0bnMocGFyZW50KTtcblxuICBjb25zdCB0YXNrcyA9IHRvZG9zW2BnZXQke3Rhc2tTdWJzZXR9VGFza3NgXSgpO1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydjb21wb25lbnQnXSk7XG4gIGFkZEVsZW1lbnQoJ2gxJywgY29tcG9uZW50LCBbXSwgKHRhc2tTdWJzZXQgPT09IFwiVG9kYXlcIiA/IFwiVGFza3NcIiA6IHRhc2tTdWJzZXQpKTtcblxuICBhZGRFbGVtZW50KCdkaXYnLCBjb21wb25lbnQsIFtdLCBudWxsLCB7aWQ6ICdmb3JtJ30pO1xuXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBhZGRFbGVtZW50KCdwJywgY29tcG9uZW50LCBbXSwgXCJObyB0YXNrc1wiLCB7aWQ6ICduby10YXNrcy1tZXNzYWdlJ30pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNvcnRlZFRhc2tzID0gb3JkZXJCeURhdGUodGFza3MpO1xuXG4gIGNvbnN0IHRhc2tzRGl2ID0gYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbJ21haW4tY29udGVudCddKTtcblxuICBsZXQgY3VyckRhdGUgPSBzb3J0ZWRUYXNrc1swXS5nZXREYXRlQXNEYXRlKCk7XG4gIGxldCBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKHRhc2tzRGl2LCBnZXREaXZUaXRsZShjdXJyRGF0ZSkpOyBcblxuICBmb3IgKGNvbnN0IHQgb2Ygc29ydGVkVGFza3MpIHtcbiAgICBpZiAoc2FtZURheSh0LmdldERhdGVBc0RhdGUoKSwgY3VyckRhdGUpKSB7XG4gICAgICBjcmVhdGVUYXNrSXRlbShjdXJyRGl2LCB0b2RvcywgdCk7IFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGN1cnJEYXRlID0gdC5nZXREYXRlQXNEYXRlKCk7XG4gICAgICBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKHRhc2tzRGl2LCBnZXREaXZUaXRsZShjdXJyRGF0ZSkpO1xuICAgICAgY3JlYXRlVGFza0l0ZW0oY3VyckRpdiwgdG9kb3MsIHQpO1xuICAgIH1cbiAgfVxuICBhZGRCdXR0b25MaXN0ZW5lcnMocGFyZW50LCB0b2RvcywgdGFza1N1YnNldCk7XG59XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCB0YXNrU3Vic2V0KSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKTtcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuXG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBub2RlVG9SZXBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zKTtcbiAgfSk7XG5cbiAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5vZGVUb1JlcGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHRhc2tTdWJzZXQsIG51bGwpO1xuICB9KTtcblxuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWJ1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRCdG5zLmxlbmd0aDsgaSArKyl7XG4gICAgZWRpdEJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBub2RlVG9SZXBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2VuZXJhdGVUYXNrSXRlbUlkKGUudGFyZ2V0LmRhdGFzZXQudGFza2lkKSk7XG4gICAgICBjb25zdCB0YXNrID0gdG9kb3MuZ2V0VGFza0J5SWQocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC50YXNraWQpKTtcbiAgICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHRhc2tTdWJzZXQsIG51bGwsIHRhc2spO1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBzYW1lRGF5IH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcblxuZXhwb3J0IGNvbnN0IFRvZG8gPSAoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgdGFza3MgPSBbXTtcblxuICBsZXQgcHJvamVjdElkQ291bnRlciA9IDE7XG4gIGxldCB0YXNrSWRDb3VudGVyID0gMTtcblxuICBjb25zdCBnZXRQcm9qZWN0QnlJZCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHAgPSBwcm9qZWN0cy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKCkgPT09IGlkKTtcbiAgICBpZiAocC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiBwWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tCeUlkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdCA9IHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoKSA9PT0gaWQpO1xuICAgIGlmICh0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRbMF07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHRpbWUsIGNhdGVnb3J5LCBpZCA9IG51bGwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImluIHRvZG8uY3JlYXRlUHJvamVjdFwiLCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHRpbWUsIGNhdGVnb3J5LCBpZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0SWQgPSBpZCB8fCBwcm9qZWN0SWRDb3VudGVyO1xuICAgIGNvbnN0IHAgPSBQcm9qZWN0KHByb2plY3RJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSk7XG4gICAgcHJvamVjdHMucHVzaChwKTtcbiAgICBwcm9qZWN0SWRDb3VudGVyID0gaWQgPyBwcm9qZWN0SWRDb3VudGVyIDogcHJvamVjdElkQ291bnRlciArIDE7XG5cbiAgICByZXR1cm4gcC5nZXRJZCgpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAoZGVzY3JpcHRpb24sIHByb2plY3RJZCwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5LCBpZCA9IG51bGwsIGNvbXBsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgdGFza0lkID0gaWQgfHwgdGFza0lkQ291bnRlcjtcbiAgICBjb25zdCB0ID0gVGFzayh0YXNrSWQsIGRlc2NyaXB0aW9uLCBwYXJzZUludChwcm9qZWN0SWQpLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnksIGNvbXBsZXRlZCk7XG4gICAgdGFza3MucHVzaCh0KTtcbiAgICB0YXNrSWRDb3VudGVyID0gaWQgPyB0YXNrSWRDb3VudGVyIDogdGFza0lkQ291bnRlciArIDE7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZCgpICE9PSBpZCk7XG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldFByb2plY3RJZChpZCkgIT09IGlkKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKGlkKSAhPT0gaWQpXG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChpZCk7XG4gICAgcHJvamVjdC5zZXRUaXRsZSh0aXRsZSk7XG4gICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdC5zZXREYXRlKGRhdGUpO1xuICAgIHByb2plY3Quc2V0VGltZSh0aW1lKTtcbiAgICBwcm9qZWN0LnNldENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tCeUlkKGlkKTtcbiAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICB0YXNrLnNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICB0YXNrLnNldERhdGUoZGF0ZSk7XG4gICAgdGFzay5zZXRUaW1lKHRpbWUpO1xuICAgIHRhc2suc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IFxuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZWxlbSA9PiAhZWxlbS5jb21wbGV0ZSgpICYmIHNhbWVEYXkoZWxlbS5nZXREYXRlQXNEYXRlKCksIHRvZGF5KSk7IFxuICB9O1xuXG4gIGNvbnN0IGdldFVwY29taW5nVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpOyAvL3dhbnQgc3RhcnQgb2YgZGF5XG4gICAgdG9kYXkuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IChlbGVtLmdldERhdGVBc0RhdGUoKSAhPT0gbnVsbCAmJiBlbGVtLmdldERhdGVBc0RhdGUoKSA+PSB0b2RheSAmJiAhZWxlbS5jb21wbGV0ZSgpKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+ICFlbGVtLmNvbXBsZXRlKCkpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q29tcGxldGVkVGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uY29tcGxldGUoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3NCeVByb2plY3RJZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldFByb2plY3RJZCgpID09PSBpZCAmJiAhZWxlbS5jb21wbGV0ZSgpKTtcbiAgfTtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3RJZENvdW50ZXI6IHByb2plY3RJZENvdW50ZXIsXG4gICAgICB0YXNrSWRDb3VudGVyOiB0YXNrSWRDb3VudGVyLFxuICAgICAgcHJvamVjdHM6IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSxcbiAgICAgIHRhc2tzOiBKU09OLnN0cmluZ2lmeSh0YXNrcylcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZnJvbUpzb24gPSAoanNvbikgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICBwcm9qZWN0SWRDb3VudGVyID0gdG9kb3MucHJvamVjdElkQ291bnRlcjtcbiAgICB0YXNrSWRDb3VudGVyID0gdG9kb3MudGFza0lkQ291bnRlcjtcblxuICAgIGNvbnN0IHByb2plY3RzQXJyID0gSlNPTi5wYXJzZSh0b2Rvcy5wcm9qZWN0cyk7XG4gICAgY29uc3QgdGFza3NBcnIgPSBKU09OLnBhcnNlKHRvZG9zLnRhc2tzKTtcblxuICAgIGZvciAoY29uc3QgZWxlbSBvZiBwcm9qZWN0c0Fycikge1xuICAgICAgY3JlYXRlUHJvamVjdChcbiAgICAgICAgZWxlbS50aXRsZSwgXG4gICAgICAgIGVsZW0uZGVzY3JpcHRpb24sIFxuICAgICAgICBlbGVtLmRhdGUsIFxuICAgICAgICBlbGVtLnRpbWUsIFxuICAgICAgICBlbGVtLmNhdGVnb3J5LCBcbiAgICAgICAgZWxlbS5pZFxuICAgICAgKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRhc2tzQXJyKSB7XG4gICAgICBjcmVhdGVUYXNrKFxuICAgICAgICBlbGVtLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgZWxlbS5wcm9qZWN0SWQsIFxuICAgICAgICBlbGVtLnByaW9yaXR5LCBcbiAgICAgICAgZWxlbS5kYXRlLCBcbiAgICAgICAgZWxlbS50aW1lLCBcbiAgICAgICAgZWxlbS5jYXRlZ29yeSwgXG4gICAgICAgIGVsZW0uaWQsXG4gICAgICAgIGVsZW0uY29tcGxldGVkXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdEJ5SWQsXG4gICAgZ2V0VGFza0J5SWQsXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBjcmVhdGVUYXNrLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZGVsZXRlVGFzayxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIHVwZGF0ZVRhc2ssXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgZ2V0VGFza3MsXG4gICAgZ2V0VG9kYXlUYXNrcyxcbiAgICBnZXRBbGxUYXNrcyxcbiAgICBnZXRVcGNvbWluZ1Rhc2tzLFxuICAgIGdldENvbXBsZXRlZFRhc2tzLFxuICAgIGdldFRhc2tzQnlQcm9qZWN0SWQsXG4gICAgdG9KU09OLFxuICAgIGZyb21Kc29uXG4gIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9yZGVyQnlEYXRlKG9iamVjdHNXaXRoRGF0ZSkge1xuICByZXR1cm4gb2JqZWN0c1dpdGhEYXRlLnNvcnQoIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoYS5nZXREYXRlQXNEYXRlKCkgJiYgYi5nZXREYXRlQXNEYXRlKCkpIHtcbiAgICAgIGlmIChhLmdldERhdGVBc0RhdGUoKSA+IGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYS5nZXREYXRlQXNEYXRlKCkgPCBiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcyhhcnIpIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGFyci5tYXAoZWxlbSA9PiBlbGVtLmdldENhdGVnb3J5KCkpO1xuICByZXR1cm4gWy4uLm5ldyBTZXQoY2F0ZWdvcmllcyldLnNvcnQoKTtcbn1cblxuLy9yaWdodCBub3cgcGFzc2luZyB0YXNrcy4uIGJ1dCByZWFsbHkgd2FudCB0byBwYXNzIGRhdGVzIG9yIG5pbFxuZXhwb3J0IGZ1bmN0aW9uIHNhbWVEYXkob25lLCB0d28pIHsgXG4gIGlmICghb25lICYmICF0d28pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKCFvbmUgfHwgIXR3bykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gb25lLmdldERhdGUoKSA9PT0gdHdvLmdldERhdGUoKSAmJiBcbiAgICBvbmUuZ2V0TW9udGgoKSA9PT0gdHdvLmdldE1vbnRoKCkgJiZcbiAgICBvbmUuZ2V0RnVsbFllYXIoKSA9PT0gdHdvLmdldEZ1bGxZZWFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXZUaXRsZShkYXRlKSB7IFxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKTtcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblxuICBpZiAoIWRhdGUpIHtcbiAgICByZXR1cm4gXCJVbnNjaGVkdWxlZFwiO1xuICB9XG4gIGVsc2UgaWYgKHNhbWVEYXkoZGF0ZSwgdG9kYXkpKSB7XG4gICAgcmV0dXJuIFwiVG9kYXlcIjtcbiAgfVxuICBlbHNlIGlmIChzYW1lRGF5KGRhdGUsIHRvbW9ycm93KSkge1xuICAgIHJldHVybiBcIlRvbW9ycm93XCI7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi11cycsIHsgd2Vla2RheTpcImxvbmdcIiwgeWVhcjpcIm51bWVyaWNcIiwgbW9udGg6XCJzaG9ydFwiLCBkYXk6XCJudW1lcmljXCJ9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSXRlbUlkKGlkKSB7XG4gIHJldHVybiBgdGFza18ke2lkfWA7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG5hdkNvbXBvbmVudCB9IGZyb20gXCIuL25hdi5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICBjb25zdCB0b2RvcyA9IFRvZG8oKTtcblxuICBpZiAoZGF0YSkge1xuICAgIHRvZG9zLmZyb21Kc29uKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcbiAgICBjb25zb2xlLmxvZyh0b2Rvcy5nZXRQcm9qZWN0cygpLm1hcChlbGVtID0+IGVsZW0uZ2V0VGl0bGUoKSkpO1xuICAgIGNvbnNvbGUubG9nKHRvZG9zLmdldFRhc2tzKCkubWFwKGVsZW0gPT4gZWxlbS5nZXREZXNjcmlwdGlvbigpKSk7XG4gIH1cblxuICBjb25zdCBuYXZQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgbmF2Q29tcG9uZW50KHRvZG9zLCBuYXZQYXJlbnQpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgdGFza3NDb21wb25lbnQodG9kb3MsIFwiQWxsXCIsIGNvbnRlbnQpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=