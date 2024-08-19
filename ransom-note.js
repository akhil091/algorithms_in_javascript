/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 https://leetcode.com/problems/ransom-note
 Create a frequency map for the magazine, where each key is a character and the value is the number of times that character appears in the magazine.
Iterate through each character in the ransomNote and check if it exists in the magazine's frequency map with enough occurrences.
If a character is missing or the count in the magazine is less than required, return false.
If all characters are available with sufficient counts, return true.
 */
var canConstruct = function(ransomNote, magazine) {
    let magCount = {}; // to count frequency of each char in magazine

    for(let char of magazine) {
        magCount[char] = (magCount[char] || 0) + 1;
    }

    for(let char of ransomNote) {
        if(!magCount[char] || magCount[char] <= 0) {
            return false;
        }
        magCount[char]--;
    }
    return true;
};
