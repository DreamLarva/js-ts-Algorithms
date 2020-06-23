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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYzLuS4keaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjYzLuS4keaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLEdBQVc7SUFDaEMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzVCLGtCQUFrQjtJQUNsQixPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9CLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvQixPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue8luWGmeS4gOS4queoi+W6j+WIpOaWree7meWumueahOaVsOaYr+WQpuS4uuS4keaVsOOAglxuXG7kuJHmlbDlsLHmmK/lj6rljIXlkKvotKjlm6DmlbAgMiwgMywgNSDnmoTmraPmlbTmlbDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogNlxu6L6T5Ye6OiB0cnVlXG7op6Pph4o6IDYgPSAyIMOXIDNcbuekuuS+iyAyOlxuXG7ovpPlhaU6IDhcbui+k+WHujogdHJ1ZVxu6Kej6YeKOiA4ID0gMiDDlyAyIMOXIDJcbuekuuS+iyAzOlxuXG7ovpPlhaU6IDE0XG7ovpPlh7o6IGZhbHNlXG7op6Pph4o6IDE0IOS4jeaYr+S4keaVsO+8jOWboOS4uuWug+WMheWQq+S6huWPpuWkluS4gOS4qui0qOWboOaVsCA344CCXG7or7TmmI7vvJpcblxuMSDmmK/kuJHmlbDjgIJcbui+k+WFpeS4jeS8mui2hei/hyAzMiDkvY3mnInnrKblj7fmlbTmlbDnmoTojIPlm7Q6IFviiJIyMzEsICAyMzEg4oiSIDFd44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzVWdseSA9IGZ1bmN0aW9uIChudW06IG51bWJlcikge1xuICBpZiAobnVtID09PSAwKSByZXR1cm4gZmFsc2U7XG4gIC8vIOmZpOWujOaJgOacieeahCAyICwgMyAsIDVcbiAgd2hpbGUgKG51bSAlIDIgPT09IDApIG51bSAvPSAyO1xuICB3aGlsZSAobnVtICUgMyA9PT0gMCkgbnVtIC89IDM7XG4gIHdoaWxlIChudW0gJSA1ID09PSAwKSBudW0gLz0gNTtcbiAgcmV0dXJuIG51bSA9PT0gMTtcbn07XG5cbmV4cG9ydCB7fTtcbiJdfQ==