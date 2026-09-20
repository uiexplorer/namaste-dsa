/**
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 * Security system will contact the police if two adjacent houses were broken into on the same night.
 */

function houseRobber(nums) {
  if (nums.length === 1) return nums[0];
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let index = 2; index < nums.length; index++) {
    dp[index] = Math.max(dp[index - 2] + nums[index], dp[index - 1]);
  }
  return dp.pop();
}

console.log(houseRobber([1, 2])); // 2
console.log(houseRobber([1, 2, 3, 1])); // 4
console.log(houseRobber([2, 7, 9, 3, 1])); // 12
