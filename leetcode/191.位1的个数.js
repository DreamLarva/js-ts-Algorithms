"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkxLuS9jTHnmoTkuKrmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzE5MS7kvY0x55qE5Liq5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNuQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixPQUFPLENBQUMsRUFBRTtRQUNOLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXO0tBQ3hCO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue8luWGmeS4gOS4quWHveaVsO+8jOi+k+WFpeaYr+S4gOS4quaXoOespuWPt+aVtOaVsO+8jOi/lOWbnuWFtuS6jOi/m+WItuihqOi+vuW8j+S4reaVsOWtl+S9jeaVsOS4uiDigJgx4oCZIOeahOS4quaVsO+8iOS5n+iiq+ensOS4uuaxieaYjumHjemHj++8ieOAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTFcbui+k+WHuu+8mjNcbuino+mHiu+8mui+k+WFpeeahOS6jOi/m+WItuS4siAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMSDkuK3vvIzlhbHmnInkuInkvY3kuLogJzEn44CCXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJowMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMFxu6L6T5Ye677yaMVxu6Kej6YeK77ya6L6T5YWl55qE5LqM6L+b5Yi25LiyIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwIOS4re+8jOWFseacieS4gOS9jeS4uiAnMSfjgIJcbuekuuS+iyAz77yaXG5cbui+k+WFpe+8mjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxXG7ovpPlh7rvvJozMVxu6Kej6YeK77ya6L6T5YWl55qE5LqM6L+b5Yi25LiyIDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxIOS4re+8jOWFseaciSAzMSDkvY3kuLogJzEn44CCXG5cblxu5o+Q56S677yaXG5cbuivt+azqOaEj++8jOWcqOafkOS6m+ivreiogO+8iOWmgiBKYXZh77yJ5Lit77yM5rKh5pyJ5peg56ym5Y+35pW05pWw57G75Z6L44CC5Zyo6L+Z56eN5oOF5Ya15LiL77yM6L6T5YWl5ZKM6L6T5Ye66YO95bCG6KKr5oyH5a6a5Li65pyJ56ym5Y+35pW05pWw57G75Z6L77yM5bm25LiU5LiN5bqU5b2x5ZON5oKo55qE5a6e546w77yM5Zug5Li65peg6K665pW05pWw5piv5pyJ56ym5Y+355qE6L+Y5piv5peg56ym5Y+355qE77yM5YW25YaF6YOo55qE5LqM6L+b5Yi26KGo56S65b2i5byP6YO95piv55u45ZCM55qE44CCXG7lnKggSmF2YSDkuK3vvIznvJbor5Hlmajkvb/nlKjkuozov5vliLbooaXnoIHorrDms5XmnaXooajnpLrmnInnrKblj7fmlbTmlbDjgILlm6DmraTvvIzlnKjkuIrpnaLnmoQg56S65L6LIDMg5Lit77yM6L6T5YWl6KGo56S65pyJ56ym5Y+35pW05pWwIC0z44CCXG5cblxu6L+b6Zi2Olxu5aaC5p6c5aSa5qyh6LCD55So6L+Z5Liq5Ye95pWw77yM5L2g5bCG5aaC5L2V5LyY5YyW5L2g55qE566X5rOV77yfXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gYSBwb3NpdGl2ZSBpbnRlZ2VyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBoYW1taW5nV2VpZ2h0ID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIHdoaWxlIChuKSB7XG4gICAgICAgIHJlc3VsdCArPSBuICYgMTtcbiAgICAgICAgbiA+Pj49IDE7IC8vIOS9v+eUqOaXoOespuWPtyDlj7Pnp7tcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt9XG4iXX0=