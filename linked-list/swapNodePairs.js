/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes.
 */

function swapPairs(head) {
  if (!head || !head.next) return head;

  const sentinel = new ListNode(-Infinity, head);
  let prev = sentinel;
  let curr = head;
  let next = head.next;

  while (curr && curr.next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = prev.next;
    next = curr && curr.next;
  }

  return sentinel.next;
}

console.log(swapPairs([1, 2, 3, 4])); // [2, 1, 4, 3]
console.log(swapPairs([])); // []
console.log(swapPairs([1])); // [1]
console.log(swapPairs([1, 2, 3])); // [2, 1, 3]

function swapPairsRecursive(head) {
  if (!head || !head.next) return head;
  const left = head;
  const right = head.next;

  left.next = swapPairsRecursive(right.next);
  right.next = left;
  return right;
}

console.log(swapPairsRecursive([1, 2, 3, 4])); // [2, 1, 4, 3]
console.log(swapPairsRecursive([])); // []
console.log(swapPairsRecursive([1])); // [1]
console.log(swapPairsRecursive([1, 2, 3])); // [2, 1, 3]