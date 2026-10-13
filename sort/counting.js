/**
 * You are given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue.
 */

function sortColors(nums) {
  const map = { 0: 0, 1: 0, 2: 0 };
  let index = 0;

  for (let index = 0; index < nums.length; index++) {
    ++map[nums[index]];
  }

  for (const color in map) {
    if (!Object.hasOwn(map, color)) continue;
    const count = map[color];
    const limit = index + count;
    while (index < limit) {
      nums[index] = Number(color);
      ++index;
    }
  }

  return nums;
}

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0, 0, 1, 1, 2, 2]
console.log(sortColors([2, 0, 1])); // [0, 1, 2]
