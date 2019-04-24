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
var lengthOfLongestSubstring = function (s) {
    var locs = [];
    var idx = -1, max = 0;//idx为当前子串的开始位置-1
    for (var i = 0; i < s.length; i++) {
        //如果当前字符出现过，那么当前子串的起始位置为这个字符上一次出现的位置+1
        if (locs[s[i]] > idx) {
            idx = locs[s[i]];
        }

        if (i - idx > max) {
            max = i - idx;
        }

        locs[s[i]] = i;
    }
    return max;

};

const assert = require("assert");
assert.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
