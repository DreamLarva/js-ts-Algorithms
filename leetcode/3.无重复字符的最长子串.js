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
    const locs = {};
    let idx = -1, max = 0; //idx为当前子串的开始位置-1
    for (let i = 0; i < s.length; i++) {
        //如果当前字符出现过，那么当前子串的起始位置为这个字符上一次出现的位置+1
        if (locs[s[i]] > idx) {
            idx = locs[s[i]];
        }
        if (i - idx > max) {
            max = i - idx;
        }
        locs[s[i]] = i;
    }
    return max;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy7ml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMu5peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsQ0FBUztJQUM5QyxNQUFNLElBQUksR0FBOEIsRUFBRSxDQUFDO0lBQzNDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxpQkFBaUI7SUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0Isc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtZQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNmLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBRWpCO1FBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBRWYsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWtl+espuS4su+8jOivt+S9oOaJvuWHuuWFtuS4reS4jeWQq+aciemHjeWkjeWtl+espueahCDmnIDplb/lrZDkuLIg55qE6ZW/5bqm44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFwiYWJjYWJjYmJcIlxu6L6T5Ye6OiAzXG7op6Pph4o6IOWboOS4uuaXoOmHjeWkjeWtl+espueahOacgOmVv+WtkOS4suaYryBcImFiY1wi77yM5omA5Lul5YW26ZW/5bqm5Li6IDPjgIJcbuekuuS+iyAyOlxuXG7ovpPlhaU6IFwiYmJiYmJcIlxu6L6T5Ye6OiAxXG7op6Pph4o6IOWboOS4uuaXoOmHjeWkjeWtl+espueahOacgOmVv+WtkOS4suaYryBcImJcIu+8jOaJgOS7peWFtumVv+W6puS4uiAx44CCXG7npLrkvosgMzpcblxu6L6T5YWlOiBcInB3d2tld1wiXG7ovpPlh7o6IDNcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwid2tlXCLvvIzmiYDku6Xlhbbplb/luqbkuLogM+OAglxuICAgICDor7fms6jmhI/vvIzkvaDnmoTnrZTmoYjlv4XpobvmmK8g5a2Q5LiyIOeahOmVv+W6pu+8jFwicHdrZVwiIOaYr+S4gOS4quWtkOW6j+WIl++8jOS4jeaYr+WtkOS4suOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbGVuZ3RoT2ZMb25nZXN0U3Vic3RyaW5nID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICAgIGNvbnN0IGxvY3M6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgICBsZXQgaWR4ID0gLTEsIG1heCA9IDA7Ly9pZHjkuLrlvZPliY3lrZDkuLLnmoTlvIDlp4vkvY3nva4tMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL+WmguaenOW9k+WJjeWtl+espuWHuueOsOi/h++8jOmCo+S5iOW9k+WJjeWtkOS4sueahOi1t+Wni+S9jee9ruS4uui/meS4quWtl+espuS4iuS4gOasoeWHuueOsOeahOS9jee9risxXG4gICAgICAgIGlmIChsb2NzW3NbaV1dID4gaWR4KSB7XG4gICAgICAgICAgICBpZHggPSBsb2NzW3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgLSBpZHggPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IGkgLSBpZHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxvY3Nbc1tpXV0gPSBpO1xuICAgIH1cbiAgICByZXR1cm4gbWF4O1xuXG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcoXCJhYmNhYmNiYlwiKSwgMyk7XG4iXX0=