/**
 * You are given an integer mountain array arr of length n
 * where the values increase to a peak element and then decrease.
 * Return the index of the peak element.
 * Your task is to solve it in O(log(n)) time complexity.
 */

function findPeakIndex(nums) {
  let left = 0;
  let right = nums.length + 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < nums[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
}

console.log(findPeakIndex([0, 1, 0])); // 1
console.log(findPeakIndex([0, 2, 1, 0])); // 1
console.log(findPeakIndex([0, 10, 5, 2])); // 1
console.log(findPeakIndex([0, 2, 5, 7, 10, 6, 3])); // 4
