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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMu5pyA5aSn5a2Q5bqP5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81My7mnIDlpKflrZDluo/lkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRzs7QUFFSDs7O0dBR0c7QUFFSDs7OztLQUlLO0FBQ0wsU0FBUyxRQUFRLENBQUMsSUFBYztJQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD01MyBsYW5nPWphdmFzY3JpcHRcclxuICpcclxuICogWzUzXSDmnIDlpKflrZDluo/lkoxcclxuICpcclxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWF4aW11bS1zdWJhcnJheS9kZXNjcmlwdGlvbi9cclxuICpcclxuICogYWxnb3JpdGhtc1xyXG4gKiBFYXN5ICg0My4xMCUpXHJcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICA0MS4zS1xyXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogOTUuOUtcclxuICogVGVzdGNhc2UgRXhhbXBsZTogICdbLTIsMSwtMyw0LC0xLDIsMSwtNSw0XSdcclxuICpcclxuICog57uZ5a6a5LiA5Liq5pW05pWw5pWw57uEIG51bXPCoO+8jOaJvuWIsOS4gOS4quWFt+acieacgOWkp+WSjOeahOi/nue7reWtkOaVsOe7hO+8iOWtkOaVsOe7hOacgOWwkeWMheWQq+S4gOS4quWFg+e0oO+8ie+8jOi/lOWbnuWFtuacgOWkp+WSjOOAglxyXG4gKlxyXG4gKiDnpLrkvos6XHJcbiAqXHJcbiAqIOi+k+WFpTogWy0yLDEsLTMsNCwtMSwyLDEsLTUsNF0sXHJcbiAqIOi+k+WHujogNlxyXG4gKiDop6Pph4o6wqDov57nu63lrZDmlbDnu4TCoFs0LC0xLDIsMV0g55qE5ZKM5pyA5aSn77yM5Li6wqA244CCXHJcbiAqXHJcbiAqXHJcbiAqIOi/m+mYtjpcclxuICpcclxuICog5aaC5p6c5L2g5bey57uP5a6e546w5aSN5p2C5bqm5Li6IE8obikg55qE6Kej5rOV77yM5bCd6K+V5L2/55So5pu05Li657K+5aaZ55qE5YiG5rK75rOV5rGC6Kej44CCXHJcbiAqXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiDotKrlv4Pnrpfms5VcclxuICog5LuO5L2N572uMeW8gOWniyDmr4/kuKrkvY3nva7pg73kuLog5b2T5YmN5L2N572u5Y+v5Lul5Y675Y+W5Yiw55qE5pyA5aSn5YC8XHJcbiAqIOeEtuWQjm7kvY3nva4g5Lya5oyJ54WnIG4tMSDkvY3nva4g5YaN5Yik5patIOWmguaenG4tMSDkuLrotJ9cclxuICogKi9cclxuZnVuY3Rpb24gc29sdXRpb24obnVtczogbnVtYmVyW10pIHtcclxuICAgIGNvbnN0IGxlbiA9IG51bXMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIG51bXNbaV0gPSBudW1zW2ldICsgTWF0aC5tYXgobnVtc1tpIC0gMV0sIDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLm51bXMpO1xyXG59XHJcblxyXG4vKipcclxuICogVE9ETyDliIbmsrvms5VcclxuICogKi9cclxuXHJcblxyXG5leHBvcnQge31cclxuIl19