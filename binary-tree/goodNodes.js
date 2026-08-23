/**
 * Given a binary tree root, a node X in the tree is named good if in the path
 * from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 */

function goodNodes(root) {
  const result = [];
  traversal(root, -Infinity, result);
  return result.length;
}

function traversal(node, maxOnPath, result) {
  if (node.val >= maxOnPath) {
    maxOnPath = node.val;
    result.push(node);
  }
  node.left && traversal(node.left, maxOnPath, result);
  node.right && traversal(node.right, maxOnPath, result);
}