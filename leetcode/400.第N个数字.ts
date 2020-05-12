/*
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:

输入:
3

输出:
3
示例 2:

输入:
11

输出:
0

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
* */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n: number) {
  if (n < 10) return n;
  /**
   * 0 - 9 共 9 个数
   * 10 - 99 共 90 个数
   * 100 - 999 共 900 个数
   * 以此类推 可以得到 数字 在哪个区段
   * 直列抹平 之前位数的干扰 (如果 n 为4 位数 现在 n - 900 就知道 是从 1000 开始的第几个数)
   * */
  n--; // 因为现在包括0 而原先不包括
  let digit = 1;
  while (9 * 10 ** (digit - 1) * digit <= n) {
    n -= 9 * 10 ** (digit - 1) * digit;
    digit++;
  }

  const first = 10 ** (digit - 1);

  // first为n所属组的第一个数，
  // n / digits当前组的第几个数 (比如4位数 那么每4个数 实际数值 + 1)
  // n % digits为这个数的第几位
  return Number(String(first + Math.trunc(n / digit))[n % digit]);
};

import assert from "assert";

assert.strictEqual(findNthDigit(9), 9);
assert.strictEqual(findNthDigit(10), 1);
assert.strictEqual(findNthDigit(11), 0);
assert.strictEqual(findNthDigit(190), 1);
assert.strictEqual(findNthDigit(192), 0);
