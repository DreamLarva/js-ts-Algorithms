/*
在一个给定的数组nums中，总是存在一个最大元素 。

查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

如果是，则返回最大元素的索引，否则返回-1。

示例 1:

输入: nums = [3, 6, 1, 0]
输出: 1
解释: 6是最大的整数, 对于数组中的其他整数,
6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.


示例 2:

输入: nums = [1, 2, 3, 4]
输出: -1
解释: 4没有超过3的两倍大, 所以我们返回 -1.


提示:
1. nums 的长度范围在[1, 50].
2. 每个 nums[i] 的整数范围在 [0, 99].
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums: number[]) {
  if (nums.length === 1) return 0;
  let max_index;
  let second_max_index;
  if (nums[0] > nums[1]) {
    max_index = 0;
    second_max_index = 1;
  } else {
    max_index = 1;
    second_max_index = 0;
  }

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > nums[max_index]) {
      second_max_index = max_index;
      max_index = i;
      continue;
    }

    if (nums[i] > nums[second_max_index]) {
      second_max_index = i;
    }
  }

  return nums[second_max_index] * 2 <= nums[max_index] ? max_index : -1;
};

import assert from "assert";

assert.strictEqual(dominantIndex([1, 2, 3, 4]), -1);

assert.strictEqual(dominantIndex([3, 6, 1, 0]), 1);
assert.strictEqual(dominantIndex([6, 3, 1, 0]), 0);
assert.strictEqual(dominantIndex([0, 0, 3, 2]), -1);
