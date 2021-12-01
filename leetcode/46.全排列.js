"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permute = void 0;
/*
给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    /**
     * 交换 两个位置的值 直到 n次 输出结果
     * 而非 生成 n! 个数组
     * */
    const result = [];
    backtrack(nums.length, nums, 0);
    return result;
    function backtrack(n, nums, first) {
        // 交换的位置 已经没有了 返回结果
        if (first === n) {
            return result.push(nums.slice());
        }
        /**
         * 注意与全排列II 的不同 之处
         * 不需要排序
         * 由于 每个值都不同 所以每次 交换都有意义 所以需要回溯
         * */
        for (let i = first; i < n; i++) {
            // console.log(`start${first}`, nums, "swap", nums[first], nums[i]);
            // 第一个其实是 不交换的
            [nums[first], nums[i]] = [nums[i], nums[first]];
            // 交换下一个位置的值
            backtrack(n, nums, first + 1);
            // 并不需要 回溯 返回之前的状态 也可以
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }
};
exports.permute = permute;
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual((0, exports.permute)([1, 2, 3]), [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYu5YWo5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80Ni7lhajmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSSxJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWM7SUFDM0M7OztTQUdLO0lBQ0wsTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsS0FBYTtRQUN6RCxtQkFBbUI7UUFDbkIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQ7Ozs7YUFJSztRQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsb0VBQW9FO1lBRXBFLGNBQWM7WUFDZCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxZQUFZO1lBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTlCLHNCQUFzQjtZQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7QUFDSCxDQUFDLENBQUM7QUFoQ1MsUUFBQSxPQUFPLFdBZ0NoQjtBQUVGLG9EQUE0QjtBQUc1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFBLGVBQU8sRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5rKh5pyJ6YeN5aSN5pWw5a2X55qE5bqP5YiX77yM6L+U5Zue5YW25omA5pyJ5Y+v6IO955qE5YWo5o6S5YiX44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiBbMSwyLDNdXG7ovpPlh7o6XG5bXG4gIFsxLDIsM10sXG4gIFsxLDMsMl0sXG4gIFsyLDEsM10sXG4gIFsyLDMsMV0sXG4gIFszLDEsMl0sXG4gIFszLDIsMV1cbl1cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3Blcm11dGF0aW9uc1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcltdW119XG4gKi9cbmV4cG9ydCB2YXIgcGVybXV0ZSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSk6IG51bWJlcltdW10ge1xuICAvKipcbiAgICog5Lqk5o2iIOS4pOS4quS9jee9rueahOWAvCDnm7TliLAgbuasoSDovpPlh7rnu5PmnpxcbiAgICog6ICM6Z2eIOeUn+aIkCBuISDkuKrmlbDnu4RcbiAgICogKi9cbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXVtdID0gW107XG4gIGJhY2t0cmFjayhudW1zLmxlbmd0aCwgbnVtcywgMCk7XG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gYmFja3RyYWNrKG46IG51bWJlciwgbnVtczogbnVtYmVyW10sIGZpcnN0OiBudW1iZXIpIHtcbiAgICAvLyDkuqTmjaLnmoTkvY3nva4g5bey57uP5rKh5pyJ5LqGIOi/lOWbnue7k+aenFxuICAgIGlmIChmaXJzdCA9PT0gbikge1xuICAgICAgcmV0dXJuIHJlc3VsdC5wdXNoKG51bXMuc2xpY2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rOo5oSP5LiO5YWo5o6S5YiXSUkg55qE5LiN5ZCMIOS5i+WkhFxuICAgICAqIOS4jemcgOimgeaOkuW6j1xuICAgICAqIOeUseS6jiDmr4/kuKrlgLzpg73kuI3lkIwg5omA5Lul5q+P5qyhIOS6pOaNoumDveacieaEj+S5iSDmiYDku6XpnIDopoHlm57muq9cbiAgICAgKiAqL1xuICAgIGZvciAobGV0IGkgPSBmaXJzdDsgaSA8IG47IGkrKykge1xuICAgICAgLy8gY29uc29sZS5sb2coYHN0YXJ0JHtmaXJzdH1gLCBudW1zLCBcInN3YXBcIiwgbnVtc1tmaXJzdF0sIG51bXNbaV0pO1xuXG4gICAgICAvLyDnrKzkuIDkuKrlhbblrp7mmK8g5LiN5Lqk5o2i55qEXG4gICAgICBbbnVtc1tmaXJzdF0sIG51bXNbaV1dID0gW251bXNbaV0sIG51bXNbZmlyc3RdXTtcbiAgICAgIC8vIOS6pOaNouS4i+S4gOS4quS9jee9rueahOWAvFxuICAgICAgYmFja3RyYWNrKG4sIG51bXMsIGZpcnN0ICsgMSk7XG5cbiAgICAgIC8vIOW5tuS4jemcgOimgSDlm57muq8g6L+U5Zue5LmL5YmN55qE54q25oCBIOS5n+WPr+S7pVxuICAgICAgW251bXNbZmlyc3RdLCBudW1zW2ldXSA9IFtudW1zW2ldLCBudW1zW2ZpcnN0XV07XG4gICAgfVxuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCB7IHNvcnREZWVwIH0gZnJvbSBcIi4uL3V0aWwvYXNzZXJ0SGVscGVyXCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGVybXV0ZShbMSwgMiwgM10pLCBbXG4gIFsxLCAyLCAzXSxcbiAgWzEsIDMsIDJdLFxuICBbMiwgMSwgM10sXG4gIFsyLCAzLCAxXSxcbiAgWzMsIDIsIDFdLFxuICBbMywgMSwgMl0sXG5dKTtcbiJdfQ==