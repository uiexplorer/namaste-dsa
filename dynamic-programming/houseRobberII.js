/**
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 * Security system will contact the police if two adjacent houses were broken into on the same night.
 * All houses at this place are arranged in a circle.
 */

function houseRobber(nums) {
  if (nums.length === 1) return nums[0];
  const lootCalculator = (money) => {
    if (money.length === 1) return money[0];
    const dp = [money[0], Math.max(money[0], money[1])];
    for (let index = 2; index < money.length; index++) {
      dp[index] = Math.max(dp[index - 2] + money[index], dp[index - 1]);
    }
    return dp.pop();
  };
  return Math.max(lootCalculator(nums.slice(1)), lootCalculator(nums.slice(0, nums.length - 1)));
}

console.log(houseRobber([2, 3, 2])); // 3
console.log(houseRobber([1, 2, 3, 1])); // 4
console.log(houseRobber([1, 2, 3])); // 3
