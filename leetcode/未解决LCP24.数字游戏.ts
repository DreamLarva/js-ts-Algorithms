/*

小扣在秋日市集入口处发现了一个数字游戏。主办方共有 N 个计数器，计数器编号为 0 ~ N-1。每个计数器上分别显示了一个数字，小扣按计数器编号升序将所显示的数字记于数组 nums。每个计数器上有两个按钮，分别可以实现将显示数字加一或减一。小扣每一次操作可以选择一个计数器，按下加一或减一按钮。

主办方请小扣回答出一个长度为 N 的数组，第 i 个元素(0 <= i < N)表示将 0~i 号计数器 初始 所示数字操作成满足所有条件 nums[a]+1 == nums[a+1],(0 <= a < i) 的最小操作数。回答正确方可进入秋日市集。

由于答案可能很大，请将每个最小操作数对 1,000,000,007 取余。

示例 1：

输入：nums = [3,4,5,1,6,7]

输出：[0,0,0,5,6,7]

解释：
i = 0，[3] 无需操作
i = 1，[3,4] 无需操作；
i = 2，[3,4,5] 无需操作；
i = 3，将 [3,4,5,1] 操作成 [3,4,5,6], 最少 5 次操作；
i = 4，将 [3,4,5,1,6] 操作成 [3,4,5,6,7], 最少 6 次操作；
i = 5，将 [3,4,5,1,6,7] 操作成 [3,4,5,6,7,8]，最少 7 次操作；
返回 [0,0,0,5,6,7]。

示例 2：

输入：nums = [1,2,3,4,5]

输出：[0,0,0,0,0]

解释：对于任意计数器编号 i 都无需操作。

示例 3：

输入：nums = [1,1,1,2,3,4]

输出：[0,1,2,3,3,3]

解释：
i = 0，无需操作；
i = 1，将 [1,1] 操作成 [1,2] 或 [0,1] 最少 1 次操作；
i = 2，将 [1,1,1] 操作成 [1,2,3] 或 [0,1,2]，最少 2 次操作；
i = 3，将 [1,1,1,2] 操作成 [1,2,3,4] 或 [0,1,2,3]，最少 3 次操作；
i = 4，将 [1,1,1,2,3] 操作成 [-1,0,1,2,3]，最少 3 次操作；
i = 5，将 [1,1,1,2,3,4] 操作成 [-1,0,1,2,3,4]，最少 3 次操作；
返回 [0,1,2,3,3,3]。

提示：

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^3
* */
import _ from "lodash";

function numsGame(nums: number[]): number[] {
  /**
   * todo
   * 获取中位数 还不够
   * 当 nums.length 为偶数时 , 还必须分清使用哪个数作为中位数
   * */
  const median = findKthLargest(nums.slice(), Math.ceil(nums.length / 2));
  console.log("median", median);
  const result: number[] = [];
  const first = median - Math.floor((nums.length - 1) / 2);
  console.log(first);

  nums.reduce((pre, cur, i) => {
    const dif = first + i - cur;
    const total = dif + pre;
    const mod = total === 0 ? 0 : total % 1_000_000_007;

    result.push(mod);
    return mod;
  }, 0);

  return result;
}

/**
 * 用于获取 中位数
 * 快速选择法(Hoare 选择法, 霍尔选择法) 获取第K大的数
 * */
function findKthLargest(nums: number[], k: number) {
  const size = nums.length;
  return quickSelect(0, size - 1, size - k);

  function partition(left: number, right: number, pivot_index: number) {
    let pivot = nums[pivot_index];
    // 现将 枢轴 换到末尾 方便 操作
    [nums[pivot_index], nums[right]] = [nums[right], nums[pivot_index]];
    // 存储 枢轴新的位置
    let store_index = left;

    // 枢轴的值 放到左边
    for (let i = left; i <= right; i++) {
      if (nums[i] < pivot) {
        [nums[store_index], nums[i]] = [nums[i], nums[store_index]];
        store_index++;
      }
    }
    // 将在最末尾的枢轴的值 放到新的位置
    [nums[store_index], nums[right]] = [nums[right], nums[store_index]];
    return store_index;
  }

  function quickSelect(
    left: number,
    right: number,
    k_smallest: number
  ): number {
    // 如果 左右为 同一个值 那么说明 只有一个值 不需要再选择了
    if (left === right) {
      return nums[left];
    }
    // 随机 用一个值作为 index 作为枢轴 并且返回 枢轴的 index
    let pivot_index = partition(left, right, _.random(left, right - 1)); // lodash 的 random 是含头 含尾的

    if (k_smallest === pivot_index) return nums[k_smallest];
    // 如果 枢轴的 index 小于 k_smallest 说明 值 还在有枢轴的右侧
    else if (k_smallest < pivot_index)
      return quickSelect(left, pivot_index - 1, k_smallest);
    // 如果 枢轴的 index 大于 k_smallest 说明 值 还在有枢轴的左侧
    return quickSelect(pivot_index + 1, right, k_smallest);
  }
}

import assert from "assert";

assert.deepStrictEqual(numsGame([3, 4, 5, 1, 6, 7]), [0, 0, 0, 5, 6, 7]);
assert.deepStrictEqual(numsGame([1, 2, 3, 4, 5]), [0, 0, 0, 0, 0]);
assert.deepStrictEqual(numsGame([1, 2, 3, 4, 5, 6]), [0, 0, 0, 0, 0, 0]);
// assert.deepStrictEqual(numsGame([1, 1, 1, 2, 3, 4]), [0, 1, 2, 3, 3, 3]);
