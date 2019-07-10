"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
            result.push(nums.slice());
        }
        for (let i = first; i < n; i++) {
            // 第一个其实是 不交换的
            if (i !== n)
                [nums[first], nums[i]] = [nums[i], nums[first]];
            // 交换下一个位置的值
            backtrack(n, nums, first + 1);
            // 回溯 返回之前的状态
            if (i !== n)
                [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(permute([1, 2, 3]), [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYu5YWo5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80Ni7lhajmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSTtBQUNKOzs7R0FHRztBQUNILElBQUksT0FBTyxHQUFHLFVBQVUsSUFBYztJQUNsQzs7O1NBR0s7SUFDTCxNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxLQUFhO1FBQ3ZELG1CQUFtQjtRQUNuQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixjQUFjO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUU3RCxZQUFZO1lBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTlCLGFBQWE7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0wsQ0FBQztBQUVMLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsQjtJQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNaLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmsqHmnInph43lpI3mlbDlrZfnmoTluo/liJfvvIzov5Tlm57lhbbmiYDmnInlj6/og73nmoTlhajmjpLliJfjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IFsxLDIsM11cbui+k+WHujpcbltcbiAgWzEsMiwzXSxcbiAgWzEsMywyXSxcbiAgWzIsMSwzXSxcbiAgWzIsMywxXSxcbiAgWzMsMSwyXSxcbiAgWzMsMiwxXVxuXVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcGVybXV0YXRpb25zXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyW11bXX1cbiAqL1xudmFyIHBlcm11dGUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pOiBudW1iZXJbXVtdIHtcbiAgICAvKipcbiAgICAgKiDkuqTmjaIg5Lik5Liq5L2N572u55qE5YC8IOebtOWIsCBu5qyhIOi+k+WHuue7k+aenFxuICAgICAqIOiAjOmdniDnlJ/miJAgbiEg5Liq5pWw57uEXG4gICAgICogKi9cbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdW10gPSBbXTtcbiAgICBiYWNrdHJhY2sobnVtcy5sZW5ndGgsIG51bXMsIDApO1xuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBmdW5jdGlvbiBiYWNrdHJhY2sobjogbnVtYmVyLCBudW1zOiBudW1iZXJbXSwgZmlyc3Q6IG51bWJlcikge1xuICAgICAgICAvLyDkuqTmjaLnmoTkvY3nva4g5bey57uP5rKh5pyJ5LqGIOi/lOWbnue7k+aenFxuICAgICAgICBpZiAoZmlyc3QgPT09IG4pIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG51bXMuc2xpY2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gZmlyc3Q7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIC8vIOesrOS4gOS4quWFtuWunuaYryDkuI3kuqTmjaLnmoRcbiAgICAgICAgICAgIGlmIChpICE9PSBuKSBbbnVtc1tmaXJzdF0sIG51bXNbaV1dID0gW251bXNbaV0sIG51bXNbZmlyc3RdXTtcblxuICAgICAgICAgICAgLy8g5Lqk5o2i5LiL5LiA5Liq5L2N572u55qE5YC8XG4gICAgICAgICAgICBiYWNrdHJhY2sobiwgbnVtcywgZmlyc3QgKyAxKTtcblxuICAgICAgICAgICAgLy8g5Zue5rqvIOi/lOWbnuS5i+WJjeeahOeKtuaAgVxuICAgICAgICAgICAgaWYgKGkgIT09IG4pIFtudW1zW2ZpcnN0XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tmaXJzdF1dO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBwZXJtdXRlKFsxLCAyLCAzXSksXG4gICAgW1xuICAgICAgICBbMSwgMiwgM10sXG4gICAgICAgIFsxLCAzLCAyXSxcbiAgICAgICAgWzIsIDEsIDNdLFxuICAgICAgICBbMiwgMywgMV0sXG4gICAgICAgIFszLCAyLCAxXSxcbiAgICAgICAgWzMsIDEsIDJdLFxuICAgIF0sXG4pO1xuXG4iXX0=