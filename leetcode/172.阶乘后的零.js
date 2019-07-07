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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcyLumYtuS5mOWQjueahOmbti5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTcyLumYtuS5mOWQjueahOmbti50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsQ0FBQztLQUNQO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5pW05pWwIG7vvIzov5Tlm54gbiEg57uT5p6c5bC+5pWw5Lit6Zu255qE5pWw6YeP44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogM1xyXG7ovpPlh7o6IDBcclxu6Kej6YeKOiAzISA9IDYsIOWwvuaVsOS4reayoeaciembtuOAglxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogNVxyXG7ovpPlh7o6IDFcclxu6Kej6YeKOiA1ISA9IDEyMCwg5bC+5pWw5Lit5pyJIDEg5Liq6Zu2LlxyXG7or7TmmI46IOS9oOeul+azleeahOaXtumXtOWkjeadguW6puW6lOS4uiBPKGxvZyBuKSDjgIJcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciB0cmFpbGluZ1plcm9lcyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgbGV0IGkgPSAxO1xyXG4gICAgd2hpbGUgKE1hdGgucG93KDUsIGkpIDw9IG4pIHtcclxuICAgICAgICByZXN1bHQgKz0gfn4obiAvIE1hdGgucG93KDUsIGkpKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=