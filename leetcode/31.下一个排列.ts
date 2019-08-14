/*
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums: number[]) {
    // 最大的数 一定 从最大值开始降序
    // 先从后向前扫描 直到一个非升序的数字 就是待交换的数字 的 高位
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            // 从 该位 向后扫描  由于之前已经证实 之后的数字 一定是降序排列
            // 找到 一个能 替换 当前数字的位置 (并不破坏 降序排列)
            const high = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                const next = nums[j + 1] == null ? -Infinity : nums[j + 1]; // 至少是最后一个位置
                if (high >= next) {
                    // 交换这两个数
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    // 然后将高位之后的 数字 反转(之后的数字 变为字典序 最小的组合)
                    if (i + 1 !== nums.length - 1) {
                        reverse(nums, i + 1, nums.length - 1);
                    }
                    return nums;
                }
            }
        }
    }

    nums.reverse();
    return nums;
};

function reverse(nums: any[], start: number, end: number) {
    if (start === end) return;

    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}


import assert from "assert";

// assert.deepStrictEqual(
//     nextPermutation([1, 2, 3]),
//     [1, 3, 2],
// );
// assert.deepStrictEqual(
//     nextPermutation([3, 2, 1]),
//     [1, 2, 3],
// );
assert.deepStrictEqual(
    nextPermutation([1, 3, 2]),
    [2, 1, 3],
);
// assert.deepStrictEqual(
//     nextPermutation([1, 1, 5]),
//     [1, 5, 1],
// );
//
