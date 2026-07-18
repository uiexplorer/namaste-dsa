/**
 * Given the head of a linked list, rotate the list to the right by k places.
 */

function rotateRight(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  k = k % length;

  let secondPointer = head;
  let firstPointer = head;

  for (let index = 0; index < k; index++) {
    firstPointer = firstPointer.next
  }

  while (firstPointer.next) {
    secondPointer = secondPointer.next;
    firstPointer = firstPointer.next;
  }

  firstPointer.next = head;
  let newHead = secondPointer.next;
  secondPointer.next = null;

  return newHead;
}

console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateRight([0, 1, 2], 4)); // [2, 0, 1]
