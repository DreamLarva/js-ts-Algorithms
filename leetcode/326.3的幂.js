"use strict";
/*
给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:

输入: 27
输出: true
示例 2:

输入: 0
输出: false
示例 3:

输入: 9
输出: true
示例 4:

输入: 45
输出: false
进阶：
你能不使用循环或者递归来完成本题吗？
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    /**
     * 通过查看相关解析，发现了这个解法，用到了数论的知识，3的幂次的质因子只有3，而所给出的n如果也是3的幂次，
     * 故而题目中所给整数范围内最大的3的幂次的因子只能是3的幂次，1162261467是3的19次幂，是整数范围内最大的3的幂次
     * 所以多余所有非0 的质数 都能使用这个办法
     * */
    return n > 0 && 1162261467 % n === 0;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isPowerOfThree(9), true);
assert_1.default.strictEqual(isPowerOfThree(10), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI2LjPnmoTluYIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMyNi4z55qE5bmCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBUztJQUN0Qzs7OztTQUlLO0lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5pW05pWw77yM5YaZ5LiA5Liq5Ye95pWw5p2l5Yik5pat5a6D5piv5ZCm5pivIDMg55qE5bmC5qyh5pa544CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogMjdcclxu6L6T5Ye6OiB0cnVlXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiAwXHJcbui+k+WHujogZmFsc2Vcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IDlcclxu6L6T5Ye6OiB0cnVlXHJcbuekuuS+iyA0OlxyXG5cclxu6L6T5YWlOiA0NVxyXG7ovpPlh7o6IGZhbHNlXHJcbui/m+mYtu+8mlxyXG7kvaDog73kuI3kvb/nlKjlvqrnjq/miJbogIXpgJLlvZLmnaXlrozmiJDmnKzpopjlkJfvvJ9cclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNQb3dlck9mVGhyZWUgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XHJcbiAgLyoqXHJcbiAgICog6YCa6L+H5p+l55yL55u45YWz6Kej5p6Q77yM5Y+R546w5LqG6L+Z5Liq6Kej5rOV77yM55So5Yiw5LqG5pWw6K6655qE55+l6K+G77yMM+eahOW5guasoeeahOi0qOWboOWtkOWPquaciTPvvIzogIzmiYDnu5nlh7rnmoRu5aaC5p6c5Lmf5pivM+eahOW5guasoe+8jFxyXG4gICAqIOaVheiAjOmimOebruS4reaJgOe7meaVtOaVsOiMg+WbtOWGheacgOWkp+eahDPnmoTluYLmrKHnmoTlm6DlrZDlj6rog73mmK8z55qE5bmC5qyh77yMMTE2MjI2MTQ2N+aYrzPnmoQxOeasoeW5gu+8jOaYr+aVtOaVsOiMg+WbtOWGheacgOWkp+eahDPnmoTluYLmrKFcclxuICAgKiDmiYDku6XlpJrkvZnmiYDmnInpnZ4wIOeahOi0qOaVsCDpg73og73kvb/nlKjov5nkuKrlip7ms5VcclxuICAgKiAqL1xyXG4gIHJldHVybiBuID4gMCAmJiAxMTYyMjYxNDY3ICUgbiA9PT0gMDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzUG93ZXJPZlRocmVlKDkpLCB0cnVlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzUG93ZXJPZlRocmVlKDEwKSwgZmFsc2UpO1xyXG4iXX0=