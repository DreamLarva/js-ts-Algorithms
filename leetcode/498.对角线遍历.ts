/*
给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

 

示例:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

解释:

 

说明:

给定矩阵中的元素总数不会超过 100000 。

* */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var findDiagonalOrder = function (matrix: any[][]) {
  const result = [];
  if (matrix.length == 0) {
    return matrix;
  }
  const m = matrix.length;
  const n = matrix[0].length;

  let y = 0;
  let x = 0;
  for (let i = 0; i < m * n; i++) {
    result[i] = matrix[y][x];
    // 用 r + c 但 奇偶判断 不同的 斜行(秒啊 至少省了 2 个变量)
    // 在 上 或 右 开始 下 或 左 结束
    if ((y + x) % 2 == 0) {
      // 到达下边
      if (x == n - 1) {
        y++;
      }
      // 到达左边
      else if (y == 0) {
        x++;
      } else {
        y--;
        x++;
      }
    }
    // 在 下 或 左 开始 上 或 右 结束
    if ((y + x) % 2 != 0) {
      // 到达下边
      if (y == m - 1) {
        x++;
      }
      // 到达左边
      else if (x == 0) {
        y++;
      } else {
        y++;
        x--;
      }
    }
  }
  return result;
};
/*
var findDiagonalOrder = function (matrix: any[][]) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    if (matrix.length === 1) return matrix[0];
    if (matrix[0].length === 1) return matrix.map(([v]) => v);

    // 代表 做加法 还是做减法
    let sign = -1;
    let column = 0;
    let row = 0;
    const column_length = matrix.length;
    const row_length = matrix[0].length;
    const result = [];
    let canNextElementOnBorder = true;
    while (true) {

        result.push(matrix[column][row]);
        if (column === column_length - 1 && row === row_length - 1) return result;

        // 到达了 四条边的某条边上
        if (canNextElementOnBorder && (column === 0 || row === 0 || column === column_length - 1 || row === row_length - 1)) {
            // 切换到 下一个 位置上
            // 左上角 向右移动
            canNextElementOnBorder = false;
            if (column === 0 && row === 0) {
                row++;
            }
            // 左下角 向右移动
            else if (column === column_length - 1 && row === 0) {
                row++;
            }
            // 右上角 向下移动
            else if (column === 0 && row === row_length - 1) {
                column++;
            }
            // 在 上边 或 下边 向右移动
            else if (column === 0 || column === column_length - 1) {
                row++;
            }
            // 在 左边 或 右边 向下移动
            else if (row === 0 || row === row_length - 1) {
                column++;
            } else {
                throw new Error("不存在的位置");
            }

            sign *= -1;
            continue;
        }

        row -= sign;
        column += sign;
        canNextElementOnBorder = true;

    }
};
*/

import assert from "assert";

assert.deepStrictEqual(findDiagonalOrder([[1, 2, 3]]), [1, 2, 3]);

assert.deepStrictEqual(findDiagonalOrder([[1], [2], [3]]), [1, 2, 3]);
assert.deepStrictEqual(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 4, 7, 5, 3, 6, 8, 9]
);
assert.deepStrictEqual(
  findDiagonalOrder([
    ["00", "01"],
    ["10", "11"],
    ["20", "21"],
  ]),
  ["00", "01", "10", "20", "11", "21"]
);
assert.deepStrictEqual(
  findDiagonalOrder([
    ["00", "01", "02"],
    ["10", "11", "12"],
  ]),
  ["00", "01", "10", "11", "02", "12"]
);
