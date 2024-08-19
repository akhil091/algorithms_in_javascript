/**
 * @param {number[]} nums
 * @return {boolean}
https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function(nums) {
    // for(let i=0; i<= nums.length; i++){
    //     for(let j=i+1; j<= nums.length; j++){
    //         if(nums[i] == nums[j]){
    //             return true;
    //         }
    //     }
    // }
    // return false;
    const seen =new Set();
    for(let num of nums) {
        if(seen.has(num)){
            return true;
        }
        seen.add(num);
    }
    return false;
};
