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
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMu5pyA5aSn5a2Q5bqP5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81My7mnIDlpKflrZDluo/lkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRzs7QUFFSDs7O0dBR0c7QUFFSDs7OztLQUlLO0FBQ0wsU0FBUyxRQUFRLENBQUMsSUFBYztJQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9NTMgbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzUzXSDmnIDlpKflrZDluo/lkoxcbiAqXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9tYXhpbXVtLXN1YmFycmF5L2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDQzLjEwJSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICA0MS4zS1xuICogVG90YWwgU3VibWlzc2lvbnM6IDk1LjlLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1stMiwxLC0zLDQsLTEsMiwxLC01LDRdJ1xuICpcbiAqIOe7meWumuS4gOS4quaVtOaVsOaVsOe7hCBudW1zIO+8jOaJvuWIsOS4gOS4quWFt+acieacgOWkp+WSjOeahOi/nue7reWtkOaVsOe7hO+8iOWtkOaVsOe7hOacgOWwkeWMheWQq+S4gOS4quWFg+e0oO+8ie+8jOi/lOWbnuWFtuacgOWkp+WSjOOAglxuICpcbiAqIOekuuS+izpcbiAqXG4gKiDovpPlhaU6IFstMiwxLC0zLDQsLTEsMiwxLC01LDRdLFxuICog6L6T5Ye6OiA2XG4gKiDop6Pph4o6IOi/nue7reWtkOaVsOe7hCBbNCwtMSwyLDFdIOeahOWSjOacgOWkp++8jOS4uiA244CCXG4gKlxuICpcbiAqIOi/m+mYtjpcbiAqXG4gKiDlpoLmnpzkvaDlt7Lnu4/lrp7njrDlpI3mnYLluqbkuLogTyhuKSDnmoTop6Pms5XvvIzlsJ3or5Xkvb/nlKjmm7TkuLrnsr7lppnnmoTliIbmsrvms5XmsYLop6PjgIJcbiAqXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblxuLyoqXG4gKiDotKrlv4Pnrpfms5VcbiAqIOS7juS9jee9rjHlvIDlp4sg5q+P5Liq5L2N572u6YO95Li6IOW9k+WJjeS9jee9ruWPr+S7peWOu+WPluWIsOeahOacgOWkp+WAvFxuICog54S25ZCObuS9jee9riDkvJrmjInnhacgbi0xIOS9jee9riDlho3liKTmlq0g5aaC5p6cbi0xIOS4uui0n1xuICogKi9cbmZ1bmN0aW9uIHNvbHV0aW9uKG51bXM6IG51bWJlcltdKSB7XG4gIGNvbnN0IGxlbiA9IG51bXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbnVtc1tpXSA9IG51bXNbaV0gKyBNYXRoLm1heChudW1zW2kgLSAxXSwgMCk7XG4gIH1cbiAgcmV0dXJuIE1hdGgubWF4KC4uLm51bXMpO1xufVxuXG4vKipcbiAqIFRPRE8g5YiG5rK75rOVXG4gKiAqL1xuXG5leHBvcnQge307XG4iXX0=
