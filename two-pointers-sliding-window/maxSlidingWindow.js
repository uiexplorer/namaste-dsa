/**
 * You are given an array of integers nums,
 * there is a sliding window of size k which is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 */

function maxSlidingWindow(nums, k) {
  const result = [];
  const dequeue = [];
  let i = j = 0;

  while (j < nums.length) {
    while (dequeue.length && nums[j] > dequeue[dequeue.length - 1]) {
      dequeue.pop();
    }

    dequeue.push(nums[j]);

    if (j >= k - 1) {
      result.push(dequeue[0]);

      if (dequeue[0] === nums[i]) {
        dequeue.shift();
      }
      ++i;
    }
    ++j;
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]

