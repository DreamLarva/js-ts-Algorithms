"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC7lrZfnrKbkuLLovazmjaLmlbTmlbAoYXRvaSkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzgu5a2X56ym5Liy6L2s5o2i5pW05pWwKGF0b2kpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNENJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFVO0lBQzdCLFVBQVU7SUFDVixNQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNaLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7SUFDRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLElBQUksR0FBRyxHQUFHLEdBQUc7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUMxQixJQUFJLEdBQUcsR0FBRyxHQUFHO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDMUIsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7or7fkvaDmnaXlrp7njrDkuIDkuKogYXRvaSDlh73mlbDvvIzkvb/lhbbog73lsIblrZfnrKbkuLLovazmjaLmiJDmlbTmlbDjgIJcclxuXHJcbummluWFiO+8jOivpeWHveaVsOS8muagueaNrumcgOimgeS4ouW8g+aXoOeUqOeahOW8gOWktOepuuagvOWtl+espu+8jOebtOWIsOWvu+aJvuWIsOesrOS4gOS4qumdnuepuuagvOeahOWtl+espuS4uuatouOAglxyXG5cclxu5b2T5oiR5Lus5a+75om+5Yiw55qE56ys5LiA5Liq6Z2e56m65a2X56ym5Li65q2j5oiW6ICF6LSf5Y+35pe277yM5YiZ5bCG6K+l56ym5Y+35LiO5LmL5ZCO6Z2i5bC95Y+v6IO95aSa55qE6L+e57ut5pWw5a2X57uE5ZCI6LW35p2l77yM5L2c5Li66K+l5pW05pWw55qE5q2j6LSf5Y+377yb5YGH5aaC56ys5LiA5Liq6Z2e56m65a2X56ym5piv5pWw5a2X77yM5YiZ55u05o6l5bCG5YW25LiO5LmL5ZCO6L+e57ut55qE5pWw5a2X5a2X56ym57uE5ZCI6LW35p2l77yM5b2i5oiQ5pW05pWw44CCXHJcblxyXG7or6XlrZfnrKbkuLLpmaTkuobmnInmlYjnmoTmlbTmlbDpg6jliIbkuYvlkI7kuZ/lj6/og73kvJrlrZjlnKjlpJrkvZnnmoTlrZfnrKbvvIzov5nkupvlrZfnrKblj6/ku6Xooqvlv73nlaXvvIzlroPku6zlr7nkuo7lh73mlbDkuI3lupTor6XpgKDmiJDlvbHlk43jgIJcclxuXHJcbuazqOaEj++8muWBh+WmguivpeWtl+espuS4suS4reeahOesrOS4gOS4qumdnuepuuagvOWtl+espuS4jeaYr+S4gOS4quacieaViOaVtOaVsOWtl+espuOAgeWtl+espuS4suS4uuepuuaIluWtl+espuS4suS7heWMheWQq+epuueZveWtl+espuaXtu+8jOWImeS9oOeahOWHveaVsOS4jemcgOimgei/m+ihjOi9rOaNouOAglxyXG5cclxu5Zyo5Lu75L2V5oOF5Ya15LiL77yM6Iul5Ye95pWw5LiN6IO96L+b6KGM5pyJ5pWI55qE6L2s5o2i5pe277yM6K+36L+U5ZueIDDjgIJcclxuXHJcbuivtOaYju+8mlxyXG5cclxu5YGH6K6+5oiR5Lus55qE546v5aKD5Y+q6IO95a2Y5YKoIDMyIOS9jeWkp+Wwj+eahOacieespuWPt+aVtOaVsO+8jOmCo+S5iOWFtuaVsOWAvOiMg+WbtOS4uiBb4oiSMjMxLCAgMjMxIOKIkiAxXeOAguWmguaenOaVsOWAvOi2hei/h+i/meS4quiMg+WbtO+8jHFpbmfov5Tlm54gIElOVF9NQVggKDIzMSDiiJIgMSkg5oiWIElOVF9NSU4gKOKIkjIzMSkg44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogXCI0MlwiXHJcbui+k+WHujogNDJcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFwiICAgLTQyXCJcclxu6L6T5Ye6OiAtNDJcclxu6Kej6YeKOiDnrKzkuIDkuKrpnZ7nqbrnmb3lrZfnrKbkuLogJy0nLCDlroPmmK/kuIDkuKrotJ/lj7fjgIJcclxuICAgICDmiJHku6zlsL3lj6/og73lsIbotJ/lj7fkuI7lkI7pnaLmiYDmnInov57nu63lh7rnjrDnmoTmlbDlrZfnu4TlkIjotbfmnaXvvIzmnIDlkI7lvpfliLAgLTQyIOOAglxyXG7npLrkvosgMzpcclxuXHJcbui+k+WFpTogXCI0MTkzIHdpdGggd29yZHNcIlxyXG7ovpPlh7o6IDQxOTNcclxu6Kej6YeKOiDovazmjaLmiKrmraLkuo7mlbDlrZcgJzMnIO+8jOWboOS4uuWug+eahOS4i+S4gOS4quWtl+espuS4jeS4uuaVsOWtl+OAglxyXG7npLrkvosgNDpcclxuXHJcbui+k+WFpTogXCJ3b3JkcyBhbmQgOTg3XCJcclxu6L6T5Ye6OiAwXHJcbuino+mHijog56ys5LiA5Liq6Z2e56m65a2X56ym5pivICd3Jywg5L2G5a6D5LiN5piv5pWw5a2X5oiW5q2j44CB6LSf5Y+344CCXHJcbiAgICAg5Zug5q2k5peg5rOV5omn6KGM5pyJ5pWI55qE6L2s5o2i44CCXHJcbuekuuS+iyA1OlxyXG5cclxu6L6T5YWlOiBcIi05MTI4MzQ3MjMzMlwiXHJcbui+k+WHujogLTIxNDc0ODM2NDhcclxu6Kej6YeKOiDmlbDlrZcgXCItOTEyODM0NzIzMzJcIiDotoXov4cgMzIg5L2N5pyJ56ym5Y+35pW05pWw6IyD5Zu044CCXHJcbiAgICAg5Zug5q2k6L+U5ZueIElOVF9NSU4gKOKIkjIzMSkg44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIG15QXRvaSA9IGZ1bmN0aW9uIChzdHI6c3RyaW5nKSB7XHJcbiAgICAvLyDliKTmlq3mmK/lkKblj6/lkIjms5VcclxuICAgIGNvbnN0IFJlZ1Jlc3VsdCA9IC9eXFxzKihbKy1dKlxcZCtcXC4/XFxkKikvLmV4ZWMoc3RyKTtcclxuICAgIGlmICghUmVnUmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KFJlZ1Jlc3VsdFsxXSkgfHwgMDtcclxuXHJcbiAgICBjb25zdCBNQVggPSBNYXRoLnBvdygyLCAzMSkgLSAxO1xyXG4gICAgY29uc3QgTUlOID0gLU1hdGgucG93KDIsIDMxKTtcclxuICAgIGlmIChudW0gPiBNQVgpIHJldHVybiBNQVg7XHJcbiAgICBpZiAobnVtIDwgTUlOKSByZXR1cm4gTUlOO1xyXG4gICAgcmV0dXJuIG51bTtcclxufTtcclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=