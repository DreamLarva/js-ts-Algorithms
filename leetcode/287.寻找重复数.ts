/*
287. 寻找重复数
给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

示例 1:

输入: [1,3,4,2,2]
输出: 2
示例 2:

输入: [3,1,3,4,2]
输出: 3
说明：

不能更改原数组（假设数组是只读的）。
只能使用额外的 O(1) 的空间。
时间复杂度小于 O(n2) 。
数组中只有一个重复的数字，但它可能不止重复出现一次。
* */
var findDuplicate = function (nums: number[]): number {
  /**
   * 很明显 同142. 环形链表II 就是求同环的起点
   * */

  let slow = 0;
  let fast = 0;
  let len = nums.length;
  do {
    fast = nums[fast === 0 ? 0 : fast - 1];
    fast = nums[ fast - 1];

    slow = nums[slow === 0 ? 0 : slow - 1];
  } while (nums[slow] !== nums[fast]);

  // 第二次跑圈 将其中一个 指针指向head节点 并且 都每次只进一步
  // 相遇的节点 就是相较的节点
  fast = 0;
  while (nums[slow] !== nums[fast]) {
    fast = nums[fast === 0 ? 0 : fast - 1];
    slow = nums[slow - 1];
  }
  return nums[slow];
};

import assert from "assert";
assert.strictEqual(findDuplicate([1, 3, 4, 2, 2]), 2);
// assert.strictEqual(findDuplicate([3, 1, 3, 4, 2]), 3);
