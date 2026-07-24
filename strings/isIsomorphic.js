/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character
 * while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 */

function isIsomorphic(s, t) {
  const sHash = {};
  const sSet = new Set();
  for (let index = 0; index < s.length; index++) {
    const character = s[index];
    if (!sHash[character] && !sSet.has(t[index])) {
      sHash[character] = t[index];
      sSet.add(t[index]);
    } else if (sHash[character] !== t[index]) {
      return false
    }
  }
  return true;
}

console.log(isIsomorphic("badc", "baba")); // false
console.log(isIsomorphic("bbbaaaba", "aaabbbba")); // false
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("f11", "b23")); // false
console.log(isIsomorphic("paper", "title")); // true
