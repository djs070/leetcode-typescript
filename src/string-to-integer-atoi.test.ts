import { myAtoi } from './string-to-integer-atoi';

test('basic case', () => {
	expect(myAtoi('')).toBe(0);
	expect(myAtoi('100')).toBe(100);
	expect(myAtoi('-1')).toBe(-1);
	expect(myAtoi('  -1abc  ')).toBe(-1);
	expect(myAtoi(' 12-789-  ')).toBe(12789);
})