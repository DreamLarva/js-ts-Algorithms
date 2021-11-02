/*
869. 重新排序得到 2 的幂
给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。

如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。



示例 1：

输入：1
输出：true
示例 2：

输入：10
输出：false
示例 3：

输入：16
输出：true
示例 4：

输入：24
输出：false
示例 5：

输入：46
输出：true


提示：
  1 <= N <= 10^9

* */

function reorderedPowerOf2(n: number): boolean {
  let result: number[] = [];
  for (let i = 0; i <= 29; i++) {
    result.push(2 ** i);
  }

  let filteredResult = result
    .filter((v) => v.toString().length === n.toString().length)
    .map((v) => v.toString().split("").sort().join(""));

  return filteredResult.includes(n.toString().split("").sort().join(""));
}

// 官方解 更佳 存储的是 所有数字的出现次数
// 因为次序是可以任意调整的
const countDigits = (n) => {
  const cnt = new Array(10).fill(0);
  while (n) {
    cnt[n % 10]++;
    n = Math.floor(n / 10);
  }
  return cnt.join('');
}



var reorderedPowerOf2_2 = function(n) {
  const powerOf2Digits = new Set();

  for (let n = 1; n <= 1e9; n <<= 1) {
    powerOf2Digits.add(countDigits(n));
  }

  return powerOf2Digits.has(countDigits(n));
};

import assert from "assert";

assert.strictEqual(reorderedPowerOf2(1), true);
assert.strictEqual(reorderedPowerOf2(10), false);
assert.strictEqual(reorderedPowerOf2(16), true);
assert.strictEqual(reorderedPowerOf2(24), false);
assert.strictEqual(reorderedPowerOf2(23), true);
assert.strictEqual(reorderedPowerOf2(46), true);
