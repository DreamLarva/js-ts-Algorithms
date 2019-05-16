"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
示例 1:

输入: 1
输出: true
解释: 2 ** 0 = 1
示例 2:

输入: 16
输出: true
解释: 2 ** 4 = 16
示例 3:

输入: 218
输出: false
* */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
};
function solution1(n) {
    /**
     * js 所以数字 都是32位有符号类型
     * 正数 左起第一为 0
     * 负数 左起第一为 1
     * 负数的表示方式为 正数的补码 + 1
     * 5 => 0...0101
     * -5 => 取补码 1...1010  => 加1 1...1011
     *
     * 如果是 2 的n次幂 那么 补码 那么负数一定是符合正则 11{31 - n}0{n}
     * 与原值 00{31 -1 - n}10{n} 做 位与 操作 那么 刚好 与原值相等
     * */
    return n > 0 && (n & -n) === n;
}
function solution2(n) {
    // 由于 2的n次幂 -1操作后 最高位一定会退位 和 自己做 位与 操作刚好错开 值为0
    return n > 0 && (n & n - 1) === 0;
}
function solution3(n) {
    // 直接获取 最大 2的n次幂 来做取余操作
    return (n > 0) && (1 << 30) % n === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMxLjLnmoTluYIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzIzMS4y55qE5bmCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQVM7QUFFdEMsQ0FBQyxDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUN4Qjs7Ozs7Ozs7OztTQVVLO0lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLDhDQUE4QztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUN4Qix1QkFBdUI7SUFDdkIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmlbTmlbDvvIznvJblhpnkuIDkuKrlh73mlbDmnaXliKTmlq3lroPmmK/lkKbmmK8gMiDnmoTluYLmrKHmlrnjgIJcclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IDFcclxu6L6T5Ye6OiB0cnVlXHJcbuino+mHijogMiAqKiAwID0gMVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogMTZcclxu6L6T5Ye6OiB0cnVlXHJcbuino+mHijogMiAqKiA0ID0gMTZcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IDIxOFxyXG7ovpPlh7o6IGZhbHNlXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNQb3dlck9mVHdvID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNvbHV0aW9uMShuOiBudW1iZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICoganMg5omA5Lul5pWw5a2XIOmDveaYrzMy5L2N5pyJ56ym5Y+357G75Z6LXHJcbiAgICAgKiDmraPmlbAg5bem6LW356ys5LiA5Li6IDBcclxuICAgICAqIOi0n+aVsCDlt6botbfnrKzkuIDkuLogMVxyXG4gICAgICog6LSf5pWw55qE6KGo56S65pa55byP5Li6IOato+aVsOeahOihpeeggSArIDFcclxuICAgICAqIDUgPT4gMC4uLjAxMDFcclxuICAgICAqIC01ID0+IOWPluihpeeggSAxLi4uMTAxMCAgPT4g5YqgMSAxLi4uMTAxMVxyXG4gICAgICpcclxuICAgICAqIOWmguaenOaYryAyIOeahG7mrKHluYIg6YKj5LmIIOihpeeggSDpgqPkuYjotJ/mlbDkuIDlrprmmK/nrKblkIjmraPliJkgMTF7MzEgLSBufTB7bn1cclxuICAgICAqIOS4juWOn+WAvCAwMHszMSAtMSAtIG59MTB7bn0g5YGaIOS9jeS4jiDmk43kvZwg6YKj5LmIIOWImuWlvSDkuI7ljp/lgLznm7jnrYlcclxuICAgICAqICovXHJcbiAgICByZXR1cm4gbiA+IDAgJiYgKG4gJiAtbikgPT09IG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvbHV0aW9uMihuOiBudW1iZXIpIHtcclxuICAgIC8vIOeUseS6jiAy55qEbuasoeW5giAtMeaTjeS9nOWQjiDmnIDpq5jkvY3kuIDlrprkvJrpgIDkvY0g5ZKMIOiHquW3seWBmiDkvY3kuI4g5pON5L2c5Yia5aW96ZSZ5byAIOWAvOS4ujBcclxuICAgIHJldHVybiBuID4gMCAmJiAobiAmIG4gLSAxKSA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gc29sdXRpb24zKG46IG51bWJlcikge1xyXG4gICAgLy8g55u05o6l6I635Y+WIOacgOWkpyAy55qEbuasoeW5giDmnaXlgZrlj5bkvZnmk43kvZxcclxuICAgIHJldHVybiAobiA+IDApICYmICgxIDw8IDMwKSAlIG4gPT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCB7fTtcclxuIl19