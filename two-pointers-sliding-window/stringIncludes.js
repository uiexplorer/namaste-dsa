/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 */

function includes(haystack, needle) {
  if (needle.length > haystack.length) return -1;
  const windowLength = needle.length;

  for (let i = 0; i <= haystack.length - windowLength; i++) {
    const subStr = haystack.slice(i, i + windowLength);
    if (subStr === needle) {
      return i;
    }
  }

  return -1;
}

console.log(includes("sadbutsad", "sad")); // true
console.log(includes("saturdaysad", "sad")); // true
console.log(includes("onionionsky", "onions")); // true
console.log(includes("leetcode", "leeto")); // false
