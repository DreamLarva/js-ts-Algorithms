"use strict";
/*
给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:

输入: 27
输出: true
示例 2:

输入: 0
输出: false
示例 3:

输入: 9
输出: true
示例 4:

输入: 45
输出: false
进阶：
你能不使用循环或者递归来完成本题吗？
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  /**
   * 通过查看相关解析，发现了这个解法，用到了数论的知识，3的幂次的质因子只有3，而所给出的n如果也是3的幂次，
   * 故而题目中所给整数范围内最大的3的幂次的因子只能是3的幂次，1162261467是3的19次幂，是整数范围内最大的3的幂次
   * 所以多余所有非0 的质数 都能使用这个办法
   * */
  return n > 0 && 1162261467 % n === 0;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isPowerOfThree(9), true);
assert_1.default.strictEqual(isPowerOfThree(10), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI2LjPnmoTluYIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMyNi4z55qE5bmCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBUztJQUN0Qzs7OztTQUlLO0lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsO+8jOWGmeS4gOS4quWHveaVsOadpeWIpOaWreWug+aYr+WQpuaYryAzIOeahOW5guasoeaWueOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiAyN1xu6L6T5Ye6OiB0cnVlXG7npLrkvosgMjpcblxu6L6T5YWlOiAwXG7ovpPlh7o6IGZhbHNlXG7npLrkvosgMzpcblxu6L6T5YWlOiA5XG7ovpPlh7o6IHRydWVcbuekuuS+iyA0OlxuXG7ovpPlhaU6IDQ1XG7ovpPlh7o6IGZhbHNlXG7ov5vpmLbvvJpcbuS9oOiDveS4jeS9v+eUqOW+queOr+aIluiAhemAkuW9kuadpeWujOaIkOacrOmimOWQl++8n1xuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaXNQb3dlck9mVGhyZWUgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gIC8qKlxuICAgKiDpgJrov4fmn6XnnIvnm7jlhbPop6PmnpDvvIzlj5HnjrDkuobov5nkuKrop6Pms5XvvIznlKjliLDkuobmlbDorrrnmoTnn6Xor4bvvIwz55qE5bmC5qyh55qE6LSo5Zug5a2Q5Y+q5pyJM++8jOiAjOaJgOe7meWHuueahG7lpoLmnpzkuZ/mmK8z55qE5bmC5qyh77yMXG4gICAqIOaVheiAjOmimOebruS4reaJgOe7meaVtOaVsOiMg+WbtOWGheacgOWkp+eahDPnmoTluYLmrKHnmoTlm6DlrZDlj6rog73mmK8z55qE5bmC5qyh77yMMTE2MjI2MTQ2N+aYrzPnmoQxOeasoeW5gu+8jOaYr+aVtOaVsOiMg+WbtOWGheacgOWkp+eahDPnmoTluYLmrKFcbiAgICog5omA5Lul5aSa5L2Z5omA5pyJ6Z2eMCDnmoTotKjmlbAg6YO96IO95L2/55So6L+Z5Liq5Yqe5rOVXG4gICAqICovXG4gIHJldHVybiBuID4gMCAmJiAxMTYyMjYxNDY3ICUgbiA9PT0gMDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNQb3dlck9mVGhyZWUoOSksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzUG93ZXJPZlRocmVlKDEwKSwgZmFsc2UpO1xuIl19
