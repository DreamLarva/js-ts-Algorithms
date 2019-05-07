"use strict";
/*
给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:

输入: s = "egg", t = "add"
输出: true
示例 2:

输入: s = "foo", t = "bar"
输出: false
示例 3:

输入: s = "paper", t = "title"
输出: true
说明:
你可以假设 s 和 t 具有相同的长度。
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const map = {}; // 存放 s 映射 t 的值
    const t_set = new Set(); // 存放 已经映射了的 t字符
    const s_arr = Array.from(s);
    for (let i = 0; i < s_arr.length; i++) {
        const s_value = s_arr[i];
        const t_value = t[i];
        if (!map[s_value]) {
            // 有两个不同的 s 字符 映射 相同的 t字符
            if (t_set.has(t_value))
                return false;
            map[s_value] = t_value;
            t_set.add(t_value);
            continue;
        }
        // 同位置的 s,t字符 映射 不同
        if (map[s_value] !== t_value)
            return false;
    }
    return true;
};
const assert = require("assert");
assert.strictEqual(isIsomorphic("egg", "add"), true);
assert.strictEqual(isIsomorphic("ab", "aa"), false);
assert.strictEqual(isIsomorphic("qwertyuiop[]asdfghjkl;'\\zxcvbnm,./", "',.pyfgcrl/=aoeuidhtns-\\;qjkxbmwvz"), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA1LuWQjOaehOWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA1LuWQjOaehOWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFCRTs7QUFFRjs7OztHQUlHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUk3QyxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUMsQ0FBQyxlQUFlO0lBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0I7SUFDekMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDZix5QkFBeUI7WUFDekIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztZQUNyQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkIsU0FBUztTQUNaO1FBRUQsbUJBQW1CO1FBQ25CLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE9BQU87WUFBRSxPQUFPLEtBQUssQ0FBQztLQUM5QztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUNGLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLHFDQUFxQyxFQUFFLHFDQUFxQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuKTkuKrlrZfnrKbkuLIgcyDlkowgdO+8jOWIpOaWreWug+S7rOaYr+WQpuaYr+WQjOaehOeahOOAglxyXG5cclxu5aaC5p6cIHMg5Lit55qE5a2X56ym5Y+v5Lul6KKr5pu/5o2i5b6X5YiwIHQg77yM6YKj5LmI6L+Z5Lik5Liq5a2X56ym5Liy5piv5ZCM5p6E55qE44CCXHJcblxyXG7miYDmnInlh7rnjrDnmoTlrZfnrKbpg73lv4XpobvnlKjlj6bkuIDkuKrlrZfnrKbmm7/mjaLvvIzlkIzml7bkv53nlZnlrZfnrKbnmoTpobrluo/jgILkuKTkuKrlrZfnrKbkuI3og73mmKDlsITliLDlkIzkuIDkuKrlrZfnrKbkuIrvvIzkvYblrZfnrKblj6/ku6XmmKDlsIToh6rlt7HmnKzouqvjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBzID0gXCJlZ2dcIiwgdCA9IFwiYWRkXCJcclxu6L6T5Ye6OiB0cnVlXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBzID0gXCJmb29cIiwgdCA9IFwiYmFyXCJcclxu6L6T5Ye6OiBmYWxzZVxyXG7npLrkvosgMzpcclxuXHJcbui+k+WFpTogcyA9IFwicGFwZXJcIiwgdCA9IFwidGl0bGVcIlxyXG7ovpPlh7o6IHRydWVcclxu6K+05piOOlxyXG7kvaDlj6/ku6XlgYforr4gcyDlkowgdCDlhbfmnInnm7jlkIznmoTplb/luqbjgIJcclxuKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gdFxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzSXNvbW9ycGhpYyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcsIHQ6IHN0cmluZykge1xyXG4gICAgdHlwZSBtYXAgPSB7XHJcbiAgICAgICAgW2xhYmVsOiBzdHJpbmddOiBzdHJpbmdcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcDogbWFwID0ge307IC8vIOWtmOaUviBzIOaYoOWwhCB0IOeahOWAvFxyXG4gICAgY29uc3QgdF9zZXQgPSBuZXcgU2V0KCk7IC8vIOWtmOaUviDlt7Lnu4/mmKDlsITkuobnmoQgdOWtl+esplxyXG4gICAgY29uc3Qgc19hcnIgPSBBcnJheS5mcm9tKHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNfdmFsdWUgPSBzX2FycltpXTtcclxuICAgICAgICBjb25zdCB0X3ZhbHVlID0gdFtpXTtcclxuICAgICAgICBpZiAoIW1hcFtzX3ZhbHVlXSkge1xyXG4gICAgICAgICAgICAvLyDmnInkuKTkuKrkuI3lkIznmoQgcyDlrZfnrKYg5pig5bCEIOebuOWQjOeahCB05a2X56ymXHJcbiAgICAgICAgICAgIGlmICh0X3NldC5oYXModF92YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgbWFwW3NfdmFsdWVdID0gdF92YWx1ZTtcclxuICAgICAgICAgICAgdF9zZXQuYWRkKHRfdmFsdWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWQjOS9jee9rueahCBzLHTlrZfnrKYg5pig5bCEIOS4jeWQjFxyXG4gICAgICAgIGlmIChtYXBbc192YWx1ZV0gIT09IHRfdmFsdWUpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNJc29tb3JwaGljKFwiZWdnXCIsIFwiYWRkXCIpLCB0cnVlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzSXNvbW9ycGhpYyhcImFiXCIsIFwiYWFcIiksIGZhbHNlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzSXNvbW9ycGhpYyhcInF3ZXJ0eXVpb3BbXWFzZGZnaGprbDsnXFxcXHp4Y3Zibm0sLi9cIiwgXCInLC5weWZnY3JsLz1hb2V1aWRodG5zLVxcXFw7cWpreGJtd3Z6XCIpLCB0cnVlKTtcclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=