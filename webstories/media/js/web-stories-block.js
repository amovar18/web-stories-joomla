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
/******/ 	__webpack_require__.p = "../media/com_webstories/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gtag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */

/**
 * Pushes data onto the data layer.
 *
 * Must push an instance of Arguments to the target.
 * Using an ES6 spread operator (i.e. `...args`) will cause tracking events to _silently_ fail.
 */

function gtag() {
  global[_constants__WEBPACK_IMPORTED_MODULE_0__[/* DATA_LAYER */ "a"]] = global[_constants__WEBPACK_IMPORTED_MODULE_0__[/* DATA_LAYER */ "a"]] || []; //eslint-disable-next-line prefer-rest-params

  global[_constants__WEBPACK_IMPORTED_MODULE_0__[/* DATA_LAYER */ "a"]].push(arguments);
}
const DEFAULT_CONFIG = {
  trackingAllowed: false,
  trackingEnabled: false,
  trackingId: '',
  trackingIdGA4: '',
  userProperties: {}
};
const {
  trackingAllowed,
  trackingId,
  trackingIdGA4,
  appVersion,
  userProperties
} = global.webStoriesTrackingSettings || {};
const config = { ...DEFAULT_CONFIG,
  trackingAllowed,
  trackingId,
  trackingIdGA4,
  appVersion,
  userProperties
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(33)();
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ LATEST_STORIES_BLOCK_ICON; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ SELECTED_STORIES_BLOCK_ICON; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ EMBED_STORY_BLOCK_ICON; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ CAROUSEL_VIEW_TYPE_ICON; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ CIRCLES_VIEW_TYPE_ICON; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ GRID_VIEW_TYPE_ICON; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ LIST_VIEW_TYPE_ICON; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BOX_CAROUSEL_CONFIG_ICON; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ LIST_VIEW_CONFIG_ICON; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ CIRCLE_CAROUSEL_CONFIG_ICON; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ GRID_VIEW_CONFIG_ICON; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ BlockIcon; });

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(12);

// CONCATENATED MODULE: ./packages/stories-block/src/block/images/view-type/circles-carousel-view.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/external_React_["createElement"]("circle", {
  r: 3,
  transform: "matrix(1 0 0 -1 20 9)"
});

var _ref2 = /*#__PURE__*/external_React_["createElement"]("circle", {
  r: 3,
  transform: "matrix(1 0 0 -1 3 9)"
});

var _ref3 = /*#__PURE__*/external_React_["createElement"]("circle", {
  r: 7.1,
  transform: "matrix(1 0 0 -1 12 9)",
  stroke: "#fff",
  strokeWidth: 2.2
});

function SvgCirclesCarouselView({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", _extends({
    viewBox: "0 0 23 18",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, _ref, _ref2, _ref3);
}

const MemoSvgCirclesCarouselView = /*#__PURE__*/external_React_["memo"](SvgCirclesCarouselView);
/* harmony default export */ var circles_carousel_view = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMyAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIHI9IjMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDIwIDkpIiAvPjxjaXJjbGUgcj0iMyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMyA5KSIgLz48Y2lyY2xlIHI9IjcuMSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTIgOSkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi4yIi8+PC9zdmc+Cg==");

// CONCATENATED MODULE: ./packages/stories-block/src/block/images/config-panel/circles-carousel-view-panel-icon.svg
function circles_carousel_view_panel_icon_extends() { circles_carousel_view_panel_icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return circles_carousel_view_panel_icon_extends.apply(this, arguments); }



var circles_carousel_view_panel_icon_ref = /*#__PURE__*/external_React_["createElement"]("circle", {
  cx: 21,
  cy: 12,
  r: 11,
  fill: "#fff",
  stroke: "#347BB5",
  strokeWidth: 2
});

var circles_carousel_view_panel_icon_ref2 = /*#__PURE__*/external_React_["createElement"]("mask", {
  id: "circles-carousel-view-panel-icon_svg__a",
  fill: "#fff"
}, /*#__PURE__*/external_React_["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M34.803 17.88A14.952 14.952 0 0036 12c0-2.087-.426-4.075-1.197-5.88a6 6 0 110 11.761z"
}));

var circles_carousel_view_panel_icon_ref3 = /*#__PURE__*/external_React_["createElement"]("path", {
  d: "M34.803 17.88l-1.84-.784-.962 2.258 2.406.487.396-1.96zm0-11.76l-.396-1.96L32 4.645l.963 2.258 1.84-.785zM34 12c0 1.813-.37 3.534-1.036 5.096l3.679 1.57A16.952 16.952 0 0038 12h-4zm-1.036-5.096A12.952 12.952 0 0134 12h4c0-2.362-.483-4.616-1.357-6.665l-3.68 1.57zM35.2 8.08c.257-.052.524-.08.8-.08V4c-.544 0-1.077.055-1.593.16l.793 3.92zM36 8a4 4 0 014 4h4a8 8 0 00-8-8v4zm4 4a4 4 0 01-4 4v4a8 8 0 008-8h-4zm-4 4c-.276 0-.543-.028-.8-.08l-.793 3.92c.516.105 1.05.16 1.593.16v-4z",
  fill: "#347BB5",
  mask: "url(#circles-carousel-view-panel-icon_svg__a)"
});

var _ref4 = /*#__PURE__*/external_React_["createElement"]("mask", {
  id: "circles-carousel-view-panel-icon_svg__b",
  fill: "#fff"
}, /*#__PURE__*/external_React_["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.197 6.12a6 6 0 100 11.761A14.952 14.952 0 016 12c0-2.087.426-4.075 1.197-5.88z"
}));

var _ref5 = /*#__PURE__*/external_React_["createElement"]("path", {
  d: "M7.197 6.12l1.84.784.962-2.258-2.406-.487-.396 1.96zm0 11.76l.396 1.96L10 19.355l-.963-2.258-1.84.785zM6 8c.276 0 .543.028.8.08l.793-3.92A8.028 8.028 0 006 4v4zm-4 4a4 4 0 014-4V4a8 8 0 00-8 8h4zm4 4a4 4 0 01-4-4h-4a8 8 0 008 8v-4zm.8-.08c-.257.052-.524.08-.8.08v4c.544 0 1.077-.055 1.593-.16L6.8 15.92zm2.236 1.176A12.952 12.952 0 018 12H4c0 2.362.483 4.616 1.357 6.665l3.68-1.57zM8 12c0-1.813.37-3.534 1.036-5.096l-3.679-1.57A16.952 16.952 0 004 12h4z",
  fill: "#347BB5",
  mask: "url(#circles-carousel-view-panel-icon_svg__b)"
});

function SvgCirclesCarouselViewPanelIcon({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", circles_carousel_view_panel_icon_extends({
    viewBox: "0 0 42 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, circles_carousel_view_panel_icon_ref, circles_carousel_view_panel_icon_ref2, circles_carousel_view_panel_icon_ref3, _ref4, _ref5);
}

const MemoSvgCirclesCarouselViewPanelIcon = /*#__PURE__*/external_React_["memo"](SvgCirclesCarouselViewPanelIcon);
/* harmony default export */ var circles_carousel_view_panel_icon = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMSIgY3k9IjEyIiByPSIxMSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzM0N0JCNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PG1hc2sgaWQ9InBhdGgtMi1pbnNpZGUtMSIgZmlsbD0id2hpdGUiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzQuODAzMyAxNy44ODA3QzM1LjU3MzYgMTYuMDc0OSAzNiAxNC4wODcyIDM2IDEyQzM2IDkuOTEyNzcgMzUuNTczNiA3LjkyNTEgMzQuODAzMyA2LjExOTMzQzM1LjE5IDYuMDQxMDggMzUuNTkwMiA2IDM2IDZDMzkuMzEzNyA2IDQyIDguNjg2MjkgNDIgMTJDNDIgMTUuMzEzNyAzOS4zMTM3IDE4IDM2IDE4QzM1LjU5MDIgMTggMzUuMTkgMTcuOTU4OSAzNC44MDMzIDE3Ljg4MDdaIi8+PC9tYXNrPjxwYXRoIGQ9Ik0zNC44MDMzIDE3Ljg4MDdMMzIuOTYzNyAxNy4wOTU5TDMyLjAwMDUgMTkuMzU0TDM0LjQwNjYgMTkuODQwOUwzNC44MDMzIDE3Ljg4MDdaTTM0LjgwMzMgNi4xMTkzM0wzNC40MDY2IDQuMTU5MDhMMzIuMDAwNSA0LjY0NjA0TDMyLjk2MzcgNi45MDQwN0wzNC44MDMzIDYuMTE5MzNaTTM0IDEyQzM0IDEzLjgxMjYgMzMuNjMwMSAxNS41MzM3IDMyLjk2MzcgMTcuMDk1OUwzNi42NDMgMTguNjY1NEMzNy41MTcyIDE2LjYxNjEgMzggMTQuMzYxOCAzOCAxMkgzNFpNMzIuOTYzNyA2LjkwNDA3QzMzLjYzMDEgOC40NjYyOSAzNCAxMC4xODc0IDM0IDEySDM4QzM4IDkuNjM4MTYgMzcuNTE3MiA3LjM4MzkyIDM2LjY0MyA1LjMzNDZMMzIuOTYzNyA2LjkwNDA3Wk0zNS4yMDAxIDguMDc5NTlDMzUuNDU2OSA4LjAyNzYxIDM1LjcyNDIgOCAzNiA4VjRDMzUuNDU2MiA0IDM0LjkyMzIgNC4wNTQ1NCAzNC40MDY2IDQuMTU5MDhMMzUuMjAwMSA4LjA3OTU5Wk0zNiA4QzM4LjIwOTEgOCA0MCA5Ljc5MDg2IDQwIDEySDQ0QzQ0IDcuNTgxNzIgNDAuNDE4MiA0IDM2IDRWOFpNNDAgMTJDNDAgMTQuMjA5MSAzOC4yMDkxIDE2IDM2IDE2VjIwQzQwLjQxODIgMjAgNDQgMTYuNDE4MyA0NCAxMkg0MFpNMzYgMTZDMzUuNzI0MiAxNiAzNS40NTY5IDE1Ljk3MjQgMzUuMjAwMSAxNS45MjA0TDM0LjQwNjYgMTkuODQwOUMzNC45MjMxIDE5Ljk0NTUgMzUuNDU2MiAyMCAzNiAyMFYxNloiIGZpbGw9IiMzNDdCQjUiIG1hc2s9InVybCgjcGF0aC0yLWluc2lkZS0xKSIvPjxtYXNrIGlkPSJwYXRoLTQtaW5zaWRlLTIiIGZpbGw9IndoaXRlIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMTk2NjEgNi4xMTkzNEM2LjgwOTkzIDYuMDQxMDggNi40MDk3NiA2IDYgNkMyLjY4NjI5IDYgMCA4LjY4NjI5IDAgMTJDMCAxNS4zMTM3IDIuNjg2MjkgMTggNiAxOEM2LjQwOTc2IDE4IDYuODA5OTMgMTcuOTU4OSA3LjE5NjYxIDE3Ljg4MDdDNi40MjYzMSAxNi4wNzQ5IDYgMTQuMDg3MiA2IDEyQzYgOS45MTI3NyA2LjQyNjMxIDcuOTI1MTEgNy4xOTY2MSA2LjExOTM0WiIvPjwvbWFzaz48cGF0aCBkPSJNNy4xOTY2MSA2LjExOTM0TDkuMDM2MjMgNi45MDQwN0w5Ljk5OTQ1IDQuNjQ2MDRMNy41OTMzNCA0LjE1OTA4TDcuMTk2NjEgNi4xMTkzNFpNNy4xOTY2MSAxNy44ODA3TDcuNTkzMzQgMTkuODQwOUw5Ljk5OTQ1IDE5LjM1NEw5LjAzNjIzIDE3LjA5NTlMNy4xOTY2MSAxNy44ODA3Wk02IDhDNi4yNzU3NyA4IDYuNTQzMDUgOC4wMjc2MSA2Ljc5OTg4IDguMDc5NTlMNy41OTMzNCA0LjE1OTA4QzcuMDc2ODEgNC4wNTQ1NCA2LjU0Mzc1IDQgNiA0VjhaTTIgMTJDMiA5Ljc5MDg2IDMuNzkwODYgOCA2IDhWNEMxLjU4MTcyIDQgLTIgNy41ODE3MiAtMiAxMkgyWk02IDE2QzMuNzkwODYgMTYgMiAxNC4yMDkxIDIgMTJILTJDLTIgMTYuNDE4MyAxLjU4MTcyIDIwIDYgMjBWMTZaTTYuNzk5ODggMTUuOTIwNEM2LjU0MzA1IDE1Ljk3MjQgNi4yNzU3NyAxNiA2IDE2VjIwQzYuNTQzNzUgMjAgNy4wNzY4MSAxOS45NDU1IDcuNTkzMzQgMTkuODQwOUw2Ljc5OTg4IDE1LjkyMDRaTTkuMDM2MjMgMTcuMDk1OUM4LjM2OTgyIDE1LjUzMzcgOCAxMy44MTI2IDggMTJINEM0IDE0LjM2MTggNC40ODI4IDE2LjYxNjEgNS4zNTY5OSAxOC42NjU0TDkuMDM2MjMgMTcuMDk1OVpNOCAxMkM4IDEwLjE4NzQgOC4zNjk4MiA4LjQ2NjI5IDkuMDM2MjMgNi45MDQwN0w1LjM1Njk5IDUuMzM0NkM0LjQ4MjggNy4zODM5MiA0IDkuNjM4MTYgNCAxMkg4WiIgZmlsbD0iIzM0N0JCNSIgbWFzaz0idXJsKCNwYXRoLTQtaW5zaWRlLTIpIi8+PC9zdmc+Cg==");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/block-type/latest-stories-block.svg
function latest_stories_block_extends() { latest_stories_block_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return latest_stories_block_extends.apply(this, arguments); }



var latest_stories_block_ref = /*#__PURE__*/external_React_["createElement"]("rect", {
  x: 1,
  y: 1,
  width: 29,
  height: 40,
  rx: 1,
  stroke: "currentColor",
  strokeWidth: 2
});

var latest_stories_block_ref2 = /*#__PURE__*/external_React_["createElement"]("path", {
  fill: "currentColor",
  d: "M6 27h19v2H6zM6 31h4v2H6z"
});

function SvgLatestStoriesBlock({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", latest_stories_block_extends({
    viewBox: "0 0 31 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, latest_stories_block_ref, latest_stories_block_ref2);
}

const MemoSvgLatestStoriesBlock = /*#__PURE__*/external_React_["memo"](SvgLatestStoriesBlock);
/* harmony default export */ var latest_stories_block = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCAzMSA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjkiIGhlaWdodD0iNDAiIHJ4PSIxIiBzdHJva2U9IiMzNDdCQjUiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjYiIHk9IjI3IiB3aWR0aD0iMTkiIGhlaWdodD0iMiIgZmlsbD0iIzM0N0JCNSIgLz48cmVjdCB4PSI2IiB5PSIzMSIgd2lkdGg9IjQiIGhlaWdodD0iMiIgZmlsbD0iIzM0N0JCNSIgLz48L3N2Zz4K");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/block-type/selected-stories-block.svg
function selected_stories_block_extends() { selected_stories_block_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return selected_stories_block_extends.apply(this, arguments); }



var selected_stories_block_ref = /*#__PURE__*/external_React_["createElement"]("circle", {
  cx: 16,
  cy: 16,
  r: 15,
  stroke: "currentColor",
  strokeWidth: 2
});

var selected_stories_block_ref2 = /*#__PURE__*/external_React_["createElement"]("path", {
  d: "M16 9.263V16m0 6.737V16m0 0H9.263M16 16h6.737",
  stroke: "currentColor",
  strokeWidth: 2
});

function SvgSelectedStoriesBlock({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", selected_stories_block_extends({
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, selected_stories_block_ref, selected_stories_block_ref2);
}

const MemoSvgSelectedStoriesBlock = /*#__PURE__*/external_React_["memo"](SvgSelectedStoriesBlock);
/* harmony default export */ var selected_stories_block = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNSIgc3Ryb2tlPSIjMzQ3QkI1IiBzdHJva2Utd2lkdGg9IjIiIC8+PHBhdGggZD0iTTE2IDkuMjYzMTVWMTZNMTYgMjIuNzM2OFYxNk0xNiAxNkg5LjI2MzE1TTE2IDE2SDIyLjczNjgiIHN0cm9rZT0iIzM0N0JCNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+Cg==");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/block-type/embed-story-block.svg
function embed_story_block_extends() { embed_story_block_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return embed_story_block_extends.apply(this, arguments); }



var embed_story_block_ref = /*#__PURE__*/external_React_["createElement"]("path", {
  d: "M14 1H8a7 7 0 00-7 7v0a7 7 0 007 7h6M18 1h6a7 7 0 017 7v0a7 7 0 01-7 7h-6M9 8h13.5",
  stroke: "currentColor",
  strokeWidth: 2
});

function SvgEmbedStoryBlock({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", embed_story_block_extends({
    viewBox: "0 0 32 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, embed_story_block_ref);
}

const MemoSvgEmbedStoryBlock = /*#__PURE__*/external_React_["memo"](SvgEmbedStoryBlock);
/* harmony default export */ var embed_story_block = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAzMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQgMUg4QzQuMTM0MDEgMSAxIDQuMTM0MDEgMSA4VjhDMSAxMS44NjYgNC4xMzQwMSAxNSA4IDE1SDE0IiBzdHJva2U9IiMzNDdCQjUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xOCAxSDI0QzI3Ljg2NiAxIDMxIDQuMTM0MDEgMzEgOFY4QzMxIDExLjg2NiAyNy44NjYgMTUgMjQgMTVIMTgiIHN0cm9rZT0iIzM0N0JCNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTkgOEgyMi41IiBzdHJva2U9IiMzNDdCQjUiIHN0cm9rZS13aWR0aD0iMiIgLz48L3N2Zz4K");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/view-type/grid-view.svg
function grid_view_extends() { grid_view_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return grid_view_extends.apply(this, arguments); }



var grid_view_ref = /*#__PURE__*/external_React_["createElement"]("path", {
  d: "M0 0h5v6H0zM0 8h5v6H0zM7 0h5v6H7zM7 8h5v6H7z"
});

function SvgGridView({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", grid_view_extends({
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, grid_view_ref);
}

const MemoSvgGridView = /*#__PURE__*/external_React_["memo"](SvgGridView);
/* harmony default export */ var grid_view = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI2IiAvPjxyZWN0IHk9IjgiIHdpZHRoPSI1IiBoZWlnaHQ9IjYiIC8+PHJlY3QgeD0iNyIgd2lkdGg9IjUiIGhlaWdodD0iNiIgLz48cmVjdCB4PSI3IiB5PSI4IiB3aWR0aD0iNSIgaGVpZ2h0PSI2IiAvPjwvc3ZnPgo=");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/view-type/list-view.svg
function list_view_extends() { list_view_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return list_view_extends.apply(this, arguments); }



var list_view_ref = /*#__PURE__*/external_React_["createElement"]("path", {
  d: "M0 0h12v3H0zM0 5h12v3H0zM0 10h12v3H0z"
});

function SvgListView({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", list_view_extends({
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, list_view_ref);
}

const MemoSvgListView = /*#__PURE__*/external_React_["memo"](SvgListView);
/* harmony default export */ var list_view = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMyIgLz48cmVjdCB5PSI1IiB3aWR0aD0iMTIiIGhlaWdodD0iMyIgLz48cmVjdCB5PSIxMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjMiIC8+PC9zdmc+Cg==");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/view-type/box-carousel-view.svg
function box_carousel_view_extends() { box_carousel_view_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return box_carousel_view_extends.apply(this, arguments); }



var box_carousel_view_ref = /*#__PURE__*/external_React_["createElement"]("path", {
  d: "M4 14h10V0H4zM16 12h2V2h-2zM0 12h2V2H0z"
});

function SvgBoxCarouselView({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", box_carousel_view_extends({
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, box_carousel_view_ref);
}

const MemoSvgBoxCarouselView = /*#__PURE__*/external_React_["memo"](SvgBoxCarouselView);
/* harmony default export */ var box_carousel_view = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTQiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDQgMTQpIiAvPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxNiAxMikiIC8+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMTAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTIpIiAvPjwvc3ZnPgo=");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/config-panel/grid-view-panel-icon.svg
function grid_view_panel_icon_extends() { grid_view_panel_icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return grid_view_panel_icon_extends.apply(this, arguments); }



var grid_view_panel_icon_ref = /*#__PURE__*/external_React_["createElement"]("path", {
  stroke: "currentColor",
  strokeWidth: 2,
  d: "M1 1h6.462v9.538H1zM1 15.615h6.462v9.538H1zM12.539 1h6.462v9.538h-6.462zM12.539 15.615h6.462v9.538h-6.462z"
});

function SvgGridViewPanelIcon({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", grid_view_panel_icon_extends({
    viewBox: "0 0 20 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, grid_view_panel_icon_ref);
}

const MemoSvgGridViewPanelIcon = /*#__PURE__*/external_React_["memo"](SvgGridViewPanelIcon);
/* harmony default export */ var grid_view_panel_icon = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyMCAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNi40NjE1NCIgaGVpZ2h0PSI5LjUzODQ2IiBzdHJva2U9IiMzNDdCQjUiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjEiIHk9IjE1LjYxNTQiIHdpZHRoPSI2LjQ2MTU0IiBoZWlnaHQ9IjkuNTM4NDYiIHN0cm9rZT0iIzM0N0JCNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iMTIuNTM4NSIgeT0iMSIgd2lkdGg9IjYuNDYxNTQiIGhlaWdodD0iOS41Mzg0NiIgc3Ryb2tlPSIjMzQ3QkI1IiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIxMi41Mzg1IiB5PSIxNS42MTU0IiB3aWR0aD0iNi40NjE1NCIgaGVpZ2h0PSI5LjUzODQ2IiBzdHJva2U9IiMzNDdCQjUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPgo=");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/config-panel/list-view-panel-icon.svg
function list_view_panel_icon_extends() { list_view_panel_icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return list_view_panel_icon_extends.apply(this, arguments); }



var list_view_panel_icon_ref = /*#__PURE__*/external_React_["createElement"]("path", {
  stroke: "currentColor",
  strokeWidth: 2,
  d: "M1 1h20v4H1zM1 11h20v4H1zM1 21h20v4H1z"
});

function SvgListViewPanelIcon({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", list_view_panel_icon_extends({
    viewBox: "0 0 22 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, list_view_panel_icon_ref);
}

const MemoSvgListViewPanelIcon = /*#__PURE__*/external_React_["memo"](SvgListViewPanelIcon);
/* harmony default export */ var list_view_panel_icon = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyMiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjAiIGhlaWdodD0iNCIgc3Ryb2tlPSIjMzQ3QkI1IiBzdHJva2Utd2lkdGg9IjIiIC8+PHJlY3QgeD0iMSIgeT0iMTEiIHdpZHRoPSIyMCIgaGVpZ2h0PSI0IiBzdHJva2U9IiMzNDdCQjUiIHN0cm9rZS13aWR0aD0iMiIgLz48cmVjdCB4PSIxIiB5PSIyMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjQiIHN0cm9rZT0iIzM0N0JCNSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjwvc3ZnPgo=");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons/config-panel/box-carousel-view-panel-icon.svg
function box_carousel_view_panel_icon_extends() { box_carousel_view_panel_icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return box_carousel_view_panel_icon_extends.apply(this, arguments); }



var box_carousel_view_panel_icon_ref = /*#__PURE__*/external_React_["createElement"]("path", {
  stroke: "currentColor",
  strokeWidth: 2,
  d: "M7 1h12v18H7z"
});

var box_carousel_view_panel_icon_ref2 = /*#__PURE__*/external_React_["createElement"]("path", {
  fill: "currentColor",
  d: "M24 2h2v16h-2zM0 2h2v16H0z"
});

function SvgBoxCarouselViewPanelIcon({
  title,
  titleId,
  ...props
}) {
  return /*#__PURE__*/external_React_["createElement"]("svg", box_carousel_view_panel_icon_extends({
    viewBox: "0 0 26 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_React_["createElement"]("title", {
    id: titleId
  }, title) : null, box_carousel_view_panel_icon_ref, box_carousel_view_panel_icon_ref2);
}

const MemoSvgBoxCarouselViewPanelIcon = /*#__PURE__*/external_React_["memo"](SvgBoxCarouselViewPanelIcon);
/* harmony default export */ var box_carousel_view_panel_icon = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI3IiB5PSIxIiB3aWR0aD0iMTIiIGhlaWdodD0iMTgiIHN0cm9rZT0iIzM0N0JCNSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjxyZWN0IHg9IjI0IiB5PSIyIiB3aWR0aD0iMiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzM0N0JCNSIgLz48cmVjdCB5PSIyIiB3aWR0aD0iMiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzM0N0JCNSIgLz48L3N2Zz4K");

// CONCATENATED MODULE: ./packages/stories-block/src/block/icons.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */











 // Icons for block types.

const LATEST_STORIES_BLOCK_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgLatestStoriesBlock, {
  width: 31,
  height: 42
});
const SELECTED_STORIES_BLOCK_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgSelectedStoriesBlock, {
  width: 32,
  height: 32
});
const EMBED_STORY_BLOCK_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgEmbedStoryBlock, {
  width: 32,
  height: 16
}); // Icons for view types.

const CAROUSEL_VIEW_TYPE_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgBoxCarouselView, {
  width: 18,
  height: 14
});
const CIRCLES_VIEW_TYPE_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgCirclesCarouselView, {
  className: "web-stories-block__toolbar-icon icon__circles-carousel",
  width: 23,
  height: 18
});
const GRID_VIEW_TYPE_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgGridView, {
  width: 12,
  height: 14
});
const LIST_VIEW_TYPE_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgListView, {
  width: 12,
  height: 13
}); // Configuration panel view type icons.

