/*
你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

示例:

给定 n = 5，并且 version = 4 是第一个错误的版本。

调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true

所以，4 是第一个错误的版本。
* */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion: (version: number) => boolean) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n: number): number {
    if (isBadVersion(1)) return 1;
    let left = 1;
    let right = n;
    /**
     * left 为 true , right 为 false
     * left 和 right 不相邻 二分法 得到的
     *      结果 true 的位置 设置为 新的 left
     *      结果 false 的位置 设置为 新的 right
     * 当 left 和 right 相邻的时候 right 就是 结果
     * */
    while (true) {
      if (left + 1 === right) return right;
      const midIndex = left + Math.floor((right - left) / 2); // 推荐使用 floor 因为其他有类型约束的语言 int 类型 不能整除 就会执行floor 操作
      if (isBadVersion(midIndex)) right = midIndex;
      else left = midIndex;
    }
  };
};

import assert from "assert";

assert.strictEqual(solution((i) => i === 4)(5), 4);
