/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 */

function preorderTraversal(root) {
  if (!root) return root;
  const stack = [root];
  const result = [];
  while (stack.length) {
    const currentNode = stack.pop();
    result.push(currentNode.val);
    currentNode.right && stack.push(currentNode.right);
    currentNode.left && stack.push(currentNode.left);
  }
  return result;
}