const BOX_CAROUSEL_CONFIG_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgBoxCarouselViewPanelIcon, {
  width: 26,
  height: 20
});
const LIST_VIEW_CONFIG_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgListViewPanelIcon, {
  width: 22,
  height: 26
});
const CIRCLE_CAROUSEL_CONFIG_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgCirclesCarouselViewPanelIcon, {
  width: 42,
  height: 24
});
const GRID_VIEW_CONFIG_ICON = /*#__PURE__*/external_React_default.a.createElement(MemoSvgGridViewPanelIcon, {
  width: 20,
  height: 27
}); // Defining the SVG like this ensures that IDs are unique
// even if there are multiple instances of the component.
// See https://github.com/google/web-stories-wp/issues/8401

const BlockIcon = () => {
  const id = Object(external_wp_compose_["useInstanceId"])(BlockIcon);
  return /*#__PURE__*/external_React_default.a.createElement("svg", {
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/external_React_default.a.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "32",
    transform: "rotate(-180 32 32)",
    fill: `url(#gradient-${id})`
  }), /*#__PURE__*/external_React_default.a.createElement("g", {
    filter: `url(#filter-${id})`,
    fill: "#fff"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M41.6 19.2a3.2 3.2 0 013.2 3.2v19.2a3.2 3.2 0 01-3.2 3.2V19.2zm-24 0a3.2 3.2 0 013.2-3.2h14.4a3.2 3.2 0 013.2 3.2v25.6a3.2 3.2 0 01-3.2 3.2H20.8a3.2 3.2 0 01-3.2-3.2V19.2zM48 22.4a2.4 2.4 0 012.4 2.4v14.4a2.4 2.4 0 01-2.4 2.4V22.4z"
  })), /*#__PURE__*/external_React_default.a.createElement("defs", null, /*#__PURE__*/external_React_default.a.createElement("linearGradient", {
    id: `gradient-${id}`,
    x1: "13.255",
    y1: "6.599",
    x2: "35.289",
    y2: "62.791",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_React_default.a.createElement("stop", {
    stopColor: "#79B3FF"
  }), /*#__PURE__*/external_React_default.a.createElement("stop", {
    offset: "1",
    stopColor: "#CBACFF"
  })), /*#__PURE__*/external_React_default.a.createElement("filter", {
    id: `filter-${id}`,
    x: "8.96",
    y: "10.24",
    width: "46.08",
    height: "46.08",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_React_default.a.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_React_default.a.createElement("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/external_React_default.a.createElement("feOffset", {
    dy: "1.28"
  }), /*#__PURE__*/external_React_default.a.createElement("feGaussianBlur", {
    stdDeviation: "1.92"
  }), /*#__PURE__*/external_React_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.423529 0 0 0 0 0.490196 0 0 0 0 0.733333 0 0 0 0.3 0"
  }), /*#__PURE__*/external_React_default.a.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), /*#__PURE__*/external_React_default.a.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  }))));
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */

/**
 * Send an Analytics tracking event.
 *
 * @param {string} eventName Event name, either 'screen_view', 'timing_complete', or something custom.
 * @param {Object<*>?} [eventData] The event data to send.
 * @return {Promise<void>} Promise that always resolves.
 */
//eslint-disable-next-line require-await

async function track(eventName, eventData = {}) {
  return new Promise(resolve => {
    // This timeout ensures a tracking event does not block the user
    // event if it is not sent (in time).
    // If this fails, it shouldn't reject the promise since event
    // tracking should not result in user-facing errors. It will just
    // trigger a console warning.
    // See https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data
    const failTimeout = setTimeout(() => {
      global.console.warn(`[Web Stories] Tracking event "${eventName}" took too long to fire.`);
      resolve();
    }, 1000);
    Object(_shared__WEBPACK_IMPORTED_MODULE_0__[/* gtag */ "b"])('event', eventName, { ...eventData,
      event_callback: () => {
        clearTimeout(failTimeout);
        resolve();
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["a"] = (track);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),
/* 12 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDebounce; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Debounces a function with Lodash's `debounce`. A new debounced function will
 * be returned and any scheduled calls cancelled if any of the arguments change,
 * including the function to debounce, so please wrap functions created on
 * render in components in `useCallback`.
 *
 * Replacement for the same hook from the `@wordpress/compose` package which is
 * not available in WordPress 5.5.
 *
 * @todo Remove once WordPress 5.5 is no longer required.
 * @see https://docs-lodash.com/v4/debounce/
 * @see https://github.com/WordPress/gutenberg/blob/4fdffac83552063c56a71f5c5dd96359c2a580be/packages/compose/src/hooks/use-debounce/index.js
 * @param {Function}                          fn        The function to debounce.
 * @param {number}                            [wait]    The number of milliseconds to delay.
 * @param {import('lodash').DebounceSettings} [options] The options object.
 * @return {import('lodash').Cancelable} Debounced function.
 */

function useDebounce(fn, wait, options) {
  const debounced = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["debounce"])(fn, wait, options), [fn, wait, options]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => () => debounced.cancel(), [debounced]);
  return debounced;
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA_LAYER; });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DATA_LAYER = 'webStoriesTrackingDataLayer';

/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ src_initializeTracking; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ src_trackEvent; });

// UNUSED EXPORTS: enableTracking, disableTracking, isTrackingEnabled, trackScreenView, trackClick, trackError, trackTiming, getTimeTracker

// EXTERNAL MODULE: ./packages/tracking/src/shared.js
var shared = __webpack_require__(4);

// EXTERNAL MODULE: ./packages/tracking/src/constants.js
var constants = __webpack_require__(15);

// CONCATENATED MODULE: ./packages/tracking/src/enableTracking.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */


const SCRIPT_IDENTIFIER = 'data-web-stories-tracking';

function loadScriptTag(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.setAttribute(SCRIPT_IDENTIFIER, '');
    script.async = true;
    script.src = url;
    script.addEventListener('load', resolve);
    script.addEventListener('error', reject);
    document.head.appendChild(script);
  });
}
/**
 * Loads the Analytics tracking script.
 *
 * @param {boolean} [sendPageView=true] Whether to send a page view event or not upon loading.
 * @return {Promise<void>} Promise.
 */


async function loadTrackingScript(sendPageView = true) {
  if (document.querySelector(`script[${SCRIPT_IDENTIFIER}]`)) {
    return;
  }

  try {
    await loadScriptTag(`https://www.googletagmanager.com/gtag/js?id=${shared["a" /* config */].trackingId}&l=${constants["a" /* DATA_LAYER */]}`);
  } catch {
    // Loading was not possible, probably because of an ad blocker.
    return;
  } // This way we'll get "Editor" and "Dashboard" instead of "Edit Story ‹ Web Stories Dev — WordPress".


  const pageTitle = shared["a" /* config */].appName; // 'Plugin Activation' -> '/plugin-activation'
  // This way we get nicer looking paths like '/editor' instead of 'wp-admin/post-new.php?post_type=web-story'.

  const pagePath = '/' + shared["a" /* config */].appName.replace(/ /g, '-').toLowerCase();
  Object(shared["b" /* gtag */])('js', new Date()); // Note: `set` commands need to be placed before `config` commands to ensure
  // those values are passed along with the initial config.
  // Universal Analytics custom dimensions.

  Object(shared["b" /* gtag */])('set', {
    custom_map: {
      dimension1: 'analytics',
      dimension2: 'adNetwork',
      dimension3: 'search_order',
      dimension4: 'search_orderby',
      dimension5: 'file_size',
      dimension6: 'file_type',
      dimension7: 'status',
      dimension8: 'siteLocale',
      dimension9: 'userLocale',
      dimension10: 'userRole',
      dimension11: 'enabledExperiments',
      dimension12: 'wpVersion',
      dimension13: 'phpVersion',
      dimension14: 'isMultisite',
      dimension15: 'name',
      dimension16: 'activePlugins'
    }
  }); // Google Analytics 4 user properties.
  // See https://developers.google.com/analytics/devguides/collection/ga4/persistent-values
  // See https://developers.google.com/analytics/devguides/collection/ga4/user-properties

  Object(shared["b" /* gtag */])('set', 'user_properties', shared["a" /* config */].userProperties);
  Object(shared["b" /* gtag */])('config', shared["a" /* config */].trackingId, {
    anonymize_ip: true,
    app_name: shared["a" /* config */].appName,
    app_version: shared["a" /* config */].appVersion,
    send_page_view: sendPageView,
    // Setting the transport method to 'beacon' lets the hit be sent
    // using 'navigator.sendBeacon' in browsers that support it.
    transport_type: 'beacon',
    page_title: pageTitle,
    page_path: pagePath,
    // Re-using user properties values for the custom dimensions.
    ...shared["a" /* config */].userProperties
  }); // Support GA4 in parallel.
  // At some point, only this will remain.

  Object(shared["b" /* gtag */])('config', shared["a" /* config */].trackingIdGA4, {
    app_name: shared["a" /* config */].appName,
    // This doesn't seem to be fully working for web properties.
    // See https://support.google.com/analytics/answer/9268042
    app_version: shared["a" /* config */].appVersion,
    send_page_view: sendPageView,
    // Setting the transport method to 'beacon' lets the hit be sent
    // using 'navigator.sendBeacon' in browsers that support it.
    transport_type: 'beacon',
    page_title: pageTitle,
    page_path: pagePath
  });
}

async function enableTracking(sendPageView) {
  if (!shared["a" /* config */].trackingAllowed || shared["a" /* config */].trackingEnabled) {
    return;
  }

  await loadTrackingScript(sendPageView);
  shared["a" /* config */].trackingEnabled = true;
}

/* harmony default export */ var src_enableTracking = (enableTracking);
// CONCATENATED MODULE: ./packages/tracking/src/isTrackingEnabled.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */


/**
 * Determines whether tracking is enabled or not.
 *
 * @return {Promise<boolean>} Whether tracking is enabled
 */

async function isTrackingEnabled() {
  await src_enableTracking();
  return Boolean(shared["a" /* config */].trackingEnabled);
}

/* harmony default export */ var src_isTrackingEnabled = (isTrackingEnabled);
// EXTERNAL MODULE: ./packages/tracking/src/track.js
var track = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/tracking/src/trackError.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */


/**
 * Send an Analytics tracking event for exceptions.
 *
 * Works for both Universal Analytics and Google Analytics 4.
 *
 * @see https://developers.google.com/analytics/devguides/collection/ga4/exceptions
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions
 * @param {string} prefix Error prefixed. Concatenated with description.
 * @param {string} description The error description.
 * @param {boolean} [fatal=false] Report whether there is a fatal error.
 * @return {Promise<void>} Promise that always resolves.
 */

async function trackError(prefix, description, fatal = false) {
  if (!(await src_isTrackingEnabled())) {
    return Promise.resolve();
  }

  const eventData = {
    description: `${prefix}: ${description}`,
    fatal
  };
  return Object(track["a" /* default */])('exception', eventData);
}

/* harmony default export */ var src_trackError = (trackError);
// CONCATENATED MODULE: ./packages/tracking/src/initializeErrorReporting.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */

const IGNORED_ERROR_MESSAGES = ['ResizeObserver loop limit exceeded'];
/**
 *
 * @param {ErrorEvent} event Error event.
 */

function handleErrors(event) {
  if (event.filename && !event.filename.includes('web-stories')) {
    return;
  }

  if (IGNORED_ERROR_MESSAGES.includes(event.message)) {
    return;
  }

  const errorMessage = `${event.message} (${event.lineno}:${event.colno})`;
  src_trackError('uncaught_error', errorMessage, true);
}
/**
 *
 * @param {PromiseRejectionEvent} event Promise rejection event.
 */


function handleUncaughtPromises(event) {
  const errorMessage = event.reason || 'Promise rejection';
  src_trackError('uncaught_promise', errorMessage);
}

function initializeErrorReporting() {
  window.addEventListener('error', handleErrors);
  window.addEventListener('unhandledrejection', handleUncaughtPromises);
}

/* harmony default export */ var src_initializeErrorReporting = (initializeErrorReporting);
// CONCATENATED MODULE: ./packages/tracking/src/initializeTracking.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */



/**
 * Initializes tracking.
 *
 * @param {string} appName Name of the application, e.g. 'Dashboard' or 'Editor'.
 * @param {boolean} [sendPageView=true] Whether to send an initial page view event upon loading.
 * @return {Promise<void>} Promise.
 */

async function initializeTracking(appName, sendPageView = true) {
  shared["a" /* config */].appName = appName;
  await src_enableTracking(sendPageView);
  src_initializeErrorReporting();
}

/* harmony default export */ var src_initializeTracking = (initializeTracking);
// CONCATENATED MODULE: ./packages/tracking/src/disableTracking.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */


function disableTracking() {
  shared["a" /* config */].trackingEnabled = false;
}

/* harmony default export */ var src_disableTracking = (disableTracking);
// CONCATENATED MODULE: ./packages/tracking/src/trackClick.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */


/**
 * Send an Analytics tracking event for clicks.
 *
 * Works for both Universal Analytics and Google Analytics 4.
 *
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * @param {MouseEvent} event The actual click event.
 * @param {string} eventName The event name (e.g. 'search').
 * @return {Promise<void>} Promise that always resolves.
 */

