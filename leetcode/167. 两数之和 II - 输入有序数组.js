/*
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
* */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    /**
     * 由于是 排序后的数据
     * 使用 首尾指针
     * 如果 目标值 左右指针的值相加 > 目标值 右指针左移
     * 如果 目标值 左右指针的值相加 < 目标值 左指针右移
     * 两指针相会 不能
     * */
    let left = 0;
    let right = numbers.length - 1;
    while (numbers[left] + numbers[right] !== target) {
        if(numbers[left] + numbers[right] > target){
            right --;
        }else{
            left++;
        }
    }
    return [left + 1, right + 1]
};
