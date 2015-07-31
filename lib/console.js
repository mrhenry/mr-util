/* eslint-env es6, browser, node */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var root = undefined;

/**
A no-op fallback for window.console.

@member console
*/

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
//# sourceMappingURL=console.js.map