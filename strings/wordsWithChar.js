/**
 * You are given a 0-indexed array of strings words and a character x.
 * Return an array of indices representing the words that contain the character x.
 * Note that the returned array may be in any order.
 */

function findWordsContaining(words, x) {
  const result = [];
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    for (let innerIndex = 0; innerIndex < element.length; innerIndex++) {
      const character = element[innerIndex];
      if (character === x) {
        result.push(index);
        break;
      }

    }
  }
  return result;
}

console.log(findWordsContaining(["leet", "code"], "e")); // [0, 1]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")); // [0, 2]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z")); // []
