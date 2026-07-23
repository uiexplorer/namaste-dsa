/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];
  const firstString = strs[0];
  for (let i = 0; i < firstString.length; i++) {
    const character = firstString[i];
    for (let j = 1; j < strs.length; j++) {
      const innerString = strs[j];
      if (character !== innerString[i]) {
        return firstString.slice(0, i);
      }
    }
  }
  return firstString;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["flow", "flower", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
