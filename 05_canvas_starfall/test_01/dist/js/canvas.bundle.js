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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight; // const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

var colors = ["#1D89CC", // bl
"#145E8C", // bl dark
"#092B40", "#0B334D", "#072233"];
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Stars = vel - velocity | fri - friction | gra - gravity

var Star = function Star(x, y, radius, color) {
  _classCallCheck(this, Star);

  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.vel = {
    x: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-5, 5),
    y: 6
  };
  this.fri = 0.8;
  this.gra = 1;
};

Star.prototype.draw = function () {
  c.save();
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.shadowColor = '#E3EAEF';
  c.shadowBlur = 20;
  c.fill();
  c.closePath();
  c.restore();
};

Star.prototype.update = function () {
  this.draw(); // When ball hits bot of screen

  if (this.y + this.radius + this.vel.y > canvas.height - groundHeight) {
    this.vel.y = -this.vel.y * this.fri;
    this.shatter();
    console.log("hit bottom");
  } else {
    this.vel.y += this.gra;
  } // Hits side of screen


  if (this.x + this.vel.x > canvas.width || this.x + this.vel.x <= 0) {
    this.vel.x = -this.vel.x;
    this.shatter();
  }

  this.y += this.vel.y;
  this.x += this.vel.x;
};

Star.prototype.shatter = function () {
  this.radius -= 1.5;

  if (!this.radius < 12) {
    for (var i = 0; i < 8; i++) {
      miniStars.push(new MiniStar(this.x, this.y, 2));
    }
  }
};

innerHeight;

var MiniStar = /*#__PURE__*/function (_Star) {
  _inherits(MiniStar, _Star);

  var _super = _createSuper(MiniStar);

  function MiniStar(x, y, radius, color) {
    var _this;

    _classCallCheck(this, MiniStar);

    _this = _super.call(this, x, y, radius, color);
    _this.vel = {
      x: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-5, 5),
      y: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-15, 45)
    };
    _this.fri = 0.6;
    _this.gra = 1;
    _this.ttl = 100;
    _this.opacity = 1;
    return _this;
  }

  return MiniStar;
}(Star);

MiniStar.prototype.draw = function () {
  c.save();
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = "rgba(240, 230, 230, ".concat(this.opacity, ")");
  c.shadowColor = '#E3EAEF';
  c.shadowBlur = 20;
  c.fill();
  c.closePath();
  c.restore();
};

MiniStar.prototype.update = function () {
  this.draw(); // When ball hits bot of screen

  if (this.y + this.radius + this.vel.y > innerHeight - groundHeight) {
    this.vel.y = -this.vel.y * this.fri;
  } else {
    this.vel.y += this.gra;
  }

  this.x += this.vel.x;
  this.y += this.vel.y;
  this.ttl -= 1;
  this.opacity -= 1 / this.ttl; // || this.opacity = this.ttl / 100;
};

function createMountainRange(mountainAmount, height, color) {
  for (var i = 0; i < mountainAmount; i++) {
    var mountainWidth = canvas.width / mountainAmount;
    c.beginPath();
    c.moveTo(i * mountainWidth, canvas.width);
    c.lineTo(i * mountainWidth + mountainWidth + 200, canvas.height);
    c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
    c.lineTo(i * mountainWidth - 200, canvas.height); // end in moveTo position

    c.fillStyle = color;
    c.fill();
    c.closePath();
  }
} // Implementation


var backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, colors[0]);
backgroundGradient.addColorStop(1, colors[1]);
var stars, miniStars, backgroundStars;
var ticker = 0;
var groundHeight = 100;

function init() {
  stars = [];
  miniStars = [];
  backgroundStars = []; // for (let i = 0; i < 1; i++) {
  //   stars.push( new Star(canvas.width/2, 25, 30, "#fff" ) );
  //   // stars.push( new MiniStar(canvas.width/3, 30, 10, utils.randomColor(colors) ) );
  // }

  for (var i = 0; i < 100; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var rad = Math.random() * 3;
    backgroundStars.push(new Star(x, y, rad, "white"));
  }
} // Animation Loop


function animate() {
  requestAnimationFrame(animate); // c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height); // Sky stars

  backgroundStars.forEach(function (backgroundStar, index) {
    backgroundStar.draw();
  });
  createMountainRange(1, canvas.height * .8, colors[2]);
  createMountainRange(2, canvas.height * .5, colors[3]);
  createMountainRange(3, canvas.height * .3, colors[4]);
  c.fillStyle = colors[3];
  c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight); // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)

  c.font = "30px Arial";
  c.fillText("Kote", 100, 200);
  stars.forEach(function (star, index) {
    star.update();

    if (star.radius < 0) {
      stars.splice(index, 1);
    }
  });
  miniStars.forEach(function (miniStar, index) {
    miniStar.update();

    if (miniStar.ttl < 1) {
      miniStars.splice(index, 1);
    }
  });
  ticker++;
  var shootingStarTime = 80;

  if (ticker % shootingStarTime == 0) {
    var radius = 12;
    var x = Math.max(radius, Math.random() * canvas.width - radius);
    stars.push(new Star(x, -100, radius, 'white'));
    shootingStarTime = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(80, 200);
    ticker = 0;
  }
}

init();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map