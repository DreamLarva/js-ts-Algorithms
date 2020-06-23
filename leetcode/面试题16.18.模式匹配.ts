/*
面试题 16.18. 模式匹配
你有两个字符串，即pattern和value。 pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），该字符串也匹配像"a"、"ab"和"b"这样的模式。但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。

示例 1：

输入： pattern = "abba", value = "dogcatcatdog"
输出： true
示例 2：

输入： pattern = "abba", value = "dogcatcatfish"
输出： false
示例 3：

输入： pattern = "aaaa", value = "dogcatcatdog"
输出： false
示例 4：

输入： pattern = "abba", value = "dogdogdogdog"
输出： true
解释： "a"="dogdog",b=""，反之也符合规则
提示：

0 <= len(pattern) <= 1000
0 <= len(value) <= 1000
你可以假设pattern只包含字母"a"和"b"，value仅包含小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pattern-matching-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

function patternMatching(pattern: string, value: string): boolean {
  if (pattern.length <= 1) return true;
  if (value === "") return false;
  const first = pattern[0];
  const other = first === "a" ? "b" : "a";

  const reg = pattern
    .replace(first, "(\\w*)")
    .replace(other, "(\\w*)")
    .replace(new RegExp(first, "g"), "\\1")
    .replace(new RegExp(other, "g"), "\\2");

  return new RegExp("^" + reg + "$").test(value);
}

import assert from "assert";
assert.strictEqual(patternMatching("abba", "dogcatcatdog"), true);
assert.strictEqual(patternMatching("abba", "dogcatcatfish"), false);
assert.strictEqual(patternMatching("aaaa", "dogcatcatdog"), false);
assert.strictEqual(patternMatching("abba", "dogdogdogdog"), true);
assert.strictEqual(patternMatching("ab", ""), false);
assert.strictEqual(patternMatching("", ""), true);
assert.strictEqual(patternMatching("a", ""), true);
assert.strictEqual(patternMatching("bbbaa", "xxxxxxy"), false);
