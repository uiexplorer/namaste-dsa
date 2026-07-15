/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function removeNthNodeFromEnd(head, n) {
  const sentinel = new ListNode(null, head);
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  const positionBeforeNodeToBeDeleted = length - n;
  let current = sentinel;
  for (let index = 0; index < positionBeforeNodeToBeDeleted; index++) {
    current = current.next;
  }
  current.next = current.next.next;
  return sentinel.next;
}

console.log(removeNthNodeFromEnd([1, 2, 3, 4, 5], 2)); // [1,2,3,5]
console.log(removeNthNodeFromEnd([1], 1)); // []
console.log(removeNthNodeFromEnd([1, 2], 1)); // [1]
