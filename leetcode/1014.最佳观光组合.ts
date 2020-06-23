/*
1014. 最佳观光组合
给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。

一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。

返回一对观光景点能取得的最高分。



示例：

输入：[8,1,5,2,6]
输出：11
解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11


提示：

2 <= A.length <= 50000
1 <= A[i] <= 1000
* */
function maxScoreSightseeingPair(A: number[]): number {
  /**
   * 将 A[i] + A[j] + i - j 的值 分成 A[i] + i 和 A[j] - j
   * 怎么任意一个位置上 A[j] - j 的值 是固定的
   * j 位置上 那么 只要求 A[i] + i 的最大值就行了
   * 那么从左向右 遍历存下A[i] + i
   *
   * */
  let answer = 0;
  let left = A[0];
  for (let i = 1; i < A.length; i++) {
    answer = Math.max(answer, left + A[i] - i);
    left = Math.max(left, A[i] + i);
  }

  return answer;
}

import assert from "assert";
assert.strictEqual(maxScoreSightseeingPair([8, 1, 5, 2, 6]), 11);
