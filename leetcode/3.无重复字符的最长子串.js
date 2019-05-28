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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy7ml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMu5peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsQ0FBUztJQUM5QyxNQUFNLElBQUksR0FBOEIsRUFBRSxDQUFDO0lBQzNDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxpQkFBaUI7SUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0Isc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtZQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNmLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBRWpCO1FBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBRWYsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM6K+35L2g5om+5Ye65YW25Lit5LiN5ZCr5pyJ6YeN5aSN5a2X56ym55qEIOacgOmVv+WtkOS4siDnmoTplb/luqbjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBcImFiY2FiY2JiXCJcclxu6L6T5Ye6OiAzXHJcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwiYWJjXCLvvIzmiYDku6Xlhbbplb/luqbkuLogM+OAglxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogXCJiYmJiYlwiXHJcbui+k+WHujogMVxyXG7op6Pph4o6IOWboOS4uuaXoOmHjeWkjeWtl+espueahOacgOmVv+WtkOS4suaYryBcImJcIu+8jOaJgOS7peWFtumVv+W6puS4uiAx44CCXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiBcInB3d2tld1wiXHJcbui+k+WHujogM1xyXG7op6Pph4o6IOWboOS4uuaXoOmHjeWkjeWtl+espueahOacgOmVv+WtkOS4suaYryBcIndrZVwi77yM5omA5Lul5YW26ZW/5bqm5Li6IDPjgIJcclxuICAgICDor7fms6jmhI/vvIzkvaDnmoTnrZTmoYjlv4XpobvmmK8g5a2Q5LiyIOeahOmVv+W6pu+8jFwicHdrZVwiIOaYr+S4gOS4quWtkOW6j+WIl++8jOS4jeaYr+WtkOS4suOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgbGVuZ3RoT2ZMb25nZXN0U3Vic3RyaW5nID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gICAgY29uc3QgbG9jczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgbGV0IGlkeCA9IC0xLCBtYXggPSAwOy8vaWR45Li65b2T5YmN5a2Q5Liy55qE5byA5aeL5L2N572uLTFcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8v5aaC5p6c5b2T5YmN5a2X56ym5Ye6546w6L+H77yM6YKj5LmI5b2T5YmN5a2Q5Liy55qE6LW35aeL5L2N572u5Li66L+Z5Liq5a2X56ym5LiK5LiA5qyh5Ye6546w55qE5L2N572uKzFcclxuICAgICAgICBpZiAobG9jc1tzW2ldXSA+IGlkeCkge1xyXG4gICAgICAgICAgICBpZHggPSBsb2NzW3NbaV1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGkgLSBpZHggPiBtYXgpIHtcclxuICAgICAgICAgICAgbWF4ID0gaSAtIGlkeDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NzW3NbaV1dID0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXg7XHJcblxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcoXCJhYmNhYmNiYlwiKSwgMyk7XHJcbiJdfQ==