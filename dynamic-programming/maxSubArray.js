/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 */

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currSum = nums[0];
  for (let index = 1; index < nums.length; index++) {
    currSum = Math.max(currSum + nums[index], nums[index]);
    maxSum = Math.max(currSum, maxSum);
    console.log('DEBUG: index, currSum, maxSum:', index, currSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
