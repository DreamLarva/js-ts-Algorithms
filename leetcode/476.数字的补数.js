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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc2LuaVsOWtl+eahOihpeaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDc2LuaVsOWtl+eahOihpeaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsR0FBVztJQUN0QyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsT0FBTyxPQUFPLElBQUksR0FBRyxFQUFFO1FBQ25CLE9BQU8sS0FBSyxDQUFDLENBQUM7S0FDakI7SUFFRCxPQUFPLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQ2pCLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUMxQixDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quato+aVtOaVsO+8jOi+k+WHuuWug+eahOihpeaVsOOAguihpeaVsOaYr+WvueivpeaVsOeahOS6jOi/m+WItuihqOekuuWPluWPjeOAglxyXG5cclxu5rOo5oSPOlxyXG5cclxu57uZ5a6a55qE5pW05pWw5L+d6K+B5ZyoMzLkvY3luKbnrKblj7fmlbTmlbDnmoTojIPlm7TlhoXjgIJcclxu5L2g5Y+v5Lul5YGH5a6a5LqM6L+b5Yi25pWw5LiN5YyF5ZCr5YmN5a+86Zu25L2N44CCXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiA1XHJcbui+k+WHujogMlxyXG7op6Pph4o6IDXnmoTkuozov5vliLbooajnpLrkuLoxMDHvvIjmsqHmnInliY3lr7zpm7bkvY3vvInvvIzlhbbooaXmlbDkuLowMTDjgILmiYDku6XkvaDpnIDopoHovpPlh7oy44CCXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiAxXHJcbui+k+WHujogMFxyXG7op6Pph4o6IDHnmoTkuozov5vliLbooajnpLrkuLox77yI5rKh5pyJ5YmN5a+86Zu25L2N77yJ77yM5YW26KGl5pWw5Li6MOOAguaJgOS7peS9oOmcgOimgei+k+WHujDjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgZmluZENvbXBsZW1lbnQgPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBtaW51ZW5kID0gMjtcclxuICAgIHdoaWxlIChtaW51ZW5kIDw9IG51bSkge1xyXG4gICAgICAgIG1pbnVlbmQgPDw9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1pbnVlbmQgLSBudW0gLSAxO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZpbmRDb21wbGVtZW50KDUpLFxyXG4gICAgMlxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBmaW5kQ29tcGxlbWVudCgyMTQ3NDgzNjQ3KSxcclxuICAgIDJcclxuKTtcclxuIl19