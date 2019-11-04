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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcyLumYtuS5mOWQjueahOmbti5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTcyLumYtuS5mOWQjueahOmbti50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFTO0lBQ3BDOztTQUVLO0lBQ0wsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEI7Ozs7YUFJSztRQUNMLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsQ0FBQztLQUNQO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFDakIsQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmlbTmlbAgbu+8jOi/lOWbniBuISDnu5PmnpzlsL7mlbDkuK3pm7bnmoTmlbDph4/jgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiAzXHJcbui+k+WHujogMFxyXG7op6Pph4o6IDMhID0gNiwg5bC+5pWw5Lit5rKh5pyJ6Zu244CCXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiA1XHJcbui+k+WHujogMVxyXG7op6Pph4o6IDUhID0gMTIwLCDlsL7mlbDkuK3mnIkgMSDkuKrpm7YuXHJcbuivtOaYjjog5L2g566X5rOV55qE5pe26Ze05aSN5p2C5bqm5bqU5Li6IE8obG9nIG4pIOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IG5cclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIHRyYWlsaW5nWmVyb2VzID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlsLHmmK/msYIg6Zi25LmY5LitIDUg55qE5pWw6YePKDIg55qE5pWw6YeP5LiA5a6a5aSf55qEKVxyXG4gICAgICogKi9cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgbGV0IGkgPSAxO1xyXG4gICAgd2hpbGUgKE1hdGgucG93KDUsIGkpIDw9IG4pIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA1IOeahOS4quaVsFxyXG4gICAgICAgICAqIDI1IOeahOS4quaVsCAo5bqU6K+lICsgMiDkvYbmmK8gNSDnmoTkuKrmlbAg5bey57uP566X6L+H5LiA5qyh5LqGIOaJgOS7pei/mOaYryArIDEpXHJcbiAgICAgICAgICogMTI1IOeahOS4quaVsCAo5bqU6K+lICsgMiDkvYbmmK8gNSDlkowgMjUg6YO9566X6L+H5LiA5qyhIOaJgOS7pSDov5jmmK8gKyAxKVxyXG4gICAgICAgICAqICovXHJcbiAgICAgICAgcmVzdWx0ICs9IH5+KG4gLyBNYXRoLnBvdyg1LCBpKSk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIHRyYWlsaW5nWmVyb2VzKDUpLFxyXG4gICAgMSxcclxuKTtcclxuIl19