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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","domReady"]
var external_wp_domReady_ = __webpack_require__(0);
var external_wp_domReady_default = /*#__PURE__*/__webpack_require__.n(external_wp_domReady_);

// CONCATENATED MODULE: ./packages/stories-lightbox/src/web-stories-lightbox.js
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
 * Handles the 'amp-story-player' lightbox.
 *
 * Displays the story that user interacted with in a lightbox.
 */
class Lightbox {
  constructor(wrapperDiv) {
    if ('undefined' === typeof wrapperDiv) {
      return;
    }

    this.lightboxInitialized = false;
    this.wrapperDiv = wrapperDiv;
    this.instanceId = this.wrapperDiv.dataset.id;
    this.lightboxElement = document.querySelector(`.ws-lightbox-${this.instanceId} .web-stories-list__lightbox`);
    this.player = this.lightboxElement.querySelector('amp-story-player');

    if ('undefined' === typeof this.player || 'undefined' === typeof this.lightboxElement) {
      return;
    }

    if (this.player.isReady && !this.lightboxInitialized) {
      this.initializeLightbox();
    }

    this.player.addEventListener('ready', () => {
      if (!this.lightboxInitialized) {
        this.initializeLightbox();
      }
    }); // Event triggered when user clicks on close (X) button.

    this.player.addEventListener('amp-story-player-close', () => {
      // Rewind the story and pause there upon closing the lightbox.
      this.player.rewind();
      this.player.pause();
      this.player.mute();
      this.lightboxElement.classList.toggle('show');
      document.body.classList.toggle('web-stories-lightbox-open');
    });
  }

  initializeLightbox() {
    this.stories = this.player.getStories();
    this.bindStoryClickListeners();
    this.lightboxInitialized = true;
  }

  bindStoryClickListeners() {
    const cards = this.wrapperDiv.querySelectorAll('.web-stories-list__story');
    cards.forEach(card => {
      card.addEventListener('click', event => {
        event.preventDefault();
        const storyObject = this.stories.find(story => story.href === card.querySelector('a').href);
        this.player.show(storyObject.href);
        this.player.play();
        this.lightboxElement.classList.toggle('show');
        document.body.classList.toggle('web-stories-lightbox-open');
      });
    });
  }

}

function initializeWebStoryLightbox() {
  const webStoryBlocks = document.getElementsByClassName('web-stories-list');

  if ('undefined' !== typeof webStoryBlocks) {
    Array.from(webStoryBlocks).forEach(webStoryBlock => {
      /* eslint-disable-next-line no-new -- we do not store the object as no further computation required. */
      new Lightbox(webStoryBlock);
    });
  }
}
// CONCATENATED MODULE: ./packages/stories-lightbox/src/index.js
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


external_wp_domReady_default()(() => {
  initializeWebStoryLightbox();
});

/***/ })
/******/ ]);