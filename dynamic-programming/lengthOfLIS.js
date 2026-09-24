/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 */

function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);
  let lis = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
        lis = Math.max(lis, dp[i]);
      }
    }
  }
  return lis;
}

// console.log(lengthOfLIS([1, 2, 3, 4])); // 4
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9])); // 3
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
