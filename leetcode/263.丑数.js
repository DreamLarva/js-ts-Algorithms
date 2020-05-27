"use strict";
/*
编写一个程序判断给定的数是否为丑数。

丑数就是只包含质因数 2, 3, 5 的正整数。

示例 1:

输入: 6
输出: true
解释: 6 = 2 × 3
示例 2:

输入: 8
输出: true
解释: 8 = 2 × 2 × 2
示例 3:

输入: 14
输出: false
解释: 14 不是丑数，因为它包含了另外一个质因数 7。
说明：

1 是丑数。
输入不会超过 32 位有符号整数的范围: [−231,  231 − 1]。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    if (num === 0)
        return false;
    // 除完所有的 2 , 3 , 5
    while (num % 2 === 0)
        num /= 2;
    while (num % 3 === 0)
        num /= 3;
    while (num % 5 === 0)
        num /= 5;
    return num === 1;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYzLuS4keaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjYzLuS4keaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLEdBQVc7SUFDaEMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzVCLGtCQUFrQjtJQUNsQixPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9CLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvQixPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57yW5YaZ5LiA5Liq56iL5bqP5Yik5pat57uZ5a6a55qE5pWw5piv5ZCm5Li65LiR5pWw44CCXHJcblxyXG7kuJHmlbDlsLHmmK/lj6rljIXlkKvotKjlm6DmlbAgMiwgMywgNSDnmoTmraPmlbTmlbDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiA2XHJcbui+k+WHujogdHJ1ZVxyXG7op6Pph4o6IDYgPSAyIMOXIDNcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IDhcclxu6L6T5Ye6OiB0cnVlXHJcbuino+mHijogOCA9IDIgw5cgMiDDlyAyXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiAxNFxyXG7ovpPlh7o6IGZhbHNlXHJcbuino+mHijogMTQg5LiN5piv5LiR5pWw77yM5Zug5Li65a6D5YyF5ZCr5LqG5Y+m5aSW5LiA5Liq6LSo5Zug5pWwIDfjgIJcclxu6K+05piO77yaXHJcblxyXG4xIOaYr+S4keaVsOOAglxyXG7ovpPlhaXkuI3kvJrotoXov4cgMzIg5L2N5pyJ56ym5Y+35pW05pWw55qE6IyD5Zu0OiBb4oiSMjMxLCAgMjMxIOKIkiAxXeOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzVWdseSA9IGZ1bmN0aW9uIChudW06IG51bWJlcikge1xyXG4gIGlmIChudW0gPT09IDApIHJldHVybiBmYWxzZTtcclxuICAvLyDpmaTlrozmiYDmnInnmoQgMiAsIDMgLCA1XHJcbiAgd2hpbGUgKG51bSAlIDIgPT09IDApIG51bSAvPSAyO1xyXG4gIHdoaWxlIChudW0gJSAzID09PSAwKSBudW0gLz0gMztcclxuICB3aGlsZSAobnVtICUgNSA9PT0gMCkgbnVtIC89IDU7XHJcbiAgcmV0dXJuIG51bSA9PT0gMTtcclxufTtcclxuXHJcbmV4cG9ydCB7fTtcclxuIl19