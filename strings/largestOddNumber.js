/**
 * You are given a string num, representing a large integer.
 * Return the largest-valued odd integer (as a string) that is a non-empty substring of num,
 * or an empty string "" if no odd integer exists.
 * A substring is a contiguous sequence of characters within a string.
 */

function largestOddNumber(num) {
  for (let index = num.length - 1; index >= 0; index--) {
    const digit = parseInt(num[index], 10);
    if (digit % 2 !== 0) {
      return num.slice(0, index + 1);
    }
  }
  return ""
}

console.log(largestOddNumber("52")); // "5"
console.log(largestOddNumber("4206")); // ""
console.log(largestOddNumber("35427")); // "35427"
console.log(largestOddNumber("354276")); // "35427"
console.log(largestOddNumber("3691669784801845146")); // "36916697848018451"