async function trackClick(event, eventName) {
  // currentTarget becomes null after event bubbles up, so we
  // grab it for reference before any async operations occur.
  // https://github.com/facebook/react/issues/2857#issuecomment-70006324
  const {
    currentTarget
  } = event;

  if (!(await src_isTrackingEnabled())) {
    return Promise.resolve();
  }

  const openLinkInNewTab = (currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.target) === '_blank' || event.ctrlKey || event.shiftKey || event.metaKey || event.which === 2;

  if (openLinkInNewTab) {
    return Object(track["a" /* default */])(eventName);
  }

  event.preventDefault();
  return Object(track["a" /* default */])(eventName).finally(() => {
    document.location = currentTarget.href;
  });
}

/* harmony default export */ var src_trackClick = (trackClick);
// CONCATENATED MODULE: ./packages/tracking/src/trackEvent.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */



/**
 * Send an Analytics tracking event.
 *
 * Note: Only use custom events if the existing events don't handle your use case.
 *
 * @see https://developers.google.com/analytics/devguides/collection/ga4/events
 * @see https://support.google.com/analytics/answer/9267735
 * @see https://support.google.com/analytics/answer/9310895?hl=en
 * @param {string} eventName The event name (e.g. 'search'). The value that will appear as the event action in Google Analytics Event reports.
 * @param {Object<*>} [eventParameters] Event parameters.
 * @return {Promise<void>} Promise that always resolves.
 */

async function trackEvent(eventName, eventParameters = {}) {
  if (!(await src_isTrackingEnabled())) {
    return Promise.resolve();
  }

  let gtagEventParameters = {}; // Universal Analytics backwards compatibility.

  const {
    search_type,
    duration,
    title_length,
    unread_count,
    ...rest
  } = eventParameters;

  if (search_type) {
    gtagEventParameters = { ...rest,
      event_label: search_type
    };
  } else if (duration) {
    gtagEventParameters = { ...rest,
      value: duration
    };
  } else if (title_length) {
    gtagEventParameters = { ...rest,
      value: title_length
    };
  } else if (unread_count) {
    gtagEventParameters = { ...rest,
      value: unread_count
    };
  }

  if (Object.values(gtagEventParameters).length) {
    Object(track["a" /* default */])(eventName, { ...gtagEventParameters,
      send_to: shared["a" /* config */].trackingId
    });
    Object(track["a" /* default */])(eventName, { ...eventParameters,
      send_to: shared["a" /* config */].trackingIdGA4
    });
    return Promise.resolve();
  }

  return Object(track["a" /* default */])(eventName, eventParameters);
}

/* harmony default export */ var src_trackEvent = (trackEvent);
// CONCATENATED MODULE: ./packages/tracking/src/trackTiming.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */


/**
 * Track event timing for performance measuring.
 *
 * @param {string} category Category for categorizing the user timing variables into groups.
 * @param {number} time Duration in milliseconds.
 * @param {string} label Label that allows extra flexibility in reports.
 * @param {string} eventName Event name, e.g. click or mousedown.
 */

function trackTiming(category, time, label = '', eventName = 'click') {
  // Universal Analytics has a special `timing_complete` event which
  // does not exist in GA4.
  src_trackEvent('timing_complete', {
    name: eventName,
    value: time,
    event_category: category,
    event_label: label,
    send_to: shared["a" /* config */].trackingId
  });
  src_trackEvent(eventName, {
    value: time,
    event_category: category,
    event_label: label,
    send_to: shared["a" /* config */].trackingIdGA4
  });
}

/* harmony default export */ var src_trackTiming = (trackTiming);
// CONCATENATED MODULE: ./packages/tracking/src/trackScreenView.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */


/**
 * Send an Analytics screen_view event.
 *
 * Works for both Universal Analytics and Google Analytics 4.
 *
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/screens
 * @see https://developers.google.com/analytics/devguides/collection/ga4/screen-view
 * @param {string} screenName Screen name. Example: 'Explore Templates'.
 * @return {Promise<void>} Promise that always resolves.
 */

async function trackScreenView(screenName) {
  if (!(await src_isTrackingEnabled())) {
    return Promise.resolve();
  }

  const eventData = {
    screen_name: screenName
  };
  return Object(track["a" /* default */])('screen_view', eventData);
}

/* harmony default export */ var src_trackScreenView = (trackScreenView);
// CONCATENATED MODULE: ./packages/tracking/src/getTimeTracker.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */


/**
 * Starts a timer and returns a callback to stop it and send an analytics timing_complete event.
 *
 * Works for both Universal Analytics and Google Analytics 4.
 *
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings
 * @param {string} eventName The event nae (e.g. 'load_items').
 * @return {Function} Callback to stop timer and send tracking event.
 */

function getTimeTracker(eventName) {
  const before = window.performance.now();
  return () => {
    const after = window.performance.now();
    const value = after - before; // Universal Analytics has a special `timing_complete` event which
    // does not exist in GA4.

    src_trackEvent('timing_complete', {
      name: eventName,
      value,
      send_to: shared["a" /* config */].trackingId
    });
    src_trackEvent(eventName, {
      value,
      send_to: shared["a" /* config */].trackingIdGA4
    });
  };
}

/* harmony default export */ var src_getTimeTracker = (getTimeTracker);
// CONCATENATED MODULE: ./packages/tracking/src/index.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */












/***/ }),
/* 18 */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loaderContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


const {
  config: {
    api: {
      stories: storiesApi
    }
  }
} = window.webStoriesBlockSettings;

function FetchSelectedStories({
  icon,
  label,
  selectedStoryIds = [],
  setSelectedStories,
  setIsFetching
}) {
  const {
    createErrorNotice
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])('core/notices');

  const fetchStories = async () => {
    try {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
        path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["addQueryArgs"])(storiesApi, {
          _embed: 'author,wp:featuredmedia',
          context: 'edit',
          include: selectedStoryIds,
          orderby: selectedStoryIds.length > 0 ? 'include' : undefined
        })
      });

      if (response.length) {
        setSelectedStories(response);
      }
    } catch (error) {
      createErrorNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(
      /* translators: %s: error message. */
      Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Unable to load stories. %s', 'web-stories'), (error === null || error === void 0 ? void 0 : error.message) || ''), {
        type: 'snackbar'
      });
    } finally {
      setIsFetching(false);
    }
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    fetchStories(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockIcon"], {
      icon: icon,
      showColors: true
    }),
    label: label,
    className: "wp-block-web-stories-embed",
    instructions: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loaderContainer__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Loading Stories…', 'web-stories')));
}

/* harmony default export */ __webpack_exports__["a"] = (FetchSelectedStories);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function LoaderContainer({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "web-stories-block__loader-container"
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null));
}

/* harmony default export */ __webpack_exports__["a"] = (LoaderContainer);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(8);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(10);

// EXTERNAL MODULE: ./packages/stories-block/src/block/components/loaderContainer.js
var loaderContainer = __webpack_require__(21);

// EXTERNAL MODULE: ./packages/stories-block/src/block/hooks/useDebounce.js
var useDebounce = __webpack_require__(13);

// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storyPicker/itemOverlay.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function ItemOverlay({
  isSelected,
  story,
  addSelectedStory,
  removeSelectedStory
}) {
  const onClickOverlay = Object(external_wp_element_["useCallback"])(event => {
    event.preventDefault();

    if (isSelected) {
      return;
    }

    addSelectedStory(story);
  }, [addSelectedStory, story, isSelected]);
  const onClickIcon = Object(external_wp_element_["useCallback"])(event => {
    event.preventDefault();

    if (isSelected) {
      removeSelectedStory(story);
    } else {
      addSelectedStory(story);
    }
  }, [removeSelectedStory, addSelectedStory, story, isSelected]);
  return /*#__PURE__*/external_React_default.a.createElement("button", {
    type: "button",
    className: isSelected ? 'web-stories-story-preview-card__overlay item-selected' : 'web-stories-story-preview-card__overlay',
    onClick: onClickOverlay
  }, isSelected && /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "item-selected-icon"
  }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Icon"], {
    className: "item-selected-icon-check",
    icon: "saved"
  }), /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Icon"], {
    className: "item-selected-icon-minus",
    icon: "minus",
    onClick: onClickIcon
  }), /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["VisuallyHidden"], null, Object(external_wp_i18n_["__"])('Deselect', 'web-stories'))));
}

/* harmony default export */ var itemOverlay = (ItemOverlay);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storyPicker/storyPreview.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const noop = () => {};

function StoryPreview({
  story,
  isSelected,
  addSelectedStory = noop,
  removeSelectedStory = noop
}) {
  var _story$_embedded, _story$_embedded$wpF, _story$_embedded$wpF$, _story$_embedded2, _story$_embedded2$wp, _story$_embedded2$wp$, _story$_embedded3, _story$_embedded3$aut, _story$_embedded3$aut2, _story$_embedded4, _story$_embedded4$aut, _story$_embedded4$aut2;

  // @todo Keep an eye on this experimental API, make necessary changes when this gets updated in core.
  const dateFormat = Object(external_wp_date_["__experimentalGetSettings"])().formats.date;

  const displayDate = Object(external_wp_date_["dateI18n"])(dateFormat, story.created);
  const displayDateText = Object(external_wp_element_["useMemo"])(() => {
    if (!displayDate) {
      return null;
    }

    switch (story.status) {
      case 'publish':
        return Object(external_wp_i18n_["sprintf"])(
        /* translators: %s: published date */
        Object(external_wp_i18n_["__"])('Published %s', 'web-stories'), displayDate);

      case 'future':
        return Object(external_wp_i18n_["sprintf"])(
        /* translators: %s: future publish date */
        Object(external_wp_i18n_["__"])('Scheduled %s', 'web-stories'), displayDate);

      default:
        return Object(external_wp_i18n_["sprintf"])(
        /* translators: %s: last modified date */
        Object(external_wp_i18n_["__"])('Modified %s', 'web-stories'), displayDate);
    }
  }, [story.status, displayDate]);
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-preview-card"
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-preview-card__poster"
  }, /*#__PURE__*/external_React_default.a.createElement(itemOverlay, {
    isSelected: isSelected,
    story: story,
    addSelectedStory: addSelectedStory,
    removeSelectedStory: removeSelectedStory
  }), ((_story$_embedded = story._embedded) === null || _story$_embedded === void 0 ? void 0 : (_story$_embedded$wpF = _story$_embedded['wp:featuredmedia']) === null || _story$_embedded$wpF === void 0 ? void 0 : (_story$_embedded$wpF$ = _story$_embedded$wpF[0]) === null || _story$_embedded$wpF$ === void 0 ? void 0 : _story$_embedded$wpF$.source_url) && /*#__PURE__*/external_React_default.a.createElement("img", {
    src: (_story$_embedded2 = story._embedded) === null || _story$_embedded2 === void 0 ? void 0 : (_story$_embedded2$wp = _story$_embedded2['wp:featuredmedia']) === null || _story$_embedded2$wp === void 0 ? void 0 : (_story$_embedded2$wp$ = _story$_embedded2$wp[0]) === null || _story$_embedded2$wp$ === void 0 ? void 0 : _story$_embedded2$wp$.source_url,
    alt: "",
    width: 640,
    height: 853
  })), /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-preview-card__label"
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-preview-card__title"
  }, story.title.rendered === '' ? Object(external_wp_i18n_["__"])('Untitled', 'web-stories') : story.title.rendered), ((_story$_embedded3 = story._embedded) === null || _story$_embedded3 === void 0 ? void 0 : (_story$_embedded3$aut = _story$_embedded3.author) === null || _story$_embedded3$aut === void 0 ? void 0 : (_story$_embedded3$aut2 = _story$_embedded3$aut[0]) === null || _story$_embedded3$aut2 === void 0 ? void 0 : _story$_embedded3$aut2.name) && /*#__PURE__*/external_React_default.a.createElement("div", null, (_story$_embedded4 = story._embedded) === null || _story$_embedded4 === void 0 ? void 0 : (_story$_embedded4$aut = _story$_embedded4.author) === null || _story$_embedded4$aut === void 0 ? void 0 : (_story$_embedded4$aut2 = _story$_embedded4$aut[0]) === null || _story$_embedded4$aut2 === void 0 ? void 0 : _story$_embedded4$aut2.name), /*#__PURE__*/external_React_default.a.createElement("div", null, displayDateText)));
}

/* harmony default export */ var storyPreview = (StoryPreview);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storyPicker/selectStories.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const SORT_OPTIONS = [{
  label: Object(external_wp_i18n_["__"])('Name', 'web-stories'),
  value: 'name'
}, {
  label: Object(external_wp_i18n_["__"])('Date Created', 'web-stories'),
  value: 'date'
}, {
  label: Object(external_wp_i18n_["__"])('Last Modified', 'web-stories'),
  // default
  value: 'modified'
}, {
  label: Object(external_wp_i18n_["__"])('Created By', 'web-stories'),
  value: 'author'
}]; // ComboboxControl does not yet exist in WordPress 5.5.
// TODO: Remove these once WordPress 5.5 is no longer required.

function AuthorSearch({
  label,
  options,
  onFilterValueChange,
  onChange,
  value
}) {
  if (external_wp_components_["ComboboxControl"]) {
    return /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["ComboboxControl"], {
      label: label,
      options: options,
      onFilterValueChange: onFilterValueChange,
      onChange: onChange,
      value: value,
      className: "web-stories-story-picker-filter__combobox"
    });
  }

  return /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["SelectControl"], {
    label: label,
    options: options,
    onChange: onChange,
    value: value
  });
}

function KeywordSearch({
  label,
  options,
  onFilterValueChange,
  onChange,
  value
}) {
  if (external_wp_components_["ComboboxControl"]) {
    return /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["ComboboxControl"], {
      label: label,
      options: options,
      onFilterValueChange: onFilterValueChange,
      onChange: onChange,
      value: value,
      className: "web-stories-story-picker-filter__combobox"
    });
  }

  return /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["TextControl"], {
    label: label,
    value: value,
    onChange: onChange
  });
}

function SelectStories({
  stories = [],
  selectedStories = [],
  setSelectedStories,
  hasAllStories,
  isLoading,
  fetchStories,
  maxNumOfStories
}) {
  const [currentAuthor, setCurrentAuthor] = Object(external_wp_element_["useState"])([]);
  const [searchKeyword, setSearchKeyword] = Object(external_wp_element_["useState"])('');
  const [authorKeyword, setAuthorKeyword] = Object(external_wp_element_["useState"])('');
  const [order, setOrder] = Object(external_wp_element_["useState"])('desc');
  const [orderBy, setOrderBy] = Object(external_wp_element_["useState"])('modified');
  const nextPage = Object(external_wp_element_["useRef"])(1);
  const {
    authors
  } = Object(external_wp_data_["useSelect"])(select => {
    const query = {
      search: authorKeyword
    };
    const {
      getAuthors
    } = select('core');
    return {
      // Not using `getUsers()` because it requires `list_users` capability.
      authors: getAuthors(query)
    };
  }, [authorKeyword]);
  const fetchSelectedStories = Object(external_wp_element_["useCallback"])(() => {
    fetchStories({
      author: (currentAuthor === null || currentAuthor === void 0 ? void 0 : currentAuthor.id) || undefined,
      search: searchKeyword || undefined,
      order,
      orderBy,
      page: nextPage.current
    });
  }, [searchKeyword, currentAuthor, fetchStories, order, orderBy]);
  Object(external_wp_element_["useEffect"])(() => {
    nextPage.current = 1;
    fetchSelectedStories();
  }, [searchKeyword, currentAuthor, order, orderBy, fetchSelectedStories]);
  const onLoadMoreClick = Object(external_wp_element_["useCallback"])(() => {
    nextPage.current++;
    fetchSelectedStories();
  }, [fetchSelectedStories]);
  const debouncedTypeaheadChange = Object(useDebounce["a" /* default */])(value => {
    setSearchKeyword(value);
  }, 300);
  const debouncedTypeaheadAuthorChange = Object(useDebounce["a" /* default */])(value => {
    setAuthorKeyword(value);

    if ('' === value) {
      setCurrentAuthor(null);
    } else {
      setCurrentAuthor(authors.find(author => author.id === Number(value)));
    }
  }, 300);
  const handleAuthorChange = Object(external_wp_element_["useCallback"])(value => {
    // On selecting author from the dropdown, '<Search />' component sets the newOption from the
    // suggestions array, which in our case is author ID. Check the newOption is a number.
    if ('' === value) {
      setCurrentAuthor(null);
    } else {
      setCurrentAuthor(authors.find(author => author.id === Number(value)));
    }
  }, [authors, setCurrentAuthor]);
  const onSortChange = Object(external_wp_element_["useCallback"])(newSort => {
    setOrderBy(newSort);
    setOrder(['title', 'author'].includes(newSort) ? 'asc' : 'desc');
  }, [setOrder, setOrderBy]);
  const authorSearchOptions = Object(external_wp_element_["useMemo"])(() => {
    return authors.filter(({
      name
    }) => Boolean(name === null || name === void 0 ? void 0 : name.trim().length)).map(({
      id,
      name
    }) => ({
      label: name,
      value: id
    }));
  }, [authors]);
  const storiesSearchOptions = Object(external_wp_element_["useMemo"])(() => {
    return stories.filter(({
      title
    }) => {
      var _title$rendered, _title$rendered$trim;

      return Boolean(title === null || title === void 0 ? void 0 : (_title$rendered = title.rendered) === null || _title$rendered === void 0 ? void 0 : (_title$rendered$trim = _title$rendered.trim()) === null || _title$rendered$trim === void 0 ? void 0 : _title$rendered$trim.length);
    }).map(({
      id,
      title
    }) => ({
      label: title.rendered,
      value: id
    }));
  }, [stories]);
  const selectedStoryIds = Object(external_wp_element_["useMemo"])(() => selectedStories.map(story => story.id), [selectedStories]);
  const addSelectedStory = Object(external_wp_element_["useCallback"])(newStory => {
    if (selectedStoryIds.includes(newStory.id)) {
      return;
    } // Special case for single story embeds to always change selection.


    if (1 === maxNumOfStories) {
      setSelectedStories([newStory]);
      return;
    }

    if (selectedStories.length >= maxNumOfStories) {
      return;
    }

    setSelectedStories([...selectedStories, newStory]);
  }, [setSelectedStories, selectedStories, selectedStoryIds, maxNumOfStories]);
  const removeSelectedStory = Object(external_wp_element_["useCallback"])(story => {
    setSelectedStories(selectedStories.filter(_story => _story.id !== story.id));
  }, [selectedStories, setSelectedStories]);
  return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-picker-filter"
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-picker-filter__search-container"
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-picker-filter__search-inner"
  }, /*#__PURE__*/external_React_default.a.createElement(KeywordSearch, {
    label: Object(external_wp_i18n_["__"])('Search Stories', 'web-stories'),
    options: storiesSearchOptions,
    onFilterValueChange: debouncedTypeaheadChange,
    onChange: debouncedTypeaheadChange,
    value: searchKeyword
  })), /*#__PURE__*/external_React_default.a.createElement(AuthorSearch, {
    label: Object(external_wp_i18n_["__"])('Search by Author', 'web-stories'),
    options: authorSearchOptions,
    onFilterValueChange: debouncedTypeaheadAuthorChange,
    onChange: handleAuthorChange,
    value: currentAuthor === null || currentAuthor === void 0 ? void 0 : currentAuthor.id
  }), /*#__PURE__*/external_React_default.a.createElement("div", null, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["SelectControl"], {
    label: Object(external_wp_i18n_["__"])('Sort', 'web-stories'),
    options: SORT_OPTIONS,
    value: orderBy,
    onChange: onSortChange
  })))), !stories.length && searchKeyword && /*#__PURE__*/external_React_default.a.createElement("p", null, Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: search term. */
  Object(external_wp_i18n_["__"])(`Sorry, we couldn't find any results matching "%s"`, 'web-stories'), searchKeyword)), !stories.length && !searchKeyword && /*#__PURE__*/external_React_default.a.createElement("p", null, Object(external_wp_i18n_["__"])(`Sorry, we couldn't find any results`, 'web-stories')), stories.length >= 1 && /*#__PURE__*/external_React_default.a.createElement("div", {
    role: "list",
    "aria-label": Object(external_wp_i18n_["__"])('Viewing Stories', 'web-stories'),
    className: "web-stories-story-picker-filter__grid"
  }, stories.map(story => {
    const isSelected = selectedStoryIds.includes(story.id);
    return /*#__PURE__*/external_React_default.a.createElement("div", {
      key: story.id,
      role: "listitem",
      className: "web-stories-story-picker-filter__grid_item"
    }, /*#__PURE__*/external_React_default.a.createElement(storyPreview, {
      story: story,
      isSelected: isSelected,
      addSelectedStory: addSelectedStory,
      removeSelectedStory: removeSelectedStory
    }));
  })), /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-picker-filter__load_more"
  }, isLoading && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Spinner"], null), !hasAllStories && stories.length > 0 && !isLoading && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    variant: "primary",
    className: "is-primary",
    onClick: onLoadMoreClick
  }, Object(external_wp_i18n_["__"])('Load More', 'web-stories'))));
}

