/*
1049. 最后一块石头的重量 II
有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。

每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

如果 x == y，那么两块石头都会被完全粉碎；
如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。



示例 1：

输入：stones = [2,7,4,1,8,1]
输出：1
解释：
组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。
示例 2：

输入：stones = [31,26,33,21,40]
输出：5
示例 3：

输入：stones = [1,2]
输出：1


提示：
  1 <= stones.length <= 30
  1 <= stones[i] <= 100

* */
function lastStoneWeightII(stones: number[]): number {
  /**
   * 要使最后一块石头的重量尽可能地小，neg 需要在不超过 ⌊sum/2⌋ 的前提下尽可能地大。
   * 因此本问题可以看作是背包容量为 ⌊sum/2⌋，物品重量和价值均为 stonesi的 0-1 背包问题。
   */
  let sum = 0;
  for (const weight of stones) {
    sum += weight;
  }

  const n = stones.length,
    m = Math.floor(sum / 2);
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false));
  dp[0][0] = true;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j <= m; ++j) {
      if (j < stones[i]) {
        // 石头太重 肯定凑不出 j , 肯定不选
        dp[i + 1][j] = dp[i][j];
      } else {
        // 如果 dp[i][j] 有方案 说明当前石头,也是不选
        // 如果 dp[i][j] 没方案 则尝试 dp[i][j - stones[i]]
        dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]];
      }
    }
  }
  console.log(dp);
  // 最右一列 从下往上 选取结果
  for (let j = m; ; --j) {
    if (dp[n][j]) {
      return sum - 2 * j;
    }
  }
}

/**
 * @link https://leetcode-cn.com/problems/last-stone-weight-ii/solution/zui-hou-yi-kuai-shi-tou-de-zhong-liang-i-95p9/
 *
 * 改用一维 使用倒序遍历
 * */
export function lastStoneWeightII2(stones: number[]): number {
  let sum = 0;
  for (const weight of stones) {
    sum += weight;
  }
  const m = Math.floor(sum / 2);
  const dp = new Array(m + 1).fill(false);
  dp[0] = true;
  for (const weight of stones) {
    for (let j = m; j >= weight; --j) {
      dp[j] = dp[j] || dp[j - weight];
    }
  }
  console.log(dp);
  for (let j = m; ; --j) {
    if (dp[j]) {
      return sum - 2 * j;
    }
  }
}

import assert from "assert";

// assert.strictEqual(lastStoneWeightII([2, 7, 4, 1, 8, 1]), 1);
// assert.strictEqual(lastStoneWeightII2([2, 7, 4, 1, 8, 1]), 1);
// assert.strictEqual(lastStoneWeightII([3, 2, 1]), 0);
// assert.strictEqual(lastStoneWeightII2([3, 2, 1]), 0);
assert.strictEqual(lastStoneWeightII([1, 2, 4]), 1);
assert.strictEqual(lastStoneWeightII2([1, 2, 4]), 1);
