/**
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index.
 * Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.
 */

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
