"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // 首尾指针
    const string_arr = s.split("");
    let left = 0;
    let right = string_arr.length - 1;
    const dictionary = ['a', "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    while (left < right) {
        if (!dictionary.includes(string_arr[left])) {
            left++;
            continue;
        }
        if (!dictionary.includes(string_arr[right])) {
            right--;
            continue;
        }
        [string_arr[right], string_arr[left]] = [string_arr[left], string_arr[right]];
        left++;
        right--;
    }
    return string_arr.join("");
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseVowels("hello"), "holle");
assert_1.default.strictEqual(reverseVowels("leetcode"), "leotcede");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ1LuWPjei9rOWtl+espuS4suS4reeahOWFg+mfs+Wtl+avjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ1LuWPjei9rOWtl+espuS4suS4reeahOWFg+mfs+Wtl+avjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDbkMsT0FBTztJQUNQLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RSxPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTO1NBQ1o7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN6QyxLQUFLLEVBQUUsQ0FBQztZQUNSLFNBQVM7U0FDWjtRQUNELENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUdELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM5QixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUN0QixPQUFPLENBQ1YsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFDekIsVUFBVSxDQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nvJblhpnkuIDkuKrlh73mlbDvvIzku6XlrZfnrKbkuLLkvZzkuLrovpPlhaXvvIzlj43ovazor6XlrZfnrKbkuLLkuK3nmoTlhYPpn7PlrZfmr43jgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBcImhlbGxvXCJcclxu6L6T5Ye6OiBcImhvbGxlXCJcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFwibGVldGNvZGVcIlxyXG7ovpPlh7o6IFwibGVvdGNlZGVcIlxyXG7or7TmmI46XHJcbuWFg+mfs+Wtl+avjeS4jeWMheWQq+Wtl+avjVwieVwi44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbnZhciByZXZlcnNlVm93ZWxzID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gICAgLy8g6aaW5bC+5oyH6ZKIXHJcbiAgICBjb25zdCBzdHJpbmdfYXJyID0gcy5zcGxpdChcIlwiKTtcclxuICAgIGxldCBsZWZ0ID0gMDtcclxuICAgIGxldCByaWdodCA9IHN0cmluZ19hcnIubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBbJ2EnLCBcIkFcIiwgXCJlXCIsIFwiRVwiLCBcImlcIiwgXCJJXCIsIFwib1wiLCBcIk9cIiwgXCJ1XCIsIFwiVVwiXTtcclxuICAgIHdoaWxlIChsZWZ0IDwgcmlnaHQpIHtcclxuICAgICAgICBpZiAoIWRpY3Rpb25hcnkuaW5jbHVkZXMoc3RyaW5nX2FycltsZWZ0XSkpIHtcclxuICAgICAgICAgICAgbGVmdCsrO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkaWN0aW9uYXJ5LmluY2x1ZGVzKHN0cmluZ19hcnJbcmlnaHRdKSkge1xyXG4gICAgICAgICAgICByaWdodC0tO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgW3N0cmluZ19hcnJbcmlnaHRdLCBzdHJpbmdfYXJyW2xlZnRdXSA9IFtzdHJpbmdfYXJyW2xlZnRdLCBzdHJpbmdfYXJyW3JpZ2h0XV07XHJcbiAgICAgICAgbGVmdCsrO1xyXG4gICAgICAgIHJpZ2h0LS07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBzdHJpbmdfYXJyLmpvaW4oXCJcIilcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgcmV2ZXJzZVZvd2VscyhcImhlbGxvXCIpLFxyXG4gICAgXCJob2xsZVwiXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIHJldmVyc2VWb3dlbHMoXCJsZWV0Y29kZVwiKSxcclxuICAgIFwibGVvdGNlZGVcIlxyXG4pO1xyXG4iXX0=