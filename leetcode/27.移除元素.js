"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode-cn.com/problems/remove-element/description/
 *
 * algorithms
 * Easy (53.46%)
 * Total Accepted:    39.1K
 * Total Submissions: 73.1K
 * Testcase Example:  '[3,2,2,3]\n3'
 *
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例 1:
 *
 * 给定 nums = [3,2,2,3], val = 3,
 *
 * 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 *
 * 示例 2:
 *
 * 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
 *
 * 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 *
 * 注意这五个元素可为任意顺序。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 *
 * 说明:
 *
 * 为什么返回数值是整数，但输出的答案是数组呢?
 *
 * 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 *
 * 你可以想象内部操作如下:
 *
 * // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 * int len = removeElement(nums, val);
 *
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const len = nums.length;
    let index = 0;
    for (let pointer = 0; pointer < len; pointer++) {
        if (nums[pointer] !== val) {
            nums[index] = nums[pointer];
            index++;
        }
    }
    return index;
};
/*
* [0,1,2,2,3,0,4,2]
2
*
* */
const assert_1 = __importDefault(require("assert"));
const arr = [0, 1, 2, 2, 3, 0, 4, 2];
arr.length = removeElement(arr, 2);
console.log(arr);
assert_1.default.deepStrictEqual(arr, [0, 1, 3, 0, 4]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcu56e76Zmk5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNy7np7vpmaTlhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeURHO0FBQ0g7Ozs7R0FJRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsSUFBYyxFQUFFLEdBQVc7SUFDckQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN4QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxLQUFLLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBRTVDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDO1NBQ1g7S0FFSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGOzs7O0lBSUk7QUFDSixvREFBNEI7QUFFNUIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTI3IGxhbmc9amF2YXNjcmlwdFxyXG4gKlxyXG4gKiBbMjddIOenu+mZpOWFg+e0oFxyXG4gKlxyXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9yZW1vdmUtZWxlbWVudC9kZXNjcmlwdGlvbi9cclxuICpcclxuICogYWxnb3JpdGhtc1xyXG4gKiBFYXN5ICg1My40NiUpXHJcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICAzOS4xS1xyXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogNzMuMUtcclxuICogVGVzdGNhc2UgRXhhbXBsZTogICdbMywyLDIsM11cXG4zJ1xyXG4gKlxyXG4gKiDnu5nlrprkuIDkuKrmlbDnu4QgbnVtc8Kg5ZKM5LiA5Liq5YC8IHZhbO+8jOS9oOmcgOimgeWOn+WcsOenu+mZpOaJgOacieaVsOWAvOetieS6jsKgdmFswqDnmoTlhYPntKDvvIzov5Tlm57np7vpmaTlkI7mlbDnu4TnmoTmlrDplb/luqbjgIJcclxuICpcclxuICog5LiN6KaB5L2/55So6aKd5aSW55qE5pWw57uE56m66Ze077yM5L2g5b+F6aG75Zyo5Y6f5Zyw5L+u5pS56L6T5YWl5pWw57uE5bm25Zyo5L2/55SoIE8oMSkg6aKd5aSW56m66Ze055qE5p2h5Lu25LiL5a6M5oiQ44CCXHJcbiAqXHJcbiAqIOWFg+e0oOeahOmhuuW6j+WPr+S7peaUueWPmOOAguS9oOS4jemcgOimgeiAg+iZkeaVsOe7hOS4rei2heWHuuaWsOmVv+W6puWQjumdoueahOWFg+e0oOOAglxyXG4gKlxyXG4gKiDnpLrkvosgMTpcclxuICpcclxuICog57uZ5a6aIG51bXMgPSBbMywyLDIsM10sIHZhbCA9IDMsXHJcbiAqXHJcbiAqIOWHveaVsOW6lOivpei/lOWbnuaWsOeahOmVv+W6piAyLCDlubbkuJQgbnVtcyDkuK3nmoTliY3kuKTkuKrlhYPntKDlnYfkuLogMuOAglxyXG4gKlxyXG4gKiDkvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcclxuICpcclxuICpcclxuICog56S65L6LwqAyOlxyXG4gKlxyXG4gKiDnu5nlrpogbnVtcyA9IFswLDEsMiwyLDMsMCw0LDJdLCB2YWwgPSAyLFxyXG4gKlxyXG4gKiDlh73mlbDlupTor6Xov5Tlm57mlrDnmoTplb/luqYgNSwg5bm25LiUIG51bXMg5Lit55qE5YmN5LqU5Liq5YWD57Sg5Li6IDAsIDEsIDMsIDAsIDTjgIJcclxuICpcclxuICog5rOo5oSP6L+Z5LqU5Liq5YWD57Sg5Y+v5Li65Lu75oSP6aG65bqP44CCXHJcbiAqXHJcbiAqIOS9oOS4jemcgOimgeiAg+iZkeaVsOe7hOS4rei2heWHuuaWsOmVv+W6puWQjumdoueahOWFg+e0oOOAglxyXG4gKlxyXG4gKlxyXG4gKiDor7TmmI46XHJcbiAqXHJcbiAqIOS4uuS7gOS5iOi/lOWbnuaVsOWAvOaYr+aVtOaVsO+8jOS9hui+k+WHuueahOetlOahiOaYr+aVsOe7hOWRoj9cclxuICpcclxuICog6K+35rOo5oSP77yM6L6T5YWl5pWw57uE5piv5Lul4oCc5byV55So4oCd5pa55byP5Lyg6YCS55qE77yM6L+Z5oSP5ZGz552A5Zyo5Ye95pWw6YeM5L+u5pS56L6T5YWl5pWw57uE5a+55LqO6LCD55So6ICF5piv5Y+v6KeB55qE44CCXHJcbiAqXHJcbiAqIOS9oOWPr+S7peaDs+ixoeWGhemDqOaTjeS9nOWmguS4izpcclxuICpcclxuICogLy8gbnVtcyDmmK/ku6XigJzlvJXnlKjigJ3mlrnlvI/kvKDpgJLnmoTjgILkuZ/lsLHmmK/or7TvvIzkuI3lr7nlrp7lj4LkvZzku7vkvZXmi7fotJ1cclxuICogaW50IGxlbiA9IHJlbW92ZUVsZW1lbnQobnVtcywgdmFsKTtcclxuICpcclxuICogLy8g5Zyo5Ye95pWw6YeM5L+u5pS56L6T5YWl5pWw57uE5a+55LqO6LCD55So6ICF5piv5Y+v6KeB55qE44CCXHJcbiAqIC8vIOagueaNruS9oOeahOWHveaVsOi/lOWbnueahOmVv+W6piwg5a6D5Lya5omT5Y2w5Ye65pWw57uE5Lit6K+l6ZW/5bqm6IyD5Zu05YaF55qE5omA5pyJ5YWD57Sg44CCXHJcbiAqIGZvciAoaW50IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICogcHJpbnQobnVtc1tpXSk7XHJcbiAqIH1cclxuICpcclxuICpcclxuICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIHJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIHZhbDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBsZW4gPSBudW1zLmxlbmd0aDtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBmb3IgKGxldCBwb2ludGVyID0gMDsgcG9pbnRlciA8IGxlbjsgcG9pbnRlcisrKSB7XHJcblxyXG4gICAgICAgIGlmIChudW1zW3BvaW50ZXJdICE9PSB2YWwpIHtcclxuICAgICAgICAgICAgbnVtc1tpbmRleF0gPSBudW1zW3BvaW50ZXJdO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbn07XHJcblxyXG4vKlxyXG4qIFswLDEsMiwyLDMsMCw0LDJdXHJcbjJcclxuKlxyXG4qICovXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuY29uc3QgYXJyID0gWzAsIDEsIDIsIDIsIDMsIDAsIDQsIDJdO1xyXG5hcnIubGVuZ3RoID0gcmVtb3ZlRWxlbWVudChhcnIsIDIpO1xyXG5jb25zb2xlLmxvZyhhcnIpO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGFyciwgWzAsIDEsIDMsIDAsIDRdKTtcclxuIl19