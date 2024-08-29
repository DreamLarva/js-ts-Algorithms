/*
3142. 判断矩阵是否满足条件

提示
给你一个大小为 m x n 的二维矩阵 grid 。你需要判断每一个格子 grid[i][j] 是否满足：

如果它下面的格子存在，那么它需要等于它下面的格子，也就是 grid[i][j] == grid[i + 1][j] 。
如果它右边的格子存在，那么它需要不等于它右边的格子，也就是 grid[i][j] != grid[i][j + 1] 。
如果 所有 格子都满足以上条件，那么返回 true ，否则返回 false 。



示例 1：

输入：grid = [[1,0,2],[1,0,2]]

输出：true

解释：



网格图中所有格子都符合条件。

示例 2：

输入：grid = [[1,1,1],[0,0,0]]

输出：false

解释：



同一行中的格子值都相等。

示例 3：

输入：grid = [[1],[2],[3]]

输出：false

解释：



同一列中的格子值不相等。



提示：

1 <= n, m <= 10
0 <= grid[i][j] <= 9
* */
function satisfiesConditions(grid: number[][]): boolean {
  // 先检查第一行 是否符合 行的规则
  const firstRow = grid[0];
  if (firstRow.length !== 1) {
    for (let i = 1; i < firstRow.length; i++) {
      if (firstRow[i] === firstRow[i - 1]) {
        return false;
      }
    }
  }

  // 检查列 每个相同即可
  for (let i = 1; i < grid.length; i++) {
    for (let j = 0; j < firstRow.length; j++) {
      if (grid[i][j] !== firstRow[j]) {
        return false;
      }
    }
  }

  return true;
}

import assert from "assert";

assert.equal(
  satisfiesConditions([
    [1, 0, 2],
    [1, 0, 2],
  ]),
  true
);
assert.equal(
  satisfiesConditions([
    [1, 1, 1],
    [0, 0, 0],
  ]),
  false
);
assert.equal(satisfiesConditions([[1], [2], [3]]), false);
