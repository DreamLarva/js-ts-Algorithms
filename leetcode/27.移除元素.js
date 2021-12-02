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
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
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
 * 示例 2:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcu56e76Zmk5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNy7np7vpmaTlhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeURHO0FBQ0g7Ozs7R0FJRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsSUFBYyxFQUFFLEdBQVc7SUFDdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN4QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxLQUFLLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUY7Ozs7SUFJSTtBQUNKLG9EQUE0QjtBQUU1QixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTI3IGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFsyN10g56e76Zmk5YWD57SgXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcmVtb3ZlLWVsZW1lbnQvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoNTMuNDYlKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDM5LjFLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogNzMuMUtcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnWzMsMiwyLDNdXFxuMydcbiAqXG4gKiDnu5nlrprkuIDkuKrmlbDnu4QgbnVtcyDlkozkuIDkuKrlgLwgdmFs77yM5L2g6ZyA6KaB5Y6f5Zyw56e76Zmk5omA5pyJ5pWw5YC8562J5LqOIHZhbCDnmoTlhYPntKDvvIzov5Tlm57np7vpmaTlkI7mlbDnu4TnmoTmlrDplb/luqbjgIJcbiAqXG4gKiDkuI3opoHkvb/nlKjpop3lpJbnmoTmlbDnu4Tnqbrpl7TvvIzkvaDlv4XpobvlnKjljp/lnLDkv67mlLnovpPlhaXmlbDnu4TlubblnKjkvb/nlKggTygxKSDpop3lpJbnqbrpl7TnmoTmnaHku7bkuIvlrozmiJDjgIJcbiAqXG4gKiDlhYPntKDnmoTpobrluo/lj6/ku6XmlLnlj5jjgILkvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcbiAqXG4gKiDnpLrkvosgMTpcbiAqXG4gKiDnu5nlrpogbnVtcyA9IFszLDIsMiwzXSwgdmFsID0gMyxcbiAqXG4gKiDlh73mlbDlupTor6Xov5Tlm57mlrDnmoTplb/luqYgMiwg5bm25LiUIG51bXMg5Lit55qE5YmN5Lik5Liq5YWD57Sg5Z2H5Li6IDLjgIJcbiAqXG4gKiDkvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcbiAqXG4gKlxuICog56S65L6LIDI6XG4gKlxuICog57uZ5a6aIG51bXMgPSBbMCwxLDIsMiwzLDAsNCwyXSwgdmFsID0gMixcbiAqXG4gKiDlh73mlbDlupTor6Xov5Tlm57mlrDnmoTplb/luqYgNSwg5bm25LiUIG51bXMg5Lit55qE5YmN5LqU5Liq5YWD57Sg5Li6IDAsIDEsIDMsIDAsIDTjgIJcbiAqXG4gKiDms6jmhI/ov5nkupTkuKrlhYPntKDlj6/kuLrku7vmhI/pobrluo/jgIJcbiAqXG4gKiDkvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcbiAqXG4gKlxuICog6K+05piOOlxuICpcbiAqIOS4uuS7gOS5iOi/lOWbnuaVsOWAvOaYr+aVtOaVsO+8jOS9hui+k+WHuueahOetlOahiOaYr+aVsOe7hOWRoj9cbiAqXG4gKiDor7fms6jmhI/vvIzovpPlhaXmlbDnu4TmmK/ku6XigJzlvJXnlKjigJ3mlrnlvI/kvKDpgJLnmoTvvIzov5nmhI/lkbPnnYDlnKjlh73mlbDph4zkv67mlLnovpPlhaXmlbDnu4Tlr7nkuo7osIPnlKjogIXmmK/lj6/op4HnmoTjgIJcbiAqXG4gKiDkvaDlj6/ku6Xmg7PosaHlhoXpg6jmk43kvZzlpoLkuIs6XG4gKlxuICogLy8gbnVtcyDmmK/ku6XigJzlvJXnlKjigJ3mlrnlvI/kvKDpgJLnmoTjgILkuZ/lsLHmmK/or7TvvIzkuI3lr7nlrp7lj4LkvZzku7vkvZXmi7fotJ1cbiAqIGludCBsZW4gPSByZW1vdmVFbGVtZW50KG51bXMsIHZhbCk7XG4gKlxuICogLy8g5Zyo5Ye95pWw6YeM5L+u5pS56L6T5YWl5pWw57uE5a+55LqO6LCD55So6ICF5piv5Y+v6KeB55qE44CCXG4gKiAvLyDmoLnmja7kvaDnmoTlh73mlbDov5Tlm57nmoTplb/luqYsIOWug+S8muaJk+WNsOWHuuaVsOe7hOS4reivpemVv+W6puiMg+WbtOWGheeahOaJgOacieWFg+e0oOOAglxuICogZm9yIChpbnQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICogcHJpbnQobnVtc1tpXSk7XG4gKiB9XG4gKlxuICpcbiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciByZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCB2YWw6IG51bWJlcikge1xuICBjb25zdCBsZW4gPSBudW1zLmxlbmd0aDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgZm9yIChsZXQgcG9pbnRlciA9IDA7IHBvaW50ZXIgPCBsZW47IHBvaW50ZXIrKykge1xuICAgIGlmIChudW1zW3BvaW50ZXJdICE9PSB2YWwpIHtcbiAgICAgIG51bXNbaW5kZXhdID0gbnVtc1twb2ludGVyXTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleDtcbn07XG5cbi8qXG4qIFswLDEsMiwyLDMsMCw0LDJdXG4yXG4qXG4qICovXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuY29uc3QgYXJyID0gWzAsIDEsIDIsIDIsIDMsIDAsIDQsIDJdO1xuYXJyLmxlbmd0aCA9IHJlbW92ZUVsZW1lbnQoYXJyLCAyKTtcbmNvbnNvbGUubG9nKGFycik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGFyciwgWzAsIDEsIDMsIDAsIDRdKTtcbiJdfQ==
