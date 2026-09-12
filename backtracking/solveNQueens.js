/**
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * You may return the answer in any order.
 */


function transform(board) {
  const newBoard = [];
  for (let index = 0; index < board.length; index++) {
    newBoard.push(board[index].join(""));
  }
  return newBoard;
};

function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const backtrack = (board, row, colSet, digSet, antiDigSet) => {
    if (row === n) {
      result.push(transform(board));
    }
    for (let col = 0; col < n; col++) {
      if (colSet.has(col) || digSet.has(row - col) || antiDigSet.has(row + col)) {
        continue;
      }
      board[row][col] = "Q";
      colSet.add(col);
      digSet.add(row - col);
      antiDigSet.add(row + col);

      backtrack(board, row + 1, colSet, digSet, antiDigSet);

      board[row][col] = ".";
      colSet.delete(col);
      digSet.delete(row - col);
      antiDigSet.delete(row + col);
    }
  };
  backtrack(board, 0, new Set(), new Set(), new Set());
  return result;
}

console.log(solveNQueens(4)); // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // [["Q"]]
