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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUu5pCc57Si5o+S5YWl5L2N572uLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNS7mkJzntKLmj5LlhaXkvY3nva4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDRzs7Ozs7QUFFSDs7OztHQUlHO0FBQ0g7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxJQUFjLEVBQUUsTUFBYztJQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFDbkIsT0FBTyxDQUFDLENBQUM7U0FDWjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZCLENBQUM7QUFFRDs7S0FFSztBQUNMLFNBQVMsU0FBUyxDQUFDLElBQWMsRUFBRSxNQUFjO0lBQzdDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxJQUFJLEtBQUssRUFBRTtRQUNsQixPQUFPO1FBQ1AsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQzlCLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQ3JDLEtBQUssR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDSCxPQUFPLGFBQWEsQ0FBQztTQUN4QjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDMUIsQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD0zNSBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMzVdIOaQnOe0ouaPkuWFpeS9jee9rlxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NlYXJjaC1pbnNlcnQtcG9zaXRpb24vZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoNDIuODclKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDMxLjZLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogNzMuN0tcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnWzEsMyw1LDZdXFxuNSdcbiAqXG4gKiDnu5nlrprkuIDkuKrmjpLluo/mlbDnu4TlkozkuIDkuKrnm67moIflgLzvvIzlnKjmlbDnu4TkuK3mib7liLDnm67moIflgLzvvIzlubbov5Tlm57lhbbntKLlvJXjgILlpoLmnpznm67moIflgLzkuI3lrZjlnKjkuo7mlbDnu4TkuK3vvIzov5Tlm57lroPlsIbkvJrooqvmjInpobrluo/mj5LlhaXnmoTkvY3nva7jgIJcbiAqXG4gKiDkvaDlj6/ku6XlgYforr7mlbDnu4TkuK3ml6Dph43lpI3lhYPntKDjgIJcbiAqXG4gKiDnpLrkvosgMTpcbiAqXG4gKiDovpPlhaU6IFsxLDMsNSw2XSwgNVxuICog6L6T5Ye6OiAyXG4gKlxuICpcbiAqIOekuuS+i8KgMjpcbiAqXG4gKiDovpPlhaU6IFsxLDMsNSw2XSwgMlxuICog6L6T5Ye6OiAxXG4gKlxuICpcbiAqIOekuuS+iyAzOlxuICpcbiAqIOi+k+WFpTogWzEsMyw1LDZdLCA3XG4gKiDovpPlh7o6IDRcbiAqXG4gKlxuICog56S65L6LIDQ6XG4gKlxuICog6L6T5YWlOiBbMSwzLDUsNl0sIDBcbiAqIOi+k+WHujogMFxuICpcbiAqXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbi8qKlxuICog6aG65bqP5p+l5om+XG4gKiAqL1xuZnVuY3Rpb24gc29sdXRpb24xKG51bXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobnVtc1tpXSA+PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bXMubGVuZ3RoO1xufVxuXG4vKipcbiAqIOS6jOWIhuafpeaJvlxuICogKi9cbmZ1bmN0aW9uIHNvbHV0aW9uMihudW1zOiBudW1iZXJbXSwgdGFyZ2V0OiBudW1iZXIpIHtcbiAgICBsZXQgbGVmdCA9IDA7XG4gICAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0KSB7XG4gICAgICAgIC8vIOWIhuaIkDLku71cbiAgICAgICAgY29uc3QgY3JpdGljYWxQb2ludCA9IH5+KChsZWZ0ICsgcmlnaHQpIC8gMik7XG4gICAgICAgIGlmIChudW1zW2NyaXRpY2FsUG9pbnRdIDwgdGFyZ2V0KSB7XG4gICAgICAgICAgICBsZWZ0ID0gY3JpdGljYWxQb2ludCArIDE7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtc1tjcml0aWNhbFBvaW50XSA+IHRhcmdldCkge1xuICAgICAgICAgICAgcmlnaHQgPSBjcml0aWNhbFBvaW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjcml0aWNhbFBvaW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnQ7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIHNvbHV0aW9uMihbMSwgMywgNSwgNl0sIDIpLFxuICAgIDEsXG4pO1xuXG4iXX0=