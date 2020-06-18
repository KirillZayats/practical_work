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

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n  outline: none;\n}\n\nbody {\n  background: linear-gradient(180deg, rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%);\n  background-size: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  color: white;\n  display: grid;\n}\n\nheader {\n  height: 44px;\n  grid-row: 1;\n}\n\n.button_update_info {\n  background: rgba(180, 184, 187, 0.4);\n  border-radius: 5px;\n}\n\n.pop-up_menu_leanguage {\n  background: rgba(174, 181, 185, 0.5);\n  border-radius: 5px;\n}\n\n.change_metric_temperature {\n  width: 88px;\n  display: grid;\n  grid-template-columns: 44px 44px;\n}\n\n.button_fahrenheit {\n  background: rgba(76, 82, 85, 0.4);\n  border-radius: 5px 0px 0px 5px;\n}\n\n.svg_update {\n  padding: 12px 0 0 14px;\n}\n\n.button_celsius {\n  border-radius: 0px 5px 5px 0px;\n  background: rgba(174, 181, 185, 0.5);\n}\n\n.text_field_search {\n  width: auto;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  display: flex;\n  margin-left: 15px;\n  font-feature-settings: \"cpsp\" on;\n}\n\n.button_search {\n  background: rgba(174, 181, 185, 0.5);\n  border-radius: 0px 5px 5px 0px;\n  text-transform: uppercase;\n}\n\n.text_settings {\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  line-height: 44px;\n}\n\n.svg_microphone {\n  padding-top: 4px;\n  height: 40px;\n}\n\n.temperature_now {\n  grid-column-start: 1;\n  grid-row-start: 1;\n  display: grid;\n  grid-template-columns: 330px 50px;\n}\n\n.image_src {\n  clip-path: polygon(0% 0%, 100% 0%, 100% 94%, 100% 94%, 100% 100%, 92% 94%, 0 94%);\n}\n\n.field_search {\n  background: rgba(76, 82, 85, 0.4);\n  border: 1px solid rgba(228, 227, 227, 0.2);\n  border-radius: 5px 0px 0px 5px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: auto 40px;\n}\n\n.latitude {\n  margin-bottom: 6px;\n}\n\n@media only screen and (min-width: 1020px) {\n  /* For PC: */\n  body {\n    display: grid;\n    grid-template-rows: 44px 1fr;\n    padding-top: 40px;\n  }\n\n  .city {\n    font-size: 44px;\n    line-height: 54px;\n    text-transform: uppercase;\n    padding-bottom: 5px;\n  }\n\n  .image_now {\n    margin-left: 305px;\n    grid-column-start: 1;\n    grid-row-start: 1;\n  }\n\n  .info_about_time {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 10px;\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 29px;\n  }\n\n  header {\n    display: grid;\n    grid-template-columns: 47.381% 29.762%;\n    grid-column-gap: 22.857%;\n    padding: 0 6.25% 0 6.25%;\n  }\n\n  section {\n    grid-row-start: 2;\n    display: grid;\n    grid-template-columns: 47.381% 29.762%;\n    grid-column-gap: 22.857%;\n    padding: 0 6.25% 0 6.25%;\n  }\n\n  .main_info {\n    padding-top: 57px;\n  }\n\n  .geolocation {\n    padding-top: 170px;\n  }\n\n  .buttons_settings {\n    height: 44px;\n    width: 222px;\n    display: grid;\n    grid-template-columns: 44px 71px 88px;\n    grid-column-gap: 10px;\n  }\n\n  .search {\n    height: 44px;\n    display: grid;\n    grid-template-columns: 73.07% 26.93%;\n  }\n\n  .info_about_wheather_now {\n    height: 368px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .number_temperature {\n    font-size: 306px;\n  }\n\n  .sign_temterature {\n    padding-top: 50px;\n    font-size: 100px;\n  }\n\n  .more_detail_weather {\n    width: 200px;\n    grid-column-start: 1;\n    margin-left: 400px;\n    grid-row-start: 1;\n    font-size: 22px;\n    line-height: 37px;\n    text-transform: uppercase;\n    margin-top: 155px;\n  }\n\n  .days_week {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  .temperature {\n    font-weight: 600;\n    font-size: 80px;\n    line-height: 98px;\n  }\n\n  .name_day {\n    font-size: 22px;\n    line-height: 27px;\n    margin-bottom: 5px;\n  }\n\n  .image_weather {\n    margin-top: 10px;\n  }\n\n  .info_weathe_next_days {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .button_search {\n    background: rgba(174, 181, 185, 0.5);\n    border-radius: 0px 5px 5px 0px;\n    text-transform: uppercase;\n  }\n\n  .text_settings {\n    font-size: 14px;\n    line-height: 17px;\n    text-align: center;\n    line-height: 44px;\n  }\n\n  .image_src {\n    max-width: 100%;\n  }\n\n  .map {\n    width: 100%;\n  }\n\n  .coordination {\n    padding-top: 10px;\n    text-align: right;\n  }\n}\n@media only screen and (max-width: 1020px) {\n  /* For Tablets: */\n  body {\n    display: grid;\n    grid-template-rows: 44px auto;\n    padding-top: 40px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .city {\n    font-size: 40px;\n    line-height: 50px;\n    text-transform: uppercase;\n    padding-bottom: 5px;\n  }\n\n  .info_about_time {\n    display: grid;\n    grid-template-columns: 300px 50px;\n    font-size: 24px;\n    line-height: 29px;\n  }\n\n  .temperature_now {\n    grid-column-start: 1;\n    grid-row-start: 1;\n    display: grid;\n    grid-template-columns: 310px 50px;\n  }\n\n  .image_now {\n    margin-left: 305px;\n    grid-column-start: 1;\n    grid-row-start: 1;\n  }\n\n  header {\n    display: grid;\n    grid-template-columns: 223px auto;\n    grid-column-gap: 10px;\n    padding: 0 6.25% 0 6.25%;\n  }\n\n  section {\n    grid-row-start: 2;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    padding: 0 6.25% 0 6.25%;\n  }\n\n  .main_info {\n    padding-top: 57px;\n  }\n\n  .geolocation {\n    text-align: center;\n    padding-top: 30px;\n  }\n\n  .buttons_settings {\n    height: 44px;\n    width: 222px;\n    display: grid;\n    grid-template-columns: 44px 71px 88px;\n    grid-column-gap: 10px;\n  }\n\n  .search {\n    height: 44px;\n    display: grid;\n    grid-template-columns: 73.07% 26.93%;\n  }\n\n  .info_about_wheather_now {\n    height: 368px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .number_temperature {\n    font-size: 280px;\n  }\n\n  .sign_temterature {\n    padding-top: 50px;\n    font-size: 100px;\n  }\n\n  .more_detail_weather {\n    width: 200px;\n    grid-column-start: 1;\n    margin-left: 305px;\n    grid-row-start: 1;\n    font-size: 22px;\n    line-height: 37px;\n    text-transform: uppercase;\n    margin-top: 155px;\n  }\n\n  .days_week {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .temperature {\n    font-weight: 600;\n    font-size: 80px;\n    line-height: 98px;\n  }\n\n  .name_day {\n    font-size: 22px;\n    line-height: 27px;\n    margin-bottom: 5px;\n  }\n\n  .image_weather {\n    margin-top: 10px;\n  }\n\n  .info_weathe_next_days {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .button_search {\n    background: rgba(174, 181, 185, 0.5);\n    border-radius: 0px 5px 5px 0px;\n    text-transform: uppercase;\n  }\n\n  .text_settings {\n    font-size: 14px;\n    line-height: 17px;\n    text-align: center;\n    line-height: 44px;\n  }\n\n  .image_src {\n    width: 500px;\n  }\n\n  .coordination {\n    padding-top: 12px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 500px;\n    text-align: right;\n  }\n\n  .side_menu {\n    display: none;\n  }\n}\n@media only screen and (max-width: 600px) {\n  /* For Phone: */\n  body {\n    display: grid;\n    grid-template-rows: 44px 1fr;\n    padding-top: 40px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .image_now {\n    margin-left: 150px;\n    grid-column-start: 1;\n    grid-row-start: 1;\n  }\n\n  .side_menu {\n    display: none;\n  }\n\n  .info_about_time {\n    display: grid;\n    grid-template-columns: 150px 30px;\n    font-size: 16px;\n    line-height: 18px;\n  }\n\n  .temperature_now {\n    grid-column-start: 1;\n    grid-row-start: 1;\n    display: grid;\n    grid-template-columns: 170px 30px;\n  }\n\n  header {\n    grid-template-columns: auto 40px;\n    padding: 0 4% 0 4%;\n  }\n\n  section {\n    grid-row-start: 2;\n    display: grid;\n    grid-template-rows: 370px 420px;\n    padding: 0 4% 0 4%;\n  }\n\n  .main_info {\n    padding-top: 30px;\n  }\n\n  .geolocation {\n    text-align: center;\n  }\n\n  .buttons_settings {\n    display: none;\n  }\n\n  .search {\n    height: 44px;\n    display: grid;\n    grid-template-columns: 73.07% 26.93%;\n  }\n\n  .info_about_wheather_now {\n    height: 230px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .number_temperature {\n    margin-top: 40px;\n    font-size: 160px;\n  }\n\n  .sign_temterature {\n    padding-top: 55px;\n    font-size: 80px;\n  }\n\n  .more_detail_weather {\n    width: 120px;\n    grid-column-start: 1;\n    margin-left: 180px;\n    grid-row-start: 1;\n    font-size: 10px;\n    line-height: 13px;\n    text-transform: uppercase;\n    margin-top: 140px;\n  }\n\n  .days_week {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .temperature {\n    font-size: 30px;\n    line-height: 30px;\n    margin-top: auto;\n  }\n\n  .name_day {\n    font-size: 18px;\n    line-height: 10px;\n    margin-bottom: 5px;\n  }\n\n  .image_weather_svg {\n    width: 60px;\n    height: auto;\n  }\n\n  .info_weathe_next_days {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n  }\n\n  .button_search {\n    background: rgba(174, 181, 185, 0.5);\n    border-radius: 0px 5px 5px 0px;\n    text-transform: uppercase;\n  }\n\n  .text_settings {\n    font-size: 14px;\n    line-height: 17px;\n    text-align: center;\n    line-height: 44px;\n  }\n\n  .image_src {\n    width: 300px;\n  }\n\n  .image_now_svg {\n    width: 150px;\n    height: auto;\n  }\n\n  .city {\n    font-size: 20px;\n    line-height: 20px;\n    text-transform: uppercase;\n    padding-bottom: 5px;\n  }\n\n  .coordination {\n    padding-top: 12px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 300px;\n    text-align: right;\n  }\n\n  .side_menu {\n    width: 35px;\n    display: block;\n    margin-top: 2px;\n    margin-left: auto;\n    display: inline-block;\n    cursor: pointer;\n    right: 0;\n  }\n\n  .bar1, .bar2, .bar3 {\n    width: 35px;\n    height: 5px;\n    background-color: white;\n    margin: 6px 0;\n    transition: 0.4s;\n  }\n\n  /* Rotate first bar */\n  .change .bar1 {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n    transform: rotate(-45deg) translate(-9px, 6px);\n  }\n\n  /* Fade out the second bar */\n  .change .bar2 {\n    opacity: 0;\n  }\n\n  /* Rotate last bar */\n  .change .bar3 {\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n    transform: rotate(45deg) translate(-8px, -8px);\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);

console.log("Trof!!!")


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");

console.log("Hello Worrdl")

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxR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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQTZCO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFrQjtBQUNsQiwyQjs7Ozs7Ozs7Ozs7QUNEQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGdOQUFxRzs7QUFFdkk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg4LCAxNSwgMjYsIDAuNTkpIDAlLCByZ2JhKDE3LCAxNywgNDYsIDAuNDYpIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogNDRweDtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4uYnV0dG9uX3VwZGF0ZV9pbmZvIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODQsIDE4NywgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnBvcC11cF9tZW51X2xlYW5ndWFnZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NCwgMTgxLCAxODUsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jaGFuZ2VfbWV0cmljX3RlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiA4OHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDRweCA0NHB4O1xcbn1cXG5cXG4uYnV0dG9uX2ZhaHJlbmhlaXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSg3NiwgODIsIDg1LCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xcbn1cXG5cXG4uc3ZnX3VwZGF0ZSB7XFxuICBwYWRkaW5nOiAxMnB4IDAgMCAxNHB4O1xcbn1cXG5cXG4uYnV0dG9uX2NlbHNpdXMge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzQsIDE4MSwgMTg1LCAwLjUpO1xcbn1cXG5cXG4udGV4dF9maWVsZF9zZWFyY2gge1xcbiAgd2lkdGg6IGF1dG87XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXFxcImNwc3BcXFwiIG9uO1xcbn1cXG5cXG4uYnV0dG9uX3NlYXJjaCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NCwgMTgxLCAxODUsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4udGV4dF9zZXR0aW5ncyB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMTdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbn1cXG5cXG4uc3ZnX21pY3JvcGhvbmUge1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlX25vdyB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMwcHggNTBweDtcXG59XFxuXFxuLmltYWdlX3NyYyB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgOTQlLCAxMDAlIDk0JSwgMTAwJSAxMDAlLCA5MiUgOTQlLCAwIDk0JSk7XFxufVxcblxcbi5maWVsZF9zZWFyY2gge1xcbiAgYmFja2dyb3VuZDogcmdiYSg3NiwgODIsIDg1LCAwLjQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjgsIDIyNywgMjI3LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNDBweDtcXG59XFxuXFxuLmxhdGl0dWRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDIwcHgpIHtcXG4gIC8qIEZvciBQQzogKi9cXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ0cHggMWZyO1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gIH1cXG5cXG4gIC5jaXR5IHtcXG4gICAgZm9udC1zaXplOiA0NHB4O1xcbiAgICBsaW5lLWhlaWdodDogNTRweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gIC5pbWFnZV9ub3cge1xcbiAgICBtYXJnaW4tbGVmdDogMzA1cHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gIH1cXG5cXG4gIC5pbmZvX2Fib3V0X3RpbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjlweDtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDcuMzgxJSAyOS43NjIlO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIyLjg1NyU7XFxuICAgIHBhZGRpbmc6IDAgNi4yNSUgMCA2LjI1JTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0Ny4zODElIDI5Ljc2MiU7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMjIuODU3JTtcXG4gICAgcGFkZGluZzogMCA2LjI1JSAwIDYuMjUlO1xcbiAgfVxcblxcbiAgLm1haW5faW5mbyB7XFxuICAgIHBhZGRpbmctdG9wOiA1N3B4O1xcbiAgfVxcblxcbiAgLmdlb2xvY2F0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDE3MHB4O1xcbiAgfVxcblxcbiAgLmJ1dHRvbnNfc2V0dGluZ3Mge1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIHdpZHRoOiAyMjJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NHB4IDcxcHggODhweDtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgLnNlYXJjaCB7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3My4wNyUgMjYuOTMlO1xcbiAgfVxcblxcbiAgLmluZm9fYWJvdXRfd2hlYXRoZXJfbm93IHtcXG4gICAgaGVpZ2h0OiAzNjhweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLm51bWJlcl90ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMzA2cHg7XFxuICB9XFxuXFxuICAuc2lnbl90ZW10ZXJhdHVyZSB7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgfVxcblxcbiAgLm1vcmVfZGV0YWlsX3dlYXRoZXIge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tdG9wOiAxNTVweDtcXG4gIH1cXG5cXG4gIC5kYXlzX3dlZWsge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLnRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogOThweDtcXG4gIH1cXG5cXG4gIC5uYW1lX2RheSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gIC5pbWFnZV93ZWF0aGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC5pbmZvX3dlYXRoZV9uZXh0X2RheXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAuYnV0dG9uX3NlYXJjaCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTc0LCAxODEsIDE4NSwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgfVxcblxcbiAgLnRleHRfc2V0dGluZ3Mge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgfVxcblxcbiAgLmltYWdlX3NyYyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5tYXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb29yZGluYXRpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XFxuICAvKiBGb3IgVGFibGV0czogKi9cXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ0cHggYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICB9XFxuXFxuICAuaW5mb19hYm91dF90aW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCA1MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xcbiAgfVxcblxcbiAgLnRlbXBlcmF0dXJlX25vdyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMTBweCA1MHB4O1xcbiAgfVxcblxcbiAgLmltYWdlX25vdyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDVweDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjNweCBhdXRvO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgNi4yNSUgMCA2LjI1JTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBwYWRkaW5nOiAwIDYuMjUlIDAgNi4yNSU7XFxuICB9XFxuXFxuICAubWFpbl9pbmZvIHtcXG4gICAgcGFkZGluZy10b3A6IDU3cHg7XFxuICB9XFxuXFxuICAuZ2VvbG9jYXRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgfVxcblxcbiAgLmJ1dHRvbnNfc2V0dGluZ3Mge1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIHdpZHRoOiAyMjJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NHB4IDcxcHggODhweDtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgLnNlYXJjaCB7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3My4wNyUgMjYuOTMlO1xcbiAgfVxcblxcbiAgLmluZm9fYWJvdXRfd2hlYXRoZXJfbm93IHtcXG4gICAgaGVpZ2h0OiAzNjhweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLm51bWJlcl90ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMjgwcHg7XFxuICB9XFxuXFxuICAuc2lnbl90ZW10ZXJhdHVyZSB7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgfVxcblxcbiAgLm1vcmVfZGV0YWlsX3dlYXRoZXIge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBtYXJnaW4tbGVmdDogMzA1cHg7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tdG9wOiAxNTVweDtcXG4gIH1cXG5cXG4gIC5kYXlzX3dlZWsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAudGVtcGVyYXR1cmUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA5OHB4O1xcbiAgfVxcblxcbiAgLm5hbWVfZGF5IHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLmltYWdlX3dlYXRoZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcblxcbiAgLmluZm9fd2VhdGhlX25leHRfZGF5cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5idXR0b25fc2VhcmNoIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNzQsIDE4MSwgMTg1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB9XFxuXFxuICAudGV4dF9zZXR0aW5ncyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxuICB9XFxuXFxuICAuaW1hZ2Vfc3JjIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgfVxcblxcbiAgLmNvb3JkaW5hdGlvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgfVxcblxcbiAgLnNpZGVfbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC8qIEZvciBQaG9uZTogKi9cXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ0cHggMWZyO1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5pbWFnZV9ub3cge1xcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gIH1cXG5cXG4gIC5zaWRlX21lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmluZm9fYWJvdXRfdGltZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMzBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG4gIH1cXG5cXG4gIC50ZW1wZXJhdHVyZV9ub3cge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTcwcHggMzBweDtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA0MHB4O1xcbiAgICBwYWRkaW5nOiAwIDQlIDAgNCU7XFxuICB9XFxuXFxuICBzZWN0aW9uIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzcwcHggNDIwcHg7XFxuICAgIHBhZGRpbmc6IDAgNCUgMCA0JTtcXG4gIH1cXG5cXG4gIC5tYWluX2luZm8ge1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIH1cXG5cXG4gIC5nZW9sb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5idXR0b25zX3NldHRpbmdzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gge1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzMuMDclIDI2LjkzJTtcXG4gIH1cXG5cXG4gIC5pbmZvX2Fib3V0X3doZWF0aGVyX25vdyB7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5udW1iZXJfdGVtcGVyYXR1cmUge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE2MHB4O1xcbiAgfVxcblxcbiAgLnNpZ25fdGVtdGVyYXR1cmUge1xcbiAgICBwYWRkaW5nLXRvcDogNTVweDtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgfVxcblxcbiAgLm1vcmVfZGV0YWlsX3dlYXRoZXIge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcXG4gIH1cXG5cXG4gIC5kYXlzX3dlZWsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAudGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgfVxcblxcbiAgLm5hbWVfZGF5IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLmltYWdlX3dlYXRoZXJfc3ZnIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5pbmZvX3dlYXRoZV9uZXh0X2RheXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICB9XFxuXFxuICAuYnV0dG9uX3NlYXJjaCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTc0LCAxODEsIDE4NSwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgfVxcblxcbiAgLnRleHRfc2V0dGluZ3Mge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgfVxcblxcbiAgLmltYWdlX3NyYyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5pbWFnZV9ub3dfc3ZnIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICB9XFxuXFxuICAuY29vcmRpbmF0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB9XFxuXFxuICAuc2lkZV9tZW51IHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA2cHggMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG4gIH1cXG5cXG4gIC8qIFJvdGF0ZSBmaXJzdCBiYXIgKi9cXG4gIC5jaGFuZ2UgLmJhcjEge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XFxuICB9XFxuXFxuICAvKiBGYWRlIG91dCB0aGUgc2Vjb25kIGJhciAqL1xcbiAgLmNoYW5nZSAuYmFyMiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAvKiBSb3RhdGUgbGFzdCBiYXIgKi9cXG4gIC5jaGFuZ2UgLmJhcjMge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xyXG5jb25zb2xlLmxvZyhcIlRyb2YhISFcIilcclxuIiwiaW1wb3J0ICcuL2FwcC5qcyc7XHJcbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ycmRsXCIpIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9