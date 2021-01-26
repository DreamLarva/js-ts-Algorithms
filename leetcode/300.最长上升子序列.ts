/*
给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import _ from "lodash";
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums: number[]) {};

/**
 * 普通的作法
 * 动态规划
 * 存储一个数组 储存当前index 所能含有的最长上升子序列的长度
 * 之后 每新增一个数 就和之前每个位置的数值相比较 所有比之前位置大的数 说明处于那个那个位置后的升序之中
 * 然后比较每个 之前所有所得位置中的最大值 然后 +1 就是当前位置的最长升序数列
 * */
function lengthOfLIS1(nums: number[]) {
  if (nums.length <= 1) return nums.length;
  const result: number[] = [1];
  for (let i = 1; i < nums.length; i++) {
    result.push(1);
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        result[result.length - 1] = Math.max(
          result[j] + 1,
          result[result.length - 1]
        );
      }
    }
  }
  return Math.max(...result);
}

/**
 方法二：贪心 + 二分查找
 思路与算法

 考虑一个简单的贪心，如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小。
 * */
function lengthOfLIS2(nums: number[]) {
  if (nums.length <= 1) return nums.length;
  const result = [nums[0]]; // 表示长度为 i 的最长上升子序列的末尾元素的最小值，用 len 记录目前最长上升子序列的长度
  for (let i = 0; i < nums.length; i++) {
    // 最小值 中最右 也就是最大值比较
    // 相等说明 不需要任何操作 因为和上一个值的行为一直
    if (nums[i] === _.last(result)!) continue;
    if (nums[i] > _.last(result)!) {
      // 如果 大于 说明需要添加当前到最小值数组 因为他满足上升序列
      result.push(nums[i]);
    } else {
      // 如果小于等于说明 当前值应该 算到 缓存的数组中,位置应该是 与它的值最相近的值 如果 要替换的值是 2 , 但是缓存的数组有 1 和 3 那么应该替换 3
      // 这里用到了 2分法
      SetDataByDichotomy2(result, nums[i]);
    }
  }

  return result.length;
}

/**
 * 二分法 没有找到相等的值 优先找到最靠近较小的值
 * 注意这里用 pos 存储 所要替换数值前一个的位置
 * */
function SetDataByDichotomy1(arr: number[], data: number) {
  // 直接排除比所有值都小的情况
  if (data < arr[0]) {
    arr[0] = data;
    return;
  }

  let left = 0;
  let right = arr.length - 1;
  let pos = 0; // 例如 值 arr = [2,3] data = 1; 没有能够替换的位置 替换第一个
  while (left <= right) {
    /**
     * 在排除 data 比所有值都小的情况下
     * 因为使用的是 floor 所以只要 没有完全相等
     * 一定会执行到一次 arr[mid] < data
     * */
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === data) return; // 如果已经有了那么就是什么都不做
    if (arr[mid] < data) {
      // 如果 mid 在 data 的左边
      // [4, 6] 5; 最终 pos 也存在 4的位置
      pos = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  arr[pos + 1] = data;
}

/**
 * 二分法 没有值相等 优先选到最靠近较大的值
 * */
function SetDataByDichotomy2(arr: number[], data: number) {
  // 直接排除比所有值都小的情况
  if (data < arr[0]) {
    arr[0] = data;
    return;
  }

  let left = 0;
  let right = arr.length - 1;
  let pos = 0; // 例如 值 arr = [2,3] data = 1; 没有能够替换的位置 替换第一个
  while (left <= right) {
    const mid = left + Math.ceil((right - left) / 2);
    if (arr[mid] === data) return; // 如果已经有了那么就是什么都不做
    if (arr[mid] < data) left = mid + 1;
    else {
      pos = mid;
      right = mid - 1;
    }
  }

  arr[pos] = data;
}

import assert from "assert";

assert.strictEqual(lengthOfLIS1([10, 9, 2, 5, 3, 7, 101, 18]), 4);
assert.strictEqual(lengthOfLIS1([10, 9, 2, 5, 3, 7, 101, 18, 105]), 5);
assert.strictEqual(lengthOfLIS1([1, 3, 6, 7, 9, 4, 10, 5, 6]), 6);
assert.strictEqual(lengthOfLIS1([]), 0);

assert.strictEqual(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]), 4);
assert.strictEqual(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18, 105]), 5);
assert.strictEqual(lengthOfLIS2([1, 3, 6, 7, 9, 4, 10, 5, 6]), 6);
assert.strictEqual(lengthOfLIS2([4, 10, 4, 3, 8, 9]), 3);
assert.strictEqual(lengthOfLIS2([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]), 6);
assert.strictEqual(lengthOfLIS2([]), 0);
