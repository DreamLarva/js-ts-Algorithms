/*
79. 单词搜索
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。



示例 1：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
示例 3：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false


提示：

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board 和 word 仅由大小写英文字母组成


进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
* */
import { bool } from "yup";

function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // 四个方向

  // 已经走过的格子
  const visited = Array.from({ length: m }).map(() => Array(n).fill(false));

  function backTrace(y: number, x: number, word: string, index: number) {
    if (board[y][x] != word.charAt(index)) {
      return false;
    } else if (index === word.length - 1) {
      return true;
    }
    visited[y][x] = true;

    let result = false;

    for (const [dx, dy] of directions) {
      let newX = dx + x;
      let newY = dy + y;
      if (newX >= 0 && newY >= 0 && newX < n && newY < m) {
        if (!visited[newY][newX]) {
          /**
           * 递归中快速 中断的方法
           * 存一个值, 到达目标直接 break 并且返回
           * */
          if (backTrace(newY, newX, word, index + 1)) {
            result = true;
            break;
          }
        }
      }
    }

    visited[y][x] = false;
    return result;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backTrace(i, j, word, 0)) return true;
    }
  }

  return false;
}

import assert from "assert";
assert.strictEqual(
  exist(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],

    "AAB"
  ),
  true
);

assert.strictEqual(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  ),
  true
);
assert.strictEqual(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  ),
  true
);
assert.strictEqual(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCA"
  ),
  false
);
assert.strictEqual(exist([["A", "A"]], "AAA"), false);