/* harmony default export */ var selectStories = (SelectStories);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(18);

// CONCATENATED MODULE: ./packages/stories-block/src/block/hooks/useThrottle.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Throttles a function with Lodash's `throttle`. A new throttled function will
 * be returned and any scheduled calls cancelled if any of the arguments change,
 * including the function to throttle, so please wrap functions created on
 * render in components in `useCallback`.
 *
 * Replacement for the same hook from the `@wordpress/compose` package which is
 * not available in WordPress 5.5.
 *
 * @todo Remove once WordPress 5.5 is no longer required.
 * @see https://docs-lodash.com/v4/throttle/
 * @see https://github.com/WordPress/gutenberg/blob/4fdffac83552063c56a71f5c5dd96359c2a580be/packages/compose/src/hooks/use-throttle/index.js
 * @param {Function}                             fn        The function to throttle.
 * @param {number}                            [wait]    The number of milliseconds to throttle invocations to.
 * @param {import('lodash').ThrottleSettings} [options] The options object. See linked documentation for details.
 * @return {import('lodash').Cancelable} Throttled function.
 */

function useThrottle(fn, wait, options) {
  const throttled = Object(external_wp_element_["useMemo"])(() => Object(external_lodash_["throttle"])(fn, wait, options), [fn, wait, options]);
  Object(external_wp_element_["useEffect"])(() => () => throttled.cancel(), [throttled]);
  return throttled;
}
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storyPicker/sortStories.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




function SortStories({
  selectedStories,
  setSelectedStories
}) {
  const [droppingToIndex, setDroppingToIndex] = Object(external_wp_element_["useState"])();
  const [draggedElementId, setDraggedElementId] = Object(external_wp_element_["useState"])();
  const rearrangeStories = Object(external_wp_element_["useCallback"])((oldIndex, newIndex) => {
    const newList = selectedStories.map(story => story.id);
    newList.splice(newIndex, 0, newList.splice(oldIndex, 1).pop());
    setSelectedStories(newList.map(storyId => {
      return selectedStories.find(story => story.id === storyId);
    }));
  }, [selectedStories, setSelectedStories]);
  const throttledOnDragOver = useThrottle((event, currentTarget) => {
    event.preventDefault();
    currentTarget.classList.add('web-stories-story-picker-show-drag-inserter');
    const targetElementRect = currentTarget.getBoundingClientRect();
    const isDraggingOnRightSide = Math.abs(event.clientX - targetElementRect.x) > Math.abs(event.clientX - (targetElementRect.x + targetElementRect.width));

    if (isDraggingOnRightSide) {
      currentTarget.classList.add('web-stories-story-picker-show-drag-inserter-right');
    } else {
      currentTarget.classList.remove('web-stories-story-picker-show-drag-inserter-right');
    }

    const dropIndex = Number(currentTarget.children[0].dataset.order);
    setDroppingToIndex(dropIndex);
  });
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    role: "list",
    "aria-label": Object(external_wp_i18n_["__"])('Sorting Stories', 'web-stories'),
    className: "web-stories-story-picker-filter__grid"
  }, selectedStories.map((story, index) => {
    return /*#__PURE__*/external_React_default.a.createElement("div", {
      key: story.id,
      onDragOver: event => {
        // `currentTarget` is only available while the event is being
        // handled, so get it now and pass it to the throttled function.
        // https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
        throttledOnDragOver(event, event.currentTarget);
      },
      onDragLeave: event => {
        event.preventDefault();
        throttledOnDragOver.cancel();
        const targetElement = event.target.closest('.droppable');
        targetElement.classList.remove('web-stories-story-picker-show-drag-inserter', 'web-stories-story-picker-show-drag-inserter-right');
      },
      onDrop: event => {
        event.preventDefault();
        event.stopPropagation();
        throttledOnDragOver.cancel(); // Update the list after drop

        if (draggedElementId) {
          const oldIndex = selectedStories.findIndex(storyItem => storyItem.id === draggedElementId);
          rearrangeStories(oldIndex, droppingToIndex);
        }

        const targetElement = event.target.closest('.droppable');
        targetElement.classList.remove('web-stories-story-picker-show-drag-inserter', 'web-stories-story-picker-show-drag-inserter-right');
      },
      className: "droppable"
    }, /*#__PURE__*/external_React_default.a.createElement("div", {
      "data-order": index,
      id: `draggable-story-${story.id}`
    }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Draggable"], {
      elementId: `draggable-story-${story.id}`
    }, ({
      onDraggableStart,
      onDraggableEnd
    }) => {
      const handleOnDragStart = event => {
        setDraggedElementId(story.id);
        onDraggableStart(event);
      };

      const handleOnDragEnd = event => {
        onDraggableEnd(event);
      };

      return /*#__PURE__*/external_React_default.a.createElement("div", {
        key: story.id,
        role: "listitem",
        className: "web-stories-story-picker-filter__grid_item",
        onDragStart: handleOnDragStart,
        onDragEnd: handleOnDragEnd,
        "data-order": index,
        draggable: true
      }, /*#__PURE__*/external_React_default.a.createElement(storyPreview, {
        story: story
      }));
    })));
  }));
}

/* harmony default export */ var sortStories = (SortStories);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storyPicker/storyPicker.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const {
  config: {
    api: {
      stories: storiesApi
    }
  }
} = window.webStoriesBlockSettings;

function StoryPicker({
  selectedStories,
  setSelectedStories,
  closeStoryPicker,
  isSortingStories = false,
  setIsSortingStories = () => {},
  maxNumOfStories
}) {
  const {
    createErrorNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const [localSelectedStories, setLocalSelectedStories] = Object(external_wp_element_["useState"])(selectedStories);
  const [isFetchingForFirstTime, setIsFetchingForFirstTime] = Object(external_wp_element_["useState"])(true);
  const [loadingState, setLoadingState] = Object(external_wp_element_["useState"])('idle');
  const [stories, setStories] = Object(external_wp_element_["useState"])([]);
  const [hasAllStories, setHasAllStories] = Object(external_wp_element_["useState"])([]);
  const saveChanges = Object(external_wp_element_["useCallback"])(() => {
    closeStoryPicker();
    setSelectedStories(localSelectedStories);
  }, [closeStoryPicker, setSelectedStories, localSelectedStories]);
  const fetchStories = Object(external_wp_element_["useCallback"])(async ({
    orderby = 'modified',
    order = 'desc',
    search = undefined,
    author = undefined,
    page = 1
  } = {}) => {
    const query = {
      _embed: 'author,wp:featuredmedia',
      context: 'edit',
      _web_stories_envelope: true,
      search,
      author,
      page,
      per_page: 10,
      orderby,
      order,
      status: 'publish'
    };

    try {
      var _response$headers;

      setLoadingState('loading');
      const response = await external_wp_apiFetch_default()({
        path: Object(external_wp_url_["addQueryArgs"])(storiesApi, query)
      });
      const totalPages = Number(response === null || response === void 0 ? void 0 : (_response$headers = response.headers) === null || _response$headers === void 0 ? void 0 : _response$headers['X-WP-TotalPages']);
      setHasAllStories(page === totalPages);
      setStories(existingStories => page === 1 ? response.body : [...existingStories, ...response.body]);
    } catch (err) {
      setLoadingState('error');
      createErrorNotice(Object(external_wp_i18n_["__"])('Unable to load stories', 'web-stories'), {
        type: 'snackbar'
      });
    } finally {
      setLoadingState('idle');
      setIsFetchingForFirstTime(false);
    }
  }, [createErrorNotice]);
  Object(external_wp_element_["useEffect"])(() => {
    if (isFetchingForFirstTime) {
      fetchStories();
    }
  }, [isFetchingForFirstTime, fetchStories]);
  const title = maxNumOfStories === 1 ? Object(external_wp_i18n_["__"])('Selected Story', 'web-stories') : Object(external_wp_i18n_["__"])('Selected Stories', 'web-stories');
  return /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Modal"], {
    title: title,
    onRequestClose: closeStoryPicker,
    shouldCloseOnClickOutside: false,
    className: "web-stories-story-picker-modal"
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-picker-modal__content"
  }, isFetchingForFirstTime ? /*#__PURE__*/external_React_default.a.createElement(loaderContainer["a" /* default */], null, Object(external_wp_i18n_["__"])('Loading Stories…', 'web-stories')) : isSortingStories ? /*#__PURE__*/external_React_default.a.createElement(sortStories, {
    selectedStories: localSelectedStories,
    setSelectedStories: setLocalSelectedStories
  }) : /*#__PURE__*/external_React_default.a.createElement(selectStories, {
    stories: stories,
    selectedStories: localSelectedStories,
    setSelectedStories: setLocalSelectedStories,
    hasAllStories: hasAllStories,
    fetchStories: fetchStories,
    maxNumOfStories: maxNumOfStories,
    isLoading: loadingState === 'loading'
  })), /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-picker-modal__footer"
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-picker-modal__footer--left"
  }, !isSortingStories && !isFetchingForFirstTime && maxNumOfStories > 1 && /*#__PURE__*/external_React_default.a.createElement("p", null, Object(external_wp_i18n_["sprintf"])(
  /* translators: %1$d: Number of selected stories, %2$d: Maximum allowed stories */
  Object(external_wp_i18n_["_n"])('%1$d of %2$d story selected', '%1$d of %2$d stories selected', maxNumOfStories, 'web-stories'), localSelectedStories.length, maxNumOfStories))), /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-story-picker-modal__footer--right"
  }, maxNumOfStories > 1 && (isSortingStories ? /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    onClick: () => setIsSortingStories(false)
  }, Object(external_wp_i18n_["__"])('Select Stories', 'web-stories')) : /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    onClick: () => setIsSortingStories(true),
    disabled: localSelectedStories.length < 2
  }, Object(external_wp_i18n_["__"])('Rearrange Stories', 'web-stories'))), /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    isPrimary: true,
    disabled: !localSelectedStories.length,
    onClick: saveChanges
  }, Object(external_wp_i18n_["__"])('Update', 'web-stories')))));
}

/* harmony default export */ var storyPicker = __webpack_exports__["a"] = (StoryPicker);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/

/* global define */

(function (factory) {
   true
    ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    : undefined
})(function () {
  ('use strict') // eslint-disable-line no-unused-expressions

  /* globals window:true */
  var _window = typeof window !== 'undefined' ? window : this

  var Glider = (_window.Glider = function (element, settings) {
    var _ = this

    if (element._glider) return element._glider

    _.ele = element
    _.ele.classList.add('glider')

    // expose glider object to its DOM element
    _.ele._glider = _

    // merge user setting with defaults
    _.opt = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesToShow: 1,
        resizeLock: true,
        duration: 0.5,
        // easeInQuad
        easing: function (x, t, b, c, d) {
          return c * (t /= d) * t + b
        }
      },
      settings
    )

    // set defaults
    _.animate_id = _.page = _.slide = 0
    _.arrows = {}

    // preserve original options to
    // extend breakpoint settings
    _._opt = _.opt

    if (_.opt.skipTrack) {
      // first and only child is the track
      _.track = _.ele.children[0]
    } else {
      // create track and wrap slides
      _.track = document.createElement('div')
      _.ele.appendChild(_.track)
      while (_.ele.children.length !== 1) {
        _.track.appendChild(_.ele.children[0])
      }
    }

    _.track.classList.add('glider-track')

    // start glider
    _.init()

    // set events
    _.resize = _.init.bind(_, true)
    _.event(_.ele, 'add', {
      scroll: _.updateControls.bind(_)
    })
    _.event(_window, 'add', {
      resize: _.resize
    })
  })

  var gliderPrototype = Glider.prototype
  gliderPrototype.init = function (refresh, paging) {
    var _ = this

    var width = 0

    var height = 0

    _.slides = _.track.children;

    [].forEach.call(_.slides, function (_, i) {
      _.classList.add('glider-slide')
      _.setAttribute('data-gslide', i)
    })

    _.containerWidth = _.ele.clientWidth

    var breakpointChanged = _.settingsBreakpoint()
    if (!paging) paging = breakpointChanged

    if (
      _.opt.slidesToShow === 'auto' ||
      typeof _.opt._autoSlide !== 'undefined'
    ) {
      var slideCount = _.containerWidth / _.opt.itemWidth

      _.opt._autoSlide = _.opt.slidesToShow = _.opt.exactWidth
        ? slideCount
        : Math.max(1, Math.floor(slideCount))
    }
    if (_.opt.slidesToScroll === 'auto') {
      _.opt.slidesToScroll = Math.floor(_.opt.slidesToShow)
    }

    _.itemWidth = _.opt.exactWidth
      ? _.opt.itemWidth
      : _.containerWidth / _.opt.slidesToShow;

    // set slide dimensions
    [].forEach.call(_.slides, function (__) {
      __.style.height = 'auto'
      __.style.width = _.itemWidth + 'px'
      width += _.itemWidth
      height = Math.max(__.offsetHeight, height)
    })

    _.track.style.width = width + 'px'
    _.trackWidth = width
    _.isDrag = false
    _.preventClick = false

    _.opt.resizeLock && _.scrollTo(_.slide * _.itemWidth, 0)

    if (breakpointChanged || paging) {
      _.bindArrows()
      _.buildDots()
      _.bindDrag()
    }

    _.updateControls()

    _.emit(refresh ? 'refresh' : 'loaded')
  }

  gliderPrototype.bindDrag = function () {
    var _ = this
    _.mouse = _.mouse || _.handleMouse.bind(_)

    var mouseup = function () {
      _.mouseDown = undefined
      _.ele.classList.remove('drag')
      if (_.isDrag) {
        _.preventClick = true
      }
      _.isDrag = false
    }

    var events = {
      mouseup: mouseup,
      mouseleave: mouseup,
      mousedown: function (e) {
        e.preventDefault()
        e.stopPropagation()
        _.mouseDown = e.clientX
        _.ele.classList.add('drag')
      },
      mousemove: _.mouse,
      click: function (e) {
        if (_.preventClick) {
          e.preventDefault()
          e.stopPropagation()
        }
        _.preventClick = false
      }
    }

    _.ele.classList.toggle('draggable', _.opt.draggable === true)
    _.event(_.ele, 'remove', events)
    if (_.opt.draggable) _.event(_.ele, 'add', events)
  }

  gliderPrototype.buildDots = function () {
    var _ = this

    if (!_.opt.dots) {
      if (_.dots) _.dots.innerHTML = ''
      return
    }

    if (typeof _.opt.dots === 'string') {
      _.dots = document.querySelector(_.opt.dots)
    } else _.dots = _.opt.dots
    if (!_.dots) return

    _.dots.innerHTML = ''
    _.dots.classList.add('glider-dots')

    for (var i = 0; i < Math.ceil(_.slides.length / _.opt.slidesToShow); ++i) {
      var dot = document.createElement('button')
      dot.dataset.index = i
      dot.setAttribute('aria-label', 'Page ' + (i + 1))
      dot.setAttribute('role', 'tab')
      dot.className = 'glider-dot ' + (i ? '' : 'active')
      _.event(dot, 'add', {
        click: _.scrollItem.bind(_, i, true)
      })
      _.dots.appendChild(dot)
    }
  }

  gliderPrototype.bindArrows = function () {
    var _ = this
    if (!_.opt.arrows) {
      Object.keys(_.arrows).forEach(function (direction) {
        var element = _.arrows[direction]
        _.event(element, 'remove', { click: element._func })
      })
      return
    }
    ['prev', 'next'].forEach(function (direction) {
      var arrow = _.opt.arrows[direction]
      if (arrow) {
        if (typeof arrow === 'string') arrow = document.querySelector(arrow)
        if (arrow) {
          arrow._func = arrow._func || _.scrollItem.bind(_, direction)
          _.event(arrow, 'remove', {
            click: arrow._func
          })
          _.event(arrow, 'add', {
            click: arrow._func
          })
          _.arrows[direction] = arrow
        }
      }
    })
  }

  gliderPrototype.updateControls = function (event) {
    var _ = this

    if (event && !_.opt.scrollPropagate) {
      event.stopPropagation()
    }

    var disableArrows = _.containerWidth >= _.trackWidth

    if (!_.opt.rewind) {
      if (_.arrows.prev) {
        _.arrows.prev.classList.toggle(
          'disabled',
          _.ele.scrollLeft <= 0 || disableArrows
        )
        _.arrows.prev.classList.contains('disabled')
          ? _.arrows.prev.setAttribute('aria-disabled', true)
          : _.arrows.prev.setAttribute('aria-disabled', false)
      }
      if (_.arrows.next) {
        _.arrows.next.classList.toggle(
          'disabled',
          Math.ceil(_.ele.scrollLeft + _.containerWidth) >=
            Math.floor(_.trackWidth) || disableArrows
        )
        _.arrows.next.classList.contains('disabled')
          ? _.arrows.next.setAttribute('aria-disabled', true)
          : _.arrows.next.setAttribute('aria-disabled', false)
      }
    }

    _.slide = Math.round(_.ele.scrollLeft / _.itemWidth)
    _.page = Math.round(_.ele.scrollLeft / _.containerWidth)

    var middle = _.slide + Math.floor(Math.floor(_.opt.slidesToShow) / 2)

    var extraMiddle = Math.floor(_.opt.slidesToShow) % 2 ? 0 : middle + 1
    if (Math.floor(_.opt.slidesToShow) === 1) {
      extraMiddle = 0
    }

    // the last page may be less than one half of a normal page width so
    // the page is rounded down. when at the end, force the page to turn
    if (_.ele.scrollLeft + _.containerWidth >= Math.floor(_.trackWidth)) {
      _.page = _.dots ? _.dots.children.length - 1 : 0
    }

    [].forEach.call(_.slides, function (slide, index) {
      var slideClasses = slide.classList

      var wasVisible = slideClasses.contains('visible')

      var start = _.ele.scrollLeft

      var end = _.ele.scrollLeft + _.containerWidth

      var itemStart = _.itemWidth * index

      var itemEnd = itemStart + _.itemWidth;

      [].forEach.call(slideClasses, function (className) {
        /^left|right/.test(className) && slideClasses.remove(className)
      })
      slideClasses.toggle('active', _.slide === index)
      if (middle === index || (extraMiddle && extraMiddle === index)) {
        slideClasses.add('center')
      } else {
        slideClasses.remove('center')
        slideClasses.add(
          [
            index < middle ? 'left' : 'right',
            Math.abs(index - (index < middle ? middle : extraMiddle || middle))
          ].join('-')
        )
      }

      var isVisible =
        Math.ceil(itemStart) >= Math.floor(start) &&
        Math.floor(itemEnd) <= Math.ceil(end)
      slideClasses.toggle('visible', isVisible)
      if (isVisible !== wasVisible) {
        _.emit('slide-' + (isVisible ? 'visible' : 'hidden'), {
          slide: index
        })
      }
    })
    if (_.dots) {
      [].forEach.call(_.dots.children, function (dot, index) {
        dot.classList.toggle('active', _.page === index)
      })
    }

    if (event && _.opt.scrollLock) {
      clearTimeout(_.scrollLock)
      _.scrollLock = setTimeout(function () {
        clearTimeout(_.scrollLock)
        // dont attempt to scroll less than a pixel fraction - causes looping
        if (Math.abs(_.ele.scrollLeft / _.itemWidth - _.slide) > 0.02) {
          if (!_.mouseDown) {
            // Only scroll if not at the end (#94)
            if (_.trackWidth > _.containerWidth + _.ele.scrollLeft) {
              _.scrollItem(_.getCurrentSlide())
            }
          }
        }
      }, _.opt.scrollLockDelay || 250)
    }
  }

  gliderPrototype.getCurrentSlide = function () {
    var _ = this
    return _.round(_.ele.scrollLeft / _.itemWidth)
  }

  gliderPrototype.scrollItem = function (slide, dot, e) {
    if (e) e.preventDefault()

    var _ = this

    var originalSlide = slide
    ++_.animate_id

    if (dot === true) {
      slide = slide * _.containerWidth
      slide = Math.round(slide / _.itemWidth) * _.itemWidth
    } else {
      if (typeof slide === 'string') {
        var backwards = slide === 'prev'

        // use precise location if fractional slides are on
        if (_.opt.slidesToScroll % 1 || _.opt.slidesToShow % 1) {
          slide = _.getCurrentSlide()
        } else {
          slide = _.slide
        }

        if (backwards) slide -= _.opt.slidesToScroll
        else slide += _.opt.slidesToScroll

        if (_.opt.rewind) {
          var scrollLeft = _.ele.scrollLeft
          slide =
            backwards && !scrollLeft
              ? _.slides.length
              : !backwards &&
                scrollLeft + _.containerWidth >= Math.floor(_.trackWidth)
                ? 0
                : slide
        }
      }

      slide = Math.max(Math.min(slide, _.slides.length), 0)

      _.slide = slide
      slide = _.itemWidth * slide
    }

    _.scrollTo(
      slide,
      _.opt.duration * Math.abs(_.ele.scrollLeft - slide),
      function () {
        _.updateControls()
        _.emit('animated', {
          value: originalSlide,
          type:
            typeof originalSlide === 'string' ? 'arrow' : dot ? 'dot' : 'slide'
        })
      }
    )

    return false
  }

  gliderPrototype.settingsBreakpoint = function () {
    var _ = this

    var resp = _._opt.responsive

    if (resp) {
      // Sort the breakpoints in mobile first order
      resp.sort(function (a, b) {
        return b.breakpoint - a.breakpoint
      })

      for (var i = 0; i < resp.length; ++i) {
        var size = resp[i]
        if (_window.innerWidth >= size.breakpoint) {
          if (_.breakpoint !== size.breakpoint) {
            _.opt = Object.assign({}, _._opt, size.settings)
            _.breakpoint = size.breakpoint
            return true
          }
          return false
        }
      }
    }
    // set back to defaults in case they were overriden
    var breakpointChanged = _.breakpoint !== 0
    _.opt = Object.assign({}, _._opt)
    _.breakpoint = 0
    return breakpointChanged
  }

  gliderPrototype.scrollTo = function (scrollTarget, scrollDuration, callback) {
    var _ = this

    var start = new Date().getTime()

    var animateIndex = _.animate_id

    var animate = function () {
      var now = new Date().getTime() - start
      _.ele.scrollLeft =
        _.ele.scrollLeft +
        (scrollTarget - _.ele.scrollLeft) *
          _.opt.easing(0, now, 0, 1, scrollDuration)
      if (now < scrollDuration && animateIndex === _.animate_id) {
        _window.requestAnimationFrame(animate)
      } else {
        _.ele.scrollLeft = scrollTarget
        callback && callback.call(_)
      }
    }

    _window.requestAnimationFrame(animate)
  }

  gliderPrototype.removeItem = function (index) {
    var _ = this

    if (_.slides.length) {
      _.track.removeChild(_.slides[index])
      _.refresh(true)
      _.emit('remove')
    }
  }

  gliderPrototype.addItem = function (ele) {
    var _ = this

    _.track.appendChild(ele)
    _.refresh(true)
    _.emit('add')
  }

  gliderPrototype.handleMouse = function (e) {
    var _ = this
    if (_.mouseDown) {
      _.isDrag = true
      _.ele.scrollLeft +=
        (_.mouseDown - e.clientX) * (_.opt.dragVelocity || 3.3)
      _.mouseDown = e.clientX
    }
  }

  // used to round to the nearest 0.XX fraction
  gliderPrototype.round = function (double) {
    var _ = this
    var step = _.opt.slidesToScroll % 1 || 1
    var inv = 1.0 / step
    return Math.round(double * inv) / inv
  }

  gliderPrototype.refresh = function (paging) {
    var _ = this
    _.init(true, paging)
  }

  gliderPrototype.setOption = function (opt, global) {
    var _ = this

    if (_.breakpoint && !global) {
      _._opt.responsive.forEach(function (v) {
        if (v.breakpoint === _.breakpoint) {
          v.settings = Object.assign({}, v.settings, opt)
        }
      })
    } else {
      _._opt = Object.assign({}, _._opt, opt)
    }

    _.breakpoint = 0
    _.settingsBreakpoint()
  }

  gliderPrototype.destroy = function () {
    var _ = this

    var replace = _.ele.cloneNode(true)

    var clear = function (ele) {
      ele.removeAttribute('style');
      [].forEach.call(ele.classList, function (className) {
        /^glider/.test(className) && ele.classList.remove(className)
      })
    }
    // remove track
    replace.children[0].outerHTML = replace.children[0].innerHTML
    clear(replace);
    [].forEach.call(replace.getElementsByTagName('*'), clear)
    _.ele.parentNode.replaceChild(replace, _.ele)
    _.event(_window, 'remove', {
      resize: _.resize
    })
    _.emit('destroy')
  }

  gliderPrototype.emit = function (name, arg) {
    var _ = this

    var e = new _window.CustomEvent('glider-' + name, {
      bubbles: !_.opt.eventPropagate,
      detail: arg
    })
    _.ele.dispatchEvent(e)
  }

  gliderPrototype.event = function (ele, type, args) {
    var eventHandler = ele[type + 'EventListener'].bind(ele)
    Object.keys(args).forEach(function (k) {
      eventHandler(k, args[k])
    })
  }

  return Glider
})


