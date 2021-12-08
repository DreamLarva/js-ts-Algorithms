/*
689. 三个无重叠子数组的最大和
给你一个整数数组 nums 和一个整数 k ，找出三个长度为 k 、互不重叠、且 3 * k 项的和最大的子数组，并返回这三个子数组。

以下标的数组形式返回结果，数组中的每一项分别指示每个子数组的起始位置（下标从 0 开始）。如果有多个结果，返回字典序最小的一个。



示例 1：

输入：nums = [1,2,1,2,6,7,5,1], k = 2
输出：[0,3,5]
解释：子数组 [1, 2], [2, 6], [7, 5] 对应的起始下标为 [0, 3, 5]。
也可以取 [2, 1], 但是结果 [1, 3, 5] 在字典序上更大。
示例 2：

输入：nums = [1,2,1,2,1,2,1,2,1], k = 2
输出：[0,2,4]


提示：

1 <= nums.length <= 2 * 10^4
1 <= nums[i] < 2^16
1 <= k <= floor(nums.length / 3)
* */
import assert from "assert";

/**
 * 单个子数组的最大和
 * 单个滑动窗口
 * */
function maxSumOfOneSubarrays(nums: number[], k: number): number[] {
  let ans: number[] = [];
  let sum1 = 0;
  let maxSum1 = 0;
  // i 是子数组的 尾 index
  for (let i = 0; i < nums.length; ++i) {
    sum1 += nums[i];
    if (i >= k - 1) {
      if (sum1 > maxSum1) {
        maxSum1 = sum1;
        ans = [i - k + 1];
      }
      sum1 -= nums[i - k + 1];
    }
  }
  return ans;
}

assert.deepStrictEqual(maxSumOfOneSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 1), [5]);
assert.deepStrictEqual(maxSumOfOneSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2), [4]);
assert.deepStrictEqual(maxSumOfOneSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 3), [4]);

/**
 * 使用两个滑动窗口
 * */
function maxSumOfTwoSubarrays(nums: number[], k: number): number[] {
  const answer: number[] = [0, 0];
  let sum1 = 0,
    maxSum1 = 0,
    maxSum1Idx = 0;
  let sum2 = 0,
    maxSum12 = 0;
  for (let i = k; i < nums.length; i++) {
    // i 代表新增的尾 index
    sum1 += nums[i - k]; // 初始 [0 ~ k-1]
    sum2 += nums[i]; // 初始 [k ~ 2*k-1]

    /**
     * 第一个符合该 判断的
     * sum1 [0 ~ k-1]
     * sum2 [k ~ 2*k-1]
     * */
    if (i >= 2 * k - 1) {
      // 第一个 sum1 和 sum2 加满k个值的 i
      // 先检验 sum1
      if (sum1 > maxSum1) {
        maxSum1 = sum1;
        maxSum1Idx = i - k * 2 + 1;
      }

      // 检验 sum1 和 sum2 的和
      if (maxSum1 + sum2 > maxSum12) {
        maxSum12 = maxSum1 + sum2;
        answer[0] = maxSum1Idx;
        answer[1] = i - k + 1;
      }

      // 窗口向右滑动  先减去左侧的值
      sum1 -= nums[i - 2 * k + 1];
      sum2 -= nums[i - k + 1];
    }
  }

  return answer;
}

assert.deepStrictEqual(
  maxSumOfTwoSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 1),
  [4, 5]
);
assert.deepStrictEqual(
  maxSumOfTwoSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2),
  [3, 5]
);
assert.deepStrictEqual(
  maxSumOfTwoSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 3),
  [1, 4]
);

/**
 * 本题
 * 使用三个滑动窗口
 * */
function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
  const answer: number[] = [0, 0, 0];
  let sum1 = 0,
    maxSum1 = 0,
    maxSum1Idx = 0;
  let sum2 = 0,
    maxSum12 = 0, // maxSum12 需要记录 满足时的 index1 和 index2
    maxSum2Idx1 = 0,
    maxSum2Idx2 = 0;
  let sum3 = 0,
    maxSum123 = 0;

  for (let i = 2 * k; i < nums.length; i++) {
    // i 代表新增的尾 index
    sum1 += nums[i - k - k]; // 初始 [0 ~ k-1]
    sum2 += nums[i - k]; // 初始 [k ~ 2*k-1]
    sum3 += nums[i]; // 初始 [2k ~ 3*k-1]

    // 然后 照葫芦画瓢
    if (i >= 3 * k - 1) {
      if (sum1 > maxSum1) {
        maxSum1 = sum1;
        maxSum1Idx = i - k * 3 + 1;
      }

      if (maxSum1 + sum2 > maxSum12) {
        maxSum12 = maxSum1 + sum2;
        maxSum2Idx1 = maxSum1Idx;
        maxSum2Idx2 = i - k * 2 + 1;
      }

      if (maxSum12 + sum3 > maxSum123) {
        maxSum123 = maxSum12 + sum3;
        answer[0] = maxSum2Idx1;
        answer[1] = maxSum2Idx2;
        answer[2] = i - k + 1;
      }

      sum1 -= nums[i - k * 3 + 1];
      sum2 -= nums[i - k * 2 + 1];
      sum3 -= nums[i - k + 1];
    }
  }

  return answer;
}

assert.deepStrictEqual(
  maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2),
  [0, 3, 5]
);
assert.deepStrictEqual(
  maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2),
  [0, 2, 4]
);
assert.deepStrictEqual(
  maxSumOfThreeSubarrays([4, 5, 10, 6, 11, 17, 4, 11, 1, 3], 1),
  [4, 5, 7]
);
