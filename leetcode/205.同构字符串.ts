/*
给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:

输入: s = "egg", t = "add"
输出: true
示例 2:

输入: s = "foo", t = "bar"
输出: false
示例 3:

输入: s = "paper", t = "title"
输出: true
说明:
你可以假设 s 和 t 具有相同的长度。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s: string, t: string) {
  type map = {
    [label: string]: string;
  };
  const map: map = {}; // 存放 s 映射 t 的值
  const t_set = new Set(); // 存放 已经映射了的 t字符
  const s_arr = Array.from(s);
  for (let i = 0; i < s_arr.length; i++) {
    const s_value = s_arr[i];
    const t_value = t[i];
    if (!map[s_value]) {
      // 有两个不同的 s 字符 映射 相同的 t字符
      if (t_set.has(t_value)) return false;
      map[s_value] = t_value;
      t_set.add(t_value);
      continue;
    }

    // 同位置的 s,t字符 映射 不同
    if (map[s_value] !== t_value) return false;
  }
  return true;
};
const assert = require("assert");
assert.strictEqual(isIsomorphic("egg", "add"), true);
assert.strictEqual(isIsomorphic("ab", "aa"), false);
assert.strictEqual(
  isIsomorphic(
    "qwertyuiop[]asdfghjkl;'\\zxcvbnm,./",
    "',.pyfgcrl/=aoeuidhtns-\\;qjkxbmwvz"
  ),
  true
);
