/*
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    /**
     * 按位 或 (^) 同样的数字操作两次 就不会有任何影响 以此过滤出现偶数次数的 数字
     * */
    let result = 0;
    for (num of nums) {
        result ^= num;
    }
    return  result
};
