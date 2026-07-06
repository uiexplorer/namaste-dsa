/**
 * Given an integer array nums, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

function moveZeroes(nums) {
  let nextNonZeroPosition = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element !== 0) {
      nums[nextNonZeroPosition] = element;
      if (nextNonZeroPosition !== index) {
        nums[index] = 0;
      }
      nextNonZeroPosition++;
    }
  }
  console.log(nums);
}
moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]
moveZeroes([0]); // [0]
moveZeroes([1]); // [1]
moveZeroes([2, 1]); // [2, 1]
