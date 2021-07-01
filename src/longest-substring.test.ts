import {lengthOfLongestSubstring} from './longest-substring';

test('it runs', () => {
    expect(lengthOfLongestSubstring('s')).toBe(1);
});

test('all unique', () => {
    expect(lengthOfLongestSubstring('sad')).toBe(3);
});


test('all unique', () => {
    expect(lengthOfLongestSubstring('aaa')).toBe(1);
});


test('all unique', () => {
    expect(lengthOfLongestSubstring('saaassdsasassaassd')).toBe(3);
});

test('all unique', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});