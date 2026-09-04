/**
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 */

function letterCombinations(digits) {
  const result = [];
  const letterMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  const backtrack = (path, index) => {
    if (path.length === digits.length) {
      result.push(path.join(''));
    } else {
      let choices = letterMap[digits[index]];
      for (let i = 0; i < choices.length; i++) {
        path.push(choices[i]);
        backtrack(path, index + 1);
        path.pop();
      }
    }
  };
  backtrack([], 0);
  return result;
}

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("2")); // ["a","b","c"]
