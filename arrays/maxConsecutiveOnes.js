/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 */

function findMaxConsecutiveOnes(nums) {
  let maxConsecutiveOnes = 0;
  let counter = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === 1) {
      counter++;
    } else {
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, counter);
      counter = 0;
    }
  }
  return Math.max(maxConsecutiveOnes, counter);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(findMaxConsecutiveOnes([0])); // 0
console.log(findMaxConsecutiveOnes([1])); // 1
