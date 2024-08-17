//problem : https://leetcode.com/problems/combination-sum-ii/
var combinationSum2 = function(candidates, target) {
    const results = [];

    candidates.sort((a, b) => a-b);

    function backtrack(start, target, currentCombination) {
            if(target === 0) {
                results.push([...currentCombination]); //found a valid combination
                return;
            }

            for(let i = start; i < candidates.length; i++) {
                if(i > start && candidates[i] === candidates[i-1]) continue; // Skip duplicates

                if (candidates[i] > target) break; // No need to proceed further if the current number exceeds the target

                currentCombination.push(candidates[i]); // Include this candidate
                backtrack(i + 1, target - candidates[i], currentCombination); // Move to the next index
                currentCombination.pop(); // Remove the candidate and try the next
            }
    }

    backtrack(0, target, []);
    return results;
};
