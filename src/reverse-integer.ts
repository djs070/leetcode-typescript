// https://leetcode.com/problems/reverse-integer/

// Given a signed 32-bit integer x, return x with its digits 
// reversed. If reversing x causes the value to go outside the 
// signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers
// (signed or unsigned).


// This approach doesn't work beyond the basic case:
// export function reverse(x: number): number {
// 	const negative = x < 0;
// 	const str = x.toString();
// 	const reversed = str.split("").reverse().join("");
// 	return negative ? -parseInt(reversed, 10) : parseInt(reversed, 10);
// }

// 
export function reverse(x: number): number {
	let out = 0;
	let digit = 0;
	const pre_int_max = 214748364; // precomputed Math.floor(32_INT_MAX/10)

	// Store x polarity and make it absolute
	const negative = x < 0;
	x = Math.abs(x);

	while (x > 0){
		// Pop the next digit
		let digit = x % 10;
		x = Math.floor(x / 10);

		// console.log(`x = ${ x }, out = ${ out }, digit = ${ digit } `)

		// Check for overflow (problem assumes only 32-bit signed int)
		if (out > pre_int_max) {
			return 0;
		} else if (out == pre_int_max) {
			if ((negative && digit > 8) || digit > 7) {
				return 0;
			}
		}

		out = out * 10 + digit;

		// console.log(`new out = ${ out }, new x = ${ x }`)
	}

	return negative ? -out : out;
}
