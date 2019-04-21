/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (42.87%)
 * Total Accepted:    31.6K
 * Total Submissions: 73.7K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 *
 * 示例 4:
 *
 * 输入: [1,3,5,6], 0
 * 输出: 0
 *
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * 顺序查找
 * */
function solution1(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }

    return nums.length
}

/**
 * 二分查找
 * */
function solution2(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        // 分成2份
        const criticalPoint = ~~((left + right) / 2);
        if (nums[criticalPoint] < target) {
            left = criticalPoint + 1
        } else if (nums[criticalPoint] > target) {
            right = criticalPoint - 1
        } else {
            return criticalPoint
        }
    }

    return left
}

import assert from 'assert';

assert.strictEqual(
    solution2([1, 3, 5, 6], 2),
    1
);

