/**
 * Given a binary tree, determine if it is height-balanced.
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 */

function isBalanced(root) {
  if (!root) return true;
  let result = true;
  const getDepth = (node) => {
    if (!node) return 0;
    const leftHeight = getDepth(node.left);
    const rightHeight = getDepth(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      result = result && false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  };
  getDepth(root)
  return result;
}