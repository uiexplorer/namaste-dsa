function sort(nums) {
  for (let index = 1; index < nums.length; index++) {
    const currentElement = nums[index];
    let previousIndex = index - 1;

    while (currentElement < nums[previousIndex] && previousIndex >= 0) {
      nums[previousIndex + 1] = nums[previousIndex];
      previousIndex--;
    }

    nums[previousIndex + 1] = currentElement;
  }
  return nums;
}

console.log(sort([5, 2, 4, 1]));
console.log(sort([5, 4, 9, 0, 1]));
console.log(sort([5, 4, 9, 0, 1, 15, 7]));
console.log(sort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
