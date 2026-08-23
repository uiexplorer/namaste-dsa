/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * 
 * The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
 * (where we allow a node to be a descendant of itself).
 */

function lowestCommonAncestor(root, q, p) {
  let lca = null;
  const traversal = (node) => {
    if (!node) return 0;
    let count = 0;
    const leftCount = traversal(node.left);
    const rightCount = traversal(node.right);
    if (node.val === p.val || node.val === q.val) count++;
    count += leftCount + rightCount;

    if (count === 2 && !lca) lca = node;
    return count;
  }
  traversal(root);
  return lca;
};