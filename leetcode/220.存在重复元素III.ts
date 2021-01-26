/*
给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。

示例 1:

输入: nums = [1,2,3,1], k = 3, t = 0
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1, t = 2
输出: true
示例 3:

输入: nums = [1,5,9,1,5,9], k = 2, t = 3
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import _ from "lodash";

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (
  nums: number[],
  k: number,
  t: number
) {
  if (t < 0) return false;
  // 分隔成多个桶

  const map: { [key: number]: number } = {};
  const w = t + 1; // 一个桶里面放几个东西
  for (let i = 0; i < nums.length; i++) {
    let m = getID(nums[i], w);
    // 当前桶有 两个值 那么一定在范围内
    if (map[m] != null) return true; // 注意这边 map[m]
    // 相邻的桶中是不是有符合要求的
    if (map[m - 1] != null && Math.abs(nums[i] - map[m - 1]) < w) return true;
    if (map[m + 1] != null && Math.abs(nums[i] - map[m + 1]) < w) return true;

    // 没有满足 直接放入 桶中
    map[m] = nums[i];
    /**
     * 为什么只要比一次就行了呢 就算在相邻的桶中也有可能 并不是想要的结果
     * 但是每次都能覆盖呢
     * 因为很简单 如果要覆盖 必定在同一个桶里面 那么优先因为在一个桶中 而判断为 true 不需要再和相邻的桶判断了
     * */
    // 把 不满足 i - j <= k 的排除 注意此处 i 是index
    if (i >= k) Reflect.deleteProperty(map, getID(nums[i - k], w));
  }
  return false;
};

// 获取 桶的编号
function getID(x: number, w: number) {
  return Math.floor(x / w);
}

// 暴力
var containsNearbyAlmostDuplicate1 = function (
  nums: number[],
  k: number,
  t: number
) {
  // 只要 判断 i 位置 之前 k 个位置内 有没有能够符合 nums [i] 和 nums [j] 的差的绝对值最大为 t 就成了
  for (let i = 0; i < nums.length; i++) {
    let j = i - 1;
    while (j >= 0 && i - j <= k) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
      j--;
    }
  }

  return false;
};

import assert from "assert";

assert.strictEqual(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0), true);
assert.strictEqual(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2), true);
assert.strictEqual(
  containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3),
  false
);
assert.strictEqual(containsNearbyAlmostDuplicate([3, 6, 0, 2], 2, 2), true);
