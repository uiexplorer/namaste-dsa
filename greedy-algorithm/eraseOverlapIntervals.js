/**
 * Given an array of intervals intervals where intervals[i] = [starti, endi],
 * return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 */

function eraseOverlapIntervals(intervals) {
  intervals.sort(([x, a], [y, b]) => a - b);
  let k = -Infinity;
  let count = 0;
  for (let index = 0; index < intervals.length; index++) {
    const interval = intervals[index];
    if (interval[0] < k) {
      ++count;
    } else {
      k = interval[1];
    }
  }
  return count;
}

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]])); // 0
console.log(eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]])); // 2
