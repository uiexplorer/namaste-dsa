/**
 * Given the head of a singly linked list,
 * group all the nodes with odd indices together
 * followed by the nodes with even indices,
 * and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 */

function oddEvenList(head) {
  if (head && head.next) {
    let oddPointer = head;
    let evenPointer = head.next;
    const evenStart = head.next;
    while (oddPointer.next && evenPointer.next) {
      oddPointer.next = oddPointer.next.next;
      evenPointer.next = evenPointer.next.next;
      oddPointer = oddPointer.next;
      evenPointer = evenPointer.next;
    }
    oddPointer.next = evenStart;
  }
  return head;
}

console.log(oddEvenList([1, 2, 3, 4, 5])); // [1,3,5,2,4]
console.log(oddEvenList([2, 1, 3, 5, 6, 4, 7])); // [2,3,6,7,1,5,4]
