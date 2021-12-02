"use strict";
/*
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  /**
   * 由于是 排序后的数据
   * 使用 首尾指针
   * 如果 目标值 左右指针的值相加 > 目标值 右指针左移
   * 如果 目标值 左右指针的值相加 < 目标值 左指针右移
   * 两指针相会 不能
   * */
  let left = 0;
  let right = numbers.length - 1;
  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return [left + 1, right + 1];
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [1, 2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsT0FBaUIsRUFBRSxNQUFjO0lBQ3REOzs7Ozs7U0FNSztJQUNMLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDaEQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUMzQyxLQUFLLEVBQUUsQ0FBQztTQUNUO2FBQU07WUFDTCxJQUFJLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7SUFDRCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5bey5oyJ54Wn5Y2H5bqP5o6S5YiXIOeahOacieW6j+aVsOe7hO+8jOaJvuWIsOS4pOS4quaVsOS9v+W+l+Wug+S7rOebuOWKoOS5i+WSjOetieS6juebruagh+aVsOOAglxuXG7lh73mlbDlupTor6Xov5Tlm57ov5nkuKTkuKrkuIvmoIflgLwgaW5kZXgxIOWSjCBpbmRleDLvvIzlhbbkuK0gaW5kZXgxIOW/hemhu+Wwj+S6jiBpbmRleDLjgIJcblxu6K+05piOOlxuXG7ov5Tlm57nmoTkuIvmoIflgLzvvIhpbmRleDEg5ZKMIGluZGV4Mu+8ieS4jeaYr+S7jumbtuW8gOWni+eahOOAglxu5L2g5Y+v5Lul5YGH6K6+5q+P5Liq6L6T5YWl5Y+q5a+55bqU5ZSv5LiA55qE562U5qGI77yM6ICM5LiU5L2g5LiN5Y+v5Lul6YeN5aSN5L2/55So55u45ZCM55qE5YWD57Sg44CCXG7npLrkvos6XG5cbui+k+WFpTogbnVtYmVycyA9IFsyLCA3LCAxMSwgMTVdLCB0YXJnZXQgPSA5XG7ovpPlh7o6IFsxLDJdXG7op6Pph4o6IDIg5LiOIDcg5LmL5ZKM562J5LqO55uu5qCH5pWwIDkg44CC5Zug5q2kIGluZGV4MSA9IDEsIGluZGV4MiA9IDIg44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtYmVyc1xuICogQHBhcmFtIHtudW1iZXJ9IHRhcmdldFxuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciB0d29TdW0gPSBmdW5jdGlvbiAobnVtYmVyczogbnVtYmVyW10sIHRhcmdldDogbnVtYmVyKSB7XG4gIC8qKlxuICAgKiDnlLHkuo7mmK8g5o6S5bqP5ZCO55qE5pWw5o2uXG4gICAqIOS9v+eUqCDpppblsL7mjIfpkohcbiAgICog5aaC5p6cIOebruagh+WAvCDlt6blj7PmjIfpkojnmoTlgLznm7jliqAgPiDnm67moIflgLwg5Y+z5oyH6ZKI5bem56e7XG4gICAqIOWmguaenCDnm67moIflgLwg5bem5Y+z5oyH6ZKI55qE5YC855u45YqgIDwg55uu5qCH5YC8IOW3puaMh+mSiOWPs+enu1xuICAgKiDkuKTmjIfpkojnm7jkvJog5LiN6IO9XG4gICAqICovXG4gIGxldCBsZWZ0ID0gMDtcbiAgbGV0IHJpZ2h0ID0gbnVtYmVycy5sZW5ndGggLSAxO1xuICB3aGlsZSAobnVtYmVyc1tsZWZ0XSArIG51bWJlcnNbcmlnaHRdICE9PSB0YXJnZXQpIHtcbiAgICBpZiAobnVtYmVyc1tsZWZ0XSArIG51bWJlcnNbcmlnaHRdID4gdGFyZ2V0KSB7XG4gICAgICByaWdodC0tO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0Kys7XG4gICAgfVxuICB9XG4gIHJldHVybiBbbGVmdCArIDEsIHJpZ2h0ICsgMV07XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0d29TdW0oWzIsIDcsIDExLCAxNV0sIDkpLCBbMSwgMl0pO1xuIl19
