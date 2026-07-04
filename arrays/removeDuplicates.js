/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 */
function removeDuplicates(nums) {
  let position = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element > nums[position]) {
      position += 1;
      nums[position] = element;
    }
  }
  return position + 1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
