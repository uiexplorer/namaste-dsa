/**
 * Given a string s, return the number of palindromic substrings in it.
 */

function countPalindromicSubstrings(s) {
  let counter = 0;
  const length = s.length;
  const dp = Array.from({ length }, () => Array(length).fill(null));
  for (let index = 0; index < length; index++) {
    dp[index][index] = true;
    ++counter;
    if (index < length - 1 && s[index] === s[index + 1]) {
      dp[index][index + 1] = true;
      ++counter;
    }
  }
  for (let i = 3; i <= length; i++) {
    for (let j = 0; j <= length - i; j++) {
      let lastChar = j + i - 1;
      if (s[j] === s[lastChar] && dp[j + 1][lastChar - 1]) {
        dp[j][lastChar] = true;
        ++counter;
      }
    }
  }
  return counter;
}

console.log(countPalindromicSubstrings("abc")); // 3
console.log(countPalindromicSubstrings("aaa")); // 6
