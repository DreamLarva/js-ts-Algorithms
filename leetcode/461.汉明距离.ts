/*
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
* */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x: number, y: number): number {
  /**
   * 直接 ^ 运算 再得到所有的1 就好了
   * */
  let after_exclusive_or = x ^ y;
  let result = 0;
  while (after_exclusive_or) {
    if (after_exclusive_or & 1) result++;
    after_exclusive_or >>= 1;
  }
  return result;
};
/*
var hammingDistance = function (x: number, y: number): number {
    if (x > y) return hammingDistance(y, x);
    let result = 0;
    while (y) {
        if ((y & 1) !== (x & 1)) result++;
        x >>= 1;
        y >>= 1;

    }
    return result;
};
*/

import assert from "assert";

assert.strictEqual(hammingDistance(1, 4), 2);
