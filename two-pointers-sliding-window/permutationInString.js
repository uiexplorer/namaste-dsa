/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 */

function checkInclusion(s1, s2) {
  let i = 0;
  let j = s1.length;
  const s1Map = getStringMap(s1);

  while (j <= s2.length) {
    const windowMap = getStringMap(s2.slice(i, j));
    if (isMapSame(s1Map, windowMap)) {
      return true;
    }
    ++i;
    ++j;
  }
  return false;
}

function getStringMap(str) {
  const strMap = Array(26).fill(0);
  for (let index = 0; index < str.length; index++) {
    ++strMap[str[index].charCodeAt(0) - 97];
  }
  return strMap;
}

function isMapSame(map1, map2) {
  for (let index = 0; index < map1.length; index++) {
    const element1 = map1[index];
    const element2 = map2[index];
    if (element1 !== element2) {
      return false;
    }
  }
  return true;
}

console.log(checkInclusion("adc", "dcda")); // true
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
