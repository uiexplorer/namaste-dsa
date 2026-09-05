/**
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 */

function partitioning(s) {
  const result = [];
  const backtrack = (path, remainingString) => {
    if (remainingString === "") {
      result.push([...path]);
    } else {
      for (let index = 1; index <= remainingString.length; index++) {
        const choice = remainingString.substring(0, index);
        if (choice !== choice.split("").reverse().join("")) {
          continue;
        }
        path.push(choice);
        backtrack(path, remainingString.substring(index));
        path.pop();
      }
    }
  };
  backtrack([], s);
  return result;
}

console.log(partitioning("aab")); // [["a","a","b"],["aa","b"]]
console.log(partitioning("a")); // [["a"]]

