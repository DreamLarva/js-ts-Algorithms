"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYu5YWo5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80Ni7lhajmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSTtBQUNKOzs7R0FHRztBQUNRLFFBQUEsT0FBTyxHQUFHLFVBQVUsSUFBYztJQUN6Qzs7O1NBR0s7SUFDTCxNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxLQUFhO1FBQ3ZELG1CQUFtQjtRQUNuQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZCxPQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDcEM7UUFFRDs7OzthQUlLO1FBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixvRUFBb0U7WUFFcEUsY0FBYztZQUNkLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hELFlBQVk7WUFDWixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUIsc0JBQXNCO1lBQ3RCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztBQUVMLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUc1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZUFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsQjtJQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNaLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmsqHmnInph43lpI3mlbDlrZfnmoTluo/liJfvvIzov5Tlm57lhbbmiYDmnInlj6/og73nmoTlhajmjpLliJfjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IFsxLDIsM11cbui+k+WHujpcbltcbiAgWzEsMiwzXSxcbiAgWzEsMywyXSxcbiAgWzIsMSwzXSxcbiAgWzIsMywxXSxcbiAgWzMsMSwyXSxcbiAgWzMsMiwxXVxuXVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcGVybXV0YXRpb25zXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyW11bXX1cbiAqL1xuZXhwb3J0IHZhciBwZXJtdXRlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKTogbnVtYmVyW11bXSB7XG4gICAgLyoqXG4gICAgICog5Lqk5o2iIOS4pOS4quS9jee9rueahOWAvCDnm7TliLAgbuasoSDovpPlh7rnu5PmnpxcbiAgICAgKiDogIzpnZ4g55Sf5oiQIG4hIOS4quaVsOe7hFxuICAgICAqICovXG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXVtdID0gW107XG4gICAgYmFja3RyYWNrKG51bXMubGVuZ3RoLCBudW1zLCAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgZnVuY3Rpb24gYmFja3RyYWNrKG46IG51bWJlciwgbnVtczogbnVtYmVyW10sIGZpcnN0OiBudW1iZXIpIHtcbiAgICAgICAgLy8g5Lqk5o2i55qE5L2N572uIOW3sue7j+ayoeacieS6hiDov5Tlm57nu5PmnpxcbiAgICAgICAgaWYgKGZpcnN0ID09PSBuKSB7XG4gICAgICAgICAgIHJldHVybiAgcmVzdWx0LnB1c2gobnVtcy5zbGljZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDms6jmhI/kuI7lhajmjpLliJdJSSDnmoTkuI3lkIwg5LmL5aSEXG4gICAgICAgICAqIOS4jemcgOimgeaOkuW6j1xuICAgICAgICAgKiDnlLHkuo4g5q+P5Liq5YC86YO95LiN5ZCMIOaJgOS7peavj+asoSDkuqTmjaLpg73mnInmhI/kuYkg5omA5Lul6ZyA6KaB5Zue5rqvXG4gICAgICAgICAqICovXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHN0YXJ0JHtmaXJzdH1gLCBudW1zLCBcInN3YXBcIiwgbnVtc1tmaXJzdF0sIG51bXNbaV0pO1xuXG4gICAgICAgICAgICAvLyDnrKzkuIDkuKrlhbblrp7mmK8g5LiN5Lqk5o2i55qEXG4gICAgICAgICAgICBbbnVtc1tmaXJzdF0sIG51bXNbaV1dID0gW251bXNbaV0sIG51bXNbZmlyc3RdXTtcbiAgICAgICAgICAgIC8vIOS6pOaNouS4i+S4gOS4quS9jee9rueahOWAvFxuICAgICAgICAgICAgYmFja3RyYWNrKG4sIG51bXMsIGZpcnN0ICsgMSk7XG5cbiAgICAgICAgICAgIC8vIOW5tuS4jemcgOimgSDlm57muq8g6L+U5Zue5LmL5YmN55qE54q25oCBIOS5n+WPr+S7pVxuICAgICAgICAgICAgW251bXNbZmlyc3RdLCBudW1zW2ldXSA9IFtudW1zW2ldLCBudW1zW2ZpcnN0XV07XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuaW1wb3J0IHtzb3J0RGVlcH0gZnJvbSBcIi4uL3V0aWwvYXNzZXJ0SGVscGVyXCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgcGVybXV0ZShbMSwgMiwgM10pLFxuICAgIFtcbiAgICAgICAgWzEsIDIsIDNdLFxuICAgICAgICBbMSwgMywgMl0sXG4gICAgICAgIFsyLCAxLCAzXSxcbiAgICAgICAgWzIsIDMsIDFdLFxuICAgICAgICBbMywgMiwgMV0sXG4gICAgICAgIFszLCAxLCAyXSxcbiAgICBdLFxuKTtcblxuIl19
