/**
 * Given a non-negative integer x, return the square root of x
 * rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 */

function findSqrt(num) {
  if (num < 2) return num;
  let left = 2;
  let right = Math.floor(num / 2);
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleSquare = middle * middle;
    if (middleSquare === num) {
      return middle;
    } else if (middleSquare > num) {
      right = middle - 1;
    } else {
      left = middle + 1
    }
  }
  return right;
}

console.log(findSqrt(4)); // 2
console.log(findSqrt(8)); // 2
console.log(findSqrt(20)); // 4
console.log(findSqrt(30)); // 5
console.log(findSqrt(80)); // 8
console.log(findSqrt(1000)); // 31
