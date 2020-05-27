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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA1LuWQjOaehOWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA1LuWQjOaehOWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFCRTtBQUVGOzs7O0dBSUc7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBSS9DLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQyxDQUFDLGVBQWU7SUFDcEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQjtJQUN6QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQix5QkFBeUI7WUFDekIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztZQUNyQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkIsU0FBUztTQUNWO1FBRUQsbUJBQW1CO1FBQ25CLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE9BQU87WUFBRSxPQUFPLEtBQUssQ0FBQztLQUM1QztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRCxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FDaEIsWUFBWSxDQUNWLHFDQUFxQyxFQUNyQyxxQ0FBcUMsQ0FDdEMsRUFDRCxJQUFJLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4pOS4quWtl+espuS4siBzIOWSjCB077yM5Yik5pat5a6D5Lus5piv5ZCm5piv5ZCM5p6E55qE44CCXHJcblxyXG7lpoLmnpwgcyDkuK3nmoTlrZfnrKblj6/ku6Xooqvmm7/mjaLlvpfliLAgdCDvvIzpgqPkuYjov5nkuKTkuKrlrZfnrKbkuLLmmK/lkIzmnoTnmoTjgIJcclxuXHJcbuaJgOacieWHuueOsOeahOWtl+espumDveW/hemhu+eUqOWPpuS4gOS4quWtl+espuabv+aNou+8jOWQjOaXtuS/neeVmeWtl+espueahOmhuuW6j+OAguS4pOS4quWtl+espuS4jeiDveaYoOWwhOWIsOWQjOS4gOS4quWtl+espuS4iu+8jOS9huWtl+espuWPr+S7peaYoOWwhOiHquW3seacrOi6q+OAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IHMgPSBcImVnZ1wiLCB0ID0gXCJhZGRcIlxyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IHMgPSBcImZvb1wiLCB0ID0gXCJiYXJcIlxyXG7ovpPlh7o6IGZhbHNlXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiBzID0gXCJwYXBlclwiLCB0ID0gXCJ0aXRsZVwiXHJcbui+k+WHujogdHJ1ZVxyXG7or7TmmI46XHJcbuS9oOWPr+S7peWBh+iuviBzIOWSjCB0IOWFt+acieebuOWQjOeahOmVv+W6puOAglxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNJc29tb3JwaGljID0gZnVuY3Rpb24gKHM6IHN0cmluZywgdDogc3RyaW5nKSB7XHJcbiAgdHlwZSBtYXAgPSB7XHJcbiAgICBbbGFiZWw6IHN0cmluZ106IHN0cmluZztcclxuICB9O1xyXG4gIGNvbnN0IG1hcDogbWFwID0ge307IC8vIOWtmOaUviBzIOaYoOWwhCB0IOeahOWAvFxyXG4gIGNvbnN0IHRfc2V0ID0gbmV3IFNldCgpOyAvLyDlrZjmlL4g5bey57uP5pig5bCE5LqG55qEIHTlrZfnrKZcclxuICBjb25zdCBzX2FyciA9IEFycmF5LmZyb20ocyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgc192YWx1ZSA9IHNfYXJyW2ldO1xyXG4gICAgY29uc3QgdF92YWx1ZSA9IHRbaV07XHJcbiAgICBpZiAoIW1hcFtzX3ZhbHVlXSkge1xyXG4gICAgICAvLyDmnInkuKTkuKrkuI3lkIznmoQgcyDlrZfnrKYg5pig5bCEIOebuOWQjOeahCB05a2X56ymXHJcbiAgICAgIGlmICh0X3NldC5oYXModF92YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgbWFwW3NfdmFsdWVdID0gdF92YWx1ZTtcclxuICAgICAgdF9zZXQuYWRkKHRfdmFsdWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlkIzkvY3nva7nmoQgcyx05a2X56ymIOaYoOWwhCDkuI3lkIxcclxuICAgIGlmIChtYXBbc192YWx1ZV0gIT09IHRfdmFsdWUpIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChpc0lzb21vcnBoaWMoXCJlZ2dcIiwgXCJhZGRcIiksIHRydWUpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNJc29tb3JwaGljKFwiYWJcIiwgXCJhYVwiKSwgZmFsc2UpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgaXNJc29tb3JwaGljKFxyXG4gICAgXCJxd2VydHl1aW9wW11hc2RmZ2hqa2w7J1xcXFx6eGN2Ym5tLC4vXCIsXHJcbiAgICBcIicsLnB5ZmdjcmwvPWFvZXVpZGh0bnMtXFxcXDtxamt4Ym13dnpcIlxyXG4gICksXHJcbiAgdHJ1ZVxyXG4pO1xyXG4iXX0=