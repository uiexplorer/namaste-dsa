/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 */

function postorderTraversal(root) {
  const result = [];
  traversal(root, result);
  return result;
}

// IMP: left --> right --> root
function traversal(node, store) {
  if (!node) return;
  traversal(root.left, store);
  traversal(root.right, store);
  store.push(node.val)
}