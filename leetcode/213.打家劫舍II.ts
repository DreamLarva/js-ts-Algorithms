/*
213. 打家劫舍 II
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。



示例 1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2：

输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：

输入：nums = [0]
输出：0


提示：

1 <= nums.length <= 100
0 <= nums[i] <= 1000
* */

var rob = function (nums: number[]) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  } else if (length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  // 分治法
  // 含有 nums 首位和 末位的分开 计算,然后取最大值
  // a , b , c , d , e , f
  // 分成 [a , b , c , d , e ] 和 [b , c , d , e , f]
  // 最大值 可能有三种情况 只 1.包含 a , 1.只包含 b , 3.既不包含 a 也不包含 b
  // 而这组 也同样包含可以取到 第三种结果的情况
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};

const robRange = (nums: number[], start: number, end: number) => {
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};

import assert from "assert";

// assert.strictEqual(rob([2, 3, 2]), 3);
// assert.strictEqual(rob([1, 2, 3, 1]), 4);
// assert.strictEqual(rob([0]), 0);
assert.strictEqual(rob([1, 1, 3, 6, 7, 10, 7, 1, 8, 5, 9, 1, 4, 4, 3]), 41);
