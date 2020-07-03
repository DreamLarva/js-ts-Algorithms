/*
718. 最长重复子数组
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

示例 1:

输入:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出: 3
解释:
长度最长的公共子数组是 [3, 2, 1]。
说明:

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
* */
/**
 * 官方的解法 从后往前 动态规划
 * */
function findLength1(A: number[], B: number[]): number {
  let result: number = 0;
  const cache: number[][] = Array.from({ length: A.length + 1 }).map(() =>
    new Array(B.length + 1).fill(0)
  );
  for (let i = A.length - 1; i >= 0; i--) {
    for (let j = B.length - 1; j >= 0; j--) {
      cache[i][j] = A[i] == B[j] ? cache[i + 1][j + 1] + 1 : 0;
      result = Math.max(result, cache[i][j]);
    }
  }

  return result;
}

/**
 * 动态规划 从前往后
 * 只是 当[-1][-1] 直接当0 处理
 * */
function findLength2(A: number[], B: number[]): number {
  let result: number = 0;
  const cache: number[][] = Array.from({ length: A.length }).map(() =>
    new Array(B.length).fill(0)
  );
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      cache[i][j] = A[i] == B[j] ? (cache[i - 1]?.[j - 1] || 0) + 1 : 0;
      result = Math.max(result, cache[i][j]);
    }
  }

  return result;
}

/**
 * 滑动窗口
 * 看时间复杂度 似乎还比不上动态规划(但是速度快?)
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/zui-chang-zhong-fu-zi-shu-zu-by-leetcode-solution/
 * */
function findLength3(A: number[], B: number[]): number {
  let result = 0;

  // 裁剪A 匹配B
  for (let i = 0; i < A.length; i++) {
    result = Math.max(
      result,
      maxLength(A, B, i, 0, Math.min(A.length, B.length - i))
    );
  }
  // 裁剪B 匹配A
  for (let i = 0; i < B.length; i++) {
    result = Math.max(
      result,
      maxLength(A, B, 0, i, Math.min(A.length - i, B.length))
    );
  }
  return result;
}
function maxLength(
  A: number[],
  B: number[],
  addA: number,
  addB: number,
  len: number
) {
  let ret = 0;
  let k = 0;
  for (let i = 0; i < len; i++) {
    if (A[addA + i] == B[addB + i]) {
      k++;
    } else {
      k = 0;
    }
    ret = Math.max(ret, k);
  }
  return ret;
}

import assert from "assert";
assert.deepStrictEqual(findLength1([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]), 3);
assert.deepStrictEqual(findLength2([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]), 3);
assert.deepStrictEqual(findLength3([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]), 3);


import Benchmark from "benchmark";

const suite = new Benchmark.Suite();
const sample1: number[] = Array.from({ length: 1000 }).map(() =>
  Math.floor(Math.random() * 10)
);
const sample2: number[] = Array.from({ length: 1000 }).map(() =>
  Math.floor(Math.random() * 10)
);
suite
  .add("动态规划 从尾开时", function () {
    findLength1(sample1, sample2);
  })
  .add("动态规划 从头开始", function () {
    findLength2(sample1, sample2);
  })
  .add("滑动窗口", function () {
    findLength3(sample1, sample2);
  })
  .on("cycle", function (event: Benchmark.Event) {
    console.log(String(event.target));
  })
  .on("complete", function (this: any) {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
