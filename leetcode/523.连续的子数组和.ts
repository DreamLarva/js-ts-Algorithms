/*
523. 连续的子数组和
给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：

子数组大小 至少为 2 ，且
子数组元素总和为 k 的倍数。
如果存在，返回 true ；否则，返回 false 。

如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。



示例 1：

输入：nums = [23,2,4,6,7], k = 6
输出：true
解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
示例 2：

输入：nums = [23,2,6,4,7], k = 6
输出：true
解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。
42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
示例 3：

输入：nums = [23,2,6,4,7], k = 13
输出：false


提示：

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= sum(nums[i]) <= 231 - 1
1 <= k <= 231 - 1

* */

function checkSubarraySum(nums: number[], k: number): boolean {
  /**
   * 根据 同余定理
   * 如果 前缀和 每次取余, 如果出现两次相同的结果 则 存在 和 能被 k整除
   * */
  //              余数      index
  const map: Map<number, number> = new Map();
  // 规定空的前缀的结束下标为 -1，由于空的前缀的元素和为 0，因此在哈希表中存入键值对 (0,-1)
  // 从 index 为 0 为开始的组合
  map.set(0, -1);
  let 前缀和余数 = 0;
  for (let i = 0; i < nums.length; i++) {
    前缀和余数 = (前缀和余数 + nums[i]) % k;
    if (map.has(前缀和余数)) {
      const prevIndex = map.get(前缀和余数)!;
      if (i - prevIndex >= 2) return true;
    }else{
      map.set(前缀和余数,i)
    }
  }

  return false
}


import assert from "assert";

assert.strictEqual(
  checkSubarraySum([23,2,4,6,7],6),
  true
)

assert.strictEqual(
  checkSubarraySum([23,2,6,4,7],6),
  true
)

