"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (37.71%)
 * Total Accepted:    40.4K
 * Total Submissions: 107.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let isCarryOver = false;
    if (digits[digits.length - 1] === 9) {
        isCarryOver = true;
        digits[digits.length - 1] = 0;
    }
    else {
        digits[digits.length - 1]++;
        return digits;
    }
    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] === 9 && isCarryOver) {
            isCarryOver = true;
            digits[i] = 0;
        }
        else if (isCarryOver) {
            digits[i]++;
            isCarryOver = false;
            break;
        }
        else {
            break;
        }
    }
    if (isCarryOver) {
        digits.unshift(1);
    }
    return digits;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjYu5Yqg5LiALmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82Ni7liqDkuIAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0g7OztHQUdHO0FBQ0gsSUFBSSxPQUFPLEdBQUcsVUFBVSxNQUFnQjtJQUNwQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakM7U0FBTTtRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTSxJQUFJLFdBQVcsRUFBRTtZQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNaLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIsTUFBTTtTQUNUO2FBQU07WUFDSCxNQUFNO1NBQ1Q7S0FDSjtJQUVELElBQUksV0FBVyxFQUFFO1FBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTY2IGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFs2Nl0g5Yqg5LiAXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcGx1cy1vbmUvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoMzcuNzElKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDQwLjRLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogMTA3LjJLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1sxLDIsM10nXG4gKlxuICog57uZ5a6a5LiA5Liq55Sx5pW05pWw57uE5oiQ55qE6Z2e56m65pWw57uE5omA6KGo56S655qE6Z2e6LSf5pW05pWw77yM5Zyo6K+l5pWw55qE5Z+656GA5LiK5Yqg5LiA44CCXG4gKlxuICog5pyA6auY5L2N5pWw5a2X5a2Y5pS+5Zyo5pWw57uE55qE6aaW5L2N77yMIOaVsOe7hOS4reavj+S4quWFg+e0oOWPquWtmOWCqOS4gOS4quaVsOWtl+OAglxuICpcbiAqIOS9oOWPr+S7peWBh+iuvumZpOS6huaVtOaVsCAwIOS5i+Wklu+8jOi/meS4quaVtOaVsOS4jeS8muS7pembtuW8gOWktOOAglxuICpcbiAqIOekuuS+i8KgMTpcbiAqXG4gKiDovpPlhaU6IFsxLDIsM11cbiAqIOi+k+WHujogWzEsMiw0XVxuICog6Kej6YeKOiDovpPlhaXmlbDnu4TooajnpLrmlbDlrZcgMTIz44CCXG4gKlxuICpcbiAqIOekuuS+i8KgMjpcbiAqXG4gKiDovpPlhaU6IFs0LDMsMiwxXVxuICog6L6T5Ye6OiBbNCwzLDIsMl1cbiAqIOino+mHijog6L6T5YWl5pWw57uE6KGo56S65pWw5a2XIDQzMjHjgIJcbiAqXG4gKlxuICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IGRpZ2l0c1xuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciBwbHVzT25lID0gZnVuY3Rpb24gKGRpZ2l0czogbnVtYmVyW10pIHtcbiAgICBsZXQgaXNDYXJyeU92ZXIgPSBmYWxzZTtcbiAgICBpZiAoZGlnaXRzW2RpZ2l0cy5sZW5ndGggLSAxXSA9PT0gOSkge1xuICAgICAgICBpc0NhcnJ5T3ZlciA9IHRydWU7XG4gICAgICAgIGRpZ2l0c1tkaWdpdHMubGVuZ3RoIC0gMV0gPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpZ2l0c1tkaWdpdHMubGVuZ3RoIC0gMV0rKztcbiAgICAgICAgcmV0dXJuIGRpZ2l0cztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gZGlnaXRzLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChkaWdpdHNbaV0gPT09IDkgJiYgaXNDYXJyeU92ZXIpIHtcbiAgICAgICAgICAgIGlzQ2FycnlPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpZ2l0c1tpXSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNDYXJyeU92ZXIpIHtcbiAgICAgICAgICAgIGRpZ2l0c1tpXSsrO1xuICAgICAgICAgICAgaXNDYXJyeU92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNDYXJyeU92ZXIpIHtcbiAgICAgICAgZGlnaXRzLnVuc2hpZnQoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZ2l0cztcbn07XG5cbmV4cG9ydCB7fVxuIl19