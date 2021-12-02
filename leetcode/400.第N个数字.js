"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:

输入:
3

输出:
3
示例 2:

输入:
11

输出:
0

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
* */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n < 10) return n;
  /**
   * 0 - 9 共 9 个数
   * 10 - 99 共 90 个数
   * 100 - 999 共 900 个数
   * 以此类推 可以得到 数字 在哪个区段
   * 直列抹平 之前位数的干扰 (如果 n 为4 位数 现在 n - 900 就知道 是从 1000 开始的第几个数)
   * */
  n--; // 因为现在包括0 而原先不包括
  let digit = 1;
  while (9 * 10 ** (digit - 1) * digit <= n) {
    n -= 9 * 10 ** (digit - 1) * digit;
    digit++;
  }
  const first = 10 ** (digit - 1);
  // first为n所属组的第一个数，
  // n / digits当前组的第几个数 (比如4位数 那么每4个数 实际数值 + 1)
  // n % digits为这个数的第几位
  return Number(String(first + Math.trunc(n / digit))[n % digit]);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findNthDigit(9), 9);
assert_1.default.strictEqual(findNthDigit(10), 1);
assert_1.default.strictEqual(findNthDigit(11), 0);
assert_1.default.strictEqual(findNthDigit(190), 1);
assert_1.default.strictEqual(findNthDigit(192), 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAwLuesrE7kuKrmlbDlrZcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQwMC7nrKxO5Liq5pWw5a2XLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQjs7Ozs7O1NBTUs7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtJQUN0QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFBRTtRQUN6QyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbkMsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUVELE1BQU0sS0FBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVoQyxtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLHFCQUFxQjtJQUNyQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5Zyo5peg6ZmQ55qE5pW05pWw5bqP5YiXIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgLi4u5Lit5om+5Yiw56ysIG4g5Liq5pWw5a2X44CCXG5cbuazqOaEjzpcbm4g5piv5q2j5pWw5LiU5ZyoMzLkuLrmlbTlvaLojIPlm7TlhoUgKCBuIDwgMjMxKeOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOlxuM1xuXG7ovpPlh7o6XG4zXG7npLrkvosgMjpcblxu6L6T5YWlOlxuMTFcblxu6L6T5Ye6OlxuMFxuXG7or7TmmI46XG7nrKwxMeS4quaVsOWtl+WcqOW6j+WIlyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIC4uLiDph4zmmK8w77yM5a6D5pivMTDnmoTkuIDpg6jliIbjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGZpbmROdGhEaWdpdCA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgaWYgKG4gPCAxMCkgcmV0dXJuIG47XG4gIC8qKlxuICAgKiAwIC0gOSDlhbEgOSDkuKrmlbBcbiAgICogMTAgLSA5OSDlhbEgOTAg5Liq5pWwXG4gICAqIDEwMCAtIDk5OSDlhbEgOTAwIOS4quaVsFxuICAgKiDku6XmraTnsbvmjqgg5Y+v5Lul5b6X5YiwIOaVsOWtlyDlnKjlk6rkuKrljLrmrrVcbiAgICog55u05YiX5oq55bmzIOS5i+WJjeS9jeaVsOeahOW5suaJsCAo5aaC5p6cIG4g5Li6NCDkvY3mlbAg546w5ZyoIG4gLSA5MDAg5bCx55+l6YGTIOaYr+S7jiAxMDAwIOW8gOWni+eahOesrOWHoOS4quaVsClcbiAgICogKi9cbiAgbi0tOyAvLyDlm6DkuLrnjrDlnKjljIXmi6wwIOiAjOWOn+WFiOS4jeWMheaLrFxuICBsZXQgZGlnaXQgPSAxO1xuICB3aGlsZSAoOSAqIDEwICoqIChkaWdpdCAtIDEpICogZGlnaXQgPD0gbikge1xuICAgIG4gLT0gOSAqIDEwICoqIChkaWdpdCAtIDEpICogZGlnaXQ7XG4gICAgZGlnaXQrKztcbiAgfVxuXG4gIGNvbnN0IGZpcnN0ID0gMTAgKiogKGRpZ2l0IC0gMSk7XG5cbiAgLy8gZmlyc3TkuLpu5omA5bGe57uE55qE56ys5LiA5Liq5pWw77yMXG4gIC8vIG4gLyBkaWdpdHPlvZPliY3nu4TnmoTnrKzlh6DkuKrmlbAgKOavlOWmgjTkvY3mlbAg6YKj5LmI5q+PNOS4quaVsCDlrp7pmYXmlbDlgLwgKyAxKVxuICAvLyBuICUgZGlnaXRz5Li66L+Z5Liq5pWw55qE56ys5Yeg5L2NXG4gIHJldHVybiBOdW1iZXIoU3RyaW5nKGZpcnN0ICsgTWF0aC50cnVuYyhuIC8gZGlnaXQpKVtuICUgZGlnaXRdKTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZE50aERpZ2l0KDkpLCA5KTtcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTnRoRGlnaXQoMTApLCAxKTtcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTnRoRGlnaXQoMTEpLCAwKTtcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTnRoRGlnaXQoMTkwKSwgMSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZE50aERpZ2l0KDE5MiksIDApO1xuIl19
