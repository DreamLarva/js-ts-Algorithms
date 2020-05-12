"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。

示例 1:

输入: 16
输出: true
示例 2:

输入: 5
输出: false
进阶：
你能不使用循环或者递归来完成本题吗？
* */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  /**
   * 如果不使用 循环或者 递归就要餐要 题231.2的幂
   * */
  // 判断是不是 2 的幂
  if (num < 0 || num & (num - 1)) return false;
  // 如果是 4 的幂 二进制时 1 是不是在 偶数位上
  // 与所有 偶数位 都是 1 奇数 都是0 做位与  得到不是0 就是 4的幂
  // 0x55555555 16 进制
  // 相当于
  // 0b(10)*16
  return (num & 0x55555555) !== 0;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isPowerOfFour(16), true);
assert_1.default.strictEqual(isPowerOfFour(15), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQyLjTnmoTluYIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzM0Mi4055qE5bmCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsR0FBVTtJQUNwQzs7U0FFSztJQUNMLGFBQWE7SUFDYixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdDLDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixZQUFZO0lBQ1osT0FBTyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFcEMsQ0FBQyxDQUFDO0FBRUYsb0RBQTJCO0FBQzNCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmlbTmlbAgKDMyIOS9jeacieespuWPt+aVtOaVsCnvvIzor7fnvJblhpnkuIDkuKrlh73mlbDmnaXliKTmlq3lroPmmK/lkKbmmK8gNCDnmoTluYLmrKHmlrnjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiAxNlxyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IDVcclxu6L6T5Ye6OiBmYWxzZVxyXG7ov5vpmLbvvJpcclxu5L2g6IO95LiN5L2/55So5b6q546v5oiW6ICF6YCS5b2S5p2l5a6M5oiQ5pys6aKY5ZCX77yfXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1cclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbnZhciBpc1Bvd2VyT2ZGb3VyID0gZnVuY3Rpb24gKG51bTpudW1iZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICog5aaC5p6c5LiN5L2/55SoIOW+queOr+aIluiAhSDpgJLlvZLlsLHopoHppJDopoEg6aKYMjMxLjLnmoTluYJcclxuICAgICAqICovXHJcbiAgICAvLyDliKTmlq3mmK/kuI3mmK8gMiDnmoTluYJcclxuICAgIGlmIChudW0gPCAwIHx8IG51bSAmIChudW0gLSAxKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8g5aaC5p6c5pivIDQg55qE5bmCIOS6jOi/m+WItuaXtiAxIOaYr+S4jeaYr+WcqCDlgbbmlbDkvY3kuIpcclxuICAgIC8vIOS4juaJgOaciSDlgbbmlbDkvY0g6YO95pivIDEg5aWH5pWwIOmDveaYrzAg5YGa5L2N5LiOICDlvpfliLDkuI3mmK8wIOWwseaYryA055qE5bmCXHJcbiAgICAvLyAweDU1NTU1NTU1IDE2IOi/m+WItlxyXG4gICAgLy8g55u45b2T5LqOXHJcbiAgICAvLyAwYigxMCkqMTZcclxuICAgIHJldHVybiAobnVtICYgMHg1NTU1NTU1NSkgIT09IDA7XHJcblxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCJcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzUG93ZXJPZkZvdXIoMTYpLHRydWUpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNQb3dlck9mRm91cigxNSksZmFsc2UpO1xyXG4iXX0=
