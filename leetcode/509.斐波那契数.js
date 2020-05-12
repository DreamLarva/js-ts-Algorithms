"use strict";
/*
斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
给定 N，计算 F(N)。



示例 1：

输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
示例 2：

输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
示例 3：

输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.


提示：

0 ≤ N ≤ 30
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  return ~~(
    5 ** 0.5 *
    0.2 *
    (((1 + 5 ** 0.5) / 2) ** N - ((1 - 5 ** 0.5) / 2) ** N)
  );
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(fib(4), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTA5LuaWkOazoumCo+WlkeaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTA5LuaWkOazoumCo+WlkeaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBUztJQUN6QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFGLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7mlpDms6LpgqPlpZHmlbDvvIzpgJrluLjnlKggRihuKSDooajnpLrvvIzlvaLmiJDnmoTluo/liJfnp7DkuLrmlpDms6LpgqPlpZHmlbDliJfjgILor6XmlbDliJfnlLEgMCDlkowgMSDlvIDlp4vvvIzlkI7pnaLnmoTmr4/kuIDpobnmlbDlrZfpg73mmK/liY3pnaLkuKTpobnmlbDlrZfnmoTlkozjgILkuZ/lsLHmmK/vvJpcclxuXHJcbkYoMCkgPSAwLCAgIEYoMSkgPSAxXHJcbkYoTikgPSBGKE4gLSAxKSArIEYoTiAtIDIpLCDlhbbkuK0gTiA+IDEuXHJcbue7meWumiBO77yM6K6h566XIEYoTinjgIJcclxuXHJcblxyXG5cclxu56S65L6LIDHvvJpcclxuXHJcbui+k+WFpe+8mjJcclxu6L6T5Ye677yaMVxyXG7op6Pph4rvvJpGKDIpID0gRigxKSArIEYoMCkgPSAxICsgMCA9IDEuXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJozXHJcbui+k+WHuu+8mjJcclxu6Kej6YeK77yaRigzKSA9IEYoMikgKyBGKDEpID0gMSArIDEgPSAyLlxyXG7npLrkvosgM++8mlxyXG5cclxu6L6T5YWl77yaNFxyXG7ovpPlh7rvvJozXHJcbuino+mHiu+8mkYoNCkgPSBGKDMpICsgRigyKSA9IDIgKyAxID0gMy5cclxuXHJcblxyXG7mj5DnpLrvvJpcclxuXHJcbjAg4omkIE4g4omkIDMwXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gTlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgZmliID0gZnVuY3Rpb24gKE46IG51bWJlcikge1xyXG4gICAgcmV0dXJuIH5+KCg1ICoqIDAuNSkgKiAwLjIgKiAoKCgxICsgNSAqKiAwLjUpIC8gMikgKiogTiAtICgoMSAtIDUgKiogMC41KSAvIDIpICoqIE4pKTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBmaWIoNCksXHJcbiAgICAzXHJcbik7XHJcbiJdfQ==
