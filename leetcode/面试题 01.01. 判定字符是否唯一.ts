/*
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false
示例 2：

输入: s = "abc"
输出: true
限制：

0 <= len(s) <= 100
如果你不使用额外的数据结构，会很加分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-unique-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr: string) {
  /**
   * 不用额外的数据结构
   * 前提必须是 只有英文小写26个字母
   * 那就是要用 数字格式来存数据 有两种办法
   * 1.用位运算 32位 存26个字母
   * 2.用质数相乘,只要能整除 就是已经乘过这个数了 (似乎不好用如果26个字母都有相乘得到的数字太大超过了 Number.MAX_SAFE_INTEGER)
   * */
  let cache = 0;
  for (let i = 0; i < astr.length; i++) {
    const code = astr.charCodeAt(i);
    let newCache = cache ^ (1 << (code - 97));
    if (newCache < cache) return false;
    cache = newCache;
  }
  return true;
};

/**
 * 这么写却更快一点
 * */
var isUnique1 = function (astr: string) {
  return new Set([...astr]).size === astr.length;
};

import assert from "assert";
assert.strictEqual(isUnique("leetcode"), false);
assert.strictEqual(isUnique("abc"), true);
