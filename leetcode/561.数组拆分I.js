"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

示例 1:

输入: [1,4,3,2]

输出: 4
解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
提示:

n 是正整数,范围在 [1, 10000].
数组中的元素范围在 [-10000, 10000].

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/array-partition-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i];
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(arrayPairSum([1, 4, 3, 2]), 4);
assert_1.default.strictEqual(arrayPairSum([6214, -2290, 2833, -7908]), -5075);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYxLuaVsOe7hOaLhuWIhkkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzU2MS7mlbDnu4Tmi4bliIZJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxJQUFjO0lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzFCLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLENBQUMsSUFBSSxDQUNSLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprplb/luqbkuLrCoDJuwqDnmoTmlbDnu4QsIOS9oOeahOS7u+WKoeaYr+Wwhui/meS6m+aVsOWIhuaIkMKgbiDlr7ksIOS+i+WmgiAoYTEsIGIxKSwgKGEyLCBiMiksIC4uLiwgKGFuLCBibikg77yM5L2/5b6X5LuOMSDliLDCoG4g55qEIG1pbihhaSwgYmkpIOaAu+WSjOacgOWkp+OAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFsxLDQsMywyXVxyXG5cclxu6L6T5Ye6OiA0XHJcbuino+mHijogbiDnrYnkuo4gMiwg5pyA5aSn5oC75ZKM5Li6IDQgPSBtaW4oMSwgMikgKyBtaW4oMywgNCkuXHJcbuaPkOekujpcclxuXHJcbm7CoOaYr+ato+aVtOaVsCzojIPlm7TlnKggWzEsIDEwMDAwXS5cclxu5pWw57uE5Lit55qE5YWD57Sg6IyD5Zu05ZyoIFstMTAwMDAsIDEwMDAwXS5cclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2FycmF5LXBhcnRpdGlvbi1pXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBhcnJheVBhaXJTdW0gPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcclxuICAgIG51bXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICByZXN1bHQgKz0gbnVtc1tpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGFycmF5UGFpclN1bShbMSwgNCwgMywgMl0pLFxyXG4gICAgNCxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgYXJyYXlQYWlyU3VtKFs2MjE0LCAtMjI5MCwgMjgzMywgLTc5MDhdKSxcclxuICAgIC01MDc1LFxyXG4pO1xyXG4iXX0=