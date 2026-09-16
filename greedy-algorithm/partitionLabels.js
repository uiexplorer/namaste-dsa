/**
 * You are given a string s. We want to partition the string into as many parts as possible
 * so that each letter appears in at most one part.
 * Return a list of integers representing the size of these parts.
 */

function partitionLabels(s) {
  const charMap = {};
  const intervals = [];
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (!charMap[char]) {
      charMap[char] = true;
      intervals.push([s.indexOf(char), s.lastIndexOf(char)]);
    }
  }
  const result = [intervals[0]];
  for (let index = 1; index < intervals.length; index++) {
    const previous = result[result.length - 1];
    const current = intervals[index];
    if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result.map(([start, end]) => end - start + 1);
}

console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9, 7, 8]
console.log(partitionLabels("eccbbbbdec")); // [10]
