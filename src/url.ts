
/**
Safe url interpolation.

```js
let who = "Simon Menke";
let safeUrl = url`/hello/${who}`;
// => safeUrl === '/hello/Simon%20Menke'
```
*/
export function url(tmpl:Array<string>, ...args:Array<any>) : string {
	let len = tmpl.length - 1;
	let u = tmpl[0];

	for (let i = 0; i < len; i++) {
		let val = args[i];

		if (val instanceof Array) {
			for (let idx in val) {
				if (idx > 0) {
					u += "/";
				}
				u += encodeURIComponent(`${val[idx]}`);
			}
		} else {
			u += encodeURIComponent(`${val}`);
		}

		u += tmpl[i + 1];
	}

	return u;
}
