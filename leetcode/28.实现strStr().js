/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (37.79%)
 * Total Accepted:    38.5K
 * Total Submissions: 101.7K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 *
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 *
 * 说明:
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return kmp(haystack, needle);
};

/**
 * @description
 *      0   当前字符 再从子串 0位置开始匹配
 *      -1  下一个字符 再从子串 0位置开始匹配
 *      n   当前字符  再从子串 n 位置开始匹配
 * @example
 *      ada         =>      [ -1, 0, ,-1 ]
 *      abcabc      =>      [ -1, 0, 0, -1, 0, 0 ]
 *      abad        =>      [ -1, 0, -1, 1 ]
 * */
function getNext(ps) {
    const next = Array(ps.length).fill(0);
    next[0] = -1;
    let j = 0;
    let k = -1;
    while (j < ps.length - 1) {
        if (k === -1 || ps[j] === ps[k]) {
            if (ps[++j] === ps[++k]) {
                // 当两个字符相等时要跳过
                next[j] = next[k];
            } else {
                next[j] = k;
            }
        } else {
            k = next[k];
        }
    }

    return next;
}

function kmp(ts, ps) {
    let i = 0;
    let j = 0;
    const next = getNext(ps);
    while (i < ts.length && j < ps.length) {
        if (j === -1 || ts[i] === ps[j]) {
            // 当j = -1 这个当前 i的字符 不可能再匹配 下一个i准备和 ps[0] 匹配
            i++;
            j++;
        } else {
            j = next[j]; // j回到指定位置
            // 如果是 0 就是 当前的i 再与 ps[j]
        }
    }

    if (j === ps.length) {
        return i - j;
    } else {
        return -1;
    }
}

const benchmark = require('benchmark');
const suite = new benchmark.Suite;
const  ts = "asdasdsadasasdasdsadavasd",
    ps = "asdasdasdsa";
suite
    .add('indexOf', function () {
       ts.indexOf(ps)
    })
    .add('KMP', function () {
        kmp(ts ,ps)
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({'async': false});
