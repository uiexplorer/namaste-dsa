/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 */

function rightSideView(root) {
  if(!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const levelSize = queue.length;
    for (let index = 0; index < levelSize; index++) {
      const node = queue.shift();
      index === 0 && result.push(node.val);
      node.right && queue.push(node.right);
      node.left && queue.push(node.left);
    }
  }
  return result;
}