/*
661. 图片平滑器
包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。

示例 1:

输入:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
输出:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
解释:
对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
注意:

给定矩阵中的整数范围为 [0, 255]。
矩阵的长和宽的范围均为 [1, 150]。
* */

function imageSmoother(M: number[][]): number[][] {
  const result: number[][] = Array(M.length)
    .fill(0)
    .map(() => []);
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      let count = 0; // 记录非0数值的个数
      let total = 0; // 记录自己和周围8格的总和

      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          const grid = M?.[i + k]?.[j + l];
          if (grid == null) continue;

          count++;
          total += grid;
        }
      }

      result[i][j] = Math.floor(total / count);
    }
  }
  return result;
}

import assert from "assert";
assert.deepStrictEqual(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
);
