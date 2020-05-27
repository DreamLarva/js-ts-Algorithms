"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
[88] 合并两个有序数组

https://leetcode-cn.com/problems/merge-sorted-array/description/

Tags: algorithms bloomberg facebook microsoft array two-pointers

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (43.12%)
* Total Accepted: 33.1K
* Total Submissions: 76.7K
* Testcase Example: '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:


初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。


示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

输出: [1,2,2,3,5,6]

*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // 在nums1上 从后往前出入更大的值
    let nums2_index = n - 1;
    let nums1_index = m - 1;
    let global_index = nums1.length;
    while (--global_index >= 0) {
        const nums1_data = nums1[nums1_index];
        const nums2_data = nums2[nums2_index];
        if (nums2_index < 0 || nums1_data > nums2_data) {
            nums1[global_index] = nums1_data;
            nums1_index--;
        }
        else if (nums1_index < 0 || nums1_data <= nums2_data) {
            nums1[global_index] = nums2_data;
            nums2_index--;
        }
    }
};
{
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, nums2.length);
    console.log(nums1);
}
{
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2, 1);
    console.log(nums1);
}
{
    const nums1 = [1];
    const nums2 = [];
    merge(nums1, 0, nums2, 0);
    console.log(nums1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgu5ZCI5bm25Lik5Liq5pyJ5bqP5pWw57uELmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS84OC7lkIjlubbkuKTkuKrmnInluo/mlbDnu4QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQ0U7QUFDRjs7Ozs7O0dBTUc7QUFDSCxJQUFJLEtBQUssR0FBRyxVQUFVLEtBQWUsRUFBRSxDQUFTLEVBQUUsS0FBZSxFQUFFLENBQVM7SUFDMUUscUJBQXFCO0lBQ3JCLElBQUksV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQzFCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUU7WUFDOUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUNqQyxXQUFXLEVBQUUsQ0FBQztTQUNmO2FBQU0sSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDdEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUNqQyxXQUFXLEVBQUUsQ0FBQztTQUNmO0tBQ0Y7QUFDSCxDQUFDLENBQUM7QUFFRjtJQUNFLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ3BCO0FBQ0Q7SUFDRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDcEI7QUFDRDtJQUNFLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQzNCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbls4OF0g5ZCI5bm25Lik5Liq5pyJ5bqP5pWw57uEXG5cbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21lcmdlLXNvcnRlZC1hcnJheS9kZXNjcmlwdGlvbi9cblxuVGFnczogYWxnb3JpdGhtcyBibG9vbWJlcmcgZmFjZWJvb2sgbWljcm9zb2Z0IGFycmF5IHR3by1wb2ludGVyc1xuXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcblxuKiBhbGdvcml0aG1zXG4qIEVhc3kgKDQzLjEyJSlcbiogVG90YWwgQWNjZXB0ZWQ6IDMzLjFLXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiA3Ni43S1xuKiBUZXN0Y2FzZSBFeGFtcGxlOiAnWzEsMiwzLDAsMCwwXVxcbjNcXG5bMiw1LDZdXFxuMydcblxu57uZ5a6a5Lik5Liq5pyJ5bqP5pW05pWw5pWw57uEIG51bXMxIOWSjCBudW1zMu+8jOWwhiBudW1zMiDlkIjlubbliLAgbnVtczEg5Lit77yM5L2/5b6XIG51bTEg5oiQ5Li65LiA5Liq5pyJ5bqP5pWw57uE44CCXG5cbuivtOaYjjpcblxuXG7liJ3lp4vljJYgbnVtczEg5ZKMIG51bXMyIOeahOWFg+e0oOaVsOmHj+WIhuWIq+S4uiBtIOWSjCBu44CCXG7kvaDlj6/ku6XlgYforr4gbnVtczEg5pyJ6Laz5aSf55qE56m66Ze077yI56m66Ze05aSn5bCP5aSn5LqO5oiW562J5LqOIG0gKyBu77yJ5p2l5L+d5a2YIG51bXMyIOS4reeahOWFg+e0oOOAglxuXG5cbuekuuS+izpcblxu6L6T5YWlOlxubnVtczEgPSBbMSwyLDMsMCwwLDBdLCBtID0gM1xubnVtczIgPSBbMiw1LDZdLCBuID0gM1xuXG7ovpPlh7o6IFsxLDIsMiwzLDUsNl1cblxuKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtczFcbiAqIEBwYXJhbSB7bnVtYmVyfSBtXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zMlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBudW1zMSBpbi1wbGFjZSBpbnN0ZWFkLlxuICovXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiAobnVtczE6IG51bWJlcltdLCBtOiBudW1iZXIsIG51bXMyOiBudW1iZXJbXSwgbjogbnVtYmVyKSB7XG4gIC8vIOWcqG51bXMx5LiKIOS7juWQjuW+gOWJjeWHuuWFpeabtOWkp+eahOWAvFxuICBsZXQgbnVtczJfaW5kZXggPSBuIC0gMTtcbiAgbGV0IG51bXMxX2luZGV4ID0gbSAtIDE7XG4gIGxldCBnbG9iYWxfaW5kZXggPSBudW1zMS5sZW5ndGg7XG4gIHdoaWxlICgtLWdsb2JhbF9pbmRleCA+PSAwKSB7XG4gICAgY29uc3QgbnVtczFfZGF0YSA9IG51bXMxW251bXMxX2luZGV4XTtcbiAgICBjb25zdCBudW1zMl9kYXRhID0gbnVtczJbbnVtczJfaW5kZXhdO1xuXG4gICAgaWYgKG51bXMyX2luZGV4IDwgMCB8fCBudW1zMV9kYXRhID4gbnVtczJfZGF0YSkge1xuICAgICAgbnVtczFbZ2xvYmFsX2luZGV4XSA9IG51bXMxX2RhdGE7XG4gICAgICBudW1zMV9pbmRleC0tO1xuICAgIH0gZWxzZSBpZiAobnVtczFfaW5kZXggPCAwIHx8IG51bXMxX2RhdGEgPD0gbnVtczJfZGF0YSkge1xuICAgICAgbnVtczFbZ2xvYmFsX2luZGV4XSA9IG51bXMyX2RhdGE7XG4gICAgICBudW1zMl9pbmRleC0tO1xuICAgIH1cbiAgfVxufTtcblxue1xuICBjb25zdCBudW1zMSA9IFsxLCAyLCAzLCAwLCAwLCAwXTtcbiAgY29uc3QgbnVtczIgPSBbMiwgNSwgNl07XG4gIG1lcmdlKG51bXMxLCAzLCBudW1zMiwgbnVtczIubGVuZ3RoKTtcbiAgY29uc29sZS5sb2cobnVtczEpO1xufVxue1xuICBjb25zdCBudW1zMSA9IFswXTtcbiAgY29uc3QgbnVtczIgPSBbMV07XG4gIG1lcmdlKG51bXMxLCAwLCBudW1zMiwgMSk7XG4gIGNvbnNvbGUubG9nKG51bXMxKTtcbn1cbntcbiAgY29uc3QgbnVtczEgPSBbMV07XG4gIGNvbnN0IG51bXMyOiBudW1iZXJbXSA9IFtdO1xuICBtZXJnZShudW1zMSwgMCwgbnVtczIsIDApO1xuICBjb25zb2xlLmxvZyhudW1zMSk7XG59XG5cbmV4cG9ydCB7fTtcbiJdfQ==