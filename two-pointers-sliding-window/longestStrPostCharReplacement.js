/**
 * You are given a string s and an integer k.
 * You can choose any character of the string and change it to any other uppercase English character.
 * You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 */

function characterReplacement(s, k) {
  let i = j = 0;
  let maxCount = 0;
  let map = Array(26).fill(0);
  map[s.charCodeAt(0) - 65] = 1;
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxCount = Math.max(j - i + 1, maxCount);
      ++j;
      ++map[s.charCodeAt(j) - 65];
    } else {
      --map[s.charCodeAt(i) - 65];
      ++i;
    }
  }
  return maxCount;
}

function isWindowValid(map, k) {
  let totalCount = maxCount = 0;
  for (let index = 0; index < 26; index++) {
    totalCount += map[index];
    maxCount = Math.max(maxCount, map[index]);
  }
  return (totalCount - maxCount <= k);
}

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
