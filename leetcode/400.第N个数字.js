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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAwLuesrE7kuKrmlbDlrZcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQwMC7nrKxO5Liq5pWw5a2XLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ2xDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQjs7Ozs7O1NBTUs7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtJQUN0QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDekMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxLQUFLLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTSxLQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWhDLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MscUJBQXFCO0lBQ3JCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUdwRSxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUNmLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUNoQixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFDaEIsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWcqOaXoOmZkOeahOaVtOaVsOW6j+WIlyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIC4uLuS4reaJvuWIsOesrCBuIOS4quaVsOWtl+OAglxyXG5cclxu5rOo5oSPOlxyXG5uIOaYr+ato+aVsOS4lOWcqDMy5Li65pW05b2i6IyD5Zu05YaFICggbiA8IDIzMSnjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOlxyXG4zXHJcblxyXG7ovpPlh7o6XHJcbjNcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6XHJcbjExXHJcblxyXG7ovpPlh7o6XHJcbjBcclxuXHJcbuivtOaYjjpcclxu56ysMTHkuKrmlbDlrZflnKjluo/liJcgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAuLi4g6YeM5pivMO+8jOWug+aYrzEw55qE5LiA6YOo5YiG44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBmaW5kTnRoRGlnaXQgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XHJcbiAgICBpZiAobiA8IDEwKSByZXR1cm4gbjtcclxuICAgIC8qKlxyXG4gICAgICogMCAtIDkg5YWxIDkg5Liq5pWwXHJcbiAgICAgKiAxMCAtIDk5IOWFsSA5MCDkuKrmlbBcclxuICAgICAqIDEwMCAtIDk5OSDlhbEgOTAwIOS4quaVsFxyXG4gICAgICog5Lul5q2k57G75o6oIOWPr+S7peW+l+WIsCDmlbDlrZcg5Zyo5ZOq5Liq5Yy65q61XHJcbiAgICAgKiDnm7TliJfmirnlubMg5LmL5YmN5L2N5pWw55qE5bmy5omwICjlpoLmnpwgbiDkuLo0IOS9jeaVsCDnjrDlnKggbiAtIDkwMCDlsLHnn6XpgZMg5piv5LuOIDEwMDAg5byA5aeL55qE56ys5Yeg5Liq5pWwKVxyXG4gICAgICogKi9cclxuICAgIG4tLTsgLy8g5Zug5Li6546w5Zyo5YyF5ousMCDogIzljp/lhYjkuI3ljIXmi6xcclxuICAgIGxldCBkaWdpdCA9IDE7XHJcbiAgICB3aGlsZSAoOSAqIDEwICoqIChkaWdpdCAtIDEpICogKGRpZ2l0KSA8PSBuKSB7XHJcbiAgICAgICAgbiAtPSA5ICogMTAgKiogKGRpZ2l0IC0gMSkgKiAoZGlnaXQpO1xyXG4gICAgICAgIGRpZ2l0Kys7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3QgPSAxMCAqKiAoZGlnaXQgLSAxKTtcclxuXHJcbiAgICAvLyBmaXJzdOS4um7miYDlsZ7nu4TnmoTnrKzkuIDkuKrmlbDvvIxcclxuICAgIC8vIG4gLyBkaWdpdHPlvZPliY3nu4TnmoTnrKzlh6DkuKrmlbAgKOavlOWmgjTkvY3mlbAg6YKj5LmI5q+PNOS4quaVsCDlrp7pmYXmlbDlgLwgKyAxKVxyXG4gICAgLy8gbiAlIGRpZ2l0c+S4uui/meS4quaVsOeahOesrOWHoOS9jVxyXG4gICAgcmV0dXJuIE51bWJlcihTdHJpbmcoZmlyc3QgKyBNYXRoLnRydW5jKG4gLyBkaWdpdCkpW24gJSBkaWdpdF0pO1xyXG5cclxuXHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZpbmROdGhEaWdpdCg5KSxcclxuICAgIDksXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZpbmROdGhEaWdpdCgxMCksXHJcbiAgICAxLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBmaW5kTnRoRGlnaXQoMTEpLFxyXG4gICAgMCxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZmluZE50aERpZ2l0KDE5MCksXHJcbiAgICAxLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBmaW5kTnRoRGlnaXQoMTkyKSxcclxuICAgIDAsXHJcbik7XHJcbiJdfQ==
