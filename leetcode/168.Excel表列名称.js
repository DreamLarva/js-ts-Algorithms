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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY4LkV4Y2Vs6KGo5YiX5ZCN56ewLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNjguRXhjZWzooajliJflkI3np7AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBUztJQUNwQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFaEIsV0FBVztJQUNYLEdBQUc7UUFDQywwQkFBMEI7UUFDMUIsQ0FBQyxFQUFFLENBQUM7UUFDSixNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNuRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNoQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quato+aVtOaVsO+8jOi/lOWbnuWug+WcqCBFeGNlbCDooajkuK3nm7jlr7nlupTnmoTliJflkI3np7DjgIJcblxu5L6L5aaC77yMXG5cbiAgICAxIC0+IEFcbiAgICAyIC0+IEJcbiAgICAzIC0+IENcbiAgICAuLi5cbiAgICAyNiAtPiBaXG4gICAgMjcgLT4gQUFcbiAgICAyOCAtPiBBQlxuICAgIC4uLlxu56S65L6LIDE6XG5cbui+k+WFpTogMVxu6L6T5Ye6OiBcIkFcIlxu56S65L6LIDI6XG5cbui+k+WFpTogMjhcbui+k+WHujogXCJBQlwiXG7npLrkvosgMzpcblxu6L6T5YWlOiA3MDFcbui+k+WHujogXCJaWVwiXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGNvbnZlcnRUb1RpdGxlID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuXG4gICAgLy8g55u45b2T5LqOIDI36L+b5Yi2XG4gICAgZG8ge1xuICAgICAgICAvLyDov5nph4wg5Y+W5qihIOWmguaenOS4uiAwIOWImeaYryBaOyAxIOaYryBhXG4gICAgICAgIG4tLTtcbiAgICAgICAgcmVzdWx0ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIG4gJSAyNikgKyByZXN1bHQ7XG4gICAgICAgIG4gPSB+fihuIC8gMjYpO1xuICAgIH0gd2hpbGUgKG4gPiAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjb252ZXJ0VG9UaXRsZSgyNyksIFwiQUFcIik7XG4iXX0=