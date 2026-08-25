/**
 * 
 */

function kthSmallest(root, k) {
  const BSTArray = [];
  traversal(root, k, BSTArray);
  return BSTArray[k - 1];
}

function traversal(node, k, BSTArray) {
  if (BSTArray.length >= k) return;
  node.left && traversal(node.left, k, BSTArray);
  BSTArray.push(node.val);
  node.right && traversal(node.right, k, BSTArray);
}