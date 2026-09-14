/**
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
 * That is, each element of nums is covered by exactly one of the ranges,
 * and there is no integer x such that x is in one of the ranges but not in nums.
 * Each range [a,b] in the list should be output as:
 * "a->b" if a != b
 * "a" if a == b
 */

function summaryRanges(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums[0].toString()];

  const result = [];
  const currentRange = [nums[0], nums[0]];

  for (let index = 1; index <= nums.length; index++) {
    const element = nums[index];
    const previousElement = nums[index - 1];
    if (element - previousElement === 1) {
      currentRange[1] = element;
    } else {
      if (currentRange[0] !== currentRange[1]) {
        result.push(`${currentRange[0]}->${currentRange[1]}`);
      } else {
        result.push(`${currentRange[0]}`);
      }
      currentRange.length = 0;
      currentRange.push(element, element);
    }
  }

  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
