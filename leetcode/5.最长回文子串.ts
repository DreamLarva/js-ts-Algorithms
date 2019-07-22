/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
* */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s: string) {
    const str = [...s];
    let result: string[] = [];
    if (str.join("") === str.reverse().join("")) {
        return str.join("");
    }
    str.forEach((v, i, a) => {
        // 123321 格式
        if (v === a[i + 1]) {
            let temp = 1;
            while ((i - temp >= 0) && (i + 1 + temp <= a.length - 1) && (a[i + 1 + temp] === a[i - temp])) {
                temp++;
            }
            temp--;
            if (result.length <= 1 + 2 * temp) {
                result = a.slice(i - temp, i + 1 + temp + 1);
            }

        }
        // 123321 格式
        if (a[i + 1] === a[i - 1]) {
            let temp = 1;
            while ((i - temp >= 0) && (i + temp <= a.length - 1) && (a[i + temp] === a[i - temp])) {
                temp++;
            }
            temp--;
            if (result.length <= 1 + 2 * temp) {
                result = a.slice(i - temp, i + temp + 1);
            }
        }
    });
    return result.join("") || str[0];
};

import assert from "assert"
assert.strictEqual(longestPalindrome("cbbd"),"bb");
