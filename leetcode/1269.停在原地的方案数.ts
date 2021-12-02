/*
1269. 停在原地的方案数
有一个长度为 arrLen 的数组，开始有一个指针在索引 0 处。

每一步操作中，你可以将指针向左或向右移动 1 步，或者停在原地（指针不能被移动到数组范围外）。

给你两个整数 steps 和 arrLen ，请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

由于答案可能会很大，请返回方案数 模 10^9 + 7 后的结果。



示例 1：

输入：steps = 3, arrLen = 2
输出：4
解释：3 步后，总共有 4 种不同的方法可以停在索引 0 处。
向右，向左，不动
不动，向右，向左
向右，不动，向左
不动，不动，不动
示例  2：

输入：steps = 2, arrLen = 4
输出：2
解释：2 步后，总共有 2 种不同的方法可以停在索引 0 处。
向右，向左
不动，不动
示例 3：

输入：steps = 4, arrLen = 2
输出：8


提示：

1 <= steps <= 500
1 <= arrLen <= 10^6
* */

/**
 * @link https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solution/ting-zai-yuan-di-de-fang-an-shu-by-leetcode-soluti/
 * */
function numWays1(steps: number, arrLen: number): number {
  const MODULO = 1000000007;
  // 也就是 j 能停留的位置index         数组最右侧 或者 步数的一半(由于必须走回开始的位置, 超过一半步数再往右走是回不来的 所以不需要计算)
  let maxColumn = Math.min(arrLen - 1, Math.floor(steps / 2));
  const dp = new Array(steps + 1)
    .fill(0)
    //                              加上起点位置 0
    .map(() => new Array(maxColumn + 1).fill(0));
  dp[0][0] = 1;
  // 第一行 也就是 只有0步 所以 出了 j = 0 位置 其他都是 0
  // 所以下面计算 i 从 1 开始

  // 多少步
  for (let i = 1; i <= steps; i++) {
    //
    // 在哪一位
    for (let j = 0; j <= maxColumn; j++) {
      // dp[i][j] 位置的值 等于 dp[i - 1][j] (这步不动) + dp[i - 1][j - 1](右走一步 到j) + dp[i - 1][j + 1])(左走一步到 j)

      dp[i][j] = dp[i - 1][j];
      if (j - 1 >= 0) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MODULO;
      }
      if (j + 1 <= maxColumn) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MODULO;
      }
    }
  }
  return dp[steps][0];
}

function numWays2(steps: number, arrLen: number): number {
  const MODULO = 1000000007;
  let maxColumn = Math.min(arrLen - 1, Math.floor(steps / 2));
  // 由于 每一个 i 位置的数组 之与 i-1 位置的数组有关, 则只需要留一个数组用来缓存即可
  let dp = new Array(maxColumn + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= steps; i++) {
    const dpNext = new Array(maxColumn + 1).fill(0);
    for (let j = 0; j <= maxColumn; j++) {
      dpNext[j] = dp[j];
      if (j - 1 >= 0) {
        dpNext[j] = (dpNext[j] + dp[j - 1]) % MODULO;
      }
      if (j + 1 <= maxColumn) {
        dpNext[j] = (dpNext[j] + dp[j + 1]) % MODULO;
      }
    }
    // 更新 i 位置的 动态规划结果
    dp = dpNext;
  }
  return dp[0];
}

import assert from "assert";
assert.strictEqual(numWays1(3, 2), 4);
assert.strictEqual(numWays1(2, 4), 2);
assert.strictEqual(numWays1(4, 2), 8);
