/**
 * Given the head of a sorted linked list,
 * delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well.
 */

function removeDuplicates(head) {
  const sentinel = new ListNode(-Infinity, head);
  let prev = sentinel;
  let current = head;

  while (current) {
    if (current.val === prev.val) {
      prev.next = current.next;
    } else {
      prev = prev.next;
    }
    current = current.next;
  }
  return head;
}

console.log(removeDuplicates([1, 1, 2])); // [1, 2]
console.log(removeDuplicates([1, 1, 2, 3, 3])); // [1, 2, 3]
