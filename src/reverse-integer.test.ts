import {reverse} from './reverse-integer';

test('it runs', () => {
	expect(reverse(1)).toBe(1);
});

test('easy', () => {
	expect(reverse(12)).toBe(21);
});

test('negative', () => {
	expect(reverse(-1233)).toBe(-3321);
});

test('overflow', () => {
	expect(reverse(1534236469)).toBe(0);
});

test('negative overflow', () => {
	expect(reverse(-2147483412)).toBe(-2143847412);
});