/***/ }),
/* 25 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






const POSTER_ALLOWED_MEDIA_TYPES = ['image'];

const EmbedControls = props => {
  const {
    switchBackToURLInput,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    poster,
    title,
    setAttributes
  } = props;
  const instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["useInstanceId"])(EmbedControls, 'web-stories-embed');
  const posterDescription = `web-stories-embed-block__poster-image-description-${instanceId}`;
  const posterImageButton = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createRef"])();
  const onSelectPoster = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(image => {
    setAttributes({
      poster: image.url
    });
  }, [setAttributes]);
  const onRemovePoster = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    setAttributes({
      poster: ''
    }); // Move focus back to the Media Upload button.

    posterImageButton.current.focus();
  }, [setAttributes, posterImageButton]);
  const hasPoster = Boolean(poster);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroup"], null, _wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarButton"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarButton"], {
    onClick: switchBackToURLInput
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Replace', 'web-stories')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "components-toolbar__control",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Replace', 'web-stories'),
    onClick: switchBackToURLInput
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Embed Settings', 'web-stories')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    type: "text",
    className: "web-stories-embed-title-control",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title', 'web-stories'),
    value: title || '',
    onChange: value => setAttributes({
      title: value
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"].VisualLabel, {
    className: "web-stories-embed-poster-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Poster image', 'web-stories')), hasPoster && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: poster,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Select poster image', 'web-stories'),
    onSelect: onSelectPoster,
    allowedTypes: POSTER_ALLOWED_MEDIA_TYPES,
    render: ({
      open
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      isPrimary: true,
      onClick: open,
      ref: posterImageButton,
      "aria-describedby": posterDescription
    }, !hasPoster ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Select', 'web-stories') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Replace', 'web-stories'))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: posterDescription,
    hidden: true
  }, hasPoster ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["sprintf"])(
  /* translators: %s: poster image URL. */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('The current poster image url is %s', 'web-stories'), poster) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('There is no poster image currently selected', 'web-stories')), hasPoster && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onRemovePoster,
    isTertiary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Remove', 'web-stories'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    className: "web-stories-embed-size-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"].VisualLabel, null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Story dimensions', 'web-stories')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "web-stories-embed-size-control__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    type: "number",
    className: "web-stories-embed-size-control__width",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Width', 'web-stories'),
    value: width || '',
    min: minWidth,
    max: maxWidth,
    onChange: value => setAttributes({
      width: parseInt(value)
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    type: "number",
    className: "web-stories-embed-size-control__height",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Height', 'web-stories'),
    value: height || '',
    min: minHeight,
    max: maxHeight,
    onChange: value => setAttributes({
      height: parseInt(value)
    })
  })))))));
};

/* harmony default export */ __webpack_exports__["a"] = (EmbedControls);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/stories-block/src/block/block-types/single-story/storyPlayer.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function StoryPlayer({
  url,
  title,
  poster,
  width,
  height
}, ref) {
  return /*#__PURE__*/external_React_default.a.createElement("amp-story-player", {
    ref: ref,
    style: {
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined
    },
    "data-testid": "amp-story-player"
  }, /*#__PURE__*/external_React_default.a.createElement("a", {
    href: url
  }, poster ? /*#__PURE__*/external_React_default.a.createElement("img", {
    alt: title,
    src: poster,
    width: width,
    height: height,
    "data-amp-story-player-poster-img": true
  }) : title));
}

const StoryPlayerWithRef = Object(external_wp_element_["forwardRef"])(StoryPlayer);
/* harmony default export */ var storyPlayer = (StoryPlayerWithRef);
// CONCATENATED MODULE: ./packages/stories-block/src/block/block-types/single-story/embedPreview.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function EmbedPreview({
  url,
  title,
  poster,
  isSelected,
  width,
  height
}, ref) {
  const [interactive, setInteractive] = Object(external_wp_element_["useState"])(false);
  Object(external_wp_element_["useEffect"])(() => {
    if (!isSelected && interactive) {
      setInteractive(false);
    }
  }, [isSelected, interactive, setInteractive]);
  const hideOverlay = Object(external_wp_element_["useCallback"])(() => setInteractive(true), [setInteractive]); // Disabled because the overlay div doesn't actually have a role or functionality
  // as far as the user is concerned. We're just catching the first click so that
  // the block can be selected without interacting with the embed preview that the overlay covers.

  /* eslint-disable jsx-a11y/no-static-element-interactions */

  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-embed-preview wp-block-embed__wrapper",
    style: {
      '--aspect-ratio': 0 !== width ? height / width : 1,
      '--width': `${width}px`,
      '--height': `${height}px`
    }
  }, /*#__PURE__*/external_React_default.a.createElement(storyPlayer, {
    url: url,
    title: title,
    poster: poster,
    ref: ref,
    onFocus: hideOverlay
  }), !interactive && /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-embed-preview-overlay",
    "data-testid": "embed-preview-overlay",
    onMouseUp: hideOverlay
  }));
  /* eslint-enable jsx-a11y/no-static-element-interactions */
}

const EmbedPreviewWithRef = Object(external_wp_element_["forwardRef"])(EmbedPreview);
/* harmony default export */ var embedPreview = __webpack_exports__["a"] = (EmbedPreviewWithRef);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web_stories_wp_tracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var _components_storyPicker_fetchSelectedStories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20);
/* harmony import */ var _embedControls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26);
/* harmony import */ var _embedLoading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30);
/* harmony import */ var _embedPlaceholder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);
/* harmony import */ var _embedPreview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27);
/* harmony import */ var _edit_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35);


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint complexity: ["error", { "max": 21 }] */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */








const MIN_SIZE = 20;

function StoryEmbedEdit({
  attributes,
  setAttributes,
  className,
  isSelected,
  _isResizable
}) {
  const {
    url: outerURL = '',
    width = 360,
    height = 600,
    align = 'none',
    poster,
    title,
    stories = []
  } = attributes;
  const [editingURL, setEditingURL] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [localURL, setLocalURL] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(outerURL);
  const [isFetchingData, setIsFetchingData] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [isFetching, setIsFetching] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [storyData, setStoryData] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])({});
  const [cannotEmbed, setCannotEmbed] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [selectedStoryIds, setSelectedStoryIds] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(stories);
  const [selectedStories, _setSelectedStories] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const showLoadingIndicator = isFetchingData;
  const showPlaceholder = !localURL || !outerURL || editingURL || cannotEmbed;
  const isResizable = _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["useViewportMatch"] ? _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["useViewportMatch"]('medium') : _isResizable;
  const ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (attributes.stories.toString() !== selectedStoryIds.toString()) {
      setAttributes({
        stories: selectedStoryIds
      });
    }
  }, [attributes.stories, setAttributes, selectedStoryIds]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (selectedStoryIds.length && !selectedStories.length) {
      setIsFetching(true);
    }
  }, [selectedStoryIds, selectedStories, setIsFetching]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setLocalURL(outerURL);
    Object(_web_stories_wp_tracking__WEBPACK_IMPORTED_MODULE_2__[/* trackEvent */ "b"])('story_embedded');
  }, [outerURL]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    Object(_web_stories_wp_tracking__WEBPACK_IMPORTED_MODULE_2__[/* trackEvent */ "b"])('story_poster_changed');
  }, [poster]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (ref.current && global.AmpStoryPlayer) {
      const player = new global.AmpStoryPlayer(global, ref.current);
      player.load();
    }
  }, [showLoadingIndicator, showPlaceholder, isResizable]);
  const fetchStoryData = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(async url => {
    if (!url) {
      return;
    }

    try {
      setIsFetchingData(true); // Normalize input URL.

      const urlToEmbed = encodeURIComponent(new URL(url).toString());
      const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: `web-stories/v1/embed?url=${urlToEmbed}`
      });
      setCannotEmbed(!(typeof (data === null || data === void 0 ? void 0 : data.title) === 'string'));
      setStoryData(data);
      setAttributes({
        url: url
      });
    } catch (err) {
      // Only care about errors from apiFetch
      if (!(err instanceof TypeError)) {
        setStoryData(err);
      }

      setCannotEmbed(true);
    } finally {
      setIsFetchingData(false);
    }
  }, [setAttributes]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (storyData !== null && storyData !== void 0 && storyData.title || storyData !== null && storyData !== void 0 && storyData.poster) {
      setAttributes({
        title: storyData === null || storyData === void 0 ? void 0 : storyData.title,
        poster: storyData === null || storyData === void 0 ? void 0 : storyData.poster
      });
    }
  }, [outerURL, setAttributes, storyData === null || storyData === void 0 ? void 0 : storyData.title, storyData === null || storyData === void 0 ? void 0 : storyData.poster]);
  const setSelectedStories = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(newStories => {
    var _newStory$title, _newStory$_embedded, _newStory$_embedded$w, _newStory$_embedded$w2;

    _setSelectedStories(newStories);

    setSelectedStoryIds(newStories.map(story => story.id));
    const newStory = newStories === null || newStories === void 0 ? void 0 : newStories[0];
    const link = newStory === null || newStory === void 0 ? void 0 : newStory.link;
    const data = {
      title: newStory === null || newStory === void 0 ? void 0 : (_newStory$title = newStory.title) === null || _newStory$title === void 0 ? void 0 : _newStory$title.rendered,
      poster: newStory === null || newStory === void 0 ? void 0 : (_newStory$_embedded = newStory._embedded) === null || _newStory$_embedded === void 0 ? void 0 : (_newStory$_embedded$w = _newStory$_embedded['wp:featuredmedia']) === null || _newStory$_embedded$w === void 0 ? void 0 : (_newStory$_embedded$w2 = _newStory$_embedded$w[0]) === null || _newStory$_embedded$w2 === void 0 ? void 0 : _newStory$_embedded$w2.source_url
    };
    setStoryData(data);
    setLocalURL(link);
    setEditingURL(false);
    setCannotEmbed(false);
    setAttributes({
      url: link
    });
  }, [_setSelectedStories, setAttributes]);
  const onSubmit = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(url => {
    _setSelectedStories([]);

    setSelectedStoryIds([]);
    setEditingURL(false);
    setCannotEmbed(false);
    setLocalURL(url);

    if (url !== outerURL) {
      fetchStoryData(url);
    }
  }, [outerURL, fetchStoryData]);
  const switchBackToURLInput = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(() => {
    setEditingURL(true);
  }, []);
  const {
    isRTL,
    maxWidth
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["useSelect"])(select => {
    const {
      getSettings
    } = select('core/block-editor');
    const settings = getSettings();
    return {
      isRTL: settings.isRTL,
      maxWidth: settings.maxWidth
    };
  }, []);
  const {
    toggleSelection
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])('core/block-editor');

  if (showLoadingIndicator) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_embedLoading__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null);
  }

  const onResizeStart = () => toggleSelection(false);

  const onResizeStop = () => toggleSelection(true);

  const label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Single Story', 'web-stories');

  if (showPlaceholder) {
    if (isFetching) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_storyPicker_fetchSelectedStories__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__[/* BlockIcon */ "b"], null),
        label: label,
        selectedStoryIds: selectedStoryIds,
        setSelectedStories: _setSelectedStories,
        setIsFetching: setIsFetching
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_embedPlaceholder__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__[/* BlockIcon */ "b"], null),
      label: label,
      value: localURL,
      onSubmit: onSubmit,
      cannotEmbed: cannotEmbed,
      errorMessage: storyData === null || storyData === void 0 ? void 0 : storyData.message,
      selectedStories: selectedStories,
      setSelectedStories: setSelectedStories
    });
  }

  const ratio = width / height;
  const minWidth = width < height ? MIN_SIZE : MIN_SIZE * ratio;
  const minHeight = height < width ? MIN_SIZE : MIN_SIZE / ratio;

  if (!isResizable) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_embedControls__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      switchBackToURLInput: switchBackToURLInput,
      poster: poster,
      title: title,
      setAttributes: setAttributes,
      width: width,
      height: height,
      minWidth: Math.ceil(minWidth),
      maxWidth: Math.floor(maxWidth),
      minHeight: Math.floor(minHeight),
      maxHeight: Math.ceil(maxWidth / ratio)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `${className} web-stories-embed align${align}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_embedPreview__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
      url: outerURL,
      title: title,
      poster: poster,
      ref: ref,
      isSelected: isSelected,
      width: width,
      height: height
    })));
  }

  const showRightHandle = align === 'center' || align === 'none' || align === 'right' && isRTL || align === 'left' && !isRTL;
  const showLeftHandle = align === 'center' || align === 'left' && isRTL || align === 'right' && !isRTL;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_embedControls__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    switchBackToURLInput: switchBackToURLInput,
    poster: poster,
    title: title,
    setAttributes: setAttributes,
    width: width,
    height: height,
    minWidth: Math.ceil(minWidth),
    maxWidth: Math.floor(maxWidth),
    minHeight: Math.floor(minHeight),
    maxHeight: Math.ceil(maxWidth / ratio)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `${className} web-stories-embed align${align}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ResizableBox"], {
    className: isSelected ? 'show-resize-handle' : 'hide-resize-handle',
    size: {
      width,
      height
    },
    minWidth: minWidth,
    maxWidth: maxWidth,
    minHeight: minHeight,
    maxHeight: maxWidth / ratio,
    lockAspectRatio: true,
    enable: {
      top: false,
      right: showRightHandle,
      bottom: true,
      left: showLeftHandle
    },
    onResizeStart: onResizeStart,
    onResizeStop: (event, direction, elt, delta) => {
      onResizeStop();
      setAttributes({
        width: parseInt(width + delta.width),
        height: parseInt(height + delta.height)
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_embedPreview__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
    url: outerURL,
    title: title,
    poster: poster,
    ref: ref,
    isSelected: isSelected,
    width: width,
    height: height
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_7__["withViewportMatch"])({
  _isResizable: 'medium'
})(StoryEmbedEdit));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["viewport"]; }());

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */



