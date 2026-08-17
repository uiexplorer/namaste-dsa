/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * left --> root --> right
 */

function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let currentNode = root;
  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }
  return result;
}