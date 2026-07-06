/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 */

function findMissingNumber(nums) {
  let missingNumber = 0;
  const numsSum = nums.reduce((curr, aggr) => (aggr += curr), 0);
  const expectedSum = (nums.length * (nums.length + 1)) / 2;
  return expectedSum - numsSum;
}

console.log(findMissingNumber([3, 0, 1])); // 2
console.log(findMissingNumber([0, 1])); // 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
