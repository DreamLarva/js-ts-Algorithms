/*
给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

示例：

给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

说明:
    1. 你可以假设数组不可变。
    2. 会多次调用 sumRange 方法。
* */

/**
 * 根据题意
 * 2. 会多次调用 sumRange 方法。 不能每次都做运算要有 正确的缓存机制
 * 又根据 1. 你可以假设数组不可变。 不用担心原始数据会 变化
 * */

class NumArray {
  sum_cache: number[] = [];
  originData: number[];

  /**
   * @param {number[]} nums
   */
  constructor(nums: number[]) {
    this.originData = nums;
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  sumRange(i: number, j: number): number {
    // 判断缓存j 位置的值 如果有直接用缓存计算
    if (this.sum_cache[j]) {
      if (i === 0) return this.sum_cache[j];
      return this.sum_cache[j] - this.sum_cache[i - 1];
    }

    // 计算缓存
    while (this.sum_cache.length - 1 !== j) {
      if (this.sum_cache.length === 0) {
        this.sum_cache.push(this.originData[0]);
      } else {
        const sum_cache_len = this.sum_cache.length;
        this.sum_cache.push(
          this.sum_cache[sum_cache_len - 1] + this.originData[sum_cache_len]
        );
      }
    }

    return this.sumRange(i, j);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

import assert from "assert";

const instance = new NumArray([-2, 0, 3, -5, 2, -1]);
assert.strictEqual(instance.sumRange(0, 2), 1);
assert.strictEqual(instance.sumRange(2, 5), -1);
