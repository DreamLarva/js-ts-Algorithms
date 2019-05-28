/*
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
* */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n: number) {
    // 广度优先
    /**
     * 认为 这个数字 是一个图
     * 求最短路径
     * */
    const list: [number, number][] = [];
    const visited: Set<number> = new Set();

    list.push([n, 0]);
    visited.add(n);
    while (list.length) {
        const [num, step] = list.shift()!;
        // 下一个连接的 节点是 当前节点 减去 i*i
        for (let i = 0; num - i * i >= 0; i++) {
            const a = num - i * i;
            if (a === 0) return step + 1;
            if (a < 0) break;
            if (!visited.has(a)) {
                list.push([a, step + 1]);
                visited.add(a);
            }
        }
    }
};


import assert from "assert";

assert.strictEqual(
    numSquares(12),
    3,
);
assert.strictEqual(
    numSquares(13),
    2,
);
