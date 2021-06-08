/*
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，
你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例 1:

输入: nums: [1, 1, 1, 1, 1], S: 3
输出: 5
解释:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
注意:

1.数组的长度不会超过20，并且数组中的值全为正数。
2.初始的数组的和不会超过1000。
3.保证返回的最终结果为32位整数。
* */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums: number[], S: number): number {
  /* 回溯法 */
  if (nums.length === 0) return S === 0 ? 1 : 0;

  const num = nums[0];
  const nums_next = nums.slice(1);

  return (
    findTargetSumWays(nums_next, S - num) +
    findTargetSumWays(nums_next, S + num)
  );
};

function findTargetSumWays2(nums: number[], target: number): number {
  /* 动态规划 */
  /**
   * 记数组的元素和为 sum，添加 - 号的元素之和为 neg，
   * 则其余添加 + 的元素之和为 sum−neg
   *
   * 则 成立
   * (sum−neg)−neg=sum−2⋅neg=target
   * 即
   * neg = (sum - target) / 2
   * */
  let sum = 0; // 全正数的总和
  for (const num of nums) {
    sum += num;
  }
  // diff 判断是否有解
  const diff = sum - target;
  // diff < 0 说明 sum 太小全部累加 都不够
  // diff % 2 !== 0 上面等式已经推导, 需要 除2, 且 target 为整数
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }

  const n = nums.length;
  const neg = diff / 2;
  /**
   * 动态规划 状态表
   * dp[i][j] 表示在数组 nums 的前 i 个数中选取元素，
   * 使得这些元素之和等于 j 的方案数。
   * 假设数组 nums 的长度为 n，
   * 则最终答案为 dp[n][neg]。
   *
   *
   * 边界条件
   * j = 0  => dp[0][j] = 1 // 当没有任何元素可以选取时，元素和只能是 0，对应的方案数是 1
   * j >= 1 => dp[0][j] = 0
   *
   * 状态转移方程为
   * 由于完全转换成 取 和不取的 情况, 则如果这i位 达不到要求,顺延 使用取i-1位的结果
   * j < nums[i] => dp[i][j] = dp[i−1][j]
   * j >= nums[i] => dp[i][j] + dp[i - 1][nums[j - nums[i]]
   * */
  const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1];
    for (let j = 0; j <= neg; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= num) {
        dp[i][j] += dp[i - 1][j - num];
      }
    }
  }
  return dp[n][neg];
}

import assert from "assert";

assert.strictEqual(findTargetSumWays([1, 1, 1, 1, 1], 3), 5);
// assert.strictEqual(findTargetSumWays2([1, 1, 1, 1, 1], 3), 5); // neg = 1

findTargetSumWays2([1, 2, 3, 4, 5, 6, 7], 4);
