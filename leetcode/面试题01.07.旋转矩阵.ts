/*
面试题 01.07. 旋转矩阵
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？



示例 1:

给定 matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

注意：本题与主站 48 题相同：https://leetcode-cn.com/problems/rotate-image/
* */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix: number[][]) {
  const n = matrix.length;
  // 要保证所有 值都 交换 那么 应该交换了 约4分之1 的值(n 为奇数  除了中心有值不用交换的)
  // 4x4 那么 遍历 2x2
  // 5x5 => 2x3 或者 3x2
  // 7x7 => 4x3 或者 3x4
  for (let i = 0; i < n / 2; i++) {
    const j_limit = (n & 1) === 1 ? n - n / 2 - 1 : n / 2;

    for (let j = 0; j < j_limit; j++) {
      // console.log(i, j);
      // 使用解构 可以不用 临时变量
      [
        matrix[i][j],
        matrix[n - j - 1][i],
        matrix[n - i - 1][n - j - 1],
        matrix[j][n - i - 1],
      ] = [
        matrix[n - j - 1][i],
        matrix[n - i - 1][n - j - 1],
        matrix[j][n - i - 1],
        matrix[i][j],
      ];
    }
  }

  return matrix;
};

import assert from "assert";

assert.deepStrictEqual(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]),
  [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ]
);

assert.deepStrictEqual(
  rotate([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]),
  [
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ]
);

assert.deepStrictEqual(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]
);
