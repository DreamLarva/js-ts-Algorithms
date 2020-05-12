/*
给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。
* */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n: number) {
  /**
   * 就是求 阶乘中 5 的数量(2 的数量一定够的)
   * */
  let result = 0;
  let i = 1;
  while (Math.pow(5, i) <= n) {
    /**
     * 5 的个数
     * 25 的个数 (应该 + 2 但是 5 的个数 已经算过一次了 所以还是 + 1)
     * 125 的个数 (应该 + 2 但是 5 和 25 都算过一次 所以 还是 + 1)
     * */
    result += ~~(n / Math.pow(5, i));
    i++;
  }
  return result;
};

import assert from "assert";

assert.strictEqual(trailingZeroes(5), 1);
