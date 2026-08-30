/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 */

function findKthLargest(nums, k) {
  const priorityQueue = new MinPriorityQueue();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    priorityQueue.enqueue(element);
    if(priorityQueue.size() > k) {
      priorityQueue.dequeue();
    }
  }

  return priorityQueue.front();
}