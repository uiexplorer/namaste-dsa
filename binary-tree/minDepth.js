/**
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path
 * from the root node down to the nearest leaf node.
 */

function minDepth(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    const levelSize = queue.length;
    depth++;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (!current.left && !current.right) {
        return depth;
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return depth;
}
