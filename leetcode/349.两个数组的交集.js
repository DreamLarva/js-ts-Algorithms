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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ5LuS4pOS4quaVsOe7hOeahOS6pOmbhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ5LuS4pOS4quaVsOe7hOeahOS6pOmbhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLEtBQWUsRUFBRSxLQUFlO0lBQzNELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU1QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksRUFBRTtRQUMxQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5Lik5Liq5pWw57uE77yM57yW5YaZ5LiA5Liq5Ye95pWw5p2l6K6h566X5a6D5Lus55qE5Lqk6ZuG44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogbnVtczEgPSBbMSwyLDIsMV0sIG51bXMyID0gWzIsMl1cclxu6L6T5Ye6OiBbMl1cclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IG51bXMxID0gWzQsOSw1XSwgbnVtczIgPSBbOSw0LDksOCw0XVxyXG7ovpPlh7o6IFs5LDRdXHJcbuivtOaYjjpcclxuXHJcbui+k+WHuue7k+aenOS4reeahOavj+S4quWFg+e0oOS4gOWumuaYr+WUr+S4gOeahOOAglxyXG7miJHku6zlj6/ku6XkuI3ogIPomZHovpPlh7rnu5PmnpznmoTpobrluo/jgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtczFcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtczJcclxuICogQHJldHVybiB7bnVtYmVyW119XHJcbiAqL1xyXG52YXIgaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKG51bXMxOiBudW1iZXJbXSwgbnVtczI6IG51bWJlcltdKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgY29uc3Qgc2V0MSA9IG5ldyBTZXQobnVtczEpO1xyXG4gIGNvbnN0IHNldDIgPSBuZXcgU2V0KG51bXMyKTtcclxuXHJcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIHNldDEpIHtcclxuICAgIGlmIChzZXQyLmhhcyhlbGVtZW50KSkge1xyXG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbnRlcnNlY3Rpb24oWzEsIDIsIDIsIDFdLCBbMiwgMl0pLCBbMl0pO1xyXG4iXX0=