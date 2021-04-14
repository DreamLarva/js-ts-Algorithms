/*
179. 最大数
给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。



示例 1：

输入：nums = [10,2]
输出："210"
示例 2：

输入：nums = [3,30,34,5,9]
输出："9534330"
示例 3：

输入：nums = [1]
输出："1"
示例 4：

输入：nums = [10]
输出："10"


提示：

1 <= nums.length <= 100
0 <= nums[i] <= 109
* */

function largestNumber(nums: number[]): string {
  return nums
    .map(String)
    .sort((a, b) => (parseInt(a + b) > parseInt(b + a) ? -1 : 1))
    .reduce((previousValue, currentValue) => previousValue + currentValue)
    .replace(/^0+/, "0");
}

import assert from "assert";

assert.strictEqual(largestNumber([10, 2]), "210");
assert.strictEqual(largestNumber([3, 30, 34, 5, 9]), "9534330");
assert.strictEqual(largestNumber([1]), "1");
assert.strictEqual(largestNumber([10]), "10");
assert.strictEqual(largestNumber([34323, 3432]), "343234323");
assert.strictEqual(largestNumber([0,0]), "0");
