/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * 
 * Implement the MinStack class:
 * MinStack() initializes the stack object.
 * void push(int value) pushes the element value onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * 
 * You must implement a solution with O(1) time complexity for each function.
 */

var MinStack = function () {
  this.stack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  if (this.stack.length === 0) {
    this.stack.push([value, value]);
  } else {
    let minValue = Math.min(value, this.getMin());
    this.stack.push([value, minValue]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(2147483646);
minStack.push(2147483646);
minStack.push(2147483647);
minStack.top();
minStack.pop();
console.log(minStack.getMin()); // 2147483646
minStack.pop();
console.log(minStack.getMin()); // 2147483646
minStack.pop();
minStack.push(2147483647);
minStack.top();
console.log(minStack.getMin()); // 2147483647
minStack.push(-2147483648);
minStack.top();
console.log(minStack.getMin()); // -2147483648
minStack.pop();
console.log(minStack.getMin()); // 2147483647