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
function solveSudoku(board: string[][]): void {
  const allPositions = getAllPositions(board);

  step(board, allPositions);
}

function step(board: string[][], allPositions: [number, number][], index = 0) {
  // 所有的点 都已经天下完成
  if (index === allPositions.length) return true;
  const [y, x] = allPositions[index];
  const availableNums = getAvailableNums(board, x, y);
  // 当前点 没有可用的值了 没有解
  if (availableNums.length === 0) return false;
  for (const num of availableNums) {
    board[y][x] = num;
    // 之后所有的点 都填上了 已经解出答案
    if (step(board, allPositions, index + 1)) return true;
  }
  // 当前 没有解 回溯状态
  board[y][x] = ".";
  return false;
}

function getAllPositions(board: string[][]) {
  const result: [number, number][] = [];
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === ".") {
        result.push([y, x]);
      }
    }
  }
  return result;
}

function isValid(board: string[][], x: number, y: number) {
  // 行
  const row = board[y];
  if (row.every((v) => v !== ".") && _.uniq(row).length !== 9) return false;
  // 列
  const column = board.map((v) => v[x]);
  if (column.every((v) => v !== ".") && _.uniq(column).length !== 9)
    return false;
  // 块
  const block = getBlock(board, x, y);
  if (block.every((v) => v !== ".") && _.uniq(block).length !== 9) return false;

  return true;
}

/**
 * 求还未使用到的数字
 * */
function getAvailableNums(board: string[][], x: number, y: number) {
  const total = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // 行
  const row = board[y];
  // 列
  const column = board.map((v) => v[x]);
  // 块
  const block = getBlock(board, x, y);

  // 求差集
  return [row, column, block].reduce(
    (pre, cur) => _.difference(pre, cur),
    total
  );
}

function getBlock(board: string[][], x: number, y: number) {
  const xStart = Math.floor(x / 3) * 3;
  const yStart = Math.floor(y / 3) * 3;

  const arr: string[] = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr.push(board[yStart + i][xStart + j]);
    }
  }

  return arr;
}

import assert from "assert";
// region 验证
type SudokuElement = string; // "." | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
function isValidSudoku(board: SudokuElement[][]) {
  // 存储每列的结果
  const columns: number[][] = Array(9)
    .fill(0)
    .map(() => []);
  // 存储每行的结果
  const rows: number[][] = Array(9)
    .fill(0)
    .map(() => []);
  // 存储每块的结果
  const blocks: number[][] = Array(9)
    .fill(0)
    .map(() => []);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let num = board[i][j];
      if (num === ".") continue;
      const num_element = parseInt(num);
      const box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      // 老样子 哈希表 判断重复
      rows[i][num_element] = (rows[i][num_element] || 0) + 1;
      columns[j][num_element] = (columns[j][num_element] || 0) + 1;
      blocks[box_index][num_element] =
        (blocks[box_index][num_element] || 0) + 1;

      if (
        rows[i][num_element] > 1 ||
        columns[j][num_element] > 1 ||
        blocks[box_index][num_element] > 1
      )
        return false;
    }
  }
  return true;
}
// endregion
{
  const sample = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  solveSudoku(sample);
  assert.strictEqual(isValidSudoku(sample), true);
}
