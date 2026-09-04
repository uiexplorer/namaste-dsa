/**
 * 
 */

function permuteUnique(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const backtrack = (path, choices) => {
    if (path.length === nums.length) {
      result.push([...path]);
    } else {
      for (let index = 0; index < choices.length; index++) {
        const element = choices[index];
        if (index > 0 && element === choices[index - 1]) {
          continue;
        }
        path.push(element);
        backtrack(path, [...choices.slice(0, index), ...choices.slice(index + 1)]);
        path.pop();
      }
    }
  };
  backtrack([], nums);
  return result;
}

console.log(permuteUnique([1, 1, 2])); // [[1, 1, 2],  [1, 2, 1],  [2, 1, 1]]
console.log(permuteUnique([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
