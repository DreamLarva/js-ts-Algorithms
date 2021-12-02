/*
64. 最小路径和
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
* */
import _ from "lodash";
function last<T>(arr: T[]) {
  return arr[arr.length - 1];
}
function minPathSum(grid: number[][]): number {
  /**
   * 注意只能 往下 或者 右走那就很好办了
   * 动态规划 只要看之前 目标点左方 上方 的点的状态就行了
   * */
  const map: number[][] = Array.from({ length: grid.length }).map(
    () => new Array(grid[0].length)
  );

  map[0][0] = grid[0][0];
  // 先处理第一行
  for (let i = 1; i < grid[0].length; i++) {
    map[0][i] = map[0][i - 1] + grid[0][i];
  }

  // 处理第一列
  for (let i = 1; i < grid.length; i++) {
    map[i][0] = map[i - 1][0] + grid[i][0];
  }

  // 处理剩余
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      map[i][j] = Math.min(map[i - 1][j], map[i][j - 1]) + grid[i][j];
    }
  }

  // return _.last(_.last(map))!;
  return last(last(map));
}

import assert from "assert";
assert.strictEqual(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
  7
);
