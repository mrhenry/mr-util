(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MrUtil = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/* eslint-env browser, node */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var root = undefined;

if (typeof window !== 'undefined') {
	root = window;
} else if (typeof global !== 'undefined') {
	root = global;
}

var native = root.console;
if (!native) {
	native = {};
	root.console = native;
}

var console;

exports.console = console;

var Console = function Console() {
	_classCallCheck(this, Console);
};

exports.Console = Console;

var methods = ['clear', 'log', 'debug', 'info', 'warn', 'error', 'dir', 'dirxml', 'assert', 'count', 'group', 'groupCollapsed', 'groupEnd', 'profile', 'profileEnd', 'time', 'timeEnd', 'timeStamp', 'trace'];
var noop = function noop() {};

for (var idx in methods) {
	var m = methods[idx];
	if (typeof native[m] === 'function') {
		Console.prototype[m] = native[m].bind(native[m]);
	} else {
		Console.prototype[m] = noop;
		native[m] = noop;
	}
}

exports.console = console = new Console();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _url = require('./url');

_defaults(exports, _interopRequireWildcard(_url));

var _console = require('./console');

_defaults(exports, _interopRequireWildcard(_console));

},{"./console":1,"./url":3}],3:[function(require,module,exports){

/**
Safe url interpolation.

@example
let safeUrl = url`/hello/${who}`;

*/
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.url = url;

function url(tmpl) {
	var len = tmpl.length - 1;
	var u = tmpl[0];

	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	for (var i = 0; i < len; i++) {
		var val = args[i];

		if (val instanceof Array) {
			for (var idx in val) {
				if (idx > 0) {
					u += "/";
				}
				u += encodeURIComponent("" + val[idx]);
			}
		} else {
			u += encodeURIComponent("" + val);
		}

		u += tmpl[i + 1];
	}

	return u;
}

},{}]},{},[2])(2)
});
//# sourceMappingURL=mr-util.js.map
