/*
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
说明:

A.length == n + m

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sorted-merge-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A: number[], m: number, B: number[], n: number) {
  // 从A数组末端 依照次序 放进两个数组的最大值
  let index = m + n - 1;
  let lastA = m - 1;
  let lastB = n - 1;
  while (index >= 0) {
    if (lastA < 0) {
      A.splice(0, lastB + 1, ...B.slice(0, lastB + 1));
      break;
    }

    if (lastB < 0) {
      break;
    }
    if (A[lastA] > B[lastB]) {
      A[index] = A[lastA];
      lastA--;
    } else {
      A[index] = B[lastB];
      lastB--;
    }

    index--;
  }
  return A;
};

import assert from "assert";
assert.deepStrictEqual(
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
  [1, 2, 2, 3, 5, 6]
);
assert.deepStrictEqual(merge([0], 0, [1], 1), [1]);
