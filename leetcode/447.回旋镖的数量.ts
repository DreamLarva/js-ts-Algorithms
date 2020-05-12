/*
给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，
其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

示例:

输入:
[[0,0],[1,0],[2,0]]

输出:
2

解释:
两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-boomerangs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points: number[][]) {
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    const map: { [key: string]: number } = {};
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const distance = Math.abs(
        (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2
      );
      map[distance] = map[distance] == null ? 1 : map[distance] + 1;
    }

    result += Object.values(map).reduce((sum, cur) => {
      return sum + cur * (cur - 1);
    }, 0);
  }

  return result;
};

import assert from "assert";

assert.strictEqual(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [2, 0],
  ]),
  2
);
assert.strictEqual(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [2, 0],
    [-1, 0],
  ]),
  4
);
assert.strictEqual(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 1],
    [4, 1],
    [0, 1],
  ]),
  6
);
