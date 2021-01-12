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
assert_1.default.deepStrictEqual(exports.permute([1, 2, 3]), [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYu5YWo5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80Ni7lhajmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSjs7O0dBR0c7QUFDSSxJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWM7SUFDM0M7OztTQUdLO0lBQ0wsTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsS0FBYTtRQUN6RCxtQkFBbUI7UUFDbkIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQ7Ozs7YUFJSztRQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsb0VBQW9FO1lBRXBFLGNBQWM7WUFDZCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxZQUFZO1lBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTlCLHNCQUFzQjtZQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7QUFDSCxDQUFDLENBQUM7QUFoQ1MsUUFBQSxPQUFPLFdBZ0NoQjtBQUVGLG9EQUE0QjtBQUc1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxlQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quayoeaciemHjeWkjeaVsOWtl+eahOW6j+WIl++8jOi/lOWbnuWFtuaJgOacieWPr+iDveeahOWFqOaOkuWIl+OAglxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsMiwzXVxu6L6T5Ye6OlxuW1xuICBbMSwyLDNdLFxuICBbMSwzLDJdLFxuICBbMiwxLDNdLFxuICBbMiwzLDFdLFxuICBbMywxLDJdLFxuICBbMywyLDFdXG5dXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9wZXJtdXRhdGlvbnNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxuICovXG5leHBvcnQgdmFyIHBlcm11dGUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pOiBudW1iZXJbXVtdIHtcbiAgLyoqXG4gICAqIOS6pOaNoiDkuKTkuKrkvY3nva7nmoTlgLwg55u05YiwIG7mrKEg6L6T5Ye657uT5p6cXG4gICAqIOiAjOmdniDnlJ/miJAgbiEg5Liq5pWw57uEXG4gICAqICovXG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW11bXSA9IFtdO1xuICBiYWNrdHJhY2sobnVtcy5sZW5ndGgsIG51bXMsIDApO1xuICByZXR1cm4gcmVzdWx0O1xuXG4gIGZ1bmN0aW9uIGJhY2t0cmFjayhuOiBudW1iZXIsIG51bXM6IG51bWJlcltdLCBmaXJzdDogbnVtYmVyKSB7XG4gICAgLy8g5Lqk5o2i55qE5L2N572uIOW3sue7j+ayoeacieS6hiDov5Tlm57nu5PmnpxcbiAgICBpZiAoZmlyc3QgPT09IG4pIHtcbiAgICAgIHJldHVybiByZXN1bHQucHVzaChudW1zLnNsaWNlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOazqOaEj+S4juWFqOaOkuWIl0lJIOeahOS4jeWQjCDkuYvlpIRcbiAgICAgKiDkuI3pnIDopoHmjpLluo9cbiAgICAgKiDnlLHkuo4g5q+P5Liq5YC86YO95LiN5ZCMIOaJgOS7peavj+asoSDkuqTmjaLpg73mnInmhI/kuYkg5omA5Lul6ZyA6KaB5Zue5rqvXG4gICAgICogKi9cbiAgICBmb3IgKGxldCBpID0gZmlyc3Q7IGkgPCBuOyBpKyspIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBzdGFydCR7Zmlyc3R9YCwgbnVtcywgXCJzd2FwXCIsIG51bXNbZmlyc3RdLCBudW1zW2ldKTtcblxuICAgICAgLy8g56ys5LiA5Liq5YW25a6e5pivIOS4jeS6pOaNoueahFxuICAgICAgW251bXNbZmlyc3RdLCBudW1zW2ldXSA9IFtudW1zW2ldLCBudW1zW2ZpcnN0XV07XG4gICAgICAvLyDkuqTmjaLkuIvkuIDkuKrkvY3nva7nmoTlgLxcbiAgICAgIGJhY2t0cmFjayhuLCBudW1zLCBmaXJzdCArIDEpO1xuXG4gICAgICAvLyDlubbkuI3pnIDopoEg5Zue5rqvIOi/lOWbnuS5i+WJjeeahOeKtuaAgSDkuZ/lj6/ku6VcbiAgICAgIFtudW1zW2ZpcnN0XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tmaXJzdF1dO1xuICAgIH1cbiAgfVxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBzb3J0RGVlcCB9IGZyb20gXCIuLi91dGlsL2Fzc2VydEhlbHBlclwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBlcm11dGUoWzEsIDIsIDNdKSwgW1xuICBbMSwgMiwgM10sXG4gIFsxLCAzLCAyXSxcbiAgWzIsIDEsIDNdLFxuICBbMiwgMywgMV0sXG4gIFszLCAyLCAxXSxcbiAgWzMsIDEsIDJdLFxuXSk7XG4iXX0=