/* eslint-env es6, browser, node */
let root;

if (typeof window !== 'undefined') {
	root = window;
} else if (typeof global !== 'undefined') {
	root = global;
}

let	native = root.console;
if (!native) {
	native = {};
	root.console = native;
}

export var console;

export class Console {
}

var methods = [
	'clear',
	'log', 'debug', 'info', 'warn', 'error',
	'dir', 'dirxml',
	'assert',
	'count',
	'group', 'groupCollapsed', 'groupEnd',
	'profile', 'profileEnd',
	'time', 'timeEnd', 'timeStamp',
	'trace',
];
var noop = function() {};

for (let idx in methods) {
	let m = methods[idx];
	if (typeof native[m] === 'function') {
		Console.prototype[m] = native[m].bind(native[m]);
	} else {
		Console.prototype[m] = noop;
		native[m] = noop;
	}
}

console = new Console();
