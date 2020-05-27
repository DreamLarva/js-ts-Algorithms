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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkwLuWNleivjeaooeW8jy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjkwLuWNleivjeaooeW8jy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLE9BQWUsRUFBRSxHQUFXO0lBQ3RELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDcEQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxvQkFBb0I7SUFDcEIsTUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztJQUMxQyxjQUFjO0lBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDckIsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLE9BQU87WUFDOUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA56eNIHBhdHRlcm4o5qih5byPKSDlkozkuIDkuKrlrZfnrKbkuLIgc3RyIO+8jOWIpOaWrSBzdHIg5piv5ZCm6YG15b6q55u45ZCM55qE5qih5byP44CCXHJcblxyXG7ov5nph4znmoTpgbXlvqrmjIflrozlhajljLnphY3vvIzkvovlpoLvvIwgcGF0dGVybiDph4znmoTmr4/kuKrlrZfmr43lkozlrZfnrKbkuLIgc3RyIOS4reeahOavj+S4qumdnuepuuWNleivjeS5i+mXtOWtmOWcqOedgOWPjOWQkei/nuaOpeeahOWvueW6lOaooeW8j+OAglxyXG5cclxu56S65L6LMTpcclxuXHJcbui+k+WFpTogcGF0dGVybiA9IFwiYWJiYVwiLCBzdHIgPSBcImRvZyBjYXQgY2F0IGRvZ1wiXHJcbui+k+WHujogdHJ1ZVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTpwYXR0ZXJuID0gXCJhYmJhXCIsIHN0ciA9IFwiZG9nIGNhdCBjYXQgZmlzaFwiXHJcbui+k+WHujogZmFsc2Vcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IHBhdHRlcm4gPSBcImFhYWFcIiwgc3RyID0gXCJkb2cgY2F0IGNhdCBkb2dcIlxyXG7ovpPlh7o6IGZhbHNlXHJcbuekuuS+iyA0OlxyXG5cclxu6L6T5YWlOiBwYXR0ZXJuID0gXCJhYmJhXCIsIHN0ciA9IFwiZG9nIGRvZyBkb2cgZG9nXCJcclxu6L6T5Ye6OiBmYWxzZVxyXG7or7TmmI46XHJcbuS9oOWPr+S7peWBh+iuviBwYXR0ZXJuIOWPquWMheWQq+Wwj+WGmeWtl+avje+8jCBzdHIg5YyF5ZCr5LqG55Sx5Y2V5Liq56m65qC85YiG6ZqU55qE5bCP5YaZ5a2X5q+N44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbnZhciB3b3JkUGF0dGVybiA9IGZ1bmN0aW9uIChwYXR0ZXJuOiBzdHJpbmcsIHN0cjogc3RyaW5nKSB7XHJcbiAgY29uc3Qgc3RyX2FyciA9IHN0ci5zcGxpdChcIiBcIik7XHJcbiAgaWYgKHN0cl9hcnIubGVuZ3RoICE9PSBwYXR0ZXJuLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHBhdHRlcm5fYXJyID0gcGF0dGVybi5zcGxpdChcIlwiKTtcclxuICAvLyDnlKjkuo7mmKDlsIQgcGF0dGVyIOWSjCBzdHJcclxuICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAvLyDnlKjkuo4g5Yik5patIOacieS6huaYoOWwhOS6hlxyXG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VycmVudF9jaGFyID0gcGF0dGVybltpXTtcclxuICAgIGlmIChtYXBbY3VycmVudF9jaGFyXSkge1xyXG4gICAgICBpZiAobWFwW2N1cnJlbnRfY2hhcl0gIT09IHN0cl9hcnJbaV0pIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChzZXQuaGFzKHN0cl9hcnJbaV0pKSByZXR1cm4gZmFsc2U7IC8vIOmHjeWkjeaYoOWwhFxyXG4gICAgICBtYXBbY3VycmVudF9jaGFyXSA9IHN0cl9hcnJbaV07XHJcbiAgICAgIHNldC5hZGQoc3RyX2FycltpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKHdvcmRQYXR0ZXJuKFwiYWJiYVwiLCBcImRvZyBjYXQgY2F0IGRvZ1wiKSwgdHJ1ZSk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbCh3b3JkUGF0dGVybihcImFiYmFcIiwgXCJkb2cgY2F0IGNhdCBkb3BcIiksIGZhbHNlKTtcclxuIl19