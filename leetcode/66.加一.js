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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjYu5Yqg5LiALmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82Ni7liqDkuIAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0g7OztHQUdHO0FBQ0gsSUFBSSxPQUFPLEdBQUcsVUFBVSxNQUFnQjtJQUNwQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakM7U0FBTTtRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTSxJQUFJLFdBQVcsRUFBRTtZQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNaLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIsTUFBTTtTQUNUO2FBQU07WUFDSCxNQUFNO1NBQ1Q7S0FDSjtJQUVELElBQUksV0FBVyxFQUFFO1FBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9NjYgbGFuZz1qYXZhc2NyaXB0XHJcbiAqXHJcbiAqIFs2Nl0g5Yqg5LiAXHJcbiAqXHJcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3BsdXMtb25lL2Rlc2NyaXB0aW9uL1xyXG4gKlxyXG4gKiBhbGdvcml0aG1zXHJcbiAqIEVhc3kgKDM3LjcxJSlcclxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDQwLjRLXHJcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiAxMDcuMktcclxuICogVGVzdGNhc2UgRXhhbXBsZTogICdbMSwyLDNdJ1xyXG4gKlxyXG4gKiDnu5nlrprkuIDkuKrnlLHmlbTmlbDnu4TmiJDnmoTpnZ7nqbrmlbDnu4TmiYDooajnpLrnmoTpnZ7otJ/mlbTmlbDvvIzlnKjor6XmlbDnmoTln7rnoYDkuIrliqDkuIDjgIJcclxuICpcclxuICog5pyA6auY5L2N5pWw5a2X5a2Y5pS+5Zyo5pWw57uE55qE6aaW5L2N77yMIOaVsOe7hOS4reavj+S4quWFg+e0oOWPquWtmOWCqOS4gOS4quaVsOWtl+OAglxyXG4gKlxyXG4gKiDkvaDlj6/ku6XlgYforr7pmaTkuobmlbTmlbAgMCDkuYvlpJbvvIzov5nkuKrmlbTmlbDkuI3kvJrku6Xpm7blvIDlpLTjgIJcclxuICpcclxuICog56S65L6LwqAxOlxyXG4gKlxyXG4gKiDovpPlhaU6IFsxLDIsM11cclxuICog6L6T5Ye6OiBbMSwyLDRdXHJcbiAqIOino+mHijog6L6T5YWl5pWw57uE6KGo56S65pWw5a2XIDEyM+OAglxyXG4gKlxyXG4gKlxyXG4gKiDnpLrkvovCoDI6XHJcbiAqXHJcbiAqIOi+k+WFpTogWzQsMywyLDFdXHJcbiAqIOi+k+WHujogWzQsMywyLDJdXHJcbiAqIOino+mHijog6L6T5YWl5pWw57uE6KGo56S65pWw5a2XIDQzMjHjgIJcclxuICpcclxuICpcclxuICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBkaWdpdHNcclxuICogQHJldHVybiB7bnVtYmVyW119XHJcbiAqL1xyXG52YXIgcGx1c09uZSA9IGZ1bmN0aW9uIChkaWdpdHM6IG51bWJlcltdKSB7XHJcbiAgICBsZXQgaXNDYXJyeU92ZXIgPSBmYWxzZTtcclxuICAgIGlmIChkaWdpdHNbZGlnaXRzLmxlbmd0aCAtIDFdID09PSA5KSB7XHJcbiAgICAgICAgaXNDYXJyeU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIGRpZ2l0c1tkaWdpdHMubGVuZ3RoIC0gMV0gPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaWdpdHNbZGlnaXRzLmxlbmd0aCAtIDFdKys7XHJcbiAgICAgICAgcmV0dXJuIGRpZ2l0cztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gZGlnaXRzLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKGRpZ2l0c1tpXSA9PT0gOSAmJiBpc0NhcnJ5T3Zlcikge1xyXG4gICAgICAgICAgICBpc0NhcnJ5T3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIGRpZ2l0c1tpXSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0NhcnJ5T3Zlcikge1xyXG4gICAgICAgICAgICBkaWdpdHNbaV0rKztcclxuICAgICAgICAgICAgaXNDYXJyeU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0NhcnJ5T3Zlcikge1xyXG4gICAgICAgIGRpZ2l0cy51bnNoaWZ0KDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaWdpdHM7XHJcbn07XHJcblxyXG5leHBvcnQge31cclxuIl19