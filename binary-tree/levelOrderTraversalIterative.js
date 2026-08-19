/**
 * Given the root of a binary tree,
 * return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

function levelOrder(root) {
  if (!root || !root.length) return [];
  const result = [];
  const queue = [[root]];
  let level = 0;

  while (queue.length) {
    const nextLevel = [];
    result.push([]);
    const childrens = queue.shift();
    while (childrens.length) {
      const currentNode = childrens.shift();
      result[level].push(currentNode.val);
      currentNode.left && nextLevel.push(currentNode.left);
      currentNode.right && nextLevel.push(currentNode.right);
    }
    nextLevel.length && queue.push(nextLevel);
    level++;
  }
  return result;
}