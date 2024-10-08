
//Given an integer array nums, find the subarray with the largest sum, and return its sum.
function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    
    return maxGlobal;
}

// Example 1
let nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums1)); 
// Output: 6

// Example 2
let nums2 = [1];
console.log(maxSubArray(nums2)); 
// Output: 1

// Example 3
let nums3 = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums3)); 
// Output: 23




function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        // Update maxCurrent
        if (nums[i] > maxCurrent + nums[i]) {
            maxCurrent = nums[i];
            tempStart = i;  // Start new subarray
        } else {
            maxCurrent += nums[i];  // Continue the current subarray
        }

        // Update maxGlobal if we found a new max
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
            start = tempStart;
            end = i;
        }
    }

    // Return the maximum sum and the subarray that gives this sum
    return {
        maxSum: maxGlobal,
        subArray: nums.slice(start, end + 1)
    };
}

// Example Usage
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // { maxSum: 6, subArray: [4, -1, 2, 1] }
console.log(maxSubArray([1])); // { maxSum: 1, subArray: [1] }
console.log(maxSubArray([5, 4, -1, 7, 8])); // { maxSum: 23, subArray: [5, 4, -1, 7, 8] }
