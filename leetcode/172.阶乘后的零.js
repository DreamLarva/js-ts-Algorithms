"use strict";
/*
给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let result = 0;
    let i = 1;
    while (Math.pow(5, i) <= n) {
        result += ~~(n / Math.pow(5, i));
        i++;
    }
    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcyLumYtuS5mOWQjueahOmbti5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTcyLumYtuS5mOWQjueahOmbti50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsQ0FBQztLQUNQO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsCBu77yM6L+U5ZueIG4hIOe7k+aenOWwvuaVsOS4rembtueahOaVsOmHj+OAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiAzXG7ovpPlh7o6IDBcbuino+mHijogMyEgPSA2LCDlsL7mlbDkuK3msqHmnInpm7bjgIJcbuekuuS+iyAyOlxuXG7ovpPlhaU6IDVcbui+k+WHujogMVxu6Kej6YeKOiA1ISA9IDEyMCwg5bC+5pWw5Lit5pyJIDEg5Liq6Zu2Llxu6K+05piOOiDkvaDnrpfms5XnmoTml7bpl7TlpI3mnYLluqblupTkuLogTyhsb2cgbikg44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHRyYWlsaW5nWmVyb2VzID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGxldCBpID0gMTtcbiAgICB3aGlsZSAoTWF0aC5wb3coNSwgaSkgPD0gbikge1xuICAgICAgICByZXN1bHQgKz0gfn4obiAvIE1hdGgucG93KDUsIGkpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt9O1xuIl19