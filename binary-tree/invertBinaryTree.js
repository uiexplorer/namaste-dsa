/**
 * Given the root of a binary tree, invert the tree, and return its root.
 */

function invertTree(root) {
  if (!root) return root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}