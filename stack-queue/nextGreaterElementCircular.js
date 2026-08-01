/**
 * Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
 * return the next greater number for every element in nums.
 * The next greater number of a number x is the first greater number to its traversing-order next in the array,
 * which means you could search circularly to find its next greater number.
 * If it doesn't exist, return -1 for this number.
 */

function nextGreaterElement(nums) {
  const length = nums.length;
  const stack = [nums[length - 1]];
  const ans = Array(length).fill(-1);

  for (let index = (2 * length) - 2; index >= 0; index--) {
    const element = nums[index % length];
    while (stack.length) {
      const topOfStack = stack[stack.length - 1];
      if (topOfStack > element) {
        ans[index] = topOfStack;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(element);
  }

  return ans.slice(0, length);
}

console.log(nextGreaterElement([1, 2, 1])); // [2, -1, 2]
console.log(nextGreaterElement([1, 2, 3, 4, 3])); // [2, 3, 4, -1, 4]
console.log(nextGreaterElement([5, 4, 3, 2, 1])); // [-1, 5, 5, 5, 5]
console.log(nextGreaterElement([1, 5, 0, 3, 4, 9, 6, 8])); // [5, 9, 3, 4, 9, -1, 8, 9]
