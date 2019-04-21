/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.37%)
 * Total Accepted:    46.1K
 * Total Submissions: 126.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */

const leftPart = ["(", "[", "{"];
const rightPart = [")", "]", "}"];
var isValid = function(s) {
    // 使用栈
    const stack = [];

    for(const char of s){
        // 如果是有右侧
        if(rightPart.includes(char)){
            // 检查stack 顶 是不是 和现在这个是一组的
            if(isPair(last(stack), char)){
                // 是一组就弹出一个左侧的
                stack.pop();
            }
            // 否则是嵌套错误
            else
                return false;

        }
        // 如果是左侧就 push 进stack
        else{
            stack.push(char)
        }
    }

    // 循环完毕 没有任何内容的就算正确
    return stack.length === 0

};

function last(arr){
    return arr[arr.length - 1];
}

function isPair(left,right){
    return leftPart.indexOf(left) === rightPart.indexOf(right);
}

const assert = require("assert");
assert.strictEqual(isValid("()"),true)
assert.strictEqual(isValid("(){}()[]"),true)
assert.strictEqual(isValid("(){}({(())})[]"),true)
assert.strictEqual(isValid("((){}({(())})[])"),true)
assert.strictEqual(isValid("((){}({(())})[])("),false)
