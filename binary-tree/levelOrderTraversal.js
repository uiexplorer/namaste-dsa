/**
 * Given the root of a binary tree,
 * return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

function levelOrder(root) {
  if (!root) return [];
  const result = [];
  traversal(root, 0, result);
  return result;
}

function traversal(node, level, result) {
  if (!result[level]) result[level] = [];
  result[level].push(node.val);
  node.left && traversal(node.left, level + 1, result);
  node.right && traversal(node.right, level + 1, result);
}