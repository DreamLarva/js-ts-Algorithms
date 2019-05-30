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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQu55uu5qCH5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS85NC7nm67moIflkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksaUJBQWlCLEdBQUcsVUFBVSxJQUFjLEVBQUUsQ0FBUztJQUN2RCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEMsT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztVQUN0QyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrpnZ7otJ/mlbTmlbDmlbDnu4TvvIxhMSwgYTIsIC4uLiwgYW4sIOWSjOS4gOS4quebruagh+aVsO+8jFPjgILnjrDlnKjkvaDmnInkuKTkuKrnrKblj7cgKyDlkowgLeOAguWvueS6juaVsOe7hOS4reeahOS7u+aEj+S4gOS4quaVtOaVsO+8jFxyXG7kvaDpg73lj6/ku6Xku44gKyDmiJYgLeS4remAieaLqeS4gOS4quespuWPt+a3u+WKoOWcqOWJjemdouOAglxyXG5cclxu6L+U5Zue5Y+v5Lul5L2/5pyA57uI5pWw57uE5ZKM5Li655uu5qCH5pWwIFMg55qE5omA5pyJ5re75Yqg56ym5Y+355qE5pa55rOV5pWw44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogbnVtczogWzEsIDEsIDEsIDEsIDFdLCBTOiAzXHJcbui+k+WHujogNVxyXG7op6Pph4o6XHJcblxyXG4tMSsxKzErMSsxID0gM1xyXG4rMS0xKzErMSsxID0gM1xyXG4rMSsxLTErMSsxID0gM1xyXG4rMSsxKzEtMSsxID0gM1xyXG4rMSsxKzErMS0xID0gM1xyXG5cclxu5LiA5YWx5pyJNeenjeaWueazleiuqeacgOe7iOebruagh+WSjOS4ujPjgIJcclxu5rOo5oSPOlxyXG5cclxuMS7mlbDnu4TnmoTplb/luqbkuI3kvJrotoXov4cyMO+8jOW5tuS4lOaVsOe7hOS4reeahOWAvOWFqOS4uuato+aVsOOAglxyXG4yLuWIneWni+eahOaVsOe7hOeahOWSjOS4jeS8mui2hei/hzEwMDDjgIJcclxuMy7kv53or4Hov5Tlm57nmoTmnIDnu4jnu5PmnpzkuLozMuS9jeaVtOaVsOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gU1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgZmluZFRhcmdldFN1bVdheXMgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIFM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDApIHJldHVybiBTID09PSAwID8gMSA6IDA7XHJcblxyXG4gICAgY29uc3QgbnVtID0gbnVtc1swXTtcclxuICAgIGNvbnN0IG51bXNfbmV4dCA9IG51bXMuc2xpY2UoMSk7XHJcblxyXG4gICAgcmV0dXJuIGZpbmRUYXJnZXRTdW1XYXlzKG51bXNfbmV4dCwgUyAtIG51bSlcclxuICAgICAgICArIGZpbmRUYXJnZXRTdW1XYXlzKG51bXNfbmV4dCwgUyArIG51bSk7XHJcbn07XHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBmaW5kVGFyZ2V0U3VtV2F5cyhbMSwgMSwgMSwgMSwgMV0sIDMpLCA1LFxyXG4pO1xyXG5cclxuIl19