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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTY3LuS4pOaVsOS5i+WSjElJLei+k+WFpeacieW6j+aVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsT0FBaUIsRUFBRSxNQUFjO0lBQ3BEOzs7Ozs7U0FNSztJQUNMLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDOUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUN6QyxLQUFLLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDSCxJQUFJLEVBQUUsQ0FBQztTQUNWO0tBQ0o7SUFDRCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5bey5oyJ54Wn5Y2H5bqP5o6S5YiXIOeahOacieW6j+aVsOe7hO+8jOaJvuWIsOS4pOS4quaVsOS9v+W+l+Wug+S7rOebuOWKoOS5i+WSjOetieS6juebruagh+aVsOOAglxyXG5cclxu5Ye95pWw5bqU6K+l6L+U5Zue6L+Z5Lik5Liq5LiL5qCH5YC8IGluZGV4MSDlkowgaW5kZXgy77yM5YW25LitIGluZGV4MSDlv4XpobvlsI/kuo4gaW5kZXgy44CCXHJcblxyXG7or7TmmI46XHJcblxyXG7ov5Tlm57nmoTkuIvmoIflgLzvvIhpbmRleDEg5ZKMIGluZGV4Mu+8ieS4jeaYr+S7jumbtuW8gOWni+eahOOAglxyXG7kvaDlj6/ku6XlgYforr7mr4/kuKrovpPlhaXlj6rlr7nlupTllK/kuIDnmoTnrZTmoYjvvIzogIzkuJTkvaDkuI3lj6/ku6Xph43lpI3kvb/nlKjnm7jlkIznmoTlhYPntKDjgIJcclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiBudW1iZXJzID0gWzIsIDcsIDExLCAxNV0sIHRhcmdldCA9IDlcclxu6L6T5Ye6OiBbMSwyXVxyXG7op6Pph4o6IDIg5LiOIDcg5LmL5ZKM562J5LqO55uu5qCH5pWwIDkg44CC5Zug5q2kIGluZGV4MSA9IDEsIGluZGV4MiA9IDIg44CCXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1iZXJzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXRcclxuICogQHJldHVybiB7bnVtYmVyW119XHJcbiAqL1xyXG52YXIgdHdvU3VtID0gZnVuY3Rpb24gKG51bWJlcnM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHkuo7mmK8g5o6S5bqP5ZCO55qE5pWw5o2uXHJcbiAgICAgKiDkvb/nlKgg6aaW5bC+5oyH6ZKIXHJcbiAgICAgKiDlpoLmnpwg55uu5qCH5YC8IOW3puWPs+aMh+mSiOeahOWAvOebuOWKoCA+IOebruagh+WAvCDlj7PmjIfpkojlt6bnp7tcclxuICAgICAqIOWmguaenCDnm67moIflgLwg5bem5Y+z5oyH6ZKI55qE5YC855u45YqgIDwg55uu5qCH5YC8IOW3puaMh+mSiOWPs+enu1xyXG4gICAgICog5Lik5oyH6ZKI55u45LyaIOS4jeiDvVxyXG4gICAgICogKi9cclxuICAgIGxldCBsZWZ0ID0gMDtcclxuICAgIGxldCByaWdodCA9IG51bWJlcnMubGVuZ3RoIC0gMTtcclxuICAgIHdoaWxlIChudW1iZXJzW2xlZnRdICsgbnVtYmVyc1tyaWdodF0gIT09IHRhcmdldCkge1xyXG4gICAgICAgIGlmIChudW1iZXJzW2xlZnRdICsgbnVtYmVyc1tyaWdodF0gPiB0YXJnZXQpIHtcclxuICAgICAgICAgICAgcmlnaHQtLTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtsZWZ0ICsgMSwgcmlnaHQgKyAxXTtcclxufTtcclxuXHJcbmV4cG9ydCB7fTtcclxuIl19