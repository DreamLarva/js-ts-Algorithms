/*
1893. 检查是否区域内所有整数都被覆盖
给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。

如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。

已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖了。



示例 1：

输入：ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
输出：true
解释：2 到 5 的每个整数都被覆盖了：
- 2 被第一个区间覆盖。
- 3 和 4 被第二个区间覆盖。
- 5 被第三个区间覆盖。
示例 2：

输入：ranges = [[1,10],[10,20]], left = 21, right = 21
输出：false
解释：21 没有被任何一个区间覆盖。


提示：

1 <= ranges.length <= 50
1 <= starti <= endi <= 50
1 <= left <= right <= 50
* */
/**
 * @tag 差分数组 前缀和 覆盖率
 * */
function isCovered(ranges: number[][], left: number, right: number): boolean {
  const diff = new Array(52).fill(0); // 差分数组
  /**
   * 查分数组的 表示
   * diff[i] 的值 v 表示 diff[i] 比 diff[i - 1] 区间覆盖的变化量
   * diff[i] 为正表示 diff[i-1] 多 n 次覆盖
   * diff[i] 为0表示  和diff[i-1] 覆盖次数相同
   * */
  for (const [l, r] of ranges) {
    diff[l]++;
    diff[r + 1]--;
  }

  let curr = 0; // 前缀和

  // 前缀和 准确表示了每个位置的覆盖次数
  for (let i = 1; i < 51; i++) {
    curr += diff[i];
    // 在 left 和 right 的范围内 且前缀和 为0 表示没有覆盖到
    if (left <= i && i <= right && curr <= 0) {
      return false;
    }
  }

  return true;
}

import assert from "assert";
assert.strictEqual(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5
  ),
  true
);

assert.strictEqual(
  isCovered(
    [
      [1, 10],
      [10, 20],
    ],
    21,
    21
  ),
  false
);
