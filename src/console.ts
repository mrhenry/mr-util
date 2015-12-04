/// <reference path="./global"/>

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


/**
A no-op fallback for window.console.
*/
export var console : Console;

export class Console {

	clear() : void {}

	log(fmt : string, ...args:Array<any>) : void;
	log(...args:Array<any>) : void {}
	debug(fmt : string, ...args:Array<any>) : void;
	debug(...args:Array<any>) : void {}
	info(fmt : string, ...args:Array<any>) : void;
	info(...args:Array<any>) : void {}
	warn(fmt : string, ...args:Array<any>) : void;
	warn(...args:Array<any>) : void {}
	error(fmt : string, ...args:Array<any>) : void;
	error(...args:Array<any>) : void {}

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
		Console.prototype[m] = native[m].bind(native);
	} else {
		Console.prototype[m] = noop;
		native[m] = noop;
	}
}

console = new Console();
