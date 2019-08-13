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
        for (let i = first; i < n; i++) {
            // 第一个其实是 不交换的
            // console.log(`start${first}`, nums, "swap", nums[first], nums[i]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYu5YWo5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80Ni7lhajmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSTtBQUNKOzs7R0FHRztBQUNRLFFBQUEsT0FBTyxHQUFHLFVBQVUsSUFBYztJQUN6Qzs7O1NBR0s7SUFDTCxNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxLQUFhO1FBQ3ZELG1CQUFtQjtRQUNuQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZCxPQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDcEM7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLGNBQWM7WUFDZCxvRUFBb0U7WUFHcEUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEQsWUFBWTtZQUNaLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUU5QixzQkFBc0I7WUFDdEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRzVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixlQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ2xCO0lBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1osQ0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quayoeaciemHjeWkjeaVsOWtl+eahOW6j+WIl++8jOi/lOWbnuWFtuaJgOacieWPr+iDveeahOWFqOaOkuWIl+OAglxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsMiwzXVxu6L6T5Ye6OlxuW1xuICBbMSwyLDNdLFxuICBbMSwzLDJdLFxuICBbMiwxLDNdLFxuICBbMiwzLDFdLFxuICBbMywxLDJdLFxuICBbMywyLDFdXG5dXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9wZXJtdXRhdGlvbnNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxuICovXG5leHBvcnQgdmFyIHBlcm11dGUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pOiBudW1iZXJbXVtdIHtcbiAgICAvKipcbiAgICAgKiDkuqTmjaIg5Lik5Liq5L2N572u55qE5YC8IOebtOWIsCBu5qyhIOi+k+WHuue7k+aenFxuICAgICAqIOiAjOmdniDnlJ/miJAgbiEg5Liq5pWw57uEXG4gICAgICogKi9cbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdW10gPSBbXTtcbiAgICBiYWNrdHJhY2sobnVtcy5sZW5ndGgsIG51bXMsIDApO1xuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBmdW5jdGlvbiBiYWNrdHJhY2sobjogbnVtYmVyLCBudW1zOiBudW1iZXJbXSwgZmlyc3Q6IG51bWJlcikge1xuICAgICAgICAvLyDkuqTmjaLnmoTkvY3nva4g5bey57uP5rKh5pyJ5LqGIOi/lOWbnue7k+aenFxuICAgICAgICBpZiAoZmlyc3QgPT09IG4pIHtcbiAgICAgICAgICAgcmV0dXJuICByZXN1bHQucHVzaChudW1zLnNsaWNlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0OyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAvLyDnrKzkuIDkuKrlhbblrp7mmK8g5LiN5Lqk5o2i55qEXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc3RhcnQke2ZpcnN0fWAsIG51bXMsIFwic3dhcFwiLCBudW1zW2ZpcnN0XSwgbnVtc1tpXSk7XG5cblxuICAgICAgICAgICAgW251bXNbZmlyc3RdLCBudW1zW2ldXSA9IFtudW1zW2ldLCBudW1zW2ZpcnN0XV07XG4gICAgICAgICAgICAvLyDkuqTmjaLkuIvkuIDkuKrkvY3nva7nmoTlgLxcbiAgICAgICAgICAgIGJhY2t0cmFjayhuLCBudW1zLCBmaXJzdCArIDEpO1xuXG4gICAgICAgICAgICAvLyDlubbkuI3pnIDopoEg5Zue5rqvIOi/lOWbnuS5i+WJjeeahOeKtuaAgSDkuZ/lj6/ku6VcbiAgICAgICAgICAgIFtudW1zW2ZpcnN0XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tmaXJzdF1dO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCB7c29ydERlZXB9IGZyb20gXCIuLi91dGlsL2Fzc2VydEhlbHBlclwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHBlcm11dGUoWzEsIDIsIDNdKSxcbiAgICBbXG4gICAgICAgIFsxLCAyLCAzXSxcbiAgICAgICAgWzEsIDMsIDJdLFxuICAgICAgICBbMiwgMSwgM10sXG4gICAgICAgIFsyLCAzLCAxXSxcbiAgICAgICAgWzMsIDIsIDFdLFxuICAgICAgICBbMywgMSwgMl0sXG4gICAgXSxcbik7XG5cbiJdfQ==