"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.


注意事项：您可以假定该字符串只包含小写字母。
* */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // 记录次数
    const map = {};
    for (const char of s) {
        map[char] ? map[char]++ : (map[char] = 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1)
            return i;
    }
    return -1;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(firstUniqChar("leetcode"), 0);
assert_1.default.strictEqual(firstUniqChar("loveleetcode"), 2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg3LuWtl+espuS4suS4reeahOesrOS4gOS4quWUr+S4gOWtl+espi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg3LuWtl+espuS4suS4reeahOesrOS4gOS4quWUr+S4gOWtl+espi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDckMsT0FBTztJQUNQLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFFMUMsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7S0FDL0I7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBQ0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrlrZfnrKbkuLLvvIzmib7liLDlroPnmoTnrKzkuIDkuKrkuI3ph43lpI3nmoTlrZfnrKbvvIzlubbov5Tlm57lroPnmoTntKLlvJXjgILlpoLmnpzkuI3lrZjlnKjvvIzliJnov5Tlm54gLTHjgIJcclxuXHJcbuahiOS+izpcclxuXHJcbnMgPSBcImxlZXRjb2RlXCJcclxu6L+U5ZueIDAuXHJcblxyXG5zID0gXCJsb3ZlbGVldGNvZGVcIixcclxu6L+U5ZueIDIuXHJcblxyXG5cclxu5rOo5oSP5LqL6aG577ya5oKo5Y+v5Lul5YGH5a6a6K+l5a2X56ym5Liy5Y+q5YyF5ZCr5bCP5YaZ5a2X5q+N44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBmaXJzdFVuaXFDaGFyID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gIC8vIOiusOW9leasoeaVsFxyXG4gIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICBmb3IgKGNvbnN0IGNoYXIgb2Ygcykge1xyXG4gICAgbWFwW2NoYXJdID8gbWFwW2NoYXJdKysgOiAobWFwW2NoYXJdID0gMSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChtYXBbc1tpXV0gPT09IDEpIHJldHVybiBpO1xyXG4gIH1cclxuICByZXR1cm4gLTE7XHJcbn07XHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGZpcnN0VW5pcUNoYXIoXCJsZWV0Y29kZVwiKSwgMCk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChmaXJzdFVuaXFDaGFyKFwibG92ZWxlZXRjb2RlXCIpLCAyKTtcclxuIl19