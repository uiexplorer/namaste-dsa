/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 */

function maxDepth(root) {
  if (!root) return 0;
  let maxDepth = 0;
  const traversal = (node, depth) => {
    maxDepth = Math.max(depth, maxDepth);
    node.left && traversal(node.left, depth + 1);
    node.right && traversal(node.right, depth + 1);
  }
  traversal(root, 1);
  return maxDepth;
}