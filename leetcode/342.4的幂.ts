/*
给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。

示例 1:

输入: 16
输出: true
示例 2:

输入: 5
输出: false
进阶：
你能不使用循环或者递归来完成本题吗？
* */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num: number) {
  /**
   * 如果不使用 循环或者 递归就要餐要 题231.2的幂
   * */
  // 判断是不是 2 的幂
  if (num < 0 || num & (num - 1)) return false;
  // 如果是 4 的幂 二进制时 1 是不是在 偶数位上
  // 与所有 偶数位 都是 1 奇数 都是0 做位与  得到不是0 就是 4的幂
  // 0x55555555 16 进制
  // 相当于
  // 0b(10)*16
  return (num & 0x55555555) !== 0;
};

import assert from "assert";
assert.strictEqual(isPowerOfFour(16), true);
assert.strictEqual(isPowerOfFour(15), false);
