/*
 * 输入 横坐标 x 纵坐标 y
 * 判断 位于 9*9 二维数组中 的 第 哪个 nxn 块中
 * */
const arr = [
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
];

function resolve(x, y) {
  return Math.trunc(x / 3) * 3 + Math.trunc(y / 3);
}

const assert = require("assert");
assert.strictEqual(resolve(1, 1), 0);
assert.strictEqual(resolve(4, 4), 4);
assert.strictEqual(resolve(8, 3), 7);
