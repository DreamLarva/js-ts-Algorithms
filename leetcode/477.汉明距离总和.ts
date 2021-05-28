/*
477. 汉明距离总和
两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。

计算一个数组中，任意两个数之间汉明距离的总和。

示例:

输入: 4, 14, 2

输出: 6

解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
所以答案为：
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
注意:

数组中元素的范围为从 0到 10^9。
数组的长度不超过 10^4。

* */
function totalHammingDistance(nums: number[]): number {
  let result = 0;
  // 10^9 < 2^30 (2^0 + .... 2^29)
  for (let i = 0; i < 30; i++) {
    let one = 0;
    for (let j = 0; j < nums.length; j++) {
      one += (nums[j] >> i) & 1;
    }

    result += one * (nums.length - one);
  }

  return result;
}

import assert from "assert";
assert.strictEqual(totalHammingDistance([4, 14, 2]), 6);
assert.strictEqual(totalHammingDistance([6, 1, 8, 6, 8]), 22);
