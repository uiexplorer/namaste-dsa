/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 */

function isValidBST(root) {
  return traversal(root, null, null);
}

function traversal(node, low, high) {
  if (!node) return true;
  if ((low !== null && node.val <= low) || (high !== null && node.val >= high)) {
    return false;
  }
  return traversal(node.left, low, node.val) && traversal(node.right, node.val, high);
}
