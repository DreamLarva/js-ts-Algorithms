/*
给定一种 pattern(模式) 和一个字符串 str ，判断 str 是否遵循相同的模式。

这里的遵循指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应模式。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例 4:

输入: pattern = "abba", str = "dog dog dog dog"
输出: false
说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。
* */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern: string, str: string) {

    const str_arr = str.split(" ");
    if (str_arr.length !== pattern.length) return false;
    const pattern_arr = pattern.split("");
    // 用于映射 patter 和 str
    const map: { [key: string]: string } = {};
    // 用于 判断 有了映射了
    const set = new Set();

    for (let i = 0; i < pattern_arr.length; i++) {
        const current_char = pattern[i];
        if (map[current_char]) {
            if (map[current_char] !== str_arr[i]) return false;
        } else {
            if (set.has(str_arr[i])) return false; // 重复映射
            map[current_char] = str_arr[i];
            set.add(str_arr[i]);
        }


    }

    return true;
};

import assert from "assert";

assert.strictEqual(wordPattern("abba", "dog cat cat dog"), true);
assert.strictEqual(wordPattern("abba", "dog cat cat dop"), false);
