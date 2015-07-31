
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
//# sourceMappingURL=url.js.map