/*
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 

提示：
    1. 你可以假设 nums 中的所有元素是不重复的。
    2. n 将在 [1, 10000]之间。
    3. nums 的每个元素都将在 [-9999, 9999]之间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import _ from "lodash";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums: number[], target: number) {
  if (nums.length === 0 || target < _.first(nums)! || target > _.last(nums)!)
    return -1;
  if (target === _.first(nums)) return 0;
  if (target === _.last(nums)) return nums.length - 1;
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    const middleIndex = left + ((right - left) >>> 1);
    const middle = nums[middleIndex];
    if (middle === target) {
      return middleIndex;
    } else if (target < middle) {
      right = middleIndex - 1;
    } else {
      left = middleIndex + 1;
    }
  }

  return -1;
};

import assert from "assert";

assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);

assert.strictEqual(search([], 9), -1);

assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 0), 1);
