/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 */

/**
 * This is a simple solution to implement but the problem here is that we need O(n) as time complexity.
 * But, we also need O(n) as space complexity to store the linked list in an array.
 */
function isPalindromeByArray(head) {
  const arr = [];
  while (head) {
    arr.push(head.value);
    head = head.next;
  }
  const middle = Math.floor(arr.length / 2);
  for (let index = 0; index <= middle; index++) {
    const element = arr[index];
    if (element !== arr[arr.length - index - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindromeByArray([1, 2, 2, 1])); // true
console.log(isPalindromeByArray([1, 2])); // false

function isPalindrome(head) {
  // 1. Find middle of linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const middle = slow;
  // 2. Reverse linked list from middle till end
  let prev = null;
  let curr = middle;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = temp;
  }
  // 3. Compare reversed second half of the linked list with first half
  let firstList = head;
  let secondList = prev;
  while (secondList) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
}

console.log(isPalindrome([1, 2, 2, 1])); // true
console.log(isPalindrome([1, 2])); // false
