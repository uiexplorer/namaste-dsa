/**
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

function canJump(nums) {
  let maxReach = 0;
  let jumps = 0;
  let currentEnd = 0;
  for (let index = 0; index < nums.length - 1; index++) {
    maxReach = Math.max(maxReach, nums[index] + index);
    if (index === currentEnd) {
      currentEnd = maxReach
      ++jumps;
    }
  }
  return jumps;
}

console.log(canJump([2, 3, 1, 1, 4])); // 2
console.log(canJump([2, 3, 0, 1, 4])); // 2
console.log(canJump([2, 0, 0])); // 1
console.log(canJump([0])); // 0
