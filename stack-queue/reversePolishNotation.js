/**
 * You are given an array of strings tokens that represents an arithmetic expression
 * in a Reverse Polish Notation.
 * Evaluate the expression. Return an integer that represents the value of the expression.
 * Note that:
 * The valid operators are '+', '-', '*', and '/'.
 * Each operand may be an integer or another expression.
 * The division between two integers always truncates toward zero.
 * There will not be any division by zero.
 * The input represents a valid arithmetic expression in a reverse polish notation.
 * The answer and all the intermediate calculations can be represented in a 32-bit integer.
 */

function evalRPN(tokens) {
  const stack = [];
  const operatorSet = new Set(['+', '-', '*', '/']);

  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  };

  for (let index = 0; index < tokens.length; index++) {
    const element = tokens[index];
    if (operatorSet.has(element)) {
      const secondOperand = stack.pop();
      const firstOperand = stack.pop();
      stack.push(operations[element](firstOperand, secondOperand));
    } else {
      stack.push(Number(element));
    }
  }
  return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"])); // -7
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["-78", "-33", "196", "+", "-19", "-", "115", "+", "-", "-99", "/", "-18", "8", "*", "-86", "-", "-", "16", "/", "26", "-14", "-", "-", "47", "-", "101", "-", "163", "*", "143", "-", "0", "-", "171", "+", "120", "*", "-60", "+", "156", "/", "173", "/", "-24", "11", "+", "21", "/", "*", "44", "*", "180", "70", "-40", "-", "*", "86", "132", "-84", "+", "*", "-", "38", "/", "/", "21", "28", "/", "+", "83", "/", "-31", "156", "-", "+", "28", "/", "95", "-", "120", "+", "8", "*", "90", "-", "-94", "*", "-73", "/", "-62", "/", "93", "*", "196", "-", "-59", "+", "187", "-", "143", "/", "-79", "-89", "+", "-"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22
