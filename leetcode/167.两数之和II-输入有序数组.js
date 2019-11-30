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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
        }
        else {
            left++;
        }
    }
    return [left + 1, right + 1];
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [1, 2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsT0FBaUIsRUFBRSxNQUFjO0lBQ3BEOzs7Ozs7U0FNSztJQUNMLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDOUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUN6QyxLQUFLLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDSCxJQUFJLEVBQUUsQ0FBQztTQUNWO0tBQ0o7SUFDRCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrlt7LmjInnhafljYfluo/mjpLliJcg55qE5pyJ5bqP5pWw57uE77yM5om+5Yiw5Lik5Liq5pWw5L2/5b6X5a6D5Lus55u45Yqg5LmL5ZKM562J5LqO55uu5qCH5pWw44CCXG5cbuWHveaVsOW6lOivpei/lOWbnui/meS4pOS4quS4i+agh+WAvCBpbmRleDEg5ZKMIGluZGV4Mu+8jOWFtuS4rSBpbmRleDEg5b+F6aG75bCP5LqOIGluZGV4MuOAglxuXG7or7TmmI46XG5cbui/lOWbnueahOS4i+agh+WAvO+8iGluZGV4MSDlkowgaW5kZXgy77yJ5LiN5piv5LuO6Zu25byA5aeL55qE44CCXG7kvaDlj6/ku6XlgYforr7mr4/kuKrovpPlhaXlj6rlr7nlupTllK/kuIDnmoTnrZTmoYjvvIzogIzkuJTkvaDkuI3lj6/ku6Xph43lpI3kvb/nlKjnm7jlkIznmoTlhYPntKDjgIJcbuekuuS+izpcblxu6L6T5YWlOiBudW1iZXJzID0gWzIsIDcsIDExLCAxNV0sIHRhcmdldCA9IDlcbui+k+WHujogWzEsMl1cbuino+mHijogMiDkuI4gNyDkuYvlkoznrYnkuo7nm67moIfmlbAgOSDjgILlm6DmraQgaW5kZXgxID0gMSwgaW5kZXgyID0gMiDjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1iZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAqL1xudmFyIHR3b1N1bSA9IGZ1bmN0aW9uIChudW1iZXJzOiBudW1iZXJbXSwgdGFyZ2V0OiBudW1iZXIpIHtcbiAgICAvKipcbiAgICAgKiDnlLHkuo7mmK8g5o6S5bqP5ZCO55qE5pWw5o2uXG4gICAgICog5L2/55SoIOmmluWwvuaMh+mSiFxuICAgICAqIOWmguaenCDnm67moIflgLwg5bem5Y+z5oyH6ZKI55qE5YC855u45YqgID4g55uu5qCH5YC8IOWPs+aMh+mSiOW3puenu1xuICAgICAqIOWmguaenCDnm67moIflgLwg5bem5Y+z5oyH6ZKI55qE5YC855u45YqgIDwg55uu5qCH5YC8IOW3puaMh+mSiOWPs+enu1xuICAgICAqIOS4pOaMh+mSiOebuOS8miDkuI3og71cbiAgICAgKiAqL1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgcmlnaHQgPSBudW1iZXJzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKG51bWJlcnNbbGVmdF0gKyBudW1iZXJzW3JpZ2h0XSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIGlmIChudW1iZXJzW2xlZnRdICsgbnVtYmVyc1tyaWdodF0gPiB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtsZWZ0ICsgMSwgcmlnaHQgKyAxXTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICB0d29TdW0oWzIsIDcsIDExLCAxNV0sIDkpLFxuICAgIFsxLCAyXSxcbik7XG4iXX0=