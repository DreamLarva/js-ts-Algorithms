"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一种 pattern(模式) 和一个字符串 str ，判断 str 是否遵循相同的模式。

这里的遵循指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应模式。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例 4:

输入: pattern = "abba", str = "dog dog dog dog"
输出: false
说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。
* */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    const str_arr = str.split(" ");
    if (str_arr.length !== pattern.length)
        return false;
    const pattern_arr = pattern.split("");
    // 用于映射 patter 和 str
    const map = {};
    // 用于 判断 有了映射了
    const set = new Set();
    for (let i = 0; i < pattern_arr.length; i++) {
        const current_char = pattern[i];
        if (map[current_char]) {
            if (map[current_char] !== str_arr[i])
                return false;
        }
        else {
            if (set.has(str_arr[i]))
                return false; // 重复映射
            map[current_char] = str_arr[i];
            set.add(str_arr[i]);
        }
    }
    return true;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(wordPattern("abba", "dog cat cat dog"), true);
assert_1.default.strictEqual(wordPattern("abba", "dog cat cat dop"), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkwLuWNleivjeaooeW8jy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjkwLuWNleivjeaooeW8jy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLE9BQWUsRUFBRSxHQUFXO0lBRXBELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDcEQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxvQkFBb0I7SUFDcEIsTUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztJQUMxQyxjQUFjO0lBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUN0RDthQUFNO1lBQ0gsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLE9BQU87WUFDOUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0tBR0o7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOenjSBwYXR0ZXJuKOaooeW8jykg5ZKM5LiA5Liq5a2X56ym5LiyIHN0ciDvvIzliKTmlq0gc3RyIOaYr+WQpumBteW+quebuOWQjOeahOaooeW8j+OAglxyXG5cclxu6L+Z6YeM55qE6YG15b6q5oyH5a6M5YWo5Yy56YWN77yM5L6L5aaC77yMIHBhdHRlcm4g6YeM55qE5q+P5Liq5a2X5q+N5ZKM5a2X56ym5LiyIHN0ciDkuK3nmoTmr4/kuKrpnZ7nqbrljZXor43kuYvpl7TlrZjlnKjnnYDlj4zlkJHov57mjqXnmoTlr7nlupTmqKHlvI/jgIJcclxuXHJcbuekuuS+izE6XHJcblxyXG7ovpPlhaU6IHBhdHRlcm4gPSBcImFiYmFcIiwgc3RyID0gXCJkb2cgY2F0IGNhdCBkb2dcIlxyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6cGF0dGVybiA9IFwiYWJiYVwiLCBzdHIgPSBcImRvZyBjYXQgY2F0IGZpc2hcIlxyXG7ovpPlh7o6IGZhbHNlXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiBwYXR0ZXJuID0gXCJhYWFhXCIsIHN0ciA9IFwiZG9nIGNhdCBjYXQgZG9nXCJcclxu6L6T5Ye6OiBmYWxzZVxyXG7npLrkvosgNDpcclxuXHJcbui+k+WFpTogcGF0dGVybiA9IFwiYWJiYVwiLCBzdHIgPSBcImRvZyBkb2cgZG9nIGRvZ1wiXHJcbui+k+WHujogZmFsc2Vcclxu6K+05piOOlxyXG7kvaDlj6/ku6XlgYforr4gcGF0dGVybiDlj6rljIXlkKvlsI/lhpnlrZfmr43vvIwgc3RyIOWMheWQq+S6hueUseWNleS4quepuuagvOWIhumalOeahOWwj+WGmeWtl+avjeOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgd29yZFBhdHRlcm4gPSBmdW5jdGlvbiAocGF0dGVybjogc3RyaW5nLCBzdHI6IHN0cmluZykge1xyXG5cclxuICAgIGNvbnN0IHN0cl9hcnIgPSBzdHIuc3BsaXQoXCIgXCIpO1xyXG4gICAgaWYgKHN0cl9hcnIubGVuZ3RoICE9PSBwYXR0ZXJuLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgY29uc3QgcGF0dGVybl9hcnIgPSBwYXR0ZXJuLnNwbGl0KFwiXCIpO1xyXG4gICAgLy8g55So5LqO5pig5bCEIHBhdHRlciDlkowgc3RyXHJcbiAgICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgIC8vIOeUqOS6jiDliKTmlq0g5pyJ5LqG5pig5bCE5LqGXHJcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY2hhciA9IHBhdHRlcm5baV07XHJcbiAgICAgICAgaWYgKG1hcFtjdXJyZW50X2NoYXJdKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXBbY3VycmVudF9jaGFyXSAhPT0gc3RyX2FycltpXSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzZXQuaGFzKHN0cl9hcnJbaV0pKSByZXR1cm4gZmFsc2U7IC8vIOmHjeWkjeaYoOWwhFxyXG4gICAgICAgICAgICBtYXBbY3VycmVudF9jaGFyXSA9IHN0cl9hcnJbaV07XHJcbiAgICAgICAgICAgIHNldC5hZGQoc3RyX2FycltpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbCh3b3JkUGF0dGVybihcImFiYmFcIiwgXCJkb2cgY2F0IGNhdCBkb2dcIiksIHRydWUpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwod29yZFBhdHRlcm4oXCJhYmJhXCIsIFwiZG9nIGNhdCBjYXQgZG9wXCIpLCBmYWxzZSk7XHJcbiJdfQ==