/**
 * @param {number[]} nums
 * @return {number[]}
 Initialize Arrays:

Create an array answer of the same length as nums to store the final result.
Calculate Prefix Products:

Traverse the array from left to right, maintaining a running product. Store this product in the answer array.
Calculate Suffix Products and Final Result:

Traverse the array from right to left, maintaining a running product. Multiply this product with the corresponding prefix product stored in the answer array to get the final result.
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    let result = new Array(n).fill(1); //make a new array and fill all indexes with 1s

    let prefix = 1;
    for(let i = 0; i<n; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i];
    }

    let suffix = 1;
    for(let i=n-1; i >= 0; i--) {
        result[i] = result[i] * suffix;
        suffix = suffix * nums[i];
    }
    return result;
};
