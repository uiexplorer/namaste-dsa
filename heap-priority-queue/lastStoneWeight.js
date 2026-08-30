/**
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
 * Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
 * If x == y, both stones are destroyed, and
 * If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 * At the end of the game, there is at most one stone left.
 * Return the weight of the last remaining stone. If there are no stones left, return 0.
 */

function lastStoneWeight(stones) {
  if (stones.length === 1) return stones[0];
  const stonesMaxHeap = new MaxPriorityQueue(null, stones);

  while (stonesMaxHeap.size() > 1) {
    const highest = stonesMaxHeap.dequeue();
    const secondHighest = stonesMaxHeap.dequeue();
    const diff = highest - secondHighest;
    if (diff > 0) {
      stonesMaxHeap.enqueue(diff);
    }
  }

  return stonesMaxHeap.dequeue() ?? 0;
}