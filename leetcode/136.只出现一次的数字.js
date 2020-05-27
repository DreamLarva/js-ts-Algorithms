"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(singleNumber([2, 2, 1]), 1);
assert_1.default.strictEqual(singleNumber([4, 1, 2, 1, 2]), 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM2LuWPquWHuueOsOS4gOasoeeahOaVsOWtly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTM2LuWPquWHuueOsOS4gOasoeeahOaVsOWtly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsSUFBYztJQUN6Qzs7U0FFSztJQUNMLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLENBQUM7S0FDZjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq6Z2e56m65pW05pWw5pWw57uE77yM6Zmk5LqG5p+Q5Liq5YWD57Sg5Y+q5Ye6546w5LiA5qyh5Lul5aSW77yM5YW25L2Z5q+P5Liq5YWD57Sg5Z2H5Ye6546w5Lik5qyh44CC5om+5Ye66YKj5Liq5Y+q5Ye6546w5LqG5LiA5qyh55qE5YWD57Sg44CCXG5cbuivtOaYju+8mlxuXG7kvaDnmoTnrpfms5XlupTor6XlhbfmnInnur/mgKfml7bpl7TlpI3mnYLluqbjgIIg5L2g5Y+v5Lul5LiN5L2/55So6aKd5aSW56m66Ze05p2l5a6e546w5ZCX77yfXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFsyLDIsMV1cbui+k+WHujogMVxu56S65L6LIDI6XG5cbui+k+WFpTogWzQsMSwyLDEsMl1cbui+k+WHujogNFxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBzaW5nbGVOdW1iZXIgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcbiAgLyoqXG4gICAqIOaMieS9jSDmiJYgKF4pIOWQjOagt+eahOaVsOWtl+aTjeS9nOS4pOasoSDlsLHkuI3kvJrmnInku7vkvZXlvbHlk40g5Lul5q2k6L+H5ruk5Ye6546w5YG25pWw5qyh5pWw55qEIOaVsOWtl1xuICAgKiAqL1xuICBsZXQgcmVzdWx0ID0gMDtcbiAgZm9yIChjb25zdCBudW0gb2YgbnVtcykge1xuICAgIHJlc3VsdCBePSBudW07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoc2luZ2xlTnVtYmVyKFsyLCAyLCAxXSksIDEpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKHNpbmdsZU51bWJlcihbNCwgMSwgMiwgMSwgMl0pLCA0KTtcbiJdfQ==