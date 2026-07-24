/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

function checkIsAnagram(s, t) {
  if (s.length !== t.length) return false;
  const sHash = {};
  for (let index = 0; index < s.length; index++) {
    const character = s[index];
    sHash[character] ? sHash[character] += 1 : sHash[character] = 1;
  }
  for (let index = 0; index < t.length; index++) {
    const character = t[index];
    if (!sHash[character] || sHash[character] < 0) {
      return false;
    } else {
      sHash[character] -= 1;
    }
  }
  return true;
}

console.log(checkIsAnagram("anagram", "nagaram")); // true
console.log(checkIsAnagram("rat", "car")); // false
console.log(checkIsAnagram("aacc", "ccac")); // false
