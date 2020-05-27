"use strict";
/*
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，
你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例 1:

输入: nums: [1, 1, 1, 1, 1], S: 3
输出: 5
解释:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
注意:

1.数组的长度不会超过20，并且数组中的值全为正数。
2.初始的数组的和不会超过1000。
3.保证返回的最终结果为32位整数。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    if (nums.length === 0)
        return S === 0 ? 1 : 0;
    const num = nums[0];
    const nums_next = nums.slice(1);
    return (findTargetSumWays(nums_next, S - num) +
        findTargetSumWays(nums_next, S + num));
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findTargetSumWays([1, 1, 1, 1, 1], 3), 5);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk0Luebruagh+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDk0Luebruagh+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQ3pELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoQyxPQUFPLENBQ0wsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDckMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FDdEMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrpnZ7otJ/mlbTmlbDmlbDnu4TvvIxhMSwgYTIsIC4uLiwgYW4sIOWSjOS4gOS4quebruagh+aVsO+8jFPjgILnjrDlnKjkvaDmnInkuKTkuKrnrKblj7cgKyDlkowgLeOAguWvueS6juaVsOe7hOS4reeahOS7u+aEj+S4gOS4quaVtOaVsO+8jFxu5L2g6YO95Y+v5Lul5LuOICsg5oiWIC3kuK3pgInmi6nkuIDkuKrnrKblj7fmt7vliqDlnKjliY3pnaLjgIJcblxu6L+U5Zue5Y+v5Lul5L2/5pyA57uI5pWw57uE5ZKM5Li655uu5qCH5pWwIFMg55qE5omA5pyJ5re75Yqg56ym5Y+355qE5pa55rOV5pWw44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IG51bXM6IFsxLCAxLCAxLCAxLCAxXSwgUzogM1xu6L6T5Ye6OiA1XG7op6Pph4o6XG5cbi0xKzErMSsxKzEgPSAzXG4rMS0xKzErMSsxID0gM1xuKzErMS0xKzErMSA9IDNcbisxKzErMS0xKzEgPSAzXG4rMSsxKzErMS0xID0gM1xuXG7kuIDlhbHmnIk156eN5pa55rOV6K6p5pyA57uI55uu5qCH5ZKM5Li6M+OAglxu5rOo5oSPOlxuXG4xLuaVsOe7hOeahOmVv+W6puS4jeS8mui2hei/hzIw77yM5bm25LiU5pWw57uE5Lit55qE5YC85YWo5Li65q2j5pWw44CCXG4yLuWIneWni+eahOaVsOe7hOeahOWSjOS4jeS8mui2hei/hzEwMDDjgIJcbjMu5L+d6K+B6L+U5Zue55qE5pyA57uI57uT5p6c5Li6MzLkvY3mlbTmlbDjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0gU1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgZmluZFRhcmdldFN1bVdheXMgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIFM6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFMgPT09IDAgPyAxIDogMDtcblxuICBjb25zdCBudW0gPSBudW1zWzBdO1xuICBjb25zdCBudW1zX25leHQgPSBudW1zLnNsaWNlKDEpO1xuXG4gIHJldHVybiAoXG4gICAgZmluZFRhcmdldFN1bVdheXMobnVtc19uZXh0LCBTIC0gbnVtKSArXG4gICAgZmluZFRhcmdldFN1bVdheXMobnVtc19uZXh0LCBTICsgbnVtKVxuICApO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kVGFyZ2V0U3VtV2F5cyhbMSwgMSwgMSwgMSwgMV0sIDMpLCA1KTtcbiJdfQ==