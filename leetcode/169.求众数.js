/*
给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return solution2(nums)
};

/**
 * 究极暴力算法
 * */
function solution1(nums) {
    const halfLen = Math.ceil(nums.length / 2);
    while (nums.length >= halfLen) {
        const filterNode = nums[0];
        const len = nums.length;
        nums = nums.filter(v => v !== filterNode);
        if (len - nums.length >= halfLen) return filterNode;
    }
}
/**
 * 摩尔投票法
 * 众数 : 出现次数 大于半数 的数
 * 每两个不同的数 则抵消这两个数
 * 剩下的那个就 就是众数
 * 理解:
 * 两种极端情况
 *      1.如果所有非众数的数 都两两抵消 则只剩众数
 *      2.如果每个众数都与 非众数两两抵消 则只剩众数 因为众数 > 半数
 * */
function solution2(nums){
    let tmp = [];
    let index = 0;
    while (index < nums.length){
        const current = nums[index];
        if(tmp.length === 0){
            tmp.push(current)
        }else{
            const first = tmp[0];
            if (first === current) {
                tmp.push(current)
            } else {
                tmp.pop();
            }
        }
        index++
    }
    return tmp[0]
}
function solution3(nums){
    let result = null,count = 0;
    let index = 0;
    while (index < nums.length){
        const current = nums[index];
        if(current === result){
            count++
        }else if(count === 0){
            result = current;
            count = 1;
        }else{
            count--
        }
        index++;
    }
    return result
}



console.log(solution3([6, 5, 5]));
