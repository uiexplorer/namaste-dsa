/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 */

function generate(numRows) {
  const result = [[1]];
  for (let index = 1; index < numRows; index++) {
    const previousLevel = result[result.length - 1]
    const level = new Array(previousLevel.length + 1).fill(1);
    for (let i = 1; i < level.length - 1; i++) {
      level[i] = previousLevel[i - 1] + previousLevel[i];
    }
    result.push(level);
  }
  return result;
}

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
