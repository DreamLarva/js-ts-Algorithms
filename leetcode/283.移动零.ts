/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 * */
/**
 * 根据提议不能使用 数组的 filter splice slice 等生成数组的方法
 * */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums: number[]) {
    let i = 0, j = 0;
    for (; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // j 为 除去 0 后目标能 i 下标不为 0 数据 放数据的位置(数据不为 0 会 + 1)
            nums[j++] = nums[i];
        }
    }
    while (j < nums.length) {
        nums[j++] = 0;
    }
};


import assert from "assert";

const sample = [1, 0, 0, 1];
moveZeroes(sample);
assert.deepStrictEqual(sample, [1, 1, 0, 0]);
