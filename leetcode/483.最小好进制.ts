/*
483. 最小好进制
对于给定的整数 n, 如果n的k（k>=2）进制数的所有数位全为1，则称 k（k>=2）是 n 的一个好进制。

以字符串的形式给出 n, 以字符串的形式返回 n 的最小好进制。



示例 1：

输入："13"
输出："3"
解释：13 的 3 进制是 111。
示例 2：

输入："4681"
输出："8"
解释：4681 的 8 进制是 11111。
示例 3：

输入："1000000000000000000"
输出："999999999999999999"
解释：1000000000000000000 的 999999999999999999 进制是 11。


提示：

n的取值范围是 [3, 10^18]。
输入总是有效且没有前导 0。
* */
function smallestGoodBase(n: string): string {
  // 最多64位
  const num = BigInt(n);
  let answer: number | bigint = Infinity;
  // 1e18 最多也就 64位2进制 64位数量级并不算大
  for (let i = 2; i < 64; i++) {
    let left = 2n;
    let right = num;
    // 二分搜索
    while (left < right) {
      const mid = left + ((right - left) >> 2n);
      const sum = check(mid, i);
      if (sum === num) {
        answer = answer > mid ? mid : answer;
        break;
      }
      if (sum < num) {
        left = mid + 1n;
      } else {
        right = mid;
      }
    }
  }

  return String(answer);
}
/**
 * m 位 x 进制的结果
 * @param x 进制
 * @param m 位数
 * */
function check(x, m) {
  let n = 1n;
  let answer = 1n;
  for (let i = 1; i < m; i++) {
    n *= x;
    answer += n;
  }
  return answer;
}

/**
 * 官方解
 * */
function smallestGoodBase2(n: string) {
  const nVal = parseInt(n);
  // 获得 n 进制的上限的值
  const mMax = Math.floor(Math.log(nVal) / Math.log(2));
  for (let m = mMax; m > 1; m--) {
    // 数学方法得到 n 机制 为位数 k 的上限
    const k = BigInt(Math.floor(Math.pow(nVal, 1.0 / m)));

    if (k > 1) {
      let mul = BigInt(1),
        sum = BigInt(1);

      // 判断是不是有 n位x进制1组成
      for (let i = 1; i <= m; i++) {
        mul *= k;
        sum += mul;
      }
      if (sum === BigInt(n)) {
        return k + "";
      }
    }
  }
  return BigInt(n) - BigInt(1) + "";
}

import assert from "assert";
assert.strictEqual(smallestGoodBase("13"), "3");
assert.strictEqual(smallestGoodBase("4681"), "8");
assert.strictEqual(
  smallestGoodBase("1000000000000000000"),
  "999999999999999999"
);
