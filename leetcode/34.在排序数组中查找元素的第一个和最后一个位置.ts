/*
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums: number[], target: number) {
  /**
   * 先用二分法 找到一个 等于target 的位置
   * */
  const index = getAnyTargetIndex(nums, target);
  if (index === -1) return [-1, -1];
  /**
   * 用两个二分法 分别找到左值 和 右值
   * */
  return [
    getLeftIndex(nums, target, index),
    getRightIndex(nums, target, index),
  ];
};

function getLeftIndex(nums: number[], target: number, index: number) {
  let left = 0;
  let right = index;
  while (left < right) {
    /**
     * 二分法找到 mid 的值为 target 且 左侧的侧的值不是target 的 位置
     * */
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else {
      left = mid + 1;
    }
    // 不存在 nums[mid] > target 的情况
  }
  return left;
}

function getRightIndex(nums: number[], target: number, index: number) {
  let left = index;
  let right = nums.length - 1;
  while (left < right) {
    /**
     * 二分法找到 mid 的值为 target 且 左侧的侧的值不是target 的 位置
     * */
    const mid = Math.ceil((left + right) / 2);
    if (nums[mid] === target) {
      left = mid;
    } else {
      right = mid - 1;
    }
    // 不存在 nums[mid] < target 的情况
  }
  return right;
}

function getAnyTargetIndex(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = (right + left) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

import assert from "assert";

assert.strictEqual(getLeftIndex([5, 7, 8, 8, 8, 10], 5, 0), 0);
assert.strictEqual(getLeftIndex([5, 7, 8, 8, 8, 10], 8, 2), 2);
assert.strictEqual(getLeftIndex([5, 7, 8, 8, 8, 10], 8, 3), 2);
assert.strictEqual(getLeftIndex([5, 7, 8, 8, 8, 10], 8, 4), 2);

assert.deepStrictEqual(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]);
assert.deepStrictEqual(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);

assert.deepStrictEqual(searchRange([1], 1), [0, 0]);
