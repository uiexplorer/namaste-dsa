/**
 * Given an n x n matrix where each of the rows and columns is sorted in ascending order,
 * return the kth smallest element in the matrix.
 */

function kthSmallest(matrix, k) {
  const minHeap = new MinPriorityQueue(({ val }) => val);

  for (let index = 0; index < matrix.length; index++) {
    const subArray = matrix[index];
    minHeap.enqueue({
      val: subArray[0],
      row: index,
      col: 0
    });
  }

  for (let count = 0; count < k - 1; count++) {
    let { row, col } = minHeap.dequeue();
    if (col < matrix.length - 1) {
      minHeap.enqueue({
        val: matrix[row][col + 1],
        row,
        col: ++col
      });
    }
  }

  return minHeap.dequeue().val;
}