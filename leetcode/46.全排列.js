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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYu5YWo5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80Ni7lhajmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSTtBQUNKOzs7R0FHRztBQUNRLFFBQUEsT0FBTyxHQUFHLFVBQVUsSUFBYztJQUN6Qzs7O1NBR0s7SUFDTCxNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxLQUFhO1FBQ3ZELG1CQUFtQjtRQUNuQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZCxPQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDcEM7UUFFRDs7OzthQUlLO1FBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixvRUFBb0U7WUFFcEUsY0FBYztZQUNkLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hELFlBQVk7WUFDWixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUIsc0JBQXNCO1lBQ3RCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztBQUVMLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUc1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZUFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsQjtJQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNaLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quayoeaciemHjeWkjeaVsOWtl+eahOW6j+WIl++8jOi/lOWbnuWFtuaJgOacieWPr+iDveeahOWFqOaOkuWIl+OAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiBbMSwyLDNdXHJcbui+k+WHujpcclxuW1xyXG4gIFsxLDIsM10sXHJcbiAgWzEsMywyXSxcclxuICBbMiwxLDNdLFxyXG4gIFsyLDMsMV0sXHJcbiAgWzMsMSwyXSxcclxuICBbMywyLDFdXHJcbl1cclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3Blcm11dGF0aW9uc1xyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxyXG4gKi9cclxuZXhwb3J0IHZhciBwZXJtdXRlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKTogbnVtYmVyW11bXSB7XHJcbiAgICAvKipcclxuICAgICAqIOS6pOaNoiDkuKTkuKrkvY3nva7nmoTlgLwg55u05YiwIG7mrKEg6L6T5Ye657uT5p6cXHJcbiAgICAgKiDogIzpnZ4g55Sf5oiQIG4hIOS4quaVsOe7hFxyXG4gICAgICogKi9cclxuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgYmFja3RyYWNrKG51bXMubGVuZ3RoLCBudW1zLCAwKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYmFja3RyYWNrKG46IG51bWJlciwgbnVtczogbnVtYmVyW10sIGZpcnN0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyDkuqTmjaLnmoTkvY3nva4g5bey57uP5rKh5pyJ5LqGIOi/lOWbnue7k+aenFxyXG4gICAgICAgIGlmIChmaXJzdCA9PT0gbikge1xyXG4gICAgICAgICAgIHJldHVybiAgcmVzdWx0LnB1c2gobnVtcy5zbGljZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOazqOaEj+S4juWFqOaOkuWIl0lJIOeahOS4jeWQjCDkuYvlpIRcclxuICAgICAgICAgKiDkuI3pnIDopoHmjpLluo9cclxuICAgICAgICAgKiDnlLHkuo4g5q+P5Liq5YC86YO95LiN5ZCMIOaJgOS7peavj+asoSDkuqTmjaLpg73mnInmhI/kuYkg5omA5Lul6ZyA6KaB5Zue5rqvXHJcbiAgICAgICAgICogKi9cclxuICAgICAgICBmb3IgKGxldCBpID0gZmlyc3Q7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHN0YXJ0JHtmaXJzdH1gLCBudW1zLCBcInN3YXBcIiwgbnVtc1tmaXJzdF0sIG51bXNbaV0pO1xyXG5cclxuICAgICAgICAgICAgLy8g56ys5LiA5Liq5YW25a6e5pivIOS4jeS6pOaNoueahFxyXG4gICAgICAgICAgICBbbnVtc1tmaXJzdF0sIG51bXNbaV1dID0gW251bXNbaV0sIG51bXNbZmlyc3RdXTtcclxuICAgICAgICAgICAgLy8g5Lqk5o2i5LiL5LiA5Liq5L2N572u55qE5YC8XHJcbiAgICAgICAgICAgIGJhY2t0cmFjayhuLCBudW1zLCBmaXJzdCArIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8g5bm25LiN6ZyA6KaBIOWbnua6ryDov5Tlm57kuYvliY3nmoTnirbmgIEg5Lmf5Y+v5LulXHJcbiAgICAgICAgICAgIFtudW1zW2ZpcnN0XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tmaXJzdF1dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuaW1wb3J0IHtzb3J0RGVlcH0gZnJvbSBcIi4uL3V0aWwvYXNzZXJ0SGVscGVyXCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgcGVybXV0ZShbMSwgMiwgM10pLFxyXG4gICAgW1xyXG4gICAgICAgIFsxLCAyLCAzXSxcclxuICAgICAgICBbMSwgMywgMl0sXHJcbiAgICAgICAgWzIsIDEsIDNdLFxyXG4gICAgICAgIFsyLCAzLCAxXSxcclxuICAgICAgICBbMywgMiwgMV0sXHJcbiAgICAgICAgWzMsIDEsIDJdLFxyXG4gICAgXSxcclxuKTtcclxuXHJcbiJdfQ==