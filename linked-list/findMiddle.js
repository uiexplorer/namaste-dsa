/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */

function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

console.log(middleNode([1, 2, 3, 4, 5])); // [3, 4, 5]
console.log(middleNode([1, 2, 3, 4, 5, 6])); // [3, 4, 5, 6]
console.log(middleNode([1])); // [1]
