/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  padding: 0;\\n  margin: 0;\\n  outline: none;\\n}\\n\\nbody {\\n  background: linear-gradient(180deg, rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%);\\n  background-size: 100%;\\n  font-family: Montserrat-Bold;\\n  color: white;\\n  display: grid;\\n}\\n\\nheader {\\n  height: 44px;\\n  grid-row: 1;\\n}\\n\\n.button_update_info {\\n  background: rgba(180, 184, 187, 0.4);\\n  border-radius: 5px;\\n}\\n\\n.pop-up_menu_leanguage {\\n  background: rgba(174, 181, 185, 0.5);\\n  border-radius: 5px;\\n}\\n\\n.change_metric_temperature {\\n  width: 88px;\\n  display: grid;\\n  grid-template-columns: 44px 44px;\\n}\\n\\n.button_fahrenheit {\\n  background: rgba(76, 82, 85, 0.4);\\n  border-radius: 5px 0px 0px 5px;\\n}\\n\\n.svg_update {\\n  padding: 12px 0 0 14px;\\n}\\n\\n.button_celsius {\\n  border-radius: 0px 5px 5px 0px;\\n  background: rgba(174, 181, 185, 0.5);\\n}\\n\\n.text_field_search {\\n  width: auto;\\n  font-family: Montserrat-Regular;\\n  display: flex;\\n  margin-left: 15px;\\n  font-feature-settings: \\\"cpsp\\\" on;\\n}\\n\\n.button_search {\\n  background: rgba(174, 181, 185, 0.5);\\n  border-radius: 0px 5px 5px 0px;\\n  text-transform: uppercase;\\n}\\n\\n.text_settings {\\n  font-size: 14px;\\n  line-height: 17px;\\n  text-align: center;\\n  line-height: 44px;\\n}\\n\\n.svg_microphone {\\n  padding-top: 4px;\\n  height: 40px;\\n}\\n\\n.temperature_now {\\n  grid-column-start: 1;\\n  grid-row-start: 1;\\n  display: grid;\\n  grid-template-columns: 330px 50px;\\n}\\n\\n.image_src {\\n  clip-path: polygon(0% 0%, 100% 0%, 100% 94%, 100% 94%, 100% 100%, 92% 94%, 0 94%);\\n}\\n\\n.field_search {\\n  background: rgba(76, 82, 85, 0.4);\\n  border: 1px solid rgba(228, 227, 227, 0.2);\\n  border-radius: 5px 0px 0px 5px;\\n  box-sizing: border-box;\\n  display: grid;\\n  grid-template-columns: auto 40px;\\n}\\n\\n.latitude {\\n  margin-bottom: 6px;\\n}\\n\\n@media only screen and (min-width: 1020px) {\\n  /* For PC: */\\n  body {\\n    display: grid;\\n    grid-template-rows: 44px 1fr;\\n    padding-top: 40px;\\n  }\\n\\n  .city {\\n    font-size: 44px;\\n    line-height: 54px;\\n    text-transform: uppercase;\\n    padding-bottom: 5px;\\n  }\\n\\n  .image_now {\\n    margin-left: 305px;\\n    grid-column-start: 1;\\n    grid-row-start: 1;\\n  }\\n\\n  .info_about_time {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-column-gap: 10px;\\n    font-weight: 600;\\n    font-size: 24px;\\n    line-height: 29px;\\n  }\\n\\n  header {\\n    display: grid;\\n    grid-template-columns: 47.381% 29.762%;\\n    grid-column-gap: 22.857%;\\n    padding: 0 6.25% 0 6.25%;\\n  }\\n\\n  section {\\n    grid-row-start: 2;\\n    display: grid;\\n    grid-template-columns: 47.381% 29.762%;\\n    grid-column-gap: 22.857%;\\n    padding: 0 6.25% 0 6.25%;\\n  }\\n\\n  .main_info {\\n    padding-top: 57px;\\n  }\\n\\n  .geolocation {\\n    padding-top: 170px;\\n  }\\n\\n  .buttons_settings {\\n    height: 44px;\\n    width: 222px;\\n    display: grid;\\n    grid-template-columns: 44px 71px 88px;\\n    grid-column-gap: 10px;\\n  }\\n\\n  .search {\\n    height: 44px;\\n    display: grid;\\n    grid-template-columns: 73.07% 26.93%;\\n  }\\n\\n  .info_about_wheather_now {\\n    height: 368px;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  .number_temperature {\\n    font-size: 306px;\\n  }\\n\\n  .sign_temterature {\\n    padding-top: 50px;\\n    font-size: 100px;\\n  }\\n\\n  .more_detail_weather {\\n    width: 200px;\\n    grid-column-start: 1;\\n    margin-left: 400px;\\n    grid-row-start: 1;\\n    font-size: 22px;\\n    line-height: 37px;\\n    text-transform: uppercase;\\n    margin-top: 155px;\\n  }\\n\\n  .days_week {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n\\n  .temperature {\\n    font-weight: 600;\\n    font-size: 80px;\\n    line-height: 98px;\\n  }\\n\\n  .name_day {\\n    font-size: 22px;\\n    line-height: 27px;\\n    margin-bottom: 5px;\\n  }\\n\\n  .image_weather {\\n    margin-top: 10px;\\n  }\\n\\n  .info_weathe_next_days {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  .button_search {\\n    background: rgba(174, 181, 185, 0.5);\\n    border-radius: 0px 5px 5px 0px;\\n    text-transform: uppercase;\\n  }\\n\\n  .text_settings {\\n    font-size: 14px;\\n    line-height: 17px;\\n    text-align: center;\\n    line-height: 44px;\\n  }\\n\\n  .image_src {\\n    max-width: 100%;\\n  }\\n\\n  .map {\\n    width: 100%;\\n  }\\n\\n  .coordination {\\n    padding-top: 10px;\\n    text-align: right;\\n  }\\n}\\n@media only screen and (max-width: 1020px) {\\n  /* For Tablets: */\\n  body {\\n    display: grid;\\n    grid-template-rows: 44px auto;\\n    padding-top: 40px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n\\n  .city {\\n    font-size: 40px;\\n    line-height: 50px;\\n    text-transform: uppercase;\\n    padding-bottom: 5px;\\n  }\\n\\n  .info_about_time {\\n    display: grid;\\n    grid-template-columns: 300px 50px;\\n    font-size: 24px;\\n    line-height: 29px;\\n  }\\n\\n  .temperature_now {\\n    grid-column-start: 1;\\n    grid-row-start: 1;\\n    display: grid;\\n    grid-template-columns: 310px 50px;\\n  }\\n\\n  .image_now {\\n    margin-left: 305px;\\n    grid-column-start: 1;\\n    grid-row-start: 1;\\n  }\\n\\n  header {\\n    display: grid;\\n    grid-template-columns: 223px auto;\\n    grid-column-gap: 10px;\\n    padding: 0 6.25% 0 6.25%;\\n  }\\n\\n  section {\\n    grid-row-start: 2;\\n    display: grid;\\n    grid-template-rows: 1fr 1fr;\\n    padding: 0 6.25% 0 6.25%;\\n  }\\n\\n  .main_info {\\n    padding-top: 57px;\\n  }\\n\\n  .geolocation {\\n    text-align: center;\\n    padding-top: 30px;\\n  }\\n\\n  .buttons_settings {\\n    height: 44px;\\n    width: 222px;\\n    display: grid;\\n    grid-template-columns: 44px 71px 88px;\\n    grid-column-gap: 10px;\\n  }\\n\\n  .search {\\n    height: 44px;\\n    display: grid;\\n    grid-template-columns: 73.07% 26.93%;\\n  }\\n\\n  .info_about_wheather_now {\\n    height: 368px;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  .number_temperature {\\n    font-size: 280px;\\n  }\\n\\n  .sign_temterature {\\n    padding-top: 50px;\\n    font-size: 100px;\\n  }\\n\\n  .more_detail_weather {\\n    width: 200px;\\n    grid-column-start: 1;\\n    margin-left: 305px;\\n    grid-row-start: 1;\\n    font-size: 22px;\\n    line-height: 37px;\\n    text-transform: uppercase;\\n    margin-top: 155px;\\n  }\\n\\n  .days_week {\\n    display: flex;\\n    justify-content: space-between;\\n  }\\n\\n  .temperature {\\n    font-weight: 600;\\n    font-size: 80px;\\n    line-height: 98px;\\n  }\\n\\n  .name_day {\\n    font-size: 22px;\\n    line-height: 27px;\\n    margin-bottom: 5px;\\n  }\\n\\n  .image_weather {\\n    margin-top: 10px;\\n  }\\n\\n  .info_weathe_next_days {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  .button_search {\\n    background: rgba(174, 181, 185, 0.5);\\n    border-radius: 0px 5px 5px 0px;\\n    text-transform: uppercase;\\n  }\\n\\n  .text_settings {\\n    font-size: 14px;\\n    line-height: 17px;\\n    text-align: center;\\n    line-height: 44px;\\n  }\\n\\n  .image_src {\\n    width: 500px;\\n  }\\n\\n  .coordination {\\n    padding-top: 12px;\\n    margin-left: auto;\\n    margin-right: auto;\\n    width: 500px;\\n    text-align: right;\\n  }\\n\\n  .side_menu {\\n    display: none;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  /* For Phone: */\\n  body {\\n    display: grid;\\n    grid-template-rows: 44px 1fr;\\n    padding-top: 40px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n\\n  .image_now {\\n    margin-left: 150px;\\n    grid-column-start: 1;\\n    grid-row-start: 1;\\n  }\\n\\n  .side_menu {\\n    display: none;\\n  }\\n\\n  .info_about_time {\\n    display: grid;\\n    grid-template-columns: 150px 30px;\\n    font-size: 16px;\\n    line-height: 18px;\\n  }\\n\\n  .temperature_now {\\n    grid-column-start: 1;\\n    grid-row-start: 1;\\n    display: grid;\\n    grid-template-columns: 170px 30px;\\n  }\\n\\n  header {\\n    grid-template-columns: auto 40px;\\n    padding: 0 4% 0 4%;\\n  }\\n\\n  section {\\n    grid-row-start: 2;\\n    display: grid;\\n    grid-template-rows: 370px 420px;\\n    padding: 0 4% 0 4%;\\n  }\\n\\n  .main_info {\\n    padding-top: 30px;\\n  }\\n\\n  .geolocation {\\n    text-align: center;\\n  }\\n\\n  .buttons_settings {\\n    display: none;\\n  }\\n\\n  .search {\\n    height: 44px;\\n    display: grid;\\n    grid-template-columns: 73.07% 26.93%;\\n  }\\n\\n  .info_about_wheather_now {\\n    height: 230px;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  .number_temperature {\\n    margin-top: 40px;\\n    font-size: 160px;\\n  }\\n\\n  .sign_temterature {\\n    padding-top: 55px;\\n    font-size: 80px;\\n  }\\n\\n  .more_detail_weather {\\n    width: 120px;\\n    grid-column-start: 1;\\n    margin-left: 180px;\\n    grid-row-start: 1;\\n    font-size: 10px;\\n    line-height: 13px;\\n    text-transform: uppercase;\\n    margin-top: 140px;\\n  }\\n\\n  .days_week {\\n    display: flex;\\n    justify-content: space-between;\\n  }\\n\\n  .temperature {\\n    font-size: 30px;\\n    line-height: 30px;\\n    margin-top: auto;\\n  }\\n\\n  .name_day {\\n    font-size: 18px;\\n    line-height: 10px;\\n    margin-bottom: 5px;\\n  }\\n\\n  .image_weather_svg {\\n    width: 60px;\\n    height: auto;\\n  }\\n\\n  .info_weathe_next_days {\\n    display: grid;\\n    grid-template-columns: 1fr 2fr;\\n  }\\n\\n  .button_search {\\n    background: rgba(174, 181, 185, 0.5);\\n    border-radius: 0px 5px 5px 0px;\\n    text-transform: uppercase;\\n  }\\n\\n  .text_settings {\\n    font-size: 14px;\\n    line-height: 17px;\\n    text-align: center;\\n    line-height: 44px;\\n  }\\n\\n  .image_src {\\n    width: 300px;\\n  }\\n\\n  .image_now_svg {\\n    width: 150px;\\n    height: auto;\\n  }\\n\\n  .city {\\n    font-size: 20px;\\n    line-height: 20px;\\n    text-transform: uppercase;\\n    padding-bottom: 5px;\\n  }\\n\\n  .coordination {\\n    padding-top: 12px;\\n    margin-left: auto;\\n    margin-right: auto;\\n    width: 300px;\\n    text-align: right;\\n  }\\n\\n  .side_menu {\\n    width: 35px;\\n    display: block;\\n    margin-top: 2px;\\n    margin-left: auto;\\n    display: inline-block;\\n    cursor: pointer;\\n    right: 0;\\n  }\\n\\n  .bar1, .bar2, .bar3 {\\n    width: 35px;\\n    height: 5px;\\n    background-color: white;\\n    margin: 6px 0;\\n    transition: 0.4s;\\n  }\\n\\n  /* Rotate first bar */\\n  .change .bar1 {\\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\\n    transform: rotate(-45deg) translate(-9px, 6px);\\n  }\\n\\n  /* Fade out the second bar */\\n  .change .bar2 {\\n    opacity: 0;\\n  }\\n\\n  /* Rotate last bar */\\n  .change .bar3 {\\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\\n    transform: rotate(45deg) translate(-8px, -8px);\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconsole.log(\"Trof!!!\")\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\r\n\r\nconsole.log(\"Hello Worrdl\")\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });