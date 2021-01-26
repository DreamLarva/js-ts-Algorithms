/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums: number[], target: number) {
  // 方法类似于 15.三数之和 只是结果需要一次处理而已
  // 将 0 处理为 target变量

  // 使用三个指针
  // 当前指正  当前指针后的一个位置 和 数组最后的位置
  nums.sort((a, b) => a - b);

  let result = Infinity;

  for (let i = 0; i < nums.length - 2; ) {
    let left = i + 1;
    let right = nums.length - 1;

    // 优化
    // 如果 result 已经小于 target 那么 之后的操作的可能的最大值 不能小于 result
    // 经过测试 似乎 这个逻辑 是不能走到的 因为 i++ 的 情况 整个 result 可能的趋势 都是增加的
    // if (result < target && nums[right] * 2 + nums[i] <= result) {
    //     i++;
    //     continue;
    // }

    // 如果 result 已经大于 target 那么 之后的操作的可能的最小值 不能大于 result
    if (result > target && nums[left] * 2 + nums[i] >= result) {
      i++;
      continue;
    }

    while (left < right) {
      const sum = nums[left] + nums[i] + nums[right];
      if (Math.abs(target - result) > Math.abs(sum - target)) {
        result = sum;
      }

      if (sum === target) return target;
      if (sum < target)
        while (left < right && nums[++left] === nums[left - 1]) {}
      else while (left < right && nums[--right] === nums[right + 1]) {}
    }

    // 由于是已经排序的 数组, 最左侧的指针的值 如果相同就没有必要再计算一次
    while (nums[i] === nums[++i]) {}
  }

  return result;
};

import assert from "assert";

assert.strictEqual(threeSumClosest([-1, 2, 1, -4], 1), 2);

assert.strictEqual(threeSumClosest([-1, 2, 1, -4, -1, 2, 1, -4], 5), 5);

assert.strictEqual(threeSumClosest([-1, 2, 1, -4, -1, 2, 1, -4], 5), 5);

assert.strictEqual(
  threeSumClosest([12, 39, -96, 88, 76, 63, -11, 43, -95, 43], -2),
  -7
);

// threeSumClosest([12, 39, -96, 88, 76, 63, -11, 43, -95, 43], -200);
// threeSumClosest([12, 39, -96, 88, 76, 63, -11, 43, -95, 43], 10);
