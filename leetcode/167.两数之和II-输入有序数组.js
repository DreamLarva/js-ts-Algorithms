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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsT0FBaUIsRUFBRSxNQUFjO0lBQ3BEOzs7Ozs7U0FNSztJQUNMLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDOUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUN6QyxLQUFLLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDSCxJQUFJLEVBQUUsQ0FBQztTQUNWO0tBQ0o7SUFDRCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quW3suaMieeFp+WNh+W6j+aOkuWIlyDnmoTmnInluo/mlbDnu4TvvIzmib7liLDkuKTkuKrmlbDkvb/lvpflroPku6znm7jliqDkuYvlkoznrYnkuo7nm67moIfmlbDjgIJcblxu5Ye95pWw5bqU6K+l6L+U5Zue6L+Z5Lik5Liq5LiL5qCH5YC8IGluZGV4MSDlkowgaW5kZXgy77yM5YW25LitIGluZGV4MSDlv4XpobvlsI/kuo4gaW5kZXgy44CCXG5cbuivtOaYjjpcblxu6L+U5Zue55qE5LiL5qCH5YC877yIaW5kZXgxIOWSjCBpbmRleDLvvInkuI3mmK/ku47pm7blvIDlp4vnmoTjgIJcbuS9oOWPr+S7peWBh+iuvuavj+S4qui+k+WFpeWPquWvueW6lOWUr+S4gOeahOetlOahiO+8jOiAjOS4lOS9oOS4jeWPr+S7pemHjeWkjeS9v+eUqOebuOWQjOeahOWFg+e0oOOAglxu56S65L6LOlxuXG7ovpPlhaU6IG51bWJlcnMgPSBbMiwgNywgMTEsIDE1XSwgdGFyZ2V0ID0gOVxu6L6T5Ye6OiBbMSwyXVxu6Kej6YeKOiAyIOS4jiA3IOS5i+WSjOetieS6juebruagh+aVsCA5IOOAguWboOatpCBpbmRleDEgPSAxLCBpbmRleDIgPSAyIOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bWJlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXRcbiAqIEByZXR1cm4ge251bWJlcltdfVxuICovXG52YXIgdHdvU3VtID0gZnVuY3Rpb24gKG51bWJlcnM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xuICAgIC8qKlxuICAgICAqIOeUseS6juaYryDmjpLluo/lkI7nmoTmlbDmja5cbiAgICAgKiDkvb/nlKgg6aaW5bC+5oyH6ZKIXG4gICAgICog5aaC5p6cIOebruagh+WAvCDlt6blj7PmjIfpkojnmoTlgLznm7jliqAgPiDnm67moIflgLwg5Y+z5oyH6ZKI5bem56e7XG4gICAgICog5aaC5p6cIOebruagh+WAvCDlt6blj7PmjIfpkojnmoTlgLznm7jliqAgPCDnm67moIflgLwg5bem5oyH6ZKI5Y+z56e7XG4gICAgICog5Lik5oyH6ZKI55u45LyaIOS4jeiDvVxuICAgICAqICovXG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCByaWdodCA9IG51bWJlcnMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAobnVtYmVyc1tsZWZ0XSArIG51bWJlcnNbcmlnaHRdICE9PSB0YXJnZXQpIHtcbiAgICAgICAgaWYgKG51bWJlcnNbbGVmdF0gKyBudW1iZXJzW3JpZ2h0XSA+IHRhcmdldCkge1xuICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2xlZnQgKyAxLCByaWdodCArIDFdO1xufTtcblxuZXhwb3J0IHt9O1xuIl19