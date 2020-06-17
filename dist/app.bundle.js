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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxR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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQTZCO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFrQjs7QUFFbEIsMkI7Ozs7Ozs7Ozs7O0FDRkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxnTkFBcUc7O0FBRXZJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoOCwgMTUsIDI2LCAwLjU5KSAwJSwgcmdiYSgxNywgMTcsIDQ2LCAwLjQ2KSAxMDAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmJ1dHRvbl91cGRhdGVfaW5mbyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMTg0LCAxODcsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wb3AtdXBfbWVudV9sZWFuZ3VhZ2Uge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzQsIDE4MSwgMTg1LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2hhbmdlX21ldHJpY190ZW1wZXJhdHVyZSB7XFxuICB3aWR0aDogODhweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ0cHggNDRweDtcXG59XFxuXFxuLmJ1dHRvbl9mYWhyZW5oZWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNzYsIDgyLCA4NSwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXG59XFxuXFxuLnN2Z191cGRhdGUge1xcbiAgcGFkZGluZzogMTJweCAwIDAgMTRweDtcXG59XFxuXFxuLmJ1dHRvbl9jZWxzaXVzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTc0LCAxODEsIDE4NSwgMC41KTtcXG59XFxuXFxuLnRleHRfZmllbGRfc2VhcmNoIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJjcHNwXFxcIiBvbjtcXG59XFxuXFxuLmJ1dHRvbl9zZWFyY2gge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzQsIDE4MSwgMTg1LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnRleHRfc2V0dGluZ3Mge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNDRweDtcXG59XFxuXFxuLnN2Z19taWNyb3Bob25lIHtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi50ZW1wZXJhdHVyZV9ub3cge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzMHB4IDUwcHg7XFxufVxcblxcbi5pbWFnZV9zcmMge1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDk0JSwgMTAwJSA5NCUsIDEwMCUgMTAwJSwgOTIlIDk0JSwgMCA5NCUpO1xcbn1cXG5cXG4uZmllbGRfc2VhcmNoIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNzYsIDgyLCA4NSwgMC40KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI4LCAyMjcsIDIyNywgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQwcHg7XFxufVxcblxcbi5sYXRpdHVkZSB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyMHB4KSB7XFxuICAvKiBGb3IgUEM6ICovXFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NHB4IDFmcjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICB9XFxuXFxuICAuY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogNDRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICB9XFxuXFxuICAuaW1hZ2Vfbm93IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwNXB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICB9XFxuXFxuICAuaW5mb19hYm91dF90aW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ3LjM4MSUgMjkuNzYyJTtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMi44NTclO1xcbiAgICBwYWRkaW5nOiAwIDYuMjUlIDAgNi4yNSU7XFxuICB9XFxuXFxuICBzZWN0aW9uIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDcuMzgxJSAyOS43NjIlO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIyLjg1NyU7XFxuICAgIHBhZGRpbmc6IDAgNi4yNSUgMCA2LjI1JTtcXG4gIH1cXG5cXG4gIC5tYWluX2luZm8ge1xcbiAgICBwYWRkaW5nLXRvcDogNTdweDtcXG4gIH1cXG5cXG4gIC5nZW9sb2NhdGlvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxNzBweDtcXG4gIH1cXG5cXG4gIC5idXR0b25zX3NldHRpbmdzIHtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbiAgICB3aWR0aDogMjIycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDRweCA3MXB4IDg4cHg7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gge1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzMuMDclIDI2LjkzJTtcXG4gIH1cXG5cXG4gIC5pbmZvX2Fib3V0X3doZWF0aGVyX25vdyB7XFxuICAgIGhlaWdodDogMzY4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5udW1iZXJfdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDMwNnB4O1xcbiAgfVxcblxcbiAgLnNpZ25fdGVtdGVyYXR1cmUge1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5tb3JlX2RldGFpbF93ZWF0aGVyIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMzdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luLXRvcDogMTU1cHg7XFxuICB9XFxuXFxuICAuZGF5c193ZWVrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC50ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDk4cHg7XFxuICB9XFxuXFxuICAubmFtZV9kYXkge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICB9XFxuXFxuICAuaW1hZ2Vfd2VhdGhlciB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAuaW5mb193ZWF0aGVfbmV4dF9kYXlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLmJ1dHRvbl9zZWFyY2gge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3NCwgMTgxLCAxODUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIH1cXG5cXG4gIC50ZXh0X3NldHRpbmdzIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNDRweDtcXG4gIH1cXG5cXG4gIC5pbWFnZV9zcmMge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29vcmRpbmF0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjBweCkge1xcbiAgLyogRm9yIFRhYmxldHM6ICovXFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NHB4IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmNpdHkge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLmluZm9fYWJvdXRfdGltZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjlweDtcXG4gIH1cXG5cXG4gIC50ZW1wZXJhdHVyZV9ub3cge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzEwcHggNTBweDtcXG4gIH1cXG5cXG4gIC5pbWFnZV9ub3cge1xcbiAgICBtYXJnaW4tbGVmdDogMzA1cHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIzcHggYXV0bztcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDYuMjUlIDAgNi4yNSU7XFxuICB9XFxuXFxuICBzZWN0aW9uIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgcGFkZGluZzogMCA2LjI1JSAwIDYuMjUlO1xcbiAgfVxcblxcbiAgLm1haW5faW5mbyB7XFxuICAgIHBhZGRpbmctdG9wOiA1N3B4O1xcbiAgfVxcblxcbiAgLmdlb2xvY2F0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIH1cXG5cXG4gIC5idXR0b25zX3NldHRpbmdzIHtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbiAgICB3aWR0aDogMjIycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDRweCA3MXB4IDg4cHg7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gge1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzMuMDclIDI2LjkzJTtcXG4gIH1cXG5cXG4gIC5pbmZvX2Fib3V0X3doZWF0aGVyX25vdyB7XFxuICAgIGhlaWdodDogMzY4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5udW1iZXJfdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDI4MHB4O1xcbiAgfVxcblxcbiAgLnNpZ25fdGVtdGVyYXR1cmUge1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5tb3JlX2RldGFpbF93ZWF0aGVyIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwNXB4O1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMzdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luLXRvcDogMTU1cHg7XFxuICB9XFxuXFxuICAuZGF5c193ZWVrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLnRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogOThweDtcXG4gIH1cXG5cXG4gIC5uYW1lX2RheSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gIC5pbWFnZV93ZWF0aGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC5pbmZvX3dlYXRoZV9uZXh0X2RheXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAuYnV0dG9uX3NlYXJjaCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTc0LCAxODEsIDE4NSwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgfVxcblxcbiAgLnRleHRfc2V0dGluZ3Mge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgfVxcblxcbiAgLmltYWdlX3NyYyB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gIH1cXG5cXG4gIC5jb29yZGluYXRpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIH1cXG5cXG4gIC5zaWRlX21lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAvKiBGb3IgUGhvbmU6ICovXFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NHB4IDFmcjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuaW1hZ2Vfbm93IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICB9XFxuXFxuICAuc2lkZV9tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5pbmZvX2Fib3V0X3RpbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICB9XFxuXFxuICAudGVtcGVyYXR1cmVfbm93IHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3MHB4IDMwcHg7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNDBweDtcXG4gICAgcGFkZGluZzogMCA0JSAwIDQlO1xcbiAgfVxcblxcbiAgc2VjdGlvbiB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM3MHB4IDQyMHB4O1xcbiAgICBwYWRkaW5nOiAwIDQlIDAgNCU7XFxuICB9XFxuXFxuICAubWFpbl9pbmZvIHtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICB9XFxuXFxuICAuZ2VvbG9jYXRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYnV0dG9uc19zZXR0aW5ncyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2VhcmNoIHtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDczLjA3JSAyNi45MyU7XFxuICB9XFxuXFxuICAuaW5mb19hYm91dF93aGVhdGhlcl9ub3cge1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAubnVtYmVyX3RlbXBlcmF0dXJlIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5zaWduX3RlbXRlcmF0dXJlIHtcXG4gICAgcGFkZGluZy10b3A6IDU1cHg7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gIH1cXG5cXG4gIC5tb3JlX2RldGFpbF93ZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTNweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luLXRvcDogMTQwcHg7XFxuICB9XFxuXFxuICAuZGF5c193ZWVrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLnRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gIH1cXG5cXG4gIC5uYW1lX2RheSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gIC5pbWFnZV93ZWF0aGVyX3N2ZyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuaW5mb193ZWF0aGVfbmV4dF9kYXlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgfVxcblxcbiAgLmJ1dHRvbl9zZWFyY2gge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3NCwgMTgxLCAxODUsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIH1cXG5cXG4gIC50ZXh0X3NldHRpbmdzIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNDRweDtcXG4gIH1cXG5cXG4gIC5pbWFnZV9zcmMge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAuaW1hZ2Vfbm93X3N2ZyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmNpdHkge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLmNvb3JkaW5hdGlvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgfVxcblxcbiAgLnNpZGVfbWVudSB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNnB4IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICB9XFxuXFxuICAvKiBSb3RhdGUgZmlyc3QgYmFyICovXFxuICAuY2hhbmdlIC5iYXIxIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbiAgfVxcblxcbiAgLyogRmFkZSBvdXQgdGhlIHNlY29uZCBiYXIgKi9cXG4gIC5jaGFuZ2UgLmJhcjIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgLyogUm90YXRlIGxhc3QgYmFyICovXFxuICAuY2hhbmdlIC5iYXIzIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcclxuY29uc29sZS5sb2coXCJUcm9mISEhXCIpXHJcbiIsImltcG9ydCAnLi9hcHAuanMnO1xyXG5cclxuY29uc29sZS5sb2coXCJIZWxsbyBXb3JyZGxcIikiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=