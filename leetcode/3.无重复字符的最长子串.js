"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    const location = {};
    let start_index = -1, max = 0; // idx为当前子串的开始位置-1
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        // 如果当前字符出现过，那么当前子串的起始位置为这个字符上一次出现的位置+1
        if (location[character] > start_index) {
            start_index = location[character];
        }
        if (i - start_index > max) {
            max = i - start_index;
        }
        location[character] = i;
    }
    return max;
};
/**
 * 滑动窗口
 * 滑动窗口是数组/字符串问题中常用的抽象概念。
 * 窗口通常是在数组/字符串中由开始和结束索引定义的一系列元素的集合，即 [i, j)（左闭，右开）。
 * 而滑动窗口是可以将两个边界向某一方向“滑动”的窗口。例如，我们将 [i, j) 向右滑动 1 个元素，则它将变为 [i+1, j+1)（左闭，右开）。
 *
 * 回到我们的问题，我们使用 HashSet 将字符存储在当前窗口 [i, j)[i,j)（最初 j = i）中。
 * 然后我们向右侧滑动索引 j，如果它不在 HashSet 中，我们会继续滑动 j。直到 s[j] 已经存在于 HashSet 中。
 * 此时，我们找到的没有重复字符的最长子字符串将会以索引 i 开头。如果我们对所有的 i 这样做，就可以得到答案。
 * */
var lengthOfLongestSubstring1 = function (s) {
    const n = s.length;
    const set = new Set();
    let ans = 0, i = 0, j = 0;
    while (i < n && j < n) {
        // try to extend the range [i, j]
        if (!set.has(s[j])) {
            set.add(s[j++]);
            ans = Math.max(ans, j - i);
        }
        else {
            set.delete(s[i++]);
        }
    }
    return ans;
};
/**
 1. 官方最优解 优化的 滑动窗口

 上述的方法最多需要执行 2n 个步骤。事实上，它可以被进一步优化为仅需要 n
 个步骤。我们可以定义字符到索引的映射，而不是使用集合来判断一个字符是否存在。
 当我们找到重复的字符时，我们可以立即跳过该窗口。

 也就是说，如果 s[j] 在 [i, j) 范围内有与 j' 重复的字符，我们不需要逐渐增加 i
 。 我们可以直接跳过 [i，j'] 范围内的所有元素，并将 i 变为 j' + 1。
 * */
