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

/**
 * This is two pass approach where we loop over the linked list 2 times:
 * 1. Find length of array
 * 2. Find position before node to be deleted
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

function removeNthNodeFromEndInOnePass(head, n) {
  const sentinel = new ListNode(null, head);
  let firstPointer = sentinel;
  let secondPointer = sentinel;
  for (let i = 0; i <= n; i++) {
    secondPointer = secondPointer.next;
  }
  while (secondPointer) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }
  firstPointer.next = firstPointer.next.next;
  return sentinel.next;
}

console.log(removeNthNodeFromEndInOnePass([1, 2, 3, 4, 5], 2)); // [1,2,3,5]
console.log(removeNthNodeFromEndInOnePass([1], 1)); // []
console.log(removeNthNodeFromEndInOnePass([1, 2], 1)); // [1]
