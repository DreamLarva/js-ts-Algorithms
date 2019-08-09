/*
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

import {createDoubleLinkedList} from "../util/DoubleLinkedList";

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n: number) {

    const result: string[] = [];
    backtrack("", 0, n * 2);
    return result;

    /**
     * 回溯法
     * */
    function backtrack(str: string, depth: number, n: number) {
        // console.log(str)
        if (n === depth) {
            return result.push(str + ")".repeat(n));
        }

        if (depth + 1 <= n) {
            backtrack(str + "(", depth + 1, n - 1);
        }

        for (let i = 1; i <= depth; i++) {
            // 只添加 )( 而不是 ) 是因为
            // 如果使用 ) 会出现 之后全是 ) 的情况 就是 重复的操作(和最上面 n === depth 的分支 重复)

            backtrack(str + ")".repeat(i) + "(", depth - i + 1, n - i - 1);
        }
    }
};


/**
 * 官方 更优雅的解法
 * */
var generateParenthesis_1 = function (n: number) {
    let res: string[] = [];

    function h(ps: string, left: number, right: number) {
        if (left == n && right == n) {
            res.push(ps);
            return;
        }
        // 优先建立 (
        if (left < n) {
            h(ps + '(', left + 1, right);
        }
        // 再是 ), 又保证了 ( 比 ) 多 才 用) 保证了 () 的合法性 妙啊
        if (left > right) {
            h(ps + ')', left, right + 1);
        }
    }

    h('', 0, 0);
    return res;
};


import assert from "assert";


assert.deepStrictEqual(generateParenthesis(3).sort(), [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
]);
assert.deepStrictEqual(
    generateParenthesis(4).sort(),
    ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"].sort(),
);
assert.deepStrictEqual(generateParenthesis_1(3).sort(), [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
]);
assert.deepStrictEqual(
    generateParenthesis_1(4).sort(),
    ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"].sort(),
);

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;

suite
    .add("mine", function () {
        generateParenthesis(7);
    })
    .add("other", function () {
        generateParenthesis_1(7);
    })

    // add listeners
    .on("cycle", function (event: any) {
        console.log(String(event.target));
    })
    .on("complete", function (this: any) {
        console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    // run async
    .run({async: false});

/**
 * 差不多 我擦
 * */
