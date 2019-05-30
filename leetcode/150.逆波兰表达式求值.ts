/*
根据逆波兰表示法，求表达式的值。
https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437


有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：

整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
示例 1：

输入: ["2", "1", "+", "3", "*"]
输出: 9
解释: ((2 + 1) * 3) = 9
示例 2：

输入: ["4", "13", "5", "/", "+"]
输出: 6
解释: (4 + (13 / 5)) = 6
示例 3：

输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
输出: 22
解释:
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
* */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens: string[]) {
    if (tokens.length === 1) return Number(tokens[0]);
    // 所有的数学运算符
    const operator = ["+", "-", "*", "/"];
    const stack: string[] = [];
    for (let i = 0; i < tokens.length; i++) {
        // 拿到的是 运算符 进行运算
        if (operator.includes(tokens[i])) {
            // 出两个 栈顶 出两个进行运算
            const b = stack.pop();
            const a = stack.pop();
            let after_operate: number;
            if (tokens[i] === "+") {
                after_operate = Number(a) + Number(b);
            } else if (tokens[i] === "-") {
                after_operate = Number(a) - Number(b);
            } else if (tokens[i] === "*") {
                after_operate = Number(a) * Number(b);
            } else {
                after_operate = Math.trunc(Number(a) / Number(b));
            }
            if (i === tokens.length - 1) return after_operate;
            stack.push(String(after_operate));

        }
        // 拿到的是 数字 入栈
        else {
            stack.push(tokens[i]);
        }
    }

};

import assert from "assert";

assert.strictEqual(
    evalRPN(["2", "1", "+", "3", "*"]),
    9,
);
assert.strictEqual(
    evalRPN(["4", "13", "5", "/", "+"]),
    6,
);
assert.strictEqual(
    evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]),
    22,
);
assert.strictEqual(
    evalRPN(["10"]),
    10,
);
