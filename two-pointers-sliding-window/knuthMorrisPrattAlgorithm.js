/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 */

function includes(haystack, needle) {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  const lps = [0];
  let i = 0;
  let j = 1;

  while (j < needleLength) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      ++i;
      ++j;
    } else {
      if (i === 0) {
        lps[j] = 0;
        ++j;
      } else {
        i = lps[i - 1];
      }
    }
  }

  i = j = 0;

  while (i < haystackLength) {
    if (haystack[i] === needle[j]) {
      ++i;
      ++j;
    } else {
      if (j === 0) {
        ++i;
      } else {
        j = lps[j - 1];
      }
    }

    if (j === needleLength) {
      return i - needleLength;
    }
  }

  return -1;
}

console.log(includes("sadbutsad", "sad")); // 0
console.log(includes("saturdaysad", "sad")); // 8
console.log(includes("onionionsky", "onions")); // 3
console.log(includes("leetcode", "leeto")); // -1
