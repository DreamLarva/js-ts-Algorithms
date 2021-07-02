"use strict";
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (42.87%)
 * Total Accepted:    31.6K
 * Total Submissions: 73.7K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 *
 * 示例 4:
 *
 * 输入: [1,3,5,6], 0
 * 输出: 0
 *
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * 顺序查找
 * */
function solution1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}
/**
 * 二分查找
 * */
function solution2(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        // 分成2份
        const criticalPoint = ~~((left + right) / 2);
        if (nums[criticalPoint] < target) {
            left = criticalPoint + 1;
        }
        else if (nums[criticalPoint] > target) {
            right = criticalPoint - 1;
        }
        else {
            return criticalPoint;
        }
    }
    return left;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(solution2([1, 3, 5, 6], 2), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUu5pCc57Si5o+S5YWl5L2N572uLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNS7mkJzntKLmj5LlhaXkvY3nva4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDRzs7Ozs7QUFFSDs7OztHQUlHO0FBQ0g7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxJQUFjLEVBQUUsTUFBYztJQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFDckIsT0FBTyxDQUFDLENBQUM7U0FDVjtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3JCLENBQUM7QUFFRDs7S0FFSztBQUNMLFNBQVMsU0FBUyxDQUFDLElBQWMsRUFBRSxNQUFjO0lBQy9DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxJQUFJLEtBQUssRUFBRTtRQUNwQixPQUFPO1FBQ1AsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQ2hDLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQ3ZDLEtBQUssR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxPQUFPLGFBQWEsQ0FBQztTQUN0QjtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9MzUgbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzM1XSDmkJzntKLmj5LlhaXkvY3nva5cbiAqXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zZWFyY2gtaW5zZXJ0LXBvc2l0aW9uL2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDQyLjg3JSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICAzMS42S1xuICogVG90YWwgU3VibWlzc2lvbnM6IDczLjdLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1sxLDMsNSw2XVxcbjUnXG4gKlxuICog57uZ5a6a5LiA5Liq5o6S5bqP5pWw57uE5ZKM5LiA5Liq55uu5qCH5YC877yM5Zyo5pWw57uE5Lit5om+5Yiw55uu5qCH5YC877yM5bm26L+U5Zue5YW257Si5byV44CC5aaC5p6c55uu5qCH5YC85LiN5a2Y5Zyo5LqO5pWw57uE5Lit77yM6L+U5Zue5a6D5bCG5Lya6KKr5oyJ6aG65bqP5o+S5YWl55qE5L2N572u44CCXG4gKlxuICog5L2g5Y+v5Lul5YGH6K6+5pWw57uE5Lit5peg6YeN5aSN5YWD57Sg44CCXG4gKlxuICog56S65L6LIDE6XG4gKlxuICog6L6T5YWlOiBbMSwzLDUsNl0sIDVcbiAqIOi+k+WHujogMlxuICpcbiAqXG4gKiDnpLrkvosgMjpcbiAqXG4gKiDovpPlhaU6IFsxLDMsNSw2XSwgMlxuICog6L6T5Ye6OiAxXG4gKlxuICpcbiAqIOekuuS+iyAzOlxuICpcbiAqIOi+k+WFpTogWzEsMyw1LDZdLCA3XG4gKiDovpPlh7o6IDRcbiAqXG4gKlxuICog56S65L6LIDQ6XG4gKlxuICog6L6T5YWlOiBbMSwzLDUsNl0sIDBcbiAqIOi+k+WHujogMFxuICpcbiAqXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbi8qKlxuICog6aG65bqP5p+l5om+XG4gKiAqL1xuZnVuY3Rpb24gc29sdXRpb24xKG51bXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobnVtc1tpXSA+PSB0YXJnZXQpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1zLmxlbmd0aDtcbn1cblxuLyoqXG4gKiDkuozliIbmn6Xmib5cbiAqICovXG5mdW5jdGlvbiBzb2x1dGlvbjIobnVtczogbnVtYmVyW10sIHRhcmdldDogbnVtYmVyKSB7XG4gIGxldCBsZWZ0ID0gMDtcbiAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xuICB3aGlsZSAobGVmdCA8PSByaWdodCkge1xuICAgIC8vIOWIhuaIkDLku71cbiAgICBjb25zdCBjcml0aWNhbFBvaW50ID0gfn4oKGxlZnQgKyByaWdodCkgLyAyKTtcbiAgICBpZiAobnVtc1tjcml0aWNhbFBvaW50XSA8IHRhcmdldCkge1xuICAgICAgbGVmdCA9IGNyaXRpY2FsUG9pbnQgKyAxO1xuICAgIH0gZWxzZSBpZiAobnVtc1tjcml0aWNhbFBvaW50XSA+IHRhcmdldCkge1xuICAgICAgcmlnaHQgPSBjcml0aWNhbFBvaW50IC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNyaXRpY2FsUG9pbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlZnQ7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoc29sdXRpb24yKFsxLCAzLCA1LCA2XSwgMiksIDEpO1xuIl19