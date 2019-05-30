/*
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，
你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例 1:

输入: nums: [1, 1, 1, 1, 1], S: 3
输出: 5
解释:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
注意:

1.数组的长度不会超过20，并且数组中的值全为正数。
2.初始的数组的和不会超过1000。
3.保证返回的最终结果为32位整数。
* */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums: number[], S: number): number {
    if (nums.length === 0) return S === 0 ? 1 : 0;

    const num = nums[0];
    const nums_next = nums.slice(1);

    return findTargetSumWays(nums_next, S - num)
        + findTargetSumWays(nums_next, S + num);
};


import assert from "assert";

assert.strictEqual(
    findTargetSumWays([1, 1, 1, 1, 1], 3), 5,
);

