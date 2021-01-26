/*
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:

输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-binary-search-trees
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n: number): number {
  if (n === 0 || n === 1) return n;
  if (n === 2) return 2;
  if (n === 3) return 5;

  let result = 0;
  for (let i = 0; i <= n - 1; i++) {
    // 按照每一个数字 将 它 以及 他的 左侧 右侧 分为三组
    result += (numTrees(i) || 1) * (numTrees(n - 1 - i) || 1);
  }

  return result;
};

// 添加记忆化
var numTrees_1 = function (n: number): number {
  const cache: { [key: number]: number } = {};
  return step(n);

  function step(n: number) {
    if (cache[n]) return cache[n];
    if (n === 0 || n === 1) return n;
    let result = 0;
    for (let i = 0; i <= n - 1; i++) {
      // 按照每一个数字 将 它 以及 他的 左侧 右侧 分为三组
      result += (step(i) || 1) * (step(n - 1 - i) || 1);
    }

    return (cache[n] = result);
  }
};

// 动态规划
const numTrees2 = (n: number) => {
  const list = Array(n + 1).fill(0);
  list[0] = 1; // 没有子树 1 种情况 很好理解
  list[1] = 1; // 由于是二叉搜素数 所以一定 只能成为 左子树 或者 右子树的一种
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      list[i] += list[j - 1] * list[i - j];
    }
  }
  return list[n];
};

import assert from "assert";

assert.strictEqual(numTrees_1(2), 2);
assert.strictEqual(numTrees_1(3), 5);
assert.strictEqual(numTrees_1(5), 42);
assert.strictEqual(numTrees_1(10), 16796);

assert.strictEqual(numTrees2(2), 2);
assert.strictEqual(numTrees2(3), 5);
assert.strictEqual(numTrees2(5), 42);
assert.strictEqual(numTrees2(10), 16796);

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
suite
  .add("没记忆", function () {
    numTrees(10);
  })
  .add("有记忆", function () {
    numTrees_1(10);
  })
  .add("动态规划", function () {
    numTrees2(10);
  })
  // add listeners
  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  .on("complete", function (this: any) {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
