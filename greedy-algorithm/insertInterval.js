/**
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and
 * intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 */

function insertInterval(intervals, newInterval) {
  if (!intervals.length) return [newInterval];
  const preInsertion = intervals.filter(([_, b]) => newInterval[0] > b);
  const postInsertion = intervals.filter(([a]) => newInterval[1] < a);
  return [
    ...preInsertion,
    [
      Math.min(intervals[preInsertion.length] ? intervals[preInsertion.length][0] : newInterval[0], newInterval[0]),
      Math.max(intervals.at(-1 * postInsertion.length - 1) ? intervals.at(-1 * postInsertion.length - 1)[1] : newInterval[1], newInterval[1])
    ],
    ...postInsertion
  ];
}

console.log(insertInterval([[1, 5]], [6, 8])); // [[1, 5], [6, 8]]
console.log(insertInterval([[1, 2], [5, 6]], [3, 4])); // [[1, 2], [3, 4], [5, 6]]
console.log(insertInterval([[1, 3], [6, 9]], [2, 5])); // [[1, 5], [6, 9]]
console.log(insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // [[1, 2], [3, 10], [12, 16]]

