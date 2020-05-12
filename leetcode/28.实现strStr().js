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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgu5a6e546wc3RyU3RyKCkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzI4LuWunueOsHN0clN0cigpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUNIOzs7O0dBSUc7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLFFBQWdCLEVBQUUsTUFBYztJQUNuRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7OztLQVNLO0FBQ0wsU0FBUyxPQUFPLENBQUMsRUFBVTtJQUN2QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNYLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDckIsY0FBYztnQkFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZjtTQUNKO2FBQU07WUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7S0FDSjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBVTtJQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdCLDRDQUE0QztZQUM1QyxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ1A7YUFBTTtZQUNILENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ3ZCLHlCQUF5QjtTQUM1QjtLQUNKO0lBRUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEI7U0FBTTtRQUNILE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDYjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD0yOCBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMjhdIOWunueOsHN0clN0cigpXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvaW1wbGVtZW50LXN0cnN0ci9kZXNjcmlwdGlvbi9cbiAqXG4gKiBhbGdvcml0aG1zXG4gKiBFYXN5ICgzNy43OSUpXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgMzguNUtcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiAxMDEuN0tcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnXCJoZWxsb1wiXFxuXCJsbFwiJ1xuICpcbiAqIOWunueOsMKgc3RyU3RyKCnCoOWHveaVsOOAglxuICpcbiAqIOe7meWumuS4gOS4qsKgaGF5c3RhY2sg5a2X56ym5Liy5ZKM5LiA5LiqIG5lZWRsZSDlrZfnrKbkuLLvvIzlnKggaGF5c3RhY2sg5a2X56ym5Liy5Lit5om+5Ye6IG5lZWRsZSDlrZfnrKbkuLLlh7rnjrDnmoTnrKzkuIDkuKrkvY3nva5cbiAqICjku44w5byA5aeLKeOAguWmguaenOS4jeWtmOWcqO+8jOWImei/lOWbnsKgIC0x44CCXG4gKlxuICog56S65L6LIDE6XG4gKlxuICog6L6T5YWlOiBoYXlzdGFjayA9IFwiaGVsbG9cIiwgbmVlZGxlID0gXCJsbFwiXG4gKiDovpPlh7o6IDJcbiAqXG4gKlxuICog56S65L6LIDI6XG4gKlxuICog6L6T5YWlOiBoYXlzdGFjayA9IFwiYWFhYWFcIiwgbmVlZGxlID0gXCJiYmFcIlxuICog6L6T5Ye6OiAtMVxuICpcbiAqXG4gKiDor7TmmI46XG4gKlxuICog5b2TwqBuZWVkbGXCoOaYr+epuuWtl+espuS4suaXtu+8jOaIkeS7rOW6lOW9k+i/lOWbnuS7gOS5iOWAvOWRou+8n+i/meaYr+S4gOS4quWcqOmdouivleS4reW+iOWlveeahOmXrumimOOAglxuICpcbiAqIOWvueS6juacrOmimOiAjOiogO+8jOW9k8KgbmVlZGxlwqDmmK/nqbrlrZfnrKbkuLLml7bmiJHku6zlupTlvZPov5Tlm54gMCDjgILov5nkuI5D6K+t6KiA55qEwqBzdHJzdHIoKcKg5Lul5Y+KIEphdmHnmoTCoGluZGV4T2YoKcKg5a6a5LmJ55u456ym44CCXG4gKlxuICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXlzdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IG5lZWRsZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgc3RyU3RyID0gZnVuY3Rpb24gKGhheXN0YWNrOiBzdHJpbmcsIG5lZWRsZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGttcChoYXlzdGFjaywgbmVlZGxlKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiAgICAgIDAgICDlvZPliY3lrZfnrKYg5YaN5LuO5a2Q5LiyIDDkvY3nva7lvIDlp4vljLnphY1cbiAqICAgICAgLTEgIOS4i+S4gOS4quWtl+espiDlho3ku47lrZDkuLIgMOS9jee9ruW8gOWni+WMuemFjVxuICogICAgICBuICAg5b2T5YmN5a2X56ymICDlho3ku47lrZDkuLIgbiDkvY3nva7lvIDlp4vljLnphY1cbiAqIEBleGFtcGxlXG4gKiAgICAgIGFkYSAgICAgICAgID0+ICAgICAgWyAtMSwgMCwgLC0xIF1cbiAqICAgICAgYWJjYWJjICAgICAgPT4gICAgICBbIC0xLCAwLCAwLCAtMSwgMCwgMCBdXG4gKiAgICAgIGFiYWQgICAgICAgID0+ICAgICAgWyAtMSwgMCwgLTEsIDEgXVxuICogKi9cbmZ1bmN0aW9uIGdldE5leHQocHM6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICBjb25zdCBuZXh0ID0gQXJyYXkocHMubGVuZ3RoKS5maWxsKDApO1xuICAgIG5leHRbMF0gPSAtMTtcbiAgICBsZXQgaiA9IDA7XG4gICAgbGV0IGsgPSAtMTtcbiAgICB3aGlsZSAoaiA8IHBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKGsgPT09IC0xIHx8IHBzW2pdID09PSBwc1trXSkge1xuICAgICAgICAgICAgaWYgKHBzWysral0gPT09IHBzWysra10pIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPkuKTkuKrlrZfnrKbnm7jnrYnml7bopoHot7Pov4dcbiAgICAgICAgICAgICAgICBuZXh0W2pdID0gbmV4dFtrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dFtqXSA9IGs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrID0gbmV4dFtrXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0O1xufVxuXG5mdW5jdGlvbiBrbXAodHM6IHN0cmluZywgcHM6IHN0cmluZykge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG4gICAgY29uc3QgbmV4dCA9IGdldE5leHQocHMpO1xuICAgIHdoaWxlIChpIDwgdHMubGVuZ3RoICYmIGogPCBwcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGogPT09IC0xIHx8IHRzW2ldID09PSBwc1tqXSkge1xuICAgICAgICAgICAgLy8g5b2TaiA9IC0xIOi/meS4quW9k+WJjSBp55qE5a2X56ymIOS4jeWPr+iDveWGjeWMuemFjSDkuIvkuIDkuKpp5YeG5aSH5ZKMIHBzWzBdIOWMuemFjVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaiA9IG5leHRbal07IC8vIGrlm57liLDmjIflrprkvY3nva5cbiAgICAgICAgICAgIC8vIOWmguaenOaYryAwIOWwseaYryDlvZPliY3nmoRpIOWGjeS4jiBwc1tqXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGogPT09IHBzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gaSAtIGo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IHt9XG4iXX0=
