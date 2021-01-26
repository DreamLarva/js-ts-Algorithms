/*
40. 组合总和 II

给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

function combinationSum2(candidates: number[], target: number): number[][] {
  const sortedData = sortData(candidates);
  const result: number[][] = [];
  dfs(target, 0, sortedData);
  return result;

  function dfs(
    rest: number,
    position = 0,
    restList: [number, number][],
    resultList: number[] = []
  ) {
    if (rest === 0) {
      result.push(resultList);
      return;
    }
    if (rest < 0) return;
    if (restList[position] == null) return;
    const [val, time] = restList[position++];

    for (let i = 0; i <= time; i++) {
      dfs(
        rest - i * val,
        position,
        restList,
        resultList.concat(...Array(i).fill(val))
      );
    }
  }
}

/**
 * 先整理数据 , 相同的整理到一起
 * */
function sortData(candidates: number[]) {
  let index = 0;
  const data: [number, number][] = [];
  const map: { [key: number]: number } = {};
  for (let i = 0; i < candidates.length; i++) {
    const cur = candidates[i];
    if (map[cur] != null) {
      data[map[cur]][1]++;
    } else {
      map[cur] = index;
      data.push([cur, 1]);
      index++;
    }
  }
  return data;
}

function combinationSum3(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  dfs(0, target);
  return result;

  function dfs(position: number, target: number, status: number[] = []) {
    if (target < 0) return;

    if (target === 0) {
      result.push(status.slice());
      return;
    }

    if (position >= candidates.length) return;

    let last = NaN;
    for (let i = position; i < candidates.length; i++) {
      // 妙啊
      // 保证了 本地的这次循环 相同的值只可能出现一次
      if (last === candidates[i]) continue;

      // 当前值为
      last = candidates[i];
      status.push(candidates[i]);
      dfs(i + 1, target - candidates[i], status);

      // 将进入没有 candidates[i] 的流程
      status.pop();
    }
  }
}

import assert from "assert";
import { sortDeep } from "../util/assertHelper";

assert.deepStrictEqual(
  sortDeep(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)),
  sortDeep([
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6],
  ])
);
assert.deepStrictEqual(
  sortDeep(combinationSum2([2, 5, 2, 1, 2], 5)),
  sortDeep([[1, 2, 2], [5]])
);
assert.deepStrictEqual(sortDeep(combinationSum2([1, 1], 1)), sortDeep([[1]]));

assert.deepStrictEqual(
  sortDeep(combinationSum3([10, 1, 2, 7, 6, 1, 5], 8)),
  sortDeep([
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6],
  ])
);
assert.deepStrictEqual(
  sortDeep(combinationSum3([2, 5, 2, 1, 2], 5)),
  sortDeep([[1, 2, 2], [5]])
);
assert.deepStrictEqual(sortDeep(combinationSum3([1, 1], 1)), sortDeep([[1]]));

import Benchmark from "benchmark";
const suite = new Benchmark.Suite();

const candidates = [1,1];
const target = 1 // Math.floor(Math.random() * 100);
console.log(target)

suite
  .add("sort and dfs", function () {
    combinationSum2(candidates, target);
  })
  .add("dfs", function () {
    combinationSum3(candidates, target);
  })
  .on("cycle", function (event: Benchmark.Event) {
    console.log(String(event.target));
  })
  .on("complete", function (this: Benchmark.Suite) {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
  })
  // run async
  .run({ async: false });

/**
 * combinationSum3 不整理数据的 快的多
 * */
