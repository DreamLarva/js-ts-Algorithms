"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS7lm57mlofmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzku5Zue5paH5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNwQyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNaLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7SUFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsSUFBSSxDQUNQLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDbEIsS0FBSyxDQUNSLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQ2hCLEtBQUssQ0FDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5Yik5pat5LiA5Liq5pW05pWw5piv5ZCm5piv5Zue5paH5pWw44CC5Zue5paH5pWw5piv5oyH5q2j5bqP77yI5LuO5bem5ZCR5Y+z77yJ5ZKM5YCS5bqP77yI5LuO5Y+z5ZCR5bem77yJ6K+76YO95piv5LiA5qC355qE5pW05pWw44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogMTIxXHJcbui+k+WHujogdHJ1ZVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogLTEyMVxyXG7ovpPlh7o6IGZhbHNlXHJcbuino+mHijog5LuO5bem5ZCR5Y+z6K+7LCDkuLogLTEyMSDjgIIg5LuO5Y+z5ZCR5bem6K+7LCDkuLogMTIxLSDjgILlm6DmraTlroPkuI3mmK/kuIDkuKrlm57mlofmlbDjgIJcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IDEwXHJcbui+k+WHujogZmFsc2Vcclxu6Kej6YeKOiDku47lj7PlkJHlt6bor7ssIOS4uiAwMSDjgILlm6DmraTlroPkuI3mmK/kuIDkuKrlm57mlofmlbDjgIJcclxu6L+b6Zi2OlxyXG5cclxu5L2g6IO95LiN5bCG5pW05pWw6L2s5Li65a2X56ym5Liy5p2l6Kej5Yaz6L+Z5Liq6Zeu6aKY5ZCX77yfXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNQYWxpbmRyb21lID0gZnVuY3Rpb24gKHg6IG51bWJlcikge1xyXG4gICAgaWYgKHggPCAwIHx8ICh4ICUgMTAgPT09IDAgJiYgeCAhPT0gMCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgbnVtID0gMDtcclxuICAgIHdoaWxlICh4ID4gbnVtKSB7XHJcbiAgICAgICAgbnVtID0gbnVtICogMTAgKyB4ICUgMTA7XHJcbiAgICAgICAgeCA9ICh4IC0geCAlIDEwKSAvIDEwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHggPT09IG51bSB8fCB4ID09PSAobnVtIC0gbnVtICUgMTApIC8gMTA7XHJcbn07XHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBpc1BhbGluZHJvbWUoMTIxKSxcclxuICAgIHRydWUsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGlzUGFsaW5kcm9tZSgtMTIxKSxcclxuICAgIGZhbHNlLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBpc1BhbGluZHJvbWUoMTApLFxyXG4gICAgZmFsc2UsXHJcbik7XHJcbiJdfQ==
