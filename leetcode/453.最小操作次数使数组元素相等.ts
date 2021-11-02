/*
453. 最小操作次数使数组元素相等
给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。



示例 1：

输入：nums = [1,2,3]
输出：3
解释：
只需要3次操作（注意每次操作会增加两个元素的值）：
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
示例 2：

输入：nums = [1,1,1]
输出：0


提示：

n == nums.length
1 <= nums.length <= 10^5
-109 <= nums[i] <= 10^9
答案保证符合 32-bit 整数
* */
function minMoves(nums: number[]): number {
  /*
    因为只需要找出让数组所有元素相等的最小操作次数，所以我们不需要考虑数组中各个元素的绝对大小，即不需要真正算出数组中所有元素相等时的元素值，只需要考虑数组中元素相对大小的变化即可。

    因此，每次操作既可以理解为使 n-1 个元素增加 1，也可以理解使 11 个元素减少 1。显然，后者更利于我们的计算。
  * */

  const min = Math.min(...nums);
  let result = 0;
  for (const num of nums) {
    result += num - min;
  }
  return result;
}

import assert from "assert";

assert.strictEqual(minMoves([1, 2, 3]), 3);
assert.strictEqual(minMoves([1, 1, 1]), 0);
