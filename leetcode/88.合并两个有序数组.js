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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgu5ZCI5bm25Lik5Liq5pyJ5bqP5pWw57uELmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS84OC7lkIjlubbkuKTkuKrmnInluo/mlbDnu4QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQ0U7QUFDRjs7Ozs7O0dBTUc7QUFDSCxJQUFJLEtBQUssR0FBRyxVQUFVLEtBQWUsRUFBRSxDQUFTLEVBQUUsS0FBZSxFQUFFLENBQVM7SUFDeEUscUJBQXFCO0lBQ3JCLElBQUksV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUU7WUFDNUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUNqQyxXQUFXLEVBQUUsQ0FBQztTQUNqQjthQUFNLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3BELEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDakMsV0FBVyxFQUFFLENBQUM7U0FDakI7S0FDSjtBQUNMLENBQUMsQ0FBQztBQUdGO0lBQ0ksTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FFdEI7QUFDRDtJQUNJLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUV0QjtBQUNEO0lBQ0ksTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDM0IsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FFdEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuWzg4XSDlkIjlubbkuKTkuKrmnInluo/mlbDnu4RcblxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWVyZ2Utc29ydGVkLWFycmF5L2Rlc2NyaXB0aW9uL1xuXG5UYWdzOiBhbGdvcml0aG1zIGJsb29tYmVyZyBmYWNlYm9vayBtaWNyb3NvZnQgYXJyYXkgdHdvLXBvaW50ZXJzXG5cbkxhbmdzOiBjIGNwcCBjc2hhcnAgZ29sYW5nIGphdmEgamF2YXNjcmlwdCBrb3RsaW4gcGhwIHB5dGhvbiBweXRob24zIHJ1YnkgcnVzdCBzY2FsYSBzd2lmdFxuXG4qIGFsZ29yaXRobXNcbiogRWFzeSAoNDMuMTIlKVxuKiBUb3RhbCBBY2NlcHRlZDogMzMuMUtcbiogVG90YWwgU3VibWlzc2lvbnM6IDc2LjdLXG4qIFRlc3RjYXNlIEV4YW1wbGU6ICdbMSwyLDMsMCwwLDBdXFxuM1xcblsyLDUsNl1cXG4zJ1xuXG7nu5nlrprkuKTkuKrmnInluo/mlbTmlbDmlbDnu4QgbnVtczEg5ZKMIG51bXMy77yM5bCGIG51bXMyIOWQiOW5tuWIsCBudW1zMSDkuK3vvIzkvb/lvpcgbnVtMSDmiJDkuLrkuIDkuKrmnInluo/mlbDnu4TjgIJcblxu6K+05piOOlxuXG5cbuWIneWni+WMliBudW1zMSDlkowgbnVtczIg55qE5YWD57Sg5pWw6YeP5YiG5Yir5Li6IG0g5ZKMIG7jgIJcbuS9oOWPr+S7peWBh+iuviBudW1zMSDmnInotrPlpJ/nmoTnqbrpl7TvvIjnqbrpl7TlpKflsI/lpKfkuo7miJbnrYnkuo4gbSArIG7vvInmnaXkv53lrZggbnVtczIg5Lit55qE5YWD57Sg44CCXG5cblxu56S65L6LOlxuXG7ovpPlhaU6XG5udW1zMSA9IFsxLDIsMywwLDAsMF0sIG0gPSAzXG5udW1zMiA9IFsyLDUsNl0sIG4gPSAzXG5cbui+k+WHujogWzEsMiwyLDMsNSw2XVxuXG4qL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zMVxuICogQHBhcmFtIHtudW1iZXJ9IG1cbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXMyXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7dm9pZH0gRG8gbm90IHJldHVybiBhbnl0aGluZywgbW9kaWZ5IG51bXMxIGluLXBsYWNlIGluc3RlYWQuXG4gKi9cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIChudW1zMTogbnVtYmVyW10sIG06IG51bWJlciwgbnVtczI6IG51bWJlcltdLCBuOiBudW1iZXIpIHtcbiAgICAvLyDlnKhudW1zMeS4iiDku47lkI7lvoDliY3lh7rlhaXmm7TlpKfnmoTlgLxcbiAgICBsZXQgbnVtczJfaW5kZXggPSBuIC0gMTtcbiAgICBsZXQgbnVtczFfaW5kZXggPSBtIC0gMTtcbiAgICBsZXQgZ2xvYmFsX2luZGV4ID0gbnVtczEubGVuZ3RoO1xuICAgIHdoaWxlICgtLWdsb2JhbF9pbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IG51bXMxX2RhdGEgPSBudW1zMVtudW1zMV9pbmRleF07XG4gICAgICAgIGNvbnN0IG51bXMyX2RhdGEgPSBudW1zMltudW1zMl9pbmRleF07XG5cbiAgICAgICAgaWYgKG51bXMyX2luZGV4IDwgMCB8fCBudW1zMV9kYXRhID4gbnVtczJfZGF0YSkge1xuICAgICAgICAgICAgbnVtczFbZ2xvYmFsX2luZGV4XSA9IG51bXMxX2RhdGE7XG4gICAgICAgICAgICBudW1zMV9pbmRleC0tO1xuICAgICAgICB9IGVsc2UgaWYgKG51bXMxX2luZGV4IDwgMCB8fCBudW1zMV9kYXRhIDw9IG51bXMyX2RhdGEpIHtcbiAgICAgICAgICAgIG51bXMxW2dsb2JhbF9pbmRleF0gPSBudW1zMl9kYXRhO1xuICAgICAgICAgICAgbnVtczJfaW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxue1xuICAgIGNvbnN0IG51bXMxID0gWzEsIDIsIDMsIDAsIDAsIDBdO1xuICAgIGNvbnN0IG51bXMyID0gWzIsIDUsIDZdO1xuICAgIG1lcmdlKG51bXMxLCAzLCBudW1zMiwgbnVtczIubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhudW1zMSk7XG5cbn1cbntcbiAgICBjb25zdCBudW1zMSA9IFswXTtcbiAgICBjb25zdCBudW1zMiA9IFsxXTtcbiAgICBtZXJnZShudW1zMSwgMCwgbnVtczIsIDEpO1xuICAgIGNvbnNvbGUubG9nKG51bXMxKTtcblxufVxue1xuICAgIGNvbnN0IG51bXMxID0gWzFdO1xuICAgIGNvbnN0IG51bXMyOiBudW1iZXJbXSA9IFtdO1xuICAgIG1lcmdlKG51bXMxLCAwLCBudW1zMiwgMCk7XG4gICAgY29uc29sZS5sb2cobnVtczEpO1xuXG59XG5cbmV4cG9ydCB7fVxuIl19