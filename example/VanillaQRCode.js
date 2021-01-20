/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Quagga"] = factory();
	else
		root["Quagga"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(19);

var assertThisInitialized = __webpack_require__(1);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(160);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  EPSILON: __webpack_require__(45),
  create: __webpack_require__(46),
  clone: __webpack_require__(92),
  fromValues: __webpack_require__(93),
  copy: __webpack_require__(94),
  set: __webpack_require__(95),
  equals: __webpack_require__(96),
  exactEquals: __webpack_require__(97),
  add: __webpack_require__(98),
  subtract: __webpack_require__(47),
  sub: __webpack_require__(99),
  multiply: __webpack_require__(48),
  mul: __webpack_require__(100),
  divide: __webpack_require__(49),
  div: __webpack_require__(101),
  inverse: __webpack_require__(102),
  min: __webpack_require__(103),
  max: __webpack_require__(104),
  rotate: __webpack_require__(105),
  floor: __webpack_require__(106),
  ceil: __webpack_require__(107),
  round: __webpack_require__(108),
  scale: __webpack_require__(109),
  scaleAndAdd: __webpack_require__(110),
  distance: __webpack_require__(50),
  dist: __webpack_require__(111),
  squaredDistance: __webpack_require__(51),
  sqrDist: __webpack_require__(112),
  length: __webpack_require__(52),
  len: __webpack_require__(113),
  squaredLength: __webpack_require__(53),
  sqrLen: __webpack_require__(114),
  negate: __webpack_require__(115),
  normalize: __webpack_require__(116),
  dot: __webpack_require__(117),
  cross: __webpack_require__(118),
  lerp: __webpack_require__(119),
  random: __webpack_require__(120),
  transformMat2: __webpack_require__(121),
  transformMat2d: __webpack_require__(122),
  transformMat3: __webpack_require__(123),
  transformMat4: __webpack_require__(124),
  forEach: __webpack_require__(125),
  limit: __webpack_require__(126)
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ imageRef; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ otsuThreshold; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ cv_utils_cluster; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ topGeneric; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ grayAndHalfSampleFromCanvasData; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ computeGray; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ halfSample; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ hsv2rgb; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ calculatePatchSize; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ computeImageArea; });

// UNUSED EXPORTS: computeIntegralImage2, computeIntegralImage, thresholdImage, computeHistogram, sharpenLine, determineOtsuThreshold, computeBinaryImage, Tracer, DILATE, ERODE, dilate, erode, subtract, bitwiseOr, countNonZero, grayArrayFromImage, grayArrayFromContext, loadImageArray, _computeDivisors, _parseCSSDimensionValues, _dimensionsConverters

// EXTERNAL MODULE: ./node_modules/gl-vec2/index.js
var gl_vec2 = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/gl-vec3/index.js
var gl_vec3 = __webpack_require__(83);

// CONCATENATED MODULE: ./src/common/cluster.js
// TODO: cluster.js and cv_utils.js are pretty tightly intertwined, making for a complex conversion
// into typescript. be warned. :-)

var vec2 = {
  clone: gl_vec2["clone"],
  dot: gl_vec2["dot"]
};
/**
 * Creates a cluster for grouping similar orientations of datapoints
 */

/* harmony default export */ var cluster = ({
  create: function create(point, threshold) {
    var points = [];
    var center = {
      rad: 0,
      vec: vec2.clone([0, 0])
    };
    var pointMap = {};

    function _add(pointToAdd) {
      pointMap[pointToAdd.id] = pointToAdd;
      points.push(pointToAdd);
    }

    function updateCenter() {
      var i;
      var sum = 0;

      for (i = 0; i < points.length; i++) {
        sum += points[i].rad;
      }

      center.rad = sum / points.length;
      center.vec = vec2.clone([Math.cos(center.rad), Math.sin(center.rad)]);
    }

    function init() {
      _add(point);

      updateCenter();
    }

    init();
    return {
      add: function add(pointToAdd) {
        if (!pointMap[pointToAdd.id]) {
          _add(pointToAdd);

          updateCenter();
        }
      },
      fits: function fits(otherPoint) {
        // check cosine similarity to center-angle
        var similarity = Math.abs(vec2.dot(otherPoint.point.vec, center.vec));

        if (similarity > threshold) {
          return true;
        }

        return false;
      },
      getPoints: function getPoints() {
        return points;
      },
      getCenter: function getCenter() {
        return center;
      }
    };
  },
  createPoint: function createPoint(newPoint, id, property) {
    return {
      rad: newPoint[property],
      point: newPoint,
      id: id
    };
  }
});
// EXTERNAL MODULE: ./src/common/array_helper.ts
var array_helper = __webpack_require__(10);

// CONCATENATED MODULE: ./src/common/cv_utils.js
/* eslint-disable no-mixed-operators */

/* eslint-disable no-bitwise */




var cv_utils_vec2 = {
  clone: gl_vec2["clone"]
};
var vec3 = {
  clone: gl_vec3["clone"]
};
/**
 * @param x x-coordinate
 * @param y y-coordinate
 * @return ImageReference {x,y} Coordinate
 */

function imageRef(x, y) {
  var that = {
    x: x,
    y: y,
    toVec2: function toVec2() {
      return cv_utils_vec2.clone([this.x, this.y]);
    },
    toVec3: function toVec3() {
      return vec3.clone([this.x, this.y, 1]);
    },
    round: function round() {
      this.x = this.x > 0.0 ? Math.floor(this.x + 0.5) : Math.floor(this.x - 0.5);
      this.y = this.y > 0.0 ? Math.floor(this.y + 0.5) : Math.floor(this.y - 0.5);
      return this;
    }
  };
  return that;
}
function thresholdImage(imageWrapper, threshold, targetWrapper) {
  if (!targetWrapper) {
    // eslint-disable-next-line no-param-reassign
    targetWrapper = imageWrapper;
  }

  var imageData = imageWrapper.data;
  var length = imageData.length;
  var targetData = targetWrapper.data;

  while (length--) {
    targetData[length] = imageData[length] < threshold ? 1 : 0;
  }
}
function computeHistogram(imageWrapper, bitsPerPixel) {
  if (!bitsPerPixel) {
    // eslint-disable-next-line no-param-reassign
    bitsPerPixel = 8;
  }

  var imageData = imageWrapper.data;
  var length = imageData.length;
  var bitShift = 8 - bitsPerPixel;
  var bucketCnt = 1 << bitsPerPixel;
  var hist = new Int32Array(bucketCnt);

  while (length--) {
    hist[imageData[length] >> bitShift]++;
  }

  return hist;
}
function determineOtsuThreshold(imageWrapper) {
  var bitsPerPixel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var hist;
  var bitShift = 8 - bitsPerPixel;

  function px(init, end) {
    var sum = 0;

    for (var i = init; i <= end; i++) {
      sum += hist[i];
    }

    return sum;
  }

  function mx(init, end) {
    var sum = 0;

    for (var i = init; i <= end; i++) {
      sum += i * hist[i];
    }

    return sum;
  }

  function determineThreshold() {
    var vet = [0];
    var p1;
    var p2;
    var p12;
    var m1;
    var m2;
    var m12;
    var max = (1 << bitsPerPixel) - 1;
    hist = computeHistogram(imageWrapper, bitsPerPixel);

    for (var k = 1; k < max; k++) {
      p1 = px(0, k);
      p2 = px(k + 1, max);
      p12 = p1 * p2;

      if (p12 === 0) {
        p12 = 1;
      }

      m1 = mx(0, k) * p2;
      m2 = mx(k + 1, max) * p1;
      m12 = m1 - m2;
      vet[k] = m12 * m12 / p12;
    }

    return array_helper["a" /* default */].maxIndex(vet);
  }

  var threshold = determineThreshold();
  return threshold << bitShift;
}
function otsuThreshold(imageWrapper, targetWrapper) {
  var threshold = determineOtsuThreshold(imageWrapper);
  thresholdImage(imageWrapper, threshold, targetWrapper);
  return threshold;
} // local thresholding
function cv_utils_cluster(points, threshold, property) {
  var i;
  var k;
  var thisCluster;
  var point;
  var clusters = [];

  if (!property) {
    // eslint-disable-next-line no-param-reassign
    property = 'rad';
  }

  function addToCluster(newPoint) {
    var found = false;

    for (k = 0; k < clusters.length; k++) {
      thisCluster = clusters[k];

      if (thisCluster.fits(newPoint)) {
        thisCluster.add(newPoint);
        found = true;
      }
    }

    return found;
  } // iterate over each cloud


  for (i = 0; i < points.length; i++) {
    point = cluster.createPoint(points[i], i, property);

    if (!addToCluster(point)) {
      clusters.push(cluster.create(point, threshold));
    }
  }

  return clusters;
}
function topGeneric(list, top, scoreFunc) {
  var i;
  var minIdx = 0;
  var min = 0;
  var queue = [];
  var score;
  var hit;
  var pos;

  for (i = 0; i < top; i++) {
    queue[i] = {
      score: 0,
      item: null
    };
  }

  for (i = 0; i < list.length; i++) {
    score = scoreFunc.apply(this, [list[i]]);

    if (score > min) {
      hit = queue[minIdx];
      hit.score = score;
      hit.item = list[i];
      min = Number.MAX_VALUE;

      for (pos = 0; pos < top; pos++) {
        if (queue[pos].score < min) {
          min = queue[pos].score;
          minIdx = pos;
        }
      }
    }
  }

  return queue;
}
function grayAndHalfSampleFromCanvasData(canvasData, size, outArray) {
  var topRowIdx = 0;
  var bottomRowIdx = size.x;
  var endIdx = Math.floor(canvasData.length / 4);
  var outWidth = size.x / 2;
  var outImgIdx = 0;
  var inWidth = size.x;
  var i;

  while (bottomRowIdx < endIdx) {
    for (i = 0; i < outWidth; i++) {
      // eslint-disable-next-line no-param-reassign
      outArray[outImgIdx] = (0.299 * canvasData[topRowIdx * 4 + 0] + 0.587 * canvasData[topRowIdx * 4 + 1] + 0.114 * canvasData[topRowIdx * 4 + 2] + (0.299 * canvasData[(topRowIdx + 1) * 4 + 0] + 0.587 * canvasData[(topRowIdx + 1) * 4 + 1] + 0.114 * canvasData[(topRowIdx + 1) * 4 + 2]) + (0.299 * canvasData[bottomRowIdx * 4 + 0] + 0.587 * canvasData[bottomRowIdx * 4 + 1] + 0.114 * canvasData[bottomRowIdx * 4 + 2]) + (0.299 * canvasData[(bottomRowIdx + 1) * 4 + 0] + 0.587 * canvasData[(bottomRowIdx + 1) * 4 + 1] + 0.114 * canvasData[(bottomRowIdx + 1) * 4 + 2])) / 4;
      outImgIdx++;
      topRowIdx += 2;
      bottomRowIdx += 2;
    }

    topRowIdx += inWidth;
    bottomRowIdx += inWidth;
  }
}
function computeGray(imageData, outArray, config) {
  var l = imageData.length / 4 | 0;
  var singleChannel = config && config.singleChannel === true;

  if (singleChannel) {
    for (var i = 0; i < l; i++) {
      // eslint-disable-next-line no-param-reassign
      outArray[i] = imageData[i * 4 + 0];
    }
  } else {
    for (var _i = 0; _i < l; _i++) {
      // eslint-disable-next-line no-param-reassign
      outArray[_i] = 0.299 * imageData[_i * 4 + 0] + 0.587 * imageData[_i * 4 + 1] + 0.114 * imageData[_i * 4 + 2];
    }
  }
}
/**
 * @param inImg {ImageWrapper} input image to be sampled
 * @param outImg {ImageWrapper} to be stored in
 */

function halfSample(inImgWrapper, outImgWrapper) {
  var inImg = inImgWrapper.data;
  var inWidth = inImgWrapper.size.x;
  var outImg = outImgWrapper.data;
  var topRowIdx = 0;
  var bottomRowIdx = inWidth;
  var endIdx = inImg.length;
  var outWidth = inWidth / 2;
  var outImgIdx = 0;

  while (bottomRowIdx < endIdx) {
    for (var i = 0; i < outWidth; i++) {
      outImg[outImgIdx] = Math.floor((inImg[topRowIdx] + inImg[topRowIdx + 1] + inImg[bottomRowIdx] + inImg[bottomRowIdx + 1]) / 4);
      outImgIdx++;
      topRowIdx += 2;
      bottomRowIdx += 2;
    }

    topRowIdx += inWidth;
    bottomRowIdx += inWidth;
  }
}
function hsv2rgb(hsv) {
  var rgb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
  var h = hsv[0];
  var s = hsv[1];
  var v = hsv[2];
  var c = v * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = v - c;
  var r = 0;
  var g = 0;
  var b = 0;

  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else if (h < 360) {
    r = c;
    b = x;
  } // eslint-disable-next-line no-param-reassign


  rgb[0] = (r + m) * 255 | 0; // eslint-disable-next-line no-param-reassign

  rgb[1] = (g + m) * 255 | 0; // eslint-disable-next-line no-param-reassign

  rgb[2] = (b + m) * 255 | 0;
  return rgb;
}
function _computeDivisors(n) {
  var largeDivisors = [];
  var divisors = [];

  for (var i = 1; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      divisors.push(i);

      if (i !== n / i) {
        largeDivisors.unshift(Math.floor(n / i));
      }
    }
  }

  return divisors.concat(largeDivisors);
}

function _computeIntersection(arr1, arr2) {
  var i = 0;
  var j = 0;
  var result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return result;
}

function calculatePatchSize(patchSize, imgSize) {
  var divisorsX = _computeDivisors(imgSize.x);

  var divisorsY = _computeDivisors(imgSize.y);

  var wideSide = Math.max(imgSize.x, imgSize.y);

  var common = _computeIntersection(divisorsX, divisorsY);

  var nrOfPatchesList = [8, 10, 15, 20, 32, 60, 80];
  var nrOfPatchesMap = {
    'x-small': 5,
    small: 4,
    medium: 3,
    large: 2,
    'x-large': 1
  };
  var nrOfPatchesIdx = nrOfPatchesMap[patchSize] || nrOfPatchesMap.medium;
  var nrOfPatches = nrOfPatchesList[nrOfPatchesIdx];
  var desiredPatchSize = Math.floor(wideSide / nrOfPatches);
  var optimalPatchSize;

  function findPatchSizeForDivisors(divisors) {
    var i = 0;
    var found = divisors[Math.floor(divisors.length / 2)];

    while (i < divisors.length - 1 && divisors[i] < desiredPatchSize) {
      i++;
    }

    if (i > 0) {
      if (Math.abs(divisors[i] - desiredPatchSize) > Math.abs(divisors[i - 1] - desiredPatchSize)) {
        found = divisors[i - 1];
      } else {
        found = divisors[i];
      }
    }

    if (desiredPatchSize / found < nrOfPatchesList[nrOfPatchesIdx + 1] / nrOfPatchesList[nrOfPatchesIdx] && desiredPatchSize / found > nrOfPatchesList[nrOfPatchesIdx - 1] / nrOfPatchesList[nrOfPatchesIdx]) {
      return {
        x: found,
        y: found
      };
    }

    return null;
  }

  optimalPatchSize = findPatchSizeForDivisors(common);

  if (!optimalPatchSize) {
    optimalPatchSize = findPatchSizeForDivisors(_computeDivisors(wideSide));

    if (!optimalPatchSize) {
      optimalPatchSize = findPatchSizeForDivisors(_computeDivisors(desiredPatchSize * nrOfPatches));
    }
  }

  return optimalPatchSize;
}
function _parseCSSDimensionValues(value) {
  var dimension = {
    value: parseFloat(value),
    unit: value.indexOf('%') === value.length - 1 ? '%' : '%'
  };
  return dimension;
}
var _dimensionsConverters = {
  top: function top(dimension, context) {
    return dimension.unit === '%' ? Math.floor(context.height * (dimension.value / 100)) : null;
  },
  right: function right(dimension, context) {
    return dimension.unit === '%' ? Math.floor(context.width - context.width * (dimension.value / 100)) : null;
  },
  bottom: function bottom(dimension, context) {
    return dimension.unit === '%' ? Math.floor(context.height - context.height * (dimension.value / 100)) : null;
  },
  left: function left(dimension, context) {
    return dimension.unit === '%' ? Math.floor(context.width * (dimension.value / 100)) : null;
  }
};
function computeImageArea(inputWidth, inputHeight, area) {
  var context = {
    width: inputWidth,
    height: inputHeight
  };
  var parsedArea = Object.keys(area).reduce(function (result, key) {
    var value = area[key];

    var parsed = _parseCSSDimensionValues(value);

    var calculated = _dimensionsConverters[key](parsed, context); // eslint-disable-next-line no-param-reassign


    result[key] = calculated;
    return result;
  }, {});
  return {
    sx: parsedArea.left,
    sy: parsedArea.top,
    sw: parsedArea.right - parsedArea.left,
    sh: parsedArea.bottom - parsedArea.top
  };
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// TODO: XYPosition should be an XYObject, but that breaks XYDefinition, which breaks drawPath() below.
// XYDefinition tells us which component of a given array or object is the "X" and which is the "Y".
// Usually this is 0 for X and 1 for Y, but might be used as 'x' for x and 'y' for Y.
/* harmony default export */ __webpack_exports__["a"] = ({
  drawRect: function drawRect(pos, size, ctx, style) {
    ctx.strokeStyle = style.color;
    ctx.fillStyle = style.color;
    ctx.lineWidth = style.lineWidth || 1;
    ctx.beginPath();
    ctx.strokeRect(pos.x, pos.y, size.x, size.y);
  },
  drawPath: function drawPath(path, def, ctx, style) {
    ctx.strokeStyle = style.color;
    ctx.fillStyle = style.color;
    ctx.lineWidth = style.lineWidth;
    ctx.beginPath();
    ctx.moveTo(path[0][def.x], path[0][def.y]);

    for (var j = 1; j < path.length; j++) {
      ctx.lineTo(path[j][def.x], path[j][def.y]);
    }

    ctx.closePath();
    ctx.stroke();
  },
  drawImage: function drawImage(imageData, size, ctx) {
    var canvasData = ctx.getImageData(0, 0, size.x, size.y);
    var data = canvasData.data;
    var canvasDataPos = data.length;
    var imageDataPos = imageData.length;

    if (canvasDataPos / imageDataPos !== 4) {
      return false;
    }

    while (imageDataPos--) {
      var value = imageData[imageDataPos];
      data[--canvasDataPos] = 255;
      data[--canvasDataPos] = value;
      data[--canvasDataPos] = value;
      data[--canvasDataPos] = value;
    }

    ctx.putImageData(canvasData, 0, 0);
    return true;
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init(arr, val) {
    // arr.fill(val);
    var l = arr.length;

    while (l--) {
      arr[l] = val;
    }
  },

  /**
   * Shuffles the content of an array
   */
  shuffle: function shuffle(arr) {
    var i = arr.length - 1;

    for (i; i >= 0; i--) {
      var j = Math.floor(Math.random() * i);
      var x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return arr;
  },
  toPointList: function toPointList(arr) {
    var rows = arr.reduce(function (p, n) {
      var row = "[".concat(n.join(','), "]");
      p.push(row);
      return p;
    }, []);
    return "[".concat(rows.join(',\r\n'), "]");
  },

  /**
   * returns the elements which's score is bigger than the threshold
   */
  threshold: function threshold(arr, _threshold, scoreFunc) {
    var queue = arr.reduce(function (prev, next) {
      if (scoreFunc.apply(arr, [next]) >= _threshold) {
        prev.push(next);
      }

      return prev;
    }, []);
    return queue;
  },
  maxIndex: function maxIndex(arr) {
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[max]) {
        max = i;
      }
    }

    return max;
  },
  max: function max(arr) {
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return max;
  },
  sum: function sum(arr) {
    var length = arr.length;
    var sum = 0;

    while (length--) {
      sum += arr[length];
    }

    return sum;
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_vec2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _cv_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _array_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);







var vec2 = {
  clone: gl_vec2__WEBPACK_IMPORTED_MODULE_4__["clone"]
};

function assertNumberPositive(val) {
  if (val < 0) {
    throw new Error("expected positive number, received ".concat(val));
  }
}

var ImageWrapper = /*#__PURE__*/function () {
  // Represents a basic image combining the data and size. In addition, some methods for
  // manipulation are contained within.
  function ImageWrapper(size, data) {
    var ArrayType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Uint8Array;
    var initialize = arguments.length > 3 ? arguments[3] : undefined;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ImageWrapper);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "data", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "size", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "indexMapping", void 0);

    if (!data) {
      this.data = new ArrayType(size.x * size.y);

      if (initialize) {
        _array_helper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].init(this.data, 0);
      }
    } else {
      this.data = data;
    }

    this.size = size;
  } // tests if a position is within the image, extended out by a border on each side


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ImageWrapper, [{
    key: "inImageWithBorder",
    value: function inImageWithBorder(imgRef) {
      var border = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      assertNumberPositive(border); // TODO: code_128 starts failing miserably when i only allow imgRef to contain positive numbers.
      // TODO: this doesn't make much sense to me, why does it go negative?  Tests are not affected by
      // returning false, but the whole code_128 reader blows up when i throw on negative imgRef.
      // assertNumberPositive(imgRef.x);
      // assertNumberPositive(imgRef.y);

      return imgRef.x >= 0 && imgRef.y >= 0 && imgRef.x < this.size.x + border * 2 && imgRef.y < this.size.y + border * 2;
    } // Copy from THIS ImageWrapper to the new imageWrapper parameter, starting at from, stopping at
    // end of new imageWrapper size.

  }, {
    key: "subImageAsCopy",
    value: function subImageAsCopy(imageWrapper, from) {
      assertNumberPositive(from.x);
      assertNumberPositive(from.y);
      var _imageWrapper$size = imageWrapper.size,
          sizeX = _imageWrapper$size.x,
          sizeY = _imageWrapper$size.y;

      for (var x = 0; x < sizeX; x++) {
        for (var y = 0; y < sizeY; y++) {
          // eslint-disable-next-line no-param-reassign
          imageWrapper.data[y * sizeX + x] = this.data[(from.y + y) * this.size.x + from.x + x];
        }
      }

      return imageWrapper; // TODO: this function really probably should call into ImageWrapper somewhere to make
      // sure that all of it's parameters are set properly, something like
      // ImageWrapper.UpdateFrom()
      // that might take a provided data and size, and make sure there's no invalid indexMapping
      // hanging around, and such.
    } // Retrieve a grayscale value at the given pixel position of the image

  }, {
    key: "get",
    value: function get(x, y) {
      return this.data[y * this.size.x + x];
    } // Retrieve a grayscale value at the given pixel position of the image (safe, whatever that
    // means)

  }, {
    key: "getSafe",
    value: function getSafe(x, y) {
      // cache indexMapping because if we're using it once, we'll probably need it a bunch more
      // too
      if (!this.indexMapping) {
        this.indexMapping = {
          x: [],
          y: []
        };

        for (var i = 0; i < this.size.x; i++) {
          this.indexMapping.x[i] = i;
          this.indexMapping.x[i + this.size.x] = i;
        }

        for (var _i = 0; _i < this.size.y; _i++) {
          this.indexMapping.y[_i] = _i;
          this.indexMapping.y[_i + this.size.y] = _i;
        }
      }

      return this.data[this.indexMapping.y[y + this.size.y] * this.size.x + this.indexMapping.x[x + this.size.x]];
    } // Sets a given pixel position in the image to the given grayscale value

  }, {
    key: "set",
    value: function set(x, y, value) {
      this.data[y * this.size.x + x] = value;
      delete this.indexMapping;
      return this;
    } // Sets the border of the image (1 pixel) to zero

  }, {
    key: "zeroBorder",
    value: function zeroBorder() {
      var _this$size = this.size,
          width = _this$size.x,
          height = _this$size.y;

      for (var i = 0; i < width; i++) {
        // eslint-disable-next-line no-multi-assign
        this.data[i] = this.data[(height - 1) * width + i] = 0;
      }

      for (var _i2 = 1; _i2 < height - 1; _i2++) {
        // eslint-disable-next-line no-multi-assign
        this.data[_i2 * width] = this.data[_i2 * width + (width - 1)] = 0;
      }

      delete this.indexMapping;
      return this;
    } // TODO: this function is entirely too large for me to reason out right at this moment that i'm handling
    // all the rest of it, so this is a verbatim copy of the javascript source, with only tweaks
    // necessary to get it to run, no thought put into it yet.

  }, {
    key: "moments",
    value: function moments(labelCount) {
      var data = this.data;
      var x;
      var y;
      var height = this.size.y;
      var width = this.size.x;
      var val;
      var ysq;
      var labelSum = [];
      var i;
      var label;
      var mu11;
      var mu02;
      var mu20;
      var x_;
      var y_;
      var tmp;
      var result = [];
      var PI = Math.PI;
      var PI_4 = PI / 4;

      if (labelCount <= 0) {
        return result;
      }

      for (i = 0; i < labelCount; i++) {
        labelSum[i] = {
          m00: 0,
          m01: 0,
          m10: 0,
          m11: 0,
          m02: 0,
          m20: 0,
          theta: 0,
          rad: 0
        };
      }

      for (y = 0; y < height; y++) {
        ysq = y * y;

        for (x = 0; x < width; x++) {
          val = data[y * width + x];

          if (val > 0) {
            label = labelSum[val - 1];
            label.m00 += 1;
            label.m01 += y;
            label.m10 += x;
            label.m11 += x * y;
            label.m02 += ysq;
            label.m20 += x * x;
          }
        }
      }

      for (i = 0; i < labelCount; i++) {
        label = labelSum[i]; // eslint-disable-next-line no-restricted-globals

        if (!isNaN(label.m00) && label.m00 !== 0) {
          x_ = label.m10 / label.m00;
          y_ = label.m01 / label.m00;
          mu11 = label.m11 / label.m00 - x_ * y_;
          mu02 = label.m02 / label.m00 - y_ * y_;
          mu20 = label.m20 / label.m00 - x_ * x_;
          tmp = (mu02 - mu20) / (2 * mu11);
          tmp = 0.5 * Math.atan(tmp) + (mu11 >= 0 ? PI_4 : -PI_4) + PI; // eslint-disable-next-line no-mixed-operators

          label.theta = (tmp * 180 / PI + 90) % 180 - 90;

          if (label.theta < 0) {
            label.theta += 180;
          }

          label.rad = tmp > PI ? tmp - PI : tmp;
          label.vec = vec2.clone([Math.cos(tmp), Math.sin(tmp)]);
          result.push(label);
        }
      }

      return result;
    } // return a Uint8ClampedArray containing this grayscale image converted to RGBA form

  }, {
    key: "getAsRGBA",
    value: function getAsRGBA() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;
      var ret = new Uint8ClampedArray(4 * this.size.x * this.size.y);

      for (var y = 0; y < this.size.y; y++) {
        for (var x = 0; x < this.size.x; x++) {
          var pixel = y * this.size.x + x;
          var current = this.get(x, y) * scale;
          ret[pixel * 4 + 0] = current;
          ret[pixel * 4 + 1] = current;
          ret[pixel * 4 + 2] = current;
          ret[pixel * 4 + 3] = 255;
        }
      }

      return ret;
    } // Display this ImageWrapper in a given Canvas element at the specified scale

  }, {
    key: "show",
    value: function show(canvas) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
      var ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('Unable to get canvas context');
      }

      var frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = this.getAsRGBA(scale); // eslint-disable-next-line no-param-reassign

      canvas.width = this.size.x; // eslint-disable-next-line no-param-reassign

      canvas.height = this.size.y;
      var newFrame = new ImageData(data, frame.width, frame.height);
      ctx.putImageData(newFrame, 0, 0);
    } // Displays a specified SubImage area in a given canvas. This differs drastically from
    // creating a new SubImage and using it's show() method. Why? I don't have the answer to that
    // yet.  I suspect the HSV/RGB operations involved here are making it significantly different,
    // but until I can visualize these functions side by side, I'm just going to copy the existing
    // implementation.

  }, {
    key: "overlay",
    value: function overlay(canvas, inScale, from) {
      var adjustedScale = inScale < 0 || inScale > 360 ? 360 : inScale;
      var hsv = [0, 1, 1];
      var rgb = [0, 0, 0];
      var whiteRgb = [255, 255, 255];
      var blackRgb = [0, 0, 0];
      var result = [];
      var ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('Unable to get canvas context');
      }

      var frame = ctx.getImageData(from.x, from.y, this.size.x, this.size.y);
      var data = frame.data;
      var length = this.data.length;

      while (length--) {
        hsv[0] = this.data[length] * adjustedScale; // eslint-disable-next-line no-nested-ternary

        result = hsv[0] <= 0 ? whiteRgb : hsv[0] >= 360 ? blackRgb : Object(_cv_utils__WEBPACK_IMPORTED_MODULE_5__[/* hsv2rgb */ "g"])(hsv, rgb);
        var pos = length * 4;
        var _result = result;

        var _result2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_result, 3);

        data[pos] = _result2[0];
        data[pos + 1] = _result2[1];
        data[pos + 2] = _result2[2];
        data[pos + 3] = 255;
      }

      ctx.putImageData(frame, from.x, from.y);
    }
  }]);

  return ImageWrapper;
}();

/* harmony default export */ __webpack_exports__["a"] = (ImageWrapper);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(161),
    createAssigner = __webpack_require__(216);
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(226);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(67);
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/**
 * http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */
var Tracer = {
  searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
  create: function create(imageWrapper, labelWrapper) {
    var imageData = imageWrapper.data;
    var labelData = labelWrapper.data;
    var searchDirections = this.searchDirections;
    var width = imageWrapper.size.x;
    var pos;

    function _trace(current, color, label, edgelabel) {
      var i;
      var y;
      var x;

      for (i = 0; i < 7; i++) {
        y = current.cy + searchDirections[current.dir][0];
        x = current.cx + searchDirections[current.dir][1];
        pos = y * width + x;

        if (imageData[pos] === color && (labelData[pos] === 0 || labelData[pos] === label)) {
          labelData[pos] = label;
          current.cy = y;
          current.cx = x;
          return true;
        }

        if (labelData[pos] === 0) {
          labelData[pos] = edgelabel;
        }

        current.dir = (current.dir + 1) % 8;
      }

      return false;
    }

    function vertex2D(x, y, dir) {
      return {
        dir: dir,
        x: x,
        y: y,
        next: null,
        prev: null
      };
    }

    function _contourTracing(sy, sx, label, color, edgelabel) {
      var Fv = null;
      var Cv;
      var P;
      var ldir;
      var current = {
        cx: sx,
        cy: sy,
        dir: 0
      };

      if (_trace(current, color, label, edgelabel)) {
        Fv = vertex2D(sx, sy, current.dir);
        Cv = Fv;
        ldir = current.dir;
        P = vertex2D(current.cx, current.cy, 0);
        P.prev = Cv;
        Cv.next = P;
        P.next = null;
        Cv = P;

        do {
          current.dir = (current.dir + 6) % 8;

          _trace(current, color, label, edgelabel);

          if (ldir !== current.dir) {
            Cv.dir = current.dir;
            P = vertex2D(current.cx, current.cy, 0);
            P.prev = Cv;
            Cv.next = P;
            P.next = null;
            Cv = P;
          } else {
            Cv.dir = ldir;
            Cv.x = current.cx;
            Cv.y = current.cy;
          }

          ldir = current.dir;
        } while (current.cx !== sx || current.cy !== sy);

        Fv.prev = Cv.prev;
        Cv.prev.next = Fv;
      }

      return Fv;
    }

    return {
      trace: function trace(current, color, label, edgelabel) {
        return _trace(current, color, label, edgelabel);
      },
      contourTracing: function contourTracing(sy, sx, label, color, edgelabel) {
        return _contourTracing(sy, sx, label, color, edgelabel);
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Tracer);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    getRawTag = __webpack_require__(174),
    objectToString = __webpack_require__(175);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var gl_vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var gl_mat2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _common_cv_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _common_array_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _rasterizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var _skeletonizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86);










var _config;

var _currentImageWrapper;

var _skelImageWrapper;

var _subImageWrapper;

var _labelImageWrapper;

var _patchGrid;

var _patchLabelGrid;

var _imageToPatchGrid;

var _binaryImageWrapper;

var _patchSize;

var _canvasContainer = {
  ctx: {
    binary: null
  },
  dom: {
    binary: null
  }
};
var _numPatches = {
  x: 0,
  y: 0
};

var _inputImageWrapper;

var _skeletonizer;

function initBuffers() {
  if (_config.halfSample) {
    _currentImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]({
      // eslint-disable-next-line no-bitwise
      x: _inputImageWrapper.size.x / 2 | 0,
      // eslint-disable-next-line no-bitwise
      y: _inputImageWrapper.size.y / 2 | 0
    });
  } else {
    _currentImageWrapper = _inputImageWrapper;
  }

  _patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* calculatePatchSize */ "a"])(_config.patchSize, _currentImageWrapper.size); // eslint-disable-next-line no-bitwise

  _numPatches.x = _currentImageWrapper.size.x / _patchSize.x | 0; // eslint-disable-next-line no-bitwise

  _numPatches.y = _currentImageWrapper.size.y / _patchSize.y | 0;
  _binaryImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_currentImageWrapper.size, undefined, Uint8Array, false);
  _labelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_patchSize, undefined, Array, true);
  var skeletonImageData = new ArrayBuffer(64 * 1024);
  _subImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_patchSize, new Uint8Array(skeletonImageData, 0, _patchSize.x * _patchSize.y));
  _skelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_patchSize, new Uint8Array(skeletonImageData, _patchSize.x * _patchSize.y * 3, _patchSize.x * _patchSize.y), undefined, true);
  _skeletonizer = Object(_skeletonizer__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : global, {
    size: _patchSize.x
  }, skeletonImageData);
  _imageToPatchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]({
    // eslint-disable-next-line no-bitwise
    x: _currentImageWrapper.size.x / _subImageWrapper.size.x | 0,
    // eslint-disable-next-line no-bitwise
    y: _currentImageWrapper.size.y / _subImageWrapper.size.y | 0
  }, undefined, Array, true);
  _patchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_imageToPatchGrid.size, undefined, undefined, true);
  _patchLabelGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_imageToPatchGrid.size, undefined, Int32Array, true);
}

function initCanvas() {
  if (_config.useWorker || typeof document === 'undefined') {
    return;
  }

  _canvasContainer.dom.binary = document.createElement('canvas');
  _canvasContainer.dom.binary.className = 'binaryBuffer';

  if (  _config.debug.showCanvas === true) {
    document.querySelector('#debug').appendChild(_canvasContainer.dom.binary);
  }

  _canvasContainer.ctx.binary = _canvasContainer.dom.binary.getContext('2d');
  _canvasContainer.dom.binary.width = _binaryImageWrapper.size.x;
  _canvasContainer.dom.binary.height = _binaryImageWrapper.size.y;
}
/**
 * Creates a bounding box which encloses all the given patches
 * @returns {Array} The minimal bounding box
 */


function boxFromPatches(patches) {
  var overAvg;
  var i;
  var j;
  var patch;
  var transMat;
  var minx = _binaryImageWrapper.size.x;
  var miny = _binaryImageWrapper.size.y;
  var maxx = -_binaryImageWrapper.size.x;
  var maxy = -_binaryImageWrapper.size.y;
  var box;
  var scale; // draw all patches which are to be taken into consideration

  overAvg = 0;

  for (i = 0; i < patches.length; i++) {
    patch = patches[i];
    overAvg += patch.rad;

    if (  _config.debug.showPatches) {
      _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
        color: 'red'
      });
    }
  }

  overAvg /= patches.length;
  overAvg = (overAvg * 180 / Math.PI + 90) % 180 - 90;

  if (overAvg < 0) {
    overAvg += 180;
  }

  overAvg = (180 - overAvg) * Math.PI / 180;
  transMat = gl_mat2__WEBPACK_IMPORTED_MODULE_1__["copy"](gl_mat2__WEBPACK_IMPORTED_MODULE_1__["create"](), [Math.cos(overAvg), Math.sin(overAvg), -Math.sin(overAvg), Math.cos(overAvg)]); // iterate over patches and rotate by angle

  for (i = 0; i < patches.length; i++) {
    patch = patches[i];

    for (j = 0; j < 4; j++) {
      gl_vec2__WEBPACK_IMPORTED_MODULE_0__["transformMat2"](patch.box[j], patch.box[j], transMat);
    }

    if (  _config.debug.boxFromPatches.showTransformed) {
      _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawPath(patch.box, {
        x: 0,
        y: 1
      }, _canvasContainer.ctx.binary, {
        color: '#99ff00',
        lineWidth: 2
      });
    }
  } // find bounding box


  for (i = 0; i < patches.length; i++) {
    patch = patches[i];

    for (j = 0; j < 4; j++) {
      if (patch.box[j][0] < minx) {
        minx = patch.box[j][0];
      }

      if (patch.box[j][0] > maxx) {
        maxx = patch.box[j][0];
      }

      if (patch.box[j][1] < miny) {
        miny = patch.box[j][1];
      }

      if (patch.box[j][1] > maxy) {
        maxy = patch.box[j][1];
      }
    }
  }

  box = [[minx, miny], [maxx, miny], [maxx, maxy], [minx, maxy]];

  if (  _config.debug.boxFromPatches.showTransformedBox) {
    _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawPath(box, {
      x: 0,
      y: 1
    }, _canvasContainer.ctx.binary, {
      color: '#ff0000',
      lineWidth: 2
    });
  }

  scale = _config.halfSample ? 2 : 1; // reverse rotation;

  transMat = gl_mat2__WEBPACK_IMPORTED_MODULE_1__["invert"](transMat, transMat);

  for (j = 0; j < 4; j++) {
    gl_vec2__WEBPACK_IMPORTED_MODULE_0__["transformMat2"](box[j], box[j], transMat);
  }

  if (  _config.debug.boxFromPatches.showBB) {
    _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawPath(box, {
      x: 0,
      y: 1
    }, _canvasContainer.ctx.binary, {
      color: '#ff0000',
      lineWidth: 2
    });
  }

  for (j = 0; j < 4; j++) {
    gl_vec2__WEBPACK_IMPORTED_MODULE_0__["scale"](box[j], box[j], scale);
  }

  return box;
}
/**
 * Creates a binary image of the current image
 */


function binarizeImage() {
  Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* otsuThreshold */ "i"])(_currentImageWrapper, _binaryImageWrapper);

  _binaryImageWrapper.zeroBorder();

  if (  _config.debug.showCanvas) {
    _binaryImageWrapper.show(_canvasContainer.dom.binary, 255);
  }
}
/**
 * Iterate over the entire image
 * extract patches
 */


function findPatches() {
  var i;
  var j;
  var x;
  var y;
  var moments;
  var patchesFound = [];
  var rasterizer;
  var rasterResult;
  var patch;

  for (i = 0; i < _numPatches.x; i++) {
    for (j = 0; j < _numPatches.y; j++) {
      x = _subImageWrapper.size.x * i;
      y = _subImageWrapper.size.y * j; // seperate parts

      skeletonize(x, y); // Rasterize, find individual bars

      _skelImageWrapper.zeroBorder();

      _common_array_helper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init(_labelImageWrapper.data, 0);
      rasterizer = _rasterizer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].create(_skelImageWrapper, _labelImageWrapper);
      rasterResult = rasterizer.rasterize(0);

      if (  _config.debug.showLabels) {
        _labelImageWrapper.overlay(_canvasContainer.dom.binary, Math.floor(360 / rasterResult.count), {
          x: x,
          y: y
        });
      } // calculate moments from the skeletonized patch


      moments = _labelImageWrapper.moments(rasterResult.count); // extract eligible patches

      patchesFound = patchesFound.concat(describePatch(moments, [i, j], x, y));
    }
  }

  if (  _config.debug.showFoundPatches) {
    for (i = 0; i < patchesFound.length; i++) {
      patch = patchesFound[i];
      _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
        color: '#99ff00',
        lineWidth: 2
      });
    }
  }

  return patchesFound;
}
/**
 * Finds those connected areas which contain at least 6 patches
 * and returns them ordered DESC by the number of contained patches
 * @param {Number} maxLabel
 */


function findBiggestConnectedAreas(maxLabel) {
  var i;
  var sum;
  var labelHist = [];
  var topLabels = [];

  for (i = 0; i < maxLabel; i++) {
    labelHist.push(0);
  }

  sum = _patchLabelGrid.data.length;

  while (sum--) {
    if (_patchLabelGrid.data[sum] > 0) {
      labelHist[_patchLabelGrid.data[sum] - 1]++;
    }
  }

  labelHist = labelHist.map(function (val, idx) {
    return {
      val: val,
      label: idx + 1
    };
  });
  labelHist.sort(function (a, b) {
    return b.val - a.val;
  }); // extract top areas with at least 6 patches present

  topLabels = labelHist.filter(function (el) {
    return el.val >= 5;
  });
  return topLabels;
}
/**
 *
 */


function findBoxes(topLabels, maxLabel) {
  var i;
  var j;
  var sum;
  var patches = [];
  var patch;
  var box;
  var boxes = [];
  var hsv = [0, 1, 1];
  var rgb = [0, 0, 0];

  for (i = 0; i < topLabels.length; i++) {
    sum = _patchLabelGrid.data.length;
    patches.length = 0;

    while (sum--) {
      if (_patchLabelGrid.data[sum] === topLabels[i].label) {
        patch = _imageToPatchGrid.data[sum];
        patches.push(patch);
      }
    }

    box = boxFromPatches(patches);

    if (box) {
      boxes.push(box); // draw patch-labels if requested

      if (  _config.debug.showRemainingPatchLabels) {
        for (j = 0; j < patches.length; j++) {
          patch = patches[j];
          hsv[0] = topLabels[i].label / (maxLabel + 1) * 360;
          Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* hsv2rgb */ "g"])(hsv, rgb);
          _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
            color: "rgb(".concat(rgb.join(','), ")"),
            lineWidth: 2
          });
        }
      }
    }
  }

  return boxes;
}
/**
 * Find similar moments (via cluster)
 * @param {Object} moments
 */


function similarMoments(moments) {
  var clusters = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* cluster */ "b"])(moments, 0.90);
  var topCluster = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* topGeneric */ "j"])(clusters, 1, function (e) {
    return e.getPoints().length;
  });
  var points = [];
  var result = [];

  if (topCluster.length === 1) {
    points = topCluster[0].item.getPoints();

    for (var i = 0; i < points.length; i++) {
      result.push(points[i].point);
    }
  }

  return result;
}

function skeletonize(x, y) {
  _binaryImageWrapper.subImageAsCopy(_subImageWrapper, Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* imageRef */ "h"])(x, y));

  _skeletonizer.skeletonize(); // Show skeleton if requested


  if (  _config.debug.showSkeleton) {
    _skelImageWrapper.overlay(_canvasContainer.dom.binary, 360, Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* imageRef */ "h"])(x, y));
  }
}
/**
 * Extracts and describes those patches which seem to contain a barcode pattern
 * @param {Array} moments
 * @param {Object} patchPos,
 * @param {Number} x
 * @param {Number} y
 * @returns {Array} list of patches
 */


function describePatch(moments, patchPos, x, y) {
  var k;
  var avg;
  var eligibleMoments = [];
  var matchingMoments;
  var patch;
  var patchesFound = [];
  var minComponentWeight = Math.ceil(_patchSize.x / 3);

  if (moments.length >= 2) {
    // only collect moments which's area covers at least minComponentWeight pixels.
    for (k = 0; k < moments.length; k++) {
      if (moments[k].m00 > minComponentWeight) {
        eligibleMoments.push(moments[k]);
      }
    } // if at least 2 moments are found which have at least minComponentWeights covered


    if (eligibleMoments.length >= 2) {
      matchingMoments = similarMoments(eligibleMoments);
      avg = 0; // determine the similarity of the moments

      for (k = 0; k < matchingMoments.length; k++) {
        avg += matchingMoments[k].rad;
      } // Only two of the moments are allowed not to fit into the equation
      // add the patch to the set


      if (matchingMoments.length > 1 && matchingMoments.length >= eligibleMoments.length / 4 * 3 && matchingMoments.length > moments.length / 4) {
        avg /= matchingMoments.length;
        patch = {
          index: patchPos[1] * _numPatches.x + patchPos[0],
          pos: {
            x: x,
            y: y
          },
          box: [gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([x, y]), gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([x + _subImageWrapper.size.x, y]), gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([x + _subImageWrapper.size.x, y + _subImageWrapper.size.y]), gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([x, y + _subImageWrapper.size.y])],
          moments: matchingMoments,
          rad: avg,
          vec: gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([Math.cos(avg), Math.sin(avg)])
        };
        patchesFound.push(patch);
      }
    }
  }

  return patchesFound;
}
/**
 * finds patches which are connected and share the same orientation
 * @param {Object} patchesFound
 */


function rasterizeAngularSimilarity(patchesFound) {
  var label = 0;
  var threshold = 0.95;
  var currIdx = 0;
  var j;
  var patch;
  var hsv = [0, 1, 1];
  var rgb = [0, 0, 0];

  function notYetProcessed() {
    var i;

    for (i = 0; i < _patchLabelGrid.data.length; i++) {
      if (_patchLabelGrid.data[i] === 0 && _patchGrid.data[i] === 1) {
        return i;
      }
    }

    return _patchLabelGrid.length;
  }

  function trace(currentIdx) {
    var x;
    var y;
    var currentPatch;
    var idx;
    var dir;
    var current = {
      x: currentIdx % _patchLabelGrid.size.x,
      y: currentIdx / _patchLabelGrid.size.x | 0
    };
    var similarity;

    if (currentIdx < _patchLabelGrid.data.length) {
      currentPatch = _imageToPatchGrid.data[currentIdx]; // assign label

      _patchLabelGrid.data[currentIdx] = label;

      for (dir = 0; dir < _tracer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].searchDirections.length; dir++) {
        y = current.y + _tracer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].searchDirections[dir][0];
        x = current.x + _tracer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].searchDirections[dir][1];
        idx = y * _patchLabelGrid.size.x + x; // continue if patch empty

        if (_patchGrid.data[idx] === 0) {
          _patchLabelGrid.data[idx] = Number.MAX_VALUE; // eslint-disable-next-line no-continue

          continue;
        }

        if (_patchLabelGrid.data[idx] === 0) {
          similarity = Math.abs(gl_vec2__WEBPACK_IMPORTED_MODULE_0__["dot"](_imageToPatchGrid.data[idx].vec, currentPatch.vec));

          if (similarity > threshold) {
            trace(idx);
          }
        }
      }
    }
  } // prepare for finding the right patches


  _common_array_helper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init(_patchGrid.data, 0);
  _common_array_helper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init(_patchLabelGrid.data, 0);
  _common_array_helper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init(_imageToPatchGrid.data, null);

  for (j = 0; j < patchesFound.length; j++) {
    patch = patchesFound[j];
    _imageToPatchGrid.data[patch.index] = patch;
    _patchGrid.data[patch.index] = 1;
  } // rasterize the patches found to determine area


  _patchGrid.zeroBorder(); // eslint-disable-next-line no-cond-assign


  while ((currIdx = notYetProcessed()) < _patchLabelGrid.data.length) {
    label++;
    trace(currIdx);
  } // draw patch-labels if requested


  if (  _config.debug.showPatchLabels) {
    for (j = 0; j < _patchLabelGrid.data.length; j++) {
      if (_patchLabelGrid.data[j] > 0 && _patchLabelGrid.data[j] <= label) {
        patch = _imageToPatchGrid.data[j];
        hsv[0] = _patchLabelGrid.data[j] / (label + 1) * 360;
        Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* hsv2rgb */ "g"])(hsv, rgb);
        _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
          color: "rgb(".concat(rgb.join(','), ")"),
          lineWidth: 2
        });
      }
    }
  }

  return label;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init(inputImageWrapper, config) {
    _config = config;
    _inputImageWrapper = inputImageWrapper;
    initBuffers();
    initCanvas();
  },
  locate: function locate() {
    if (_config.halfSample) {
      Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* halfSample */ "f"])(_inputImageWrapper, _currentImageWrapper);
    }

    binarizeImage();
    var patchesFound = findPatches(); // return unless 5% or more patches are found

    if (patchesFound.length < _numPatches.x * _numPatches.y * 0.05) {
      return null;
    } // rasterrize area by comparing angular similarity;


    var maxLabel = rasterizeAngularSimilarity(patchesFound);

    if (maxLabel < 1) {
      return null;
    } // search for area with the most patches (biggest connected area)


    var topLabels = findBiggestConnectedAreas(maxLabel);

    if (topLabels.length === 0) {
      return null;
    }

    var boxes = findBoxes(topLabels, maxLabel);
    return boxes;
  },
  checkImageConstraints: function checkImageConstraints(inputStream, config) {
    var patchSize;
    var width = inputStream.getWidth();
    var height = inputStream.getHeight();
    var thisHalfSample = config.halfSample ? 0.5 : 1;
    var area; // calculate width and height based on area

    if (inputStream.getConfig().area) {
      area = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* computeImageArea */ "d"])(width, height, inputStream.getConfig().area);
      inputStream.setTopRight({
        x: area.sx,
        y: area.sy
      });
      inputStream.setCanvasSize({
        x: width,
        y: height
      });
      width = area.sw;
      height = area.sh;
    }

    var size = {
      x: Math.floor(width * thisHalfSample),
      y: Math.floor(height * thisHalfSample)
    };
    patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__[/* calculatePatchSize */ "a"])(config.patchSize, size);

    inputStream.setWidth(Math.floor(Math.floor(size.x / patchSize.x) * (1 / thisHalfSample) * patchSize.x));
    inputStream.setHeight(Math.floor(Math.floor(size.y / patchSize.y) * (1 / thisHalfSample) * patchSize.y));

    if (inputStream.getWidth() % patchSize.x === 0 && inputStream.getHeight() % patchSize.y === 0) {
      return true;
    }

    throw new Error("Image dimensions do not comply with the current settings: Width (".concat(width, " )and height (").concat(height, ") must a multiple of ").concat(patchSize.x));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(68)));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(163),
    listCacheDelete = __webpack_require__(164),
    listCacheGet = __webpack_require__(165),
    listCacheHas = __webpack_require__(166),
    listCacheSet = __webpack_require__(167);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(25);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(17);
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(35);
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(188);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(203),
    isObjectLike = __webpack_require__(18);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isKey = __webpack_require__(231),
    stringToPath = __webpack_require__(232),
    toString = __webpack_require__(235);
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(223);

var iterableToArray = __webpack_require__(224);

var unsupportedIterableToArray = __webpack_require__(43);

var nonIterableSpread = __webpack_require__(225);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  determinant: __webpack_require__(247),
  transpose: __webpack_require__(248),
  multiply: __webpack_require__(249),
  identity: __webpack_require__(250),
  adjoint: __webpack_require__(251),
  rotate: __webpack_require__(252),
  invert: __webpack_require__(253),
  create: __webpack_require__(254),
  scale: __webpack_require__(255),
  copy: __webpack_require__(256),
  frob: __webpack_require__(257),
  ldu: __webpack_require__(258)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(173),
    getValue = __webpack_require__(179);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(21),
    isObject = __webpack_require__(12);
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(71);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(36),
    isLength = __webpack_require__(40);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(21),
    isObjectLike = __webpack_require__(18);
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(41);
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(44);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = 0.000001;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = create;
/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new Float32Array(2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = subtract;
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = multiply;
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = divide;
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = distance;
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = squaredDistance;
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = length;
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = squaredLength;
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = 0.000001;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = create;
/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new Float32Array(3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = fromValues;
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new Float32Array(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = normalize;
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }

  return out;
}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = dot;
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = subtract;
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = multiply;
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = divide;
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = distance;
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1],
      z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = squaredDistance;
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1],
      z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = length;
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = squaredLength;
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  return x * x + y * y + z * z;
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(35),
    root = __webpack_require__(17);
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(68)));

/***/ }),
/* 68 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(180),
    mapCacheDelete = __webpack_require__(187),
    mapCacheGet = __webpack_require__(189),
    mapCacheHas = __webpack_require__(190),
    mapCacheSet = __webpack_require__(191);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(37),
    eq = __webpack_require__(25);
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(35);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(202);
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(17),
    stubFalse = __webpack_require__(205);
/** Detect free variable `exports`. */


var freeExports =   exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)(module)));

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(207),
    baseUnary = __webpack_require__(208),
    nodeUtil = __webpack_require__(209);
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(37),
    eq = __webpack_require__(25);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(212),
    baseKeysIn = __webpack_require__(214),
    isArrayLike = __webpack_require__(39);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(218);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(219),
    shortOut = __webpack_require__(221);
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(89);

var iterableToArrayLimit = __webpack_require__(90);

var unsupportedIterableToArray = __webpack_require__(43);

var nonIterableRest = __webpack_require__(91);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  EPSILON: __webpack_require__(54),
  create: __webpack_require__(55),
  clone: __webpack_require__(127),
  angle: __webpack_require__(128),
  fromValues: __webpack_require__(56),
  copy: __webpack_require__(129),
  set: __webpack_require__(130),
  equals: __webpack_require__(131),
  exactEquals: __webpack_require__(132),
  add: __webpack_require__(133),
  subtract: __webpack_require__(59),
  sub: __webpack_require__(134),
  multiply: __webpack_require__(60),
  mul: __webpack_require__(135),
  divide: __webpack_require__(61),
  div: __webpack_require__(136),
  min: __webpack_require__(137),
  max: __webpack_require__(138),
  floor: __webpack_require__(139),
  ceil: __webpack_require__(140),
  round: __webpack_require__(141),
  scale: __webpack_require__(142),
  scaleAndAdd: __webpack_require__(143),
  distance: __webpack_require__(62),
  dist: __webpack_require__(144),
  squaredDistance: __webpack_require__(63),
  sqrDist: __webpack_require__(145),
  length: __webpack_require__(64),
  len: __webpack_require__(146),
  squaredLength: __webpack_require__(65),
  sqrLen: __webpack_require__(147),
  negate: __webpack_require__(148),
  inverse: __webpack_require__(149),
  normalize: __webpack_require__(57),
  dot: __webpack_require__(58),
  cross: __webpack_require__(150),
  lerp: __webpack_require__(151),
  random: __webpack_require__(152),
  transformMat4: __webpack_require__(153),
  transformMat3: __webpack_require__(154),
  transformQuat: __webpack_require__(155),
  rotateX: __webpack_require__(156),
  rotateY: __webpack_require__(157),
  rotateZ: __webpack_require__(158),
  forEach: __webpack_require__(159)
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(228),
    flatRest = __webpack_require__(242);
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */


var pick = flatRest(function (object, paths) {
  return object == null ? {} : basePick(object, paths);
});
module.exports = pick;

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);

/**
 * http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */

var Rasterizer = {
  createContour2D: function createContour2D() {
    return {
      dir: null,
      index: null,
      firstVertex: null,
      insideContours: null,
      nextpeer: null,
      prevpeer: null
    };
  },
  CONTOUR_DIR: {
    CW_DIR: 0,
    CCW_DIR: 1,
    UNKNOWN_DIR: 2
  },
  DIR: {
    OUTSIDE_EDGE: -32767,
    INSIDE_EDGE: -32766
  },
  create: function create(imageWrapper, labelWrapper) {
    var imageData = imageWrapper.data;
    var labelData = labelWrapper.data;
    var width = imageWrapper.size.x;
    var height = imageWrapper.size.y;
    var tracer = _tracer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].create(imageWrapper, labelWrapper);
    return {
      rasterize: function rasterize(depthlabel) {
        var color;
        var bc;
        var lc;
        var labelindex;
        var cx;
        var cy;
        var colorMap = [];
        var vertex;
        var p;
        var cc;
        var sc;
        var pos;
        var connectedCount = 0;
        var i;

        for (i = 0; i < 400; i++) {
          colorMap[i] = 0;
        }

        colorMap[0] = imageData[0];
        cc = null;

        for (cy = 1; cy < height - 1; cy++) {
          labelindex = 0;
          bc = colorMap[0];

          for (cx = 1; cx < width - 1; cx++) {
            pos = cy * width + cx;

            if (labelData[pos] === 0) {
              color = imageData[pos];

              if (color !== bc) {
                if (labelindex === 0) {
                  lc = connectedCount + 1;
                  colorMap[lc] = color;
                  bc = color;
                  vertex = tracer.contourTracing(cy, cx, lc, color, Rasterizer.DIR.OUTSIDE_EDGE);

                  if (vertex !== null) {
                    connectedCount++;
                    labelindex = lc;
                    p = Rasterizer.createContour2D();
                    p.dir = Rasterizer.CONTOUR_DIR.CW_DIR;
                    p.index = labelindex;
                    p.firstVertex = vertex;
                    p.nextpeer = cc;
                    p.insideContours = null;

                    if (cc !== null) {
                      cc.prevpeer = p;
                    }

                    cc = p;
                  }
                } else {
                  vertex = tracer.contourTracing(cy, cx, Rasterizer.DIR.INSIDE_EDGE, color, labelindex);

                  if (vertex !== null) {
                    p = Rasterizer.createContour2D();
                    p.firstVertex = vertex;
                    p.insideContours = null;

                    if (depthlabel === 0) {
                      p.dir = Rasterizer.CONTOUR_DIR.CCW_DIR;
                    } else {
                      p.dir = Rasterizer.CONTOUR_DIR.CW_DIR;
                    }

                    p.index = depthlabel;
                    sc = cc;

                    while (sc !== null && sc.index !== labelindex) {
                      sc = sc.nextpeer;
                    }

                    if (sc !== null) {
                      p.nextpeer = sc.insideContours;

                      if (sc.insideContours !== null) {
                        sc.insideContours.prevpeer = p;
                      }

                      sc.insideContours = p;
                    }
                  }
                }
              } else {
                labelData[pos] = labelindex;
              }
            } else if (labelData[pos] === Rasterizer.DIR.OUTSIDE_EDGE || labelData[pos] === Rasterizer.DIR.INSIDE_EDGE) {
              labelindex = 0;

              if (labelData[pos] === Rasterizer.DIR.INSIDE_EDGE) {
                bc = imageData[pos];
              } else {
                bc = colorMap[0];
              }
            } else {
              labelindex = labelData[pos];
              bc = colorMap[labelindex];
            }
          }
        }

        sc = cc;

        while (sc !== null) {
          sc.index = depthlabel;
          sc = sc.nextpeer;
        }

        return {
          cc: cc,
          count: connectedCount
        };
      },
      debug: {
        drawContour: function drawContour(canvas, firstContour) {
          var ctx = canvas.getContext('2d');
          var pq = firstContour;
          var iq;
          var q;
          var p;
          ctx.strokeStyle = 'red';
          ctx.fillStyle = 'red';
          ctx.lineWidth = 1;

          if (pq !== null) {
            iq = pq.insideContours;
          } else {
            iq = null;
          }

          while (pq !== null) {
            if (iq !== null) {
              q = iq;
              iq = iq.nextpeer;
            } else {
              q = pq;
              pq = pq.nextpeer;

              if (pq !== null) {
                iq = pq.insideContours;
              } else {
                iq = null;
              }
            }

            switch (q.dir) {
              case Rasterizer.CONTOUR_DIR.CW_DIR:
                ctx.strokeStyle = 'red';
                break;

              case Rasterizer.CONTOUR_DIR.CCW_DIR:
                ctx.strokeStyle = 'blue';
                break;

              case Rasterizer.CONTOUR_DIR.UNKNOWN_DIR:
                ctx.strokeStyle = 'green';
                break;
            }

            p = q.firstVertex;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);

            do {
              p = p.next;
              ctx.lineTo(p.x, p.y);
            } while (p !== q.firstVertex);

            ctx.stroke();
          }
        }
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Rasterizer);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* eslint-disable no-param-reassign */

/* eslint-disable no-bitwise */

/* eslint-disable eqeqeq */

/* @preserve ASM BEGIN */
function Skeletonizer(stdlib, foreign, buffer) {
  'use asm';

  var images = new stdlib.Uint8Array(buffer);
  var size = foreign.size | 0;
  var imul = stdlib.Math.imul;

  function erode(inImagePtr, outImagePtr) {
    inImagePtr |= 0;
    outImagePtr |= 0;
    var v = 0;
    var u = 0;
    var sum = 0;
    var yStart1 = 0;
    var yStart2 = 0;
    var xStart1 = 0;
    var xStart2 = 0;
    var offset = 0;

    for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
      offset = offset + size | 0;

      for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
        yStart1 = offset - size | 0;
        yStart2 = offset + size | 0;
        xStart1 = u - 1 | 0;
        xStart2 = u + 1 | 0;
        sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;

        if ((sum | 0) == (5 | 0)) {
          images[outImagePtr + offset + u | 0] = 1;
        } else {
          images[outImagePtr + offset + u | 0] = 0;
        }
      }
    }
  }

  function subtract(aImagePtr, bImagePtr, outImagePtr) {
    aImagePtr |= 0;
    bImagePtr |= 0;
    outImagePtr |= 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[outImagePtr + length | 0] = (images[aImagePtr + length | 0] | 0) - (images[bImagePtr + length | 0] | 0) | 0;
    }
  }

  function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {
    aImagePtr |= 0;
    bImagePtr |= 0;
    outImagePtr |= 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[outImagePtr + length | 0] = images[aImagePtr + length | 0] | 0 | (images[bImagePtr + length | 0] | 0) | 0;
    }
  }

  function countNonZero(imagePtr) {
    imagePtr |= 0;
    var sum = 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      sum = (sum | 0) + (images[imagePtr + length | 0] | 0) | 0;
    }

    return sum | 0;
  }

  function init(imagePtr, value) {
    imagePtr |= 0;
    value |= 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[imagePtr + length | 0] = value;
    }
  }

  function dilate(inImagePtr, outImagePtr) {
    inImagePtr |= 0;
    outImagePtr |= 0;
    var v = 0;
    var u = 0;
    var sum = 0;
    var yStart1 = 0;
    var yStart2 = 0;
    var xStart1 = 0;
    var xStart2 = 0;
    var offset = 0;

    for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
      offset = offset + size | 0;

      for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
        yStart1 = offset - size | 0;
        yStart2 = offset + size | 0;
        xStart1 = u - 1 | 0;
        xStart2 = u + 1 | 0;
        sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;

        if ((sum | 0) > (0 | 0)) {
          images[outImagePtr + offset + u | 0] = 1;
        } else {
          images[outImagePtr + offset + u | 0] = 0;
        }
      }
    }
  }

  function memcpy(srcImagePtr, dstImagePtr) {
    srcImagePtr |= 0;
    dstImagePtr |= 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[dstImagePtr + length | 0] = images[srcImagePtr + length | 0] | 0;
    }
  }

  function zeroBorder(imagePtr) {
    imagePtr |= 0;
    var x = 0;
    var y = 0;

    for (x = 0; (x | 0) < (size - 1 | 0); x = x + 1 | 0) {
      images[imagePtr + x | 0] = 0;
      images[imagePtr + y | 0] = 0;
      y = y + size - 1 | 0;
      images[imagePtr + y | 0] = 0;
      y = y + 1 | 0;
    }

    for (x = 0; (x | 0) < (size | 0); x = x + 1 | 0) {
      images[imagePtr + y | 0] = 0;
      y = y + 1 | 0;
    }
  }

  function skeletonize() {
    var subImagePtr = 0;
    var erodedImagePtr = 0;
    var tempImagePtr = 0;
    var skelImagePtr = 0;
    var sum = 0;
    var done = 0;
    erodedImagePtr = imul(size, size) | 0;
    tempImagePtr = erodedImagePtr + erodedImagePtr | 0;
    skelImagePtr = tempImagePtr + erodedImagePtr | 0; // init skel-image

    init(skelImagePtr, 0);
    zeroBorder(subImagePtr);

    do {
      erode(subImagePtr, erodedImagePtr);
      dilate(erodedImagePtr, tempImagePtr);
      subtract(subImagePtr, tempImagePtr, tempImagePtr);
      bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);
      memcpy(erodedImagePtr, subImagePtr);
      sum = countNonZero(subImagePtr) | 0;
      done = (sum | 0) == 0 | 0;
    } while (!done);
  }

  return {
    skeletonize: skeletonize
  };
}
/* @preserve ASM END */


/* harmony default export */ __webpack_exports__["a"] = (Skeletonizer);
/* eslint-enable eqeqeq */

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(259);


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/*
 * typedefs.js
 * Normalizes browser-specific prefixes and provide some basic polyfills
 */
if (typeof window !== 'undefined') {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function () {
      return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (
      /* function FrameRequestCallback */
      callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }();
  }
}

if (typeof Math.imul !== 'function') {
  /* eslint-disable no-bitwise */
  Math.imul = function (a, b) {
    var ah = a >>> 16 & 0xffff;
    var al = a & 0xffff;
    var bh = b >>> 16 & 0xffff;
    var bl = b & 0xffff; // the shift by 0 fixes the sign on the high part
    // the final |0 converts the unsigned value into a signed value

    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  };
  /* eslint-enable no-bitwise */

}

if (typeof Object.assign !== 'function') {
  Object.assign = function (target) {

    if (target === null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      // eslint-disable-next-line prefer-rest-params
      var nextSource = arguments[index];

      if (nextSource !== null) {
        // Skip over if undefined or null
        // eslint-disable-next-line no-restricted-syntax
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = clone;
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new Float32Array(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = fromValues;
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new Float32Array(2);
  out[0] = x;
  out[1] = y;
  return out;
}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = copy;
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = set;
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = equals;

var EPSILON = __webpack_require__(45);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0];
  var a1 = a[1];
  var b0 = b[0];
  var b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = exactEquals;
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = add;
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = inverse;
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = min;
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = max;
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = rotate;
/**
 * Rotates a vec2 by an angle
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to rotate
 * @param {Number} angle the angle of rotation (in radians)
 * @returns {vec2} out
 */

function rotate(out, a, angle) {
  var c = Math.cos(angle),
      s = Math.sin(angle);
  var x = a[0],
      y = a[1];
  out[0] = x * c - y * s;
  out[1] = x * s + y * c;
  return out;
}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = floor;
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = ceil;
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = round;
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = scale;
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = scaleAndAdd;
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = negate;
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = normalize;
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }

  return out;
}

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = dot;
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = cross;
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = lerp;
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = random;
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = Math.random() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = transformMat2;
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = transformMat2d;
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = transformMat3;
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = transformMat4;
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = forEach;

var vec = __webpack_require__(46)();
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */


function forEach(a, stride, offset, count, fn, arg) {
  var i, l;

  if (!stride) {
    stride = 2;
  }

  if (!offset) {
    offset = 0;
  }

  if (count) {
    l = Math.min(count * stride + offset, a.length);
  } else {
    l = a.length;
  }

  for (i = offset; i < l; i += stride) {
    vec[0] = a[i];
    vec[1] = a[i + 1];
    fn(vec, vec, arg);
    a[i] = vec[0];
    a[i + 1] = vec[1];
  }

  return a;
}

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = limit;
/**
 * Limit the magnitude of this vector to the value used for the `max`
 * parameter.
 *
 * @param  {vec2} the vector to limit
 * @param  {Number} max the maximum magnitude for the vector
 * @returns {vec2} out
 */

function limit(out, a, max) {
  var mSq = a[0] * a[0] + a[1] * a[1];

  if (mSq > max * max) {
    var n = Math.sqrt(mSq);
    out[0] = a[0] / n * max;
    out[1] = a[1] / n * max;
  } else {
    out[0] = a[0];
    out[1] = a[1];
  }

  return out;
}

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = clone;
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new Float32Array(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = angle;

var fromValues = __webpack_require__(56);

var normalize = __webpack_require__(57);

var dot = __webpack_require__(58);
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */


function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else {
    return Math.acos(cosine);
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = copy;
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = set;
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = equals;

var EPSILON = __webpack_require__(54);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0];
  var a1 = a[1];
  var a2 = a[2];
  var b0 = b[0];
  var b1 = b[1];
  var b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = exactEquals;
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = add;
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(60);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61);

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = min;
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = max;
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = floor;
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = ceil;
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = round;
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = scale;
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = scaleAndAdd;
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = negate;
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = inverse;
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = cross;
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = lerp;
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = random;
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = Math.random() * 2.0 * Math.PI;
  var z = Math.random() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = transformMat4;
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = transformMat3;
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = transformQuat;
/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
  var x = a[0],
      y = a[1],
      z = a[2],
      qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      // calculate quat * vec
  ix = qw * x + qy * z - qz * y,
      iy = qw * y + qz * x - qx * z,
      iz = qw * z + qx * y - qy * x,
      iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  return out;
}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = rotateX;
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX(out, a, b, c) {
  var by = b[1];
  var bz = b[2]; // Translate point to the origin

  var py = a[1] - by;
  var pz = a[2] - bz;
  var sc = Math.sin(c);
  var cc = Math.cos(c); // perform rotation and translate to correct position

  out[0] = a[0];
  out[1] = by + py * cc - pz * sc;
  out[2] = bz + py * sc + pz * cc;
  return out;
}

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = rotateY;
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var bx = b[0];
  var bz = b[2]; // translate point to the origin

  var px = a[0] - bx;
  var pz = a[2] - bz;
  var sc = Math.sin(c);
  var cc = Math.cos(c); // perform rotation and translate to correct position

  out[0] = bx + pz * sc + px * cc;
  out[1] = a[1];
  out[2] = bz + pz * cc - px * sc;
  return out;
}

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = rotateZ;
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ(out, a, b, c) {
  var bx = b[0];
  var by = b[1]; //Translate point to the origin

  var px = a[0] - bx;
  var py = a[1] - by;
  var sc = Math.sin(c);
  var cc = Math.cos(c); // perform rotation and translate to correct position

  out[0] = bx + px * cc - py * sc;
  out[1] = by + px * sc + py * cc;
  out[2] = a[2];
  return out;
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = forEach;

var vec = __webpack_require__(55)();
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */


function forEach(a, stride, offset, count, fn, arg) {
  var i, l;

  if (!stride) {
    stride = 3;
  }

  if (!offset) {
    offset = 0;
  }

  if (count) {
    l = Math.min(count * stride + offset, a.length);
  } else {
    l = a.length;
  }

  for (i = offset; i < l; i += stride) {
    vec[0] = a[i];
    vec[1] = a[i + 1];
    vec[2] = a[i + 2];
    fn(vec, vec, arg);
    a[i] = vec[0];
    a[i + 1] = vec[1];
    a[i + 2] = vec[2];
  }

  return a;
}

/***/ }),
/* 160 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(162),
    assignMergeValue = __webpack_require__(70),
    baseFor = __webpack_require__(192),
    baseMergeDeep = __webpack_require__(194),
    isObject = __webpack_require__(12),
    keysIn = __webpack_require__(78),
    safeGet = __webpack_require__(76);
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(23),
    stackClear = __webpack_require__(168),
    stackDelete = __webpack_require__(169),
    stackGet = __webpack_require__(170),
    stackHas = __webpack_require__(171),
    stackSet = __webpack_require__(172);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(24);
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(24);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(24);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(24);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(23);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),
/* 169 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),
/* 170 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),
/* 171 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(23),
    Map = __webpack_require__(66),
    MapCache = __webpack_require__(69);
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(36),
    isMasked = __webpack_require__(176),
    isObject = __webpack_require__(12),
    toSource = __webpack_require__(178);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),
/* 175 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(177);
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(17);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),
/* 178 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(181),
    ListCache = __webpack_require__(23),
    Map = __webpack_require__(66);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(182),
    hashDelete = __webpack_require__(183),
    hashGet = __webpack_require__(184),
    hashHas = __webpack_require__(185),
    hashSet = __webpack_require__(186);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(27);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),
/* 183 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(27);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(27);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(27);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(28);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),
/* 188 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(28);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(28);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(28);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(193);
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),
/* 193 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

module.exports = createBaseFor;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(70),
    cloneBuffer = __webpack_require__(195),
    cloneTypedArray = __webpack_require__(196),
    copyArray = __webpack_require__(199),
    initCloneObject = __webpack_require__(200),
    isArguments = __webpack_require__(29),
    isArray = __webpack_require__(13),
    isArrayLikeObject = __webpack_require__(204),
    isBuffer = __webpack_require__(74),
    isFunction = __webpack_require__(36),
    isObject = __webpack_require__(12),
    isPlainObject = __webpack_require__(206),
    isTypedArray = __webpack_require__(75),
    safeGet = __webpack_require__(76),
    toPlainObject = __webpack_require__(210);
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(17);
/** Detect free variable `exports`. */


var freeExports =   exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)(module)));

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(197);
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(198);
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(17);
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(201),
    getPrototype = __webpack_require__(72),
    isPrototype = __webpack_require__(73);
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),
/* 202 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(21),
    isObjectLike = __webpack_require__(18);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(39),
    isObjectLike = __webpack_require__(18);
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),
/* 205 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(21),
    getPrototype = __webpack_require__(72),
    isObjectLike = __webpack_require__(18);
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(21),
    isLength = __webpack_require__(40),
    isObjectLike = __webpack_require__(18);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),
/* 208 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(67);
/** Detect free variable `exports`. */


var freeExports =   exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)(module)));

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(211),
    keysIn = __webpack_require__(78);
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(77),
    baseAssignValue = __webpack_require__(37);
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(213),
    isArguments = __webpack_require__(29),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(74),
    isIndex = __webpack_require__(30),
    isTypedArray = __webpack_require__(75);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),
/* 213 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12),
    isPrototype = __webpack_require__(73),
    nativeKeysIn = __webpack_require__(215);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),
/* 215 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(217),
    isIterateeCall = __webpack_require__(222);
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

module.exports = createAssigner;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(79),
    overRest = __webpack_require__(80),
    setToString = __webpack_require__(81);
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),
/* 218 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(220),
    defineProperty = __webpack_require__(71),
    identity = __webpack_require__(79);
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

/***/ }),
/* 220 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),
/* 221 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(25),
    isArrayLike = __webpack_require__(39),
    isIndex = __webpack_require__(30),
    isObject = __webpack_require__(12);
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(44);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 224 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 225 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined$1,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined$1;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
  module.exports );

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(229),
    hasIn = __webpack_require__(239);
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */


function basePick(object, paths) {
  return basePickBy(object, paths, function (value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(230),
    baseSet = __webpack_require__(238),
    castPath = __webpack_require__(31);
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */


function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }

  return result;
}

module.exports = basePickBy;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(31),
    toKey = __webpack_require__(42);
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(41);
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(233);
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(234);
/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(69);
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(236);
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    arrayMap = __webpack_require__(237),
    isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(41);
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),
/* 237 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

module.exports = arrayMap;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(77),
    castPath = __webpack_require__(31),
    isIndex = __webpack_require__(30),
    isObject = __webpack_require__(12),
    toKey = __webpack_require__(42);
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

module.exports = baseSet;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(240),
    hasPath = __webpack_require__(241);
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */


function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(31),
    isArguments = __webpack_require__(29),
    isArray = __webpack_require__(13),
    isIndex = __webpack_require__(30),
    isLength = __webpack_require__(40),
    toKey = __webpack_require__(42);
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */


function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);

    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }

    object = object[key];
  }

  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(243),
    overRest = __webpack_require__(80),
    setToString = __webpack_require__(81);
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */


function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(244);
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */


function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(245),
    isFlattenable = __webpack_require__(246);
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */


function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}

module.exports = baseFlatten;

/***/ }),
/* 245 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    isArguments = __webpack_require__(29),
    isArray = __webpack_require__(13);
/** Built-in value references. */


var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */

function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = determinant;
/**
 * Calculates the determinant of a mat2
 *
 * @alias mat2.determinant
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = transpose;
/**
 * Transpose the values of a mat2
 *
 * @alias mat2.transpose
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = multiply;
/**
 * Multiplies two mat2's
 *
 * @alias mat2.multiply
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = identity;
/**
 * Set a mat2 to the identity matrix
 *
 * @alias mat2.identity
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = adjoint;
/**
 * Calculates the adjugate of a mat2
 *
 * @alias mat2.adjoint
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = rotate;
/**
 * Rotates a mat2 by the given angle
 *
 * @alias mat2.rotate
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = invert;
/**
 * Inverts a mat2
 *
 * @alias mat2.invert
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0];
  var a1 = a[1];
  var a2 = a[2];
  var a3 = a[3];
  var det = a0 * a3 - a2 * a1;
  if (!det) return null;
  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = create;
/**
 * Creates a new identity mat2
 *
 * @alias mat2.create
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new Float32Array(4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = scale;
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @alias mat2.scale
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = copy;
/**
 * Copy the values from one mat2 to another
 *
 * @alias mat2.copy
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = frob;
/**
 * Returns Frobenius norm of a mat2
 *
 * @alias mat2.frob
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
}

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = ldu;
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 *
 * @alias mat2.ldu
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function ldu(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "BarcodeDecoder", function() { return /* reexport */ barcode_decoder; });
__webpack_require__.d(__webpack_exports__, "BarcodeReader", function() { return /* reexport */ barcode_reader; });
__webpack_require__.d(__webpack_exports__, "CameraAccess", function() { return /* reexport */ camera_access; });
__webpack_require__.d(__webpack_exports__, "ImageDebug", function() { return /* reexport */ image_debug["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return /* reexport */ image_wrapper["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ResultCollector", function() { return /* reexport */ result_collector; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(19);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./src/common/typedefs.js
var typedefs = __webpack_require__(88);

// EXTERNAL MODULE: ./src/common/image_wrapper.ts
var image_wrapper = __webpack_require__(11);

// CONCATENATED MODULE: ./src/decoder/bresenham.js
var Bresenham = {};
var Slope = {
  DIR: {
    UP: 1,
    DOWN: -1
  }
};
/**
 * Scans a line of the given image from point p1 to p2 and returns a result object containing
 * gray-scale values (0-255) of the underlying pixels in addition to the min
 * and max values.
 * @param {Object} imageWrapper
 * @param {Object} p1 The start point {x,y}
 * @param {Object} p2 The end point {x,y}
 * @returns {line, min, max}
 */

Bresenham.getBarcodeLine = function (imageWrapper, p1, p2) {
  /* eslint-disable no-bitwise */
  var x0 = p1.x | 0;
  var y0 = p1.y | 0;
  var x1 = p2.x | 0;
  var y1 = p2.y | 0;
  /* eslint-disable no-bitwise */

  var steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
  var error;
  var y;
  var tmp;
  var x;
  var line = [];
  var imageData = imageWrapper.data;
  var width = imageWrapper.size.x;
  var val;
  var min = 255;
  var max = 0;

  function read(a, b) {
    val = imageData[b * width + a];
    min = val < min ? val : min;
    max = val > max ? val : max;
    line.push(val);
  }

  if (steep) {
    tmp = x0;
    x0 = y0;
    y0 = tmp;
    tmp = x1;
    x1 = y1;
    y1 = tmp;
  }

  if (x0 > x1) {
    tmp = x0;
    x0 = x1;
    x1 = tmp;
    tmp = y0;
    y0 = y1;
    y1 = tmp;
  }

  var deltaX = x1 - x0;
  var deltaY = Math.abs(y1 - y0);
  error = deltaX / 2 | 0;
  y = y0;
  var yStep = y0 < y1 ? 1 : -1;

  for (x = x0; x < x1; x++) {
    if (steep) {
      read(y, x);
    } else {
      read(x, y);
    }

    error -= deltaY;

    if (error < 0) {
      y += yStep;
      error += deltaX;
    }
  }

  return {
    line: line,
    min: min,
    max: max
  };
};
/**
 * Converts the result from getBarcodeLine into a binary representation
 * also considering the frequency and slope of the signal for more robust results
 * @param {Object} result {line, min, max}
 */


Bresenham.toBinaryLine = function (result) {
  var min = result.min;
  var max = result.max;
  var line = result.line;
  var slope;
  var slope2;
  var center = min + (max - min) / 2;
  var extrema = [];
  var currentDir;
  var dir;
  var threshold = (max - min) / 12;
  var rThreshold = -threshold;
  var i;
  var j; // 1. find extrema

  currentDir = line[0] > center ? Slope.DIR.UP : Slope.DIR.DOWN;
  extrema.push({
    pos: 0,
    val: line[0]
  });

  for (i = 0; i < line.length - 2; i++) {
    slope = line[i + 1] - line[i];
    slope2 = line[i + 2] - line[i + 1];

    if (slope + slope2 < rThreshold && line[i + 1] < center * 1.5) {
      dir = Slope.DIR.DOWN;
    } else if (slope + slope2 > threshold && line[i + 1] > center * 0.5) {
      dir = Slope.DIR.UP;
    } else {
      dir = currentDir;
    }

    if (currentDir !== dir) {
      extrema.push({
        pos: i,
        val: line[i]
      });
      currentDir = dir;
    }
  }

  extrema.push({
    pos: line.length,
    val: line[line.length - 1]
  });

  for (j = extrema[0].pos; j < extrema[1].pos; j++) {
    line[j] = line[j] > center ? 0 : 1;
  } // iterate over extrema and convert to binary based on avg between minmax


  for (i = 1; i < extrema.length - 1; i++) {
    if (extrema[i + 1].val > extrema[i].val) {
      threshold = extrema[i].val + (extrema[i + 1].val - extrema[i].val) / 3 * 2 | 0;
    } else {
      threshold = extrema[i + 1].val + (extrema[i].val - extrema[i + 1].val) / 3 | 0;
    }

    for (j = extrema[i].pos; j < extrema[i + 1].pos; j++) {
      line[j] = line[j] > threshold ? 0 : 1;
    }
  }

  return {
    line: line,
    threshold: threshold
  };
};
/**
 * Used for development only
 */


Bresenham.debug = {
  printFrequency: function printFrequency(line, canvas) {
    var i;
    var ctx = canvas.getContext('2d'); // eslint-disable-next-line no-param-reassign

    canvas.width = line.length; // eslint-disable-next-line no-param-reassign

    canvas.height = 256;
    ctx.beginPath();
    ctx.strokeStyle = 'blue';

    for (i = 0; i < line.length; i++) {
      ctx.moveTo(i, 255);
      ctx.lineTo(i, 255 - line[i]);
    }

    ctx.stroke();
    ctx.closePath();
  },
  printPattern: function printPattern(line, canvas) {
    var ctx = canvas.getContext('2d');
    var i; // eslint-disable-next-line no-param-reassign

    canvas.width = line.length;
    ctx.fillColor = 'black';

    for (i = 0; i < line.length; i++) {
      if (line[i] === 1) {
        ctx.fillRect(i, 0, 1, 100);
      }
    }
  }
};
/* harmony default export */ var bresenham = (Bresenham);
// EXTERNAL MODULE: ./src/common/image_debug.ts
var image_debug = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(5);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/common/array_helper.ts
var array_helper = __webpack_require__(10);

// CONCATENATED MODULE: ./src/reader/barcode_reader.ts




var BarcodeDirection;

(function (BarcodeDirection) {
  BarcodeDirection[BarcodeDirection["Forward"] = 1] = "Forward";
  BarcodeDirection[BarcodeDirection["Reverse"] = -1] = "Reverse";
})(BarcodeDirection || (BarcodeDirection = {}));
var barcode_reader_BarcodeReader = /*#__PURE__*/function () {
  createClass_default()(BarcodeReader, null, [{
    key: "Exception",
    get: function get() {
      return {
        StartNotFoundException: 'Start-Info was not found!',
        CodeNotFoundException: 'Code could not be found!',
        PatternNotFoundException: 'Pattern could not be found!'
      };
    }
  }]);

  function BarcodeReader(config, supplements) {
    classCallCheck_default()(this, BarcodeReader);

    defineProperty_default()(this, "_row", []);

    defineProperty_default()(this, "config", {});

    defineProperty_default()(this, "supplements", []);

    defineProperty_default()(this, "SINGLE_CODE_ERROR", 0);

    defineProperty_default()(this, "FORMAT", 'unknown');

    defineProperty_default()(this, "CONFIG_KEYS", {});

    this._row = [];
    this.config = config || {};

    if (supplements) {
      this.supplements = supplements;
    }

    return this;
  }

  createClass_default()(BarcodeReader, [{
    key: "_nextUnset",
    value: function _nextUnset(line) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = start; i < line.length; i++) {
        if (!line[i]) return i;
      }

      return line.length;
    }
  }, {
    key: "_matchPattern",
    value: function _matchPattern(counter, code, maxSingleError) {
      var error = 0;
      var singleError = 0;
      var sum = 0;
      var modulo = 0;
      var barWidth = 0;
      var count = 0;
      var scaled = 0;
      maxSingleError = maxSingleError || this.SINGLE_CODE_ERROR || 1;

      for (var i = 0; i < counter.length; i++) {
        sum += counter[i];
        modulo += code[i];
      }

      if (sum < modulo) {
        return Number.MAX_VALUE;
      }

      barWidth = sum / modulo;
      maxSingleError *= barWidth;

      for (var _i = 0; _i < counter.length; _i++) {
        count = counter[_i];
        scaled = code[_i] * barWidth;
        singleError = Math.abs(count - scaled) / scaled;

        if (singleError > maxSingleError) {
          return Number.MAX_VALUE;
        }

        error += singleError;
      }

      return error / modulo;
    }
  }, {
    key: "_nextSet",
    value: function _nextSet(line) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = offset; i < line.length; i++) {
        if (line[i]) return i;
      }

      return line.length;
    }
  }, {
    key: "_correctBars",
    value: function _correctBars(counter, correction, indices) {
      var length = indices.length;
      var tmp = 0;

      while (length--) {
        tmp = counter[indices[length]] * (1 - (1 - correction) / 2);

        if (tmp > 1) {
          counter[indices[length]] = tmp;
        }
      }
    }
  }, {
    key: "decodePattern",
    value: function decodePattern(pattern) {
      // console.warn('* decodePattern', pattern);
      this._row = pattern; // console.warn('* decodePattern calling decode', typeof this, this.constructor, this.FORMAT, JSON.stringify(this));

      var result = this._decode(); // console.warn('* first result=', result);


      if (result === null) {
        this._row.reverse();

        result = this._decode(); // console.warn('* reversed result=', result);

        if (result) {
          result.direction = BarcodeDirection.Reverse;
          result.start = this._row.length - result.start;
          result.end = this._row.length - result.end;
        }
      } else {
        result.direction = BarcodeDirection.Forward;
      }

      if (result) {
        result.format = this.FORMAT;
      } // console.warn('* returning', result);


      return result;
    }
  }, {
    key: "_matchRange",
    value: function _matchRange(start, end, value) {
      var i;
      start = start < 0 ? 0 : start;

      for (i = start; i < end; i++) {
        if (this._row[i] !== value) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "_fillCounters",
    value: function _fillCounters() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._nextUnset(this._row);
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._row.length;
      var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var counters = [];
      var counterPos = 0;
      counters[counterPos] = 0;

      for (var i = offset; i < end; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counters[counterPos]++;
        } else {
          counterPos++;
          counters[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return counters;
    }
  }, {
    key: "_toCounters",
    value: function _toCounters(start, counters) {
      var numCounters = counters.length;
      var end = this._row.length;
      var isWhite = !this._row[start];
      var counterPos = 0;
      array_helper["a" /* default */].init(counters, 0);

      for (var i = start; i < end; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counters[counterPos]++;
        } else {
          counterPos++;

          if (counterPos === numCounters) {
            break;
          } else {
            counters[counterPos] = 1;
            isWhite = !isWhite;
          }
        }
      }

      return counters;
    }
  }]);

  return BarcodeReader;
}();
/* harmony default export */ var barcode_reader = (barcode_reader_BarcodeReader);
// CONCATENATED MODULE: ./src/reader/code_128_reader.ts








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var code_128_reader_Code128Reader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(Code128Reader, _BarcodeReader);

  var _super = _createSuper(Code128Reader);

  function Code128Reader() {
    var _this;

    classCallCheck_default()(this, Code128Reader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_SHIFT", 98);

    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_C", 99);

    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_B", 100);

    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_A", 101);

    defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_A", 103);

    defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_B", 104);

    defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_C", 105);

    defineProperty_default()(assertThisInitialized_default()(_this), "STOP_CODE", 106);

    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_PATTERN", [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]]);

    defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.64);

    defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.30);

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_128');

    defineProperty_default()(assertThisInitialized_default()(_this), "MODULE_INDICES", {
      bar: [0, 2, 4],
      space: [1, 3, 5]
    });

    return _this;
  }

  createClass_default()(Code128Reader, [{
    key: "_decodeCode",
    value: function _decodeCode(start, correction) {
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: start,
        end: start,
        correction: {
          bar: 1,
          space: 1
        }
      };
      var counter = [0, 0, 0, 0, 0, 0];
      var offset = start;
      var isWhite = !this._row[offset];
      var counterPos = 0;

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            if (correction) {
              this._correct(counter, correction);
            }

            for (var code = 0; code < this.CODE_PATTERN.length; code++) {
              var error = this._matchPattern(counter, this.CODE_PATTERN[code]);

              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }

            bestMatch.end = i;

            if (bestMatch.code === -1 || bestMatch.error > this.AVG_CODE_ERROR) {
              return null;
            }

            if (this.CODE_PATTERN[bestMatch.code]) {
              bestMatch.correction.bar = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.bar);
              bestMatch.correction.space = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.space);
            }

            return bestMatch;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_correct",
    value: function _correct(counter, correction) {
      this._correctBars(counter, correction.bar, this.MODULE_INDICES.bar);

      this._correctBars(counter, correction.space, this.MODULE_INDICES.space);
    }
  }, {
    key: "_findStart",
    // TODO: _findStart and decodeCode share similar code, can we re-use some?
    value: function _findStart() {
      var counter = [0, 0, 0, 0, 0, 0];

      var offset = this._nextSet(this._row);

      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0,
        correction: {
          bar: 1,
          space: 1
        }
      };
      var isWhite = false;
      var counterPos = 0;

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            var sum = counter.reduce(function (prev, next) {
              return prev + next;
            }, 0);

            for (var code = this.START_CODE_A; code <= this.START_CODE_C; code++) {
              var error = this._matchPattern(counter, this.CODE_PATTERN[code]);

              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }

            if (bestMatch.error < this.AVG_CODE_ERROR) {
              bestMatch.start = i - sum;
              bestMatch.end = i;
              bestMatch.correction.bar = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.bar);
              bestMatch.correction.space = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.space);
              return bestMatch;
            }

            for (var j = 0; j < 4; j++) {
              counter[j] = counter[j + 2];
            }

            counter[4] = 0;
            counter[5] = 0;
            counterPos--;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_decode",
    value: function _decode(row, start) {
      var _this2 = this;

      var startInfo = this._findStart();

      if (startInfo === null) {
        return null;
      } // var self = this,
      //     done = false,
      //     result = [],
      //     multiplier = 0,
      //     checksum = 0,
      //     codeset,
      //     rawResult = [],
      //     decodedCodes = [],
      //     shiftNext = false,
      //     unshift,
      //     removeLastCharacter = true;


      var code = {
        code: startInfo.code,
        start: startInfo.start,
        end: startInfo.end,
        correction: {
          bar: startInfo.correction.bar,
          space: startInfo.correction.space
        }
      };
      var decodedCodes = [];
      decodedCodes.push(code);
      var checksum = code.code;

      var codeset = function (c) {
        switch (c) {
          case _this2.START_CODE_A:
            return _this2.CODE_A;

          case _this2.START_CODE_B:
            return _this2.CODE_B;

          case _this2.START_CODE_C:
            return _this2.CODE_C;

          default:
            return null;
        }
      }(code.code);

      var done = false;
      var shiftNext = false;
      var unshift = shiftNext;
      var removeLastCharacter = true;
      var multiplier = 0;
      var rawResult = [];
      var result = []; // TODO: i think this should be string only, but it creates problems if it is

      while (!done) {
        unshift = shiftNext;
        shiftNext = false;
        code = this._decodeCode(code.end, code.correction);

        if (code !== null) {
          if (code.code !== this.STOP_CODE) {
            removeLastCharacter = true;
          }

          if (code.code !== this.STOP_CODE) {
            rawResult.push(code.code);
            multiplier++;
            checksum += multiplier * code.code;
          }

          decodedCodes.push(code);

          switch (codeset) {
            case this.CODE_A:
              if (code.code < 64) {
                result.push(String.fromCharCode(32 + code.code));
              } else if (code.code < 96) {
                result.push(String.fromCharCode(code.code - 64));
              } else {
                if (code.code !== this.STOP_CODE) {
                  removeLastCharacter = false;
                }

                switch (code.code) {
                  case this.CODE_SHIFT:
                    shiftNext = true;
                    codeset = this.CODE_B;
                    break;

                  case this.CODE_B:
                    codeset = this.CODE_B;
                    break;

                  case this.CODE_C:
                    codeset = this.CODE_C;
                    break;

                  case this.STOP_CODE:
                    done = true;
                    break;
                }
              }

              break;

            case this.CODE_B:
              if (code.code < 96) {
                result.push(String.fromCharCode(32 + code.code));
              } else {
                if (code.code !== this.STOP_CODE) {
                  removeLastCharacter = false;
                }

                switch (code.code) {
                  case this.CODE_SHIFT:
                    shiftNext = true;
                    codeset = this.CODE_A;
                    break;

                  case this.CODE_A:
                    codeset = this.CODE_A;
                    break;

                  case this.CODE_C:
                    codeset = this.CODE_C;
                    break;

                  case this.STOP_CODE:
                    done = true;
                    break;
                }
              }

              break;

            case this.CODE_C:
              if (code.code < 100) {
                result.push(code.code < 10 ? '0' + code.code : code.code);
              } else {
                if (code.code !== this.STOP_CODE) {
                  removeLastCharacter = false;
                }

                switch (code.code) {
                  case this.CODE_A:
                    codeset = this.CODE_A;
                    break;

                  case this.CODE_B:
                    codeset = this.CODE_B;
                    break;

                  case this.STOP_CODE:
                    done = true;
                    break;
                }
              }

              break;
          }
        } else {
          done = true;
        }

        if (unshift) {
          codeset = codeset === this.CODE_A ? this.CODE_B : this.CODE_A;
        }
      }

      if (code === null) {
        return null;
      }

      code.end = this._nextUnset(this._row, code.end);

      if (!this._verifyTrailingWhitespace(code)) {
        return null;
      }

      checksum -= multiplier * rawResult[rawResult.length - 1];

      if (checksum % 103 !== rawResult[rawResult.length - 1]) {
        return null;
      }

      if (!result.length) {
        return null;
      } // remove last code from result (checksum)


      if (removeLastCharacter) {
        result.splice(result.length - 1, 1);
      }

      return {
        code: result.join(''),
        start: startInfo.start,
        end: code.end,
        codeset: codeset,
        startInfo: startInfo,
        decodedCodes: decodedCodes,
        endInfo: code,
        format: this.FORMAT
      };
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var self = this,
          trailingWhitespaceEnd;
      trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

      if (trailingWhitespaceEnd < self._row.length) {
        if (self._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }, {
    key: "calculateCorrection",
    value: function calculateCorrection(expected, normalized, indices) {
      var length = indices.length,
          sumNormalized = 0,
          sumExpected = 0;

      while (length--) {
        sumExpected += expected[indices[length]];
        sumNormalized += normalized[indices[length]];
      }

      return sumExpected / sumNormalized;
    }
  }]);

  return Code128Reader;
}(barcode_reader);

/* harmony default export */ var code_128_reader = (code_128_reader_Code128Reader);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(14);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// CONCATENATED MODULE: ./src/reader/ean_reader.ts








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ean_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ean_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // const CODE_L_START = 0;

var CODE_G_START = 10;

var START_PATTERN = [1, 1, 1];
var MIDDLE_PATTERN = [1, 1, 1, 1, 1];

var EXTENSION_START_PATTERN = [1, 1, 2];
var CODE_PATTERN = [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]];
var CODE_FREQUENCY = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26]; // const SINGLE_CODE_ERROR = 0.70;

var AVG_CODE_ERROR = 0.48;

var ean_reader_EANReader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(EANReader, _BarcodeReader);

  var _super = ean_reader_createSuper(EANReader);

  // TODO: does this need to be in the class?
  function EANReader(config, supplements) {
    var _this;

    classCallCheck_default()(this, EANReader);

    _this = _super.call(this, merge_default()({
      supplements: []
    }, config), supplements);

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_13');

    defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.70);

    defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [1, 1, 1]);

    return _this;
  }

  createClass_default()(EANReader, [{
    key: "_findPattern",
    value: function _findPattern(pattern, offset, isWhite, tryHarder) {
      var counter = new Array(pattern.length).fill(0);
      var bestMatch = {
        error: Number.MAX_VALUE,
        start: 0,
        end: 0
      };
      var epsilon = AVG_CODE_ERROR; // console.warn('* findPattern', pattern, offset, isWhite, tryHarder, epsilon);

      var counterPos = 0;

      if (!offset) {
        offset = this._nextSet(this._row);
      }

      var found = false;

      for (var i = offset; i < this._row.length; i++) {
        // console.warn(`* loop i=${offset} len=${this._row.length} isWhite=${isWhite} counterPos=${counterPos}`);
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos] += 1;
        } else {
          if (counterPos === counter.length - 1) {
            var error = this._matchPattern(counter, pattern); // console.warn('* matchPattern', error, counter, pattern);


            if (error < epsilon && bestMatch.error && error < bestMatch.error) {
              found = true;
              bestMatch.error = error;
              bestMatch.start = i - counter.reduce(function (sum, value) {
                return sum + value;
              }, 0);
              bestMatch.end = i; // console.warn('* return bestMatch', JSON.stringify(bestMatch));

              return bestMatch;
            }

            if (tryHarder) {
              for (var j = 0; j < counter.length - 2; j++) {
                counter[j] = counter[j + 2];
              }

              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            }
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return found ? bestMatch : null;
    } // TODO: findPattern and decodeCode appear to share quite similar code, can it be reduced?

  }, {
    key: "_decodeCode",
    value: function _decodeCode(start, coderange) {
      // console.warn('* decodeCode', start, coderange);
      var counter = [0, 0, 0, 0];
      var offset = start;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: start,
        end: start
      };
      var epsilon = AVG_CODE_ERROR;
      var isWhite = !this._row[offset];
      var counterPos = 0;

      if (!coderange) {
        // console.warn('* decodeCode before length');
        coderange = CODE_PATTERN.length; // console.warn('* decodeCode after length');
      }

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            for (var code = 0; code < coderange; code++) {
              var error = this._matchPattern(counter, CODE_PATTERN[code]);

              bestMatch.end = i;

              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }

            if (bestMatch.error > epsilon) {
              // console.warn('* return null');
              return null;
            } // console.warn('* return bestMatch', JSON.stringify(bestMatch));


            return bestMatch;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return  null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      // console.warn('* findStart');
      var offset = this._nextSet(this._row);

      var startInfo = null;

      while (!startInfo) {
        startInfo = this._findPattern(START_PATTERN, offset, false, true); // console.warn('* startInfo=', JSON.stringify(startInfo));

        if (!startInfo) {
          return null;
        }

        var leadingWhitespaceStart = startInfo.start - (startInfo.end - startInfo.start);

        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            // console.warn('* returning startInfo');
            return startInfo;
          }
        }

        offset = startInfo.end;
        startInfo = null;
      } // console.warn('* returning null');


      return null;
    }
  }, {
    key: "_calculateFirstDigit",
    value: function _calculateFirstDigit(codeFrequency) {
      // console.warn('* calculateFirstDigit', codeFrequency);
      for (var i = 0; i < CODE_FREQUENCY.length; i++) {
        if (codeFrequency === CODE_FREQUENCY[i]) {
          // console.warn('* returning', i);
          return i;
        }
      } // console.warn('* return null');


      return null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(inCode, result, decodedCodes) {
      // console.warn('* decodePayload', inCode, result, decodedCodes);
      var outCode = _objectSpread({}, inCode);

      var codeFrequency = 0x0;

      for (var i = 0; i < 6; i++) {
        outCode = this._decodeCode(outCode.end); // console.warn('* decodeCode=', outCode);

        if (!outCode) {
          // console.warn('* return null');
          return null;
        }

        if (outCode.code >= CODE_G_START) {
          outCode.code -= CODE_G_START;
          codeFrequency |= 1 << 5 - i;
        } else {
          codeFrequency |= 0 << 5 - i;
        }

        result.push(outCode.code);
        decodedCodes.push(outCode);
      }

      var firstDigit = this._calculateFirstDigit(codeFrequency); // console.warn('* firstDigit=', firstDigit);


      if (firstDigit === null) {
        // console.warn('* return null');
        return null;
      }

      result.unshift(firstDigit);

      var middlePattern = this._findPattern(MIDDLE_PATTERN, outCode.end, true, false); // console.warn('* findPattern=', JSON.stringify(middlePattern));


      if (middlePattern === null || !middlePattern.end) {
        // console.warn('* return null');
        return null;
      }

      decodedCodes.push(middlePattern);

      for (var _i = 0; _i < 6; _i++) {
        middlePattern = this._decodeCode(middlePattern.end, CODE_G_START); // console.warn('* decodeCode=', JSON.stringify(middlePattern));

        if (!middlePattern) {
          // console.warn('* return null');
          return null;
        }

        decodedCodes.push(middlePattern);
        result.push(middlePattern.code);
      } // console.warn('* end code=', JSON.stringify(middlePattern));
      // console.warn('* end result=', JSON.stringify(result));
      // console.warn('* end decodedCodes=', decodedCodes);


      return middlePattern;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      // console.warn('* verifyTrailingWhitespace', JSON.stringify(endInfo));
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start);

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          // console.warn('* returning', JSON.stringify(endInfo));
          return endInfo;
        }
      } // console.warn('* return null');


      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd(offset, isWhite) {
      // console.warn('* findEnd', offset, isWhite);
      var endInfo = this._findPattern(this.STOP_PATTERN, offset, isWhite, false);

      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_checksum",
    value: function _checksum(result) {
      // console.warn('* _checksum', result);
      var sum = 0;

      for (var i = result.length - 2; i >= 0; i -= 2) {
        sum += result[i];
      }

      sum *= 3;

      for (var _i2 = result.length - 1; _i2 >= 0; _i2 -= 2) {
        sum += result[_i2];
      } // console.warn('* end checksum', sum % 10 === 0);


      return sum % 10 === 0;
    }
  }, {
    key: "_decodeExtensions",
    value: function _decodeExtensions(offset) {
      var start = this._nextSet(this._row, offset);

      var startInfo = this._findPattern(EXTENSION_START_PATTERN, start, false, false);

      if (startInfo === null) {
        return null;
      } // console.warn('* decodeExtensions', this.supplements);
      // console.warn('* there are ', this.supplements.length, ' supplements');


      for (var i = 0; i < this.supplements.length; i++) {
        // console.warn('* extensions loop', i, this.supplements[i], this.supplements[i]._decode);
        try {
          var result = this.supplements[i]._decode(this._row, startInfo.end); // console.warn('* decode result=', result);


          if (result !== null) {
            return {
              code: result.code,
              start: start,
              startInfo: startInfo,
              end: result.end,
              decodedCodes: result.decodedCodes,
              format: this.supplements[i].FORMAT
            };
          }
        } catch (err) {
          console.error('* decodeExtensions error in ', this.supplements[i], ': ', err);
        }
      } // console.warn('* end decodeExtensions');


      return null;
    }
  }, {
    key: "_decode",
    value: function _decode(row, start) {
      // console.warn('* decode', row);
      // console.warn('* decode', start);
      var result = new Array();
      var decodedCodes = new Array();
      var resultInfo = {};

      var startInfo = this._findStart();

      if (!startInfo) {
        return null;
      }

      var code = {
        start: startInfo.start,
        end: startInfo.end
      };
      decodedCodes.push(code);
      code = this._decodePayload(code, result, decodedCodes);

      if (!code) {
        return null;
      }

      code = this._findEnd(code.end, false);

      if (!code) {
        return null;
      }

      decodedCodes.push(code); // Checksum

      if (!this._checksum(result)) {
        return null;
      } // console.warn('* this.supplements=', this.supplements);


      if (this.supplements.length > 0) {
        var supplement = this._decodeExtensions(code.end); // console.warn('* decodeExtensions returns', supplement);


        if (!supplement) {
          return null;
        }

        if (!supplement.decodedCodes) {
          return null;
        }

        var lastCode = supplement.decodedCodes[supplement.decodedCodes.length - 1];
        var endInfo = {
          start: lastCode.start + ((lastCode.end - lastCode.start) / 2 | 0),
          end: lastCode.end
        };

        if (!this._verifyTrailingWhitespace(endInfo)) {
          return null;
        }

        resultInfo = {
          supplement: supplement,
          code: result.join('') + supplement.code
        };
      }

      return _objectSpread(_objectSpread({
        code: result.join(''),
        start: startInfo.start,
        end: code.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes
      }, resultInfo), {}, {
        format: this.FORMAT
      });
    }
  }]);

  return EANReader;
}(barcode_reader);

/* harmony default export */ var ean_reader = (ean_reader_EANReader);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(32);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/reader/code_39_reader.ts









function code_39_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_39_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function code_39_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%';
var ALPHABET = new Uint16Array(toConsumableArray_default()(ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
}));
var CHARACTER_ENCODINGS = new Uint16Array([0x034, 0x121, 0x061, 0x160, 0x031, 0x130, 0x070, 0x025, 0x124, 0x064, 0x109, 0x049, 0x148, 0x019, 0x118, 0x058, 0x00D, 0x10C, 0x04C, 0x01C, 0x103, 0x043, 0x142, 0x013, 0x112, 0x052, 0x007, 0x106, 0x046, 0x016, 0x181, 0x0C1, 0x1C0, 0x091, 0x190, 0x0D0, 0x085, 0x184, 0x0C4, 0x094, 0x0A8, 0x0A2, 0x08A, 0x02A]);
var ASTERISK = 0x094;

var code_39_reader_Code39Reader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(Code39Reader, _BarcodeReader);

  var _super = code_39_reader_createSuper(Code39Reader);

  function Code39Reader() {
    var _this;

    classCallCheck_default()(this, Code39Reader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_39');

    return _this;
  }

  createClass_default()(Code39Reader, [{
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);

      var patternStart = offset;
      var counter = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      var counterPos = 0;
      var isWhite = false;

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            // find start pattern
            if (this._toPattern(counter) === ASTERISK) {
              var whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));

              if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                return {
                  start: patternStart,
                  end: i
                };
              }
            }

            patternStart += counter[0] + counter[1];

            for (var j = 0; j < 7; j++) {
              counter[j] = counter[j + 2];
            }

            counter[7] = 0;
            counter[8] = 0;
            counterPos--;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(counters) {
      var numCounters = counters.length;
      var maxNarrowWidth = 0;
      var numWideBars = numCounters;
      var wideBarWidth = 0;

      while (numWideBars > 3) {
        maxNarrowWidth = this._findNextWidth(counters, maxNarrowWidth);
        numWideBars = 0;
        var pattern = 0;

        for (var i = 0; i < numCounters; i++) {
          if (counters[i] > maxNarrowWidth) {
            pattern |= 1 << numCounters - 1 - i;
            numWideBars++;
            wideBarWidth += counters[i];
          }
        }

        if (numWideBars === 3) {
          for (var _i = 0; _i < numCounters && numWideBars > 0; _i++) {
            if (counters[_i] > maxNarrowWidth) {
              numWideBars--;

              if (counters[_i] * 2 >= wideBarWidth) {
                return -1;
              }
            }
          }

          return pattern;
        }
      }

      return -1;
    }
  }, {
    key: "_findNextWidth",
    value: function _findNextWidth(counters, current) {
      var minWidth = Number.MAX_VALUE;

      for (var i = 0; i < counters.length; i++) {
        if (counters[i] < minWidth && counters[i] > current) {
          minWidth = counters[i];
        }
      }

      return minWidth;
    }
  }, {
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < CHARACTER_ENCODINGS.length; i++) {
        if (CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(ALPHABET[i]);
        }
      }

      return null;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(lastStart, nextStart, counters) {
      var patternSize = array_helper["a" /* default */].sum(counters);
      var trailingWhitespaceEnd = nextStart - lastStart - patternSize;

      if (trailingWhitespaceEnd * 3 >= patternSize) {
        return true;
      }

      return false;
    }
  }, {
    key: "_decode",
    value: function _decode(row, start) {
      var counters = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      var result = [];
      start = this._findStart();

      if (!start) {
        return null;
      }

      var nextStart = this._nextSet(this._row, start.end);

      var decodedChar;
      var lastStart;

      do {
        counters = this._toCounters(nextStart, counters);

        var pattern = this._toPattern(counters);

        if (pattern < 0) {
          return null;
        }

        decodedChar = this._patternToChar(pattern);

        if (decodedChar === null) {
          return null;
        }

        result.push(decodedChar);
        lastStart = nextStart;
        nextStart += array_helper["a" /* default */].sum(counters);
        nextStart = this._nextSet(this._row, nextStart);
      } while (decodedChar !== '*');

      result.pop();

      if (!result.length) {
        return null;
      }

      if (!this._verifyTrailingWhitespace(lastStart, nextStart, counters)) {
        return null;
      }

      return {
        code: result.join(''),
        start: start.start,
        end: nextStart,
        startInfo: start,
        decodedCodes: result,
        format: this.FORMAT
      };
    }
  }]);

  return Code39Reader;
}(barcode_reader);

/* harmony default export */ var code_39_reader = (code_39_reader_Code39Reader);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(15);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./src/reader/code_39_vin_reader.ts









function code_39_vin_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_39_vin_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function code_39_vin_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var patterns = {
  IOQ: /[IOQ]/g,
  AZ09: /[A-Z0-9]{17}/
};

var code_39_vin_reader_Code39VINReader = /*#__PURE__*/function (_Code39Reader) {
  inherits_default()(Code39VINReader, _Code39Reader);

  var _super = code_39_vin_reader_createSuper(Code39VINReader);

  function Code39VINReader() {
    var _this;

    classCallCheck_default()(this, Code39VINReader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_39_vin');

    return _this;
  }

  createClass_default()(Code39VINReader, [{
    key: "_checkChecksum",
    // TODO (this was todo in original repo, no text was there. sorry.)
    value: function _checkChecksum(code) {
      return !!code;
    } // Cribbed from:
    // https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/client/result/VINResultParser.java

  }, {
    key: "_decode",
    value: function _decode(row, start) {
      var result = get_default()(getPrototypeOf_default()(Code39VINReader.prototype), "_decode", this).call(this, row, start);

      if (!result) {
        return null;
      }

      var code = result.code;

      if (!code) {
        return null;
      }

      code = code.replace(patterns.IOQ, '');

      if (!code.match(patterns.AZ09)) {
        {
          console.log('Failed AZ09 pattern code:', code);
        }

        return null;
      }

      if (!this._checkChecksum(code)) {
        return null;
      }

      result.code = code;
      return result;
    }
  }]);

  return Code39VINReader;
}(code_39_reader);

/* harmony default export */ var code_39_vin_reader = (code_39_vin_reader_Code39VINReader);
// CONCATENATED MODULE: ./src/reader/codabar_reader.ts








function codabar_reader_createSuper(Derived) { var hasNativeReflectConstruct = codabar_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function codabar_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // const ALPHABETH_STRING = '0123456789-$:/.+ABCD';

var codabar_reader_ALPHABET = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68];
var codabar_reader_CHARACTER_ENCODINGS = [0x003, 0x006, 0x009, 0x060, 0x012, 0x042, 0x021, 0x024, 0x030, 0x048, 0x00c, 0x018, 0x045, 0x051, 0x054, 0x015, 0x01A, 0x029, 0x00B, 0x00E];
var START_END = [0x01A, 0x029, 0x00B, 0x00E];
var MIN_ENCODED_CHARS = 4;
var MAX_ACCEPTABLE = 2.0;
var PADDING = 1.5;

var codabar_reader_NewCodabarReader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(NewCodabarReader, _BarcodeReader);

  var _super = codabar_reader_createSuper(NewCodabarReader);

  function NewCodabarReader() {
    var _this;

    classCallCheck_default()(this, NewCodabarReader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "_counters", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'codabar');

    return _this;
  }

  createClass_default()(NewCodabarReader, [{
    key: "_computeAlternatingThreshold",
    value: function _computeAlternatingThreshold(offset, end) {
      var min = Number.MAX_VALUE;
      var max = 0;
      var counter = 0;

      for (var i = offset; i < end; i += 2) {
        counter = this._counters[i];

        if (counter > max) {
          max = counter;
        }

        if (counter < min) {
          min = counter;
        }
      }

      return (min + max) / 2.0 | 0;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(offset) {
      var numCounters = 7;
      var end = offset + numCounters;

      if (end > this._counters.length) {
        return -1;
      }

      var barThreshold = this._computeAlternatingThreshold(offset, end);

      var spaceThreshold = this._computeAlternatingThreshold(offset + 1, end);

      var bitmask = 1 << numCounters - 1;
      var threshold = 0;
      var pattern = 0;

      for (var i = 0; i < numCounters; i++) {
        threshold = (i & 1) === 0 ? barThreshold : spaceThreshold;

        if (this._counters[offset + i] > threshold) {
          pattern |= bitmask;
        }

        bitmask >>= 1;
      }

      return pattern;
    }
  }, {
    key: "_isStartEnd",
    value: function _isStartEnd(pattern) {
      for (var i = 0; i < START_END.length; i++) {
        if (START_END[i] === pattern) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_sumCounters",
    value: function _sumCounters(start, end) {
      var sum = 0;

      for (var i = start; i < end; i++) {
        sum += this._counters[i];
      }

      return sum;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var start = this._nextUnset(this._row);

      var end = start;

      for (var i = 1; i < this._counters.length; i++) {
        var pattern = this._toPattern(i);

        if (pattern !== -1 && this._isStartEnd(pattern)) {
          // TODO: Look for whitespace ahead
          start += this._sumCounters(0, i);
          end = start + this._sumCounters(i, i + 8);
          return {
            start: start,
            end: end,
            startCounter: i,
            endCounter: i + 8
          };
        }
      }

      return null;
    }
  }, {
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < codabar_reader_CHARACTER_ENCODINGS.length; i++) {
        if (codabar_reader_CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(codabar_reader_ALPHABET[i]);
        }
      }

      return null;
    }
  }, {
    key: "_calculatePatternLength",
    value: function _calculatePatternLength(offset) {
      var sum = 0;

      for (var i = offset; i < offset + 7; i++) {
        sum += this._counters[i];
      }

      return sum;
    }
  }, {
    key: "_verifyWhitespace",
    value: function _verifyWhitespace(startCounter, endCounter) {
      if (startCounter - 1 <= 0 || this._counters[startCounter - 1] >= this._calculatePatternLength(startCounter) / 2.0) {
        if (endCounter + 8 >= this._counters.length || this._counters[endCounter + 7] >= this._calculatePatternLength(endCounter) / 2.0) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_charToPattern",
    value: function _charToPattern(_char) {
      var charCode = _char.charCodeAt(0);

      for (var i = 0; i < codabar_reader_ALPHABET.length; i++) {
        if (codabar_reader_ALPHABET[i] === charCode) {
          return codabar_reader_CHARACTER_ENCODINGS[i];
        }
      }

      return 0x0;
    }
  }, {
    key: "_thresholdResultPattern",
    value: function _thresholdResultPattern(result, startCounter) {
      var categorization = {
        space: {
          narrow: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          },
          wide: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          }
        },
        bar: {
          narrow: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          },
          wide: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          }
        }
      };
      var pos = startCounter;
      var pattern;

      for (var i = 0; i < result.length; i++) {
        pattern = this._charToPattern(result[i]);

        for (var j = 6; j >= 0; j--) {
          var kind = (j & 1) === 2 ? categorization.bar : categorization.space;
          var cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
          cat.size += this._counters[pos + j];
          cat.counts++;
          pattern >>= 1;
        }

        pos += 8;
      }

      ['space', 'bar'].forEach(function (key) {
        var newkind = categorization[key];
        newkind.wide.min = Math.floor((newkind.narrow.size / newkind.narrow.counts + newkind.wide.size / newkind.wide.counts) / 2);
        newkind.narrow.max = Math.ceil(newkind.wide.min);
        newkind.wide.max = Math.ceil((newkind.wide.size * MAX_ACCEPTABLE + PADDING) / newkind.wide.counts);
      });
      return categorization;
    }
  }, {
    key: "_validateResult",
    value: function _validateResult(result, startCounter) {
      var thresholds = this._thresholdResultPattern(result, startCounter);

      var pos = startCounter;
      var pattern;

      for (var i = 0; i < result.length; i++) {
        pattern = this._charToPattern(result[i]);

        for (var j = 6; j >= 0; j--) {
          var kind = (j & 1) === 0 ? thresholds.bar : thresholds.space;
          var cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
          var size = this._counters[pos + j];

          if (size < cat.min || size > cat.max) {
            return false;
          }

          pattern >>= 1;
        }

        pos += 8;
      }

      return true;
    }
  }, {
    key: "_decode",
    value: function _decode(row, start) {
      this._counters = this._fillCounters();
      start = this._findStart();

      if (!start) {
        return null;
      }

      var nextStart = start.startCounter;
      var result = [];
      var pattern;

      do {
        pattern = this._toPattern(nextStart);

        if (pattern < 0) {
          return null;
        }

        var decodedChar = this._patternToChar(pattern);

        if (decodedChar === null) {
          return null;
        }

        result.push(decodedChar);
        nextStart += 8;

        if (result.length > 1 && this._isStartEnd(pattern)) {
          break;
        }
      } while (nextStart < this._counters.length); // verify end


      if (result.length - 2 < MIN_ENCODED_CHARS || !this._isStartEnd(pattern)) {
        return null;
      } // verify end white space


      if (!this._verifyWhitespace(start.startCounter, nextStart - 8)) {
        return null;
      }

      if (!this._validateResult(result, start.startCounter)) {
        return null;
      }

      nextStart = nextStart > this._counters.length ? this._counters.length : nextStart;

      var end = start.start + this._sumCounters(start.startCounter, nextStart - 8);

      return {
        code: result.join(''),
        start: start.start,
        end: end,
        startInfo: start,
        decodedCodes: result,
        format: this.FORMAT // TODO: i think it should not be required to return format from this, as barcode_reader force sets the format anyway

      };
    }
  }]);

  return NewCodabarReader;
}(barcode_reader);

/* harmony default export */ var codabar_reader = (codabar_reader_NewCodabarReader);
// CONCATENATED MODULE: ./src/reader/upc_reader.ts








function upc_reader_createSuper(Derived) { var hasNativeReflectConstruct = upc_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function upc_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var upc_reader_UPCReader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(UPCReader, _EANReader);

  var _super = upc_reader_createSuper(UPCReader);

  function UPCReader() {
    var _this;

    classCallCheck_default()(this, UPCReader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'upc_a');

    return _this;
  }

  createClass_default()(UPCReader, [{
    key: "_decode",
    value: function _decode(row, start) {
      var result = ean_reader.prototype._decode.call(this);

      if (result && result.code && result.code.length === 13 && result.code.charAt(0) === '0') {
        result.code = result.code.substring(1);
        return result;
      }

      return null;
    }
  }]);

  return UPCReader;
}(ean_reader);

/* harmony default export */ var upc_reader = (upc_reader_UPCReader);
// CONCATENATED MODULE: ./src/reader/ean_8_reader.ts








function ean_8_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_8_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ean_8_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var ean_8_reader_EAN8Reader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(EAN8Reader, _EANReader);

  var _super = ean_8_reader_createSuper(EAN8Reader);

  function EAN8Reader() {
    var _this;

    classCallCheck_default()(this, EAN8Reader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_8');

    return _this;
  }

  createClass_default()(EAN8Reader, [{
    key: "_decodePayload",
    value: function _decodePayload(inCode, result, decodedCodes) {
      var code = inCode;

      for (var i = 0; i < 4; i++) {
        code = this._decodeCode(code.end, CODE_G_START);

        if (!code) {
          return null;
        }

        result.push(code.code);
        decodedCodes.push(code);
      }

      code = this._findPattern(MIDDLE_PATTERN, code.end, true, false);

      if (code === null) {
        return null;
      }

      decodedCodes.push(code);

      for (var _i = 0; _i < 4; _i++) {
        code = this._decodeCode(code.end, CODE_G_START);

        if (!code) {
          return null;
        }

        decodedCodes.push(code);
        result.push(code.code);
      }

      return code;
    }
  }]);

  return EAN8Reader;
}(ean_reader);

/* harmony default export */ var ean_8_reader = (ean_8_reader_EAN8Reader);
// CONCATENATED MODULE: ./src/reader/ean_2_reader.ts








function ean_2_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_2_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ean_2_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var ean_2_reader_EAN2Reader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(EAN2Reader, _EANReader);

  var _super = ean_2_reader_createSuper(EAN2Reader);

  function EAN2Reader() {
    var _this;

    classCallCheck_default()(this, EAN2Reader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_2');

    return _this;
  }

  createClass_default()(EAN2Reader, [{
    key: "_decode",
    value: function _decode(row, start) {
      if (row) {
        this._row = row;
      }

      var codeFrequency = 0;
      var offset = start;
      var end = this._row.length;
      var result = [];
      var decodedCodes = [];
      var code = null;

      if (offset === undefined) {
        return null;
      }

      for (var i = 0; i < 2 && offset < end; i++) {
        code = this._decodeCode(offset);

        if (!code) {
          return null;
        }

        decodedCodes.push(code);
        result.push(code.code % 10);

        if (code.code >= CODE_G_START) {
          codeFrequency |= 1 << 1 - i;
        }

        if (i !== 1) {
          offset = this._nextSet(this._row, code.end);
          offset = this._nextUnset(this._row, offset);
        }
      }

      if (result.length !== 2 || parseInt(result.join('')) % 4 !== codeFrequency) {
        return null;
      }

      var startInfo = this._findStart();

      return {
        code: result.join(''),
        decodedCodes: decodedCodes,
        end: code.end,
        format: this.FORMAT,
        startInfo: startInfo,
        start: startInfo.start
      };
    }
  }]);

  return EAN2Reader;
}(ean_reader);
/* harmony default export */ var ean_2_reader = (ean_2_reader_EAN2Reader);
// CONCATENATED MODULE: ./src/reader/ean_5_reader.ts








function ean_5_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_5_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ean_5_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];

function determineCheckDigit(codeFrequency) {
  for (var i = 0; i < 10; i++) {
    if (codeFrequency === CHECK_DIGIT_ENCODINGS[i]) {
      return i;
    }
  }

  return null;
}

function extensionChecksum(result) {
  var length = result.length;
  var sum = 0;

  for (var i = length - 2; i >= 0; i -= 2) {
    sum += result[i];
  }

  sum *= 3;

  for (var _i = length - 1; _i >= 0; _i -= 2) {
    sum += result[_i];
  }

  sum *= 3;
  return sum % 10;
}

var ean_5_reader_EAN5Reader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(EAN5Reader, _EANReader);

  var _super = ean_5_reader_createSuper(EAN5Reader);

  function EAN5Reader() {
    var _this;

    classCallCheck_default()(this, EAN5Reader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_5');

    return _this;
  }

  createClass_default()(EAN5Reader, [{
    key: "_decode",
    value: function _decode(row, start) {
      if (start === undefined) {
        return null;
      }

      if (row) {
        this._row = row;
      }

      var codeFrequency = 0;
      var offset = start;
      var end = this._row.length;
      var code = null;
      var result = [];
      var decodedCodes = [];

      for (var i = 0; i < 5 && offset < end; i++) {
        code = this._decodeCode(offset);

        if (!code) {
          return null;
        }

        decodedCodes.push(code);
        result.push(code.code % 10);

        if (code.code >= CODE_G_START) {
          codeFrequency |= 1 << 4 - i;
        }

        if (i !== 4) {
          offset = this._nextSet(this._row, code.end);
          offset = this._nextUnset(this._row, offset);
        }
      }

      if (result.length !== 5) {
        return null;
      }

      if (extensionChecksum(result) !== determineCheckDigit(codeFrequency)) {
        return null;
      }

      var startInfo = this._findStart();

      return {
        code: result.join(''),
        decodedCodes: decodedCodes,
        end: code.end,
        format: this.FORMAT,
        startInfo: startInfo,
        start: startInfo.start
      };
    }
  }]);

  return EAN5Reader;
}(ean_reader);
/* harmony default export */ var ean_5_reader = (ean_5_reader_EAN5Reader);
// CONCATENATED MODULE: ./src/reader/upc_e_reader.ts









function upc_e_reader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function upc_e_reader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { upc_e_reader_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { upc_e_reader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function upc_e_reader_createSuper(Derived) { var hasNativeReflectConstruct = upc_e_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function upc_e_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var upc_e_reader_UPCEReader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(UPCEReader, _EANReader);

  var _super = upc_e_reader_createSuper(UPCEReader);

  function UPCEReader() {
    var _this;

    classCallCheck_default()(this, UPCEReader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_FREQUENCY", [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]]);

    defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7]);

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'upc_e');

    return _this;
  }

  createClass_default()(UPCEReader, [{
    key: "_decodePayload",
    value: function _decodePayload(inCode, result, decodedCodes) {
      var outCode = upc_e_reader_objectSpread({}, inCode);

      var codeFrequency = 0x0;

      for (var i = 0; i < 6; i++) {
        outCode = this._decodeCode(outCode.end);

        if (!outCode) {
          return null;
        }

        if (outCode.code >= CODE_G_START) {
          outCode.code = outCode.code - CODE_G_START;
          codeFrequency |= 1 << 5 - i;
        }

        result.push(outCode.code);
        decodedCodes.push(outCode);
      }

      if (!this._determineParity(codeFrequency, result)) {
        return null;
      }

      return outCode;
    }
  }, {
    key: "_determineParity",
    value: function _determineParity(codeFrequency, result) {
      for (var nrSystem = 0; nrSystem < this.CODE_FREQUENCY.length; nrSystem++) {
        for (var i = 0; i < this.CODE_FREQUENCY[nrSystem].length; i++) {
          if (codeFrequency === this.CODE_FREQUENCY[nrSystem][i]) {
            result.unshift(nrSystem);
            result.push(i);
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "_convertToUPCA",
    value: function _convertToUPCA(result) {
      var upca = [result[0]];
      var lastDigit = result[result.length - 2];

      if (lastDigit <= 2) {
        upca = upca.concat(result.slice(1, 3)).concat([lastDigit, 0, 0, 0, 0]).concat(result.slice(3, 6));
      } else if (lastDigit === 3) {
        upca = upca.concat(result.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(result.slice(4, 6));
      } else if (lastDigit === 4) {
        upca = upca.concat(result.slice(1, 5)).concat([0, 0, 0, 0, 0, result[5]]);
      } else {
        upca = upca.concat(result.slice(1, 6)).concat([0, 0, 0, 0, lastDigit]);
      }

      upca.push(result[result.length - 1]);
      return upca;
    }
  }, {
    key: "_checksum",
    value: function _checksum(result) {
      return get_default()(getPrototypeOf_default()(UPCEReader.prototype), "_checksum", this).call(this, this._convertToUPCA(result));
    }
  }, {
    key: "_findEnd",
    value: function _findEnd(offset, isWhite) {
      return get_default()(getPrototypeOf_default()(UPCEReader.prototype), "_findEnd", this).call(this, offset, true);
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }]);

  return UPCEReader;
}(ean_reader);

/* harmony default export */ var upc_e_reader = (upc_e_reader_UPCEReader);
// CONCATENATED MODULE: ./src/reader/i2of5_reader.ts








function i2of5_reader_createSuper(Derived) { var hasNativeReflectConstruct = i2of5_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function i2of5_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// TODO: i2of5_reader and 2of5_reader share very similar code, make use of that


var N = 1;
var W = 3;

var i2of5_reader_I2of5Reader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(I2of5Reader, _BarcodeReader);

  var _super = i2of5_reader_createSuper(I2of5Reader);

  function I2of5Reader(opts) {
    var _this;

    classCallCheck_default()(this, I2of5Reader);

    _this = _super.call(this, merge_default()({
      normalizeBarSpaceWidth: false
    }, opts));

    defineProperty_default()(assertThisInitialized_default()(_this), "barSpaceRatio", [1, 1]);

    defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.78);

    defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.38);

    defineProperty_default()(assertThisInitialized_default()(_this), "START_PATTERN", [N, N, N, N]);

    defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [N, N, W]);

    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_PATTERN", [[N, N, W, W, N], [W, N, N, N, W], [N, W, N, N, W], [W, W, N, N, N], [N, N, W, N, W], [W, N, W, N, N], [N, W, W, N, N], [N, N, N, W, W], [W, N, N, W, N], [N, W, N, W, N]]);

    defineProperty_default()(assertThisInitialized_default()(_this), "MAX_CORRECTION_FACTOR", 5);

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'i2of5');

    if (opts.normalizeBarSpaceWidth) {
      _this.SINGLE_CODE_ERROR = 0.38;
      _this.AVG_CODE_ERROR = 0.09;
    }

    _this.config = opts;
    return possibleConstructorReturn_default()(_this, assertThisInitialized_default()(_this));
  }

  createClass_default()(I2of5Reader, [{
    key: "_matchPattern",
    value: function _matchPattern(counter, code) {
      if (this.config.normalizeBarSpaceWidth) {
        var counterSum = [0, 0];
        var codeSum = [0, 0];
        var correction = [0, 0];
        var correctionRatio = this.MAX_CORRECTION_FACTOR;
        var correctionRatioInverse = 1 / correctionRatio;

        for (var i = 0; i < counter.length; i++) {
          counterSum[i % 2] += counter[i];
          codeSum[i % 2] += code[i];
        }

        correction[0] = codeSum[0] / counterSum[0];
        correction[1] = codeSum[1] / counterSum[1];
        correction[0] = Math.max(Math.min(correction[0], correctionRatio), correctionRatioInverse);
        correction[1] = Math.max(Math.min(correction[1], correctionRatio), correctionRatioInverse);
        this.barSpaceRatio = correction;

        for (var _i = 0; _i < counter.length; _i++) {
          counter[_i] *= this.barSpaceRatio[_i % 2];
        }
      }

      return barcode_reader.prototype._matchPattern.call(this, counter, code);
    }
  }, {
    key: "_findPattern",
    value: function _findPattern(pattern, offset) {
      var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var tryHarder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var counter = new Array(pattern.length).fill(0);
      var counterPos = 0;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      var epsilon = this.AVG_CODE_ERROR;
      isWhite = isWhite || false;
      tryHarder = tryHarder || false;

      if (!offset) {
        offset = this._nextSet(this._row);
      }

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            var sum = counter.reduce(function (prev, next) {
              return prev + next;
            }, 0);

            var error = this._matchPattern(counter, pattern);

            if (error < epsilon) {
              bestMatch.error = error;
              bestMatch.start = i - sum;
              bestMatch.end = i;
              return bestMatch;
            }

            if (tryHarder) {
              for (var j = 0; j < counter.length - 2; j++) {
                counter[j] = counter[j + 2];
              }

              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            } else {
              return null;
            }
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var leadingWhitespaceStart = 0;

      var offset = this._nextSet(this._row);

      var startInfo = null;
      var narrowBarWidth = 1;

      while (!startInfo) {
        startInfo = this._findPattern(this.START_PATTERN, offset, false, true);

        if (!startInfo) {
          return null;
        }

        narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / 4);
        leadingWhitespaceStart = startInfo.start - narrowBarWidth * 10;

        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }

        offset = startInfo.end;
        startInfo = null;
      }

      return null;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd() {
      this._row.reverse();

      var endInfo = this._findPattern(this.STOP_PATTERN);

      this._row.reverse();

      if (endInfo === null) {
        return null;
      } // reverse numbers


      var tmp = endInfo.start;
      endInfo.start = this._row.length - endInfo.end;
      endInfo.end = this._row.length - tmp;
      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_decodePair",
    value: function _decodePair(counterPair) {
      var codes = [];

      for (var i = 0; i < counterPair.length; i++) {
        var code = this._decodeCode(counterPair[i]);

        if (!code) {
          return null;
        }

        codes.push(code);
      }

      return codes;
    }
  }, {
    key: "_decodeCode",
    value: function _decodeCode(counter) {
      var epsilon = this.AVG_CODE_ERROR;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };

      for (var code = 0; code < this.CODE_PATTERN.length; code++) {
        var error = this._matchPattern(counter, this.CODE_PATTERN[code]);

        if (error < bestMatch.error) {
          bestMatch.code = code;
          bestMatch.error = error;
        }
      }

      if (bestMatch.error < epsilon) {
        return bestMatch;
      }

      return null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(counters, result, decodedCodes) {
      var pos = 0;
      var counterLength = counters.length;
      var counterPair = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
      var codes = null;

      while (pos < counterLength) {
        for (var i = 0; i < 5; i++) {
          counterPair[0][i] = counters[pos] * this.barSpaceRatio[0];
          counterPair[1][i] = counters[pos + 1] * this.barSpaceRatio[1];
          pos += 2;
        }

        codes = this._decodePair(counterPair);

        if (!codes) {
          return null;
        }

        for (var _i2 = 0; _i2 < codes.length; _i2++) {
          result.push(codes[_i2].code + '');
          decodedCodes.push(codes[_i2]);
        }
      }

      return codes;
    }
  }, {
    key: "_verifyCounterLength",
    value: function _verifyCounterLength(counters) {
      return counters.length % 10 === 0;
    }
  }, {
    key: "_decode",
    value: function _decode(row, start) {
      var result = new Array();
      var decodedCodes = new Array();

      var startInfo = this._findStart();

      if (!startInfo) {
        return null;
      }

      decodedCodes.push(startInfo);

      var endInfo = this._findEnd();

      if (!endInfo) {
        return null;
      }

      var counters = this._fillCounters(startInfo.end, endInfo.start, false);

      if (!this._verifyCounterLength(counters)) {
        return null;
      }

      var code = this._decodePayload(counters, result, decodedCodes);

      if (!code) {
        return null;
      }

      if (result.length % 2 !== 0 || result.length < 6) {
        return null;
      }

      decodedCodes.push(endInfo);
      return {
        code: result.join(''),
        start: startInfo.start,
        end: endInfo.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes,
        format: this.FORMAT
      };
    }
  }]);

  return I2of5Reader;
}(barcode_reader);

/* harmony default export */ var i2of5_reader = (i2of5_reader_I2of5Reader);
// CONCATENATED MODULE: ./src/reader/2of5_reader.ts








function _2of5_reader_createSuper(Derived) { var hasNativeReflectConstruct = _2of5_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _2of5_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var _2of5_reader_N = 1;
var _2of5_reader_W = 3;
var _2of5_reader_START_PATTERN = [_2of5_reader_W, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_N];
var STOP_PATTERN = [_2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W];
var _2of5_reader_CODE_PATTERN = [[_2of5_reader_N, _2of5_reader_N, _2of5_reader_W, _2of5_reader_W, _2of5_reader_N], [_2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W], [_2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W], [_2of5_reader_W, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_N], [_2of5_reader_N, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_W], [_2of5_reader_W, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N], [_2of5_reader_N, _2of5_reader_W, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N], [_2of5_reader_N, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W, _2of5_reader_W], [_2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N], [_2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N]];
var START_PATTERN_LENGTH = _2of5_reader_START_PATTERN.reduce(function (sum, val) {
  return sum + val;
}, 0);

var _2of5_reader_TwoOfFiveReader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(TwoOfFiveReader, _BarcodeReader);

  var _super = _2of5_reader_createSuper(TwoOfFiveReader);

  function TwoOfFiveReader() {
    var _this;

    classCallCheck_default()(this, TwoOfFiveReader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "barSpaceRatio", [1, 1]);

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", '2of5');

    defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.78);

    defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.30);

    return _this;
  }

  createClass_default()(TwoOfFiveReader, [{
    key: "_findPattern",
    value: function _findPattern(pattern, offset) {
      var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var tryHarder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var counter = [];
      var counterPos = 0;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      var sum = 0;
      var error = 0;
      var epsilon = this.AVG_CODE_ERROR;

      if (!offset) {
        offset = this._nextSet(this._row);
      }

      for (var i = 0; i < pattern.length; i++) {
        counter[i] = 0;
      }

      for (var _i = offset; _i < this._row.length; _i++) {
        if (this._row[_i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            sum = 0;

            for (var j = 0; j < counter.length; j++) {
              sum += counter[j];
            }

            error = this._matchPattern(counter, pattern);

            if (error < epsilon) {
              bestMatch.error = error;
              bestMatch.start = _i - sum;
              bestMatch.end = _i;
              return bestMatch;
            }

            if (tryHarder) {
              for (var _j = 0; _j < counter.length - 2; _j++) {
                counter[_j] = counter[_j + 2];
              }

              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            } else {
              return null;
            }
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var startInfo = null;

      var offset = this._nextSet(this._row);

      var narrowBarWidth = 1;
      var leadingWhitespaceStart = 0;

      while (!startInfo) {
        startInfo = this._findPattern(_2of5_reader_START_PATTERN, offset, false, true);

        if (!startInfo) {
          return null;
        }

        narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / START_PATTERN_LENGTH);
        leadingWhitespaceStart = startInfo.start - narrowBarWidth * 5;

        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }

        offset = startInfo.end;
        startInfo = null;
      }

      return startInfo;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd() {
      // TODO: reverse, followed by some calcs, followed by another reverse? really?
      this._row.reverse();

      var offset = this._nextSet(this._row);

      var endInfo = this._findPattern(STOP_PATTERN, offset, false, true);

      this._row.reverse();

      if (endInfo === null) {
        return null;
      } // reverse numbers


      var tmp = endInfo.start;
      endInfo.start = this._row.length - endInfo.end;
      endInfo.end = this._row.length - tmp;
      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_verifyCounterLength",
    value: function _verifyCounterLength(counters) {
      return counters.length % 10 === 0;
    }
  }, {
    key: "_decodeCode",
    value: function _decodeCode(counter) {
      var epsilon = this.AVG_CODE_ERROR;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };

      for (var code = 0; code < _2of5_reader_CODE_PATTERN.length; code++) {
        var error = this._matchPattern(counter, _2of5_reader_CODE_PATTERN[code]);

        if (error < bestMatch.error) {
          bestMatch.code = code;
          bestMatch.error = error;
        }
      }

      if (bestMatch.error < epsilon) {
        return bestMatch;
      }

      return null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(counters, result, decodedCodes) {
      var pos = 0;
      var counterLength = counters.length;
      var counter = [0, 0, 0, 0, 0];
      var code = null;

      while (pos < counterLength) {
        for (var i = 0; i < 5; i++) {
          counter[i] = counters[pos] * this.barSpaceRatio[0];
          pos += 2;
        }

        code = this._decodeCode(counter);

        if (!code) {
          return null;
        }

        result.push("".concat(code.code));
        decodedCodes.push(code);
      }

      return code;
    }
  }, {
    key: "_decode",
    value: function _decode(row, start) {
      var startInfo = this._findStart();

      if (!startInfo) {
        return null;
      }

      var endInfo = this._findEnd();

      if (!endInfo) {
        return null;
      }

      var counters = this._fillCounters(startInfo.end, endInfo.start, false);

      if (!this._verifyCounterLength(counters)) {
        return null;
      }

      var decodedCodes = [];
      decodedCodes.push(startInfo);
      var result = [];

      var code = this._decodePayload(counters, result, decodedCodes);

      if (!code) {
        return null;
      }

      if (result.length < 5) {
        return null;
      }

      decodedCodes.push(endInfo);
      return {
        code: result.join(''),
        start: startInfo.start,
        end: endInfo.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes,
        format: this.FORMAT
      };
    }
  }]);

  return TwoOfFiveReader;
}(barcode_reader);

/* harmony default export */ var _2of5_reader = (_2of5_reader_TwoOfFiveReader);
// CONCATENATED MODULE: ./src/reader/code_93_reader.ts









function code_93_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_93_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function code_93_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var code_93_reader_ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*';
var code_93_reader_ALPHABET = new Uint16Array(toConsumableArray_default()(code_93_reader_ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
}));
var code_93_reader_CHARACTER_ENCODINGS = new Uint16Array([0x114, 0x148, 0x144, 0x142, 0x128, 0x124, 0x122, 0x150, 0x112, 0x10A, 0x1A8, 0x1A4, 0x1A2, 0x194, 0x192, 0x18A, 0x168, 0x164, 0x162, 0x134, 0x11A, 0x158, 0x14C, 0x146, 0x12C, 0x116, 0x1B4, 0x1B2, 0x1AC, 0x1A6, 0x196, 0x19A, 0x16C, 0x166, 0x136, 0x13A, 0x12E, 0x1D4, 0x1D2, 0x1CA, 0x16E, 0x176, 0x1AE, 0x126, 0x1DA, 0x1D6, 0x132, 0x15E]);
var code_93_reader_ASTERISK = 0x15E;

var code_93_reader_Code93Reader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(Code93Reader, _BarcodeReader);

  var _super = code_93_reader_createSuper(Code93Reader);

  function Code93Reader() {
    var _this;

    classCallCheck_default()(this, Code93Reader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_93');

    return _this;
  }

  createClass_default()(Code93Reader, [{
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < code_93_reader_CHARACTER_ENCODINGS.length; i++) {
        if (code_93_reader_CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(code_93_reader_ALPHABET[i]);
        }
      }

      return null;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(counters) {
      var numCounters = counters.length;
      var sum = counters.reduce(function (prev, next) {
        return prev + next;
      }, 0);
      var pattern = 0;

      for (var i = 0; i < numCounters; i++) {
        var normalized = Math.round(counters[i] * 9 / sum);

        if (normalized < 1 || normalized > 4) {
          return -1;
        }

        if ((i & 1) === 0) {
          for (var j = 0; j < normalized; j++) {
            pattern = pattern << 1 | 1;
          }
        } else {
          pattern <<= normalized;
        }
      }

      return pattern;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);

      var patternStart = offset;
      var counter = new Uint16Array([0, 0, 0, 0, 0, 0]);
      var counterPos = 0;
      var isWhite = false;

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            // find start pattern
            if (this._toPattern(counter) === code_93_reader_ASTERISK) {
              var whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));

              if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                return {
                  start: patternStart,
                  end: i
                };
              }
            }

            patternStart += counter[0] + counter[1];

            for (var j = 0; j < 4; j++) {
              counter[j] = counter[j + 2];
            }

            counter[4] = 0;
            counter[5] = 0;
            counterPos--;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_verifyEnd",
    value: function _verifyEnd(lastStart, nextStart) {
      if (lastStart === nextStart || !this._row[nextStart]) {
        return false;
      }

      return true;
    }
  }, {
    key: "_decodeExtended",
    value: function _decodeExtended(charArray) {
      var length = charArray.length;
      var result = [];

      for (var i = 0; i < length; i++) {
        var _char2 = charArray[i];

        if (_char2 >= 'a' && _char2 <= 'd') {
          if (i > length - 2) {
            return null;
          }

          var nextChar = charArray[++i];
          var nextCharCode = nextChar.charCodeAt(0);
          var decodedChar = void 0;

          switch (_char2) {
            case 'a':
              if (nextChar >= 'A' && nextChar <= 'Z') {
                decodedChar = String.fromCharCode(nextCharCode - 64);
              } else {
                return null;
              }

              break;

            case 'b':
              if (nextChar >= 'A' && nextChar <= 'E') {
                decodedChar = String.fromCharCode(nextCharCode - 38);
              } else if (nextChar >= 'F' && nextChar <= 'J') {
                decodedChar = String.fromCharCode(nextCharCode - 11);
              } else if (nextChar >= 'K' && nextChar <= 'O') {
                decodedChar = String.fromCharCode(nextCharCode + 16);
              } else if (nextChar >= 'P' && nextChar <= 'S') {
                decodedChar = String.fromCharCode(nextCharCode + 43);
              } else if (nextChar >= 'T' && nextChar <= 'Z') {
                decodedChar = String.fromCharCode(127);
              } else {
                return null;
              }

              break;

            case 'c':
              if (nextChar >= 'A' && nextChar <= 'O') {
                decodedChar = String.fromCharCode(nextCharCode - 32);
              } else if (nextChar === 'Z') {
                decodedChar = ':';
              } else {
                return null;
              }

              break;

            case 'd':
              if (nextChar >= 'A' && nextChar <= 'Z') {
                decodedChar = String.fromCharCode(nextCharCode + 32);
              } else {
                return null;
              }

              break;

            default:
              console.warn('* code_93_reader _decodeExtended hit default case, this may be an error', decodedChar);
              return null;
          }

          result.push(decodedChar);
        } else {
          result.push(_char2);
        }
      }

      return result;
    }
  }, {
    key: "_matchCheckChar",
    value: function _matchCheckChar(charArray, index, maxWeight) {
      var arrayToCheck = charArray.slice(0, index);
      var length = arrayToCheck.length;
      var weightedSums = arrayToCheck.reduce(function (sum, _char3, i) {
        var weight = (i * -1 + (length - 1)) % maxWeight + 1;
        var value = code_93_reader_ALPHABET.indexOf(_char3.charCodeAt(0));
        return sum + weight * value;
      }, 0);
      var checkChar = code_93_reader_ALPHABET[weightedSums % 47];
      return checkChar === charArray[index].charCodeAt(0);
    }
  }, {
    key: "_verifyChecksums",
    value: function _verifyChecksums(charArray) {
      return this._matchCheckChar(charArray, charArray.length - 2, 20) && this._matchCheckChar(charArray, charArray.length - 1, 15);
    }
  }, {
    key: "_decode",
    value: function _decode(row, start) {
      start = this._findStart();

      if (!start) {
        return null;
      }

      var counters = new Uint16Array([0, 0, 0, 0, 0, 0]);
      var result = [];

      var nextStart = this._nextSet(this._row, start.end);

      var lastStart;
      var decodedChar;

      do {
        counters = this._toCounters(nextStart, counters);

        var pattern = this._toPattern(counters);

        if (pattern < 0) {
          return null;
        }

        decodedChar = this._patternToChar(pattern);

        if (decodedChar === null) {
          return null;
        }

        result.push(decodedChar);
        lastStart = nextStart;
        nextStart += array_helper["a" /* default */].sum(counters);
        nextStart = this._nextSet(this._row, nextStart);
      } while (decodedChar !== '*');

      result.pop();

      if (!result.length) {
        return null;
      }

      if (!this._verifyEnd(lastStart, nextStart)) {
        return null;
      }

      if (!this._verifyChecksums(result)) {
        return null;
      }

      result = result.slice(0, result.length - 2); // yes, this is an assign inside an if.

      if ((result = this._decodeExtended(result)) === null) {
        return null;
      }

      return {
        code: result.join(''),
        start: start.start,
        end: nextStart,
        startInfo: start,
        decodedCodes: result,
        format: this.FORMAT
      };
    }
  }]);

  return Code93Reader;
}(barcode_reader);

/* harmony default export */ var code_93_reader = (code_93_reader_Code93Reader);
// CONCATENATED MODULE: ./src/reader/code_32_reader.ts









function code_32_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_32_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function code_32_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var code_32_reader_patterns = {
  AEIO: /[AEIO]/g,
  AZ09: /[A-Z0-9]/
};
var code32set = '0123456789BCDFGHJKLMNPQRSTUVWXYZ';

var code_32_reader_Code32Reader = /*#__PURE__*/function (_Code39Reader) {
  inherits_default()(Code32Reader, _Code39Reader);

  var _super = code_32_reader_createSuper(Code32Reader);

  function Code32Reader() {
    var _this;

    classCallCheck_default()(this, Code32Reader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_32_reader');

    return _this;
  }

  createClass_default()(Code32Reader, [{
    key: "_decodeCode32",
    value: function _decodeCode32(code) {
      if (/[^0-9BCDFGHJKLMNPQRSTUVWXYZ]/.test(code)) {
        return null;
      }

      var res = 0;

      for (var i = 0; i < code.length; i++) {
        res = res * 32 + code32set.indexOf(code[i]);
      }

      var code32 = '' + res;

      if (code32.length < 9) {
        code32 = ('000000000' + code32).slice(-9);
      }

      return 'A' + code32;
    } // TODO (this was todo in original repo, no text was there. sorry.)

  }, {
    key: "_checkChecksum",
    value: function _checkChecksum(code) {
      return !!code;
    }
  }, {
    key: "_decode",
    value: function _decode(row, start) {
      var result = get_default()(getPrototypeOf_default()(Code32Reader.prototype), "_decode", this).call(this, row, start);

      if (!result) {
        return null;
      }

      var code = result.code;

      if (!code) {
        return null;
      }

      code = code.replace(code_32_reader_patterns.AEIO, '');

      if (!this._checkChecksum(code)) {
        return null;
      }

      var code32 = this._decodeCode32(code);

      if (!code32) {
        return null;
      }

      result.code = code32;
      return result;
    }
  }]);

  return Code32Reader;
}(code_39_reader);

/* harmony default export */ var code_32_reader = (code_32_reader_Code32Reader);
// CONCATENATED MODULE: ./src/decoder/barcode_decoder.js

















var READERS = {
  code_128_reader: code_128_reader,
  ean_reader: ean_reader,
  ean_5_reader: ean_5_reader,
  ean_2_reader: ean_2_reader,
  ean_8_reader: ean_8_reader,
  code_39_reader: code_39_reader,
  code_39_vin_reader: code_39_vin_reader,
  codabar_reader: codabar_reader,
  upc_reader: upc_reader,
  upc_e_reader: upc_e_reader,
  i2of5_reader: i2of5_reader,
  '2of5_reader': _2of5_reader,
  code_93_reader: code_93_reader,
  code_32_reader: code_32_reader
};
/* harmony default export */ var barcode_decoder = ({
  registerReader: function registerReader(name, reader) {
    READERS[name] = reader;
  },
  create: function create(config, inputImageWrapper) {
    var _canvas = {
      ctx: {
        frequency: null,
        pattern: null,
        overlay: null
      },
      dom: {
        frequency: null,
        pattern: null,
        overlay: null
      }
    };
    var _barcodeReaders = [];
    initCanvas();
    initReaders();
    initConfig();

    function initCanvas() {
      if (  typeof document !== 'undefined') {
        var $debug = document.querySelector('#debug.detection');
        _canvas.dom.frequency = document.querySelector('canvas.frequency');

        if (!_canvas.dom.frequency) {
          _canvas.dom.frequency = document.createElement('canvas');
          _canvas.dom.frequency.className = 'frequency';

          if ($debug) {
            $debug.appendChild(_canvas.dom.frequency);
          }
        }

        _canvas.ctx.frequency = _canvas.dom.frequency.getContext('2d');
        _canvas.dom.pattern = document.querySelector('canvas.patternBuffer');

        if (!_canvas.dom.pattern) {
          _canvas.dom.pattern = document.createElement('canvas');
          _canvas.dom.pattern.className = 'patternBuffer';

          if ($debug) {
            $debug.appendChild(_canvas.dom.pattern);
          }
        }

        _canvas.ctx.pattern = _canvas.dom.pattern.getContext('2d');
        _canvas.dom.overlay = document.querySelector('canvas.drawingBuffer');

        if (_canvas.dom.overlay) {
          _canvas.ctx.overlay = _canvas.dom.overlay.getContext('2d');
        }
      }
    }

    function initReaders() {
      config.readers.forEach(function (readerConfig) {
        var reader;
        var configuration = {};
        var supplements = [];

        if (typeof_default()(readerConfig) === 'object') {
          reader = readerConfig.format;
          configuration = readerConfig.config;
        } else if (typeof readerConfig === 'string') {
          reader = readerConfig;
        }

        if (configuration.supplements) {
          supplements = configuration.supplements.map(function (supplement) {
            return new READERS[supplement]();
          });
        }

        try {
          var readerObj = new READERS[reader](configuration, supplements);

          _barcodeReaders.push(readerObj);
        } catch (err) {
          console.error('* Error constructing reader ', reader, err);
          throw err;
        }
      });
    }

    function initConfig() {
      if (  typeof document !== 'undefined') {
        var i;
        var vis = [{
          node: _canvas.dom.frequency,
          prop: config.debug.showFrequency
        }, {
          node: _canvas.dom.pattern,
          prop: config.debug.showPattern
        }];

        for (i = 0; i < vis.length; i++) {
          if (vis[i].prop === true) {
            vis[i].node.style.display = 'block';
          } else {
            vis[i].node.style.display = 'none';
          }
        }
      }
    }
    /**
     * extend the line on both ends
     * @param {Array} line
     * @param {Number} angle
     */


    function getExtendedLine(line, angle, ext) {
      function extendLine(amount) {
        var extension = {
          y: amount * Math.sin(angle),
          x: amount * Math.cos(angle)
        };
        /* eslint-disable no-param-reassign */

        line[0].y -= extension.y;
        line[0].x -= extension.x;
        line[1].y += extension.y;
        line[1].x += extension.x;
        /* eslint-enable no-param-reassign */
      } // check if inside image


      extendLine(ext);

      while (ext > 1 && (!inputImageWrapper.inImageWithBorder(line[0]) || !inputImageWrapper.inImageWithBorder(line[1]))) {
        // eslint-disable-next-line no-param-reassign
        ext -= Math.ceil(ext / 2);
        extendLine(-ext);
      }

      return line;
    }

    function getLine(box) {
      return [{
        x: (box[1][0] - box[0][0]) / 2 + box[0][0],
        y: (box[1][1] - box[0][1]) / 2 + box[0][1]
      }, {
        x: (box[3][0] - box[2][0]) / 2 + box[2][0],
        y: (box[3][1] - box[2][1]) / 2 + box[2][1]
      }];
    }

    function tryDecode(line) {
      var result = null;
      var i;
      var barcodeLine = bresenham.getBarcodeLine(inputImageWrapper, line[0], line[1]);

      if (  config.debug.showFrequency) {
        image_debug["a" /* default */].drawPath(line, {
          x: 'x',
          y: 'y'
        }, _canvas.ctx.overlay, {
          color: 'red',
          lineWidth: 3
        });
        bresenham.debug.printFrequency(barcodeLine.line, _canvas.dom.frequency);
      }

      bresenham.toBinaryLine(barcodeLine);

      if (  config.debug.showPattern) {
        bresenham.debug.printPattern(barcodeLine.line, _canvas.dom.pattern);
      }

      for (i = 0; i < _barcodeReaders.length && result === null; i++) {
        result = _barcodeReaders[i].decodePattern(barcodeLine.line);
      }

      if (result === null) {
        return null;
      }

      return {
        codeResult: result,
        barcodeLine: barcodeLine
      };
    }
    /**
     * This method slices the given area apart and tries to detect a barcode-pattern
     * for each slice. It returns the decoded barcode, or null if nothing was found
     * @param {Array} box
     * @param {Array} line
     * @param {Number} lineAngle
     */


    function tryDecodeBruteForce(box, line, lineAngle) {
      var sideLength = Math.sqrt(Math.pow(box[1][0] - box[0][0], 2) + Math.pow(box[1][1] - box[0][1], 2));
      var i;
      var slices = 16;
      var result = null;
      var dir;
      var extension;
      var xdir = Math.sin(lineAngle);
      var ydir = Math.cos(lineAngle);

      for (i = 1; i < slices && result === null; i++) {
        // move line perpendicular to angle
        // eslint-disable-next-line no-mixed-operators
        dir = sideLength / slices * i * (i % 2 === 0 ? -1 : 1);
        extension = {
          y: dir * xdir,
          x: dir * ydir
        };
        /* eslint-disable no-param-reassign */

        line[0].y += extension.x;
        line[0].x -= extension.y;
        line[1].y += extension.x;
        line[1].x -= extension.y;
        /* eslint-enable no-param-reassign */

        result = tryDecode(line);
      }

      return result;
    }

    function getLineLength(line) {
      return Math.sqrt(Math.pow(Math.abs(line[1].y - line[0].y), 2) + Math.pow(Math.abs(line[1].x - line[0].x), 2));
    }

    function _decodeFromImage(imageWrapper) {
      var result = null;

      for (var i = 0; i < _barcodeReaders.length && result === null; i++) {
        result = _barcodeReaders[i].decodeImage ? _barcodeReaders[i].decodeImage(imageWrapper) : null;
      }

      return result;
    }
    /**
     * With the help of the configured readers (Code128 or EAN) this function tries to detect a
     * valid barcode pattern within the given area.
     * @param {Object} box The area to search in
     * @returns {Object} the result {codeResult, line, angle, pattern, threshold}
     */


    function _decodeFromBoundingBox(box) {
      var line;
      var ctx = _canvas.ctx.overlay;
      var result;

      {
        if (config.debug.drawBoundingBox && ctx) {
          image_debug["a" /* default */].drawPath(box, {
            x: 0,
            y: 1
          }, ctx, {
            color: 'blue',
            lineWidth: 2
          });
        }
      }

      line = getLine(box);
      var lineLength = getLineLength(line);
      var lineAngle = Math.atan2(line[1].y - line[0].y, line[1].x - line[0].x);
      line = getExtendedLine(line, lineAngle, Math.floor(lineLength * 0.1));

      if (line === null) {
        return null;
      }

      result = tryDecode(line);

      if (result === null) {
        result = tryDecodeBruteForce(box, line, lineAngle);
      }

      if (result === null) {
        return null;
      }

      if (  result && config.debug.drawScanline && ctx) {
        image_debug["a" /* default */].drawPath(line, {
          x: 'x',
          y: 'y'
        }, ctx, {
          color: 'red',
          lineWidth: 3
        });
      }

      return {
        codeResult: result.codeResult,
        line: line,
        angle: lineAngle,
        pattern: result.barcodeLine.line,
        threshold: result.barcodeLine.threshold
      };
    }

    return {
      decodeFromBoundingBox: function decodeFromBoundingBox(box) {
        return _decodeFromBoundingBox(box);
      },
      decodeFromBoundingBoxes: function decodeFromBoundingBoxes(boxes) {
        var i;
        var result;
        var barcodes = [];
        var multiple = config.multiple;

        for (i = 0; i < boxes.length; i++) {
          var box = boxes[i];
          result = _decodeFromBoundingBox(box) || {};
          result.box = box;

          if (multiple) {
            barcodes.push(result);
          } else if (result.codeResult) {
            return result;
          }
        }

        if (multiple) {
          return {
            barcodes: barcodes
          };
        }
      },
      decodeFromImage: function decodeFromImage(inputImageWrapper) {
        var result = _decodeFromImage(inputImageWrapper);

        return result;
      },
      registerReader: function registerReader(name, reader) {
        if (READERS[name]) {
          throw new Error('cannot register existing reader', name);
        }

        READERS[name] = reader;
      },
      setReaders: function setReaders(readers) {
        // eslint-disable-next-line no-param-reassign
        config.readers = readers;
        _barcodeReaders.length = 0;
        initReaders();
      }
    };
  }
});
// CONCATENATED MODULE: ./src/common/events.ts
/* harmony default export */ var events = ((function EventInterface() {
  var events = {};

  function getEvent(eventName) {
    if (!events[eventName]) {
      events[eventName] = {
        subscribers: []
      };
    }

    return events[eventName];
  }

  function clearEvents() {
    events = {};
  }

  function publishSubscription(subscription, data) {
    if (subscription.async) {
      setTimeout(function () {
        subscription.callback(data);
      }, 4);
    } else {
      subscription.callback(data);
    }
  }

  function _subscribe(event, callback, async) {
    var subscription;

    if (typeof callback === 'function') {
      subscription = {
        callback: callback,
        async: async
      };
    } else {
      subscription = callback;

      if (!subscription.callback) {
        throw new Error('Callback was not specified on options');
      }
    }

    getEvent(event).subscribers.push(subscription);
  }

  return {
    subscribe: function subscribe(event, callback, async) {
      return _subscribe(event, callback, async);
    },
    publish: function publish(eventName, data) {
      var event = getEvent(eventName);
      var subscribers = event.subscribers; // Publish one-time subscriptions

      subscribers.filter(function (subscriber) {
        return !!subscriber.once;
      }).forEach(function (subscriber) {
        publishSubscription(subscriber, data);
      }); // remove them from the subscriber

      event.subscribers = subscribers.filter(function (subscriber) {
        return !subscriber.once;
      }); // publish the rest

      event.subscribers.forEach(function (subscriber) {
        publishSubscription(subscriber, data);
      });
    },
    once: function once(event, callback) {
      var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _subscribe(event, {
        callback: callback,
        async: async,
        once: true
      });
    },
    unsubscribe: function unsubscribe(eventName, callback) {
      if (eventName) {
        var _event = getEvent(eventName);

        if (_event && callback) {
          _event.subscribers = _event.subscribers.filter(function (subscriber) {
            return subscriber.callback !== callback;
          });
        } else {
          _event.subscribers = [];
        }
      } else {
        clearEvents();
      }
    }
  };
})());
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(16);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(33);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(84);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// CONCATENATED MODULE: ./src/common/mediaDevices.ts
var ERROR_DESC = 'This may mean that the user has declined camera access, or the browser does not support media APIs. If you are running in iOS, you must use Safari.';
function enumerateDevices() {
  try {
    return navigator.mediaDevices.enumerateDevices();
  } catch (err) {
    var error = new Error("enumerateDevices is not defined. ".concat(ERROR_DESC));
    error.code = -1;
    return Promise.reject(error);
  }
}
function getUserMedia(constraints) {
  try {
    return navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {
    var error = new Error("getUserMedia is not defined. ".concat(ERROR_DESC));
    error.code = -1;
    return Promise.reject(error);
  }
}
// CONCATENATED MODULE: ./src/input/camera_access.ts




var streamRef;

function waitForVideo(video) {
  return new Promise(function (resolve, reject) {
    var attempts = 10;

    function checkVideo() {
      if (attempts > 0) {
        if (video.videoWidth > 10 && video.videoHeight > 10) {
          {
            console.log("* dev: checkVideo found ".concat(video.videoWidth, "px x ").concat(video.videoHeight, "px"));
          }

          resolve();
        } else {
          window.setTimeout(checkVideo, 500);
        }
      } else {
        reject(new Error('Unable to play video stream. Is webcam working?'));
      }

      attempts--;
    }

    checkVideo();
  });
}
/**
 * Tries to attach the camera-stream to a given video-element
 * and calls the callback function when the content is ready
 * @param {Object} constraints
 * @param {Object} video
 */


function initCamera(_x, _x2) {
  return _initCamera.apply(this, arguments);
}

function _initCamera() {
  _initCamera = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(video, constraints) {
    var stream;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getUserMedia(constraints);

          case 2:
            stream = _context2.sent;
            streamRef = stream;
            video.setAttribute('autoplay', 'true');
            video.setAttribute('muted', 'true');
            video.setAttribute('playsinline', 'true'); // not listed on MDN...
            // eslint-disable-next-line no-param-reassign

            video.srcObject = stream;
            video.addEventListener('loadedmetadata', function () {
              video.play();
            });
            return _context2.abrupt("return", waitForVideo(video));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initCamera.apply(this, arguments);
}

function deprecatedConstraints(videoConstraints) {
  var normalized = pick_default()(videoConstraints, ['width', 'height', 'facingMode', 'aspectRatio', 'deviceId']);

  if (typeof videoConstraints.minAspectRatio !== 'undefined' && videoConstraints.minAspectRatio > 0) {
    normalized.aspectRatio = videoConstraints.minAspectRatio;
    // console.log('WARNING: Constraint \'minAspectRatio\' is deprecated; Use \'aspectRatio\' instead');
  }

  if (typeof videoConstraints.facing !== 'undefined') {
    normalized.facingMode = videoConstraints.facing;
    // console.log('WARNING: Constraint \'facing\' is deprecated. Use \'facingMode\' instead\'');
  }

  return normalized;
} // TODO: #192 I don't think there's any good reason pickConstraints should return a Promise,
// I think it was just that way so it could be chained to other functions that did return a Promise.
// That's not necessary with async functions being a thing, so that should be fixed.


function pickConstraints() {
  var videoConstraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var video = deprecatedConstraints(videoConstraints);

  if (video && video.deviceId && video.facingMode) {
    delete video.facingMode;
  }

  return Promise.resolve({
    audio: false,
    video: video
  });
}

function enumerateVideoDevices() {
  return _enumerateVideoDevices.apply(this, arguments);
}

function _enumerateVideoDevices() {
  _enumerateVideoDevices = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
    var devices;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return enumerateDevices();

          case 2:
            devices = _context3.sent;
            return _context3.abrupt("return", devices.filter(function (device) {
              return device.kind === 'videoinput';
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _enumerateVideoDevices.apply(this, arguments);
}

function getActiveTrack() {
  if (!streamRef) {
    return null;
  }

  var tracks = streamRef.getVideoTracks();
  return tracks && (tracks === null || tracks === void 0 ? void 0 : tracks.length) ? tracks[0] : null;
}
/**
 * Used for accessing information about the active stream track and available video devices.
 */


var QuaggaJSCameraAccess = {
  request: function request(video, videoConstraints) {
    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var newConstraints;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return pickConstraints(videoConstraints);

            case 2:
              newConstraints = _context.sent;
              return _context.abrupt("return", initCamera(video, newConstraints));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  release: function release() {
    // TODO: i wonder if telling the Video element to pause() before calling MediaStreamTrack.stop() would alleviate some of the issues with the camera appearing to stay open on Android even after stopping.
    var tracks = streamRef && streamRef.getVideoTracks();

    if (tracks && tracks.length) {
      tracks[0].stop();
    }

    streamRef = null;
  },
  enumerateVideoDevices: enumerateVideoDevices,
  getActiveStreamLabel: function getActiveStreamLabel() {
    var track = getActiveTrack();
    return track ? track.label : '';
  },
  getActiveTrack: getActiveTrack
};
/* harmony default export */ var camera_access = (QuaggaJSCameraAccess);
// CONCATENATED MODULE: ./src/analytics/result_collector.ts


function contains(codeResult, list) {
  return list && list.some(function (item) {
    var keys = Object.keys(item);
    return keys.every(function (key) {
      return item[key] === codeResult[key];
    });
  });
}

function passesFilter(codeResult, filter) {
  return typeof filter === 'function' ? filter(codeResult) : true;
}

/* harmony default export */ var result_collector = ({
  create: function create(config) {
    var _config$capacity;

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var results = [];
    var capacity = (_config$capacity = config.capacity) !== null && _config$capacity !== void 0 ? _config$capacity : 20;
    var capture = config.capture === true;

    function matchesConstraints(codeResult) {
      return !!capacity && codeResult && !contains(codeResult, config.blacklist) && passesFilter(codeResult, config.filter);
    }

    return {
      addResult: function addResult(data, imageSize, codeResult) {
        var result = {}; // this is 'any' to avoid having to construct a whole QuaggaJSCodeResult :|

        if (matchesConstraints(codeResult)) {
          capacity--;
          result.codeResult = codeResult;

          if (capture) {
            canvas.width = imageSize.x;
            canvas.height = imageSize.y;
            image_debug["a" /* default */].drawImage(data, imageSize, ctx);
            result.frame = canvas.toDataURL();
          }

          results.push(result);
        }
      },
      getResults: function getResults() {
        return results;
      }
    };
  }
});
// CONCATENATED MODULE: ./src/config/config.dev.ts
var DevConfig = {
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    constraints: {
      width: 640,
      height: 480,
      // aspectRatio: 640/480, // optional
      facingMode: 'environment' // or user
      // deviceId: "38745983457387598375983759834"

    },
    area: {
      top: '0%',
      right: '0%',
      left: '0%',
      bottom: '0%'
    },
    singleChannel: false // true: only the red color-channel is read

  },
  locate: true,
  numOfWorkers: 0,
  decoder: {
    readers: ['code_128_reader'],
    debug: {
      drawBoundingBox: false,
      showFrequency: false,
      drawScanline: false,
      showPattern: false
    }
  },
  locator: {
    halfSample: true,
    patchSize: 'medium',
    // x-small, small, medium, large, x-large
    debug: {
      showCanvas: false,
      showPatches: false,
      showFoundPatches: false,
      showSkeleton: false,
      showLabels: false,
      showPatchLabels: false,
      showRemainingPatchLabels: false,
      boxFromPatches: {
        showTransformed: false,
        showTransformedBox: false,
        showBB: false
      }
    }
  }
};
/* harmony default export */ var config_dev = (DevConfig);
// CONCATENATED MODULE: ./src/config/config.ts


 // @ts-ignore // TODO: this produces a bizarre typescript error
// eslint-disable-next-line no-nested-ternary

var QuaggaConfig =   config_dev ;
/* harmony default export */ var config_config = (QuaggaConfig);
// EXTERNAL MODULE: ./node_modules/gl-vec2/index.js
var gl_vec2 = __webpack_require__(7);

// CONCATENATED MODULE: ./src/QuaggaContext.ts


var QuaggaContext_QuaggaContext = function QuaggaContext() {
  classCallCheck_default()(this, QuaggaContext);

  defineProperty_default()(this, "config", void 0);

  defineProperty_default()(this, "inputStream", void 0);

  defineProperty_default()(this, "framegrabber", void 0);

  defineProperty_default()(this, "inputImageWrapper", void 0);

  defineProperty_default()(this, "stopped", false);

  defineProperty_default()(this, "boxSize", void 0);

  defineProperty_default()(this, "resultCollector", void 0);

  defineProperty_default()(this, "decoder", void 0);

  defineProperty_default()(this, "workerPool", []);

  defineProperty_default()(this, "onUIThread", true);

  defineProperty_default()(this, "canvasContainer", new QuaggaContext_CanvasContainer());
};
var QuaggaContext_CanvasInfo = function CanvasInfo() {
  classCallCheck_default()(this, CanvasInfo);

  defineProperty_default()(this, "image", void 0);

  defineProperty_default()(this, "overlay", void 0);
};
var QuaggaContext_CanvasContainer = function CanvasContainer() {
  classCallCheck_default()(this, CanvasContainer);

  defineProperty_default()(this, "ctx", void 0);

  defineProperty_default()(this, "dom", void 0);

  this.ctx = new QuaggaContext_CanvasInfo();
  this.dom = new QuaggaContext_CanvasInfo();
};
// EXTERNAL MODULE: ./src/locator/barcode_locator.js
var barcode_locator = __webpack_require__(22);

// CONCATENATED MODULE: ./src/quagga/initBuffers.ts



// TODO: need typescript def for BarcodeLocator
function initBuffers_initBuffers(inputStream, imageWrapper, locator) {
  var inputImageWrapper = imageWrapper || new image_wrapper["a" /* default */]({
    x: inputStream.getWidth(),
    y: inputStream.getHeight(),
    type: 'XYSize'
  });

  var boxSize = [Object(gl_vec2["clone"])([0, 0]), Object(gl_vec2["clone"])([0, inputImageWrapper.size.y]), Object(gl_vec2["clone"])([inputImageWrapper.size.x, inputImageWrapper.size.y]), Object(gl_vec2["clone"])([inputImageWrapper.size.x, 0])];
  barcode_locator["a" /* default */].init(inputImageWrapper, locator);
  return {
    inputImageWrapper: inputImageWrapper,
    boxSize: boxSize
  };
}
// CONCATENATED MODULE: ./src/quagga/getViewPort.ts
function getViewPort_getViewPort(target) {
  if (typeof document === 'undefined') {
    return null;
  } // Check if target is already a DOM element


  if (target instanceof HTMLElement && target.nodeName && target.nodeType === 1) {
    return target;
  } // Use '#interactive.viewport' as a fallback selector (backwards compatibility)


  var selector = typeof target === 'string' ? target : '#interactive.viewport';
  return document.querySelector(selector);
}
// CONCATENATED MODULE: ./src/quagga/initCanvas.ts


function findOrCreateCanvas(selector, className) {
  var canvas = document.querySelector(selector);

  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.className = className;
  }

  return canvas;
}

function getCanvasAndContext(selector, className) {
  var canvas = findOrCreateCanvas(selector, className);
  var context = canvas.getContext('2d');
  return {
    canvas: canvas,
    context: context
  };
}

function initCanvases(canvasSize) {
  if (typeof document !== 'undefined') {
    var image = getCanvasAndContext('canvas.imgBuffer', 'imgBuffer');
    var overlay = getCanvasAndContext('canvas.drawingBuffer', 'drawingBuffer');
    image.canvas.width = overlay.canvas.width = canvasSize.x;
    image.canvas.height = overlay.canvas.height = canvasSize.y;
    return {
      dom: {
        image: image.canvas,
        overlay: overlay.canvas
      },
      ctx: {
        image: image.context,
        overlay: overlay.context
      }
    };
  }

  return null;
}

function initCanvas_initCanvas(context) {
  var _context$config, _context$config$input, _context$config2, _context$config2$inpu;

  var viewport = getViewPort_getViewPort(context === null || context === void 0 ? void 0 : (_context$config = context.config) === null || _context$config === void 0 ? void 0 : (_context$config$input = _context$config.inputStream) === null || _context$config$input === void 0 ? void 0 : _context$config$input.target);
  var type = context === null || context === void 0 ? void 0 : (_context$config2 = context.config) === null || _context$config2 === void 0 ? void 0 : (_context$config2$inpu = _context$config2.inputStream) === null || _context$config2$inpu === void 0 ? void 0 : _context$config2$inpu.type;
  if (!type) return null;
  var container = initCanvases(context.inputStream.getCanvasSize());
  if (!container) return {
    dom: {
      image: null,
      overlay: null
    },
    ctx: {
      image: null,
      overlay: null
    }
  };
  var dom = container.dom;

  if (typeof document !== 'undefined') {
    if (viewport) {
      if (type === 'ImageStream' && !viewport.contains(dom.image)) {
        viewport.appendChild(dom.image);
      }

      if (!viewport.contains(dom.overlay)) {
        viewport.appendChild(dom.overlay);
      }
    }
  }

  return container;
}
// CONCATENATED MODULE: ./src/input/exif_helper.js
// NOTE: (SOME OF) THIS IS BROWSER ONLY CODE.  Node does not have 'atob' built in, nor XMLHttpRequest.
// How exactly is this set of functions used in Quagga? Do we need the browser specific code? Do we
// need to port any part of this that doesn't work in Node to node?
// Tags scraped from https://github.com/exif-js/exif-js
var ExifTags = {
  0x0112: 'orientation'
};
var AvailableTags = Object.keys(ExifTags).map(function (key) {
  return ExifTags[key];
});
function findTagsInObjectURL(src) {
  var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AvailableTags;

  if (/^blob:/i.test(src)) {
    return objectURLToBlob(src).then(readToBuffer).then(function (buffer) {
      return findTagsInBuffer(buffer, tags);
    });
  }

  return Promise.resolve(null);
}

function readToBuffer(blob) {
  return new Promise(function (resolve) {
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      return resolve(e.target.result);
    };

    fileReader.readAsArrayBuffer(blob);
  });
}

function objectURLToBlob(url) {
  return new Promise(function (resolve, reject) {
    var http = new XMLHttpRequest();
    http.open('GET', url, true);
    http.responseType = 'blob';

    http.onreadystatechange = function () {
      if (http.readyState === XMLHttpRequest.DONE && (http.status === 200 || http.status === 0)) {
        resolve(this.response);
      }
    };

    http.onerror = reject;
    http.send();
  });
}

function findTagsInBuffer(file) {
  var selectedTags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AvailableTags;
  var dataView = new DataView(file);
  var length = file.byteLength;
  var exifTags = selectedTags.reduce(function (result, selectedTag) {
    var exifTag = Object.keys(ExifTags).filter(function (tag) {
      return ExifTags[tag] === selectedTag;
    })[0];

    if (exifTag) {
      result[exifTag] = selectedTag;
    }

    return result;
  }, {});
  var offset = 2;
  var marker;

  if (dataView.getUint8(0) !== 0xFF || dataView.getUint8(1) !== 0xD8) {
    return false;
  }

  while (offset < length) {
    if (dataView.getUint8(offset) !== 0xFF) {
      return false;
    }

    marker = dataView.getUint8(offset + 1);

    if (marker === 0xE1) {
      return readEXIFData(dataView, offset + 4, exifTags);
    }

    offset += 2 + dataView.getUint16(offset + 2);
  }

  return false;
}

function readEXIFData(file, start, exifTags) {
  if (getStringFromBuffer(file, start, 4) !== 'Exif') {
    return false;
  }

  var tiffOffset = start + 6;
  var bigEnd;

  if (file.getUint16(tiffOffset) === 0x4949) {
    bigEnd = false;
  } else if (file.getUint16(tiffOffset) === 0x4D4D) {
    bigEnd = true;
  } else {
    return false;
  }

  if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
    return false;
  }

  var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

  if (firstIFDOffset < 0x00000008) {
    return false;
  }

  var tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, exifTags, bigEnd);
  return tags;
}

function readTags(file, tiffStart, dirStart, strings, bigEnd) {
  var entries = file.getUint16(dirStart, !bigEnd);
  var tags = {};

  for (var i = 0; i < entries; i++) {
    var entryOffset = dirStart + i * 12 + 2;
    var tag = strings[file.getUint16(entryOffset, !bigEnd)];

    if (tag) {
      tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
    }
  }

  return tags;
}

function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
  var type = file.getUint16(entryOffset + 2, !bigEnd);
  var numValues = file.getUint32(entryOffset + 4, !bigEnd);

  switch (type) {
    case 3:
      if (numValues === 1) {
        return file.getUint16(entryOffset + 8, !bigEnd);
      }

  }

  return null;
}

function getStringFromBuffer(buffer, start, length) {
  var outstr = '';

  for (var n = start; n < start + length; n++) {
    outstr += String.fromCharCode(buffer.getUint8(n));
  }

  return outstr;
}
// CONCATENATED MODULE: ./src/input/image_loader.js

var ImageLoader = {};

ImageLoader.load = function (directory, callback, offset, size, sequence) {
  var htmlImagesSrcArray = new Array(size);
  var htmlImagesArray = new Array(htmlImagesSrcArray.length);
  var i;
  var img;
  var num;

  if (sequence === false) {
    htmlImagesSrcArray[0] = directory;
  } else {
    for (i = 0; i < htmlImagesSrcArray.length; i++) {
      num = offset + i;
      htmlImagesSrcArray[i] = "".concat(directory, "image-").concat("00".concat(num).slice(-3), ".jpg");
    }
  }

  htmlImagesArray.notLoaded = [];

  htmlImagesArray.addImage = function (image) {
    htmlImagesArray.notLoaded.push(image);
  };

  htmlImagesArray.loaded = function (loadedImg) {
    var notloadedImgs = htmlImagesArray.notLoaded;

    for (var x = 0; x < notloadedImgs.length; x++) {
      if (notloadedImgs[x] === loadedImg) {
        notloadedImgs.splice(x, 1);

        for (var y = 0; y < htmlImagesSrcArray.length; y++) {
          var imgName = htmlImagesSrcArray[y].substr(htmlImagesSrcArray[y].lastIndexOf('/'));

          if (loadedImg.src.lastIndexOf(imgName) !== -1) {
            htmlImagesArray[y] = {
              img: loadedImg
            };
            break;
          }
        }

        break;
      }
    }

    if (notloadedImgs.length === 0) {

      if (sequence === false) {
        findTagsInObjectURL(directory, ['orientation']).then(function (tags) {
          htmlImagesArray[0].tags = tags;
          callback(htmlImagesArray);
        })["catch"](function (e) {
          console.log(e);
          callback(htmlImagesArray);
        });
      } else {
        callback(htmlImagesArray);
      }
    }
  };

  for (i = 0; i < htmlImagesSrcArray.length; i++) {
    img = new Image();
    htmlImagesArray.addImage(img);
    addOnloadHandler(img, htmlImagesArray);
    img.src = htmlImagesSrcArray[i];
  }
};

function addOnloadHandler(img, htmlImagesArray) {
  img.onload = function () {
    htmlImagesArray.loaded(this);
  };
}

/* harmony default export */ var image_loader = (ImageLoader);
// CONCATENATED MODULE: ./src/input/input_stream/input_stream_browser.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

var inputStreamFactory = {
  createVideoStream: function createVideoStream(video) {
    var _config = null;
    var _eventNames = ['canrecord', 'ended'];
    var _eventHandlers = {};

    var _calculatedWidth;

    var _calculatedHeight;

    var _topRight = {
      x: 0,
      y: 0,
      type: 'Point'
    };
    var _canvasSize = {
      x: 0,
      y: 0,
      type: 'XYSize'
    };

    function initSize() {
      var _config2, _config3;

      var width = video.videoWidth;
      var height = video.videoHeight; // eslint-disable-next-line no-nested-ternary

      _calculatedWidth = ((_config2 = _config) === null || _config2 === void 0 ? void 0 : _config2.size) ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width; // eslint-disable-next-line no-nested-ternary

      _calculatedHeight = ((_config3 = _config) === null || _config3 === void 0 ? void 0 : _config3.size) ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
      _canvasSize.x = _calculatedWidth;
      _canvasSize.y = _calculatedHeight;
    }

    var inputStream = {
      getRealWidth: function getRealWidth() {
        return video.videoWidth;
      },
      getRealHeight: function getRealHeight() {
        return video.videoHeight;
      },
      getWidth: function getWidth() {
        return _calculatedWidth;
      },
      getHeight: function getHeight() {
        return _calculatedHeight;
      },
      setWidth: function setWidth(width) {
        _calculatedWidth = width;
      },
      setHeight: function setHeight(height) {
        _calculatedHeight = height;
      },
      setInputStream: function setInputStream(config) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        _config = config; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

        this.setAttribute('src', typeof config.src !== 'undefined' ? config.src : '');
      },
      ended: function ended() {
        return video.ended;
      },
      getConfig: function getConfig() {
        return _config;
      },
      setAttribute: function setAttribute(name, value) {
        if (video) {
          video.setAttribute(name, value);
        }
      },
      pause: function pause() {
        video.pause();
      },
      play: function play() {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        video.play();
      },
      setCurrentTime: function setCurrentTime(time) {
        var _config4;

        if (((_config4 = _config) === null || _config4 === void 0 ? void 0 : _config4.type) !== 'LiveStream') {
          this.setAttribute('currentTime', time.toString());
        }
      },
      addEventListener: function addEventListener(event, f, bool) {
        if (_eventNames.indexOf(event) !== -1) {
          if (!_eventHandlers[event]) {
            _eventHandlers[event] = [];
          }

          _eventHandlers[event].push(f);
        } else {
          video.addEventListener(event, f, bool);
        }
      },
      clearEventHandlers: function clearEventHandlers() {
        _eventNames.forEach(function (eventName) {
          var handlers = _eventHandlers[eventName];

          if (handlers && handlers.length > 0) {
            handlers.forEach(function (handler) {
              video.removeEventListener(eventName, handler);
            });
          }
        });
      },
      trigger: function trigger(eventName, args) {
        var j; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

        var handlers = _eventHandlers[eventName];

        if (eventName === 'canrecord') {
          initSize();
        }

        if (handlers && handlers.length > 0) {
          for (j = 0; j < handlers.length; j++) {
            handlers[j].apply(inputStream, args);
          }
        }
      },
      setTopRight: function setTopRight(topRight) {
        _topRight.x = topRight.x;
        _topRight.y = topRight.y;
      },
      getTopRight: function getTopRight() {
        return _topRight;
      },
      setCanvasSize: function setCanvasSize(size) {
        _canvasSize.x = size.x;
        _canvasSize.y = size.y;
      },
      getCanvasSize: function getCanvasSize() {
        return _canvasSize;
      },
      getFrame: function getFrame() {
        return video;
      }
    };
    return inputStream;
  },
  createLiveStream: function createLiveStream(video) {
    if (video) {
      video.setAttribute('autoplay', 'true');
    }

    var that = inputStreamFactory.createVideoStream(video);

    that.ended = function ended() {
      return false;
    };

    return that;
  },
  createImageStream: function createImageStream() {
    var _config = null;
    var width = 0;
    var height = 0;
    var frameIdx = 0;
    var paused = true;
    var loaded = false;
    var imgArray = null;
    var size = 0;
    var offset = 1;
    var baseUrl = null;
    var _ended = false;
    var calculatedWidth;
    var calculatedHeight;
    var _eventNames = ['canrecord', 'ended'];
    var _eventHandlers = {};
    var _topRight = {
      x: 0,
      y: 0,
      type: 'Point'
    };
    var _canvasSize = {
      x: 0,
      y: 0,
      type: 'XYSize'
    };

    function loadImages() {
      var _config7;

      loaded = false;
      image_loader.load(baseUrl, function (imgs) {
        var _config5, _config6;

        imgArray = imgs; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

        if (imgs[0].tags && imgs[0].tags.orientation) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          switch (imgs[0].tags.orientation) {
            case 6:
            case 8:
              width = imgs[0].img.height;
              height = imgs[0].img.width;
              break;

            default:
              width = imgs[0].img.width;
              height = imgs[0].img.height;
          }
        } else {
          width = imgs[0].img.width;
          height = imgs[0].img.height;
        } // eslint-disable-next-line no-nested-ternary


        calculatedWidth = ((_config5 = _config) === null || _config5 === void 0 ? void 0 : _config5.size) ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width; // eslint-disable-next-line no-nested-ternary

        calculatedHeight = ((_config6 = _config) === null || _config6 === void 0 ? void 0 : _config6.size) ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
        _canvasSize.x = calculatedWidth;
        _canvasSize.y = calculatedHeight;
        loaded = true;
        frameIdx = 0;
        setTimeout(function () {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          publishEvent('canrecord', []);
        }, 0);
      }, offset, size, (_config7 = _config) === null || _config7 === void 0 ? void 0 : _config7.sequence);
    }

    function publishEvent(eventName, args) {
      var j;
      var handlers = _eventHandlers[eventName];

      if (handlers && handlers.length > 0) {
        for (j = 0; j < handlers.length; j++) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          handlers[j].apply(inputStream, args); // TODO: typescript complains that any[] is not valid for a second arg for apply?!
        }
      }
    } // TODO: any code shared with the first InputStream above should be shared not copied
    // TODO: publishEvent needs access to inputStream, but inputStream needs access to publishEvent
    // TODO: This is why it's a 'var', so it hoists back.  This is ugly, and should be changed.
    // eslint-disable-next-line no-var,vars-on-top


    var inputStream = {
      trigger: publishEvent,
      getWidth: function getWidth() {
        return calculatedWidth;
      },
      getHeight: function getHeight() {
        return calculatedHeight;
      },
      setWidth: function setWidth(newWidth) {
        calculatedWidth = newWidth;
      },
      setHeight: function setHeight(newHeight) {
        calculatedHeight = newHeight;
      },
      getRealWidth: function getRealWidth() {
        return width;
      },
      getRealHeight: function getRealHeight() {
        return height;
      },
      setInputStream: function setInputStream(stream) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        _config = stream; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

        if (stream.sequence === false) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
          baseUrl = stream.src;
          size = 1;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
          baseUrl = stream.src; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access

          size = stream.length;
        }

        loadImages();
      },
      ended: function ended() {
        return _ended;
      },
      setAttribute: function setAttribute() {},
      getConfig: function getConfig() {
        return _config;
      },
      pause: function pause() {
        paused = true;
      },
      play: function play() {
        paused = false;
      },
      setCurrentTime: function setCurrentTime(time) {
        frameIdx = time;
      },
      addEventListener: function addEventListener(event, f) {
        if (_eventNames.indexOf(event) !== -1) {
          if (!_eventHandlers[event]) {
            _eventHandlers[event] = [];
          }

          _eventHandlers[event].push(f);
        }
      },
      clearEventHandlers: function clearEventHandlers() {
        Object.keys(_eventHandlers).forEach(function (ind) {
          return delete _eventHandlers[ind];
        });
      },
      setTopRight: function setTopRight(topRight) {
        _topRight.x = topRight.x;
        _topRight.y = topRight.y;
      },
      getTopRight: function getTopRight() {
        return _topRight;
      },
      setCanvasSize: function setCanvasSize(canvasSize) {
        _canvasSize.x = canvasSize.x;
        _canvasSize.y = canvasSize.y;
      },
      getCanvasSize: function getCanvasSize() {
        return _canvasSize;
      },
      getFrame: function getFrame() {
        var frame;

        if (!loaded) {
          return null;
        }

        if (!paused) {
          var _imgArray;

          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          frame = (_imgArray = imgArray) === null || _imgArray === void 0 ? void 0 : _imgArray[frameIdx];

          if (frameIdx < size - 1) {
            frameIdx++;
          } else {
            setTimeout(function () {
              _ended = true;
              publishEvent('ended', []);
            }, 0);
          }
        } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


        return frame;
      }
    };
    return inputStream;
  }
};
/* harmony default export */ var input_stream_browser = (inputStreamFactory);
// EXTERNAL MODULE: ./src/common/cv_utils.js + 1 modules
var cv_utils = __webpack_require__(8);

// CONCATENATED MODULE: ./src/input/frame_grabber_browser.js
// NOTE FOR ANYONE IN HERE IN THE FUTURE:
// webpack.config.js replaces the frame_grabber module with THIS module when it is building for a Browser environment.

var TO_RADIANS = Math.PI / 180;

function adjustCanvasSize(canvas, targetSize) {
  if (canvas.width !== targetSize.x) {

    canvas.width = targetSize.x;
  }

  if (canvas.height !== targetSize.y) {

    canvas.height = targetSize.y;
  }
}

var FrameGrabber = {};

FrameGrabber.create = function (inputStream, canvas) {
  var _that = {};

  var _streamConfig = inputStream.getConfig();

  var _videoSize = Object(cv_utils["h" /* imageRef */])(inputStream.getRealWidth(), inputStream.getRealHeight());

  var _canvasSize = inputStream.getCanvasSize();

  var _size = Object(cv_utils["h" /* imageRef */])(inputStream.getWidth(), inputStream.getHeight());

  var topRight = inputStream.getTopRight();
  var _sx = topRight.x;
  var _sy = topRight.y;

  var _canvas;

  var _ctx = null;
  var _data = null;
  _canvas = canvas || document.createElement('canvas');
  _canvas.width = _canvasSize.x;
  _canvas.height = _canvasSize.y;
  _ctx = _canvas.getContext('2d');
  _data = new Uint8Array(_size.x * _size.y);
  /**
   * Uses the given array as frame-buffer
   */


  _that.attachData = function (data) {
    _data = data;
  };
  /**
   * Returns the used frame-buffer
   */


  _that.getData = function () {
    return _data;
  };
  /**
   * Fetches a frame from the input-stream and puts into the frame-buffer.
   * The image-data is converted to gray-scale and then half-sampled if configured.
   */


  _that.grab = function () {
    var doHalfSample = _streamConfig.halfSample;
    var frame = inputStream.getFrame();
    var drawable = frame;
    var drawAngle = 0;
    var ctxData;

    if (drawable) {
      adjustCanvasSize(_canvas, _canvasSize);

      if (_streamConfig.type === 'ImageStream') {
        drawable = frame.img;

        if (frame.tags && frame.tags.orientation) {
          switch (frame.tags.orientation) {
            case 6:
              drawAngle = 90 * TO_RADIANS;
              break;

            case 8:
              drawAngle = -90 * TO_RADIANS;
              break;
          }
        }
      }

      if (drawAngle !== 0) {
        _ctx.translate(_canvasSize.x / 2, _canvasSize.y / 2);

        _ctx.rotate(drawAngle);

        _ctx.drawImage(drawable, -_canvasSize.y / 2, -_canvasSize.x / 2, _canvasSize.y, _canvasSize.x);

        _ctx.rotate(-drawAngle);

        _ctx.translate(-_canvasSize.x / 2, -_canvasSize.y / 2);
      } else {
        _ctx.drawImage(drawable, 0, 0, _canvasSize.x, _canvasSize.y);
      }

      ctxData = _ctx.getImageData(_sx, _sy, _size.x, _size.y).data;

      if (doHalfSample) {
        Object(cv_utils["e" /* grayAndHalfSampleFromCanvasData */])(ctxData, _size, _data);
      } else {
        Object(cv_utils["c" /* computeGray */])(ctxData, _data, _streamConfig);
      }

      return true;
    }

    return false;
  };

  _that.getSize = function () {
    return _size;
  };

  return _that;
};

/* harmony default export */ var frame_grabber_browser = (FrameGrabber);
// CONCATENATED MODULE: ./src/quagga/qworker.ts


function qworker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function qworker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { qworker_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { qworker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* Worker functions. These are straight from the original quagga.js file.
 * Not presently used, as worker support is non-functional.  Keeping them around temporarily
 * to refer to until it is re-implemented. We may be able to fix/use some of this.
 */
// TODO: need a typescript interface for FrameGrabber
var workerPool = [];
function updateWorkers(frameGrabber) {
  var availableWorker;

  if (workerPool.length) {
    availableWorker = workerPool.filter(function (workerThread) {
      return !workerThread.busy;
    })[0];

    if (availableWorker) {
      frameGrabber.attachData(availableWorker.imageData);

      if (frameGrabber.grab()) {
        availableWorker.busy = true;
        availableWorker.worker.postMessage({
          cmd: 'process',
          imageData: availableWorker.imageData
        }, [availableWorker.imageData.buffer]);
      }

      return true;
    } else {
      return false;
    }
  }

  return null;
}

function configForWorker(config) {
  return qworker_objectSpread(qworker_objectSpread({}, config), {}, {
    inputStream: qworker_objectSpread(qworker_objectSpread({}, config.inputStream), {}, {
      target: null
    })
  });
} // @ts-ignore


function workerInterface(factory) {
  if (factory) {
    var Quagga = factory()["default"];

    if (!Quagga) {
      // @ts-ignore
      self.postMessage({
        'event': 'error',
        message: 'Quagga could not be created'
      });
      return;
    }
  } // @ts-ignore


  var imageWrapper; // @ts-ignore

  function onProcessed(result) {
    self.postMessage({
      'event': 'processed',
      // @ts-ignore
      imageData: imageWrapper.data,
      result: result // @ts-ignore

    }, [imageWrapper.data.buffer]);
  }

  function workerInterfaceReady() {
    self.postMessage({
      'event': 'initialized',
      // @ts-ignore
      imageData: imageWrapper.data // @ts-ignore

    }, [imageWrapper.data.buffer]);
  } // @ts-ignore


  self.onmessage = function (e) {
    if (e.data.cmd === 'init') {
      var config = e.data.config;
      config.numOfWorkers = 0;
      imageWrapper = new Quagga.ImageWrapper({
        x: e.data.size.x,
        y: e.data.size.y
      }, new Uint8Array(e.data.imageData));
      Quagga.init(config, workerInterfaceReady, imageWrapper);
      Quagga.onProcessed(onProcessed);
    } else if (e.data.cmd === 'process') {
      // @ts-ignore
      imageWrapper.data = new Uint8Array(e.data.imageData);
      Quagga.start();
    } else if (e.data.cmd === 'setReaders') {
      Quagga.setReaders(e.data.readers);
    } else if (e.data.cmd === 'registerReader') {
      Quagga.registerReader(e.data.name, e.data.reader);
    }
  };
}

function generateWorkerBlob() {
  var blob, factorySource;
  /* jshint ignore:start */
  // @ts-ignore

  if (typeof __factorySource__ !== 'undefined') {
    // @ts-ignore
    factorySource = __factorySource__; // eslint-disable-line no-undef
  }
  /* jshint ignore:end */


  blob = new Blob(['(' + workerInterface.toString() + ')(' + factorySource + ');'], {
    type: 'text/javascript'
  });
  return window.URL.createObjectURL(blob);
}

function initWorker(config, inputStream, cb) {
  var blobURL = generateWorkerBlob();
  var worker = new Worker(blobURL);
  var workerThread = {
    worker: worker,
    imageData: new Uint8Array(inputStream.getWidth() * inputStream.getHeight()),
    busy: true
  };

  workerThread.worker.onmessage = function (e) {
    if (e.data.event === 'initialized') {
      URL.revokeObjectURL(blobURL);
      workerThread.busy = false;
      workerThread.imageData = new Uint8Array(e.data.imageData);

      {
        console.log('Worker initialized');
      }

      cb(workerThread);
    } else if (e.data.event === 'processed') {
      workerThread.imageData = new Uint8Array(e.data.imageData);
      workerThread.busy = false; // TODO: how to thread publishResult into here?
      // publishResult(e.data.result, workerThread.imageData);
    } else if (e.data.event === 'error') {
      {
        console.log('Worker error: ' + e.data.message);
      }
    }
  };

  workerThread.worker.postMessage({
    cmd: 'init',
    size: {
      x: inputStream.getWidth(),
      y: inputStream.getHeight()
    },
    imageData: workerThread.imageData,
    config: configForWorker(config)
  }, [workerThread.imageData.buffer]);
}
function adjustWorkerPool(capacity, config, inputStream, cb) {
  var increaseBy = capacity - workerPool.length;

  if (increaseBy === 0 && cb) {
    cb();
  } else if (increaseBy < 0) {
    var workersToTerminate = workerPool.slice(increaseBy);
    workersToTerminate.forEach(function (workerThread) {
      workerThread.worker.terminate();

      {
        console.log('Worker terminated!');
      }
    });
    workerPool = workerPool.slice(0, increaseBy);

    if (cb) {
      cb();
    }
  } else {
    var workerInitialized = function workerInitialized(workerThread) {
      workerPool.push(workerThread);

      if (workerPool.length >= capacity && cb) {
        cb();
      }
    };

    if (config) {
      for (var i = 0; i < increaseBy; i++) {
        initWorker(config, inputStream, workerInitialized);
      }
    }
  }
}
function qworker_setReaders(readers) {
  workerPool.forEach(function (workerThread) {
    return workerThread.worker.postMessage({
      cmd: 'setReaders',
      readers: readers
    });
  });
}
function qworker_registerReader(name, reader) {
  workerPool.forEach(function (workerThread) {
    return workerThread.worker.postMessage({
      cmd: 'registerReader',
      name: name,
      reader: reader
    });
  });
}
// CONCATENATED MODULE: ./src/quagga/setupInputStream.ts
// TODO: need to create an InputStream typescript interface, so we don't have an "any" in the next line
function setupInputStream() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'LiveStream';
  var viewport = arguments.length > 1 ? arguments[1] : undefined;
  var InputStream = arguments.length > 2 ? arguments[2] : undefined;

  switch (type) {
    case 'VideoStream':
      {
        var video = document.createElement('video');
        return {
          video: video,
          inputStream: InputStream.createVideoStream(video)
        };
      }

    case 'ImageStream':
      return {
        inputStream: InputStream.createImageStream()
      };

    case 'LiveStream':
      {
        var _video = null;

        if (viewport) {
          _video = viewport.querySelector('video');

          if (!_video) {
            _video = document.createElement('video');
            viewport.appendChild(_video);
          }
        }

        return {
          video: _video,
          inputStream: InputStream.createLiveStream(_video)
        };
      }

    default:
      console.error("* setupInputStream invalid type ".concat(type));
      return {
        video: null,
        inputStream: null
      };
  }
}
// CONCATENATED MODULE: ./src/quagga/transform.ts
/* eslint-disable no-param-reassign */
function moveBox(box, xOffset, yOffset) {
  var corner = box.length;

  while (corner--) {
    box[corner][0] += xOffset;
    box[corner][1] += yOffset;
  }
}
function moveLine(line, xOffset, yOffset) {
  line[0].x += xOffset;
  line[0].y += yOffset;
  line[1].x += xOffset;
  line[1].y += yOffset;
}
// CONCATENATED MODULE: ./src/quagga/quagga.ts


















var quagga_Quagga = /*#__PURE__*/function () {
  function Quagga() {
    var _this = this;

    classCallCheck_default()(this, Quagga);

    defineProperty_default()(this, "context", new QuaggaContext_QuaggaContext());

    defineProperty_default()(this, "canRecord", function (callback) {
      var _this$context$config;

      if (!_this.context.config) {
        return;
      }

      barcode_locator["a" /* default */].checkImageConstraints(_this.context.inputStream, (_this$context$config = _this.context.config) === null || _this$context$config === void 0 ? void 0 : _this$context$config.locator);

      _this.initCanvas();

      _this.context.framegrabber = frame_grabber_browser.create(_this.context.inputStream, _this.context.canvasContainer.dom.image);

      if (_this.context.config.numOfWorkers === undefined) {
        _this.context.config.numOfWorkers = 0;
      }

      adjustWorkerPool(_this.context.config.numOfWorkers, _this.context.config, _this.context.inputStream, function () {
        var _this$context$config2;

        if (((_this$context$config2 = _this.context.config) === null || _this$context$config2 === void 0 ? void 0 : _this$context$config2.numOfWorkers) === 0) {
          _this.initializeData();
        }

        _this.ready(callback);
      });
    });

    defineProperty_default()(this, "update", function () {
      if (_this.context.onUIThread) {
        var workersUpdated = updateWorkers(_this.context.framegrabber);

        if (!workersUpdated) {
          var _this$context$inputIm;

          _this.context.framegrabber.attachData((_this$context$inputIm = _this.context.inputImageWrapper) === null || _this$context$inputIm === void 0 ? void 0 : _this$context$inputIm.data);

          if (_this.context.framegrabber.grab()) {
            if (!workersUpdated) {
              _this.locateAndDecode();
            }
          }
        }
      } else {
        var _this$context$inputIm2;

        _this.context.framegrabber.attachData((_this$context$inputIm2 = _this.context.inputImageWrapper) === null || _this$context$inputIm2 === void 0 ? void 0 : _this$context$inputIm2.data);

        _this.context.framegrabber.grab();

        _this.locateAndDecode();
      }
    });
  }

  createClass_default()(Quagga, [{
    key: "initBuffers",
    value: function initBuffers(imageWrapper) {
      if (!this.context.config) {
        return;
      }

      var _initBuffers2 = initBuffers_initBuffers(this.context.inputStream, imageWrapper, this.context.config.locator),
          inputImageWrapper = _initBuffers2.inputImageWrapper,
          boxSize = _initBuffers2.boxSize;

      this.context.inputImageWrapper = inputImageWrapper;
      this.context.boxSize = boxSize;
    }
  }, {
    key: "initializeData",
    value: function initializeData(imageWrapper) {
      if (!this.context.config) {
        return;
      }

      this.initBuffers(imageWrapper);
      this.context.decoder = barcode_decoder.create(this.context.config.decoder, this.context.inputImageWrapper);
    }
  }, {
    key: "getViewPort",
    value: function getViewPort() {
      if (!this.context.config || !this.context.config.inputStream) {
        return null;
      }

      var target = this.context.config.inputStream.target;
      return getViewPort_getViewPort(target);
    }
  }, {
    key: "ready",
    value: function ready(callback) {
      this.context.inputStream.play();
      callback();
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var container = initCanvas_initCanvas(this.context);

      if (!container) {
        return;
      }

      var ctx = container.ctx,
          dom = container.dom;
      this.context.canvasContainer.dom.image = dom.image;
      this.context.canvasContainer.dom.overlay = dom.overlay;
      this.context.canvasContainer.ctx.image = ctx.image;
      this.context.canvasContainer.ctx.overlay = ctx.overlay;
    }
  }, {
    key: "initInputStream",
    value: function initInputStream(callback) {
      if (!this.context.config || !this.context.config.inputStream) {
        return;
      }

      var _this$context$config$ = this.context.config.inputStream,
          inputType = _this$context$config$.type,
          constraints = _this$context$config$.constraints;

      var _setupInputStream = setupInputStream(inputType, this.getViewPort(), input_stream_browser),
          video = _setupInputStream.video,
          inputStream = _setupInputStream.inputStream;

      if (inputType === 'LiveStream' && video) {
        camera_access.request(video, constraints).then(function () {
          return inputStream.trigger('canrecord');
        })["catch"](function (err) {
          return callback(err);
        });
      }

      inputStream.setAttribute('preload', 'auto');
      inputStream.setInputStream(this.context.config.inputStream);
      inputStream.addEventListener('canrecord', this.canRecord.bind(undefined, callback));
      this.context.inputStream = inputStream;
    }
  }, {
    key: "getBoundingBoxes",
    value: function getBoundingBoxes() {
      var _this$context$config3;

      return ((_this$context$config3 = this.context.config) === null || _this$context$config3 === void 0 ? void 0 : _this$context$config3.locate) ? barcode_locator["a" /* default */].locate() : [[Object(gl_vec2["clone"])(this.context.boxSize[0]), Object(gl_vec2["clone"])(this.context.boxSize[1]), Object(gl_vec2["clone"])(this.context.boxSize[2]), Object(gl_vec2["clone"])(this.context.boxSize[3])]];
    } // TODO: need a typescript type for result here.
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

  }, {
    key: "transformResult",
    value: function transformResult(result) {
      var _this2 = this;

      var topRight = this.context.inputStream.getTopRight();
      var xOffset = topRight.x;
      var yOffset = topRight.y;

      if (xOffset === 0 && yOffset === 0) {
        return;
      }

      if (result.barcodes) {
        // TODO: BarcodeInfo may not be the right type here.
        result.barcodes.forEach(function (barcode) {
          return _this2.transformResult(barcode);
        });
      }

      if (result.line && result.line.length === 2) {
        moveLine(result.line, xOffset, yOffset);
      }

      if (result.box) {
        moveBox(result.box, xOffset, yOffset);
      }

      if (result.boxes && result.boxes.length > 0) {
        for (var i = 0; i < result.boxes.length; i++) {
          moveBox(result.boxes[i], xOffset, yOffset);
        }
      }
    }
  }, {
    key: "addResult",
    value: function addResult(result, imageData) {
      var _this3 = this;

      if (!imageData || !this.context.resultCollector) {
        return;
      } // TODO: Figure out what data structure holds a "barcodes" result, if any...


      if (result.barcodes) {
        result.barcodes.filter(function (barcode) {
          return barcode.codeResult;
        }).forEach(function (barcode) {
          return _this3.addResult(barcode, imageData);
        });
      } else if (result.codeResult) {
        this.context.resultCollector.addResult(imageData, this.context.inputStream.getCanvasSize(), result.codeResult);
      }
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "hasCodeResult",
    value: function hasCodeResult(result) {
      return !!(result && (result.barcodes ? result.barcodes.some(function (barcode) {
        return barcode.codeResult;
      }) : result.codeResult));
    } // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

  }, {
    key: "publishResult",
    value: function publishResult() {
      var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var imageData = arguments.length > 1 ? arguments[1] : undefined;
      var resultToPublish = result;

      if (result && this.context.onUIThread) {
        this.transformResult(result);
        this.addResult(result, imageData);
        resultToPublish = result.barcodes || result;
      }

      events.publish('processed', resultToPublish);

      if (this.hasCodeResult(result)) {
        events.publish('detected', resultToPublish);
      }
    }
  }, {
    key: "locateAndDecode",
    value: function locateAndDecode() {
      var boxes = this.getBoundingBoxes();

      if (boxes) {
        var _this$context$inputIm3;

        var decodeResult = this.context.decoder.decodeFromBoundingBoxes(boxes) || {};
        decodeResult.boxes = boxes;
        this.publishResult(decodeResult, (_this$context$inputIm3 = this.context.inputImageWrapper) === null || _this$context$inputIm3 === void 0 ? void 0 : _this$context$inputIm3.data);
      } else {
        var imageResult = this.context.decoder.decodeFromImage(this.context.inputImageWrapper);

        if (imageResult) {
          var _this$context$inputIm4;

          this.publishResult(imageResult, (_this$context$inputIm4 = this.context.inputImageWrapper) === null || _this$context$inputIm4 === void 0 ? void 0 : _this$context$inputIm4.data);
        } else {
          this.publishResult();
        }
      }
    }
  }, {
    key: "startContinuousUpdate",
    value: function startContinuousUpdate() {
      var _this$context$config4,
          _this4 = this;

      var next = null;
      var delay = 1000 / (((_this$context$config4 = this.context.config) === null || _this$context$config4 === void 0 ? void 0 : _this$context$config4.frequency) || 60);
      this.context.stopped = false;
      var context = this.context;

      var newFrame = function newFrame(timestamp) {
        next = next || timestamp;

        if (!context.stopped) {
          if (timestamp >= next) {
            next += delay;

            _this4.update();
          }

          window.requestAnimationFrame(newFrame);
        }
      };

      newFrame(performance.now());
    }
  }, {
    key: "start",
    value: function start() {
      var _this$context$config5, _this$context$config6;

      if (this.context.onUIThread && ((_this$context$config5 = this.context.config) === null || _this$context$config5 === void 0 ? void 0 : (_this$context$config6 = _this$context$config5.inputStream) === null || _this$context$config6 === void 0 ? void 0 : _this$context$config6.type) === 'LiveStream') {
        this.startContinuousUpdate();
      } else {
        this.update();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this$context$config7;

      this.context.stopped = true;
      adjustWorkerPool(0);

      if (((_this$context$config7 = this.context.config) === null || _this$context$config7 === void 0 ? void 0 : _this$context$config7.inputStream) && this.context.config.inputStream.type === 'LiveStream') {
        camera_access.release();
        this.context.inputStream.clearEventHandlers();
      }
    }
  }, {
    key: "setReaders",
    value: function setReaders(readers) {
      if (this.context.decoder) {
        this.context.decoder.setReaders(readers);
      }

      qworker_setReaders(readers);
    }
  }, {
    key: "registerReader",
    value: function registerReader(name, reader) {
      barcode_decoder.registerReader(name, reader);

      if (this.context.decoder) {
        this.context.decoder.registerReader(name, reader);
      }

      qworker_registerReader(name, reader);
    }
  }]);

  return Quagga;
}();


// CONCATENATED MODULE: ./src/quagga.js

 // eslint-disable-line no-unused-vars











var instance = new quagga_Quagga();
var _context = instance.context;
var QuaggaJSStaticInterface = {
  init: function init(config, cb, imageWrapper) {
    var quaggaInstance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : instance;
    var promise;

    if (!cb) {
      promise = new Promise(function (resolve, reject) {
        cb = function cb(err) {
          err ? reject(err) : resolve();
        };
      });
    }

    quaggaInstance.context.config = merge_default()({}, config_config, config); // TODO #179: pending restructure in Issue #179, we are temp disabling workers

    if (quaggaInstance.context.config.numOfWorkers > 0) {
      quaggaInstance.context.config.numOfWorkers = 0;
    }

    if (imageWrapper) {
      quaggaInstance.context.onUIThread = false;
      quaggaInstance.initializeData(imageWrapper);

      if (cb) {
        cb();
      }
    } else {
      quaggaInstance.initInputStream(cb);
    }

    return promise;
  },
  start: function start() {
    instance.start();
  },
  stop: function stop() {
    instance.stop();
  },
  pause: function pause() {
    _context.stopped = true;
  },
  onDetected: function onDetected(callback) {
    if (!callback || typeof callback !== 'function' && (typeof_default()(callback) !== 'object' || !callback.callback)) {
      console.trace('* warning: Quagga.onDetected called with invalid callback, ignoring');
      return;
    }

    events.subscribe('detected', callback);
  },
  offDetected: function offDetected(callback) {
    events.unsubscribe('detected', callback);
  },
  onProcessed: function onProcessed(callback) {
    if (!callback || typeof callback !== 'function' && (typeof_default()(callback) !== 'object' || !callback.callback)) {
      console.trace('* warning: Quagga.onProcessed called with invalid callback, ignoring');
      return;
    }

    events.subscribe('processed', callback);
  },
  offProcessed: function offProcessed(callback) {
    events.unsubscribe('processed', callback);
  },
  setReaders: function setReaders(readers) {
    if (!readers) {
      console.trace('* warning: Quagga.setReaders called with no readers, ignoring');
      return;
    }

    instance.setReaders(readers);
  },
  registerReader: function registerReader(name, reader) {
    if (!name) {
      console.trace('* warning: Quagga.registerReader called with no name, ignoring');
      return;
    }

    if (!reader) {
      console.trace('* warning: Quagga.registerReader called with no reader, ignoring');
      return;
    }

    instance.registerReader(name, reader);
  },
  registerResultCollector: function registerResultCollector(resultCollector) {
    if (resultCollector && typeof resultCollector.addResult === 'function') {
      _context.resultCollector = resultCollector;
    }
  },

  get canvas() {
    return _context.canvasContainer;
  },

  decodeSingle: function decodeSingle(config, resultCallback) {
    var _this = this;

    var quaggaInstance = new quagga_Quagga();
    config = merge_default()({
      inputStream: {
        type: 'ImageStream',
        sequence: false,
        size: 800,
        src: config.src
      },
      numOfWorkers:   config.debug ? 0 : 1,
      locator: {
        halfSample: false
      }
    }, config); // TODO #175: restructure worker support so that it will work with typescript using worker-loader
    // https://webpack.js.org/loaders/worker-loader/

    if (config.numOfWorkers > 0) {
      config.numOfWorkers = 0;
    } // workers require Worker and Blob support presently, so if no Blob or Worker then set
    // workers to 0.


    if (config.numOfWorkers > 0 && (typeof Blob === 'undefined' || typeof Worker === 'undefined')) {
      console.warn('* no Worker and/or Blob support - forcing numOfWorkers to 0');
      config.numOfWorkers = 0;
    }

    return new Promise(function (resolve, reject) {
      try {
        _this.init(config, function () {
          events.once('processed', function (result) {
            quaggaInstance.stop();

            if (resultCallback) {
              resultCallback.call(null, result);
            }

            resolve(result);
          }, true);
          quaggaInstance.start();
        }, null, quaggaInstance);
      } catch (err) {
        reject(err);
      }
    });
  },

  // add the usually expected "default" for use with require, build step won't allow us to
  // write to module.exports so do it here.
  get default() {
    return QuaggaJSStaticInterface;
  },

  BarcodeReader: barcode_reader,
  CameraAccess: camera_access,
  ImageDebug: image_debug["a" /* default */],
  ImageWrapper: image_wrapper["a" /* default */],
  ResultCollector: result_collector
};
/* harmony default export */ var quagga = __webpack_exports__["default"] = (QuaggaJSStaticInterface); // export BarcodeReader and other utilities for external plugins



/***/ })
/******/ ])["default"];
});

/* @preserve
 * qrcode-decoder 0.1.1 (https://github.com/yugasun/qrcode-decoder)
 * API https://github.com/yugasun/qrcode-decoder/blob/master/doc/api.md
 * Copyright 2017-2019 yugasun. All Rights Reserved
 * Licensed under MIT (https://github.com/yugasun/qrcode-decoder/blob/master/LICENSE)
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.QrcodeDecoder=t();}(window,function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var We=t(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t);}),r={}.hasOwnProperty,Ve=function(e,t){return r.call(e,t)},Ke=function(e){try{return !!e()}catch(e){return !0}},Ye=!Ke(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),k=t(function(e){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t);}),Je=(k.version,function(e){return "object"==typeof e?null!==e:"function"==typeof e}),v=function(e){if(!Je(e))throw TypeError(e+" is not an object!");return e},o=We.document,n=Je(o)&&Je(o.createElement),i=function(e){return n?o.createElement(e):{}},c=!Ye&&!Ke(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}),He=function(e,t){if(!Je(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!Je(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!Je(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!Je(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")},a=Object.defineProperty,Ze={f:Ye?Object.defineProperty:function(e,t,r){if(v(e),t=He(t,!0),v(r),c)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return "value"in r&&(e[t]=r.value),e}},qe=function(e,t){return {enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},$e=Ye?function(e,t,r){return Ze.f(e,t,qe(1,r))}:function(e,t,r){return e[t]=r,e},s=0,u=Math.random(),Qe=function(e){return "Symbol(".concat(void 0===e?"":e,")_",(++s+u).toString(36))},w=t(function(e){var i=Qe("src"),t="toString",r=Function[t],c=(""+r).split(t);k.inspectSource=function(e){return r.call(e)},(e.exports=function(e,t,r,o){var n="function"==typeof r;n&&(Ve(r,"name")||$e(r,"name",t)),e[t]!==r&&(n&&(Ve(r,i)||$e(r,i,e[t]?""+e[t]:c.join(String(t)))),e===We?e[t]=r:o?e[t]?e[t]=r:$e(e,t,r):(delete e[t],$e(e,t,r)));})(Function.prototype,t,function(){return "function"==typeof this&&this[i]||r.call(this)});}),l=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},et=function(o,n,e){if(l(o),void 0===n)return o;switch(e){case 1:return function(e){return o.call(n,e)};case 2:return function(e,t){return o.call(n,e,t)};case 3:return function(e,t,r){return o.call(n,e,t,r)}}return function(){return o.apply(n,arguments)}},B="prototype",p=function(e,t,r){var o,n,i,c,a=e&p.F,s=e&p.G,u=e&p.S,l=e&p.P,f=e&p.B,d=s?We:u?We[t]||(We[t]={}):(We[t]||{})[B],h=s?k:k[t]||(k[t]={}),v=h[B]||(h[B]={});for(o in s&&(r=t),r)i=((n=!a&&d&&void 0!==d[o])?d:r)[o],c=f&&n?et(i,We):l&&"function"==typeof i?et(Function.call,i):i,d&&w(d,o,i,e&p.U),h[o]!=i&&$e(h,o,c),l&&v[o]!=i&&(v[o]=i);};We.core=k,p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,p.U=64,p.R=128;var tt=p,m=t(function(e){var r=Qe("meta"),t=Ze.f,o=0,n=Object.isExtensible||function(){return !0},i=!Ke(function(){return n(Object.preventExtensions({}))}),c=function(e){t(e,r,{value:{i:"O"+ ++o,w:{}}});},a=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!Je(e))return "symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!Ve(e,r)){if(!n(e))return "F";if(!t)return "E";c(e);}return e[r].i},getWeak:function(e,t){if(!Ve(e,r)){if(!n(e))return !0;if(!t)return !1;c(e);}return e[r].w},onFreeze:function(e){return i&&a.NEED&&n(e)&&!Ve(e,r)&&c(e),e}};}),f=(m.KEY,m.NEED,m.fastKey,m.getWeak,m.onFreeze,t(function(e){var t="__core-js_shared__",r=We[t]||(We[t]={});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:k.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});})),rt=t(function(e){var t=f("wks"),r=We.Symbol,o="function"==typeof r;(e.exports=function(e){return t[e]||(t[e]=o&&r[e]||(o?r:Qe)("Symbol."+e))}).store=t;}),d=Ze.f,h=rt("toStringTag"),U=function(e,t,r){e&&!Ve(e=r?e:e.prototype,h)&&d(e,h,{configurable:!0,value:t});},y={f:rt},g=Ze.f,C=function(e){var t=k.Symbol||(k.Symbol=We.Symbol||{});"_"==e.charAt(0)||e in t||g(t,e,{value:y.f(e)});},P={}.toString,b=function(e){return P.call(e).slice(8,-1)},S=Object("z").propertyIsEnumerable(0)?Object:function(e){return "String"==b(e)?e.split(""):Object(e)},x=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},_=Object.freeze({default:x,__moduleExports:x}),M=_&&x||_,E=function(e){return S(M(e))},O=Math.ceil,L=Math.floor,ot=function(e){return isNaN(e=+e)?0:(0<e?L:O)(e)},I=Math.min,nt=function(e){return 0<e?I(ot(e),9007199254740991):0},F=Math.max,N=Math.min,it=function(e,t){return (e=ot(e))<0?F(e+t,0):N(e,t)},ct=function(a){return function(e,t,r){var o,n=E(e),i=nt(n.length),c=it(r,i);if(a&&t!=t){for(;c<i;)if((o=n[c++])!=o)return !0}else for(;c<i;c++)if((a||c in n)&&n[c]===t)return a||c||0;return !a&&-1}},A=f("keys"),j=function(e){return A[e]||(A[e]=Qe(e))},R=ct(!1),T=j("IE_PROTO"),z=function(e,t){var r,o=E(e),n=0,i=[];for(r in o)r!=T&&Ve(o,r)&&i.push(r);for(;t.length>n;)Ve(o,r=t[n++])&&(~R(i,r)||i.push(r));return i},D="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),G=Object.keys||function(e){return z(e,D)},X={f:Object.getOwnPropertySymbols},W={f:{}.propertyIsEnumerable},V=Array.isArray||function(e){return "Array"==b(e)},K=Ye?Object.defineProperties:function(e,t){v(e);for(var r,o=G(t),n=o.length,i=0;i<n;)Ze.f(e,r=o[i++],t[r]);return e},Y=We.document,J=Y&&Y.documentElement,H=j("IE_PROTO"),Z=function(){},q="prototype",$=function(){var e,t=i("iframe"),r=D.length;for(t.style.display="none",J.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),$=e.F;r--;)delete $[q][D[r]];return $()},at=Object.create||function(e,t){var r;return null!==e?(Z[q]=v(e),r=new Z,Z[q]=null,r[H]=e):r=$(),void 0===t?r:K(r,t)},Q=D.concat("length","prototype"),st={f:Object.getOwnPropertyNames||function(e){return z(e,Q)}},ee=st.f,te={}.toString,re="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],oe={f:function(e){return re&&"[object Window]"==te.call(e)?function(e){try{return ee(e)}catch(e){return re.slice()}}(e):ee(E(e))}},ne=Object.getOwnPropertyDescriptor,ut={f:Ye?ne:function(e,t){if(e=E(e),t=He(t,!0),c)try{return ne(e,t)}catch(e){}if(Ve(e,t))return qe(!W.f.call(e,t),e[t])}},ie=m.KEY,ce=ut.f,ae=Ze.f,se=oe.f,ue=We.Symbol,le=We.JSON,fe=le&&le.stringify,de="prototype",he=rt("_hidden"),ve=rt("toPrimitive"),ke={}.propertyIsEnumerable,Be=f("symbol-registry"),pe=f("symbols"),me=f("op-symbols"),we=Object[de],ye="function"==typeof ue,ge=We.QObject,Ce=!ge||!ge[de]||!ge[de].findChild,Pe=Ye&&Ke(function(){return 7!=at(ae({},"a",{get:function(){return ae(this,"a",{value:7}).a}})).a})?function(e,t,r){var o=ce(we,t);o&&delete we[t],ae(e,t,r),o&&e!==we&&ae(we,t,o);}:ae,be=function(e){var t=pe[e]=at(ue[de]);return t._k=e,t},Se=ye&&"symbol"==typeof ue.iterator?function(e){return "symbol"==typeof e}:function(e){return e instanceof ue},xe=function(e,t,r){return e===we&&xe(me,t,r),v(e),t=He(t,!0),v(r),Ve(pe,t)?(r.enumerable?(Ve(e,he)&&e[he][t]&&(e[he][t]=!1),r=at(r,{enumerable:qe(0,!1)})):(Ve(e,he)||ae(e,he,qe(1,{})),e[he][t]=!0),Pe(e,t,r)):ae(e,t,r)},_e=function(e,t){v(e);for(var r,o=function(e){var t=G(e),r=X.f;if(r)for(var o,n=r(e),i=W.f,c=0;n.length>c;)i.call(e,o=n[c++])&&t.push(o);return t}(t=E(t)),n=0,i=o.length;n<i;)xe(e,r=o[n++],t[r]);return e},Me=function(e){var t=ke.call(this,e=He(e,!0));return !(this===we&&Ve(pe,e)&&!Ve(me,e))&&(!(t||!Ve(this,e)||!Ve(pe,e)||Ve(this,he)&&this[he][e])||t)},Ee=function(e,t){if(e=E(e),t=He(t,!0),e!==we||!Ve(pe,t)||Ve(me,t)){var r=ce(e,t);return !r||!Ve(pe,t)||Ve(e,he)&&e[he][t]||(r.enumerable=!0),r}},Oe=function(e){for(var t,r=se(E(e)),o=[],n=0;r.length>n;)Ve(pe,t=r[n++])||t==he||t==ie||o.push(t);return o},Le=function(e){for(var t,r=e===we,o=se(r?me:E(e)),n=[],i=0;o.length>i;)!Ve(pe,t=o[i++])||r&&!Ve(we,t)||n.push(pe[t]);return n};ye||(w((ue=function(){if(this instanceof ue)throw TypeError("Symbol is not a constructor!");var t=Qe(0<arguments.length?arguments[0]:void 0),r=function(e){this===we&&r.call(me,e),Ve(this,he)&&Ve(this[he],t)&&(this[he][t]=!1),Pe(this,t,qe(1,e));};return Ye&&Ce&&Pe(we,t,{configurable:!0,set:r}),be(t)})[de],"toString",function(){return this._k}),ut.f=Ee,Ze.f=xe,st.f=oe.f=Oe,W.f=Me,X.f=Le,Ye&&w(we,"propertyIsEnumerable",Me,!0),y.f=function(e){return be(rt(e))}),tt(tt.G+tt.W+tt.F*!ye,{Symbol:ue});for(var Ie="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Fe=0;Ie.length>Fe;)rt(Ie[Fe++]);for(var Ne=G(rt.store),Ae=0;Ne.length>Ae;)C(Ne[Ae++]);tt(tt.S+tt.F*!ye,"Symbol",{for:function(e){return Ve(Be,e+="")?Be[e]:Be[e]=ue(e)},keyFor:function(e){if(!Se(e))throw TypeError(e+" is not a symbol!");for(var t in Be)if(Be[t]===e)return t},useSetter:function(){Ce=!0;},useSimple:function(){Ce=!1;}}),tt(tt.S+tt.F*!ye,"Object",{create:function(e,t){return void 0===t?at(e):_e(at(e),t)},defineProperty:xe,defineProperties:_e,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:Oe,getOwnPropertySymbols:Le}),le&&tt(tt.S+tt.F*(!ye||Ke(function(){var e=ue();return "[null]"!=fe([e])||"{}"!=fe({a:e})||"{}"!=fe(Object(e))})),"JSON",{stringify:function(e){for(var t,r,o=[e],n=1;arguments.length>n;)o.push(arguments[n++]);if(r=t=o[1],(Je(t)||void 0!==e)&&!Se(e))return V(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!Se(t))return t}),o[1]=t,fe.apply(le,o)}}),ue[de][ve]||$e(ue[de],ve,ue[de].valueOf),U(ue,"Symbol"),U(Math,"Math",!0),U(We.JSON,"JSON",!0),tt(tt.S,"Object",{create:at}),tt(tt.S+tt.F*!Ye,"Object",{defineProperty:Ze.f}),tt(tt.S+tt.F*!Ye,"Object",{defineProperties:K});var je=function(e,t){var r=(k.Object||{})[e]||Object[e],o={};o[e]=t(r),tt(tt.S+tt.F*Ke(function(){r(1);}),"Object",o);},Re=ut.f;je("getOwnPropertyDescriptor",function(){return function(e,t){return Re(E(e),t)}});var lt=function(e){return Object(M(e))},Te=j("IE_PROTO"),ze=Object.prototype,ft=Object.getPrototypeOf||function(e){return e=lt(e),Ve(e,Te)?e[Te]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ze:null};je("getPrototypeOf",function(){return function(e){return ft(lt(e))}}),je("keys",function(){return function(e){return G(lt(e))}}),je("getOwnPropertyNames",function(){return oe.f});var De=m.onFreeze;je("freeze",function(t){return function(e){return t&&Je(e)?t(De(e)):e}});var Ue=m.onFreeze;je("seal",function(t){return function(e){return t&&Je(e)?t(Ue(e)):e}});var Ge=m.onFreeze;je("preventExtensions",function(t){return function(e){return t&&Je(e)?t(Ge(e)):e}}),je("isFrozen",function(t){return function(e){return !Je(e)||!!t&&t(e)}}),je("isSealed",function(t){return function(e){return !Je(e)||!!t&&t(e)}}),je("isExtensible",function(t){return function(e){return !!Je(e)&&(!t||t(e))}});var Xe=Object.assign,dt=!Xe||Ke(function(){var e={},t={},r=Symbol(),o="abcdefghijklmnopqrst";return e[r]=7,o.split("").forEach(function(e){t[e]=e;}),7!=Xe({},e)[r]||Object.keys(Xe({},t)).join("")!=o})?function(e,t){for(var r=lt(e),o=arguments.length,n=1,i=X.f,c=W.f;n<o;)for(var a,s=S(arguments[n++]),u=i?G(s).concat(i(s)):G(s),l=u.length,f=0;f<l;)c.call(s,a=u[f++])&&(r[a]=s[a]);return r}:Xe;tt(tt.S+tt.F,"Object",{assign:dt});var ht=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};tt(tt.S,"Object",{is:ht});var vt=function(e,t){if(v(e),!Je(t)&&null!==t)throw TypeError(t+": can't set as prototype!")},kt={set:Object.setPrototypeOf||("__proto__"in{}?function(e,r,o){try{(o=et(Function.call,ut.f(Object.prototype,"__proto__").set,2))(e,[]),r=!(e instanceof Array);}catch(e){r=!0;}return function(e,t){return vt(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:vt};tt(tt.S,"Object",{setPrototypeOf:kt.set});var Bt=rt("toStringTag"),pt="Arguments"==b(function(){return arguments}()),mt=function(e){var t,r,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),Bt))?r:pt?b(t):"Object"==(o=b(t))&&"function"==typeof t.callee?"Arguments":o},wt={};wt[rt("toStringTag")]="z",wt+""!="[object z]"&&w(Object.prototype,"toString",function(){return "[object "+mt(this)+"]"},!0);var yt=function(e,t,r){var o=void 0===r;switch(t.length){case 0:return o?e():e.call(r);case 1:return o?e(t[0]):e.call(r,t[0]);case 2:return o?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return o?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return o?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)},gt=[].slice,Ct={},Pt=Function.bind||function(t){var r=l(this),o=gt.call(arguments,1),n=function(){var e=o.concat(gt.call(arguments));return this instanceof n?function(e,t,r){if(!(t in Ct)){for(var o=[],n=0;n<t;n++)o[n]="a["+n+"]";Ct[t]=Function("F,a","return new F("+o.join(",")+")");}return Ct[t](e,r)}(r,e.length,e):yt(r,e,t)};return Je(r.prototype)&&(n.prototype=r.prototype),n};tt(tt.P,"Function",{bind:Pt});var bt=Ze.f,St=Function.prototype,xt=/^\s*function ([^ (]*)/;"name"in St||Ye&&bt(St,"name",{configurable:!0,get:function(){try{return (""+this).match(xt)[1]}catch(e){return ""}}});var _t=rt("hasInstance"),Mt=Function.prototype;_t in Mt||Ze.f(Mt,_t,{value:function(e){if("function"!=typeof this||!Je(e))return !1;if(!Je(this.prototype))return e instanceof this;for(;e=ft(e);)if(this.prototype===e)return !0;return !1}});var Et="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Ot="["+Et+"]",Lt=RegExp("^"+Ot+Ot+"*"),It=RegExp(Ot+Ot+"*$"),Ft=function(e,t,r){var o={},n=Ke(function(){return !!Et[e]()||"​"!="​"[e]()}),i=o[e]=n?t(Nt):Et[e];r&&(o[r]=i),tt(tt.P+tt.F*n,"String",o);},Nt=Ft.trim=function(e,t){return e=String(M(e)),1&t&&(e=e.replace(Lt,"")),2&t&&(e=e.replace(It,"")),e},At=Ft,jt=Object.freeze({default:At,__moduleExports:At}),Rt=jt&&At||jt,Tt=We.parseInt,zt=Rt.trim,Dt=/^[-+]?0[xX]/,Ut=8!==Tt(Et+"08")||22!==Tt(Et+"0x16")?function(e,t){var r=zt(String(e),3);return Tt(r,t>>>0||(Dt.test(r)?16:10))}:Tt;tt(tt.G+tt.F*(parseInt!=Ut),{parseInt:Ut});var Gt=We.parseFloat,Xt=Rt.trim,Wt=1/Gt(Et+"-0")!=-1/0?function(e){var t=Xt(String(e),3),r=Gt(t);return 0===r&&"-"==t.charAt(0)?-0:r}:Gt;tt(tt.G+tt.F*(parseFloat!=Wt),{parseFloat:Wt});var Vt=kt.set,Kt=function(e,t,r){var o,n=t.constructor;return n!==r&&"function"==typeof n&&(o=n.prototype)!==r.prototype&&Je(o)&&Vt&&Vt(e,o),e},Yt=st.f,Jt=ut.f,Ht=Ze.f,Zt=Rt.trim,qt="Number",$t=We[qt],Qt=$t,er=$t.prototype,tr=b(at(er))==qt,rr="trim"in String.prototype,or=function(e){var t=He(e,!1);if("string"==typeof t&&2<t.length){var r,o,n,i=(t=rr?t.trim():Zt(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return +t}for(var c,a=t.slice(2),s=0,u=a.length;s<u;s++)if((c=a.charCodeAt(s))<48||n<c)return NaN;return parseInt(a,o)}}return +t};if(!$t(" 0o1")||!$t("0b1")||$t("+0x1")){$t=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof $t&&(tr?Ke(function(){er.valueOf.call(r);}):b(r)!=qt)?Kt(new Qt(or(t)),r,$t):or(t)};for(var nr,ir=Ye?Yt(Qt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),cr=0;ir.length>cr;cr++)Ve(Qt,nr=ir[cr])&&!Ve($t,nr)&&Ht($t,nr,Jt(Qt,nr));($t.prototype=er).constructor=$t,w(We,qt,$t);}var ar=function(e,t){if("number"!=typeof e&&"Number"!=b(e))throw TypeError(t);return +e},sr=function(e){var t=String(M(this)),r="",o=ot(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;0<o;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r},ur=1..toFixed,lr=Math.floor,fr=[0,0,0,0,0,0],dr="Number.toFixed: incorrect invocation!",hr=function(e,t){for(var r=-1,o=t;++r<6;)o+=e*fr[r],fr[r]=o%1e7,o=lr(o/1e7);},vr=function(e){for(var t=6,r=0;0<=--t;)r+=fr[t],fr[t]=lr(r/e),r=r%e*1e7;},kr=function(){for(var e=6,t="";0<=--e;)if(""!==t||0===e||0!==fr[e]){var r=String(fr[e]);t=""===t?r:t+sr.call("0",7-r.length)+r;}return t},Br=function(e,t,r){return 0===t?r:t%2==1?Br(e,t-1,r*e):Br(e*e,t/2,r)};tt(tt.P+tt.F*(!!ur&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!Ke(function(){ur.call({});})),"Number",{toFixed:function(e){var t,r,o,n,i=ar(this,dr),c=ot(e),a="",s="0";if(c<0||20<c)throw RangeError(dr);if(i!=i)return "NaN";if(i<=-1e21||1e21<=i)return String(i);if(i<0&&(a="-",i=-i),1e-21<i)if(r=(t=function(e){for(var t=0,r=e;4096<=r;)t+=12,r/=4096;for(;2<=r;)t+=1,r/=2;return t}(i*Br(2,69,1))-69)<0?i*Br(2,-t,1):i/Br(2,t,1),r*=4503599627370496,0<(t=52-t)){for(hr(0,r),o=c;7<=o;)hr(1e7,0),o-=7;for(hr(Br(10,o,1),0),o=t-1;23<=o;)vr(1<<23),o-=23;vr(1<<o),hr(1,1),vr(2),s=kr();}else hr(0,r),hr(1<<-t,0),s=kr()+sr.call("0",c);return s=0<c?a+((n=s.length)<=c?"0."+sr.call("0",c-n)+s:s.slice(0,n-c)+"."+s.slice(n-c)):a+s}});var pr=1..toPrecision;tt(tt.P+tt.F*(Ke(function(){return "1"!==pr.call(1,void 0)})||!Ke(function(){pr.call({});})),"Number",{toPrecision:function(e){var t=ar(this,"Number#toPrecision: incorrect invocation!");return void 0===e?pr.call(t):pr.call(t,e)}}),tt(tt.S,"Number",{EPSILON:Math.pow(2,-52)});var mr=We.isFinite;tt(tt.S,"Number",{isFinite:function(e){return "number"==typeof e&&mr(e)}});var wr=Math.floor,yr=function(e){return !Je(e)&&isFinite(e)&&wr(e)===e};tt(tt.S,"Number",{isInteger:yr}),tt(tt.S,"Number",{isNaN:function(e){return e!=e}});var gr=Math.abs;tt(tt.S,"Number",{isSafeInteger:function(e){return yr(e)&&gr(e)<=9007199254740991}}),tt(tt.S,"Number",{MAX_SAFE_INTEGER:9007199254740991}),tt(tt.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991}),tt(tt.S+tt.F*(Number.parseFloat!=Wt),"Number",{parseFloat:Wt}),tt(tt.S+tt.F*(Number.parseInt!=Ut),"Number",{parseInt:Ut});var Cr=Math.log1p||function(e){return -1e-8<(e=+e)&&e<1e-8?e-e*e/2:Math.log(1+e)},Pr=Math.sqrt,br=Math.acosh;tt(tt.S+tt.F*!(br&&710==Math.floor(br(Number.MAX_VALUE))&&br(1/0)==1/0),"Math",{acosh:function(e){return (e=+e)<1?NaN:94906265.62425156<e?Math.log(e)+Math.LN2:Cr(e-1+Pr(e-1)*Pr(e+1))}});var Sr=Math.asinh;tt(tt.S+tt.F*!(Sr&&0<1/Sr(0)),"Math",{asinh:function e(t){return isFinite(t=+t)&&0!=t?t<0?-e(-t):Math.log(t+Math.sqrt(t*t+1)):t}});var xr=Math.atanh;tt(tt.S+tt.F*!(xr&&1/xr(-0)<0),"Math",{atanh:function(e){return 0==(e=+e)?e:Math.log((1+e)/(1-e))/2}});var _r=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1};tt(tt.S,"Math",{cbrt:function(e){return _r(e=+e)*Math.pow(Math.abs(e),1/3)}}),tt(tt.S,"Math",{clz32:function(e){return (e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}});var Mr=Math.exp;tt(tt.S,"Math",{cosh:function(e){return (Mr(e=+e)+Mr(-e))/2}});var Er=Math.expm1,Or=!Er||22025.465794806718<Er(10)||Er(10)<22025.465794806718||-2e-17!=Er(-2e-17)?function(e){return 0==(e=+e)?e:-1e-6<e&&e<1e-6?e+e*e/2:Math.exp(e)-1}:Er;tt(tt.S+tt.F*(Or!=Math.expm1),"Math",{expm1:Or});var Lr=Math.pow,Ir=Lr(2,-52),Fr=Lr(2,-23),Nr=Lr(2,127)*(2-Fr),Ar=Lr(2,-126),jr=Math.fround||function(e){var t,r,o=Math.abs(e),n=_r(e);return o<Ar?n*(o/Ar/Fr+1/Ir-1/Ir)*Ar*Fr:Nr<(r=(t=(1+Fr/Ir)*o)-(t-o))||r!=r?n*(1/0):n*r};tt(tt.S,"Math",{fround:jr});var Rr=Math.abs;tt(tt.S,"Math",{hypot:function(e,t){for(var r,o,n=0,i=0,c=arguments.length,a=0;i<c;)a<(r=Rr(arguments[i++]))?(n=n*(o=a/r)*o+1,a=r):n+=0<r?(o=r/a)*o:r;return a===1/0?1/0:a*Math.sqrt(n)}});var Tr=Math.imul;tt(tt.S+tt.F*Ke(function(){return -5!=Tr(4294967295,5)||2!=Tr.length}),"Math",{imul:function(e,t){var r=65535,o=+e,n=+t,i=r&o,c=r&n;return 0|i*c+((r&o>>>16)*c+i*(r&n>>>16)<<16>>>0)}}),tt(tt.S,"Math",{log10:function(e){return Math.log(e)*Math.LOG10E}}),tt(tt.S,"Math",{log1p:Cr}),tt(tt.S,"Math",{log2:function(e){return Math.log(e)/Math.LN2}}),tt(tt.S,"Math",{sign:_r});var zr=Math.exp;tt(tt.S+tt.F*Ke(function(){return -2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(e){return Math.abs(e=+e)<1?(Or(e)-Or(-e))/2:(zr(e-1)-zr(-e-1))*(Math.E/2)}});var Dr=Math.exp;tt(tt.S,"Math",{tanh:function(e){var t=Or(e=+e),r=Or(-e);return t==1/0?1:r==1/0?-1:(t-r)/(Dr(e)+Dr(-e))}}),tt(tt.S,"Math",{trunc:function(e){return (0<e?Math.floor:Math.ceil)(e)}});var Ur=String.fromCharCode,Gr=String.fromCodePoint;tt(tt.S+tt.F*(!!Gr&&1!=Gr.length),"String",{fromCodePoint:function(e){for(var t,r=[],o=arguments.length,n=0;n<o;){if(t=+arguments[n++],it(t,1114111)!==t)throw RangeError(t+" is not a valid code point");r.push(t<65536?Ur(t):Ur(55296+((t-=65536)>>10),t%1024+56320));}return r.join("")}}),tt(tt.S,"String",{raw:function(e){for(var t=E(e.raw),r=nt(t.length),o=arguments.length,n=[],i=0;i<r;)n.push(String(t[i++])),i<o&&n.push(String(arguments[i]));return n.join("")}}),Rt("trim",function(e){return function(){return e(this,3)}});var Xr=function(a){return function(e,t){var r,o,n=String(M(e)),i=ot(t),c=n.length;return i<0||c<=i?a?"":void 0:(r=n.charCodeAt(i))<55296||56319<r||i+1===c||(o=n.charCodeAt(i+1))<56320||57343<o?a?n.charAt(i):r:a?n.slice(i,i+2):o-56320+(r-55296<<10)+65536}},Wr={},Vr={};$e(Vr,rt("iterator"),function(){return this});var Kr=function(e,t,r){e.prototype=at(Vr,{next:qe(1,r)}),U(e,t+" Iterator");},Yr=rt("iterator"),Jr=!([].keys&&"next"in[].keys()),Hr="values",Zr=function(){return this},qr=function(e,t,r,o,n,i,c){Kr(r,t,o);var a,s,u,l=function(e){if(!Jr&&e in v)return v[e];switch(e){case"keys":case Hr:return function(){return new r(this,e)}}return function(){return new r(this,e)}},f=t+" Iterator",d=n==Hr,h=!1,v=e.prototype,k=v[Yr]||v["@@iterator"]||n&&v[n],B=k||l(n),p=n?d?l("entries"):B:void 0,m="Array"==t&&v.entries||k;if(m&&(u=ft(m.call(new e)))!==Object.prototype&&u.next&&(U(u,f,!0),"function"!=typeof u[Yr]&&$e(u,Yr,Zr)),d&&k&&k.name!==Hr&&(h=!0,B=function(){return k.call(this)}),(Jr||h||!v[Yr])&&$e(v,Yr,B),Wr[t]=B,Wr[f]=Zr,n)if(a={values:d?B:l(Hr),keys:i?B:l("keys"),entries:p},c)for(s in a)s in v||w(v,s,a[s]);else tt(tt.P+tt.F*(Jr||h),t,a);return a},$r=Xr(!0);qr(String,"String",function(e){this._t=String(e),this._i=0;},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=$r(t,r),this._i+=e.length,{value:e,done:!1})});var Qr=Xr(!1);tt(tt.P,"String",{codePointAt:function(e){return Qr(this,e)}});var eo=rt("match"),to=function(e){var t;return Je(e)&&(void 0!==(t=e[eo])?!!t:"RegExp"==b(e))},ro=function(e,t,r){if(to(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(M(e))},oo=rt("match"),no=function(t){var r=/./;try{"/./"[t](r);}catch(e){try{return r[oo]=!1,!"/./"[t](r)}catch(e){}}return !0},io="endsWith",co=""[io];tt(tt.P+tt.F*no(io),"String",{endsWith:function(e){var t=ro(this,e,io),r=1<arguments.length?arguments[1]:void 0,o=nt(t.length),n=void 0===r?o:Math.min(nt(r),o),i=String(e);return co?co.call(t,i,n):t.slice(n-i.length,n)===i}});var ao="includes";tt(tt.P+tt.F*no(ao),"String",{includes:function(e){return !!~ro(this,e,ao).indexOf(e,1<arguments.length?arguments[1]:void 0)}}),tt(tt.P,"String",{repeat:sr});var so="startsWith",uo=""[so];tt(tt.P+tt.F*no(so),"String",{startsWith:function(e){var t=ro(this,e,so),r=nt(Math.min(1<arguments.length?arguments[1]:void 0,t.length)),o=String(e);return uo?uo.call(t,o,r):t.slice(r,r+o.length)===o}});var lo=/"/g,fo=function(e,t,r,o){var n=String(M(e)),i="<"+t;return ""!==r&&(i+=" "+r+'="'+String(o).replace(lo,"&quot;")+'"'),i+">"+n+"</"+t+">"},ho=function(t,e){var r={};r[t]=e(fo),tt(tt.P+tt.F*Ke(function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length}),"String",r);},vo=Object.freeze({default:ho,__moduleExports:ho}),ko=vo&&ho||vo;ko("anchor",function(t){return function(e){return t(this,"a","name",e)}}),ko("big",function(e){return function(){return e(this,"big","","")}}),ko("blink",function(e){return function(){return e(this,"blink","","")}}),ko("bold",function(e){return function(){return e(this,"b","","")}}),ko("fixed",function(e){return function(){return e(this,"tt","","")}}),ko("fontcolor",function(t){return function(e){return t(this,"font","color",e)}}),ko("fontsize",function(t){return function(e){return t(this,"font","size",e)}}),ko("italics",function(e){return function(){return e(this,"i","","")}}),ko("link",function(t){return function(e){return t(this,"a","href",e)}}),ko("small",function(e){return function(){return e(this,"small","","")}}),ko("strike",function(e){return function(){return e(this,"strike","","")}}),ko("sub",function(e){return function(){return e(this,"sub","","")}}),ko("sup",function(e){return function(){return e(this,"sup","","")}}),tt(tt.S,"Date",{now:function(){return (new Date).getTime()}}),tt(tt.P+tt.F*Ke(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(e){var t=lt(this),r=He(t);return "number"!=typeof r||isFinite(r)?t.toISOString():null}});var Bo=Date.prototype.getTime,po=Date.prototype.toISOString,mo=function(e){return 9<e?e:"0"+e},wo=Ke(function(){return "0385-07-25T07:06:39.999Z"!=po.call(new Date(-5e13-1))})||!Ke(function(){po.call(new Date(NaN));})?function(){if(!isFinite(Bo.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),o=t<0?"-":9999<t?"+":"";return o+("00000"+Math.abs(t)).slice(o?-6:-4)+"-"+mo(e.getUTCMonth()+1)+"-"+mo(e.getUTCDate())+"T"+mo(e.getUTCHours())+":"+mo(e.getUTCMinutes())+":"+mo(e.getUTCSeconds())+"."+(99<r?r:"0"+mo(r))+"Z"}:po;tt(tt.P+tt.F*(Date.prototype.toISOString!==wo),"Date",{toISOString:wo});var yo=Date.prototype,go="Invalid Date",Co="toString",Po=yo[Co],bo=yo.getTime;new Date(NaN)+""!=go&&w(yo,Co,function(){var e=bo.call(this);return e==e?Po.call(this):go});var So=rt("toPrimitive"),xo=Date.prototype;So in xo||$e(xo,So,function(e){if("string"!==e&&"number"!==e&&"default"!==e)throw TypeError("Incorrect hint");return He(v(this),"number"!=e)}),tt(tt.S,"Array",{isArray:V});var _o=function(t,e,r,o){try{return o?e(v(r)[0],r[1]):e(r)}catch(e){var n=t.return;throw void 0!==n&&v(n.call(t)),e}},Mo=rt("iterator"),Eo=Array.prototype,Oo=function(e){return void 0!==e&&(Wr.Array===e||Eo[Mo]===e)},Lo=function(e,t,r){t in e?Ze.f(e,t,qe(0,r)):e[t]=r;},Io=rt("iterator"),Fo=k.getIteratorMethod=function(e){if(null!=e)return e[Io]||e["@@iterator"]||Wr[mt(e)]},No=rt("iterator"),Ao=!1;try{[7][No]().return=function(){Ao=!0;};}catch(e){}var jo=function(e,t){if(!t&&!Ao)return !1;var r=!1;try{var o=[7],n=o[No]();n.next=function(){return {done:r=!0}},o[No]=function(){return n},e(o);}catch(e){}return r};tt(tt.S+tt.F*!jo(function(e){}),"Array",{from:function(e){var t,r,o,n,i=lt(e),c="function"==typeof this?this:Array,a=arguments.length,s=1<a?arguments[1]:void 0,u=void 0!==s,l=0,f=Fo(i);if(u&&(s=et(s,2<a?arguments[2]:void 0,2)),null==f||c==Array&&Oo(f))for(r=new c(t=nt(i.length));l<t;l++)Lo(r,l,u?s(i[l],l):i[l]);else for(n=f.call(i),r=new c;!(o=n.next()).done;l++)Lo(r,l,u?_o(n,s,[o.value,l],!0):o.value);return r.length=l,r}}),tt(tt.S+tt.F*Ke(function(){function e(){}return !(Array.of.call(e)instanceof e)}),"Array",{of:function(){for(var e=0,t=arguments.length,r=new("function"==typeof this?this:Array)(t);e<t;)Lo(r,e,arguments[e++]);return r.length=t,r}});var Ro=function(e,t){return !!e&&Ke(function(){t?e.call(null,function(){},1):e.call(null);})},To=Object.freeze({default:Ro,__moduleExports:Ro}),zo=To&&Ro||To,Do=[].join;tt(tt.P+tt.F*(S!=Object||!zo(Do)),"Array",{join:function(e){return Do.call(E(this),void 0===e?",":e)}});var Uo=[].slice;tt(tt.P+tt.F*Ke(function(){J&&Uo.call(J);}),"Array",{slice:function(e,t){var r=nt(this.length),o=b(this);if(t=void 0===t?r:t,"Array"==o)return Uo.call(this,e,t);for(var n=it(e,r),i=it(t,r),c=nt(i-n),a=new Array(c),s=0;s<c;s++)a[s]="String"==o?this.charAt(n+s):this[n+s];return a}});var Go=[].sort,Xo=[1,2,3];tt(tt.P+tt.F*(Ke(function(){Xo.sort(void 0);})||!Ke(function(){Xo.sort(null);})||!zo(Go)),"Array",{sort:function(e){return void 0===e?Go.call(lt(this)):Go.call(lt(this),l(e))}});var Wo=rt("species"),Vo=function(e,t){return V(r=e)&&("function"!=typeof(o=r.constructor)||o!==Array&&!V(o.prototype)||(o=void 0),Je(o)&&null===(o=o[Wo])&&(o=void 0)),new(void 0===o?Array:o)(t);var r,o;},Ko=function(f,e){var d=1==f,h=2==f,v=3==f,k=4==f,B=6==f,p=5==f||B,m=e||Vo;return function(e,t,r){for(var o,n,i=lt(e),c=S(i),a=et(t,r,3),s=nt(c.length),u=0,l=d?m(e,s):h?m(e,0):void 0;u<s;u++)if((p||u in c)&&(n=a(o=c[u],u,i),f))if(d)l[u]=n;else if(n)switch(f){case 3:return !0;case 5:return o;case 6:return u;case 2:l.push(o);}else if(k)return !1;return B?-1:v||k?k:l}},Yo=Ko(0),Jo=zo([].forEach,!0);tt(tt.P+tt.F*!Jo,"Array",{forEach:function(e){return Yo(this,e,arguments[1])}});var Ho=Ko(1);tt(tt.P+tt.F*!zo([].map,!0),"Array",{map:function(e){return Ho(this,e,arguments[1])}});var Zo=Ko(2);tt(tt.P+tt.F*!zo([].filter,!0),"Array",{filter:function(e){return Zo(this,e,arguments[1])}});var qo=Ko(3);tt(tt.P+tt.F*!zo([].some,!0),"Array",{some:function(e){return qo(this,e,arguments[1])}});var $o=Ko(4);tt(tt.P+tt.F*!zo([].every,!0),"Array",{every:function(e){return $o(this,e,arguments[1])}});var Qo=function(e,t,r,o,n){l(t);var i=lt(e),c=S(i),a=nt(i.length),s=n?a-1:0,u=n?-1:1;if(r<2)for(;;){if(s in c){o=c[s],s+=u;break}if(s+=u,n?s<0:a<=s)throw TypeError("Reduce of empty array with no initial value")}for(;n?0<=s:s<a;s+=u)s in c&&(o=t(o,c[s],s,i));return o};tt(tt.P+tt.F*!zo([].reduce,!0),"Array",{reduce:function(e){return Qo(this,e,arguments.length,arguments[1],!1)}}),tt(tt.P+tt.F*!zo([].reduceRight,!0),"Array",{reduceRight:function(e){return Qo(this,e,arguments.length,arguments[1],!0)}});var en=ct(!1),tn=[].indexOf,rn=!!tn&&1/[1].indexOf(1,-0)<0;tt(tt.P+tt.F*(rn||!zo(tn)),"Array",{indexOf:function(e){return rn?tn.apply(this,arguments)||0:en(this,e,arguments[1])}});var on=[].lastIndexOf,nn=!!on&&1/[1].lastIndexOf(1,-0)<0;tt(tt.P+tt.F*(nn||!zo(on)),"Array",{lastIndexOf:function(e){if(nn)return on.apply(this,arguments)||0;var t=E(this),r=nt(t.length),o=r-1;for(1<arguments.length&&(o=Math.min(o,ot(arguments[1]))),o<0&&(o=r+o);0<=o;o--)if(o in t&&t[o]===e)return o||0;return -1}});var cn=[].copyWithin||function(e,t){var r=lt(this),o=nt(r.length),n=it(e,o),i=it(t,o),c=2<arguments.length?arguments[2]:void 0,a=Math.min((void 0===c?o:it(c,o))-i,o-n),s=1;for(i<n&&n<i+a&&(s=-1,i+=a-1,n+=a-1);0<a--;)i in r?r[n]=r[i]:delete r[n],n+=s,i+=s;return r},an=rt("unscopables"),sn=Array.prototype;null==sn[an]&&$e(sn,an,{});var un=function(e){sn[an][e]=!0;};tt(tt.P,"Array",{copyWithin:cn}),un("copyWithin");var ln=function(e){for(var t=lt(this),r=nt(t.length),o=arguments.length,n=it(1<o?arguments[1]:void 0,r),i=2<o?arguments[2]:void 0,c=void 0===i?r:it(i,r);n<c;)t[n++]=e;return t};tt(tt.P,"Array",{fill:ln}),un("fill");var fn=Ko(5),dn="find",hn=!0;dn in[]&&Array(1)[dn](function(){hn=!1;}),tt(tt.P+tt.F*hn,"Array",{find:function(e){return fn(this,e,1<arguments.length?arguments[1]:void 0)}}),un(dn);var vn=Ko(6),kn="findIndex",Bn=!0;kn in[]&&Array(1)[kn](function(){Bn=!1;}),tt(tt.P+tt.F*Bn,"Array",{findIndex:function(e){return vn(this,e,1<arguments.length?arguments[1]:void 0)}}),un(kn);var pn=rt("species"),mn=function(e){var t=We[e];Ye&&t&&!t[pn]&&Ze.f(t,pn,{configurable:!0,get:function(){return this}});};mn("Array");var wn=function(e,t){return {value:t,done:!!e}},yn=qr(Array,"Array",function(e,t){this._t=E(e),this._i=0,this._k=t;},function(){var e=this._t,t=this._k,r=this._i++;return !e||r>=e.length?(this._t=void 0,wn(1)):wn(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values");Wr.Arguments=Wr.Array,un("keys"),un("values"),un("entries");var gn=function(){var e=v(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},Cn=Ze.f,Pn=st.f,bn=We.RegExp,Sn=bn,xn=bn.prototype,_n=/a/g,Mn=/a/g,En=new bn(_n)!==_n;if(Ye&&(!En||Ke(function(){return Mn[rt("match")]=!1,bn(_n)!=_n||bn(Mn)==Mn||"/a/i"!=bn(_n,"i")}))){bn=function(e,t){var r=this instanceof bn,o=to(e),n=void 0===t;return !r&&o&&e.constructor===bn&&n?e:Kt(En?new Sn(o&&!n?e.source:e,t):Sn((o=e instanceof bn)?e.source:e,o&&n?gn.call(e):t),r?this:xn,bn)};for(var On=function(t){t in bn||Cn(bn,t,{configurable:!0,get:function(){return Sn[t]},set:function(e){Sn[t]=e;}});},Ln=Pn(Sn),In=0;Ln.length>In;)On(Ln[In++]);(xn.constructor=bn).prototype=xn,w(We,"RegExp",bn);}mn("RegExp"),Ye&&"g"!=/./g.flags&&Ze.f(RegExp.prototype,"flags",{configurable:!0,get:gn});var Fn="toString",Nn=/./[Fn],An=function(e){w(RegExp.prototype,Fn,e,!0);};Ke(function(){return "/a/b"!=Nn.call({source:"a",flags:"b"})})?An(function(){var e=v(this);return "/".concat(e.source,"/","flags"in e?e.flags:!Ye&&e instanceof RegExp?gn.call(e):void 0)}):Nn.name!=Fn&&An(function(){return Nn.call(this)});var jn=function(t,e,r){var o=rt(t),n=r(M,o,""[t]),i=n[0],c=n[1];Ke(function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})&&(w(String.prototype,t,i),$e(RegExp.prototype,o,2==e?function(e,t){return c.call(e,this,t)}:function(e){return c.call(e,this)}));};jn("match",1,function(o,n,e){return [function(e){var t=o(this),r=null==e?void 0:e[n];return void 0!==r?r.call(e,t):new RegExp(e)[n](String(t))},e]}),jn("replace",2,function(n,i,c){return [function(e,t){var r=n(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,r,t):c.call(String(r),e,t)},c]}),jn("search",1,function(o,n,e){return [function(e){var t=o(this),r=null==e?void 0:e[n];return void 0!==r?r.call(e,t):new RegExp(e)[n](String(t))},e]}),jn("split",2,function(n,i,c){var h=to,v=c,k=[].push,e="split",B="length",p="lastIndex";if("c"=="abbc"[e](/(b)*/)[1]||4!="test"[e](/(?:)/,-1)[B]||2!="ab"[e](/(?:ab)*/)[B]||4!="."[e](/(.?)(.?)/)[B]||1<"."[e](/()()/)[B]||""[e](/.?/)[B]){var m=void 0===/()??/.exec("")[1];c=function(e,t){var r=String(this);if(void 0===e&&0===t)return [];if(!h(e))return v.call(r,e,t);var o,n,i,c,a,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,f=void 0===t?4294967295:t>>>0,d=new RegExp(e.source,u+"g");for(m||(o=new RegExp("^"+d.source+"$(?!\\s)",u));(n=d.exec(r))&&!(l<(i=n.index+n[0][B])&&(s.push(r.slice(l,n.index)),!m&&1<n[B]&&n[0].replace(o,function(){for(a=1;a<arguments[B]-2;a++)void 0===arguments[a]&&(n[a]=void 0);}),1<n[B]&&n.index<r[B]&&k.apply(s,n.slice(1)),c=n[0][B],l=i,s[B]>=f));)d[p]===n.index&&d[p]++;return l===r[B]?!c&&d.test("")||s.push(""):s.push(r.slice(l)),s[B]>f?s.slice(0,f):s};}else "0"[e](void 0,0)[B]&&(c=function(e,t){return void 0===e&&0===t?[]:v.call(this,e,t)});return [function(e,t){var r=n(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,r,t):c.call(String(r),e,t)},c]});var Rn,Tn,zn,Dn=function(e,t,r,o){if(!(e instanceof t)||void 0!==o&&o in e)throw TypeError(r+": incorrect invocation!");return e},Un=t(function(e){var d={},h={},t=e.exports=function(e,t,r,o,n){var i,c,a,s,u=n?function(){return e}:Fo(e),l=et(r,o,t?2:1),f=0;if("function"!=typeof u)throw TypeError(e+" is not iterable!");if(Oo(u)){for(i=nt(e.length);f<i;f++)if((s=t?l(v(c=e[f])[0],c[1]):l(e[f]))===d||s===h)return s}else for(a=u.call(e);!(c=a.next()).done;)if((s=_o(a,l,c.value,t))===d||s===h)return s};t.BREAK=d,t.RETURN=h;}),Gn=rt("species"),Xn=function(e,t){var r,o=v(e).constructor;return void 0===o||null==(r=v(o)[Gn])?t:l(r)},Wn=We.process,Vn=We.setImmediate,Kn=We.clearImmediate,Yn=We.MessageChannel,Jn=We.Dispatch,Hn=0,Zn={},qn="onreadystatechange",$n=function(){var e=+this;if(Zn.hasOwnProperty(e)){var t=Zn[e];delete Zn[e],t();}},Qn=function(e){$n.call(e.data);};Vn&&Kn||(Vn=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return Zn[++Hn]=function(){yt("function"==typeof e?e:Function(e),t);},Rn(Hn),Hn},Kn=function(e){delete Zn[e];},"process"==b(Wn)?Rn=function(e){Wn.nextTick(et($n,e,1));}:Jn&&Jn.now?Rn=function(e){Jn.now(et($n,e,1));}:Yn?(zn=(Tn=new Yn).port2,Tn.port1.onmessage=Qn,Rn=et(zn.postMessage,zn,1)):We.addEventListener&&"function"==typeof postMessage&&!We.importScripts?(Rn=function(e){We.postMessage(e+"","*");},We.addEventListener("message",Qn,!1)):Rn=qn in i("script")?function(e){J.appendChild(i("script"))[qn]=function(){J.removeChild(this),$n.call(e);};}:function(e){setTimeout(et($n,e,1),0);});var ei={set:Vn,clear:Kn},ti=ei.set,ri=We.MutationObserver||We.WebKitMutationObserver,oi=We.process,ni=We.Promise,ii="process"==b(oi),ci=function(){var r,o,n,e=function(){var e,t;for(ii&&(e=oi.domain)&&e.exit();r;){t=r.fn,r=r.next;try{t();}catch(e){throw r?n():o=void 0,e}}o=void 0,e&&e.enter();};if(ii)n=function(){oi.nextTick(e);};else if(!ri||We.navigator&&We.navigator.standalone)if(ni&&ni.resolve){var t=ni.resolve(void 0);n=function(){t.then(e);};}else n=function(){ti.call(We,e);};else {var i=!0,c=document.createTextNode("");new ri(e).observe(c,{characterData:!0}),n=function(){c.data=i=!i;};}return function(e){var t={fn:e,next:void 0};o&&(o.next=t),r||(r=t,n()),o=t;}};function ai(e){var r,o;this.promise=new e(function(e,t){if(void 0!==r||void 0!==o)throw TypeError("Bad Promise constructor");r=e,o=t;}),this.resolve=l(r),this.reject=l(o);}var si,ui,li,fi,di={f:function(e){return new ai(e)}},hi=function(e){try{return {e:!1,v:e()}}catch(e){return {e:!0,v:e}}},vi=We.navigator,ki=vi&&vi.userAgent||"",Bi=function(e,t){if(v(e),Je(t)&&t.constructor===e)return t;var r=di.f(e);return (0, r.resolve)(t),r.promise},pi=function(e,t,r){for(var o in t)w(e,o,t[o],r);return e},mi=ei.set,wi=ci(),yi="Promise",gi=We.TypeError,Ci=We.process,Pi=Ci&&Ci.versions,bi=Pi&&Pi.v8||"",Si=We[yi],xi="process"==mt(Ci),_i=function(){},Mi=ui=di.f,Ei=!!function(){try{var e=Si.resolve(1),t=(e.constructor={})[rt("species")]=function(e){e(_i,_i);};return (xi||"function"==typeof PromiseRejectionEvent)&&e.then(_i)instanceof t&&0!==bi.indexOf("6.6")&&-1===ki.indexOf("Chrome/66")}catch(e){}}(),Oi=function(e){var t;return !(!Je(e)||"function"!=typeof(t=e.then))&&t},Li=function(l,r){if(!l._n){l._n=!0;var o=l._c;wi(function(){for(var s=l._v,u=1==l._s,e=0,t=function(e){var t,r,o,n=u?e.ok:e.fail,i=e.resolve,c=e.reject,a=e.domain;try{n?(u||(2==l._h&&Ni(l),l._h=1),!0===n?t=s:(a&&a.enter(),t=n(s),a&&(a.exit(),o=!0)),t===e.promise?c(gi("Promise-chain cycle")):(r=Oi(t))?r.call(t,i,c):i(t)):c(s);}catch(e){a&&!o&&a.exit(),c(e);}};o.length>e;)t(o[e++]);l._c=[],l._n=!1,r&&!l._h&&Ii(l);});}},Ii=function(i){mi.call(We,function(){var e,t,r,o=i._v,n=Fi(i);if(n&&(e=hi(function(){xi?Ci.emit("unhandledRejection",o,i):(t=We.onunhandledrejection)?t({promise:i,reason:o}):(r=We.console)&&r.error&&r.error("Unhandled promise rejection",o);}),i._h=xi||Fi(i)?2:1),i._a=void 0,n&&e.e)throw e.v});},Fi=function(e){return 1!==e._h&&0===(e._a||e._c).length},Ni=function(t){mi.call(We,function(){var e;xi?Ci.emit("rejectionHandled",t):(e=We.onrejectionhandled)&&e({promise:t,reason:t._v});});},Ai=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),Li(t,!0));},ji=function(e){var r,o=this;if(!o._d){o._d=!0,o=o._w||o;try{if(o===e)throw gi("Promise can't be resolved itself");(r=Oi(e))?wi(function(){var t={_w:o,_d:!1};try{r.call(e,et(ji,t,1),et(Ai,t,1));}catch(e){Ai.call(t,e);}}):(o._v=e,o._s=1,Li(o,!1));}catch(e){Ai.call({_w:o,_d:!1},e);}}};Ei||(Si=function(e){Dn(this,Si,yi,"_h"),l(e),si.call(this);try{e(et(ji,this,1),et(Ai,this,1));}catch(e){Ai.call(this,e);}},(si=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1;}).prototype=pi(Si.prototype,{then:function(e,t){var r=Mi(Xn(this,Si));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=xi?Ci.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&Li(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),li=function(){var e=new si;this.promise=e,this.resolve=et(ji,e,1),this.reject=et(Ai,e,1);},di.f=Mi=function(e){return e===Si||e===fi?new li(e):ui(e)}),tt(tt.G+tt.W+tt.F*!Ei,{Promise:Si}),U(Si,yi),mn(yi),fi=k[yi],tt(tt.S+tt.F*!Ei,yi,{reject:function(e){var t=Mi(this);return (0, t.reject)(e),t.promise}}),tt(tt.S+tt.F*!Ei,yi,{resolve:function(e){return Bi(this,e)}}),tt(tt.S+tt.F*!(Ei&&jo(function(e){Si.all(e).catch(_i);})),yi,{all:function(e){var c=this,t=Mi(c),a=t.resolve,s=t.reject,r=hi(function(){var o=[],n=0,i=1;Un(e,!1,function(e){var t=n++,r=!1;o.push(void 0),i++,c.resolve(e).then(function(e){r||(r=!0,o[t]=e,--i||a(o));},s);}),--i||a(o);});return r.e&&s(r.v),t.promise},race:function(e){var t=this,r=Mi(t),o=r.reject,n=hi(function(){Un(e,!1,function(e){t.resolve(e).then(r.resolve,o);});});return n.e&&o(n.v),r.promise}});var Ri=function(e,t){if(!Je(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e},Ti=Ze.f,zi=m.fastKey,Di=Ye?"_s":"size",Ui=function(e,t){var r,o=zi(t);if("F"!==o)return e._i[o];for(r=e._f;r;r=r.n)if(r.k==t)return r},Gi={getConstructor:function(e,i,r,o){var n=e(function(e,t){Dn(e,n,i,"_i"),e._t=i,e._i=at(null),e._f=void 0,e._l=void 0,e[Di]=0,null!=t&&Un(t,r,e[o],e);});return pi(n.prototype,{clear:function(){for(var e=Ri(this,i),t=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete t[r.i];e._f=e._l=void 0,e[Di]=0;},delete:function(e){var t=Ri(this,i),r=Ui(t,e);if(r){var o=r.n,n=r.p;delete t._i[r.i],r.r=!0,n&&(n.n=o),o&&(o.p=n),t._f==r&&(t._f=o),t._l==r&&(t._l=n),t[Di]--;}return !!r},forEach:function(e){Ri(this,i);for(var t,r=et(e,1<arguments.length?arguments[1]:void 0,3);t=t?t.n:this._f;)for(r(t.v,t.k,this);t&&t.r;)t=t.p;},has:function(e){return !!Ui(Ri(this,i),e)}}),Ye&&Ti(n.prototype,"size",{get:function(){return Ri(this,i)[Di]}}),n},def:function(e,t,r){var o,n,i=Ui(e,t);return i?i.v=r:(e._l=i={i:n=zi(t,!0),k:t,v:r,p:o=e._l,n:void 0,r:!1},e._f||(e._f=i),o&&(o.n=i),e[Di]++,"F"!==n&&(e._i[n]=i)),e},getEntry:Ui,setStrong:function(e,r,t){qr(e,r,function(e,t){this._t=Ri(e,r),this._k=t,this._l=void 0;},function(){for(var e=this,t=e._k,r=e._l;r&&r.r;)r=r.p;return e._t&&(e._l=r=r?r.n:e._t._f)?wn(0,"keys"==t?r.k:"values"==t?r.v:[r.k,r.v]):(e._t=void 0,wn(1))},t?"entries":"values",!t,!0),mn(r);}},Xi=function(o,e,t,r,n,i){var c=We[o],a=c,s=n?"set":"add",u=a&&a.prototype,l={},f=function(e){var r=u[e];w(u,e,"delete"==e?function(e){return !(i&&!Je(e))&&r.call(this,0===e?0:e)}:"has"==e?function(e){return !(i&&!Je(e))&&r.call(this,0===e?0:e)}:"get"==e?function(e){return i&&!Je(e)?void 0:r.call(this,0===e?0:e)}:"add"==e?function(e){return r.call(this,0===e?0:e),this}:function(e,t){return r.call(this,0===e?0:e,t),this});};if("function"==typeof a&&(i||u.forEach&&!Ke(function(){(new a).entries().next();}))){var d=new a,h=d[s](i?{}:-0,1)!=d,v=Ke(function(){d.has(1);}),k=jo(function(e){new a(e);}),B=!i&&Ke(function(){for(var e=new a,t=5;t--;)e[s](t,t);return !e.has(-0)});k||(((a=e(function(e,t){Dn(e,a,o);var r=Kt(new c,e,a);return null!=t&&Un(t,n,r[s],r),r})).prototype=u).constructor=a),(v||B)&&(f("delete"),f("has"),n&&f("get")),(B||h)&&f(s),i&&u.clear&&delete u.clear;}else a=r.getConstructor(e,o,n,s),pi(a.prototype,t),m.NEED=!0;return U(a,o),l[o]=a,tt(tt.G+tt.W+tt.F*(a!=c),l),i||r.setStrong(a,o,n),a},Wi=Xi("Map",function(e){return function(){return e(this,0<arguments.length?arguments[0]:void 0)}},{get:function(e){var t=Gi.getEntry(Ri(this,"Map"),e);return t&&t.v},set:function(e,t){return Gi.def(Ri(this,"Map"),0===e?0:e,t)}},Gi,!0),Vi=Xi("Set",function(e){return function(){return e(this,0<arguments.length?arguments[0]:void 0)}},{add:function(e){return Gi.def(Ri(this,"Set"),e=0===e?0:e,e)}},Gi),Ki=m.getWeak,Yi=Ko(5),Ji=Ko(6),Hi=0,Zi=function(e){return e._l||(e._l=new qi)},qi=function(){this.a=[];},$i=function(e,t){return Yi(e.a,function(e){return e[0]===t})};qi.prototype={get:function(e){var t=$i(this,e);if(t)return t[1]},has:function(e){return !!$i(this,e)},set:function(e,t){var r=$i(this,e);r?r[1]=t:this.a.push([e,t]);},delete:function(t){var e=Ji(this.a,function(e){return e[0]===t});return ~e&&this.a.splice(e,1),!!~e}};var Qi={getConstructor:function(e,r,o,n){var i=e(function(e,t){Dn(e,i,r,"_i"),e._t=r,e._i=Hi++,e._l=void 0,null!=t&&Un(t,o,e[n],e);});return pi(i.prototype,{delete:function(e){if(!Je(e))return !1;var t=Ki(e);return !0===t?Zi(Ri(this,r)).delete(e):t&&Ve(t,this._i)&&delete t[this._i]},has:function(e){if(!Je(e))return !1;var t=Ki(e);return !0===t?Zi(Ri(this,r)).has(e):t&&Ve(t,this._i)}}),i},def:function(e,t,r){var o=Ki(v(t),!0);return !0===o?Zi(e).set(t,r):o[e._i]=r,e},ufstore:Zi},ec=t(function(e){var i,t=Ko(0),r="WeakMap",o=m.getWeak,c=Object.isExtensible,n=Qi.ufstore,a={},s=function(e){return function(){return e(this,0<arguments.length?arguments[0]:void 0)}},u={get:function(e){if(Je(e)){var t=o(e);return !0===t?n(Ri(this,r)).get(e):t?t[this._i]:void 0}},set:function(e,t){return Qi.def(Ri(this,r),e,t)}},l=e.exports=Xi(r,s,u,Qi,!0,!0);Ke(function(){return 7!=(new l).set((Object.freeze||Object)(a),7).get(a)})&&(i=Qi.getConstructor(s,r),dt(i.prototype,u),m.NEED=!0,t(["delete","has","get","set"],function(o){var e=l.prototype,n=e[o];w(e,o,function(e,t){if(!Je(e)||c(e))return n.call(this,e,t);this._f||(this._f=new i);var r=this._f[o](e,t);return "set"==o?this:r});}));}),tc="WeakSet";Xi(tc,function(e){return function(){return e(this,0<arguments.length?arguments[0]:void 0)}},{add:function(e){return Qi.def(Ri(this,tc),e,!0)}},Qi,!1,!0);for(var rc,oc=Qe("typed_array"),nc=Qe("view"),ic=!(!We.ArrayBuffer||!We.DataView),cc=ic,ac=0,sc="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");ac<9;)(rc=We[sc[ac++]])?($e(rc.prototype,oc,!0),$e(rc.prototype,nc,!0)):cc=!1;var uc={ABV:ic,CONSTR:cc,TYPED:oc,VIEW:nc},lc=function(e){if(void 0===e)return 0;var t=ot(e),r=nt(t);if(t!==r)throw RangeError("Wrong length!");return r},fc=t(function(e,t){var r=st.f,o=Ze.f,n="ArrayBuffer",i="DataView",c="prototype",f="Wrong index!",a=We[n],s=We[i],u=We.Math,d=We.RangeError,h=We.Infinity,l=a,v=u.abs,k=u.pow,B=u.floor,p=u.log,m=u.LN2,w="byteLength",y="byteOffset",g=Ye?"_b":"buffer",C=Ye?"_l":w,P=Ye?"_o":y;function b(e,t,r){var o,n,i,c=new Array(r),a=8*r-t-1,s=(1<<a)-1,u=s>>1,l=23===t?k(2,-24)-k(2,-77):0,f=0,d=e<0||0===e&&1/e<0?1:0;for((e=v(e))!=e||e===h?(n=e!=e?1:0,o=s):(o=B(p(e)/m),e*(i=k(2,-o))<1&&(o--,i*=2),2<=(e+=1<=o+u?l/i:l*k(2,1-u))*i&&(o++,i/=2),s<=o+u?(n=0,o=s):1<=o+u?(n=(e*i-1)*k(2,t),o+=u):(n=e*k(2,u-1)*k(2,t),o=0));8<=t;c[f++]=255&n,n/=256,t-=8);for(o=o<<t|n,a+=t;0<a;c[f++]=255&o,o/=256,a-=8);return c[--f]|=128*d,c}function S(e,t,r){var o,n=8*r-t-1,i=(1<<n)-1,c=i>>1,a=n-7,s=r-1,u=e[s--],l=127&u;for(u>>=7;0<a;l=256*l+e[s],s--,a-=8);for(o=l&(1<<-a)-1,l>>=-a,a+=t;0<a;o=256*o+e[s],s--,a-=8);if(0===l)l=1-c;else {if(l===i)return o?NaN:u?-h:h;o+=k(2,t),l-=c;}return (u?-1:1)*o*k(2,l-t)}function x(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function _(e){return [255&e]}function M(e){return [255&e,e>>8&255]}function E(e){return [255&e,e>>8&255,e>>16&255,e>>24&255]}function O(e){return b(e,52,8)}function L(e){return b(e,23,4)}function I(e,t,r){o(e[c],t,{get:function(){return this[r]}});}function F(e,t,r,o){var n=lc(+r);if(n+t>e[C])throw d(f);var i=e[g]._b,c=n+e[P],a=i.slice(c,c+t);return o?a:a.reverse()}function N(e,t,r,o,n,i){var c=lc(+r);if(c+t>e[C])throw d(f);for(var a=e[g]._b,s=c+e[P],u=o(+n),l=0;l<t;l++)a[s+l]=u[i?l:t-l-1];}if(uc.ABV){if(!Ke(function(){a(1);})||!Ke(function(){new a(-1);})||Ke(function(){return new a,new a(1.5),new a(NaN),a.name!=n})){for(var A,j=(a=function(e){return Dn(this,a),new l(lc(e))})[c]=l[c],R=r(l),T=0;R.length>T;)(A=R[T++])in a||$e(a,A,l[A]);j.constructor=a;}var z=new s(new a(2)),D=s[c].setInt8;z.setInt8(0,2147483648),z.setInt8(1,2147483649),!z.getInt8(0)&&z.getInt8(1)||pi(s[c],{setInt8:function(e,t){D.call(this,e,t<<24>>24);},setUint8:function(e,t){D.call(this,e,t<<24>>24);}},!0);}else a=function(e){Dn(this,a,n);var t=lc(e);this._b=ln.call(new Array(t),0),this[C]=t;},s=function(e,t,r){Dn(this,s,i),Dn(e,a,i);var o=e[C],n=ot(t);if(n<0||o<n)throw d("Wrong offset!");if(o<n+(r=void 0===r?o-n:nt(r)))throw d("Wrong length!");this[g]=e,this[P]=n,this[C]=r;},Ye&&(I(a,w,"_l"),I(s,"buffer","_b"),I(s,w,"_l"),I(s,y,"_o")),pi(s[c],{getInt8:function(e){return F(this,1,e)[0]<<24>>24},getUint8:function(e){return F(this,1,e)[0]},getInt16:function(e){var t=F(this,2,e,arguments[1]);return (t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=F(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return x(F(this,4,e,arguments[1]))},getUint32:function(e){return x(F(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return S(F(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return S(F(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){N(this,1,e,_,t);},setUint8:function(e,t){N(this,1,e,_,t);},setInt16:function(e,t){N(this,2,e,M,t,arguments[2]);},setUint16:function(e,t){N(this,2,e,M,t,arguments[2]);},setInt32:function(e,t){N(this,4,e,E,t,arguments[2]);},setUint32:function(e,t){N(this,4,e,E,t,arguments[2]);},setFloat32:function(e,t){N(this,4,e,L,t,arguments[2]);},setFloat64:function(e,t){N(this,8,e,O,t,arguments[2]);}});U(a,n),U(s,i),$e(s[c],uc.VIEW,!0),t[n]=a,t[i]=s;}),dc=We.ArrayBuffer,hc=fc.ArrayBuffer,vc=fc.DataView,kc=uc.ABV&&dc.isView,Bc=hc.prototype.slice,pc=uc.VIEW,mc="ArrayBuffer";tt(tt.G+tt.W+tt.F*(dc!==hc),{ArrayBuffer:hc}),tt(tt.S+tt.F*!uc.CONSTR,mc,{isView:function(e){return kc&&kc(e)||Je(e)&&pc in e}}),tt(tt.P+tt.U+tt.F*Ke(function(){return !new hc(2).slice(1,void 0).byteLength}),mc,{slice:function(e,t){if(void 0!==Bc&&void 0===t)return Bc.call(v(this),e);for(var r=v(this).byteLength,o=it(e,r),n=it(void 0===t?r:t,r),i=new(Xn(this,hc))(nt(n-o)),c=new vc(this),a=new vc(i),s=0;o<n;)a.setUint8(s++,c.getUint8(o++));return i}}),mn(mc),tt(tt.G+tt.W+tt.F*!uc.ABV,{DataView:fc.DataView});var wc=t(function(e){if(Ye){var p=We,m=Ke,w=tt,y=uc,t=fc,d=et,g=Dn,r=qe,C=$e,o=pi,n=ot,P=nt,b=lc,i=it,c=He,a=Ve,S=mt,x=Je,h=lt,v=Oo,_=at,M=ft,E=st.f,k=Fo,s=Qe,u=rt,l=Ko,f=ct,B=Xn,O=yn,L=Wr,I=jo,F=mn,N=ln,A=cn,j=Ze,R=ut,T=j.f,z=R.f,D=p.RangeError,U=p.TypeError,G=p.Uint8Array,X="ArrayBuffer",W="Shared"+X,V="BYTES_PER_ELEMENT",K="prototype",Y=Array[K],J=t.ArrayBuffer,H=t.DataView,Z=l(0),q=l(2),$=l(3),Q=l(4),ee=l(5),te=l(6),re=f(!0),oe=f(!1),ne=O.values,ie=O.keys,ce=O.entries,ae=Y.lastIndexOf,se=Y.reduce,ue=Y.reduceRight,le=Y.join,fe=Y.sort,de=Y.slice,he=Y.toString,ve=Y.toLocaleString,ke=u("iterator"),Be=u("toStringTag"),pe=s("typed_constructor"),me=s("def_constructor"),we=y.CONSTR,ye=y.TYPED,ge=y.VIEW,Ce="Wrong length!",Pe=l(1,function(e,t){return Me(B(e,e[me]),t)}),be=m(function(){return 1===new G(new Uint16Array([1]).buffer)[0]}),Se=!!G&&!!G[K].set&&m(function(){new G(1).set({});}),xe=function(e,t){var r=n(e);if(r<0||r%t)throw D("Wrong offset!");return r},_e=function(e){if(x(e)&&ye in e)return e;throw U(e+" is not a typed array!")},Me=function(e,t){if(!(x(e)&&pe in e))throw U("It is not a typed array constructor!");return new e(t)},Ee=function(e,t){return Oe(B(e,e[me]),t)},Oe=function(e,t){for(var r=0,o=t.length,n=Me(e,o);r<o;)n[r]=t[r++];return n},Le=function(e,t,r){T(e,t,{get:function(){return this._d[r]}});},Ie=function(e){var t,r,o,n,i,c,a=h(e),s=arguments.length,u=1<s?arguments[1]:void 0,l=void 0!==u,f=k(a);if(null!=f&&!v(f)){for(c=f.call(a),o=[],t=0;!(i=c.next()).done;t++)o.push(i.value);a=o;}for(l&&2<s&&(u=d(u,arguments[2],2)),t=0,r=P(a.length),n=Me(this,r);t<r;t++)n[t]=l?u(a[t],t):a[t];return n},Fe=function(){for(var e=0,t=arguments.length,r=Me(this,t);e<t;)r[e]=arguments[e++];return r},Ne=!!G&&m(function(){ve.call(new G(1));}),Ae=function(){return ve.apply(Ne?de.call(_e(this)):_e(this),arguments)},je={copyWithin:function(e,t){return A.call(_e(this),e,t,2<arguments.length?arguments[2]:void 0)},every:function(e){return Q(_e(this),e,1<arguments.length?arguments[1]:void 0)},fill:function(e){return N.apply(_e(this),arguments)},filter:function(e){return Ee(this,q(_e(this),e,1<arguments.length?arguments[1]:void 0))},find:function(e){return ee(_e(this),e,1<arguments.length?arguments[1]:void 0)},findIndex:function(e){return te(_e(this),e,1<arguments.length?arguments[1]:void 0)},forEach:function(e){Z(_e(this),e,1<arguments.length?arguments[1]:void 0);},indexOf:function(e){return oe(_e(this),e,1<arguments.length?arguments[1]:void 0)},includes:function(e){return re(_e(this),e,1<arguments.length?arguments[1]:void 0)},join:function(e){return le.apply(_e(this),arguments)},lastIndexOf:function(e){return ae.apply(_e(this),arguments)},map:function(e){return Pe(_e(this),e,1<arguments.length?arguments[1]:void 0)},reduce:function(e){return se.apply(_e(this),arguments)},reduceRight:function(e){return ue.apply(_e(this),arguments)},reverse:function(){for(var e,t=this,r=_e(t).length,o=Math.floor(r/2),n=0;n<o;)e=t[n],t[n++]=t[--r],t[r]=e;return t},some:function(e){return $(_e(this),e,1<arguments.length?arguments[1]:void 0)},sort:function(e){return fe.call(_e(this),e)},subarray:function(e,t){var r=_e(this),o=r.length,n=i(e,o);return new(B(r,r[me]))(r.buffer,r.byteOffset+n*r.BYTES_PER_ELEMENT,P((void 0===t?o:i(t,o))-n))}},Re=function(e,t){return Ee(this,de.call(_e(this),e,t))},Te=function(e){_e(this);var t=xe(arguments[1],1),r=this.length,o=h(e),n=P(o.length),i=0;if(r<n+t)throw D(Ce);for(;i<n;)this[t+i]=o[i++];},ze={entries:function(){return ce.call(_e(this))},keys:function(){return ie.call(_e(this))},values:function(){return ne.call(_e(this))}},De=function(e,t){return x(e)&&e[ye]&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},Ue=function(e,t){return De(e,t=c(t,!0))?r(2,e[t]):z(e,t)},Ge=function(e,t,r){return !(De(e,t=c(t,!0))&&x(r)&&a(r,"value"))||a(r,"get")||a(r,"set")||r.configurable||a(r,"writable")&&!r.writable||a(r,"enumerable")&&!r.enumerable?T(e,t,r):(e[t]=r.value,e)};we||(R.f=Ue,j.f=Ge),w(w.S+w.F*!we,"Object",{getOwnPropertyDescriptor:Ue,defineProperty:Ge}),m(function(){he.call({});})&&(he=ve=function(){return le.call(this)});var Xe=o({},je);o(Xe,ze),C(Xe,ke,ze.values),o(Xe,{slice:Re,set:Te,constructor:function(){},toString:he,toLocaleString:Ae}),Le(Xe,"buffer","b"),Le(Xe,"byteOffset","o"),Le(Xe,"byteLength","l"),Le(Xe,"length","e"),T(Xe,Be,{get:function(){return this[ye]}}),e.exports=function(e,f,t,i){var d=e+((i=!!i)?"Clamped":"")+"Array",r="get"+e,c="set"+e,h=p[d],a=h||{},o=h&&M(h),n=!h||!y.ABV,s={},u=h&&h[K],v=function(e,n){T(e,n,{get:function(){return e=n,(t=this._d).v[r](e*f+t.o,be);var e,t;},set:function(e){return t=n,r=e,o=this._d,i&&(r=(r=Math.round(r))<0?0:255<r?255:255&r),void o.v[c](t*f+o.o,r,be);var t,r,o;},enumerable:!0});};n?(h=t(function(e,t,r,o){g(e,h,d,"_d");var n,i,c,a,s=0,u=0;if(x(t)){if(!(t instanceof J||(a=S(t))==X||a==W))return ye in t?Oe(h,t):Ie.call(h,t);n=t,u=xe(r,f);var l=t.byteLength;if(void 0===o){if(l%f)throw D(Ce);if((i=l-u)<0)throw D(Ce)}else if(l<(i=P(o)*f)+u)throw D(Ce);c=i/f;}else c=b(t),n=new J(i=c*f);for(C(e,"_d",{b:n,o:u,l:i,e:c,v:new H(n)});s<c;)v(e,s++);}),u=h[K]=_(Xe),C(u,"constructor",h)):m(function(){h(1);})&&m(function(){new h(-1);})&&I(function(e){new h,new h(null),new h(1.5),new h(e);},!0)||(h=t(function(e,t,r,o){var n;return g(e,h,d),x(t)?t instanceof J||(n=S(t))==X||n==W?void 0!==o?new a(t,xe(r,f),o):void 0!==r?new a(t,xe(r,f)):new a(t):ye in t?Oe(h,t):Ie.call(h,t):new a(b(t))}),Z(o!==Function.prototype?E(a).concat(E(o)):E(a),function(e){e in h||C(h,e,a[e]);}),(h[K]=u).constructor=h);var l=u[ke],k=!!l&&("values"==l.name||null==l.name),B=ze.values;C(h,pe,!0),C(u,ye,d),C(u,ge,!0),C(u,me,h),(i?new h(1)[Be]==d:Be in u)||T(u,Be,{get:function(){return d}}),s[d]=h,w(w.G+w.W+w.F*(h!=a),s),w(w.S,d,{BYTES_PER_ELEMENT:f}),w(w.S+w.F*m(function(){a.of.call(h,1);}),d,{from:Ie,of:Fe}),V in u||C(u,V,f),w(w.P,d,je),F(d),w(w.P+w.F*Se,d,{set:Te}),w(w.P+w.F*!k,d,ze),u.toString!=he&&(u.toString=he),w(w.P+w.F*m(function(){new h(1).slice();}),d,{slice:Re}),w(w.P+w.F*(m(function(){return [1,2].toLocaleString()!=new h([1,2]).toLocaleString()})||!m(function(){u.toLocaleString.call([1,2]);})),d,{toLocaleString:Ae}),L[d]=k?l:B,k||C(u,ke,B);};}else e.exports=function(){};});wc("Int8",1,function(o){return function(e,t,r){return o(this,e,t,r)}}),wc("Uint8",1,function(o){return function(e,t,r){return o(this,e,t,r)}}),wc("Uint8",1,function(o){return function(e,t,r){return o(this,e,t,r)}},!0),wc("Int16",2,function(o){return function(e,t,r){return o(this,e,t,r)}}),wc("Uint16",2,function(o){return function(e,t,r){return o(this,e,t,r)}}),wc("Int32",4,function(o){return function(e,t,r){return o(this,e,t,r)}}),wc("Uint32",4,function(o){return function(e,t,r){return o(this,e,t,r)}}),wc("Float32",4,function(o){return function(e,t,r){return o(this,e,t,r)}}),wc("Float64",8,function(o){return function(e,t,r){return o(this,e,t,r)}});var yc=(We.Reflect||{}).apply,gc=Function.apply;tt(tt.S+tt.F*!Ke(function(){yc(function(){});}),"Reflect",{apply:function(e,t,r){var o=l(e),n=v(r);return yc?yc(o,t,n):gc.call(o,t,n)}});var Cc=(We.Reflect||{}).construct,Pc=Ke(function(){function e(){}return !(Cc(function(){},[],e)instanceof e)}),bc=!Ke(function(){Cc(function(){});});tt(tt.S+tt.F*(Pc||bc),"Reflect",{construct:function(e,t){l(e),v(t);var r=arguments.length<3?e:l(arguments[2]);if(bc&&!Pc)return Cc(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var o=[null];return o.push.apply(o,t),new(Pt.apply(e,o))}var n=r.prototype,i=at(Je(n)?n:Object.prototype),c=Function.apply.call(e,i,t);return Je(c)?c:i}}),tt(tt.S+tt.F*Ke(function(){Reflect.defineProperty(Ze.f({},1,{value:1}),1,{value:2});}),"Reflect",{defineProperty:function(e,t,r){v(e),t=He(t,!0),v(r);try{return Ze.f(e,t,r),!0}catch(e){return !1}}});var Sc=ut.f;tt(tt.S,"Reflect",{deleteProperty:function(e,t){var r=Sc(v(e),t);return !(r&&!r.configurable)&&delete e[t]}});var xc=function(e){this._t=v(e),this._i=0;var t,r=this._k=[];for(t in e)r.push(t);};Kr(xc,"Object",function(){var e,t=this._k;do{if(this._i>=t.length)return {value:void 0,done:!0}}while(!((e=t[this._i++])in this._t));return {value:e,done:!1}}),tt(tt.S,"Reflect",{enumerate:function(e){return new xc(e)}}),tt(tt.S,"Reflect",{get:function e(t,r){var o,n,i=arguments.length<3?t:arguments[2];return v(t)===i?t[r]:(o=ut.f(t,r))?Ve(o,"value")?o.value:void 0!==o.get?o.get.call(i):void 0:Je(n=ft(t))?e(n,r,i):void 0}}),tt(tt.S,"Reflect",{getOwnPropertyDescriptor:function(e,t){return ut.f(v(e),t)}}),tt(tt.S,"Reflect",{getPrototypeOf:function(e){return ft(v(e))}}),tt(tt.S,"Reflect",{has:function(e,t){return t in e}});var _c=Object.isExtensible;tt(tt.S,"Reflect",{isExtensible:function(e){return v(e),!_c||_c(e)}});var Mc=We.Reflect,Ec=Mc&&Mc.ownKeys||function(e){var t=st.f(v(e)),r=X.f;return r?t.concat(r(e)):t};tt(tt.S,"Reflect",{ownKeys:Ec});var Oc=Object.preventExtensions;tt(tt.S,"Reflect",{preventExtensions:function(e){v(e);try{return Oc&&Oc(e),!0}catch(e){return !1}}}),tt(tt.S,"Reflect",{set:function e(t,r,o){var n,i,c=arguments.length<4?t:arguments[3],a=ut.f(v(t),r);if(!a){if(Je(i=ft(t)))return e(i,r,o,c);a=qe(0);}if(Ve(a,"value")){if(!1===a.writable||!Je(c))return !1;if(n=ut.f(c,r)){if(n.get||n.set||!1===n.writable)return !1;n.value=o,Ze.f(c,r,n);}else Ze.f(c,r,qe(0,o));return !0}return void 0!==a.set&&(a.set.call(c,o),!0)}}),kt&&tt(tt.S,"Reflect",{setPrototypeOf:function(e,t){kt.check(e,t);try{return kt.set(e,t),!0}catch(e){return !1}}});var Lc=ct(!0);tt(tt.P,"Array",{includes:function(e){return Lc(this,e,1<arguments.length?arguments[1]:void 0)}}),un("includes");var Ic=rt("isConcatSpreadable");var Fc=function e(t,r,o,n,i,c,a,s){for(var u,l,f=i,d=0,h=!!a&&et(a,s,3);d<n;){if(d in o){if(u=h?h(o[d],d,r):o[d],l=!1,Je(u)&&(l=void 0!==(l=u[Ic])?!!l:V(u)),l&&0<c)f=e(t,r,u,nt(u.length),f,c-1)-1;else {if(9007199254740991<=f)throw TypeError();t[f]=u;}f++;}d++;}return f};tt(tt.P,"Array",{flatMap:function(e){var t,r,o=lt(this);return l(e),t=nt(o.length),r=Vo(o,0),Fc(r,o,o,t,0,1,e,arguments[1]),r}}),un("flatMap"),tt(tt.P,"Array",{flatten:function(){var e=arguments[0],t=lt(this),r=nt(t.length),o=Vo(t,0);return Fc(o,t,t,r,0,void 0===e?1:ot(e)),o}}),un("flatten");var Nc=Xr(!0);tt(tt.P,"String",{at:function(e){return Nc(this,e)}});var Ac=function(e,t,r,o){var n=String(M(e)),i=n.length,c=void 0===r?" ":String(r),a=nt(t);if(a<=i||""==c)return n;var s=a-i,u=sr.call(c,Math.ceil(s/c.length));return u.length>s&&(u=u.slice(0,s)),o?u+n:n+u};tt(tt.P+tt.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(ki),"String",{padStart:function(e){return Ac(this,e,1<arguments.length?arguments[1]:void 0,!0)}}),tt(tt.P+tt.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(ki),"String",{padEnd:function(e){return Ac(this,e,1<arguments.length?arguments[1]:void 0,!1)}}),Rt("trimLeft",function(e){return function(){return e(this,1)}},"trimStart"),Rt("trimRight",function(e){return function(){return e(this,2)}},"trimEnd");var jc=RegExp.prototype,Rc=function(e,t){this._r=e,this._s=t;};Kr(Rc,"RegExp String",function(){var e=this._r.exec(this._s);return {value:e,done:null===e}}),tt(tt.P,"String",{matchAll:function(e){if(M(this),!to(e))throw TypeError(e+" is not a regexp!");var t=String(this),r="flags"in jc?String(e.flags):gn.call(e),o=new RegExp(e.source,~r.indexOf("g")?r:"g"+r);return o.lastIndex=nt(e.lastIndex),new Rc(o,t)}}),C("asyncIterator"),C("observable"),tt(tt.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,o=E(e),n=ut.f,i=Ec(o),c={},a=0;i.length>a;)void 0!==(r=n(o,t=i[a++]))&&Lo(c,t,r);return c}});var Tc=W.f,zc=function(a){return function(e){for(var t,r=E(e),o=G(r),n=o.length,i=0,c=[];i<n;)Tc.call(r,t=o[i++])&&c.push(a?[t,r[t]]:r[t]);return c}},Dc=zc(!1);tt(tt.S,"Object",{values:function(e){return Dc(e)}});var Uc=zc(!0);tt(tt.S,"Object",{entries:function(e){return Uc(e)}});var Gc=!Ke(function(){var e=Math.random();__defineSetter__.call(null,e,function(){}),delete We[e];});Ye&&tt(tt.P+Gc,"Object",{__defineGetter__:function(e,t){Ze.f(lt(this),e,{get:l(t),enumerable:!0,configurable:!0});}}),Ye&&tt(tt.P+Gc,"Object",{__defineSetter__:function(e,t){Ze.f(lt(this),e,{set:l(t),enumerable:!0,configurable:!0});}});var Xc=ut.f;Ye&&tt(tt.P+Gc,"Object",{__lookupGetter__:function(e){var t,r=lt(this),o=He(e,!0);do{if(t=Xc(r,o))return t.get}while(r=ft(r))}});var Wc=ut.f;Ye&&tt(tt.P+Gc,"Object",{__lookupSetter__:function(e){var t,r=lt(this),o=He(e,!0);do{if(t=Wc(r,o))return t.set}while(r=ft(r))}});var Vc=function(e,t){var r=[];return Un(e,!1,r.push,r,t),r},Kc=function(e){return function(){if(mt(this)!=e)throw TypeError(e+"#toJSON isn't generic");return Vc(this)}};tt(tt.P+tt.R,"Map",{toJSON:Kc("Map")}),tt(tt.P+tt.R,"Set",{toJSON:Kc("Set")});var Yc=function(e){tt(tt.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}});};Yc("Map"),Yc("Set"),Yc("WeakMap"),Yc("WeakSet");var Jc=function(e){tt(tt.S,e,{from:function(e){var t,r,o,n,i=arguments[1];return l(this),(t=void 0!==i)&&l(i),null==e?new this:(r=[],t?(o=0,n=et(i,arguments[2],2),Un(e,!1,function(e){r.push(n(e,o++));})):Un(e,!1,r.push,r),new this(r))}});};Jc("Map"),Jc("Set"),Jc("WeakMap"),Jc("WeakSet"),tt(tt.G,{global:We}),tt(tt.S,"System",{global:We}),tt(tt.S,"Error",{isError:function(e){return "Error"===b(e)}}),tt(tt.S,"Math",{clamp:function(e,t,r){return Math.min(r,Math.max(t,e))}}),tt(tt.S,"Math",{DEG_PER_RAD:Math.PI/180});var Hc=180/Math.PI;tt(tt.S,"Math",{degrees:function(e){return e*Hc}});var Zc=Math.scale||function(e,t,r,o,n){return 0===arguments.length||e!=e||t!=t||r!=r||o!=o||n!=n?NaN:e===1/0||e===-1/0?e:(e-t)*(n-o)/(r-t)+o};tt(tt.S,"Math",{fscale:function(e,t,r,o,n){return jr(Zc(e,t,r,o,n))}}),tt(tt.S,"Math",{iaddh:function(e,t,r,o){var n=e>>>0,i=r>>>0;return (t>>>0)+(o>>>0)+((n&i|(n|i)&~(n+i>>>0))>>>31)|0}}),tt(tt.S,"Math",{isubh:function(e,t,r,o){var n=e>>>0,i=r>>>0;return (t>>>0)-(o>>>0)-((~n&i|~(n^i)&n-i>>>0)>>>31)|0}}),tt(tt.S,"Math",{imulh:function(e,t){var r=+e,o=+t,n=65535&r,i=65535&o,c=r>>16,a=o>>16,s=(c*i>>>0)+(n*i>>>16);return c*a+(s>>16)+((n*a>>>0)+(65535&s)>>16)}}),tt(tt.S,"Math",{RAD_PER_DEG:180/Math.PI});var qc=Math.PI/180;tt(tt.S,"Math",{radians:function(e){return e*qc}}),tt(tt.S,"Math",{scale:Zc}),tt(tt.S,"Math",{umulh:function(e,t){var r=+e,o=+t,n=65535&r,i=65535&o,c=r>>>16,a=o>>>16,s=(c*i>>>0)+(n*i>>>16);return c*a+(s>>>16)+((n*a>>>0)+(65535&s)>>>16)}}),tt(tt.S,"Math",{signbit:function(e){return (e=+e)!=e?e:0==e?1/e==1/0:0<e}}),tt(tt.P+tt.R,"Promise",{finally:function(t){var r=Xn(this,k.Promise||We.Promise),e="function"==typeof t;return this.then(e?function(e){return Bi(r,t()).then(function(){return e})}:t,e?function(e){return Bi(r,t()).then(function(){throw e})}:t)}}),tt(tt.S,"Promise",{try:function(e){var t=di.f(this),r=hi(e);return (r.e?t.reject:t.resolve)(r.v),t.promise}});var $c=f("metadata"),Qc=$c.store||($c.store=new ec),ea=function(e,t,r){var o=Qc.get(e);if(!o){if(!r)return;Qc.set(e,o=new Wi);}var n=o.get(t);if(!n){if(!r)return;o.set(t,n=new Wi);}return n},ta={store:Qc,map:ea,has:function(e,t,r){var o=ea(t,r,!1);return void 0!==o&&o.has(e)},get:function(e,t,r){var o=ea(t,r,!1);return void 0===o?void 0:o.get(e)},set:function(e,t,r,o){ea(r,o,!0).set(e,t);},keys:function(e,t){var r=ea(e,t,!1),o=[];return r&&r.forEach(function(e,t){o.push(t);}),o},key:function(e){return void 0===e||"symbol"==typeof e?e:String(e)},exp:function(e){tt(tt.S,"Reflect",e);}},ra=ta.key,oa=ta.set;ta.exp({defineMetadata:function(e,t,r,o){oa(e,t,v(r),ra(o));}});var na=ta.key,ia=ta.map,ca=ta.store;ta.exp({deleteMetadata:function(e,t){var r=arguments.length<3?void 0:na(arguments[2]),o=ia(v(t),r,!1);if(void 0===o||!o.delete(e))return !1;if(o.size)return !0;var n=ca.get(t);return n.delete(r),!!n.size||ca.delete(t)}});var aa=ta.has,sa=ta.get,ua=ta.key,la=function(e,t,r){if(aa(e,t,r))return sa(e,t,r);var o=ft(t);return null!==o?la(e,o,r):void 0};ta.exp({getMetadata:function(e,t){return la(e,v(t),arguments.length<3?void 0:ua(arguments[2]))}});var fa=ta.keys,da=ta.key,ha=function(e,t){var r=fa(e,t),o=ft(e);if(null===o)return r;var n=ha(o,t);return n.length?r.length?Vc(new Vi(r.concat(n))):n:r};ta.exp({getMetadataKeys:function(e){return ha(v(e),arguments.length<2?void 0:da(arguments[1]))}});var va=ta.get,ka=ta.key;ta.exp({getOwnMetadata:function(e,t){return va(e,v(t),arguments.length<3?void 0:ka(arguments[2]))}});var Ba=ta.keys,pa=ta.key;ta.exp({getOwnMetadataKeys:function(e){return Ba(v(e),arguments.length<2?void 0:pa(arguments[1]))}});var ma=ta.has,wa=ta.key,ya=function(e,t,r){if(ma(e,t,r))return !0;var o=ft(t);return null!==o&&ya(e,o,r)};ta.exp({hasMetadata:function(e,t){return ya(e,v(t),arguments.length<3?void 0:wa(arguments[2]))}});var ga=ta.has,Ca=ta.key;ta.exp({hasOwnMetadata:function(e,t){return ga(e,v(t),arguments.length<3?void 0:Ca(arguments[2]))}});var Pa=ta.key,ba=ta.set;ta.exp({metadata:function(r,o){return function(e,t){ba(r,o,(void 0!==t?v:l)(e),Pa(t));}}});var Sa=ci(),xa=We.process,_a="process"==b(xa);tt(tt.G,{asap:function(e){var t=_a&&xa.domain;Sa(t?t.bind(e):e);}});var Ma=ci(),Ea=rt("observable"),Oa=Un.RETURN,La=function(e){return null==e?void 0:l(e)},Ia=function(e){var t=e._c;t&&(e._c=void 0,t());},Fa=function(e){return void 0===e._o},Na=function(e){Fa(e)||(e._o=void 0,Ia(e));},Aa=function(t,e){v(t),this._c=void 0,this._o=t,t=new ja(this);try{var r=e(t),o=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){o.unsubscribe();}:l(r),this._c=r);}catch(e){return void t.error(e)}Fa(this)&&Ia(this);};Aa.prototype=pi({},{unsubscribe:function(){Na(this);}});var ja=function(e){this._s=e;};ja.prototype=pi({},{next:function(e){var t=this._s;if(!Fa(t)){var r=t._o;try{var o=La(r.next);if(o)return o.call(r,e)}catch(e){try{Na(t);}finally{throw e}}}},error:function(e){var t=this._s;if(Fa(t))throw e;var r=t._o;t._o=void 0;try{var o=La(r.error);if(!o)throw e;e=o.call(r,e);}catch(e){try{Ia(t);}finally{throw e}}return Ia(t),e},complete:function(e){var t=this._s;if(!Fa(t)){var r=t._o;t._o=void 0;try{var o=La(r.complete);e=o?o.call(r,e):void 0;}catch(e){try{Ia(t);}finally{throw e}}return Ia(t),e}}});var Ra=function(e){Dn(this,Ra,"Observable","_f")._f=l(e);};pi(Ra.prototype,{subscribe:function(e){return new Aa(e,this._f)},forEach:function(o){var n=this;return new(k.Promise||We.Promise)(function(e,t){l(o);var r=n.subscribe({next:function(e){try{return o(e)}catch(e){t(e),r.unsubscribe();}},error:t,complete:e});})}}),pi(Ra,{from:function(e){var t="function"==typeof this?this:Ra,r=La(v(e)[Ea]);if(r){var o=v(r.call(e));return o.constructor===t?o:new t(function(e){return o.subscribe(e)})}return new t(function(t){var r=!1;return Ma(function(){if(!r){try{if(Un(e,!1,function(e){if(t.next(e),r)return Oa})===Oa)return}catch(e){if(r)throw e;return void t.error(e)}t.complete();}}),function(){r=!0;}})},of:function(){for(var e=0,t=arguments.length,o=new Array(t);e<t;)o[e]=arguments[e++];return new("function"==typeof this?this:Ra)(function(t){var r=!1;return Ma(function(){if(!r){for(var e=0;e<o.length;++e)if(t.next(o[e]),r)return;t.complete();}}),function(){r=!0;}})}}),$e(Ra.prototype,Ea,function(){return this}),tt(tt.G,{Observable:Ra}),mn("Observable");var Ta=[].slice,za=/MSIE .\./.test(ki),Da=function(n){return function(e,t){var r=2<arguments.length,o=!!r&&Ta.call(arguments,2);return n(r?function(){("function"==typeof e?e:Function(e)).apply(this,o);}:e,t)}};tt(tt.G+tt.B+tt.F*za,{setTimeout:Da(We.setTimeout),setInterval:Da(We.setInterval)}),tt(tt.G+tt.B,{setImmediate:ei.set,clearImmediate:ei.clear});for(var Ua=rt("iterator"),Ga=rt("toStringTag"),Xa=Wr.Array,Wa={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Va=G(Wa),Ka=0;Ka<Va.length;Ka++){var Ya,Ja=Va[Ka],Ha=Wa[Ja],Za=We[Ja],qa=Za&&Za.prototype;if(qa&&(qa[Ua]||$e(qa,Ua,Xa),qa[Ga]||$e(qa,Ga,Ja),Wr[Ja]=Xa,Ha))for(Ya in yn)qa[Ya]||w(qa,Ya,yn[Ya],!0);}t(function(L){!function(e){var s,t=Object.prototype,u=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag",c=e.regeneratorRuntime;if(c)L.exports=c;else {(c=e.regeneratorRuntime=L.exports).wrap=m;var f="suspendedStart",d="suspendedYield",h="executing",v="completed",k={},a={};a[n]=function(){return this};var l=Object.getPrototypeOf,B=l&&l(l(E([])));B&&B!==t&&u.call(B,n)&&(a=B);var p=C.prototype=y.prototype=Object.create(a);g.prototype=p.constructor=C,C.constructor=g,C[i]=g.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return !!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,C):(e.__proto__=C,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(p),e},c.awrap=function(e){return {__await:e}},P(b.prototype),b.prototype[o]=function(){return this},c.AsyncIterator=b,c.async=function(e,t,r,o){var n=new b(m(e,t,r,o));return c.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},P(p),p[i]="Generator",p[n]=function(){return this},p.toString=function(){return "[object Generator]"},c.keys=function(r){var o=[];for(var e in r)o.push(e);return o.reverse(),function e(){for(;o.length;){var t=o.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},c.values=E,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=s);},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var o=this;function e(e,t){return i.type="throw",i.arg=r,o.next=e,t&&(o.method="next",o.arg=s),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t],i=n.completion;if("root"===n.tryLoc)return e("end");if(n.tryLoc<=this.prev){var c=u.call(n,"catchLoc"),a=u.call(n,"finallyLoc");if(c&&a){if(this.prev<n.catchLoc)return e(n.catchLoc,!0);if(this.prev<n.finallyLoc)return e(n.finallyLoc)}else if(c){if(this.prev<n.catchLoc)return e(n.catchLoc,!0)}else {if(!a)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return e(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&u.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=e,i.arg=t,n?(this.method="next",this.next=n.finallyLoc,k):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return "break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),k},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),k}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;_(r);}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=s),k}};}function m(e,t,r,o){var i,c,a,s,n=t&&t.prototype instanceof y?t:y,u=Object.create(n.prototype),l=new M(o||[]);return u._invoke=(i=e,c=r,a=l,s=f,function(e,t){if(s===h)throw new Error("Generator is already running");if(s===v){if("throw"===e)throw t;return O()}for(a.method=e,a.arg=t;;){var r=a.delegate;if(r){var o=S(r,a);if(o){if(o===k)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=v,a.arg;a.dispatchException(a.arg);}else "return"===a.method&&a.abrupt("return",a.arg);s=h;var n=w(i,c,a);if("normal"===n.type){if(s=a.done?v:d,n.arg===k)continue;return {value:n.arg,done:a.done}}"throw"===n.type&&(s=v,a.method="throw",a.arg=n.arg);}}),u}function w(e,t,r){try{return {type:"normal",arg:e.call(t,r)}}catch(e){return {type:"throw",arg:e}}}function y(){}function g(){}function C(){}function P(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)};});}function b(a){function s(e,t,r,o){var n=w(a[e],a,t);if("throw"!==n.type){var i=n.arg,c=i.value;return c&&"object"==typeof c&&u.call(c,"__await")?Promise.resolve(c.__await).then(function(e){s("next",e,r,o);},function(e){s("throw",e,r,o);}):Promise.resolve(c).then(function(e){i.value=e,r(i);},o)}o(n.arg);}var t;"object"==typeof e.process&&e.process.domain&&(s=e.process.domain.bind(s)),this._invoke=function(r,o){function e(){return new Promise(function(e,t){s(r,o,e,t);})}return t=t?t.then(e,e):e()};}function S(e,t){var r=e.iterator[t.method];if(r===s){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=s,S(e,t),"throw"===t.method))return k;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method");}return k}var o=w(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,k;var n=o.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=s),t.delegate=null,k):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,k)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t);}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t;}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0);}function E(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(u.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=s,e.done=!0,e};return o.next=o}}return {next:O}}function O(){return {value:s,done:!0}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:e);});var $a,Qa,es,ts=($a=/[\\^$*+?.()|[\]{}]/g,es=(Qa="\\$&")===Object(Qa)?function(e){return Qa[e]}:Qa,function(e){return String(e).replace($a,es)});tt(tt.S,"RegExp",{escape:function(e){return ts(e)}});k.RegExp.escape;if(e._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");e._babelPolyfill=!0;function rs(e,t,r){e[t]||Object.defineProperty(e,t,{writable:!0,configurable:!0,value:r});}rs(String.prototype,"padLeft","".padStart),rs(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&rs(Array,e,Function.call.bind([][e]));});var os,ns=t(function(e,t){var r;r=function(){return function(r){var o={};function n(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=r,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r});},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function r(e,t){this.width=t,this.height=e.length/t,this.data=e;}return r.createEmpty=function(e,t){return new r(new Uint8ClampedArray(e*t),e)},r.prototype.get=function(e,t){return !(e<0||e>=this.width||t<0||t>=this.height)&&!!this.data[t*this.width+e]},r.prototype.set=function(e,t,r){this.data[t*this.width+e]=r?1:0;},r.prototype.setRegion=function(e,t,r,o,n){for(var i=t;i<t+o;i++)for(var c=e;c<e+r;c++)this.set(c,i,!!n);},r.prototype.getInverted=function(){return new r(this.data.map(function(e){return 0===e?1:0}),this.width)},r}();t.BitMatrix=o;},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=r(2);t.addOrSubtractGF=function(e,t){return e^t};var o=function(){function e(e,t,r){this.primitive=e,this.size=t,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var o=1,n=0;n<this.size;n++)this.expTable[n]=o,(o*=2)>=this.size&&(o=(o^this.primitive)&this.size-1);for(n=0;n<this.size-1;n++)this.logTable[this.expTable[n]]=n;this.zero=new i.default(this,Uint8ClampedArray.from([0])),this.one=new i.default(this,Uint8ClampedArray.from([1]));}return e.prototype.multiply=function(e,t){return 0===e||0===t?0:this.expTable[(this.logTable[e]+this.logTable[t])%(this.size-1)]},e.prototype.inverse=function(e){if(0===e)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[e]-1]},e.prototype.buildMonomial=function(e,t){if(e<0)throw new Error("Invalid monomial degree less than 0");if(0===t)return this.zero;var r=new Uint8ClampedArray(e+1);return r[0]=t,new i.default(this,r)},e.prototype.log=function(e){if(0===e)throw new Error("Can't take log(0)");return this.logTable[e]},e.prototype.exp=function(e){return this.expTable[e]},e}();t.default=o;},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var l=r(1),o=function(){function u(e,t){if(0===t.length)throw new Error("No coefficients.");this.field=e;var r=t.length;if(1<r&&0===t[0]){for(var o=1;o<r&&0===t[o];)o++;if(o===r)this.coefficients=e.zero.coefficients;else {this.coefficients=new Uint8ClampedArray(r-o);for(var n=0;n<this.coefficients.length;n++)this.coefficients[n]=t[o+n];}}else this.coefficients=t;}return u.prototype.degree=function(){return this.coefficients.length-1},u.prototype.isZero=function(){return 0===this.coefficients[0]},u.prototype.getCoefficient=function(e){return this.coefficients[this.coefficients.length-1-e]},u.prototype.addOrSubtract=function(e){if(this.isZero())return e;if(e.isZero())return this;var t=this.coefficients,r=e.coefficients;t.length>r.length&&(t=(o=[r,t])[0],r=o[1]);for(var o,n=new Uint8ClampedArray(r.length),i=r.length-t.length,c=0;c<i;c++)n[c]=r[c];for(c=i;c<r.length;c++)n[c]=l.addOrSubtractGF(t[c-i],r[c]);return new u(this.field,n)},u.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var t=this.coefficients.length,r=new Uint8ClampedArray(t),o=0;o<t;o++)r[o]=this.field.multiply(this.coefficients[o],e);return new u(this.field,r)},u.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var t=this.coefficients,r=t.length,o=e.coefficients,n=o.length,i=new Uint8ClampedArray(r+n-1),c=0;c<r;c++)for(var a=t[c],s=0;s<n;s++)i[c+s]=l.addOrSubtractGF(i[c+s],this.field.multiply(a,o[s]));return new u(this.field,i)},u.prototype.multiplyByMonomial=function(e,t){if(e<0)throw new Error("Invalid degree less than 0");if(0===t)return this.field.zero;for(var r=this.coefficients.length,o=new Uint8ClampedArray(r+e),n=0;n<r;n++)o[n]=this.field.multiply(this.coefficients[n],t);return new u(this.field,o)},u.prototype.evaluateAt=function(e){var t=0;if(0===e)return this.getCoefficient(0);var r=this.coefficients.length;if(1===e)return this.coefficients.forEach(function(e){t=l.addOrSubtractGF(t,e);}),t;t=this.coefficients[0];for(var o=1;o<r;o++)t=l.addOrSubtractGF(this.field.multiply(e,t),this.coefficients[o]);return t},u}();t.default=o;},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),n=r(5),c=r(11),a=r(12);function s(e){var t=a.locate(e);if(!t)return null;var r=c.extract(e,t),o=n.decode(r.matrix);return o?{binaryData:o.bytes,data:o.text,chunks:o.chunks,location:{topRightCorner:r.mappingFunction(t.dimension,0),topLeftCorner:r.mappingFunction(0,0),bottomRightCorner:r.mappingFunction(t.dimension,t.dimension),bottomLeftCorner:r.mappingFunction(0,t.dimension),topRightFinderPattern:t.topRight,topLeftFinderPattern:t.topLeft,bottomLeftFinderPattern:t.bottomLeft,bottomRightAlignmentPattern:t.alignmentPattern}}:null}function o(e,t,r){var o=i.binarize(e,t,r),n=s(o);return n||(n=s(o.getInverted())),n}o.default=o,t.default=o;},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var _=r(0);function M(e,t,r){return e<t?t:r<e?r:e}var E=function(){function e(e,t){this.width=e,this.data=new Uint8ClampedArray(e*t);}return e.prototype.get=function(e,t){return this.data[t*this.width+e]},e.prototype.set=function(e,t,r){this.data[t*this.width+e]=r;},e}();t.binarize=function(e,t,r){if(e.length!==t*r*4)throw new Error("Malformed data passed to binarizer.");for(var o=new E(t,r),n=0;n<t;n++)for(var i=0;i<r;i++){var c=e[4*(i*t+n)+0],a=e[4*(i*t+n)+1],s=e[4*(i*t+n)+2];o.set(n,i,.2126*c+.7152*a+.0722*s);}for(var u=Math.ceil(t/8),l=Math.ceil(r/8),f=new E(u,l),d=0;d<l;d++)for(var h=0;h<u;h++){var v=0,k=1/0,B=0;for(i=0;i<8;i++)for(n=0;n<8;n++){var p=o.get(8*h+n,8*d+i);v+=p,k=Math.min(k,p),B=Math.max(B,p);}var m=v/Math.pow(8,2);if(B-k<=24&&(m=k/2,0<d&&0<h)){var w=(f.get(h,d-1)+2*f.get(h-1,d)+f.get(h-1,d-1))/4;k<w&&(m=w);}f.set(h,d,m);}var y=_.BitMatrix.createEmpty(t,r);for(d=0;d<l;d++)for(h=0;h<u;h++){for(var g=M(h,2,u-3),C=M(d,2,l-3),P=(v=0,-2);P<=2;P++)for(var b=-2;b<=2;b++)v+=f.get(g+P,C+b);var S=v/25;for(n=0;n<8;n++)for(i=0;i<8;i++){var x=o.get(8*h+n,8*d+i);y.set(8*h+n,8*d+i,x<=S);}}return y};},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var B=r(0),d=r(6),h=r(9),v=r(10);function k(e,t){for(var r=e^t,o=0;r;)o++,r&=r-1;return o}function p(e,t){return t<<1|e}var m=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],w=[function(e){return (e.y+e.x)%2==0},function(e){return e.y%2==0},function(e){return e.x%3==0},function(e){return (e.y+e.x)%3==0},function(e){return (Math.floor(e.y/2)+Math.floor(e.x/3))%2==0},function(e){return e.x*e.y%2+e.x*e.y%3==0},function(e){return (e.y*e.x%2+e.y*e.x%3)%2==0},function(e){return ((e.y+e.x)%2+e.y*e.x%3)%2==0}];function y(e,t,r){for(var o=w[r.dataMask],n=e.height,i=function(e){var t=17+4*e.versionNumber,r=B.BitMatrix.createEmpty(t,t);r.setRegion(0,0,9,9,!0),r.setRegion(t-8,0,8,9,!0),r.setRegion(0,t-8,9,8,!0);for(var o=0,n=e.alignmentPatternCenters;o<n.length;o++)for(var i=n[o],c=0,a=e.alignmentPatternCenters;c<a.length;c++){var s=a[c];6===i&&6===s||6===i&&s===t-7||i===t-7&&6===s||r.setRegion(i-2,s-2,5,5,!0);}return r.setRegion(6,9,1,t-17,!0),r.setRegion(9,6,t-17,1,!0),6<e.versionNumber&&(r.setRegion(t-11,0,3,6,!0),r.setRegion(0,t-11,6,3,!0)),r}(t),c=[],a=0,s=0,u=!0,l=n-1;0<l;l-=2){6===l&&l--;for(var f=0;f<n;f++)for(var d=u?n-1-f:f,h=0;h<2;h++){var v=l-h;if(!i.get(v,d)){s++;var k=e.get(v,d);o({y:d,x:v})&&(k=!k),a=p(k,a),8===s&&(c.push(a),a=s=0);}}u=!u;}return c}function n(e){var t=function(e){var t=e.height,r=Math.floor((t-17)/4);if(r<=6)return v.VERSIONS[r-1];for(var o=0,n=5;0<=n;n--)for(var i=t-9;t-11<=i;i--)o=p(e.get(i,n),o);var c=0;for(i=5;0<=i;i--)for(n=t-9;t-11<=n;n--)c=p(e.get(i,n),c);for(var a,s=1/0,u=0,l=v.VERSIONS;u<l.length;u++){var f=l[u];if(f.infoBits===o||f.infoBits===c)return f;var d=k(o,f.infoBits);d<s&&(a=f,s=d),(d=k(c,f.infoBits))<s&&(a=f,s=d);}return s<=3?a:void 0}(e);if(!t)return null;var r=function(e){for(var t=0,r=0;r<=8;r++)6!==r&&(t=p(e.get(r,8),t));for(var o=7;0<=o;o--)6!==o&&(t=p(e.get(8,o),t));var n=e.height,i=0;for(o=n-1;n-7<=o;o--)i=p(e.get(8,o),i);for(r=n-8;r<n;r++)i=p(e.get(r,8),i);for(var c=1/0,a=null,s=0,u=m;s<u.length;s++){var l=u[s],f=l.bits,d=l.formatInfo;if(f===t||f===i)return d;var h=k(t,f);h<c&&(a=d,c=h),t!==i&&(h=k(i,f))<c&&(a=d,c=h);}return c<=3?a:null}(e);if(!r)return null;var o=function(e,t,r){var o=t.errorCorrectionLevels[r],n=[],i=0;if(o.ecBlocks.forEach(function(e){for(var t=0;t<e.numBlocks;t++)n.push({numDataCodewords:e.dataCodewordsPerBlock,codewords:[]}),i+=e.dataCodewordsPerBlock+o.ecCodewordsPerBlock;}),e.length<i)return null;e=e.slice(0,i);for(var c=o.ecBlocks[0].dataCodewordsPerBlock,a=0;a<c;a++)for(var s=0,u=n;s<u.length;s++)u[s].codewords.push(e.shift());if(1<o.ecBlocks.length){var l=o.ecBlocks[0].numBlocks,f=o.ecBlocks[1].numBlocks;for(a=0;a<f;a++)n[l+a].codewords.push(e.shift());}for(;0<e.length;)for(var d=0,h=n;d<h.length;d++)h[d].codewords.push(e.shift());return n}(y(e,t,r),t,r.errorCorrectionLevel);if(!o)return null;for(var n=o.reduce(function(e,t){return e+t.numDataCodewords},0),i=new Uint8ClampedArray(n),c=0,a=0,s=o;a<s.length;a++){var u=s[a],l=h.decode(u.codewords,u.codewords.length-u.numDataCodewords);if(!l)return null;for(var f=0;f<u.numDataCodewords;f++)i[c++]=l[f];}try{return d.decode(i,t.versionNumber)}catch(e){return null}}t.decode=function(e){if(null==e)return null;var t=n(e);if(t)return t;for(var r=0;r<e.width;r++)for(var o=r+1;o<e.height;o++)e.get(r,o)!==e.get(o,r)&&(e.set(r,o,!e.get(r,o)),e.set(o,r,!e.get(o,r)));return n(e)};},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var v,o,k,n,B=r(7),u=r(8);function p(e,t){for(var r=[],o="",n=[10,12,14][t],i=e.readBits(n);3<=i;){if(1e3<=(u=e.readBits(10)))throw new Error("Invalid numeric value above 999");var c=Math.floor(u/100),a=Math.floor(u/10)%10,s=u%10;r.push(48+c,48+a,48+s),o+=c.toString()+a.toString()+s.toString(),i-=3;}if(2===i){if(100<=(u=e.readBits(7)))throw new Error("Invalid numeric value above 99");c=Math.floor(u/10),a=u%10;r.push(48+c,48+a),o+=c.toString()+a.toString();}else if(1===i){var u;if(10<=(u=e.readBits(4)))throw new Error("Invalid numeric value above 9");r.push(48+u),o+=u.toString();}return {bytes:r,text:o}}(o=v=t.Mode||(t.Mode={})).Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci",(n=k||(k={}))[n.Terminator=0]="Terminator",n[n.Numeric=1]="Numeric",n[n.Alphanumeric=2]="Alphanumeric",n[n.Byte=4]="Byte",n[n.Kanji=8]="Kanji",n[n.ECI=7]="ECI";var l=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function m(e,t){for(var r=[],o="",n=[9,11,13][t],i=e.readBits(n);2<=i;){var c=e.readBits(11),a=Math.floor(c/45),s=c%45;r.push(l[a].charCodeAt(0),l[s].charCodeAt(0)),o+=l[a]+l[s],i-=2;}if(1===i){a=e.readBits(6);r.push(l[a].charCodeAt(0)),o+=l[a];}return {bytes:r,text:o}}function w(e,t){for(var r=[],o="",n=[8,16,16][t],i=e.readBits(n),c=0;c<i;c++){var a=e.readBits(8);r.push(a);}try{o+=decodeURIComponent(r.map(function(e){return "%"+("0"+e.toString(16)).substr(-2)}).join(""));}catch(e){}return {bytes:r,text:o}}function y(e,t){for(var r=[],o="",n=[8,10,12][t],i=e.readBits(n),c=0;c<i;c++){var a=e.readBits(13),s=Math.floor(a/192)<<8|a%192;s+=s<7936?33088:49472,r.push(s>>8,255&s),o+=String.fromCharCode(u.shiftJISTable[s]);}return {bytes:r,text:o}}t.decode=function(e,t){for(var r,o,n,i,c=new B.BitStream(e),a=t<=9?0:t<=26?1:2,s={text:"",bytes:[],chunks:[]};4<=c.available();){var u=c.readBits(4);if(u===k.Terminator)return s;if(u===k.ECI)0===c.readBits(1)?s.chunks.push({type:v.ECI,assignmentNumber:c.readBits(7)}):0===c.readBits(1)?s.chunks.push({type:v.ECI,assignmentNumber:c.readBits(14)}):0===c.readBits(1)?s.chunks.push({type:v.ECI,assignmentNumber:c.readBits(21)}):s.chunks.push({type:v.ECI,assignmentNumber:-1});else if(u===k.Numeric){var l=p(c,a);s.text+=l.text,(r=s.bytes).push.apply(r,l.bytes),s.chunks.push({type:v.Numeric,text:l.text});}else if(u===k.Alphanumeric){var f=m(c,a);s.text+=f.text,(o=s.bytes).push.apply(o,f.bytes),s.chunks.push({type:v.Alphanumeric,text:f.text});}else if(u===k.Byte){var d=w(c,a);s.text+=d.text,(n=s.bytes).push.apply(n,d.bytes),s.chunks.push({type:v.Byte,bytes:d.bytes,text:d.text});}else if(u===k.Kanji){var h=y(c,a);s.text+=h.text,(i=s.bytes).push.apply(i,h.bytes),s.chunks.push({type:v.Kanji,bytes:h.bytes,text:h.text});}}};},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.byteOffset=0,this.bitOffset=0,this.bytes=e;}return e.prototype.readBits=function(e){if(e<1||32<e||e>this.available())throw new Error("Cannot read "+e.toString()+" bits");var t=0;if(0<this.bitOffset){var r=8-this.bitOffset,o=e<r?e:r,n=255>>8-o<<(i=r-o);t=(this.bytes[this.byteOffset]&n)>>i,e-=o,this.bitOffset+=o,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++);}if(0<e){for(;8<=e;)t=t<<8|255&this.bytes[this.byteOffset],this.byteOffset++,e-=8;if(0<e){var i;n=255>>(i=8-e)<<i;t=t<<e|(this.bytes[this.byteOffset]&n)>>i,this.bitOffset+=e;}}return t},e.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},e}();t.BitStream=o;},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081};},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var k=r(1),B=r(2);t.decode=function(e,t){var r=new Uint8ClampedArray(e.length);r.set(e);for(var o=new k.default(285,256,0),n=new B.default(o,r),i=new Uint8ClampedArray(t),c=!1,a=0;a<t;a++){var s=n.evaluateAt(o.exp(a+o.generatorBase));0!==(i[i.length-1-a]=s)&&(c=!0);}if(!c)return r;var u=new B.default(o,i),l=function(e,t,r,o){t.degree()<r.degree()&&(t=(B=[r,t])[0],r=B[1]);for(var n=t,i=r,c=e.zero,a=e.one;i.degree()>=o/2;){var s=n,u=c;if(c=a,(n=i).isZero())return null;i=s;for(var l=e.zero,f=n.getCoefficient(n.degree()),d=e.inverse(f);i.degree()>=n.degree()&&!i.isZero();){var h=i.degree()-n.degree(),v=e.multiply(i.getCoefficient(i.degree()),d);l=l.addOrSubtract(e.buildMonomial(h,v)),i=i.addOrSubtract(n.multiplyByMonomial(h,v));}if(a=l.multiplyPoly(c).addOrSubtract(u),i.degree()>=n.degree())return null}var k=a.getCoefficient(0);if(0===k)return null;var B,p=e.inverse(k);return [a.multiply(p),i.multiply(p)]}(o,o.buildMonomial(t,1),u,t);if(null===l)return null;var f=function(e,t){var r=t.degree();if(1===r)return [t.getCoefficient(1)];for(var o=new Array(r),n=0,i=1;i<e.size&&n<r;i++)0===t.evaluateAt(i)&&(o[n]=e.inverse(i),n++);return n!==r?null:o}(o,l[0]);if(null==f)return null;for(var d=function(e,t,r){for(var o=r.length,n=new Array(o),i=0;i<o;i++){for(var c=e.inverse(r[i]),a=1,s=0;s<o;s++)i!==s&&(a=e.multiply(a,k.addOrSubtractGF(1,e.multiply(r[s],c))));n[i]=e.multiply(t.evaluateAt(c),e.inverse(a)),0!==e.generatorBase&&(n[i]=e.multiply(n[i],c));}return n}(o,l[1],f),h=0;h<f.length;h++){var v=r.length-1-o.log(f[h]);if(v<0)return null;r[v]=k.addOrSubtractGF(r[v],d[h]);}return r};},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}];},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var p=r(0);function m(e,t,r,o){var n=e.x-t.x+r.x-o.x,i=e.y-t.y+r.y-o.y;if(0===n&&0===i)return {a11:t.x-e.x,a12:t.y-e.y,a13:0,a21:r.x-t.x,a22:r.y-t.y,a23:0,a31:e.x,a32:e.y,a33:1};var c=t.x-r.x,a=o.x-r.x,s=t.y-r.y,u=o.y-r.y,l=c*u-a*s,f=(n*u-a*i)/l,d=(c*i-n*s)/l;return {a11:t.x-e.x+f*t.x,a12:t.y-e.y+f*t.y,a13:f,a21:o.x-e.x+d*o.x,a22:o.y-e.y+d*o.y,a23:d,a31:e.x,a32:e.y,a33:1}}t.extract=function(e,t){for(var r,o,n,i,c,a,s,u=(r={x:3.5,y:3.5},o={x:t.dimension-3.5,y:3.5},n={x:t.dimension-6.5,y:t.dimension-6.5},i={x:3.5,y:t.dimension-3.5},{a11:(c=m(r,o,n,i)).a22*c.a33-c.a23*c.a32,a12:c.a13*c.a32-c.a12*c.a33,a13:c.a12*c.a23-c.a13*c.a22,a21:c.a23*c.a31-c.a21*c.a33,a22:c.a11*c.a33-c.a13*c.a31,a23:c.a13*c.a21-c.a11*c.a23,a31:c.a21*c.a32-c.a22*c.a31,a32:c.a12*c.a31-c.a11*c.a32,a33:c.a11*c.a22-c.a12*c.a21}),l=m(t.topLeft,t.topRight,t.alignmentPattern,t.bottomLeft),f=(s=u,{a11:(a=l).a11*s.a11+a.a21*s.a12+a.a31*s.a13,a12:a.a12*s.a11+a.a22*s.a12+a.a32*s.a13,a13:a.a13*s.a11+a.a23*s.a12+a.a33*s.a13,a21:a.a11*s.a21+a.a21*s.a22+a.a31*s.a23,a22:a.a12*s.a21+a.a22*s.a22+a.a32*s.a23,a23:a.a13*s.a21+a.a23*s.a22+a.a33*s.a23,a31:a.a11*s.a31+a.a21*s.a32+a.a31*s.a33,a32:a.a12*s.a31+a.a22*s.a32+a.a32*s.a33,a33:a.a13*s.a31+a.a23*s.a32+a.a33*s.a33}),d=p.BitMatrix.createEmpty(t.dimension,t.dimension),h=function(e,t){var r=f.a13*e+f.a23*t+f.a33;return {x:(f.a11*e+f.a21*t+f.a31)/r,y:(f.a12*e+f.a22*t+f.a32)/r}},v=0;v<t.dimension;v++)for(var k=0;k<t.dimension;k++){var B=h(k+.5,v+.5);d.set(k,v,e.get(Math.floor(B.x),Math.floor(B.y)));}return {matrix:d,mappingFunction:h}};},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var A=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))};function j(e){return e.reduce(function(e,t){return e+t})}function l(e,t,r,o){var n,i,c,a,s=[{x:Math.floor(e.x),y:Math.floor(e.y)}],u=Math.abs(t.y-e.y)>Math.abs(t.x-e.x);a=u?(n=Math.floor(e.y),i=Math.floor(e.x),c=Math.floor(t.y),Math.floor(t.x)):(n=Math.floor(e.x),i=Math.floor(e.y),c=Math.floor(t.x),Math.floor(t.y));for(var l=Math.abs(c-n),f=Math.abs(a-i),d=Math.floor(-l/2),h=n<c?1:-1,v=i<a?1:-1,k=!0,B=n,p=i;B!==c+h;B+=h){var m=u?p:B,w=u?B:p;if(r.get(m,w)!==k&&(k=!k,s.push({x:m,y:w}),s.length===o+1))break;if(0<(d+=f)){if(p===a)break;p+=v,d-=l;}}for(var y=[],g=0;g<o;g++)s[g]&&s[g+1]?y.push(A(s[g],s[g+1])):y.push(0);return y}function R(e,t,r,o){var n,i=t.y-e.y,c=t.x-e.x,a=l(e,t,r,Math.ceil(o/2)),s=l(e,{x:e.x-c,y:e.y-i},r,Math.ceil(o/2)),u=a.shift()+s.shift()-1;return (n=s.concat(u)).concat.apply(n,a)}function h(r,e){var o=j(r)/j(e),n=0;return e.forEach(function(e,t){n+=Math.pow(r[t]-e*o,2);}),{averageSize:o,error:n}}function T(e,t,r){try{var o=R(e,{x:-1,y:e.y},r,t.length),n=R(e,{x:e.x,y:-1},r,t.length),i=R(e,{x:Math.max(0,e.x-e.y)-1,y:Math.max(0,e.y-e.x)-1},r,t.length),c=R(e,{x:Math.min(r.width,e.x+e.y)+1,y:Math.min(r.height,e.y+e.x)+1},r,t.length),a=h(o,t),s=h(n,t),u=h(i,t),l=h(c,t),f=Math.sqrt(a.error*a.error+s.error*s.error+u.error*u.error+l.error*l.error),d=(a.averageSize+s.averageSize+u.averageSize+l.averageSize)/4;return f+(Math.pow(a.averageSize-d,2)+Math.pow(s.averageSize-d,2)+Math.pow(u.averageSize-d,2)+Math.pow(l.averageSize-d,2))/d}catch(e){return 1/0}}t.locate=function(B){for(var r=[],p=[],o=[],m=[],e=function(d){for(var h=0,v=!1,k=[0,0,0,0,0],e=function(e){var t=B.get(e,d);if(t===v)h++;else {k=[k[1],k[2],k[3],k[4],h],h=1,v=t;var r=j(k)/7,o=Math.abs(k[0]-r)<r&&Math.abs(k[1]-r)<r&&Math.abs(k[2]-3*r)<3*r&&Math.abs(k[3]-r)<r&&Math.abs(k[4]-r)<r&&!t,n=j(k.slice(-3))/3,i=Math.abs(k[2]-n)<n&&Math.abs(k[3]-n)<n&&Math.abs(k[4]-n)<n&&t;if(o){var c=e-k[3]-k[4],a=c-k[2],s={startX:a,endX:c,y:d};0<(u=p.filter(function(e){return a>=e.bottom.startX&&a<=e.bottom.endX||c>=e.bottom.startX&&a<=e.bottom.endX||a<=e.bottom.startX&&c>=e.bottom.endX&&k[2]/(e.bottom.endX-e.bottom.startX)<1.5&&.5<k[2]/(e.bottom.endX-e.bottom.startX)})).length?u[0].bottom=s:p.push({top:s,bottom:s});}if(i){var u,l=e-k[4],f=l-k[3];s={startX:f,y:d,endX:l},0<(u=m.filter(function(e){return f>=e.bottom.startX&&f<=e.bottom.endX||l>=e.bottom.startX&&f<=e.bottom.endX||f<=e.bottom.startX&&l>=e.bottom.endX&&k[2]/(e.bottom.endX-e.bottom.startX)<1.5&&.5<k[2]/(e.bottom.endX-e.bottom.startX)})).length?u[0].bottom=s:m.push({top:s,bottom:s});}}},t=-1;t<=B.width;t++)e(t);r.push.apply(r,p.filter(function(e){return e.bottom.y!==d&&2<=e.bottom.y-e.top.y})),p=p.filter(function(e){return e.bottom.y===d}),o.push.apply(o,m.filter(function(e){return e.bottom.y!==d})),m=m.filter(function(e){return e.bottom.y===d});},t=0;t<=B.height;t++)e(t);r.push.apply(r,p.filter(function(e){return 2<=e.bottom.y-e.top.y})),o.push.apply(o,m);var n=r.filter(function(e){return 2<=e.bottom.y-e.top.y}).map(function(e){var t=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,r=(e.top.y+e.bottom.y+1)/2;if(B.get(Math.round(t),Math.round(r))){var o=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],n=j(o)/o.length;return {score:T({x:Math.round(t),y:Math.round(r)},[1,1,3,1,1],B),x:t,y:r,size:n}}}).filter(function(e){return !!e}).sort(function(e,t){return e.score-t.score}).map(function(t,r,e){if(4<r)return null;var o=e.filter(function(e,t){return r!==t}).map(function(e){return {x:e.x,y:e.y,score:e.score+Math.pow(e.size-t.size,2)/t.size,size:e.size}}).sort(function(e,t){return e.score-t.score});if(o.length<2)return null;var n=t.score+o[0].score+o[1].score;return {points:[t].concat(o.slice(0,2)),score:n}}).filter(function(e){return !!e}).sort(function(e,t){return e.score-t.score});if(0===n.length)return null;var i,c,a,s,u,l,f,d,h,v,k,w,y,g,C,P=(i=n[0].points[0],c=n[0].points[1],a=n[0].points[2],k=A(i,c),w=A(c,a),y=A(i,a),((l=k<=w&&y<=w?(s=(f=[c,i,a])[0],u=f[1],f[2]):w<=y&&k<=y?(s=(d=[i,c,a])[0],u=d[1],d[2]):(s=(h=[i,a,c])[0],u=h[1],h[2])).x-u.x)*(s.y-u.y)-(l.y-u.y)*(s.x-u.x)<0&&(s=(v=[l,s])[0],l=v[1]),{bottomLeft:s,topLeft:u,topRight:l}),b=P.topRight,S=P.topLeft,x=P.bottomLeft;try{g=(_=function(e,t,r,o){var n=(j(R(e,r,o,5))/7+j(R(e,t,o,5))/7+j(R(r,e,o,5))/7+j(R(t,e,o,5))/7)/4;if(n<1)throw new Error("Invalid module size");var i=Math.round(A(e,t)/n),c=Math.round(A(e,r)/n),a=Math.floor((i+c)/2)+7;switch(a%4){case 0:a++;break;case 2:a--;}return {dimension:a,moduleSize:n}}(S,b,x,B)).dimension,C=_.moduleSize;}catch(e){return null}var _,M=b.x-S.x+x.x,E=b.y-S.y+x.y,O=(A(S,x)+A(S,b))/2/C,L=1-3/O,I={x:S.x+L*(M-S.x),y:S.y+L*(E-S.y)},F=o.map(function(e){var t=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,r=(e.top.y+e.bottom.y+1)/2;if(B.get(Math.floor(t),Math.floor(r))){var o=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];return j(o),{x:t,y:r,score:T({x:Math.floor(t),y:Math.floor(r)},[1,1,1],B)+A({x:t,y:r},I)}}}).filter(function(e){return !!e}).sort(function(e,t){return e.score-t.score}),N=15<=O&&F.length?F[0]:I;return {alignmentPattern:{x:N.x,y:N.y},bottomLeft:{x:x.x,y:x.y},dimension:g,topLeft:{x:S.x,y:S.y},topRight:{x:b.x,y:b.y}}};}]).default},e.exports=r();}),is=(os=ns)&&os.__esModule&&Object.prototype.hasOwnProperty.call(os,"default")?os.default:os,cs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);}return e},as=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}();function ss(e){return function(){var a=e.apply(this,arguments);return new Promise(function(i,c){return function t(e,r){try{var o=a[e](r),n=o.value;}catch(e){return void c(e)}if(!o.done)return Promise.resolve(n).then(function(e){t("next",e);},function(e){t("throw",e);});i(n);}("next")})}}return function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timerCapture=null,this.canvasElem=null,this.gCtx=null,this.stream=null,this.videoElem=null,this.getUserMediaHandler=null,this.videoConstraints={video:!0,audio:!1},this.defaultOption={inversionAttempts:"attemptBoth"};}var t,r,o,n;return as(e,[{key:"isCanvasSupported",value:function(){var e=document.createElement("canvas");return !(!e.getContext||!e.getContext("2d"))}},{key:"_createImageData",value:function(e,t,r){return this.canvasElem||this._prepareCanvas(t,r),this.gCtx.clearRect(0,0,t,r),this.gCtx.drawImage(e,0,0,t,r),this.gCtx.getImageData(0,0,this.canvasElem.width,this.canvasElem.height)}},{key:"_prepareCanvas",value:function(e,t){this.canvasElem||(this.canvasElem=document.createElement("canvas"),this.canvasElem.style.width=e+"px",this.canvasElem.style.height=t+"px",this.canvasElem.width=e,this.canvasElem.height=t),this.gCtx=this.canvasElem.getContext("2d");}},{key:"_captureToCanvas",value:(n=ss(regeneratorRuntime.mark(function e(n,i){var t,r,c=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.timerCapture&&clearTimeout(this.timerCapture),t=function(){var t;return new Promise((t=ss(regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,n.videoWidth&&n.videoHeight?(o=c._createImageData(n,n.videoWidth,n.videoHeight),(r=is(o.data,o.width,o.height,i))?t(r):c.timerCapture=setTimeout(ss(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c._captureToCanvas(n,i);case 2:r=e.sent,t(r);case 4:case"end":return e.stop()}},e,c)})),500)):c.timerCapture=setTimeout(ss(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c._captureToCanvas(n,i);case 2:r=e.sent,t(r);case 4:case"end":return e.stop()}},e,c)})),500);case 2:case"end":return e.stop()}},e,c)})),function(e){return t.apply(this,arguments)}))},e.next=4,t();case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})},{key:"decodeFromCamera",value:(o=ss(regeneratorRuntime.mark(function e(t){var r,o,n,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=cs({},this.defaultOption,i),this.stop(),navigator.mediaDevices.getUserMedia){e.next=4;break}throw new Error("Couldn't get video from camera");case 4:return e.prev=4,e.next=7,navigator.mediaDevices.getUserMedia(this.videoConstraints);case 7:return o=e.sent,t.srcObject=o,this.videoElem=t,this.stream=o,this.videoDimensions=!1,e.next=14,this.decodeFromVideo(t,r);case 14:return n=e.sent,e.abrupt("return",n);case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}},e,this,[[4,18]])})),function(e){return o.apply(this,arguments)})},{key:"decodeFromVideo",value:(r=ss(regeneratorRuntime.mark(function e(t){var r,o,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=cs({},this.defaultOption,n),e.prev=1,this.videoElem=t,e.next=5,this._captureToCanvas(t,r);case 5:return o=e.sent,e.abrupt("return",o);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}},e,this,[[1,9]])})),function(e){return r.apply(this,arguments)})},{key:"decodeFromImage",value:(t=ss(regeneratorRuntime.mark(function e(t){var r,o,n,i,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=void 0,o=cs({},this.defaultOption,c),!(0<+t.nodeType)){e.next=8;break}if(t.src){e.next=5;break}throw new Error("The ImageElement must contain a src");case 5:r=t,e.next=15;break;case 8:if("string"==typeof t)return (r=document.createElement("img")).src=t,c.crossOrigin&&(r.crossOrigin=c.crossOrigin),n=function(){return new Promise(function(e){r.onload=function(){return e(!0)};})},e.next=15,n();e.next=15;break;case 15:return i=!1,r&&(i=this._decodeFromImageElm(r,o)),e.abrupt("return",i);case 18:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"_decodeFromImageElm",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=cs({},this.defaultOption,t),o=this._createImageData(e,e.width,e.height),n=is(o.data,o.width,o.height,r);return n||!1}},{key:"stop",value:function(){this.stream&&(this.stream.getTracks()[0].stop(),this.stream=void 0,this.videoElem.srcObject=null);return this.timerCapture&&(clearTimeout(this.timerCapture),this.timerCapture=void 0),this}},{key:"setSourceId",value:function(e){return this.videoConstraints.video=!e||{optional:[{sourceId:e}]},this}},{key:"getVideoSources",value:function(){var t=[];if(!MediaStreamTrack||!MediaStreamTrack.getSources)throw new Error("Current browser doest not support MediaStreamTrack.getSources");return MediaStreamTrack.getSources(function(e){e.forEach(function(e){"video"===e.kind&&t.push(e);});}),t}}]),e}()});

var Quagga = window.Quagga;
var qr;
function barcode(imgData) {
    return new Promise(function (res, rej) {
        Quagga.decodeSingle({
            src: imgData,
            numOfWorkers: 0,
            decoder: {
                readers: ["code_128_reader"],
            },
            inputStream: {
                size: 1024,
                area: {
                    top: "5%",
                    right: "5%",
                    left: "5%",
                    bottom: "5%",
                },
            },
        }, function (result) {
            if (result && result.codeResult) {
                var v = result.codeResult;
                var line = result.line || [];
                var lx = (line[0] && line[0].x) || window.innerWidth / 2;
                var rx = (line[1] && line[1].x) || window.innerWidth / 2;
                var ly = (line[0] && line[0].y) || window.innerHeight / 2;
                var ry = (line[1] && line[1].y) || window.innerHeight / 2;
                var out = {
                    format: "barcode",
                    data: v.code,
                    center: {
                        x: (lx + rx) / 2,
                        y: (ly + ry) / 2,
                    },
                };
                res(out);
            }
            else {
                res(false);
            }
        });
    });
}
function qrcode(imgData) {
    if (!qr) {
        qr = new window.QrcodeDecoder();
    }
    return new Promise(function (res, rej) {
        qr.decodeFromImage(imgData)
            .then(function (code) {
            if (code && code.data) {
                var loc = code.location;
                var lx = (loc && loc.topLeftCorner && Number(loc.topLeftCorner.x)) || window.innerWidth / 2;
                var rx = (loc && loc.topLeftCorner && Number(loc.bottomRightCorner.x)) || window.innerWidth / 2;
                var ly = (loc && loc.topLeftCorner && Number(loc.topLeftCorner.y)) || window.innerHeight / 2;
                var ry = (loc && loc.topLeftCorner && Number(loc.bottomRightCorner.y)) || window.innerHeight / 2;
                var out = {
                    format: "qrcode",
                    data: code.data,
                    center: {
                        x: (lx + rx) / 2,
                        y: (ly + ry) / 2,
                    },
                };
                res(out);
            }
            else {
                res(false);
            }
        })
            .catch(function (err) {
            rej(err);
        });
    });
}
function decode(format, imgData) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(format === "any")) return [3 /*break*/, 2];
                    return [4 /*yield*/, qrcode(imgData)];
                case 1:
                    res = _a.sent();
                    if (res) {
                        return [2 /*return*/, res];
                    }
                    return [2 /*return*/, barcode(imgData)];
                case 2:
                    if (format === "barcode") {
                        return [2 /*return*/, barcode(imgData)];
                    }
                    else {
                        return [2 /*return*/, qrcode(imgData)];
                    }
                case 3: return [2 /*return*/];
            }
        });
    });
}

var iOS = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
var isMediaStreamAPISupported = navigator && navigator.mediaDevices && "enumerateDevices" in navigator.mediaDevices;
function startCapture(video, constraints, onError) {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
        video.srcObject = stream;
        // video.playsInline = true;
        video.setAttribute("playsinline", "true");
    })
        .catch(function (err) {
        console.log("Error occurred ", err);
        onError(err);
    });
}
function startCamera(video, onError) {
    if (isMediaStreamAPISupported) {
        navigator.mediaDevices
            .enumerateDevices()
            .then(function (devices) {
            var device = devices.filter(function (device) {
                // const deviceLabel = device.label.split(",")[1];
                if (device.kind == "videoinput") {
                    return device;
                }
            });
            var constraints;
            if (device.length > 1) {
                constraints = {
                    video: {
                        mandatory: {
                            sourceId: device[device.length - 1].deviceId ? device[device.length - 1].deviceId : null,
                        },
                    },
                    audio: false,
                };
                if (iOS) {
                    constraints.video.facingMode = "environment";
                }
                startCapture(video, constraints, onError);
            }
            else if (device.length) {
                constraints = {
                    video: {
                        mandatory: {
                            sourceId: device[0].deviceId ? device[0].deviceId : null,
                        },
                    },
                    audio: false,
                };
                if (iOS) {
                    constraints.video.facingMode = "environment";
                }
                if (!constraints.video.mandatory.sourceId && !iOS) {
                    startCapture(video, { video: true }, onError);
                }
                else {
                    startCapture(video, constraints, onError);
                }
            }
            else {
                startCapture(video, { video: true }, onError);
            }
        })
            .catch(function (error) {
            console.error("Error occurred : ", error);
        });
    }
}
var getVideoWH = function (video) {
    return [video.videoWidth || video.width, video.videoHeight || video.height];
};
var VanillaCamera = function (target, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.objectFit, objectFit = _c === void 0 ? 'cover' : _c, format = _b.format, _d = _b.onError, onError = _d === void 0 ? function () { } : _d, direction = _b.direction, _e = _b.size, size = _e === void 0 ? 1 : _e, _f = _b.area, area = _f === void 0 ? 1 : _f, square = _b.square;
    var box;
    if (typeof target === "string") {
        box = document.querySelector(target);
    }
    else {
        box = target;
    }
    if (!document.contains(box)) {
        onError("document.contains no found target");
        return;
    }
    var video = document.createElement("video");
    video.width = box.clientWidth;
    video.height = box.clientHeight;
    video.controls = false;
    video.style.background = "#000";
    video.style.objectFit = objectFit;
    video.muted = true;
    box.append(video);
    video.autoplay = true;
    startCamera(video, onError);
    var canvas = document.createElement("canvas");
    canvas.width = window.innerWidth * size;
    canvas.height = window.innerHeight * size;
    var context = canvas.getContext("2d");
    var w = 100;
    var h = 100;
    var cw = 200;
    var ch = 200;
    video.addEventListener("canplay", function () {
        var _a = getVideoWH(video), _w = _a[0], _h = _a[1];
        cw = _w * size;
        ch = _h * size;
        canvas.width = cw;
        canvas.height = ch;
        if (square) {
            var min = _w;
            if (_w > _h) {
                min = _h;
            }
            w = min;
            h = min;
        }
        else {
            w = _w;
            h = _h;
        }
    });
    return {
        format: format,
        video: video,
        canvas: canvas,
        context: context,
        remove: function () {
            video.pause();
            video.remove();
            canvas.remove();
        },
        playPause: function () {
            if (video.paused) {
                video.play();
            }
            else {
                video.pause();
            }
        },
        // 绘制canvas画布、获取data
        screenshot: function () {
            if (video) {
                var a = (1 - area) * w;
                var b = (1 - area) * h;
                context.drawImage(video, a ? a / 2 : 0, b ? b / 2 : 0, w * area, h * area, 0, 0, canvas.width, canvas.height);
                return canvas.toDataURL("image/png");
            }
        },
    };
};
window.VanillaCamera = VanillaCamera;

var VanillaQRCode = function (ele, _a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.format, format = _b === void 0 ? "any" : _b, _c = _a.waitSreenshot, waitSreenshot = _c === void 0 ? 300 : _c, onScreenshot = _a.onScreenshot, onResult = _a.onResult, opt = __rest(_a, ["format", "waitSreenshot", "onScreenshot", "onResult"]);
    var camera = VanillaCamera(ele, __assign({ size: 1, area: 1, square: true }, opt));
    if (!camera) {
        return;
    }
    camera.format = format;
    var close = false;
    var screenshot = function () {
        if (close) {
            return;
        }
        var imgData = camera.screenshot();
        if (!imgData || camera.format === "none") {
            requestAnimationFrame(screenshot);
            return;
        }
        if (onScreenshot) {
            onScreenshot(imgData);
        }
        decode(camera.format, imgData).then(function (code) {
            if (code && onResult) {
                onResult(code, function () {
                    close = true;
                    camera.remove();
                });
            }
            requestAnimationFrame(screenshot);
        });
    };
    setTimeout(screenshot, waitSreenshot);
    return camera;
};
VanillaQRCode.RanderCamera = VanillaCamera;
VanillaQRCode.decode = decode;

export default VanillaQRCode;
