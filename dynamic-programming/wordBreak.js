/**
 * Given a string s and a dictionary of strings wordDict,
 * return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 */

function wordBreak(s, wordDict) {
  const dp = {};
  const backtrack = (remainingStr) => {
    if (!remainingStr) return true;
    if (remainingStr in dp) return dp[remainingStr];
    for (let index = 0; index < remainingStr.length; index++) {
      const subString = remainingStr.substring(0, index + 1);
      if (wordDict.includes(subString) && backtrack(remainingStr.substring(index + 1))) {
        dp[remainingStr] = true;
        return true;
      }
    }
    dp[remainingStr] = false;
    return false
  };
  return backtrack(s);
}

// console.log(wordBreak("leetcode", ["leet", "code"])); // true
// console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
// console.log(wordBreak("bb", ["a", "b", "bbb", "bbbb"])); // true
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"])); // false

