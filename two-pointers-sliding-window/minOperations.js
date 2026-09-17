/**
 * You are given a binary array nums.
 * Return the minimum number of operations required to make all elements in nums equal to 1.
 * If it is impossible, return -1.
 */

function minOperations(nums) {
  let counter = 0;
  for (let index = 0; index < nums.length - 2; index++) {
    if (nums[index] === 1) continue;
    nums[index] = nums[index] ? 0 : 1;
    nums[index + 1] = nums[index + 1] ? 0 : 1;
    nums[index + 2] = nums[index + 2] ? + 0 : 1;
    ++counter;
  }
  return nums.some((num) => num === 0) ? -1 : counter;
}

console.log(minOperations([0, 1, 1, 1, 0, 0])); // 3
console.log(minOperations([0, 1, 1, 1])); // -1
