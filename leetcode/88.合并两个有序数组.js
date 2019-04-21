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
        } else if (nums1_index < 0 || nums1_data <= nums2_data) {
            nums1[global_index] = nums2_data;
            nums2_index--;
        }
    }
};


{
    const nums1 =[1,2,3,0,0,0];
    const nums2 = [2,5,6];
    merge(nums1, 3  , nums2, nums2.length);
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
