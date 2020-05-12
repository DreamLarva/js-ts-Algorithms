/*
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定 nums = [1,1,1,2,2,3],

函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,1,2,3,3],

函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。

你不需要考虑数组中超出新长度后面的元素。
说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums: number[]) {
  if (nums.length <= 1) return nums.length;
  let index = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const last = nums[i - 1];
    if (current === last) {
      count++;
      if (count <= 2) {
        nums[index++] = current;
      }
    } else {
      count = 1;
      nums[index++] = current;
    }
  }
  return index;
};

import assert from "assert";

{
  const sample = [1, 1, 1, 2, 2, 3];
  sample.length = removeDuplicates(sample);
  assert.deepStrictEqual(sample, [1, 1, 2, 2, 3]);
}

{
  const sample = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  sample.length = removeDuplicates(sample);
  assert.deepStrictEqual(sample, [0, 0, 1, 1, 2, 3, 3]);
}

{
  const sample: number[] = [];
  sample.length = removeDuplicates(sample);
  assert.deepStrictEqual(sample, []);
}

{
  const sample: number[] = [1];
  sample.length = removeDuplicates(sample);
  assert.deepStrictEqual(sample, [1]);
}
