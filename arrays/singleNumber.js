/**
 * Given a non-empty array of integers nums,
 * every element appears twice except for one.
 * Find that single one.
 * You must implement a solution with a linear runtime complexity and
 * use only constant extra space.
 */

function findSingleNumberByHashApproach(nums) {
  const hash = {};

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    hash[element] ? (hash[element] += 1) : (hash[element] = 1);
  }

  for (let index = 0; index < Object.entries(hash).length; index++) {
    const element = Object.entries(hash)[index];
    if (element[1] === 1) {
      return parseInt(element[0], 10);
    }
  }
}

console.log(findSingleNumberByHashApproach([2, 2, 1])); // 1
console.log(findSingleNumberByHashApproach([4, 1, 2, 1, 2])); // 4
console.log(findSingleNumberByHashApproach([1])); // 1
console.log(`<=======================>`);

function findSingleNumber(nums) {
  let singleNumber = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    singleNumber ^= nums[index];
  }
  return singleNumber;
}

console.log(findSingleNumber([2, 2, 1])); // 1
console.log(findSingleNumber([4, 1, 2, 1, 2])); // 4
console.log(findSingleNumber([1])); // 1
