/**
 * Fisher–Yates shuffle 随机洗牌
 * 需要随机置乱的n个元素的数组a
 for i 从n-1到1

 j <—随机整数(0 =< j <= i)

 交换a[i]和a[j]

 end
 * */
declare class Solution {
    origin: number[];
    shuffleData: number[];
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]);
    /**
     * Resets the array to its original configuration and return it.
     * @return {number[]}
     */
    reset(): number[];
    /**
     * Returns a random shuffling of the array.
     * @return {number[]}
     */
    shuffle(): number[];
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
