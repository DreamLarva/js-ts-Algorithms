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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg5LuaXi+i9rOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTg5LuaXi+i9rOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOzs7OztBQUVKOzs7O0dBSUc7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQztLQUM3QjtBQUNMLENBQUMsQ0FBQztBQUVGOzs7S0FHSztBQUNMLFNBQVMsT0FBTyxDQUFDLElBQWMsRUFBRSxDQUFTO0lBQ3RDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxvREFBNEI7QUFFNUI7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE1BQU0sRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUN4QixDQUFDO0NBRUw7QUFDRDtJQUNJLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsTUFBTSxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3hCLENBQUM7Q0FFTCIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quaVsOe7hO+8jOWwhuaVsOe7hOS4reeahOWFg+e0oOWQkeWPs+enu+WKqCBrIOS4quS9jee9ru+8jOWFtuS4rSBrIOaYr+mdnui0n+aVsOOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFsxLDIsMyw0LDUsNiw3XSDlkowgayA9IDNcclxu6L6T5Ye6OiBbNSw2LDcsMSwyLDMsNF1cclxu6Kej6YeKOlxyXG7lkJHlj7Pml4vovawgMSDmraU6IFs3LDEsMiwzLDQsNSw2XVxyXG7lkJHlj7Pml4vovawgMiDmraU6IFs2LDcsMSwyLDMsNCw1XVxyXG7lkJHlj7Pml4vovawgMyDmraU6IFs1LDYsNywxLDIsMyw0XVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogWy0xLC0xMDAsMyw5OV0g5ZKMIGsgPSAyXHJcbui+k+WHujogWzMsOTksLTEsLTEwMF1cclxu6Kej6YeKOlxyXG7lkJHlj7Pml4vovawgMSDmraU6IFs5OSwtMSwtMTAwLDNdXHJcbuWQkeWPs+aXi+i9rCAyIOatpTogWzMsOTksLTEsLTEwMF1cclxu6K+05piOOlxyXG5cclxu5bC95Y+v6IO95oOz5Ye65pu05aSa55qE6Kej5Yaz5pa55qGI77yM6Iez5bCR5pyJ5LiJ56eN5LiN5ZCM55qE5pa55rOV5Y+v5Lul6Kej5Yaz6L+Z5Liq6Zeu6aKY44CCXHJcbuimgeaxguS9v+eUqOepuumXtOWkjeadguW6puS4uiBPKDEpIOeahOWOn+WcsOeul+azleOAglxyXG5cclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHBhcmFtIHtudW1iZXJ9IGtcclxuICogQHJldHVybiB7dm9pZH0gRG8gbm90IHJldHVybiBhbnl0aGluZywgbW9kaWZ5IG51bXMgaW4tcGxhY2UgaW5zdGVhZC5cclxuICovXHJcbnZhciByb3RhdGUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIGs6IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHtcclxuICAgICAgICBudW1zLnVuc2hpZnQobnVtcy5wb3AoKSEpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOi/meagt+aTjeS9nOaViOeOhyDmm7Tpq5hcclxuICog5pW05Z2XIOaQrOi/kCDlhoXlrrnliLDlpLTpg6hcclxuICogKi9cclxuZnVuY3Rpb24gcm90YXRlMShudW1zOiBudW1iZXJbXSwgazogbnVtYmVyKSB7XHJcbiAgICBrICU9IG51bXMubGVuZ3RoO1xyXG4gICAgbnVtcy5zcGxpY2UoMCwgMCwgLi4ubnVtcy5zcGxpY2UobnVtcy5sZW5ndGggLSBrKSk7XHJcbn1cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcclxuXHJcbntcclxuICAgIGNvbnN0IHNhbXBsZSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XTtcclxuICAgIHJvdGF0ZShzYW1wbGUsIDMpO1xyXG4gICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgICAgICBzYW1wbGUsXHJcbiAgICAgICAgWzUsIDYsIDcsIDEsIDIsIDMsIDRdLFxyXG4gICAgKTtcclxuXHJcbn1cclxue1xyXG4gICAgY29uc3Qgc2FtcGxlID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xyXG4gICAgcm90YXRlMShzYW1wbGUsIDMpO1xyXG4gICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgICAgICBzYW1wbGUsXHJcbiAgICAgICAgWzUsIDYsIDcsIDEsIDIsIDMsIDRdLFxyXG4gICAgKTtcclxuXHJcbn1cclxuIl19