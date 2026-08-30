/**
 * You are part of a university admissions office and need to keep track of the kth highest test score
 * from applicants in real-time.
 */

var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;

  for (let index = 0; index < nums.length; index++) {
    this.add(nums[index]);
  }
};

KthLargest.prototype.add = function (val) {
  this.heap.enqueue(val);
  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }

  return this.heap.front();
};