"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    /**
     * 按位 或 (^) 同样的数字操作两次 就不会有任何影响 以此过滤出现偶数次数的 数字
     * */
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM2LuWPquWHuueOsOS4gOasoeeahOaVsOWtly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTM2LuWPquWHuueOsOS4gOasoeeahOaVsOWtly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsSUFBYztJQUN2Qzs7U0FFSztJQUNMLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLENBQUM7S0FDakI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrpnZ7nqbrmlbTmlbDmlbDnu4TvvIzpmaTkuobmn5DkuKrlhYPntKDlj6rlh7rnjrDkuIDmrKHku6XlpJbvvIzlhbbkvZnmr4/kuKrlhYPntKDlnYflh7rnjrDkuKTmrKHjgILmib7lh7rpgqPkuKrlj6rlh7rnjrDkuobkuIDmrKHnmoTlhYPntKDjgIJcclxuXHJcbuivtOaYju+8mlxyXG5cclxu5L2g55qE566X5rOV5bqU6K+l5YW35pyJ57q/5oCn5pe26Ze05aSN5p2C5bqm44CCIOS9oOWPr+S7peS4jeS9v+eUqOmineWkluepuumXtOadpeWunueOsOWQl++8n1xyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFsyLDIsMV1cclxu6L6T5Ye6OiAxXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBbNCwxLDIsMSwyXVxyXG7ovpPlh7o6IDRcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgc2luZ2xlTnVtYmVyID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XHJcbiAgICAvKipcclxuICAgICAqIOaMieS9jSDmiJYgKF4pIOWQjOagt+eahOaVsOWtl+aTjeS9nOS4pOasoSDlsLHkuI3kvJrmnInku7vkvZXlvbHlk40g5Lul5q2k6L+H5ruk5Ye6546w5YG25pWw5qyh5pWw55qEIOaVsOWtl1xyXG4gICAgICogKi9cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBudW0gb2YgbnVtcykge1xyXG4gICAgICAgIHJlc3VsdCBePSBudW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IHt9XHJcbiJdfQ==