/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

function isSubsequence(s, t) {
  let sPointer = 0;
  let tPointer = 0;

  while (tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }

  return sPointer === s.length;
}

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("acb", "ahbgdc")); // false
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("aaaaaa", "bbaaaa")); // false
