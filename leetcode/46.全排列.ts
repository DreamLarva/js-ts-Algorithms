/*
给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums: number[]): number[][] {
    /**
     * 交换 两个位置的值 直到 n次 输出结果
     * 而非 生成 n! 个数组
     * */
    const result: number[][] = [];
    backtrack(nums.length, nums, 0);
    return result;

    function backtrack(n: number, nums: number[], first: number) {
        // 交换的位置 已经没有了 返回结果
        if (first === n) {
            result.push(nums.slice());
        }

        for (let i = first; i < n; i++) {
            if (i !== n) [nums[first], nums[i]] = [nums[i], nums[first]];

            // 交换下一个位置的值
            backtrack(n, nums, first + 1);

            // 回溯 返回之前的状态
            if (i !== n) [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }

};

import assert from "assert";

assert.deepStrictEqual(
    permute([1, 2, 3]),
    [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 2, 1],
        [3, 1, 2],
    ],
);

