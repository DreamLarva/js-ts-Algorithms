/*
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
进阶:

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  const short = nums1,
    long = nums2;
  // 处理较短的数组 成为
  // [字符] : 出现几次
  const map: { [key: number]: number } = {};
  for (const char of short) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  const result: number[] = [];
  for (const char of long) {
    if (map[char]) {
      result.push(char);
      map[char]--;
    }
  }

  return result;
};

import assert from "assert";

assert.deepStrictEqual(intersect([1, 2, 3, 4], [2, 3]), [2, 3]);
assert.deepStrictEqual(intersect([1, 2, 3, 4, 2], [2, 3, 2]), [2, 3, 2]);
assert.deepStrictEqual(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
