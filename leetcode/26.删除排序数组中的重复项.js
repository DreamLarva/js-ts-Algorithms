"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
 * 示例 1:
 *
 * 给定数组 nums = [1,1,2],
 *
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例 2:
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
    } else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYu5Yig6Zmk5o6S5bqP5pWw57uE5Lit55qE6YeN5aSN6aG5LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNi7liKDpmaTmjpLluo/mlbDnu4TkuK3nmoTph43lpI3pobkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9ERztBQUNIOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFeEIsV0FBVztJQUNYLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxvQkFBb0I7SUFDcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUM5QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtLQUNGO0lBRUQsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD0yNiBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMjZdIOWIoOmZpOaOkuW6j+aVsOe7hOS4reeahOmHjeWkjemhuVxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JlbW92ZS1kdXBsaWNhdGVzLWZyb20tc29ydGVkLWFycmF5L2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDQyLjc5JSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICA4OC41S1xuICogVG90YWwgU3VibWlzc2lvbnM6IDIwNi44S1xuICogVGVzdGNhc2UgRXhhbXBsZTogICdbMSwxLDJdJ1xuICpcbiAqIOe7meWumuS4gOS4quaOkuW6j+aVsOe7hO+8jOS9oOmcgOimgeWcqOWOn+WcsOWIoOmZpOmHjeWkjeWHuueOsOeahOWFg+e0oO+8jOS9v+W+l+avj+S4quWFg+e0oOWPquWHuueOsOS4gOasoe+8jOi/lOWbnuenu+mZpOWQjuaVsOe7hOeahOaWsOmVv+W6puOAglxuICpcbiAqIOS4jeimgeS9v+eUqOmineWklueahOaVsOe7hOepuumXtO+8jOS9oOW/hemhu+WcqOWOn+WcsOS/ruaUuei+k+WFpeaVsOe7hOW5tuWcqOS9v+eUqCBPKDEpIOmineWkluepuumXtOeahOadoeS7tuS4i+WujOaIkOOAglxuICpcbiAqIOekuuS+iyAxOlxuICpcbiAqIOe7meWumuaVsOe7hCBudW1zID0gWzEsMSwyXSxcbiAqXG4gKiDlh73mlbDlupTor6Xov5Tlm57mlrDnmoTplb/luqYgMiwg5bm25LiU5Y6f5pWw57uEIG51bXMg55qE5YmN5Lik5Liq5YWD57Sg6KKr5L+u5pS55Li6IDEsIDLjgIJcbiAqXG4gKiDkvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcbiAqXG4gKiDnpLrkvosgMjpcbiAqXG4gKiDnu5nlrpogbnVtcyA9IFswLDAsMSwxLDEsMiwyLDMsMyw0XSxcbiAqXG4gKiDlh73mlbDlupTor6Xov5Tlm57mlrDnmoTplb/luqYgNSwg5bm25LiU5Y6f5pWw57uEIG51bXMg55qE5YmN5LqU5Liq5YWD57Sg6KKr5L+u5pS55Li6IDAsIDEsIDIsIDMsIDTjgIJcbiAqXG4gKiDkvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcbiAqXG4gKlxuICog6K+05piOOlxuICpcbiAqIOS4uuS7gOS5iOi/lOWbnuaVsOWAvOaYr+aVtOaVsO+8jOS9hui+k+WHuueahOetlOahiOaYr+aVsOe7hOWRoj9cbiAqXG4gKiDor7fms6jmhI/vvIzovpPlhaXmlbDnu4TmmK/ku6XigJzlvJXnlKjigJ3mlrnlvI/kvKDpgJLnmoTvvIzov5nmhI/lkbPnnYDlnKjlh73mlbDph4zkv67mlLnovpPlhaXmlbDnu4Tlr7nkuo7osIPnlKjogIXmmK/lj6/op4HnmoTjgIJcbiAqXG4gKiDkvaDlj6/ku6Xmg7PosaHlhoXpg6jmk43kvZzlpoLkuIs6XG4gKlxuICogLy8gbnVtcyDmmK/ku6XigJzlvJXnlKjigJ3mlrnlvI/kvKDpgJLnmoTjgILkuZ/lsLHmmK/or7TvvIzkuI3lr7nlrp7lj4LlgZrku7vkvZXmi7fotJ1cbiAqIGludCBsZW4gPSByZW1vdmVEdXBsaWNhdGVzKG51bXMpO1xuICpcbiAqIC8vIOWcqOWHveaVsOmHjOS/ruaUuei+k+WFpeaVsOe7hOWvueS6juiwg+eUqOiAheaYr+WPr+ingeeahOOAglxuICogLy8g5qC55o2u5L2g55qE5Ye95pWw6L+U5Zue55qE6ZW/5bqmLCDlroPkvJrmiZPljbDlh7rmlbDnu4TkuK3or6Xplb/luqbojIPlm7TlhoXnmoTmiYDmnInlhYPntKDjgIJcbiAqIGZvciAoaW50IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAqIHByaW50KG51bXNbaV0pO1xuICogfVxuICpcbiAqXG4gKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgcmVtb3ZlRHVwbGljYXRlcyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICBjb25zdCBsZW4gPSBudW1zLmxlbmd0aDtcblxuICAvLyDnrKzkuIDkuKrmlbDmja4g5pS+6L+HXG4gIGlmIChsZW4gPT09IDEgfHwgbGVuID09PSAwKSB7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxuXG4gIC8vIOesrG7kuKrmlbDmja4g5LiN6IO9IG4gLSAxIOebuOWQjFxuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGxldCBwb2ludGVyID0gMTsgcG9pbnRlciA8IGxlbjsgcG9pbnRlcisrKSB7XG4gICAgaWYgKG51bXNbaW5kZXhdID09PSBudW1zW3BvaW50ZXJdKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bXNbKytpbmRleF0gPSBudW1zW3BvaW50ZXJdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleCArIDE7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuY29uc3QgYXJyID0gWzEsIDIsIDIsIDIsIDNdO1xuY29uc3QgbGVuID0gcmVtb3ZlRHVwbGljYXRlcyhhcnIpO1xuYXJyLmxlbmd0aCA9IGxlbjtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoYXJyLCBbMSwgMiwgM10pO1xuIl19
