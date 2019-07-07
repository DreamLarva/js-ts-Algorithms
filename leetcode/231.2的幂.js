"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
12.;
整数转罗马数字; /*
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMxLjLnmoTluYIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzIzMS4y55qE5bmCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsR0FBRyxDQUFBO0FBQUMsT0FBTyxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQlA7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQVM7QUFFdEMsQ0FBQyxDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUN4Qjs7Ozs7Ozs7OztTQVVLO0lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLDhDQUE4QztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUN4Qix1QkFBdUI7SUFDdkIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIxMi4g5pW05pWw6L2s572X6ams5pWw5a2XLypcbue7meWumuS4gOS4quaVtOaVsO+8jOe8luWGmeS4gOS4quWHveaVsOadpeWIpOaWreWug+aYr+WQpuaYryAyIOeahOW5guasoeaWueOAglxu56S65L6LIDE6XG5cbui+k+WFpTogMVxu6L6T5Ye6OiB0cnVlXG7op6Pph4o6IDIgKiogMCA9IDFcbuekuuS+iyAyOlxuXG7ovpPlhaU6IDE2XG7ovpPlh7o6IHRydWVcbuino+mHijogMiAqKiA0ID0gMTZcbuekuuS+iyAzOlxuXG7ovpPlhaU6IDIxOFxu6L6T5Ye6OiBmYWxzZVxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzUG93ZXJPZlR3byA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcblxufTtcblxuZnVuY3Rpb24gc29sdXRpb24xKG46IG51bWJlcikge1xuICAgIC8qKlxuICAgICAqIGpzIOaJgOS7peaVsOWtlyDpg73mmK8zMuS9jeacieespuWPt+exu+Wei1xuICAgICAqIOato+aVsCDlt6botbfnrKzkuIDkuLogMFxuICAgICAqIOi0n+aVsCDlt6botbfnrKzkuIDkuLogMVxuICAgICAqIOi0n+aVsOeahOihqOekuuaWueW8j+S4uiDmraPmlbDnmoTooaXnoIEgKyAxXG4gICAgICogNSA9PiAwLi4uMDEwMVxuICAgICAqIC01ID0+IOWPluihpeeggSAxLi4uMTAxMCAgPT4g5YqgMSAxLi4uMTAxMVxuICAgICAqXG4gICAgICog5aaC5p6c5pivIDIg55qEbuasoeW5giDpgqPkuYgg6KGl56CBIOmCo+S5iOi0n+aVsOS4gOWumuaYr+espuWQiOato+WImSAxMXszMSAtIG59MHtufVxuICAgICAqIOS4juWOn+WAvCAwMHszMSAtMSAtIG59MTB7bn0g5YGaIOS9jeS4jiDmk43kvZwg6YKj5LmIIOWImuWlvSDkuI7ljp/lgLznm7jnrYlcbiAgICAgKiAqL1xuICAgIHJldHVybiBuID4gMCAmJiAobiAmIC1uKSA9PT0gbjtcbn1cblxuZnVuY3Rpb24gc29sdXRpb24yKG46IG51bWJlcikge1xuICAgIC8vIOeUseS6jiAy55qEbuasoeW5giAtMeaTjeS9nOWQjiDmnIDpq5jkvY3kuIDlrprkvJrpgIDkvY0g5ZKMIOiHquW3seWBmiDkvY3kuI4g5pON5L2c5Yia5aW96ZSZ5byAIOWAvOS4ujBcbiAgICByZXR1cm4gbiA+IDAgJiYgKG4gJiBuIC0gMSkgPT09IDA7XG59XG5cbmZ1bmN0aW9uIHNvbHV0aW9uMyhuOiBudW1iZXIpIHtcbiAgICAvLyDnm7TmjqXojrflj5Yg5pyA5aSnIDLnmoRu5qyh5bmCIOadpeWBmuWPluS9meaTjeS9nFxuICAgIHJldHVybiAobiA+IDApICYmICgxIDw8IDMwKSAlIG4gPT09IDA7XG59XG5cbmV4cG9ydCB7fTtcbiJdfQ==