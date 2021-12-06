/*
 * [1005]  K 次取反后最大化的数组和
 *
 * https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/description/
 *
 * algorithms
 * Easy (40.43%)
 * Total Accepted:    663
 * Total Submissions: 1.6K
 * Testcase Example:  '[4,2,3]\n1'
 *
 * 给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K
 * 次。（我们可以多次选择同一个索引 i。）
 *
 * 以这种方式修改数组后，返回数组可能的最大和。
 *
 *
 *
 * 示例 1：
 *
 * 输入：A = [4,2,3], K = 1
 * 输出：5
 * 解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
 *
 *
 * 示例 2：
 *
 * 输入：A = [3,-1,0,2], K = 3
 * 输出：6
 * 解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。
 *
 *
 * 示例 3：
 *
 * 输入：A = [2,-3,-1,5,-4], K = 2
 * 输出：13
 * 解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= A.length <= 10000
 * 1 <= K <= 10000
 * -100 <= A[i] <= 100
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = function (A: number[], K: number) {
  A.sort((a, b) => a - b);
  // 获取负数的个数
  const negative_count = A.filter((a) => a < 0).length;
  // 如果负数的个数大于等于 K
  if (negative_count >= K) {
    return A.reduce((pre, cur) => {
      if (cur < 0 && K > 0) {
        cur *= -1;
        K--;
      }
      return pre + cur;
    }, 0);
  }
  // 如果负数的个数小于 K
  else if ((K - negative_count) % 2 !== 0) {
    // 找到最小绝对值
    let min_abs: number;
    const sum = A.reduce((pre, cur, index) => {
      if (index === 1) {
        min_abs = Math.abs(pre) < Math.abs(cur) ? Math.abs(pre) : Math.abs(cur);
      } else {
        min_abs = min_abs < Math.abs(cur) ? min_abs : Math.abs(cur);
      }

      return Math.abs(pre) + Math.abs(cur);
    });

    return sum - min_abs! * 2;
  } else {
    return A.reduce((a, b) => Math.abs(a) + Math.abs(b));
  }
};

function largestSumAfterKNegations1(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let minAbs: number = Infinity;
  for (let i = 0; i < nums.length && k > 0; i++) {
    k--;
    const _data = nums[i];
    if (nums[i] < 0) {
      nums[i] = -nums[i];
    }

    minAbs = Math.min(Math.abs(nums[i]), minAbs);

    if (_data >= 0) {
      k++;
      break;
    }
  }

  let offset = 0;
  if (k > 0 && k % 2 === 1) {
    offset = -2 * minAbs;
  }

  return nums.reduce((a, b) => a + b) + offset;
}

/**
 * 按照绝对值排序 ， 就可以省去 找最小绝对值的 流程
 * */
var largestSumAfterKNegations2 = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      k--;
    }
  }

  if (k > 0 && k % 2 === 1) {
    nums[nums.length - 1] *= -1;
  }

  return nums.reduce((a, b) => {
    return a + b;
  });
};

import assert from "assert";

// assert.strictEqual(largestSumAfterKNegations([5, 6, 9, -3, 3], 2), 20);
assert.strictEqual(largestSumAfterKNegations1([5, 6, 9, -3, 3], 2), 20);
assert.strictEqual(largestSumAfterKNegations1([4, 2, 3], 1), 5);
