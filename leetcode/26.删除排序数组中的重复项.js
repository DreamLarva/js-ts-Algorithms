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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYu5Yig6Zmk5o6S5bqP5pWw57uE5Lit55qE6YeN5aSN6aG5LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNi7liKDpmaTmjpLluo/mlbDnu4TkuK3nmoTph43lpI3pobkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9ERztBQUNIOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzNDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFeEIsV0FBVztJQUNYLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7SUFFRCxvQkFBb0I7SUFDcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUM1QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FFbEM7YUFBTTtZQUNILElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztLQUNKO0lBRUQsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD0yNiBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMjZdIOWIoOmZpOaOkuW6j+aVsOe7hOS4reeahOmHjeWkjemhuVxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JlbW92ZS1kdXBsaWNhdGVzLWZyb20tc29ydGVkLWFycmF5L2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDQyLjc5JSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICA4OC41S1xuICogVG90YWwgU3VibWlzc2lvbnM6IDIwNi44S1xuICogVGVzdGNhc2UgRXhhbXBsZTogICdbMSwxLDJdJ1xuICpcbiAqIOe7meWumuS4gOS4quaOkuW6j+aVsOe7hO+8jOS9oOmcgOimgeWcqOWOn+WcsOWIoOmZpOmHjeWkjeWHuueOsOeahOWFg+e0oO+8jOS9v+W+l+avj+S4quWFg+e0oOWPquWHuueOsOS4gOasoe+8jOi/lOWbnuenu+mZpOWQjuaVsOe7hOeahOaWsOmVv+W6puOAglxuICpcbiAqIOS4jeimgeS9v+eUqOmineWklueahOaVsOe7hOepuumXtO+8jOS9oOW/hemhu+WcqOWOn+WcsOS/ruaUuei+k+WFpeaVsOe7hOW5tuWcqOS9v+eUqCBPKDEpIOmineWkluepuumXtOeahOadoeS7tuS4i+WujOaIkOOAglxuICpcbiAqIOekuuS+i8KgMTpcbiAqXG4gKiDnu5nlrprmlbDnu4QgbnVtcyA9IFsxLDEsMl0sXG4gKlxuICog5Ye95pWw5bqU6K+l6L+U5Zue5paw55qE6ZW/5bqmIDIsIOW5tuS4lOWOn+aVsOe7hCBudW1zIOeahOWJjeS4pOS4quWFg+e0oOiiq+S/ruaUueS4uiAxLCAy44CCXG4gKlxuICog5L2g5LiN6ZyA6KaB6ICD6JmR5pWw57uE5Lit6LaF5Ye65paw6ZW/5bqm5ZCO6Z2i55qE5YWD57Sg44CCXG4gKlxuICog56S65L6LwqAyOlxuICpcbiAqIOe7meWumiBudW1zID0gWzAsMCwxLDEsMSwyLDIsMywzLDRdLFxuICpcbiAqIOWHveaVsOW6lOivpei/lOWbnuaWsOeahOmVv+W6piA1LCDlubbkuJTljp/mlbDnu4QgbnVtcyDnmoTliY3kupTkuKrlhYPntKDooqvkv67mlLnkuLogMCwgMSwgMiwgMywgNOOAglxuICpcbiAqIOS9oOS4jemcgOimgeiAg+iZkeaVsOe7hOS4rei2heWHuuaWsOmVv+W6puWQjumdoueahOWFg+e0oOOAglxuICpcbiAqXG4gKiDor7TmmI46XG4gKlxuICog5Li65LuA5LmI6L+U5Zue5pWw5YC85piv5pW05pWw77yM5L2G6L6T5Ye655qE562U5qGI5piv5pWw57uE5ZGiP1xuICpcbiAqIOivt+azqOaEj++8jOi+k+WFpeaVsOe7hOaYr+S7peKAnOW8leeUqOKAneaWueW8j+S8oOmAkueahO+8jOi/meaEj+WRs+edgOWcqOWHveaVsOmHjOS/ruaUuei+k+WFpeaVsOe7hOWvueS6juiwg+eUqOiAheaYr+WPr+ingeeahOOAglxuICpcbiAqIOS9oOWPr+S7peaDs+ixoeWGhemDqOaTjeS9nOWmguS4izpcbiAqXG4gKiAvLyBudW1zIOaYr+S7peKAnOW8leeUqOKAneaWueW8j+S8oOmAkueahOOAguS5n+WwseaYr+ivtO+8jOS4jeWvueWunuWPguWBmuS7u+S9leaLt+i0nVxuICogaW50IGxlbiA9IHJlbW92ZUR1cGxpY2F0ZXMobnVtcyk7XG4gKlxuICogLy8g5Zyo5Ye95pWw6YeM5L+u5pS56L6T5YWl5pWw57uE5a+55LqO6LCD55So6ICF5piv5Y+v6KeB55qE44CCXG4gKiAvLyDmoLnmja7kvaDnmoTlh73mlbDov5Tlm57nmoTplb/luqYsIOWug+S8muaJk+WNsOWHuuaVsOe7hOS4reivpemVv+W6puiMg+WbtOWGheeahOaJgOacieWFg+e0oOOAglxuICogZm9yIChpbnQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICogcHJpbnQobnVtc1tpXSk7XG4gKiB9XG4gKlxuICpcbiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciByZW1vdmVEdXBsaWNhdGVzID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gICAgY29uc3QgbGVuID0gbnVtcy5sZW5ndGg7XG5cbiAgICAvLyDnrKzkuIDkuKrmlbDmja4g5pS+6L+HXG4gICAgaWYgKGxlbiA9PT0gMSB8fCBsZW4gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxlbjtcbiAgICB9XG5cbiAgICAvLyDnrKxu5Liq5pWw5o2uIOS4jeiDvSBuIC0gMSDnm7jlkIxcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAobGV0IHBvaW50ZXIgPSAxOyBwb2ludGVyIDwgbGVuOyBwb2ludGVyKyspIHtcbiAgICAgICAgaWYgKG51bXNbaW5kZXhdID09PSBudW1zW3BvaW50ZXJdKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bXNbKytpbmRleF0gPSBudW1zW3BvaW50ZXJdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4ICsgMTtcbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmNvbnN0IGFyciA9IFsxLCAyLCAyLCAyLCAzXTtcbmNvbnN0IGxlbiA9IHJlbW92ZUR1cGxpY2F0ZXMoYXJyKTtcbmFyci5sZW5ndGggPSBsZW47XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGFyciwgWzEsIDIsIDNdKTtcblxuIl19