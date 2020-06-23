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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkwLuWNleivjeaooeW8jy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjkwLuWNleivjeaooeW8jy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLE9BQWUsRUFBRSxHQUFXO0lBQ3RELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDcEQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxvQkFBb0I7SUFDcEIsTUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztJQUMxQyxjQUFjO0lBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDckIsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLE9BQU87WUFDOUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOenjSBwYXR0ZXJuKOaooeW8jykg5ZKM5LiA5Liq5a2X56ym5LiyIHN0ciDvvIzliKTmlq0gc3RyIOaYr+WQpumBteW+quebuOWQjOeahOaooeW8j+OAglxuXG7ov5nph4znmoTpgbXlvqrmjIflrozlhajljLnphY3vvIzkvovlpoLvvIwgcGF0dGVybiDph4znmoTmr4/kuKrlrZfmr43lkozlrZfnrKbkuLIgc3RyIOS4reeahOavj+S4qumdnuepuuWNleivjeS5i+mXtOWtmOWcqOedgOWPjOWQkei/nuaOpeeahOWvueW6lOaooeW8j+OAglxuXG7npLrkvosxOlxuXG7ovpPlhaU6IHBhdHRlcm4gPSBcImFiYmFcIiwgc3RyID0gXCJkb2cgY2F0IGNhdCBkb2dcIlxu6L6T5Ye6OiB0cnVlXG7npLrkvosgMjpcblxu6L6T5YWlOnBhdHRlcm4gPSBcImFiYmFcIiwgc3RyID0gXCJkb2cgY2F0IGNhdCBmaXNoXCJcbui+k+WHujogZmFsc2VcbuekuuS+iyAzOlxuXG7ovpPlhaU6IHBhdHRlcm4gPSBcImFhYWFcIiwgc3RyID0gXCJkb2cgY2F0IGNhdCBkb2dcIlxu6L6T5Ye6OiBmYWxzZVxu56S65L6LIDQ6XG5cbui+k+WFpTogcGF0dGVybiA9IFwiYWJiYVwiLCBzdHIgPSBcImRvZyBkb2cgZG9nIGRvZ1wiXG7ovpPlh7o6IGZhbHNlXG7or7TmmI46XG7kvaDlj6/ku6XlgYforr4gcGF0dGVybiDlj6rljIXlkKvlsI/lhpnlrZfmr43vvIwgc3RyIOWMheWQq+S6hueUseWNleS4quepuuagvOWIhumalOeahOWwj+WGmeWtl+avjeOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIHdvcmRQYXR0ZXJuID0gZnVuY3Rpb24gKHBhdHRlcm46IHN0cmluZywgc3RyOiBzdHJpbmcpIHtcbiAgY29uc3Qgc3RyX2FyciA9IHN0ci5zcGxpdChcIiBcIik7XG4gIGlmIChzdHJfYXJyLmxlbmd0aCAhPT0gcGF0dGVybi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcGF0dGVybl9hcnIgPSBwYXR0ZXJuLnNwbGl0KFwiXCIpO1xuICAvLyDnlKjkuo7mmKDlsIQgcGF0dGVyIOWSjCBzdHJcbiAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIC8vIOeUqOS6jiDliKTmlq0g5pyJ5LqG5pig5bCE5LqGXG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm5fYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudF9jaGFyID0gcGF0dGVybltpXTtcbiAgICBpZiAobWFwW2N1cnJlbnRfY2hhcl0pIHtcbiAgICAgIGlmIChtYXBbY3VycmVudF9jaGFyXSAhPT0gc3RyX2FycltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2V0LmhhcyhzdHJfYXJyW2ldKSkgcmV0dXJuIGZhbHNlOyAvLyDph43lpI3mmKDlsIRcbiAgICAgIG1hcFtjdXJyZW50X2NoYXJdID0gc3RyX2FycltpXTtcbiAgICAgIHNldC5hZGQoc3RyX2FycltpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKHdvcmRQYXR0ZXJuKFwiYWJiYVwiLCBcImRvZyBjYXQgY2F0IGRvZ1wiKSwgdHJ1ZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwod29yZFBhdHRlcm4oXCJhYmJhXCIsIFwiZG9nIGNhdCBjYXQgZG9wXCIpLCBmYWxzZSk7XG4iXX0=