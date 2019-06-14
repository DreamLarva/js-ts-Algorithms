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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy7ml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMu5peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsQ0FBUztJQUM5QyxNQUFNLFFBQVEsR0FBOEIsRUFBRSxDQUFDO0lBQy9DLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLHVDQUF1QztRQUN2QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLEVBQUU7WUFDbkMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsR0FBRyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7U0FFekI7UUFFRCxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM6K+35L2g5om+5Ye65YW25Lit5LiN5ZCr5pyJ6YeN5aSN5a2X56ym55qEIOacgOmVv+WtkOS4siDnmoTplb/luqbjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogXCJhYmNhYmNiYlwiXG7ovpPlh7o6IDNcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwiYWJjXCLvvIzmiYDku6Xlhbbplb/luqbkuLogM+OAglxu56S65L6LIDI6XG5cbui+k+WFpTogXCJiYmJiYlwiXG7ovpPlh7o6IDFcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwiYlwi77yM5omA5Lul5YW26ZW/5bqm5Li6IDHjgIJcbuekuuS+iyAzOlxuXG7ovpPlhaU6IFwicHd3a2V3XCJcbui+k+WHujogM1xu6Kej6YeKOiDlm6DkuLrml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLLmmK8gXCJ3a2VcIu+8jOaJgOS7peWFtumVv+W6puS4uiAz44CCXG4gICAgIOivt+azqOaEj++8jOS9oOeahOetlOahiOW/hemhu+aYryDlrZDkuLIg55qE6ZW/5bqm77yMXCJwd2tlXCIg5piv5LiA5Liq5a2Q5bqP5YiX77yM5LiN5piv5a2Q5Liy44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gICAgY29uc3QgbG9jYXRpb246IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgICBsZXQgc3RhcnRfaW5kZXggPSAtMSwgbWF4ID0gMDsgLy8gaWR45Li65b2T5YmN5a2Q5Liy55qE5byA5aeL5L2N572uLTFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gc1tpXTtcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN5a2X56ym5Ye6546w6L+H77yM6YKj5LmI5b2T5YmN5a2Q5Liy55qE6LW35aeL5L2N572u5Li66L+Z5Liq5a2X56ym5LiK5LiA5qyh5Ye6546w55qE5L2N572uKzFcbiAgICAgICAgaWYgKGxvY2F0aW9uW2NoYXJhY3Rlcl0gPiBzdGFydF9pbmRleCkge1xuICAgICAgICAgICAgc3RhcnRfaW5kZXggPSBsb2NhdGlvbltjaGFyYWN0ZXJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgLSBzdGFydF9pbmRleCA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0gaSAtIHN0YXJ0X2luZGV4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhdGlvbltjaGFyYWN0ZXJdID0gaTtcbiAgICB9XG4gICAgcmV0dXJuIG1heDtcblxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwobGVuZ3RoT2ZMb25nZXN0U3Vic3RyaW5nKFwiYWJjYWJjYmJcIiksIDMpO1xuIl19