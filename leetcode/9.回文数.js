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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS7lm57mlofmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzku5Zue5paH5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN0QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ2QsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwRCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7liKTmlq3kuIDkuKrmlbTmlbDmmK/lkKbmmK/lm57mlofmlbDjgILlm57mlofmlbDmmK/mjIfmraPluo/vvIjku47lt6blkJHlj7PvvInlkozlgJLluo/vvIjku47lj7PlkJHlt6bvvInor7vpg73mmK/kuIDmoLfnmoTmlbTmlbDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogMTIxXG7ovpPlh7o6IHRydWVcbuekuuS+iyAyOlxuXG7ovpPlhaU6IC0xMjFcbui+k+WHujogZmFsc2Vcbuino+mHijog5LuO5bem5ZCR5Y+z6K+7LCDkuLogLTEyMSDjgIIg5LuO5Y+z5ZCR5bem6K+7LCDkuLogMTIxLSDjgILlm6DmraTlroPkuI3mmK/kuIDkuKrlm57mlofmlbDjgIJcbuekuuS+iyAzOlxuXG7ovpPlhaU6IDEwXG7ovpPlh7o6IGZhbHNlXG7op6Pph4o6IOS7juWPs+WQkeW3puivuywg5Li6IDAxIOOAguWboOatpOWug+S4jeaYr+S4gOS4quWbnuaWh+aVsOOAglxu6L+b6Zi2OlxuXG7kvaDog73kuI3lsIbmlbTmlbDovazkuLrlrZfnrKbkuLLmnaXop6PlhrPov5nkuKrpl67popjlkJfvvJ9cbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBpc1BhbGluZHJvbWUgPSBmdW5jdGlvbiAoeDogbnVtYmVyKSB7XG4gIGlmICh4IDwgMCB8fCAoeCAlIDEwID09PSAwICYmIHggIT09IDApKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBudW0gPSAwO1xuICB3aGlsZSAoeCA+IG51bSkge1xuICAgIG51bSA9IG51bSAqIDEwICsgKHggJSAxMCk7XG4gICAgeCA9ICh4IC0gKHggJSAxMCkpIC8gMTA7XG4gIH1cbiAgcmV0dXJuIHggPT09IG51bSB8fCB4ID09PSAobnVtIC0gKG51bSAlIDEwKSkgLyAxMDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNQYWxpbmRyb21lKDEyMSksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzUGFsaW5kcm9tZSgtMTIxKSwgZmFsc2UpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzUGFsaW5kcm9tZSgxMCksIGZhbHNlKTtcbiJdfQ==