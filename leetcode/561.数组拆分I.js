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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYxLuaVsOe7hOaLhuWIhkkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzU2MS7mlbDnu4Tmi4bliIZJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7OztHQUdHO0FBQ0g7O0tBRUs7QUFDTCxJQUFJLFlBQVksR0FBRyxVQUFVLElBQWM7SUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFDRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumumVv+W6puS4usKgMm7CoOeahOaVsOe7hCwg5L2g55qE5Lu75Yqh5piv5bCG6L+Z5Lqb5pWw5YiG5oiQwqBuIOWvuSwg5L6L5aaCIChhMSwgYjEpLCAoYTIsIGIyKSwgLi4uLCAoYW4sIGJuKSDvvIzkvb/lvpfku44xIOWIsMKgbiDnmoQgbWluKGFpLCBiaSkg5oC75ZKM5pyA5aSn44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFsxLDQsMywyXVxuXG7ovpPlh7o6IDRcbuino+mHijogbiDnrYnkuo4gMiwg5pyA5aSn5oC75ZKM5Li6IDQgPSBtaW4oMSwgMikgKyBtaW4oMywgNCkuXG7mj5DnpLo6XG5cbm7CoOaYr+ato+aVtOaVsCzojIPlm7TlnKggWzEsIDEwMDAwXS5cbuaVsOe7hOS4reeahOWFg+e0oOiMg+WbtOWcqCBbLTEwMDAwLCAxMDAwMF0uXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9hcnJheS1wYXJ0aXRpb24taVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuLyoqXG4gKiDlj4zmjIfpkogg5oCO5LmI5YGa5ZWKP1xuICogKi9cbnZhciBhcnJheVBhaXJTdW0gPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcbiAgbnVtcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGxldCByZXN1bHQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXN1bHQgKz0gbnVtc1tpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChhcnJheVBhaXJTdW0oWzEsIDQsIDMsIDJdKSwgNCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoYXJyYXlQYWlyU3VtKFs2MjE0LCAtMjI5MCwgMjgzMywgLTc5MDhdKSwgLTUwNzUpO1xuIl19