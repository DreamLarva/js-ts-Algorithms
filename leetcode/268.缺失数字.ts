/*
给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

输入: [3,0,1]
输出: 2
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums: number[]) {};

/**
 * 由于给出的 数组的数字是乱序的 所以一般的查找并不好
 * */
/**
 * 求和
 * */
function solution1(nums: number[]) {
  let totalSum = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    totalSum += i;
  }
  return totalSum - nums.reduce((a, b) => a + b);
}

/**
 * 去^ 操作
 * */
function solution2(nums: number[]) {
  let result = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    nums[i] && (result ^= nums[i]);
    result ^= i;
  }
  return result;
}

export {};
