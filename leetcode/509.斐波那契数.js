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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTA5LuaWkOazoumCo+WlkeaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTA5LuaWkOazoumCo+WlkeaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBUztJQUMzQixPQUFPLENBQUMsQ0FBQyxDQUNQLENBQUMsSUFBSSxHQUFHO1FBQ1IsR0FBRztRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuaWkOazoumCo+WlkeaVsO+8jOmAmuW4uOeUqCBGKG4pIOihqOekuu+8jOW9ouaIkOeahOW6j+WIl+ensOS4uuaWkOazoumCo+WlkeaVsOWIl+OAguivpeaVsOWIl+eUsSAwIOWSjCAxIOW8gOWni++8jOWQjumdoueahOavj+S4gOmhueaVsOWtl+mDveaYr+WJjemdouS4pOmhueaVsOWtl+eahOWSjOOAguS5n+WwseaYr++8mlxyXG5cclxuRigwKSA9IDAsICAgRigxKSA9IDFcclxuRihOKSA9IEYoTiAtIDEpICsgRihOIC0gMiksIOWFtuS4rSBOID4gMS5cclxu57uZ5a6aIE7vvIzorqHnrpcgRihOKeOAglxyXG5cclxuXHJcblxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWl77yaMlxyXG7ovpPlh7rvvJoxXHJcbuino+mHiu+8mkYoMikgPSBGKDEpICsgRigwKSA9IDEgKyAwID0gMS5cclxu56S65L6LIDLvvJpcclxuXHJcbui+k+WFpe+8mjNcclxu6L6T5Ye677yaMlxyXG7op6Pph4rvvJpGKDMpID0gRigyKSArIEYoMSkgPSAxICsgMSA9IDIuXHJcbuekuuS+iyAz77yaXHJcblxyXG7ovpPlhaXvvJo0XHJcbui+k+WHuu+8mjNcclxu6Kej6YeK77yaRig0KSA9IEYoMykgKyBGKDIpID0gMiArIDEgPSAzLlxyXG5cclxuXHJcbuaPkOekuu+8mlxyXG5cclxuMCDiiaQgTiDiiaQgMzBcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBOXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBmaWIgPSBmdW5jdGlvbiAoTjogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIH5+KFxyXG4gICAgNSAqKiAwLjUgKlxyXG4gICAgMC4yICpcclxuICAgICgoKDEgKyA1ICoqIDAuNSkgLyAyKSAqKiBOIC0gKCgxIC0gNSAqKiAwLjUpIC8gMikgKiogTilcclxuICApO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChmaWIoNCksIDMpO1xyXG4iXX0=