export function myAtoi(s: string): number {
	let out = 0;
	let negative = false;
	let inputStarted = false; // Only allow polarity detection before input

	s.split('').forEach((c) => {
		if (!inputStarted && c === '-') {
			negative = true;
			inputStarted = true;
		} else if (/\d/.test(c)) {
			out = out * 10 + parseInt(c, 10);
			inputStarted = true;
		}
	});

	return negative ? -out : out;
};