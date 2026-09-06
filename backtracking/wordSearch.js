/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 */

function wordSearch(board, word) {
  let result = false;
  const rows = board.length;
  const cols = board[0].length;

  const backtrack = (x, y, nextIndex) => {
    if (nextIndex === word.length) {
      result = true;
    }

    const original = board[x][y];
    board[x][y] = "#";

    if (x > 0 && board[x - 1][y] === word[nextIndex]) {
      backtrack(x - 1, y, nextIndex + 1);
    }
    if (y < cols - 1 && board[x][y + 1] === word[nextIndex]) {
      backtrack(x, y + 1, nextIndex + 1)
    }
    if (x < rows - 1 && board[x + 1][y] === word[nextIndex]) {
      backtrack(x + 1, y, nextIndex + 1);
    }
    if (y > 0 && board[x][y - 1] === word[nextIndex]) {
      backtrack(x, y - 1, nextIndex + 1);
    }
    board[x][y] = original;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        backtrack(i, j, 1)
      }
    }
  }
  return result;
}

console.log(wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")); // true
console.log(wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE")); // true
console.log(wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB")); // false
