/**
 * You are given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 */

function twoSum(nums, target) {
  const targetMap = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    targetMap[element] = i;
  }

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const pair = targetMap[target - element];
    if (pair && index !== pair) {
      return [index, pair]
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([-3, 4, 3, 90], 0)); // [0, 2]
