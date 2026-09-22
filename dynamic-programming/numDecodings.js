/**
 * Given a string s containing only digits, return the number of ways to decode it.
 * If the entire string cannot be decoded in any valid way, return 0.
 */

function numDecodings(s) {
  if (s[0] === 0) return 0;
  const dp = {};
  const backtrack = (remaining) => {
    if (dp.hasOwnProperty(remaining)) return dp[remaining];
    if (remaining === '') return 1;
    let result = 0;
    const length = remaining.length;
    const oneDigit = parseInt(remaining.substring(length - 1), 10);
    const twoDigit = parseInt(remaining.substring(length - 2), 10);
    if (oneDigit > 0) {
      result += backtrack(remaining.substring(0, length - 1));
    }
    if (twoDigit > 9 && twoDigit < 27) {
      result += backtrack(remaining.substring(0, length - 2));
    }
    dp[remaining] = result;
    return result;
  };
  return backtrack(s);
}

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
console.log(numDecodings("06")); // 0
