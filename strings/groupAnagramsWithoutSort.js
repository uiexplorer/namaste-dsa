/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 */

function groupAnagramsWithoutSort(strs) {
  const strsHash = {};

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const freqArray = Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      const character = str[j];
      const position = character.charCodeAt() - "a".charCodeAt();
      freqArray[position] += 1;
    }
    const key = freqArray.toString();
    if (strsHash[key]) {
      strsHash[key] = [...strsHash[key], str]
    } else {
      strsHash[key] = [str]
    }
  }

  return [...Object.values(strsHash)];
}

console.log(groupAnagramsWithoutSort(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagramsWithoutSort([""])); // [[""]]
console.log(groupAnagramsWithoutSort(["a"])); // [["a"]]