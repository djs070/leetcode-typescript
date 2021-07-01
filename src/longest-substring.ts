// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without 
// repeating characters.


export function lengthOfLongestSubstring(s: string): number {
    if (s.length == 0) return 0;

    let start = 0;
    let end = 1;
    let chars = [s[0]]; // the unique set of characters in the window
    let result = 1;
    
    while(end < s.length) {
        let theChar = s[end];

        if (chars.indexOf(theChar) !== -1) {
            // Not a unique substring, shorten the window and remove 
            // character at start
            chars.splice(chars.indexOf(s[start]), 1);
            start += 1;
        } else {
            // Character is unique, expand the window
            chars.push(theChar);
            result = Math.max(result, chars.length);
            end += 1;
        }
    }

    return result;
};
