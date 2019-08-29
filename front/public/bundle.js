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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/classes/Archer.js":
/*!**********************************!*\
  !*** ./public/classes/Archer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./public/classes/Player.js\");\n\n\nfunction Archer(){\n    this.health = 900;\n    this.maxHealth = this.health;\n    this.mana = 0;\n    this.maxMana = this.mana;\n    this.damage = 180;\n    this.healingPower = 0;\n    this.healingCost = 0;\n    this.criticalChance = 35; //%\n    this.criticalDamage = 1.25;\n}\n\nArcher.prototype = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Archer);\n\n//# sourceURL=webpack:///./public/classes/Archer.js?");

/***/ }),

/***/ "./public/classes/Mage.js":
/*!********************************!*\
  !*** ./public/classes/Mage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./public/classes/Player.js\");\n\n\nfunction Mage(){\n    this.health = 700;\n    this.maxHealth = this.health;\n    this.mana = 600;\n    this.maxMana = this.mana;\n    this.damage = 200;\n    this.healingPower = 250;\n    this.healingCost = 60;\n    this.criticalChance = 15; //%\n    this.criticalDamage = 2;\n}\n\nMage.prototype = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mage);\n\n//# sourceURL=webpack:///./public/classes/Mage.js?");

/***/ }),

/***/ "./public/classes/Player.js":
/*!**********************************!*\
  !*** ./public/classes/Player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Player(nick_name, class_name){\n    this.nick_name = nick_name;\n    this.class_name = class_name;\n}\n\n\n//ACTION FUNCTIONS\nPlayer.prototype.attackPlayer = function(player){\n    if ( player.health > 0 ) {\n        this.isCriticalHit() ? (player.health -= this.damage * this.criticalDamage) : (player.health -= this.damage);\n        player.health < 0 ? player.health = 0 : null;\n    }\n}\n\nPlayer.prototype.healPlayer = function(player){\n    if ( this.mana > this.healingCost && player.health < player.maxHealth ){\n        player.health += this.healingPower;\n        player.health > player.maxHealth ? player.health = player.maxHealth : null;\n        this.mana -= this.healingCost;\n        this.mana < 0 ? this.mana = 0 : null;\n    }\n}\n\n//CALCULATION FUNCTIONS\nPlayer.prototype.isCriticalHit = function(){\n    let result = Math.round(Math.random() * 100);\n    return result <= this.criticalChance ? true : false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./public/classes/Player.js?");

/***/ }),

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Archer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Archer.js */ \"./public/classes/Archer.js\");\n/* harmony import */ var _classes_Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Player.js */ \"./public/classes/Player.js\");\n/* harmony import */ var _classes_Mage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Mage.js */ \"./public/classes/Mage.js\");\n\n\n\n\nvar mage = new _classes_Mage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar archer = new _classes_Archer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nlet button = document.createElement('button');\nbutton.textContent = \"Attack Archer\";\nbutton.onclick = function(){\n    mage.attackPlayer(archer);\n}\ndocument.body.appendChild(button);\n\nlet button2 = document.createElement('button');\nbutton2.textContent = \"Heal Archer\";\nbutton2.onclick = function(){\n    mage.healPlayer(archer);\n}\ndocument.body.appendChild(button2);\n\nlet button3 = document.createElement('button');\nbutton3.textContent = \"Status\";\nbutton3.onclick = function(){\n    console.log(mage);\n    console.log(archer);\n}\ndocument.body.appendChild(button3);\n\nvar gameArea = {\n    canvas: document.createElement('canvas'),\n    start(){\n        this.addCanvas();\n        this.addEventListeners();\n        this.interval = setInterval(this.updateGameArea, 1000/60);\n    },\n    addCanvas(){\n        this.canvas.width = 400;\n        this.canvas.height = 400;\n        this.ctx = this.canvas.getContext('2d');\n        document.body.appendChild(this.canvas);\n    },\n    addEventListeners(){\n        document.body.addEventListener('mousedown', this.mouseDown);\n        document.body.addEventListener('mousemove', this.mouseMove);\n        document.body.addEventListener('mouseup', this.mouseUp);\n    },\n    mouseDown(e){\n\n    },\n    mouseMove(e){\n\n    },\n    mouseUp(e){\n \n    },\n    updateGameArea(){\n        gameArea.ctx.clearRect(0, 0, gameArea.canvas.width, gameArea.canvas.height);\n    }\n}\n\n//gameArea.start();\n\n//# sourceURL=webpack:///./public/index.js?");

/***/ })

/******/ });