"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

示例:

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
进阶:

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  // 双指针
  let result = Infinity;
  let left = 0;
  let right = 0;
  /**
   * 每次 left 或 right 变动 并不 重新计算 两个下标之间元素的和
   * 而是 left 移动 就 减去 left 下标的值
   * right 移动就 加上 right 下标的值
   * */
  let sum = 0;
  while (right < nums.length) {
    if (sum + nums[right] < s) {
      sum += nums[right];
      right++;
    } else {
      if (right - left < s) result = Math.min(result, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return Number.isFinite(result) ? result : 0;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(minSubArrayLen(100, []), 0);
assert_1.default.strictEqual(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
assert_1.default.strictEqual(
  minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]),
  2
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQVMsRUFBRSxJQUFjO0lBQ3BELE1BQU07SUFDTixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7Ozs7U0FJSztJQUNMLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDO1NBQ1g7YUFBTTtZQUNILElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDO2dCQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNyQyxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNuRCxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quWQq+acicKgbsKg5Liq5q2j5pW05pWw55qE5pWw57uE5ZKM5LiA5Liq5q2j5pW05pWwwqBzIO+8jOaJvuWHuuivpeaVsOe7hOS4rea7oei2s+WFtuWSjCDiiaUgcyDnmoTplb/luqbmnIDlsI/nmoTov57nu63lrZDmlbDnu4TjgILlpoLmnpzkuI3lrZjlnKjnrKblkIjmnaHku7bnmoTov57nu63lrZDmlbDnu4TvvIzov5Tlm54gMOOAglxyXG5cclxu56S65L6LOsKgXHJcblxyXG7ovpPlhaU6IHMgPSA3LCBudW1zID0gWzIsMywxLDIsNCwzXVxyXG7ovpPlh7o6IDJcclxu6Kej6YeKOiDlrZDmlbDnu4TCoFs0LDNdwqDmmK/or6XmnaHku7bkuIvnmoTplb/luqbmnIDlsI/nmoTov57nu63lrZDmlbDnu4TjgIJcclxu6L+b6Zi2OlxyXG5cclxu5aaC5p6c5L2g5bey57uP5a6M5oiQ5LqGTyhuKSDml7bpl7TlpI3mnYLluqbnmoTop6Pms5UsIOivt+WwneivlcKgTyhuIGxvZyBuKSDml7bpl7TlpI3mnYLluqbnmoTop6Pms5XjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21pbmltdW0tc2l6ZS1zdWJhcnJheS1zdW1cclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIG1pblN1YkFycmF5TGVuID0gZnVuY3Rpb24gKHM6IG51bWJlciwgbnVtczogbnVtYmVyW10pIHtcclxuICAgIC8vIOWPjOaMh+mSiFxyXG4gICAgbGV0IHJlc3VsdCA9IEluZmluaXR5O1xyXG4gICAgbGV0IGxlZnQgPSAwO1xyXG4gICAgbGV0IHJpZ2h0ID0gMDtcclxuICAgIC8qKlxyXG4gICAgICog5q+P5qyhIGxlZnQg5oiWIHJpZ2h0IOWPmOWKqCDlubbkuI0g6YeN5paw6K6h566XIOS4pOS4quS4i+agh+S5i+mXtOWFg+e0oOeahOWSjFxyXG4gICAgICog6ICM5pivIGxlZnQg56e75YqoIOWwsSDlh4/ljrsgbGVmdCDkuIvmoIfnmoTlgLxcclxuICAgICAqIHJpZ2h0IOenu+WKqOWwsSDliqDkuIogcmlnaHQg5LiL5qCH55qE5YC8XHJcbiAgICAgKiAqL1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICB3aGlsZSAocmlnaHQgPCBudW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChzdW0gKyBudW1zW3JpZ2h0XSA8IHMpIHtcclxuICAgICAgICAgICAgc3VtICs9IG51bXNbcmlnaHRdO1xyXG4gICAgICAgICAgICByaWdodCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChyaWdodCAtIGxlZnQgPCBzKSByZXN1bHQgPSBNYXRoLm1pbihyZXN1bHQsIHJpZ2h0IC0gbGVmdCArIDEpO1xyXG4gICAgICAgICAgICBzdW0gLT0gbnVtc1tsZWZ0XTtcclxuICAgICAgICAgICAgbGVmdCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHJlc3VsdCkgPyByZXN1bHQgOiAwO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBtaW5TdWJBcnJheUxlbigxMDAsIFtdKSxcclxuICAgIDAsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIG1pblN1YkFycmF5TGVuKDcsIFsyLCAzLCAxLCAyLCA0LCAzXSksXHJcbiAgICAyLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBtaW5TdWJBcnJheUxlbigxNSwgWzUsIDEsIDMsIDUsIDEwLCA3LCA0LCA5LCAyLCA4XSksXHJcbiAgICAyLFxyXG4pO1xyXG4iXX0=
