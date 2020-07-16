/*
面试题 17.04. 消失的数字
数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？

注意：本题相对书上原题稍作改动

示例 1：

输入：[3,0,1]
输出：2


示例 2：

输入：[9,6,4,2,3,5,7,0,1]
输出：8
* */
function missingNumber(nums: number[]): number {
  /**
   * 直接用 位运算 或非 来解决即可
   * */
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= i;
    result ^= nums[i];
  }
  result ^= nums.length;
  return result;
}

import assert from "assert";
assert.strictEqual(missingNumber([3, 0, 1]), 2);
assert.strictEqual(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
