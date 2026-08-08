/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers index1 and index2,
 * each incremented by one, as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution.
 * You may not use the same element twice.
 * Your solution must use only constant extra space.
 */

function twoSumPointer(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [++left, ++right]
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([-3, 4, 3, 90], 0)); // [0, 2]
