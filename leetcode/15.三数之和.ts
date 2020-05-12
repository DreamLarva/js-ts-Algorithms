/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums: number[]) {
  // 使用三个指针
  // 当前指正  当前指针后的一个位置 和 数组最后的位置
  nums.sort((a, b) => a - b);

  // 排除极端情况
  // 都小于0
  if (nums[nums.length - 1] < 0) {
    return [];
  }
  // 都 大于 0
  if (nums[0] > 0) {
    return [];
  }
  const result = [];

  for (let i = 0; i < nums.length - 2; ) {
    let left = i + 1;
    let right = nums.length - 1;
    if (nums[i] > 0) break; // 同样 最左侧的值不能 大于0
    while (nums[right] >= 0 && left < right) {
      // 最右侧的值 不能 小于0
      const sum = nums[left] + nums[i] + nums[right];
      if (sum === 0) {
        result.push([nums[left], nums[i], nums[right]]);
      }
      if (sum < 0) {
        while (left < right && nums[++left] === nums[left - 1]) {}
      } else {
        while (left < right && nums[--right] === nums[right + 1]) {}
      }
    }
    while (nums[i] === nums[++i]) {}
  }

  return result;
};

import assert from "assert";
import { sortDeep } from "../util/assertHelper";

assert.deepStrictEqual(
  sortDeep(threeSum([-1, 0, 1, 2, -1, -4])),
  sortDeep([
    [-1, -1, 2],
    [-1, 0, 1],
  ])
);
assert.deepStrictEqual(
  sortDeep(threeSum([-1, 0, 1, 2, -1, -4, -1, 0, 1, 2, -1, -4, 0])),
  sortDeep([
    [-4, 2, 2],
    [-1, -1, 2],
    [-1, 0, 1],
    [0, 0, 0],
  ])
);
assert.deepStrictEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
