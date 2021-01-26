/*
对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。


示例 1：

输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
示例 2：

输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
示例 3：

输入：str1 = "LEET", str2 = "CODE"
输出：""


提示：
    1. 1 <= str1.length <= 1000
    2. 1 <= str2.length <= 1000
    3. str1[i] 和 str2[i] 为大写英文字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1: string, str2: string) {
  /**
   * 既然是找最大公约数
   * 那么就是用 辗转相除法 或者叫 欧几里得算法
   * */
  /**
   * 先判断是不是 有公约数
   * */
  if (str1 + str2 !== str2 + str1) return ""; // 这个是 充要条件
  // 辗转相除法
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  return str1.substr(0, gcd(str1.length, str2.length));
};

import assert from "assert";

assert.strictEqual(gcdOfStrings("ABCABC", "ABC"), "ABC");

assert.strictEqual(gcdOfStrings("ABABAB", "ABAB"), "AB");
assert.strictEqual(gcdOfStrings("LEET", "CODE"), "");
