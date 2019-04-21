/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (37.71%)
 * Total Accepted:    40.4K
 * Total Submissions: 107.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits:number[]) {
    let isCarryOver = false;
    if(digits[digits.length - 1] === 9){
        isCarryOver = true;
        digits[digits.length - 1] = 0;
    }else{
        digits[digits.length - 1]++;
        return  digits
    }

    for (let i = digits.length - 2; i >= 0; i--) {
        if(digits[i] === 9 && isCarryOver){
            isCarryOver = true;
            digits[i] = 0;
        }else if(isCarryOver){
            digits[i]++;
            isCarryOver = false;
            break;
        }else{
            break;
        }
    }

    if(isCarryOver){
        digits.unshift(1)
    }

    return digits
};

