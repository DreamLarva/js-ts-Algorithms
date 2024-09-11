/*
3176. 求出最长好子序列 I

提示
给你一个整数数组 nums 和一个 非负 整数 k 。如果一个整数序列 seq 满足在下标范围 [0, seq.length - 2] 中 最多只有 k 个下标 i 满足 seq[i] != seq[i + 1] ，那么我们称这个整数序列为 好 序列。

请你返回 nums 中 好
子序列
 的最长长度。


示例 1：

输入：nums = [1,2,1,1,3], k = 2

输出：4

解释：

最长好子序列为 [1,2,1,1,3] 。

示例 2：

输入：nums = [1,2,3,4,5,1], k = 0

输出：2

解释：

最长好子序列为 [1,2,3,4,5,1] 。



提示：

1 <= nums.length <= 500
1 <= nums[i] <= 10 ** 9
0 <= k <= min(nums.length, 25)
* */
import _ from "lodash";

function maximumLength(nums: number[], k: number): number {
  let cache: [number, number, number][] = [
    // k,len,last
    [0, 0, NaN],
    [0, 1, nums[0]],
  ];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const data: [number, number, number][] = [];
    for (let j = 0; j < cache.length; j++) {
      // 上个不要
      let [m, len, last] = cache[j];
      // m 到上上限了 只能要一个相同的值
      if (m === k) {
        if (last === curr) {
          // 相等不增加
          data.push([m, len + 1, curr]);
        } else {
          // 不想等就超过了, 返回上一个不超过的
          data.push(cache[j]);
        }
      } else if (m < k) {
        if (last === curr) {
          data.push([m, len + 1, curr]);
        } else {
          data.push([m + 1, len + 1, curr]);
        }
      }
    }
    cache = data;
  }

  return _.maxBy(cache, (v) => v[1])![1];
}

import assert from "assert";
assert.strictEqual(maximumLength([1, 2, 1, 1, 3], 2), 4);
assert.strictEqual(maximumLength([1, 2, 3, 4, 5, 1], 0), 2);
