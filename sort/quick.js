/**
 * Sort given arrya of number using quick sort.
 */

function sort(nums, start, end) {
  if (start < end) {
    const pivotIndex = getPivotIndex(nums, start, end);
    sort(nums, start, pivotIndex - 1);
    sort(nums, pivotIndex + 1, end);
  }
  return nums;
}

function getPivotIndex(nums, start, end) {
  let pos = start - 1;
  for (let index = start; index < end; index++) {
    if (nums[index] < nums[end]) {
      ++pos;
      [nums[index], nums[pos]] = [nums[pos], nums[index]];
    }
  }
  // move pivot to it's correct position.
  ++pos;
  [nums[end], nums[pos]] = [nums[pos], nums[end]];
  return pos;
}

console.log(sort([8, 3, 1, 7, 0, 10, 2], 0, 6));
console.log(sort([2, 0, 2, 1, 1, 0], 0, 5));
