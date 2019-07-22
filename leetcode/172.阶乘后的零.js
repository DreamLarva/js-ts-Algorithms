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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    /**
     * 就是求 阶乘中 5 的数量(2 的数量一定够的)
     * */
    let result = 0;
    let i = 1;
    while (Math.pow(5, i) <= n) {
        /**
         * 5 的个数
         * 25 的个数 (应该 + 2 但是 5 的个数 已经算过一次了 所以还是 + 1)
         * 125 的个数 (应该 + 2 但是 5 和 25 都算过一次 所以 还是 + 1)
         * */
        result += ~~(n / Math.pow(5, i));
        i++;
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(trailingZeroes(5), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcyLumYtuS5mOWQjueahOmbti5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTcyLumYtuS5mOWQjueahOmbti50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFTO0lBQ3BDOztTQUVLO0lBQ0wsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEI7Ozs7YUFJSztRQUNMLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsQ0FBQztLQUNQO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFDakIsQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5pW05pWwIG7vvIzov5Tlm54gbiEg57uT5p6c5bC+5pWw5Lit6Zu255qE5pWw6YeP44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IDNcbui+k+WHujogMFxu6Kej6YeKOiAzISA9IDYsIOWwvuaVsOS4reayoeaciembtuOAglxu56S65L6LIDI6XG5cbui+k+WFpTogNVxu6L6T5Ye6OiAxXG7op6Pph4o6IDUhID0gMTIwLCDlsL7mlbDkuK3mnIkgMSDkuKrpm7YuXG7or7TmmI46IOS9oOeul+azleeahOaXtumXtOWkjeadguW6puW6lOS4uiBPKGxvZyBuKSDjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgdHJhaWxpbmdaZXJvZXMgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gICAgLyoqXG4gICAgICog5bCx5piv5rGCIOmYtuS5mOS4rSA1IOeahOaVsOmHjygyIOeahOaVsOmHj+S4gOWumuWkn+eahClcbiAgICAgKiAqL1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGxldCBpID0gMTtcbiAgICB3aGlsZSAoTWF0aC5wb3coNSwgaSkgPD0gbikge1xuICAgICAgICAvKipcbiAgICAgICAgICogNSDnmoTkuKrmlbBcbiAgICAgICAgICogMjUg55qE5Liq5pWwICjlupTor6UgKyAyIOS9huaYryA1IOeahOS4quaVsCDlt7Lnu4/nrpfov4fkuIDmrKHkuoYg5omA5Lul6L+Y5pivICsgMSlcbiAgICAgICAgICogMTI1IOeahOS4quaVsCAo5bqU6K+lICsgMiDkvYbmmK8gNSDlkowgMjUg6YO9566X6L+H5LiA5qyhIOaJgOS7pSDov5jmmK8gKyAxKVxuICAgICAgICAgKiAqL1xuICAgICAgICByZXN1bHQgKz0gfn4obiAvIE1hdGgucG93KDUsIGkpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgdHJhaWxpbmdaZXJvZXMoNSksXG4gICAgMSxcbik7XG4iXX0=