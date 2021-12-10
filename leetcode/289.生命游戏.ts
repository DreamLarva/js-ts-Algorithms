/*
289. 生命游戏
根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。
每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
给你 m x n 网格面板 board 的当前状态，返回下一个状态。



示例 1：


输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
示例 2：


输入：board = [[1,1],[1,0]]
输出：[[1,1],[1,1]]


提示：

m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] 为 0 或 1


进阶：

你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？

* */
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  /**
   * 原地修改
   * 值  新值 旧值 组成 的
   * */

  const x = board[0].length;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < x; j++) {
      // 获取周围的点
      let survivePoints = 0;
      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          survivePoints += (board[i + k]?.[j + l] ?? 0) & 1;
        }
      }

      const cur = board[i][j]
      survivePoints -= cur // 去掉自己

      // 设置当前点
      if (cur === 1) {
        if (survivePoints < 2) {
          // 无操作
        } else if (survivePoints === 2 || survivePoints === 3) {
          board[i][j] = cur | 2; // 二进制 第二位设置为 1
        } else {
          // 无操作
        }
      } else {
        if (survivePoints === 3) {
          board[i][j] = cur | 2;
        } else {
          // 无操作
        }
      }
    }
  }

  // 在遍历一遍 处理为结果
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < x; j++) {
      board[i][j] = (board[i][j] >>> 1) & 1;
    }
  }
}

import assert from "assert";
{
  const sample = [
    [1, 1],
    [1, 0],
  ];
  gameOfLife(sample);
  assert.deepStrictEqual(sample, [
    [1, 1],
    [1, 1],
  ]);
}

{
  const sample = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];
  gameOfLife(sample);

  assert.deepStrictEqual(sample, [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ]);
}
