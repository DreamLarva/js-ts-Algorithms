/*
打乱一个没有重复元素的数组。

示例:

// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
* */
/**
 * Fisher–Yates shuffle 随机洗牌
 * 需要随机置乱的n个元素的数组a
 for i 从n-1到1

 j <—随机整数(0 =< j <= i)

 交换a[i]和a[j]

 end
 * */
class Solution {
  origin: number[];
  shuffleData: number[];

  /**
   * @param {number[]} nums
   */
  constructor(nums: number[]) {
    this.origin = nums;
    this.shuffleData = [...nums];
  }

  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}
   */
  reset() {
    return this.origin;
  }

  /**
   * Returns a random shuffling of the array.
   * @return {number[]}
   */
  shuffle() {
    const array = [...this.origin];
    let index = -1;
    const length = array.length;

    while (++index < length) {
      const rand = Math.floor(Math.random() * (length - index) + index),
        value = array[rand];

      array[rand] = array[index];
      array[index] = value;
    }
    array.length = length;
    return array;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
