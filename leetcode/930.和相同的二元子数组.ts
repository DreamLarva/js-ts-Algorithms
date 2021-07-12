/*
930. 和相同的二元子数组
给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

子数组 是数组的一段连续部分。



示例 1：
  输入：nums = [1,0,1,0,1], goal = 2
  输出：4
  解释：
  有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]

示例 2：
  输入：nums = [0,0,0,0,0], goal = 0
  输出：15


提示：
  1 <= nums.length <= 3 * 104
  nums[i] 不是 0 就是 1
  0 <= goal <= nums.length

* */

function numSubarraysWithSum(nums: number[], goal: number): number {
  /**
   * 前缀表 + 哈希表
   * */
  const map = {};
  let sum = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    /**
     * 先存 map 再加 到 sum
     * 毕竟 i = nums.length-1 的时候是不需要存的
     * */
    map[sum] = (map[sum] ?? 0) + 1;
    sum += nums[i];
    result += map[sum - goal] ?? 0;
  }
  return result;
}

function numSubarraysWithSum2(nums: number[], goal: number): number {
  /**
   * 使用滑动窗口 由于值只有1 和 0(left1 和 left2 之间的间隔可以绝对控住)
   * 值单调递增 或者 不变
   * */
  const n = nums.length;
  let left1 = 0,
    left2 = 0,
    right = 0;
  let sum1 = 0,
    sum2 = 0;
  let ret = 0;
  while (right < n) {
    sum1 += nums[right];
    /**
     * sum1 > goal 和 sum2 >= goal 确定了
     * 对应的 left1 和 left2 除了都是 0 的情况下 , 必定都至少相差1
     * */
    while (left1 <= right && sum1 > goal) {
      sum1 -= nums[left1];
      left1++;
    }
    sum2 += nums[right];
    while (left2 <= right && sum2 >= goal) {
      sum2 -= nums[left2];
      left2++;
    }
    /**
     * 其实也就是 符合的次数子数组 加上 左侧每个 额外的0 的数量
     * */
    ret += left2 - left1;
    right++;
    console.log(left1, left2);
  }
  return ret;
}

import assert from "assert";
import { mapObjIndexed } from "ramda";
assert.strictEqual(numSubarraysWithSum([1, 0, 1, 0, 1], 2), 4);
assert.strictEqual(numSubarraysWithSum([0, 0, 0, 0, 0], 0), 15);
