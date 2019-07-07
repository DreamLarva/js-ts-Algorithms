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
 * 示例 2:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUu5pCc57Si5o+S5YWl5L2N572uLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNS7mkJzntKLmj5LlhaXkvY3nva4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDRzs7Ozs7QUFFSDs7OztHQUlHO0FBQ0g7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxJQUFjLEVBQUUsTUFBYztJQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFDbkIsT0FBTyxDQUFDLENBQUM7U0FDWjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZCLENBQUM7QUFFRDs7S0FFSztBQUNMLFNBQVMsU0FBUyxDQUFDLElBQWMsRUFBRSxNQUFjO0lBQzdDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxJQUFJLEtBQUssRUFBRTtRQUNsQixPQUFPO1FBQ1AsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQzlCLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQ3JDLEtBQUssR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDSCxPQUFPLGFBQWEsQ0FBQztTQUN4QjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDMUIsQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTM1IGxhbmc9amF2YXNjcmlwdFxyXG4gKlxyXG4gKiBbMzVdIOaQnOe0ouaPkuWFpeS9jee9rlxyXG4gKlxyXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zZWFyY2gtaW5zZXJ0LXBvc2l0aW9uL2Rlc2NyaXB0aW9uL1xyXG4gKlxyXG4gKiBhbGdvcml0aG1zXHJcbiAqIEVhc3kgKDQyLjg3JSlcclxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDMxLjZLXHJcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiA3My43S1xyXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1sxLDMsNSw2XVxcbjUnXHJcbiAqXHJcbiAqIOe7meWumuS4gOS4quaOkuW6j+aVsOe7hOWSjOS4gOS4quebruagh+WAvO+8jOWcqOaVsOe7hOS4reaJvuWIsOebruagh+WAvO+8jOW5tui/lOWbnuWFtue0ouW8leOAguWmguaenOebruagh+WAvOS4jeWtmOWcqOS6juaVsOe7hOS4re+8jOi/lOWbnuWug+WwhuS8muiiq+aMiemhuuW6j+aPkuWFpeeahOS9jee9ruOAglxyXG4gKlxyXG4gKiDkvaDlj6/ku6XlgYforr7mlbDnu4TkuK3ml6Dph43lpI3lhYPntKDjgIJcclxuICpcclxuICog56S65L6LIDE6XHJcbiAqXHJcbiAqIOi+k+WFpTogWzEsMyw1LDZdLCA1XHJcbiAqIOi+k+WHujogMlxyXG4gKlxyXG4gKlxyXG4gKiDnpLrkvovCoDI6XHJcbiAqXHJcbiAqIOi+k+WFpTogWzEsMyw1LDZdLCAyXHJcbiAqIOi+k+WHujogMVxyXG4gKlxyXG4gKlxyXG4gKiDnpLrkvosgMzpcclxuICpcclxuICog6L6T5YWlOiBbMSwzLDUsNl0sIDdcclxuICog6L6T5Ye6OiA0XHJcbiAqXHJcbiAqXHJcbiAqIOekuuS+iyA0OlxyXG4gKlxyXG4gKiDovpPlhaU6IFsxLDMsNSw2XSwgMFxyXG4gKiDovpPlh7o6IDBcclxuICpcclxuICpcclxuICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbi8qKlxyXG4gKiDpobrluo/mn6Xmib5cclxuICogKi9cclxuZnVuY3Rpb24gc29sdXRpb24xKG51bXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG51bXNbaV0gPj0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtcy5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkuozliIbmn6Xmib5cclxuICogKi9cclxuZnVuY3Rpb24gc29sdXRpb24yKG51bXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xyXG4gICAgbGV0IGxlZnQgPSAwO1xyXG4gICAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQpIHtcclxuICAgICAgICAvLyDliIbmiJAy5Lu9XHJcbiAgICAgICAgY29uc3QgY3JpdGljYWxQb2ludCA9IH5+KChsZWZ0ICsgcmlnaHQpIC8gMik7XHJcbiAgICAgICAgaWYgKG51bXNbY3JpdGljYWxQb2ludF0gPCB0YXJnZXQpIHtcclxuICAgICAgICAgICAgbGVmdCA9IGNyaXRpY2FsUG9pbnQgKyAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtc1tjcml0aWNhbFBvaW50XSA+IHRhcmdldCkge1xyXG4gICAgICAgICAgICByaWdodCA9IGNyaXRpY2FsUG9pbnQgLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcml0aWNhbFBvaW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGVmdDtcclxufVxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgc29sdXRpb24yKFsxLCAzLCA1LCA2XSwgMiksXHJcbiAgICAxLFxyXG4pO1xyXG5cclxuIl19