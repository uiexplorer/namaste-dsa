/**
 * Given a string s, return the longest palindromic substring in s.
 */

function longestPalindrome(s) {
  if (s.length < 2) return s;

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const odd = expandAroundCenter(s, i, i);
    const even = expandAroundCenter(s, i, i + 1);

    if (odd.length > longest.length) {
      longest = odd;
    }
    if (even.length > longest.length) {
      longest = even;
    }
  }
  return longest;
}

function expandAroundCenter(s, left, right) {
  while (
    left >= 0 &&
    right < s.length &&
    s[left] === s[right]
  ) {
    left--;
    right++;
  }

  return s.slice(left + 1, right);
}

console.log(longestPalindrome("babad")); // "bab" (or "aba")
console.log(longestPalindrome("cbbd"));  // "bb"
console.log(longestPalindrome("abb"));   // "bb"
console.log(longestPalindrome("a"));   // "a"
