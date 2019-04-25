/*
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

示例 1:

输入: nums = [1,2,3,1], k = 3
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1
输出: true
示例 3:

输入: nums = [1,2,3,1,2,3], k = 2
输出: false
* */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const cache = {};
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (cache[cur] != null) {
            if (i - cache[cur] <= k) return true;
        }
        cache[cur] = i;
    }
    return false
};

const assert = require("assert");
assert.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
assert.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 2), false);
assert.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 4), true);
