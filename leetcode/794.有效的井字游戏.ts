/*
794. 有效的井字游戏
给你一个字符串数组 board 表示井字游戏的棋盘。当且仅当在井字游戏过程中，棋盘有可能达到 board 所显示的状态时，才返回 true 。

井字游戏的棋盘是一个 3 x 3 数组，由字符 ' '，'X' 和 'O' 组成。字符 ' ' 代表一个空位。

以下是井字游戏的规则：

玩家轮流将字符放入空位（' '）中。
玩家 1 总是放字符 'X' ，而玩家 2 总是放字符 'O' 。
'X' 和 'O' 只允许放置在空位中，不允许对已放有字符的位置进行填充。
当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。
当所有位置非空时，也算为游戏结束。
如果游戏结束，玩家不允许再放置字符。


示例 1：


输入：board = ["O  ","   ","   "]
输出：false
解释：玩家 1 总是放字符 "X" 。
示例 2：


输入：board = ["XOX"," X ","   "]
输出：false
解释：玩家应该轮流放字符。
示例 3：


输入：board = ["XXX","   ","OOO"]
输出：false
Example 4:


输入：board = ["XOX","O O","XOX"]
输出：true


提示：

board.length == 3
board[i].length == 3
board[i][j] 为 'X'、'O' 或 ' '
* */
function validTicTacToe(board: string[]): boolean {
  // 规则1 X >= O
  // 规则2 胜利方 > 失败方
  let xCount = 0,
    oCount = 0;
  for (const row of board) {
    for (const c of row) {
      xCount = c === "X" ? xCount + 1 : xCount;
      oCount = c === "O" ? oCount + 1 : oCount;
    }
  }
  if (xCount < oCount) return false;
  if (xCount - oCount > 1) return false;

  if (oCount >= 3) {
    // 行胜利
    let x_win = false;
    let o_win = false;
    for (let i = 0; i < 3; i++) {
      if (board[i] === "XXX") x_win = true;
      if (board[i] === "OOO") o_win = true;
    }

    if (x_win && xCount - oCount !== 1) return false;
    if (o_win && oCount !== xCount) return false;

    // 列胜利
    x_win = false;
    o_win = false;
    loop: for (let i = 0; i < 3; i++) {
      let cache = board[0][i];
      if (cache === "") continue;
      for (let j = 1; j < 3; j++) {
        if (board[j][i] !== cache) continue loop;
      }
      if (cache === "X") x_win = true;
      if (cache === "O") o_win = true;
    }

    if (x_win && xCount - oCount !== 1) return false;
    if (o_win && oCount !== xCount) return false;

    // 斜胜利
    x_win = false;
    o_win = false;
    if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O" || board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
      o_win = true;
    }

    if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X" || board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
      x_win = true
    }
    if (x_win && xCount - oCount !== 1) return false;
    if (o_win && oCount !== xCount) return false;


  }

  return true;
}

import assert from "assert";
assert.strictEqual(validTicTacToe(["O  ", "   ", "   "]), false);
assert.strictEqual(validTicTacToe(["XOX", " X ", "   "]), false);
assert.strictEqual(validTicTacToe(["XXX", "   ", "OOO"]), false);
assert.strictEqual(validTicTacToe(["XOX", "O O", "XOX"]), true);
assert.strictEqual(validTicTacToe(["XXX", "OOX", "OOX"]), true);
assert.strictEqual(validTicTacToe(["OXX", "XOX", "OXO"]), false);
assert.strictEqual(validTicTacToe(["XOO", "OX ", "  X"]), false);
