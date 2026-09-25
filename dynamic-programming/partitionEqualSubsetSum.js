/**
 * Given an integer array nums, return true if you can partition the array into two subsets
 * such that the sum of the elements in both subsets is equal or false otherwise.
 */

function canPartition(nums) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;

  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let index = target; index >= num; index--) {
      dp[index] = dp[index] || dp[index - num];
    }
  }

  return dp[target];
}

console.log(canPartition([1, 9, 7, 5, 3, 12, 8, 5])); // true
console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
console.log(canPartition([1, 5, 11, 3])); // false
