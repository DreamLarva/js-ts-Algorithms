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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcu56e76Zmk5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNy7np7vpmaTlhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeURHO0FBQ0g7Ozs7R0FJRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsSUFBYyxFQUFFLEdBQVc7SUFDdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN4QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxLQUFLLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUY7Ozs7SUFJSTtBQUNKLG9EQUE0QjtBQUU1QixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTI3IGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFsyN10g56e76Zmk5YWD57SgXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcmVtb3ZlLWVsZW1lbnQvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoNTMuNDYlKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDM5LjFLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogNzMuMUtcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnWzMsMiwyLDNdXFxuMydcbiAqXG4gKiDnu5nlrprkuIDkuKrmlbDnu4QgbnVtc8Kg5ZKM5LiA5Liq5YC8IHZhbO+8jOS9oOmcgOimgeWOn+WcsOenu+mZpOaJgOacieaVsOWAvOetieS6jsKgdmFswqDnmoTlhYPntKDvvIzov5Tlm57np7vpmaTlkI7mlbDnu4TnmoTmlrDplb/luqbjgIJcbiAqXG4gKiDkuI3opoHkvb/nlKjpop3lpJbnmoTmlbDnu4Tnqbrpl7TvvIzkvaDlv4XpobvlnKjljp/lnLDkv67mlLnovpPlhaXmlbDnu4TlubblnKjkvb/nlKggTygxKSDpop3lpJbnqbrpl7TnmoTmnaHku7bkuIvlrozmiJDjgIJcbiAqXG4gKiDlhYPntKDnmoTpobrluo/lj6/ku6XmlLnlj5jjgILkvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcbiAqXG4gKiDnpLrkvosgMTpcbiAqXG4gKiDnu5nlrpogbnVtcyA9IFszLDIsMiwzXSwgdmFsID0gMyxcbiAqXG4gKiDlh73mlbDlupTor6Xov5Tlm57mlrDnmoTplb/luqYgMiwg5bm25LiUIG51bXMg5Lit55qE5YmN5Lik5Liq5YWD57Sg5Z2H5Li6IDLjgIJcbiAqXG4gKiDkvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcbiAqXG4gKlxuICog56S65L6LwqAyOlxuICpcbiAqIOe7meWumiBudW1zID0gWzAsMSwyLDIsMywwLDQsMl0sIHZhbCA9IDIsXG4gKlxuICog5Ye95pWw5bqU6K+l6L+U5Zue5paw55qE6ZW/5bqmIDUsIOW5tuS4lCBudW1zIOS4reeahOWJjeS6lOS4quWFg+e0oOS4uiAwLCAxLCAzLCAwLCA044CCXG4gKlxuICog5rOo5oSP6L+Z5LqU5Liq5YWD57Sg5Y+v5Li65Lu75oSP6aG65bqP44CCXG4gKlxuICog5L2g5LiN6ZyA6KaB6ICD6JmR5pWw57uE5Lit6LaF5Ye65paw6ZW/5bqm5ZCO6Z2i55qE5YWD57Sg44CCXG4gKlxuICpcbiAqIOivtOaYjjpcbiAqXG4gKiDkuLrku4DkuYjov5Tlm57mlbDlgLzmmK/mlbTmlbDvvIzkvYbovpPlh7rnmoTnrZTmoYjmmK/mlbDnu4TlkaI/XG4gKlxuICog6K+35rOo5oSP77yM6L6T5YWl5pWw57uE5piv5Lul4oCc5byV55So4oCd5pa55byP5Lyg6YCS55qE77yM6L+Z5oSP5ZGz552A5Zyo5Ye95pWw6YeM5L+u5pS56L6T5YWl5pWw57uE5a+55LqO6LCD55So6ICF5piv5Y+v6KeB55qE44CCXG4gKlxuICog5L2g5Y+v5Lul5oOz6LGh5YaF6YOo5pON5L2c5aaC5LiLOlxuICpcbiAqIC8vIG51bXMg5piv5Lul4oCc5byV55So4oCd5pa55byP5Lyg6YCS55qE44CC5Lmf5bCx5piv6K+077yM5LiN5a+55a6e5Y+C5L2c5Lu75L2V5ou36LSdXG4gKiBpbnQgbGVuID0gcmVtb3ZlRWxlbWVudChudW1zLCB2YWwpO1xuICpcbiAqIC8vIOWcqOWHveaVsOmHjOS/ruaUuei+k+WFpeaVsOe7hOWvueS6juiwg+eUqOiAheaYr+WPr+ingeeahOOAglxuICogLy8g5qC55o2u5L2g55qE5Ye95pWw6L+U5Zue55qE6ZW/5bqmLCDlroPkvJrmiZPljbDlh7rmlbDnu4TkuK3or6Xplb/luqbojIPlm7TlhoXnmoTmiYDmnInlhYPntKDjgIJcbiAqIGZvciAoaW50IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAqIHByaW50KG51bXNbaV0pO1xuICogfVxuICpcbiAqXG4gKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgcmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSwgdmFsOiBudW1iZXIpIHtcbiAgY29uc3QgbGVuID0gbnVtcy5sZW5ndGg7XG4gIGxldCBpbmRleCA9IDA7XG4gIGZvciAobGV0IHBvaW50ZXIgPSAwOyBwb2ludGVyIDwgbGVuOyBwb2ludGVyKyspIHtcbiAgICBpZiAobnVtc1twb2ludGVyXSAhPT0gdmFsKSB7XG4gICAgICBudW1zW2luZGV4XSA9IG51bXNbcG9pbnRlcl07XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXg7XG59O1xuXG4vKlxuKiBbMCwxLDIsMiwzLDAsNCwyXVxuMlxuKlxuKiAqL1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmNvbnN0IGFyciA9IFswLCAxLCAyLCAyLCAzLCAwLCA0LCAyXTtcbmFyci5sZW5ndGggPSByZW1vdmVFbGVtZW50KGFyciwgMik7XG5jb25zb2xlLmxvZyhhcnIpO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChhcnIsIFswLCAxLCAzLCAwLCA0XSk7XG4iXX0=