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
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjYu5Yqg5LiALmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82Ni7liqDkuIAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0g7OztHQUdHO0FBQ0gsSUFBSSxPQUFPLEdBQUcsVUFBVSxNQUFnQjtJQUN0QyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0I7U0FBTTtRQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ2xDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDbkIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU0sSUFBSSxXQUFXLEVBQUU7WUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWixXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE1BQU07U0FDUDthQUFNO1lBQ0wsTUFBTTtTQUNQO0tBQ0Y7SUFFRCxJQUFJLFdBQVcsRUFBRTtRQUNmLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD02NiBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbNjZdIOWKoOS4gFxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3BsdXMtb25lL2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDM3LjcxJSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICA0MC40S1xuICogVG90YWwgU3VibWlzc2lvbnM6IDEwNy4yS1xuICogVGVzdGNhc2UgRXhhbXBsZTogICdbMSwyLDNdJ1xuICpcbiAqIOe7meWumuS4gOS4queUseaVtOaVsOe7hOaIkOeahOmdnuepuuaVsOe7hOaJgOihqOekuueahOmdnui0n+aVtOaVsO+8jOWcqOivpeaVsOeahOWfuuehgOS4iuWKoOS4gOOAglxuICpcbiAqIOacgOmrmOS9jeaVsOWtl+WtmOaUvuWcqOaVsOe7hOeahOmmluS9je+8jCDmlbDnu4TkuK3mr4/kuKrlhYPntKDlj6rlrZjlgqjkuIDkuKrmlbDlrZfjgIJcbiAqXG4gKiDkvaDlj6/ku6XlgYforr7pmaTkuobmlbTmlbAgMCDkuYvlpJbvvIzov5nkuKrmlbTmlbDkuI3kvJrku6Xpm7blvIDlpLTjgIJcbiAqXG4gKiDnpLrkvosgMTpcbiAqXG4gKiDovpPlhaU6IFsxLDIsM11cbiAqIOi+k+WHujogWzEsMiw0XVxuICog6Kej6YeKOiDovpPlhaXmlbDnu4TooajnpLrmlbDlrZcgMTIz44CCXG4gKlxuICpcbiAqIOekuuS+iyAyOlxuICpcbiAqIOi+k+WFpTogWzQsMywyLDFdXG4gKiDovpPlh7o6IFs0LDMsMiwyXVxuICog6Kej6YeKOiDovpPlhaXmlbDnu4TooajnpLrmlbDlrZcgNDMyMeOAglxuICpcbiAqXG4gKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gZGlnaXRzXG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAqL1xudmFyIHBsdXNPbmUgPSBmdW5jdGlvbiAoZGlnaXRzOiBudW1iZXJbXSkge1xuICBsZXQgaXNDYXJyeU92ZXIgPSBmYWxzZTtcbiAgaWYgKGRpZ2l0c1tkaWdpdHMubGVuZ3RoIC0gMV0gPT09IDkpIHtcbiAgICBpc0NhcnJ5T3ZlciA9IHRydWU7XG4gICAgZGlnaXRzW2RpZ2l0cy5sZW5ndGggLSAxXSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgZGlnaXRzW2RpZ2l0cy5sZW5ndGggLSAxXSsrO1xuICAgIHJldHVybiBkaWdpdHM7XG4gIH1cblxuICBmb3IgKGxldCBpID0gZGlnaXRzLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGRpZ2l0c1tpXSA9PT0gOSAmJiBpc0NhcnJ5T3Zlcikge1xuICAgICAgaXNDYXJyeU92ZXIgPSB0cnVlO1xuICAgICAgZGlnaXRzW2ldID0gMDtcbiAgICB9IGVsc2UgaWYgKGlzQ2FycnlPdmVyKSB7XG4gICAgICBkaWdpdHNbaV0rKztcbiAgICAgIGlzQ2FycnlPdmVyID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQ2FycnlPdmVyKSB7XG4gICAgZGlnaXRzLnVuc2hpZnQoMSk7XG4gIH1cblxuICByZXR1cm4gZGlnaXRzO1xufTtcblxuZXhwb3J0IHt9O1xuIl19