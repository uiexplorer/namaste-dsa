/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

function mergeInterval(intervals) {
  intervals.sort(([a], [b]) => a - b);
  const result = [intervals[0]];
  for (let index = 1; index < intervals.length; index++) {
    const previous = result[result.length - 1];
    const current = intervals[index];
    if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
}

console.log(mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(mergeInterval([[1, 4], [4, 5]])); // [[1,5]]
console.log(mergeInterval([[4, 7], [1, 4]])); // [[1,7]]
console.log(mergeInterval([[1, 4], [5, 6]])); // [[1,4],[5,6]]
console.log(mergeInterval([[1, 4], [2, 3]])); // [[1,4]]
console.log(mergeInterval([[0, 4], [1, 5]])); // [[0,5]]

