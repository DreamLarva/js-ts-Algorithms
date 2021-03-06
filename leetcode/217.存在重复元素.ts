/*
如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
* */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]) {
  return nums.length !== new Set(nums).size;
};

import assert from "assert";

assert.ok(containsDuplicate([1, 2, 3, 3]));
