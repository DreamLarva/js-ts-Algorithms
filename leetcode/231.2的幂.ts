/*
给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
示例 1:

输入: 1
输出: true
解释: 2 ** 0 = 1
示例 2:

输入: 16
输出: true
解释: 2 ** 4 = 16
示例 3:

输入: 218
输出: false
* */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n: number) {};

function solution1(n: number) {
  /**
   * js 所以数字 都是32位有符号类型
   * 正数 左起第一为 0
   * 负数 左起第一为 1
   * 负数的表示方式为 正数的补码 + 1
   * 5 => 0...0101
   * -5 => 取补码 1...1010  => 加1 1...1011
   *
   * 如果是 2 的n次幂 那么 补码 那么负数一定是符合正则 11{31 - n}0{n}
   * 与原值 00{31 -1 - n}10{n} 做 位与 操作 那么 刚好 与原值相等
   * */
  return n > 0 && (n & -n) === n;
}

function solution2(n: number) {
  // 由于 2的n次幂 -1操作后 最高位一定会退位 和 自己做 位与 操作刚好错开 值为0
  return n > 0 && (n & (n - 1)) === 0;
}

function solution3(n: number) {
  // 直接获取 最大 2的n次幂 来做取余操作
  return n > 0 && (1 << 30) % n === 0;
}

export {};
