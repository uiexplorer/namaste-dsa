/**
 * Given a string s, find the length of the longest substring without duplicate characters.
 */

function lengthOfLongestSubstring(s) {
  let i = 0;
  let j = 0;
  const charMap = {};
  let maxCount = 0;

  while (j < s.length) {
    const character = s[j];
    if (charMap[character] != undefined && charMap[character] >= i) {
      i = charMap[character] + 1;
    }
    charMap[character] = j;
    maxCount = Math.max(maxCount, j - i + 1);
    j++;
  }
  return maxCount;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("pwwkex")); // 4
