/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
* */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s: string) {
  const location: { [key: string]: number } = {};
  let start_index = -1,
    max = 0; // idx为当前子串的开始位置-1
  for (let i = 0; i < s.length; i++) {
    const character = s[i];

    // 如果当前字符出现过，那么当前子串的起始位置为这个字符上一次出现的位置 +1
    if (location[character] != null && location[character] > start_index) {
      start_index = location[character];
    }

    max = Math.max(i - start_index, max);

    location[character] = i;
  }

  return max;
};

/**
 * 滑动窗口
 * 滑动窗口是数组/字符串问题中常用的抽象概念。
 * 窗口通常是在数组/字符串中由开始和结束索引定义的一系列元素的集合，即 [i, j)（左闭，右开）。
 * 而滑动窗口是可以将两个边界向某一个方向“滑动”的窗口。例如，我们将 [i, j) 向右滑动 1 个元素，则它将变为 [i+1, j+1)（左闭，右开）。
 *
 * 回到我们的问题，我们使用 HashSet 将字符存储在当前窗口 [i, j)[i,j)（最初 j = i）中。
 * 然后我们向右侧滑动索引 j，如果它不在 HashSet 中，我们会继续滑动 j。直到 s[j] 已经存在于 HashSet 中。
 * 此时，我们找到的没有重复字符的最长子字符串将会以索引 i 开头。如果我们对所有的 i 这样做，就可以得到答案。
 * */
var lengthOfLongestSubstring1 = function (s: string) {
  const n = s.length;
  const set = new Set();
  let ans = 0,
    i = 0,
    j = 0;
  while (i < n && j < n) {
    // try to extend the range [i, j]
    if (!set.has(s[j])) {
      set.add(s[j++]);
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s[i++]);
    }
  }
  return ans;
};

/**
 1. 官方最优解 优化的 滑动窗口

 上述的方法最多需要执行 2n 个步骤。事实上，它可以被进一步优化为仅需要 n
 个步骤。我们可以定义字符到索引的映射，而不是使用集合来判断一个字符是否存在。
 当我们找到重复的字符时，我们可以立即跳过该窗口。

 也就是说，如果 s[j] 在 [i, j) 范围内有与 j' 重复的字符，我们不需要逐渐增加 i
 。 我们可以直接跳过 [i，j'] 范围内的所有元素，并将 i 变为 j' + 1。
 * */
var lengthOfLongestSubstring2 = function (s: string) {
  const n = s.length;
  let ans = 0;
  const map: { [key: string]: number } = {}; // current index of character
  // try to extend the range [i, j]
  for (let j = 0, i = 0; j < n; j++) {
    i = Math.max(map[s[j]] ?? 0, i);
    ans = Math.max(ans, j - i + 1);
    map[s[j]] = j + 1;
  }
  return ans;
};

import assert from "assert";
assert.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
assert.strictEqual(lengthOfLongestSubstring1("abcabcbb"), 3);
assert.strictEqual(lengthOfLongestSubstring2("abcabcbb"), 3);
