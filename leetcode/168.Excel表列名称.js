"use strict";
/*
给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
示例 1:

输入: 1
输出: "A"
示例 2:

输入: 28
输出: "AB"
示例 3:

输入: 701
输出: "ZY"
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let result = "";
    // 相当于 27进制
    do {
        // 这里 取模 如果为 0 则是 Z; 1 是 a
        n--;
        result = String.fromCharCode(65 + n % 26) + result;
        n = ~~(n / 26);
    } while (n > 0);
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(convertToTitle(27), "AA");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY4LkV4Y2Vs6KGo5YiX5ZCN56ewLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNjguRXhjZWzooajliJflkI3np7AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBUztJQUNwQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFaEIsV0FBVztJQUNYLEdBQUc7UUFDQywwQkFBMEI7UUFDMUIsQ0FBQyxFQUFFLENBQUM7UUFDSixNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNuRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNoQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5q2j5pW05pWw77yM6L+U5Zue5a6D5ZyoIEV4Y2VsIOihqOS4reebuOWvueW6lOeahOWIl+WQjeensOOAglxyXG5cclxu5L6L5aaC77yMXHJcblxyXG4gICAgMSAtPiBBXHJcbiAgICAyIC0+IEJcclxuICAgIDMgLT4gQ1xyXG4gICAgLi4uXHJcbiAgICAyNiAtPiBaXHJcbiAgICAyNyAtPiBBQVxyXG4gICAgMjggLT4gQUJcclxuICAgIC4uLlxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogMVxyXG7ovpPlh7o6IFwiQVwiXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiAyOFxyXG7ovpPlh7o6IFwiQUJcIlxyXG7npLrkvosgMzpcclxuXHJcbui+k+WFpTogNzAxXHJcbui+k+WHujogXCJaWVwiXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gblxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgY29udmVydFRvVGl0bGUgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHJcbiAgICAvLyDnm7jlvZPkuo4gMjfov5vliLZcclxuICAgIGRvIHtcclxuICAgICAgICAvLyDov5nph4wg5Y+W5qihIOWmguaenOS4uiAwIOWImeaYryBaOyAxIOaYryBhXHJcbiAgICAgICAgbi0tO1xyXG4gICAgICAgIHJlc3VsdCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBuICUgMjYpICsgcmVzdWx0O1xyXG4gICAgICAgIG4gPSB+fihuIC8gMjYpO1xyXG4gICAgfSB3aGlsZSAobiA+IDApO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNvbnZlcnRUb1RpdGxlKDI3KSwgXCJBQVwiKTtcclxuIl19