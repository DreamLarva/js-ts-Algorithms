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
        result = String.fromCharCode(65 + (n % 26)) + result;
        n = ~~(n / 26);
    } while (n > 0);
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(convertToTitle(27), "AA");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY4LkV4Y2Vs6KGo5YiX5ZCN56ewLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNjguRXhjZWzooajliJflkI3np7AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBUztJQUN0QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFaEIsV0FBVztJQUNYLEdBQUc7UUFDRCwwQkFBMEI7UUFDMUIsQ0FBQyxFQUFFLENBQUM7UUFDSixNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNoQixRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDaEIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmraPmlbTmlbDvvIzov5Tlm57lroPlnKggRXhjZWwg6KGo5Lit55u45a+55bqU55qE5YiX5ZCN56ew44CCXG5cbuS+i+Wmgu+8jFxuXG4gICAgMSAtPiBBXG4gICAgMiAtPiBCXG4gICAgMyAtPiBDXG4gICAgLi4uXG4gICAgMjYgLT4gWlxuICAgIDI3IC0+IEFBXG4gICAgMjggLT4gQUJcbiAgICAuLi5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IDFcbui+k+WHujogXCJBXCJcbuekuuS+iyAyOlxuXG7ovpPlhaU6IDI4XG7ovpPlh7o6IFwiQUJcIlxu56S65L6LIDM6XG5cbui+k+WFpTogNzAxXG7ovpPlh7o6IFwiWllcIlxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBjb252ZXJ0VG9UaXRsZSA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgLy8g55u45b2T5LqOIDI36L+b5Yi2XG4gIGRvIHtcbiAgICAvLyDov5nph4wg5Y+W5qihIOWmguaenOS4uiAwIOWImeaYryBaOyAxIOaYryBhXG4gICAgbi0tO1xuICAgIHJlc3VsdCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyAobiAlIDI2KSkgKyByZXN1bHQ7XG4gICAgbiA9IH5+KG4gLyAyNik7XG4gIH0gd2hpbGUgKG4gPiAwKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY29udmVydFRvVGl0bGUoMjcpLCBcIkFBXCIpO1xuIl19