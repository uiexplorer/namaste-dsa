/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
 * (i.e., from left to right, then right to left for the next level and alternate between).
 */

function zigzagLevelOrder(root) {
  if (!root) return [];
  const result = [];
  traversal(root, 0, result)
  return result;
}

function traversal(node, level, result) {
  if (!result[level]) {
    result[level] = [];
  }
  if (level % 2 === 0) {
    result[level].push(node);
  } else {
    result[level].unshift(node);
  }
  node.left && traversal(node.left, level + 1, result);
  node.right && traversal(node.right, level + 1, result);
}