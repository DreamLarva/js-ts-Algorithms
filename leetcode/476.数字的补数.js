"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

注意:

给定的整数保证在32位带符号整数的范围内。
你可以假定二进制数不包含前导零位。
示例 1:

输入: 5
输出: 2
解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
示例 2:

输入: 1
输出: 0
解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。
* */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let minuend = 2;
    while (minuend <= num) {
        minuend <<= 1;
    }
    return minuend - num - 1;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findComplement(5), 2);
assert_1.default.strictEqual(findComplement(2147483647), 2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc2LuaVsOWtl+eahOihpeaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDc2LuaVsOWtl+eahOihpeaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsR0FBVztJQUN4QyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsT0FBTyxPQUFPLElBQUksR0FBRyxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLENBQUM7S0FDZjtJQUVELE9BQU8sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5q2j5pW05pWw77yM6L6T5Ye65a6D55qE6KGl5pWw44CC6KGl5pWw5piv5a+56K+l5pWw55qE5LqM6L+b5Yi26KGo56S65Y+W5Y+N44CCXG5cbuazqOaEjzpcblxu57uZ5a6a55qE5pW05pWw5L+d6K+B5ZyoMzLkvY3luKbnrKblj7fmlbTmlbDnmoTojIPlm7TlhoXjgIJcbuS9oOWPr+S7peWBh+WumuS6jOi/m+WItuaVsOS4jeWMheWQq+WJjeWvvOmbtuS9jeOAglxu56S65L6LIDE6XG5cbui+k+WFpTogNVxu6L6T5Ye6OiAyXG7op6Pph4o6IDXnmoTkuozov5vliLbooajnpLrkuLoxMDHvvIjmsqHmnInliY3lr7zpm7bkvY3vvInvvIzlhbbooaXmlbDkuLowMTDjgILmiYDku6XkvaDpnIDopoHovpPlh7oy44CCXG7npLrkvosgMjpcblxu6L6T5YWlOiAxXG7ovpPlh7o6IDBcbuino+mHijogMeeahOS6jOi/m+WItuihqOekuuS4ujHvvIjmsqHmnInliY3lr7zpm7bkvY3vvInvvIzlhbbooaXmlbDkuLow44CC5omA5Lul5L2g6ZyA6KaB6L6T5Ye6MOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBmaW5kQ29tcGxlbWVudCA9IGZ1bmN0aW9uIChudW06IG51bWJlcikge1xuICBsZXQgbWludWVuZCA9IDI7XG4gIHdoaWxlIChtaW51ZW5kIDw9IG51bSkge1xuICAgIG1pbnVlbmQgPDw9IDE7XG4gIH1cblxuICByZXR1cm4gbWludWVuZCAtIG51bSAtIDE7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kQ29tcGxlbWVudCg1KSwgMik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZENvbXBsZW1lbnQoMjE0NzQ4MzY0NyksIDIpO1xuIl19