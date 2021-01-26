/*
假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。

示例 1:

输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
输出: ["Shogun"]
解释: 他们唯一共同喜爱的餐厅是“Shogun”。
示例 2:

输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
输出: ["Shogun"]
解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
提示:
    1. 两个列表的长度范围都在 [1, 1000]内。
    2. 两个列表中的字符串的长度将在[1，30]的范围内。
    3. 下标从0开始，到列表的长度减1。
    4. 两个列表都没有重复的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1: string[], list2: string[]): string[] {
  // 哈希表 解决
  // 其实 判断数组大小好像没毛线 区别 只是 让用的哈希表的内存小一点 时间复杂度还是 O(n + m)的样子
  // 现将 较小的一个数组 放入哈希表
  if (list1.length > list2.length) return findRestaurant(list2, list1);
  const map: { [key: string]: number } = {};
  for (let i = 0; i < list1.length; i++) {
    map[list1[i]] = i;
  }

  let max = Infinity;
  let result: string[] = [];
  // 扫描较大的数组
  // 老夫写的更屌 添加这个 判断之后 i <= max 可以排除一部分不可能的情况
  for (let i = 0; i < list2.length && i <= max; i++) {
    const str = list2[i];
    if (map[str] != null) {
      if (map[str] + i < max) {
        max = map[str] + i;
        result = [str];
      } else if (map[str] + i === max) {
        result.push(str);
      }
    }
  }

  return result;
};

import assert from "assert";

assert.deepStrictEqual(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  ),
  ["Shogun"]
);
assert.deepStrictEqual(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  ),
  ["Shogun"]
);
assert.deepStrictEqual(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King", "Tapioca Express", "Shogun"]
  ),
  ["KFC", "Burger King", "Tapioca Express", "Shogun"]
);
