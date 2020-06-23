/*
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
* */
import assert from "assert";

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n: number) {
  // 最完美解法
  // 四平方定理： 任何一个正整数都可以表示成不超过四个整数的平方之和。
  // 推论：满足四数平方和定理的数n（四个整数的情况），必定满足 n=4^a(8b+7)
  while (n % 4 === 0) {
    n /= 4;
  }
  if (n % 8 === 7) {
    return 4;
  }
  let a = 0;
  while (a ** 2 <= n) {
    const b = Math.trunc((n - a ** 2) ** 0.5);
    if (a ** 2 + b ** 2 === n) {
      if (a != 0 && b != 0) {
        return 2;
      } else {
        return 1;
      }
    }
    a += 1;
  }
  return 3;
};

var numSquares1 = function (n: number) {
  // 广度优先
  /**
   * 认为 这个数字 是一个图
   * 求最短路径
   * */
  const list: [number, number][] = [];
  const visited: Set<number> = new Set();

  list.push([n, 0]);
  visited.add(n);
  while (list.length) {
    const [num, step] = list.shift()!;
    // 下一个连接的 节点是 当前节点 减去 i*i
    for (let i = 0; num - i * i >= 0; i++) {
      const next = num - i * i;
      if (next === 0) return step + 1;
      if (next < 0) break;
      if (!visited.has(next)) {
        list.push([next, step + 1]);
        visited.add(next);
      }
    }
  }
};

var numSquares2 = function (n: number) {
  const list: [number, number][] = [];
  const visited: Set<number> = new Set();

  list.push([0, 0]);
  visited.add(0);

  while (list.length) {
    const [num, step] = list.shift()!;
    for (let i = 0; num + i * i <= n; i++) {
      const next = num + i * i;
      if (next === n) return step + 1;
      // num + i * i 一定小于 n
      if (!visited.has(next)) {
        list.push([next, step + 1]);
        visited.add(next);
      }
    }
  }
};

var numSquares3 = function (n: number) {
  // 动态规划
  const list: number[] = [0];
  for (let i = 1; i <= n; i++) {
    let min = Infinity;
    for (let j = 1; j * j <= i; j++) {
      // 如果当前的值 刚好是完全 平方数 i - j * j 就会等于 0 指向 第一个 list[0]
      // min 就 会是 0
      min = Math.min(min, list[i - j * j]);
    }
    list[i] = min + 1;
  }

  return list[n];
};

assert.strictEqual(numSquares(12), 3);
assert.strictEqual(numSquares(13), 2);

assert.strictEqual(numSquares1(12), 3);
assert.strictEqual(numSquares1(13), 2);

assert.strictEqual(numSquares2(12), 3);
assert.strictEqual(numSquares2(13), 2);

assert.strictEqual(numSquares3(12), 3);
assert.strictEqual(numSquares3(13), 2);
