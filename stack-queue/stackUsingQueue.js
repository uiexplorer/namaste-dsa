/**
 * Implement a last-in-first-out (LIFO) stack using only two queues.
 * The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
 * 
 * Implement the MyStack class:
 * 
 * void push(int x) Pushes element x to the top of the stack.
 * int pop() Removes the element on the top of the stack and returns it.
 * int top() Returns the element on the top of the stack.
 * boolean empty() Returns true if the stack is empty, false otherwise.
 */


var MyStack = function () {
  this.q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let index = 0; index < this.q1.length - 1; index++) {
    this.q1.push(this.q1.shift());
  }
  return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let topElement;
  for (let i = 0; i < this.q1.length; i++) {
    topElement = this.q1.shift();
    this.q1.push(topElement);
  }

  return topElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
