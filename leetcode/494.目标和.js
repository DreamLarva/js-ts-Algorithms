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
    return findTargetSumWays(nums_next, S - num)
        + findTargetSumWays(nums_next, S + num);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findTargetSumWays([1, 1, 1, 1, 1], 3), 5);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk0Luebruagh+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDk0Luebruagh+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQ3ZELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoQyxPQUFPLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1VBQ3RDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDM0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4qumdnui0n+aVtOaVsOaVsOe7hO+8jGExLCBhMiwgLi4uLCBhbiwg5ZKM5LiA5Liq55uu5qCH5pWw77yMU+OAgueOsOWcqOS9oOacieS4pOS4quespuWPtyArIOWSjCAt44CC5a+55LqO5pWw57uE5Lit55qE5Lu75oSP5LiA5Liq5pW05pWw77yMXHJcbuS9oOmDveWPr+S7peS7jiArIOaIliAt5Lit6YCJ5oup5LiA5Liq56ym5Y+35re75Yqg5Zyo5YmN6Z2i44CCXHJcblxyXG7ov5Tlm57lj6/ku6Xkvb/mnIDnu4jmlbDnu4TlkozkuLrnm67moIfmlbAgUyDnmoTmiYDmnInmt7vliqDnrKblj7fnmoTmlrnms5XmlbDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBudW1zOiBbMSwgMSwgMSwgMSwgMV0sIFM6IDNcclxu6L6T5Ye6OiA1XHJcbuino+mHijpcclxuXHJcbi0xKzErMSsxKzEgPSAzXHJcbisxLTErMSsxKzEgPSAzXHJcbisxKzEtMSsxKzEgPSAzXHJcbisxKzErMS0xKzEgPSAzXHJcbisxKzErMSsxLTEgPSAzXHJcblxyXG7kuIDlhbHmnIk156eN5pa55rOV6K6p5pyA57uI55uu5qCH5ZKM5Li6M+OAglxyXG7ms6jmhI86XHJcblxyXG4xLuaVsOe7hOeahOmVv+W6puS4jeS8mui2hei/hzIw77yM5bm25LiU5pWw57uE5Lit55qE5YC85YWo5Li65q2j5pWw44CCXHJcbjIu5Yid5aeL55qE5pWw57uE55qE5ZKM5LiN5Lya6LaF6L+HMTAwMOOAglxyXG4zLuS/neivgei/lOWbnueahOacgOe7iOe7k+aenOS4ujMy5L2N5pW05pWw44CCXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBTXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBmaW5kVGFyZ2V0U3VtV2F5cyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSwgUzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFMgPT09IDAgPyAxIDogMDtcclxuXHJcbiAgICBjb25zdCBudW0gPSBudW1zWzBdO1xyXG4gICAgY29uc3QgbnVtc19uZXh0ID0gbnVtcy5zbGljZSgxKTtcclxuXHJcbiAgICByZXR1cm4gZmluZFRhcmdldFN1bVdheXMobnVtc19uZXh0LCBTIC0gbnVtKVxyXG4gICAgICAgICsgZmluZFRhcmdldFN1bVdheXMobnVtc19uZXh0LCBTICsgbnVtKTtcclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZpbmRUYXJnZXRTdW1XYXlzKFsxLCAxLCAxLCAxLCAxXSwgMyksIDUsXHJcbik7XHJcblxyXG4iXX0=