/**
 * Given the head of a linked list and an integer val,
 * remove all the nodes of the linked list that has Node.val == val,
 * and return the new head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function removeElements(head, val) {
  const sentinel = new ListNode(null, head);
  let curr = sentinel
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return sentinel.next;
}

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6)); // [1,2,6,3,4,5]
console.log(removeElements([], 1)); // []
console.log(removeElements([7, 7, 7, 7], 1)); // []
