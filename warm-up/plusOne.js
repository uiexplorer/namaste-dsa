/**
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 */

function plusOne(digits) {
  let iterator = digits.length - 1;
  while (iterator >= 0) {
    const element = digits[iterator];
    if (element === 9) {
      digits[iterator] = 0;
    } else {
      digits[iterator] += 1;
      return digits;
    }
    --iterator;
  }
  digits.unshift(1)
  return digits;
}

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9])); // [1, 0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
