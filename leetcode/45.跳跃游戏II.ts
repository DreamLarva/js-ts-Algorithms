/*
45. 跳跃游戏 II
中等
给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

0 <= j <= nums[i]
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。



示例 1:

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
示例 2:

输入: nums = [2,3,0,1,4]
输出: 2


提示:

1 <= nums.length <= 104
0 <= nums[i] <= 1000
题目保证可以到达 nums[n-1]
* */
import _ from "lodash";

function jump(nums: number[]): number {
  let maxPosition = 0; // 当前可以到达的最远距离
  let end = 0; // 用于保存在到达 end 之前不会 改变 result 计数;
  let result = 0;

  // 在遍历数组时，我们不访问最后一个元素，这是因为在访问最后一个元素之前，
  // 我们的边界一定大于等于最后一个位置，否则就无法跳到最后一个位置了。
  // 如果访问最后一个元素，在边界正好为最后一个位置的情况下，
  // 我们会增加一次「不必要的跳跃次数」，因此我们不必访问最后一个元素。
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === end) {
      end = maxPosition;
      result++;
    }
  }

  return result;
}

// 动态规划
function jump1(nums: number[]): number {
  if (nums.length === 1) return 0;
  // 动态规划
  // 存储跳到当前位置最小要几步
  const cache = [0, ...Array(nums.length - 1).fill(nums.length)];

  for (let i = 0; i < nums.length; i++) {
    if (i + nums[i] >= nums.length - 1) {
      // 到达终点 返回结果
      return cache[i] + 1;
    }
    for (let j = 1; j <= nums[i] && i + j < nums.length; j++) {
      cache[i + j] = Math.min(cache[i] + 1, cache[i + j]);
    }
  }

  throw new Error("can not reach the last");
}

import assert from "assert";
assert.strictEqual(jump([2, 3, 1, 1, 4]), 2);
assert.strictEqual(jump([2, 3, 0, 1, 4]), 2);
assert.strictEqual(jump([2, 1]), 1);
