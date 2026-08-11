/**
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
 * and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let index = 0; index < nums.length - 2; index++) {
    const element = nums[index];

    if (index === 0 || element !== nums[index - 1]) {
      let left = index + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = element + nums[left] + nums[right];

        if (sum === 0) {
          result.push([element, nums[left], nums[right]]);

          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            ++left;
          }
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // [[]]
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
