/*
552. 学生出勤记录 II
可以用字符串表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
'A'：Absent，缺勤
'L'：Late，迟到
'P'：Present，到场
如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：

按 总出勤 计，学生缺勤（'A'）严格 少于两天。
学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
给你一个整数 n ，表示出勤记录的长度（次数）。请你返回记录长度为 n 时，可能获得出勤奖励的记录情况 数量 。答案可能很大，所以返回对 109 + 7 取余 的结果。



示例 1：

输入：n = 2
输出：8
解释：
有 8 种长度为 2 的记录将被视为可奖励：
"PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
只有"AA"不会被视为可奖励，因为缺勤次数为 2 次（需要少于 2 次）。
示例 2：

输入：n = 1
输出：3
示例 3：

输入：n = 10101
输出：183236316


提示：

1 <= n <= 105
* */
/**
 * @param {number} n
 * @return {number}
 */
function checkRecord(n: number): number {
  const MOD = 1000000007;
  // (n + 1) * 2 * 3 矩阵
  // i * j * k
  // i: 第n天(n=0 代表第0天), j:第n天前 有j次 A , k:第n天前有 k次L
  const dp = new Array(n + 1)
    .fill(2)
    .map(() => new Array(2).fill(0).map(() => new Array(3).fill(0))); // 长度，A 的数量，结尾连续 L 的数量

  dp[0][0][0] = 1;

  for (let i = 1; i <= n; i++) {
    // 以 P 作为结尾
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k <= 2; k++) {
        dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % MOD;
      }
    }

    // 以 A 作为结尾
    for (let k = 0; k <= 2; k++) {
      // 今天 A 为 1               只有上一天 j = 0 的时候 今天才能 A 做结尾
      dp[i][1][0] = (dp[i][1][0] + dp[i - 1][0][k]) % MOD;
    }

    // 以 L 作为结尾
    for (let j = 0; j <= 1; j++) {
      for (let k = 1; k <= 2; k++) {
        // 只有上一天 k = 0 和 k = 1 的 新的一天才能 L 结尾
        dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][k - 1]) % MOD;
      }
    }
  }

  let sum = 0;
  // 累加n + 1日的 也就是第 n 日 所有结果的和
  for (let j = 0; j <= 1; j++) {
    for (let k = 0; k <= 2; k++) {
      sum = (sum + dp[n][j][k]) % MOD;
    }
  }

  return sum;
}

/**
 * 注意到 dp[i][][] 只会从 dp[i−1][][] 转移得到。因此可以将 dp 中的总天数的维度省略，将空间复杂度优化到 O(1)。
 * */
function checkRecord2(n: number) {
  const MOD = 1000000007;
  let dp = new Array(2).fill(0).map(() => new Array(3).fill(0)); // A 的数量，结尾连续 L 的数量

  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    const dpNew = new Array(2).fill(0).map(() => new Array(3).fill(0));
    // 以 P 结尾的数量
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k <= 2; k++) {
        dpNew[j][0] = (dpNew[j][0] + dp[j][k]) % MOD;
      }
    }
    // 以 A 结尾的数量
    for (let k = 0; k <= 2; k++) {
      dpNew[1][0] = (dpNew[1][0] + dp[0][k]) % MOD;
    }
    // 以 L 结尾的数量
    for (let j = 0; j <= 1; j++) {
      for (let k = 1; k <= 2; k++) {
        dpNew[j][k] = (dpNew[j][k] + dp[j][k - 1]) % MOD;
      }
    }
    dp = dpNew;
  }
  let sum = 0;
  for (let j = 0; j <= 1; j++) {
    for (let k = 0; k <= 2; k++) {
      sum = (sum + dp[j][k]) % MOD;
    }
  }
  return sum;
}

/**
 * 方法二：矩阵快速幂
 * 见 https://leetcode-cn.com/problems/student-attendance-record-ii/solution/xue-sheng-chu-qin-ji-lu-ii-by-leetcode-s-kdlm/
 * */

import assert from "assert";

assert.strictEqual(checkRecord(1), 3);
assert.strictEqual(checkRecord(2), 8);
assert.strictEqual(checkRecord(10101), 183236316);
