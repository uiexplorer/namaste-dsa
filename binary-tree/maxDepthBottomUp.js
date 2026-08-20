/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 */

function maxDepth(node) {
  if (!node) return 0;
  const leftMax = maxDepth(node.left);
  const rightMax = maxDepth(node.right);
  return 1 + Math.max(leftMax, rightMax);
}