"use strict";
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.10%)
 * Total Accepted:    41.3K
 * Total Submissions: 95.9K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 贪心算法
 * 从位置1开始 每个位置都为 当前位置可以去取到的最大值
 * 然后n位置 会按照 n-1 位置 再判断 如果n-1 为负
 * */
function solution(nums) {
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    nums[i] = nums[i] + Math.max(nums[i - 1], 0);
  }
  return Math.max(...nums);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMu5pyA5aSn5a2Q5bqP5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81My7mnIDlpKflrZDluo/lkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRzs7QUFFSDs7O0dBR0c7QUFFSDs7OztLQUlLO0FBQ0wsU0FBUyxRQUFRLENBQUMsSUFBYztJQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9NTMgbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzUzXSDmnIDlpKflrZDluo/lkoxcbiAqXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9tYXhpbXVtLXN1YmFycmF5L2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDQzLjEwJSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICA0MS4zS1xuICogVG90YWwgU3VibWlzc2lvbnM6IDk1LjlLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1stMiwxLC0zLDQsLTEsMiwxLC01LDRdJ1xuICpcbiAqIOe7meWumuS4gOS4quaVtOaVsOaVsOe7hCBudW1zwqDvvIzmib7liLDkuIDkuKrlhbfmnInmnIDlpKflkoznmoTov57nu63lrZDmlbDnu4TvvIjlrZDmlbDnu4TmnIDlsJHljIXlkKvkuIDkuKrlhYPntKDvvInvvIzov5Tlm57lhbbmnIDlpKflkozjgIJcbiAqXG4gKiDnpLrkvos6XG4gKlxuICog6L6T5YWlOiBbLTIsMSwtMyw0LC0xLDIsMSwtNSw0XSxcbiAqIOi+k+WHujogNlxuICog6Kej6YeKOsKg6L+e57ut5a2Q5pWw57uEwqBbNCwtMSwyLDFdIOeahOWSjOacgOWkp++8jOS4usKgNuOAglxuICpcbiAqXG4gKiDov5vpmLY6XG4gKlxuICog5aaC5p6c5L2g5bey57uP5a6e546w5aSN5p2C5bqm5Li6IE8obikg55qE6Kej5rOV77yM5bCd6K+V5L2/55So5pu05Li657K+5aaZ55qE5YiG5rK75rOV5rGC6Kej44CCXG4gKlxuICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cbi8qKlxuICog6LSq5b+D566X5rOVXG4gKiDku47kvY3nva4x5byA5aeLIOavj+S4quS9jee9rumDveS4uiDlvZPliY3kvY3nva7lj6/ku6Xljrvlj5bliLDnmoTmnIDlpKflgLxcbiAqIOeEtuWQjm7kvY3nva4g5Lya5oyJ54WnIG4tMSDkvY3nva4g5YaN5Yik5patIOWmguaenG4tMSDkuLrotJ9cbiAqICovXG5mdW5jdGlvbiBzb2x1dGlvbihudW1zOiBudW1iZXJbXSkge1xuICAgIGNvbnN0IGxlbiA9IG51bXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbnVtc1tpXSA9IG51bXNbaV0gKyBNYXRoLm1heChudW1zW2kgLSAxXSwgMCk7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLm1heCguLi5udW1zKTtcbn1cblxuLyoqXG4gKiBUT0RPIOWIhuayu+azlVxuICogKi9cblxuXG5leHBvcnQge31cbiJdfQ==
