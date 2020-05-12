/*
给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

示例 1:
输入:

0 0 0
0 1 0
0 0 0
输出:

0 0 0
0 1 0
0 0 0
示例 2:
输入:

0 0 0
0 1 0
1 1 1
输出:

0 0 0
0 1 0
1 2 1
注意:

1.给定矩阵的元素个数不超过 10000。
2.给定矩阵中至少有一个元素是 0。
3.矩阵中的元素只在四个方向上相邻: 上、下、左、右。
* */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix_1 = function (matrix: number[][]) {
  /**
   * 动态规划
   * 第一次遍历 从左上向右下遍历 (根据每格的上 和 左 方向的位置判断当前) 所以必须从左上第一格开始
   * 第二次遍历 从右下向左上遍历 同理 根据  右 和 下 方向的判断
   * */
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 1) matrix[y][x] = Infinity;

      matrix[y][x] = Math.min(
        matrix[y][x],
        1 + Math.min(getElement(x - 1, y), getElement(x, y - 1))
      );
    }
  }
  for (let y = matrix.length - 1; y >= 0; y--) {
    for (let x = matrix[y].length - 1; x >= 0; x--) {
      matrix[y][x] = Math.min(
        matrix[y][x],
        getElement(x + 1, y) + 1,
        getElement(x, y + 1) + 1
      );
    }
  }

  function getElement(x: number, y: number) {
    if (x < 0 || y < 0 || y >= matrix.length || x >= matrix[y].length)
      return Infinity;
    return matrix[y][x];
  }

  return matrix;
};

/**
 * 根据题意广度优先更加适合
 * */
var updateMatrix_2 = function (matrix: number[][]) {
  const list: [number, number][] = [];
  const offset = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 0) {
        list.push([x, y]);
      } else {
        matrix[y][x] = Infinity;
      }
    }
  }

  while (list.length) {
    const [x1, y1] = list.shift()!;
    offset.forEach(([x2, y2]) => {
      const x = x1 + x2;
      const y = y1 + y2;
      if (
        x >= 0 &&
        y >= 0 &&
        y < matrix.length &&
        x < matrix[y].length &&
        matrix[y][x] > matrix[y1][x1] + 1
      ) {
        matrix[y][x] = matrix[y1][x1] + 1;
        list.push([x, y]);
      }
    });
  }
  return matrix;
};

/**
 * 失败 由于能转弯 且 如果使用回溯法 会出现上下左右 都是 边界或者 是待计算的格子 导致整个 计算出现问题
 *
 * 由于他妈的 竟然能转弯 也行 只能 深度优先了 这里用的是回溯法
 * */
/*
var updateMatrix = function(matrix: number[][]) {

  const set = new Set();

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 0 || set.has(`${x},${y}`)) continue;
      update(matrix, x, y);
    }
  }

  return matrix;

  function update(matrix: number[][], x: number, y: number) {
    // 已经有准确的答案 直接返回
    if (set.has(`${x},${y}`)) return matrix[y][x];
    // 出界：超出数组边界
    if (!inArea(matrix, x, y)) return Infinity; // 由于一定有一个 0 所以出界的结果不在考虑范围内
    // 得到边界0 由于现在在该点上 所以返回0
    if (matrix[y][x] === 0) return 0;
    // 简化计算 周围是 有一个 0 就直接返回 1 避免出现转一圈 回到原点的问题
    if (
      [
        y - 1 >= 0 && matrix[y - 1][x],
        y + 1 < matrix.length && matrix[y + 1][x],
        matrix[y][x + 1],
        matrix[y][x - 1]
      ].includes(0)
    ) {
      matrix[y][x] = 1;
      set.add(`${x},${y}`);
      return 1;
    }

    // 如果往回走 到了还在 计算值的格子
    if (matrix[y][x] == -1) return Infinity;

    // 打标记，以免重复
    matrix[y][x] = -1;
    const top = update(matrix, x, y - 1);
    const right = update(matrix, x + 1, y);
    const bottom = update(matrix, x, y + 1);
    const left = update(matrix, x - 1, y);
    const new_data = Math.min(top, right, bottom, left);

    matrix[y][x] = new_data + 1;
    set.add(`${x},${y}`);
    return new_data + 1;
  }

  function inArea(matrix: number[][], x: number, y: number) {
    return y < matrix.length && y >= 0 && x < matrix[y].length && x >= 0;
  }
};
*/

import assert from "assert";

assert.deepStrictEqual(
  updateMatrix_1([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
);
assert.deepStrictEqual(
  updateMatrix_1([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
  [
    [2, 1, 2],
    [1, 0, 1],
    [2, 1, 2],
  ]
);
assert.deepStrictEqual(
  updateMatrix_1([
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]),
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
  ]
);

assert.deepStrictEqual(
  updateMatrix_1([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]),
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 2, 1],
  ]
);
assert.deepStrictEqual(
  updateMatrix_1([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]),
  [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ]
);

assert.deepStrictEqual(
  updateMatrix_1([
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
  ]),
  [
    [0, 1, 0, 1, 2],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
  ]
);

assert.deepStrictEqual(
  updateMatrix_1([
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  ]),
  [
    [0, 0, 1, 0, 1, 2, 1, 0, 1, 2],
    [1, 1, 2, 1, 0, 1, 1, 1, 2, 3],
    [2, 1, 2, 1, 1, 0, 0, 0, 1, 2],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 2],
    [0, 0, 1, 1, 1, 0, 1, 1, 2, 3],
    [1, 0, 1, 2, 1, 1, 1, 2, 1, 2],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 2],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 2, 1, 0],
  ]
);
assert.deepStrictEqual(
  updateMatrix_1([
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
  ]),
  [
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 2, 1, 1, 0, 1],
    [2, 1, 1, 1, 1, 2, 1, 0, 1, 0],
    [3, 2, 2, 1, 0, 1, 0, 0, 1, 1],
  ]
);
assert.deepStrictEqual(
  updateMatrix_1([
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  ]),
  [
    [2, 2, 1, 1, 1, 1, 0, 1, 2, 2],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 2, 2],
    [2, 1, 0, 0, 1, 0, 1, 2, 1, 2],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [2, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [3, 2, 1, 1, 0, 0, 0, 1, 1, 0],
    [3, 2, 1, 0, 1, 1, 0, 1, 2, 1],
  ]
);
assert.deepStrictEqual(
  updateMatrix_2([
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  ]),
  [
    [2, 2, 1, 1, 1, 1, 0, 1, 2, 2],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 2, 2],
    [2, 1, 0, 0, 1, 0, 1, 2, 1, 2],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [2, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [3, 2, 1, 1, 0, 0, 0, 1, 1, 0],
    [3, 2, 1, 0, 1, 1, 0, 1, 2, 1],
  ]
);
