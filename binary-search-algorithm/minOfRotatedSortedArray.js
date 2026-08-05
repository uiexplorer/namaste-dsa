/**
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 */

function findmin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] <= nums[right]) { return nums[left] }

    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < nums[middle - 1]) {
      return nums[middle]
    }

    if (nums[left] > nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
}

console.log(findmin([3, 4, 5, 1, 2])); // 1
console.log(findmin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findmin([11, 13, 15, 17])); // 11
console.log(findmin([2, 1])); // 1
