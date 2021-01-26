/*
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums: number[], target: number) {
  /**
   * 分析
   * 由于是 升序 数组 且只有一次旋转
   * 选择 任意一个点 就能够判断是不是 分成左侧部分 和 右侧部分
   * 左右部分必定至少有一个依然是升序的情况 这就能判断 数据是不是绝对的落在某一侧
   * */
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + ((right - left) >>> 1);

    if (nums[middle] === target) return middle;
    // 由于上面 二分 是向下取整 所有只可能出现
    // 极端情况下 只有一个值(共一个值) 或者 只有右侧有值左侧没有值(共2个值)
    // 判断右侧 是否保持升序
    let sureNotInRight = false;
    if (nums[middle + 1] <= nums[right]) {
      // 如果保持升序 就判断 target 是不是落在区间内
      if (nums[middle + 1] <= target && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
        sureNotInRight = true;
      }
    }

    // 判断左侧 是否保持升序
    let sureNotInLeft = false;
    if (middle - 1 >= left && nums[left] <= nums[middle - 1]) {
      if (nums[left] <= target && target <= nums[middle - 1]) {
        right = middle - 1;
      } else {
        left = middle + 1;
        sureNotInLeft = true;
      }
    }

    if (sureNotInLeft && sureNotInRight) return -1;
  }

  return -1;
};

import assert from "assert";

assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2, 3, 4], 0), 4);
assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
assert.strictEqual(search([1, 3], 0), -1);
assert.strictEqual(search([1], 0), -1);
