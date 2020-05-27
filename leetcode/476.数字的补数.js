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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc2LuaVsOWtl+eahOihpeaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDc2LuaVsOWtl+eahOihpeaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsR0FBVztJQUN4QyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsT0FBTyxPQUFPLElBQUksR0FBRyxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLENBQUM7S0FDZjtJQUVELE9BQU8sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmraPmlbTmlbDvvIzovpPlh7rlroPnmoTooaXmlbDjgILooaXmlbDmmK/lr7nor6XmlbDnmoTkuozov5vliLbooajnpLrlj5blj43jgIJcclxuXHJcbuazqOaEjzpcclxuXHJcbue7meWumueahOaVtOaVsOS/neivgeWcqDMy5L2N5bim56ym5Y+35pW05pWw55qE6IyD5Zu05YaF44CCXHJcbuS9oOWPr+S7peWBh+WumuS6jOi/m+WItuaVsOS4jeWMheWQq+WJjeWvvOmbtuS9jeOAglxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogNVxyXG7ovpPlh7o6IDJcclxu6Kej6YeKOiA155qE5LqM6L+b5Yi26KGo56S65Li6MTAx77yI5rKh5pyJ5YmN5a+86Zu25L2N77yJ77yM5YW26KGl5pWw5Li6MDEw44CC5omA5Lul5L2g6ZyA6KaB6L6T5Ye6MuOAglxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogMVxyXG7ovpPlh7o6IDBcclxu6Kej6YeKOiAx55qE5LqM6L+b5Yi26KGo56S65Li6Me+8iOayoeacieWJjeWvvOmbtuS9je+8ie+8jOWFtuihpeaVsOS4ujDjgILmiYDku6XkvaDpnIDopoHovpPlh7ow44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1cclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGZpbmRDb21wbGVtZW50ID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7XHJcbiAgbGV0IG1pbnVlbmQgPSAyO1xyXG4gIHdoaWxlIChtaW51ZW5kIDw9IG51bSkge1xyXG4gICAgbWludWVuZCA8PD0gMTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtaW51ZW5kIC0gbnVtIC0gMTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZENvbXBsZW1lbnQoNSksIDIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZENvbXBsZW1lbnQoMjE0NzQ4MzY0NyksIDIpO1xyXG4iXX0=