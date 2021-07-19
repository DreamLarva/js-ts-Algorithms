/*
1838. 最高频元素的频数
元素的 频数 是该元素在一个数组中出现的次数。

给你一个整数数组 nums 和一个整数 k 。在一步操作中，你可以选择 nums 的一个下标，并将该下标对应元素的值增加 1 。

执行最多 k 次操作后，返回数组中最高频元素的 最大可能频数 。



示例 1：

输入：nums = [1,2,4], k = 5
输出：3
解释：对第一个元素执行 3 次递增操作，对第二个元素执 2 次递增操作，此时 nums = [4,4,4] 。
4 是数组中最高频元素，频数是 3 。
示例 2：

输入：nums = [1,4,8,13], k = 5
输出：2
解释：存在多种最优解决方案：
- 对第一个元素执行 3 次递增操作，此时 nums = [4,4,8,13] 。4 是数组中最高频元素，频数是 2 。
- 对第二个元素执行 4 次递增操作，此时 nums = [1,8,8,13] 。8 是数组中最高频元素，频数是 2 。
- 对第三个元素执行 5 次递增操作，此时 nums = [1,4,13,13] 。13 是数组中最高频元素，频数是 2 。
示例 3：

输入：nums = [3,9,6], k = 2
输出：1


提示：
  1 <= nums.length <= 105
  1 <= nums[i] <= 105
  1 <= k <= 105
  通过次数9,791提交次数23,463

* */
function maxFrequency(nums: number[], k: number): number {
  /**
   * 滑动窗口 r 向右移时 消耗的+1 只可能变多
   * 所以 l 又移是不可逆的(因为之后只可能要更多,之前的绝对不可能满足)
   * */
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let l = 0;
  let total = 0; // 总共消耗了几次 +1
  let result = 1;

  for (let r = 1; r < len; r++) {
    total += (nums[r] - nums[r - 1]) * (r - l);
    while (total > k) {
      // 用的 +1 次数过多
      // l 右移
      total -= nums[r] - nums[l]; // 恢复 l 使用掉的+1 的次数
      l++;
    }

    result = Math.max(result, r - l + 1);
  }
  return result;
}

import assert from "assert";
assert.strictEqual(maxFrequency([1, 2, 4], 5), 3);
assert.strictEqual(maxFrequency([1, 4, 8, 13], 5), 2);
