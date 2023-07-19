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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');\n\n/* reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\np, \nsection,\narticle {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* end reset */\n\n:root {\n  --neutral-100: rgb(255, 255, 255);\n  --netural-200: rgb(240, 240, 240);\n  --neutral-300: #264143;\n  --accent: #e99f4c;\n  --alert: #de5499;\n\n  \n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  background-color: var(--neutral-100);\n  color: var(--neutral-300);\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1;\n}\n\nmain {\n  padding: 3rem 10vw;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  gap: 1rem;\n  background-color: var(--netural-200);\n  height: 100%;\n  border-radius: 40px 0 0 0;\n}\n\n.nav > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.nav .project-div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.nav button {\n  background-color: transparent;\n  border: none;\n  font-size: 0.8rem;\n}\n\n.item {\n  line-height: 1.3;\n  transition: all 500ms linear;\n}\n\n.item.fade-out {\n  transform: scaleY(0);\n  opacity: 0;\n}\n\n.item, .item label {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.item .label-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item .project-title {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.item-content {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n}\n\n.task-group {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-group h2 {\n  border-bottom: 2px solid var(--neutral-300);\n}\n\n.new-buttons-div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.new-buttons-div button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--accent);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  white-space: nowrap;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.datetime-display {\n  display: flex;\n  gap: 0.5rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: clamp(300px, 60%, 800px);\n  padding: 0.5rem 0;\n}\n\n.form input, textarea {\n  width: 100%;\n  border: 1px solid var(--neutral-300);\n  border-radius: 5px;\n  padding: 0.5rem;\n  font-family: inherit;\n  background-color: inherit;\n}\n\n.form input:focus, textarea:focus {\n  outline: 2px solid var(--alert);\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\ninput[type=\"submit\"]:focus, input[type=\"submit\"]:hover {\n  border: 1px solid var(--alert);\n  color: var(--alert);\n}\n\ninput[type=checkbox] {\n  accent-color: var(--alert);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.form button, .edit-project {\n  width: max-content;\n  text-transform: lowercase;\n  border: none;\n  background-color: transparent;\n}\n\n.form button:hover, \n.form button:focus, \n.edit-project:hover, \n.edit-project:focus {\n  color: var(--alert);\n}\n\n.edit-project {\n  font-size: 0.9rem;\n}\n\n.label-wrapper {\n  display: flex;\n  gap: 0.5rem;\n}\n\nselect {\n  margin-left: 0.5rem;\n}\n\n.warning {\n  display: none;\n  color: var(--alert);\n}\n\n.warning.show {\n  display: inline;\n}\n\n.button-div {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n\n.high {\n  color: var(--alert);\n}\n\n.icon {\n  height: 1.5rem;\n}\n\n.edit-button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  align-items: end;\n  padding: 0;\n}\n\n.nav-button-wrapper {\n  display: flex;\n  align-items: center; \n}\n\n.nav-button-wrapper .icon {\n  transform: translateY(-10%);\n}\n\n.small-icon {\n  height: 1rem;\n  transform: translateY(-10%);\n}\n\nselect {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: inherit;\n  line-height: inherit;\n  outline: none;\n}\n\n.select {\n  width: 100%;\n  min-width: 15ch;\n  border: 1px solid var(--neutral-300);\n  border-radius: 0.25em;\n  padding: 0.5em;\n  font-size: 1rem;\n  cursor: pointer;\n  background-color: transparent;\n  display: grid;\n  grid-template-areas: \"select\";\n  align-items: center;\n  position: relative;\n}\n\n.select::after {\n  content: \"\";\n  width: 0.8em;\n  height: 0.5em;\n  background-color: var(--alert);\n  clip-path: polygon(100% 0%, 0 0%, 50% 100%);\n  justify-self: end;\n}\n\nselect,\n.select:after {\n  grid-area: select;\n}\n\nselect:focus + .focus {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  border: 2px solid var(--alert);\n  border-radius: inherit;\n}\n\n@media only screen and (max-width: 600px) {\n  main {\n    padding: 3rem 5vw;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  body {\n    grid-template-columns: 1fr;\n  }\n\n  main {\n    padding: 5vw;\n    grid-row: 1;\n  }\n\n  .nav {\n    height: max-content;\n    grid-row: 2;\n  }\n\n  .new-buttons-div {\n    flex-direction: column;\n  }\n\n  .project-header {\n    display: flex;\n    align-items: center;\n    row-gap: 0.5rem;\n    column-gap: 1rem;\n    flex-wrap: wrap;\n  }\n}"],"sourceRoot":""}]);
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
    const deleteBtn = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_3__.addElement)('button', buttonsDiv, ['delete-btn'], 'Delete Task');

    deleteBtn.addEventListener("click", () => {
      todos.deleteProject(project.getId());
      (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(todos, "All", parent); //want to go to "home" + also need to redraw nav!
      (0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.navComponent)(todos, document.querySelector('header'));
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
/* harmony export */   addElement: () => (/* binding */ addElement),
/* harmony export */   addImage: () => (/* binding */ addImage),
/* harmony export */   addNewFormBtns: () => (/* binding */ addNewFormBtns),
/* harmony export */   createTaskGroup: () => (/* binding */ createTaskGroup),
/* harmony export */   createTaskItem: () => (/* binding */ createTaskItem)
/* harmony export */ });
/* harmony import */ var _viewHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewHelpers.js */ "./src/viewHelpers.js");
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus.svg */ "./src/plus.svg");
/* harmony import */ var _information_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information-outline.svg */ "./src/information-outline.svg");




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
  addImage(_plus_svg__WEBPACK_IMPORTED_MODULE_1__, newProject);
  addElement('p', newProject, [], "New Project");

  const newTask = addElement('button', newFormBtnsDiv, [], null, {id: "new-task"});
  addImage(_plus_svg__WEBPACK_IMPORTED_MODULE_1__, newTask);
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
  }

  check.addEventListener('change', (e) => {
    task.updateStatus();

    if (e.target.checked) {
      const pageTitle = document.querySelector('h1');
      if (pageTitle.textContent !== "Completed") {
        const ancestorItem = e.target.closest(".item");
        ancestorItem.classList.add("fade-out");
      }
    }
  });

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
  addImage(_information_outline_svg__WEBPACK_IMPORTED_MODULE_2__, edit, ['icon'], {"data-taskId": task.getId()});

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

  const createProject = (title, description, date, time, category) => {
    const p = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.Project)(projectIdCounter, title, description, date, time, category);
    projects.push(p);
    projectIdCounter++;
    return p.getId();
  };

  const createTask = (description, projectId, priority, date, time, category) => {

    const t = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(taskIdCounter, description, parseInt(projectId), priority, date, time, category);
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
    return tasks.filter(elem => elem.getProjectId() === id && !elem.complete());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLGtCQUFrQjtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsT0FBTyxZQUFZLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxnR0FBZ0csSUFB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QUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21CO0FBQ2E7QUFDcEI7OztBQUdqQztBQUNBLGNBQWMsOENBQUk7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVk7QUFDZDtBQUNBLEVBQUUsa0VBQWM7QUFDaEIsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zY2hlZHVsYWJsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3ViY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdGFza3NDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXdIZWxwZXJzLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiByZXNldCAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSxcbmgxLFxuaDIsXG5oMyxcbnAsIFxuc2VjdGlvbixcbmFydGljbGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5odG1sOmZvY3VzLXdpdGhpbiB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xuICB9XG4gIFxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuLyogZW5kIHJlc2V0ICovXG5cbjpyb290IHtcbiAgLS1uZXV0cmFsLTEwMDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLW5ldHVyYWwtMjAwOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gIC0tbmV1dHJhbC0zMDA6ICMyNjQxNDM7XG4gIC0tYWNjZW50OiAjZTk5ZjRjO1xuICAtLWFsZXJ0OiAjZGU1NDk5O1xuXG4gIFxufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC0xMDApO1xuICBjb2xvcjogdmFyKC0tbmV1dHJhbC0zMDApO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAzcmVtIDEwdnc7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGdhcDogMXJlbTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV0dXJhbC0yMDApO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggMCAwIDA7XG59XG5cbi5uYXYgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5uYXYgLnByb2plY3QtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhcjtcbn1cblxuLml0ZW0uZmFkZS1vdXQge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLml0ZW0sIC5pdGVtIGxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uaXRlbSAubGFiZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtIC5wcm9qZWN0LXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5pdGVtLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC44cmVtO1xufVxuXG4udGFzay1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnRhc2stZ3JvdXAgaDIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xufVxuXG4ubmV3LWJ1dHRvbnMtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmV3LWJ1dHRvbnMtZGl2IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgaGVpZ2h0OiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZGF0ZXRpbWUtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogY2xhbXAoMzAwcHgsIDYwJSwgODAwcHgpO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmZvcm0gaW5wdXQsIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMzAwKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uZm9ybSBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYWxlcnQpO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWxlcnQpO1xuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGFjY2VudC1jb2xvcjogdmFyKC0tYWxlcnQpO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uZm9ybSBidXR0b24sIC5lZGl0LXByb2plY3Qge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtIGJ1dHRvbjpob3ZlciwgXG4uZm9ybSBidXR0b246Zm9jdXMsIFxuLmVkaXQtcHJvamVjdDpob3ZlciwgXG4uZWRpdC1wcm9qZWN0OmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuLmVkaXQtcHJvamVjdCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubGFiZWwtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG5zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4ud2FybmluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XG59XG5cbi53YXJuaW5nLnNob3cge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5idXR0b24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oaWdoIHtcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmVkaXQtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdi1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxufVxuXG4ubmF2LWJ1dHRvbi13cmFwcGVyIC5pY29uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIGhlaWdodDogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG5zZWxlY3Qge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwIDFlbSAwIDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxNWNoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzZWxlY3RcIjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VsZWN0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwLjhlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwJSwgMCAwJSwgNTAlIDEwMCUpO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuc2VsZWN0LFxuLnNlbGVjdDphZnRlciB7XG4gIGdyaWQtYXJlYTogc2VsZWN0O1xufVxuXG5zZWxlY3Q6Zm9jdXMgKyAuZm9jdXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogLTFweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWxlcnQpO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDNyZW0gNXZ3O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgYm9keSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICBtYWluIHtcbiAgICBwYWRkaW5nOiA1dnc7XG4gICAgZ3JpZC1yb3c6IDE7XG4gIH1cblxuICAubmF2IHtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIGdyaWQtcm93OiAyO1xuICB9XG5cbiAgLm5ldy1idXR0b25zLWRpdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wcm9qZWN0LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJvdy1nYXA6IDAuNXJlbTtcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxVQUFVO0FBQ1Y7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7OztFQU9FLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Us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Q0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiByZXNldCAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxucCwgXFxuc2VjdGlvbixcXG5hcnRpY2xlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG4gIFxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi8qIGVuZCByZXNldCAqL1xcblxcbjpyb290IHtcXG4gIC0tbmV1dHJhbC0xMDA6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tbmV0dXJhbC0yMDA6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIC0tbmV1dHJhbC0zMDA6ICMyNjQxNDM7XFxuICAtLWFjY2VudDogI2U5OWY0YztcXG4gIC0tYWxlcnQ6ICNkZTU0OTk7XFxuXFxuICBcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtMTAwKTtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTMwMCk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDNyZW0gMTB2dztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXR1cmFsLTIwMCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4IDAgMCAwO1xcbn1cXG5cXG4ubmF2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm5hdiAucHJvamVjdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhcjtcXG59XFxuXFxuLml0ZW0uZmFkZS1vdXQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uaXRlbSwgLml0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5pdGVtIC5sYWJlbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0gLnByb2plY3QtdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uaXRlbS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAwLjhyZW07XFxufVxcblxcbi50YXNrLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGFzay1ncm91cCBoMiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uZXctYnV0dG9ucy1kaXYgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM3JlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmRhdGV0aW1lLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA2MCUsIDgwMHB4KTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4uZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5mb3JtIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMsIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFsZXJ0KTtcXG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uLCAuZWRpdC1wcm9qZWN0IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uOmhvdmVyLCBcXG4uZm9ybSBidXR0b246Zm9jdXMsIFxcbi5lZGl0LXByb2plY3Q6aG92ZXIsIFxcbi5lZGl0LXByb2plY3Q6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWFsZXJ0KTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmxhYmVsLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1hbGVydCk7XFxufVxcblxcbi53YXJuaW5nLnNob3cge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBjb2xvcjogdmFyKC0tYWxlcnQpO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdi1idXR0b24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxufVxcblxcbi5uYXYtYnV0dG9uLXdyYXBwZXIgLmljb24ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG4uc21hbGwtaWNvbiB7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbnNlbGVjdCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDFlbSAwIDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxNWNoO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmV1dHJhbC0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwic2VsZWN0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWxlY3Q6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuOGVtO1xcbiAgaGVpZ2h0OiAwLjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsZXJ0KTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAlLCAwIDAlLCA1MCUgMTAwJSk7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuc2VsZWN0LFxcbi5zZWxlY3Q6YWZ0ZXIge1xcbiAgZ3JpZC1hcmVhOiBzZWxlY3Q7XFxufVxcblxcbnNlbGVjdDpmb2N1cyArIC5mb2N1cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xcHg7XFxuICBsZWZ0OiAtMXB4O1xcbiAgcmlnaHQ6IC0xcHg7XFxuICBib3R0b206IC0xcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hbGVydCk7XFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBtYWluIHtcXG4gICAgcGFkZGluZzogM3JlbSA1dnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiA1dnc7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgfVxcblxcbiAgLm5ldy1idXR0b25zLWRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwLjVyZW07XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9qZWN0Q29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyB0YXNrc0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tzQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyBuYXZDb21wb25lbnQgfSBmcm9tIFwiLi9uYXYuanNcIjtcbmltcG9ydCB7IGFkZEVsZW1lbnQgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zLCBwcm9qZWN0ID0gbnVsbCkge1xuICBjb25zdCBjb21wb25lbnQgPSBhZGRGb3JtQ29tcG9uZW50KG5vZGVUb1JlcGxhY2UpO1xuICBjb25zdCBmID0gYWRkRWxlbWVudCgnZm9ybScsIGNvbXBvbmVudCwgW10pO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCBwcm9qZWN0LCBcInRpdGxlXCIsIFwidGV4dFwiLCBcIlRpdGxlOiAqXCIsIFwiUHJvamVjdCBtdXN0IGhhdmUgYSB0aXRsZS5cIik7XG4gIGNvbnN0IGNhdGVnb3J5RmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCBwcm9qZWN0LCBcImNhdGVnb3J5XCIsIFwidGV4dFwiLCBcIkNhdGVnb3J5OlwiLCBcIlwiKVxuICBjb25zdCBkYXRlRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCBwcm9qZWN0LCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiRGVhZGxpbmU6XCIsIFwiXCIpO1xuICBjb25zdCB0aW1lRmllbGQgPSBjcmVhdGVTaW1wbGVJbnB1dChmLCBwcm9qZWN0LCBcInRpbWVcIiwgXCJ0aW1lXCIsIFwiVGltZTpcIiwgXCJcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSBjcmVhdGVUZXh0YXJlYShmLCBwcm9qZWN0LCBcImRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb246XCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGFkZEVsZW1lbnQoJ2lucHV0JywgZiwgW10sIG51bGwsIHt0eXBlOiAnc3VibWl0J30pO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBmLCBbJ2J1dHRvbi1kaXYnXSk7XG4gIGNvbnN0IGNhbmNlbCA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbnNEaXYsIFtdLCAnQ2FuY2VsJyk7XG5cbiAgaWYgKHByb2plY3QpIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBhZGRFbGVtZW50KCdidXR0b24nLCBidXR0b25zRGl2LCBbJ2RlbGV0ZS1idG4nXSwgJ0RlbGV0ZSBUYXNrJyk7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZG9zLmRlbGV0ZVByb2plY3QocHJvamVjdC5nZXRJZCgpKTtcbiAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBcIkFsbFwiLCBwYXJlbnQpOyAvL3dhbnQgdG8gZ28gdG8gXCJob21lXCIgKyBhbHNvIG5lZWQgdG8gcmVkcmF3IG5hdiFcbiAgICAgIG5hdkNvbXBvbmVudCh0b2RvcywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykpO1xuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZUlucHV0KFt0aXRsZUZpZWxkXSk7XG4gICAgaWYgKCF2YWxpZGF0ZXMpIHJldHVybjsgXG5cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgdG9kb3MudXBkYXRlUHJvamVjdChcbiAgICAgICAgcHJvamVjdC5nZXRJZCgpLCBcbiAgICAgICAgdGl0bGVGaWVsZC52YWx1ZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uRmllbGQudmFsdWUsXG4gICAgICAgIGRhdGVGaWVsZC52YWx1ZSxcbiAgICAgICAgdGltZUZpZWxkLnZhbHVlLFxuICAgICAgICBjYXRlZ29yeUZpZWxkLnZhbHVlXG4gICAgICApO1xuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdC5nZXRJZCgpLCBwYXJlbnQpO1xuICAgIH1cbiAgICBlbHNlIHsgXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB0b2Rvcy5jcmVhdGVQcm9qZWN0KFxuICAgICAgICB0aXRsZUZpZWxkLnZhbHVlLCBcbiAgICAgICAgZGVzY3JpcHRpb25GaWVsZC52YWx1ZSxcbiAgICAgICAgZGF0ZUZpZWxkLnZhbHVlLFxuICAgICAgICB0aW1lRmllbGQudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5RmllbGQudmFsdWVcbiAgICAgICk7XG4gICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SWQsIHBhcmVudCk7XG4gICAgfVxuICAgIC8vcmVkcmF3IG5hdiwgYmMgbWlnaHQgaGF2ZSBjaGFuZ2VkIHRpdGxlIGV2ZW4gaWYganVzdCB1cGRhdGVcbiAgICBuYXZDb21wb25lbnQodG9kb3MsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpKTtcbiAgfSk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcG9uZW50LnJlcGxhY2VXaXRoKG5vZGVUb1JlcGxhY2UpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHRhc2tTdWJzZXQsIHByb2plY3RJRCwgdGFzayA9IG51bGwpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gYWRkRm9ybUNvbXBvbmVudChub2RlVG9SZXBsYWNlKTtcbiAgY29uc3QgZiA9IGFkZEVsZW1lbnQoJ2Zvcm0nLCBjb21wb25lbnQsIFtdKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQoZiwgdGFzaywgXCJkZXNjcmlwdGlvblwiLCBcInRleHRcIiwgXCJUYXNrOiAqXCIsIFwiTXVzdCBoYXZlIHRhc2suXCIpO1xuICBsZXQgcHJvamVjdEZpZWxkO1xuXG4gIGlmICghdGFzayAmJiAhcHJvamVjdElEKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSB0b2Rvcy5nZXRQcm9qZWN0cygpOyBcbiAgICBwcm9qZWN0RmllbGQgPSBjcmVhdGVQcm9qZWN0U2VsZWN0KGYsIHRhc2ssIHByb2plY3RzKTtcbiAgfVxuICBlbHNlIGlmICghdGFzayAmJiBwcm9qZWN0SUQpIHtcbiAgICBwcm9qZWN0RmllbGQgPSBhZGRFbGVtZW50KCdpbnB1dCcsIGYsIFtdLCBudWxsLCB7dHlwZTogJ2hpZGRlbicsIHZhbHVlOiBwcm9qZWN0SUQsIGlkOiAncHJvamVjdCd9KTtcbiAgfVxuXG4gIGNvbnN0IHByaW9yaXR5RmllbGQgPSBjcmVhdGVQcmlvcml0eVNlbGVjdChmLCB0YXNrLCBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdKTtcbiAgY29uc3QgZGF0ZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQoZiwgdGFzaywgXCJkYXRlXCIsIFwiZGF0ZVwiLCBcIkRlYWRsaW5lOlwiLCBcIlwiKTtcbiAgY29uc3QgdGltZUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQoZiwgdGFzaywgXCJ0aW1lXCIsIFwidGltZVwiLCBcIlRpbWU6XCIsIFwiXCIpO1xuICBjb25zdCBjYXRlZ29yeUZpZWxkID0gY3JlYXRlU2ltcGxlSW5wdXQoZiwgdGFzaywgXCJjYXRlZ29yeVwiLCBcInRleHRcIiwgXCJDYXRlZ29yeTpcIik7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gYWRkRWxlbWVudCgnaW5wdXQnLCBmLCBbXSwgbnVsbCwge3R5cGU6ICdzdWJtaXQnfSk7XG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIGYsIFsnYnV0dG9uLWRpdiddKTtcbiAgY29uc3QgY2FuY2VsID0gYWRkRWxlbWVudCgnYnV0dG9uJywgYnV0dG9uc0RpdiwgW10sICdDYW5jZWwnKTtcblxuICBpZiAodGFzaykge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbnNEaXYsIFsnZGVsZXRlLWJ0biddLCAnRGVsZXRlIFRhc2snKTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdG9kb3MuZGVsZXRlVGFzayh0YXNrLmdldElkKCkpO1xuXG4gICAgICBpZiAodGFza1N1YnNldCkge1xuICAgICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SUQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlSW5wdXQoW2Rlc2NyaXB0aW9uRmllbGRdKTtcbiAgICBpZiAoIXZhbGlkYXRlcykgcmV0dXJuOyBcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICB0b2Rvcy51cGRhdGVUYXNrKFxuICAgICAgICB0YXNrLmdldElkKCksIFxuICAgICAgICBkZXNjcmlwdGlvbkZpZWxkLnZhbHVlLFxuICAgICAgICBwcmlvcml0eUZpZWxkLnZhbHVlLFxuICAgICAgICBkYXRlRmllbGQudmFsdWUsXG4gICAgICAgIHRpbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlGaWVsZC52YWx1ZVxuICAgICAgKTtcbiAgICAgIFxuICAgICAgaWYgKHRhc2tTdWJzZXQpIHtcbiAgICAgICAgdGFza3NDb21wb25lbnQodG9kb3MsIHRhc2tTdWJzZXQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcHJvamVjdElELCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRvZG9zLmNyZWF0ZVRhc2soXG4gICAgICAgIGRlc2NyaXB0aW9uRmllbGQudmFsdWUsXG4gICAgICAgIHByb2plY3RGaWVsZC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHlGaWVsZC52YWx1ZSxcbiAgICAgICAgZGF0ZUZpZWxkLnZhbHVlLFxuICAgICAgICB0aW1lRmllbGQudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5RmllbGQudmFsdWVcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5vVGFza01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8tdGFzay1tZXNzYWdlJyk7XG4gICAgICBpZiAobm9UYXNrTWVzc2FnZSkge1xuICAgICAgICBub1Rhc2tNZXNzYWdlLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFza1N1YnNldCkge1xuICAgICAgICB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SUQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wb25lbnQucmVwbGFjZVdpdGgobm9kZVRvUmVwbGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRGb3JtQ29tcG9uZW50KG5vZGVUb1JlcGxhY2UpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICBjb21wb25lbnQuaWQgPSBcImZvcm1cIjtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgbm9kZVRvUmVwbGFjZS5yZXBsYWNlV2l0aChjb21wb25lbnQpO1xuXG4gIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZUlucHV0KHBhcmVudCwgZWxlbSwgaWQsIHR5cGUsIGxhYmVsVGV4dCwgd2FybmluZykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgY29uc3QgbGFiZWxXcmFwcGVyID0gYWRkRWxlbWVudCgnZGl2JywgZmllbGREaXYsIFsnbGFiZWwtd3JhcHBlciddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBsYWJlbFdyYXBwZXIsIFtdLCBsYWJlbFRleHQsIHtodG1sRm9yOiBpZH0pO1xuICBhZGRFbGVtZW50KCdwJywgbGFiZWxXcmFwcGVyLCBbJ3dhcm5pbmcnXSwgd2FybmluZyk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgnaW5wdXQnLCBmaWVsZERpdiwgW10sIG51bGwsIHt0eXBlOiB0eXBlLCBpZDogaWR9KTtcblxuICBpZiAoZWxlbSkge1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gIH1cbiAgcmV0dXJuIGZpZWxkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0KHBhcmVudCwgdGFzaywgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sICdQcm9qZWN0OicsIHtodG1sRm9yOiAncHJvamVjdCd9KTtcbiAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGFkZEVsZW1lbnQoJ2RpdicsIGZpZWxkRGl2LCBbJ3NlbGVjdCddKTtcbiAgY29uc3QgZmllbGQgPSBhZGRFbGVtZW50KCdzZWxlY3QnLCBzZWxlY3RXcmFwcGVyLCBbXSwgbnVsbCwge2lkOiAncHJvamVjdCd9KTtcblxuICBjb25zdCBub25lT3B0aW9uID0gYWRkRWxlbWVudCgnb3B0aW9uJywgZmllbGQsIFtdLCAnTm9uZScsIHt2YWx1ZTogMH0pO1xuXG4gIGlmICghdGFzaykge1xuICAgIG5vbmVPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZm9yIChjb25zdCBvcHQgb2Ygb3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGFkZEVsZW1lbnQoJ29wdGlvbicsIGZpZWxkLCBbXSwgb3B0LmdldFRpdGxlKCksIHt2YWx1ZTogb3B0LmdldElkKCl9KTtcblxuICAgIGlmICh0YXNrICYmIHRhc2suZ2V0UHJvamVjdElkKCkgPT09IG9wdC5nZXRJZCgpKSB7XG4gICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmllbGQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5U2VsZWN0KHBhcmVudCwgdGFzaywgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sICdQcmlvcml0eScsIHtodG1sRm9yOiAncHJpb3JpdHknfSk7XG4gIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBmaWVsZERpdiwgWydzZWxlY3QnXSk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgnc2VsZWN0Jywgc2VsZWN0V3JhcHBlciwgW10sIG51bGwsIHtpZDogJ3ByaW9yaXR5J30pO1xuXG4gIGZvciAoY29uc3Qgb3B0IG9mIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBhZGRFbGVtZW50KCdvcHRpb24nLCBmaWVsZCwgW10sIG9wdCwge3ZhbHVlOiBvcHR9KTtcbiAgXG4gICAgaWYgKHRhc2sgJiYgb3B0ID09PSB0YXNrLmdldFByaW9yaXR5KCkpIHtcbiAgICAgIHNlbGVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWVsZDsgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRhcmVhKHBhcmVudCwgZWxlbSwgaWQsIGxhYmVsVGV4dCkge1xuICBjb25zdCBmaWVsZERpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydpbnB1dC1maWVsZCddKTtcbiAgYWRkRWxlbWVudCgnbGFiZWwnLCBmaWVsZERpdiwgW10sIGxhYmVsVGV4dCwge2h0bWxGb3I6IGlkfSk7XG4gIGNvbnN0IGZpZWxkID0gYWRkRWxlbWVudCgndGV4dGFyZWEnLCBmaWVsZERpdiwgW10sIG51bGwsIHtpZDogaWR9KTtcblxuICBpZiAoZWxlbSkge1xuICAgIGZpZWxkLnZhbHVlID0gZWxlbVtgZ2V0JHtpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpfWBdKCk7XG4gIH1cblxuICByZXR1cm4gZmllbGQ7IFxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGZpZWxkcykge1xuICBsZXQgZ29vZCA9IHRydWU7XG4gIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICBpZiAoZi52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIGdvb2QgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRoZUZvcm0gPSBmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgIGNvbnN0IHdhcm5pbmcgPSB0aGVGb3JtLnF1ZXJ5U2VsZWN0b3IoJy53YXJuaW5nJyk7XG4gICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdvb2Q7XG59IiwiaW1wb3J0IHsgb3JkZXJCeURhdGUsIGdldENhdGVnb3JpZXMgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2plY3RDb21wb25lbnQuanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2Zvcm1hdC1saXN0LWJ1bGxldGVkLnN2Z1wiO1xuaW1wb3J0IEFsYXJtIGZyb20gXCIuL2FsYXJtLnN2Z1wiO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL2NhbGVuZGFyLW1vbnRoLnN2Z1wiO1xuaW1wb3J0IENoZWNrIGZyb20gXCIuL2NoZWNrLWNpcmNsZS5zdmdcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IHsgYWRkRWxlbWVudCwgYWRkSW1hZ2UgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZDb21wb25lbnQodG9kb3MsIHBhcmVudCkge1xuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiXG5cbiAgY29uc3QgY29tcG9uZW50ID0gYWRkRWxlbWVudCgnbmF2JywgcGFyZW50LCBbJ25hdiddKTtcbiAgY29uc3QgdGFza3NEaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBjb21wb25lbnQsIFtdKTtcbiAgYWRkRWxlbWVudCgnaDInLCB0YXNrc0RpdiwgW10sIFwiVGFza3NcIik7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFsnQWxsJywgJ1RvZGF5JywgJ1VwY29taW5nJywgJ0NvbXBsZXRlZCddO1xuICBjb25zdCBpY29ucyA9IFtMaXN0LCBBbGFybSwgQ2FsZW5kYXIsIENoZWNrXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpICsrKSB7XG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGFkZEVsZW1lbnQoJ2RpdicsIHRhc2tzRGl2LCBbJ25hdi1idXR0b24td3JhcHBlciddKTtcbiAgICBhZGRJbWFnZShpY29uc1tpXSwgYnV0dG9uV3JhcHBlciwgWydpY29uJ10pO1xuICAgIGFkZEVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbldyYXBwZXIsIFtdLCBidXR0b25zW2ldKTtcbiAgfVxuXG4gIGFkZFRhc2tMaXN0ZW5lcih0YXNrc0RpdiwgdG9kb3MpO1xuXG4gIGNvbnN0IHByb2plY3RzRGl2ID0gYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbXSk7XG4gIGFkZEVsZW1lbnQoJ2gyJywgcHJvamVjdHNEaXYsIFtdLCAnUHJvamVjdHMnKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IHRvZG9zLmdldFByb2plY3RzKCk7XG5cbiAgZm9yIChjb25zdCBjYXQgb2YgZ2V0Q2F0ZWdvcmllcyhwcm9qZWN0cykpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gYWRkRWxlbWVudCgnZGl2JywgcHJvamVjdHNEaXYsIFsncHJvamVjdC1kaXYnXSk7XG4gICAgYWRkRWxlbWVudCgnaDMnLCBwcm9qZWN0RGl2LCBbXSwgY2F0KTtcblxuICAgIGNvbnN0IHNvcnRlZFByb2plY3RzID0gb3JkZXJCeURhdGUocHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRDYXRlZ29yeSgpID09PSBjYXQpKTtcblxuICAgIGZvciAoY29uc3QgcCBvZiBzb3J0ZWRQcm9qZWN0cykgeyBcbiAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBhZGRFbGVtZW50KCdkaXYnLCBwcm9qZWN0RGl2LCBbJ25hdi1idXR0b24td3JhcHBlciddKVxuICAgICAgYWRkSW1hZ2UoQ2lyY2xlLCBidXR0b25XcmFwcGVyLCBbJ3NtYWxsLWljb24nXSk7XG4gICAgICBhZGRFbGVtZW50KCdidXR0b24nLCBidXR0b25XcmFwcGVyLCBbJ3Byb2plY3QtaXRlbSddLCBwLmdldFRpdGxlKCksIHtcImRhdGEtaWRcIjogcC5nZXRJZCgpfSlcbiAgICB9XG4gIH1cbiAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzRGl2LCB0b2Rvcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAgIHRhc2tzQ29tcG9uZW50KHRvZG9zLCBlLnRhcmdldC50ZXh0Q29udGVudCwgY29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdExpc3RlbmVyKGJ1dHRvbkRpdiwgdG9kb3MpIHtcbiAgYnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICAgcHJvamVjdENvbXBvbmVudCh0b2RvcywgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZCksIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgU2NoZWR1bGFibGUgfSBmcm9tIFwiLi9zY2hlZHVsYWJsZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdCA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuICBjb25zdCBzY2hlZHVsYWJsZSA9IFNjaGVkdWxhYmxlKGRhdGUsIHRpbWUpO1xuICB0aXRsZSA9IHRpdGxlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICBjYXRlZ29yeSA9IGNhdGVnb3J5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IHNldENhdGVnb3J5ID0gKG5ld0NhdGVnb3J5KSA9PiB7XG4gICAgY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnNjaGVkdWxhYmxlLFxuICAgIGdldElkLFxuICAgIGdldFRpdGxlLFxuICAgIHNldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIGdldENhdGVnb3J5LFxuICAgIHNldENhdGVnb3J5XG4gIH07XG59OyIsImltcG9ydCB7IG9yZGVyQnlEYXRlLCBnZXRDYXRlZ29yaWVzLCBnZW5lcmF0ZVRhc2tJdGVtSWQgfSBmcm9tIFwiLi92aWV3SGVscGVycy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0dyb3VwLCBjcmVhdGVUYXNrSXRlbSwgYWRkTmV3Rm9ybUJ0bnMsIGFkZEVsZW1lbnQgfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0Rm9ybUNvbXBvbmVudCwgdGFza0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q29tcG9uZW50KHRvZG9zLCBwcm9qZWN0SWQsIHBhcmVudCkge1xuICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGFkZE5ld0Zvcm1CdG5zKHBhcmVudCk7XG5cbiAgY29uc3QgY29tcG9uZW50ID0gYWRkRWxlbWVudCgnZGl2JywgcGFyZW50LCBbJ2NvbXBvbmVudCddKTtcbiAgY29uc3QgaGVhZGVyID0gYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbJ3Byb2plY3QtaGVhZGVyJ10pO1xuICBhZGRFbGVtZW50KCdoMScsIGhlYWRlciwgW10sIHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkuZ2V0VGl0bGUoKSk7XG4gIGFkZEVsZW1lbnQoJ3AnLCBoZWFkZXIsIFtdLCB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpLmRhdGVGb3JtYXR0ZWQoKSk7XG4gIGFkZEVsZW1lbnQoJ2J1dHRvbicsIGhlYWRlciwgWydlZGl0LXByb2plY3QnXSwgJ0VkaXQnLCB7aWQ6ICdlZGl0LXByb2plY3QnfSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSB0b2Rvcy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpLmdldERlc2NyaXB0aW9uKCk7XG4gIGlmIChkZXNjcmlwdGlvbiAhPT0gXCJcIikge1xuICAgIGFkZEVsZW1lbnQoJ3AnLCBjb21wb25lbnQsIFtdLCBkZXNjcmlwdGlvbik7XG4gIH1cblxuICBhZGRFbGVtZW50KCdkaXYnLCBjb21wb25lbnQsIFtdLCBudWxsLCB7aWQ6ICdmb3JtJ30pOyBcblxuICBjb25zdCBwcm9qZWN0RGl2ID0gYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbJ21haW4tY29udGVudCddKTtcblxuICBjb25zdCB0YXNrcyA9IHRvZG9zLmdldFRhc2tzQnlQcm9qZWN0SWQocHJvamVjdElkKTsgXG5cbiAgZm9yIChjb25zdCBjYXQgb2YgZ2V0Q2F0ZWdvcmllcyh0YXNrcykpIHsgXG4gICAgY29uc3QgZ3JvdXAgPSBjcmVhdGVUYXNrR3JvdXAocHJvamVjdERpdiwgY2F0KTsgXG4gICAgY29uc3Qgc29ydGVkVGFza3MgPSBvcmRlckJ5RGF0ZSh0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldENhdGVnb3J5KCkgPT09IGNhdCkpO1xuXG4gICAgZm9yIChjb25zdCB0IG9mIHNvcnRlZFRhc2tzKSB7XG4gICAgICBjcmVhdGVUYXNrSXRlbShncm91cCwgdG9kb3MsIHQsIHRydWUpOyBcbiAgICB9XG4gIH1cbiAgYWRkQnV0dG9uTGlzdGVuZXJzKHBhcmVudCwgdG9kb3MsIHByb2plY3RJZCk7XG59XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCBwcm9qZWN0SWQpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuXG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIGZvcm1EaXYsIHRvZG9zKTtcbiAgfSk7XG5cbiAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgZm9ybURpdiwgdG9kb3MsIG51bGwsIHByb2plY3RJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdCcpO1xuICBwcm9qZWN0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtQ29tcG9uZW50KHBhcmVudCwgZm9ybURpdiwgdG9kb3MsIHRvZG9zLmdldFByb2plY3RCeUlkKHByb2plY3RJZCkpO1xuICB9KTtcblxuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWJ1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRCdG5zLmxlbmd0aDsgaSArKyl7XG4gICAgZWRpdEJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2VuZXJhdGVUYXNrSXRlbUlkKGUudGFyZ2V0LmRhdGFzZXQudGFza2lkKSk7XG4gICAgICBjb25zdCB0YXNrID0gdG9kb3MuZ2V0VGFza0J5SWQocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC50YXNraWQpKTtcbiAgICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgdGFza0RpdiwgdG9kb3MsIG51bGwsIHByb2plY3RJZCwgdGFzayk7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwiZXhwb3J0IGNvbnN0IFNjaGVkdWxhYmxlID0gKGRhdGUsIHRpbWUpID0+IHtcbiAgY29uc3QgZ2V0RGF0ZUFzRGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoZGF0ZSA9PT0gXCJcIikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IHRpbWUgPT09IFwiXCIgPyBcIlQyMzo1OTo1OVwiIDogXCJUXCIgKyB0aW1lICsgXCI6MDBcIjtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSArIHRpbWVTdHJpbmcpO1xuICB9O1xuXG4gIGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGUgPT09IFwiXCIpIHJldHVybiBkYXRlO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZVs1XSA9PT0gXCIwXCIgPyBkYXRlLnNsaWNlKDYsIDcpIDogZGF0ZS5zbGljZSg1LCA3KTtcbiAgICBjb25zdCBkYXkgPSBkYXRlWzhdID09PSBcIjBcIiA/IGRhdGUuc2xpY2UoOSkgOiBkYXRlLnNsaWNlKDgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLnNsaWNlKDAsIDQpO1xuXG4gICAgcmV0dXJuIG1vbnRoICsgXCIvXCIgKyBkYXkgKyBcIi9cIiArIHllYXI7XG4gIH07XG5cbiAgY29uc3QgdGltZUZvcm1hdHRlZCA9ICgpID0+IHtcbiAgICBpZiAodGltZSA9PT0gXCJcIikgcmV0dXJuIHRpbWU7XG4gICAgbGV0IGhvdXIgPSBwYXJzZUludCh0aW1lLnNsaWNlKDAsIDIpKTtcbiAgICBjb25zdCBtaW4gPSB0aW1lLnNsaWNlKDIpO1xuICAgIGNvbnN0IG0gPSBob3VyID49IDEyID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIGhvdXIgPSBob3VyID4gMTIgPyBob3VyIC0gMTIgOiBob3VyO1xuICAgIHJldHVybiBgJHtob3VyfSR7bWlufSAke219YDtcbiAgfTtcblxuICAvL2Fsc28gbmVlZCBzZXQgZGF0ZSwgdGltZSBmb3IgZWRpdGluZ1xuXG4gIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgIGRhdGUgPSBuZXdEYXRlO1xuICB9O1xuXG4gIGNvbnN0IHNldFRpbWUgPSAobmV3VGltZSkgPT4ge1xuICAgIHRpbWUgPSBuZXdUaW1lO1xuICB9O1xuXG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cblxuICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREYXRlQXNEYXRlLFxuICAgIGRhdGVGb3JtYXR0ZWQsXG4gICAgdGltZUZvcm1hdHRlZCxcbiAgICBzZXREYXRlLFxuICAgIHNldFRpbWUsXG4gICAgZ2V0VGltZSxcbiAgICBnZXREYXRlXG4gIH07XG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVUYXNrSXRlbUlkIH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcbmltcG9ydCBQbHVzIGZyb20gXCIuL3BsdXMuc3ZnXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi9pbmZvcm1hdGlvbi1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRWxlbWVudCh0eXBlLCBwYXJlbnQsIGNsYXNzZXMsIHRleHRDb250ZW50ID0gbnVsbCwgb3B0aW9ucyA9IHt9KXtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG4gIGlmICh0ZXh0Q29udGVudCkgZWxlbS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50OyBcblxuICBmb3IgKGNvbnN0IG8gaW4gb3B0aW9ucykge1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKG8sIG9wdGlvbnNbb10pO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEltYWdlKHNyYywgcGFyZW50LCBjbGFzc2VzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBzcmM7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgZm9yIChjb25zdCBvIGluIG9wdGlvbnMpIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUobywgb3B0aW9uc1tvXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0Zvcm1CdG5zKHBhcmVudCkge1xuICBjb25zdCBuZXdGb3JtQnRuc0RpdiA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWyduZXctYnV0dG9ucy1kaXYnXSk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBhZGRFbGVtZW50KCdidXR0b24nLCBuZXdGb3JtQnRuc0RpdiwgW10sIG51bGwsIHtpZDogXCJuZXctcHJvamVjdFwifSk7XG4gIGFkZEltYWdlKFBsdXMsIG5ld1Byb2plY3QpO1xuICBhZGRFbGVtZW50KCdwJywgbmV3UHJvamVjdCwgW10sIFwiTmV3IFByb2plY3RcIik7XG5cbiAgY29uc3QgbmV3VGFzayA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIG5ld0Zvcm1CdG5zRGl2LCBbXSwgbnVsbCwge2lkOiBcIm5ldy10YXNrXCJ9KTtcbiAgYWRkSW1hZ2UoUGx1cywgbmV3VGFzayk7XG4gIGFkZEVsZW1lbnQoJ3AnLCBuZXdUYXNrLCBbXSwgXCJOZXcgVGFza1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tHcm91cChwYXJlbnQsIGdyb3VwVGl0bGUpIHtcbiAgY29uc3QgZ3JvdXBEaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBwYXJlbnQsIFsndGFzay1ncm91cCddKTtcbiAgYWRkRWxlbWVudCgnaDInLCBncm91cERpdiwgW10sIGdyb3VwVGl0bGUpO1xuXG4gIHJldHVybiBncm91cERpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKHBhcmVudCwgdG9kb3MsIHRhc2ssIGluY2x1ZGVEYXRlID0gZmFsc2UpIHsgXG4gIGNvbnN0IGl0ZW1EaXYgPSBhZGRFbGVtZW50KCdkaXYnLCBwYXJlbnQsIFsnaXRlbScsIHRhc2suZ2V0UHJpb3JpdHkoKV0sIG51bGwsIHtpZDogZ2VuZXJhdGVUYXNrSXRlbUlkKHRhc2suZ2V0SWQoKSl9KTtcbiAgY29uc3QgbGJsID0gYWRkRWxlbWVudCgnbGFiZWwnLCBpdGVtRGl2LCBbXSk7XG4gIGNvbnN0IGNoZWNrID0gYWRkRWxlbWVudCgnaW5wdXQnLCBsYmwsIFtdLCBudWxsLCB7dHlwZTogJ2NoZWNrYm94J30pO1xuXG4gIGlmICh0YXNrLmNvbXBsZXRlKCkpIHtcbiAgICBjaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgdGFzay51cGRhdGVTdGF0dXMoKTtcblxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgICAgaWYgKHBhZ2VUaXRsZS50ZXh0Q29udGVudCAhPT0gXCJDb21wbGV0ZWRcIikge1xuICAgICAgICBjb25zdCBhbmNlc3Rvckl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KFwiLml0ZW1cIik7XG4gICAgICAgIGFuY2VzdG9ySXRlbS5jbGFzc0xpc3QuYWRkKFwiZmFkZS1vdXRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB3cmFwcGVyID0gYWRkRWxlbWVudCgnZGl2JywgbGJsLCBbJ2l0ZW0tY29udGVudCddKTtcbiAgY29uc3QgbGFiZWxDb250ZW50ID0gYWRkRWxlbWVudCgnc3BhbicsIHdyYXBwZXIsIFsnbGFiZWwtY29udGVudCddKTtcbiAgYWRkRWxlbWVudCgnc3BhbicsIGxhYmVsQ29udGVudCwgW10sIHRhc2suZ2V0RGVzY3JpcHRpb24oKSk7XG5cbiAgaWYgKHRhc2suZ2V0UHJvamVjdElkKCkgPiAwKSB7XG4gICAgYWRkRWxlbWVudCgnc3BhbicsIGxhYmVsQ29udGVudCwgWydwcm9qZWN0LXRpdGxlJ10sIHRvZG9zLmdldFByb2plY3RCeUlkKHRhc2suZ2V0UHJvamVjdElkKCkpLmdldFRpdGxlKCkpO1xuICB9XG5cbiAgaWYgKHRhc2sudGltZUZvcm1hdHRlZCgpICE9PSBcIlwiKSB7XG4gICAgY29uc3QgdGltZSA9IGFkZEVsZW1lbnQoJ2RpdicsIHdyYXBwZXIsIFsnZGF0ZXRpbWUtZGlzcGxheSddKTtcblxuICAgIGlmIChpbmNsdWRlRGF0ZSkge1xuICAgICAgYWRkRWxlbWVudCgnc3BhbicsIHRpbWUsIFtdLCB0YXNrLmRhdGVGb3JtYXR0ZWQoKSk7XG4gICAgfVxuICAgIGFkZEVsZW1lbnQoJ3NwYW4nLCB0aW1lLCBbXSwgdGFzay50aW1lRm9ybWF0dGVkKCkpO1xuICB9XG5cbiAgY29uc3QgZWRpdCA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIHdyYXBwZXIsIFsnZWRpdC1idXR0b24nXSwgbnVsbCwge1wiZGF0YS10YXNrSWRcIjogdGFzay5nZXRJZCgpfSk7XG4gIGFkZEltYWdlKEluZm8sIGVkaXQsIFsnaWNvbiddLCB7XCJkYXRhLXRhc2tJZFwiOiB0YXNrLmdldElkKCl9KTtcblxuICBpZiAodGFzay5nZXRQcmlvcml0eSgpID09PSAnaGlnaCcpIHtcbiAgICBhZGRFbGVtZW50KCdwJywgd3JhcHBlciwgW10sIFwiIVwiKTtcbiAgfVxuICByZXR1cm4gaXRlbURpdjtcbn0iLCJpbXBvcnQgeyBTY2hlZHVsYWJsZSB9IGZyb20gXCIuL3NjaGVkdWxhYmxlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBwcmlvcml0eSwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkgPSBcIm1pc2NcIikgPT4ge1xuICBjb25zdCBzY2hlZHVsYWJsZSA9IFNjaGVkdWxhYmxlKGRhdGUsIHRpbWUpO1xuXG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuICBcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdElkO1xuICB9O1xuXG4gIGNvbnN0IGdldENhdGVnb3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yeTtcbiAgfTtcblxuICBjb25zdCBzZXRDYXRlZ29yeSA9IChuZXdDYXRlZ29yeSkgPT4ge1xuICAgIGNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9O1xuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY29tcGxldGVkO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVN0YXR1cyA9ICgpID0+IHtcbiAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc2NoZWR1bGFibGUsXG4gICAgZ2V0SWQsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0UHJvamVjdElkLFxuICAgIGdldENhdGVnb3J5LFxuICAgIHNldENhdGVnb3J5LFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGNvbXBsZXRlLFxuICAgIHVwZGF0ZVN0YXR1c1xuICB9O1xufTsiLCJpbXBvcnQgeyBvcmRlckJ5RGF0ZSwgc2FtZURheSwgZ2V0RGl2VGl0bGUsIGdlbmVyYXRlVGFza0l0ZW1JZCB9IGZyb20gXCIuL3ZpZXdIZWxwZXJzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrR3JvdXAsIGNyZWF0ZVRhc2tJdGVtLCBhZGROZXdGb3JtQnRucywgYWRkRWxlbWVudCB9IGZyb20gXCIuL3N1YmNvbXBvbmVudHMuanNcIjtcbmltcG9ydCB7IHByb2plY3RGb3JtQ29tcG9uZW50LCB0YXNrRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc0NvbXBvbmVudCh0b2RvcywgdGFza1N1YnNldCwgcGFyZW50KSB7XG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgYWRkTmV3Rm9ybUJ0bnMocGFyZW50KTtcblxuICBjb25zdCB0YXNrcyA9IHRvZG9zW2BnZXQke3Rhc2tTdWJzZXR9VGFza3NgXSgpO1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFkZEVsZW1lbnQoJ2RpdicsIHBhcmVudCwgWydjb21wb25lbnQnXSk7XG4gIGFkZEVsZW1lbnQoJ2gxJywgY29tcG9uZW50LCBbXSwgKHRhc2tTdWJzZXQgPT09IFwiVG9kYXlcIiA/IFwiVGFza3NcIiA6IHRhc2tTdWJzZXQpKTtcblxuICBhZGRFbGVtZW50KCdkaXYnLCBjb21wb25lbnQsIFtdLCBudWxsLCB7aWQ6ICdmb3JtJ30pO1xuXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBhZGRFbGVtZW50KCdwJywgY29tcG9uZW50LCBbXSwgXCJObyB0YXNrc1wiLCB7aWQ6ICduby10YXNrcy1tZXNzYWdlJ30pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNvcnRlZFRhc2tzID0gb3JkZXJCeURhdGUodGFza3MpO1xuXG4gIGNvbnN0IHRhc2tzRGl2ID0gYWRkRWxlbWVudCgnZGl2JywgY29tcG9uZW50LCBbJ21haW4tY29udGVudCddKTtcblxuICBsZXQgY3VyckRhdGUgPSBzb3J0ZWRUYXNrc1swXS5nZXREYXRlQXNEYXRlKCk7XG4gIGxldCBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKHRhc2tzRGl2LCBnZXREaXZUaXRsZShjdXJyRGF0ZSkpOyBcblxuICBmb3IgKGNvbnN0IHQgb2Ygc29ydGVkVGFza3MpIHtcbiAgICBpZiAoc2FtZURheSh0LmdldERhdGVBc0RhdGUoKSwgY3VyckRhdGUpKSB7XG4gICAgICBjcmVhdGVUYXNrSXRlbShjdXJyRGl2LCB0b2RvcywgdCk7IFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGN1cnJEYXRlID0gdC5nZXREYXRlQXNEYXRlKCk7XG4gICAgICBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKHRhc2tzRGl2LCBnZXREaXZUaXRsZShjdXJyRGF0ZSkpO1xuICAgICAgY3JlYXRlVGFza0l0ZW0oY3VyckRpdiwgdG9kb3MsIHQpO1xuICAgIH1cbiAgfVxuICBhZGRCdXR0b25MaXN0ZW5lcnMocGFyZW50LCB0b2RvcywgdGFza1N1YnNldCk7XG59XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycyhwYXJlbnQsIHRvZG9zLCB0YXNrU3Vic2V0KSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKTtcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuXG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBub2RlVG9SZXBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybUNvbXBvbmVudChwYXJlbnQsIG5vZGVUb1JlcGxhY2UsIHRvZG9zKTtcbiAgfSk7XG5cbiAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5vZGVUb1JlcGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHRhc2tTdWJzZXQsIG51bGwpO1xuICB9KTtcblxuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWJ1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRCdG5zLmxlbmd0aDsgaSArKyl7XG4gICAgZWRpdEJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBub2RlVG9SZXBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2VuZXJhdGVUYXNrSXRlbUlkKGUudGFyZ2V0LmRhdGFzZXQudGFza2lkKSk7XG4gICAgICBjb25zdCB0YXNrID0gdG9kb3MuZ2V0VGFza0J5SWQocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC50YXNraWQpKTtcbiAgICAgIHRhc2tGb3JtQ29tcG9uZW50KHBhcmVudCwgbm9kZVRvUmVwbGFjZSwgdG9kb3MsIHRhc2tTdWJzZXQsIG51bGwsIHRhc2spO1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBzYW1lRGF5IH0gZnJvbSBcIi4vdmlld0hlbHBlcnMuanNcIjtcblxuZXhwb3J0IGNvbnN0IFRvZG8gPSAoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgdGFza3MgPSBbXTtcblxuICBsZXQgcHJvamVjdElkQ291bnRlciA9IDE7XG4gIGxldCB0YXNrSWRDb3VudGVyID0gMTtcblxuICBjb25zdCBnZXRQcm9qZWN0QnlJZCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHAgPSBwcm9qZWN0cy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKCkgPT09IGlkKTtcbiAgICBpZiAocC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiBwWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tCeUlkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdCA9IHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uZ2V0SWQoKSA9PT0gaWQpO1xuICAgIGlmICh0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRbMF07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHRpbWUsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgcCA9IFByb2plY3QocHJvamVjdElkQ291bnRlciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSk7XG4gICAgcHJvamVjdHMucHVzaChwKTtcbiAgICBwcm9qZWN0SWRDb3VudGVyKys7XG4gICAgcmV0dXJuIHAuZ2V0SWQoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKGRlc2NyaXB0aW9uLCBwcm9qZWN0SWQsIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuXG4gICAgY29uc3QgdCA9IFRhc2sodGFza0lkQ291bnRlciwgZGVzY3JpcHRpb24sIHBhcnNlSW50KHByb2plY3RJZCksIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSk7XG4gICAgdGFza3MucHVzaCh0KTtcbiAgICB0YXNrSWRDb3VudGVyKys7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRJZCgpICE9PSBpZCk7XG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldFByb2plY3RJZChpZCkgIT09IGlkKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldElkKGlkKSAhPT0gaWQpXG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChpZCk7XG4gICAgcHJvamVjdC5zZXRUaXRsZSh0aXRsZSk7XG4gICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdC5zZXREYXRlKGRhdGUpO1xuICAgIHByb2plY3Quc2V0VGltZSh0aW1lKTtcbiAgICBwcm9qZWN0LnNldENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKGlkLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIHRpbWUsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tCeUlkKGlkKTtcbiAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICB0YXNrLnNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICB0YXNrLnNldERhdGUoZGF0ZSk7XG4gICAgdGFzay5zZXRUaW1lKHRpbWUpO1xuICAgIHRhc2suc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IFxuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZWxlbSA9PiAhZWxlbS5jb21wbGV0ZSgpICYmIHNhbWVEYXkoZWxlbS5nZXREYXRlQXNEYXRlKCksIHRvZGF5KSk7IFxuICB9O1xuXG4gIGNvbnN0IGdldFVwY29taW5nVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpOyAvL3dhbnQgc3RhcnQgb2YgZGF5XG4gICAgdG9kYXkuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IChlbGVtLmdldERhdGVBc0RhdGUoKSAhPT0gbnVsbCAmJiBlbGVtLmdldERhdGVBc0RhdGUoKSA+PSB0b2RheSAmJiAhZWxlbS5jb21wbGV0ZSgpKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+ICFlbGVtLmNvbXBsZXRlKCkpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q29tcGxldGVkVGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihlbGVtID0+IGVsZW0uY29tcGxldGUoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3NCeVByb2plY3RJZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldFByb2plY3RJZCgpID09PSBpZCAmJiAhZWxlbS5jb21wbGV0ZSgpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RCeUlkLFxuICAgIGdldFRhc2tCeUlkLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY3JlYXRlVGFzayxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgdXBkYXRlUHJvamVjdCxcbiAgICB1cGRhdGVUYXNrLFxuICAgIGdldFByb2plY3RzLFxuICAgIGdldFRhc2tzLFxuICAgIGdldFRvZGF5VGFza3MsXG4gICAgZ2V0QWxsVGFza3MsXG4gICAgZ2V0VXBjb21pbmdUYXNrcyxcbiAgICBnZXRDb21wbGV0ZWRUYXNrcyxcbiAgICBnZXRUYXNrc0J5UHJvamVjdElkXG4gIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9yZGVyQnlEYXRlKG9iamVjdHNXaXRoRGF0ZSkge1xuICByZXR1cm4gb2JqZWN0c1dpdGhEYXRlLnNvcnQoIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoYS5nZXREYXRlQXNEYXRlKCkgJiYgYi5nZXREYXRlQXNEYXRlKCkpIHtcbiAgICAgIGlmIChhLmdldERhdGVBc0RhdGUoKSA+IGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYS5nZXREYXRlQXNEYXRlKCkgPCBiLmdldERhdGVBc0RhdGUoKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGIuZ2V0RGF0ZUFzRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcyhhcnIpIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGFyci5tYXAoZWxlbSA9PiBlbGVtLmdldENhdGVnb3J5KCkpO1xuICByZXR1cm4gWy4uLm5ldyBTZXQoY2F0ZWdvcmllcyldLnNvcnQoKTtcbn1cblxuLy9yaWdodCBub3cgcGFzc2luZyB0YXNrcy4uIGJ1dCByZWFsbHkgd2FudCB0byBwYXNzIGRhdGVzIG9yIG5pbFxuZXhwb3J0IGZ1bmN0aW9uIHNhbWVEYXkob25lLCB0d28pIHsgXG4gIGlmICghb25lICYmICF0d28pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKCFvbmUgfHwgIXR3bykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gb25lLmdldERhdGUoKSA9PT0gdHdvLmdldERhdGUoKSAmJiBcbiAgICBvbmUuZ2V0TW9udGgoKSA9PT0gdHdvLmdldE1vbnRoKCkgJiZcbiAgICBvbmUuZ2V0RnVsbFllYXIoKSA9PT0gdHdvLmdldEZ1bGxZZWFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXZUaXRsZShkYXRlKSB7IFxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKTtcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblxuICBpZiAoIWRhdGUpIHtcbiAgICByZXR1cm4gXCJVbnNjaGVkdWxlZFwiO1xuICB9XG4gIGVsc2UgaWYgKHNhbWVEYXkoZGF0ZSwgdG9kYXkpKSB7XG4gICAgcmV0dXJuIFwiVG9kYXlcIjtcbiAgfVxuICBlbHNlIGlmIChzYW1lRGF5KGRhdGUsIHRvbW9ycm93KSkge1xuICAgIHJldHVybiBcIlRvbW9ycm93XCI7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi11cycsIHsgd2Vla2RheTpcImxvbmdcIiwgeWVhcjpcIm51bWVyaWNcIiwgbW9udGg6XCJzaG9ydFwiLCBkYXk6XCJudW1lcmljXCJ9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSXRlbUlkKGlkKSB7XG4gIHJldHVybiBgdGFza18ke2lkfWA7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG5hdkNvbXBvbmVudCB9IGZyb20gXCIuL25hdi5qc1wiO1xuaW1wb3J0IHsgdGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrc0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuXG4vL3NvbWUgZHVtbXkgZGF0YSAtTkVFRFMgVVBEQVRJTkdcbmNvbnN0IHRvZG9zID0gVG9kbygpOyBcblxudG9kb3MuY3JlYXRlUHJvamVjdChcIlByb2plY3QgT25lXCIsIFwic29tZSBkZXNjcmlwdGlvbi4uLlwiLCBcIjIwMjMtMDctMjBcIiwgXCIxMzowMFwiLCBcIndvcmtcIik7XG50b2Rvcy5jcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBUd29cIiwgXCJzb21lIGRlc2NyaXB0aW9uLi4uLlwiLCBcIjIwMjMtMDctMjBcIiwgXCIwNzowMFwiLCBcIndvcmtcIik7XG50b2Rvcy5jcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBUaHJlZVwiLCBcInNvbWUgZGVzY3JpcHRpb24uLi5cIiwgXCIyMDIzLTA5LTAxXCIsIFwiXCIsIFwid29ya1wiKTtcblxuLy9jcmVhdGVUYXNrID0gKGRlc2NyaXB0aW9uLCBwcm9qZWN0SWQsIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSlcblxudG9kb3MuY3JlYXRlVGFzayhcImEgdGhpbmcgdGhhdCBtdXN0IGJlIGRvbmVcIiwgMSwgXCJoaWdoXCIsIFwiMjAyMy0wNy0xN1wiLCBcIjEyOjAwXCIsIFwibWlzY1wiKTtcbnRvZG9zLmNyZWF0ZVRhc2soXCJhbm90aGVyIHRoaW5nIHRvIGRvXCIsIDEsIFwibG93XCIsIFwiMjAyMy0wNy0xN1wiLCBcIlwiLCBcIm1pc2NcIik7XG50b2Rvcy5jcmVhdGVUYXNrKFwiYSB0aGlyZCB0aGluZ1wiLCAyLCBcImxvd1wiLCBcIjIwMjMtMDctMThcIiwgXCJcIiwgXCJzb21lIG90aGVyIGNhdGVnb3J5XCIpO1xuXG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vdGVzdCBkcmF3aW5nIHRoZSBuYXYgYmFyICsgaW5pdGlhbCBzdGF0ZSBhcyB0YXNrcyBjb21wb25lbnQ/IFxuICBjb25zdCBuYXZQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgbmF2Q29tcG9uZW50KHRvZG9zLCBuYXZQYXJlbnQpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgdGFza3NDb21wb25lbnQodG9kb3MsIFwiQWxsXCIsIGNvbnRlbnQpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=