const EmbedLoading = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "wp-block-web-stories-embed is-loading"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Embedding…', 'web-stories')));

/* harmony default export */ __webpack_exports__["a"] = (EmbedLoading);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: ./packages/stories-block/src/block/components/storyPicker/storyPicker.js + 5 modules
var storyPicker = __webpack_require__(22);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/keyboard-return.js


/**
 * WordPress dependencies
 */

const keyboardReturn = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"
}));
/* harmony default export */ var keyboard_return = (keyboardReturn);
//# sourceMappingURL=keyboard-return.js.map
// CONCATENATED MODULE: ./packages/stories-block/src/block/block-types/single-story/insertFromURLPopover.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Component to render url popover.
 *
 * @see https://github.com/WordPress/gutenberg/blob/adbe3eaae3d7f231953045c96ad67eb7a30369b7/packages/block-editor/src/components/media-placeholder/index.js#L31-L52
 * @param {Object} props Component props.
 * @param {string} props.url Value of form input.
 * @param {Function} props.onChange Callback from when url is changed.
 * @param {Function} props.onSubmit Callback when form is submitted.
 * @param {Function} props.onClose Callback when the dialog is closed.
 * @return {*} JSX markup for the editor.
 */

const InsertFromURLPopover = ({
  url,
  onChange,
  onSubmit,
  onClose
}) => /*#__PURE__*/external_React_default.a.createElement(external_wp_blockEditor_["URLPopover"], {
  onClose: onClose
}, /*#__PURE__*/external_React_default.a.createElement("form", {
  className: "block-editor-media-placeholder__url-input-form",
  "data-testid": "embed-placeholder-form",
  onSubmit: onSubmit
}, /*#__PURE__*/external_React_default.a.createElement("input", {
  className: "block-editor-media-placeholder__url-input-field",
  type: "url",
  "aria-label": Object(external_wp_i18n_["__"])('Story URL', 'web-stories'),
  placeholder: Object(external_wp_i18n_["__"])('Paste or type URL', 'web-stories'),
  onChange: onChange,
  value: url
}), /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
  className: "block-editor-media-placeholder__url-input-submit-button",
  icon: keyboard_return,
  label: Object(external_wp_i18n_["__"])('Embed', 'web-stories'),
  type: "submit"
})));

/* harmony default export */ var insertFromURLPopover = (InsertFromURLPopover);
// CONCATENATED MODULE: ./packages/stories-block/src/block/block-types/single-story/embedPlaceholder.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const EmbedPlaceholder = ({
  icon,
  label,
  value,
  onSubmit,
  cannotEmbed,
  errorMessage,
  selectedStories = [],
  setSelectedStories
}) => {
  const [url, setUrl] = Object(external_wp_element_["useState"])(value);
  const [isURLInputVisible, setIsURLInputVisible] = Object(external_wp_element_["useState"])(false);
  const [isStoryPickerOpen, setIsStoryPickerOpen] = Object(external_wp_element_["useState"])(false);

  const openStoryPicker = () => setIsStoryPickerOpen(true);

  const closeStoryPicker = Object(external_wp_element_["useCallback"])(() => {
    setIsStoryPickerOpen(false);
  }, []);

  const openURLInput = () => setIsURLInputVisible(true);

  const closeURLInput = () => setIsURLInputVisible(false);

  const onChangeUrl = event => {
    setUrl(event.target.value);
  };

  const onSubmitUrl = event => {
    event.preventDefault();
    closeURLInput();
    onSubmit(url);
  };

  const hasStories = selectedStories.length > 0;
  return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Placeholder"], {
    icon: /*#__PURE__*/external_React_default.a.createElement(external_wp_blockEditor_["BlockIcon"], {
      icon: icon,
      showColors: true
    }),
    label: label,
    className: "wp-block-web-stories-embed",
    instructions: Object(external_wp_i18n_["__"])('Select an existing story from your site, or add one with a URL.', 'web-stories')
  }, /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: openStoryPicker
  }, !hasStories ? Object(external_wp_i18n_["__"])('Select Story', 'web-stories') : Object(external_wp_i18n_["__"])('Replace Story', 'web-stories')), /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "block-editor-media-placeholder__url-input-container"
  }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    className: "block-editor-media-placeholder__button",
    onClick: openURLInput,
    isPressed: isURLInputVisible,
    variant: "tertiary"
  }, !hasStories && value ? Object(external_wp_i18n_["__"])('Replace URL', 'web-stories') : Object(external_wp_i18n_["__"])('Insert from URL', 'web-stories')), isURLInputVisible && /*#__PURE__*/external_React_default.a.createElement(insertFromURLPopover, {
    url: url,
    onChange: onChangeUrl,
    onSubmit: onSubmitUrl,
    onClose: closeURLInput
  }))), cannotEmbed && /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "components-placeholder__error"
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "components-placeholder__instructions"
  }, Object(external_wp_i18n_["__"])('Sorry, this content could not be embedded.', 'web-stories'), errorMessage && /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, ' ', Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: error message. */
  Object(external_wp_i18n_["__"])('Reason: %s.', 'web-stories'), errorMessage))))), isStoryPickerOpen && /*#__PURE__*/external_React_default.a.createElement(storyPicker["a" /* default */], {
    closeStoryPicker: closeStoryPicker,
    maxNumOfStories: 1,
    selectedStories: selectedStories,
    setSelectedStories: setSelectedStories
  }));
};

EmbedPlaceholder.defaultProps = {
  cannotEmbed: false
};
/* harmony default export */ var embedPlaceholder = __webpack_exports__["a"] = (EmbedPlaceholder);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(36);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(34);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/tracking/src/index.js + 11 modules
var src = __webpack_require__(17);

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__(16);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: ./packages/stories-block/src/block/icons.js + 11 modules
var icons = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);

// CONCATENATED MODULE: ./packages/stories-block/src/block/save.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * The block's save function (pure).
 *
 * Represents a cached copy of the block’s content to be shown in case
 * the plugin is disabled.
 *
 * The server-side 'render_callback' is used to override this on page load.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/
 * @param {Object} props Props.
 * @param {Object} props.attributes Block attributes.
 * @return {null|*} Rendered block.
 */

function save({
  attributes
}) {
  const {
    url,
    title,
    poster,
    width,
    height,
    align = 'none'
  } = attributes;

  if (!url || !title) {
    return null;
  }

  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: `wp-block-web-stories-embed align${align}`
  }, /*#__PURE__*/external_React_default.a.createElement("a", {
    href: url
  }, poster ? /*#__PURE__*/external_React_default.a.createElement("img", {
    alt: title,
    src: poster,
    width: width,
    height: height
  }) : title));
}

/* harmony default export */ var block_save = (save);
// CONCATENATED MODULE: ./packages/stories-block/src/block/deprecated.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const blockAttributes = {
  url: {
    type: 'string'
  },
  title: {
    type: 'string'
  },
  poster: {
    type: 'string'
  },
  width: {
    type: 'number',
    default: 360
  },
  height: {
    type: 'number',
    default: 600
  },
  align: {
    type: 'string',
    default: 'none'
  }
};
/**
 * The block's save function (pure).
 *
 * Represents a cached copy of the block’s content to be shown in case
 * the plugin is disabled.
 *
 * The server-side 'render_callback' is used to override this on page load.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/
 * @param {Object} props Props.
 * @param {Object} props.attributes Block attributes.
 * @return {null|*} Rendered block.
 */

function deprecated_save({
  attributes
}) {
  const {
    url,
    title,
    poster,
    width,
    height,
    align = 'none'
  } = attributes;

  if (!url || !title) {
    return null;
  }

  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: `wp-block-web-stories-embed align${align}`
  }, /*#__PURE__*/external_React_default.a.createElement("amp-story-player", {
    style: {
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined
    },
    "data-testid": "amp-story-player"
  }, /*#__PURE__*/external_React_default.a.createElement("a", {
    href: url,
    style: {
      ['--story-player-poster']: poster ? `url('${poster}')` : undefined
    }
  }, title)));
}

const v1 = {
  attributes: blockAttributes,
  save: deprecated_save
};
const v2 = {
  attributes: blockAttributes,

  migrate(attrs) {
    return { ...attrs,
      blockType: 'url',
      stories: [],
      viewType: '',
      numOfStories: 5,
      numOfColumns: 2,
      circleSize: 96,
      orderby: '',
      order: '',
      archiveLinkLabel: '',
      authors: [],
      fieldState: {}
    };
  },

  save: block_save,

  isEligible({
    url,
    blockType
  }) {
    return Boolean(!blockType && url && url.trim().length);
  }

}; // The deprecations in the array should be in reverse chronological order.
// This allows the block editor to attempt to apply the most recent and likely deprecations first,
// avoiding unnecessary and expensive processing.

const deprecated = [v2, v1];
/* harmony default export */ var block_deprecated = (deprecated);
// EXTERNAL MODULE: ./packages/stories-block/src/block/block-types/single-story/edit.js
var edit = __webpack_require__(28);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/stories-block/src/block/constants.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Block types
 */

const BLOCK_TYPE_LATEST_STORIES = 'latest-stories';
const BLOCK_TYPE_SELECTED_STORIES = 'selected-stories';
const BLOCK_TYPE_URL = 'url';
const BLOCK_TYPES = [{
  id: BLOCK_TYPE_LATEST_STORIES,
  label: Object(external_wp_i18n_["__"])('Latest Stories', 'web-stories'),
  description: Object(external_wp_i18n_["__"])('Embed latest web stories.', 'web-stories'),
  icon: icons["i" /* LATEST_STORIES_BLOCK_ICON */]
}, {
  id: BLOCK_TYPE_SELECTED_STORIES,
  label: Object(external_wp_i18n_["__"])('Selected Stories', 'web-stories'),
  description: Object(external_wp_i18n_["__"])('Manually select web stories.', 'web-stories'),
  icon: icons["l" /* SELECTED_STORIES_BLOCK_ICON */]
}, {
  id: BLOCK_TYPE_URL,
  label: Object(external_wp_i18n_["__"])('Single Story', 'web-stories'),
  description: Object(external_wp_i18n_["__"])('Embed a single story.', 'web-stories'),
  icon: icons["f" /* EMBED_STORY_BLOCK_ICON */]
}];
/**
 * Block controls icons.
 */

const GRID_VIEW_TYPE = 'grid';
const LIST_VIEW_TYPE = 'list';
const CIRCLES_VIEW_TYPE = 'circles';
const CAROUSEL_VIEW_TYPE = 'carousel';
const VIEW_TYPES = [{
  id: CAROUSEL_VIEW_TYPE,
  label: Object(external_wp_i18n_["__"])('Box Carousel', 'web-stories'),
  icon: icons["c" /* CAROUSEL_VIEW_TYPE_ICON */],
  panelIcon: icons["a" /* BOX_CAROUSEL_CONFIG_ICON */]
}, {
  id: CIRCLES_VIEW_TYPE,
  label: Object(external_wp_i18n_["__"])('Circle Carousel', 'web-stories'),
  icon: icons["d" /* CIRCLES_VIEW_TYPE_ICON */],
  panelIcon: icons["e" /* CIRCLE_CAROUSEL_CONFIG_ICON */]
}, {
  id: GRID_VIEW_TYPE,
  label: Object(external_wp_i18n_["__"])('Grid', 'web-stories'),
  icon: icons["h" /* GRID_VIEW_TYPE_ICON */],
  panelIcon: icons["g" /* GRID_VIEW_CONFIG_ICON */]
}, {
  id: LIST_VIEW_TYPE,
  label: Object(external_wp_i18n_["__"])('List', 'web-stories'),
  icon: icons["k" /* LIST_VIEW_TYPE_ICON */],
  panelIcon: icons["j" /* LIST_VIEW_CONFIG_ICON */]
}];
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/blockTypeSwitcher.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function BlockTypeSwitcher({
  selectedBlockType,
  setAttributes
}) {
  // Note: ToolbarGroup and ToolbarButton are only available in Gutenberg 7.0 or later,
  // so they do not exist in WP 5.3.
  const ToolbarComponent = external_wp_components_["ToolbarGroup"] ? external_wp_components_["ToolbarGroup"] : external_wp_components_["Toolbar"];
  return /*#__PURE__*/external_React_default.a.createElement(ToolbarComponent, null, external_wp_components_["ToolbarItem"] ? /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["ToolbarItem"], null, toolbarItemHTMLProps => /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["DropdownMenu"], {
    icon: "update",
    toggleProps: toolbarItemHTMLProps,
    label: Object(external_wp_i18n_["__"])('Change Type', 'web-stories'),
    controls: BLOCK_TYPES.filter(blockType => blockType.id !== selectedBlockType).map(blockType => {
      return {
        title: blockType.label,
        onClick: () => setAttributes({
          blockType: blockType.id
        })
      };
    })
  })) : /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["DropdownMenu"], {
    icon: "update",
    label: Object(external_wp_i18n_["__"])('Change Type', 'web-stories'),
    controls: BLOCK_TYPES.filter(blockType => blockType.id !== selectedBlockType).map(blockType => {
      return {
        title: blockType.label,
        onClick: () => setAttributes({
          blockType: blockType.id
        })
      };
    })
  }));
}

/* harmony default export */ var blockTypeSwitcher = (BlockTypeSwitcher);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storiesBlockControls.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * StoriesBlockControls props.
 *
 * @typedef StoriesBlockControlsProps
 * @property {string}    viewType     String indicator of active view type.
 * @property {Function} setAttributes Callable function for saving attribute values.
 */

/**
 * LatestStoriesBlockControls component. Used for rendering block controls of the block.
 *
 * @param {StoriesBlockControlsProps} props Component props.
 * @return {*} JSX markup.
 */

const StoriesBlockControls = ({
  blockType,
  viewType,
  setAttributes
}) => {
  // Note: ToolbarGroup and ToolbarButton are only available in Gutenberg 7.0 or later,
  // so they do not exist in WP 5.3.
  const ToolbarComponent = external_wp_components_["ToolbarGroup"] ? external_wp_components_["ToolbarGroup"] : external_wp_components_["Toolbar"];
  return /*#__PURE__*/external_React_default.a.createElement(external_wp_blockEditor_["BlockControls"], null, /*#__PURE__*/external_React_default.a.createElement(ToolbarComponent, null, blockType && BLOCK_TYPE_URL !== blockType && /*#__PURE__*/external_React_default.a.createElement(external_wp_element_["Fragment"], null, VIEW_TYPES.map(view => {
    return external_wp_components_["ToolbarButton"] ? /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["ToolbarButton"], {
      key: view.id,
      label: view.label,
      icon: view.icon,
      onClick: () => {
        setAttributes({
          viewType: view.id
        });
      },
      isPressed: view.id === viewType
    }) : /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
      key: view.id,
      label: view.label,
      icon: view.icon,
      onClick: () => {
        setAttributes({
          viewType: view.id
        });
      },
      isPressed: view.id === viewType
    });
  }))), /*#__PURE__*/external_React_default.a.createElement(blockTypeSwitcher, {
    selectedBlockType: blockType,
    setAttributes: setAttributes
  }));
};

/* harmony default export */ var storiesBlockControls = (StoriesBlockControls);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storiesBlockConfigurationPanel.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function BlockConfigurationPanel({
  instructions,
  icon,
  setAttributes,
  selectionOptions,
  selectionType
}) {
  const label = Object(external_wp_i18n_["__"])('Web Stories', 'web-stories');

  return /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Placeholder"], {
    icon: /*#__PURE__*/external_React_default.a.createElement(external_wp_blockEditor_["BlockIcon"], {
      icon: icon,
      showColors: true
    }),
    label: label,
    instructions: instructions,
    className: "web-stories-block-configuration-panel"
  }, /*#__PURE__*/external_React_default.a.createElement("ul", {
    className: "web-stories-block-configuration-panel__options",
    role: "list",
    "aria-label": Object(external_wp_i18n_["__"])('Block Types', 'web-stories')
  }, selectionOptions.map(option => /*#__PURE__*/external_React_default.a.createElement("li", {
    key: option.id
  }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    variant: "secondary",
    isSecondary: true,
    onClick: () => {
      setAttributes({
        [selectionType]: option.id
      });
    },
    icon: /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Icon"], {
      icon: option.panelIcon || option.icon,
      title: option.label
    }),
    label: option.description || option.label
  }), /*#__PURE__*/external_React_default.a.createElement("span", {
    className: "web-stories-block-configuration-panel__label components-placeholder__instructions",
    role: "presentation"
  }, option.label)))));
}

/* harmony default export */ var storiesBlockConfigurationPanel = (BlockConfigurationPanel);
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(8);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(10);

// EXTERNAL MODULE: ./packages/stories-block/src/block/hooks/useDebounce.js
var useDebounce = __webpack_require__(13);

// CONCATENATED MODULE: ./packages/stories-block/src/block/components/autocomplete.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */



const Autocomplete = ({
  label,
  value,
  onChange,
  onInputChange,
  placeholder,
  options = []
}) => {
  // Return the block, but only if options were passed in.
  return Array.isArray(options) && /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["FormTokenField"], {
    value: value,
    suggestions: options,
    onChange: onChange,
    onInputChange: onInputChange,
    maxSuggestions: 100,
    label: label,
    placeholder: placeholder
  }));
};

/* harmony default export */ var autocomplete = (Autocomplete);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/authorSelection.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



/**
 * AuthorSelection props.
 *
 * @typedef AuthorSelectionProps
 * @property {Array<number>} authors List of author IDs.
 * @property {()=>void} setAttributes Callable function for saving attribute values.
 */

/**
 * AuthorSelection component. Used for selecting authors of stories.
 *
 * @param {AuthorSelection} props Component props.
 * @return {*} JSX markup.
 */

