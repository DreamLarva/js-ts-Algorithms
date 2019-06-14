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
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy7ml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMu5peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsQ0FBUztJQUM5QyxNQUFNLFFBQVEsR0FBOEIsRUFBRSxDQUFDO0lBQy9DLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLHVDQUF1QztRQUN2QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLEVBQUU7WUFDbkMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsR0FBRyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7U0FFekI7UUFFRCxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrlrZfnrKbkuLLvvIzor7fkvaDmib7lh7rlhbbkuK3kuI3lkKvmnInph43lpI3lrZfnrKbnmoQg5pyA6ZW/5a2Q5LiyIOeahOmVv+W6puOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFwiYWJjYWJjYmJcIlxyXG7ovpPlh7o6IDNcclxu6Kej6YeKOiDlm6DkuLrml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLLmmK8gXCJhYmNcIu+8jOaJgOS7peWFtumVv+W6puS4uiAz44CCXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBcImJiYmJiXCJcclxu6L6T5Ye6OiAxXHJcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwiYlwi77yM5omA5Lul5YW26ZW/5bqm5Li6IDHjgIJcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IFwicHd3a2V3XCJcclxu6L6T5Ye6OiAzXHJcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwid2tlXCLvvIzmiYDku6Xlhbbplb/luqbkuLogM+OAglxyXG4gICAgIOivt+azqOaEj++8jOS9oOeahOetlOahiOW/hemhu+aYryDlrZDkuLIg55qE6ZW/5bqm77yMXCJwd2tlXCIg5piv5LiA5Liq5a2Q5bqP5YiX77yM5LiN5piv5a2Q5Liy44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbjogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgbGV0IHN0YXJ0X2luZGV4ID0gLTEsIG1heCA9IDA7IC8vIGlkeOS4uuW9k+WJjeWtkOS4sueahOW8gOWni+S9jee9ri0xXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBzW2ldO1xyXG4gICAgICAgIC8vIOWmguaenOW9k+WJjeWtl+espuWHuueOsOi/h++8jOmCo+S5iOW9k+WJjeWtkOS4sueahOi1t+Wni+S9jee9ruS4uui/meS4quWtl+espuS4iuS4gOasoeWHuueOsOeahOS9jee9risxXHJcbiAgICAgICAgaWYgKGxvY2F0aW9uW2NoYXJhY3Rlcl0gPiBzdGFydF9pbmRleCkge1xyXG4gICAgICAgICAgICBzdGFydF9pbmRleCA9IGxvY2F0aW9uW2NoYXJhY3Rlcl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaSAtIHN0YXJ0X2luZGV4ID4gbWF4KSB7XHJcbiAgICAgICAgICAgIG1heCA9IGkgLSBzdGFydF9pbmRleDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhdGlvbltjaGFyYWN0ZXJdID0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXg7XHJcblxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcoXCJhYmNhYmNiYlwiKSwgMyk7XHJcbiJdfQ==