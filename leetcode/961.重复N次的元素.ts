/*
961. 重复 N 次的元素
在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。

返回重复了 N 次的那个元素。



示例 1：

输入：[1,2,3,3]
输出：3
示例 2：

输入：[2,1,2,5,3,2]
输出：2
示例 3：

输入：[5,1,5,2,5,3,5,4]
输出：5


提示：

4 <= A.length <= 10000
0 <= A[i] < 10000
A.length 为偶数
* */

function repeatedNTimes(A: number[]): number {
  // 正常的做法 使用map 计数 一旦等于一半就是结果

  // 根据题意
  // 除了那个 重复的元素 则 其他的元素都 是不等的
  // 取巧的做法 在满足上面的原则 下 一定会出现 3个连续元素中至少有2个相同的情况
  // 除了等于数组长度 为 4 的情况 可能出爱心 [1,2,3,1] 刚好不满足

  for (let i = 0; i < A.length - 2; i++) {
    const a = A[i];
    const b = A[i + 1];
    const c = A[i + 2];

    if (a === b || a === c) {
      return a;
    }
    if (b === c) {
      return b;
    }
  }

  return A[A.length - 1];
}

import assert from "assert";
assert.strictEqual(repeatedNTimes([1, 2, 3, 3]), 3);
assert.strictEqual(repeatedNTimes([2, 1, 2, 5, 3, 2]), 2);
assert.strictEqual(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]), 5);
