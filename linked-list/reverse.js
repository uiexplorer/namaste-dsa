/**
 * Given the head of a singly linked list, reverse the list,
 * and return the reversed list.
 */

function reverse(head) {
  let previousNode = null;
  let currentNode = head;
  while (currentNode) {
    const temp = currentNode.next;
    currentNode.next = previousNode;

    previousNode = currentNode;
    currentNode = temp;
  }
  head = previousNode;
  return head;
}

console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1];
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1];
console.log(reverse([1])); // [1]
