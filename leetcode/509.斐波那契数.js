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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    return ~~(5 ** 0.5 *
        0.2 *
        (((1 + 5 ** 0.5) / 2) ** N - ((1 - 5 ** 0.5) / 2) ** N));
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(fib(4), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTA5LuaWkOazoumCo+WlkeaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTA5LuaWkOazoumCo+WlkeaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBUztJQUMzQixPQUFPLENBQUMsQ0FBQyxDQUNQLENBQUMsSUFBSSxHQUFHO1FBQ1IsR0FBRztRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7mlpDms6LpgqPlpZHmlbDvvIzpgJrluLjnlKggRihuKSDooajnpLrvvIzlvaLmiJDnmoTluo/liJfnp7DkuLrmlpDms6LpgqPlpZHmlbDliJfjgILor6XmlbDliJfnlLEgMCDlkowgMSDlvIDlp4vvvIzlkI7pnaLnmoTmr4/kuIDpobnmlbDlrZfpg73mmK/liY3pnaLkuKTpobnmlbDlrZfnmoTlkozjgILkuZ/lsLHmmK/vvJpcblxuRigwKSA9IDAsICAgRigxKSA9IDFcbkYoTikgPSBGKE4gLSAxKSArIEYoTiAtIDIpLCDlhbbkuK0gTiA+IDEuXG7nu5nlrpogTu+8jOiuoeeulyBGKE4p44CCXG5cblxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJoyXG7ovpPlh7rvvJoxXG7op6Pph4rvvJpGKDIpID0gRigxKSArIEYoMCkgPSAxICsgMCA9IDEuXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJozXG7ovpPlh7rvvJoyXG7op6Pph4rvvJpGKDMpID0gRigyKSArIEYoMSkgPSAxICsgMSA9IDIuXG7npLrkvosgM++8mlxuXG7ovpPlhaXvvJo0XG7ovpPlh7rvvJozXG7op6Pph4rvvJpGKDQpID0gRigzKSArIEYoMikgPSAyICsgMSA9IDMuXG5cblxu5o+Q56S677yaXG5cbjAg4omkIE4g4omkIDMwXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IE5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGZpYiA9IGZ1bmN0aW9uIChOOiBudW1iZXIpIHtcbiAgcmV0dXJuIH5+KFxuICAgIDUgKiogMC41ICpcbiAgICAwLjIgKlxuICAgICgoKDEgKyA1ICoqIDAuNSkgLyAyKSAqKiBOIC0gKCgxIC0gNSAqKiAwLjUpIC8gMikgKiogTilcbiAgKTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGZpYig0KSwgMyk7XG4iXX0=