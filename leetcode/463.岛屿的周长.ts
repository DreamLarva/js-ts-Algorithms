/*
给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。



示例 :

输入:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

输出: 16

解释: 它的周长是下面图片中的 16 个黄色的边：
* */

type grid = (0 | 1)[][];
type coordinate = [number, number];
function islandPerimeter(grid: grid) {
  /**
   * 既然只有一个岛屿 且一定互相连接
   * 那么只要 遍历所有的 格子 如果是岛屿 且周围没有其他岛屿那么就计算周长即可
   * */
  let perimeter = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        perimeter += getPerimeterOfBlock(grid, [x, y]);
      }
    }
  }
  return perimeter;
}

function getPerimeterOfBlock(grid: grid, [x, y]: coordinate): number {
  let perimeter = 0;
  const max_y = grid.length - 1;
  const max_x = grid[0].length - 1;
  // 判断上侧
  if (y - 1 < 0 || grid[y - 1][x] === 0) {
    perimeter++;
  }

  // 左侧
  if (x - 1 < 0 || grid[y][x - 1] === 0) {
    perimeter++;
  }

  // 右侧
  if (x + 1 > max_x || grid[y][x + 1] === 0) {
    perimeter++;
  }

  // 下侧
  if (y + 1 > max_y || grid[y + 1][x] === 0) {
    perimeter++;
  }

  return perimeter;
}

import assert from "assert";

assert.strictEqual(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
  16
);
