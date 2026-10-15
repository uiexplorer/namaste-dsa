/**
 * Given an input string s, reverse the order of the words.
 */

function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "a good   example"