var lengthOfLongestSubstring2 = function (s) {
    const n = s.length;
    let ans = 0;
    const map = {}; // current index of character
    // try to extend the range [i, j]
    for (let j = 0, i = 0; j < n; j++) {
        i = Math.max(map[s[j]] || 0, i);
        ans = Math.max(ans, j - i + 1);
        map[s[j]] = j + 1;
    }
    return ans;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
assert_1.default.strictEqual(lengthOfLongestSubstring1("abcabcbb"), 3);
assert_1.default.strictEqual(lengthOfLongestSubstring2("abcabcbb"), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy7ml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMu5peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsQ0FBUztJQUNoRCxNQUFNLFFBQVEsR0FBOEIsRUFBRSxDQUFDO0lBQy9DLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUNsQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCO0lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2Qix1Q0FBdUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxFQUFFO1lBQ3JDLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsR0FBRyxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDO1NBQ3ZCO1FBRUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7OztLQVNLO0FBQ0wsSUFBSSx5QkFBeUIsR0FBRyxVQUFVLENBQVM7SUFDakQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQUksR0FBRyxHQUFHLENBQUMsRUFDVCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwQjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0tBU0s7QUFDTCxJQUFJLHlCQUF5QixHQUFHLFVBQVUsQ0FBUztJQUNqRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25CLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUMsQ0FBQyw2QkFBNkI7SUFDeEUsaUNBQWlDO0lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrlrZfnrKbkuLLvvIzor7fkvaDmib7lh7rlhbbkuK3kuI3lkKvmnInph43lpI3lrZfnrKbnmoQg5pyA6ZW/5a2Q5LiyIOeahOmVv+W6puOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFwiYWJjYWJjYmJcIlxyXG7ovpPlh7o6IDNcclxu6Kej6YeKOiDlm6DkuLrml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLLmmK8gXCJhYmNcIu+8jOaJgOS7peWFtumVv+W6puS4uiAz44CCXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBcImJiYmJiXCJcclxu6L6T5Ye6OiAxXHJcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwiYlwi77yM5omA5Lul5YW26ZW/5bqm5Li6IDHjgIJcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IFwicHd3a2V3XCJcclxu6L6T5Ye6OiAzXHJcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwid2tlXCLvvIzmiYDku6Xlhbbplb/luqbkuLogM+OAglxyXG4gICAgIOivt+azqOaEj++8jOS9oOeahOetlOahiOW/hemhu+aYryDlrZDkuLIg55qE6ZW/5bqm77yMXCJwd2tlXCIg5piv5LiA5Liq5a2Q5bqP5YiX77yM5LiN5piv5a2Q5Liy44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgY29uc3QgbG9jYXRpb246IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICBsZXQgc3RhcnRfaW5kZXggPSAtMSxcclxuICAgIG1heCA9IDA7IC8vIGlkeOS4uuW9k+WJjeWtkOS4sueahOW8gOWni+S9jee9ri0xXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBzW2ldO1xyXG4gICAgLy8g5aaC5p6c5b2T5YmN5a2X56ym5Ye6546w6L+H77yM6YKj5LmI5b2T5YmN5a2Q5Liy55qE6LW35aeL5L2N572u5Li66L+Z5Liq5a2X56ym5LiK5LiA5qyh5Ye6546w55qE5L2N572uKzFcclxuICAgIGlmIChsb2NhdGlvbltjaGFyYWN0ZXJdID4gc3RhcnRfaW5kZXgpIHtcclxuICAgICAgc3RhcnRfaW5kZXggPSBsb2NhdGlvbltjaGFyYWN0ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpIC0gc3RhcnRfaW5kZXggPiBtYXgpIHtcclxuICAgICAgbWF4ID0gaSAtIHN0YXJ0X2luZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2F0aW9uW2NoYXJhY3Rlcl0gPSBpO1xyXG4gIH1cclxuICByZXR1cm4gbWF4O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOa7keWKqOeql+WPo1xyXG4gKiDmu5Hliqjnqpflj6PmmK/mlbDnu4Qv5a2X56ym5Liy6Zeu6aKY5Lit5bi455So55qE5oq96LGh5qaC5b+144CCXHJcbiAqIOeql+WPo+mAmuW4uOaYr+WcqOaVsOe7hC/lrZfnrKbkuLLkuK3nlLHlvIDlp4vlkoznu5PmnZ/ntKLlvJXlrprkuYnnmoTkuIDns7vliJflhYPntKDnmoTpm4blkIjvvIzljbMgW2ksIGop77yI5bem6Zet77yM5Y+z5byA77yJ44CCXHJcbiAqIOiAjOa7keWKqOeql+WPo+aYr+WPr+S7peWwhuS4pOS4qui+ueeVjOWQkeafkOS4gOaWueWQkeKAnOa7keWKqOKAneeahOeql+WPo+OAguS+i+Wmgu+8jOaIkeS7rOWwhiBbaSwgaikg5ZCR5Y+z5ruR5YqoIDEg5Liq5YWD57Sg77yM5YiZ5a6D5bCG5Y+Y5Li6IFtpKzEsIGorMSnvvIjlt6bpl63vvIzlj7PlvIDvvInjgIJcclxuICpcclxuICog5Zue5Yiw5oiR5Lus55qE6Zeu6aKY77yM5oiR5Lus5L2/55SoIEhhc2hTZXQg5bCG5a2X56ym5a2Y5YKo5Zyo5b2T5YmN56qX5Y+jIFtpLCBqKVtpLGop77yI5pyA5YidIGogPSBp77yJ5Lit44CCXHJcbiAqIOeEtuWQjuaIkeS7rOWQkeWPs+S+p+a7keWKqOe0ouW8lSBq77yM5aaC5p6c5a6D5LiN5ZyoIEhhc2hTZXQg5Lit77yM5oiR5Lus5Lya57un57ut5ruR5YqoIGrjgILnm7TliLAgc1tqXSDlt7Lnu4/lrZjlnKjkuo4gSGFzaFNldCDkuK3jgIJcclxuICog5q2k5pe277yM5oiR5Lus5om+5Yiw55qE5rKh5pyJ6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5a2X56ym5Liy5bCG5Lya5Lul57Si5byVIGkg5byA5aS044CC5aaC5p6c5oiR5Lus5a+55omA5pyJ55qEIGkg6L+Z5qC35YGa77yM5bCx5Y+v5Lul5b6X5Yiw562U5qGI44CCXHJcbiAqICovXHJcbnZhciBsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcxID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gIGNvbnN0IG4gPSBzLmxlbmd0aDtcclxuICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XHJcbiAgbGV0IGFucyA9IDAsXHJcbiAgICBpID0gMCxcclxuICAgIGogPSAwO1xyXG4gIHdoaWxlIChpIDwgbiAmJiBqIDwgbikge1xyXG4gICAgLy8gdHJ5IHRvIGV4dGVuZCB0aGUgcmFuZ2UgW2ksIGpdXHJcbiAgICBpZiAoIXNldC5oYXMoc1tqXSkpIHtcclxuICAgICAgc2V0LmFkZChzW2orK10pO1xyXG4gICAgICBhbnMgPSBNYXRoLm1heChhbnMsIGogLSBpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldC5kZWxldGUoc1tpKytdKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGFucztcclxufTtcclxuXHJcbi8qKlxyXG4gMS4g5a6Y5pa55pyA5LyY6KejIOS8mOWMlueahCDmu5Hliqjnqpflj6NcclxuXHJcbiDkuIrov7DnmoTmlrnms5XmnIDlpJrpnIDopoHmiafooYwgMm4g5Liq5q2l6aqk44CC5LqL5a6e5LiK77yM5a6D5Y+v5Lul6KKr6L+b5LiA5q2l5LyY5YyW5Li65LuF6ZyA6KaBIG5cclxuIOS4quatpemqpOOAguaIkeS7rOWPr+S7peWumuS5ieWtl+espuWIsOe0ouW8leeahOaYoOWwhO+8jOiAjOS4jeaYr+S9v+eUqOmbhuWQiOadpeWIpOaWreS4gOS4quWtl+espuaYr+WQpuWtmOWcqOOAglxyXG4g5b2T5oiR5Lus5om+5Yiw6YeN5aSN55qE5a2X56ym5pe277yM5oiR5Lus5Y+v5Lul56uL5Y2z6Lez6L+H6K+l56qX5Y+j44CCXHJcblxyXG4g5Lmf5bCx5piv6K+077yM5aaC5p6cIHNbal0g5ZyoIFtpLCBqKSDojIPlm7TlhoXmnInkuI4gaicg6YeN5aSN55qE5a2X56ym77yM5oiR5Lus5LiN6ZyA6KaB6YCQ5riQ5aKe5YqgIGlcclxuIOOAgiDmiJHku6zlj6/ku6Xnm7TmjqXot7Pov4cgW2nvvIxqJ10g6IyD5Zu05YaF55qE5omA5pyJ5YWD57Sg77yM5bm25bCGIGkg5Y+Y5Li6IGonICsgMeOAglxyXG4gKiAqL1xyXG52YXIgbGVuZ3RoT2ZMb25nZXN0U3Vic3RyaW5nMiA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcclxuICBjb25zdCBuID0gcy5sZW5ndGg7XHJcbiAgbGV0IGFucyA9IDA7XHJcbiAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307IC8vIGN1cnJlbnQgaW5kZXggb2YgY2hhcmFjdGVyXHJcbiAgLy8gdHJ5IHRvIGV4dGVuZCB0aGUgcmFuZ2UgW2ksIGpdXHJcbiAgZm9yIChsZXQgaiA9IDAsIGkgPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICBpID0gTWF0aC5tYXgobWFwW3Nbal1dIHx8IDAsIGkpO1xyXG4gICAgYW5zID0gTWF0aC5tYXgoYW5zLCBqIC0gaSArIDEpO1xyXG4gICAgbWFwW3Nbal1dID0gaiArIDE7XHJcbiAgfVxyXG4gIHJldHVybiBhbnM7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZyhcImFiY2FiY2JiXCIpLCAzKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZzEoXCJhYmNhYmNiYlwiKSwgMyk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcyKFwiYWJjYWJjYmJcIiksIDMpO1xyXG4iXX0=