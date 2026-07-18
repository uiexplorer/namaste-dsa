/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

function mergeTwoLists(list1, list2) {
  let sentinel = new ListNode(-Infinity, null);
  let result = sentinel;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      sentinel.next = new ListNode(list1.val, null);
      list1 = list1.next;
    } else {
      sentinel.next = new ListNode(list2.val, null);
      list2 = list2.next;
    }
    sentinel = sentinel.next;
  }

  if (!list1) {
    sentinel.next = list2;
  }
  if (!list2) {
    sentinel.next = list1;
  }

  return result.next;
}


console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); // []
console.log(mergeTwoLists([], [0])); // [0]