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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM2LuWPquWHuueOsOS4gOasoeeahOaVsOWtly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTM2LuWPquWHuueOsOS4gOasoeeahOaVsOWtly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsSUFBYztJQUN2Qzs7U0FFSztJQUNMLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLENBQUM7S0FDakI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN2QixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUM3QixDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4qumdnuepuuaVtOaVsOaVsOe7hO+8jOmZpOS6huafkOS4quWFg+e0oOWPquWHuueOsOS4gOasoeS7peWklu+8jOWFtuS9meavj+S4quWFg+e0oOWdh+WHuueOsOS4pOasoeOAguaJvuWHuumCo+S4quWPquWHuueOsOS6huS4gOasoeeahOWFg+e0oOOAglxyXG5cclxu6K+05piO77yaXHJcblxyXG7kvaDnmoTnrpfms5XlupTor6XlhbfmnInnur/mgKfml7bpl7TlpI3mnYLluqbjgIIg5L2g5Y+v5Lul5LiN5L2/55So6aKd5aSW56m66Ze05p2l5a6e546w5ZCX77yfXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogWzIsMiwxXVxyXG7ovpPlh7o6IDFcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFs0LDEsMiwxLDJdXHJcbui+k+WHujogNFxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBzaW5nbGVOdW1iZXIgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcclxuICAgIC8qKlxyXG4gICAgICog5oyJ5L2NIOaIliAoXikg5ZCM5qC355qE5pWw5a2X5pON5L2c5Lik5qyhIOWwseS4jeS8muacieS7u+S9leW9seWTjSDku6XmraTov4fmu6Tlh7rnjrDlgbbmlbDmrKHmlbDnmoQg5pWw5a2XXHJcbiAgICAgKiAqL1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IG51bSBvZiBudW1zKSB7XHJcbiAgICAgICAgcmVzdWx0IF49IG51bTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIHNpbmdsZU51bWJlcihbMiwgMiwgMV0pLFxyXG4gICAgMSxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgc2luZ2xlTnVtYmVyKFs0LCAxLCAyLCAxLCAyXSksXHJcbiAgICA0LFxyXG4pO1xyXG4iXX0=