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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgu5a6e546wc3RyU3RyKCkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzI4LuWunueOsHN0clN0cigpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUNIOzs7O0dBSUc7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLFFBQWdCLEVBQUUsTUFBYztJQUNyRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7OztLQVNLO0FBQ0wsU0FBUyxPQUFPLENBQUMsRUFBVTtJQUN6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNYLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsY0FBYztnQkFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDYjtTQUNGO2FBQU07WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2I7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFVO0lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsNENBQTRDO1lBQzVDLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7WUFDdkIseUJBQXlCO1NBQzFCO0tBQ0Y7SUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNkO1NBQU07UUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ1g7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9MjggbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzI4XSDlrp7njrBzdHJTdHIoKVxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ltcGxlbWVudC1zdHJzdHIvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoMzcuNzklKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDM4LjVLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogMTAxLjdLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1wiaGVsbG9cIlxcblwibGxcIidcbiAqXG4gKiDlrp7njrDCoHN0clN0cigpwqDlh73mlbDjgIJcbiAqXG4gKiDnu5nlrprkuIDkuKrCoGhheXN0YWNrIOWtl+espuS4suWSjOS4gOS4qiBuZWVkbGUg5a2X56ym5Liy77yM5ZyoIGhheXN0YWNrIOWtl+espuS4suS4reaJvuWHuiBuZWVkbGUg5a2X56ym5Liy5Ye6546w55qE56ys5LiA5Liq5L2N572uXG4gKiAo5LuOMOW8gOWniynjgILlpoLmnpzkuI3lrZjlnKjvvIzliJnov5Tlm57CoCAtMeOAglxuICpcbiAqIOekuuS+iyAxOlxuICpcbiAqIOi+k+WFpTogaGF5c3RhY2sgPSBcImhlbGxvXCIsIG5lZWRsZSA9IFwibGxcIlxuICog6L6T5Ye6OiAyXG4gKlxuICpcbiAqIOekuuS+iyAyOlxuICpcbiAqIOi+k+WFpTogaGF5c3RhY2sgPSBcImFhYWFhXCIsIG5lZWRsZSA9IFwiYmJhXCJcbiAqIOi+k+WHujogLTFcbiAqXG4gKlxuICog6K+05piOOlxuICpcbiAqIOW9k8KgbmVlZGxlwqDmmK/nqbrlrZfnrKbkuLLml7bvvIzmiJHku6zlupTlvZPov5Tlm57ku4DkuYjlgLzlkaLvvJ/ov5nmmK/kuIDkuKrlnKjpnaLor5XkuK3lvojlpb3nmoTpl67popjjgIJcbiAqXG4gKiDlr7nkuo7mnKzpopjogIzoqIDvvIzlvZPCoG5lZWRsZcKg5piv56m65a2X56ym5Liy5pe25oiR5Lus5bqU5b2T6L+U5ZueIDAg44CC6L+Z5LiOQ+ivreiogOeahMKgc3Ryc3RyKCnCoOS7peWPiiBKYXZh55qEwqBpbmRleE9mKCnCoOWumuS5ieebuOespuOAglxuICpcbiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaGF5c3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZWVkbGVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHN0clN0ciA9IGZ1bmN0aW9uIChoYXlzdGFjazogc3RyaW5nLCBuZWVkbGU6IHN0cmluZykge1xuICByZXR1cm4ga21wKGhheXN0YWNrLCBuZWVkbGUpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqICAgICAgMCAgIOW9k+WJjeWtl+espiDlho3ku47lrZDkuLIgMOS9jee9ruW8gOWni+WMuemFjVxuICogICAgICAtMSAg5LiL5LiA5Liq5a2X56ymIOWGjeS7juWtkOS4siAw5L2N572u5byA5aeL5Yy56YWNXG4gKiAgICAgIG4gICDlvZPliY3lrZfnrKYgIOWGjeS7juWtkOS4siBuIOS9jee9ruW8gOWni+WMuemFjVxuICogQGV4YW1wbGVcbiAqICAgICAgYWRhICAgICAgICAgPT4gICAgICBbIC0xLCAwLCAsLTEgXVxuICogICAgICBhYmNhYmMgICAgICA9PiAgICAgIFsgLTEsIDAsIDAsIC0xLCAwLCAwIF1cbiAqICAgICAgYWJhZCAgICAgICAgPT4gICAgICBbIC0xLCAwLCAtMSwgMSBdXG4gKiAqL1xuZnVuY3Rpb24gZ2V0TmV4dChwczogc3RyaW5nKTogbnVtYmVyW10ge1xuICBjb25zdCBuZXh0ID0gQXJyYXkocHMubGVuZ3RoKS5maWxsKDApO1xuICBuZXh0WzBdID0gLTE7XG4gIGxldCBqID0gMDtcbiAgbGV0IGsgPSAtMTtcbiAgd2hpbGUgKGogPCBwcy5sZW5ndGggLSAxKSB7XG4gICAgaWYgKGsgPT09IC0xIHx8IHBzW2pdID09PSBwc1trXSkge1xuICAgICAgaWYgKHBzWysral0gPT09IHBzWysra10pIHtcbiAgICAgICAgLy8g5b2T5Lik5Liq5a2X56ym55u4562J5pe26KaB6Lez6L+HXG4gICAgICAgIG5leHRbal0gPSBuZXh0W2tdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dFtqXSA9IGs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGsgPSBuZXh0W2tdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufVxuXG5mdW5jdGlvbiBrbXAodHM6IHN0cmluZywgcHM6IHN0cmluZykge1xuICBsZXQgaSA9IDA7XG4gIGxldCBqID0gMDtcbiAgY29uc3QgbmV4dCA9IGdldE5leHQocHMpO1xuICB3aGlsZSAoaSA8IHRzLmxlbmd0aCAmJiBqIDwgcHMubGVuZ3RoKSB7XG4gICAgaWYgKGogPT09IC0xIHx8IHRzW2ldID09PSBwc1tqXSkge1xuICAgICAgLy8g5b2TaiA9IC0xIOi/meS4quW9k+WJjSBp55qE5a2X56ymIOS4jeWPr+iDveWGjeWMuemFjSDkuIvkuIDkuKpp5YeG5aSH5ZKMIHBzWzBdIOWMuemFjVxuICAgICAgaSsrO1xuICAgICAgaisrO1xuICAgIH0gZWxzZSB7XG4gICAgICBqID0gbmV4dFtqXTsgLy8gauWbnuWIsOaMh+WumuS9jee9rlxuICAgICAgLy8g5aaC5p6c5pivIDAg5bCx5pivIOW9k+WJjeeahGkg5YaN5LiOIHBzW2pdXG4gICAgfVxuICB9XG5cbiAgaWYgKGogPT09IHBzLmxlbmd0aCkge1xuICAgIHJldHVybiBpIC0gajtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cblxuZXhwb3J0IHt9O1xuIl19