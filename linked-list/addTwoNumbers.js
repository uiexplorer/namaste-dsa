/**
 * You are given two non-empty linked lists
 * representing two non-negative integers.
 * The digits are stored in reverse order,
 * and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

function addTwoNumber(l1, l2) {
  let result = new ListNode(-Infinity, null);
  const resultCopy = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = l1.val + l2.val + carry;
    carry = 0;
    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    }

    result.next = new ListNode(sum, null);
    result = result.next;

    l1 = l1.next;
    l2 = l2.next;

    if (carry && l1 === null && l2 === null) {
      l1 = new ListNode(0, null);
      l2 = new ListNode(0, null);
    } else if (l1 === null && (l2 !== null || carry)) {
      l1 = new ListNode(0, null);
    } else if (l2 === null && (l1 !== null || carry)) {
      l2 = new ListNode(0, null);
    }
  }

  return resultCopy.next;
}

console.log(addTwoNumber([3, 4, 9], [4, 8, 1, 9])); // [7, 2, 1, 0, 1]
// console.log(addTwoNumber([2, 4, 3], [5, 6, 4])); // [7,0,8]
// console.log(addTwoNumber([0], [0])); // [0]
// console.log(addTwoNumber([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); // [8,9,9,9,0,0,0,1]
