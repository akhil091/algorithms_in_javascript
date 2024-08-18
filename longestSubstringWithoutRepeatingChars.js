/**
 * @param {string} s
 * @return {number}
Given a string s, find the length of the longest substring without repeating characters.
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
var lengthOfLongestSubstring = function(s) {
    //sliding-window technique
    let maxlength = 0;
    let left= 0;
    let set = new Set(); //A Set is a built-in data structure in JavaScript that allows you to store unique values of any type, whether primitive values or object references. Unlike arrays, Set automatically ensures that each value is unique—duplicates are not allowed.

    for(let right = 0; right < s.length; right++) {
        while(set.has(s[right])) { // if right is already present in set, delete from left
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]); //if not, then add in set
        maxlength = Math.max(maxlength, right - left + 1)
    }
    return maxlength;
};
