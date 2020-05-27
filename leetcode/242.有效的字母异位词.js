"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
* */
/**
 * 字母异位词:包含相同数量的相同类型的字母 只是次序不同
 * */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 如果存数组 就初始化 26个0 之后对比
    // 存哈希表 可以存任何字符 不过对比的时候需要对比 key 的数量是否一致
    const map_s = getCharCount(s);
    const map_t = getCharCount(t);
    if (Object.keys(map_s).length !== Object.keys(map_t).length)
        return false;
    for (const [key, value] of Object.entries(map_s)) {
        if (map_t[key] !== value)
            return false;
    }
    return true;
};
function getCharCount(str) {
    return Array.from(str).reduce((res, char) => {
        res[char] = res[char] ? res[char] + 1 : 1;
        return res;
    }, {});
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.ok(isAnagram("anagram", "nagaram"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQyLuacieaViOeahOWtl+avjeW8guS9jeivjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjQyLuacieaViOeahOWtl+avjeW8guS9jeivjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0o7O0tBRUs7QUFDTDs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUM1Qyx1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUssQ0FBQztJQUMxRSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNoRCxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDeEM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLFNBQVMsWUFBWSxDQUFDLEdBQVc7SUFDL0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFZLEVBQUUsRUFBRTtRQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBK0IsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5Lik5Liq5a2X56ym5LiyIHMg5ZKMIHQg77yM57yW5YaZ5LiA5Liq5Ye95pWw5p2l5Yik5patIHQg5piv5ZCm5pivIHMg55qE5LiA5Liq5a2X5q+N5byC5L2N6K+N44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogcyA9IFwiYW5hZ3JhbVwiLCB0ID0gXCJuYWdhcmFtXCJcclxu6L6T5Ye6OiB0cnVlXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBzID0gXCJyYXRcIiwgdCA9IFwiY2FyXCJcclxu6L6T5Ye6OiBmYWxzZVxyXG7or7TmmI46XHJcbuS9oOWPr+S7peWBh+iuvuWtl+espuS4suWPquWMheWQq+Wwj+WGmeWtl+avjeOAglxyXG5cclxu6L+b6Zi2OlxyXG7lpoLmnpzovpPlhaXlrZfnrKbkuLLljIXlkKsgdW5pY29kZSDlrZfnrKbmgI7kuYjlip7vvJ/kvaDog73lkKbosIPmlbTkvaDnmoTop6Pms5XmnaXlupTlr7nov5nnp43mg4XlhrXvvJ9cclxuKiAqL1xyXG4vKipcclxuICog5a2X5q+N5byC5L2N6K+NOuWMheWQq+ebuOWQjOaVsOmHj+eahOebuOWQjOexu+Wei+eahOWtl+avjSDlj6rmmK/mrKHluo/kuI3lkIxcclxuICogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNBbmFncmFtID0gZnVuY3Rpb24gKHM6IHN0cmluZywgdDogc3RyaW5nKSB7XHJcbiAgLy8g5aaC5p6c5a2Y5pWw57uEIOWwseWIneWni+WMliAyNuS4qjAg5LmL5ZCO5a+55q+UXHJcbiAgLy8g5a2Y5ZOI5biM6KGoIOWPr+S7peWtmOS7u+S9leWtl+espiDkuI3ov4flr7nmr5TnmoTml7blgJnpnIDopoHlr7nmr5Qga2V5IOeahOaVsOmHj+aYr+WQpuS4gOiHtFxyXG4gIGNvbnN0IG1hcF9zID0gZ2V0Q2hhckNvdW50KHMpO1xyXG4gIGNvbnN0IG1hcF90ID0gZ2V0Q2hhckNvdW50KHQpO1xyXG4gIGlmIChPYmplY3Qua2V5cyhtYXBfcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhtYXBfdCkubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWFwX3MpKSB7XHJcbiAgICBpZiAobWFwX3Rba2V5XSAhPT0gdmFsdWUpIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRDaGFyQ291bnQoc3RyOiBzdHJpbmcpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShzdHIpLnJlZHVjZSgocmVzLCBjaGFyOiBzdHJpbmcpID0+IHtcclxuICAgIHJlc1tjaGFyXSA9IHJlc1tjaGFyXSA/IHJlc1tjaGFyXSArIDEgOiAxO1xyXG4gICAgcmV0dXJuIHJlcztcclxuICB9LCB7fSBhcyB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTtcclxufVxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQub2soaXNBbmFncmFtKFwiYW5hZ3JhbVwiLCBcIm5hZ2FyYW1cIikpO1xyXG4iXX0=