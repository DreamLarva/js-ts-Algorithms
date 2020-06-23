/*
给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:

输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s: string) {
  /**
   * 根据题意
   * 出现偶数次的 直接加入长度
   * 出现奇数次 则 - 1 加到 长度
   * 如果有 奇数次的 则 再 + 1
   * */
  const map: { [key: string]: number } = {};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  let hasOddCount = false;
  Object.values(map).forEach((num) => {
    // 偶数
    if ((num & 1) === 0) {
      result += num;
    }
    // 奇数
    else {
      result += num - 1;
      hasOddCount = true;
    }
  });

  return hasOddCount ? result + 1 : result;
};

import assert from "assert";

assert.strictEqual(longestPalindrome("abccccdd"), 7);
