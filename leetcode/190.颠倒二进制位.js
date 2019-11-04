"use strict";
/*
颠倒给定的 32 位无符号整数的二进制位。



示例 1：

输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
示例 2：

输入：11111111111111111111111111111101
输出：10111111111111111111111111111111
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
      因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。


提示：

请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。


进阶:
如果多次调用这个函数，你将如何优化你的算法？
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/**
 * 由于所有 js 的 数字都是有符号位 但是又没有 无符号左移的操作 所以 这里是不能正确 执行 二进制 末尾 是 1 的数字
 * */
var reverseBits = function (n) {
    let result = 0;
    let i = 32; // 共 32位
    while (i--) {
        result <<= 1; // 左移一位
        // n & 1 : 就取 最后一位二进制的数
        // 然后 把最后一位 加到 result 的最左边
        result += n & 1;
        // 右移一位 去掉原来的最后一位
        n >>>= 1;
    }
    return result;
};
var reverseBits2 = function (n) {
    return parseInt((n).toString(2).padStart(32, '0').split('').reverse().join(''), 2);
};
/**
 * 数学方法 10进制 转 2进制 然后手动操作位数
 * */
var reverseBits3 = function (n) {
    let nums = new Array(32).fill(0);
    let count = 0;
    while (n) {
        nums[count] = n % 2;
        count += 1;
        n = Math.trunc(n / 2);
    }
    let num = nums.join('');
    return Number.parseInt(num, 2);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseBits(1), -2147483648);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkwLumioOWAkuS6jOi/m+WItuS9jS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTkwLumioOWAkuS6jOi/m+WItuS9jS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSDs7S0FFSztBQUNMLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBUztJQUNqQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRO0lBQ3BCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDUixNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztRQUNyQix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFpQjtRQUNqQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ1o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixJQUFJLFlBQVksR0FBRyxVQUFVLENBQVM7SUFDbEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDekI7SUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu6aKg5YCS57uZ5a6a55qEIDMyIOS9jeaXoOespuWPt+aVtOaVsOeahOS6jOi/m+WItuS9jeOAglxyXG5cclxuXHJcblxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWlOiAwMDAwMDAxMDEwMDEwMTAwMDAwMTExMTAxMDAxMTEwMFxyXG7ovpPlh7o6IDAwMTExMDAxMDExMTEwMDAwMDEwMTAwMTAxMDAwMDAwXHJcbuino+mHijog6L6T5YWl55qE5LqM6L+b5Yi25LiyIDAwMDAwMDEwMTAwMTAxMDAwMDAxMTExMDEwMDExMTAwIOihqOekuuaXoOespuWPt+aVtOaVsCA0MzI2MTU5Nu+8jFxyXG4gICAgICDlm6DmraTov5Tlm54gOTY0MTc2MTky77yM5YW25LqM6L+b5Yi26KGo56S65b2i5byP5Li6IDAwMTExMDAxMDExMTEwMDAwMDEwMTAwMTAxMDAwMDAw44CCXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJoxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMVxyXG7ovpPlh7rvvJoxMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxyXG7op6Pph4rvvJrovpPlhaXnmoTkuozov5vliLbkuLIgMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDEg6KGo56S65peg56ym5Y+35pW05pWwIDQyOTQ5NjcyOTPvvIxcclxuICAgICAg5Zug5q2k6L+U5ZueIDMyMjEyMjU0NzEg5YW25LqM6L+b5Yi26KGo56S65b2i5byP5Li6IDEwMTAxMTExMTEwMDEwMTEwMDEwMDExMTAxMTAxMDAx44CCXHJcblxyXG5cclxu5o+Q56S677yaXHJcblxyXG7or7fms6jmhI/vvIzlnKjmn5Dkupvor63oqIDvvIjlpoIgSmF2Ye+8ieS4re+8jOayoeacieaXoOespuWPt+aVtOaVsOexu+Wei+OAguWcqOi/meenjeaDheWGteS4i++8jOi+k+WFpeWSjOi+k+WHuumDveWwhuiiq+aMh+WumuS4uuacieespuWPt+aVtOaVsOexu+Wei++8jOW5tuS4lOS4jeW6lOW9seWTjeaCqOeahOWunueOsO+8jOWboOS4uuaXoOiuuuaVtOaVsOaYr+acieespuWPt+eahOi/mOaYr+aXoOespuWPt+eahO+8jOWFtuWGhemDqOeahOS6jOi/m+WItuihqOekuuW9ouW8j+mDveaYr+ebuOWQjOeahOOAglxyXG7lnKggSmF2YSDkuK3vvIznvJbor5Hlmajkvb/nlKjkuozov5vliLbooaXnoIHorrDms5XmnaXooajnpLrmnInnrKblj7fmlbTmlbDjgILlm6DmraTvvIzlnKjkuIrpnaLnmoQg56S65L6LIDIg5Lit77yM6L6T5YWl6KGo56S65pyJ56ym5Y+35pW05pWwIC0z77yM6L6T5Ye66KGo56S65pyJ56ym5Y+35pW05pWwIC0xMDczNzQxODI144CCXHJcblxyXG5cclxu6L+b6Zi2OlxyXG7lpoLmnpzlpJrmrKHosIPnlKjov5nkuKrlh73mlbDvvIzkvaDlsIblpoLkvZXkvJjljJbkvaDnmoTnrpfms5XvvJ9cclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gYSBwb3NpdGl2ZSBpbnRlZ2VyXHJcbiAqIEByZXR1cm4ge251bWJlcn0gLSBhIHBvc2l0aXZlIGludGVnZXJcclxuICovXHJcbi8qKlxyXG4gKiDnlLHkuo7miYDmnIkganMg55qEIOaVsOWtl+mDveaYr+acieespuWPt+S9jSDkvYbmmK/lj4jmsqHmnIkg5peg56ym5Y+35bem56e755qE5pON5L2cIOaJgOS7pSDov5nph4zmmK/kuI3og73mraPnoa4g5omn6KGMIOS6jOi/m+WItiDmnKvlsL4g5pivIDEg55qE5pWw5a2XXHJcbiAqICovXHJcbnZhciByZXZlcnNlQml0cyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgbGV0IGkgPSAzMjsgLy8g5YWxIDMy5L2NXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgcmVzdWx0IDw8PSAxOyAvLyDlt6bnp7vkuIDkvY1cclxuICAgICAgICAvLyBuICYgMSA6IOWwseWPliDmnIDlkI7kuIDkvY3kuozov5vliLbnmoTmlbBcclxuICAgICAgICAvLyDnhLblkI4g5oqK5pyA5ZCO5LiA5L2NIOWKoOWIsCByZXN1bHQg55qE5pyA5bem6L65XHJcbiAgICAgICAgcmVzdWx0ICs9IG4gJiAxO1xyXG4gICAgICAgIC8vIOWPs+enu+S4gOS9jSDljrvmjonljp/mnaXnmoTmnIDlkI7kuIDkvY1cclxuICAgICAgICBuID4+Pj0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG52YXIgcmV2ZXJzZUJpdHMyID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KChuKS50b1N0cmluZygyKS5wYWRTdGFydCgzMiwgJzAnKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpLCAyKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDmlbDlrabmlrnms5UgMTDov5vliLYg6L2sIDLov5vliLYg54S25ZCO5omL5Yqo5pON5L2c5L2N5pWwXHJcbiAqICovXHJcbnZhciByZXZlcnNlQml0czMgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgbnVtcyA9IG5ldyBBcnJheSgzMikuZmlsbCgwKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICB3aGlsZSAobikge1xyXG4gICAgICAgIG51bXNbY291bnRdID0gbiAlIDI7XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICBuID0gTWF0aC50cnVuYyhuIC8gMik7XHJcbiAgICB9XHJcbiAgICBsZXQgbnVtID0gbnVtcy5qb2luKCcnKTtcclxuICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQobnVtLCAyKTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2VCaXRzKDEpLCAtMjE0NzQ4MzY0OCk7XHJcbiJdfQ==