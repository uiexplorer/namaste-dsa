/**
 * Sort array of numbers using radix sort.
 */

function sort(nums) {
  if (nums.length === 0) return nums;

  const max = Math.max(...nums);

  for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
    stableCountingSort(nums, place);
  }

  return nums;
}

function stableCountingSort(nums, place) {
  const count = new Array(10).fill(0);

  for (const x of nums) {
    ++count[Math.floor(x / place) % 10];
  }

  for (let index = 1; index < count.length; index++) {
    count[index] += count[index - 1];
  }

  const sortedArr = new Array(nums.length);

  // Traverse backward to preserve stability.
  for (let index = nums.length - 1; index >= 0; index--) {
    const current = Math.floor(nums[index] / place) % 10;
    const position = count[current];

    sortedArr[position - 1] = nums[index];
    --count[current];
  }

  // Copy the sorted result back into nums.
  for (let index = 0; index < nums.length; index++) {
    nums[index] = sortedArr[index];
  }
}

console.log(sort([170, 45, 75, 90, 802, 24, 2, 66])); // [2, 24, 45, 66, 75, 90, 170, 802]
