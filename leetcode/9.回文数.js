"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
进阶:

你能不将整数转为字符串来解决这个问题吗？
* */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    var num = 0;
    while (x > num) {
        num = num * 10 + (x % 10);
        x = (x - (x % 10)) / 10;
    }
    return x === num || x === (num - (num % 10)) / 10;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isPalindrome(121), true);
assert_1.default.strictEqual(isPalindrome(-121), false);
assert_1.default.strictEqual(isPalindrome(10), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS7lm57mlofmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzku5Zue5paH5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN0QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ2QsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwRCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWIpOaWreS4gOS4quaVtOaVsOaYr+WQpuaYr+WbnuaWh+aVsOOAguWbnuaWh+aVsOaYr+aMh+ato+W6j++8iOS7juW3puWQkeWPs++8ieWSjOWAkuW6j++8iOS7juWPs+WQkeW3pu+8ieivu+mDveaYr+S4gOagt+eahOaVtOaVsOOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IDEyMVxyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IC0xMjFcclxu6L6T5Ye6OiBmYWxzZVxyXG7op6Pph4o6IOS7juW3puWQkeWPs+ivuywg5Li6IC0xMjEg44CCIOS7juWPs+WQkeW3puivuywg5Li6IDEyMS0g44CC5Zug5q2k5a6D5LiN5piv5LiA5Liq5Zue5paH5pWw44CCXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiAxMFxyXG7ovpPlh7o6IGZhbHNlXHJcbuino+mHijog5LuO5Y+z5ZCR5bem6K+7LCDkuLogMDEg44CC5Zug5q2k5a6D5LiN5piv5LiA5Liq5Zue5paH5pWw44CCXHJcbui/m+mYtjpcclxuXHJcbuS9oOiDveS4jeWwhuaVtOaVsOi9rOS4uuWtl+espuS4suadpeino+WGs+i/meS4qumXrumimOWQl++8n1xyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzUGFsaW5kcm9tZSA9IGZ1bmN0aW9uICh4OiBudW1iZXIpIHtcclxuICBpZiAoeCA8IDAgfHwgKHggJSAxMCA9PT0gMCAmJiB4ICE9PSAwKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB2YXIgbnVtID0gMDtcclxuICB3aGlsZSAoeCA+IG51bSkge1xyXG4gICAgbnVtID0gbnVtICogMTAgKyAoeCAlIDEwKTtcclxuICAgIHggPSAoeCAtICh4ICUgMTApKSAvIDEwO1xyXG4gIH1cclxuICByZXR1cm4geCA9PT0gbnVtIHx8IHggPT09IChudW0gLSAobnVtICUgMTApKSAvIDEwO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNQYWxpbmRyb21lKDEyMSksIHRydWUpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNQYWxpbmRyb21lKC0xMjEpLCBmYWxzZSk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChpc1BhbGluZHJvbWUoMTApLCBmYWxzZSk7XHJcbiJdfQ==