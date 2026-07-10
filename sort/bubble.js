function sort(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let needSwap = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const element = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = element;
        needSwap = true;
      }
      counter++;
    }
    if (!needSwap) {
      break;
    }
  }
  console.log(counter);

  return nums;
}

console.log(sort([5, 2, 4, 1]));
console.log(sort([5, 4, 9, 0, 1]));
console.log(sort([5, 4, 9, 0, 1, 15, 7]));
console.log(sort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
