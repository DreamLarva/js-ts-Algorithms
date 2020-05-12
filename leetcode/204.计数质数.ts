/*
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
* */

/**
 * 厄拉多塞筛法.
 * 比如说求20以内质数的个数,首先0,1不是质数.2是第一个质数,然后把20以内所有2的倍数划去.
 * 2后面紧跟的数即为下一个质数3,然后把3所有的倍数划去.3后面紧跟的数即为下一个质数5,再把5所有的倍数划去.以此类推.
 * */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n: number) {
  const primeCache = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
  ];

  if (n <= 100) {
    let index = 0;
    while (n > primeCache[index]) {
      index++;
    }
    return index;
  }
  const excludeCache: Set<number> = new Set();
  for (const num of primeCache) {
    saveExclude(excludeCache, num, n);
  }

  let result = primeCache.length;
  for (let num = 101; num < n; num++) {
    if (excludeCache.has(num)) continue;

    if (isPrime(num)) {
      saveExclude(excludeCache, num, n);
      result++;
    }
  }

  return result;
};

function saveExclude(set: Set<number>, num: number, n: number) {
  if (num < 100) {
    num = Math.ceil(100 / num) * num;
  }
  while (n >= num) {
    set.add(num);
    num += num;
  }
}

function isPrime(n: number) {
  if (n <= 3) return n > 1;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

import assert from "assert";

assert.strictEqual(countPrimes(2), 0);
assert.strictEqual(countPrimes(3), 1);
assert.strictEqual(countPrimes(6), 3);
assert.strictEqual(countPrimes(100), 25);
assert.strictEqual(countPrimes(105), 27);
assert.strictEqual(countPrimes(121), 30);

var countPrimes2 = function (n: number) {
  // 使用数组
  let notPrimes = new Uint8Array(n);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (notPrimes[i] !== 1) {
      count++;
      let a = n / i;
      for (let j = i; j < a; j++) {
        notPrimes[i * j] = 1;
      }
    }
  }
  return count;
};

assert.strictEqual(countPrimes2(2), 0);
assert.strictEqual(countPrimes2(3), 1);
assert.strictEqual(countPrimes2(6), 3);
assert.strictEqual(countPrimes2(100), 25);
assert.strictEqual(countPrimes2(105), 27);
assert.strictEqual(countPrimes2(121), 30);
