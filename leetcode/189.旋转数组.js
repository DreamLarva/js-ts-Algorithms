"use strict";
/*
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的原地算法。

* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};
/**
 * 这样操作效率 更高
 * 整块 搬运 内容到头部
 * */
function rotate1(nums, k) {
    k %= nums.length;
    nums.splice(0, 0, ...nums.splice(nums.length - k));
}
const assert_1 = __importDefault(require("assert"));
{
    const sample = [1, 2, 3, 4, 5, 6, 7];
    rotate(sample, 3);
    assert_1.default.deepStrictEqual(sample, [5, 6, 7, 1, 2, 3, 4]);
}
{
    const sample = [1, 2, 3, 4, 5, 6, 7];
    rotate1(sample, 3);
    assert_1.default.deepStrictEqual(sample, [5, 6, 7, 1, 2, 3, 4]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg5LuaXi+i9rOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTg5LuaXi+i9rOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOzs7OztBQUVKOzs7O0dBSUc7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQztLQUM3QjtBQUNMLENBQUMsQ0FBQztBQUVGOzs7S0FHSztBQUNMLFNBQVMsT0FBTyxDQUFDLElBQWMsRUFBRSxDQUFTO0lBQ3RDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxvREFBNEI7QUFFNUI7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE1BQU0sRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUN4QixDQUFDO0NBRUw7QUFDRDtJQUNJLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsTUFBTSxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3hCLENBQUM7Q0FFTCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmlbDnu4TvvIzlsIbmlbDnu4TkuK3nmoTlhYPntKDlkJHlj7Pnp7vliqggayDkuKrkvY3nva7vvIzlhbbkuK0gayDmmK/pnZ7otJ/mlbDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzEsMiwzLDQsNSw2LDddIOWSjCBrID0gM1xu6L6T5Ye6OiBbNSw2LDcsMSwyLDMsNF1cbuino+mHijpcbuWQkeWPs+aXi+i9rCAxIOatpTogWzcsMSwyLDMsNCw1LDZdXG7lkJHlj7Pml4vovawgMiDmraU6IFs2LDcsMSwyLDMsNCw1XVxu5ZCR5Y+z5peL6L2sIDMg5q2lOiBbNSw2LDcsMSwyLDMsNF1cbuekuuS+iyAyOlxuXG7ovpPlhaU6IFstMSwtMTAwLDMsOTldIOWSjCBrID0gMlxu6L6T5Ye6OiBbMyw5OSwtMSwtMTAwXVxu6Kej6YeKOlxu5ZCR5Y+z5peL6L2sIDEg5q2lOiBbOTksLTEsLTEwMCwzXVxu5ZCR5Y+z5peL6L2sIDIg5q2lOiBbMyw5OSwtMSwtMTAwXVxu6K+05piOOlxuXG7lsL3lj6/og73mg7Plh7rmm7TlpJrnmoTop6PlhrPmlrnmoYjvvIzoh7PlsJHmnInkuInnp43kuI3lkIznmoTmlrnms5Xlj6/ku6Xop6PlhrPov5nkuKrpl67popjjgIJcbuimgeaxguS9v+eUqOepuumXtOWkjeadguW6puS4uiBPKDEpIOeahOWOn+WcsOeul+azleOAglxuXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHBhcmFtIHtudW1iZXJ9IGtcbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBudW1zIGluLXBsYWNlIGluc3RlYWQuXG4gKi9cbnZhciByb3RhdGUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIGs6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgIG51bXMudW5zaGlmdChudW1zLnBvcCgpISk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDov5nmoLfmk43kvZzmlYjnjocg5pu06auYXG4gKiDmlbTlnZcg5pCs6L+QIOWGheWuueWIsOWktOmDqFxuICogKi9cbmZ1bmN0aW9uIHJvdGF0ZTEobnVtczogbnVtYmVyW10sIGs6IG51bWJlcikge1xuICAgIGsgJT0gbnVtcy5sZW5ndGg7XG4gICAgbnVtcy5zcGxpY2UoMCwgMCwgLi4ubnVtcy5zcGxpY2UobnVtcy5sZW5ndGggLSBrKSk7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0Jztcblxue1xuICAgIGNvbnN0IHNhbXBsZSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XTtcbiAgICByb3RhdGUoc2FtcGxlLCAzKTtcbiAgICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgICAgICBzYW1wbGUsXG4gICAgICAgIFs1LCA2LCA3LCAxLCAyLCAzLCA0XSxcbiAgICApO1xuXG59XG57XG4gICAgY29uc3Qgc2FtcGxlID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xuICAgIHJvdGF0ZTEoc2FtcGxlLCAzKTtcbiAgICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgICAgICBzYW1wbGUsXG4gICAgICAgIFs1LCA2LCA3LCAxLCAyLCAzLCA0XSxcbiAgICApO1xuXG59XG4iXX0=