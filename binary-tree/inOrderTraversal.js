/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */

function inorderTraversal(root) {
  const result = [];
  traversal(root, result);
  return result;
}

// IMP: left --> root --> right
function traversal(node, store) {
  if (!node) return;
  traversal(node.left, store);
  store.push(node.val);
  traversal(node.right, store);
}