/**
 * Given the heads of two singly linked-lists headA and headB,
 * return the node at which the two lists intersect.
 * If the two linked lists have no intersection at all, return null.
 */

function getIntersectionNode(headA, headB) {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
}

console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5])); // 8
console.log(getIntersectionNode([1, 9, 1, 2, 4], [3, 2, 4])); // 2
console.log(getIntersectionNode([2, 6, 4], [1, 5])); // null
