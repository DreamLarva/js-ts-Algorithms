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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsT0FBaUIsRUFBRSxNQUFjO0lBQ3BEOzs7Ozs7U0FNSztJQUNMLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDOUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUN6QyxLQUFLLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDSCxJQUFJLEVBQUUsQ0FBQztTQUNWO0tBQ0o7SUFDRCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quW3suaMieeFp+WNh+W6j+aOkuWIlyDnmoTmnInluo/mlbDnu4TvvIzmib7liLDkuKTkuKrmlbDkvb/lvpflroPku6znm7jliqDkuYvlkoznrYnkuo7nm67moIfmlbDjgIJcclxuXHJcbuWHveaVsOW6lOivpei/lOWbnui/meS4pOS4quS4i+agh+WAvCBpbmRleDEg5ZKMIGluZGV4Mu+8jOWFtuS4rSBpbmRleDEg5b+F6aG75bCP5LqOIGluZGV4MuOAglxyXG5cclxu6K+05piOOlxyXG5cclxu6L+U5Zue55qE5LiL5qCH5YC877yIaW5kZXgxIOWSjCBpbmRleDLvvInkuI3mmK/ku47pm7blvIDlp4vnmoTjgIJcclxu5L2g5Y+v5Lul5YGH6K6+5q+P5Liq6L6T5YWl5Y+q5a+55bqU5ZSv5LiA55qE562U5qGI77yM6ICM5LiU5L2g5LiN5Y+v5Lul6YeN5aSN5L2/55So55u45ZCM55qE5YWD57Sg44CCXHJcbuekuuS+izpcclxuXHJcbui+k+WFpTogbnVtYmVycyA9IFsyLCA3LCAxMSwgMTVdLCB0YXJnZXQgPSA5XHJcbui+k+WHujogWzEsMl1cclxu6Kej6YeKOiAyIOS4jiA3IOS5i+WSjOetieS6juebruagh+aVsCA5IOOAguWboOatpCBpbmRleDEgPSAxLCBpbmRleDIgPSAyIOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtYmVyc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XHJcbiAqIEByZXR1cm4ge251bWJlcltdfVxyXG4gKi9cclxudmFyIHR3b1N1bSA9IGZ1bmN0aW9uIChudW1iZXJzOiBudW1iZXJbXSwgdGFyZ2V0OiBudW1iZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICog55Sx5LqO5pivIOaOkuW6j+WQjueahOaVsOaNrlxyXG4gICAgICog5L2/55SoIOmmluWwvuaMh+mSiFxyXG4gICAgICog5aaC5p6cIOebruagh+WAvCDlt6blj7PmjIfpkojnmoTlgLznm7jliqAgPiDnm67moIflgLwg5Y+z5oyH6ZKI5bem56e7XHJcbiAgICAgKiDlpoLmnpwg55uu5qCH5YC8IOW3puWPs+aMh+mSiOeahOWAvOebuOWKoCA8IOebruagh+WAvCDlt6bmjIfpkojlj7Pnp7tcclxuICAgICAqIOS4pOaMh+mSiOebuOS8miDkuI3og71cclxuICAgICAqICovXHJcbiAgICBsZXQgbGVmdCA9IDA7XHJcbiAgICBsZXQgcmlnaHQgPSBudW1iZXJzLmxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAobnVtYmVyc1tsZWZ0XSArIG51bWJlcnNbcmlnaHRdICE9PSB0YXJnZXQpIHtcclxuICAgICAgICBpZiAobnVtYmVyc1tsZWZ0XSArIG51bWJlcnNbcmlnaHRdID4gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJpZ2h0LS07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGVmdCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbbGVmdCArIDEsIHJpZ2h0ICsgMV07XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgdHdvU3VtKFsyLCA3LCAxMSwgMTVdLCA5KSxcclxuICAgIFsxLCAyXSxcclxuKTtcclxuIl19