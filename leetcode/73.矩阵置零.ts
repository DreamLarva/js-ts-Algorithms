/*
73. 矩阵置零
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
进阶:

一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？
* */

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  // 要不使用 额外的空间 就必须将 额外的数据依然存在 数组上
  // 每次检测到 0 的时候 就 将改行的 行首 和 列首 设置为0

  // 再次循环 按照行首 和 列首的 值设置 一列 和一行的值
  // 处理所有非行首 和 列首的值
  // 需要注意的是 第一样和第一列 的 标志位 都是 [0][0] 位置的值
  // 所以需要一个额外的判断

  let isCol = false; // 记录第一列 是不是都要设置为 0
  // 将 matrix[0][0] 的位置
  for (let y = 0; y < matrix.length; y++) {
    if (matrix[y][0] === 0) {
      isCol = true;
    }
    // 这里从 1 开始 让出第一列不操作
    for (let x = 1; x < matrix[y].length; x++) {
      if (matrix[y][x] === 0) {
        matrix[0][x] = 0;
        matrix[y][0] = 0;
      }
    }
  }

  for (let y = 1; y < matrix.length; y++) {
    for (let x = 1; x < matrix[y].length; x++) {
      if (matrix[y][0] === 0 || matrix[0][x] === 0) {
        matrix[y][x] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    matrix[0].fill(0);
  }

  // 操作第一列
  if (isCol) {
    for (let y = 0; y < matrix.length; y++) {
      matrix[y][0] = 0;
    }
  }
}

import assert from "assert";
{
  const sample = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  setZeroes(sample);
  assert.deepStrictEqual(sample, [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);
}
{
  const sample = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];
  setZeroes(sample);
  assert.deepStrictEqual(sample, [
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]);
}
{
  const sample = [
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0],
  ];
  setZeroes(sample);
  assert.deepStrictEqual(sample, [
    [0, 0, 3, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
}
