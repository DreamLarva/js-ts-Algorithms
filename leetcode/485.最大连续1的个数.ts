/*
给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:

输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
注意：

输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-consecutive-ones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums: number[]) {
  if (nums.length === 0) return 0;
  return Math.max(
    ...nums
      .join("")
      .split("0")
      .map((v) => v.length)
  );
};

/**
 * 快约20倍
 * */
var findMaxConsecutiveOnes_1 = function (nums: number[]) {
  if (nums.length === 0) return 0;
  let max = 0;
  let current_length = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = Math.max(max, current_length);
      current_length = 0;
    } else {
      current_length++;
    }
  }

  return Math.max(max, current_length);
};

import assert from "assert";

assert.strictEqual(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
assert.strictEqual(findMaxConsecutiveOnes_1([1, 1, 0, 1, 1, 1]), 3);
