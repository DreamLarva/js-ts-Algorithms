/*
面试题 08.03. 魔术索引
魔术索引。 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。
给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，
如果没有，则返回-1。若有多个魔术索引，返回索引值最小的一个。

示例1:

 输入：nums = [0, 2, 3, 4, 5]
 输出：0
 说明: 0下标的元素为0
示例2:

 输入：nums = [1, 1, 1]
 输出：1
说明:

此题为原书中的 Follow-up，即数组中可能包含重复元素的版本
提示:

nums长度在[1, 1000000]之间
* */

function findMagicIndex(nums: number[]): number {
  return step(nums, 0, nums.length);

  /**
   * 因为是有序数组 当然可以使用二分法求解
   * 因为可能出现 相同的值 所以可能最坏情况 效率还不如直接 迭代的快
   * */
  function step(nums: number[], left: number, right: number): number {
    if (left === nums[left]) return left;
    if (left >= right) return -1;
    const mid = left + Math.floor((right - left) / 2);

    // 由于可能有相同的元素 所以 判断mid 的条件只能用来剪枝
    // 如果mid 符合跪着 说明 结果只可能在 包含mid 的左侧
    const isMidMeetCondition = nums[mid] === mid;
    const leftResult = step(nums, left, mid);

    return isMidMeetCondition
      ? leftResult
      : leftResult === -1
      ? step(nums, mid + 1, right)
      : leftResult;
  }
}

import assert from "assert";

assert.strictEqual(findMagicIndex([0, 2, 3, 4, 5]), 0);
assert.strictEqual(findMagicIndex([1, 1, 1]), 1);
assert.strictEqual(
  findMagicIndex([
    -531369933,
    -469065528,
    -430059048,
    -428981853,
    -319235969,
    -288076332,
    -286667432,
    -282312559,
    -197049680,
    -197022263,
    -174416117,
    -138027773,
    -121899023,
    -111631966,
    -107567458,
    -70437707,
    -52463072,
    -45519851,
    -38641451,
    -15825815,
    -3835472,
    -1525043,
    22,
    566842886,
    593757472,
    605439236,
    619794079,
    640069993,
    657657758,
    718772950,
    815849552,
    839357142,
    936585256,
    1006188278,
    1042347147,
    1057129320,
    1062178586,
    1069769438,
  ]),
  22
);
