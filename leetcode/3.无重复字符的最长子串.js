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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy7ml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMu5peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsQ0FBUztJQUNoRCxNQUFNLFFBQVEsR0FBOEIsRUFBRSxDQUFDO0lBQy9DLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUNsQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCO0lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2Qix1Q0FBdUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxFQUFFO1lBQ3JDLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsR0FBRyxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDO1NBQ3ZCO1FBRUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7OztLQVNLO0FBQ0wsSUFBSSx5QkFBeUIsR0FBRyxVQUFVLENBQVM7SUFDakQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQUksR0FBRyxHQUFHLENBQUMsRUFDVCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwQjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0tBU0s7QUFDTCxJQUFJLHlCQUF5QixHQUFHLFVBQVUsQ0FBUztJQUNqRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25CLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUMsQ0FBQyw2QkFBNkI7SUFDeEUsaUNBQWlDO0lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM6K+35L2g5om+5Ye65YW25Lit5LiN5ZCr5pyJ6YeN5aSN5a2X56ym55qEIOacgOmVv+WtkOS4siDnmoTplb/luqbjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogXCJhYmNhYmNiYlwiXG7ovpPlh7o6IDNcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwiYWJjXCLvvIzmiYDku6Xlhbbplb/luqbkuLogM+OAglxu56S65L6LIDI6XG5cbui+k+WFpTogXCJiYmJiYlwiXG7ovpPlh7o6IDFcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwiYlwi77yM5omA5Lul5YW26ZW/5bqm5Li6IDHjgIJcbuekuuS+iyAzOlxuXG7ovpPlhaU6IFwicHd3a2V3XCJcbui+k+WHujogM1xu6Kej6YeKOiDlm6DkuLrml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLLmmK8gXCJ3a2VcIu+8jOaJgOS7peWFtumVv+W6puS4uiAz44CCXG4gICAgIOivt+azqOaEj++8jOS9oOeahOetlOahiOW/hemhu+aYryDlrZDkuLIg55qE6ZW/5bqm77yMXCJwd2tlXCIg5piv5LiA5Liq5a2Q5bqP5YiX77yM5LiN5piv5a2Q5Liy44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gIGNvbnN0IGxvY2F0aW9uOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGxldCBzdGFydF9pbmRleCA9IC0xLFxuICAgIG1heCA9IDA7IC8vIGlkeOS4uuW9k+WJjeWtkOS4sueahOW8gOWni+S9jee9ri0xXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IHNbaV07XG4gICAgLy8g5aaC5p6c5b2T5YmN5a2X56ym5Ye6546w6L+H77yM6YKj5LmI5b2T5YmN5a2Q5Liy55qE6LW35aeL5L2N572u5Li66L+Z5Liq5a2X56ym5LiK5LiA5qyh5Ye6546w55qE5L2N572uKzFcbiAgICBpZiAobG9jYXRpb25bY2hhcmFjdGVyXSA+IHN0YXJ0X2luZGV4KSB7XG4gICAgICBzdGFydF9pbmRleCA9IGxvY2F0aW9uW2NoYXJhY3Rlcl07XG4gICAgfVxuXG4gICAgaWYgKGkgLSBzdGFydF9pbmRleCA+IG1heCkge1xuICAgICAgbWF4ID0gaSAtIHN0YXJ0X2luZGV4O1xuICAgIH1cblxuICAgIGxvY2F0aW9uW2NoYXJhY3Rlcl0gPSBpO1xuICB9XG4gIHJldHVybiBtYXg7XG59O1xuXG4vKipcbiAqIOa7keWKqOeql+WPo1xuICog5ruR5Yqo56qX5Y+j5piv5pWw57uEL+Wtl+espuS4sumXrumimOS4reW4uOeUqOeahOaKveixoeamguW/teOAglxuICog56qX5Y+j6YCa5bi45piv5Zyo5pWw57uEL+Wtl+espuS4suS4reeUseW8gOWni+WSjOe7k+adn+e0ouW8leWumuS5ieeahOS4gOezu+WIl+WFg+e0oOeahOmbhuWQiO+8jOWNsyBbaSwgainvvIjlt6bpl63vvIzlj7PlvIDvvInjgIJcbiAqIOiAjOa7keWKqOeql+WPo+aYr+WPr+S7peWwhuS4pOS4qui+ueeVjOWQkeafkOS4gOaWueWQkeKAnOa7keWKqOKAneeahOeql+WPo+OAguS+i+Wmgu+8jOaIkeS7rOWwhiBbaSwgaikg5ZCR5Y+z5ruR5YqoIDEg5Liq5YWD57Sg77yM5YiZ5a6D5bCG5Y+Y5Li6IFtpKzEsIGorMSnvvIjlt6bpl63vvIzlj7PlvIDvvInjgIJcbiAqXG4gKiDlm57liLDmiJHku6znmoTpl67popjvvIzmiJHku6zkvb/nlKggSGFzaFNldCDlsIblrZfnrKblrZjlgqjlnKjlvZPliY3nqpflj6MgW2ksIGopW2ksainvvIjmnIDliJ0gaiA9IGnvvInkuK3jgIJcbiAqIOeEtuWQjuaIkeS7rOWQkeWPs+S+p+a7keWKqOe0ouW8lSBq77yM5aaC5p6c5a6D5LiN5ZyoIEhhc2hTZXQg5Lit77yM5oiR5Lus5Lya57un57ut5ruR5YqoIGrjgILnm7TliLAgc1tqXSDlt7Lnu4/lrZjlnKjkuo4gSGFzaFNldCDkuK3jgIJcbiAqIOatpOaXtu+8jOaIkeS7rOaJvuWIsOeahOayoeaciemHjeWkjeWtl+espueahOacgOmVv+WtkOWtl+espuS4suWwhuS8muS7pee0ouW8lSBpIOW8gOWktOOAguWmguaenOaIkeS7rOWvueaJgOacieeahCBpIOi/meagt+WBmu+8jOWwseWPr+S7peW+l+WIsOetlOahiOOAglxuICogKi9cbnZhciBsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcxID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICBjb25zdCBuID0gcy5sZW5ndGg7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgbGV0IGFucyA9IDAsXG4gICAgaSA9IDAsXG4gICAgaiA9IDA7XG4gIHdoaWxlIChpIDwgbiAmJiBqIDwgbikge1xuICAgIC8vIHRyeSB0byBleHRlbmQgdGhlIHJhbmdlIFtpLCBqXVxuICAgIGlmICghc2V0LmhhcyhzW2pdKSkge1xuICAgICAgc2V0LmFkZChzW2orK10pO1xuICAgICAgYW5zID0gTWF0aC5tYXgoYW5zLCBqIC0gaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldC5kZWxldGUoc1tpKytdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFucztcbn07XG5cbi8qKlxuIDEuIOWumOaWueacgOS8mOinoyDkvJjljJbnmoQg5ruR5Yqo56qX5Y+jXG5cbiDkuIrov7DnmoTmlrnms5XmnIDlpJrpnIDopoHmiafooYwgMm4g5Liq5q2l6aqk44CC5LqL5a6e5LiK77yM5a6D5Y+v5Lul6KKr6L+b5LiA5q2l5LyY5YyW5Li65LuF6ZyA6KaBIG5cbiDkuKrmraXpqqTjgILmiJHku6zlj6/ku6XlrprkuYnlrZfnrKbliLDntKLlvJXnmoTmmKDlsITvvIzogIzkuI3mmK/kvb/nlKjpm4blkIjmnaXliKTmlq3kuIDkuKrlrZfnrKbmmK/lkKblrZjlnKjjgIJcbiDlvZPmiJHku6zmib7liLDph43lpI3nmoTlrZfnrKbml7bvvIzmiJHku6zlj6/ku6Xnq4vljbPot7Pov4for6Xnqpflj6PjgIJcblxuIOS5n+WwseaYr+ivtO+8jOWmguaenCBzW2pdIOWcqCBbaSwgaikg6IyD5Zu05YaF5pyJ5LiOIGonIOmHjeWkjeeahOWtl+espu+8jOaIkeS7rOS4jemcgOimgemAkOa4kOWinuWKoCBpXG4g44CCIOaIkeS7rOWPr+S7peebtOaOpei3s+i/hyBbae+8jGonXSDojIPlm7TlhoXnmoTmiYDmnInlhYPntKDvvIzlubblsIYgaSDlj5jkuLogaicgKyAx44CCXG4gKiAqL1xudmFyIGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZzIgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gIGNvbnN0IG4gPSBzLmxlbmd0aDtcbiAgbGV0IGFucyA9IDA7XG4gIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9OyAvLyBjdXJyZW50IGluZGV4IG9mIGNoYXJhY3RlclxuICAvLyB0cnkgdG8gZXh0ZW5kIHRoZSByYW5nZSBbaSwgal1cbiAgZm9yIChsZXQgaiA9IDAsIGkgPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgaSA9IE1hdGgubWF4KG1hcFtzW2pdXSB8fCAwLCBpKTtcbiAgICBhbnMgPSBNYXRoLm1heChhbnMsIGogLSBpICsgMSk7XG4gICAgbWFwW3Nbal1dID0gaiArIDE7XG4gIH1cbiAgcmV0dXJuIGFucztcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZyhcImFiY2FiY2JiXCIpLCAzKTtcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcxKFwiYWJjYWJjYmJcIiksIDMpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZzIoXCJhYmNhYmNiYlwiKSwgMyk7XG4iXX0=