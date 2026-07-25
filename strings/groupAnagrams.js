/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 */

function groupAnagrams(strs) {
  const strsSortedHash = {};
  const result = [];
  for (let index = 0; index < strs.length; index++) {
    const str = strs[index];
    const key = str.split("").sort().join("");
    if (strsSortedHash[key]) {
      strsSortedHash[key] = [...strsSortedHash[key], str];
    } else {
      strsSortedHash[key] = [str];
    }
  }

  for (const str in strsSortedHash) {
    result.push(strsSortedHash[str]);
  }

  return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]