/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.10%)
 * Total Accepted:    41.3K
 * Total Submissions: 95.9K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {


};

/**
 * 贪心算法
 * 从位置1开始 每个位置都为 当前位置可以去取到的最大值
 * 然后n位置 会按照 n-1 位置 再判断 如果n-1 为负
 * */
function solution(nums) {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        nums[i] = nums[i] + Math.max(nums[i - 1], 0)
    }
    return Math.max(...nums)
}

/**
 * TODO 分治法
 * */

