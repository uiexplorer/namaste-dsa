/**
 * The next greater element of some element x in an array is the first greater element
 * that is to the right of x in the same array.
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j]
 * and determine the next greater element of nums2[j] in nums2.
 * If there is no next greater element, then the answer for this query is -1.
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 */

function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const ngeMap = {};

  stack.push(nums2[nums2.length - 1]);
  ngeMap[nums2[nums2.length - 1]] = -1;

  for (let index = nums2.length - 2; index >= 0; index--) {
    const element = nums2[index];
    while (stack.length) {
      const nextElement = stack[stack.length - 1];
      if (element > nextElement) {
        stack.pop();
      } else {
        ngeMap[element] = nextElement;
        break;
      }
    }
    if (stack.length === 0) {
      ngeMap[element] = -1;
    }
    stack.push(element);
  }

  return nums1.map((num) => ngeMap[num]);
}

console.log(nextGreaterElement([4, 1, 2, 5], [1, 5, 0, 3, 4, 9, 2, 6, 8])); // [9, 5, 6, 9]
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3, -1]
