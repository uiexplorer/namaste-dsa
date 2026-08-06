/**
 * You are given a sorted array consisting of only integers where every element appears exactly twice,
 * except for one element which appears exactly once.
 * Return the single element that appears only once.
 */

function findSingleElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    console.log('DEBUG: left, middle, right:', left, middle, right);
    if (nums[middle] === nums[middle + 1]) {
      // pair is on right side
      if ((middle - left) % 2 === 1) {
        right = middle - 1;
      } else {
        left = middle + 2;
      }
    } else if (nums[middle] === nums[middle - 1]) {
      // pair is on left side
      if ((middle - 1 - left) % 2 === 1) {
        right = middle - 2;
      } else {
        left = middle + 1;
      }
    } else {
      return nums[middle];
    }
  }
}

console.log(findSingleElement([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log('-----------------------');
console.log(findSingleElement([3, 3, 7, 7, 10, 11, 11])); // 10
console.log('-----------------------');
console.log(findSingleElement([1, 1, 2, 2, 3, 3, 4, 5, 5])); // 4
console.log('-----------------------');
console.log(findSingleElement([1, 1, 2, 2, 3, 4, 4, 5, 5])); // 3
console.log('-----------------------');
console.log(findSingleElement([1, 1, 2, 2, 3])); // 3
console.log('-----------------------');
console.log(findSingleElement([0, 1, 1, 2, 2, 5, 5])); // 0
console.log('-----------------------');
console.log(findSingleElement([7, 7, 10, 11, 11, 12, 12])); // 10
console.log('-----------------------');
