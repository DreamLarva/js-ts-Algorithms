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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg5LuaXi+i9rOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTg5LuaXi+i9rOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOztBQUVKOzs7O0dBSUc7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQztLQUM3QjtBQUNMLENBQUMsQ0FBQztBQUVGOzs7S0FHSztBQUNMLFNBQVMsT0FBTyxDQUFDLElBQWMsRUFBRSxDQUFTO0lBQ3RDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmlbDnu4TvvIzlsIbmlbDnu4TkuK3nmoTlhYPntKDlkJHlj7Pnp7vliqggayDkuKrkvY3nva7vvIzlhbbkuK0gayDmmK/pnZ7otJ/mlbDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBbMSwyLDMsNCw1LDYsN10g5ZKMIGsgPSAzXHJcbui+k+WHujogWzUsNiw3LDEsMiwzLDRdXHJcbuino+mHijpcclxu5ZCR5Y+z5peL6L2sIDEg5q2lOiBbNywxLDIsMyw0LDUsNl1cclxu5ZCR5Y+z5peL6L2sIDIg5q2lOiBbNiw3LDEsMiwzLDQsNV1cclxu5ZCR5Y+z5peL6L2sIDMg5q2lOiBbNSw2LDcsMSwyLDMsNF1cclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFstMSwtMTAwLDMsOTldIOWSjCBrID0gMlxyXG7ovpPlh7o6IFszLDk5LC0xLC0xMDBdXHJcbuino+mHijpcclxu5ZCR5Y+z5peL6L2sIDEg5q2lOiBbOTksLTEsLTEwMCwzXVxyXG7lkJHlj7Pml4vovawgMiDmraU6IFszLDk5LC0xLC0xMDBdXHJcbuivtOaYjjpcclxuXHJcbuWwveWPr+iDveaDs+WHuuabtOWkmueahOino+WGs+aWueahiO+8jOiHs+WwkeacieS4ieenjeS4jeWQjOeahOaWueazleWPr+S7peino+WGs+i/meS4qumXrumimOOAglxyXG7opoHmsYLkvb/nlKjnqbrpl7TlpI3mnYLluqbkuLogTygxKSDnmoTljp/lnLDnrpfms5XjgIJcclxuXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBrXHJcbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBudW1zIGluLXBsYWNlIGluc3RlYWQuXHJcbiAqL1xyXG52YXIgcm90YXRlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCBrOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7XHJcbiAgICAgICAgbnVtcy51bnNoaWZ0KG51bXMucG9wKCkhKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiDov5nmoLfmk43kvZzmlYjnjocg5pu06auYXHJcbiAqIOaVtOWdlyDmkKzov5Ag5YaF5a655Yiw5aS06YOoXHJcbiAqICovXHJcbmZ1bmN0aW9uIHJvdGF0ZTEobnVtczogbnVtYmVyW10sIGs6IG51bWJlcikge1xyXG4gICAgayAlPSBudW1zLmxlbmd0aDtcclxuICAgIG51bXMuc3BsaWNlKDAsIDAsIC4uLm51bXMuc3BsaWNlKG51bXMubGVuZ3RoIC0gaykpO1xyXG59XHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==