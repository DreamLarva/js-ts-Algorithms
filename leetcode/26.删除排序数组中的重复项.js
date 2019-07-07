"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (42.79%)
 * Total Accepted:    88.5K
 * Total Submissions: 206.8K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * 示例 1:
 *
 * 给定数组 nums = [1,1,2],
 *
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例 2:
 *
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 *
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
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
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
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
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const len = nums.length;
    // 第一个数据 放过
    if (len === 1 || len === 0) {
        return len;
    }
    // 第n个数据 不能 n - 1 相同
    let index = 0;
    for (let pointer = 1; pointer < len; pointer++) {
        if (nums[index] === nums[pointer]) {
        }
        else {
            nums[++index] = nums[pointer];
        }
    }
    return index + 1;
};
const assert_1 = __importDefault(require("assert"));
const arr = [1, 2, 2, 2, 3];
const len = removeDuplicates(arr);
arr.length = len;
assert_1.default.deepStrictEqual(arr, [1, 2, 3]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYu5Yig6Zmk5o6S5bqP5pWw57uE5Lit55qE6YeN5aSN6aG5LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNi7liKDpmaTmjpLluo/mlbDnu4TkuK3nmoTph43lpI3pobkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9ERztBQUNIOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzNDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFeEIsV0FBVztJQUNYLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7SUFFRCxvQkFBb0I7SUFDcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUM1QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FFbEM7YUFBTTtZQUNILElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztLQUNKO0lBRUQsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTI2IGxhbmc9amF2YXNjcmlwdFxyXG4gKlxyXG4gKiBbMjZdIOWIoOmZpOaOkuW6j+aVsOe7hOS4reeahOmHjeWkjemhuVxyXG4gKlxyXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9yZW1vdmUtZHVwbGljYXRlcy1mcm9tLXNvcnRlZC1hcnJheS9kZXNjcmlwdGlvbi9cclxuICpcclxuICogYWxnb3JpdGhtc1xyXG4gKiBFYXN5ICg0Mi43OSUpXHJcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICA4OC41S1xyXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogMjA2LjhLXHJcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnWzEsMSwyXSdcclxuICpcclxuICog57uZ5a6a5LiA5Liq5o6S5bqP5pWw57uE77yM5L2g6ZyA6KaB5Zyo5Y6f5Zyw5Yig6Zmk6YeN5aSN5Ye6546w55qE5YWD57Sg77yM5L2/5b6X5q+P5Liq5YWD57Sg5Y+q5Ye6546w5LiA5qyh77yM6L+U5Zue56e76Zmk5ZCO5pWw57uE55qE5paw6ZW/5bqm44CCXHJcbiAqXHJcbiAqIOS4jeimgeS9v+eUqOmineWklueahOaVsOe7hOepuumXtO+8jOS9oOW/hemhu+WcqOWOn+WcsOS/ruaUuei+k+WFpeaVsOe7hOW5tuWcqOS9v+eUqCBPKDEpIOmineWkluepuumXtOeahOadoeS7tuS4i+WujOaIkOOAglxyXG4gKlxyXG4gKiDnpLrkvovCoDE6XHJcbiAqXHJcbiAqIOe7meWumuaVsOe7hCBudW1zID0gWzEsMSwyXSxcclxuICpcclxuICog5Ye95pWw5bqU6K+l6L+U5Zue5paw55qE6ZW/5bqmIDIsIOW5tuS4lOWOn+aVsOe7hCBudW1zIOeahOWJjeS4pOS4quWFg+e0oOiiq+S/ruaUueS4uiAxLCAy44CCXHJcbiAqXHJcbiAqIOS9oOS4jemcgOimgeiAg+iZkeaVsOe7hOS4rei2heWHuuaWsOmVv+W6puWQjumdoueahOWFg+e0oOOAglxyXG4gKlxyXG4gKiDnpLrkvovCoDI6XHJcbiAqXHJcbiAqIOe7meWumiBudW1zID0gWzAsMCwxLDEsMSwyLDIsMywzLDRdLFxyXG4gKlxyXG4gKiDlh73mlbDlupTor6Xov5Tlm57mlrDnmoTplb/luqYgNSwg5bm25LiU5Y6f5pWw57uEIG51bXMg55qE5YmN5LqU5Liq5YWD57Sg6KKr5L+u5pS55Li6IDAsIDEsIDIsIDMsIDTjgIJcclxuICpcclxuICog5L2g5LiN6ZyA6KaB6ICD6JmR5pWw57uE5Lit6LaF5Ye65paw6ZW/5bqm5ZCO6Z2i55qE5YWD57Sg44CCXHJcbiAqXHJcbiAqXHJcbiAqIOivtOaYjjpcclxuICpcclxuICog5Li65LuA5LmI6L+U5Zue5pWw5YC85piv5pW05pWw77yM5L2G6L6T5Ye655qE562U5qGI5piv5pWw57uE5ZGiP1xyXG4gKlxyXG4gKiDor7fms6jmhI/vvIzovpPlhaXmlbDnu4TmmK/ku6XigJzlvJXnlKjigJ3mlrnlvI/kvKDpgJLnmoTvvIzov5nmhI/lkbPnnYDlnKjlh73mlbDph4zkv67mlLnovpPlhaXmlbDnu4Tlr7nkuo7osIPnlKjogIXmmK/lj6/op4HnmoTjgIJcclxuICpcclxuICog5L2g5Y+v5Lul5oOz6LGh5YaF6YOo5pON5L2c5aaC5LiLOlxyXG4gKlxyXG4gKiAvLyBudW1zIOaYr+S7peKAnOW8leeUqOKAneaWueW8j+S8oOmAkueahOOAguS5n+WwseaYr+ivtO+8jOS4jeWvueWunuWPguWBmuS7u+S9leaLt+i0nVxyXG4gKiBpbnQgbGVuID0gcmVtb3ZlRHVwbGljYXRlcyhudW1zKTtcclxuICpcclxuICogLy8g5Zyo5Ye95pWw6YeM5L+u5pS56L6T5YWl5pWw57uE5a+55LqO6LCD55So6ICF5piv5Y+v6KeB55qE44CCXHJcbiAqIC8vIOagueaNruS9oOeahOWHveaVsOi/lOWbnueahOmVv+W6piwg5a6D5Lya5omT5Y2w5Ye65pWw57uE5Lit6K+l6ZW/5bqm6IyD5Zu05YaF55qE5omA5pyJ5YWD57Sg44CCXHJcbiAqIGZvciAoaW50IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICogcHJpbnQobnVtc1tpXSk7XHJcbiAqIH1cclxuICpcclxuICpcclxuICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciByZW1vdmVEdXBsaWNhdGVzID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XHJcbiAgICBjb25zdCBsZW4gPSBudW1zLmxlbmd0aDtcclxuXHJcbiAgICAvLyDnrKzkuIDkuKrmlbDmja4g5pS+6L+HXHJcbiAgICBpZiAobGVuID09PSAxIHx8IGxlbiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBsZW47XHJcbiAgICB9XHJcblxyXG4gICAgLy8g56ysbuS4quaVsOaNriDkuI3og70gbiAtIDEg55u45ZCMXHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgcG9pbnRlciA9IDE7IHBvaW50ZXIgPCBsZW47IHBvaW50ZXIrKykge1xyXG4gICAgICAgIGlmIChudW1zW2luZGV4XSA9PT0gbnVtc1twb2ludGVyXSkge1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBudW1zWysraW5kZXhdID0gbnVtc1twb2ludGVyXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZGV4ICsgMTtcclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmNvbnN0IGFyciA9IFsxLCAyLCAyLCAyLCAzXTtcclxuY29uc3QgbGVuID0gcmVtb3ZlRHVwbGljYXRlcyhhcnIpO1xyXG5hcnIubGVuZ3RoID0gbGVuO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGFyciwgWzEsIDIsIDNdKTtcclxuXHJcbiJdfQ==