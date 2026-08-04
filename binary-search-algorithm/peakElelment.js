/**
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 * You may imagine that nums[-1] = nums[n] = -∞. In other words,
 * an element is always considered to be strictly greater than a neighbor that is outside the array.
 * You must write an algorithm that runs in O(log n) time.
 */

function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle + 1] > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
}

console.log(findPeakElement([1,2,3,1])); // 2(3)
console.log(findPeakElement([1,2,1,3,5,6,4])); // 1(2), 5(6)
