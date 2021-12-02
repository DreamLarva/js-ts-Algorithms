"use strict";
/*
初始时有 n 个灯泡关闭。 第 1 轮，你打开所有的灯泡。 第 2 轮，每两个灯泡你关闭一次。 第 3 轮，
每三个灯泡切换一次开关（如果关闭则开启，如果开启则关闭）。第 i 轮，每 i 个灯泡切换一次开关。
 对于第 n 轮，你只切换最后一个灯泡的开关。 找出 n 轮后有多少个亮着的灯泡。

示例:

输入: 3
输出: 1
解释:
初始时, 灯泡状态 [关闭, 关闭, 关闭].
第一轮后, 灯泡状态 [开启, 开启, 开启].
第二轮后, 灯泡状态 [开启, 关闭, 开启].
第三轮后, 灯泡状态 [开启, 关闭, 关闭].

你应该返回 1，因为只有一个灯泡还亮着。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/bulb-switcher
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  // 第一轮的意思其实就是 每一个灯泡操作一次
  // 那么只要 操作次数为 偶数次 就会把灯泡关闭
  // 所以结果就是 只能操作 奇数次的数
  // 结果是 所有完全平方数 因为 如 4 = 2 * 2  在 2 的时候开了 但是不可能 出现再按照2 开关的情况 所以就会多出这次
  return Math.floor(n ** 0.5);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(bulbSwitch(100), 10);
assert_1.default.strictEqual(bulbSwitch(3), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE5LueBr+azoeW8gOWFsy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzE5LueBr+azoeW8gOWFsy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBUztJQUNsQyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixvRUFBb0U7SUFFcEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7liJ3lp4vml7bmnIkgbiDkuKrnga/ms6HlhbPpl63jgIIg56ysIDEg6L2u77yM5L2g5omT5byA5omA5pyJ55qE54Gv5rOh44CCIOesrCAyIOi9ru+8jOavj+S4pOS4queBr+azoeS9oOWFs+mXreS4gOasoeOAgiDnrKwgMyDova7vvIxcbuavj+S4ieS4queBr+azoeWIh+aNouS4gOasoeW8gOWFs++8iOWmguaenOWFs+mXreWImeW8gOWQr++8jOWmguaenOW8gOWQr+WImeWFs+mXre+8ieOAguesrCBpIOi9ru+8jOavjyBpIOS4queBr+azoeWIh+aNouS4gOasoeW8gOWFs+OAglxuIOWvueS6juesrCBuIOi9ru+8jOS9oOWPquWIh+aNouacgOWQjuS4gOS4queBr+azoeeahOW8gOWFs+OAgiDmib7lh7ogbiDova7lkI7mnInlpJrlsJHkuKrkuq7nnYDnmoTnga/ms6HjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IDNcbui+k+WHujogMVxu6Kej6YeKOlxu5Yid5aeL5pe2LCDnga/ms6HnirbmgIEgW+WFs+mXrSwg5YWz6ZetLCDlhbPpl61dLlxu56ys5LiA6L2u5ZCOLCDnga/ms6HnirbmgIEgW+W8gOWQrywg5byA5ZCvLCDlvIDlkK9dLlxu56ys5LqM6L2u5ZCOLCDnga/ms6HnirbmgIEgW+W8gOWQrywg5YWz6ZetLCDlvIDlkK9dLlxu56ys5LiJ6L2u5ZCOLCDnga/ms6HnirbmgIEgW+W8gOWQrywg5YWz6ZetLCDlhbPpl61dLlxuXG7kvaDlupTor6Xov5Tlm54gMe+8jOWboOS4uuWPquacieS4gOS4queBr+azoei/mOS6ruedgOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYnVsYi1zd2l0Y2hlclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGJ1bGJTd2l0Y2ggPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gIC8vIOesrOS4gOi9rueahOaEj+aAneWFtuWunuWwseaYryDmr4/kuIDkuKrnga/ms6Hmk43kvZzkuIDmrKFcbiAgLy8g6YKj5LmI5Y+q6KaBIOaTjeS9nOasoeaVsOS4uiDlgbbmlbDmrKEg5bCx5Lya5oqK54Gv5rOh5YWz6ZetXG4gIC8vIOaJgOS7pee7k+aenOWwseaYryDlj6rog73mk43kvZwg5aWH5pWw5qyh55qE5pWwXG4gIC8vIOe7k+aenOaYryDmiYDmnInlrozlhajlubPmlrnmlbAg5Zug5Li6IOWmgiA0ID0gMiAqIDIgIOWcqCAyIOeahOaXtuWAmeW8gOS6hiDkvYbmmK/kuI3lj6/og70g5Ye6546w5YaN5oyJ54WnMiDlvIDlhbPnmoTmg4XlhrUg5omA5Lul5bCx5Lya5aSa5Ye66L+Z5qyhXG5cbiAgcmV0dXJuIE1hdGguZmxvb3IobiAqKiAwLjUpO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChidWxiU3dpdGNoKDEwMCksIDEwKTtcbmFzc2VydC5zdHJpY3RFcXVhbChidWxiU3dpdGNoKDMpLCAxKTtcbiJdfQ==
