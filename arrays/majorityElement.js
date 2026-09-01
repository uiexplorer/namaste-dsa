/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

function majorityElement(nums) {
  const limit = Math.ceil(nums.length / 2);
  const numsMap = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    numsMap[element] = numsMap[element] ? ++numsMap[element] : 1;
    if (numsMap[element] >= limit) {
      return element
    }
  }
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
