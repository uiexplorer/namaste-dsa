/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 */

function rightSideView(root) {
  if (!root) return [];
  const result = [];
  traversal(root, result, 0);
  return result;
}

function traversal(node, result, level) {
  if (!node) return;
  result[level] ?? result.push(node.val);
  node.right && traversal(node.right, result, level + 1);
  node.left && traversal(node.left, result, level + 1);
}