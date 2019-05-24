"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
说明:

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const result = [];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    for (const element of set1) {
        if (set2.has(element)) {
            result.push(element);
        }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(intersection([1, 2, 2, 1], [2, 2]), [2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ5LuS4pOS4quaVsOe7hOeahOS6pOmbhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ5LuS4pOS4quaVsOe7hOeahOS6pOmbhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLEtBQWUsRUFBRSxLQUFlO0lBQ3pELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU1QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksRUFBRTtRQUN4QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuKTkuKrmlbDnu4TvvIznvJblhpnkuIDkuKrlh73mlbDmnaXorqHnrpflroPku6znmoTkuqTpm4bjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBudW1zMSA9IFsxLDIsMiwxXSwgbnVtczIgPSBbMiwyXVxyXG7ovpPlh7o6IFsyXVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogbnVtczEgPSBbNCw5LDVdLCBudW1zMiA9IFs5LDQsOSw4LDRdXHJcbui+k+WHujogWzksNF1cclxu6K+05piOOlxyXG5cclxu6L6T5Ye657uT5p6c5Lit55qE5q+P5Liq5YWD57Sg5LiA5a6a5piv5ZSv5LiA55qE44CCXHJcbuaIkeS7rOWPr+S7peS4jeiAg+iZkei+k+WHuue7k+aenOeahOmhuuW6j+OAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zMVxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zMlxyXG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cclxuICovXHJcbnZhciBpbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAobnVtczE6IG51bWJlcltdLCBudW1zMjogbnVtYmVyW10pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgY29uc3Qgc2V0MSA9IG5ldyBTZXQobnVtczEpO1xyXG4gICAgY29uc3Qgc2V0MiA9IG5ldyBTZXQobnVtczIpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBzZXQxKSB7XHJcbiAgICAgICAgaWYgKHNldDIuaGFzKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBpbnRlcnNlY3Rpb24oWzEsIDIsIDIsIDFdLCBbMiwgMl0pLFxyXG4gICAgWzJdLFxyXG4pO1xyXG4iXX0=