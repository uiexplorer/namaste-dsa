/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 */

function topKFrequent(nums, k) {
  const frequencyMap = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    frequencyMap[element] = frequencyMap[element] ? ++frequencyMap[element] : 1;
  }
  const minHeap = new MinPriorityQueue(({ frequency }) => frequency);
  for (const key in frequencyMap) {
    if (!Object.hasOwn(frequencyMap, key)) continue;
    const frequency = frequencyMap[key];
    minHeap.enqueue({ key, frequency });
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }

  return minHeap.toArray().map(({ key }) => Number(key));
}