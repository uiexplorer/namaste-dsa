function calculateSum(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[0] + calculateSum(nums.slice(1));
}

console.log(calculateSum([5, 4, 3, 2, 1, 0]));
console.log(calculateSum([15, 4, 13, 2, 11, 10]));
console.log(`<=========================>`);

function calculateSumInReverse(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[nums.length - 1] + calculateSumInReverse(nums.slice(0, -1));
}

console.log(calculateSumInReverse([5, 4, 3, 2, 1, 0]));
console.log(calculateSumInReverse([15, 4, 13, 2, 11, 10]));
console.log(`<=========================>`);

function calculateSumForOddNumbers(nums) {
  if (nums.length === 1) {
    return nums[0] % 2 ? nums[0] : 0;
  }
  return (nums[0] % 2 ? nums[0] : 0) + calculateSumForOddNumbers(nums.slice(1));
}

console.log(calculateSumForOddNumbers([5, 4, 3, 2, 1, 0]));
console.log(calculateSumForOddNumbers([15, 4, 13, 2, 11, 10]));
