/*
56. 合并区间
给出一个区间的集合，请合并所有重叠的区间。



示例 1:

输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。



提示：
  intervals[i][0] <= intervals[i][1]
* */
function merge(intervals: number[][]): number[][] {
  // 按照最左侧数据排序
  intervals.sort(([a], [b]) => a - b);

  const result: number[][] = [];
  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      // 现在的区域 与上个区域重叠 将上一个区域拓展
      result[result.length - 1][1] = Math.max(current[1], last[1]);
      continue;
    }

    result.push(current);
  }

  return result;
}

import assert from "assert";

assert.deepStrictEqual(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ]
);

assert.deepStrictEqual(
  merge([
    [1, 4],
    [4, 5],
  ]),
  [[1, 5]]
);
