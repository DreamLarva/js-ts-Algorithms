/*
1673. 找出最具竞争力的子序列

提示
给你一个整数数组 nums 和一个正整数 k ，返回长度为 k 且最具 竞争力 的 nums 子序列。

数组的子序列是从数组中删除一些元素（可能不删除元素）得到的序列。

在子序列 a 和子序列 b 第一个不相同的位置上，如果 a 中的数字小于 b 中对应的数字，那么我们称子序列 a 比子序列 b（相同长度下）更具 竞争力 。 例如，[1,3,4] 比 [1,3,5] 更具竞争力，在第一个不相同的位置，也就是最后一个位置上， 4 小于 5 。

示例 1：

输入：nums = [3,5,2,6], k = 2
输出：[2,6]
解释：在所有可能的子序列集合 {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]} 中，[2,6] 最具竞争力。
示例 2：

输入：nums = [2,4,3,3,5,4,9,6], k = 4
输出：[2,3,3,4]


提示：

1 <= nums.length <= 105
0 <= nums[i] <= 109
1 <= k <= nums.length

* */
import _ from "lodash";

function mostCompetitive(nums: number[], k: number): number[] {
  // 越小的值 在前越好

  // 栈 存储数据
  const stack: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (
      stack.length !== 0 &&
      nums[i] < stack[stack.length - 1]! &&
      nums.length - i > k - stack.length
    ) {
      // 有小于栈顶的数据 就弹出
      stack.pop();
    }
    // 超过栈的大小就丢弃
    if (stack.length !== k) {
      stack.push(nums[i]);
    }
  }
  return stack;
}

import assert from "assert";
// assert.deepStrictEqual(mostCompetitive([3, 5, 2, 6], 2), [2, 6]);
assert.deepStrictEqual(
  mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4),
  [2, 3, 3, 4]
);
