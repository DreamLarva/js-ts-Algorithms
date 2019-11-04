"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。



示例 1：

输入：00000000000000000000000000001011
输出：3
解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
示例 2：

输入：00000000000000000000000010000000
输出：1
解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
示例 3：

输入：11111111111111111111111111111101
输出：31
解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。


提示：

请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。


进阶:
如果多次调用这个函数，你将如何优化你的算法？
* */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let result = 0;
    while (n) {
        result += n & 1;
        n >>>= 1; // 使用无符号 右移
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(hammingWeight(0b00000000000000000000000000001011), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkxLuS9jTHnmoTkuKrmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzE5MS7kvY0x55qE5Liq5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNuQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixPQUFPLENBQUMsRUFBRTtRQUNOLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXO0tBQ3hCO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGFBQWEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUNqRCxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue8luWGmeS4gOS4quWHveaVsO+8jOi+k+WFpeaYr+S4gOS4quaXoOespuWPt+aVtOaVsO+8jOi/lOWbnuWFtuS6jOi/m+WItuihqOi+vuW8j+S4reaVsOWtl+S9jeaVsOS4uiDigJgx4oCZIOeahOS4quaVsO+8iOS5n+iiq+ensOS4uuaxieaYjumHjemHj++8ieOAglxyXG5cclxuXHJcblxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWl77yaMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTFcclxu6L6T5Ye677yaM1xyXG7op6Pph4rvvJrovpPlhaXnmoTkuozov5vliLbkuLIgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTEg5Lit77yM5YWx5pyJ5LiJ5L2N5Li6ICcxJ+OAglxyXG7npLrkvosgMu+8mlxyXG5cclxu6L6T5YWl77yaMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDBcclxu6L6T5Ye677yaMVxyXG7op6Pph4rvvJrovpPlhaXnmoTkuozov5vliLbkuLIgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAg5Lit77yM5YWx5pyJ5LiA5L2N5Li6ICcxJ+OAglxyXG7npLrkvosgM++8mlxyXG5cclxu6L6T5YWl77yaMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDFcclxu6L6T5Ye677yaMzFcclxu6Kej6YeK77ya6L6T5YWl55qE5LqM6L+b5Yi25LiyIDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxIOS4re+8jOWFseaciSAzMSDkvY3kuLogJzEn44CCXHJcblxyXG5cclxu5o+Q56S677yaXHJcblxyXG7or7fms6jmhI/vvIzlnKjmn5Dkupvor63oqIDvvIjlpoIgSmF2Ye+8ieS4re+8jOayoeacieaXoOespuWPt+aVtOaVsOexu+Wei+OAguWcqOi/meenjeaDheWGteS4i++8jOi+k+WFpeWSjOi+k+WHuumDveWwhuiiq+aMh+WumuS4uuacieespuWPt+aVtOaVsOexu+Wei++8jOW5tuS4lOS4jeW6lOW9seWTjeaCqOeahOWunueOsO+8jOWboOS4uuaXoOiuuuaVtOaVsOaYr+acieespuWPt+eahOi/mOaYr+aXoOespuWPt+eahO+8jOWFtuWGhemDqOeahOS6jOi/m+WItuihqOekuuW9ouW8j+mDveaYr+ebuOWQjOeahOOAglxyXG7lnKggSmF2YSDkuK3vvIznvJbor5Hlmajkvb/nlKjkuozov5vliLbooaXnoIHorrDms5XmnaXooajnpLrmnInnrKblj7fmlbTmlbDjgILlm6DmraTvvIzlnKjkuIrpnaLnmoQg56S65L6LIDMg5Lit77yM6L6T5YWl6KGo56S65pyJ56ym5Y+35pW05pWwIC0z44CCXHJcblxyXG5cclxu6L+b6Zi2OlxyXG7lpoLmnpzlpJrmrKHosIPnlKjov5nkuKrlh73mlbDvvIzkvaDlsIblpoLkvZXkvJjljJbkvaDnmoTnrpfms5XvvJ9cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gLSBhIHBvc2l0aXZlIGludGVnZXJcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGhhbW1pbmdXZWlnaHQgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIHdoaWxlIChuKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IG4gJiAxO1xyXG4gICAgICAgIG4gPj4+PSAxOyAvLyDkvb/nlKjml6DnrKblj7cg5Y+z56e7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGhhbW1pbmdXZWlnaHQoMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMSksXHJcbiAgICAzLFxyXG4pO1xyXG4iXX0=