/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again
 * by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
 * Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

function hasCycle(head) {
  const nextElementSet = new Set();
  let currentNode = head;
  while (currentNode) {
    if (nextElementSet.has(currentNode)) {
      return true;
    }
    nextElementSet.add(currentNode);
    currentNode = currentNode.next;
  }
  return false;
}

console.log(hasCycle([[3, 2, 0, -4]])); // true
console.log(hasCycle([1, 2])); // true
console.log(hasCycle([1])); // false
