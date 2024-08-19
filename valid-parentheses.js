/**
 * @param {string} s
 * @return {boolean}
 https://leetcode.com/problems/valid-parentheses/
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if (stack.length > 0 && stack[stack.length - 1] === bracketMap[char]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};
// TC:O(n)
