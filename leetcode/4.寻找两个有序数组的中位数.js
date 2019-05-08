/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
* */
/**
 * 由于规定了时间复杂度 所以不能排序
 * */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums1_len = nums1.length;
    const nums2_len = nums2.length;
    let long, short;
    if (nums1_len > nums2_len) [long, short] = [nums1, nums2];
    else [long, short] = [nums2, nums1];

    // 如果中位数是一个值 表示 左侧的值的个数
    // 如果是两个值 表示 左侧的值的个数 + 中位数其中的一个值
    const before_median_count = (nums1_len + nums2_len) >> 1;
    let long_index = before_median_count - 1;
    let short_index = 0;

    let left = 0;
    let right = long_index;

    // 如果 两个序列的 值的最大值 大于 非两个序列部分 的最小值 则表示 两个序列的值都小于中位数 继续下一步
    while (
        Math.min(long_index === long.length - 1 ? Infinity : long[long_index + 1], short_index === short.length - 1 ? Infinity : short[short_index + 1])
        < Math.max(long[long_index], short[short_index])
        ) {


    }



};
