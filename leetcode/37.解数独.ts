/*
编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字1-9在每一行只能出现一次。
数字1-9在每一列只能出现一次。
数字1-9在每一个以粗实线分隔的3x3宫内只能出现一次。
空白格用'.'表示。



一个数独。



答案被标成红色。

Note:

给定的数独序列只包含数字1-9和字符'.'。
你可以假设给定的数独只有唯一解。
给定数独永远是9x9形式的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sudoku-solver
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

import _ from "lodash";
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {}

function step(board: string[][], x: number, y: number) {
  const availableNums = getAvailableNums(board, x, y);
  for (const availableNum of availableNums) {
    board[y][x] = availableNum;
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        if (board[y][x] === ".") {
          step(board, x, y);
        }
      }
    }
  }
}

function getAvailableNums(board: string[][], x: number, y: number) {
  const total = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // 行¢¢
  const row = board[y];
  // 列
  const column = board.map((v) => v[x]);
  // 块
  const block = getBlock(board, x, y);

  return [row, column, block].reduce(
    (pre, cur) => _.difference(pre, cur),
    total
  );
}

function getBlock(board: string[][], x: number, y: number) {
  const xStart = Math.floor(x / 3);
  const yStart = Math.floor(y / 3);

  const arr: string[] = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr.push(arr[yStart + i][xStart + j]);
    }
  }

  return arr;
}
