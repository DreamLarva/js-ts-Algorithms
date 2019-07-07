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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgu5ZCI5bm25Lik5Liq5pyJ5bqP5pWw57uELmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS84OC7lkIjlubbkuKTkuKrmnInluo/mlbDnu4QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQ0U7QUFDRjs7Ozs7O0dBTUc7QUFDSCxJQUFJLEtBQUssR0FBRyxVQUFVLEtBQWUsRUFBRSxDQUFTLEVBQUUsS0FBZSxFQUFFLENBQVM7SUFDeEUscUJBQXFCO0lBQ3JCLElBQUksV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUU7WUFDNUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUNqQyxXQUFXLEVBQUUsQ0FBQztTQUNqQjthQUFNLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3BELEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDakMsV0FBVyxFQUFFLENBQUM7U0FDakI7S0FDSjtBQUNMLENBQUMsQ0FBQztBQUdGO0lBQ0ksTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FFdEI7QUFDRDtJQUNJLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUV0QjtBQUNEO0lBQ0ksTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDM0IsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FFdEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5bODhdIOWQiOW5tuS4pOS4quacieW6j+aVsOe7hFxyXG5cclxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWVyZ2Utc29ydGVkLWFycmF5L2Rlc2NyaXB0aW9uL1xyXG5cclxuVGFnczogYWxnb3JpdGhtcyBibG9vbWJlcmcgZmFjZWJvb2sgbWljcm9zb2Z0IGFycmF5IHR3by1wb2ludGVyc1xyXG5cclxuTGFuZ3M6IGMgY3BwIGNzaGFycCBnb2xhbmcgamF2YSBqYXZhc2NyaXB0IGtvdGxpbiBwaHAgcHl0aG9uIHB5dGhvbjMgcnVieSBydXN0IHNjYWxhIHN3aWZ0XHJcblxyXG4qIGFsZ29yaXRobXNcclxuKiBFYXN5ICg0My4xMiUpXHJcbiogVG90YWwgQWNjZXB0ZWQ6IDMzLjFLXHJcbiogVG90YWwgU3VibWlzc2lvbnM6IDc2LjdLXHJcbiogVGVzdGNhc2UgRXhhbXBsZTogJ1sxLDIsMywwLDAsMF1cXG4zXFxuWzIsNSw2XVxcbjMnXHJcblxyXG7nu5nlrprkuKTkuKrmnInluo/mlbTmlbDmlbDnu4QgbnVtczEg5ZKMIG51bXMy77yM5bCGIG51bXMyIOWQiOW5tuWIsCBudW1zMSDkuK3vvIzkvb/lvpcgbnVtMSDmiJDkuLrkuIDkuKrmnInluo/mlbDnu4TjgIJcclxuXHJcbuivtOaYjjpcclxuXHJcblxyXG7liJ3lp4vljJYgbnVtczEg5ZKMIG51bXMyIOeahOWFg+e0oOaVsOmHj+WIhuWIq+S4uiBtIOWSjCBu44CCXHJcbuS9oOWPr+S7peWBh+iuviBudW1zMSDmnInotrPlpJ/nmoTnqbrpl7TvvIjnqbrpl7TlpKflsI/lpKfkuo7miJbnrYnkuo4gbSArIG7vvInmnaXkv53lrZggbnVtczIg5Lit55qE5YWD57Sg44CCXHJcblxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOlxyXG5udW1zMSA9IFsxLDIsMywwLDAsMF0sIG0gPSAzXHJcbm51bXMyID0gWzIsNSw2XSwgbiA9IDNcclxuXHJcbui+k+WHujogWzEsMiwyLDMsNSw2XVxyXG5cclxuKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXMxXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXMyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBudW1zMSBpbi1wbGFjZSBpbnN0ZWFkLlxyXG4gKi9cclxudmFyIG1lcmdlID0gZnVuY3Rpb24gKG51bXMxOiBudW1iZXJbXSwgbTogbnVtYmVyLCBudW1zMjogbnVtYmVyW10sIG46IG51bWJlcikge1xyXG4gICAgLy8g5ZyobnVtczHkuIog5LuO5ZCO5b6A5YmN5Ye65YWl5pu05aSn55qE5YC8XHJcbiAgICBsZXQgbnVtczJfaW5kZXggPSBuIC0gMTtcclxuICAgIGxldCBudW1zMV9pbmRleCA9IG0gLSAxO1xyXG4gICAgbGV0IGdsb2JhbF9pbmRleCA9IG51bXMxLmxlbmd0aDtcclxuICAgIHdoaWxlICgtLWdsb2JhbF9pbmRleCA+PSAwKSB7XHJcbiAgICAgICAgY29uc3QgbnVtczFfZGF0YSA9IG51bXMxW251bXMxX2luZGV4XTtcclxuICAgICAgICBjb25zdCBudW1zMl9kYXRhID0gbnVtczJbbnVtczJfaW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAobnVtczJfaW5kZXggPCAwIHx8IG51bXMxX2RhdGEgPiBudW1zMl9kYXRhKSB7XHJcbiAgICAgICAgICAgIG51bXMxW2dsb2JhbF9pbmRleF0gPSBudW1zMV9kYXRhO1xyXG4gICAgICAgICAgICBudW1zMV9pbmRleC0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtczFfaW5kZXggPCAwIHx8IG51bXMxX2RhdGEgPD0gbnVtczJfZGF0YSkge1xyXG4gICAgICAgICAgICBudW1zMVtnbG9iYWxfaW5kZXhdID0gbnVtczJfZGF0YTtcclxuICAgICAgICAgICAgbnVtczJfaW5kZXgtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxue1xyXG4gICAgY29uc3QgbnVtczEgPSBbMSwgMiwgMywgMCwgMCwgMF07XHJcbiAgICBjb25zdCBudW1zMiA9IFsyLCA1LCA2XTtcclxuICAgIG1lcmdlKG51bXMxLCAzLCBudW1zMiwgbnVtczIubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKG51bXMxKTtcclxuXHJcbn1cclxue1xyXG4gICAgY29uc3QgbnVtczEgPSBbMF07XHJcbiAgICBjb25zdCBudW1zMiA9IFsxXTtcclxuICAgIG1lcmdlKG51bXMxLCAwLCBudW1zMiwgMSk7XHJcbiAgICBjb25zb2xlLmxvZyhudW1zMSk7XHJcblxyXG59XHJcbntcclxuICAgIGNvbnN0IG51bXMxID0gWzFdO1xyXG4gICAgY29uc3QgbnVtczI6IG51bWJlcltdID0gW107XHJcbiAgICBtZXJnZShudW1zMSwgMCwgbnVtczIsIDApO1xyXG4gICAgY29uc29sZS5sb2cobnVtczEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHt9XHJcbiJdfQ==