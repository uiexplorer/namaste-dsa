/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 */

function preorderTraversal(root) {
  const result = [];
  traversal(root, result);
  return result;
}

// IMP: root --> left --> right
function traversal(node, store) {
  if (!node) return;
  store.push(node.val);
  traversal(node.left, store);
  traversal(node.right, store);
}