const AuthorSelection = ({
  authors: authorIds,
  setAttributes
}) => {
  const [isInitialized, setIsInitialized] = Object(external_wp_element_["useState"])(false);
  const [authorsList, setAuthorsList] = Object(external_wp_element_["useState"])([]);
  const [authorSuggestions, setAuthorSuggestions] = Object(external_wp_element_["useState"])([]);
  Object(external_wp_element_["useEffect"])(() => {
    if (isInitialized || !(authorIds !== null && authorIds !== void 0 && authorIds.length)) {
      return;
    }

    external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/users', {
        per_page: 100,
        include: authorIds.join(',')
      })
    }).then(users => {
      if ('undefined' !== typeof users && Array.isArray(users)) {
        setAuthorsList(users.map(({
          id,
          name
        }) => ({
          id,
          value: name
        })));
      }
    }).catch(() => {
      setAuthorsList([]);
    }).finally(() => setIsInitialized(true));
  }, [isInitialized, authorIds]);
  /**
   * Callback function called when user selects an author from the suggestions.
   *
   * Will process the names given by the user and valid author names will be saved.
   *
   * @param {Array} tokens Array of strings that were parsed from the text field.
   * @return {void}
   */

  const onChange = tokens => {
    if ('undefined' === typeof tokens || !Array.isArray(tokens)) {
      return;
    }

    const authors = tokens.map(token => [...authorSuggestions, ...authorsList].find(({
      value
    }) => value === token)).filter(Boolean);
    setAuthorsList(authors);
    setAttributes({
      authors: authors.map(({
        id
      }) => id)
    });
  };
  /**
   * Callback function used when user types in the search query in the text field.
   *
   * Makes an API call to fetch authors matching the search query.
   *
   * @param {string} search Search query to look for authors.
   * @return {void}
   */


  const onInputChange = search => {
    external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/users', {
        per_page: 100,
        search
      })
    }).then(users => {
      if ('undefined' !== typeof users && Array.isArray(users)) {
        setAuthorSuggestions(users.map(({
          id,
          name
        }) => ({
          id,
          value: name
        })));
      }
    }).catch(() => {
      setAuthorSuggestions([]);
    });
  };

  const debouncedOnInputChange = Object(useDebounce["a" /* default */])(onInputChange, 500);
  return /*#__PURE__*/external_React_default.a.createElement(autocomplete, {
    label: Object(external_wp_i18n_["__"])('Authors', 'web-stories'),
    value: authorsList.map(({
      value
    }) => value),
    options: authorSuggestions.map(({
      value
    }) => value),
    onChange: onChange,
    onInputChange: debouncedOnInputChange
  });
};

/* harmony default export */ var authorSelection = (AuthorSelection);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storiesInspectorControls.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



/**
 * StoriesInspectorControls props.
 *
 * @typedef StoriesInspectorControlsProps
 * @property {string} viewType String indicator of active view type.
 * @property {number} numOfStories Number indicator of maximum number of stories to show.
 * @property {number} numOfColumns Number indicator of number of columns in grid view type.
 * @property {string} orderby Attribute to order stories by.
 * @property {string} order Sorting order (ASC or DESC)
 * @property {boolean} isShowingTitle Whether or not to display story's title.
 * @property {boolean} isShowingDate Whether or not to display story's date.
 * @property {boolean} isShowingAuthor Whether or not to display story's author.
 * @property {boolean} isShowingViewAll Whether or not to display stories archive link.
 * @property {string} archiveLinkLabel Archive link's label.
 * @property {boolean} imageOnRight Whether or not to display images on right side in list view type.
 * @property {Array} authors An array of authors objects which are currently selected.
 * @property {Function} setAttributes Callable function for saving attribute values.
 */

const {
  config: {
    fieldStates,
    archiveURL
  }
} = window.webStoriesBlockSettings;
/**
 * LatestStoriesBlockControls component. Used for rendering block controls of the block.
 *
 * @param {StoriesInspectorControlsProps} props Component props.
 * @return {*} JSX markup.
 */

const StoriesInspectorControls = props => {
  const {
    attributes: {
      viewType,
      numOfStories,
      numOfColumns,
      order,
      orderby,
      archiveLinkLabel,
      authors,
      circleSize,
      imageAlignment,
      fieldState
    },
    setAttributes,
    showFilters = true
  } = props;
  const firstUpdate = Object(external_wp_element_["useRef"])(true);
  Object(external_wp_element_["useEffect"])(() => {
    // Set default field state on load.
    const defaultState = {};
    Object.entries(fieldStates[viewType]).map(([field, fieldObj]) => {
      const {
        show
      } = fieldObj; // Initially the fieldState will be an empty object. Set the defaults based on current viewType.

      if (undefined === fieldState[`show_${field}`]) {
        defaultState[`show_${field}`] = show;
      }
    }); // Prevent unnecessary changes if `defaultState` is empty.

    if (!Object.keys(defaultState).length) {
      return;
    }

    setAttributes({
      fieldState: { ...fieldState,
        ...defaultState
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- We only want to set the values once.

  Object(external_wp_element_["useEffect"])(() => {
    // We want to update the fieldState for any viewType change post first render.
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const defaultState = {};
    Object.entries(fieldStates[viewType]).map(([field, fieldObj]) => {
      const {
        show
      } = fieldObj;
      defaultState[`show_${field}`] = show;
    });
    setAttributes({
      fieldState: defaultState
    });
  }, [viewType]); // eslint-disable-line react-hooks/exhaustive-deps -- We only want to set the values on viewType change.

  const ArchiveLink = () => {
    return archiveURL ? /*#__PURE__*/external_React_default.a.createElement("a", {
      target: "__blank",
      href: archiveURL
    }, Object(external_wp_i18n_["__"])('View archive page', 'web-stories')) : null;
  };

  const handleToggleControl = field => {
    setAttributes({
      fieldState: { ...fieldState,
        [`show_${field}`]: !fieldState[`show_${field}`]
      }
    });
  };

  return /*#__PURE__*/external_React_default.a.createElement(external_wp_blockEditor_["InspectorControls"], null, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["PanelBody"], {
    className: "web-stories-settings",
    title: Object(external_wp_i18n_["__"])('Layout Options', 'web-stories')
  }, fieldStates[viewType] && Object.entries(fieldStates[viewType]).map(([field, fieldObj]) => {
    const {
      label,
      hidden
    } = fieldObj; // @todo This shouldn't have dependency on field name, update field object appropriately.

    if (!hidden && 'circle_size' !== field && 'image_alignment' !== field) {
      return /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["ToggleControl"], {
        key: `${field}__control`,
        label: label,
        checked: fieldState[`show_${field}`] || false,
        onChange: () => handleToggleControl(field),
        help: 'archive_link' === field && fieldState[`show_${field}`] && /*#__PURE__*/external_React_default.a.createElement(ArchiveLink, null)
      });
    }

    return false;
  }), fieldState['show_archive_link'] && archiveURL && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["TextControl"], {
    label: Object(external_wp_i18n_["__"])('Archive Link Label', 'web-stories'),
    value: archiveLinkLabel,
    placeholder: Object(external_wp_i18n_["__"])('View All Stories', 'web-stories'),
    onChange: newLabel => setAttributes({
      archiveLinkLabel: newLabel
    }),
    className: "web-stories-settings-archive-link"
  })), [CIRCLES_VIEW_TYPE, GRID_VIEW_TYPE, LIST_VIEW_TYPE].includes(viewType) && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["PanelBody"], {
    className: "web-stories-settings",
    title: Object(external_wp_i18n_["__"])('Layout and Style Options', 'web-stories')
  }, LIST_VIEW_TYPE === viewType && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["RadioControl"], {
    label: Object(external_wp_i18n_["__"])('Image Alignment', 'web-stories'),
    selected: imageAlignment,
    options: [{
      value: 'left',
      label: Object(external_wp_i18n_["__"])('Left', 'web-stories')
    }, {
      value: 'right',
      label: Object(external_wp_i18n_["__"])('Right', 'web-stories')
    }],
    onChange: value => {
      setAttributes({
        imageAlignment: value
      });
    }
  }), GRID_VIEW_TYPE === viewType && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["RangeControl"], {
    label: Object(external_wp_i18n_["__"])('Number of Columns', 'web-stories'),
    value: numOfColumns,
    onChange: updatedNumOfColumns => setAttributes({
      numOfColumns: updatedNumOfColumns
    }),
    min: 1,
    max: 4,
    step: 1
  }), CIRCLES_VIEW_TYPE === viewType && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["RangeControl"], {
    label: Object(external_wp_i18n_["__"])('Circle Size', 'web-stories'),
    value: circleSize,
    onChange: updatedcircleSize => setAttributes({
      circleSize: updatedcircleSize
    }),
    min: 80,
    max: 200,
    step: 5
  })), showFilters && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["PanelBody"], {
    title: Object(external_wp_i18n_["__"])('Sorting and Filtering', 'web-stories')
  }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["SelectControl"], {
    label: Object(external_wp_i18n_["__"])('Order By', 'web-stories'),
    options: [{
      value: 'date',
      label: Object(external_wp_i18n_["__"])('Date', 'web-stories')
    }, {
      value: 'title',
      label: Object(external_wp_i18n_["__"])('Title', 'web-stories')
    }],
    value: orderby || 'date',
    onChange: selection => setAttributes({
      orderby: selection
    })
  }), /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["SelectControl"], {
    label: Object(external_wp_i18n_["__"])('Order', 'web-stories'),
    options: [{
      value: 'asc',
      label: Object(external_wp_i18n_["__"])('Ascending', 'web-stories')
    }, {
      value: 'desc',
      label: Object(external_wp_i18n_["__"])('Descending', 'web-stories')
    }],
    value: order || 'desc',
    onChange: selection => setAttributes({
      order: selection
    })
  }), /*#__PURE__*/external_React_default.a.createElement(authorSelection, {
    authors: authors,
    setAttributes: setAttributes
  }), /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["RangeControl"], {
    label: Object(external_wp_i18n_["__"])('Number of Stories', 'web-stories'),
    value: numOfStories,
    onChange: updatedNumOfStories => setAttributes({
      numOfStories: updatedNumOfStories
    }),
    min: 1,
    max: 20,
    step: 1
  })));
};

/* harmony default export */ var storiesInspectorControls = (StoriesInspectorControls);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storiesLoading.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */


/**
 * StoriesLoading component. Displays a spinner when stories are being fetched.
 *
 * @return {*} JSX markup.
 */

const StoriesLoading = () => {
  return /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Placeholder"], {
    className: "web-stories-placeholder",
    instructions: Object(external_wp_i18n_["__"])('Loading Stories…', 'web-stories')
  }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Spinner"], null));
};

/* harmony default export */ var storiesLoading = (StoriesLoading);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(19);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/glider-js/glider.js
var glider = __webpack_require__(24);
var glider_default = /*#__PURE__*/__webpack_require__.n(glider);

// CONCATENATED MODULE: ./node_modules/glider-js/glider.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./packages/glider/src/index.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */


/**
 * Override to add basic support for the nav arrows for RTL
 *
 * Glider-JS doesn't support RTL at the moment, this is to add basic
 * functioning support for the nav arrows as otherwise the nav arrows
 * becomes useless on RTL sites.
 *
 * @todo Maybe replace glider-js with other lightweight lib which has RTL support. or Replace it with 'amp-carousel' once we have the support.
 * @param {Object|string} slide Slide arrow string based on action.
 * @param {boolean}       dot   Is dot navigation action.
 * @param {Object}        e     Event object.
 * @return {boolean} Navigation done.
 */

glider_default.a.prototype.scrollItem = function (slide, dot, e) {
  var _dot;

  // glider-js doesn't seem to pass right amount of arguments.
  if (e === undefined && (_dot = dot) !== null && _dot !== void 0 && _dot.target) {
    e = dot;
    dot = false;
  }

  if (e === undefined) {
    // Somehow we ended up triggering this function twice. Abort to prevent scrolling back and forth.
    return false;
  }

  if (e) {
    e.preventDefault();
  } // Somehow slidesToScroll and slidesToShow can end up being 0.


  this.opt.slidesToScroll = Math.max(1, this.opt.slidesToScroll);
  this.opt.slidesToShow = Math.max(1, this.opt.slidesToShow); // This will also cause this.itemWidth to be Infinity because division by zero returns Infinity in JS.
  // Update this.itemWidth with actual value in this case.

  if (this.itemWidth === Infinity) {
    // It's a sibling.
    const carouselWrapper = e.target.parentElement.querySelector('.web-stories-list__carousel');
    const itemStyle = window.getComputedStyle(carouselWrapper.querySelector('.web-stories-list__story'));
    this.itemWidth = parseFloat(itemStyle.width) + (parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight));
  }

  const originalSlide = slide;
  ++this.animate_id;

  if (dot === true) {
    slide = slide * this.containerWidth;
    slide = Math.round(slide / this.itemWidth) * this.itemWidth;
  } else {
    if (typeof slide === 'string') {
      const backwards = slide === 'prev'; // use precise location if fractional slides are on

      if (this.opt.slidesToScroll % 1 || this.opt.slidesToShow % 1) {
        slide = this.getCurrentSlide();
      } else {
        slide = !isNaN(this.slide) ? this.slide : 0;
      }

      if (backwards) {
        slide -= this.opt.slidesToScroll;
      } else {
        slide += this.opt.slidesToScroll;
      }

      if (this.opt.rewind) {
        const scrollLeft = this.ele.scrollLeft;
        slide = backwards && !scrollLeft ? this.slides.length : !backwards && scrollLeft + this.containerWidth >= Math.floor(this.trackWidth) ? 0 : slide;
      }
    }

    slide = Math.min(slide, this.slides.length);
    this.slide = slide;
    slide = this.itemWidth * slide;
  }

  this.scrollTo(slide, this.opt.duration * Math.abs(this.ele.scrollLeft - slide), function () {
    this.updateControls();
    this.emit('animated', {
      value: originalSlide,
      type: typeof originalSlide === 'string' ? 'arrow' : dot ? 'dot' : 'slide'
    });
  });
  return false;
};

/* harmony default export */ var glider_src = (glider_default.a);
// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storyCard.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





function StoryCard({
  title,
  excerpt,
  poster,
  author,
  date,
  isShowingAuthor,
  isShowingDate,
  isShowingTitle,
  isShowingExcerpt,
  imageAlignment
}) {
  const singleStoryClasses = classnames_default()('web-stories-list__story', {
    [`image-align-right`]: imageAlignment === 'right'
  });
  const hasContentOverlay = isShowingTitle || isShowingAuthor || isShowingDate; // @todo Keep an eye on this experimental API, make necessary changes when this gets updated in core.

  const dateFormat = Object(external_wp_date_["__experimentalGetSettings"])().formats.date;

  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: singleStoryClasses
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-list__story-poster"
  }, poster ? /*#__PURE__*/external_React_default.a.createElement("img", {
    src: poster,
    alt: title
  }) : /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-list__story-poster-placeholder"
  }, /*#__PURE__*/external_React_default.a.createElement("span", null, title))), hasContentOverlay && /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "story-content-overlay web-stories-list__story-content-overlay"
  }, isShowingTitle && title && /*#__PURE__*/external_React_default.a.createElement(external_wp_element_["RawHTML"], {
    className: "story-content-overlay__title"
  }, title), isShowingExcerpt && excerpt && /*#__PURE__*/external_React_default.a.createElement(external_wp_element_["RawHTML"], {
    className: "story-content-overlay__excerpt"
  }, excerpt), isShowingAuthor && /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "story-content-overlay__author"
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: byline. %s: author name. */
  Object(external_wp_i18n_["__"])('By %s', 'web-stories'), author)), isShowingDate && /*#__PURE__*/external_React_default.a.createElement("time", {
    dateTime: Object(external_wp_date_["format"])('c', date),
    className: "story-content-overlay__date"
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: publish date. */
  Object(external_wp_i18n_["__"])('On %s', 'web-stories'), Object(external_wp_date_["dateI18n"])(dateFormat, date)))));
}

/* harmony default export */ var storyCard = (StoryCard);
// CONCATENATED MODULE: ./packages/stories-block/src/block/components/storiesPreview.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const {
  config: {
    archiveURL: storiesPreview_archiveURL
  }
} = window.webStoriesBlockSettings;

function StoriesPreview(props) {
  const {
    attributes: {
      align,
      viewType,
      circleSize,
      imageAlignment,
      fieldState,
      numOfColumns
    },
    viewAllLabel,
    stories
  } = props;
  const carouselContainer = Object(external_wp_element_["useRef"])(null);
  const carouselNext = Object(external_wp_element_["useRef"])(null);
  const carouselPrev = Object(external_wp_element_["useRef"])(null);
  const blockClasses = classnames_default()({
    'is-style-default': !fieldState['show_sharp_corners'],
    'is-style-squared': fieldState['show_sharp_corners'],
    'is-carousel': CIRCLES_VIEW_TYPE === viewType || CAROUSEL_VIEW_TYPE === viewType,
    [`is-view-type-${viewType}`]: viewType,
    [`columns-${numOfColumns}`]: GRID_VIEW_TYPE === viewType && numOfColumns,
    [`align${align}`]: align,
    'has-archive-link': fieldState['show_archive_link']
  }, 'web-stories-list');

  const StoriesLoop = () => stories.map(story => {
    var _story$_embedded, _story$_embedded$wpF, _story$_embedded$wpF$;

    return /*#__PURE__*/external_React_default.a.createElement(storyCard, {
      key: story.id,
      url: story.link,
      title: story.title.rendered,
      excerpt: story.excerpt.rendered ? story.excerpt.rendered : '',
      date: story.date_gmt,
      author: story._embedded.author[0].name,
      poster: (_story$_embedded = story._embedded) === null || _story$_embedded === void 0 ? void 0 : (_story$_embedded$wpF = _story$_embedded['wp:featuredmedia']) === null || _story$_embedded$wpF === void 0 ? void 0 : (_story$_embedded$wpF$ = _story$_embedded$wpF[0]) === null || _story$_embedded$wpF$ === void 0 ? void 0 : _story$_embedded$wpF$.source_url,
      imageAlignment: imageAlignment,
      isShowingAuthor: fieldState['show_author'],
      isShowingDate: fieldState['show_date'],
      isShowingTitle: fieldState['show_title'],
      isShowingExcerpt: fieldState['show_excerpt'],
      circleSize: circleSize
    });
  });

  Object(external_wp_element_["useEffect"])(() => {
    if (!carouselContainer.current) {
      return;
    }

    const storyItem = carouselContainer.current.querySelector('.web-stories-list__story');

    if (!storyItem) {
      return;
    }

    const itemStyle = window.getComputedStyle(storyItem);
    const itemWidth = parseFloat(itemStyle.width) + (parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight));
    const instance = new glider_src(carouselContainer.current, {
      slidesToShow: 'auto',
      slidesToScroll: 'auto',
      itemWidth,
      duration: 0.25,
      skipTrack: true,
      scrollLock: true,
      arrows: {
        prev: carouselPrev.current,
        next: carouselNext.current
      }
    }); // Force resize to ensure Glider.js has the correct clientWidth for the carouselContainer.

    instance.resize(); // Force correct trackWidth, especially when switching view types.

    const trackWidth = itemWidth * stories.length;
    instance.trackWidth = trackWidth;
    instance.track.style.width = `${trackWidth}px`;
  }, [stories.length, viewType, circleSize]);
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: blockClasses,
    style: {
      '--ws-circle-size': 'circles' === viewType && circleSize ? `${circleSize}px` : undefined
    }
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-list__inner-wrapper"
  }, CIRCLES_VIEW_TYPE === viewType || CAROUSEL_VIEW_TYPE === viewType ? /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-list__carousel",
    ref: carouselContainer
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "glider-track"
  }, /*#__PURE__*/external_React_default.a.createElement(StoriesLoop, null))), /*#__PURE__*/external_React_default.a.createElement("div", {
    "aria-label": Object(external_wp_i18n_["__"])('Previous', 'web-stories'),
    className: "glider-prev",
    ref: carouselPrev
  }), /*#__PURE__*/external_React_default.a.createElement("div", {
    "aria-label": Object(external_wp_i18n_["__"])('Next', 'web-stories'),
    className: "glider-next",
    ref: carouselNext
  })) : /*#__PURE__*/external_React_default.a.createElement(StoriesLoop, null)), fieldState['show_archive_link'] && storiesPreview_archiveURL && /*#__PURE__*/external_React_default.a.createElement("div", {
    className: "web-stories-list__archive-link"
  }, /*#__PURE__*/external_React_default.a.createElement("a", {
    target: "__blank",
    href: storiesPreview_archiveURL
  }, viewAllLabel)));
}

