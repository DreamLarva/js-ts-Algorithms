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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA1LuWQjOaehOWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA1LuWQjOaehOWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFCRTtBQUVGOzs7O0dBSUc7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBSTdDLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQyxDQUFDLGVBQWU7SUFDcEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQjtJQUN6QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNmLHlCQUF5QjtZQUN6QixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQixTQUFTO1NBQ1o7UUFFRCxtQkFBbUI7UUFDbkIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssT0FBTztZQUFFLE9BQU8sS0FBSyxDQUFDO0tBQzlDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRCxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMscUNBQXFDLEVBQUUscUNBQXFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4pOS4quWtl+espuS4siBzIOWSjCB077yM5Yik5pat5a6D5Lus5piv5ZCm5piv5ZCM5p6E55qE44CCXHJcblxyXG7lpoLmnpwgcyDkuK3nmoTlrZfnrKblj6/ku6Xooqvmm7/mjaLlvpfliLAgdCDvvIzpgqPkuYjov5nkuKTkuKrlrZfnrKbkuLLmmK/lkIzmnoTnmoTjgIJcclxuXHJcbuaJgOacieWHuueOsOeahOWtl+espumDveW/hemhu+eUqOWPpuS4gOS4quWtl+espuabv+aNou+8jOWQjOaXtuS/neeVmeWtl+espueahOmhuuW6j+OAguS4pOS4quWtl+espuS4jeiDveaYoOWwhOWIsOWQjOS4gOS4quWtl+espuS4iu+8jOS9huWtl+espuWPr+S7peaYoOWwhOiHquW3seacrOi6q+OAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IHMgPSBcImVnZ1wiLCB0ID0gXCJhZGRcIlxyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IHMgPSBcImZvb1wiLCB0ID0gXCJiYXJcIlxyXG7ovpPlh7o6IGZhbHNlXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiBzID0gXCJwYXBlclwiLCB0ID0gXCJ0aXRsZVwiXHJcbui+k+WHujogdHJ1ZVxyXG7or7TmmI46XHJcbuS9oOWPr+S7peWBh+iuviBzIOWSjCB0IOWFt+acieebuOWQjOeahOmVv+W6puOAglxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNJc29tb3JwaGljID0gZnVuY3Rpb24gKHM6IHN0cmluZywgdDogc3RyaW5nKSB7XHJcbiAgICB0eXBlIG1hcCA9IHtcclxuICAgICAgICBbbGFiZWw6IHN0cmluZ106IHN0cmluZ1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFwOiBtYXAgPSB7fTsgLy8g5a2Y5pS+IHMg5pig5bCEIHQg55qE5YC8XHJcbiAgICBjb25zdCB0X3NldCA9IG5ldyBTZXQoKTsgLy8g5a2Y5pS+IOW3sue7j+aYoOWwhOS6hueahCB05a2X56ymXHJcbiAgICBjb25zdCBzX2FyciA9IEFycmF5LmZyb20ocyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc192YWx1ZSA9IHNfYXJyW2ldO1xyXG4gICAgICAgIGNvbnN0IHRfdmFsdWUgPSB0W2ldO1xyXG4gICAgICAgIGlmICghbWFwW3NfdmFsdWVdKSB7XHJcbiAgICAgICAgICAgIC8vIOacieS4pOS4quS4jeWQjOeahCBzIOWtl+espiDmmKDlsIQg55u45ZCM55qEIHTlrZfnrKZcclxuICAgICAgICAgICAgaWYgKHRfc2V0Lmhhcyh0X3ZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBtYXBbc192YWx1ZV0gPSB0X3ZhbHVlO1xyXG4gICAgICAgICAgICB0X3NldC5hZGQodF92YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5ZCM5L2N572u55qEIHMsdOWtl+espiDmmKDlsIQg5LiN5ZCMXHJcbiAgICAgICAgaWYgKG1hcFtzX3ZhbHVlXSAhPT0gdF92YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChpc0lzb21vcnBoaWMoXCJlZ2dcIiwgXCJhZGRcIiksIHRydWUpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNJc29tb3JwaGljKFwiYWJcIiwgXCJhYVwiKSwgZmFsc2UpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNJc29tb3JwaGljKFwicXdlcnR5dWlvcFtdYXNkZmdoamtsOydcXFxcenhjdmJubSwuL1wiLCBcIicsLnB5ZmdjcmwvPWFvZXVpZGh0bnMtXFxcXDtxamt4Ym13dnpcIiksIHRydWUpO1xyXG4iXX0=