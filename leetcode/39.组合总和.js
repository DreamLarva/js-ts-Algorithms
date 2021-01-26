"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例 2：

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]


提示：
  1 <= candidates.length <= 30
  1 <= candidates[i] <= 200
  candidate 中的每个元素都是独一无二的。
  1 <= target <= 500
* */
function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b);
    // 我他妈直接 使用回溯算法
    const result = [];
    step(0, candidates);
    return result;
    function step(current, candidates, currentList = []) {
        for (let i = 0; i < candidates.length; i++) {
            const newValue = current + candidates[i];
            if (newValue > target)
                return; // 排序过 之后的值只可能变大
            if (newValue === target) {
                result.push(currentList.concat(candidates[i]));
                return; // 因为排序过 之后的值只可能变大
            }
            step(newValue, candidates.slice(i), currentList.concat(candidates[i]));
        }
    }
}
const assert_1 = __importDefault(require("assert"));
const assertHelper_1 = require("../util/assertHelper");
assert_1.default.deepStrictEqual(assertHelper_1.sortDeep(combinationSum([2, 3, 6, 7], 7)), assertHelper_1.sortDeep([[7], [2, 2, 3]]));
assert_1.default.deepStrictEqual(assertHelper_1.sortDeep(combinationSum([2, 3, 5], 8)), assertHelper_1.sortDeep([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzku57uE5ZCI5oC75ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zOS7nu4TlkIjmgLvlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtDSTtBQUNKLFNBQVMsY0FBYyxDQUFDLFVBQW9CLEVBQUUsTUFBYztJQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLGVBQWU7SUFDZixNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDOUIsSUFBSSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwQixPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUNYLE9BQWUsRUFDZixVQUFvQixFQUNwQixjQUF3QixFQUFFO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLE1BQU0sUUFBUSxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxRQUFRLEdBQUcsTUFBTTtnQkFBRSxPQUFPLENBQUMsZ0JBQWdCO1lBRS9DLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtnQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxrQkFBa0I7YUFDM0I7WUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxvREFBNEI7QUFDNUIsdURBQWdEO0FBRWhELGdCQUFNLENBQUMsZUFBZSxDQUNwQix1QkFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3pDLHVCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNCLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsdUJBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3RDLHVCQUFRLENBQUM7SUFDUCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDUCxDQUFDLENBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbue7meWumuS4gOS4quaXoOmHjeWkjeWFg+e0oOeahOaVsOe7hCBjYW5kaWRhdGVzIOWSjOS4gOS4quebruagh+aVsCB0YXJnZXQg77yM5om+5Ye6IGNhbmRpZGF0ZXMg5Lit5omA5pyJ5Y+v5Lul5L2/5pWw5a2X5ZKM5Li6IHRhcmdldCDnmoTnu4TlkIjjgIJcblxuY2FuZGlkYXRlcyDkuK3nmoTmlbDlrZflj6/ku6Xml6DpmZDliLbph43lpI3ooqvpgInlj5bjgIJcblxu6K+05piO77yaXG5cbuaJgOacieaVsOWtl++8iOWMheaLrCB0YXJnZXTvvInpg73mmK/mraPmlbTmlbDjgIJcbuino+mbhuS4jeiDveWMheWQq+mHjeWkjeeahOe7hOWQiOOAglxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaY2FuZGlkYXRlcyA9IFsyLDMsNiw3XSwgdGFyZ2V0ID0gNyxcbuaJgOaxguino+mbhuS4uu+8mlxuW1xuICBbN10sXG4gIFsyLDIsM11cbl1cbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mmNhbmRpZGF0ZXMgPSBbMiwzLDVdLCB0YXJnZXQgPSA4LFxu5omA5rGC6Kej6ZuG5Li677yaXG5bXG4gIFsyLDIsMiwyXSxcbiAgWzIsMywzXSxcbiAgWzMsNV1cbl1cblxuXG7mj5DnpLrvvJpcbiAgMSA8PSBjYW5kaWRhdGVzLmxlbmd0aCA8PSAzMFxuICAxIDw9IGNhbmRpZGF0ZXNbaV0gPD0gMjAwXG4gIGNhbmRpZGF0ZSDkuK3nmoTmr4/kuKrlhYPntKDpg73mmK/ni6zkuIDml6DkuoznmoTjgIJcbiAgMSA8PSB0YXJnZXQgPD0gNTAwXG4qICovXG5mdW5jdGlvbiBjb21iaW5hdGlvblN1bShjYW5kaWRhdGVzOiBudW1iZXJbXSwgdGFyZ2V0OiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY2FuZGlkYXRlcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIC8vIOaIkeS7luWmiOebtOaOpSDkvb/nlKjlm57muq/nrpfms5VcbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXVtdID0gW107XG4gIHN0ZXAoMCwgY2FuZGlkYXRlcyk7XG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gc3RlcChcbiAgICBjdXJyZW50OiBudW1iZXIsXG4gICAgY2FuZGlkYXRlczogbnVtYmVyW10sXG4gICAgY3VycmVudExpc3Q6IG51bWJlcltdID0gW11cbiAgKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnQgKyBjYW5kaWRhdGVzW2ldO1xuICAgICAgaWYgKG5ld1ZhbHVlID4gdGFyZ2V0KSByZXR1cm47IC8vIOaOkuW6j+i/hyDkuYvlkI7nmoTlgLzlj6rlj6/og73lj5jlpKdcblxuICAgICAgaWYgKG5ld1ZhbHVlID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudExpc3QuY29uY2F0KGNhbmRpZGF0ZXNbaV0pKTtcbiAgICAgICAgcmV0dXJuOyAvLyDlm6DkuLrmjpLluo/ov4cg5LmL5ZCO55qE5YC85Y+q5Y+v6IO95Y+Y5aSnXG4gICAgICB9XG5cbiAgICAgIHN0ZXAobmV3VmFsdWUsIGNhbmRpZGF0ZXMuc2xpY2UoaSksIGN1cnJlbnRMaXN0LmNvbmNhdChjYW5kaWRhdGVzW2ldKSk7XG4gICAgfVxuICB9XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuaW1wb3J0IHsgc29ydERlZXAgfSBmcm9tIFwiLi4vdXRpbC9hc3NlcnRIZWxwZXJcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgc29ydERlZXAoY29tYmluYXRpb25TdW0oWzIsIDMsIDYsIDddLCA3KSksXG4gIHNvcnREZWVwKFtbN10sIFsyLCAyLCAzXV0pXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgc29ydERlZXAoY29tYmluYXRpb25TdW0oWzIsIDMsIDVdLCA4KSksXG4gIHNvcnREZWVwKFtcbiAgICBbMiwgMiwgMiwgMl0sXG4gICAgWzIsIDMsIDNdLFxuICAgIFszLCA1XSxcbiAgXSlcbik7XG4iXX0=