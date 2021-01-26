/*
给你一个整数数组 A，请你给数组中的每个元素 A[i] 都加上一个任意数字 x （-K <= x <= K），从而得到一个新数组 B 。

返回数组 B 的最大值和最小值之间可能存在的最小差值。


示例 1：

输入：A = [1], K = 0
输出：0
解释：B = [1]
示例 2：

输入：A = [0,10], K = 2
输出：6
解释：B = [2,8]
示例 3：

输入：A = [1,3,6], K = 3
输出：0
解释：B = [3,3,3] 或 B = [4,4,4]

提示：
  1 <= A.length <= 10000
  0 <= A[i] <= 10000
  0 <= K <= 10000


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/smallest-range-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

function smallestRangeI(A: number[], K: number): number {
  const min = Math.min(...A);
  const max = Math.max(...A);

  const dif = max - min;
  if (dif <= K * 2) return 0;

  return dif - K * 2;
}

function smallestRangeI2(A: number[], K: number): number {
  return Math.max(0, Math.max(...A) - Math.min(...A) - 2 * K);
}

import assert from "assert";
assert.strictEqual(smallestRangeI([1], 0), 0);
assert.strictEqual(smallestRangeI([0, 10], 2), 6);
assert.strictEqual(smallestRangeI([1, 3, 6], 3), 0);