/* harmony default export */ var storiesPreview = (StoriesPreview);
// CONCATENATED MODULE: ./packages/stories-block/src/block/block-types/latest-stories/edit.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */






const {
  config: {
    api: {
      stories: storiesApi
    }
  }
} = window.webStoriesBlockSettings;
/**
 * LatestStoriesEdit component
 *
 * @param {Object}   root0               Component props.
 * @param {Object}   root0.attributes    Block attributes.
 * @param {Function} root0.setAttributes Callable function for saving attribute values.
 * @return {*} JSX markup for the editor.
 */

function LatestStoriesEdit({
  attributes,
  setAttributes
}) {
  const {
    numOfStories,
    order,
    orderby,
    archiveLinkLabel,
    authors
  } = attributes;
  const [fetchedStories, setFetchedStories] = Object(external_wp_element_["useState"])([]);
  const [isFetchingStories, setIsFetchingStories] = Object(external_wp_element_["useState"])([]);
  /**
   * Fetch stories based on the query.
   *
   * @return {void}
   */

  const fetchStories = Object(external_wp_element_["useCallback"])(async query => {
    try {
      setIsFetchingStories(true);
      const stories = await external_wp_apiFetch_default()({
        path: Object(external_wp_url_["addQueryArgs"])(storiesApi, {
          per_page: 20,
          _embed: 'author,wp:featuredmedia',
          orderby: query.orderby || 'modified',
          order: query.order || 'desc',
          author: query.author || undefined
        })
      });

      if (Array.isArray(stories)) {
        setFetchedStories(stories);
      }
    } catch (err) {
      setFetchedStories([]);
    } finally {
      setIsFetchingStories(false);
    }
  }, []);
  const debouncedFetchStories = Object(useDebounce["a" /* default */])(fetchStories, 1000);
  Object(external_wp_element_["useEffect"])(() => {
    debouncedFetchStories({
      order: order || 'desc',
      orderby: orderby || 'date',
      author: authors
    });
  }, [authors, numOfStories, order, orderby, debouncedFetchStories]);
  const viewAllLabel = archiveLinkLabel ? archiveLinkLabel : Object(external_wp_i18n_["__"])('View All Stories', 'web-stories');
  const storiesToDisplay = fetchedStories.length > numOfStories ? fetchedStories.slice(0, numOfStories) : fetchedStories;
  return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement(storiesInspectorControls, {
    attributes: attributes,
    setAttributes: setAttributes
  }), isFetchingStories && /*#__PURE__*/external_React_default.a.createElement(storiesLoading, null), !isFetchingStories && Boolean(storiesToDisplay === null || storiesToDisplay === void 0 ? void 0 : storiesToDisplay.length) && /*#__PURE__*/external_React_default.a.createElement(storiesPreview, {
    attributes: attributes,
    stories: storiesToDisplay,
    viewAllLabel: viewAllLabel
  }), !isFetchingStories && !(storiesToDisplay !== null && storiesToDisplay !== void 0 && storiesToDisplay.length) && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Placeholder"], {
    icon: /*#__PURE__*/external_React_default.a.createElement(external_wp_blockEditor_["BlockIcon"], {
      icon: /*#__PURE__*/external_React_default.a.createElement(icons["b" /* BlockIcon */], null),
      showColors: true
    }),
    label: Object(external_wp_i18n_["__"])('Latest Stories', 'web-stories'),
    className: "wp-block-web-stories-embed",
    instructions: Object(external_wp_i18n_["__"])('No stories found.', 'web-stories')
  }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    href: Object(external_wp_url_["addQueryArgs"])('post-new.php', {
      post_type: 'web-story'
    }),
    isLink: true
  }, Object(external_wp_i18n_["__"])('Create New Story', 'web-stories'))));
}

/* harmony default export */ var latest_stories_edit = (LatestStoriesEdit);
// EXTERNAL MODULE: ./packages/stories-block/src/block/components/storyPicker/fetchSelectedStories.js
var fetchSelectedStories = __webpack_require__(20);

// EXTERNAL MODULE: ./packages/stories-block/src/block/components/storyPicker/storyPicker.js + 5 modules
var storyPicker = __webpack_require__(22);

// CONCATENATED MODULE: ./packages/stories-block/src/block/block-types/selected-stories/embedPlaceholder.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const {
  config: {
    maxNumOfStories
  }
} = window.webStoriesBlockSettings;

const EmbedPlaceholder = ({
  icon,
  label,
  selectedStories,
  setSelectedStories
}) => {
  const [isStoryPickerOpen, setIsStoryPickerOpen] = Object(external_wp_element_["useState"])(false);
  const [isSortingStories, setIsSortingStories] = Object(external_wp_element_["useState"])(false);

  const openStoryPicker = () => setIsStoryPickerOpen(true);

  const closeStoryPicker = Object(external_wp_element_["useCallback"])(() => {
    setIsStoryPickerOpen(false);
    setIsSortingStories(false);
  }, []);
  const openStoryRearrangeWindow = Object(external_wp_element_["useCallback"])(() => {
    setIsSortingStories(true);
    openStoryPicker();
  }, []);
  return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement(external_wp_blockEditor_["BlockControls"], {
    group: "other"
  }, Boolean(selectedStories === null || selectedStories === void 0 ? void 0 : selectedStories.length) && (external_wp_components_["ToolbarButton"] ? /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["ToolbarButton"], {
    "aria-expanded": isStoryPickerOpen,
    "aria-haspopup": "true",
    onClick: openStoryPicker
  }, Object(external_wp_i18n_["__"])('Select', 'web-stories')), /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["ToolbarButton"], {
    "aria-expanded": isStoryPickerOpen,
    "aria-haspopup": "true",
    onClick: openStoryRearrangeWindow
  }, Object(external_wp_i18n_["__"])('Rearrange', 'web-stories'))) : /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    className: "components-toolbar__control",
    title: Object(external_wp_i18n_["__"])('Select', 'web-stories'),
    "aria-expanded": isStoryPickerOpen,
    "aria-haspopup": "true",
    onClick: openStoryPicker
  }), /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    className: "components-toolbar__control",
    title: Object(external_wp_i18n_["__"])('Rearrange', 'web-stories'),
    "aria-expanded": openStoryRearrangeWindow,
    "aria-haspopup": "true",
    onClick: openStoryRearrangeWindow
  })))), selectedStories.length === 0 && /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Placeholder"], {
    icon: /*#__PURE__*/external_React_default.a.createElement(external_wp_blockEditor_["BlockIcon"], {
      icon: icon,
      showColors: true
    }),
    label: label,
    className: "wp-block-web-stories-embed",
    instructions: Object(external_wp_i18n_["__"])('Select the web stories you want to display on your site.', 'web-stories')
  }, /*#__PURE__*/external_React_default.a.createElement(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: openStoryPicker
  }, Object(external_wp_i18n_["__"])('Select Stories', 'web-stories'))), isStoryPickerOpen && /*#__PURE__*/external_React_default.a.createElement(storyPicker["a" /* default */], {
    closeStoryPicker: closeStoryPicker,
    selectedStories: selectedStories,
    setSelectedStories: setSelectedStories,
    isSortingStories: isSortingStories,
    setIsSortingStories: setIsSortingStories,
    maxNumOfStories: maxNumOfStories
  }));
};

/* harmony default export */ var embedPlaceholder = (EmbedPlaceholder);
// CONCATENATED MODULE: ./packages/stories-block/src/block/block-types/selected-stories/edit.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function SelectedStoriesEdit({
  icon,
  attributes,
  setAttributes,
  isSelected: isEditing
}) {
  const {
    stories = [],
    archiveLinkLabel
  } = attributes;
  const [selectedStoryIds, setSelectedStoryIds] = Object(external_wp_element_["useState"])(stories);
  const [selectedStories, _setSelectedStories] = Object(external_wp_element_["useState"])([]);
  const [isFetching, setIsFetching] = Object(external_wp_element_["useState"])(false);

  const label = Object(external_wp_i18n_["__"])('Selected Stories', 'web-stories');

  const viewAllLabel = archiveLinkLabel ? archiveLinkLabel : Object(external_wp_i18n_["__"])('View All Stories', 'web-stories');
  Object(external_wp_element_["useEffect"])(() => {
    if (attributes.stories.toString() !== selectedStoryIds.toString()) {
      setAttributes({
        stories: selectedStoryIds
      });
    }
  }, [attributes.stories, setAttributes, selectedStoryIds]);
  Object(external_wp_element_["useEffect"])(() => {
    if (selectedStoryIds.length && !selectedStories.length) {
      setIsFetching(true);
    }
  }, [selectedStoryIds, selectedStories, setIsFetching]);
  const setSelectedStories = Object(external_wp_element_["useCallback"])(newStories => {
    _setSelectedStories(newStories);

    setSelectedStoryIds(newStories.map(story => story.id));
  }, [_setSelectedStories]);

  if (isFetching) {
    return /*#__PURE__*/external_React_default.a.createElement(fetchSelectedStories["a" /* default */], {
      icon: icon,
      label: label,
      selectedStoryIds: selectedStoryIds,
      setSelectedStories: setSelectedStories,
      setIsFetching: setIsFetching
    });
  }

  return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement(storiesInspectorControls, {
    attributes: attributes,
    setAttributes: setAttributes,
    showFilters: false
  }), Boolean(selectedStories === null || selectedStories === void 0 ? void 0 : selectedStories.length) && /*#__PURE__*/external_React_default.a.createElement(storiesPreview, {
    attributes: attributes,
    stories: selectedStories,
    viewAllLabel: viewAllLabel
  }), /*#__PURE__*/external_React_default.a.createElement(embedPlaceholder, {
    icon: icon,
    label: label,
    selectedStories: selectedStories,
    setSelectedStories: setSelectedStories,
    isEditing: isEditing
  }));
}

/* harmony default export */ var selected_stories_edit = (SelectedStoriesEdit);
// CONCATENATED MODULE: ./packages/stories-block/src/block/edit.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */









function WebStoriesEdit({
  attributes,
  setAttributes,
  className,
  isSelected
}) {
  const {
    blockType,
    viewType
  } = attributes;

  if (!blockType) {
    return /*#__PURE__*/external_React_default.a.createElement(storiesBlockConfigurationPanel, {
      icon: /*#__PURE__*/external_React_default.a.createElement(icons["b" /* BlockIcon */], null),
      setAttributes: setAttributes,
      instructions: Object(external_wp_i18n_["__"])('Embed a collection of your latest stories, select your own or enter an URL.', 'web-stories'),
      selectionOptions: BLOCK_TYPES,
      selectionType: 'blockType'
    });
  }

  if (blockType !== BLOCK_TYPE_URL && !viewType) {
    return /*#__PURE__*/external_React_default.a.createElement(storiesBlockConfigurationPanel, {
      icon: /*#__PURE__*/external_React_default.a.createElement(icons["b" /* BlockIcon */], null),
      setAttributes: setAttributes,
      instructions: Object(external_wp_i18n_["__"])('Select a layout style', 'web-stories'),
      selectionOptions: VIEW_TYPES,
      selectionType: 'viewType'
    });
  }

  return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, /*#__PURE__*/external_React_default.a.createElement(storiesBlockControls, {
    blockType: blockType,
    viewType: viewType,
    setAttributes: setAttributes
  }), blockType === BLOCK_TYPE_LATEST_STORIES && /*#__PURE__*/external_React_default.a.createElement(latest_stories_edit, {
    attributes: attributes,
    setAttributes: setAttributes
  }), blockType === BLOCK_TYPE_SELECTED_STORIES && /*#__PURE__*/external_React_default.a.createElement(selected_stories_edit, {
    icon: /*#__PURE__*/external_React_default.a.createElement(icons["b" /* BlockIcon */], null),
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected
  }), blockType === BLOCK_TYPE_URL && /*#__PURE__*/external_React_default.a.createElement(edit["a" /* default */], {
    icon: /*#__PURE__*/external_React_default.a.createElement(icons["b" /* BlockIcon */], null),
    attributes: attributes,
    setAttributes: setAttributes,
    className: className,
    isSelected: isSelected
  }));
}

/* harmony default export */ var block_edit = (WebStoriesEdit);
// CONCATENATED MODULE: ./packages/stories-block/src/block/block.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */
const metadata = {
  name: "web-stories/embed",
  title: "Web Stories",
  description: "Embed Web Stories.",
  category: "embed",
  keywords: ["embed", "web stories", "story", "stories"],
  textdomain: "web-stories",
  attributes: {
    blockType: {
      type: "string"
    },
    url: {
      type: "string"
    },
    title: {
      type: "string"
    },
    poster: {
      type: "string"
    },
    width: {
      type: "number",
      "default": 360
    },
    height: {
      type: "number",
      "default": 600
    },
    align: {
      type: "string",
      "default": "none"
    },
    stories: {
      type: "array",
      "default": []
    },
    viewType: {
      type: "string",
      "default": ""
    },
    numOfStories: {
      type: "number",
      "default": 5
    },
    numOfColumns: {
      type: "number",
      "default": 2
    },
    circleSize: {
      type: "number",
      "default": 96
    },
    imageAlignment: {
      type: "string",
      "default": "left"
    },
    order: {
      type: "string",
      "default": ""
    },
    orderby: {
      type: "string",
      "default": ""
    },
    archiveLinkLabel: {
      type: "string",
      "default": ""
    },
    authors: {
      type: "array",
      "default": []
    },
    fieldState: {
      type: "object",
      "default": {}
    }
  },
  supports: {
    align: ["wide", "full", "left", "right", "center"]
  }
};
/* harmony default export */ var block = (metadata);
// CONCATENATED MODULE: ./packages/stories-block/src/block/transforms.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const {
  attributes: transforms_attributes
} = block;
const transforms = {
  from: [{
    type: 'shortcode',
    tag: 'web_stories_embed',
    attributes: { ...transforms_attributes,
      align: {
        type: 'string',
        shortcode: ({
          named: {
            align
          }
        }) => {
          return align;
        }
      },
      height: {
        type: 'number',
        shortcode: ({
          named: {
            height
          }
        }) => {
          return height;
        }
      },
      poster: {
        type: 'string',
        shortcode: ({
          named: {
            poster
          }
        }) => {
          return poster;
        }
      },
      title: {
        type: 'string',
        shortcode: ({
          named: {
            title
          }
        }) => {
          return title;
        }
      },
      url: {
        type: 'string',
        shortcode: ({
          named: {
            url
          }
        }) => {
          return url;
        }
      },
      width: {
        type: 'number',
        shortcode: ({
          named: {
            width
          }
        }) => {
          return width;
        }
      },
      blockType: {
        type: 'string',
        default: BLOCK_TYPE_URL
      }
    },
    priority: 9
  }, {
    type: 'shortcode',
    tag: 'web_stories',
    attributes: { ...transforms_attributes,
      blockType: {
        type: 'string',
        default: BLOCK_TYPE_LATEST_STORIES
      },
      align: {
        type: 'string',
        shortcode: ({
          named: {
            align
          }
        }) => {
          return align;
        }
      },
      archiveLinkLabel: {
        type: 'string',
        shortcode: ({
          named: {
            archive_link_label
          }
        }) => {
          return archive_link_label;
        }
      },
      viewType: {
        type: 'string',
        shortcode: ({
          named: {
            view
          }
        }) => {
          return view;
        }
      },
      numOfStories: {
        type: 'number',
        shortcode: ({
          named: {
            number
          }
        }) => {
          return number;
        }
      },
      numOfColumns: {
        type: 'number',
        shortcode: ({
          named: {
            columns
          }
        }) => {
          return columns;
        }
      },
      circleSize: {
        type: 'number',
        shortcode: ({
          named: {
            circle_size
          }
        }) => {
          return circle_size;
        }
      },
      fieldState: {
        type: 'object',
        shortcode: ({
          named: {
            title,
            excerpt,
            author,
            date,
            archive_link,
            image_align
          }
        }) => {
          // Need this type conversion as the block is expecting following to be boolean.
          return {
            show_archive_link: 'true' === archive_link,
            show_author: 'true' === author,
            show_date: 'true' === date,
            show_excerpt: 'true' === excerpt,
            show_image_align: 'true' === image_align,
            show_title: 'true' === title
          };
        }
      }
    }
  }, {
    type: 'block',
    blocks: ['core/legacy-widget'],
    isMatch: ({
      idBase,
      instance
    }) => {
      if (!(instance !== null && instance !== void 0 && instance.raw)) {
        // Can't transform if raw instance is not shown in REST API.
        return false;
      }

      return idBase === 'web_stories_widget';
    },
    transform: ({
      instance
    }) => {
      const {
        raw: {
          archive_link_label: archiveLinkLabel,
          circle_size: circleSize,
          image_alignment: imageAlignment,
          number_of_columns: numOfColumns,
          number_of_stories: numOfStories,
          view_type: viewType,
          show_title,
          show_author,
          show_date,
          show_excerpt,
          show_archive_link,
          sharp_corners: show_sharp_corners,
          show_image_alignment,
          title,
          orderby = '',
          order = ''
        }
      } = instance;
      const transformedBlock = Object(external_wp_blocks_["createBlock"])('web-stories/embed', {
        blockType: 'latest-stories',
        viewType,
        fieldState: {
          show_title,
          show_author,
          show_date,
          show_excerpt,
          show_archive_link,
          show_sharp_corners,
          show_image_alignment
        },
        archiveLinkLabel,
        circleSize,
        numOfColumns,
        imageAlignment,
        numOfStories,
        orderby: orderby.replace('post_', ''),
        order: order.toLowerCase()
      });

      if (!title) {
        return transformedBlock;
      }

      return [Object(external_wp_blocks_["createBlock"])('core/heading', {
        content: title
      }), transformedBlock];
    }
  }]
};
/* harmony default export */ var block_transforms = (transforms);
// CONCATENATED MODULE: ./packages/stories-block/src/block/index.js


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */








const {
  name: block_name,
  category,
  keywords,
  attributes: block_attributes,
  supports
} = block;
const settings = {
  title: Object(external_wp_i18n_["__"])('Web Stories', 'web-stories'),
  description: Object(external_wp_i18n_["__"])('Embed stories using various layout options.', 'web-stories'),
  category,
  icon: /*#__PURE__*/external_React_default.a.createElement(icons["b" /* BlockIcon */], null),
  keywords,
  attributes: block_attributes,
  example: {
    attributes: {
      blockType: BLOCK_TYPE_LATEST_STORIES,
      viewType: GRID_VIEW_TYPE,
      numberOfColumns: 2
    }
  },
  supports,
  deprecated: block_deprecated,
  edit: block_edit,
  save: block_save,
  transforms: block_transforms
};

// CONCATENATED MODULE: ./packages/stories-block/src/index.js
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */
// The __webpack_public_path__ assignment will be done after the imports.
// That's why the public path assignment is in its own dedicated module and imported here at the very top.
// See https://webpack.js.org/guides/public-path/#on-the-fly

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


Object(external_wp_blocks_["registerBlockType"])(block_name, settings);
Object(src["a" /* initializeTracking */])('Embed Block', false);

/***/ })
/******/ ]);