/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */

function isSymmetric(root) {
  if (!root) return false;
  const dequeue = [root.left, root.right];
  while (dequeue.length) {
    const first = dequeue.shift();
    const last = dequeue.pop();
    if (!first && !last) {
      continue;
    }
    if (!first || !last || first?.val !== last?.val || dequeue.length % 2 !== 0) {
      return false;
    }
    first && dequeue.unshift(first.right);
    first && dequeue.unshift(first.left);
    last && dequeue.push(last.left);
    last && dequeue.push(last.right);
    console.log('DEBUG: dequeue:', dequeue);
  }
  return true;
}