/*
3153. 所有数对中数位不同之和
中等

提示
你有一个数组 nums ，它只包含 正 整数，所有正整数的数位长度都 相同 。

两个整数的 数位不同 指的是两个整数 相同 位置上不同数字的数目。

请你返回 nums 中 所有 整数对里，数位不同之和。



示例 1：

输入：nums = [13,23,12]

输出：4

解释：
计算过程如下：
- 13 和 23 的数位不同为 1 。
- 13 和 12 的数位不同为 1 。
- 23 和 12 的数位不同为 2 。
所以所有整数数对的数位不同之和为 1 + 1 + 2 = 4 。

示例 2：

输入：nums = [10,10,10,10]

输出：0

解释：
数组中所有整数都相同，所以所有整数数对的数位不同之和为 0 。



提示：

2 <= nums.length <= 10**5
1 <= nums[i] < 10**9
nums 中的整数都有相同的数位长度。
* */
import _ from "lodash";

function sumDigitDifferences(nums: number[]): number {
  const splitNums = nums.map((v) => v.toString().split(""));
  let result = 0;
  for (let i = 0; i < splitNums[0].length; i++) {
    const cache = Array(10).fill(0);
    for (let j = 0; j < splitNums.length; j++) {
      const n = splitNums[j][i];
      cache[n]++;
    }

    // 计算一位"的结果
    const c = cache as number[];
    for (let j = 0; j < c.length; j++) {
      for (let k = j + 1; k < c.length; k++) {
        result += c[j] * c[k];
      }
    }
  }

  return result;
}

import assert from "assert";
assert.strictEqual(sumDigitDifferences([13, 23, 12]), 4);
assert.strictEqual(sumDigitDifferences([10, 10, 10, 10]), 0);
