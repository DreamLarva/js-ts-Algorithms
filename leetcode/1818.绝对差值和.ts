/*
1818. 绝对差值和
给你两个正整数数组 nums1 和 nums2 ，数组的长度都是 n 。

数组 nums1 和 nums2 的 绝对差值和 定义为所有 |nums1[i] - nums2[i]|（0 <= i < n）的 总和（下标从 0 开始）。

你可以选用 nums1 中的 任意一个 元素来替换 nums1 中的 至多 一个元素，以 最小化 绝对差值和。

在替换数组 nums1 中最多一个元素 之后 ，返回最小绝对差值和。因为答案可能很大，所以需要对 10e9 + 7 取余 后返回。

|x| 定义为：

如果 x >= 0 ，值为 x ，或者
如果 x <= 0 ，值为 -x


示例 1：

输入：nums1 = [1,7,5], nums2 = [2,3,5]
输出：3
解释：有两种可能的最优方案：
- 将第二个元素替换为第一个元素：[1,7,5] => [1,1,5] ，或者
- 将第二个元素替换为第三个元素：[1,7,5] => [1,5,5]
两种方案的绝对差值和都是 |1-2| + (|1-3| 或者 |5-3|) + |5-5| = 3
示例 2：

输入：nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]
输出：0
解释：nums1 和 nums2 相等，所以不用替换元素。绝对差值和为 0
示例 3：

输入：nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]
输出：20
解释：将第一个元素替换为第二个元素：[1,10,4,4,2,7] => [10,10,4,4,2,7]
绝对差值和为 |10-9| + |10-3| + |4-5| + |4-1| + |2-7| + |7-4| = 20


提示：
  n == nums1.length
  n == nums2.length
  1 <= n <= 10e5
  1 <= nums1[i], nums2[i] <= 10e5
* */

function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
  const rec = [...nums1].sort((a, b) => a - b);

  const MOD = 1e9 + 7;

  let max = 0; // 能够调整的最大绝对值
  let result = 0;

  for (let i = 0; i < nums1.length; i++) {
    const abs = Math.abs(nums1[i] - nums2[i]);
    result = (result + abs) % MOD;

    const j = binarySearch(rec, nums2[i]);

    if (j < nums1.length) {
      // 和 j 位置的 元素换
      max = Math.max(max, abs - (rec[j] - nums2[i]));
    }
    if (j > 0) {
      // 和 j 左侧的元素 换
      max = Math.max(max, abs - (nums2[i] - rec[j - 1]));
    }
  }

  return (result - max + MOD) % MOD;
}

/**
 * 找到返回 index
 * 没找到 返回应该插入的位置
 * */
function binarySearch(rec: number[], target: number): number {
  let low = 0,
    high = rec.length - 1;
  if (rec[high] < target) {
    return high + 1;
  }
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low;
    if (rec[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

import assert from "assert";
assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 3), 2);
assert.strictEqual(binarySearch([1, 2, 4, 5, 6], 3), 2);

assert.strictEqual(minAbsoluteSumDiff([1, 7, 5], [2, 3, 5]), 3);
assert.strictEqual(minAbsoluteSumDiff([2, 4, 6, 8, 10], [2, 4, 6, 8, 10]), 0);
assert.strictEqual(
  minAbsoluteSumDiff([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4]),
  20
);
