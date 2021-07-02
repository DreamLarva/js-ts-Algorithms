"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
 * 实现 strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
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
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
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
 * 前缀表
 * @description
 * 0  当前字符 再从子串 0位置开始匹配
 *
 * -1 下一个字符 再从子串 0位置开始匹配
 *
 * n  当前字符  再从子串 n位置开始匹配
 *

 * @example
 *      ada         =>      [ -1, 0, -1 ]
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
            }
            else {
                next[j] = k;
            }
        }
        else {
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
        }
        else {
            j = next[j]; // j回到指定位置
            // 如果是 0 就是 当前的i 再与 ps[j]
        }
    }
    if (j === ps.length) {
        return i - j;
    }
    else {
        return -1;
    }
}
var strStr2 = function (haystack, needle) {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }
    /**
     * 生成前缀表
     * */
    const pi = new Array(m).fill(0);
    /**
     * i 为总 指针
     * j 为每次前缀 校对的指针
     *
     * i 指针不断向后 , 与  [0,j) 到 j 的字符串 与
     * */
    for (let i = 1, j = 0; i < m; i++) {
        // 一直找到一个 相同的字符 作为一次前缀匹配的开始
        while (j > 0 && needle[i] !== needle[j]) {
            j = pi[j - 1];
        }
        // 如果相等则 说明符合前缀
        if (needle[i] == needle[j]) {
            j++;
        }
        // pi 记录如果 i + 1 位置不匹配的话 就应该重新从 pi[i - 1] 位置重新校对
        pi[i] = j;
    }
    console.log(pi);
    for (let i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = pi[j - 1];
        }
        if (haystack[i] == needle[j]) {
            j++;
        }
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
};
// assert.strictEqual(strStr("hello", "ll"), 2);
// assert.strictEqual(strStr2("hello", "ll"), 2);
strStr2("abacabababaa", "ababbabab");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgu5a6e546wc3RyU3RyKCkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzI4LuWunueOsHN0clN0cigpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUNIOzs7O0dBSUc7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLFFBQWdCLEVBQUUsTUFBYztJQUNyRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7Ozs7O0tBY0s7QUFDTCxTQUFTLE9BQU8sQ0FBQyxFQUFVO0lBQ3pCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ1gsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixjQUFjO2dCQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLENBQUMsR0FBRyxJQUFJLENBQUMs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LFdBQVcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9MjggbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzI4XSDlrp7njrBzdHJTdHIoKVxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ltcGxlbWVudC1zdHJzdHIvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoMzcuNzklKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDM4LjVLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogMTAxLjdLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1wiaGVsbG9cIlxcblwibGxcIidcbiAqXG4gKiDlrp7njrAgc3RyU3RyKCkg5Ye95pWw44CCXG4gKlxuICog57uZ5a6a5LiA5LiqIGhheXN0YWNrIOWtl+espuS4suWSjOS4gOS4qiBuZWVkbGUg5a2X56ym5Liy77yM5ZyoIGhheXN0YWNrIOWtl+espuS4suS4reaJvuWHuiBuZWVkbGUg5a2X56ym5Liy5Ye6546w55qE56ys5LiA5Liq5L2N572uXG4gKiAo5LuOMOW8gOWniynjgILlpoLmnpzkuI3lrZjlnKjvvIzliJnov5Tlm54gIC0x44CCXG4gKlxuICog56S65L6LIDE6XG4gKlxuICog6L6T5YWlOiBoYXlzdGFjayA9IFwiaGVsbG9cIiwgbmVlZGxlID0gXCJsbFwiXG4gKiDovpPlh7o6IDJcbiAqXG4gKlxuICog56S65L6LIDI6XG4gKlxuICog6L6T5YWlOiBoYXlzdGFjayA9IFwiYWFhYWFcIiwgbmVlZGxlID0gXCJiYmFcIlxuICog6L6T5Ye6OiAtMVxuICpcbiAqXG4gKiDor7TmmI46XG4gKlxuICog5b2TIG5lZWRsZSDmmK/nqbrlrZfnrKbkuLLml7bvvIzmiJHku6zlupTlvZPov5Tlm57ku4DkuYjlgLzlkaLvvJ/ov5nmmK/kuIDkuKrlnKjpnaLor5XkuK3lvojlpb3nmoTpl67popjjgIJcbiAqXG4gKiDlr7nkuo7mnKzpopjogIzoqIDvvIzlvZMgbmVlZGxlIOaYr+epuuWtl+espuS4suaXtuaIkeS7rOW6lOW9k+i/lOWbniAwIOOAgui/meS4jkPor63oqIDnmoQgc3Ryc3RyKCkg5Lul5Y+KIEphdmHnmoQgaW5kZXhPZigpIOWumuS5ieebuOespuOAglxuICpcbiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaGF5c3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZWVkbGVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHN0clN0ciA9IGZ1bmN0aW9uIChoYXlzdGFjazogc3RyaW5nLCBuZWVkbGU6IHN0cmluZykge1xuICByZXR1cm4ga21wKGhheXN0YWNrLCBuZWVkbGUpO1xufTtcblxuLyoqXG4gKiDliY3nvIDooahcbiAqIEBkZXNjcmlwdGlvblxuICogMCAg5b2T5YmN5a2X56ymIOWGjeS7juWtkOS4siAw5L2N572u5byA5aeL5Yy56YWNXG4gKlxuICogLTEg5LiL5LiA5Liq5a2X56ymIOWGjeS7juWtkOS4siAw5L2N572u5byA5aeL5Yy56YWNXG4gKlxuICogbiAg5b2T5YmN5a2X56ymICDlho3ku47lrZDkuLIgbuS9jee9ruW8gOWni+WMuemFjVxuICpcblxuICogQGV4YW1wbGVcbiAqICAgICAgYWRhICAgICAgICAgPT4gICAgICBbIC0xLCAwLCAtMSBdXG4gKiAgICAgIGFiY2FiYyAgICAgID0+ICAgICAgWyAtMSwgMCwgMCwgLTEsIDAsIDAgXVxuICogICAgICBhYmFkICAgICAgICA9PiAgICAgIFsgLTEsIDAsIC0xLCAxIF1cbiAqICovXG5mdW5jdGlvbiBnZXROZXh0KHBzOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gIGNvbnN0IG5leHQgPSBBcnJheShwcy5sZW5ndGgpLmZpbGwoMCk7XG4gIG5leHRbMF0gPSAtMTtcbiAgbGV0IGogPSAwO1xuICBsZXQgayA9IC0xO1xuICB3aGlsZSAoaiA8IHBzLmxlbmd0aCAtIDEpIHtcbiAgICBpZiAoayA9PT0gLTEgfHwgcHNbal0gPT09IHBzW2tdKSB7XG4gICAgICBpZiAocHNbKytqXSA9PT0gcHNbKytrXSkge1xuICAgICAgICAvLyDlvZPkuKTkuKrlrZfnrKbnm7jnrYnml7bopoHot7Pov4dcbiAgICAgICAgbmV4dFtqXSA9IG5leHRba107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0W2pdID0gaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgayA9IG5leHRba107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHQ7XG59XG5cbmZ1bmN0aW9uIGttcCh0czogc3RyaW5nLCBwczogc3RyaW5nKSB7XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuICBjb25zdCBuZXh0ID0gZ2V0TmV4dChwcyk7XG4gIHdoaWxlIChpIDwgdHMubGVuZ3RoICYmIGogPCBwcy5sZW5ndGgpIHtcbiAgICBpZiAoaiA9PT0gLTEgfHwgdHNbaV0gPT09IHBzW2pdKSB7XG4gICAgICAvLyDlvZNqID0gLTEg6L+Z5Liq5b2T5YmNIGnnmoTlrZfnrKYg5LiN5Y+v6IO95YaN5Yy56YWNIOS4i+S4gOS4qmnlh4blpIflkowgcHNbMF0g5Yy56YWNXG4gICAgICBpKys7XG4gICAgICBqKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGogPSBuZXh0W2pdOyAvLyBq5Zue5Yiw5oyH5a6a5L2N572uXG4gICAgICAvLyDlpoLmnpzmmK8gMCDlsLHmmK8g5b2T5YmN55qEaSDlho3kuI4gcHNbal1cbiAgICB9XG4gIH1cblxuICBpZiAoaiA9PT0gcHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGkgLSBqO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtMTtcbiAgfVxufVxuXG52YXIgc3RyU3RyMiA9IGZ1bmN0aW9uIChoYXlzdGFjazogc3RyaW5nLCBuZWVkbGU6IHN0cmluZykge1xuICBjb25zdCBuID0gaGF5c3RhY2subGVuZ3RoLFxuICAgIG0gPSBuZWVkbGUubGVuZ3RoO1xuICBpZiAobSA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUn+aIkOWJjee8gOihqFxuICAgKiAqL1xuICBjb25zdCBwaTogbnVtYmVyW10gPSBuZXcgQXJyYXkobSkuZmlsbCgwKTtcbiAgLyoqXG4gICAqIGkg5Li65oC7IOaMh+mSiFxuICAgKiBqIOS4uuavj+asoeWJjee8gCDmoKHlr7nnmoTmjIfpkohcbiAgICpcbiAgICogaSDmjIfpkojkuI3mlq3lkJHlkI4gLCDkuI4gIFswLGopIOWIsCBqIOeahOWtl+espuS4siDkuI5cbiAgICogKi9cbiAgZm9yIChsZXQgaSA9IDEsIGogPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgLy8g5LiA55u05om+5Yiw5LiA5LiqIOebuOWQjOeahOWtl+espiDkvZzkuLrkuIDmrKHliY3nvIDljLnphY3nmoTlvIDlp4tcbiAgICB3aGlsZSAoaiA+IDAgJiYgbmVlZGxlW2ldICE9PSBuZWVkbGVbal0pIHtcbiAgICAgIGogPSBwaVtqIC0gMV07XG4gICAgfVxuICAgIC8vIOWmguaenOebuOetieWImSDor7TmmI7nrKblkIjliY3nvIBcbiAgICBpZiAobmVlZGxlW2ldID09IG5lZWRsZVtqXSkge1xuICAgICAgaisrO1xuICAgIH1cbiAgICAvLyBwaSDorrDlvZXlpoLmnpwgaSArIDEg5L2N572u5LiN5Yy56YWN55qE6K+dIOWwseW6lOivpemHjeaWsOS7jiBwaVtpIC0gMV0g5L2N572u6YeN5paw5qCh5a+5XG4gICAgcGlbaV0gPSBqO1xuICB9XG5cbiAgY29uc29sZS5sb2cocGkpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgd2hpbGUgKGogPiAwICYmIGhheXN0YWNrW2ldICE9IG5lZWRsZVtqXSkge1xuICAgICAgaiA9IHBpW2ogLSAxXTtcbiAgICB9XG4gICAgaWYgKGhheXN0YWNrW2ldID09IG5lZWRsZVtqXSkge1xuICAgICAgaisrO1xuICAgIH1cbiAgICBpZiAoaiA9PT0gbSkge1xuICAgICAgcmV0dXJuIGkgLSBtICsgMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChzdHJTdHIoXCJoZWxsb1wiLCBcImxsXCIpLCAyKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChzdHJTdHIyKFwiaGVsbG9cIiwgXCJsbFwiKSwgMik7XG5cbnN0clN0cjIoXCJhYmFjYWJhYmFiYWFcIiwgXCJhYmFiYmFiYWJcIik7XG4iXX0=