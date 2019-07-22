"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，qing返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

示例 1:

输入: "42"
输出: 42
示例 2:

输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
示例 3:

输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
示例 4:

输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
示例 5:

输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。
     因此返回 INT_MIN (−231) 。
* */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    // 判断是否可合法
    const RegResult = /^\s*([+-]*\d+\.?\d*)/.exec(str);
    if (!RegResult) {
        return 0;
    }
    const num = parseFloat(RegResult[1]) || 0;
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -Math.pow(2, 31);
    if (num > MAX)
        return MAX;
    if (num < MIN)
        return MIN;
    return num;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(myAtoi('42'), 42);
assert_1.default.strictEqual(myAtoi("   -42"), -42);
assert_1.default.strictEqual(myAtoi("4193 with words"), 4193);
assert_1.default.strictEqual(myAtoi("words and 987"), 0);
assert_1.default.strictEqual(myAtoi("-91283472332"), -2147483648);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC7lrZfnrKbkuLLovazmjaLmlbTmlbAoYXRvaSkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzgu5a2X56ym5Liy6L2s5o2i5pW05pWwKGF0b2kpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNENJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFXO0lBQzlCLFVBQVU7SUFDVixNQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNaLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7SUFDRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLElBQUksR0FBRyxHQUFHLEdBQUc7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUMxQixJQUFJLEdBQUcsR0FBRyxHQUFHO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDMUIsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUNaLEVBQUUsQ0FDTCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUNoQixDQUFDLEVBQUUsQ0FDTixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQ3pCLElBQUksQ0FDUCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUN2QixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFDdEIsQ0FBQyxVQUFVLENBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuivt+S9oOadpeWunueOsOS4gOS4qiBhdG9pIOWHveaVsO+8jOS9v+WFtuiDveWwhuWtl+espuS4sui9rOaNouaIkOaVtOaVsOOAglxyXG5cclxu6aaW5YWI77yM6K+l5Ye95pWw5Lya5qC55o2u6ZyA6KaB5Lii5byD5peg55So55qE5byA5aS056m65qC85a2X56ym77yM55u05Yiw5a+75om+5Yiw56ys5LiA5Liq6Z2e56m65qC855qE5a2X56ym5Li65q2i44CCXHJcblxyXG7lvZPmiJHku6zlr7vmib7liLDnmoTnrKzkuIDkuKrpnZ7nqbrlrZfnrKbkuLrmraPmiJbogIXotJ/lj7fml7bvvIzliJnlsIbor6XnrKblj7fkuI7kuYvlkI7pnaLlsL3lj6/og73lpJrnmoTov57nu63mlbDlrZfnu4TlkIjotbfmnaXvvIzkvZzkuLror6XmlbTmlbDnmoTmraPotJ/lj7fvvJvlgYflpoLnrKzkuIDkuKrpnZ7nqbrlrZfnrKbmmK/mlbDlrZfvvIzliJnnm7TmjqXlsIblhbbkuI7kuYvlkI7ov57nu63nmoTmlbDlrZflrZfnrKbnu4TlkIjotbfmnaXvvIzlvaLmiJDmlbTmlbDjgIJcclxuXHJcbuivpeWtl+espuS4sumZpOS6huacieaViOeahOaVtOaVsOmDqOWIhuS5i+WQjuS5n+WPr+iDveS8muWtmOWcqOWkmuS9meeahOWtl+espu+8jOi/meS6m+Wtl+espuWPr+S7peiiq+W/veeVpe+8jOWug+S7rOWvueS6juWHveaVsOS4jeW6lOivpemAoOaIkOW9seWTjeOAglxyXG5cclxu5rOo5oSP77ya5YGH5aaC6K+l5a2X56ym5Liy5Lit55qE56ys5LiA5Liq6Z2e56m65qC85a2X56ym5LiN5piv5LiA5Liq5pyJ5pWI5pW05pWw5a2X56ym44CB5a2X56ym5Liy5Li656m65oiW5a2X56ym5Liy5LuF5YyF5ZCr56m655m95a2X56ym5pe277yM5YiZ5L2g55qE5Ye95pWw5LiN6ZyA6KaB6L+b6KGM6L2s5o2i44CCXHJcblxyXG7lnKjku7vkvZXmg4XlhrXkuIvvvIzoi6Xlh73mlbDkuI3og73ov5vooYzmnInmlYjnmoTovazmjaLml7bvvIzor7fov5Tlm54gMOOAglxyXG5cclxu6K+05piO77yaXHJcblxyXG7lgYforr7miJHku6znmoTnjq/looPlj6rog73lrZjlgqggMzIg5L2N5aSn5bCP55qE5pyJ56ym5Y+35pW05pWw77yM6YKj5LmI5YW25pWw5YC86IyD5Zu05Li6IFviiJIyMzEsICAyMzEg4oiSIDFd44CC5aaC5p6c5pWw5YC86LaF6L+H6L+Z5Liq6IyD5Zu077yMcWluZ+i/lOWbniAgSU5UX01BWCAoMjMxIOKIkiAxKSDmiJYgSU5UX01JTiAo4oiSMjMxKSDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBcIjQyXCJcclxu6L6T5Ye6OiA0MlxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogXCIgICAtNDJcIlxyXG7ovpPlh7o6IC00MlxyXG7op6Pph4o6IOesrOS4gOS4qumdnuepuueZveWtl+espuS4uiAnLScsIOWug+aYr+S4gOS4qui0n+WPt+OAglxyXG4gICAgIOaIkeS7rOWwveWPr+iDveWwhui0n+WPt+S4juWQjumdouaJgOaciei/nue7reWHuueOsOeahOaVsOWtl+e7hOWQiOi1t+adpe+8jOacgOWQjuW+l+WIsCAtNDIg44CCXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiBcIjQxOTMgd2l0aCB3b3Jkc1wiXHJcbui+k+WHujogNDE5M1xyXG7op6Pph4o6IOi9rOaNouaIquatouS6juaVsOWtlyAnMycg77yM5Zug5Li65a6D55qE5LiL5LiA5Liq5a2X56ym5LiN5Li65pWw5a2X44CCXHJcbuekuuS+iyA0OlxyXG5cclxu6L6T5YWlOiBcIndvcmRzIGFuZCA5ODdcIlxyXG7ovpPlh7o6IDBcclxu6Kej6YeKOiDnrKzkuIDkuKrpnZ7nqbrlrZfnrKbmmK8gJ3cnLCDkvYblroPkuI3mmK/mlbDlrZfmiJbmraPjgIHotJ/lj7fjgIJcclxuICAgICDlm6DmraTml6Dms5XmiafooYzmnInmlYjnmoTovazmjaLjgIJcclxu56S65L6LIDU6XHJcblxyXG7ovpPlhaU6IFwiLTkxMjgzNDcyMzMyXCJcclxu6L6T5Ye6OiAtMjE0NzQ4MzY0OFxyXG7op6Pph4o6IOaVsOWtlyBcIi05MTI4MzQ3MjMzMlwiIOi2hei/hyAzMiDkvY3mnInnrKblj7fmlbTmlbDojIPlm7TjgIJcclxuICAgICDlm6DmraTov5Tlm54gSU5UX01JTiAo4oiSMjMxKSDjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgbXlBdG9pID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKSB7XHJcbiAgICAvLyDliKTmlq3mmK/lkKblj6/lkIjms5VcclxuICAgIGNvbnN0IFJlZ1Jlc3VsdCA9IC9eXFxzKihbKy1dKlxcZCtcXC4/XFxkKikvLmV4ZWMoc3RyKTtcclxuICAgIGlmICghUmVnUmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KFJlZ1Jlc3VsdFsxXSkgfHwgMDtcclxuXHJcbiAgICBjb25zdCBNQVggPSBNYXRoLnBvdygyLCAzMSkgLSAxO1xyXG4gICAgY29uc3QgTUlOID0gLU1hdGgucG93KDIsIDMxKTtcclxuICAgIGlmIChudW0gPiBNQVgpIHJldHVybiBNQVg7XHJcbiAgICBpZiAobnVtIDwgTUlOKSByZXR1cm4gTUlOO1xyXG4gICAgcmV0dXJuIG51bTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgbXlBdG9pKCc0MicpLFxyXG4gICAgNDIsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIG15QXRvaShcIiAgIC00MlwiKSxcclxuICAgIC00MixcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgbXlBdG9pKFwiNDE5MyB3aXRoIHdvcmRzXCIpLFxyXG4gICAgNDE5MyxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgbXlBdG9pKFwid29yZHMgYW5kIDk4N1wiKSxcclxuICAgIDAsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIG15QXRvaShcIi05MTI4MzQ3MjMzMlwiKSxcclxuICAgIC0yMTQ3NDgzNjQ4LFxyXG4pO1xyXG4iXX0=