/*
3164. 优质数对的总数 II
中等

提示
给你两个整数数组 nums1 和 nums2，长度分别为 n 和 m。同时给你一个正整数 k。

如果 nums1[i] 可以被 nums2[j] * k 整除，则称数对 (i, j) 为 优质数对（0 <= i <= n - 1, 0 <= j <= m - 1）。

返回 优质数对 的总数。



示例 1：

输入：nums1 = [1,3,4], nums2 = [1,3,4], k = 1

输出：5

解释：

5个优质数对分别是 (0, 0), (1, 0), (1, 1), (2, 0), 和 (2, 2)。

示例 2：

输入：nums1 = [1,2,4,12], nums2 = [2,4], k = 3

输出：2

解释：

2个优质数对分别是 (3, 0) 和 (3, 1)。



提示：

1 <= n, m <= 10**5
1 <= nums1[i], nums2[j] <= 10**6
1 <= k <= 10**3
* */

function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  const c1 = new Map<number, number>();
  const c2 = new Map<number, number>();
  let max1 = 0;
  let result = 0;

  // 统计 nums1 元素出现的次数
  for (let i = 0; i < nums1.length; i++) {
    c1.set(nums1[i], (c1.get(nums1[i]) ?? 0) + 1);
    // 最大值 作为之后的边界
    max1 = Math.max(nums1[i], max1);
  }
  // 统计 nums2 元素出现的次数
  for (let i = 0; i < nums2.length; i++) {
    c2.set(nums2[i], (c2.get(nums2[i]) ?? 0) + 1);
  }

  // c2 的 key 作为除数，遍历所有可能
  for (const [key2, value2] of c2) {
    // 每次累加 直到边界 被除数最大值
    for (let a = key2 * k; a <= max1; a += key2 * k) {
      // 组合后计数累加
      if (c1.has(a)) {
        result += c1.get(a)! * value2;
      }
    }
  }

  return result;
}

import assert from "assert";
assert.equal(numberOfPairs([1, 3, 4], [1, 3, 4], 1), 5);
assert.equal(numberOfPairs([1, 2, 4, 12], [2, 4], 3), 2);
