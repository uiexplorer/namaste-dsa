/**
 * You are given an array nums consisting of positive integers.
 * Return the number of complete subarrays.
 */

function countCompleteSubarrays(nums) {
  let counter = 0;
  const uniqueNums = new Set(nums).size;
  let windowSize = uniqueNums;
  while (windowSize <= nums.length) {
    for (let index = 0; index < nums.length; index++) {
      const subArray = nums.slice(index, windowSize);
      if (uniqueNums === new Set(subArray).size) ++counter;
      if (uniqueNums >= subArray.length) break;
    }
    ++windowSize;
  }
  return counter;
}

console.log(countCompleteSubarrays([1, 3, 1, 2, 2])); // 4
console.log(countCompleteSubarrays([5, 5, 5, 5])); // 10
