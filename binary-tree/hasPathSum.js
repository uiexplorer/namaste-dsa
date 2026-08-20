/**
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 */

function hasPathSum(root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}