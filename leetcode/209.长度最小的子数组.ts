/*
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

示例: 

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
进阶:

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s: number, nums: number[]) {
    // 双指针
    let result = Infinity;
    let left = 0;
    let right = 0;
    /**
     * 每次 left 或 right 变动 并不 重新计算 两个下标之间元素的和
     * 而是 left 移动 就 减去 left 下标的值
     * right 移动就 加上 right 下标的值
     * */
    let sum = 0;
    while (right < nums.length) {
        if (sum + nums[right] < s) {
            sum += nums[right];
            right++;
        } else {
            if (right - left < s) result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return Number.isFinite(result) ? result : 0;
};

import assert from "assert";

assert.strictEqual(
    minSubArrayLen(100, []),
    0,
);
assert.strictEqual(
    minSubArrayLen(7, [2, 3, 1, 2, 4, 3]),
    2,
);
assert.strictEqual(
    minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]),
    2,
);
