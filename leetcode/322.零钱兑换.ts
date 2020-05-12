/*
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1:

输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1
示例 2:

输入: coins = [2], amount = 3
输出: -1
说明:
你可以认为每种硬币的数量是无限的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import _ from "lodash";
/**
 * 回溯算法 不出意外的超时了
 */
var coinChange1 = function (coins: number[], amount: number) {
  let cacheTimes = Infinity;

  return backtrack(
    coins.sort((a, b) => b - a),
    amount
  );

  function backtrack(
    coins: number[],
    amount: number,
    times: number = 0
  ): number {
    if (times >= cacheTimes) return -1;
    if (amount === 0) {
      cacheTimes = Math.min(cacheTimes, times);
      return times;
    }
    if (amount < 0) return -1;

    const curTimesArr = coins
      .map((coin) => backtrack(coins, amount - coin, times + 1))
      .filter((v) => v !== -1);

    if (curTimesArr.length !== 0) return Math.min(...curTimesArr);
    return -1;
  }
};

/**
 * 添加 剪枝 的回溯算法
 * 从大的数额的硬币 的 最大的数量目 开始试
 * 然后用较小数额的硬币 的 最大数目 递归至 刚好等于 amount
 * 当 当前数额 以及 更小数额都无法 做到时 就回到 更大数额的 但是用少一枚的数目
 */
var coinChange2 = function (coins: number[], amount: number) {
  let cacheTimes = Infinity;
  coins.sort((a, b) => a - b);
  backtrack(coins, coins.length - 1, amount, 0);
  return cacheTimes === Infinity ? -1 : cacheTimes;

  function backtrack(
    coins: number[],
    index: number = coins.length - 1, // 限定每次回溯能用到的 值 从大到小
    amount: number,
    times: number = 0
  ) {
    if (index < 0) return;
    if (amount === 0) cacheTimes = Math.min(times, cacheTimes);
    // 如果 全用 用当前 数额的银币 也会超过已经可以达成的 最小枚数 就剪枝
    if (cacheTimes <= times + amount / coins[index]) {
      return;
    }

    if (amount % coins[index] === 0) {
      cacheTimes = Math.min(cacheTimes, times + amount / coins[index]);
      return;
    }

    for (let i = Math.floor(amount / coins[index]); i >= 0; i--) {
      backtrack(coins, index - 1, amount - coins[index] * i, times + i);
    }
  }
};

// todo 动态规划

import assert from "assert";
// assert.strictEqual(coinChange([1, 2, 5], 11), 3);
// assert.strictEqual(coinChange([2, 5, 10, 1], 27), 4);
// assert.strictEqual(coinChange([2, 5, 10], 100), 10);

assert.strictEqual(coinChange2([1, 2, 5], 11), 3);
assert.strictEqual(coinChange2([2, 5, 10, 1], 27), 4);
assert.strictEqual(coinChange2([2, 5, 10], 100), 10);
