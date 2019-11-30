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
    /**
     * 为何起始的 index 是 -1 呢?
     * 因为 index 从 0 开始, max 的值是 i - start_index
     * 是 i 和 start_index 的相对距离 如果从 start_index 从 0 开始 第一个字符 的相对距离就是 0 而不是 1 了
     * */
    let start_index = -1, max = 0;
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        // 如果当前字符出现过，那么当前子串的起始位置为这个字符上一次出现的位置 + 1
        // 更简洁的说 就是上次重复的字符后一位 到这次出现的字符(包括的)长度
        if (location[character] > start_index) {
            start_index = location[character];
        }

        max = Math.max(max,i - start_index);

        location[character] = i;
    }
    return max;

};

import assert from "assert";
assert.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
assert.strictEqual(lengthOfLongestSubstring("bbbbb"), 1);
assert.strictEqual(lengthOfLongestSubstring("pwwkew"), 3);
