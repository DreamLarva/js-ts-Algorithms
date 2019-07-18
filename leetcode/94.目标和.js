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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQu55uu5qCH5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS85NC7nm67moIflkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksaUJBQWlCLEdBQUcsVUFBVSxJQUFjLEVBQUUsQ0FBUztJQUN2RCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEMsT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztVQUN0QyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq6Z2e6LSf5pW05pWw5pWw57uE77yMYTEsIGEyLCAuLi4sIGFuLCDlkozkuIDkuKrnm67moIfmlbDvvIxT44CC546w5Zyo5L2g5pyJ5Lik5Liq56ym5Y+3ICsg5ZKMIC3jgILlr7nkuo7mlbDnu4TkuK3nmoTku7vmhI/kuIDkuKrmlbTmlbDvvIxcbuS9oOmDveWPr+S7peS7jiArIOaIliAt5Lit6YCJ5oup5LiA5Liq56ym5Y+35re75Yqg5Zyo5YmN6Z2i44CCXG5cbui/lOWbnuWPr+S7peS9v+acgOe7iOaVsOe7hOWSjOS4uuebruagh+aVsCBTIOeahOaJgOaciea3u+WKoOespuWPt+eahOaWueazleaVsOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBudW1zOiBbMSwgMSwgMSwgMSwgMV0sIFM6IDNcbui+k+WHujogNVxu6Kej6YeKOlxuXG4tMSsxKzErMSsxID0gM1xuKzEtMSsxKzErMSA9IDNcbisxKzEtMSsxKzEgPSAzXG4rMSsxKzEtMSsxID0gM1xuKzErMSsxKzEtMSA9IDNcblxu5LiA5YWx5pyJNeenjeaWueazleiuqeacgOe7iOebruagh+WSjOS4ujPjgIJcbuazqOaEjzpcblxuMS7mlbDnu4TnmoTplb/luqbkuI3kvJrotoXov4cyMO+8jOW5tuS4lOaVsOe7hOS4reeahOWAvOWFqOS4uuato+aVsOOAglxuMi7liJ3lp4vnmoTmlbDnu4TnmoTlkozkuI3kvJrotoXov4cxMDAw44CCXG4zLuS/neivgei/lOWbnueahOacgOe7iOe7k+aenOS4ujMy5L2N5pW05pWw44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHBhcmFtIHtudW1iZXJ9IFNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGZpbmRUYXJnZXRTdW1XYXlzID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCBTOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFMgPT09IDAgPyAxIDogMDtcblxuICAgIGNvbnN0IG51bSA9IG51bXNbMF07XG4gICAgY29uc3QgbnVtc19uZXh0ID0gbnVtcy5zbGljZSgxKTtcblxuICAgIHJldHVybiBmaW5kVGFyZ2V0U3VtV2F5cyhudW1zX25leHQsIFMgLSBudW0pXG4gICAgICAgICsgZmluZFRhcmdldFN1bVdheXMobnVtc19uZXh0LCBTICsgbnVtKTtcbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBmaW5kVGFyZ2V0U3VtV2F5cyhbMSwgMSwgMSwgMSwgMV0sIDMpLCA1LFxuKTtcblxuIl19