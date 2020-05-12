"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcu56e76Zmk5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNy7np7vpmaTlhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeURHO0FBQ0g7Ozs7R0FJRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsSUFBYyxFQUFFLEdBQVc7SUFDckQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN4QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxLQUFLLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBRTVDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDO1NBQ1g7S0FFSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGOzs7O0lBSUk7QUFDSixvREFBNEI7QUFFNUIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD0yNyBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMjddIOenu+mZpOWFg+e0oFxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JlbW92ZS1lbGVtZW50L2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDUzLjQ2JSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICAzOS4xS1xuICogVG90YWwgU3VibWlzc2lvbnM6IDczLjFLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1szLDIsMiwzXVxcbjMnXG4gKlxuICog57uZ5a6a5LiA5Liq5pWw57uEIG51bXPCoOWSjOS4gOS4quWAvCB2YWzvvIzkvaDpnIDopoHljp/lnLDnp7vpmaTmiYDmnInmlbDlgLznrYnkuo7CoHZhbMKg55qE5YWD57Sg77yM6L+U5Zue56e76Zmk5ZCO5pWw57uE55qE5paw6ZW/5bqm44CCXG4gKlxuICog5LiN6KaB5L2/55So6aKd5aSW55qE5pWw57uE56m66Ze077yM5L2g5b+F6aG75Zyo5Y6f5Zyw5L+u5pS56L6T5YWl5pWw57uE5bm25Zyo5L2/55SoIE8oMSkg6aKd5aSW56m66Ze055qE5p2h5Lu25LiL5a6M5oiQ44CCXG4gKlxuICog5YWD57Sg55qE6aG65bqP5Y+v5Lul5pS55Y+Y44CC5L2g5LiN6ZyA6KaB6ICD6JmR5pWw57uE5Lit6LaF5Ye65paw6ZW/5bqm5ZCO6Z2i55qE5YWD57Sg44CCXG4gKlxuICog56S65L6LIDE6XG4gKlxuICog57uZ5a6aIG51bXMgPSBbMywyLDIsM10sIHZhbCA9IDMsXG4gKlxuICog5Ye95pWw5bqU6K+l6L+U5Zue5paw55qE6ZW/5bqmIDIsIOW5tuS4lCBudW1zIOS4reeahOWJjeS4pOS4quWFg+e0oOWdh+S4uiAy44CCXG4gKlxuICog5L2g5LiN6ZyA6KaB6ICD6JmR5pWw57uE5Lit6LaF5Ye65paw6ZW/5bqm5ZCO6Z2i55qE5YWD57Sg44CCXG4gKlxuICpcbiAqIOekuuS+i8KgMjpcbiAqXG4gKiDnu5nlrpogbnVtcyA9IFswLDEsMiwyLDMsMCw0LDJdLCB2YWwgPSAyLFxuICpcbiAqIOWHveaVsOW6lOivpei/lOWbnuaWsOeahOmVv+W6piA1LCDlubbkuJQgbnVtcyDkuK3nmoTliY3kupTkuKrlhYPntKDkuLogMCwgMSwgMywgMCwgNOOAglxuICpcbiAqIOazqOaEj+i/meS6lOS4quWFg+e0oOWPr+S4uuS7u+aEj+mhuuW6j+OAglxuICpcbiAqIOS9oOS4jemcgOimgeiAg+iZkeaVsOe7hOS4rei2heWHuuaWsOmVv+W6puWQjumdoueahOWFg+e0oOOAglxuICpcbiAqXG4gKiDor7TmmI46XG4gKlxuICog5Li65LuA5LmI6L+U5Zue5pWw5YC85piv5pW05pWw77yM5L2G6L6T5Ye655qE562U5qGI5piv5pWw57uE5ZGiP1xuICpcbiAqIOivt+azqOaEj++8jOi+k+WFpeaVsOe7hOaYr+S7peKAnOW8leeUqOKAneaWueW8j+S8oOmAkueahO+8jOi/meaEj+WRs+edgOWcqOWHveaVsOmHjOS/ruaUuei+k+WFpeaVsOe7hOWvueS6juiwg+eUqOiAheaYr+WPr+ingeeahOOAglxuICpcbiAqIOS9oOWPr+S7peaDs+ixoeWGhemDqOaTjeS9nOWmguS4izpcbiAqXG4gKiAvLyBudW1zIOaYr+S7peKAnOW8leeUqOKAneaWueW8j+S8oOmAkueahOOAguS5n+WwseaYr+ivtO+8jOS4jeWvueWunuWPguS9nOS7u+S9leaLt+i0nVxuICogaW50IGxlbiA9IHJlbW92ZUVsZW1lbnQobnVtcywgdmFsKTtcbiAqXG4gKiAvLyDlnKjlh73mlbDph4zkv67mlLnovpPlhaXmlbDnu4Tlr7nkuo7osIPnlKjogIXmmK/lj6/op4HnmoTjgIJcbiAqIC8vIOagueaNruS9oOeahOWHveaVsOi/lOWbnueahOmVv+W6piwg5a6D5Lya5omT5Y2w5Ye65pWw57uE5Lit6K+l6ZW/5bqm6IyD5Zu05YaF55qE5omA5pyJ5YWD57Sg44CCXG4gKiBmb3IgKGludCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gKiBwcmludChudW1zW2ldKTtcbiAqIH1cbiAqXG4gKlxuICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIHZhbDogbnVtYmVyKSB7XG4gICAgY29uc3QgbGVuID0gbnVtcy5sZW5ndGg7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBwb2ludGVyID0gMDsgcG9pbnRlciA8IGxlbjsgcG9pbnRlcisrKSB7XG5cbiAgICAgICAgaWYgKG51bXNbcG9pbnRlcl0gIT09IHZhbCkge1xuICAgICAgICAgICAgbnVtc1tpbmRleF0gPSBudW1zW3BvaW50ZXJdO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbn07XG5cbi8qXG4qIFswLDEsMiwyLDMsMCw0LDJdXG4yXG4qXG4qICovXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuY29uc3QgYXJyID0gWzAsIDEsIDIsIDIsIDMsIDAsIDQsIDJdO1xuYXJyLmxlbmd0aCA9IHJlbW92ZUVsZW1lbnQoYXJyLCAyKTtcbmNvbnNvbGUubG9nKGFycik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGFyciwgWzAsIDEsIDMsIDAsIDRdKTtcbiJdfQ==
