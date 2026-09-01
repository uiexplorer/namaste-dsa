/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 */

function getRow(rowIndex) {
  const result = [[1]];
  for (let index = 1; index <= rowIndex; index++) {
    const previousLevel = result[result.length - 1]
    const level = new Array(previousLevel.length + 1).fill(1);
    for (let i = 1; i < level.length - 1; i++) {
      level[i] = previousLevel[i - 1] + previousLevel[i];
    }
    result.push(level);
  }
  return result[rowIndex];
}

console.log(getRow(3)); // [1, 3, 3, 1]
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1, 1]
