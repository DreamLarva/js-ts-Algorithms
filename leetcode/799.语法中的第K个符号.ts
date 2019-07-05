/*
在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。

给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）


例子:

输入: N = 1, K = 1
输出: 0

输入: N = 2, K = 1
输出: 0

输入: N = 2, K = 2
输出: 1

输入: N = 4, K = 5
输出: 1

解释:
第一行: 0
第二行: 01
第三行: 0110
第四行: 01101001

注意：

N 的范围 [1, 30].
K 的范围 [1, 2^(N-1)].
* */
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N: number, K: number): number {
    // N 行 K 个 取决于 第 N - 1 行 Math.floor((K + 1)/ 2) 的值
    if (N === 1) return 0;
    const last = kthGrammar(N - 1, Math.floor((K + 1) / 2));
    if (last === 0) {
        return K % 2 === 1 ? 0 : 1;
    } else {
        return K % 2 === 1 ? 1 : 0;
    }
};

import assert from "assert";


assert.strictEqual(
    kthGrammar(1, 1),
    0,
);

assert.strictEqual(
    kthGrammar(2, 1),
    0,
);
assert.strictEqual(
    kthGrammar(2, 2),
    1,
);


assert.strictEqual(
    kthGrammar(4, 5),
    1,
);


export {};
