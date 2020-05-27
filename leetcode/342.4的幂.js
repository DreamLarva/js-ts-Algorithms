"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
    if (num < 0 || num & (num - 1))
        return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQyLjTnmoTluYIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzM0Mi4055qE5bmCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsR0FBVztJQUN2Qzs7U0FFSztJQUNMLGFBQWE7SUFDYixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdDLDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixZQUFZO0lBQ1osT0FBTyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmlbTmlbAgKDMyIOS9jeacieespuWPt+aVtOaVsCnvvIzor7fnvJblhpnkuIDkuKrlh73mlbDmnaXliKTmlq3lroPmmK/lkKbmmK8gNCDnmoTluYLmrKHmlrnjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiAxNlxyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IDVcclxu6L6T5Ye6OiBmYWxzZVxyXG7ov5vpmLbvvJpcclxu5L2g6IO95LiN5L2/55So5b6q546v5oiW6ICF6YCS5b2S5p2l5a6M5oiQ5pys6aKY5ZCX77yfXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1cclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbnZhciBpc1Bvd2VyT2ZGb3VyID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7XHJcbiAgLyoqXHJcbiAgICog5aaC5p6c5LiN5L2/55SoIOW+queOr+aIluiAhSDpgJLlvZLlsLHopoHppJDopoEg6aKYMjMxLjLnmoTluYJcclxuICAgKiAqL1xyXG4gIC8vIOWIpOaWreaYr+S4jeaYryAyIOeahOW5glxyXG4gIGlmIChudW0gPCAwIHx8IG51bSAmIChudW0gLSAxKSkgcmV0dXJuIGZhbHNlO1xyXG4gIC8vIOWmguaenOaYryA0IOeahOW5giDkuozov5vliLbml7YgMSDmmK/kuI3mmK/lnKgg5YG25pWw5L2N5LiKXHJcbiAgLy8g5LiO5omA5pyJIOWBtuaVsOS9jSDpg73mmK8gMSDlpYfmlbAg6YO95pivMCDlgZrkvY3kuI4gIOW+l+WIsOS4jeaYrzAg5bCx5pivIDTnmoTluYJcclxuICAvLyAweDU1NTU1NTU1IDE2IOi/m+WItlxyXG4gIC8vIOebuOW9k+S6jlxyXG4gIC8vIDBiKDEwKSoxNlxyXG4gIHJldHVybiAobnVtICYgMHg1NTU1NTU1NSkgIT09IDA7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzUG93ZXJPZkZvdXIoMTYpLCB0cnVlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzUG93ZXJPZkZvdXIoMTUpLCBmYWxzZSk7XHJcbiJdfQ==