/*

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例 2：

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]


提示：
  1 <= candidates.length <= 30
  1 <= candidates[i] <= 200
  candidate 中的每个元素都是独一无二的。
  1 <= target <= 500
* */
function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  // 我他妈直接 使用回溯算法
  const result: number[][] = [];
  step(0, candidates);
  return result;

  function step(
    current: number,
    candidates: number[],
    currentList: number[] = []
  ) {
    for (let i = 0; i < candidates.length; i++) {
      const newValue = current + candidates[i];
      if (newValue > target) return; // 排序过 之后的值只可能变大

      if (newValue === target) {
        result.push(currentList.concat(candidates[i]));
        return; // 因为排序过 之后的值只可能变大
      }

      step(newValue, candidates.slice(i), currentList.concat(candidates[i]));
    }
  }
}

import assert from "assert";
import { sortDeep } from "../util/assertHelper";

assert.deepStrictEqual(
  sortDeep(combinationSum([2, 3, 6, 7], 7)),
  sortDeep([[7], [2, 2, 3]])
);
assert.deepStrictEqual(
  sortDeep(combinationSum([2, 3, 5], 8)),
  sortDeep([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ])
);
