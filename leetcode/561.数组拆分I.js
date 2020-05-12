"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
/**
 * 双指针 怎么做啊?
 * */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYxLuaVsOe7hOaLhuWIhkkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzU2MS7mlbDnu4Tmi4bliIZJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7OztHQUdHO0FBQ0g7O0tBRUs7QUFDTCxJQUFJLFlBQVksR0FBRyxVQUFVLElBQWM7SUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDMUIsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDeEMsQ0FBQyxJQUFJLENBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumumVv+W6puS4usKgMm7CoOeahOaVsOe7hCwg5L2g55qE5Lu75Yqh5piv5bCG6L+Z5Lqb5pWw5YiG5oiQwqBuIOWvuSwg5L6L5aaCIChhMSwgYjEpLCAoYTIsIGIyKSwgLi4uLCAoYW4sIGJuKSDvvIzkvb/lvpfku44xIOWIsMKgbiDnmoQgbWluKGFpLCBiaSkg5oC75ZKM5pyA5aSn44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogWzEsNCwzLDJdXHJcblxyXG7ovpPlh7o6IDRcclxu6Kej6YeKOiBuIOetieS6jiAyLCDmnIDlpKfmgLvlkozkuLogNCA9IG1pbigxLCAyKSArIG1pbigzLCA0KS5cclxu5o+Q56S6OlxyXG5cclxubsKg5piv5q2j5pW05pWwLOiMg+WbtOWcqCBbMSwgMTAwMDBdLlxyXG7mlbDnu4TkuK3nmoTlhYPntKDojIPlm7TlnKggWy0xMDAwMCwgMTAwMDBdLlxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYXJyYXktcGFydGl0aW9uLWlcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxuLyoqXHJcbiAqIOWPjOaMh+mSiCDmgI7kuYjlgZrllYo/XHJcbiAqICovXHJcbnZhciBhcnJheVBhaXJTdW0gPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcclxuICAgIG51bXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICByZXN1bHQgKz0gbnVtc1tpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGFycmF5UGFpclN1bShbMSwgNCwgMywgMl0pLFxyXG4gICAgNCxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgYXJyYXlQYWlyU3VtKFs2MjE0LCAtMjI5MCwgMjgzMywgLTc5MDhdKSxcclxuICAgIC01MDc1LFxyXG4pO1xyXG4iXX0=
