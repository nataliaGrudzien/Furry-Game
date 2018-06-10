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
/******/ 	__webpack_require__.p = "js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {

    var Game = __webpack_require__(/*! ./game.js */ "./js/game.js");

    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();

    document.addEventListener('keydown', function (event) {
        game.turnFurry(event);
    });
});

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Coin = function Coin() {
	this.x = Math.floor(Math.random() * 10);
	this.y = Math.floor(Math.random() * 10);
};

module.exports = Coin;

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Furry = function Furry() {
	this.x = 0;
	this.y = 0;
	this.direction = "right";
};

module.exports = Furry;

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Coin = __webpack_require__(/*! ./coin.js */ "./js/coin.js");
var Furry = __webpack_require__(/*! ./furry.js */ "./js/furry.js");

var Game = function Game() {
  this.board = document.getElementById("board").children;
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  this.index = function (x, y) {
    return x + y * 10;
  };
  this.showFurry = function () {
    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    if (this.furry.direction === "right") {
      document.querySelector('.furry').style.transform = 'rotate(180deg)';
    } else if (this.furry.direction === "left") {
      document.querySelector('.furry').style.transform = 'rotate(0deg)';
    } else if (this.furry.direction === "up") {
      document.querySelector('.furry').style.transform = 'rotate(90deg)';
    } else if (this.furry.direction === "down") {
      document.querySelector('.furry').style.transform = 'rotate(270deg)';
    };
  };

  this.hideVisibleFurry = function () {
    document.querySelector(".furry").classList.remove('furry');
  };

  this.showCoin = function () {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
  };

  this.moveFurry = function () {

    this.hideVisibleFurry();

    if (this.furry.direction === "right") {
      this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "left") {
      this.furry.x = this.furry.x - 1;
    } else if (this.furry.direction === "up") {
      this.furry.y = this.furry.y - 1;
    } else if (this.furry.direction === "down") {
      this.furry.y = this.furry.y + 1;
    }

    this.gameOver();
    this.showFurry();
    this.checkCoinCollision();
  };

  this.turnFurry = function (event) {
    switch (event.which) {
      case 37:
        this.furry.direction = "left";
        break;
      case 38:
        this.furry.direction = "up";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 40:
        this.furry.direction = "down";
        break;
    };
  };

  this.checkCoinCollision = function () {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
      this.score++;
      document.querySelector("#score strong").innerText = this.score;
      this.coin = new Coin();
      this.showCoin();
    }
  };

  this.gameOver = function () {
    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
      clearInterval(this.idSetInterval);
      document.querySelector("#score div").innerText = "Game over! " + "Your result: " + this.score;
      this.hideVisibleFurry();
    }
  };

  this.startGame = function () {
    var self = this;
    this.idSetInterval = setInterval(function () {
      self.moveFurry();
    }, 250);
  };
};

module.exports = Game;

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=out.js.map