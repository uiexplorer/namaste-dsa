/**
 * Given an integer array nums and an integer val,
 * remove all occurrences of val in nums **in-place**.
 * The order of the elements may be changed.
 * Then return the number of elements in nums which are not equal to val.
 */
function removeElement(nums, val) {
  let position = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element !== val) {
      nums[position] = element;
      position += 1;
    }
  }
  return position;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
