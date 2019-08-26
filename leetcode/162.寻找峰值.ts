/*
峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞。

示例 1:

输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
示例 2:

输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
说明:

你的解法应该是 O(logN) 时间复杂度的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-peak-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums: number[]) {
    /**
     * 根据 时间复杂度 只能二分查找法
     * */
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = (right + left) >> 1;
        /**
         * 注意这里的技巧
         * 避免循环无限进行
         * 如果是ceil 那么 循环就会无限进行 因为 如果 只剩2个值
         * 那么 使用ceil 使用的 是右边的值 而如果进入第一个分支就会 left 和 right 不变
         * 所以 有 right = mid 这句的存在 那么 如果只有两个值的时候 就不能是右值 反之同理
         * */
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};


import assert from "assert";

assert.strictEqual(
    findPeakElement([1, 2, 3, 1]),
    2,
);

assert.ok(
    [1, 5].includes(findPeakElement([1, 2, 1, 3, 5, 6, 4])),
);
