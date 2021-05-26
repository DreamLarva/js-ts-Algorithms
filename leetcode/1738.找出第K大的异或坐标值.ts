/*
1738. 找出第 K 大的异或坐标值
给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。

请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。



示例 1：

输入：matrix = [[5,2],[1,6]], k = 1
输出：7
解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。
示例 2：

输入：matrix = [[5,2],[1,6]], k = 2
输出：5
解释：坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。
示例 3：

输入：matrix = [[5,2],[1,6]], k = 3
输出：4
解释：坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。
示例 4：

输入：matrix = [[5,2],[1,6]], k = 4
输出：0
解释：坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。


提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
0 <= matrix[i][j] <= 106
1 <= k <= m * n
* */

function kthLargestValue(matrix: number[][], k: number): number {
  // 根据 异或的元组
  // 那么 matrix[i][j] 的值 是 matrix[i- 1][j] ^ matrix[i][j - 1] ^ matrix[i- 1][j - 1]
  // 空出 第一行 都是0 和 第一列 都是 0
  const cache: number[][] = Array.from({ length: matrix.length + 1 }).map(() =>
    Array(matrix[0].length + 1).fill(0)
  );
  const result: number[] = [];

  for (let i = 1; i < matrix.length + 1; i++) {
    for (let j = 1; j < matrix[0].length + 1; j++) {
      cache[i][j] =
        matrix[i - 1][j - 1] ^
        cache[i - 1][j] ^
        cache[i][j - 1] ^
        cache[i - 1][j - 1];

      result.push(cache[i][j]);
    }
  }

  return result.sort((a, b) => b - a)[k - 1];
}

/**
 * 官方解
 * 额外使用  快速选择算法 选出 第 k 大的值
 * */
function kthLargestValue2(matrix: number[][], k: number) {
  const m = matrix.length,
    n = matrix[0].length;
  const pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const results = [];
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      pre[i][j] =
        pre[i - 1][j] ^
        pre[i][j - 1] ^
        pre[i - 1][j - 1] ^
        matrix[i - 1][j - 1];
      results.push(pre[i][j]);
    }
  }
  nthElement(results, 0, k - 1, results.length - 1);
  return results[k - 1];
}

const nthElement = (
  results: number[],
  left: number,
  kth: number,
  right: number
) => {
  if (left === right) {
    return;
  }
  const pivot = Math.floor(Math.random() * (right - left) + left);
  swap(results, pivot, right);
  // 三路划分（three-way partition）
  let sepl = left - 1,
    sepr = left - 1;
  for (let i = left; i <= right; i++) {
    if (results[i] > results[right]) {
      swap(results, ++sepr, i);
      swap(results, ++sepl, sepr);
    } else if (results[i] === results[right]) {
      swap(results, ++sepr, i);
    }
  }
  if (sepl < left + kth && left + kth <= sepr) {
    return;
  } else if (left + kth <= sepl) {
    nthElement(results, left, kth, sepl);
  } else {
    nthElement(results, sepr + 1, kth - (sepr - left + 1), right);
  }
};

const swap = (results: number[], index1: number, index2: number) => {
  const temp = results[index1];
  results[index1] = results[index2];
  results[index2] = temp;
};

import assert from "assert";
assert.strictEqual(
  kthLargestValue(
    [
      [5, 2],
      [1, 6],
    ],
    1
  ),
  7
);
assert.strictEqual(
  kthLargestValue(
    [
      [5, 2],
      [1, 6],
    ],
    2
  ),
  5
);
assert.strictEqual(
  kthLargestValue2(
    [
      [5, 2],
      [1, 6],
    ],
    3
  ),
  4
);
