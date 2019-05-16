"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
进阶:

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    const short = nums1, long = nums2;
    // 处理较短的数组 成为
    // [字符] : 出现几次
    const map = {};
    for (const char of short) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }
    const result = [];
    for (const char of long) {
        if (map[char]) {
            result.push(char);
            map[char]--;
        }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(intersect([1, 2, 3, 4], [2, 3]), [2, 3]);
assert_1.default.deepStrictEqual(intersect([1, 2, 3, 4, 2], [2, 3, 2]), [2, 3]);
assert_1.default.deepStrictEqual(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUwLuS4pOS4quaVsOe7hOeahOS6pOmbhklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNTAu5Lik5Liq5pWw57uE55qE5Lqk6ZuGSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxLQUFlLEVBQUUsS0FBZTtJQUN0RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM3QixPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDbEM7SUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNsQyxhQUFhO0lBQ2IsY0FBYztJQUNkLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdDO0lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ3JCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNULENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuKTkuKrmlbDnu4TvvIznvJblhpnkuIDkuKrlh73mlbDmnaXorqHnrpflroPku6znmoTkuqTpm4bjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBudW1zMSA9IFsxLDIsMiwxXSwgbnVtczIgPSBbMiwyXVxyXG7ovpPlh7o6IFsyLDJdXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBudW1zMSA9IFs0LDksNV0sIG51bXMyID0gWzksNCw5LDgsNF1cclxu6L6T5Ye6OiBbNCw5XVxyXG7or7TmmI7vvJpcclxuXHJcbui+k+WHuue7k+aenOS4reavj+S4quWFg+e0oOWHuueOsOeahOasoeaVsO+8jOW6lOS4juWFg+e0oOWcqOS4pOS4quaVsOe7hOS4reWHuueOsOeahOasoeaVsOS4gOiHtOOAglxyXG7miJHku6zlj6/ku6XkuI3ogIPomZHovpPlh7rnu5PmnpznmoTpobrluo/jgIJcclxu6L+b6Zi2OlxyXG5cclxu5aaC5p6c57uZ5a6a55qE5pWw57uE5bey57uP5o6S5aW95bqP5ZGi77yf5L2g5bCG5aaC5L2V5LyY5YyW5L2g55qE566X5rOV77yfXHJcbuWmguaenCBudW1zMSDnmoTlpKflsI/mr5QgbnVtczIg5bCP5b6I5aSa77yM5ZOq56eN5pa55rOV5pu05LyY77yfXHJcbuWmguaenCBudW1zMiDnmoTlhYPntKDlrZjlgqjlnKjno4Hnm5jkuIrvvIzno4Hnm5jlhoXlrZjmmK/mnInpmZDnmoTvvIzlubbkuJTkvaDkuI3og73kuIDmrKHliqDovb3miYDmnInnmoTlhYPntKDliLDlhoXlrZjkuK3vvIzkvaDor6XmgI7kuYjlip7vvJ9cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtczFcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtczJcclxuICogQHJldHVybiB7bnVtYmVyW119XHJcbiAqL1xyXG52YXIgaW50ZXJzZWN0ID0gZnVuY3Rpb24gKG51bXMxOiBudW1iZXJbXSwgbnVtczI6IG51bWJlcltdKTogbnVtYmVyW10ge1xyXG4gICAgaWYgKG51bXMxLmxlbmd0aCA+IG51bXMyLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3QobnVtczIsIG51bXMxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG9ydCA9IG51bXMxLCBsb25nID0gbnVtczI7XHJcbiAgICAvLyDlpITnkIbovoPnn63nmoTmlbDnu4Qg5oiQ5Li6XHJcbiAgICAvLyBb5a2X56ymXSA6IOWHuueOsOWHoOasoVxyXG4gICAgY29uc3QgbWFwOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2Ygc2hvcnQpIHtcclxuICAgICAgICBtYXBbY2hhcl0gPSBtYXBbY2hhcl0gPyBtYXBbY2hhcl0gKyAxIDogMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAoY29uc3QgY2hhciBvZiBsb25nKSB7XHJcbiAgICAgICAgaWYgKG1hcFtjaGFyXSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChjaGFyKTtcclxuICAgICAgICAgICAgbWFwW2NoYXJdLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBpbnRlcnNlY3QoWzEsIDIsIDMsIDRdLCBbMiwgM10pLFxyXG4gICAgWzIsIDNdLFxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgaW50ZXJzZWN0KFsxLCAyLCAzLCA0LCAyXSwgWzIsIDMsIDJdKSxcclxuICAgIFsyLCAzXSxcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIGludGVyc2VjdChbMSwgMiwgMiwgMV0sIFsyLCAyXSksXHJcbiAgICBbMiwgMl0sXHJcbik7XHJcbiJdfQ==