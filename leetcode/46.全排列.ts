/*
给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export var permute = function (nums: number[]): number[][] {
  /**
   * 交换 两个位置的值 直到 n次 输出结果
   * 而非 生成 n! 个数组
   * */
  const result: number[][] = [];
  backtrack(nums.length, nums, 0);
  return result;

  function backtrack(n: number, nums: number[], first: number) {
    // 交换的位置 已经没有了 返回结果
    if (first === n) {
      return result.push(nums.slice());
    }

    /**
     * 注意与全排列II 的不同 之处
     * 不需要排序
     * 由于 每个值都不同 所以每次 交换都有意义 所以需要回溯
     * */
    for (let i = first; i < n; i++) {
      // console.log(`start${first}`, nums, "swap", nums[first], nums[i]);

      // 第一个其实是 不交换的
      [nums[first], nums[i]] = [nums[i], nums[first]];
      // 交换下一个位置的值
      backtrack(n, nums, first + 1);

      // 并不需要 回溯 返回之前的状态 也可以
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  }
};

import assert from "assert";
import { sortDeep } from "../util/assertHelper";

assert.deepStrictEqual(permute([1, 2, 3]), [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 2, 1],
  [3, 1, 2],
]);
