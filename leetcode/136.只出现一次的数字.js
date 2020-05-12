"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM2LuWPquWHuueOsOS4gOasoeeahOaVsOWtly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTM2LuWPquWHuueOsOS4gOasoeeahOaVsOWtly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsSUFBYztJQUN2Qzs7U0FFSztJQUNMLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLENBQUM7S0FDakI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN2QixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUM3QixDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrpnZ7nqbrmlbTmlbDmlbDnu4TvvIzpmaTkuobmn5DkuKrlhYPntKDlj6rlh7rnjrDkuIDmrKHku6XlpJbvvIzlhbbkvZnmr4/kuKrlhYPntKDlnYflh7rnjrDkuKTmrKHjgILmib7lh7rpgqPkuKrlj6rlh7rnjrDkuobkuIDmrKHnmoTlhYPntKDjgIJcblxu6K+05piO77yaXG5cbuS9oOeahOeul+azleW6lOivpeWFt+aciee6v+aAp+aXtumXtOWkjeadguW6puOAgiDkvaDlj6/ku6XkuI3kvb/nlKjpop3lpJbnqbrpl7TmnaXlrp7njrDlkJfvvJ9cblxu56S65L6LIDE6XG5cbui+k+WFpTogWzIsMiwxXVxu6L6T5Ye6OiAxXG7npLrkvosgMjpcblxu6L6T5YWlOiBbNCwxLDIsMSwyXVxu6L6T5Ye6OiA0XG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHNpbmdsZU51bWJlciA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICAgIC8qKlxuICAgICAqIOaMieS9jSDmiJYgKF4pIOWQjOagt+eahOaVsOWtl+aTjeS9nOS4pOasoSDlsLHkuI3kvJrmnInku7vkvZXlvbHlk40g5Lul5q2k6L+H5ruk5Ye6546w5YG25pWw5qyh5pWw55qEIOaVsOWtl1xuICAgICAqICovXG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgZm9yIChjb25zdCBudW0gb2YgbnVtcykge1xuICAgICAgICByZXN1bHQgXj0gbnVtO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBzaW5nbGVOdW1iZXIoWzIsIDIsIDFdKSxcbiAgICAxLFxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBzaW5nbGVOdW1iZXIoWzQsIDEsIDIsIDEsIDJdKSxcbiAgICA0LFxuKTtcbiJdfQ==
