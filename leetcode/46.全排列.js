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
exports.permute = function (nums) {
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(exports.permute([1, 2, 3]), [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYu5YWo5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80Ni7lhajmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDUSxRQUFBLE9BQU8sR0FBRyxVQUFVLElBQWM7SUFDM0M7OztTQUdLO0lBQ0wsTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsS0FBYTtRQUN6RCxtQkFBbUI7UUFDbkIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQ7Ozs7YUFJSztRQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsb0VBQW9FO1lBRXBFLGNBQWM7WUFDZCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxZQUFZO1lBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTlCLHNCQUFzQjtZQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFHNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZUFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNWLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmsqHmnInph43lpI3mlbDlrZfnmoTluo/liJfvvIzov5Tlm57lhbbmiYDmnInlj6/og73nmoTlhajmjpLliJfjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IFsxLDIsM11cbui+k+WHujpcbltcbiAgWzEsMiwzXSxcbiAgWzEsMywyXSxcbiAgWzIsMSwzXSxcbiAgWzIsMywxXSxcbiAgWzMsMSwyXSxcbiAgWzMsMiwxXVxuXVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcGVybXV0YXRpb25zXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyW11bXX1cbiAqL1xuZXhwb3J0IHZhciBwZXJtdXRlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKTogbnVtYmVyW11bXSB7XG4gIC8qKlxuICAgKiDkuqTmjaIg5Lik5Liq5L2N572u55qE5YC8IOebtOWIsCBu5qyhIOi+k+WHuue7k+aenFxuICAgKiDogIzpnZ4g55Sf5oiQIG4hIOS4quaVsOe7hFxuICAgKiAqL1xuICBjb25zdCByZXN1bHQ6IG51bWJlcltdW10gPSBbXTtcbiAgYmFja3RyYWNrKG51bXMubGVuZ3RoLCBudW1zLCAwKTtcbiAgcmV0dXJuIHJlc3VsdDtcblxuICBmdW5jdGlvbiBiYWNrdHJhY2sobjogbnVtYmVyLCBudW1zOiBudW1iZXJbXSwgZmlyc3Q6IG51bWJlcikge1xuICAgIC8vIOS6pOaNoueahOS9jee9riDlt7Lnu4/msqHmnInkuoYg6L+U5Zue57uT5p6cXG4gICAgaWYgKGZpcnN0ID09PSBuKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LnB1c2gobnVtcy5zbGljZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDms6jmhI/kuI7lhajmjpLliJdJSSDnmoTkuI3lkIwg5LmL5aSEXG4gICAgICog5LiN6ZyA6KaB5o6S5bqPXG4gICAgICog55Sx5LqOIOavj+S4quWAvOmDveS4jeWQjCDmiYDku6Xmr4/mrKEg5Lqk5o2i6YO95pyJ5oSP5LmJIOaJgOS7pemcgOimgeWbnua6r1xuICAgICAqICovXG4gICAgZm9yIChsZXQgaSA9IGZpcnN0OyBpIDwgbjsgaSsrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgc3RhcnQke2ZpcnN0fWAsIG51bXMsIFwic3dhcFwiLCBudW1zW2ZpcnN0XSwgbnVtc1tpXSk7XG5cbiAgICAgIC8vIOesrOS4gOS4quWFtuWunuaYryDkuI3kuqTmjaLnmoRcbiAgICAgIFtudW1zW2ZpcnN0XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tmaXJzdF1dO1xuICAgICAgLy8g5Lqk5o2i5LiL5LiA5Liq5L2N572u55qE5YC8XG4gICAgICBiYWNrdHJhY2sobiwgbnVtcywgZmlyc3QgKyAxKTtcblxuICAgICAgLy8g5bm25LiN6ZyA6KaBIOWbnua6ryDov5Tlm57kuYvliY3nmoTnirbmgIEg5Lmf5Y+v5LulXG4gICAgICBbbnVtc1tmaXJzdF0sIG51bXNbaV1dID0gW251bXNbaV0sIG51bXNbZmlyc3RdXTtcbiAgICB9XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuaW1wb3J0IHsgc29ydERlZXAgfSBmcm9tIFwiLi4vdXRpbC9hc3NlcnRIZWxwZXJcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwZXJtdXRlKFsxLCAyLCAzXSksIFtcbiAgWzEsIDIsIDNdLFxuICBbMSwgMywgMl0sXG4gIFsyLCAxLCAzXSxcbiAgWzIsIDMsIDFdLFxuICBbMywgMiwgMV0sXG4gIFszLCAxLCAyXSxcbl0pO1xuIl19