/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:

输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
进阶：

一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
你能想出一个仅使用常数空间的一趟扫描算法吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-colors
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums: number[]) {
  /*
   * 荷兰旗问题
   * 需要排列的内容 只有三种 那么 只需要 O(n)的算法 就可以
   * 需要三个指针
   * 1. 分别是写入位置
   * 2. 当前 最后一个 1 位置之后
   * 3. 当前 最后一个 2 位置之前
   * 循环的结束 条件是 1 指针 在 3 指针 右侧
   * */

  // 初始化0的最右边界：p0 = 0。在整个算法执行过程中 nums[idx < p0] = 0.
  let p0 = 0;
  // 初始化2的最左边界 ：p2 = n - 1。在整个算法执行过程中 nums[idx > p2] = 2.
  let p2 = nums.length - 1;
  // 初始化当前考虑的元素序号 ：curr = 0.
  let curr = 0;
  while (curr <= p2) {
    // 若 nums[curr] = 0 ：交换第 curr个 和 第p0个 元素，并将指针都向右移。
    if (nums[curr] === 0) {
      [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
      curr++;
      p0++;
    }
    // 若 nums[curr] = 2 ：交换第 curr个和第 p2个元素，并将 p2指针左移 。
    else if (nums[curr] === 2) {
      [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
      p2--;
    }
    // 若 nums[curr] = 1 ：将指针curr右移。
    else {
      curr++;
    }
  }
};

import assert from "assert";

{
  const sample = [2, 0, 2, 1, 1, 0];
  sortColors(sample);
  assert.deepStrictEqual(sample, [0, 0, 1, 1, 2, 2]);
}
