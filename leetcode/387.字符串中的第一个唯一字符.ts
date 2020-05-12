/*
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.


注意事项：您可以假定该字符串只包含小写字母。
* */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s: string) {
  // 记录次数
  const map: { [key: string]: number } = {};

  for (const char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
};
import assert from "assert";

assert.strictEqual(firstUniqChar("leetcode"), 0);
assert.strictEqual(firstUniqChar("loveleetcode"), 2);
