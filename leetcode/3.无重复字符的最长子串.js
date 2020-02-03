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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy7ml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMu5peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsQ0FBUztJQUM5QyxNQUFNLFFBQVEsR0FBOEIsRUFBRSxDQUFDO0lBQy9DLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLHVDQUF1QztRQUN2QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLEVBQUU7WUFDbkMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsR0FBRyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7U0FFekI7UUFFRCxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0tBU0s7QUFDTCxJQUFJLHlCQUF5QixHQUFHLFVBQVUsQ0FBUztJQUMvQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25CLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNuQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7WUFDZixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QjthQUNJO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0tBQ0o7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7S0FTSztBQUNMLElBQUkseUJBQXlCLEdBQUcsVUFBVSxDQUFTO0lBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osTUFBTSxHQUFHLEdBQTZCLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtJQUN2RSxpQ0FBaUM7SUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckI7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQztBQU1GLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quWtl+espuS4su+8jOivt+S9oOaJvuWHuuWFtuS4reS4jeWQq+aciemHjeWkjeWtl+espueahCDmnIDplb/lrZDkuLIg55qE6ZW/5bqm44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogXCJhYmNhYmNiYlwiXHJcbui+k+WHujogM1xyXG7op6Pph4o6IOWboOS4uuaXoOmHjeWkjeWtl+espueahOacgOmVv+WtkOS4suaYryBcImFiY1wi77yM5omA5Lul5YW26ZW/5bqm5Li6IDPjgIJcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFwiYmJiYmJcIlxyXG7ovpPlh7o6IDFcclxu6Kej6YeKOiDlm6DkuLrml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLLmmK8gXCJiXCLvvIzmiYDku6Xlhbbplb/luqbkuLogMeOAglxyXG7npLrkvosgMzpcclxuXHJcbui+k+WFpTogXCJwd3drZXdcIlxyXG7ovpPlh7o6IDNcclxu6Kej6YeKOiDlm6DkuLrml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLLmmK8gXCJ3a2VcIu+8jOaJgOS7peWFtumVv+W6puS4uiAz44CCXHJcbiAgICAg6K+35rOo5oSP77yM5L2g55qE562U5qGI5b+F6aG75pivIOWtkOS4siDnmoTplb/luqbvvIxcInB3a2VcIiDmmK/kuIDkuKrlrZDluo/liJfvvIzkuI3mmK/lrZDkuLLjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICBsZXQgc3RhcnRfaW5kZXggPSAtMSwgbWF4ID0gMDsgLy8gaWR45Li65b2T5YmN5a2Q5Liy55qE5byA5aeL5L2N572uLTFcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IHNbaV07XHJcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN5a2X56ym5Ye6546w6L+H77yM6YKj5LmI5b2T5YmN5a2Q5Liy55qE6LW35aeL5L2N572u5Li66L+Z5Liq5a2X56ym5LiK5LiA5qyh5Ye6546w55qE5L2N572uKzFcclxuICAgICAgICBpZiAobG9jYXRpb25bY2hhcmFjdGVyXSA+IHN0YXJ0X2luZGV4KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0X2luZGV4ID0gbG9jYXRpb25bY2hhcmFjdGVyXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpIC0gc3RhcnRfaW5kZXggPiBtYXgpIHtcclxuICAgICAgICAgICAgbWF4ID0gaSAtIHN0YXJ0X2luZGV4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvY2F0aW9uW2NoYXJhY3Rlcl0gPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1heDtcclxuXHJcbn07XHJcblxyXG4vKipcclxuICog5ruR5Yqo56qX5Y+jXHJcbiAqIOa7keWKqOeql+WPo+aYr+aVsOe7hC/lrZfnrKbkuLLpl67popjkuK3luLjnlKjnmoTmir3osaHmpoLlv7XjgIJcclxuICog56qX5Y+j6YCa5bi45piv5Zyo5pWw57uEL+Wtl+espuS4suS4reeUseW8gOWni+WSjOe7k+adn+e0ouW8leWumuS5ieeahOS4gOezu+WIl+WFg+e0oOeahOmbhuWQiO+8jOWNsyBbaSwgainvvIjlt6bpl63vvIzlj7PlvIDvvInjgIJcclxuICog6ICM5ruR5Yqo56qX5Y+j5piv5Y+v5Lul5bCG5Lik5Liq6L6555WM5ZCR5p+Q5LiA5pa55ZCR4oCc5ruR5Yqo4oCd55qE56qX5Y+j44CC5L6L5aaC77yM5oiR5Lus5bCGIFtpLCBqKSDlkJHlj7Pmu5HliqggMSDkuKrlhYPntKDvvIzliJnlroPlsIblj5jkuLogW2krMSwgaisxKe+8iOW3pumXre+8jOWPs+W8gO+8ieOAglxyXG4gKlxyXG4gKiDlm57liLDmiJHku6znmoTpl67popjvvIzmiJHku6zkvb/nlKggSGFzaFNldCDlsIblrZfnrKblrZjlgqjlnKjlvZPliY3nqpflj6MgW2ksIGopW2ksainvvIjmnIDliJ0gaiA9IGnvvInkuK3jgIJcclxuICog54S25ZCO5oiR5Lus5ZCR5Y+z5L6n5ruR5Yqo57Si5byVIGrvvIzlpoLmnpzlroPkuI3lnKggSGFzaFNldCDkuK3vvIzmiJHku6zkvJrnu6fnu63mu5HliqggauOAguebtOWIsCBzW2pdIOW3sue7j+WtmOWcqOS6jiBIYXNoU2V0IOS4reOAglxyXG4gKiDmraTml7bvvIzmiJHku6zmib7liLDnmoTmsqHmnInph43lpI3lrZfnrKbnmoTmnIDplb/lrZDlrZfnrKbkuLLlsIbkvJrku6XntKLlvJUgaSDlvIDlpLTjgILlpoLmnpzmiJHku6zlr7nmiYDmnInnmoQgaSDov5nmoLflgZrvvIzlsLHlj6/ku6XlvpfliLDnrZTmoYjjgIJcclxuICogKi9cclxudmFyIGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZzEgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBuID0gcy5sZW5ndGg7XHJcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XHJcbiAgICBsZXQgYW5zID0gMCwgaSA9IDAsIGogPSAwO1xyXG4gICAgd2hpbGUgKGkgPCBuICYmIGogPCBuKSB7XHJcbiAgICAgICAgLy8gdHJ5IHRvIGV4dGVuZCB0aGUgcmFuZ2UgW2ksIGpdXHJcbiAgICAgICAgaWYgKCFzZXQuaGFzKHNbal0pKXtcclxuICAgICAgICAgICAgc2V0LmFkZChzW2orK10pO1xyXG4gICAgICAgICAgICBhbnMgPSBNYXRoLm1heChhbnMsIGogLSBpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldC5kZWxldGUoc1tpKytdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYW5zO1xyXG59O1xyXG5cclxuLyoqXHJcbiAxLiDlrpjmlrnmnIDkvJjop6Mg5LyY5YyW55qEIOa7keWKqOeql+WPo1xyXG5cclxuIOS4iui/sOeahOaWueazleacgOWkmumcgOimgeaJp+ihjCAybiDkuKrmraXpqqTjgILkuovlrp7kuIrvvIzlroPlj6/ku6Xooqvov5vkuIDmraXkvJjljJbkuLrku4XpnIDopoEgblxyXG4g5Liq5q2l6aqk44CC5oiR5Lus5Y+v5Lul5a6a5LmJ5a2X56ym5Yiw57Si5byV55qE5pig5bCE77yM6ICM5LiN5piv5L2/55So6ZuG5ZCI5p2l5Yik5pat5LiA5Liq5a2X56ym5piv5ZCm5a2Y5Zyo44CCXHJcbiDlvZPmiJHku6zmib7liLDph43lpI3nmoTlrZfnrKbml7bvvIzmiJHku6zlj6/ku6Xnq4vljbPot7Pov4for6Xnqpflj6PjgIJcclxuXHJcbiDkuZ/lsLHmmK/or7TvvIzlpoLmnpwgc1tqXSDlnKggW2ksIGopIOiMg+WbtOWGheacieS4jiBqJyDph43lpI3nmoTlrZfnrKbvvIzmiJHku6zkuI3pnIDopoHpgJDmuJDlop7liqAgaVxyXG4g44CCIOaIkeS7rOWPr+S7peebtOaOpei3s+i/hyBbae+8jGonXSDojIPlm7TlhoXnmoTmiYDmnInlhYPntKDvvIzlubblsIYgaSDlj5jkuLogaicgKyAx44CCXHJcbiAqICovXHJcbnZhciBsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcyID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gICAgY29uc3QgbiA9IHMubGVuZ3RoO1xyXG4gICAgbGV0IGFucyA9IDA7XHJcbiAgICBjb25zdCBtYXA6eyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9OyAvLyBjdXJyZW50IGluZGV4IG9mIGNoYXJhY3RlclxyXG4gICAgLy8gdHJ5IHRvIGV4dGVuZCB0aGUgcmFuZ2UgW2ksIGpdXHJcbiAgICBmb3IgKGxldCBqID0gMCwgaSA9IDA7IGogPCBuOyBqKyspIHtcclxuICAgICAgICBpID0gTWF0aC5tYXgobWFwW3Nbal1dIHx8IDAsIGkpO1xyXG4gICAgICAgIGFucyA9IE1hdGgubWF4KGFucywgaiAtIGkgKyAxKTtcclxuICAgICAgICBtYXBbc1tqXV0gPSBqICsgMTtcclxuICAgIH1cclxuICAgIHJldHVybiBhbnM7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcoXCJhYmNhYmNiYlwiKSwgMyk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcxKFwiYWJjYWJjYmJcIiksIDMpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwobGVuZ3RoT2ZMb25nZXN0U3Vic3RyaW5nMihcImFiY2FiY2JiXCIpLCAzKTtcclxuIl19