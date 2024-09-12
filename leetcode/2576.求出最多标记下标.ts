/*
2576. 求出最多标记下标
中等

提示
给你一个下标从 0 开始的整数数组 nums 。

一开始，所有下标都没有被标记。你可以执行以下操作任意次：

选择两个 互不相同且未标记 的下标 i 和 j ，满足 2 * nums[i] <= nums[j] ，标记下标 i 和 j 。
请你执行上述操作任意次，返回 nums 中最多可以标记的下标数目。



示例 1：

输入：nums = [3,5,2,4]
输出：2
解释：第一次操作中，选择 i = 2 和 j = 1 ，操作可以执行的原因是 2 * nums[2] <= nums[1] ，标记下标 2 和 1 。
没有其他更多可执行的操作，所以答案为 2 。
示例 2：

输入：nums = [9,2,5,4]
输出：4
解释：第一次操作中，选择 i = 3 和 j = 0 ，操作可以执行的原因是 2 * nums[3] <= nums[0] ，标记下标 3 和 0 。
第二次操作中，选择 i = 1 和 j = 2 ，操作可以执行的原因是 2 * nums[1] <= nums[2] ，标记下标 1 和 2 。
没有其他更多可执行的操作，所以答案为 4 。
示例 3：

输入：nums = [7,6,8]
输出：0
解释：没有任何可以执行的操作，所以答案为 0 。


提示：

1 <= nums.length <= 10**5
1 <= nums[i] <= 10**9
* */
function maxNumOfMarkedIndices(nums: number[]): number {
  nums.sort((a, b) => a - b);

  // 最多只能有 Math.floor(nums.length / 2) 对
  // 排序后 如果数组是单数, 完全不用管中间的这个数, 因为轮不到他去匹配右侧的数
  // 然后枚举小数指针 匹配 大数指针
  const mid = Math.floor(nums.length / 2);
  let result = 0;
  for (let i = 0, j = mid; i < mid && j < nums.length; i++) {
    console.log(nums[i], nums[j]);
    // 不符合则 大数的指针右移
    while (j < nums.length && nums[i] * 2 > nums[j]) {
      j++;
    }

    if (j < nums.length) {
      result += 2;
      // 符合 右5指针右移
      j++;
    }
  }
  return result;
}

import assert from "assert";

assert.equal(maxNumOfMarkedIndices([1,1,2,2]), 4);
// assert.equal(maxNumOfMarkedIndices([3, 5, 2, 4]), 2);
// assert.equal(maxNumOfMarkedIndices([9, 2, 5, 4]), 4);
// assert.equal(maxNumOfMarkedIndices([7, 6, 8]), 0);
// assert.equal(
//   maxNumOfMarkedIndices([
//     4, 16, 58, 52, 51, 53, 67, 29, 12, 42, 67, 76, 95, 51, 31, 49, 9, 72, 83,
//     84, 12, 85, 78, 73, 3, 48, 22, 59, 99, 63, 10, 21, 43, 77, 43, 74, 75, 27,
//     13, 29, 73, 13, 20, 6, 56, 75, 83, 26, 24, 53, 56, 61, 96, 57, 33, 89, 99,
//     93, 81, 28, 49, 80, 88, 29, 51, 26, 95, 35, 61, 31, 96, 15, 65, 87, 12, 15,
//     81, 38, 96, 58, 23, 85, 5, 81, 26,
//   ]),
//   76
// );
