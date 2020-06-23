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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg3LuWtl+espuS4suS4reeahOesrOS4gOS4quWUr+S4gOWtl+espi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg3LuWtl+espuS4suS4reeahOesrOS4gOS4quWUr+S4gOWtl+espi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDckMsT0FBTztJQUNQLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFFMUMsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7S0FDL0I7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBQ0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM5om+5Yiw5a6D55qE56ys5LiA5Liq5LiN6YeN5aSN55qE5a2X56ym77yM5bm26L+U5Zue5a6D55qE57Si5byV44CC5aaC5p6c5LiN5a2Y5Zyo77yM5YiZ6L+U5ZueIC0x44CCXG5cbuahiOS+izpcblxucyA9IFwibGVldGNvZGVcIlxu6L+U5ZueIDAuXG5cbnMgPSBcImxvdmVsZWV0Y29kZVwiLFxu6L+U5ZueIDIuXG5cblxu5rOo5oSP5LqL6aG577ya5oKo5Y+v5Lul5YGH5a6a6K+l5a2X56ym5Liy5Y+q5YyF5ZCr5bCP5YaZ5a2X5q+N44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBmaXJzdFVuaXFDaGFyID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICAvLyDorrDlvZXmrKHmlbBcbiAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5cbiAgZm9yIChjb25zdCBjaGFyIG9mIHMpIHtcbiAgICBtYXBbY2hhcl0gPyBtYXBbY2hhcl0rKyA6IChtYXBbY2hhcl0gPSAxKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtYXBbc1tpXV0gPT09IDEpIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07XG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGZpcnN0VW5pcUNoYXIoXCJsZWV0Y29kZVwiKSwgMCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZmlyc3RVbmlxQ2hhcihcImxvdmVsZWV0Y29kZVwiKSwgMik7XG4iXX0=