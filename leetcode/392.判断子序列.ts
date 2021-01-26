/*
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:
s = "abc", t = "ahbgdc"

返回 true.

示例 2:
s = "axc", t = "ahbgdc"

返回 false.

后续挑战 :

如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} s 子序列
 * @param {string} t 检查的序列
 * @return {boolean}
 */
var isSubsequence1 = function (s: string, t: string) {
  /**
   * 双指针
   * */
  let s_index = 0;
  let t_index = 0;
  while (s_index < s.length && t_index < t.length) {
    if (t[t_index] === s[s_index]) {
      s_index++;
    }
    t_index++;
  }

  return s_index === s.length;
};

var isSubsequence2 = function (s: string, t: string) {
  /**
   * 直接整个 正则
   * */
  return new RegExp(s.split("").join(".*")).test(t);
};

import assert from "assert";

assert.strictEqual(isSubsequence1("abc", "ahbgdc"), true);
assert.strictEqual(isSubsequence1("axc", "ahbgdc"), false);

assert.strictEqual(isSubsequence2("abc", "ahbgdc"), true);
assert.strictEqual(isSubsequence2("axc", "ahbgdc"), false);
