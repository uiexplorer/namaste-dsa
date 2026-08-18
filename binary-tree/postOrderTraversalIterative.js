/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 */

function postorderTraversal(root) {
  if (!root) return [];
  const stack = [root];
  const result = [];

  while (stack.length) {
    const currentNode = stack.pop();
    result.push(currentNode.val);
    currentNode.left && stack.push(currentNode.left);
    currentNode.right && stack.push(currentNode.right);
  }

  return result.reverse();
}
