/**
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

function canJump(nums) {
  let maxReach = 0;
  for (let index = 0; index < nums.length; index++) {
    if (index > maxReach) return false;
    maxReach = Math.max(maxReach, nums[index] + index);
    if (maxReach === nums.length - 1) return true
  }
  return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([2, 0, 0])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
