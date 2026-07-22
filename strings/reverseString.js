/**
 * Given a string s and an integer k,
 * reverse the first k characters for every 2k characters counting from the start of the string.
 * If there are fewer than k characters left, reverse all of them.
 * If there are less than 2k but greater than or equal to k characters,
 * then reverse the first k characters and leave the other as original.
 */

function reverseString(s, k) {
  let result = "";
  for (let index = 0; index < s.length; index = index + (2 * k)) {
    const firstKCharacters = reverseSubstring(s.slice(index, index + k));
    const lastKCharacters = s.slice(index + k, index + (2 * k));
    result = result + firstKCharacters + lastKCharacters;
  }
  return result;
}

function reverseSubstring(s) {
  let reverseString = "";
  for (let index = s.length - 1; index >= 0; index--) {
    reverseString += s[index];
  }
  return reverseString;
}

console.log(reverseString("abcdefg", 2)); // bacdfeg
console.log(reverseString("abcd", 2)); // bacd
