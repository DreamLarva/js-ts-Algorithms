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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQyLuacieaViOeahOWtl+avjeW8guS9jeivjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjQyLuacieaViOeahOWtl+avjeW8guS9jeivjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0o7O0tBRUs7QUFDTDs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUM1Qyx1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUssQ0FBQztJQUMxRSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNoRCxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDeEM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLFNBQVMsWUFBWSxDQUFDLEdBQVc7SUFDL0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFZLEVBQUUsRUFBRTtRQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBK0IsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4pOS4quWtl+espuS4siBzIOWSjCB0IO+8jOe8luWGmeS4gOS4quWHveaVsOadpeWIpOaWrSB0IOaYr+WQpuaYryBzIOeahOS4gOS4quWtl+avjeW8guS9jeivjeOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBzID0gXCJhbmFncmFtXCIsIHQgPSBcIm5hZ2FyYW1cIlxu6L6T5Ye6OiB0cnVlXG7npLrkvosgMjpcblxu6L6T5YWlOiBzID0gXCJyYXRcIiwgdCA9IFwiY2FyXCJcbui+k+WHujogZmFsc2VcbuivtOaYjjpcbuS9oOWPr+S7peWBh+iuvuWtl+espuS4suWPquWMheWQq+Wwj+WGmeWtl+avjeOAglxuXG7ov5vpmLY6XG7lpoLmnpzovpPlhaXlrZfnrKbkuLLljIXlkKsgdW5pY29kZSDlrZfnrKbmgI7kuYjlip7vvJ/kvaDog73lkKbosIPmlbTkvaDnmoTop6Pms5XmnaXlupTlr7nov5nnp43mg4XlhrXvvJ9cbiogKi9cbi8qKlxuICog5a2X5q+N5byC5L2N6K+NOuWMheWQq+ebuOWQjOaVsOmHj+eahOebuOWQjOexu+Wei+eahOWtl+avjSDlj6rmmK/mrKHluo/kuI3lkIxcbiAqICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcGFyYW0ge3N0cmluZ30gdFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzQW5hZ3JhbSA9IGZ1bmN0aW9uIChzOiBzdHJpbmcsIHQ6IHN0cmluZykge1xuICAvLyDlpoLmnpzlrZjmlbDnu4Qg5bCx5Yid5aeL5YyWIDI25LiqMCDkuYvlkI7lr7nmr5RcbiAgLy8g5a2Y5ZOI5biM6KGoIOWPr+S7peWtmOS7u+S9leWtl+espiDkuI3ov4flr7nmr5TnmoTml7blgJnpnIDopoHlr7nmr5Qga2V5IOeahOaVsOmHj+aYr+WQpuS4gOiHtFxuICBjb25zdCBtYXBfcyA9IGdldENoYXJDb3VudChzKTtcbiAgY29uc3QgbWFwX3QgPSBnZXRDaGFyQ291bnQodCk7XG4gIGlmIChPYmplY3Qua2V5cyhtYXBfcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhtYXBfdCkubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1hcF9zKSkge1xuICAgIGlmIChtYXBfdFtrZXldICE9PSB2YWx1ZSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gZ2V0Q2hhckNvdW50KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHN0cikucmVkdWNlKChyZXMsIGNoYXI6IHN0cmluZykgPT4ge1xuICAgIHJlc1tjaGFyXSA9IHJlc1tjaGFyXSA/IHJlc1tjaGFyXSArIDEgOiAxO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9IGFzIHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0Lm9rKGlzQW5hZ3JhbShcImFuYWdyYW1cIiwgXCJuYWdhcmFtXCIpKTtcbiJdfQ==