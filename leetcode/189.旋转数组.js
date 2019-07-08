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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg5LuaXi+i9rOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTg5LuaXi+i9rOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOztBQUVKOzs7O0dBSUc7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQztLQUM3QjtBQUNMLENBQUMsQ0FBQztBQUVGOzs7S0FHSztBQUNMLFNBQVMsT0FBTyxDQUFDLElBQWMsRUFBRSxDQUFTO0lBQ3RDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5pWw57uE77yM5bCG5pWw57uE5Lit55qE5YWD57Sg5ZCR5Y+z56e75YqoIGsg5Liq5L2N572u77yM5YW25LitIGsg5piv6Z2e6LSf5pWw44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFsxLDIsMyw0LDUsNiw3XSDlkowgayA9IDNcbui+k+WHujogWzUsNiw3LDEsMiwzLDRdXG7op6Pph4o6XG7lkJHlj7Pml4vovawgMSDmraU6IFs3LDEsMiwzLDQsNSw2XVxu5ZCR5Y+z5peL6L2sIDIg5q2lOiBbNiw3LDEsMiwzLDQsNV1cbuWQkeWPs+aXi+i9rCAzIOatpTogWzUsNiw3LDEsMiwzLDRdXG7npLrkvosgMjpcblxu6L6T5YWlOiBbLTEsLTEwMCwzLDk5XSDlkowgayA9IDJcbui+k+WHujogWzMsOTksLTEsLTEwMF1cbuino+mHijpcbuWQkeWPs+aXi+i9rCAxIOatpTogWzk5LC0xLC0xMDAsM11cbuWQkeWPs+aXi+i9rCAyIOatpTogWzMsOTksLTEsLTEwMF1cbuivtOaYjjpcblxu5bC95Y+v6IO95oOz5Ye65pu05aSa55qE6Kej5Yaz5pa55qGI77yM6Iez5bCR5pyJ5LiJ56eN5LiN5ZCM55qE5pa55rOV5Y+v5Lul6Kej5Yaz6L+Z5Liq6Zeu6aKY44CCXG7opoHmsYLkvb/nlKjnqbrpl7TlpI3mnYLluqbkuLogTygxKSDnmoTljp/lnLDnrpfms5XjgIJcblxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBrXG4gKiBAcmV0dXJuIHt2b2lkfSBEbyBub3QgcmV0dXJuIGFueXRoaW5nLCBtb2RpZnkgbnVtcyBpbi1wbGFjZSBpbnN0ZWFkLlxuICovXG52YXIgcm90YXRlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCBrOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICBudW1zLnVuc2hpZnQobnVtcy5wb3AoKSEpO1xuICAgIH1cbn07XG5cbi8qKlxuICog6L+Z5qC35pON5L2c5pWI546HIOabtOmrmFxuICog5pW05Z2XIOaQrOi/kCDlhoXlrrnliLDlpLTpg6hcbiAqICovXG5mdW5jdGlvbiByb3RhdGUxKG51bXM6IG51bWJlcltdLCBrOiBudW1iZXIpIHtcbiAgICBrICU9IG51bXMubGVuZ3RoO1xuICAgIG51bXMuc3BsaWNlKDAsIDAsIC4uLm51bXMuc3BsaWNlKG51bXMubGVuZ3RoIC0gaykpO1xufVxuXG5leHBvcnQge307XG4iXX0=