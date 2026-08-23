/**
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 * The path sum of a path is the sum of the node's values in the path.
 */

function maxPathSum(root) {
  let maxSumPath = -Infinity;
  const traversal = (node) => {
    if (!node) return 0;
    const maxLeft = Math.max(0, traversal(node.left));
    const maxRight = Math.max(0, traversal(node.right));

    const currentMax = node.val + maxLeft + maxRight;

    maxSumPath = Math.max(currentMax, maxSumPath);

    return node.val + Math.max(maxLeft, maxRight);
  };
  traversal(root);
  return maxSumPath;
}