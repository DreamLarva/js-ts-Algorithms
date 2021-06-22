/*
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
* */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix: number[][]) {
  type vector = [number, number];
  type matrix_layer = [vector, vector]; // 第一个坐标为 左上 第二个坐标为右下

  if (matrix.length === 0) return [];
  const result:number[] = [];
  let layer: matrix_layer = [
    [0, 0],
    [matrix.length - 1, matrix[0].length - 1],
  ];
  while (isExistNextLayer(layer)) {
    const [[top, left], [bottom, right]] = layer;
    const m = right - left;
    const n = bottom - top;
    // 只剩 1个点了
    if (m === 0 && n === 0) {
      result.push(matrix[top][left]);
      break;
    }
    // 只有 1 行
    if (n === 0) {
      for (let i = 0; i <= m; i++) {
        result.push(matrix[top][left + i]);
      }
      break;
    }
    // 只有 1列
    if (m === 0) {
      for (let i = 0; i <= n; i++) {
        result.push(matrix[top + i][left]);
      }
      break;
    }

    // 上边
    for (let i = 0; i < m; i++) {
      result.push(matrix[top][left + i]);
    }

    // 右边
    for (let i = 0; i < n; i++) {
      result.push(matrix[top + i][right]);
    }

    // 下边
    for (let i = 0; i < m; i++) {
      result.push(matrix[bottom][right - i]);
    }
    // 左边
    for (let i = 0; i < n; i++) {
      result.push(matrix[bottom - i][left]);
    }

    layer = [
      [top + 1, left + 1],
      [bottom - 1, right - 1],
    ];
  }

  return result;

  function isExistNextLayer([[top, left], [bottom, right]]: matrix_layer) {
    return !(top > bottom || left > right);
  }
};

import assert from "assert";

assert.deepStrictEqual(spiralOrder([[1]]), [1]);

assert.deepStrictEqual(spiralOrder([[1, 2, 3, 4]]), [1, 2, 3, 4]);

assert.deepStrictEqual(spiralOrder([[1], [2], [3], [4]]), [1, 2, 3, 4]);

assert.deepStrictEqual(
  spiralOrder([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
);
assert.deepStrictEqual(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
);
