/*
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
* */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const after_filter = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    return after_filter === after_filter.split("").reverse().join("");
};

/**
 * 不需要完全 判断翻转后的字符串完全 等于 原来的
 * 只需要 在字符串上判断 相对于中间 相等就行了 省去了 split reverse join的时间
 * */
var isPalindrome1 = function (s) {
    const after_filter = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    let i = 0;
    const len = after_filter.length;
    while (i < ~~(len / 2)) {
        if(after_filter[i] !== after_filter[len - 1 - i])return false;
        i++;
    }


    return true
};
