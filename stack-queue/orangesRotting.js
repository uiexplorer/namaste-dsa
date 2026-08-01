/**
 * You are given an m x n grid where each cell can have one of three values:
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1.
 */

function orangesRotting(grid) {
  let maxTimeTaken = 0;
  const queue = [];
  const rowLength = grid.length;
  const colLength = grid[0].length;

  // find position for rotten oranges in grid & push to queue
  for (let x = 0; x < rowLength; x++) {
    for (let y = 0; y < colLength; y++) {
      const element = grid[x][y];
      if (element === 2) {
        queue.push([x, y, 0]);
      }
    }
  }

  // Loop over queue until queue becomes empty
  // increase the counter whenever we mark any orange as rotten
  while (queue.length) {
    let [x, y, timeElapsed] = queue.shift();

    const top = x > 0 && grid[x - 1][y] === 1 && [x - 1, y, timeElapsed + 1];
    const bottom = x < rowLength - 1 && grid[x + 1][y] === 1 && [x + 1, y, timeElapsed + 1];
    const left = y > 0 && grid[x][y - 1] === 1 && [x, y - 1, timeElapsed + 1];
    const right = y < colLength - 1 && grid[x][y + 1] === 1 && [x, y + 1, timeElapsed + 1];

    if (top) {
      const [row, col] = top;
      grid[row][col] = 2;
      queue.push(top)
    };
    if (right) {
      const [row, col] = right;
      grid[row][col] = 2;
      queue.push(right)
    };
    if (bottom) {
      const [row, col] = bottom;
      grid[row][col] = 2;
      queue.push(bottom)
    };
    if (left) {
      const [row, col] = left;
      grid[row][col] = 2;
      queue.push(left)
    };

    if (timeElapsed > maxTimeTaken) {
      maxTimeTaken = timeElapsed;
    }
  }

  for (let x = 0; x < rowLength; x++) {
    for (let y = 0; y < colLength; y++) {
      const element = grid[x][y];
      if (element === 1) {
        return -1
      }
    }
  }

  return maxTimeTaken;
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // -1
console.log(orangesRotting([[0, 2]])); // 0
console.log(orangesRotting([[2, 1, 1], [1, 1, 1], [0, 1, 2]])); // 2
