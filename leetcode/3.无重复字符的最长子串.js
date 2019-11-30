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
    /**
     * 为何起始的 index 是 -1 呢?
     * 因为 index 从 0 开始, max 的值是 i - start_index
     * 是 i 和 start_index 的相对距离 如果从 start_index 从 0 开始 第一个字符 的相对距离就是 0 而不是 1 了
     * */
    let start_index = -1, max = 0;
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        // 如果当前字符出现过，那么当前子串的起始位置为这个字符上一次出现的位置 + 1
        // 更简洁的说 就是上次重复的字符后一位 到这次出现的字符(包括的)长度
        if (location[character] > start_index) {
            start_index = location[character];
        }
        max = Math.max(max, i - start_index);
        location[character] = i;
    }
    return max;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
assert_1.default.strictEqual(lengthOfLongestSubstring("bbbbb"), 1);
assert_1.default.strictEqual(lengthOfLongestSubstring("pwwkew"), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy7ml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMu5peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsQ0FBUztJQUM5QyxNQUFNLFFBQVEsR0FBOEIsRUFBRSxDQUFDO0lBQy9DOzs7O1NBSUs7SUFDTCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2Qix5Q0FBeUM7UUFDekMscUNBQXFDO1FBQ3JDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFdBQVcsRUFBRTtZQUNuQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUVwQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrlrZfnrKbkuLLvvIzor7fkvaDmib7lh7rlhbbkuK3kuI3lkKvmnInph43lpI3lrZfnrKbnmoQg5pyA6ZW/5a2Q5LiyIOeahOmVv+W6puOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFwiYWJjYWJjYmJcIlxyXG7ovpPlh7o6IDNcclxu6Kej6YeKOiDlm6DkuLrml6Dph43lpI3lrZfnrKbnmoTmnIDplb/lrZDkuLLmmK8gXCJhYmNcIu+8jOaJgOS7peWFtumVv+W6puS4uiAz44CCXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBcImJiYmJiXCJcclxu6L6T5Ye6OiAxXHJcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwiYlwi77yM5omA5Lul5YW26ZW/5bqm5Li6IDHjgIJcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IFwicHd3a2V3XCJcclxu6L6T5Ye6OiAzXHJcbuino+mHijog5Zug5Li65peg6YeN5aSN5a2X56ym55qE5pyA6ZW/5a2Q5Liy5pivIFwid2tlXCLvvIzmiYDku6Xlhbbplb/luqbkuLogM+OAglxyXG4gICAgIOivt+azqOaEj++8jOS9oOeahOetlOahiOW/hemhu+aYryDlrZDkuLIg55qE6ZW/5bqm77yMXCJwd2tlXCIg5piv5LiA5Liq5a2Q5bqP5YiX77yM5LiN5piv5a2Q5Liy44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBsZW5ndGhPZkxvbmdlc3RTdWJzdHJpbmcgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbjogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuLrkvZXotbflp4vnmoQgaW5kZXgg5pivIC0xIOWRoj9cclxuICAgICAqIOWboOS4uiBpbmRleCDku44gMCDlvIDlp4ssIG1heCDnmoTlgLzmmK8gaSAtIHN0YXJ0X2luZGV4XHJcbiAgICAgKiDmmK8gaSDlkowgc3RhcnRfaW5kZXgg55qE55u45a+56Led56a7IOWmguaenOS7jiBzdGFydF9pbmRleCDku44gMCDlvIDlp4sg56ys5LiA5Liq5a2X56ymIOeahOebuOWvuei3neemu+WwseaYryAwIOiAjOS4jeaYryAxIOS6hlxyXG4gICAgICogKi9cclxuICAgIGxldCBzdGFydF9pbmRleCA9IC0xLCBtYXggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gc1tpXTtcclxuICAgICAgICAvLyDlpoLmnpzlvZPliY3lrZfnrKblh7rnjrDov4fvvIzpgqPkuYjlvZPliY3lrZDkuLLnmoTotbflp4vkvY3nva7kuLrov5nkuKrlrZfnrKbkuIrkuIDmrKHlh7rnjrDnmoTkvY3nva4gKyAxXHJcbiAgICAgICAgLy8g5pu0566A5rSB55qE6K+0IOWwseaYr+S4iuasoemHjeWkjeeahOWtl+espuWQjuS4gOS9jSDliLDov5nmrKHlh7rnjrDnmoTlrZfnrKYo5YyF5ous55qEKemVv+W6plxyXG4gICAgICAgIGlmIChsb2NhdGlvbltjaGFyYWN0ZXJdID4gc3RhcnRfaW5kZXgpIHtcclxuICAgICAgICAgICAgc3RhcnRfaW5kZXggPSBsb2NhdGlvbltjaGFyYWN0ZXJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LGkgLSBzdGFydF9pbmRleCk7XHJcblxyXG4gICAgICAgIGxvY2F0aW9uW2NoYXJhY3Rlcl0gPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1heDtcclxuXHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZyhcImFiY2FiY2JiXCIpLCAzKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZyhcImJiYmJiXCIpLCAxKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTG9uZ2VzdFN1YnN0cmluZyhcInB3d2tld1wiKSwgMyk7XHJcbiJdfQ==