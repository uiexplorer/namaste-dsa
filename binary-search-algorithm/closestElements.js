/**
 * Given a sorted integer array arr, two integers k and x,
 * return the k closest integers to x in the array.
 * The result should also be sorted in ascending order.
 * An integer a is closer to x than an integer b if:
 * |a - x| < |b - x|, or
 * |a - x| == |b - x| and a < b
 */

function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if ((arr[middle + k] - x) < (x - arr[middle])) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return arr.slice(left, left + k);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 2, 3)); // [2, 3]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [1, 2, 3, 4]
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1)); // [1, 1, 2, 3]
