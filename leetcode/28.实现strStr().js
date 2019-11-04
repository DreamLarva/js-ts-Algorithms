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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgu5a6e546wc3RyU3RyKCkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzI4LuWunueOsHN0clN0cigpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUNIOzs7O0dBSUc7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLFFBQWdCLEVBQUUsTUFBYztJQUNuRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7OztLQVNLO0FBQ0wsU0FBUyxPQUFPLENBQUMsRUFBVTtJQUN2QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNYLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDckIsY0FBYztnQkFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZjtTQUNKO2FBQU07WUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7S0FDSjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBVTtJQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdCLDRDQUE0QztZQUM1QyxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ1A7YUFBTTtZQUNILENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ3ZCLHlCQUF5QjtTQUM1QjtLQUNKO0lBRUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEI7U0FBTTtRQUNILE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDYjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTI4IGxhbmc9amF2YXNjcmlwdFxyXG4gKlxyXG4gKiBbMjhdIOWunueOsHN0clN0cigpXHJcbiAqXHJcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ltcGxlbWVudC1zdHJzdHIvZGVzY3JpcHRpb24vXHJcbiAqXHJcbiAqIGFsZ29yaXRobXNcclxuICogRWFzeSAoMzcuNzklKVxyXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgMzguNUtcclxuICogVG90YWwgU3VibWlzc2lvbnM6IDEwMS43S1xyXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1wiaGVsbG9cIlxcblwibGxcIidcclxuICpcclxuICog5a6e546wwqBzdHJTdHIoKcKg5Ye95pWw44CCXHJcbiAqXHJcbiAqIOe7meWumuS4gOS4qsKgaGF5c3RhY2sg5a2X56ym5Liy5ZKM5LiA5LiqIG5lZWRsZSDlrZfnrKbkuLLvvIzlnKggaGF5c3RhY2sg5a2X56ym5Liy5Lit5om+5Ye6IG5lZWRsZSDlrZfnrKbkuLLlh7rnjrDnmoTnrKzkuIDkuKrkvY3nva5cclxuICogKOS7jjDlvIDlp4sp44CC5aaC5p6c5LiN5a2Y5Zyo77yM5YiZ6L+U5ZuewqAgLTHjgIJcclxuICpcclxuICog56S65L6LIDE6XHJcbiAqXHJcbiAqIOi+k+WFpTogaGF5c3RhY2sgPSBcImhlbGxvXCIsIG5lZWRsZSA9IFwibGxcIlxyXG4gKiDovpPlh7o6IDJcclxuICpcclxuICpcclxuICog56S65L6LIDI6XHJcbiAqXHJcbiAqIOi+k+WFpTogaGF5c3RhY2sgPSBcImFhYWFhXCIsIG5lZWRsZSA9IFwiYmJhXCJcclxuICog6L6T5Ye6OiAtMVxyXG4gKlxyXG4gKlxyXG4gKiDor7TmmI46XHJcbiAqXHJcbiAqIOW9k8KgbmVlZGxlwqDmmK/nqbrlrZfnrKbkuLLml7bvvIzmiJHku6zlupTlvZPov5Tlm57ku4DkuYjlgLzlkaLvvJ/ov5nmmK/kuIDkuKrlnKjpnaLor5XkuK3lvojlpb3nmoTpl67popjjgIJcclxuICpcclxuICog5a+55LqO5pys6aKY6ICM6KiA77yM5b2TwqBuZWVkbGXCoOaYr+epuuWtl+espuS4suaXtuaIkeS7rOW6lOW9k+i/lOWbniAwIOOAgui/meS4jkPor63oqIDnmoTCoHN0cnN0cigpwqDku6Xlj4ogSmF2YeeahMKgaW5kZXhPZigpwqDlrprkuYnnm7jnrKbjgIJcclxuICpcclxuICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGF5c3RhY2tcclxuICogQHBhcmFtIHtzdHJpbmd9IG5lZWRsZVxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgc3RyU3RyID0gZnVuY3Rpb24gKGhheXN0YWNrOiBzdHJpbmcsIG5lZWRsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4ga21wKGhheXN0YWNrLCBuZWVkbGUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiAgICAgIDAgICDlvZPliY3lrZfnrKYg5YaN5LuO5a2Q5LiyIDDkvY3nva7lvIDlp4vljLnphY1cclxuICogICAgICAtMSAg5LiL5LiA5Liq5a2X56ymIOWGjeS7juWtkOS4siAw5L2N572u5byA5aeL5Yy56YWNXHJcbiAqICAgICAgbiAgIOW9k+WJjeWtl+espiAg5YaN5LuO5a2Q5LiyIG4g5L2N572u5byA5aeL5Yy56YWNXHJcbiAqIEBleGFtcGxlXHJcbiAqICAgICAgYWRhICAgICAgICAgPT4gICAgICBbIC0xLCAwLCAsLTEgXVxyXG4gKiAgICAgIGFiY2FiYyAgICAgID0+ICAgICAgWyAtMSwgMCwgMCwgLTEsIDAsIDAgXVxyXG4gKiAgICAgIGFiYWQgICAgICAgID0+ICAgICAgWyAtMSwgMCwgLTEsIDEgXVxyXG4gKiAqL1xyXG5mdW5jdGlvbiBnZXROZXh0KHBzOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCBuZXh0ID0gQXJyYXkocHMubGVuZ3RoKS5maWxsKDApO1xyXG4gICAgbmV4dFswXSA9IC0xO1xyXG4gICAgbGV0IGogPSAwO1xyXG4gICAgbGV0IGsgPSAtMTtcclxuICAgIHdoaWxlIChqIDwgcHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGlmIChrID09PSAtMSB8fCBwc1tqXSA9PT0gcHNba10pIHtcclxuICAgICAgICAgICAgaWYgKHBzWysral0gPT09IHBzWysra10pIHtcclxuICAgICAgICAgICAgICAgIC8vIOW9k+S4pOS4quWtl+espuebuOetieaXtuimgei3s+i/h1xyXG4gICAgICAgICAgICAgICAgbmV4dFtqXSA9IG5leHRba107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0W2pdID0gaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGsgPSBuZXh0W2tdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24ga21wKHRzOiBzdHJpbmcsIHBzOiBzdHJpbmcpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCBqID0gMDtcclxuICAgIGNvbnN0IG5leHQgPSBnZXROZXh0KHBzKTtcclxuICAgIHdoaWxlIChpIDwgdHMubGVuZ3RoICYmIGogPCBwcy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoaiA9PT0gLTEgfHwgdHNbaV0gPT09IHBzW2pdKSB7XHJcbiAgICAgICAgICAgIC8vIOW9k2ogPSAtMSDov5nkuKrlvZPliY0gaeeahOWtl+espiDkuI3lj6/og73lho3ljLnphY0g5LiL5LiA5LiqaeWHhuWkh+WSjCBwc1swXSDljLnphY1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBqKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaiA9IG5leHRbal07IC8vIGrlm57liLDmjIflrprkvY3nva5cclxuICAgICAgICAgICAgLy8g5aaC5p6c5pivIDAg5bCx5pivIOW9k+WJjeeahGkg5YaN5LiOIHBzW2pdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChqID09PSBwcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gaSAtIGo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHt9XHJcbiJdfQ==