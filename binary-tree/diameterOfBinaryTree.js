/**
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 */

function diameterOfBinaryTree(root) {
  let maxDiameter = 0;
  const findDepth = (node) => {
    if (!node) return 0;
    const leftDepth = findDepth(node.left);
    const rightDepth = findDepth(node.right);
    maxDiameter = Math.max(maxDiameter, (leftDepth + rightDepth));
    return 1 + Math.max(leftDepth, rightDepth);
  };
  findDepth(root);
  return maxDiameter;
}