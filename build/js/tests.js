/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * Classes imports
	 */

	var _tii = __webpack_require__(14);

	var _tii2 = _interopRequireDefault(_tii);

	var _keyMirror = __webpack_require__(13);

	var _keyMirror2 = _interopRequireDefault(_keyMirror);

	var _camp = __webpack_require__(15);

	var _camp2 = _interopRequireDefault(_camp);

	var _trainer = __webpack_require__(18);

	var _trainer2 = _interopRequireDefault(_trainer);

	var _stagingbuilding = __webpack_require__(16);

	var _stagingbuilding2 = _interopRequireDefault(_stagingbuilding);

	var _unit = __webpack_require__(17);

	var _unit2 = _interopRequireDefault(_unit);

	var _unittype = __webpack_require__(19);

	var _unittype2 = _interopRequireDefault(_unittype);

	var _tests_keyMirror = __webpack_require__(21);

	var _tests_keyMirror2 = _interopRequireDefault(_tests_keyMirror);

	var _tests_camp = __webpack_require__(22);

	var _tests_stagingbuilding = __webpack_require__(23);

	var _tests_stagingbuilding2 = _interopRequireDefault(_tests_stagingbuilding);

	var _tests_trainer = __webpack_require__(25);

	var _tests_trainer2 = _interopRequireDefault(_tests_trainer);

	var _tests_unit = __webpack_require__(26);

	var _tests_unit2 = _interopRequireDefault(_tests_unit);

	var _tests_unittype = __webpack_require__(24);

	var _tests_unittype2 = _interopRequireDefault(_tests_unittype);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clashTests = new _tii2.default();
	/**
	 * Tests Imports
	 */
	// --- keyMirror ---

	(0, _tests_keyMirror2.default)(clashTests, _keyMirror2.default);

	// --- Camp Class ---

	(0, _tests_camp.campClassTests)(clashTests, _camp2.default);

	// --- Staging Building Class ---

	// returning mocks that are reused in other files
	var unitMocks = (0, _tests_stagingbuilding2.default)(clashTests, _tests_camp.armyCampModel, _stagingbuilding2.default, _unit2.default);

	// --- Trainer Class ---

	(0, _tests_trainer2.default)(clashTests, unitMocks.unitsMockArray, _trainer2.default);

	// --- Unit Class ---

	(0, _tests_unit2.default)(clashTests, unitMocks.unitMock);

	// --- UnitType Class ---

	(0, _tests_unittype2.default)(clashTests, _unittype2.default);

	clashTests.results();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Key mirror
	 * 
	 * @param { array[string] }
	 * @return { object } an object with values mirroring the keys
	 */
	function keyMirror(array) {
	  var obj = {};
	  array.map(function (value) {
	    obj[value] = value;
	  });
	  return obj;
	}

	exports.default = keyMirror;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(module) {'use strict';

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _lodash = __webpack_require__(2);

		var _lodash2 = _interopRequireDefault(_lodash);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		/**
		 * This is my take on assertion libraries with out proper knowledge of testing
		 */

		var Tii = function () {

			/**
		  * Constructor, does the necessary set up
		  * 
		  * @param {bool} verbose output
		  */

			function Tii() {
				_classCallCheck(this, Tii);

				this.assertions = [];
				this.everyTest = {};
				this.verbose = false;
			}

			/**
		  * Executes a callback
		  * 
		  * @param {string} property key 
		  */

			_createClass(Tii, [{
				key: 'callback',
				value: function callback(key) {
					if (this.everyTest[key]) this.everyTest[key].apply(this);
				}

				/**
		   * Sets up a callback to run before every test
		   * 
		   * @param {function} callback
		   */

			}, {
				key: 'setUp',
				value: function setUp(callback) {
					this.everyTest.pre = callback;
				}
				/**
		   * Sets up a callback to run after every test
		   * 
		   * @param {function} callback
		   */

			}, {
				key: 'cleanUp',
				value: function cleanUp(callback) {
					this.everyTest.post = callback;
				}

				/**
		   * Logs the result of a test
		   * 
		   * @param {object} assertion object
		   */

			}, {
				key: 'result',
				value: function result(assertion) {
					console.log(assertion.description);
					if (assertion.result) console.log('✔');else {
						console.log('✘');
					}
					console.log('--------------------------------------------------');
				}

				/**
		   * Logs the results
		   */

			}, {
				key: 'results',
				value: function results() {
					var passing = 0;
					var errors = 0;
					var results = this.assertions.map(function (assertion) {
						if (assertion.result) passing++;else errors++;
						return assertion.result ? ' ✔ ' : ' ✘ ';
					});
					console.log('------------------- ASSERTIONS -------------------');
					console.log(results.join(''));
					console.log('Runned ' + results.length + ' assertions.');
					console.log('|--- Passing: ✔ ' + passing);
					console.log('|--- Failing: ✘ ' + errors);
					if (errors) console.log('-------------------- FAILING ---------------------');else console.log('--------------------------------------------------');
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = this.assertions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var assertion = _step.value;

							if (!assertion.result) {
								console.log(assertion.description);
								console.log(assertion.assertion);
								console.log('--------------------');
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}

				/**
		   * Sets/unsets the verbose output
		   * 
		   * @param {bool}
		   */

			}, {
				key: 'verboseOutput',
				value: function verboseOutput() {
					var verbose = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

					this.verbose = verbose;
				}

				/**
		   * Stores the description for the assertion
		   * used on the verbose tests and on error logs
		   * 
		   * @param {string} assertion description
		   * @return {object} this
		   */

			}, {
				key: 'when',
				value: function when(description) {
					this.assertions.push(description ? { description: description } : {});
					return this;
				}

				/**
		   * Stores the first value of the assertion
		   * 
		   * @param {any} first value of the assertion
		   */

			}, {
				key: 'should',
				value: function should(value) {
					this.assertions.last().a = value;
					return this;
				}

				/**
		   * Equality assertion
		   * Stores the second value, runs the setup, assertion and cleanup 
		   * 
		   * @param {any}
		   */

			}, {
				key: 'equal',
				value: function equal(b) {
					this.callback('pre');
					this.assertions.last().b = b;
					this.assertions.last().result = (0, _lodash2.default)(this.assertions.last().a, b);
					this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be equal to ' + b;
					this.callback('post');
					if (this.verbose) this.result(this.assertions.last());
				}

				/**
		   * Inequality assertion
		   * Stores the second value, runs the setup, assertion and cleanup 
		   * 
		   * @param {any}
		   */

			}, {
				key: 'not',
				value: function not(b) {
					this.callback('pre');
					this.assertions.last().b = b;
					this.assertions.last().result = !(0, _lodash2.default)(this.assertions.last().a, b);
					this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' be differenten to ' + b;
					this.callback('post');
					if (this.verbose) this.result(this.assertions.last());
				}

				/**
		   * Truthy assertion
		   * Stores the second value, runs the setup, assertion and cleanup
		   */

			}, {
				key: 'beTrue',
				value: function beTrue() {
					this.callback('pre');
					this.assertions.last().b = true;
					this.assertions.last().result = !!this.assertions.last().a;
					this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be true.';
					this.callback('post');
					if (this.verbose) this.result(this.assertions.last());
				}

				/**
		   * Falsy assertion
		   * Stores the second value, runs the setup, assertion and cleanup
		   */

			}, {
				key: 'beFalse',
				value: function beFalse() {
					this.callback('pre');
					this.assertions.last().b = false;
					this.assertions.last().result = !this.assertions.last().a;
					this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be false.';
					this.callback('post');
					if (this.verbose) this.result(this.assertions.last());
				}

				/**
		   * Gratter assertion
		   * Stores the second value, runs the setup, assertion and cleanup 
		   * 
		   * @param {any}
		   */

			}, {
				key: 'beMore',
				value: function beMore(b) {
					this.callback('pre');
					this.assertions.last().b = b;
					this.assertions.last().result = this.assertions.last().a > b;
					this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be > than ' + b;
					this.callback('post');
					if (this.verbose) this.result(this.assertions.last());
				}

				/**
		   * Lesser assertion
		   * Stores the second value, runs the setup, assertion and cleanup 
		   * 
		   * @param {any}
		   */

			}, {
				key: 'beLess',
				value: function beLess(b) {
					this.callback('pre');
					this.assertions.last().b = b;
					this.assertions.last().result = this.assertions.last().a < b;
					this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be < than ' + b;
					this.callback('post');
					if (this.verbose) this.result(this.assertions.last());
				}
			}]);

			return Tii;
		}();

		/**
		 * Helper function
		 */

		exports.default = Tii;
		Array.prototype.last = function () {
			return this[this.length - 1];
		};

		/**
		 * Add support for Commonjs modules
		 */
		if (( false ? 'undefined' : _typeof(module)) === "object" && module.exports) {
			module.exports = Tii;
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
		 * Build: `lodash modularize exports="npm" -o ./`
		 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
		 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
		 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		 * Available under MIT license <https://lodash.com/license>
		 */
		var baseIsEqual = __webpack_require__(3);

		/**
		 * Performs a deep comparison between two values to determine if they are
		 * equivalent.
		 *
		 * **Note:** This method supports comparing arrays, array buffers, booleans,
		 * date objects, error objects, maps, numbers, `Object` objects, regexes,
		 * sets, strings, symbols, and typed arrays. `Object` objects are compared
		 * by their own, not inherited, enumerable properties. Functions and DOM
		 * nodes are **not** supported.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 * @example
		 *
		 * var object = { 'user': 'fred' };
		 * var other = { 'user': 'fred' };
		 *
		 * _.isEqual(object, other);
		 * // => true
		 *
		 * object === other;
		 * // => false
		 */
		function isEqual(value, other) {
		  return baseIsEqual(value, other);
		}

		module.exports = isEqual;


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(module, global) {/**
		 * lodash 4.0.3 (Custom Build) <https://lodash.com/>
		 * Build: `lodash modularize exports="npm" -o ./`
		 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
		 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
		 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		 * Available under MIT license <https://lodash.com/license>
		 */
		var Stack = __webpack_require__(4),
		    keys = __webpack_require__(6);

		/** Used to compose bitmasks for comparison styles. */
		var UNORDERED_COMPARE_FLAG = 1,
		    PARTIAL_COMPARE_FLAG = 2;

		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER = 9007199254740991;

		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    arrayTag = '[object Array]',
		    boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    funcTag = '[object Function]',
		    genTag = '[object GeneratorFunction]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    objectTag = '[object Object]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    symbolTag = '[object Symbol]',
		    weakMapTag = '[object WeakMap]';

		var arrayBufferTag = '[object ArrayBuffer]',
		    float32Tag = '[object Float32Array]',
		    float64Tag = '[object Float64Array]',
		    int8Tag = '[object Int8Array]',
		    int16Tag = '[object Int16Array]',
		    int32Tag = '[object Int32Array]',
		    uint8Tag = '[object Uint8Array]',
		    uint8ClampedTag = '[object Uint8ClampedArray]',
		    uint16Tag = '[object Uint16Array]',
		    uint32Tag = '[object Uint32Array]';

		/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
		var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

		/** Used to detect host constructors (Safari > 5). */
		var reIsHostCtor = /^\[object .+?Constructor\]$/;

		/** Used to identify `toStringTag` values of typed arrays. */
		var typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
		typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
		typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
		typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
		typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
		typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
		typedArrayTags[dateTag] = typedArrayTags[errorTag] =
		typedArrayTags[funcTag] = typedArrayTags[mapTag] =
		typedArrayTags[numberTag] = typedArrayTags[objectTag] =
		typedArrayTags[regexpTag] = typedArrayTags[setTag] =
		typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

		/** Used to determine if values are of the language type `Object`. */
		var objectTypes = {
		  'function': true,
		  'object': true
		};

		/** Detect free variable `exports`. */
		var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;

		/** Detect free variable `module`. */
		var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;

		/** Detect free variable `global` from Node.js. */
		var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

		/** Detect free variable `self`. */
		var freeSelf = checkGlobal(objectTypes[typeof self] && self);

		/** Detect free variable `window`. */
		var freeWindow = checkGlobal(objectTypes[typeof window] && window);

		/** Detect `this` as the global object. */
		var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

		/**
		 * Used as a reference to the global object.
		 *
		 * The `this` value is used if it's the global object to avoid Greasemonkey's
		 * restricted `window` object, otherwise the `window` object is used.
		 */
		var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();

		/**
		 * A specialized version of `_.some` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} predicate The function invoked per iteration.
		 * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
		 */
		function arraySome(array, predicate) {
		  var index = -1,
		      length = array.length;

		  while (++index < length) {
		    if (predicate(array[index], index, array)) {
		      return true;
		    }
		  }
		  return false;
		}

		/**
		 * Checks if `value` is a global object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
		 */
		function checkGlobal(value) {
		  return (value && value.Object === Object) ? value : null;
		}

		/**
		 * Checks if `value` is a host object in IE < 9.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
		 */
		function isHostObject(value) {
		  // Many host objects are `Object` objects that can coerce to strings
		  // despite having improperly defined `toString` methods.
		  var result = false;
		  if (value != null && typeof value.toString != 'function') {
		    try {
		      result = !!(value + '');
		    } catch (e) {}
		  }
		  return result;
		}

		/**
		 * Converts `map` to an array.
		 *
		 * @private
		 * @param {Object} map The map to convert.
		 * @returns {Array} Returns the converted array.
		 */
		function mapToArray(map) {
		  var index = -1,
		      result = Array(map.size);

		  map.forEach(function(value, key) {
		    result[++index] = [key, value];
		  });
		  return result;
		}

		/**
		 * Converts `set` to an array.
		 *
		 * @private
		 * @param {Object} set The set to convert.
		 * @returns {Array} Returns the converted array.
		 */
		function setToArray(set) {
		  var index = -1,
		      result = Array(set.size);

		  set.forEach(function(value) {
		    result[++index] = value;
		  });
		  return result;
		}

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to resolve the decompiled source of functions. */
		var funcToString = Function.prototype.toString;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var objectToString = objectProto.toString;

		/** Used to detect if a method is native. */
		var reIsNative = RegExp('^' +
		  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
		  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
		);

		/** Built-in value references. */
		var Symbol = root.Symbol,
		    Uint8Array = root.Uint8Array,
		    getPrototypeOf = Object.getPrototypeOf;

		/* Built-in method references that are verified to be native. */
		var Map = getNative(root, 'Map'),
		    Set = getNative(root, 'Set');

		/** Used to detect maps and sets. */
		var mapCtorString = Map ? funcToString.call(Map) : '',
		    setCtorString = Set ? funcToString.call(Set) : '';

		/** Used to convert symbols to primitives and strings. */
		var symbolProto = Symbol ? Symbol.prototype : undefined,
		    symbolValueOf = Symbol ? symbolProto.valueOf : undefined;

		/**
		 * The base implementation of `_.has` without support for deep paths.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} key The key to check.
		 * @returns {boolean} Returns `true` if `key` exists, else `false`.
		 */
		function baseHas(object, key) {
		  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
		  // that are composed entirely of index properties, return `false` for
		  // `hasOwnProperty` checks of them.
		  return hasOwnProperty.call(object, key) ||
		    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
		}

		/**
		 * The base implementation of `_.isEqual` which supports partial comparisons
		 * and tracks traversed objects.
		 *
		 * @private
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {boolean} [bitmask] The bitmask of comparison flags.
		 *  The bitmask may be composed of the following flags:
		 *     1 - Unordered comparison
		 *     2 - Partial comparison
		 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 */
		function baseIsEqual(value, other, customizer, bitmask, stack) {
		  if (value === other) {
		    return true;
		  }
		  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
		    return value !== value && other !== other;
		  }
		  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
		}

		/**
		 * A specialized version of `baseIsEqual` for arrays and objects which performs
		 * deep comparisons and tracks traversed objects enabling objects with circular
		 * references to be compared.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
		 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
		  var objIsArr = isArray(object),
		      othIsArr = isArray(other),
		      objTag = arrayTag,
		      othTag = arrayTag;

		  if (!objIsArr) {
		    objTag = getTag(object);
		    if (objTag == argsTag) {
		      objTag = objectTag;
		    } else if (objTag != objectTag) {
		      objIsArr = isTypedArray(object);
		    }
		  }
		  if (!othIsArr) {
		    othTag = getTag(other);
		    if (othTag == argsTag) {
		      othTag = objectTag;
		    } else if (othTag != objectTag) {
		      othIsArr = isTypedArray(other);
		    }
		  }
		  var objIsObj = objTag == objectTag && !isHostObject(object),
		      othIsObj = othTag == objectTag && !isHostObject(other),
		      isSameTag = objTag == othTag;

		  if (isSameTag && !(objIsArr || objIsObj)) {
		    return equalByTag(object, other, objTag, equalFunc, customizer, bitmask);
		  }
		  var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
		  if (!isPartial) {
		    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
		        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

		    if (objIsWrapped || othIsWrapped) {
		      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
		    }
		  }
		  if (!isSameTag) {
		    return false;
		  }
		  stack || (stack = new Stack);
		  return (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, bitmask, stack);
		}

		/**
		 * A specialized version of `baseIsEqualDeep` for arrays with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Array} array The array to compare.
		 * @param {Array} other The other array to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
		 * @param {Object} [stack] Tracks traversed `array` and `other` objects.
		 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
		 */
		function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
		  var index = -1,
		      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
		      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
		      arrLength = array.length,
		      othLength = other.length;

		  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
		    return false;
		  }
		  // Assume cyclic values are equal.
		  var stacked = stack.get(array);
		  if (stacked) {
		    return stacked == other;
		  }
		  var result = true;
		  stack.set(array, other);

		  // Ignore non-index properties.
		  while (++index < arrLength) {
		    var arrValue = array[index],
		        othValue = other[index];

		    if (customizer) {
		      var compared = isPartial
		        ? customizer(othValue, arrValue, index, other, array, stack)
		        : customizer(arrValue, othValue, index, array, other, stack);
		    }
		    if (compared !== undefined) {
		      if (compared) {
		        continue;
		      }
		      result = false;
		      break;
		    }
		    // Recursively compare arrays (susceptible to call stack limits).
		    if (isUnordered) {
		      if (!arraySome(other, function(othValue) {
		            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
		          })) {
		        result = false;
		        break;
		      }
		    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
		      result = false;
		      break;
		    }
		  }
		  stack['delete'](array);
		  return result;
		}

		/**
		 * A specialized version of `baseIsEqualDeep` for comparing objects of
		 * the same `toStringTag`.
		 *
		 * **Note:** This function only supports comparing values with tags of
		 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {string} tag The `toStringTag` of the objects to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function equalByTag(object, other, tag, equalFunc, customizer, bitmask) {
		  switch (tag) {
		    case arrayBufferTag:
		      if ((object.byteLength != other.byteLength) ||
		          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
		        return false;
		      }
		      return true;

		    case boolTag:
		    case dateTag:
		      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
		      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
		      return +object == +other;

		    case errorTag:
		      return object.name == other.name && object.message == other.message;

		    case numberTag:
		      // Treat `NaN` vs. `NaN` as equal.
		      return (object != +object) ? other != +other : object == +other;

		    case regexpTag:
		    case stringTag:
		      // Coerce regexes to strings and treat strings primitives and string
		      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
		      return object == (other + '');

		    case mapTag:
		      var convert = mapToArray;

		    case setTag:
		      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
		      convert || (convert = setToArray);

		      // Recursively compare objects (susceptible to call stack limits).
		      return (isPartial || object.size == other.size) &&
		        equalFunc(convert(object), convert(other), customizer, bitmask | UNORDERED_COMPARE_FLAG);

		    case symbolTag:
		      return !!Symbol && (symbolValueOf.call(object) == symbolValueOf.call(other));
		  }
		  return false;
		}

		/**
		 * A specialized version of `baseIsEqualDeep` for objects with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
		 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
		  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
		      objProps = keys(object),
		      objLength = objProps.length,
		      othProps = keys(other),
		      othLength = othProps.length;

		  if (objLength != othLength && !isPartial) {
		    return false;
		  }
		  var index = objLength;
		  while (index--) {
		    var key = objProps[index];
		    if (!(isPartial ? key in other : baseHas(other, key))) {
		      return false;
		    }
		  }
		  // Assume cyclic values are equal.
		  var stacked = stack.get(object);
		  if (stacked) {
		    return stacked == other;
		  }
		  var result = true;
		  stack.set(object, other);

		  var skipCtor = isPartial;
		  while (++index < objLength) {
		    key = objProps[index];
		    var objValue = object[key],
		        othValue = other[key];

		    if (customizer) {
		      var compared = isPartial
		        ? customizer(othValue, objValue, key, other, object, stack)
		        : customizer(objValue, othValue, key, object, other, stack);
		    }
		    // Recursively compare objects (susceptible to call stack limits).
		    if (!(compared === undefined
		          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
		          : compared
		        )) {
		      result = false;
		      break;
		    }
		    skipCtor || (skipCtor = key == 'constructor');
		  }
		  if (result && !skipCtor) {
		    var objCtor = object.constructor,
		        othCtor = other.constructor;

		    // Non `Object` object instances with different constructors are not equal.
		    if (objCtor != othCtor &&
		        ('constructor' in object && 'constructor' in other) &&
		        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
		          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
		      result = false;
		    }
		  }
		  stack['delete'](object);
		  return result;
		}

		/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */
		function getNative(object, key) {
		  var value = object == null ? undefined : object[key];
		  return isNative(value) ? value : undefined;
		}

		/**
		 * Gets the `toStringTag` of `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		function getTag(value) {
		  return objectToString.call(value);
		}

		// Fallback for IE 11 providing `toStringTag` values for maps and sets.
		if ((Map && getTag(new Map) != mapTag) || (Set && getTag(new Set) != setTag)) {
		  getTag = function(value) {
		    var result = objectToString.call(value),
		        Ctor = result == objectTag ? value.constructor : null,
		        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';

		    if (ctorString) {
		      if (ctorString == mapCtorString) {
		        return mapTag;
		      }
		      if (ctorString == setCtorString) {
		        return setTag;
		      }
		    }
		    return result;
		  };
		}

		/**
		 * Checks if `value` is classified as an `Array` object.
		 *
		 * @static
		 * @memberOf _
		 * @type Function
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
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

		/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */
		function isFunction(value) {
		  // The use of `Object#toString` avoids issues with the `typeof` operator
		  // in Safari 8 which returns 'object' for typed array constructors, and
		  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
		  var tag = isObject(value) ? objectToString.call(value) : '';
		  return tag == funcTag || tag == genTag;
		}

		/**
		 * Checks if `value` is a valid array-like length.
		 *
		 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
		 *
		 * @static
		 * @memberOf _
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

		/**
		 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
		 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
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
		  return !!value && (type == 'object' || type == 'function');
		}

		/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
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
		  return !!value && typeof value == 'object';
		}

		/**
		 * Checks if `value` is a native function.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
		 * @example
		 *
		 * _.isNative(Array.prototype.push);
		 * // => true
		 *
		 * _.isNative(_);
		 * // => false
		 */
		function isNative(value) {
		  if (value == null) {
		    return false;
		  }
		  if (isFunction(value)) {
		    return reIsNative.test(funcToString.call(value));
		  }
		  return isObjectLike(value) &&
		    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
		}

		/**
		 * Checks if `value` is classified as a typed array.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isTypedArray(new Uint8Array);
		 * // => true
		 *
		 * _.isTypedArray([]);
		 * // => false
		 */
		function isTypedArray(value) {
		  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
		}

		module.exports = baseIsEqual;

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module), (function() { return this; }())))

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * lodash 4.0.2 (Custom Build) <https://lodash.com/>
		 * Build: `lodash modularize exports="npm" -o ./`
		 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
		 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
		 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		 * Available under MIT license <https://lodash.com/license>
		 */
		var MapCache = __webpack_require__(5);

		/** Used as the size to enable large array optimizations. */
		var LARGE_ARRAY_SIZE = 200;

		/** Used for built-in method references. */
		var arrayProto = Array.prototype;

		/** Built-in value references. */
		var splice = arrayProto.splice;

		/**
		 * Creates a stack cache object to store key-value pairs.
		 *
		 * @private
		 * @param {Array} [values] The values to cache.
		 */
		function Stack(values) {
		  var index = -1,
		      length = values ? values.length : 0;

		  this.clear();
		  while (++index < length) {
		    var entry = values[index];
		    this.set(entry[0], entry[1]);
		  }
		}

		/**
		 * Removes all key-value entries from the stack.
		 *
		 * @private
		 * @name clear
		 * @memberOf Stack
		 */
		function stackClear() {
		  this.__data__ = { 'array': [], 'map': null };
		}

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
		      array = data.array;

		  return array ? assocDelete(array, key) : data.map['delete'](key);
		}

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
		  var data = this.__data__,
		      array = data.array;

		  return array ? assocGet(array, key) : data.map.get(key);
		}

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
		  var data = this.__data__,
		      array = data.array;

		  return array ? assocHas(array, key) : data.map.has(key);
		}

		/**
		 * Sets the stack `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Stack
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the stack cache object.
		 */
		function stackSet(key, value) {
		  var data = this.__data__,
		      array = data.array;

		  if (array) {
		    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
		      assocSet(array, key, value);
		    } else {
		      data.array = null;
		      data.map = new MapCache(array);
		    }
		  }
		  var map = data.map;
		  if (map) {
		    map.set(key, value);
		  }
		  return this;
		}

		/**
		 * Removes `key` and its value from the associative array.
		 *
		 * @private
		 * @param {Array} array The array to query.
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function assocDelete(array, key) {
		  var index = assocIndexOf(array, key);
		  if (index < 0) {
		    return false;
		  }
		  var lastIndex = array.length - 1;
		  if (index == lastIndex) {
		    array.pop();
		  } else {
		    splice.call(array, index, 1);
		  }
		  return true;
		}

		/**
		 * Gets the associative array value for `key`.
		 *
		 * @private
		 * @param {Array} array The array to query.
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function assocGet(array, key) {
		  var index = assocIndexOf(array, key);
		  return index < 0 ? undefined : array[index][1];
		}

		/**
		 * Checks if an associative array value for `key` exists.
		 *
		 * @private
		 * @param {Array} array The array to query.
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function assocHas(array, key) {
		  return assocIndexOf(array, key) > -1;
		}

		/**
		 * Gets the index at which the first occurrence of `key` is found in `array`
		 * of key-value pairs.
		 *
		 * @private
		 * @param {Array} array The array to search.
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

		/**
		 * Sets the associative array `key` to `value`.
		 *
		 * @private
		 * @param {Array} array The array to modify.
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 */
		function assocSet(array, key, value) {
		  var index = assocIndexOf(array, key);
		  if (index < 0) {
		    array.push([key, value]);
		  } else {
		    array[index][1] = value;
		  }
		}

		/**
		 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * comparison between two values to determine if they are equivalent.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 * @example
		 *
		 * var object = { 'user': 'fred' };
		 * var other = { 'user': 'fred' };
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
		  return value === other || (value !== value && other !== other);
		}

		// Add functions to the `Stack` cache.
		Stack.prototype.clear = stackClear;
		Stack.prototype['delete'] = stackDelete;
		Stack.prototype.get = stackGet;
		Stack.prototype.has = stackHas;
		Stack.prototype.set = stackSet;

		module.exports = Stack;


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(module, global) {/**
		 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
		 * Build: `lodash modularize exports="npm" -o ./`
		 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
		 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
		 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		 * Available under MIT license <https://lodash.com/license>
		 */

		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = '__lodash_hash_undefined__';

		/** `Object#toString` result references. */
		var funcTag = '[object Function]',
		    genTag = '[object GeneratorFunction]';

		/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
		var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

		/** Used to detect host constructors (Safari > 5). */
		var reIsHostCtor = /^\[object .+?Constructor\]$/;

		/** Used to determine if values are of the language type `Object`. */
		var objectTypes = {
		  'function': true,
		  'object': true
		};

		/** Detect free variable `exports`. */
		var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;

		/** Detect free variable `module`. */
		var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;

		/** Detect free variable `global` from Node.js. */
		var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

		/** Detect free variable `self`. */
		var freeSelf = checkGlobal(objectTypes[typeof self] && self);

		/** Detect free variable `window`. */
		var freeWindow = checkGlobal(objectTypes[typeof window] && window);

		/** Detect `this` as the global object. */
		var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

		/**
		 * Used as a reference to the global object.
		 *
		 * The `this` value is used if it's the global object to avoid Greasemonkey's
		 * restricted `window` object, otherwise the `window` object is used.
		 */
		var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();

		/**
		 * Checks if `value` is a global object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
		 */
		function checkGlobal(value) {
		  return (value && value.Object === Object) ? value : null;
		}

		/**
		 * Checks if `value` is a host object in IE < 9.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
		 */
		function isHostObject(value) {
		  // Many host objects are `Object` objects that can coerce to strings
		  // despite having improperly defined `toString` methods.
		  var result = false;
		  if (value != null && typeof value.toString != 'function') {
		    try {
		      result = !!(value + '');
		    } catch (e) {}
		  }
		  return result;
		}

		/** Used for built-in method references. */
		var arrayProto = Array.prototype,
		    objectProto = Object.prototype;

		/** Used to resolve the decompiled source of functions. */
		var funcToString = Function.prototype.toString;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var objectToString = objectProto.toString;

		/** Used to detect if a method is native. */
		var reIsNative = RegExp('^' +
		  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
		  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
		);

		/** Built-in value references. */
		var splice = arrayProto.splice;

		/* Built-in method references that are verified to be native. */
		var Map = getNative(root, 'Map'),
		    nativeCreate = getNative(Object, 'create');

		/**
		 * Creates an hash object.
		 *
		 * @private
		 * @returns {Object} Returns the new hash object.
		 */
		function Hash() {}

		/**
		 * Removes `key` and its value from the hash.
		 *
		 * @private
		 * @param {Object} hash The hash to modify.
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function hashDelete(hash, key) {
		  return hashHas(hash, key) && delete hash[key];
		}

		/**
		 * Gets the hash value for `key`.
		 *
		 * @private
		 * @param {Object} hash The hash to query.
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function hashGet(hash, key) {
		  if (nativeCreate) {
		    var result = hash[key];
		    return result === HASH_UNDEFINED ? undefined : result;
		  }
		  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
		}

		/**
		 * Checks if a hash value for `key` exists.
		 *
		 * @private
		 * @param {Object} hash The hash to query.
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function hashHas(hash, key) {
		  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
		}

		/**
		 * Sets the hash `key` to `value`.
		 *
		 * @private
		 * @param {Object} hash The hash to modify.
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 */
		function hashSet(hash, key, value) {
		  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
		}

		/**
		 * Creates a map cache object to store key-value pairs.
		 *
		 * @private
		 * @param {Array} [values] The values to cache.
		 */
		function MapCache(values) {
		  var index = -1,
		      length = values ? values.length : 0;

		  this.clear();
		  while (++index < length) {
		    var entry = values[index];
		    this.set(entry[0], entry[1]);
		  }
		}

		/**
		 * Removes all key-value entries from the map.
		 *
		 * @private
		 * @name clear
		 * @memberOf MapCache
		 */
		function mapClear() {
		  this.__data__ = { 'hash': new Hash, 'map': Map ? new Map : [], 'string': new Hash };
		}

		/**
		 * Removes `key` and its value from the map.
		 *
		 * @private
		 * @name delete
		 * @memberOf MapCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function mapDelete(key) {
		  var data = this.__data__;
		  if (isKeyable(key)) {
		    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
		  }
		  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
		}

		/**
		 * Gets the map value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf MapCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function mapGet(key) {
		  var data = this.__data__;
		  if (isKeyable(key)) {
		    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
		  }
		  return Map ? data.map.get(key) : assocGet(data.map, key);
		}

		/**
		 * Checks if a map value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf MapCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function mapHas(key) {
		  var data = this.__data__;
		  if (isKeyable(key)) {
		    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
		  }
		  return Map ? data.map.has(key) : assocHas(data.map, key);
		}

		/**
		 * Sets the map `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf MapCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the map cache object.
		 */
		function mapSet(key, value) {
		  var data = this.__data__;
		  if (isKeyable(key)) {
		    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
		  } else if (Map) {
		    data.map.set(key, value);
		  } else {
		    assocSet(data.map, key, value);
		  }
		  return this;
		}

		/**
		 * Removes `key` and its value from the associative array.
		 *
		 * @private
		 * @param {Array} array The array to query.
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function assocDelete(array, key) {
		  var index = assocIndexOf(array, key);
		  if (index < 0) {
		    return false;
		  }
		  var lastIndex = array.length - 1;
		  if (index == lastIndex) {
		    array.pop();
		  } else {
		    splice.call(array, index, 1);
		  }
		  return true;
		}

		/**
		 * Gets the associative array value for `key`.
		 *
		 * @private
		 * @param {Array} array The array to query.
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function assocGet(array, key) {
		  var index = assocIndexOf(array, key);
		  return index < 0 ? undefined : array[index][1];
		}

		/**
		 * Checks if an associative array value for `key` exists.
		 *
		 * @private
		 * @param {Array} array The array to query.
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function assocHas(array, key) {
		  return assocIndexOf(array, key) > -1;
		}

		/**
		 * Gets the index at which the first occurrence of `key` is found in `array`
		 * of key-value pairs.
		 *
		 * @private
		 * @param {Array} array The array to search.
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

		/**
		 * Sets the associative array `key` to `value`.
		 *
		 * @private
		 * @param {Array} array The array to modify.
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 */
		function assocSet(array, key, value) {
		  var index = assocIndexOf(array, key);
		  if (index < 0) {
		    array.push([key, value]);
		  } else {
		    array[index][1] = value;
		  }
		}

		/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */
		function getNative(object, key) {
		  var value = object == null ? undefined : object[key];
		  return isNative(value) ? value : undefined;
		}

		/**
		 * Checks if `value` is suitable for use as unique object key.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
		 */
		function isKeyable(value) {
		  var type = typeof value;
		  return type == 'number' || type == 'boolean' ||
		    (type == 'string' && value !== '__proto__') || value == null;
		}

		/**
		 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * comparison between two values to determine if they are equivalent.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 * @example
		 *
		 * var object = { 'user': 'fred' };
		 * var other = { 'user': 'fred' };
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
		  return value === other || (value !== value && other !== other);
		}

		/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */
		function isFunction(value) {
		  // The use of `Object#toString` avoids issues with the `typeof` operator
		  // in Safari 8 which returns 'object' for typed array constructors, and
		  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
		  var tag = isObject(value) ? objectToString.call(value) : '';
		  return tag == funcTag || tag == genTag;
		}

		/**
		 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
		 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
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
		  return !!value && (type == 'object' || type == 'function');
		}

		/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
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
		  return !!value && typeof value == 'object';
		}

		/**
		 * Checks if `value` is a native function.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
		 * @example
		 *
		 * _.isNative(Array.prototype.push);
		 * // => true
		 *
		 * _.isNative(_);
		 * // => false
		 */
		function isNative(value) {
		  if (value == null) {
		    return false;
		  }
		  if (isFunction(value)) {
		    return reIsNative.test(funcToString.call(value));
		  }
		  return isObjectLike(value) &&
		    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
		}

		// Avoid inheriting from `Object.prototype` when possible.
		Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

		// Add functions to the `MapCache`.
		MapCache.prototype.clear = mapClear;
		MapCache.prototype['delete'] = mapDelete;
		MapCache.prototype.get = mapGet;
		MapCache.prototype.has = mapHas;
		MapCache.prototype.set = mapSet;

		module.exports = MapCache;

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module), (function() { return this; }())))

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		/**
		 * lodash 4.0.2 (Custom Build) <https://lodash.com/>
		 * Build: `lodash modularize exports="npm" -o ./`
		 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
		 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
		 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		 * Available under MIT license <https://lodash.com/license>
		 */

		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER = 9007199254740991;

		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    funcTag = '[object Function]',
		    genTag = '[object GeneratorFunction]',
		    stringTag = '[object String]';

		/** Used to detect unsigned integer values. */
		var reIsUint = /^(?:0|[1-9]\d*)$/;

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

		/**
		 * Checks if `value` is a valid array-like index.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		 */
		function isIndex(value, length) {
		  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
		  length = length == null ? MAX_SAFE_INTEGER : length;
		  return value > -1 && value % 1 == 0 && value < length;
		}

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var objectToString = objectProto.toString;

		/** Built-in value references. */
		var getPrototypeOf = Object.getPrototypeOf,
		    propertyIsEnumerable = objectProto.propertyIsEnumerable;

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeKeys = Object.keys;

		/**
		 * The base implementation of `_.has` without support for deep paths.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} key The key to check.
		 * @returns {boolean} Returns `true` if `key` exists, else `false`.
		 */
		function baseHas(object, key) {
		  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
		  // that are composed entirely of index properties, return `false` for
		  // `hasOwnProperty` checks of them.
		  return hasOwnProperty.call(object, key) ||
		    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
		}

		/**
		 * The base implementation of `_.keys` which doesn't skip the constructor
		 * property of prototypes or treat sparse arrays as dense.
		 *
		 * @private
		 * @type Function
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */
		function baseKeys(object) {
		  return nativeKeys(Object(object));
		}

		/**
		 * The base implementation of `_.property` without support for deep paths.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @returns {Function} Returns the new function.
		 */
		function baseProperty(key) {
		  return function(object) {
		    return object == null ? undefined : object[key];
		  };
		}

		/**
		 * Gets the "length" property value of `object`.
		 *
		 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
		 * that affects Safari on at least iOS 8.1-8.3 ARM64.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {*} Returns the "length" value.
		 */
		var getLength = baseProperty('length');

		/**
		 * Creates an array of index keys for `object` values of arrays,
		 * `arguments` objects, and strings, otherwise `null` is returned.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array|null} Returns index keys, else `null`.
		 */
		function indexKeys(object) {
		  var length = object ? object.length : undefined;
		  if (isLength(length) &&
		      (isArray(object) || isString(object) || isArguments(object))) {
		    return baseTimes(length, String);
		  }
		  return null;
		}

		/**
		 * Checks if `value` is likely a prototype object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		 */
		function isPrototype(value) {
		  var Ctor = value && value.constructor,
		      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

		  return value === proto;
		}

		/**
		 * Checks if `value` is likely an `arguments` object.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isArguments(function() { return arguments; }());
		 * // => true
		 *
		 * _.isArguments([1, 2, 3]);
		 * // => false
		 */
		function isArguments(value) {
		  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
		  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
		    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
		}

		/**
		 * Checks if `value` is classified as an `Array` object.
		 *
		 * @static
		 * @memberOf _
		 * @type Function
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
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

		/**
		 * Checks if `value` is array-like. A value is considered array-like if it's
		 * not a function and has a `value.length` that's an integer greater than or
		 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
		 *
		 * @static
		 * @memberOf _
		 * @type Function
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
		  return value != null &&
		    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
		}

		/**
		 * This method is like `_.isArrayLike` except that it also checks if `value`
		 * is an object.
		 *
		 * @static
		 * @memberOf _
		 * @type Function
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
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

		/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */
		function isFunction(value) {
		  // The use of `Object#toString` avoids issues with the `typeof` operator
		  // in Safari 8 which returns 'object' for typed array constructors, and
		  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
		  var tag = isObject(value) ? objectToString.call(value) : '';
		  return tag == funcTag || tag == genTag;
		}

		/**
		 * Checks if `value` is a valid array-like length.
		 *
		 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
		 *
		 * @static
		 * @memberOf _
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

		/**
		 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
		 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
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
		  return !!value && (type == 'object' || type == 'function');
		}

		/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
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
		  return !!value && typeof value == 'object';
		}

		/**
		 * Checks if `value` is classified as a `String` primitive or object.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isString('abc');
		 * // => true
		 *
		 * _.isString(1);
		 * // => false
		 */
		function isString(value) {
		  return typeof value == 'string' ||
		    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
		}

		/**
		 * Creates an array of the own enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects. See the
		 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
		 * for more details.
		 *
		 * @static
		 * @memberOf _
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
		 * _.keys(new Foo);
		 * // => ['a', 'b'] (iteration order is not guaranteed)
		 *
		 * _.keys('hi');
		 * // => ['0', '1']
		 */
		function keys(object) {
		  var isProto = isPrototype(object);
		  if (!(isProto || isArrayLike(object))) {
		    return baseKeys(object);
		  }
		  var indexes = indexKeys(object),
		      skipIndexes = !!indexes,
		      result = indexes || [],
		      length = result.length;

		  for (var key in object) {
		    if (baseHas(object, key) &&
		        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
		        !(isProto && key == 'constructor')) {
		      result.push(key);
		    }
		  }
		  return result;
		}

		module.exports = keys;


	/***/ }
	/******/ ]);

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Models the camps
	 */

	var Camp = function () {

		/**
	  * @param {object} model
	  */

		function Camp(model) {
			_classCallCheck(this, Camp);

			this.capacity = model.capacity;
			this.lvls = model.lvls;
			this.lvl = model.lvl;
			this.folder = model.folder;
			this.building = model.building;
			this.name = model.name;
		}

		/**
	  * Actual capacity
	  * 
	  * @return {int}
	  */

		_createClass(Camp, [{
			key: "actualCapacity",
			value: function actualCapacity() {
				return this.capacity[this.lvl];
			}
		}]);

		return Camp;
	}();

	exports.default = Camp;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _camp = __webpack_require__(15);

	var _camp2 = _interopRequireDefault(_camp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Handles all the staging buildings of a specific kind
	 */

	var StagingBuilding = function () {
		/**
	  * @param {array} array of Camp models
	  * @param {string} buildings name
	  */

		function StagingBuilding(model, name) {
			_classCallCheck(this, StagingBuilding);

			this.name = name;
			this.differentBuildings = model.length;
			this.showTroops = false;

			this.buildings = [];

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = model[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					this.buildings.push(new _camp2.default(value));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		/**
	  * Units that can fit in
	  * 
	  * @return {int} amount
	  */

		_createClass(StagingBuilding, [{
			key: 'maxAmount',
			value: function maxAmount() {
				return this.buildings.map(function (building, i) {
					return building.actualCapacity();
				}).reduce(function (a, b) {
					return a + b;
				});
			}

			/**
	   * Checks if capacity is exeeded
	   * 
	   * @param {array[Unit]}
	   */

		}, {
			key: 'limitExeeded',
			value: function limitExeeded(units) {
				var total = units.map(function (unit) {
					return unit.spaceUsed();
				}).reduce(function (a, b) {
					return a + b;
				});
				return this.maxAmount() < total;
			}
		}]);

		return StagingBuilding;
	}();

	exports.default = StagingBuilding;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Models a single unit
	 */

	var Unit = function () {
		/**
	  * @param {object} model
	  */

		function Unit(model) {
			_classCallCheck(this, Unit);

			this.id = model.id;
			this.unit = model.unit;
			this.folder = model.folder;
			this.name = model.name;
			this.cost = model.cost;
			this.lvls = model.lvls;
			this.lvl = model.lvl;
			this.time = model.time;
			this.space = model.space;
			this.amount = model.amount;
		}

		/**
	  * Gets the actual costof a single unit
	  * 
	  * @return {int} cost
	  */

		_createClass(Unit, [{
			key: "actualCost",
			value: function actualCost() {
				return this.cost[this.lvl];
			}

			/**
	   * Gets the total cost
	   * 
	   * @return {int} cost
	   */

		}, {
			key: "totalCost",
			value: function totalCost() {
				return this.actualCost() * this.amount;
			}

			/**
	   * Space used by the units
	   * 
	   */

		}, {
			key: "spaceUsed",
			value: function spaceUsed() {
				return this.space * this.amount;
			}

			/**
	   * Time to produce all the units
	   */

		}, {
			key: "totalTime",
			value: function totalTime() {
				return this.time * this.amount;
			}

			/**
	   * Set lvl of the unit
	   * 
	   * @param {int} lvl
	   */

		}, {
			key: "setLvl",
			value: function setLvl(lvl) {
				if (lvl >= this.lvls[0] && lvl <= this.lvls.last()) this.lvl = lvl;
			}
		}]);

		return Unit;
	}();

	exports.default = Unit;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Models a troop training building
	 */

	var Trainer = function () {

		/**
	  * @param {object} model
	  */

		function Trainer(model) {
			_classCallCheck(this, Trainer);

			this.folder = model.folder;
			this.building = model.building;
			this.name = model.name;
			this.capacity = model.capacity;
			this.lvls = model.lvls;
			this.lvl = model.lvl;
			this.amount = model.amount;
			this.unitSpaces = []; // populated with the space the units take
			this.unitsTime = []; // populated with the time the units take

			this.showTroops = true;
		}
		/**
	  * Checks if there is space left to produce units
	  * 
	  * @param {int} unit index
	  * @return {bool}
	  */

		_createClass(Trainer, [{
			key: "hasSpaceFor",
			value: function hasSpaceFor(index) {
				return this.queuedUnits() + this.unitSpaces[index] <= this.actualCapacity();
			}

			/**
	   * Checks if a unit is available for production
	   * 
	   * the first lvl correspons to the id of the unit
	   * because each lvl the trainer can produce a new unit
	   * and units are ordered by its id
	   * 
	   * @param {int} first lvl the unit is produced at
	   * @return {bool}
	   */

		}, {
			key: "canTrain",
			value: function canTrain(firstLvl) {
				return this.lvl > firstLvl;
			}

			/**
	   * Gets the actual capacity
	   * 
	   * @return {int} capacity
	   */

		}, {
			key: "actualCapacity",
			value: function actualCapacity() {
				return this.capacity[this.lvl];
			}

			/**
	   * Get amount of queued units
	   * 
	   * @return {int} amount
	   */

		}, {
			key: "queuedUnits",
			value: function queuedUnits() {
				var _this = this;

				return this.amount.map(function (val, i) {
					return _this.amount[i] * _this.unitSpaces[i];
				}).reduce(function (a, b) {
					return a + b;
				});
			}

			/**
	   * Time to produce all queued units
	   */

		}, {
			key: "time",
			value: function time() {
				var _this2 = this;

				return this.amount.map(function (amount, i) {
					return amount * _this2.unitsTime[i];
				}).reduce(function (a, b) {
					return a + b;
				});
			}

			/**
	   * Get the cost of the queued units
	   * 
	   * @param {array[Unit]} units
	   * @return {int} cost
	   */

		}, {
			key: "unitsCost",
			value: function unitsCost(units) {
				var _this3 = this;

				return this.amount.map(function (val, i) {
					return _this3.amount[i] * units[i].actualCost();
				}).reduce(function (a, b) {
					return a + b;
				});
			}

			/**
	   * Set the level
	   * 
	   * @param {int} lvl
	   */

		}, {
			key: "setLvl",
			value: function setLvl(lvl) {
				if (lvl >= this.lvls[0] && lvl <= this.lvls.last()) this.lvl = lvl;
			}

			/**
	   * Reset Amount
	   */

		}, {
			key: "resetAmount",
			value: function resetAmount() {
				this.amount = this.amount.map(function () {
					return 0;
				});
			}

			/**
	   * Add one unit to the queue units
	   * 
	   * @param {int} unit index
	   */

		}, {
			key: "addUnit",
			value: function addUnit(id) {
				this.amount[id]++;
			}
		}]);

		return Trainer;
	}();

	exports.default = Trainer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _unit = __webpack_require__(17);

	var _unit2 = _interopRequireDefault(_unit);

	var _trainer = __webpack_require__(18);

	var _trainer2 = _interopRequireDefault(_trainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UnitType = function () {
		/**
	  * @param {object} unit model
	  * @param {string} unit name
	  * @param {object} trainers models
	  * @param {string} trainers name
	  */

		function UnitType(unitsModel, unitsName, trainersModel, trainersName) {
			_classCallCheck(this, UnitType);

			this.names = {
				units: unitsName,
				trainers: trainersName
			};
			this.initUnits(unitsModel);
			this.initTrainers(trainersModel);
		}

		/**
	  * Initializes the units
	  */

		_createClass(UnitType, [{
			key: 'initUnits',
			value: function initUnits(unitsModel) {
				this.units = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = unitsModel[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var unitModel = _step.value;

						this.units.push(new _unit2.default(unitModel));
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}

			/**
	   * Initializes the trainers
	   */

		}, {
			key: 'initTrainers',
			value: function initTrainers(trainersModel) {
				this.trainers = [];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = trainersModel[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var trainerModel = _step2.value;

						this.trainers.push(new _trainer2.default(trainerModel));
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = this.trainers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var trainer = _step3.value;

						trainer.unitSpaces = this.units.map(function (unit) {
							return unit.space;
						});
						trainer.unitsTime = this.units.map(function (unit) {
							return unit.time;
						});
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}

			/**
	   * Space taken by units
	   * 
	   * @return {int} space
	   */

		}, {
			key: 'spaceUsed',
			value: function spaceUsed() {
				return this.units.map(function (unit) {
					return unit.spaceUsed();
				}).reduce(function (a, b) {
					return a + b;
				});
			}

			/**
	   * Total cost of units
	   * 
	   * @return {int} cost
	   */

		}, {
			key: 'cost',
			value: function cost() {
				return this.units.map(function (unit) {
					return unit.totalCost();
				}).reduce(function (a, b) {
					return a + b;
				});
			}

			/**
	   * Total time to produce units
	   * 
	   * @return {int} units
	   */

		}, {
			key: 'time',
			value: function time() {
				return this.units.map(function (unit) {
					return unit.totalTime();
				}).reduce(function (a, b) {
					return a + b;
				});
			}

			/**
	   * Troop assingment
	   * loops through all the units and assings them to the barracks
	   */

		}, {
			key: 'assingmentLoop',
			value: function assingmentLoop() {
				this.resetTrainersQueue();
				this.sortUnitsByTime();
				// --- loop through each unit ---
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = this.units[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var unit = _step4.value;

						if (unit.lvl > 0 && unit.amount > 0)
							// --- assing each unit ---
							for (var i = 0; i < unit.amount; i++) {
								this.assingUnit(unit);
							}
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}

				this.sortUnitsById();
			}

			/**
	   * Assings a unit to a trainer
	   * 
	   * @param {Unit} unit to add
	   */

		}, {
			key: 'assingUnit',
			value: function assingUnit(unit) {
				var availableTrainers = this.findAvailableTrainers(unit);
				if (availableTrainers.length) {
					var bestTrainer = this.findBestTrainer(unit, availableTrainers);
					bestTrainer.addUnit(unit.id);
				}
			}

			/**
	   * Find the best building to assing a unit
	   * 
	   * @param {Unit} unit to add
	   * @param {array[int]} available trainers indexes
	   * @retunr {Trainer} best trainer
	   */

		}, {
			key: 'findBestTrainer',
			value: function findBestTrainer(unit, trainers) {
				var _this = this;

				// --- find the trainer with lower time queue ---
				var bestTrainers = trainers.map(function (i) {
					return { time: _this.trainers[i].time() + unit.time, i: i };
				});
				bestTrainers.sort(function (a, b) {
					if (a.time > b.time) return 1;
					if (a.time < b.time) return -1;else 0;
				});
				return this.trainers[bestTrainers[0].i];
			}

			/**
	   * Find the trainers that can produce a unit
	   * 
	   * @param {Unit} unit to add
	   * @retunr {array[Trainer]} trainers
	   */

		}, {
			key: 'findAvailableTrainers',
			value: function findAvailableTrainers(unit) {
				var availableTrainers = [];
				this.trainers.map(function (trainer, i) {
					if (trainer.hasSpaceFor(unit.id) && trainer.canTrain(unit.id)) availableTrainers.push(i);
				});
				return availableTrainers;
			}

			/**
	   * Resets the buildings queues and amounts
	   */

		}, {
			key: 'resetTrainersQueue',
			value: function resetTrainersQueue() {
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = this.trainers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var trainer = _step5.value;

						trainer.resetAmount();
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			}

			/**
	   * Sort (DESC) units by time
	   */

		}, {
			key: 'sortUnitsByTime',
			value: function sortUnitsByTime() {
				this.units.sort(function (a, b) {
					if (a.time < b.time) return 1;
					if (a.time > b.time) return -1;
				});
			}

			/**
	   * Sort (ASC) units by id
	   */

		}, {
			key: 'sortUnitsById',
			value: function sortUnitsById() {
				this.units.sort(function (a, b) {
					if (a.id < b.id) return -1;
					if (a.id > b.id) return 1;
				});
			}
		}]);

		return UnitType;
	}();

	exports.default = UnitType;

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	* Key mirror tests
	*/
	function keyMirrorTests(tests, keyMirror) {
		var mirrored = keyMirror(['SOME_ACTION', 'ANOTHER_ACTION']);
		var actionsObject = {
			SOME_ACTION: 'SOME_ACTION',
			ANOTHER_ACTION: 'ANOTHER_ACTION'
		};
		tests.when('key mirror').should(mirrored).equal(actionsObject);
	}

	exports.default = keyMirrorTests;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Camp class tests
	 */

	var armyCampModel = {
		"name": "Army Camp",
		"building": "army-camp",
		"folder": "army-camps",
		"capacity": [0, 20, 30, 35, 40, 45, 50, 55, 60],
		"lvl": 0,
		"lvls": [0, 1, 2, 3, 4, 5, 6, 7, 8]
	};

	function campClassTests(tests, Camp) {

		var testCamp = new Camp(armyCampModel);
		testCamp.lvl = 5;

		tests.when('camp.actualCapacity() == camp.capacity[lvl]').should(testCamp.actualCapacity()).equal(testCamp.capacity[5]);
	}

	exports.armyCampModel = armyCampModel;
	exports.campClassTests = campClassTests;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Staging building tests
	 */
	function stagingBuildingTests(tests, model, StagingBuilding, Unit) {
	  var unitModel = {
	    "id": 4,
	    "unit": "wallbreaker",
	    "name": "Wall Breaker",
	    "folder": "troops/light/wallbreaker",
	    "cost": [0, 1000, 1500, 2000, 2500, 3000, 3500],
	    "lvls": [0, 1, 2, 3, 4, 5, 6],
	    "lvl": 0,
	    "time": 120,
	    "space": 2,
	    "amount": 0
	  };

	  var unitMock = new Unit(unitModel);
	  var unitMock2 = new Unit(unitModel);

	  var stagingModel = [model, model, model];
	  var stagingName = 'stagin buildings';

	  var stagingTest = new StagingBuilding(stagingModel, stagingName);

	  tests.when('staging constructor creates new camps').should(stagingTest.buildings.length).equal(3);

	  stagingTest.buildings[0].lvl = 1; // capacity 20
	  stagingTest.buildings[1].lvl = 2; // capacity 30
	  stagingTest.buildings[2].lvl = 8; // capacity 60 --- total 110

	  tests.when('StagingBuilding.maxAmount() should equal capacity of its camps').should(stagingTest.maxAmount()).equal(110); // <-- manualy set capacity by chaging the camps lvls

	  unitMock.setLvl(2);
	  unitMock.amount = 10; // takes 20 capacity spaces

	  unitMock2.setLvl(2);
	  unitMock2.amount = 10; // takes 20 capacity spaces

	  tests.when('limitExeeded should be false when trying to alocate less units than the capacity').should(stagingTest.limitExeeded([unitMock, unitMock2])) // 40 spaces
	  .beFalse();

	  var unitsMockArray = [unitMock, unitMock2];
	  tests.when('limitExeeded should be false when trying to alocate less units than the capacity').should(stagingTest.limitExeeded([].concat(unitsMockArray, unitsMockArray, unitsMockArray))) // 40 x 3 = 120 spaces
	  .beTrue();

	  return { unitsMockArray: unitsMockArray, unitMock: unitMock, unitMock2: unitMock2 };
	}

	exports.default = stagingBuildingTests;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var mockUnitsModel = [{ "id": 0, "unit": "barbarian", "name": "Barbarian", "folder": "troops/light/barbarian", "cost": [0, 25, 40, 60, 100, 150, 200, 250], "lvls": [0, 1, 2, 3, 4, 5, 6, 7], "lvl": 0, "time": 20, "space": 1, "amount": 0 }, { "id": 1, "unit": "archer", "name": "Archer", "folder": "troops/light/archer", "cost": [0, 50, 80, 120, 160, 300, 400, 500], "lvls": [0, 1, 2, 3, 4, 5, 6, 7], "lvl": 0, "time": 25, "space": 1, "amount": 0 }, { "id": 2, "unit": "goblin", "name": "Goblin", "folder": "troops/light/goblin", "cost": [0, 25, 40, 60, 80, 100, 150], "lvls": [0, 1, 2, 3, 4, 5, 6], "lvl": 0, "time": 30, "space": 1, "amount": 0 }, { "id": 3, "unit": "giant", "name": "Giant", "folder": "troops/light/giant", "cost": [0, 250, 750, 1250, 1750, 2250, 3000, 3500], "lvls": [0, 1, 2, 3, 4, 5, 6, 7], "lvl": 0, "time": 120, "space": 5, "amount": 0 }, { "id": 4, "unit": "wallbreaker", "name": "Wall Breaker", "folder": "troops/light/wallbreaker", "cost": [0, 1000, 1500, 2000, 2500, 3000, 3500], "lvls": [0, 1, 2, 3, 4, 5, 6], "lvl": 0, "time": 120, "space": 2, "amount": 0 }, { "id": 5, "unit": "balloon", "name": "Balloon", "folder": "troops/light/balloon", "cost": [0, 2000, 2500, 3000, 3500, 4000, 4500], "lvls": [0, 1, 2, 3, 4, 5, 6], "lvl": 0, "time": 480, "space": 5, "amount": 0 }, { "id": 6, "unit": "wizard", "name": "Wizard", "folder": "troops/light/wizard", "cost": [0, 1500, 2000, 2500, 3000, 3500, 4000], "lvls": [0, 1, 2, 3, 4, 5, 6], "lvl": 0, "time": 480, "space": 4, "amount": 0 }, { "id": 7, "unit": "healer", "name": "Healer", "folder": "troops/light/healer", "cost": [0, 5000, 6000, 8000, 10000], "lvls": [0, 1, 2, 3, 4], "lvl": 0, "time": 900, "space": 14, "amount": 0 }, { "id": 8, "unit": "dragon", "name": "Dragon", "folder": "troops/light/dragon", "cost": [0, 25000, 29000, 33000, 37000, 42000], "lvls": [0, 1, 2, 3, 4, 5], "lvl": 0, "time": 1800, "space": 20, "amount": 0 }, { "id": 9, "unit": "pekka", "name": "P.E.K.K.A.", "folder": "troops/light/pekka", "cost": [0, 28000, 32000, 36000, 40000, 45000], "lvls": [0, 1, 2, 3, 4, 5], "lvl": 0, "time": 2700, "space": 25, "amount": 0 }];

	var mockBarrack = {
		"name": "Barrack",
		"building": "barrack",
		"folder": "barracks",
		"capacity": [0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 75],
		"lvls": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		"lvl": 0,
		"amount": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	};

	/**
	 * Tests for UnitType 
	 */
	function unitTypeTests(tests, UnitType) {

		var mockTrainersModel = [mockBarrack, mockBarrack, mockBarrack, mockBarrack];

		var unitTypeMock = new UnitType(mockUnitsModel, 'Ligth troops', mockTrainersModel, 'Barracks');

		tests.when('testing constructor creating trainers').should(mockTrainersModel.length).equal(unitTypeMock.trainers.length);

		tests.when('testing constructor creating units').should(mockUnitsModel.length).equal(unitTypeMock.units.length);

		tests.when('constructor creating trainers (testing by checking the names of the created trainers)').should(['Barrack', 'Barrack', 'Barrack', 'Barrack']).equal(unitTypeMock.trainers.map(function (trainer) {
			return trainer.name;
		}));

		var unitNames = mockUnitsModel.map(function (unit) {
			return unit.name;
		}); // array with unit names
		tests.when('constructor creating units (testing by checking the names of the created units)').should(unitNames).equal(unitTypeMock.units.map(function (unit) {
			return unit.name;
		}));

		var unitSpaces = mockUnitsModel.map(function (unit) {
			return unit.space;
		}); // array with unit spaces
		tests.when('constructor generated trainers arrays of unit spaces').should(unitSpaces).equal(unitTypeMock.trainers[0].unitSpaces);

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = unitTypeMock.units[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var unit = _step.value;

				unit.amount = 1;
				unit.setLvl(1);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		tests.when('UnitType.UspaceUsed() should return the space used by all the queued units').should(unitTypeMock.spaceUsed()).equal(unitSpaces.reduce(function (a, b) {
			return a + b;
		}));

		// array with unit costs at lvl 1 (set to all units)
		var unitsCost = mockUnitsModel.map(function (unit) {
			return unit.cost[1];
		});
		tests.when('UnitType.cost() should return the cost of all queued units').should(unitTypeMock.cost()).equal(unitsCost.reduce(function (a, b) {
			return a + b;
		}));

		// array with units training time
		var unitsTime = mockUnitsModel.map(function (unit) {
			return unit.time;
		});
		tests.when('UnitType.cost() should return the time to produce all queued units').should(unitTypeMock.time()).equal(unitsTime.reduce(function (a, b) {
			return a + b;
		}));

		// adding a barbarian, a pekka, a dragon and a baloon to the trainer 1
		unitTypeMock.trainers[1].addUnit(0);
		unitTypeMock.trainers[1].addUnit(9);
		unitTypeMock.trainers[1].addUnit(8);
		unitTypeMock.trainers[1].addUnit(5);

		tests.when('trainer queue (amount) should reflect the added units').should(unitTypeMock.trainers[1].amount).equal([1, 0, 0, 0, 0, 1, 0, 0, 1, 1]);

		unitTypeMock.resetTrainersQueue();
		tests.when('UnitType.resetTrainersQueue() should reset the trainers queue to [...0]').should(unitTypeMock.trainers[1].amount).equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

		// --- Setting the lvls of trainers ---
		unitTypeMock.trainers[0].setLvl(2);
		unitTypeMock.trainers[1].setLvl(5);
		unitTypeMock.trainers[2].setLvl(9);
		unitTypeMock.trainers[3].setLvl(10);

		unitTypeMock.trainers[0].amount = [5, 5, 0, 0, 0, 0, 0, 0, 0, 0]; // 15 spaces left, only barbarians & archers
		unitTypeMock.trainers[1].amount = [0, 0, 0, 7, 2, 0, 0, 0, 0, 0]; // one space left
		unitTypeMock.trainers[2].amount = [0, 0, 0, 0, 0, 0, 0, 0, 2, 0]; // 20 spaces left, no pekkas
		unitTypeMock.trainers[3].amount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 3]; // full, can produce all

		tests.when('available trainer for pekka').should(unitTypeMock.findAvailableTrainers(unitTypeMock.units[9])).equal([]);

		tests.when('available trainer for archer').should(unitTypeMock.findAvailableTrainers(unitTypeMock.units[1])).equal([0, 1, 2]);

		tests.when('available trainer for dragon').should(unitTypeMock.findAvailableTrainers(unitTypeMock.units[7])).equal([2]);

		tests.when('available trainer for wall-braker').should(unitTypeMock.findAvailableTrainers(unitTypeMock.units[4])).equal([2]);

		tests.when('available trainer for healer').should(unitTypeMock.findAvailableTrainers(unitTypeMock.units[6])).equal([2]);

		unitTypeMock.trainers[0].amount = [5, 5, 0, 0, 0, 0, 0, 0, 0, 0]; // 15 spaces left, only barbarians & archers
		unitTypeMock.trainers[1].amount = [0, 0, 0, 7, 2, 0, 0, 0, 0, 0]; // one space left
		unitTypeMock.trainers[2].amount = [0, 0, 0, 0, 0, 0, 0, 0, 2, 0]; // 20 spaces left, no pekkas
		unitTypeMock.trainers[3].amount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]; // 25 spaces left, can produce all

		var availableTrainers = unitTypeMock.findAvailableTrainers(unitTypeMock.units[8]);
		tests.when('available trainer for dragon').should(availableTrainers).equal([2, 3]);

		var bestTrainer = unitTypeMock.findBestTrainer(unitTypeMock.units[8], availableTrainers);

		tests.when('best trainer --- lvl').should(bestTrainer.lvl).equal(unitTypeMock.trainers[2].lvl);
		tests.when('best trainer --- amount').should(bestTrainer.amount).equal(unitTypeMock.trainers[2].amount);

		unitTypeMock.assingUnit(unitTypeMock.units[8]);
		tests.when('assing dragon, should be added to the 3rd trainer').should(unitTypeMock.trainers[2].amount).equal([0, 0, 0, 0, 0, 0, 0, 0, 3, 0]);

		unitTypeMock.assingUnit(unitTypeMock.units[8]);
		tests.when('assing another dragon, should be added to the 4th trainer').should(unitTypeMock.trainers[3].amount).equal([0, 0, 0, 0, 0, 0, 0, 0, 1, 2]);
		/**
	 * More find available trainers / best trainers tests
	 */
		unitTypeMock.trainers[0].amount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]; // 15 spaces left, only barbarians & archers
		unitTypeMock.trainers[1].amount = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]; // one space left
		unitTypeMock.trainers[2].amount = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]; // 20 spaces left, no pekkas
		unitTypeMock.trainers[3].amount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 25 spaces left, can produce all

		// --- Setting the lvls of trainers ---
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = unitTypeMock.trainers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var trainer = _step2.value;

				trainer.setLvl(10);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		availableTrainers = unitTypeMock.findAvailableTrainers(unitTypeMock.units[6]);
		tests.when('available trainer for wizard, after adding pekka, drag and healer').should(availableTrainers).equal([0, 1, 2, 3]);

		bestTrainer = unitTypeMock.findBestTrainer(unitTypeMock.units[6], [0, 1, 2, 3]);
		tests.when('best trainer for wizard, after adding pekka, drag and healer').should(bestTrainer.amount).equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		tests.when('best trainer for wizard, after adding pekka, drag and healer').should(bestTrainer.amount).not([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
		tests.when('best trainer for wizard, after adding pekka, drag and healer').should(bestTrainer.amount).not([0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
		tests.when('best trainer for wizard, after adding pekka, drag and healer').should(bestTrainer.amount).not([0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);

		unitTypeMock.sortUnitsByTime();
		tests.when('sorting by time --- DESC').should(unitTypeMock.units.map(function (unit) {
			return unit.time;
		})).equal([2700, 1800, 900, 480, 480, 120, 120, 30, 25, 20]);

		unitTypeMock.sortUnitsById();
		tests.when('sorting by id --- ASC').should(unitTypeMock.units.map(function (unit) {
			return unit.id;
		})).equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

		/**
	 * Creating a new UnitType mock and testing the loop from scratch
	 */
		var unitTypeLoopTest = new UnitType(mockUnitsModel, 'Ligth troops', mockTrainersModel, 'Barracks');

		/**
	 * Setting all trainers to lvl 10
	 */
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = unitTypeLoopTest.trainers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var trainer = _step3.value;

				trainer.setLvl(10);
			} /**
	    * Setting all units to lvl 1 and amount 1
	    */
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = unitTypeLoopTest.units[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var unit = _step4.value;

				unit.setLvl(1);
				unit.amount = 1;
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		tests.when('checking units lvls').should(unitTypeLoopTest.units.map(function (unit) {
			return unit.lvl;
		})).equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

		tests.when('checking units amount').should(unitTypeLoopTest.units.map(function (unit) {
			return unit.amount;
		})).equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

		tests.when('checking trainers lvl').should(unitTypeLoopTest.trainers.map(function (trainer) {
			return trainer.lvl;
		})).equal([10, 10, 10, 10]);

		// --- run the assigment loop ---
		unitTypeLoopTest.assingmentLoop();

		tests.when('units to be sorted by id after the loop').should(unitTypeLoopTest.units.map(function (unit) {
			return unit.id;
		})).equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

		tests.when('same amount of units and assigned units in trainers').should(unitTypeLoopTest.units.map(function (unit) {
			return unit.amount * unit.space;
		}).reduce(function (a, b) {
			return a + b;
		})).equal(unitTypeLoopTest.trainers.map(function (trainer) {
			return trainer.queuedUnits();
		}).reduce(function (a, b) {
			return a + b;
		}));

		/**
	 * Testing the trainers amount of units after the loop
	 */

		/*
	 *	--- Should be ----------------
	 *	| #0   | #1   | #2   | #3   |
	 *	------------------------------
	 *	0|      |   20 |      |      |
	 *	1|      |   25 |      |      |
	 *	2|      |   30 |      |      |
	 *	3|      |  120 |      |      |
	 *	4|  120 |      |      |      |
	 *	5|  480 |      |      |      |
	 *	6|  480 |      |      |      |
	 *	7|      |  900 |      |      |
	 *	8|      |      | 1800 |      |
	 *	9|      |      |      | 2700 |
	 *	Total ------------------------
	 *	 | 1080 | 1095 | 1800 | 2700 | 
	 */
		tests.when('assingment loop --- resulting amounts #0').should(unitTypeLoopTest.trainers[0].amount).equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
		tests.when('assingment loop --- resulting amounts #1').should(unitTypeLoopTest.trainers[1].amount).equal([0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
		tests.when('assingment loop --- resulting amounts #2').should(unitTypeLoopTest.trainers[2].amount).equal([1, 1, 1, 1, 0, 0, 0, 1, 0, 0]);
		tests.when('assingment loop --- resulting amounts #3').should(unitTypeLoopTest.trainers[3].amount).equal([0, 0, 0, 0, 1, 1, 1, 0, 0, 0]);

		/**
	 * Testing queue time after the loop
	 */
		tests.when('assingment loop --- resulting time #0').should(unitTypeLoopTest.trainers[0].time()).equal(2700);
		tests.when('assingment loop --- resulting time #1').should(unitTypeLoopTest.trainers[1].time()).equal(1800);
		tests.when('assingment loop --- resulting time #2').should(unitTypeLoopTest.trainers[2].time()).equal(1095);
		tests.when('assingment loop --- resulting time #3').should(unitTypeLoopTest.trainers[3].time()).equal(1080);
	}

	exports.default = unitTypeTests;

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Trainer building test
	 */
	function trainerClassTests(tests, unitsMockArray, Trainer) {
		var trainerTest = new Trainer({
			"name": "Dark Barrack",
			"building": "dark-barrack",
			"folder": "dark-barracks",
			"capacity": [0, 40, 50, 60, 70, 80, 90],
			"lvls": [0, 1, 2, 3, 4, 5, 6],
			"lvl": 0,
			"amount": [0, 0, 0, 0, 0, 0]
		});

		trainerTest.unitSpaces = [2, 2]; // setting spaces manualy from the unitMockArray units
		trainerTest.amount = [10, 10]; // setting amount of queue manualy
		trainerTest.setLvl(5);
		tests.when('has space for a unit, when amount queued is less than capacity').should(trainerTest.hasSpaceFor(1)).beTrue();

		trainerTest.amount = [20, 20]; // setting amount of queue manualy
		tests.when('has space for a unit, when amount queued is the same than capacity').should(trainerTest.hasSpaceFor(1)).beFalse();

		// --- actual lvl set to 5, should produce units lower than that
		tests.when('Trainer.canTrain(), actual lvl set to 5, should produce units lower than that').should(trainerTest.canTrain(5)).beFalse();

		tests.when('Trainer.canTrain(), actual lvl set to 5, should produce units lower than that').should(trainerTest.canTrain(4)).beTrue();

		tests.when('Trainer.actualCapacity()').should(trainerTest.actualCapacity()).equal(80); // capacity for this lvl

		tests.when('Trainer.queuedUnits(), amount of the queued units').should(trainerTest.queuedUnits()).equal(80); // 40 * 2

		tests.when('Trainer.unitsCost(), cost of the queued units').should(trainerTest.unitsCost(unitsMockArray)).equal(40 * 1500); // 40 x 1500 (wallbracker at lvl 2, the mocked unit)

		trainerTest.setLvl(11); // this should not work, lvl should still be five (set previously)
		tests.when('Trainer.setLvl() should not change the lvl for one out of range').should(trainerTest.lvl).not(11);

		tests.when('Trainer.setLvl() should not change the lvl for one out of range').should(trainerTest.lvl).equal(5);

		// --- reseting amount for the test --
		trainerTest.resetAmount();
		tests.when('Trinaer.resetAmount() should reset the amount to 0 for each unit').should(trainerTest.amount).equal([0, 0]);

		// --- adding a unit should increase the amount ---
		trainerTest.addUnit(1);
		tests.when('Trinaer.resetAmount() should reset the amount to 0 for each unit').should(trainerTest.amount).equal([0, 1]);

		trainerTest.addUnit(0);
		trainerTest.addUnit(1);
		tests.when('Trinaer.resetAmount() should reset the amount to 0 for each unit').should(trainerTest.amount).equal([1, 2]);
	}

	exports.default = trainerClassTests;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Testing for Units
	 * 
	 * using unitMock
	 */
	function unitClassTests(tests, unitMock) {
		tests.when('Unit.actualCost() should return the actual cost').should(unitMock.actualCost()).equal(1500); // cost at lvl 2, set after creation

		tests.when('Unit.totalCost() should return the total cost').should(unitMock.totalCost()).equal(10 * 1500);

		tests.when('Unit.spaceUsed() should return the space used').should(unitMock.spaceUsed()).equal(10 * 2);

		tests.when('Unit.totalTime() should return the total time to finish the units').should(unitMock.totalTime()).equal(10 * 120);

		unitMock.setLvl(11); // this should not work, lvl should still be 2 (set previously)
		tests.when('Unit.setLvl() should not change the lvl for one out of range').should(unitMock.lvl).not(11);

		tests.when('Unit.setLvl() should not change the lvl for one out of range').should(unitMock.lvl).equal(2);
	}

	exports.default = unitClassTests;

/***/ }
/******/ ]);