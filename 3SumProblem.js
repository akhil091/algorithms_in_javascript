//3 sum problem
//https://leetcode.com/problems/3sum/description/
//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    //this is two pointer technique, taking one from start of array and other from the end
    const result = [];
    const n = nums.length;

    nums.sort((a,b) => a-b);

    for(let i=0; i<n-2; i++) {

        if(i > 0 && nums[i] === nums[i-1]) continue;

        let right = n-1; 
        let left = i+1;
        while(left < right){
            let sum = nums[i] + nums[right] + nums[left];

            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]])

                while(left < right && nums[right] === nums[right - 1]) right--;
                while(left < right && nums[left] === nums[left + 1]) left++;

                left++;
                right--;

            } else if(sum > 0) {
                right--;
            } else {
                left++
            } 
        }  
    }
    return result;
};
