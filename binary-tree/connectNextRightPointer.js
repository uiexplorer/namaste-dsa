/**
 * You are given a perfect binary tree where all leaves are on the same level,
 * and every parent has two children. The binary tree has the following definition:
 * 
 * struct Node {
 *   int val
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * 
 * Populate each next pointer to point to its next right node.
 * If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 */

function connect(root) {
  if (!root) return root;
  traversal(root);
  return root;
}

function traversal(node) {
  if (node.left) {
    node.left.next = node.right;
  }
  if (node.right) {
    node.right.next = node.next?.left ?? null;
  }
  node.left && traversal(node.left);
  node.right && traversal(node.right);
}