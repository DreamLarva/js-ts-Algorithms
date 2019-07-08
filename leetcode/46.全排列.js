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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYu5YWo5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80Ni7lhajmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSTtBQUNKOzs7R0FHRztBQUNILElBQUksT0FBTyxHQUFHLFVBQVUsSUFBYztJQUNsQzs7O1NBR0s7SUFDTCxNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxLQUFhO1FBQ3ZELG1CQUFtQjtRQUNuQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRTdELFlBQVk7WUFDWixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUIsYUFBYTtZQUNiLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEU7SUFDTCxDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ2xCO0lBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1osQ0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quayoeaciemHjeWkjeaVsOWtl+eahOW6j+WIl++8jOi/lOWbnuWFtuaJgOacieWPr+iDveeahOWFqOaOkuWIl+OAglxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsMiwzXVxu6L6T5Ye6OlxuW1xuICBbMSwyLDNdLFxuICBbMSwzLDJdLFxuICBbMiwxLDNdLFxuICBbMiwzLDFdLFxuICBbMywxLDJdLFxuICBbMywyLDFdXG5dXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9wZXJtdXRhdGlvbnNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxuICovXG52YXIgcGVybXV0ZSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSk6IG51bWJlcltdW10ge1xuICAgIC8qKlxuICAgICAqIOS6pOaNoiDkuKTkuKrkvY3nva7nmoTlgLwg55u05YiwIG7mrKEg6L6T5Ye657uT5p6cXG4gICAgICog6ICM6Z2eIOeUn+aIkCBuISDkuKrmlbDnu4RcbiAgICAgKiAqL1xuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW11bXSA9IFtdO1xuICAgIGJhY2t0cmFjayhudW1zLmxlbmd0aCwgbnVtcywgMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGZ1bmN0aW9uIGJhY2t0cmFjayhuOiBudW1iZXIsIG51bXM6IG51bWJlcltdLCBmaXJzdDogbnVtYmVyKSB7XG4gICAgICAgIC8vIOS6pOaNoueahOS9jee9riDlt7Lnu4/msqHmnInkuoYg6L+U5Zue57uT5p6cXG4gICAgICAgIGlmIChmaXJzdCA9PT0gbikge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobnVtcy5zbGljZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgIT09IG4pIFtudW1zW2ZpcnN0XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tmaXJzdF1dO1xuXG4gICAgICAgICAgICAvLyDkuqTmjaLkuIvkuIDkuKrkvY3nva7nmoTlgLxcbiAgICAgICAgICAgIGJhY2t0cmFjayhuLCBudW1zLCBmaXJzdCArIDEpO1xuXG4gICAgICAgICAgICAvLyDlm57muq8g6L+U5Zue5LmL5YmN55qE54q25oCBXG4gICAgICAgICAgICBpZiAoaSAhPT0gbikgW251bXNbZmlyc3RdLCBudW1zW2ldXSA9IFtudW1zW2ldLCBudW1zW2ZpcnN0XV07XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHBlcm11dGUoWzEsIDIsIDNdKSxcbiAgICBbXG4gICAgICAgIFsxLCAyLCAzXSxcbiAgICAgICAgWzEsIDMsIDJdLFxuICAgICAgICBbMiwgMSwgM10sXG4gICAgICAgIFsyLCAzLCAxXSxcbiAgICAgICAgWzMsIDIsIDFdLFxuICAgICAgICBbMywgMSwgMl0sXG4gICAgXSxcbik7XG5cbiJdfQ==