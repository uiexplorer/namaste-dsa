function sort(nums) {
  counter = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    let element = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
      counter++;
    }
    if (i !== min) {
      nums[i] = nums[min];
      nums[min] = element;
    }
  }
  console.log('DEBUG: counter:', counter);
  return nums;
}

console.log(sort([7, 1, 5, 4, 3, 2]));
console.log(sort([5, 2, 4, 1]));
console.log(sort([5, 4, 9, 0, 1]));
console.log(sort([5, 4, 9, 0, 1, 15, 7]));
console.log(sort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
