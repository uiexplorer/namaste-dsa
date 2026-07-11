/**
 * Given an array of integers nums, sort the array in ascending order and return it.
 * You must solve the problem without using any built-in functions
 * in O(nlog(n)) time complexity and
 * with the smallest space complexity possible.
 */

function sort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const mid = Math.floor(nums.length / 2);
  const left = sort(nums.slice(0, mid));
  const right = sort(nums.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let leftPointer = 0;
  let rightPointer = 0;
  const result = new Array(left.length + right.length);
  for (let index = 0; index < result.length; index++) {
    if (left[leftPointer] <= right[rightPointer] || rightPointer >= right.length) {
      result[index] = left[leftPointer];
      leftPointer++;
    } else {
      result[index] = right[rightPointer];
      rightPointer++;
    }
  }
  return result;
}

console.log(sort([5, 2, 3, 1, 5, 2, 3, 1]));
console.log(sort([5, 4, 9, 0, 1]));
console.log(sort([5, 4, 9, 0, 1, 15, 7]));
console.log(sort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sort([1]));
console.log(sort([1, -1]));
