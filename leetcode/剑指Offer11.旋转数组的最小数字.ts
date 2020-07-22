/*
剑指 Offer 11. 旋转数组的最小数字
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0
注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
* */

/**
 * 与 153.寻找旋转排序数组中的最小值.ts 不同点 仅在于 可能存在重复点
 * */
function minArray(numbers: number[]): number {
  if (numbers.length === 1) return numbers[0];
  /**
   * 依然是二分法
   * */
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (left + 1 === right) return Math.min(numbers[left], numbers[right]);
    const mid = Math.ceil((left + right) / 2);

    // 如果 mid  和 right 相等 则值可能在左边也可能在右边
    // 官方推荐的方法 是 直接right 向左移一格
    if (numbers[mid] === numbers[right]) {
      right -= 1;
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return numbers[right];
}

import assert from "assert";

assert.strictEqual(minArray([3, 4, 5, 1, 2]), 1);
assert.strictEqual(minArray([2, 2, 2, 0, 1]), 0);
assert.strictEqual(minArray([4, 5, 6, 7, 0, 1, 2]), 0);
assert.strictEqual(minArray([2, 3, 1]), 1);
assert.strictEqual(minArray([10, 10, 10, 1, 10]), 1);
assert.strictEqual(minArray([1, 3, 3]), 1);
assert.strictEqual(minArray([3, 1, 1]), 1);
assert.strictEqual(minArray([3, 1, 3, 3]), 1);
assert.strictEqual(minArray([3, 1, 3, 3]), 1);
assert.strictEqual(minArray([1, 1, 1, 3]), 1);
assert.strictEqual(minArray([1, 3, 1, 1]), 1);
assert.strictEqual(minArray([10, 10, 10, 10, 10, 1, 10, 10, 10]), 1);
