/**
 * Given an array of integers nums sorted in non-decreasing order,
 * find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 */

function searchRange(nums, target) {
  let result = [-1, -1];
  if (nums.length === 0) return result;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  if (target !== nums[left]) {
    return result;
  }
  result = [left, right];

  if (nums.length === 1) return result;
  left = 0;
  right = nums.length - 1;

  while (left < right) {
    const middle = Math.ceil((left + right) / 2);
    if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle;
    }
  }

  result[1] = left;
  return result;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
// console.log(searchRange([])); // [-1, -1]
// console.log(searchRange([1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5], 3)); // [4, 8]
console.log(searchRange([2, 2], 2)); // [0, 1]

