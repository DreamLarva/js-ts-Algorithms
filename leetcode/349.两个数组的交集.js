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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ5LuS4pOS4quaVsOe7hOeahOS6pOmbhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ5LuS4pOS4quaVsOe7hOeahOS6pOmbhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLEtBQWUsRUFBRSxLQUFlO0lBQzNELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU1QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksRUFBRTtRQUMxQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4pOS4quaVsOe7hO+8jOe8luWGmeS4gOS4quWHveaVsOadpeiuoeeul+Wug+S7rOeahOS6pOmbhuOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBudW1zMSA9IFsxLDIsMiwxXSwgbnVtczIgPSBbMiwyXVxu6L6T5Ye6OiBbMl1cbuekuuS+iyAyOlxuXG7ovpPlhaU6IG51bXMxID0gWzQsOSw1XSwgbnVtczIgPSBbOSw0LDksOCw0XVxu6L6T5Ye6OiBbOSw0XVxu6K+05piOOlxuXG7ovpPlh7rnu5PmnpzkuK3nmoTmr4/kuKrlhYPntKDkuIDlrprmmK/llK/kuIDnmoTjgIJcbuaIkeS7rOWPr+S7peS4jeiAg+iZkei+k+WHuue7k+aenOeahOmhuuW6j+OAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zMVxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtczJcbiAqIEByZXR1cm4ge251bWJlcltdfVxuICovXG52YXIgaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKG51bXMxOiBudW1iZXJbXSwgbnVtczI6IG51bWJlcltdKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBzZXQxID0gbmV3IFNldChudW1zMSk7XG4gIGNvbnN0IHNldDIgPSBuZXcgU2V0KG51bXMyKTtcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2V0MSkge1xuICAgIGlmIChzZXQyLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbnRlcnNlY3Rpb24oWzEsIDIsIDIsIDFdLCBbMiwgMl0pLCBbMl0pO1xuIl19