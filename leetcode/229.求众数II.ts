/*
给定一个大小为n的整数数组，找出其中所有出现超过⌊ n/3 ⌋次的元素。


示例1：

输入：[3,2,3]
输出：[3]
示例 2：

输入：nums = [1]
输出：[1]
示例 3：

输入：[1,1,1,3,3,2,2,2]
输出：[1,2]


提示：

1 <= nums.length <= 5 * 10^4
-10^9 <= nums[i] <= 10^9


进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
function majorityElement(nums: number[]): number[] {
  /**
   * 直接哈希表解决
   * */
  const map: { [key: number]: number } = {};
  for (const num of nums) {
    map[num] = map[num] ?? 0;
    map[num] += 1;
  }

  const result: number[] = [];
  const limit = nums.length / 3;
  for (const [key, value] of Object.entries(map)) {
    if (Number(value) > limit) result.push(Number(key));
  }
  return result;
}

function majorityElement2(nums: number[]) {
  /**
   * 摩尔头投票法
   * 只有三个元素不同 就抵消3个元素
   * */
  let element1 = 0;
  let element2 = 0;
  let vote1 = 0;
  let vote2 = 0;
  for (const num of nums) {
    if (num === element1 && vote1 > 0) {
      vote1++;
    } else if (num === element2 && vote2 > 0) {
      vote2++;
    } else if (vote1 === 0) {
      element1 = num;
      vote1++;
    } else if (vote2 === 0) {
      element2 = num;
      vote2++;
    } else {
      vote2--;
      vote1--;
    }
  }

  // 抵消完后
  // 按照题意 解的数量可以是 1 或者 2
  let cnt1 = 0;
  let cnt2 = 0;
  for (const num of nums) {
    if (vote1 > 0 && num === element1) {
      cnt1++;
    }
    if (vote2 > 0 && num === element2) {
      cnt2++;
    }
  }

  // element1 和 element2 中可能存在非解的
  // 需要再查以便 element1 和 element2 在 nums 中的次数
  // 同样 循环两次, 代码却复杂的很多
  const ans:number[] = [];
  if (vote1 > 0 && cnt1 > Math.floor(nums.length / 3)) {
    ans.push(element1);
  }
  if (vote2 > 0 && cnt2 > Math.floor(nums.length / 3)) {
    ans.push(element2);
  }

  return ans;
}

import assert from "assert";

assert.deepStrictEqual(majorityElement([3, 2, 3]), [3]);
assert.deepStrictEqual(majorityElement([1]), [1]);
assert.deepStrictEqual(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]), [1, 2]);
