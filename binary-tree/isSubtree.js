/**
 * Given the roots of two binary trees root and subRoot,
 * return true if there is a subtree of root with the same structure and node values of subRoot
 * and false otherwise.
 */

function isSubtree(root, subRoot) {
  const rootString = traversal(root, '');
  const subRootString = traversal(subRoot, '');
  return rootString.includes(subRootString);
}

function traversal(node, resultString) {
  resultString += node ? '-' + node.val : '-#';
  if (node) {
    resultString = traversal(node.left, resultString);
    resultString = traversal(node.right, resultString);
  }
  return resultString;
}